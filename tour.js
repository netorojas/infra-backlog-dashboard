/* ============================================================================
   Tour guiado — Backlog Infra LATAM v10
   Destaca cada parte da página, troca de aba sozinho e explica em 1–2 frases.
   Teclado: → próximo · ← voltar · Esc sai.
   ========================================================================= */
(function(){
  'use strict';
  if(!window.BL) return;
  var $=function(s){return document.querySelector(s)}, esc=BL.esc;
  var TXT={
    pt:{next:'Próximo',back:'Voltar',skip:'Sair',done:'Concluir',of:'de',ask:'Primeira vez aqui? Faça o tour guiado (2 min).',go:'▶ Começar tour',later:'Agora não'},
    es:{next:'Siguiente',back:'Atrás',skip:'Salir',done:'Terminar',of:'de',ask:'¿Primera vez aquí? Haz el tour guiado (2 min).',go:'▶ Empezar tour',later:'Ahora no'},
    en:{next:'Next',back:'Back',skip:'Exit',done:'Finish',of:'of',ask:'First time here? Take the guided tour (2 min).',go:'▶ Start tour',later:'Not now'}};
  /* [view, seletor, título pt/es/en, texto pt/es/en] */
  var STEPS=[
    ['board',null,{pt:'Bem-vindo ao Backlog Infra LATAM',es:'Bienvenido al Backlog Infra LATAM',en:'Welcome to the Infra LATAM backlog'},
      {pt:'Um painel que se atualiza sozinho todo dia útil: e-mail, Teams, agenda, Daily e SDP. Ninguém digita nada. Vamos ver as partes em 2 minutos.',
       es:'Un panel que se actualiza solo cada día hábil: correo, Teams, agenda, Daily y SDP. Nadie digita nada. Veamos las partes en 2 minutos.',
       en:'A board that updates itself every weekday: email, Teams, calendar, the Daily and SDP. Nobody types anything. Let’s see the parts in 2 minutes.'}],
    ['board','nav.main',{pt:'As abas',es:'Las pestañas',en:'The tabs'},
      {pt:'Quadro (o dia a dia), Service Desk N1, Relatórios, Daily, Assistente, Documentação e Status da automação.',
       es:'Tablero (el día a día), Service Desk N1, Reportes, Daily, Asistente, Documentación y Estado de la automatización.',
       en:'Board (day to day), Service Desk L1, Reports, Daily, Assistant, Docs and automation Status.'}],
    ['board','.srow',{pt:'Busca em tudo',es:'Búsqueda en todo',en:'Search everything'},
      {pt:'Digite nº de chamado, pessoa, fornecedor ou assunto. Atalho: tecla /. O termo fica destacado nos cartões.',
       es:'Escribe nº de ticket, persona, proveedor o asunto. Atajo: tecla /. El término queda resaltado.',
       en:'Type a ticket number, person, vendor or subject. Shortcut: the / key. Matches are highlighted.'}],
    ['board','.fcard .dims',{pt:'Filtros múltiplos',es:'Filtros múltiples',en:'Multi-select filters'},
      {pt:'Escolha a dimensão (Analista, País, Projeto…) e marque vários valores. Duplo clique = só aquele. Os números mostram quantos itens sobram.',
       es:'Elige la dimensión (Analista, País, Proyecto…) y marca varios valores. Doble clic = solo ese. Los números muestran cuántos quedan.',
       en:'Pick a dimension (Analyst, Country, Project…) and tick several values. Double-click = only that one. Counts show what is left.'}],
    ['board','.kpis',{pt:'Indicadores clicáveis',es:'Indicadores clicables',en:'Clickable KPIs'},
      {pt:'Cartão com funil filtra o quadro; com seta abre outra aba. Clique de novo para limpar.',
       es:'Tarjeta con embudo filtra el tablero; con flecha abre otra pestaña. Clic de nuevo para limpiar.',
       en:'A card with a funnel filters the board; with an arrow it opens another tab. Click again to clear.'}],
    ['board','.bsub',{pt:'Submenus do quadro',es:'Submenús del tablero',en:'Board sub-menus'},
      {pt:'Chamados, Projetos, Incidentes, E-mails e Teams, Agenda, Requests do SDP ao vivo e Service Desk — cada um com a sua contagem.',
       es:'Tickets, Proyectos, Incidentes, Correos y Teams, Agenda, Requests del SDP en vivo y Service Desk — cada uno con su conteo.',
       en:'Tickets, Projects, Incidents, Email & Teams, Calendar, live SDP requests and Service Desk — each with its count.'}],
    ['board','.cards .card',{pt:'Cada item',es:'Cada ítem',en:'Each item'},
      {pt:'Frente, título, evidência (quem e quando) e etiquetas. Clique no cartão para "ver mais"; clique numa etiqueta para filtrar por ela.',
       es:'Frente, título, evidencia (quién y cuándo) y etiquetas. Clic en la tarjeta para "ver más"; clic en una etiqueta para filtrar.',
       en:'Front, title, evidence (who and when) and tags. Click the card to "show more"; click a tag to filter by it.'}],
    ['board','#mbtn',{pt:'Visões e ações',es:'Vistas y acciones',en:'Views and actions'},
      {pt:'Recortes prontos (meus P0, compliance, SDP…), copiar resumo para o Teams, expandir tudo, imprimir e este tour.',
       es:'Recortes listos (mis P0, compliance, SDP…), copiar resumen para Teams, expandir todo, imprimir y este tour.',
       en:'Ready-made cuts (my P0s, compliance, SDP…), copy a Teams summary, expand all, print and this tour.'}],
    ['board','#shbtn',{pt:'Compartilhar',es:'Compartir',en:'Share'},
      {pt:'Monta link e texto para Teams (pessoas ou grupo do time) ou e-mail. Quem envia é o seu Teams/Outlook, com o seu clique.',
       es:'Arma enlace y texto para Teams (personas o grupo) o correo. Quien envía es tu Teams/Outlook, con tu clic.',
       en:'Builds a link and text for Teams (people or the team group) or email. Your own Teams/Outlook sends it.'}],
    ['rep','.rctl',{pt:'Relatórios: controles',es:'Reportes: controles',en:'Reports: controls'},
      {pt:'Fonte (L2, N1, Quadro, Tudo), período com datas, pessoas, e exportar em XLSX, CSV, JSON, Markdown ou HTML.',
       es:'Fuente (L2, N1, Tablero, Todo), período con fechas, personas, y exportar en XLSX, CSV, JSON, Markdown o HTML.',
       en:'Source (L2, L1, Board, All), date range, people, and export to XLSX, CSV, JSON, Markdown or HTML.'}],
    ['rep','.trend',{pt:'Gráfico interativo',es:'Gráfico interactivo',en:'Interactive chart'},
      {pt:'Passe o mouse para ver o dia. Clique na legenda para ligar/desligar a série e troque entre diário e acumulado.',
       es:'Pasa el mouse para ver el día. Clic en la leyenda para prender/apagar la serie y cambia entre diario y acumulado.',
       en:'Hover to see each day. Click the legend to toggle a series and switch between daily and cumulative.'}],
    ['rep','.sct',{pt:'Placar do time',es:'Marcador del equipo',en:'Team scoreboard'},
      {pt:'Clique no cabeçalho para ordenar e no nome para abrir os chamados da pessoa — abertos e resolvidos no período.',
       es:'Clic en el encabezado para ordenar y en el nombre para abrir los tickets de la persona.',
       en:'Click a header to sort and a name to open that person’s tickets — open and resolved in the period.'}],
    ['sd','.tiles',{pt:'Service Desk N1',es:'Service Desk N1',en:'Service Desk L1'},
      {pt:'Só acompanhamento: o que entra no N1, o que já saiu e o radar do que tende a subir para o L2.',
       es:'Solo seguimiento: lo que entra al N1, lo que ya salió y el radar de lo que tiende a subir a L2.',
       en:'Watch only: what comes into L1, what is already out and a radar of what tends to escalate to L2.'}],
    ['daily','.flow',{pt:'A Daily entra sozinha',es:'La Daily entra sola',en:'The Daily arrives on its own'},
      {pt:'O Facilitator do Teams resume a reunião; às 11:15 o Claude lê, vira cartão e procura tema repetido sem dono.',
       es:'El Facilitator de Teams resume la reunión; a las 11:15 Claude lo lee, lo vuelve tarjeta y busca temas repetidos sin dueño.',
       en:'Teams Facilitator summarises the meeting; at 11:15 Claude reads it, makes a card and looks for repeated ownerless topics.'}],
    ['ai','.ai-chat',{pt:'✦ Assistente',es:'✦ Asistente',en:'✦ Assistant'},
      {pt:'Pergunte em linguagem natural. Ele lê só este painel, roda na sua conta Claude e pode aplicar filtros no quadro.',
       es:'Pregunta en lenguaje natural. Solo lee este panel, corre en tu cuenta Claude y puede aplicar filtros.',
       en:'Ask in plain language. It only reads this board, runs on your Claude account and can apply board filters.'}],
    ['ai','.ai-side',{pt:'Sugestões e atalhos',es:'Sugerencias y atajos',en:'Suggestions and shortcuts'},
      {pt:'Perguntas prontas por tema, acesso rápido aos chats do Teams e o manual de uso.',
       es:'Preguntas listas por tema, acceso rápido a los chats de Teams y el manual de uso.',
       en:'Ready questions by topic, quick links to the Teams chats and the how-to.'}],
    ['status','.mx',{pt:'Quem está plugado',es:'Quién está conectado',en:'Who is plugged in'},
      {pt:'Checklist ao vivo das fontes de cada analista. Tudo aqui é lido por máquina — nada é digitado.',
       es:'Checklist en vivo de las fuentes de cada analista. Todo lo lee una máquina — nada se digita.',
       en:'Live checklist of each analyst’s sources. Everything is machine-read — nothing is typed.'}],
    ['docs','.doc',{pt:'Documentação',es:'Documentación',en:'Docs'},
      {pt:'Manual com GIFs, arquitetura, diário de bordo de cada versão, falhas e próximos passos.',
       es:'Manual con GIFs, arquitectura, bitácora de cada versión, fallas y próximos pasos.',
       en:'Manual with GIFs, architecture, a logbook per version, failures and next steps.'}],
    ['board','.tools',{pt:'Idioma e tema',es:'Idioma y tema',en:'Language and theme'},
      {pt:'PT · ES · EN e modo claro/escuro. Pronto! Refaça o tour quando quiser em ☰ Visões → Tour guiado.',
       es:'PT · ES · EN y modo claro/oscuro. ¡Listo! Repite el tour cuando quieras en ☰ Vistas → Tour guiado.',
       en:'PT · ES · EN and light/dark mode. Done! Replay the tour any time from ☰ Views → Guided tour.'}]
  ];
  var i=0, ov=null, hl=null, cd=null, on=false;
  var t=function(k){return TXT[BL.L()][k]}, loc=function(o){return o[BL.L()]||o.pt};

  function build(){
    ov=document.createElement('div'); ov.className='tour-ov';
    hl=document.createElement('div'); hl.className='tour-hl';
    cd=document.createElement('div'); cd.className='tour-card'; cd.setAttribute('role','dialog'); cd.setAttribute('aria-live','polite');
    document.body.appendChild(ov); document.body.appendChild(hl); document.body.appendChild(cd);
    ov.onclick=function(){};  /* bloqueia cliques na página durante o tour */
  }
  function place(){
    if(!on)return; var s=STEPS[i], el=s[1]?$(s[1]):null;
    if(el){ var r=el.getBoundingClientRect(), pad=6;
      hl.style.display='block'; hl.style.left=(r.left-pad)+'px'; hl.style.top=(r.top-pad)+'px'; hl.style.width=(r.width+pad*2)+'px'; hl.style.height=Math.min(r.height+pad*2,innerHeight*0.7)+'px';
      var cw=Math.min(340,innerWidth-24), below=r.bottom+14+200<innerHeight, top=below?r.bottom+14:Math.max(12,r.top-14-cd.offsetHeight);
      if(!below&&top<12)top=Math.min(innerHeight-cd.offsetHeight-12,r.top+20);
      var left=Math.min(Math.max(12,r.left),innerWidth-cw-12);
      cd.style.width=cw+'px'; cd.style.left=left+'px'; cd.style.top=top+'px'; cd.classList.remove('center');
    } else { hl.style.display='block'; hl.style.left=(innerWidth/2)+'px'; hl.style.top=(innerHeight/2)+'px'; hl.style.width='0'; hl.style.height='0';
      cd.style.width=Math.min(420,innerWidth-24)+'px'; cd.style.left=((innerWidth-Math.min(420,innerWidth-24))/2)+'px'; cd.style.top=(innerHeight*0.28)+'px'; cd.classList.add('center') }
  }
  function show(n){
    i=Math.max(0,Math.min(STEPS.length-1,n)); var s=STEPS[i];
    if(BL.view()!==s[0])BL.go(s[0]);
    setTimeout(function(){
      var el=s[1]?$(s[1]):null; if(el){ var r=el.getBoundingClientRect(); if(r.top<80||r.bottom>innerHeight-40)window.scrollTo({top:window.scrollY+r.top-110}) }
      cd.innerHTML='<div class="tour-step">'+(i+1)+' '+esc(t('of'))+' '+STEPS.length+'</div><h3>'+esc(loc(s[2]))+'</h3><p>'+esc(loc(s[3]))+'</p>'+
        '<div class="tour-dots">'+STEPS.map(function(_,k){return '<i class="'+(k===i?'on':'')+'"></i>'}).join('')+'</div>'+
        '<div class="tour-act"><button class="tb-skip">'+esc(t('skip'))+'</button><span></span>'+(i?'<button class="tb-back">← '+esc(t('back'))+'</button>':'')+
        '<button class="tb-next pri">'+esc(i===STEPS.length-1?t('done'):t('next')+' →')+'</button></div>';
      cd.querySelector('.tb-skip').onclick=stop; cd.querySelector('.tb-next').onclick=function(){ if(i===STEPS.length-1)stop(); else show(i+1) };
      var bk=cd.querySelector('.tb-back'); if(bk)bk.onclick=function(){show(i-1)};
      place(); setTimeout(place,120); cd.querySelector('.tb-next').focus();
    },140);
  }
  function key(e){ if(!on)return; if(e.key==='Escape')stop(); if(e.key==='ArrowRight'){e.preventDefault(); if(i<STEPS.length-1)show(i+1); else stop()} if(e.key==='ArrowLeft'){e.preventDefault();show(i-1)} }
  function start(){ if(on)return; on=true; if(!ov)build(); ov.style.display=hl.style.display=cd.style.display='block'; document.body.classList.add('touring'); try{BL.ls('bl_tour','1')}catch(e){}; var b=document.querySelector('.tour-ask'); if(b)b.remove(); show(0) }
  function stop(){ on=false; if(ov){ov.style.display=hl.style.display=cd.style.display='none'} document.body.classList.remove('touring'); BL.go('board') }
  addEventListener('resize',place); addEventListener('scroll',place,{passive:true}); document.addEventListener('keydown',key);
  window.BLT={start:start,stop:stop,steps:STEPS.length};

  /* convite na primeira visita */
  var seen=null; try{seen=BL.ls('bl_tour')}catch(e){}
  if(!seen){ setTimeout(function(){ if(on||document.querySelector('.tour-ask'))return;
    var a=document.createElement('div'); a.className='tour-ask'; a.innerHTML='<span>'+esc(t('ask'))+'</span><button class="pri">'+esc(t('go'))+'</button><button>'+esc(t('later'))+'</button>';
    document.body.appendChild(a); var bs=a.querySelectorAll('button'); bs[0].onclick=start; bs[1].onclick=function(){a.remove(); try{BL.ls('bl_tour','later')}catch(e){}} },1200) }
})();
