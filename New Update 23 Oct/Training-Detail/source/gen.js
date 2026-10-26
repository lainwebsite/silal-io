DATA.courses[0].trainers.unshift({name:'Dr. Shamal Mohammed',role:'CEO, Innovation Oasis',focus:'Welcome session and campus introduction (proposed)'});var C=DATA.courses,CP=DATA.copy,TR=DATA.tracks,MO=DATA.modes;
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
var $=function(s,r){return (r||document).querySelector(s)};
document.querySelectorAll("[data-wm]").forEach(function(i){i.src=WM});document.querySelectorAll("[data-wmr]").forEach(function(i){i.src=WMR});document.querySelectorAll("[data-mk]").forEach(function(i){i.src=MK});
var NAV=[["About IO","Silal's R&D and venture engine.",["Our Story","Team & CEO Message","Virtual Tour ↗"]],["Research & Science","Plant science, soil, water and food technology, tested in real arid conditions.",["Precision Breeding & Plant Health","Crop Diversification Research","Soil & Water Research","Food Technology","R&D Trialing"]],["Innovation & Venture Platforms","Funding, incubation and acceleration for agri-food startups.",["Farm Innovation Fund","Incubation","Accelerator","Agricultural Challenges"]],["Technology & Services","Sensing, desalination, analytics, trials and facilities for partners.",["iO Sense","Solar Desalination","Analytical Services","Paid Trials","Program Management as a Service","Facilities as a Service"]],["Centres of Excellence","Specialist hubs for robotics, crop genomics and controlled-environment agriculture.",["Agri Robotics & AI","Abiotic Resilience & Crop Genomics (ARC-GEN)","Advanced Controlled Environment Ag (CEA)"]],["Talent & Training","Building the next generation of agri-food talent in the UAE.",["Advanced Agritech Academy","Student Sponsorship","Mustadeem / School Programs","IO Academy Training"]]];
$("#navlist").innerHTML=NAV.map(function(g){return '<li class="navItem"><a href="#top" data-active="'+(g[0]==="Talent & Training")+'">'+esc(g[0])+'</a><div class="dropdown"><div class="dropdownInner"><p>'+esc(g[1])+'</p><ul>'+g[2].map(function(x){return '<li><a href="#top" data-lib>'+esc(x)+'</a></li>'}).join("")+'</ul><a href="#top" class="textLink">'+esc(g[0])+" "+AR+'</a></div></div></li>'}).join("");
$("#mlist").innerHTML=NAV.map(function(g,i){return '<details class="mobileGroup"'+(i===5?" open":"")+'><summary><span class="mobileNum">0'+(i+1)+'</span>'+esc(g[0])+'</summary><ul><li><a href="#top">Overview</a></li>'+g[2].map(function(x){return '<li><a href="#top" data-lib>'+esc(x)+'</a></li>'}).join("")+'</ul></details>'}).join("");
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

var st={view:"lib",cur:0,track:"All tracks",mode:"All formats",q:"",sent:false},timer=null,slide=0;
function go(v,i){st.view=v;if(i!=null)st.cur=i;st.sent=false;render();if(window.__lenis)window.__lenis.scrollTo(0,{immediate:true});else scrollTo(0,0)}
var arrowSvg='<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var arrowIc='<i class="arrow" aria-hidden="true">'+arrowSvg+'</i>';

