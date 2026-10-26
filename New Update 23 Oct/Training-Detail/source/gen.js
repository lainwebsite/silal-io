DATA.courses[0].trainers.unshift({name:'Dr. Shamal Mohammed',role:'CEO, Innovation Oasis',focus:'Welcome session and campus introduction (proposed)'});var C=DATA.courses,CP=DATA.copy,TR=DATA.tracks,MO=DATA.modes;
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
var $=function(s,r){return (r||document).querySelector(s)};
document.querySelectorAll("[data-wm]").forEach(function(i){i.src=WM});document.querySelectorAll("[data-wmr]").forEach(function(i){i.src=WMR});document.querySelectorAll("[data-mk]").forEach(function(i){i.src=MK});
var NAV=[["About IO","Silal's R&D and venture engine.",["Our Story","Team & CEO Message","Virtual Tour ↗"]],["Research & Science","Plant science, soil, water and food technology, tested in real arid conditions.",["Precision Breeding & Plant Health","Crop Diversification Research","Soil & Water Research","Food Technology","R&D Trialing"]],["Innovation & Venture Platforms","Funding, incubation and acceleration for agri-food startups.",["Farm Innovation Fund","Incubation","Accelerator","Agricultural Challenges"]],["Technology & Services","Sensing, desalination, analytics, trials and facilities for partners.",["iO Sense","Solar Desalination","Analytical Services","Paid Trials","Program Management as a Service","Facilities as a Service"]],["Centres of Excellence","Specialist hubs for robotics, crop genomics and controlled-environment agriculture.",["Agri Robotics & AI","Abiotic Resilience & Crop Genomics (ARC-GEN)","Advanced Controlled Environment Ag (CEA)"]],["Talent & Training","Building the next generation of agri-food talent in the UAE.",["Advanced Agritech Academy","Student Sponsorship","Mustadeem / School Programs","IO Academy Training"]]];
$("#navlist").innerHTML=NAV.map(function(g){return '<li class="navItem"><a href="#top" data-active="'+(g[0]==="Talent & Training")+'">'+esc(g[0])+'</a><div class="dropdown"><div class="dropdownInner"><p>'+esc(g[1])+'</p><ul>'+g[2].map(function(x){return '<li><a href="#top" >'+esc(x)+'</a></li>'}).join("")+'</ul><a href="#top" class="textLink">'+esc(g[0])+" "+AR+'</a></div></div></li>'}).join("");
$("#mlist").innerHTML=NAV.map(function(g,i){return '<details class="mobileGroup"'+(i===5?" open":"")+'><summary><span class="mobileNum">0'+(i+1)+'</span>'+esc(g[0])+'</summary><ul><li><a href="#top">Overview</a></li>'+g[2].map(function(x){return '<li><a href="#top" >'+esc(x)+'</a></li>'}).join("")+'</ul></details>'}).join("");
$("#fx").innerHTML=NAV.map(function(g){return '<li><a href="#top">'+esc(g[0])+'</a></li>'}).join("");
var mn=$("#mn"),hdr=$("#hdr"),openM=false,heroPage=true;
function hs(){var sc=scrollY>40;hdr.dataset.scrolled=sc;hdr.dataset.overlay=heroPage&&!sc&&!openM}
addEventListener("scroll",hs,{passive:true});
$("#mo").onclick=function(){openM=true;mn.dataset.open="true";hs()};$("#mc").onclick=function(){openM=false;mn.dataset.open="false";hs()};
$("#nlf").onsubmit=function(ev){ev.preventDefault()};

var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduce)document.documentElement.classList.add("js");
function split(el){var i=0;(function walk(n){[].slice.call(n.childNodes).forEach(function(c){if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(" "));return}var w=document.createElement("span"),wi=document.createElement("span");w.className="w";wi.className="wi";wi.style.setProperty("--i",i++);wi.textContent=p;w.appendChild(wi);f.appendChild(w)});n.replaceChild(f,c)}else if(c.nodeType===1&&!c.classList.contains("w"))walk(c)})})(el)}
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){io.unobserve(en.target);en.target.classList.add("in")}})},{rootMargin:"0px 0px -9% 0px",threshold:.01});
function arm(root){root.querySelectorAll("[data-split]").forEach(function(el){if(!el.__s){el.__s=1;split(el)}});root.querySelectorAll("[data-split],[data-up]").forEach(function(el){if(!el.__w){el.__w=1;io.observe(el)}})}

