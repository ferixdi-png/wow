const SECTION_META=[
 {id:'control',label:'Управляющий слой',why:'Определяет, что делать с текстом, видео, изображением или их комбинацией, и устраняет противоречия между протоколами.',marker:'# FERIXDI VIDEO FACTORY v40.0'},
 {id:'text-core',label:'Текст → новая сцена',why:'Полный режиссёрский движок для превращения шутки или диалога в Frame 0, видео, аудио и публикацию.',marker:'# MODULE A. TEXT MODE CORE'},
 {id:'video-core',label:'Видео → пересоздание',why:'Режим восстанавливает механику присланного ролика вместо придумывания новой сцены.',marker:'# MODULE B. VIDEO RECREATION CORE'},
 {id:'characters',label:'Постоянные персонажи',why:'Фиксирует личности и роли без смешивания лиц, но позволяет менять одежду, локацию и действия.',marker:'# MODULE C. PERSISTENT CHARACTER PROTOCOL'},
 {id:'realism',label:'Реализм iPhone',why:'Неизменяемая константа заставляет итоговую сцену подчиняться физике реальной смартфонной съёмки.',marker:'# MODULE D. VERBATIM REALISM BLOCK'},
 {id:'final',label:'Финальный контроль',why:'Последняя проверка не даёт забыть блок, оставить шаблон или выдать внутренний черновик.',marker:'# ЕДИНАЯ ФИНАЛЬНАЯ ДИРЕКТИВА v40.0'}
];
let MASTER_PROMPT=''; let SECTIONS=[];
const nav=document.getElementById('nav');
const views=[...document.querySelectorAll('.view')];
function openView(name){views.forEach(v=>v.classList.toggle('active',v.id==='view-'+name));document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===name));window.scrollTo({top:70,behavior:'smooth'})}
document.addEventListener('click',e=>{const v=e.target.closest('[data-view]');if(v)openView(v.dataset.view);const j=e.target.closest('[data-jump]');if(j)openView(j.dataset.jump)});
const examples={text:{title:'Пример: текстовая сцена',body:'MAIN_CHARACTER_01: «Ты опять поставил чайник без воды?»\nMAIN_CHARACTER_02: «Я проверял, насколько он верит в себя».\n\n(Локация: обычная кухня ранним утром)'},video:{title:'Пример: пересоздание видео',body:'[прикрепить исходный ролик]\n\nПересоздай механику максимально близко.\nИспользуй постоянных персонажей.\n(Камеру сохранить как в источнике)'},hybrid:{title:'Пример: видео + новый текст',body:'[прикрепить исходный ролик]\n\nЗамени озвучку дословно:\nMAIN_CHARACTER_01: «...».\nMAIN_CHARACTER_02: «...».\n\nЛокацию и движения сохрани как в видео.'},setup:{title:'Пример: закрепление персонажей',body:'[Image 1 — главный персонаж №1]\n[Image 2 — главный персонаж №2]\n[Image 3 — наблюдатель №3]\n\nЗакрепи постоянный состав для всей серии.'}};
function setMode(mode){document.querySelectorAll('.mode').forEach(m=>m.classList.toggle('selected',m.dataset.mode===mode));document.getElementById('modeTitle').textContent=examples[mode].title;document.getElementById('modeExample').textContent=examples[mode].body}
document.getElementById('modes').addEventListener('click',e=>{const m=e.target.closest('.mode');if(m)setMode(m.dataset.mode)});setMode('text');
async function loadPrompt(){
 const r=await fetch('master-prompt.txt',{cache:'no-store'});
 if(!r.ok) throw new Error('Не удалось загрузить мастер-промпт');
 MASTER_PROMPT=await r.text();
 const starts=SECTION_META.map(m=>MASTER_PROMPT.indexOf(m.marker));
 SECTIONS=SECTION_META.map((m,i)=>({id:m.id,label:m.label,why:m.why,text:MASTER_PROMPT.slice(starts[i],i+1<starts.length?starts[i+1]:MASTER_PROMPT.length).trim()}));
 renderPrompt();
}
function renderPrompt(){
const toc=document.getElementById('toc'),content=document.getElementById('promptContent');
const tip=document.getElementById('tip');
function specificWhy(line, fallback){
 const t=line.toLowerCase();
 const rules=[
  [/input router|mode text|mode video|mode hybrid|mode setup/,'Маршрутизация не даёт модели применять правила новой сцены к присланному видео или наоборот.'],
  [/scene contract/,'Единый контракт предотвращает расхождения между Frame 0, видео, аудио и публикацией.'],
  [/verbatim|дослов|word for word|dialogue integrity/,'Точный текст нужен для сохранения шутки, ритма, говорящих и липсинка.'],
  [/safe variant|safe-by-design|безопасн/,'Безопасная версия создаётся отдельно, чтобы фильтры не заставляли незаметно переписывать оригинал.'],
  [/frame 0|first_frame|starting frame/,'Качественный первый кадр фиксирует личности, руки, фон, свет и начатое действие до сложной анимации.'],
  [/mouth|губ|speaker|говорящ/,'Это защита от ghost lip-sync: молчащий персонаж не должен повторять чужую реплику губами.'],
  [/9\.0|10\.0|laughter|смех/,'Точное окно реакции освобождает место для панчлайна и не позволяет смеху перекрыть слова.'],
  [/локац|location/,'Локация должна объяснять происходящее, а не быть декоративным случайным фоном.'],
  [/observer|наблюдател/,'Наблюдатель добавляет реакционный слой, но не должен заранее раскрывать шутку или красть внимание.'],
  [/identity|идентич|reference image|референс/,'Разделение роли Frame 0 и identity references уменьшает смешивание лиц, поз и фона.'],
  [/prop|реквизит/,'Реестр предметов предотвращает телепортацию, дублирование и потерю контакта с руками.'],
  [/camera|камер/,'Поведение камеры выбирается по режиму: живой iPhone для новой сцены или точное сохранение источника.'],
  [/audio|звук|голос|microphone/,'Звук привязывается к реальной дистанции и акустике, чтобы речь не звучала как студийная накладка.'],
  [/realism|реалист|iphone|физик/,'Этот слой убирает кинематографическую стерильность и требует устойчивой реальной физики.'],
  [/quality|qc|проверь|test|контрол/,'Автопроверка заставляет модель исправить ошибки до выдачи, а не просто перечислить требования.'],
  [/не задавай|самостоятельно|автомат/,'Полуавтоматический режим экономит время: модель принимает режиссёрские решения там, где ответ можно вывести логически.'],
  [/не оставляй квадрат|no placeholders|заполн/,'Готовый пакет должен копироваться сразу, без ручного заполнения шаблонов.']
 ];
 for(const [r,w] of rules)if(r.test(t))return w;return fallback;
}
SECTIONS.forEach((s,i)=>{const b=document.createElement('button');b.className='toc-btn'+(i===0?' active':'');b.textContent=s.label;b.onclick=()=>document.getElementById('section-'+s.id).scrollIntoView({behavior:'smooth'});toc.appendChild(b);const sec=document.createElement('div');sec.className='prompt-section';sec.id='section-'+s.id;const h=document.createElement('div');h.className='prompt-section-head';h.textContent=s.label;sec.appendChild(h);s.text.split('\n').forEach(raw=>{const line=document.createElement('div');line.className='prompt-line';const span=document.createElement('span');span.textContent=raw||' ';line.appendChild(span);const why=specificWhy(raw,s.why);line.dataset.why=why;line.dataset.title=raw.trim().slice(0,80)||s.label;line.addEventListener('mouseenter',()=>{document.getElementById('explainTitle').textContent=line.dataset.title;document.getElementById('explainText').textContent=why;tip.textContent=why;tip.classList.add('show')});line.addEventListener('mousemove',ev=>{tip.style.left=Math.min(ev.clientX+18,window.innerWidth-380)+'px';tip.style.top=Math.min(ev.clientY+15,window.innerHeight-120)+'px'});line.addEventListener('mouseleave',()=>tip.classList.remove('show'));sec.appendChild(line)});content.appendChild(sec)});
document.getElementById('lineCount').textContent=MASTER_PROMPT.split('\n').length.toLocaleString('ru-RU');
const search=document.getElementById('search');
search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();document.querySelectorAll('.prompt-line').forEach(l=>{const ok=!q||l.textContent.toLowerCase().includes(q);l.classList.toggle('dim',!ok);l.classList.toggle('match',!!q&&ok)});document.querySelectorAll('.prompt-section').forEach(s=>{const visible=s.querySelector('.prompt-line:not(.dim)');s.style.display=visible?'':'none'})});
function toast(msg='Скопировано'){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1700)}
async function copyPrompt(){await navigator.clipboard.writeText(MASTER_PROMPT);toast('Мастер-промпт скопирован')}
document.getElementById('copyBtn').onclick=copyPrompt;document.getElementById('heroCopy').onclick=copyPrompt;
document.getElementById('downloadBtn').onclick=()=>{const blob=new Blob([MASTER_PROMPT],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='FERIXDI_VIDEO_FACTORY_v40_MASTER_PROMPT.txt';a.click();URL.revokeObjectURL(a.href);toast('TXT подготовлен')};
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.toc-btn').forEach((b,i)=>b.classList.toggle('active',SECTIONS[i].id===e.target.id.replace('section-','')))})},{rootMargin:'-25% 0px -65% 0px'});document.querySelectorAll('.prompt-section').forEach(s=>observer.observe(s));
}
loadPrompt().catch(err=>{document.getElementById('promptContent').textContent=err.message});