/* ---------- LIBRARY: the Content / Media Centre layout ---------- */
var FEAT=[0,3,6];
function heroHtml(){
  return '<section class="mhero" id="mhero" aria-roledescription="carousel" aria-label="Featured courses"><div class="mhImgs">'+FEAT.map(function(ci,k){return '<div class="mhImg" data-si style="z-index:'+(k===0?2:0)+'"><div class="mhPic" style="background-image:url('+HERO[k]+')"></div></div>'}).join("")+'</div><div class="mhShade"></div><div class="mhDim" id="mhdim"></div>'+
  '<div class="mhContent" id="mhc"><div class="wrap"><div class="mhBar"><p class="mhMeta" id="mhmeta"></p><div class="mhCtl"><span class="mhCount" id="mhcount"></span><button type="button" id="mhp" aria-label="Previous featured course"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></button><button type="button" id="mhn" aria-label="Next featured course"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div></div><div class="mhLine"><i id="mhbar"></i></div>'+
  '<h1 class="mhTitle">IO Academy</h1><div class="mhFoot"><div class="mhSlides">'+FEAT.map(function(ci,k){var c=C[ci];return '<div class="mhSlide'+(k===0?" on":"")+'" data-st><h2 class="mhSlideTitle"><span>'+esc(c.title)+'</span></h2><div class="mhLinkMask"><a href="#top" class="textLink" data-open="'+ci+'">View course '+AR+'</a></div></div>'}).join("")+'</div><p class="mhScroll" aria-hidden="true">Scroll for the library <i></i></p></div></div></div></section>';
}
function setSlide(n){
  var imgs=document.querySelectorAll("[data-si]"),txt=document.querySelectorAll("[data-st]"),prev=slide,E1="cubic-bezier(.65,0,.35,1)",E2="cubic-bezier(.22,.8,.2,1)",E3="cubic-bezier(.64,0,.78,0)";
  slide=(n+FEAT.length)%FEAT.length;
  var c=C[FEAT[slide]],meta=$("#mhmeta"),cnt=$("#mhcount");
  var put=function(){meta.innerHTML='<span>'+c.mode+'</span>'+c.level+' · '+c.length;cnt.innerHTML=(slide+1)+' <i>/ '+FEAT.length+'</i>'};
  var kid=function(t){return [t.querySelector(".mhSlideTitle>span"),t.querySelector(".mhLinkMask>a")]};
  if(prev===slide||reduce){put();txt.forEach(function(t,i){t.classList.toggle("on",i===slide)});imgs.forEach(function(im,i){im.style.zIndex=i===slide?2:0})}
  else{
    // picture: the next one wipes in from the right while the old one drifts left; the new one settles from a slight zoom
    imgs.forEach(function(im,i){im.style.zIndex=i===slide?3:i===prev?2:0});
    imgs[slide].animate([{clipPath:"inset(0 0 0 100%)"},{clipPath:"inset(0 0 0 0)"}],{duration:1700,easing:E1});
    imgs[slide].firstChild.animate([{transform:"scale(1.14)"},{transform:"scale(1)"}],{duration:2600,easing:E2});
    imgs[prev].firstChild.animate([{transform:"translateX(0)"},{transform:"translateX(-5%)"}],{duration:1700,easing:E1});
    // copy: the old title and link rise out through their masks, then the new ones rise in, one after the other
    var o=kid(txt[prev]),nw=kid(txt[slide]);
    o[0].animate([{transform:"none"},{transform:"translateY(-110%)"}],{duration:650,easing:E3,fill:"forwards"});
    o[1].animate([{transform:"none"},{transform:"translateY(-140%)"}],{duration:550,easing:E3,fill:"forwards"});
    txt[slide].classList.add("on");
    nw[0].animate([{transform:"translateY(110%)"},{transform:"none"}],{duration:1300,delay:560,easing:E2,fill:"backwards"});
    nw[1].animate([{transform:"translateY(140%)"},{transform:"none"}],{duration:1100,delay:760,easing:E2,fill:"backwards"});
    // meta line and counter swap with the title
    meta.animate([{opacity:1},{opacity:0}],{duration:350,fill:"forwards"}).onfinish=function(){put();meta.getAnimations().forEach(function(x){x.cancel()});meta.animate([{opacity:0,transform:"translateY(6px)"},{opacity:1,transform:"none"}],{duration:700,easing:E2})};
    setTimeout(function(){txt[prev].classList.remove("on");o.forEach(function(el){el.getAnimations().forEach(function(x){x.cancel()})})},700);
  }
  if(prev===slide&&!reduce)put();
  var bar=$("#mhbar");if(bar){bar.getAnimations().forEach(function(a){a.cancel()});if(!reduce){var an=bar.animate([{transform:"scaleX(0)"},{transform:"scaleX(1)"}],{duration:7000,easing:"linear",fill:"forwards"});an.onfinish=function(){setSlide(slide+1)}}}
}
function rowsOf(list){var P=[2,3,1],out=[],i=0,k=0;while(i<list.length){var s=P[k++%3],left=list.length-i;if(left<s)s=left===1?1:2;out.push({s:s,it:list.slice(i,i+s)});i+=s}return out}
function cardHtml(c,i,s){return '<li data-up data-trk="'+esc(c.track)+'"><button type="button" class="cardLink" data-open="'+i+'"><div class="cardImg"><div class="photo" style="background-image:url('+PH[i]+')"></div></div><p class="meta"><span>'+c.mode+'</span>'+c.level+'</p><div class="cardHead"><h3 class="cardTitle">'+esc(c.title)+'</h3>'+arrowIc+'</div><p class="cardSub">'+esc(c.track)+' · '+c.length+'</p></button></li>'}
function bigHtml(c,i){return '<li data-up data-trk="'+esc(c.track)+'"><button type="button" class="bigLink" data-open="'+i+'"><div class="bigImg"><div class="photo" style="background-image:url('+PH[i]+')"></div></div><div class="bigText"><p class="meta"><span>'+c.mode+'</span>'+c.level+'</p><h3 class="bigTitle">'+esc(c.title)+'</h3><p class="bigExcerpt">'+esc(c.excerpt)+'</p><span class="explore">Explore '+arrowIc+'</span></div></button></li>'}
function feedBody(){
  var q=st.q.trim().toLowerCase(),L=C.map(function(c,i){return {c:c,i:i}}).filter(function(x){var c=x.c;return(st.track==="All tracks"||c.track===st.track)&&(st.mode==="All formats"||c.mode===st.mode)&&(!q||(c.title+" "+c.excerpt).toLowerCase().indexOf(q)>-1)});
  var rows=rowsOf(L).map(function(r){return r.s===1?'<li><ul class="row2" style="grid-template-columns:1fr">'+bigHtml(r.it[0].c,r.it[0].i)+'</ul></li>':'<li><ul class="'+(r.s===3?"row3":"row2")+'">'+r.it.map(function(x){return cardHtml(x.c,x.i,r.s)}).join("")+'</ul></li>'}).join("");
  return '<p class="count" aria-live="polite">'+L.length+' '+(L.length===1?"course":"courses")+'</p>'+(L.length?'<ul class="rows">'+rows+'</ul><div class="end"><span>End of the library</span><a href="#top" class="textLink">Request a private cohort '+AR+'</a></div>':'<div class="empty"><p>Nothing matches these filters.</p><button type="button" data-clear>Clear filters</button></div>')+'<p class="note">Sample courses shown for layout. Final catalogue to be supplied by the IO Academy.</p>';
}
function vis(){var q=st.q.trim().toLowerCase();return C.filter(function(c){return(st.track==="All tracks"||c.track===st.track)&&(st.mode==="All formats"||c.mode===st.mode)&&(!q||(c.title+" "+c.excerpt).toLowerCase().indexOf(q)>-1)})}
function sideTracks(){var V=vis();return ["All courses"].concat(TR).map(function(t){var n=t==="All courses"?V.length:V.filter(function(c){return c.track===t}).length;return '<li><a href="#top" data-spy="'+t+'"'+(n?'':' class="none"')+'>'+esc(t)+' <small>'+n+'</small></a></li>'}).join("")+'<li class="sideInd" aria-hidden="true"></li>'}
var spy="",spyLock=0;
function updateSpy(){
  var ul=$("#sidetracks");if(!ul||Date.now()<spyLock)return;var cards=[].slice.call(document.querySelectorAll("#feedbody [data-trk]"));if(!cards.length)return;
  var mid=innerHeight*.42,best=null,bd=1e9;
  cards.forEach(function(c){var r=c.getBoundingClientRect(),d=mid<r.top?r.top-mid:mid>r.bottom?mid-r.bottom:0;if(d<bd){bd=d;best=c}});
  var feedTop=document.querySelector(".feed").getBoundingClientRect().top;var key=feedTop>innerHeight*.5?"All courses":best.getAttribute("data-trk");
  if(key===spy&&ul.__ok)return;spy=key;ul.__ok=1;
  setSpy(key);
}
function setSpy(key){var ul=$("#sidetracks");if(!ul)return;spy=key;var cur=null;ul.querySelectorAll("a").forEach(function(a){var on=a.getAttribute("data-spy")===key;a.toggleAttribute("aria-current",on);if(on)cur=a});var ind=ul.querySelector(".sideInd");if(cur&&ind){ind.style.transform="translateY("+(cur.offsetTop+(cur.offsetHeight-18)/2)+"px)"}}
function sync(){var s=$("#sidetracks");if(s){s.innerHTML=sideTracks();s.__ok=0}refeed();updateSpy()}
function libHtml(){
  var opt=function(a,all,v){return [all].concat(a).map(function(x){return '<option'+(x===v?" selected":"")+'>'+x+'</option>'}).join("")};
  return heroHtml()+'<section class="feed" aria-label="Course library"><div class="wrap"><div class="feedGrid"><aside class="side"><nav aria-label="Browse by track"><p class="sideTitle">Browse by track</p><ul class="sideList" id="sidetracks">'+sideTracks()+'</ul></nav><div class="sideInfo"><span class="sideLabel">Training for teams</span><p>Private cohorts on campus, at your site or online, in English or Arabic.</p><a href="#top" class="textLink">Talk to the Academy '+AR+'</a></div></aside>'+
  '<div class="main"><div class="filters"><label class="select"><span class="srOnly">Track</span><select id="ftrack">'+opt(TR,"All tracks",st.track)+'</select></label><label class="select"><span class="srOnly">Format</span><select id="fmode">'+opt(MO,"All formats",st.mode)+'</select></label><label class="search"><span class="srOnly">Search courses</span><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M10.5 10.5L14 14" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg><input id="fq" type="search" placeholder="Search…" value="'+esc(st.q)+'"></label></div><div id="feedbody">'+feedBody()+'</div></div></div></div></section>';
}