var st={view:"det",cur:0,track:"All tracks",mode:"All formats",q:"",sent:false},timer=null,slide=0;
function go(v,i){st.view="det";if(i!=null)st.cur=i;st.sent=false;render();if(window.__lenis)window.__lenis.scrollTo(0,{immediate:true});else scrollTo(0,0)}
var arrowSvg='<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var arrowIc='<i class="arrow" aria-hidden="true">'+arrowSvg+'</i>';

function cardHtml(c,i,s){return '<li data-up data-trk="'+esc(c.track)+'"><button type="button" class="cardLink" data-open="'+i+'"><div class="cardImg"><div class="photo" style="background-image:url('+PH[i]+')"></div></div><p class="meta"><span>'+c.mode+'</span>'+c.level+'</p><div class="cardHead"><h3 class="cardTitle">'+esc(c.title)+'</h3>'+arrowIc+'</div><p class="cardSub">'+esc(c.track)+' · '+c.length+'</p></button></li>'}

/* ---------- DETAIL: after the Delphy training page ---------- */
function li(a){return '<ul class="list">'+a.map(function(t,i){return '<li><b>'+('0'+(i+1)).slice(-2)+'</b><span>'+esc(t)+'</span></li>'}).join("")+'</ul>'}
function detHtml(){
  var c=C[st.cur],prev=C[st.cur-1],next=C[st.cur+1],f=c.facts;
  var facts=[["Training type",c.mode],["Duration",f.duration],["Target audience",f.audience],["Prior education",f.prior],["Language",f.language],["Investment",f.investment]];
  var rel=C.map(function(x,i){return {x:x,i:i}}).filter(function(o){return o.i!==st.cur}).sort(function(a,b){return (b.x.track===c.track)-(a.x.track===c.track)}).slice(0,3);
  var form=st.sent?'<div class="thanks" role="status"><h3>Thank you.</h3><p>The IO Academy team will reply with dates, fees and the next intake.</p></div>':
   '<form id="rf" style="display:grid;gap:12px"><label class="field"><span>First name</span><input id="rf1" required></label><label class="field"><span>Last name</span><input id="rf2" required></label><label class="field"><span>Email</span><input id="rf3" type="email" required></label><label class="field"><span>Organisation</span><input id="rf4"></label><label class="field"><span>How can we help?</span><textarea id="rf5"></textarea></label><label class="cons"><input type="checkbox" id="rf6" required> I agree that Innovation Oasis may contact me about this course.</label><button class="btn btnPrimary" type="submit" style="justify-content:center">Request information '+AR+'</button></form>';
  var S=[["intro","Overview"],["learn","What do you learn?"],["planning","Planning"],["content","Content"],["how","How does it work?"],["result","The result"],["trainers","Your trainers"],["faq","Questions"]];
  return '<div class="wrap dwrap"><nav class="crumbs" aria-label="Breadcrumb"><span>Talent &amp; Training</span><span aria-hidden="true">/</span><span>IO Academy</span><span aria-hidden="true">/</span><span aria-current="page">'+esc(c.track)+'</span></nav>'+
  '<h1 class="dTitle" data-split>'+esc(c.title)+'</h1><p class="dLead" data-up>'+esc(c.excerpt)+'</p>'+
  '<dl class="facts" data-up>'+facts.map(function(x){return '<div><dt>'+x[0]+'</dt><dd>'+esc(x[1])+'</dd></div>'}).join("")+'</dl><div class="dHero" style="background-image:url('+PH[st.cur]+')"></div>'+
  '<div class="dGrid"><div class="dMain">'+
  '<section class="sec" id="intro">'+c.intro.map(function(p){return '<p data-up>'+esc(p)+'</p>'}).join("")+'<blockquote class="pull" data-up>'+esc(c.quote.text)+'<cite>'+esc(c.quote.by)+'</cite></blockquote></section>'+
  '<section class="sec" id="learn"><h2 data-split>What do you learn?</h2>'+c.learn.map(function(p){return '<p data-up>'+esc(p)+'</p>'}).join("")+'</section>'+
  '<section class="sec" id="planning"><h2 data-split>Planning</h2><p data-up>'+esc(c.planning.intake)+'</p><ul class="chips" data-up>'+c.planning.sessions.map(function(s){return '<li>'+esc(s)+'</li>'}).join("")+'</ul><p class="pm" data-up>Time <b>'+esc(c.planning.time)+'</b> &nbsp; Place <b>'+esc(c.planning.place)+'</b></p></section>'+
  '<section class="sec" id="content"><h2 data-split>Content</h2><div data-up>'+li(c.content)+'</div></section>'+
  '<section class="sec" id="how"><h2 data-split>How does it work?</h2>'+c.how.map(function(p){return '<p data-up>'+esc(p)+'</p>'}).join("")+'</section>'+
  '<section class="sec" id="result"><h2 data-split>The result</h2><div data-up>'+li(c.result)+'</div><p data-up>Key concepts you will master:</p><ul class="chips o" data-up>'+c.concepts.map(function(t){return '<li>'+esc(t)+'</li>'}).join("")+'</ul></section>'+
  '<section class="sec" id="trainers"><h2 data-split>Your trainers</h2><div data-up style="display:grid;gap:12px">'+c.trainers.map(function(t){return '<div class="trainer">'+(t.name?'<span class="m ph"><img src="'+CEO+'" alt="'+esc(t.name)+'"></span>':'<span class="m"><img data-mk alt=""></span>')+'<div><p>'+(t.name?esc(t.name)+'<br>':'')+esc(t.role)+'</p><p>'+esc(t.focus)+(t.name?'':' · name to be confirmed')+'</p></div></div>'}).join("")+'</div></section>'+
  '<section class="sec" id="faq"><h2 data-split>Questions</h2><div class="faq" data-up>'+c.faq.map(function(q){return '<details><summary>'+esc(q.q)+'</summary><p>'+esc(q.a)+'</p></details>'}).join("")+'</div><p class="note">Sample course shown for structure and tone. Dates, fees and session plans to be supplied by the IO Academy.</p></section></div>'+
  '<aside class="dSide"><div class="reqCard" id="request"><h3>Request information</h3><p class="big">'+esc(f.investment.split(" per ")[0])+'</p><p>'+esc(c.mode)+' · '+esc(f.duration)+'</p>'+form+'</div><nav aria-label="On this page"><ul class="sideList">'+S.map(function(s){return '<li><a href="#'+s[0]+'" data-jump>'+s[1]+'</a></li>'}).join("")+'</ul></nav></aside></div>'+
  '<nav class="pager" aria-label="More courses">'+(prev?'<button type="button" data-open="'+(st.cur-1)+'"><small>Previous course</small>'+esc(prev.title)+'</button>':'<span></span>')+(next?'<button type="button" class="nx" data-open="'+(st.cur+1)+'"><small>Next course</small>'+esc(next.title)+'</button>':'')+'</nav></div>'+
  '<section class="dClose"><div class="wrap dCloseGrid"><h2 data-split>Do you have a question?</h2><div data-up><p>Write to the IO Academy team. We can plan a private cohort for your company, farm or entity, in English or Arabic.</p><a href="#request" class="btn btnPrimary" data-jump>Request information '+AR+'</a></div></div></section>'+
  '<section class="more"><div class="wrap"><div class="moreHead"><h2 data-split>More from the Academy</h2></div><ul class="row3" style="list-style:none;margin:0;padding:0">'+rel.map(function(o){return cardHtml(o.x,o.i,3)}).join("")+'</ul></div></section>';
}

