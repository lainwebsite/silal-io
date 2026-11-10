"""Custom-styled dropdowns for the three library filters (track / format / provider) on io-academy.html.
The native <select> stays in the DOM (hidden, source of truth) so the existing change handler keeps working. Idempotent.
usage: academy_dropdown.py <bundle dir>"""
import sys, os

P = os.path.join(sys.argv[1], "io-academy.html")
MARK = "/* rev. 10 Nov: custom filter dropdown */"

CSS = MARK + """
.select{position:relative;display:block}
.select select[data-dd]{position:absolute;inset:0;opacity:0;pointer-events:none;width:100%;height:44px}
.ddBtn{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;height:44px;padding:0 14px 0 16px;font:inherit;font-size:var(--t-small,.875rem);color:var(--charcoal,#282423);background:#fff;border:1px solid transparent;border-radius:var(--r,6px);cursor:pointer;text-align:left;transition:border-color .2s,background .2s}
.ddBtn:hover{border-color:#d8d3d5}
.ddBtn:focus-visible{outline:2px solid var(--io,#29a7df);outline-offset:1px}
.ddBtn span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ddBtn svg{flex:none;width:12px;height:12px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;transition:transform .25s ease}
.dd.open .ddBtn{border-color:var(--io,#29a7df)}
.dd.open .ddBtn svg{transform:rotate(180deg)}
.ddList{position:absolute;z-index:30;left:0;right:0;top:calc(100% + 6px);margin:0;padding:6px;list-style:none;background:#fff;border:1px solid #e6e1e4;border-radius:10px;box-shadow:0 12px 28px -12px rgba(40,36,35,.22);max-height:320px;overflow:auto;opacity:0;visibility:hidden;transform:translateY(-4px);transition:opacity .15s ease,transform .2s ease,visibility .15s}
.dd.open .ddList{opacity:1;visibility:visible;transform:none}
.ddList li{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:38px;padding:0 12px;border-radius:6px;font-size:var(--t-small,.875rem);color:var(--charcoal,#282423);cursor:pointer;transition:background .12s}
.ddList li:hover,.ddList li.act{background:#f1f5f8}
.ddList li[aria-selected="true"]{color:var(--io-ink,#1b6f96);font-weight:600}
.ddList li svg{flex:none;width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;opacity:0}
.ddList li[aria-selected="true"] svg{opacity:1}
"""

JS = MARK + """
(function(){
var CH='<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5 6 8.5 10 4.5"/></svg>',CK='<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2.5 7.5 5.8 10.8 11.5 3.5"/></svg>';
function closeAll(except){document.querySelectorAll(".dd.open").forEach(function(d){if(d!==except){d.classList.remove("open");d.querySelector(".ddBtn").setAttribute("aria-expanded","false")}})}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function build(sel){
  var wrap=document.createElement("div");wrap.className="dd";
  var lab=(sel.parentNode.querySelector(".srOnly")||{}).textContent||"";
  wrap.innerHTML='<button type="button" class="ddBtn" aria-haspopup="listbox" aria-expanded="false"><span></span>'+CH+'</button><ul class="ddList" role="listbox" tabindex="-1" aria-label="'+esc(lab)+'"></ul>';
  sel.parentNode.appendChild(wrap);sel.setAttribute("data-dd","1");sel.tabIndex=-1;sel.setAttribute("aria-hidden","true");
  var btn=wrap.querySelector(".ddBtn"),ul=wrap.querySelector(".ddList"),act=-1;
  function fill(){
    ul.innerHTML=Array.prototype.map.call(sel.options,function(o,i){return '<li role="option" data-i="'+i+'" aria-selected="'+(o.selected?"true":"false")+'"><span>'+esc(o.text)+'</span>'+CK+'</li>'}).join("");
    btn.firstChild.textContent=sel.options[sel.selectedIndex].text;
  }
  function mark(i){act=i;Array.prototype.forEach.call(ul.children,function(li,k){li.classList.toggle("act",k===i)});var li=ul.children[i];if(li&&li.scrollIntoView)li.scrollIntoView({block:"nearest"})}
  function open(){closeAll(wrap);wrap.classList.add("open");btn.setAttribute("aria-expanded","true");mark(sel.selectedIndex)}
  function close(){wrap.classList.remove("open");btn.setAttribute("aria-expanded","false")}
  function pick(i){if(i<0)return;sel.selectedIndex=i;fill();close();sel.dispatchEvent(new Event("change",{bubbles:true}));btn.focus()}
  btn.addEventListener("click",function(e){e.preventDefault();wrap.classList.contains("open")?close():open()});
  ul.addEventListener("mousedown",function(e){e.preventDefault()});
  ul.addEventListener("click",function(e){var li=e.target.closest("li");if(li)pick(+li.getAttribute("data-i"))});
  ul.addEventListener("mousemove",function(e){var li=e.target.closest("li");if(li)mark(+li.getAttribute("data-i"))});
  btn.addEventListener("keydown",function(e){
    var k=e.key,n=sel.options.length;
    if(k==="Escape"){close();return}
    if(k==="Tab"){close();return}
    if(k==="ArrowDown"||k==="ArrowUp"){e.preventDefault();if(!wrap.classList.contains("open"))open();else mark(Math.max(0,Math.min(n-1,act+(k==="ArrowDown"?1:-1))))}
    else if(k==="Enter"||k===" "){e.preventDefault();if(wrap.classList.contains("open"))pick(act);else open()}
    else if(k==="Home"&&wrap.classList.contains("open")){e.preventDefault();mark(0)}
    else if(k==="End"&&wrap.classList.contains("open")){e.preventDefault();mark(n-1)}
  });
  sel.addEventListener("change",fill);
  fill();
}
var q=0;function enhance(){q=0;document.querySelectorAll(".select select:not([data-dd])").forEach(build)}
new MutationObserver(function(){if(!q)q=requestAnimationFrame(enhance)}).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener("click",function(e){if(!e.target.closest(".dd"))closeAll()});
enhance();
})();
"""

s = open(P).read()
if MARK in s:
    print("already patched")
else:
    open(P, "w").write(s + "<style>" + CSS + "</style><script>" + JS + "</script>")
    print("patched")