/* ---------- DETAIL: after the Delphy training page ---------- */
function li(a){return '<ul class="list">'+a.map(function(t,i){return '<li><b>'+('0'+(i+1)).slice(-2)+'</b><span>'+esc(t)+'</span></li>'}).join("")+'</ul>'}
function detHtml(){
  var c=C[st.cur],prev=C[st.cur-1],next=C[st.cur+1],f=c.facts;
  var facts=[["Training type",c.mode],["Duration",f.duration],["Target audience",f.audience],["Prior education",f.prior],["Language",f.language],["Investment",f.investment]];
  var rel=C.map(function(x,i){return {x:x,i:i}}).filter(function(o){return o.i!==st.cur}).sort(function(a,b){return (b.x.track===c.track)-(a.x.track===c.track)}).slice(0,3);
  var form=st.sent?'<div class="thanks" role="status"><h3>Thank you.</h3><p>The IO Academy team will reply with dates, fees and the next intake.</p></div>':
   '<form id="rf" style="display:grid;gap:12px"><label class="field"><span>First name</span><input id="rf1" required></label><label class="field"><span>Last name</span><input id="rf2" required></label><label class="field"><span>Email</span><input id="rf3" type="email" required></label><label class="field"><span>Organisation</span><input id="rf4"></label><label class="field"><span>How can we help?</span><textarea id="rf5"></textarea></label><label class="cons"><input type="checkbox" id="rf6" required> I agree that Innovation Oasis may contact me about this course.</label><button class="btn btnPrimary" type="submit" style="justify-content:center">Request information '+AR+'</button></form>';
  var S=[["intro","Overview"],["learn","What do you learn?"],["planning","Planning"],["content","Content"],["how","How does it work?"],["result","The result"],["trainers","Your trainers"],["faq","Questions"]];
  return '<div class="wrap dwrap"><nav class="crumbs" aria-label="Breadcrumb"><button type="button" data-lib>Talent &amp; Training</button><span aria-hidden="true">/</span><button type="button" data-lib>IO Academy</button><span aria-hidden="true">/</span><span aria-current="page">'+esc(c.track)+'</span></nav>'+
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
  '<section class="more"><div class="wrap"><div class="moreHead"><h2 data-split>More from the Academy</h2><a href="#top" class="textLink" data-lib>All courses '+AR+'</a></div><ul class="row3" style="list-style:none;margin:0;padding:0">'+rel.map(function(o){return cardHtml(o.x,o.i,3)}).join("")+'</ul></div></section>';
}