function render(){
  heroPage=false;
  $("#view").innerHTML=detHtml();
  document.querySelectorAll("#view [data-mk]").forEach(function(i){i.src=MK});
  arm($("#view"));hs();
  var rf=$("#rf");if(rf)rf.onsubmit=function(e){e.preventDefault();st.sent=true;var y=scrollY;render();scrollTo(0,y)};
}
document.addEventListener("click",function(ev){
  var t=ev.target.closest("a,button");if(!t)return;
  if(t.hasAttribute("data-open")){ev.preventDefault();go("det",+t.getAttribute("data-open"))}
  else if(t.hasAttribute("data-jump")){ev.preventDefault();var d=document.getElementById(t.getAttribute("href").slice(1));if(d){if(window.__lenis)window.__lenis.scrollTo(d,{offset:-96,duration:1.6});else d.scrollIntoView({behavior:"smooth"})}}
  else if(t.tagName==="A"&&t.getAttribute("href")==="#top")ev.preventDefault();
});

if(!reduce&&window.Lenis){var l=new Lenis({duration:1.15,easing:function(t){return 1-Math.pow(1-t,4)},touchMultiplier:1.4});window.__lenis=l;(function raf(t){l.raf(t);requestAnimationFrame(raf)})(performance.now());new MutationObserver(function(){mn.dataset.open==="true"?l.stop():l.start()}).observe(mn,{attributes:true,attributeFilter:["data-open"]})}
render();