function render(){
  clearTimeout(timer);var bar=$("#mhbar");if(bar)bar.getAnimations().forEach(function(a){a.cancel()});
  heroPage=st.view==="lib";slide=0;
  $("#view").innerHTML=st.view==="lib"?libHtml():detHtml();
  document.querySelectorAll("#view [data-mk]").forEach(function(i){i.src=MK});
  arm($("#view"));hs();
  if(st.view==="lib"){setSlide(0);updateSpy();$("#mhp").onclick=function(){setSlide(slide-1)};$("#mhn").onclick=function(){setSlide(slide+1)};onScroll()}
  var rf=$("#rf");if(rf)rf.onsubmit=function(e){e.preventDefault();st.sent=true;var y=scrollY;render();scrollTo(0,y)};
}
function onScroll(){updateSpy();var h=$("#mhero");if(!h)return;var p=Math.min(1,Math.max(0,scrollY/(h.offsetHeight||1)));$("#mhc").style.transform="translateY("+(-18*p)+"%)";$("#mhc").style.opacity=1-.8*p;$("#mhdim").style.opacity=.75*p}
addEventListener("scroll",onScroll,{passive:true});

document.addEventListener("click",function(ev){
  var t=ev.target.closest("a,button");if(!t)return;
  if(t.hasAttribute("data-open")){ev.preventDefault();go("det",+t.getAttribute("data-open"))}
  else if(t.hasAttribute("data-lib")){ev.preventDefault();go("lib")}
  else if(t.hasAttribute("data-clear")){st.track="All tracks";st.mode="All formats";st.q="";render()}
  else if(t.hasAttribute("data-spy")){ev.preventDefault();var k=t.getAttribute("data-spy");spyLock=Date.now()+1900;spy="";setSpy(k);var tg=k==="All courses"?document.querySelector(".feed"):document.querySelector('#feedbody [data-trk="'+k.replace(/"/g,'\\"')+'"]');if(tg){var o=k==="All courses"?-60:-120;if(window.__lenis)window.__lenis.scrollTo(tg,{offset:o,duration:1.5});else scrollTo({top:tg.getBoundingClientRect().top+scrollY+o,behavior:"smooth"})}}
  else if(t.hasAttribute("data-jump")){ev.preventDefault();var d=document.getElementById(t.getAttribute("href").slice(1));if(d){if(window.__lenis)window.__lenis.scrollTo(d,{offset:-96,duration:1.6});else d.scrollIntoView({behavior:"smooth"})}}
  else if(t.tagName==="A"&&t.getAttribute("href")==="#top")ev.preventDefault();
});
function refeed(){$("#feedbody").innerHTML=feedBody();arm($("#feedbody"));var s=$("#sidetracks");if(s){s.innerHTML=sideTracks();s.__ok=0;updateSpy()}}
document.addEventListener("change",function(ev){if(ev.target.id==="ftrack"){st.track=ev.target.value;refeed()}if(ev.target.id==="fmode"){st.mode=ev.target.value;refeed()}});
document.addEventListener("input",function(ev){if(ev.target.id==="fq"){st.q=ev.target.value;refeed()}});

if(!reduce&&window.Lenis){var l=new Lenis({duration:1.15,easing:function(t){return 1-Math.pow(1-t,4)},touchMultiplier:1.4});window.__lenis=l;(function raf(t){l.raf(t);requestAnimationFrame(raf)})(performance.now());new MutationObserver(function(){mn.dataset.open==="true"?l.stop():l.start()}).observe(mn,{attributes:true,attributeFilter:["data-open"]})}
render();
