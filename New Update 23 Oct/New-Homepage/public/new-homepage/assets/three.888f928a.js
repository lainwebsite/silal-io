(()=>{var hu=0,gl=1,cu=2,oa=1,uu=2,la=3,Hi=0,Ut=1,Wt=2,Ct=0,ha=1,vl=2,_l=3,Ml=4,xl=5,ci=100,du=101,pu=102,fu=103,mu=104,ca=200,gu=201,vu=202,_u=203,yl=204,Sl=205,rs=206,Mu=207,as=208,xu=209,yu=210,Su=211,Tu=212,bu=213,Eu=214,ns=0,ss=1,os=2,ua=3,ls=4,hs=5,cs=6,us=7,ds=0,wu=1,Au=2,ui=0,ps=1,fs=2,ms=3,da=4,gs=5,vs=6,_s=7,Tl="attached",Ru="detached",bl=300,or=301,yr=302,Ms=303,xs=304,$a=306,Ht=1e3,di=1001,Qa=1002,_t=1003,El=1004,pa=1005,wt=1006,en=1007,wi=1008,kt=1009,wl=1010,Al=1011,fa=1012,ys=1013,pi=1014,Kt=1015,Xt=1016,Ss=1017,Ts=1018,Sr=1020,Rl=35902,Cl=35899,Pl=1021,Ll=1022,jt=1023,Ai=1026,ki=1027,bs=1028,Es=1029,lr=1030,ws=1031,As=1033,tn=33776,rn=33777,an=33778,nn=33779,Rs=35840,Cs=35841,Ps=35842,Ls=35843,Ns=36196,Is=37492,Ds=37496,Us=37488,Os=37489,sn=37490,Fs=37491,Bs=37808,zs=37809,Vs=37810,Hs=37811,ks=37812,Gs=37813,Ws=37814,Xs=37815,js=37816,qs=37817,Ys=37818,Zs=37819,Js=37820,Ks=37821,$s=36492,Qs=36494,eo=36495,to=36283,io=36284,on=36285,ro=36286,ma=2300,ga=2301,ao=2302,Nl=2303,Il=2400,Dl=2401,Ul=2402,Cu=2500,Pu=0,Ol=1,no=2,Lu=3200,va=0,Nu=1,Gi="",Tt="srgb",qt="srgb-linear",ln="linear",rt="srgb",so=7680,Iu=519,Du=512,Uu=513,Ou=514,oo=515,Fu=516,Bu=517,lo=518,zu=519,Fl=35044,Bl="300 es",fi=2e3,_a=2001;function Vu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Hu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ma(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ku(){let e=Ma("canvas");return e.style.display="block",e}var zl={},Tr=null;function hn(...e){let t="THREE."+e.shift();Tr?Tr("log",t,...e):console.log(t,...e)}function Vl(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Pe(...e){e=Vl(e);let t="THREE."+e.shift();if(Tr)Tr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Be(...e){e=Vl(e);let t="THREE."+e.shift();if(Tr)Tr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function br(...e){let t=e.join(" ");t in zl||(zl[t]=!0,Pe(...e))}function Gu(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Wu={[ns]:ss,[os]:cs,[ls]:us,[ua]:hs,[ss]:ns,[cs]:os,[us]:ls,[hs]:ua},hr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hl=1234567,xa=Math.PI/180,Er=180/Math.PI;function ai(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nt[e&255]+Nt[e>>8&255]+Nt[e>>16&255]+Nt[e>>24&255]+"-"+Nt[t&255]+Nt[t>>8&255]+"-"+Nt[t>>16&15|64]+Nt[t>>24&255]+"-"+Nt[i&63|128]+Nt[i>>8&255]+"-"+Nt[i>>16&255]+Nt[i>>24&255]+Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]).toLowerCase()}function We(e,t,i){return Math.max(t,Math.min(i,e))}function ho(e,t){return(e%t+t)%t}function Xu(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function ju(e,t,i){return e!==t?(i-e)/(t-e):0}function ya(e,t,i){return(1-i)*e+i*t}function qu(e,t,i,r){return ya(e,t,1-Math.exp(-i*r))}function Yu(e,t=1){return t-Math.abs(ho(e,t*2)-t)}function Zu(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Ju(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Ku(e,t){return e+Math.floor(Math.random()*(t-e+1))}function $u(e,t){return e+Math.random()*(t-e)}function Qu(e){return e*(.5-Math.random())}function ed(e){e!==void 0&&(Hl=e);let t=Hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function td(e){return e*xa}function id(e){return e*Er}function rd(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function ad(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function nd(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function sd(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),c=s((t+r)/2),d=n((t-r)/2),u=s((t-r)/2),p=n((r-t)/2),v=s((r-t)/2);switch(a){case"XYX":e.set(o*c,l*d,l*u,o*h);break;case"YZY":e.set(l*u,o*c,l*d,o*h);break;case"ZXZ":e.set(l*d,l*u,o*c,o*h);break;case"XZX":e.set(o*c,l*v,l*p,o*h);break;case"YXY":e.set(l*p,o*c,l*v,o*h);break;case"ZYZ":e.set(l*v,l*p,o*c,o*h);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ni(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function st(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Sa={DEG2RAD:xa,RAD2DEG:Er,generateUUID:ai,clamp:We,euclideanModulo:ho,mapLinear:Xu,inverseLerp:ju,lerp:ya,damp:qu,pingpong:Yu,smoothstep:Zu,smootherstep:Ju,randInt:Ku,randFloat:$u,randFloatSpread:Qu,seededRandom:ed,degToRad:td,radToDeg:id,isPowerOfTwo:rd,ceilPowerOfTwo:ad,floorPowerOfTwo:nd,setQuaternionFromProperEuler:sd,normalize:st,denormalize:ni},kl=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(We(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kl.prototype.isVector2=!0;var be=kl,Ri=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],d=a[n+0],u=a[n+1],p=a[n+2],v=a[n+3];if(c!==v||o!==d||l!==u||h!==p){let _=o*d+l*u+h*p+c*v;_<0&&(d=-d,u=-u,p=-p,v=-v,_=-_);let m=1-s;if(_<.9995){let f=Math.acos(_),S=Math.sin(f);m=Math.sin(m*f)/S,s=Math.sin(s*f)/S,o=o*m+d*s,l=l*m+u*s,h=h*m+p*s,c=c*m+v*s}else{o=o*m+d*s,l=l*m+u*s,h=h*m+p*s,c=c*m+v*s;let f=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=f,l*=f,h*=f,c*=f}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],d=a[n+1],u=a[n+2],p=a[n+3];return e[t]=s*p+h*c+o*u-l*d,e[t+1]=o*p+h*d+l*c-s*u,e[t+2]=l*p+h*u+s*d-o*c,e[t+3]=h*p-s*c-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),d=o(i/2),u=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10],d=i+s+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>c){let u=2*Math.sqrt(1+i-s-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>c){let u=2*Math.sqrt(1+s-i-c);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gl=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Wl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Wl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),c=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*h+s*d-o*c,this.y=r+l*c+o*h-n*d,this.z=a+l*d+n*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this.z=We(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this.z=We(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return co.copy(this).projectOnVector(t),this.sub(co)}reflect(t){return this.sub(co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(We(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gl.prototype.isVector3=!0;var L=Gl,co=new L,Wl=new Ri,Xl=class{constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],d=r[7],u=r[2],p=r[5],v=r[8],_=a[0],m=a[3],f=a[6],S=a[1],A=a[4],M=a[7],b=a[2],w=a[5],R=a[8];return n[0]=s*_+o*S+l*b,n[3]=s*m+o*A+l*w,n[6]=s*f+o*M+l*R,n[1]=h*_+c*S+d*b,n[4]=h*m+c*A+d*w,n[7]=h*f+c*M+d*R,n[2]=u*_+p*S+v*b,n[5]=u*m+p*A+v*w,n[8]=u*f+p*M+v*R,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*s-o*h,u=o*l-c*n,p=h*n-s*l,v=i*d+r*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return t[0]=d*_,t[1]=(a*h-c*r)*_,t[2]=(o*r-a*s)*_,t[3]=u*_,t[4]=(c*i-a*l)*_,t[5]=(a*n-o*i)*_,t[6]=p*_,t[7]=(r*l-h*i)*_,t[8]=(s*i-r*n)*_,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uo.makeScale(t,i)),this}rotate(t){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uo.makeRotation(-t)),this}translate(t,i){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uo.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xl.prototype.isMatrix3=!0;var Ve=Xl,uo=new Ve,jl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function od(){let e={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===rt&&(a.r=Ci(a.r),a.g=Ci(a.g),a.b=Ci(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(a.r=wr(a.r),a.g=wr(a.g),a.b=wr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Gi?ln:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[qt]:{primaries:t,whitePoint:r,transfer:ln,toXYZ:jl,fromXYZ:ql,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:t,whitePoint:r,transfer:rt,toXYZ:jl,fromXYZ:ql,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),e}var Xe=od();function Ci(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function wr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ar,ld=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ar===void 0&&(Ar=Ma("canvas")),Ar.width=e.width,Ar.height=e.height;let r=Ar.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ar}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ma("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Ci(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hd=0,po=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(fo(r[n].image)):a.push(fo(r[n]))}else a=fo(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function fo(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ld.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var cd=0,mo=new L,Ot=class ts extends hr{constructor(t=ts.DEFAULT_IMAGE,i=ts.DEFAULT_MAPPING,r=di,a=di,n=wt,s=wi,o=jt,l=kt,h=ts.DEFAULT_ANISOTROPY,c=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=ai(),this.name="",this.source=new po(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mo).x}get height(){return this.source.getSize(mo).y}get depth(){return this.source.getSize(mo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Pe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Pe(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ht:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ht:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=bl,Ot.DEFAULT_ANISOTROPY=1;var Yl=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],c=s[1],d=s[5],u=s[9],p=s[2],v=s[6],_=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(u-v)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,S=(d+1)/2,A=(_+1)/2,M=(l+c)/4,b=(h+p)/4,w=(u+v)/4;return f>S&&f>A?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=M/r,n=b/r):S>A?S<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(S),r=M/a,n=w/a):A<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(A),r=b/n,a=w/n),this.set(r,a,n,i),this}let m=Math.sqrt((v-u)*(v-u)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(v-u)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this.z=We(this.z,t.z,i.z),this.w=We(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this.z=We(this.z,t,i),this.w=We(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yl.prototype.isVector4=!0;var ht=Yl,ud=class extends hr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Ot(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new po(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends ud{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Zl=class extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},dd=class extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Jl=class Yc{constructor(t,i,r,a,n,s,o,l,h,c,d,u,p,v,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,c,d,u,p,v,_,m)}set(t,i,r,a,n,s,o,l,h,c,d,u,p,v,_,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=d,f[14]=u,f[3]=p,f[7]=v,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yc().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Rr.setFromMatrixColumn(t,0).length(),n=1/Rr.setFromMatrixColumn(t,1).length(),s=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let u=s*c,p=s*d,v=o*c,_=o*d;i[0]=l*c,i[4]=-l*d,i[8]=h,i[1]=p+v*h,i[5]=u-_*h,i[9]=-o*l,i[2]=_-u*h,i[6]=v+p*h,i[10]=s*l}else if(t.order==="YXZ"){let u=l*c,p=l*d,v=h*c,_=h*d;i[0]=u+_*o,i[4]=v*o-p,i[8]=s*h,i[1]=s*d,i[5]=s*c,i[9]=-o,i[2]=p*o-v,i[6]=_+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*c,p=l*d,v=h*c,_=h*d;i[0]=u-_*o,i[4]=-s*d,i[8]=v+p*o,i[1]=p+v*o,i[5]=s*c,i[9]=_-u*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*c,p=s*d,v=o*c,_=o*d;i[0]=l*c,i[4]=v*h-p,i[8]=u*h+_,i[1]=l*d,i[5]=_*h+u,i[9]=p*h-v,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,p=s*h,v=o*l,_=o*h;i[0]=l*c,i[4]=_-u*d,i[8]=v*d+p,i[1]=d,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*d+v,i[10]=u-_*d}else if(t.order==="XZY"){let u=s*l,p=s*h,v=o*l,_=o*h;i[0]=l*c,i[4]=-d,i[8]=h*c,i[1]=u*d+_,i[5]=s*c,i[9]=p*d-v,i[2]=v*d-p,i[6]=o*c,i[10]=_*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,fd)}lookAt(t,i,r){let a=this.elements;return Yt.subVectors(t,i),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Wi.crossVectors(r,Yt),Wi.lengthSq()===0&&(Math.abs(r.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Wi.crossVectors(r,Yt)),Wi.normalize(),cn.crossVectors(Yt,Wi),a[0]=Wi.x,a[4]=cn.x,a[8]=Yt.x,a[1]=Wi.y,a[5]=cn.y,a[9]=Yt.y,a[2]=Wi.z,a[6]=cn.z,a[10]=Yt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],d=r[5],u=r[9],p=r[13],v=r[2],_=r[6],m=r[10],f=r[14],S=r[3],A=r[7],M=r[11],b=r[15],w=a[0],R=a[4],g=a[8],T=a[12],B=a[1],P=a[5],I=a[9],K=a[13],U=a[2],V=a[6],q=a[10],G=a[14],ne=a[3],j=a[7],Z=a[11],te=a[15];return n[0]=s*w+o*B+l*U+h*ne,n[4]=s*R+o*P+l*V+h*j,n[8]=s*g+o*I+l*q+h*Z,n[12]=s*T+o*K+l*G+h*te,n[1]=c*w+d*B+u*U+p*ne,n[5]=c*R+d*P+u*V+p*j,n[9]=c*g+d*I+u*q+p*Z,n[13]=c*T+d*K+u*G+p*te,n[2]=v*w+_*B+m*U+f*ne,n[6]=v*R+_*P+m*V+f*j,n[10]=v*g+_*I+m*q+f*Z,n[14]=v*T+_*K+m*G+f*te,n[3]=S*w+A*B+M*U+b*ne,n[7]=S*R+A*P+M*V+b*j,n[11]=S*g+A*I+M*q+b*Z,n[15]=S*T+A*K+M*G+b*te,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],p=t[14],v=t[3],_=t[7],m=t[11],f=t[15],S=l*p-h*u,A=o*p-h*d,M=o*u-l*d,b=s*p-h*c,w=s*u-l*c,R=s*d-o*c;return i*(_*S-m*A+f*M)-r*(v*S-m*b+f*w)+a*(v*A-_*b+f*R)-n*(v*M-_*w+m*R)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return i*(s*c-o*h)-r*(n*c-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],p=t[11],v=t[12],_=t[13],m=t[14],f=t[15],S=i*o-r*s,A=i*l-a*s,M=i*h-n*s,b=r*l-a*o,w=r*h-n*o,R=a*h-n*l,g=c*_-d*v,T=c*m-u*v,B=c*f-p*v,P=d*m-u*_,I=d*f-p*_,K=u*f-p*m,U=S*K-A*I+M*P+b*B-w*T+R*g;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/U;return t[0]=(o*K-l*I+h*P)*V,t[1]=(a*I-r*K-n*P)*V,t[2]=(_*R-m*w+f*b)*V,t[3]=(u*w-d*R-p*b)*V,t[4]=(l*B-s*K-h*T)*V,t[5]=(i*K-a*B+n*T)*V,t[6]=(m*M-v*R-f*A)*V,t[7]=(c*R-u*M+p*A)*V,t[8]=(s*I-o*B+h*g)*V,t[9]=(r*B-i*I-n*g)*V,t[10]=(v*w-_*M+f*S)*V,t[11]=(d*M-c*w-p*S)*V,t[12]=(o*T-s*P-l*g)*V,t[13]=(i*P-r*T+a*g)*V,t[14]=(_*A-v*b-m*S)*V,t[15]=(c*b-d*A+u*S)*V,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,d=o+o,u=n*h,p=n*c,v=n*d,_=s*c,m=s*d,f=o*d,S=l*h,A=l*c,M=l*d,b=r.x,w=r.y,R=r.z;return a[0]=(1-(_+f))*b,a[1]=(p+M)*b,a[2]=(v-A)*b,a[3]=0,a[4]=(p-M)*w,a[5]=(1-(u+f))*w,a[6]=(m+S)*w,a[7]=0,a[8]=(v+A)*R,a[9]=(m-S)*R,a[10]=(1-(u+_))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Rr.set(a[0],a[1],a[2]).length(),o=Rr.set(a[4],a[5],a[6]).length(),l=Rr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),si.copy(this);let h=1/s,c=1/o,d=1/l;return si.elements[0]*=h,si.elements[1]*=h,si.elements[2]*=h,si.elements[4]*=c,si.elements[5]*=c,si.elements[6]*=c,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,i.setFromRotationMatrix(si),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=fi,l=!1){let h=this.elements,c=2*n/(i-t),d=2*n/(r-a),u=(i+t)/(i-t),p=(r+a)/(r-a),v,_;if(l)v=n/(s-n),_=s*n/(s-n);else if(o===fi)v=-(s+n)/(s-n),_=-2*s*n/(s-n);else if(o===_a)v=-s/(s-n),_=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=fi,l=!1){let h=this.elements,c=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),p=-(r+a)/(r-a),v,_;if(l)v=1/(s-n),_=s/(s-n);else if(o===fi)v=-2/(s-n),_=-(s+n)/(s-n);else if(o===_a)v=-1/(s-n),_=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=v,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};Jl.prototype.isMatrix4=!0;var ze=Jl,Rr=new L,si=new ze,pd=new L(0,0,0),fd=new L(1,1,1),Wi=new L,cn=new L,Yt=new L,Kl=new ze,$l=new Ri,cr=class Zc{constructor(t=0,i=0,r=0,a=Zc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],d=a[2],u=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-We(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return $l.setFromEuler(this),this.setFromQuaternion($l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cr.DEFAULT_ORDER="XYZ";var Ql=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},md=0,eh=new L,Cr=new Ri,Pi=new ze,un=new L,Ta=new L,gd=new L,vd=new Ri,th=new L(1,0,0),ih=new L(0,1,0),rh=new L(0,0,1),ah={type:"added"},_d={type:"removed"},Pr={type:"childadded",child:null},go={type:"childremoved",child:null},gt=class is extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=is.DEFAULT_UP.clone();let t=new L,i=new cr,r=new Ri,a=new L(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ve}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=is.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=is.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(ih,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,i){return eh.copy(t).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(ih,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?un.copy(t):un.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Ta,un,this.up):Pi.lookAt(un,Ta,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),Cr.setFromRotationMatrix(Pi),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ah),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_d),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ah),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,t,gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),c=s(t.images),d=s(t.shapes),u=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),v.length>0&&(r.nodes=v)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new L(0,1,0),gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Md={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let v of e.hand.values()){let _=t.getJointPose(v,i),m=this._getHandJoint(l,v);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},dn={h:0,s:0,l:0};function _o(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=ho(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=_o(n,a,e+1/3),this.g=_o(n,a,e),this.b=_o(n,a,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function i(a){a!==void 0&&parseFloat(a)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Xe.workingToColorSpace(It.copy(this),e),Math.round(We(It.r*255,0,255))*65536+Math.round(We(It.g*255,0,255))*256+Math.round(We(It.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(It.copy(this),t);let i=It.r,r=It.g,a=It.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Tt){Xe.workingToColorSpace(It.copy(this),e);let t=It.r,i=It.g,r=It.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(dn);let i=ya(Xi.h,dn.h,t),r=ya(Xi.s,dn.s,t),a=ya(Xi.l,dn.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new Le;Le.NAMES=nh;var xd=class Jc{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Le(t),this.near=i,this.far=r}clone(){return new Jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mo=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},oi=new L,Li=new L,xo=new L,Ni=new L,Lr=new L,Nr=new L,sh=new L,yo=new L,So=new L,To=new L,bo=new ht,Eo=new ht,wo=new ht,ba=class na{constructor(t=new L,i=new L,r=new L){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),oi.subVectors(t,i),a.cross(oi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){oi.subVectors(a,i),Li.subVectors(r,i),xo.subVectors(t,i);let s=oi.dot(oi),o=oi.dot(Li),l=oi.dot(xo),h=Li.dot(Li),c=Li.dot(xo),d=s*h-o*o;if(d===0)return n.set(0,0,0),null;let u=1/d,p=(h*l-o*c)*u,v=(s*c-o*l)*u;return n.set(1-p-v,v,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ni.x),l.addScaledVector(s,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return bo.setScalar(0),Eo.setScalar(0),wo.setScalar(0),bo.fromBufferAttribute(t,i),Eo.fromBufferAttribute(t,r),wo.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(bo,n.x),s.addScaledVector(Eo,n.y),s.addScaledVector(wo,n.z),s}static isFrontFacing(t,i,r,a){return oi.subVectors(r,i),Li.subVectors(t,i),oi.cross(Li).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),oi.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return na.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return na.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return na.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return na.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return na.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Lr.subVectors(a,r),Nr.subVectors(n,r),yo.subVectors(t,r);let l=Lr.dot(yo),h=Nr.dot(yo);if(l<=0&&h<=0)return i.copy(r);So.subVectors(t,a);let c=Lr.dot(So),d=Nr.dot(So);if(c>=0&&d<=c)return i.copy(a);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(Lr,s);To.subVectors(t,n);let p=Lr.dot(To),v=Nr.dot(To);if(v>=0&&p<=v)return i.copy(n);let _=p*h-l*v;if(_<=0&&h>=0&&v<=0)return o=h/(h-v),i.copy(r).addScaledVector(Nr,o);let m=c*v-p*d;if(m<=0&&d-c>=0&&p-v>=0)return sh.subVectors(n,a),o=(d-c)/(d-c+(p-v)),i.copy(a).addScaledVector(sh,o);let f=1/(m+_+u);return s=_*f,o=u*f,i.copy(r).addScaledVector(Lr,s).addScaledVector(Nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ii=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,li):li.fromBufferAttribute(a,n),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pn.copy(i.boundingBox)),pn.applyMatrix4(e.matrixWorld),this.union(pn)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),fn.subVectors(this.max,Ea),Ir.subVectors(e.a,Ea),Dr.subVectors(e.b,Ea),Ur.subVectors(e.c,Ea),ji.subVectors(Dr,Ir),qi.subVectors(Ur,Dr),ur.subVectors(Ir,Ur);let t=[0,-ji.z,ji.y,0,-qi.z,qi.y,0,-ur.z,ur.y,ji.z,0,-ji.x,qi.z,0,-qi.x,ur.z,0,-ur.x,-ji.y,ji.x,0,-qi.y,qi.x,0,-ur.y,ur.x,0];return!Ao(t,Ir,Dr,Ur,fn)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,Ir,Dr,Ur,fn))?!1:(mn.crossVectors(ji,qi),t=[mn.x,mn.y,mn.z],Ao(t,Ir,Dr,Ur,fn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new L,new L,new L,new L,new L,new L,new L,new L],li=new L,pn=new Ii,Ir=new L,Dr=new L,Ur=new L,ji=new L,qi=new L,ur=new L,Ea=new L,fn=new L,mn=new L,dr=new L;function Ao(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){dr.fromArray(e,n);let o=a.x*Math.abs(dr.x)+a.y*Math.abs(dr.y)+a.z*Math.abs(dr.z),l=t.dot(dr),h=i.dot(dr),c=r.dot(dr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var bt=new L,gn=new be,yd=0,Ft=class extends hr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fl,this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXY(t,gn.x,gn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array),a=st(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},oh=class extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}},lh=class extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}},it=class extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sd=new Ii,wa=new L,Ro=new L,gi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Sd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);let t=wa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(Ro)),this.expandByPoint(wa.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Td=0,$t=new ze,Co=new gt,Or=new L,Zt=new Ii,Aa=new Ii,Pt=new L,Et=class Kc extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vu(t)?lh:oh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Ve().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $t.makeRotationFromQuaternion(t),this.applyMatrix4($t),this}rotateX(t){return $t.makeRotationX(t),this.applyMatrix4($t),this}rotateY(t){return $t.makeRotationY(t),this.applyMatrix4($t),this}rotateZ(t){return $t.makeRotationZ(t),this.applyMatrix4($t),this}translate(t,i,r){return $t.makeTranslation(t,i,r),this.applyMatrix4($t),this}scale(t,i,r){return $t.makeScale(t,i,r),this.applyMatrix4($t),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new it(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Zt.setFromBufferAttribute(n),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let r=this.boundingSphere.center;if(Zt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Zt.min,Aa.min),Zt.expandByPoint(Pt),Pt.addVectors(Zt.max,Aa.max),Zt.expandByPoint(Pt)):(Zt.expandByPoint(Aa.min),Zt.expandByPoint(Aa.max))}Zt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Pt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Pt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Pt.fromBufferAttribute(o,h),l&&(Or.fromBufferAttribute(t,h),Pt.add(Or)),a=Math.max(a,r.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Ft(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<r.count;g++)o[g]=new L,l[g]=new L;let h=new L,c=new L,d=new L,u=new be,p=new be,v=new be,_=new L,m=new L;function f(g,T,B){h.fromBufferAttribute(r,g),c.fromBufferAttribute(r,T),d.fromBufferAttribute(r,B),u.fromBufferAttribute(n,g),p.fromBufferAttribute(n,T),v.fromBufferAttribute(n,B),c.sub(h),d.sub(h),p.sub(u),v.sub(u);let P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(_.copy(c).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(P),o[g].add(_),o[T].add(_),o[B].add(_),l[g].add(m),l[T].add(m),l[B].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let g=0,T=S.length;g<T;++g){let B=S[g],P=B.start,I=B.count;for(let K=P,U=P+I;K<U;K+=3)f(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let A=new L,M=new L,b=new L,w=new L;function R(g){b.fromBufferAttribute(a,g),w.copy(b);let T=o[g];A.copy(T),A.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(w,T);let B=M.dot(l[g])<0?-1:1;s.setXYZW(g,A.x,A.y,A.z,B)}for(let g=0,T=S.length;g<T;++g){let B=S[g],P=B.start,I=B.count;for(let K=P,U=P+I;K<U;K+=3)R(t.getX(K+0)),R(t.getX(K+1)),R(t.getX(K+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ft(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let a=new L,n=new L,s=new L,o=new L,l=new L,h=new L,c=new L,d=new L;if(t)for(let u=0,p=t.count;u<p;u+=3){let v=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,v),n.fromBufferAttribute(i,_),s.fromBufferAttribute(i,m),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),o.fromBufferAttribute(r,v),l.fromBufferAttribute(r,_),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(v,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=i.count;u<p;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Pt.fromBufferAttribute(t,i),Pt.normalize(),t.setXYZ(i,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let f=0;f<c;f++)u[v++]=h[p++]}return new Ft(u,c,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Kc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],p=t(u,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=t.morphAttributes;for(let h in n){let c=[],d=n[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,c=s.length;h<c;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},bd=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Bt=new L,Ed=class $c{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bt.fromBufferAttribute(this,i),Bt.applyMatrix4(t),this.setXYZ(i,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bt.fromBufferAttribute(this,i),Bt.applyNormalMatrix(t),this.setXYZ(i,Bt.x,Bt.y,Bt.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bt.fromBufferAttribute(this,i),Bt.transformDirection(t),this.setXYZ(i,Bt.x,Bt.y,Bt.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=ni(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=st(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=ni(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=ni(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=ni(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=ni(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=st(i,this.array),r=st(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=st(i,this.array),r=st(r,this.array),a=st(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=st(i,this.array),r=st(r,this.array),a=st(a,this.array),n=st(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){hn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Ft(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $c(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){hn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Po=new L,wd=new L,Ad=new Ve,Yi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Po.subVectors(i,t).cross(wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Po),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ad.getNormalMatrix(e),r=this.coplanarPoint(Po).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Rd=0,Qt=class extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=ha,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=Sl,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ui=new L,Lo=new L,vn=new L,_n=new L,Mn=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Lo.copy(e).add(t).multiplyScalar(.5),vn.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(Lo);let a=e.distanceTo(t)*.5,n=-this.direction.dot(vn),s=_n.dot(this.direction),o=-_n.dot(vn),l=_n.lengthSq(),h=Math.abs(1-n*n),c,d,u,p;if(h>0)if(c=n*o-s,d=n*s-o,p=a*h,c>=0)if(d>=-p)if(d<=p){let v=1/h;c*=v,d*=v,u=c*(c+n*d+2*s)+d*(n*c+d+2*o)+l}else d=a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d=-a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;else d<=-p?(c=Math.max(0,-(-n*a+s)),d=c>0?-a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(c=Math.max(0,-(n*a+s)),d=c>0?a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l);else d=n>0?-a:a,c=Math.max(0,-(n*d+s)),u=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Lo).addScaledVector(vn,d),u}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);let i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,n=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,n=(e.min.y-d.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(s=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,c=e.x-n.x,d=e.y-n.y,u=e.z-n.z,p=t.x-n.x,v=t.y-n.y,_=t.z-n.z,m=i.x-n.x,f=i.y-n.y,S=i.z-n.z,A=Math.abs(o),M=Math.abs(l),b=Math.abs(h),w,R,g,T,B,P,I,K,U,V,q,G;if(A>=M&&A>=b?(g=o,P=c,U=p,G=m,o>=0?(w=l,R=h,T=d,B=u,I=v,K=_,V=f,q=S):(w=h,R=l,T=u,B=d,I=_,K=v,V=S,q=f)):M>=b?(g=l,P=d,U=v,G=f,l>=0?(w=h,R=o,T=u,B=c,I=_,K=p,V=S,q=m):(w=o,R=h,T=c,B=u,I=p,K=_,V=m,q=S)):(g=h,P=u,U=_,G=S,h>=0?(w=o,R=l,T=c,B=d,I=p,K=v,V=m,q=f):(w=l,R=o,T=d,B=c,I=v,K=p,V=f,q=m)),g===0)return null;let ne=w/g,j=R/g,Z=1/g,te=T-ne*P,xe=B-j*P,ye=I-ne*U,Je=K-j*U,Ue=V-ne*G,J=q-j*G,ie=Ue*Je-J*ye,he=te*J-xe*Ue,Ne=ye*xe-Je*te;if(r){if(ie<0||he<0||Ne<0)return null}else if((ie<0||he<0||Ne<0)&&(ie>0||he>0||Ne>0))return null;let Ie=ie+he+Ne;if(Ie===0)return null;let fe=Z*(ie*P+he*U+Ne*G);return(Ie>0?fe<0:fe>0)?null:this.at(fe/Ie,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vi=class extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hh=new ze,pr=new Mn,xn=new gi,ch=new L,yn=new L,Sn=new L,Tn=new L,No=new L,bn=new L,uh=new L,En=new L,He=class extends gt{constructor(e=new Et,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){bn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(No.fromBufferAttribute(c,e),n?bn.addScaledVector(No,h):bn.addScaledVector(No.sub(t),h))}t.add(bn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xn.copy(i.boundingSphere),xn.applyMatrix4(a),pr.copy(e.ray).recast(e.near),!(xn.containsPoint(pr.origin)===!1&&(pr.intersectSphere(xn,ch)===null||pr.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(hh.copy(a).invert(),pr.copy(e.ray).applyMatrix4(hh),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,d=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,v=d.length;p<v;p++){let _=d[p],m=n[_.materialIndex],f=Math.max(_.start,u.start),S=Math.min(s.count,Math.min(_.start+_.count,u.start+u.count));for(let A=f,M=S;A<M;A+=3){let b=s.getX(A),w=s.getX(A+1),R=s.getX(A+2);r=wn(this,m,e,i,l,h,c,b,w,R),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),v=Math.min(s.count,u.start+u.count);for(let _=p,m=v;_<m;_+=3){let f=s.getX(_),S=s.getX(_+1),A=s.getX(_+2);r=wn(this,n,e,i,l,h,c,f,S,A),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,v=d.length;p<v;p++){let _=d[p],m=n[_.materialIndex],f=Math.max(_.start,u.start),S=Math.min(o.count,Math.min(_.start+_.count,u.start+u.count));for(let A=f,M=S;A<M;A+=3){let b=A,w=A+1,R=A+2;r=wn(this,m,e,i,l,h,c,b,w,R),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let _=p,m=v;_<m;_+=3){let f=_,S=_+1,A=_+2;r=wn(this,n,e,i,l,h,c,f,S,A),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};function Cd(e,t,i,r,a,n,s,o){let l;if(t.side===Ut?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===Hi,o),l===null)return null;En.copy(o),En.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(En);return h<i.near||h>i.far?null:{distance:h,point:En.clone(),object:e}}function wn(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,yn),e.getVertexPosition(l,Sn),e.getVertexPosition(h,Tn);let c=Cd(e,t,i,r,yn,Sn,Tn,uh);if(c){let d=new L;ba.getBarycoord(uh,yn,Sn,Tn,d),a&&(c.uv=ba.getInterpolatedAttribute(a,o,l,h,d,new be)),n&&(c.uv1=ba.getInterpolatedAttribute(n,o,l,h,d,new be)),s&&(c.normal=ba.getInterpolatedAttribute(s,o,l,h,d,new L),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new L,materialIndex:0};ba.getNormal(yn,Sn,Tn,u.normal),c.face=u,c.barycoord=d}return c}var Ra=new ht,dh=new ht,ph=new ht,Pd=new ht,fh=new ze,An=new L,Io=new gi,mh=new ze,Do=new Mn,Ld=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tl,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ii),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,An),this.boundingBox.expandByPoint(An)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,An),this.boundingSphere.expandByPoint(An)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(r),e.ray.intersectsSphere(Io)!==!1&&(mh.copy(r).invert(),Do.copy(e.ray).applyMatrix4(mh),!(this.boundingBox!==null&&Do.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Do)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ru?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;dh.fromBufferAttribute(r.attributes.skinIndex,e),ph.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ra.copy(t),t.set(0,0,0,0)):(Ra.set(...t,1),t.set(0,0,0)),Ra.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let n=ph.getComponent(a);if(n!==0){let s=dh.getComponent(a);fh.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(Pd.copy(Ra).applyMatrix4(fh),n)}}return t.isVector4&&(t.w=Ra.w),t.applyMatrix4(this.bindMatrixInverse)}},gh=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ca=class extends Ot{constructor(e=null,t=1,i=1,r,a,n,s,o,l=_t,h=_t,c,d){super(null,n,s,o,l,h,r,a,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vh=new ze,Nd=new ze,Id=class Qc{constructor(t=[],i=[]){this.uuid=ai(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new ze;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,s=t.length;n<s;n++){let o=t[n]?t[n].matrixWorld:Nd;vh.multiplyMatrices(o,i[n]),vh.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Qc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new Ca(i,t,t,jt,Kt);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let n=t.bones[r],s=i[n];s===void 0&&(Pe("Skeleton: No bone found with UUID:",n),s=new gh),this.bones.push(s),this.boneInverses.push(new ze().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,n=i.length;a<n;a++){let s=i[a];t.bones.push(s.uuid);let o=r[a];t.boneInverses.push(o.toArray())}return t}},Rn=class extends Ft{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fr=new ze,_h=new ze,Cn=[],Mh=new Ii,Dd=new ze,Pa=new He,La=new gi,Zi=class extends He{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Dd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Fr),Mh.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(Mh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Fr),La.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(i),e.ray.intersectsSphere(La)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Fr),_h.multiplyMatrices(i,Fr),Pa.matrixWorld=_h,Pa.raycast(e,Cn);for(let n=0,s=Cn.length;n<s;n++){let o=Cn[n];o.instanceId=a,o.object=this,t.push(o)}Cn.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ca(new Float32Array(r*this.count),r,this.count,bs,Kt));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fr=new gi,Ud=new be(.5,.5),Pn=new L,Uo=class{constructor(e=new Yi,t=new Yi,i=new Yi,r=new Yi,a=new Yi,n=new Yi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],c=a[5],d=a[6],u=a[7],p=a[8],v=a[9],_=a[10],m=a[11],f=a[12],S=a[13],A=a[14],M=a[15];if(r[0].setComponents(l-n,u-h,m-p,M-f).normalize(),r[1].setComponents(l+n,u+h,m+p,M+f).normalize(),r[2].setComponents(l+s,u+c,m+v,M+S).normalize(),r[3].setComponents(l-s,u-c,m-v,M-S).normalize(),i)r[4].setComponents(o,d,_,A).normalize(),r[5].setComponents(l-o,u-d,m-_,M-A).normalize();else if(r[4].setComponents(l-o,u-d,m-_,M-A).normalize(),t===fi)r[5].setComponents(l+o,u+d,m+_,M+A).normalize();else if(t===_a)r[5].setComponents(o,d,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){fr.center.set(0,0,0);let t=Ud.distanceTo(e.center);return fr.radius=.7071067811865476+t,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Pn.x=r.normal.x>0?e.max.x:e.min.x,Pn.y=r.normal.y>0?e.max.y:e.min.y,Pn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Oo=class extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ln=new L,Nn=new L,xh=new ze,Na=new Mn,In=new gi,Fo=new L,yh=new L,Dn=class extends gt{constructor(e=new Et,t=new Oo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Ln.fromBufferAttribute(t,r-1),Nn.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ln.distanceTo(Nn);e.setAttribute("lineDistance",new it(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),In.copy(i.boundingSphere),In.applyMatrix4(r),In.radius+=a,e.ray.intersectsSphere(In)===!1)return;xh.copy(r).invert(),Na.copy(e.ray).applyMatrix4(xh);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,h=i.index,c=i.attributes.position;if(h!==null){let d=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let p=d,v=u-1;p<v;p+=l){let _=h.getX(p),m=h.getX(p+1),f=Un(this,e,Na,o,_,m,p);f&&t.push(f)}if(this.isLineLoop){let p=h.getX(u-1),v=h.getX(d),_=Un(this,e,Na,o,p,v,u-1);_&&t.push(_)}}else{let d=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let p=d,v=u-1;p<v;p+=l){let _=Un(this,e,Na,o,p,p+1,p);_&&t.push(_)}if(this.isLineLoop){let p=Un(this,e,Na,o,u-1,d,u-1);p&&t.push(p)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Un(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(Ln.fromBufferAttribute(o,a),Nn.fromBufferAttribute(o,n),i.distanceSqToSegment(Ln,Nn,Fo,yh)>r)return;Fo.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(Fo);if(!(l<t.near||l>t.far))return{distance:l,point:yh.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var Sh=new L,Th=new L,Od=class extends Dn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Sh.fromBufferAttribute(t,r),Th.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Sh.distanceTo(Th);e.setAttribute("lineDistance",new it(i,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fd=class extends Dn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bh=class extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Eh=new ze,Bo=new Mn,On=new gi,Fn=new L,Bd=class extends gt{constructor(e=new Et,t=new bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),On.copy(i.boundingSphere),On.applyMatrix4(r),On.radius+=a,e.ray.intersectsSphere(On)===!1)return;Eh.copy(r).invert(),Bo.copy(e.ray).applyMatrix4(Eh);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,n.start),d=Math.min(l.count,n.start+n.count);for(let u=c,p=d;u<p;u++){let v=l.getX(u);Fn.fromBufferAttribute(h,v),wh(Fn,v,o,r,e,t,this)}}else{let c=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let u=c,p=d;u<p;u++)Fn.fromBufferAttribute(h,u),wh(Fn,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function wh(e,t,i,r,a,n,s){let o=Bo.distanceSqToPoint(e);if(o<i){let l=new L;Bo.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Ah=class extends Ot{constructor(e=[],t=or,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zd=class extends Ot{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Br=class extends Ot{constructor(e,t,i=pi,r,a,n,s=_t,o=_t,l,h=Ai,c=1){if(h!==Ai&&h!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Vd=class extends Br{constructor(e,t=pi,i=or,r,a,n=_t,s=_t,o,l=Ai){let h={width:e,height:e,depth:1},c=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Rh=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jt=class eu extends Et{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=0,p=0;v("z","y","x",-1,-1,r,i,t,s,n,0),v("z","y","x",1,-1,r,i,-t,s,n,1),v("x","z","y",1,1,t,r,i,a,s,2),v("x","z","y",1,-1,t,r,-i,a,s,3),v("x","y","z",1,-1,t,i,r,a,n,4),v("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(d,2));function v(_,m,f,S,A,M,b,w,R,g,T){let B=M/R,P=b/g,I=M/2,K=b/2,U=w/2,V=R+1,q=g+1,G=0,ne=0,j=new L;for(let Z=0;Z<q;Z++){let te=Z*P-K;for(let xe=0;xe<V;xe++){let ye=xe*B-I;j[_]=ye*S,j[m]=te*A,j[f]=U,h.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[f]=w>0?1:-1,c.push(j.x,j.y,j.z),d.push(xe/R),d.push(1-Z/g),G+=1}}for(let Z=0;Z<g;Z++)for(let te=0;te<R;te++){let xe=u+te+V*Z,ye=u+te+V*(Z+1),Je=u+(te+1)+V*(Z+1),Ue=u+(te+1)+V*Z;l.push(xe,ye,Ue),l.push(ye,Je,Ue),ne+=6}o.addGroup(p,ne,T),p+=ne,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Hd=class tu extends Et{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new L,c=new be;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let p=r+d/i*a;h.x=t*Math.cos(p),h.y=t*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[u]/t+1)/2,c.y=(s[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ji=class iu extends Et{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],d=[],u=[],p=[],v=0,_=[],m=r/2,f=0;S(),s===!1&&(t>0&&A(!0),i>0&&A(!1)),this.setIndex(c),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(p,2));function S(){let M=new L,b=new L,w=0,R=(i-t)/r;for(let g=0;g<=n;g++){let T=[],B=g/n,P=B*(i-t)+t;for(let I=0;I<=a;I++){let K=I/a,U=K*l+o,V=Math.sin(U),q=Math.cos(U);b.x=P*V,b.y=-B*r+m,b.z=P*q,d.push(b.x,b.y,b.z),M.set(V,R,q).normalize(),u.push(M.x,M.y,M.z),p.push(K,1-B),T.push(v++)}_.push(T)}for(let g=0;g<a;g++)for(let T=0;T<n;T++){let B=_[T][g],P=_[T+1][g],I=_[T+1][g+1],K=_[T][g+1];(t>0||T!==0)&&(c.push(B,P,K),w+=3),(i>0||T!==n-1)&&(c.push(P,I,K),w+=3)}h.addGroup(f,w,0),f+=w}function A(M){let b=v,w=new be,R=new L,g=0,T=M===!0?t:i,B=M===!0?1:-1;for(let I=1;I<=a;I++)d.push(0,m*B,0),u.push(0,B,0),p.push(.5,.5),v++;let P=v;for(let I=0;I<=a;I++){let K=I/a*l+o,U=Math.cos(K),V=Math.sin(K);R.x=T*V,R.y=m*B,R.z=T*U,d.push(R.x,R.y,R.z),u.push(0,B,0),w.x=U*.5+.5,w.y=V*.5*B+.5,p.push(w.x,w.y),v++}for(let I=0;I<a;I++){let K=b+I,U=P+I;M===!0?c.push(U,U+1,K):c.push(U+1,U,K),g+=3}h.addGroup(f,g,M===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new iu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},kd=class ru extends Et{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),c(),this.setAttribute("position",new it(n,3)),this.setAttribute("normal",new it(n.slice(),3)),this.setAttribute("uv",new it(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let A=new L,M=new L,b=new L;for(let w=0;w<i.length;w+=3)p(i[w+0],A),p(i[w+1],M),p(i[w+2],b),l(A,M,b,S)}function l(S,A,M,b){let w=b+1,R=[];for(let g=0;g<=w;g++){R[g]=[];let T=S.clone().lerp(M,g/w),B=A.clone().lerp(M,g/w),P=w-g;for(let I=0;I<=P;I++)I===0&&g===w?R[g][I]=T:R[g][I]=T.clone().lerp(B,I/P)}for(let g=0;g<w;g++)for(let T=0;T<2*(w-g)-1;T++){let B=Math.floor(T/2);T%2===0?(u(R[g][B+1]),u(R[g+1][B]),u(R[g][B])):(u(R[g][B+1]),u(R[g+1][B+1]),u(R[g+1][B]))}}function h(S){let A=new L;for(let M=0;M<n.length;M+=3)A.x=n[M+0],A.y=n[M+1],A.z=n[M+2],A.normalize().multiplyScalar(S),n[M+0]=A.x,n[M+1]=A.y,n[M+2]=A.z}function c(){let S=new L;for(let A=0;A<n.length;A+=3){S.x=n[A+0],S.y=n[A+1],S.z=n[A+2];let M=m(S)/2/Math.PI+.5,b=f(S)/Math.PI+.5;s.push(M,1-b)}v(),d()}function d(){for(let S=0;S<s.length;S+=6){let A=s[S+0],M=s[S+2],b=s[S+4],w=Math.max(A,M,b),R=Math.min(A,M,b);w>.9&&R<.1&&(A<.2&&(s[S+0]+=1),M<.2&&(s[S+2]+=1),b<.2&&(s[S+4]+=1))}}function u(S){n.push(S.x,S.y,S.z)}function p(S,A){let M=S*3;A.x=t[M+0],A.y=t[M+1],A.z=t[M+2]}function v(){let S=new L,A=new L,M=new L,b=new L,w=new be,R=new be,g=new be;for(let T=0,B=0;T<n.length;T+=9,B+=6){S.set(n[T+0],n[T+1],n[T+2]),A.set(n[T+3],n[T+4],n[T+5]),M.set(n[T+6],n[T+7],n[T+8]),w.set(s[B+0],s[B+1]),R.set(s[B+2],s[B+3]),g.set(s[B+4],s[B+5]),b.copy(S).add(A).add(M).divideScalar(3);let P=m(b);_(w,B+0,S,P),_(R,B+2,A,P),_(g,B+4,M,P)}}function _(S,A,M,b){b<0&&S.x===1&&(s[A]=S.x-1),M.x===0&&M.z===0&&(s[A]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.vertices,t.indices,t.radius,t.detail)}},Oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,d=(n-h)/c;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new be:new L);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,r=[],a=[],n=[],s=new L,o=new ze;for(let u=0;u<=e;u++){let p=u/e;r[u]=this.getTangentAt(p,new L)}a[0]=new L,n[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(We(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,p))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(We(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],u*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ch=class extends Oi{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new be){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gd=class extends Ch{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function zo(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,d){let u=(s-n)/h-(o-n)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+d)+(l-o)/d;u*=c,p*=c,a(s,o,u,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var Ph=new L,Lh=new L,Vo=new zo,Ho=new zo,ko=new zo,Bn=class extends Oi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(Lh.subVectors(r[0],r[1]).add(r[0]),l=Lh);let c=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(Ph.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Ph),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),u),v=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),p<1e-4&&(p=v),_<1e-4&&(_=v),Vo.initNonuniformCatmullRom(l.x,c.x,d.x,h.x,p,v,_),Ho.initNonuniformCatmullRom(l.y,c.y,d.y,h.y,p,v,_),ko.initNonuniformCatmullRom(l.z,c.z,d.z,h.z,p,v,_)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(l.x,c.x,d.x,h.x,this.tension),Ho.initCatmullRom(l.y,c.y,d.y,h.y,this.tension),ko.initCatmullRom(l.z,c.z,d.z,h.z,this.tension));return i.set(Vo.calc(o),Ho.calc(o),ko.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Nh(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Wd(e,t){let i=1-e;return i*i*t}function Xd(e,t){return 2*(1-e)*e*t}function jd(e,t){return e*e*t}function Ia(e,t,i,r){return Wd(e,t)+Xd(e,i)+jd(e,r)}function qd(e,t){let i=1-e;return i*i*i*t}function Yd(e,t){let i=1-e;return 3*i*i*e*t}function Zd(e,t){return 3*(1-e)*e*e*t}function Jd(e,t){return e*e*e*t}function Da(e,t,i,r,a){return qd(e,t)+Yd(e,i)+Zd(e,r)+Jd(e,a)}var Kd=class extends Oi{constructor(e=new be,t=new be,i=new be,r=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new be){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Da(e,r.x,a.x,n.x,s.x),Da(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$d=class extends Oi{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Da(e,r.x,a.x,n.x,s.x),Da(e,r.y,a.y,n.y,s.y),Da(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qd=class extends Oi{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ep=class extends Oi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tp=class extends Oi{constructor(e=new be,t=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ia(e,r.x,a.x,n.x),Ia(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ih=class extends Oi{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ia(e,r.x,a.x,n.x),Ia(e,r.y,a.y,n.y),Ia(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ip=class extends Oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(Nh(s,o.x,l.x,h.x,c.x),Nh(s,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new be().fromArray(r))}return this}},rp=Object.freeze({__proto__:null,ArcCurve:Gd,CatmullRomCurve3:Bn,CubicBezierCurve:Kd,CubicBezierCurve3:$d,EllipseCurve:Ch,LineCurve:Qd,LineCurve3:ep,QuadraticBezierCurve:tp,QuadraticBezierCurve3:Ih,SplineCurve:ip}),ap=class au extends kd{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new au(t.radius,t.detail)}},Ua=class nu extends Et{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,d=t/o,u=i/l,p=[],v=[],_=[],m=[];for(let f=0;f<c;f++){let S=f*u-s;for(let A=0;A<h;A++){let M=A*d-n;v.push(M,-S,0),_.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let A=S+h*f,M=S+h*(f+1),b=S+1+h*(f+1),w=S+1+h*f;p.push(A,M,w),p.push(M,b,w)}this.setIndex(p),this.setAttribute("position",new it(v,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nu(t.width,t.height,t.widthSegments,t.heightSegments)}},np=class su extends Et{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],c=[],d=t,u=(i-t)/a,p=new L,v=new be;for(let _=0;_<=a;_++){for(let m=0;m<=r;m++){let f=n+m/r*s;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),v.x=(p.x/i+1)/2,v.y=(p.y/i+1)/2,c.push(v.x,v.y)}d+=u}for(let _=0;_<a;_++){let m=_*(r+1);for(let f=0;f<r;f++){let S=f+m,A=S,M=S+r+1,b=S+r+2,w=S+1;o.push(A,M,w),o.push(M,b,w)}}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},sp=class ou extends Et{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,c=[],d=new L,u=new L,p=[],v=[],_=[],m=[];for(let f=0;f<=r;f++){let S=[],A=f/r,M=s+A*o,b=t*Math.cos(M),w=Math.sqrt(t*t-b*b),R=0;f===0&&s===0?R=.5/i:f===r&&l===Math.PI&&(R=-.5/i);for(let g=0;g<=i;g++){let T=g/i,B=a+T*n;d.x=-w*Math.cos(B),d.y=b,d.z=w*Math.sin(B),v.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+R,1-A),S.push(h++)}c.push(S)}for(let f=0;f<r;f++)for(let S=0;S<i;S++){let A=c[f][S+1],M=c[f][S],b=c[f+1][S],w=c[f+1][S+1];(f!==0||s>0)&&p.push(A,M,w),(f!==r-1||l<Math.PI)&&p.push(M,b,w)}this.setIndex(p),this.setAttribute("position",new it(v,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},op=class lu extends Et{constructor(t=new Ih(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new L,l=new L,h=new be,c=new L,d=[],u=[],p=[],v=[];_(),this.setIndex(v),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(p,2));function _(){for(let A=0;A<i;A++)m(A);m(n===!1?i:0),S(),f()}function m(A){c=t.getPointAt(A/i,c);let M=s.normals[A],b=s.binormals[A];for(let w=0;w<=a;w++){let R=w/a*Math.PI*2,g=Math.sin(R),T=-Math.cos(R);l.x=T*M.x+g*b.x,l.y=T*M.y+g*b.y,l.z=T*M.z+g*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let A=1;A<=i;A++)for(let M=1;M<=a;M++){let b=(a+1)*(A-1)+(M-1),w=(a+1)*A+(M-1),R=(a+1)*A+M,g=(a+1)*(A-1)+M;v.push(b,w,g),v.push(w,R,g)}}function S(){for(let A=0;A<=i;A++)for(let M=0;M<=a;M++)h.x=A/i,h.y=M/a,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new lu(new rp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function zr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Dh(a))a.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Dh(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function zt(e){let t={};for(let i=0;i<e.length;i++){let r=zr(e[i]);for(let a in r)t[a]=r[a]}return t}function Dh(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function lp(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Uh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xe.workingColorSpace}var Ki={clone:zr,merge:zt},hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Le().setHex(r.value);break;case"v2":this.uniforms[i].value=new be().fromArray(r.value);break;case"v3":this.uniforms[i].value=new L().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ht().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ze().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oh=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mr=class extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_i=class extends mr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},up=class extends Qt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},dp=class extends Qt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=ds,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pp=class extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fp=class extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $i(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function zn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function mp(e){function t(a,n){return e[a]-e[n]}let i=e.length,r=new Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}function Fh(e,t,i){let r=e.length,a=new e.constructor(r);for(let n=0,s=0;s!==r;++n){let o=i[n]*t;for(let l=0;l!==t;++l)a[s++]=e[o+l]}return a}function gp(e,t,i,r){let a=1,n=e[0];for(;n!==void 0&&n[r]===void 0;)n=e[a++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(t.push(n.time),i.push(...s)),n=e[a++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(t.push(n.time),s.toArray(i,i.length)),n=e[a++];while(n!==void 0);else do s=n[r],s!==void 0&&(t.push(n.time),i.push(s)),n=e[a++];while(n!==void 0)}var Vr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vp=class extends Vr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Dl:a=e,s=2*t-i;break;case Ul:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Dl:n=e,o=2*i-t;break;case Ul:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(r-t),v=p*p,_=v*p,m=-d*_+2*d*v-d*p,f=(1+d)*_+(-1.5-2*d)*v+(-.5+d)*p+1,S=(-1-u)*_+(1.5+u)*v+.5*p,A=u*_-u*v;for(let M=0;M!==s;++M)a[M]=m*n[h+M]+f*n[l+M]+S*n[o+M]+A*n[c+M];return a}},_p=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),c=1-h;for(let d=0;d!==s;++d)a[d]=n[l+d]*c+n[o+d]*h;return a}},Mp=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},xp=class extends Vr{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,c=this.outTangents;if(!h||!c){let p=(i-t)/(r-t),v=1-p;for(let _=0;_!==s;++_)a[_]=n[l+_]*v+n[o+_]*p;return a}let d=s*2,u=e-1;for(let p=0;p!==s;++p){let v=n[l+p],_=n[o+p],m=u*d+p*2,f=c[m],S=c[m+1],A=e*d+p*2,M=h[A],b=h[A+1],w=Sp(i,t,f,M,r);a[p]=Bh(w,v,S,b,_)}return a}};function Bh(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function yp(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function Sp(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=Bh(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=yp(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var hi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$i(t,this.TimeBufferType),this.values=$i(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$i(e.times,Array),values:$i(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),zn(e.settings)&&(i.settings={inTangents:$i(e.settings.inTangents,Array),outTangents:$i(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _p(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break;case Nl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return ao;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;zn(this.settings)&&(zh(this.settings.inTangents,e),zh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Be("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Be("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Hu(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ao,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,d=c-i,u=c+i;for(let p=0;p!==i;++p){let v=t[c+p];if(v!==t[d+p]||v!==t[u+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,d=n*i;for(let u=0;u!==i;++u)t[d+u]=t[c+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,zn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function zh(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}hi.prototype.ValueTypeName="",hi.prototype.TimeBufferType=Float32Array,hi.prototype.ValueBufferType=Float32Array,hi.prototype.DefaultInterpolation=ga;var Hr=class extends hi{constructor(e,t,i){super(e,t,i)}};Hr.prototype.ValueTypeName="bool",Hr.prototype.ValueBufferType=Array,Hr.prototype.DefaultInterpolation=ma,Hr.prototype.InterpolantFactoryMethodLinear=void 0,Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vh=class extends hi{constructor(e,t,i,r){super(e,t,i,r)}};Vh.prototype.ValueTypeName="color";var Oa=class extends hi{constructor(e,t,i,r){super(e,t,i,r)}};Oa.prototype.ValueTypeName="number";var Tp=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)Ri.slerpFlat(a,0,n,l-s,n,l,o);return a}},Fa=class extends hi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}};Fa.prototype.ValueTypeName="quaternion",Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends hi{constructor(e,t,i){super(e,t,i)}};kr.prototype.ValueTypeName="string",kr.prototype.ValueBufferType=Array,kr.prototype.DefaultInterpolation=ma,kr.prototype.InterpolantFactoryMethodLinear=void 0,kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends hi{constructor(e,t,i,r){super(e,t,i,r)}};Vn.prototype.ValueTypeName="vector";var bp=class{constructor(e="",t=-1,i=[],r=Cu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,s=i.length;n!==s;++n)t.push(wp(i[n]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,n=i.length;a!==n;++a)t.push(hi.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,n=[];for(let s=0;s<a;s++){let o=[],l=[];o.push((s+a-1)%a,s,(s+1)%a),l.push(0,1,0);let h=mp(o);o=Fh(o,1,h),l=Fh(l,1,h),!r&&o[0]===0&&(o.push(a),l.push(l[0])),n.push(new Oa(".morphTargetInfluences["+t[s].name+"]",o,l).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let s=0,o=e.length;s<o;s++){let l=e[s],h=l.name.match(a);if(h&&h.length>1){let c=h[1],d=r[c];d||(r[c]=d=[]),d.push(l)}}let n=[];for(let s in r)n.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return n}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ep(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oa;case"vector":case"vector2":case"vector3":case"vector4":return Vn;case"color":return Vh;case"quaternion":return Fa;case"bool":case"boolean":return Hr;case"string":return kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function wp(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Ep(e.type);if(e.times===void 0){let r=[],a=[];gp(e.keys,r,a,"value"),e.times=r,e.values=a}let i;return t.parse!==void 0?i=t.parse(e):i=new t(e.name,e.times,e.values,e.interpolation),zn(e.settings)&&(i.settings={inTangents:$i(e.settings.inTangents,Float32Array),outTangents:$i(e.settings.outTangents,Float32Array)}),i}var Fi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Hh(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Hh(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Hh(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ap=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rp=new Ap,Gr=class{constructor(e){this.manager=e!==void 0?e:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bi={},Cp=class extends Error{constructor(e,t){super(e),this.response=t}},kh=class extends Gr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Fi.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:i,onError:r});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:i,onError:r});let n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),s=this.mimeType,o=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Bi[e],c=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,v=0,_=new ReadableStream({start(m){f();function f(){c.read().then(({done:S,value:A})=>{if(S)m.close();else{v+=A.byteLength;let M=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:u});for(let b=0,w=h.length;b<w;b++){let R=h[b];R.onProgress&&R.onProgress(M)}m.enqueue(A),f()}},S=>{m.error(S)})}}});return new Response(_)}else throw new Cp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,s));case"json":return l.json();default:if(s==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(s),c=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(c);return l.arrayBuffer().then(u=>d.decode(u))}}}).then(l=>{Fi.add(`file:${e}`,l);let h=Bi[e];delete Bi[e];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onLoad&&u.onLoad(l)}}).catch(l=>{let h=Bi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Bi[e];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Wr=new WeakMap,Pp=class extends Gr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Fi.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let c=Wr.get(n);c===void 0&&(c=[],Wr.set(n,c)),c.push({onLoad:t,onError:r})}return n}let s=Ma("img");function o(){h(),t&&t(this);let c=Wr.get(this)||[];for(let d=0;d<c.length;d++){let u=c[d];u.onLoad&&u.onLoad(this)}Wr.delete(this),a.manager.itemEnd(e)}function l(c){h(),r&&r(c),Fi.remove(`image:${e}`);let d=Wr.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(c)}Wr.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Fi.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}},Lp=class extends Gr{constructor(e){super(e)}load(e,t,i,r){let a=new Ot,n=new Pp(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},Ba=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Np=class extends Ba{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Go=new ze,Gh=new L,Wh=new L,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=kt,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Go,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===_a||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hn=new L,kn=new Ri,Mi=new L,Xh=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hn,kn,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hn,kn,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Hn,kn,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hn,kn,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new L,jh=new be,qh=new be,Dt=class extends Xh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,jh,qh),t.subVectors(qh,jh)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ip=class extends Wo{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Er*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Dp=class extends Ba{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new Ip}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Up=class extends Wo{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0}},Yh=class extends Ba{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Up}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},za=class extends Xh{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Op=class extends Wo{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xo=class extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Op}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Fp=class extends Ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Va=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},jo=new WeakMap,Bp=class extends Gr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Fi.get(`image-bitmap:${e}`);if(n!==void 0){if(a.manager.itemStart(e),n.then){n.then(l=>{jo.has(n)===!0?(r&&r(jo.get(n)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(l),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);return}let s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,s.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(l){return Fi.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){r&&r(l),jo.set(o,l),Fi.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Fi.add(`image-bitmap:${e}`,o),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Xr=-90,jr=1,zp=class extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Dt(Xr,jr,e,t);r.layers=this.layers,this.add(r);let a=new Dt(Xr,jr,e,t);a.layers=this.layers,this.add(a);let n=new Dt(Xr,jr,e,t);n.layers=this.layers,this.add(n);let s=new Dt(Xr,jr,e,t);s.layers=this.layers,this.add(s);let o=new Dt(Xr,jr,e,t);o.layers=this.layers,this.add(o);let l=new Dt(Xr,jr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Vp=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Zh=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Hp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Hp(){this._document.hidden===!1&&this.reset()}var qo="\\[\\]\\.:\\/",kp=new RegExp("["+qo+"]","g"),Yo="[^"+qo+"]",Gp="[^"+qo.replace("\\.","")+"]",Wp=/((?:WC+[\/:])*)/.source.replace("WC",Yo),Xp=/(WCOD+)?/.source.replace("WCOD",Gp),jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yo),qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yo),Yp=new RegExp("^"+Wp+Xp+jp+qp+"$"),Zp=["material","materials","bones","map"],Jp=class{constructor(e,t,i){let r=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class sa{constructor(t,i,r){this.path=i,this.parsedPath=r||sa.parseTrackName(i),this.node=sa.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new sa.Composite(t,i,r):new sa(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kp,"")}static parseTrackName(t){let i=Yp.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Zp.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=sa.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;Be("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Jp,vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray],vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1),Jh=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}};Jh.prototype.isMatrix2=!0;var $_=Jh;function Kh(e,t,i,r){let a=Kp(r);switch(i){case Pl:return e*t;case bs:return e*t/a.components*a.byteLength;case Es:return e*t/a.components*a.byteLength;case lr:return e*t*2/a.components*a.byteLength;case ws:return e*t*2/a.components*a.byteLength;case Ll:return e*t*3/a.components*a.byteLength;case jt:return e*t*4/a.components*a.byteLength;case As:return e*t*4/a.components*a.byteLength;case tn:case rn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case an:case nn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Cs:case Ls:return Math.max(e,16)*Math.max(t,8)/4;case Rs:case Ps:return Math.max(e,8)*Math.max(t,8)/2;case Ns:case Is:case Us:case Os:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ds:case sn:case Fs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case zs:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Vs:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Hs:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ks:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Gs:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ws:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Xs:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case js:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case qs:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ys:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Zs:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Js:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ks:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case $s:case Qs:case eo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case to:case io:return Math.ceil(e/4)*Math.ceil(t/4)*8;case on:case ro:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Kp(e){switch(e){case kt:case wl:return{byteLength:1,components:1};case fa:case Al:case Xt:return{byteLength:2,components:1};case Ss:case Ts:return{byteLength:2,components:4};case pi:case ys:case Kt:return{byteLength:4,components:1};case Rl:case Cl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}})),typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $h(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function $p(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let c=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,c);else{d.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<d.length;p++){let v=d[u],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,v=d.length;p<v;p++){let _=d[p];e.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$f=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Qp,alphahash_pars_fragment:ef,alphamap_fragment:tf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:of,batching_pars_vertex:lf,batching_vertex:hf,begin_vertex:cf,beginnormal_vertex:uf,bsdfs:df,iridescence_fragment:pf,bumpmap_pars_fragment:ff,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:_f,color_fragment:Mf,color_pars_fragment:xf,color_pars_vertex:yf,color_vertex:Sf,common:Tf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:wf,displacementmap_vertex:Af,emissivemap_fragment:Rf,emissivemap_pars_fragment:Cf,colorspace_fragment:Pf,colorspace_pars_fragment:Lf,envmap_fragment:Nf,envmap_common_pars_fragment:If,envmap_pars_fragment:Df,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:jf,envmap_vertex:Of,fog_vertex:Ff,fog_pars_vertex:Bf,fog_fragment:zf,fog_pars_fragment:Vf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:kf,lights_lambert_fragment:Gf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:$f,lights_fragment_begin:Qf,lights_fragment_maps:em,lights_fragment_end:tm,lightprobes_pars_fragment:im,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:sm,map_fragment:om,map_pars_fragment:lm,map_particle_fragment:hm,map_particle_pars_fragment:cm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphinstance_vertex:pm,morphcolor_vertex:fm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:vm,normal_fragment_begin:_m,normal_fragment_maps:Mm,normal_pars_fragment:xm,normal_pars_vertex:ym,normal_vertex:Sm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Pm,project_vertex:Lm,dithering_fragment:Nm,dithering_pars_fragment:Im,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Um,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Fm,shadowmap_vertex:Bm,shadowmask_pars_fragment:zm,skinbase_vertex:Vm,skinning_pars_vertex:Hm,skinning_vertex:km,skinnormal_vertex:Gm,specularmap_fragment:Wm,specularmap_pars_fragment:Xm,tonemapping_fragment:jm,tonemapping_pars_fragment:qm,transmission_fragment:Ym,transmission_pars_fragment:Zm,uv_pars_fragment:Jm,uv_pars_vertex:Km,uv_vertex:$m,worldpos_vertex:Qm,background_vert:eg,background_frag:tg,backgroundCube_vert:ig,backgroundCube_frag:rg,cube_vert:ag,cube_frag:ng,depth_vert:sg,depth_frag:og,distance_vert:lg,distance_frag:hg,equirect_vert:cg,equirect_frag:ug,linedashed_vert:dg,linedashed_frag:pg,meshbasic_vert:fg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:vg,meshmatcap_vert:_g,meshmatcap_frag:Mg,meshnormal_vert:xg,meshnormal_frag:yg,meshphong_vert:Sg,meshphong_frag:Tg,meshphysical_vert:bg,meshphysical_frag:Eg,meshtoon_vert:wg,meshtoon_frag:Ag,points_vert:Rg,points_frag:Cg,shadow_vert:Pg,shadow_frag:Lg,sprite_vert:Ng,sprite_frag:Ig},ge={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},xi={basic:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:zt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:zt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Le(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:zt([ge.points,ge.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:zt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:zt([ge.common,ge.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:zt([ge.sprite,ge.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:zt([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:zt([ge.lights,ge.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};xi.physical={uniforms:zt([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Gn={r:0,b:0,g:0},Dg=new ze,Qh=new Ve;Qh.set(-1,0,0,0,1,0,0,0,1);function Ug(e,t,i,r,a,n){let s=new Le(0),o=a===!0?0:1,l,h,c=null,d=0,u=null;function p(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let M=S.backgroundBlurriness>0;A=t.get(A,M)}return A}function v(S){let A=!1,M=p(S);M===null?m(s,o):M&&M.isColor&&(m(M,1),A=!0);let b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,n):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(S,A){let M=p(A);M&&(M.isCubeTexture||M.mapping===$a)?(h===void 0&&(h=new He(new Jt(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:zr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Qh),h.material.toneMapped=Xe.getTransfer(M.colorSpace)!==rt,(c!==M||d!==M.version||u!==e.toneMapping)&&(h.material.needsUpdate=!0,c=M,d=M.version,u=e.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new He(new Ua(2,2),new Lt({name:"BackgroundMaterial",uniforms:zr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||d!==M.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=M,d=M.version,u=e.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(Gn,Uh(e)),i.buffers.color.setClear(Gn.r,Gn.g,Gn.b,A,n)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,A=1){s.set(S),o=A,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(s,o)},render:v,addToRenderList:_,dispose:f}}function Og(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(P,I,K,U,V){let q=!1,G=d(P,U,K,I);n!==G&&(n=G,h(n.object)),q=p(P,U,K,V),q&&v(P,U,K,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,M(P,I,K,U),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return e.createVertexArray()}function h(P){return e.bindVertexArray(P)}function c(P){return e.deleteVertexArray(P)}function d(P,I,K,U){let V=U.wireframe===!0,q=r[I.id];q===void 0&&(q={},r[I.id]=q);let G=P.isInstancedMesh===!0?P.id:0,ne=q[G];ne===void 0&&(ne={},q[G]=ne);let j=ne[K.id];j===void 0&&(j={},ne[K.id]=j);let Z=j[V];return Z===void 0&&(Z=u(l()),j[V]=Z),Z}function u(P){let I=[],K=[],U=[];for(let V=0;V<i;V++)I[V]=0,K[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:K,attributeDivisors:U,object:P,attributes:{},index:null}}function p(P,I,K,U){let V=n.attributes,q=I.attributes,G=0,ne=K.getAttributes();for(let j in ne)if(ne[j].location>=0){let Z=V[j],te=q[j];if(te===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),Z===void 0||Z.attribute!==te||te&&Z.data!==te.data)return!0;G++}return n.attributesNum!==G||n.index!==U}function v(P,I,K,U){let V={},q=I.attributes,G=0,ne=K.getAttributes();for(let j in ne)if(ne[j].location>=0){let Z=q[j];Z===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let te={};te.attribute=Z,Z&&Z.data&&(te.data=Z.data),V[j]=te,G++}n.attributes=V,n.attributesNum=G,n.index=U}function _(){let P=n.newAttributes;for(let I=0,K=P.length;I<K;I++)P[I]=0}function m(P){f(P,0)}function f(P,I){let K=n.newAttributes,U=n.enabledAttributes,V=n.attributeDivisors;K[P]=1,U[P]===0&&(e.enableVertexAttribArray(P),U[P]=1),V[P]!==I&&(e.vertexAttribDivisor(P,I),V[P]=I)}function S(){let P=n.newAttributes,I=n.enabledAttributes;for(let K=0,U=I.length;K<U;K++)I[K]!==P[K]&&(e.disableVertexAttribArray(K),I[K]=0)}function A(P,I,K,U,V,q,G){G===!0?e.vertexAttribIPointer(P,I,K,V,q):e.vertexAttribPointer(P,I,K,U,V,q)}function M(P,I,K,U){_();let V=U.attributes,q=K.getAttributes(),G=I.defaultAttributeValues;for(let ne in q){let j=q[ne];if(j.location>=0){let Z=V[ne];if(Z===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let te=Z.normalized,xe=Z.itemSize,ye=t.get(Z);if(ye===void 0)continue;let Je=ye.buffer,Ue=ye.type,J=ye.bytesPerElement,ie=Ue===e.INT||Ue===e.UNSIGNED_INT||Z.gpuType===ys;if(Z.isInterleavedBufferAttribute){let he=Z.data,Ne=he.stride,Ie=Z.offset;if(he.isInstancedInterleavedBuffer){for(let fe=0;fe<j.locationSize;fe++)f(j.location+fe,he.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let fe=0;fe<j.locationSize;fe++)m(j.location+fe);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let fe=0;fe<j.locationSize;fe++)A(j.location+fe,xe/j.locationSize,Ue,te,Ne*J,(Ie+xe/j.locationSize*fe)*J,ie)}else{if(Z.isInstancedBufferAttribute){for(let he=0;he<j.locationSize;he++)f(j.location+he,Z.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let he=0;he<j.locationSize;he++)m(j.location+he);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let he=0;he<j.locationSize;he++)A(j.location+he,xe/j.locationSize,Ue,te,xe*J,xe/j.locationSize*he*J,ie)}}else if(G!==void 0){let te=G[ne];if(te!==void 0)switch(te.length){case 2:e.vertexAttrib2fv(j.location,te);break;case 3:e.vertexAttrib3fv(j.location,te);break;case 4:e.vertexAttrib4fv(j.location,te);break;default:e.vertexAttrib1fv(j.location,te)}}}}S()}function b(){T();for(let P in r){let I=r[P];for(let K in I){let U=I[K];for(let V in U){let q=U[V];for(let G in q)c(q[G].object),delete q[G];delete U[V]}}delete r[P]}}function w(P){if(r[P.id]===void 0)return;let I=r[P.id];for(let K in I){let U=I[K];for(let V in U){let q=U[V];for(let G in q)c(q[G].object),delete q[G];delete U[V]}}delete r[P.id]}function R(P){for(let I in r){let K=r[I];for(let U in K){let V=K[U];if(V[P.id]===void 0)continue;let q=V[P.id];for(let G in q)c(q[G].object),delete q[G];delete V[P.id]}}}function g(P){for(let I in r){let K=r[I],U=P.isInstancedMesh===!0?P.id:0,V=K[U];if(V!==void 0){for(let q in V){let G=V[q];for(let ne in G)c(G[ne].object),delete G[ne];delete V[q]}delete K[U],Object.keys(K).length===0&&delete r[I]}}}function T(){B(),s=!0,n!==a&&(n=a,h(n.object))}function B(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Fg(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,c){c!==0&&(e.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let d=0;for(let u=0;u<c;u++)d+=h[u];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Bg(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==jt&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let g=R===Xt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==kt&&R!==Kt&&!g&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(Pe("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:M,maxSamples:b,samples:w}}function zg(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Yi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||r!==0||a;return a=u,r=d.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){i=c(d,u,0)},this.setState=function(d,u,p){let v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!a||v===null||v.length===0||n&&!m)n?c(null):h();else{let S=n?0:r,A=S*4,M=f.clippingState||null;l.value=M,M=c(v,u,A,p);for(let b=0;b!==A;++b)M[b]=i[b];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(d,u,p,v){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,v!==!0||m===null){let f=p+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,M=p;A!==_;++A,M+=4)s.copy(d[A]).applyMatrix4(S,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var qr=4,Vg=6,Hg=20,kg=256,Ha=new za,ec=new Le,Zo=null,Jo=0,Ko=0,$o=!1,Gg=new L,gr=new L,Qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=Gg}=a;Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,Jo,Ko),this._renderer.xr.enabled=$o,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Xt,format:jt,colorSpace:qt,depthBuffer:!1},r=tc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wg(a)),this._blurMaterial=jg(a,e,t),this._ggxMaterial=Xg(a,e,t)}return r}_compileMaterial(e){let t=new He(new Et,e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,i,r,a){let n=new Dt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(ec),l.toneMapping=ui,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new Jt,new vi({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,p=!1,v=e.background;v?v.isColor&&(u.color.copy(v),e.background=null,p=!0):(u.color.copy(ec),p=!0);for(let _=0;_<6;_++){let m=_%3;m===0?(n.up.set(0,s[_],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[_],a.y,a.z)):m===1?(n.up.set(0,0,s[_]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[_],a.z)):(n.up.set(0,s[_],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[_]));let f=this._cubeSize;Yr(r,m*f,_>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,n),l.render(e,n)}l.toneMapping=c,l.autoClear=h,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===or||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Yr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Ha)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),d=l*1.25,u=c*d,{_lodMax:p}=this,v=this._sizeLods[i],_=3*v*(i>p-qr?i-p+qr:0),m=4*(this._cubeSize-v);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=p-t,Yr(a,_,m,3*v,2*v),r.setRenderTarget(a),r.render(s,Ha),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=p-i,Yr(e,_,m,3*v,2*v),r.setRenderTarget(e),r.render(s,Ha)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],c=3*h*(r>this._lodMax-qr?r-this._lodMax+qr:0),d=4*(this._cubeSize-h);Yr(t,c,d,3*h,2*h),n.setRenderTarget(t),n.render(o,Ha)}};function Wg(e){let t=[],i=[],r=e,a=e-qr+1+Vg;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,p=3,v=new Float32Array(p*u*d),_=new Float32Array(p*u*d);for(let f=0;f<d;f++){let S=f%3*2/3-1,A=f>2?0:-1,M=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];v.set(M,p*u*f);for(let b=0;b<u;b++){let w=c[b*2]*2-1,R=c[b*2+1]*2-1;f===0?gr.set(1,R,w):f===1?gr.set(-w,1,-R):f===2?gr.set(-w,R,1):f===3?gr.set(-1,R,-w):f===4?gr.set(-w,-1,R):gr.set(w,R,-1),gr.toArray(_,(f*u+b)*p)}}let m=new Et;m.setAttribute("position",new Ft(v,p)),m.setAttribute("outputDirection",new Ft(_,p)),i.push(new He(m,null)),r>qr&&r--}return{lodMeshes:i,sizeLods:t}}function tc(e,t,i){let r=new Gt(e,t,i);return r.texture.mapping=$a,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Yr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Xg(e,t,i){return new Lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function jg(e,t,i){return new Lt({name:"SphericalGaussianBlur",defines:{SAMPLES:Hg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function ic(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function rc(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function Wn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ac=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ah(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jt(5,5,5),a=new Lt({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Ct});a.uniforms.tEquirect.value=t;let n=new He(r,a),s=t.minFilter;return t.minFilter===wi&&(t.minFilter=wt),new zp(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function qg(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,p=!1){return u==null?null:p?s(u):n(u)}function n(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ms||p===xs)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let _=new ac(v.height);return _.fromEquirectangularTexture(e,u),t.set(u,_),u.addEventListener("dispose",h),o(_.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let p=u.mapping,v=p===Ms||p===xs,_=p===or||p===yr;if(v||_){let m=i.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return r===null&&(r=new Qo(e)),m=v?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return v&&S&&S.height>0||_&&S&&l(S)?(r===null&&(r=new Qo(e)),m=v?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,p){return p===Ms?u.mapping=or:p===xs&&(u.mapping=yr),u}function l(u){let p=0,v=6;for(let _=0;_<v;_++)u[_]!==void 0&&p++;return p===v}function h(u){let p=u.target;p.removeEventListener("dispose",h);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function c(u){let p=u.target;p.removeEventListener("dispose",c);let v=i.get(p);v!==void 0&&(i.delete(p),v.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function Yg(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&br("WebGLRenderer: "+r+" extension not supported."),a}}}function Zg(e,t,i,r){let a={},n=new WeakMap;function s(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",s),delete a[u.id];let p=n.get(u);p&&(t.remove(p),n.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],e.ARRAY_BUFFER)}function h(d){let u=[],p=d.index,v=d.attributes.position,_=0;if(v===void 0)return;if(p!==null){let S=p.array;_=p.version;for(let A=0,M=S.length;A<M;A+=3){let b=S[A+0],w=S[A+1],R=S[A+2];u.push(b,w,w,R,R,b)}}else{let S=v.array;_=v.version;for(let A=0,M=S.length/3-1;A<M;A+=3){let b=A+0,w=A+1,R=A+2;u.push(b,w,w,R,R,b)}}let m=new(v.count>=65535?lh:oh)(u,1);m.version=_;let f=n.get(d);f&&t.remove(f),n.set(d,m)}function c(d){let u=n.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function Jg(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,u){e.drawElements(r,u,n,d*s),i.update(u,r,1)}function h(d,u,p){p!==0&&(e.drawElementsInstanced(r,u,n,d*s,p),i.update(u,r,p))}function c(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,d,0,p);let v=0;for(let _=0;_<p;_++)v+=u[_];i.update(v,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Kg(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Be("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function $g(e,t,i){let r=new WeakMap,a=new ht;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==d){let p=function(){g.dispose(),r.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],M=0;v===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let b=o.attributes.position.count*M,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*w*4*d),g=new Zl(R,b,w,d);g.type=Kt,g.needsUpdate=!0;let T=M*4;for(let B=0;B<d;B++){let P=f[B],I=S[B],K=A[B],U=b*w*4*B;for(let V=0;V<P.count;V++){let q=V*T;v===!0&&(a.fromBufferAttribute(P,V),R[U+q+0]=a.x,R[U+q+1]=a.y,R[U+q+2]=a.z,R[U+q+3]=0),_===!0&&(a.fromBufferAttribute(I,V),R[U+q+4]=a.x,R[U+q+5]=a.y,R[U+q+6]=a.z,R[U+q+7]=0),m===!0&&(a.fromBufferAttribute(K,V),R[U+q+8]=a.x,R[U+q+9]=a.y,R[U+q+10]=a.z,R[U+q+11]=K.itemSize===4?a.w:1)}}u={count:d,texture:g,size:new be(b,w)},r.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let _=0;_<h.length;_++)p+=h[_];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function Qg(e,t,i,r,a){let n=new WeakMap;function s(h){let c=a.render.frame,d=h.geometry,u=t.get(h,d);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return u}function o(){n=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}var e0={[ps]:"LINEAR_TONE_MAPPING",[fs]:"REINHARD_TONE_MAPPING",[ms]:"CINEON_TONE_MAPPING",[da]:"ACES_FILMIC_TONE_MAPPING",[vs]:"AGX_TONE_MAPPING",[_s]:"NEUTRAL_TONE_MAPPING",[gs]:"CUSTOM_TONE_MAPPING"};function t0(e,t,i,r,a,n){let s=new Gt(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new Et;h.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new it([0,2,0,0,2,0],2));let c=new Oh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new He(h,c),u=new za(-1,1,1,-1,0,1),p=null,v=null,_=!1,m,f=null,S=[],A=!1;this.setSize=function(M,b){s.setSize(M,b),o!==null&&o.setSize(M,b),l!==null&&l.setSize(M,b);for(let w=0;w<S.length;w++){let R=S[w];R.setSize&&R.setSize(M,b)}},this.setEffects=function(M){S=M,A=S.length>0&&S[0].isRenderPass===!0;let b=s.width,w=s.height;S.length>0&&o===null&&(o=new Gt(b,w,{type:Xt,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(b,w,{type:Xt,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let g=S[R];g.setSize&&g.setSize(b,w)}},this.begin=function(M,b){if(_||M.toneMapping===ui&&S.length===0)return!1;if(f=b,b!==null){let w=b.width,R=b.height;(s.width!==w||s.height!==R)&&this.setSize(w,R)}return A===!1&&M.setRenderTarget(s),m=M.toneMapping,M.toneMapping=ui,!0},this.hasRenderPass=function(){return A},this.end=function(M,b){M.toneMapping=m,_=!0;let w=s,R=o;for(let g=0;g<S.length;g++){let T=S[g];T.enabled!==!1&&(T.render(M,R,w,b),T.needsSwap!==!1&&(w=R,R=R===o?l:o))}if(p!==M.outputColorSpace||v!==M.toneMapping){p=M.outputColorSpace,v=M.toneMapping,c.defines={},Xe.getTransfer(p)===rt&&(c.defines.SRGB_TRANSFER="");let g=e0[v];g&&(c.defines[g]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(f),M.render(d,u),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}var nc=new Ot,el=new Br(1,1),sc=new Zl,oc=new dd,lc=new Ah,hc=[],cc=[],uc=new Float32Array(16),dc=new Float32Array(9),pc=new Float32Array(4);function Zr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=hc[a];if(n===void 0&&(n=new Float32Array(a),hc[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function At(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Rt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Xn(e,t){let i=cc[t];i===void 0&&(i=new Int32Array(t),cc[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function i0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function r0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(At(i,t))return;e.uniform2fv(this.addr,t),Rt(i,t)}}function a0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(At(i,t))return;e.uniform3fv(this.addr,t),Rt(i,t)}}function n0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(At(i,t))return;e.uniform4fv(this.addr,t),Rt(i,t)}}function s0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(At(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Rt(i,t)}else{if(At(i,r))return;pc.set(r),e.uniformMatrix2fv(this.addr,!1,pc),Rt(i,r)}}function o0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(At(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Rt(i,t)}else{if(At(i,r))return;dc.set(r),e.uniformMatrix3fv(this.addr,!1,dc),Rt(i,r)}}function l0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(At(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Rt(i,t)}else{if(At(i,r))return;uc.set(r),e.uniformMatrix4fv(this.addr,!1,uc),Rt(i,r)}}function h0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function c0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(At(i,t))return;e.uniform2iv(this.addr,t),Rt(i,t)}}function u0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(At(i,t))return;e.uniform3iv(this.addr,t),Rt(i,t)}}function d0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(At(i,t))return;e.uniform4iv(this.addr,t),Rt(i,t)}}function p0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function f0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(At(i,t))return;e.uniform2uiv(this.addr,t),Rt(i,t)}}function m0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(At(i,t))return;e.uniform3uiv(this.addr,t),Rt(i,t)}}function g0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(At(i,t))return;e.uniform4uiv(this.addr,t),Rt(i,t)}}function v0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(el.compareFunction=i.isReversedDepthBuffer()?lo:oo,n=el):n=nc,i.setTexture2D(t||n,a)}function _0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||oc,a)}function M0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||lc,a)}function x0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||sc,a)}function y0(e){switch(e){case 5126:return i0;case 35664:return r0;case 35665:return a0;case 35666:return n0;case 35674:return s0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return h0;case 35667:case 35671:return c0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return f0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return x0}}function S0(e,t){e.uniform1fv(this.addr,t)}function T0(e,t){let i=Zr(t,this.size,2);e.uniform2fv(this.addr,i)}function b0(e,t){let i=Zr(t,this.size,3);e.uniform3fv(this.addr,i)}function E0(e,t){let i=Zr(t,this.size,4);e.uniform4fv(this.addr,i)}function w0(e,t){let i=Zr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function A0(e,t){let i=Zr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function R0(e,t){let i=Zr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function C0(e,t){e.uniform1iv(this.addr,t)}function P0(e,t){e.uniform2iv(this.addr,t)}function L0(e,t){e.uniform3iv(this.addr,t)}function N0(e,t){e.uniform4iv(this.addr,t)}function I0(e,t){e.uniform1uiv(this.addr,t)}function D0(e,t){e.uniform2uiv(this.addr,t)}function U0(e,t){e.uniform3uiv(this.addr,t)}function O0(e,t){e.uniform4uiv(this.addr,t)}function F0(e,t,i){let r=this.cache,a=t.length,n=Xn(i,a);At(r,n)||(e.uniform1iv(this.addr,n),Rt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=el:s=nc;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function B0(e,t,i){let r=this.cache,a=t.length,n=Xn(i,a);At(r,n)||(e.uniform1iv(this.addr,n),Rt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||oc,n[s])}function z0(e,t,i){let r=this.cache,a=t.length,n=Xn(i,a);At(r,n)||(e.uniform1iv(this.addr,n),Rt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||lc,n[s])}function V0(e,t,i){let r=this.cache,a=t.length,n=Xn(i,a);At(r,n)||(e.uniform1iv(this.addr,n),Rt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||sc,n[s])}function H0(e){switch(e){case 5126:return S0;case 35664:return T0;case 35665:return b0;case 35666:return E0;case 35674:return w0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return N0;case 5125:return I0;case 36294:return D0;case 36295:return U0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return V0}}var k0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y0(t.type)}},G0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H0(t.type)}},W0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},tl=/(\w+)(\])?(\[|\.)?/g;function fc(e,t){e.seq.push(t),e.map[t.id]=t}function X0(e,t,i){let r=e.name,a=r.length;for(tl.lastIndex=0;;){let n=tl.exec(r),s=tl.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){fc(i,h===void 0?new k0(o,e,t):new G0(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new W0(o),fc(i,c)),i=c}}}var jn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);X0(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function mc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var j0=37297,q0=0;function Y0(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var gc=new Ve;function Z0(e){Xe._getMatrix(gc,Xe.workingColorSpace,e);let t=`mat3( ${gc.elements.map(i=>i.toFixed(4))} )`;switch(Xe.getTransfer(e)){case ln:return[t,"LinearTransferOETF"];case rt:return[t,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function vc(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Y0(e.getShaderSource(t),s)}else return a}function J0(e,t){let i=Z0(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var K0={[ps]:"Linear",[fs]:"Reinhard",[ms]:"Cineon",[da]:"ACESFilmic",[vs]:"AgX",[_s]:"Neutral",[gs]:"Custom"};function $0(e,t){let i=K0[t];return i===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var qn=new L;function Q0(){Xe.getLuminanceCoefficients(qn);let e=qn.x.toFixed(4),t=qn.y.toFixed(4),i=qn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function tv(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function iv(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function ka(e){return e!==""}function _c(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(e){return e.replace(rv,nv)}var av=new Map;function nv(e,t){let i=ke[t];if(i===void 0){let r=av.get(t);if(r!==void 0)i=ke[r],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return il(i)}var sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(e){return e.replace(sv,ov)}function ov(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function yc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var lv={[oa]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function hv(e){return lv[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cv={[or]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE_UV"};function uv(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":cv[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var dv={[yr]:"ENVMAP_MODE_REFRACTION"};function pv(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":dv[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fv={[ds]:"ENVMAP_BLENDING_MULTIPLY",[wu]:"ENVMAP_BLENDING_MIX",[Au]:"ENVMAP_BLENDING_ADD"};function mv(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":fv[e.combine]||"ENVMAP_BLENDING_NONE"}function gv(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function vv(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=hv(i),h=uv(i),c=pv(i),d=mv(i),u=gv(i),p=ev(i),v=tv(n),_=a.createProgram(),m,f,S=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(ka).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(ka).join(`
`),f.length>0&&(f+=`
`)):(m=[yc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),f=[yc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ui?"#define TONE_MAPPING":"",i.toneMapping!==ui?ke.tonemapping_pars_fragment:"",i.toneMapping!==ui?$0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,J0("linearToOutputTexel",i.outputColorSpace),Q0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ka).join(`
`)),s=il(s),s=_c(s,i),s=Mc(s,i),o=il(o),o=_c(o,i),o=Mc(o,i),s=xc(s),o=xc(o),i.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=S+m+s,M=S+f+o,b=mc(a,a.VERTEX_SHADER,A),w=mc(a,a.FRAGMENT_SHADER,M);a.attachShader(_,b),a.attachShader(_,w),i.index0AttributeName!==void 0?a.bindAttribLocation(_,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function R(P){if(e.debug.checkShaderErrors){let I=a.getProgramInfoLog(_)||"",K=a.getShaderInfoLog(b)||"",U=a.getShaderInfoLog(w)||"",V=I.trim(),q=K.trim(),G=U.trim(),ne=!0,j=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(ne=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,_,b,w);else{let Z=vc(a,b,"vertex"),te=vc(a,w,"fragment");Be("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+Z+`
`+te)}else V!==""?Pe("WebGLProgram: Program Info Log:",V):(q===""||G==="")&&(j=!1);j&&(P.diagnostics={runnable:ne,programLog:V,vertexShader:{log:q,prefix:m},fragmentShader:{log:G,prefix:f}})}a.deleteShader(b),a.deleteShader(w),g=new jn(a,_),T=iv(a,_)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let B=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=a.getProgramParameter(_,j0)),B},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}var _v=0,Mv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xv(e),t.set(e,i)),i}},xv=class{constructor(e){this.id=_v++,this.code=e,this.usedTimes=0}};function yv(e){return e===lr||e===sn||e===on}function Sv(e,t,i,r,a,n){let s=new Ql,o=new Mv,l=new Set,h=[],c=new Map,d=r.logarithmicDepthBuffer,u=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,T,B,P,I,K){let U=P.fog,V=I.geometry,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,ne=t.get(g.envMap||q,G),j=ne&&ne.mapping===$a?ne.image.height:null,Z=p[g.type];g.precision!==null&&(u=r.getMaxPrecision(g.precision),u!==g.precision&&Pe("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=te!==void 0?te.length:0,ye=0;V.morphAttributes.position!==void 0&&(ye=1),V.morphAttributes.normal!==void 0&&(ye=2),V.morphAttributes.color!==void 0&&(ye=3);let Je,Ue,J,ie;if(Z){let mt=xi[Z];Je=mt.vertexShader,Ue=mt.fragmentShader}else{Je=g.vertexShader,Ue=g.fragmentShader;let mt=o.getVertexShaderStage(g),Ye=o.getFragmentShaderStage(g);o.update(g,mt,Ye),J=mt.id,ie=Ye.id}let he=e.getRenderTarget(),Ne=e.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,fe=I.isBatchedMesh===!0,et=!!g.map,Ke=!!g.matcap,Fe=!!ne,at=!!g.aoMap,pt=!!g.lightMap,ct=!!g.bumpMap&&g.wireframe===!1,$e=!!g.normalMap,xt=!!g.displacementMap,ft=!!g.emissiveMap,ut=!!g.metalnessMap,D=!!g.roughnessMap,yt=g.anisotropy>0,qe=g.clearcoat>0,nt=g.dispersion>0,E=g.retroreflectivity>0,x=g.iridescence>0,N=g.sheen>0,X=g.transmission>0,Q=yt&&!!g.anisotropyMap,de=qe&&!!g.clearcoatMap,me=qe&&!!g.clearcoatNormalMap,H=qe&&!!g.clearcoatRoughnessMap,ce=x&&!!g.iridescenceMap,pe=x&&!!g.iridescenceThicknessMap,_e=N&&!!g.sheenColorMap,re=N&&!!g.sheenRoughnessMap,Ee=!!g.specularMap,Ae=!!g.specularColorMap,De=!!g.specularIntensityMap,tt=X&&!!g.transmissionMap,z=X&&!!g.thicknessMap,ee=!!g.gradientMap,se=!!g.alphaMap,Se=g.alphaTest>0,we=!!g.alphaHash,oe=!!g.extensions,Me=ui;g.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Oe={shaderID:Z,shaderType:g.type,shaderName:g.name,vertexShader:Je,fragmentShader:Ue,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:ie,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:fe,batchingColor:fe&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:he===null?e.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:et,matcap:Ke,envMap:Fe,envMapMode:Fe&&ne.mapping,envMapCubeUVHeight:j,aoMap:at,lightMap:pt,bumpMap:ct,normalMap:$e,displacementMap:xt,emissiveMap:ft,normalMapObjectSpace:$e&&g.normalMapType===Nu,normalMapTangentSpace:$e&&g.normalMapType===va,packedNormalMap:$e&&g.normalMapType===va&&yv(g.normalMap.format),metalnessMap:ut,roughnessMap:D,anisotropy:yt,anisotropyMap:Q,clearcoat:qe,clearcoatMap:de,clearcoatNormalMap:me,clearcoatRoughnessMap:H,dispersion:nt,retroreflection:E,iridescence:x,iridescenceMap:ce,iridescenceThicknessMap:pe,sheen:N,sheenColorMap:_e,sheenRoughnessMap:re,specularMap:Ee,specularColorMap:Ae,specularIntensityMap:De,transmission:X,transmissionMap:tt,thicknessMap:z,gradientMap:ee,opaque:g.transparent===!1&&g.blending===ha&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:Se,alphaHash:we,combine:g.combine,mapUv:et&&v(g.map.channel),aoMapUv:at&&v(g.aoMap.channel),lightMapUv:pt&&v(g.lightMap.channel),bumpMapUv:ct&&v(g.bumpMap.channel),normalMapUv:$e&&v(g.normalMap.channel),displacementMapUv:xt&&v(g.displacementMap.channel),emissiveMapUv:ft&&v(g.emissiveMap.channel),metalnessMapUv:ut&&v(g.metalnessMap.channel),roughnessMapUv:D&&v(g.roughnessMap.channel),anisotropyMapUv:Q&&v(g.anisotropyMap.channel),clearcoatMapUv:de&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:me&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:re&&v(g.sheenRoughnessMap.channel),specularMapUv:Ee&&v(g.specularMap.channel),specularColorMapUv:Ae&&v(g.specularColorMap.channel),specularIntensityMapUv:De&&v(g.specularIntensityMap.channel),transmissionMapUv:tt&&v(g.transmissionMap.channel),thicknessMapUv:z&&v(g.thicknessMap.channel),alphaMapUv:se&&v(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($e||yt),vertexNormals:!!V.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(et||se),fog:!!U,useFog:g.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||V.attributes.normal===void 0&&$e===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ye,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&B.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:et&&g.map.isVideoTexture===!0&&Xe.getTransfer(g.map.colorSpace)===rt,decodeVideoTextureEmissive:ft&&g.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(g.emissiveMap.colorSpace)===rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Wt,flipSided:g.side===Ut,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:oe&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&g.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function m(g){let T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(let B in g.defines)T.push(B),T.push(g.defines[B]);return g.isRawShaderMaterial===!1&&(f(T,g),S(T,g),T.push(e.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function f(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numSunLights),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numSunLightShadows),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function S(g,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function A(g){let T=p[g.type],B;if(T){let P=xi[T];B=Ki.clone(P.uniforms)}else B=g.uniforms;return B}function M(g,T){let B=c.get(T);return B!==void 0?++B.usedTimes:(B=new vv(e,T,g,a),h.push(B),c.set(T,B)),B}function b(g){if(--g.usedTimes===0){let T=h.indexOf(g);h[T]=h[h.length-1],h.pop(),c.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:R}}function Tv(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function bv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Sc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Tc(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,_,m,f){let S=e[t];return S===void 0?(S={id:u.id,object:u,geometry:p,material:v,materialVariant:s(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:f},e[t]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=v,S.materialVariant=s(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=m,S.group=f),t++,S}function l(u,p,v,_,m,f,S){S.reversedDepth===!0&&(m=-m);let A=o(u,p,v,_,m,f);v.transmission>0?r.push(A):v.transparent===!0?a.push(A):i.push(A)}function h(u,p,v,_,m,f){let S=o(u,p,v,_,m,f);v.transmission>0?r.unshift(S):v.transparent===!0?a.unshift(S):i.unshift(S)}function c(u,p){i.length>1&&i.sort(u||bv),r.length>1&&r.sort(p||Sc),a.length>1&&a.sort(p||Sc)}function d(){for(let u=t,p=e.length;u<p;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:d,sort:c}}function Ev(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Tc,e.set(r,[s])):a>=n.length?(s=new Tc,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function wv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new L,color:new Le};break;case"SpotLight":i={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=i,i}}}function Av(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var Rv=0;function Cv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Pv(e){let t=new wv,i=Av(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new L);let a=new L,n=new ze,s=new ze;function o(h){let c=0,d=0,u=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let p=0,v=0,_=0,m=0,f=0,S=0,A=0,M=0,b=0,w=0,R=0,g=0,T=0,B=0;h.sort(Cv);for(let I=0,K=h.length;I<K;I++){let U=h[I],V=U.color,q=U.intensity,G=U.distance,ne=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===lr?ne=U.shadow.map.texture:ne=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)c+=V.r*q,d+=V.g*q,u+=V.b*q;else if(U.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(U.sh.coefficients[j],q);B++}else if(U.isSunLight){let j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Z=U.shadow,te=i.get(U);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[v]=te,r.sunShadowMap[v]=ne;let xe=Z.getViewportCount();for(let ye=0;ye<xe;ye++)r.sunShadowMatrix[_+ye]=Z.getMatrix(ye),r.sunShadowCascade[_+ye]=Z._cascadeData[ye];_+=xe,v++}r.sun[p]=j,p++}else if(U.isDirectionalLight){let j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Z=U.shadow,te=i.get(U);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,r.directionalShadow[m]=te,r.directionalShadowMap[m]=ne,r.directionalShadowMatrix[m]=U.shadow.matrix,b++}r.directional[m]=j,m++}else if(U.isSpotLight){let j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(V).multiplyScalar(q),j.distance=G,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,r.spot[S]=j;let Z=U.shadow;if(U.map&&(r.spotLightMap[g]=U.map,g++,Z.updateMatrices(U),U.castShadow&&T++),r.spotLightMatrix[S]=Z.matrix,U.castShadow){let te=i.get(U);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,r.spotShadow[S]=te,r.spotShadowMap[S]=ne,R++}S++}else if(U.isRectAreaLight){let j=t.get(U);j.color.copy(V).multiplyScalar(q),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),r.rectArea[A]=j,A++}else if(U.isPointLight){let j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){let Z=U.shadow,te=i.get(U);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,r.pointShadow[f]=te,r.pointShadowMap[f]=ne,r.pointShadowMatrix[f]=U.shadow.matrix,w++}r.point[f]=j,f++}else if(U.isHemisphereLight){let j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(q),j.groundColor.copy(U.groundColor).multiplyScalar(q),r.hemi[M]=j,M++}}A>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=u;let P=r.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==S||P.rectAreaLength!==A||P.hemiLength!==M||P.numSunShadows!==v||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==R||P.numSpotMaps!==g||P.numLightProbes!==B)&&(r.sun.length=p,r.directional.length=m,r.spot.length=S,r.rectArea.length=A,r.point.length=f,r.hemi.length=M,r.sunShadow.length=v,r.sunShadowMap.length=v,r.sunShadowMatrix.length=_,r.sunShadowCascade.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=w,r.pointShadowMap.length=w,r.pointShadowMatrix.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.spotLightMatrix.length=R+g-T,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=B,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=S,P.rectAreaLength=A,P.hemiLength=M,P.numSunShadows=v,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=R,P.numSpotMaps=g,P.numLightProbes=B,r.version=Rv++)}function l(h,c){let d=0,u=0,p=0,v=0,_=0,m=0,f=c.matrixWorldInverse;for(let S=0,A=h.length;S<A;S++){let M=h[S];if(M.isSunLight){let b=r.sun[d];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let b=r.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(f),u++}else if(M.isSpotLight){let b=r.spot[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(f),v++}else if(M.isRectAreaLight){let b=r.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),s.identity(),n.copy(M.matrixWorld),n.premultiply(f),s.extractRotation(n),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),_++}else if(M.isPointLight){let b=r.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let b=r.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function bc(e){let t=new Pv(e),i=[],r=[],a=[];function n(u){d.camera=u,i.length=0,r.length=0,a.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){a.push(u)}function h(){t.setup(i)}function c(u){t.setupView(i,u)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:h,setupLightsView:c,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Lv(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new bc(e),t.set(a,[o])):n>=s.length?(o=new bc(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Uv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Ec=new ze,Ga=new L,rl=new L;function Ov(e,t,i){let r=new Uo,a=new be,n=new be,s=new ht,o=new pp,l=new fp,h={},c=i.maxTextureSize,d={[Hi]:Ut,[Ut]:Hi,[Wt]:Wt},u=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Nv,fragmentShader:Iv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let v=new Et;v.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let f=this.type;this.render=function(w,R,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===uu&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);let T=e.getRenderTarget(),B=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),I=e.state;I.setBlending(Ct),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let K=f!==this.type;K&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(V=>V.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,V=w.length;U<V;U++){let q=w[U],G=q.shadow;if(G===void 0){Pe("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);let ne=G.getFrameExtents();a.multiply(ne),n.copy(G.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/ne.x),a.x=n.x*ne.x,G.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/ne.y),a.y=n.y*ne.y,G.mapSize.y=n.y));let j=e.state.buffers.depth.getReversed();if(G.camera._reversedDepth=j,G.map===null||K===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===la){if(q.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Gt(a.x,a.y,{format:lr,type:Xt,minFilter:wt,magFilter:wt,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new Br(a.x,a.y,Kt),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=Ai,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=_t,G.map.depthTexture.magFilter=_t}else q.isPointLight?(G.map=new ac(a.x),G.map.depthTexture=new Vd(a.x,pi)):(G.map=new Gt(a.x,a.y),G.map.depthTexture=new Br(a.x,a.y,pi)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=Ai,this.type===oa?(G.map.depthTexture.compareFunction=j?lo:oo,G.map.depthTexture.minFilter=wt,G.map.depthTexture.magFilter=wt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=_t,G.map.depthTexture.magFilter=_t);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==a.x||G.map.height!==a.y)&&G.map.setSize(a.x,a.y);let Z=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,g);for(let te=0;te<Z;te++){let xe=G.getCamera(te);if(q.isPointLight){let ye=G.camera,Je=G.matrix,Ue=q.distance||ye.far;Ue!==ye.far&&(ye.far=Ue,ye.updateProjectionMatrix()),Ga.setFromMatrixPosition(q.matrixWorld),ye.position.copy(Ga),rl.copy(ye.position),rl.add(Dv[te]),ye.up.copy(Uv[te]),ye.lookAt(rl),ye.updateMatrixWorld(),Je.makeTranslation(-Ga.x,-Ga.y,-Ga.z),Ec.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ec,ye.coordinateSystem,ye.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)e.setRenderTarget(G.map,te),e.clear();else{te===0&&(e.setRenderTarget(G.map),e.clear());let ye=G.getViewport(te);s.set(n.x*ye.x,n.y*ye.y,n.x*ye.z,n.y*ye.w),I.viewport(s)}r=G.getFrustum(te),M(R,g,xe,q,this.type)}G.isPointLightShadow!==!0&&this.type===la&&S(G,g),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(T,B,P)};function S(w,R){let g=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Gt(a.x,a.y,{format:lr,type:Xt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(R,null,g,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(R,null,g,p,_,null)}function A(w,R,g,T){let B=null,P=g.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)B=P;else if(B=g.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let I=B.uuid,K=R.uuid,U=h[I];U===void 0&&(U={},h[I]=U);let V=U[K];V===void 0&&(V=B.clone(),U[K]=V,R.addEventListener("dispose",b)),B=V}if(B.visible=R.visible,B.wireframe=R.wireframe,T===la?B.side=R.shadowSide!==null?R.shadowSide:R.side:B.side=R.shadowSide!==null?R.shadowSide:d[R.side],B.alphaMap=R.alphaMap,B.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,B.map=R.map,B.clipShadows=R.clipShadows,B.clippingPlanes=R.clippingPlanes,B.clipIntersection=R.clipIntersection,B.displacementMap=R.displacementMap,B.displacementScale=R.displacementScale,B.displacementBias=R.displacementBias,B.wireframeLinewidth=R.wireframeLinewidth,B.linewidth=R.linewidth,g.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let I=e.properties.get(B);I.light=g}return B}function M(w,R,g,T,B){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===la)&&(!w.frustumCulled||w.intersectsFrustum(r))){w.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,w.matrixWorld);let I=t.update(w),K=w.material;if(Array.isArray(K)){let U=I.groups;for(let V=0,q=U.length;V<q;V++){let G=U[V],ne=K[G.materialIndex];if(ne&&ne.visible){let j=A(w,ne,T,B);w.onBeforeShadow(e,w,R,g,I,j,G),e.renderBufferDirect(g,null,I,j,w,G),w.onAfterShadow(e,w,R,g,I,j,G)}}}else if(K.visible){let U=A(w,K,T,B);w.onBeforeShadow(e,w,R,g,I,U,null),e.renderBufferDirect(g,null,I,U,w,null),w.onAfterShadow(e,w,R,g,I,U,null)}}let P=w.children;for(let I=0,K=P.length;I<K;I++)M(P[I],R,g,T,B)}function b(w){w.target.removeEventListener("dispose",b);for(let R in h){let g=h[R],T=w.target.uuid;T in g&&(g[T].dispose(),delete g[T])}}}function Fv(e,t){function i(){let z=!1,ee=new ht,se=null,Se=new ht(0,0,0,0);return{setMask:function(we){se!==we&&!z&&(e.colorMask(we,we,we,we),se=we)},setLocked:function(we){z=we},setClear:function(we,oe,Me,Oe,mt){mt===!0&&(we*=Oe,oe*=Oe,Me*=Oe),ee.set(we,oe,Me,Oe),Se.equals(ee)===!1&&(e.clearColor(we,oe,Me,Oe),Se.copy(ee))},reset:function(){z=!1,se=null,Se.set(-1,0,0,0)}}}function r(){let z=!1,ee=!1,se=null,Se=null,we=null;return{setReversed:function(oe){if(ee!==oe){let Me=t.get("EXT_clip_control");oe?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ee=oe;let Oe=we;we=null,this.setClear(Oe)}},getReversed:function(){return ee},setTest:function(oe){oe?he(e.DEPTH_TEST):Ne(e.DEPTH_TEST)},setMask:function(oe){se!==oe&&!z&&(e.depthMask(oe),se=oe)},setFunc:function(oe){if(ee&&(oe=Wu[oe]),Se!==oe){switch(oe){case ns:e.depthFunc(e.NEVER);break;case ss:e.depthFunc(e.ALWAYS);break;case os:e.depthFunc(e.LESS);break;case ua:e.depthFunc(e.LEQUAL);break;case ls:e.depthFunc(e.EQUAL);break;case hs:e.depthFunc(e.GEQUAL);break;case cs:e.depthFunc(e.GREATER);break;case us:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Se=oe}},setLocked:function(oe){z=oe},setClear:function(oe){we!==oe&&(we=oe,ee&&(oe=1-oe),e.clearDepth(oe))},reset:function(){z=!1,se=null,Se=null,we=null,ee=!1}}}function a(){let z=!1,ee=null,se=null,Se=null,we=null,oe=null,Me=null,Oe=null,mt=null;return{setTest:function(Ye){z||(Ye?he(e.STENCIL_TEST):Ne(e.STENCIL_TEST))},setMask:function(Ye){ee!==Ye&&!z&&(e.stencilMask(Ye),ee=Ye)},setFunc:function(Ye,ti,ii){(se!==Ye||Se!==ti||we!==ii)&&(e.stencilFunc(Ye,ti,ii),se=Ye,Se=ti,we=ii)},setOp:function(Ye,ti,ii){(oe!==Ye||Me!==ti||Oe!==ii)&&(e.stencilOp(Ye,ti,ii),oe=Ye,Me=ti,Oe=ii)},setLocked:function(Ye){z=Ye},setClear:function(Ye){mt!==Ye&&(e.clearStencil(Ye),mt=Ye)},reset:function(){z=!1,ee=null,se=null,Se=null,we=null,oe=null,Me=null,Oe=null,mt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},d={},u={},p=new WeakMap,v=[],_=null,m=!1,f=null,S=null,A=null,M=null,b=null,w=null,R=null,g=new Le(0,0,0),T=0,B=!1,P=null,I=null,K=null,U=null,V=null,q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,j=e.getParameter(e.VERSION);j.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=ne>=1):j.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=ne>=2);let Z=null,te={},xe=e.getParameter(e.SCISSOR_BOX),ye=e.getParameter(e.VIEWPORT),Je=new ht().fromArray(xe),Ue=new ht().fromArray(ye);function J(z,ee,se,Se){let we=new Uint8Array(4),oe=e.createTexture();e.bindTexture(z,oe),e.texParameteri(z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Me=0;Me<se;Me++)z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?e.texImage3D(ee,0,e.RGBA,1,1,Se,0,e.RGBA,e.UNSIGNED_BYTE,we):e.texImage2D(ee+Me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,we);return oe}let ie={};ie[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(e.DEPTH_TEST),s.setFunc(ua),ct(!1),$e(gl),he(e.CULL_FACE),at(Ct);function he(z){c[z]!==!0&&(e.enable(z),c[z]=!0)}function Ne(z){c[z]!==!1&&(e.disable(z),c[z]=!1)}function Ie(z,ee){return u[z]!==ee?(e.bindFramebuffer(z,ee),u[z]=ee,z===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ee),z===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ee),!0):!1}function fe(z,ee){let se=v,Se=!1;if(z){se=p.get(ee),se===void 0&&(se=[],p.set(ee,se));let we=z.textures;if(se.length!==we.length||se[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,Me=we.length;oe<Me;oe++)se[oe]=e.COLOR_ATTACHMENT0+oe;se.length=we.length,Se=!0}}else se[0]!==e.BACK&&(se[0]=e.BACK,Se=!0);Se&&e.drawBuffers(se)}function et(z){return _!==z?(e.useProgram(z),_=z,!0):!1}let Ke={[ci]:e.FUNC_ADD,[du]:e.FUNC_SUBTRACT,[pu]:e.FUNC_REVERSE_SUBTRACT};Ke[fu]=e.MIN,Ke[mu]=e.MAX;let Fe={[ca]:e.ZERO,[gu]:e.ONE,[vu]:e.SRC_COLOR,[yl]:e.SRC_ALPHA,[yu]:e.SRC_ALPHA_SATURATE,[as]:e.DST_COLOR,[rs]:e.DST_ALPHA,[_u]:e.ONE_MINUS_SRC_COLOR,[Sl]:e.ONE_MINUS_SRC_ALPHA,[xu]:e.ONE_MINUS_DST_COLOR,[Mu]:e.ONE_MINUS_DST_ALPHA,[Su]:e.CONSTANT_COLOR,[Tu]:e.ONE_MINUS_CONSTANT_COLOR,[bu]:e.CONSTANT_ALPHA,[Eu]:e.ONE_MINUS_CONSTANT_ALPHA};function at(z,ee,se,Se,we,oe,Me,Oe,mt,Ye){if(z===Ct){m===!0&&(Ne(e.BLEND),m=!1);return}if(m===!1&&(he(e.BLEND),m=!0),z!==xl){if(z!==f||Ye!==B){if((S!==ci||b!==ci)&&(e.blendEquation(e.FUNC_ADD),S=ci,b=ci),Ye)switch(z){case ha:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case vl:e.blendFunc(e.ONE,e.ONE);break;case _l:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ml:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Be("WebGLState: Invalid blending: ",z);break}else switch(z){case ha:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case vl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case _l:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",z);break}A=null,M=null,w=null,R=null,g.set(0,0,0),T=0,f=z,B=Ye}return}we=we||ee,oe=oe||se,Me=Me||Se,(ee!==S||we!==b)&&(e.blendEquationSeparate(Ke[ee],Ke[we]),S=ee,b=we),(se!==A||Se!==M||oe!==w||Me!==R)&&(e.blendFuncSeparate(Fe[se],Fe[Se],Fe[oe],Fe[Me]),A=se,M=Se,w=oe,R=Me),(Oe.equals(g)===!1||mt!==T)&&(e.blendColor(Oe.r,Oe.g,Oe.b,mt),g.copy(Oe),T=mt),f=z,B=!1}function pt(z,ee){z.side===Wt?Ne(e.CULL_FACE):he(e.CULL_FACE);let se=z.side===Ut;ee&&(se=!se),ct(se),z.blending===ha&&z.transparent===!1?at(Ct):at(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),n.setMask(z.colorWrite);let Se=z.stencilWrite;o.setTest(Se),Se&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?he(e.SAMPLE_ALPHA_TO_COVERAGE):Ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function ct(z){P!==z&&(z?e.frontFace(e.CW):e.frontFace(e.CCW),P=z)}function $e(z){z!==hu?(he(e.CULL_FACE),z!==I&&(z===gl?e.cullFace(e.BACK):z===cu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ne(e.CULL_FACE),I=z}function xt(z){z!==K&&(G&&e.lineWidth(z),K=z)}function ft(z,ee,se){z?(he(e.POLYGON_OFFSET_FILL),(U!==ee||V!==se)&&(U=ee,V=se,s.getReversed()&&(ee=-ee),e.polygonOffset(ee,se))):Ne(e.POLYGON_OFFSET_FILL)}function ut(z){z?he(e.SCISSOR_TEST):Ne(e.SCISSOR_TEST)}function D(z){z===void 0&&(z=e.TEXTURE0+q-1),Z!==z&&(e.activeTexture(z),Z=z)}function yt(z,ee,se){se===void 0&&(Z===null?se=e.TEXTURE0+q-1:se=Z);let Se=te[se];Se===void 0&&(Se={type:void 0,texture:void 0},te[se]=Se),(Se.type!==z||Se.texture!==ee)&&(Z!==se&&(e.activeTexture(se),Z=se),e.bindTexture(z,ee||ie[z]),Se.type=z,Se.texture=ee)}function qe(){let z=te[Z];z!==void 0&&z.type!==void 0&&(e.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function nt(){try{e.compressedTexImage2D(...arguments)}catch(z){Be("WebGLState:",z)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(z){Be("WebGLState:",z)}}function x(){try{e.texSubImage2D(...arguments)}catch(z){Be("WebGLState:",z)}}function N(){try{e.texSubImage3D(...arguments)}catch(z){Be("WebGLState:",z)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(z){Be("WebGLState:",z)}}function Q(){try{e.compressedTexSubImage3D(...arguments)}catch(z){Be("WebGLState:",z)}}function de(){try{e.texStorage2D(...arguments)}catch(z){Be("WebGLState:",z)}}function me(){try{e.texStorage3D(...arguments)}catch(z){Be("WebGLState:",z)}}function H(){try{e.texImage2D(...arguments)}catch(z){Be("WebGLState:",z)}}function ce(){try{e.texImage3D(...arguments)}catch(z){Be("WebGLState:",z)}}function pe(z){return d[z]!==void 0?d[z]:e.getParameter(z)}function _e(z,ee){d[z]!==ee&&(e.pixelStorei(z,ee),d[z]=ee)}function re(z){Je.equals(z)===!1&&(e.scissor(z.x,z.y,z.z,z.w),Je.copy(z))}function Ee(z){Ue.equals(z)===!1&&(e.viewport(z.x,z.y,z.z,z.w),Ue.copy(z))}function Ae(z,ee){let se=h.get(ee);se===void 0&&(se=new WeakMap,h.set(ee,se));let Se=se.get(z);Se===void 0&&(Se=e.getUniformBlockIndex(ee,z.name),se.set(z,Se))}function De(z,ee){let se=h.get(ee).get(z);l.get(ee)!==se&&(e.uniformBlockBinding(ee,se,z.__bindingPointIndex),l.set(ee,se))}function tt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},d={},Z=null,te={},u={},p=new WeakMap,v=[],_=null,m=!1,f=null,S=null,A=null,M=null,b=null,w=null,R=null,g=new Le(0,0,0),T=0,B=!1,P=null,I=null,K=null,U=null,V=null,Je.set(0,0,e.canvas.width,e.canvas.height),Ue.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:he,disable:Ne,bindFramebuffer:Ie,drawBuffers:fe,useProgram:et,setBlending:at,setMaterial:pt,setFlipSided:ct,setCullFace:$e,setLineWidth:xt,setPolygonOffset:ft,setScissorTest:ut,activeTexture:D,bindTexture:yt,unbindTexture:qe,compressedTexImage2D:nt,compressedTexImage3D:E,texImage2D:H,texImage3D:ce,pixelStorei:_e,getParameter:pe,updateUBOMapping:Ae,uniformBlockBinding:De,texStorage2D:de,texStorage3D:me,texSubImage2D:x,texSubImage3D:N,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:re,viewport:Ee,reset:tt}}function Bv(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new be,c=new WeakMap,d=new Set,u,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,x){return v?new OffscreenCanvas(E,x):Ma("canvas")}function m(E,x,N){let X=1,Q=nt(E);if((Q.width>N||Q.height>N)&&(X=N/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let de=Math.floor(X*Q.width),me=Math.floor(X*Q.height);u===void 0&&(u=_(de,me));let H=x?_(de,me):u;return H.width=de,H.height=me,H.getContext("2d").drawImage(E,0,0,de,me),Pe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+de+"x"+me+")."),H}else return"data"in E&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function f(E){return E.generateMipmaps}function S(E){e.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(E,x,N,X,Q,de=!1){if(E!==null){if(e[E]!==void 0)return e[E];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let me;X&&(me=t.get("EXT_texture_norm16"),me||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=x;if(x===e.RED&&(N===e.FLOAT&&(H=e.R32F),N===e.HALF_FLOAT&&(H=e.R16F),N===e.UNSIGNED_BYTE&&(H=e.R8),N===e.UNSIGNED_SHORT&&me&&(H=me.R16_EXT),N===e.SHORT&&me&&(H=me.R16_SNORM_EXT)),x===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(H=e.R8UI),N===e.UNSIGNED_SHORT&&(H=e.R16UI),N===e.UNSIGNED_INT&&(H=e.R32UI),N===e.BYTE&&(H=e.R8I),N===e.SHORT&&(H=e.R16I),N===e.INT&&(H=e.R32I)),x===e.RG&&(N===e.FLOAT&&(H=e.RG32F),N===e.HALF_FLOAT&&(H=e.RG16F),N===e.UNSIGNED_BYTE&&(H=e.RG8),N===e.UNSIGNED_SHORT&&me&&(H=me.RG16_EXT),N===e.SHORT&&me&&(H=me.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(H=e.RG8UI),N===e.UNSIGNED_SHORT&&(H=e.RG16UI),N===e.UNSIGNED_INT&&(H=e.RG32UI),N===e.BYTE&&(H=e.RG8I),N===e.SHORT&&(H=e.RG16I),N===e.INT&&(H=e.RG32I)),x===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(H=e.RGB8UI),N===e.UNSIGNED_SHORT&&(H=e.RGB16UI),N===e.UNSIGNED_INT&&(H=e.RGB32UI),N===e.BYTE&&(H=e.RGB8I),N===e.SHORT&&(H=e.RGB16I),N===e.INT&&(H=e.RGB32I)),x===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),N===e.UNSIGNED_INT&&(H=e.RGBA32UI),N===e.BYTE&&(H=e.RGBA8I),N===e.SHORT&&(H=e.RGBA16I),N===e.INT&&(H=e.RGBA32I)),x===e.RGB&&(N===e.UNSIGNED_SHORT&&me&&(H=me.RGB16_EXT),N===e.SHORT&&me&&(H=me.RGB16_SNORM_EXT),N===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),N===e.UNSIGNED_INT_10F_11F_11F_REV&&(H=e.R11F_G11F_B10F)),x===e.RGBA){let ce=de?ln:Xe.getTransfer(Q);N===e.FLOAT&&(H=e.RGBA32F),N===e.HALF_FLOAT&&(H=e.RGBA16F),N===e.UNSIGNED_BYTE&&(H=ce===rt?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT&&me&&(H=me.RGBA16_EXT),N===e.SHORT&&me&&(H=me.RGBA16_SNORM_EXT),N===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function b(E,x){let N;return E?x===null||x===pi||x===Sr?N=e.DEPTH24_STENCIL8:x===Kt?N=e.DEPTH32F_STENCIL8:x===fa&&(N=e.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===pi||x===Sr?N=e.DEPTH_COMPONENT24:x===Kt?N=e.DEPTH_COMPONENT32F:x===fa&&(N=e.DEPTH_COMPONENT16),N}function w(E,x){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==_t&&E.minFilter!==wt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){let x=E.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&c.delete(x),x.isHTMLTexture&&d.delete(x)}function g(E){let x=E.target;x.removeEventListener("dispose",g),P(x)}function T(E){let x=r.get(E);if(x.__webglInit===void 0)return;let N=E.source,X=p.get(N);if(X){let Q=X[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&B(E),Object.keys(X).length===0&&p.delete(N)}r.remove(E)}function B(E){let x=r.get(E);e.deleteTexture(x.__webglTexture);let N=E.source,X=p.get(N);delete X[x.__cacheKey],s.memory.textures--}function P(E){let x=r.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),r.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let Q=0;Q<x.__webglFramebuffer[X].length;Q++)e.deleteFramebuffer(x.__webglFramebuffer[X][Q]);else e.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)e.deleteFramebuffer(x.__webglFramebuffer[X]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=E.textures;for(let X=0,Q=N.length;X<Q;X++){let de=r.get(N[X]);de.__webglTexture&&(e.deleteTexture(de.__webglTexture),s.memory.textures--),r.remove(N[X])}r.remove(E)}let I=0;function K(){I=0}function U(){return I}function V(E){I=E}function q(){let E=I;return E>=a.maxTextures&&Pe("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),I+=1,E}function G(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function ne(E,x){let N=r.get(E);if(E.isVideoTexture&&yt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){let X=E.image;if(X===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(N,E,x);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+x)}function j(E,x){let N=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ne(N,E,x);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+x)}function Z(E,x){let N=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ne(N,E,x);return}i.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+x)}function te(E,x){let N=r.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){Ie(N,E,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+x)}let xe={[Ht]:e.REPEAT,[di]:e.CLAMP_TO_EDGE,[Qa]:e.MIRRORED_REPEAT},ye={[_t]:e.NEAREST,[El]:e.NEAREST_MIPMAP_NEAREST,[pa]:e.NEAREST_MIPMAP_LINEAR,[wt]:e.LINEAR,[en]:e.LINEAR_MIPMAP_NEAREST,[wi]:e.LINEAR_MIPMAP_LINEAR},Je={[Du]:e.NEVER,[zu]:e.ALWAYS,[Uu]:e.LESS,[oo]:e.LEQUAL,[Ou]:e.EQUAL,[lo]:e.GEQUAL,[Fu]:e.GREATER,[Bu]:e.NOTEQUAL};function Ue(E,x){if(x.type===Kt&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===wt||x.magFilter===en||x.magFilter===pa||x.magFilter===wi||x.minFilter===wt||x.minFilter===en||x.minFilter===pa||x.minFilter===wi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,xe[x.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,xe[x.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,xe[x.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,ye[x.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,ye[x.minFilter]),x.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Je[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_t||x.minFilter!==pa&&x.minFilter!==wi||x.type===Kt&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function J(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));let X=x.source,Q=p.get(X);Q===void 0&&(Q={},p.set(X,Q));let de=G(x);if(de!==E.__cacheKey){Q[de]===void 0&&(Q[de]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,N=!0),Q[de].usedTimes++;let me=Q[E.__cacheKey];me!==void 0&&(Q[E.__cacheKey].usedTimes--,me.usedTimes===0&&B(x)),E.__cacheKey=de,E.__webglTexture=Q[de].texture}return N}function ie(E,x,N){return Math.floor(Math.floor(E/N)/x)}function he(E,x,N,X){let Q=E.updateRanges;if(Q.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,N,X,x.data);else{Q.sort((pe,_e)=>pe.start-_e.start);let de=0;for(let pe=1;pe<Q.length;pe++){let _e=Q[de],re=Q[pe],Ee=_e.start+_e.count,Ae=ie(re.start,x.width,4),De=ie(_e.start,x.width,4);re.start<=Ee+1&&Ae===De&&ie(re.start+re.count-1,x.width,4)===Ae?_e.count=Math.max(_e.count,re.start+re.count-_e.start):(++de,Q[de]=re)}Q.length=de+1;let me=i.getParameter(e.UNPACK_ROW_LENGTH),H=i.getParameter(e.UNPACK_SKIP_PIXELS),ce=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let pe=0,_e=Q.length;pe<_e;pe++){let re=Q[pe],Ee=Math.floor(re.start/4),Ae=Math.ceil(re.count/4),De=Ee%x.width,tt=Math.floor(Ee/x.width),z=Ae;i.pixelStorei(e.UNPACK_SKIP_PIXELS,De),i.pixelStorei(e.UNPACK_SKIP_ROWS,tt),i.texSubImage2D(e.TEXTURE_2D,0,De,tt,z,1,N,X,x.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,me),i.pixelStorei(e.UNPACK_SKIP_PIXELS,H),i.pixelStorei(e.UNPACK_SKIP_ROWS,ce)}}function Ne(E,x,N){let X=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=e.TEXTURE_3D);let Q=J(E,x),de=x.source;i.bindTexture(X,E.__webglTexture,e.TEXTURE0+N);let me=r.get(de);if(de.version!==me.__version||Q===!0){if(i.activeTexture(e.TEXTURE0+N),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){let ee=Xe.getPrimaries(Xe.workingColorSpace),se=x.colorSpace===Gi?null:Xe.getPrimaries(x.colorSpace),Se=x.colorSpace===Gi||ee===se?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let H=m(x.image,!1,a.maxTextureSize);H=qe(x,H);let ce=n.convert(x.format,x.colorSpace),pe=n.convert(x.type),_e=M(x.internalFormat,ce,pe,x.normalized,x.colorSpace,x.isVideoTexture);Ue(X,x);let re,Ee=x.mipmaps,Ae=x.isVideoTexture!==!0,De=me.__version===void 0||Q===!0,tt=de.dataReady,z=w(x,H);if(x.isDepthTexture)_e=b(x.format===ki,x.type),De&&(Ae?i.texStorage2D(e.TEXTURE_2D,1,_e,H.width,H.height):i.texImage2D(e.TEXTURE_2D,0,_e,H.width,H.height,0,ce,pe,null));else if(x.isDataTexture)if(Ee.length>0){Ae&&De&&i.texStorage2D(e.TEXTURE_2D,z,_e,Ee[0].width,Ee[0].height);for(let ee=0,se=Ee.length;ee<se;ee++)re=Ee[ee],Ae?tt&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,re.width,re.height,ce,pe,re.data):i.texImage2D(e.TEXTURE_2D,ee,_e,re.width,re.height,0,ce,pe,re.data);x.generateMipmaps=!1}else Ae?(De&&i.texStorage2D(e.TEXTURE_2D,z,_e,H.width,H.height),tt&&he(x,H,ce,pe)):i.texImage2D(e.TEXTURE_2D,0,_e,H.width,H.height,0,ce,pe,H.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ae&&De&&i.texStorage3D(e.TEXTURE_2D_ARRAY,z,_e,Ee[0].width,Ee[0].height,H.depth);for(let ee=0,se=Ee.length;ee<se;ee++)if(re=Ee[ee],x.format!==jt)if(ce!==null)if(Ae){if(tt)if(x.layerUpdates.size>0){let Se=Kh(re.width,re.height,x.format,x.type);for(let we of x.layerUpdates){let oe=re.data.subarray(we*Se/re.data.BYTES_PER_ELEMENT,(we+1)*Se/re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,we,re.width,re.height,1,ce,oe)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,H.depth,ce,re.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ee,_e,re.width,re.height,H.depth,0,re.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?tt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,H.depth,ce,pe,re.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ee,_e,re.width,re.height,H.depth,0,ce,pe,re.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ae&&De&&i.texStorage2D(e.TEXTURE_2D,z,_e,Ee[0].width,Ee[0].height);for(let ee=0,se=Ee.length;ee<se;ee++)re=Ee[ee],x.format!==jt?ce!==null?Ae?tt&&i.compressedTexSubImage2D(e.TEXTURE_2D,ee,0,0,re.width,re.height,ce,re.data):i.compressedTexImage2D(e.TEXTURE_2D,ee,_e,re.width,re.height,0,re.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?tt&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,re.width,re.height,ce,pe,re.data):i.texImage2D(e.TEXTURE_2D,ee,_e,re.width,re.height,0,ce,pe,re.data)}else if(x.isDataArrayTexture)if(Ae){if(De&&i.texStorage3D(e.TEXTURE_2D_ARRAY,z,_e,H.width,H.height,H.depth),tt)if(x.layerUpdates.size>0){let ee=Kh(H.width,H.height,x.format,x.type);for(let se of x.layerUpdates){let Se=H.data.subarray(se*ee/H.data.BYTES_PER_ELEMENT,(se+1)*ee/H.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,se,H.width,H.height,1,ce,pe,Se)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ce,pe,H.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,H.width,H.height,H.depth,0,ce,pe,H.data);else if(x.isData3DTexture)Ae?(De&&i.texStorage3D(e.TEXTURE_3D,z,_e,H.width,H.height,H.depth),tt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ce,pe,H.data)):i.texImage3D(e.TEXTURE_3D,0,_e,H.width,H.height,H.depth,0,ce,pe,H.data);else if(x.isFramebufferTexture){if(De)if(Ae)i.texStorage2D(e.TEXTURE_2D,z,_e,H.width,H.height);else{let ee=H.width,se=H.height;for(let Se=0;Se<z;Se++)i.texImage2D(e.TEXTURE_2D,Se,_e,ee,se,0,ce,pe,null),ee>>=1,se>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let ee=e.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),H.parentNode!==ee){ee.appendChild(H),d.add(x),ee.onpaint=se=>{let Se=se.changedElements;for(let we of d)Se.includes(we.image)&&(we.needsUpdate=!0)},ee.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,H);else{let se=e.RGBA,Se=e.RGBA,we=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,se,Se,we,H)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Ae&&De){let ee=nt(Ee[0]);i.texStorage2D(e.TEXTURE_2D,z,_e,ee.width,ee.height)}for(let ee=0,se=Ee.length;ee<se;ee++)re=Ee[ee],Ae?tt&&i.texSubImage2D(e.TEXTURE_2D,ee,0,0,ce,pe,re):i.texImage2D(e.TEXTURE_2D,ee,_e,ce,pe,re);x.generateMipmaps=!1}else if(Ae){if(De){let ee=nt(H);i.texStorage2D(e.TEXTURE_2D,z,_e,ee.width,ee.height)}tt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,pe,H)}else i.texImage2D(e.TEXTURE_2D,0,_e,ce,pe,H);f(x)&&S(X),me.__version=de.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ie(E,x,N){if(x.image.length!==6)return;let X=J(E,x),Q=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+N);let de=r.get(Q);if(Q.version!==de.__version||X===!0){i.activeTexture(e.TEXTURE0+N);let me=Xe.getPrimaries(Xe.workingColorSpace),H=x.colorSpace===Gi?null:Xe.getPrimaries(x.colorSpace),ce=x.colorSpace===Gi||me===H?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let pe=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,re=[];for(let oe=0;oe<6;oe++)!pe&&!_e?re[oe]=m(x.image[oe],!0,a.maxCubemapSize):re[oe]=_e?x.image[oe].image:x.image[oe],re[oe]=qe(x,re[oe]);let Ee=re[0],Ae=n.convert(x.format,x.colorSpace),De=n.convert(x.type),tt=M(x.internalFormat,Ae,De,x.normalized,x.colorSpace),z=x.isVideoTexture!==!0,ee=de.__version===void 0||X===!0,se=Q.dataReady,Se=w(x,Ee);Ue(e.TEXTURE_CUBE_MAP,x);let we;if(pe){z&&ee&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,tt,Ee.width,Ee.height);for(let oe=0;oe<6;oe++){we=re[oe].mipmaps;for(let Me=0;Me<we.length;Me++){let Oe=we[Me];x.format!==jt?Ae!==null?z?se&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,Oe.width,Oe.height,Ae,Oe.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,tt,Oe.width,Oe.height,0,Oe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,Oe.width,Oe.height,Ae,De,Oe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,tt,Oe.width,Oe.height,0,Ae,De,Oe.data)}}}else{if(we=x.mipmaps,z&&ee){we.length>0&&Se++;let oe=nt(re[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,tt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(_e){z?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,re[oe].width,re[oe].height,Ae,De,re[oe].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,tt,re[oe].width,re[oe].height,0,Ae,De,re[oe].data);for(let Me=0;Me<we.length;Me++){let Oe=we[Me].image[oe].image;z?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Oe.width,Oe.height,Ae,De,Oe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,tt,Oe.width,Oe.height,0,Ae,De,Oe.data)}}else{z?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ae,De,re[oe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,tt,Ae,De,re[oe]);for(let Me=0;Me<we.length;Me++){let Oe=we[Me];z?se&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Ae,De,Oe.image[oe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,tt,Ae,De,Oe.image[oe])}}}f(x)&&S(e.TEXTURE_CUBE_MAP),de.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function fe(E,x,N,X,Q,de){let me=n.convert(N.format,N.colorSpace),H=n.convert(N.type),ce=M(N.internalFormat,me,H,N.normalized,N.colorSpace),pe=r.get(x),_e=r.get(N);if(_e.__renderTarget=x,!pe.__hasExternalTextures){let re=Math.max(1,x.width>>de),Ee=Math.max(1,x.height>>de);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?i.texImage3D(Q,de,ce,re,Ee,x.depth,0,me,H,null):i.texImage2D(Q,de,ce,re,Ee,0,me,H,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),D(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,Q,_e.__webglTexture,0,ut(x)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,Q,_e.__webglTexture,de),i.bindFramebuffer(e.FRAMEBUFFER,null)}function et(E,x,N){if(e.bindRenderbuffer(e.RENDERBUFFER,E),x.depthBuffer){let X=x.depthTexture,Q=X&&X.isDepthTexture?X.type:null,de=b(x.stencilBuffer,Q),me=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;D(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ut(x),de,x.width,x.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,ut(x),de,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,de,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,me,e.RENDERBUFFER,E)}else{let X=x.textures;for(let Q=0;Q<X.length;Q++){let de=X[Q],me=n.convert(de.format,de.colorSpace),H=n.convert(de.type),ce=M(de.internalFormat,me,H,de.normalized,de.colorSpace);D(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ut(x),ce,x.width,x.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,ut(x),ce,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ce,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ke(E,x,N){let X=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=r.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),Ue(e.TEXTURE_CUBE_MAP,x.depthTexture);let pe=n.convert(x.depthTexture.format),_e=n.convert(x.depthTexture.type),re;x.depthTexture.format===Ai?re=e.DEPTH_COMPONENT24:x.depthTexture.format===ki&&(re=e.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,re,x.width,x.height,0,pe,_e,null)}}else ne(x.depthTexture,0);let de=Q.__webglTexture,me=ut(x),H=X?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,ce=x.depthTexture.format===ki?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ai)D(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,H,de,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,ce,H,de,0);else if(x.depthTexture.format===ki)D(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,H,de,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,ce,H,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(E){let x=r.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=X}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let X=0;X<6;X++)Ke(x.__webglFramebuffer[X],E,X);else{let X=E.texture.mipmaps;X&&X.length>0?Ke(x.__webglFramebuffer[0],E,0):Ke(x.__webglFramebuffer,E,0)}else if(N){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=e.createRenderbuffer(),et(x.__webglDepthbuffer[X],E,!1);else{let Q=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,de)}}else{let X=E.texture.mipmaps;if(X&&X.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),et(x.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,de)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function at(E,x,N){let X=r.get(E);x!==void 0&&fe(X.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&Fe(E)}function pt(E){let x=E.texture,N=r.get(E),X=r.get(x);E.addEventListener("dispose",g);let Q=E.textures,de=E.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=x.version,s.memory.textures++),de){N.__webglFramebuffer=[];for(let H=0;H<6;H++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[H]=[];for(let ce=0;ce<x.mipmaps.length;ce++)N.__webglFramebuffer[H][ce]=e.createFramebuffer()}else N.__webglFramebuffer[H]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let H=0;H<x.mipmaps.length;H++)N.__webglFramebuffer[H]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(me)for(let H=0,ce=Q.length;H<ce;H++){let pe=r.get(Q[H]);pe.__webglTexture===void 0&&(pe.__webglTexture=e.createTexture(),s.memory.textures++)}if(E.samples>0&&D(E)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let H=0;H<Q.length;H++){let ce=Q[H];N.__webglColorRenderbuffer[H]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[H]);let pe=n.convert(ce.format,ce.colorSpace),_e=n.convert(ce.type),re=M(ce.internalFormat,pe,_e,ce.normalized,ce.colorSpace,E.isXRRenderTarget===!0),Ee=ut(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,re,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+H,e.RENDERBUFFER,N.__webglColorRenderbuffer[H])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),et(N.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(de){i.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Ue(e.TEXTURE_CUBE_MAP,x);for(let H=0;H<6;H++)if(x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)fe(N.__webglFramebuffer[H][ce],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+H,ce);else fe(N.__webglFramebuffer[H],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);f(x)&&S(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(me){for(let H=0,ce=Q.length;H<ce;H++){let pe=Q[H],_e=r.get(pe),re=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(re,_e.__webglTexture),Ue(re,pe),fe(N.__webglFramebuffer,E,pe,e.COLOR_ATTACHMENT0+H,re,0),f(pe)&&S(re)}i.unbindTexture()}else{let H=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(H=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(H,X.__webglTexture),Ue(H,x),x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)fe(N.__webglFramebuffer[ce],E,x,e.COLOR_ATTACHMENT0,H,ce);else fe(N.__webglFramebuffer,E,x,e.COLOR_ATTACHMENT0,H,0);f(x)&&S(H),i.unbindTexture()}E.depthBuffer&&Fe(E)}function ct(E){let x=E.textures;for(let N=0,X=x.length;N<X;N++){let Q=x[N];if(f(Q)){let de=A(E),me=r.get(Q).__webglTexture;i.bindTexture(de,me),S(de),i.unbindTexture()}}}let $e=[],xt=[];function ft(E){if(E.samples>0){if(D(E)===!1){let x=E.textures,N=E.width,X=E.height,Q=e.COLOR_BUFFER_BIT,de=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=r.get(E),H=x.length>1;if(H)for(let pe=0;pe<x.length;pe++)i.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ce=E.texture.mipmaps;ce&&ce.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),H){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,me.__webglColorRenderbuffer[pe]);let _e=r.get(x[pe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,_e,0)}e.blitFramebuffer(0,0,N,X,0,0,N,X,Q,e.NEAREST),l===!0&&($e.length=0,xt.length=0,$e.push(e.COLOR_ATTACHMENT0+pe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&($e.push(de),xt.push(de),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,xt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,$e))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),H)for(let pe=0;pe<x.length;pe++){i.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.RENDERBUFFER,me.__webglColorRenderbuffer[pe]);let _e=r.get(x[pe]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.TEXTURE_2D,_e,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function ut(E){return Math.min(a.maxSamples,E.samples)}function D(E){let x=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function yt(E){let x=s.render.frame;c.get(E)!==x&&(c.set(E,x),E.update())}function qe(E,x){let N=E.colorSpace,X=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==qt&&N!==Gi&&(Xe.getTransfer(N)===rt?(X!==jt||Q!==kt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",N)),x}function nt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.getTextureUnits=U,this.setTextureUnits=V,this.setTexture2D=ne,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=at,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function zv(e,t){function i(r,a=Gi){let n,s=Xe.getTransfer(a);if(r===kt)return e.UNSIGNED_BYTE;if(r===Ss)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Ts)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Rl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Cl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===wl)return e.BYTE;if(r===Al)return e.SHORT;if(r===fa)return e.UNSIGNED_SHORT;if(r===ys)return e.INT;if(r===pi)return e.UNSIGNED_INT;if(r===Kt)return e.FLOAT;if(r===Xt)return e.HALF_FLOAT;if(r===Pl)return e.ALPHA;if(r===Ll)return e.RGB;if(r===jt)return e.RGBA;if(r===Ai)return e.DEPTH_COMPONENT;if(r===ki)return e.DEPTH_STENCIL;if(r===bs)return e.RED;if(r===Es)return e.RED_INTEGER;if(r===lr)return e.RG;if(r===ws)return e.RG_INTEGER;if(r===As)return e.RGBA_INTEGER;if(r===tn||r===rn||r===an||r===nn)if(s===rt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===tn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===an)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===tn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===an)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rs||r===Cs||r===Ps||r===Ls)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Rs)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cs)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ps)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ls)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ns||r===Is||r===Ds||r===Us||r===Os||r===sn||r===Fs)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Ns||r===Is)return s===rt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Ds)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Us)return n.COMPRESSED_R11_EAC;if(r===Os)return n.COMPRESSED_SIGNED_R11_EAC;if(r===sn)return n.COMPRESSED_RG11_EAC;if(r===Fs)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bs||r===zs||r===Vs||r===Hs||r===ks||r===Gs||r===Ws||r===Xs||r===js||r===qs||r===Ys||r===Zs||r===Js||r===Ks)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Bs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ks)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ws)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===js)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ys)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Js)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ks)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$s||r===Qs||r===eo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===$s)return s===rt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qs)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===eo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===to||r===io||r===on||r===ro)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===to)return n.COMPRESSED_RED_RGTC1_EXT;if(r===io)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===on)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ro)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Sr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Rh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Lt({vertexShader:Vv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gv=class extends hr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,p=null,v=typeof XRWebGLBinding<"u",_=new kv,m={},f=t.getContextAttributes(),S=null,A=null,M=[],b=[],w=new be,R=null,g=null,T=new Dt;T.viewport=new ht;let B=new Dt;B.viewport=new ht;let P=[T,B],I=new Vp,K=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=M[J];return ie===void 0&&(ie=new vo,M[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=M[J];return ie===void 0&&(ie=new vo,M[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=M[J];return ie===void 0&&(ie=new vo,M[J]=ie),ie.getHandSpace()};function V(J){let ie=b.indexOf(J.inputSource);if(ie===-1)return;let he=M[ie];he!==void 0&&(he.update(J.inputSource,J.frame,l||n),he.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",G);for(let J=0;J<M.length;J++){let ie=b[J];ie!==null&&(b[J]=null,M[J].disconnect(ie))}K=null,U=null,_.reset();for(let J in m)delete m[J];if(e.setRenderTarget(S),u=null,d=null,c=null,r=null,A=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),g!==null){let J=g.camera;J.fov=g.fov,J.zoom=g.zoom,J.updateProjectionMatrix(),g=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){s=J,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,he=null,Ne=null;f.depth&&(Ne=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=f.stencil?ki:Ai,he=f.stencil?Sr:pi);let Ie={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:a};c=this.getBinding(),d=c.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Gt(d.textureWidth,d.textureHeight,{format:jt,type:kt,depthTexture:new Br(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),A=new Gt(u.framebufferWidth,u.framebufferHeight,{format:jt,type:kt,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(J){for(let ie=0;ie<J.removed.length;ie++){let he=J.removed[ie],Ne=b.indexOf(he);Ne>=0&&(b[Ne]=null,M[Ne].disconnect(he))}for(let ie=0;ie<J.added.length;ie++){let he=J.added[ie],Ne=b.indexOf(he);if(Ne===-1){for(let fe=0;fe<M.length;fe++)if(fe>=b.length){b.push(he),Ne=fe;break}else if(b[fe]===null){b[fe]=he,Ne=fe;break}if(Ne===-1)break}let Ie=M[Ne];Ie&&Ie.connect(he)}}let ne=new L,j=new L;function Z(J,ie,he){ne.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(he.matrixWorld);let Ne=ne.distanceTo(j),Ie=ie.projectionMatrix.elements,fe=he.projectionMatrix.elements,et=Ie[14]/(Ie[10]-1),Ke=Ie[14]/(Ie[10]+1),Fe=(Ie[9]+1)/Ie[5],at=(Ie[9]-1)/Ie[5],pt=(Ie[8]-1)/Ie[0],ct=(fe[8]+1)/fe[0],$e=et*pt,xt=et*ct,ft=Ne/(-pt+ct),ut=ft*-pt;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ut),J.translateZ(ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ie[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let D=et+ft,yt=Ke+ft,qe=$e-ut,nt=xt+(Ne-ut),E=Fe*Ke/yt*D,x=at*Ke/yt*D;J.projectionMatrix.makePerspective(qe,nt,E,x,D,yt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function te(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ie=J.near,he=J.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(he=_.depthFar)),I.near=B.near=T.near=ie,I.far=B.far=T.far=he,(K!==I.near||U!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),K=I.near,U=I.far),I.layers.mask=J.layers.mask|6,T.layers.mask=I.layers.mask&-5,B.layers.mask=I.layers.mask&-3;let Ne=J.parent,Ie=I.cameras;te(I,Ne);for(let fe=0;fe<Ie.length;fe++)te(Ie[fe],Ne);Ie.length===2?Z(I,T,B):I.projectionMatrix.copy(T.projectionMatrix),g===null&&J.isPerspectiveCamera&&(g={camera:J,fov:J.fov,zoom:J.zoom}),xe(J,I,Ne)};function xe(J,ie,he){he===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(he.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Er*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(J){o=J,d!==null&&(d.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(J){return m[J]};let ye=null;function Je(J,ie){if(h=ie.getViewerPose(l||n),p=ie,h!==null){let he=h.views;u!==null&&(e.setRenderTargetFramebuffer(A,u.framebuffer),e.setRenderTarget(A));let Ne=!1;he.length!==I.cameras.length&&(I.cameras.length=0,Ne=!0);for(let fe=0;fe<he.length;fe++){let et=he[fe],Ke=null;if(u!==null)Ke=u.getViewport(et);else{let at=c.getViewSubImage(d,et);Ke=at.viewport,fe===0&&(e.setRenderTargetTextures(A,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(A))}let Fe=P[fe];Fe===void 0&&(Fe=new Dt,Fe.layers.enable(fe),Fe.viewport=new ht,P[fe]=Fe),Fe.matrix.fromArray(et.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(et.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),fe===0&&(I.matrix.copy(Fe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ne===!0&&I.cameras.push(Fe)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){c=i.getBinding();let fe=c.getDepthInformation(he[0]);fe&&fe.isValid&&fe.texture&&_.init(fe,r.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),c=i.getBinding();for(let fe=0;fe<he.length;fe++){let et=he[fe].camera;if(et){let Ke=m[et];Ke||(Ke=new Rh,m[et]=Ke);let Fe=c.getCameraImage(et);Ke.sourceTexture=Fe}}}}for(let he=0;he<M.length;he++){let Ne=b[he],Ie=M[he];Ne!==null&&Ie!==void 0&&Ie.update(Ne,ie,l||n)}ye&&ye(J,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}let Ue=new $h;Ue.setAnimationLoop(Je),this.setAnimationLoop=function(J){ye=J},this.dispose=function(){}}},Wv=new ze,wc=new Ve;wc.set(-1,0,0,0,1,0,0,0,1);function Xv(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,Uh(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,S,A,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?n(m,f):f.isMeshLambertMaterial?(n(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(n(m,f),d(m,f)):f.isMeshPhongMaterial?(n(m,f),c(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(n(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(n(m,f),v(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),_(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,A):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ut&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ut&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),A=S.envMap,M=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=A*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function jv(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let w=b.program;r.uniformBlockBinding(M,w)}function h(M,b){let w=a[M.id];w===void 0&&(m(M),w=c(M),a[M.id]=w,M.addEventListener("dispose",S));let R=b.program;r.updateUBOMapping(M,R);let g=t.render.frame;n[M.id]!==g&&(u(M),n[M.id]=g)}function c(M){let b=d();M.__bindingPointIndex=b;let w=e.createBuffer(),R=M.__size,g=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,R,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,w),w}function d(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let b=a[M.id],w=M.uniforms,R=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let g=0,T=w.length;g<T;g++){let B=w[g];if(Array.isArray(B))for(let P=0,I=B.length;P<I;P++)p(B[P],g,P,R);else p(B,g,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(M,b,w,R){if(_(M,b,w,R)===!0){let g=M.__offset,T=M.value;if(Array.isArray(T)){let B=0;for(let P=0;P<T.length;P++){let I=T[P],K=f(I);v(I,M.__data,B),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,M.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,M.__data)}}function v(M,b,w){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,w)}function _(M,b,w,R){let g=M.value,T=b+"_"+w;if(R[T]===void 0)return typeof g=="number"||typeof g=="boolean"?R[T]=g:ArrayBuffer.isView(g)?R[T]=g.slice():R[T]=g.clone(),!0;{let B=R[T];if(typeof g=="number"||typeof g=="boolean"){if(B!==g)return R[T]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(B.equals(g)===!1)return B.copy(g),!0}}return!1}function m(M){let b=M.uniforms,w=0,R=16;for(let T=0,B=b.length;T<B;T++){let P=Array.isArray(b[T])?b[T]:[b[T]];for(let I=0,K=P.length;I<K;I++){let U=P[I],V=Array.isArray(U.value)?U.value:[U.value];for(let q=0,G=V.length;q<G;q++){let ne=V[q],j=f(ne),Z=w%R,te=Z%j.boundary,xe=Z+te;w+=te,xe!==0&&R-xe<j.storage&&(w+=R-xe),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=j.storage}}}let g=w%R;return g>0&&(w+=R-g),M.__size=w,M.__cache={},this}function f(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",M),b}function S(M){let b=M.target;b.removeEventListener("dispose",S);let w=s.indexOf(b.__bindingPointIndex);s.splice(w,1),e.deleteBuffer(a[b.id]),delete a[b.id],delete n[b.id]}function A(){for(let M in a)e.deleteBuffer(a[M]);s=[],a={},n={}}return{bind:l,update:h,dispose:A}}var qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function Yv(){return yi===null&&(yi=new Ca(qv,16,16,lr,Xt),yi.name="DFG_LUT",yi.minFilter=wt,yi.magFilter=wt,yi.wrapS=di,yi.wrapT=di,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var Ac=class{constructor(e={}){let{canvas:t=ku(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:u=kt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=n;let v=u,_=new Set([As,ws,Es]),m=new Set([kt,pi,fa,Sr,Ss,Ts]),f=new Uint32Array(4),S=new Int32Array(4),A=new L,M=null,b=null,w=[],R=[],g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,B=!1,P=null,I=null,K=null,U=null;this._outputColorSpace=Tt;let V=0,q=0,G=null,ne=-1,j=null,Z=new ht,te=new ht,xe=null,ye=new Le(0),Je=0,Ue=t.width,J=t.height,ie=1,he=null,Ne=null,Ie=new ht(0,0,Ue,J),fe=new ht(0,0,Ue,J),et=!1,Ke=new Uo,Fe=!1,at=!1,pt=new ze,ct=new L,$e=new ht,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function ut(){return G===null?ie:1}let D=i;function yt(y,F){return t.getContext(y,F)}let qe,nt,E,x,N,X,Q,de,me,H,ce,pe,_e,re,Ee,Ae,De,tt,z,ee,se,Se,we;try{let y={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),D===null){let F="webgl2";if(D=yt(F,y),D===null)throw yt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(y){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),Be("WebGLRenderer: "+y.message),y}function oe(){qe=new Yg(D),qe.init(),se=new zv(D,qe),nt=new Bg(D,qe,e,se),E=new Fv(D,qe),nt.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),I=D.createFramebuffer(),K=D.createFramebuffer(),U=D.createFramebuffer(),x=new Kg(D),N=new Tv,X=new Bv(D,qe,E,N,nt,se,x),Q=new qg(T),de=new $p(D),Se=new Og(D,de),me=new Zg(D,de,x,Se),H=new Qg(D,me,de,Se,x),tt=new $g(D,nt,X),Ee=new zg(N),ce=new Sv(T,Q,qe,nt,Se,Ee),pe=new Xv(T,N),_e=new Ev,re=new Lv(qe),De=new Ug(T,Q,E,H,p,o),Ae=new Ov(T,H,nt),we=new jv(D,x,nt,E),z=new Fg(D,qe,x),ee=new Jg(D,qe,x),x.programs=ce.programs,T.capabilities=nt,T.extensions=qe,T.properties=N,T.renderLists=_e,T.shadowMap=Ae,T.state=E,T.info=x}v!==kt&&(g=new t0(v,t.width,t.height,s,r,a));let Me=new Gv(T,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(Ue,J,!1))},this.getSize=function(y){return y.set(Ue,J)},this.setSize=function(y,F,Y=!0){if(Me.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=y,J=F,t.width=Math.floor(y*ie),t.height=Math.floor(F*ie),Y===!0&&(t.style.width=y+"px",t.style.height=F+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Ue*ie,J*ie).floor()},this.setDrawingBufferSize=function(y,F,Y){Ue=y,J=F,ie=Y,t.width=Math.floor(y*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(v===kt){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Z)},this.getViewport=function(y){return y.copy(Ie)},this.setViewport=function(y,F,Y,W){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,F,Y,W),E.viewport(Z.copy(Ie).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(fe)},this.setScissor=function(y,F,Y,W){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,F,Y,W),E.scissor(te.copy(fe).multiplyScalar(ie).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){E.setScissorTest(et=y)},this.setOpaqueSort=function(y){he=y},this.setTransparentSort=function(y){Ne=y},this.getClearColor=function(y){return y.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,Y=!0){let W=0;if(y){let k=!1;if(G!==null){let ue=G.texture.format;k=_.has(ue)}if(k){let ue=G.texture.type,ve=m.has(ue),Te=De.getClearColor(),C=De.getClearAlpha(),O=Te.r,$=Te.g,le=Te.b;ve?(f[0]=O,f[1]=$,f[2]=le,f[3]=C,D.clearBufferuiv(D.COLOR,0,f)):(S[0]=O,S[1]=$,S[2]=le,S[3]=C,D.clearBufferiv(D.COLOR,0,S))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),P=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),De.dispose(),_e.dispose(),re.dispose(),N.dispose(),Q.dispose(),H.dispose(),Se.dispose(),we.dispose(),ce.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",_r),Me.removeEventListener("sessionend",ja),Ti.stop()};function Oe(y){y.preventDefault(),hn("WebGLRenderer: Context Lost."),B=!0}function mt(){hn("WebGLRenderer: Context Restored."),B=!1;let y=x.autoReset,F=Ae.enabled,Y=Ae.autoUpdate,W=Ae.needsUpdate,k=Ae.type;oe(),x.autoReset=y,Ae.enabled=F,Ae.autoUpdate=Y,Ae.needsUpdate=W,Ae.type=k}function Ye(y){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ti(y){let F=y.target;F.removeEventListener("dispose",ti),ii(F)}function ii(y){es(y),N.remove(y)}function es(y){let F=N.get(y).programs;F!==void 0&&(F.forEach(function(Y){ce.releaseProgram(Y)}),y.isShaderMaterial&&ce.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,Y,W,k,ue){F===null&&(F=xt);let ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,Te=ia(y,F,Y,W,k);E.setMaterial(W,ve);let C=Y.index,O=1;if(W.wireframe===!0){if(C=me.getWireframeAttribute(Y),C===void 0)return;O=2}let $=Y.drawRange,le=Y.attributes.position,ae=$.start*O,Re=($.start+$.count)*O;ue!==null&&(ae=Math.max(ae,ue.start*O),Re=Math.min(Re,(ue.start+ue.count)*O)),C!==null?(ae=Math.max(ae,0),Re=Math.min(Re,C.count)):le!=null&&(ae=Math.max(ae,0),Re=Math.min(Re,le.count));let Ge=Re-ae;if(Ge<0||Ge===1/0)return;Se.setup(k,W,Te,Y,C);let Ze,Qe=z;if(C!==null&&(Ze=de.get(C),Qe=ee,Qe.setIndex(Ze)),k.isMesh)W.wireframe===!0?(E.setLineWidth(W.wireframeLinewidth*ut()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(k.isLine){let dt=W.linewidth;dt===void 0&&(dt=1),E.setLineWidth(dt*ut()),k.isLineSegments?Qe.setMode(D.LINES):k.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else k.isPoints?Qe.setMode(D.POINTS):k.isSprite&&Qe.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let dt=k._multiDrawStarts,Ce=k._multiDrawCounts,Vt=k._multiDrawCount,xr=C?de.get(C).bytesPerElement:1,ri=N.get(W).currentProgram.getUniforms();for(let Ei=0;Ei<Vt;Ei++)ri.setValue(D,"_gl_DrawID",Ei),Qe.render(dt[Ei]/xr,Ce[Ei])}else if(k.isInstancedMesh)Qe.renderInstances(ae,Ge,k.count);else if(Y.isInstancedBufferGeometry){let dt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,dt);Qe.renderInstances(ae,Ge,Ce)}else Qe.render(ae,Ge)};function tr(y,F,Y,W){P!==null&&y.isNodeMaterial&&P.setObject(W,y),Fe===!0&&Ee.setState(y,Y,!1),y.transparent===!0&&y.side===Wt&&y.forceSinglePass===!1?(y.side=Ut,y.needsUpdate=!0,Vi(y,F,W),y.side=Hi,y.needsUpdate=!0,Vi(y,F,W),y.side=Wt):Vi(y,F,W)}this.compile=function(y,F,Y=null){Y===null&&(Y=y),P!==null&&P.renderStart(y,F,Y),b=re.get(Y),b.init(F),R.push(b),Y.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),y!==Y&&y.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),at=this.localClippingEnabled,Fe=Ee.init(this.clippingPlanes,at),Fe===!0&&Ee.setGlobalState(this.clippingPlanes,F),P!==null&&Ae.render(b.state.shadowsArray,Y,F);let W=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ue=k.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){let Te=ue[ve];tr(Te,Y,F,k),W.add(Te)}else tr(ue,Y,F,k),W.add(ue)}),b=R.pop(),P!==null&&P.renderEnd(),W},this.compileAsync=function(y,F,Y=null){let W=this.compile(y,F,Y);return new Promise(k=>{function ue(){if(W.forEach(function(ve){let Te=N.get(ve).currentProgram;(Te===void 0||Te.isReady())&&W.delete(ve)}),W.size===0){k(y);return}setTimeout(ue,10)}qe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ea=null;function zi(y){ea&&ea(y)}function _r(){Ti.stop()}function ja(){Ti.start()}let Ti=new $h;Ti.setAnimationLoop(zi),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(y){ea=y,Me.setAnimationLoop(y),y===null?Ti.stop():Ti.start()},Me.addEventListener("sessionstart",_r),Me.addEventListener("sessionend",ja),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;P!==null&&P.renderStart(y,F);let Y=Me.enabled===!0&&Me.isPresenting===!0,W=g!==null&&(G===null||Y)&&g.begin(T,G);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(F),F=Me.getCamera()),y.isScene===!0&&y.onBeforeRender(T,y,F,G),b=re.get(y,R.length),b.init(F),b.state.textureUnits=X.getTextureUnits(),R.push(b),pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ke.setFromProjectionMatrix(pt,fi,F.reversedDepth),at=this.localClippingEnabled,Fe=Ee.init(this.clippingPlanes,at),M=_e.get(y,w.length),M.init(),w.push(M),Me.enabled===!0&&Me.isPresenting===!0){let ue=T.xr.getDepthSensingMesh();ue!==null&&ta(ue,F,-1/0,T.sortObjects)}ta(y,F,0,T.sortObjects),M.finish(),P!==null&&P.updateLights(b.state.lightsArray),T.sortObjects===!0&&M.sort(he,Ne),ft=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ft&&De.addToRenderList(M,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Fe===!0&&Ee.beginShadows();let k=b.state.shadowsArray;if(Ae.render(k,y,F),Fe===!0&&Ee.endShadows(),(W&&g.hasRenderPass())===!1){let ue=M.opaque,ve=M.transmissive;if(b.setupLights(),F.isArrayCamera){let Te=F.cameras;if(ve.length>0)for(let C=0,O=Te.length;C<O;C++){let $=Te[C];ir(ue,ve,y,$)}ft&&De.render(y);for(let C=0,O=Te.length;C<O;C++){let $=Te[C];qa(M,y,$,$.viewport)}}else ve.length>0&&ir(ue,ve,y,F),ft&&De.render(y),qa(M,y,F)}G!==null&&q===0&&(X.updateMultisampleRenderTarget(G),X.updateRenderTargetMipmap(G)),W&&g.end(T),y.isScene===!0&&y.onAfterRender(T,y,F),Se.resetDefaultState(),ne=-1,j=null,R.pop(),R.length>0?(b=R[R.length-1],X.setTextureUnits(b.state.textureUnits),Fe===!0&&Ee.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,P!==null&&P.renderEnd()};function ta(y,F,Y,W){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Ke)){W&&$e.setFromMatrixPosition(y.matrixWorld).applyMatrix4(pt);let ue=H.update(y),ve=y.material;ve.visible&&M.push(y,ue,ve,Y,$e.z,null,F)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Ke))){let ue=H.update(y),ve=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),$e.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),$e.copy(ue.boundingSphere.center)),$e.applyMatrix4(y.matrixWorld).applyMatrix4(pt)),Array.isArray(ve)){let Te=ue.groups;for(let C=0,O=Te.length;C<O;C++){let $=Te[C],le=ve[$.materialIndex];le&&le.visible&&M.push(y,ue,le,Y,$e.z,$,F)}}else ve.visible&&M.push(y,ue,ve,Y,$e.z,null,F)}}let k=y.children;for(let ue=0,ve=k.length;ue<ve;ue++)ta(k[ue],F,Y,W)}function qa(y,F,Y,W){let{opaque:k,transmissive:ue,transparent:ve}=y;b.setupLightsView(Y),Fe===!0&&Ee.setGlobalState(T.clippingPlanes,Y),W&&E.viewport(Z.copy(W)),k.length>0&&rr(k,F,Y),ue.length>0&&rr(ue,F,Y),ve.length>0&&rr(ve,F,Y),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ir(y,F,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){let le=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Gt(1,1,{generateMipmaps:!0,type:le?Xt:kt,minFilter:wi,samples:Math.max(4,nt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let k=b.state.transmissionRenderTarget[W.id],ue=W.viewport||Z;k.setSize(ue.z*T.transmissionResolutionScale,ue.w*T.transmissionResolutionScale);let ve=T.getRenderTarget(),Te=T.getActiveCubeFace(),C=T.getActiveMipmapLevel();T.setRenderTarget(k),T.getClearColor(ye),Je=T.getClearAlpha(),Je<1&&T.setClearColor(16777215,.5),T.clear(),ft&&De.render(Y);let O=T.toneMapping;T.toneMapping=ui;let $=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Fe===!0&&Ee.setGlobalState(T.clippingPlanes,W),rr(y,Y,W),X.updateMultisampleRenderTarget(k),X.updateRenderTargetMipmap(k),qe.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let ae=0,Re=F.length;ae<Re;ae++){let Ge=F[ae],{object:Ze,geometry:Qe,material:dt,group:Ce}=Ge;if(dt.side===Wt&&Ze.layers.test(W.layers)){let Vt=dt.side;dt.side=Ut,dt.needsUpdate=!0,bi(Ze,Y,W,Qe,dt,Ce),dt.side=Vt,dt.needsUpdate=!0,le=!0}}le===!0&&(X.updateMultisampleRenderTarget(k),X.updateRenderTargetMipmap(k))}T.setRenderTarget(ve,Te,C),T.setClearColor(ye,Je),$!==void 0&&(W.viewport=$),T.toneMapping=O}function rr(y,F,Y){let W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ue=y.length;k<ue;k++){let ve=y[k],{object:Te,geometry:C,group:O}=ve,$=ve.material;$.allowOverride===!0&&W!==null&&($=W),Te.layers.test(Y.layers)&&bi(Te,F,Y,C,$,O)}}function bi(y,F,Y,W,k,ue){P!==null&&k.isNodeMaterial&&P.setObject(y,k),y.onBeforeRender(T,F,Y,W,k,ue),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(T,F,Y,W,y,ue),k.transparent===!0&&k.side===Wt&&k.forceSinglePass===!1?(k.side=Ut,k.needsUpdate=!0,T.renderBufferDirect(Y,F,W,k,y,ue),k.side=Hi,k.needsUpdate=!0,T.renderBufferDirect(Y,F,W,k,y,ue),k.side=Wt):T.renderBufferDirect(Y,F,W,k,y,ue),y.onAfterRender(T,F,Y,W,k,ue)}function Vi(y,F,Y){F.isScene!==!0&&(F=xt);let W=N.get(y),k=b.state.lights,ue=b.state.shadowsArray,ve=k.state.version,Te=ce.getParameters(y,k.state,ue,F,Y,b.state.lightProbeGridArray),C=ce.getProgramCacheKey(Te),O=W.programs;W.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let $=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;W.envMap=Q.get(y.envMap||W.environment,$),W.envMapRotation=W.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,O===void 0&&(y.addEventListener("dispose",ti),O=new Map,W.programs=O);let le=O.get(C);if(le!==void 0){if(W.currentProgram===le&&W.lightsStateVersion===ve)return Mr(y,Te),le}else Te.uniforms=ce.getUniforms(y),P!==null&&y.isNodeMaterial&&P.build(y,Y,Te),y.onBeforeCompile(Te,T),le=ce.acquireProgram(Te,C),O.set(C,le),W.uniforms=Te.uniforms;let ae=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ae.clippingPlanes=Ee.uniform),Mr(y,Te),W.needsLights=ml(y),W.lightsStateVersion=ve,W.needsLights&&(ae.ambientLightColor.value=k.state.ambient,ae.lightProbe.value=k.state.probe,ae.sunLights.value=k.state.sun,ae.sunLightShadows.value=k.state.sunShadow,ae.directionalLights.value=k.state.directional,ae.directionalLightShadows.value=k.state.directionalShadow,ae.spotLights.value=k.state.spot,ae.spotLightShadows.value=k.state.spotShadow,ae.rectAreaLights.value=k.state.rectArea,ae.ltc_1.value=k.state.rectAreaLTC1,ae.ltc_2.value=k.state.rectAreaLTC2,ae.pointLights.value=k.state.point,ae.pointLightShadows.value=k.state.pointShadow,ae.hemisphereLights.value=k.state.hemi,ae.sunShadowMatrix.value=k.state.sunShadowMatrix,ae.sunShadowCascade.value=k.state.sunShadowCascade,ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ae.spotLightMatrix.value=k.state.spotLightMatrix,ae.spotLightMap.value=k.state.spotLightMap,ae.pointShadowMatrix.value=k.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=le,W.uniformsList=null,le}function Ya(y){if(y.uniformsList===null){let F=y.currentProgram.getUniforms();y.uniformsList=jn.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Mr(y,F){let Y=N.get(y);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Za(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;A.setFromMatrixPosition(F.matrixWorld);for(let Y=0,W=y.length;Y<W;Y++){let k=y[Y];if(k.texture!==null&&k.boundingBox.containsPoint(A))return k}return null}function ia(y,F,Y,W,k){F.isScene!==!0&&(F=xt),X.resetTextureUnits();let ue=F.fog,ve=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,Te=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Xe.workingColorSpace,C=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,O=Q.get(W.envMap||ve,C),$=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,le=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ae=!!Y.morphAttributes.position,Re=!!Y.morphAttributes.normal,Ge=!!Y.morphAttributes.color,Ze=ui;W.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ze=T.toneMapping);let Qe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dt=Qe!==void 0?Qe.length:0,Ce=N.get(W),Vt=b.state.lights;if(Fe===!0&&(at===!0||y!==j)){let lt=y===j&&W.id===ne;Ee.setState(W,y,lt)}let xr=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Vt.state.version||Ce.outputColorSpace!==Te||k.isBatchedMesh&&Ce.batching===!1||!k.isBatchedMesh&&Ce.batching===!0||k.isBatchedMesh&&Ce.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ce.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ce.instancing===!1||!k.isInstancedMesh&&Ce.instancing===!0||k.isSkinnedMesh&&Ce.skinning===!1||!k.isSkinnedMesh&&Ce.skinning===!0||k.isInstancedMesh&&Ce.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ce.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ce.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ce.instancingMorph===!1&&k.morphTexture!==null||Ce.envMap!==O||W.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ee.numPlanes||Ce.numIntersection!==Ee.numIntersection)||Ce.vertexAlphas!==$||Ce.vertexTangents!==le||Ce.morphTargets!==ae||Ce.morphNormals!==Re||Ce.morphColors!==Ge||Ce.toneMapping!==Ze||Ce.morphTargetsCount!==dt||!!Ce.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(xr=!0):(xr=!0,Ce.__version=W.version);let ri=Ce.currentProgram;xr===!0&&(ri=Vi(W,F,k),P&&W.isNodeMaterial&&P.onUpdateProgram(W,ri,Ce));let Ei=!1,ar=!1,ra=!1,ot=ri.getUniforms(),St=Ce.uniforms;if(E.useProgram(ri.program)&&(Ei=!0,ar=!0,ra=!0),W.id!==ne&&(ne=W.id,ar=!0),Ce.needsLights){let lt=Za(b.state.lightProbeGridArray,k);Ce.lightProbeGrid!==lt&&(Ce.lightProbeGrid=lt,ar=!0)}if(Ei||j!==y){E.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",y.projectionMatrix),ot.setValue(D,"viewMatrix",y.matrixWorldInverse);let lt=ot.map.cameraPosition;lt!==void 0&&lt.setValue(D,ct.setFromMatrixPosition(y.matrixWorld)),nt.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ot.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,ar=!0,ra=!0)}if(Ce.needsLights&&(Vt.state.sunShadowMap.length>0&&ot.setValue(D,"sunShadowMap",Vt.state.sunShadowMap,X),Vt.state.directionalShadowMap.length>0&&ot.setValue(D,"directionalShadowMap",Vt.state.directionalShadowMap,X),Vt.state.spotShadowMap.length>0&&ot.setValue(D,"spotShadowMap",Vt.state.spotShadowMap,X),Vt.state.pointShadowMap.length>0&&ot.setValue(D,"pointShadowMap",Vt.state.pointShadowMap,X)),k.isSkinnedMesh){ot.setOptional(D,k,"bindMatrix"),ot.setOptional(D,k,"bindMatrixInverse");let lt=k.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ot.setValue(D,"boneTexture",lt.boneTexture,X))}k.isBatchedMesh&&(ot.setOptional(D,k,"batchingTexture"),ot.setValue(D,"batchingTexture",k._matricesTexture,X),ot.setOptional(D,k,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",k._indirectTexture,X),ot.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",k._colorsTexture,X));let nr=Y.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&tt.update(k,Y,ri),(ar||Ce.receiveShadow!==k.receiveShadow)&&(Ce.receiveShadow=k.receiveShadow,ot.setValue(D,"receiveShadow",k.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(St.envMapIntensity.value=F.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=Yv()),ar){if(ot.setValue(D,"toneMappingExposure",T.toneMappingExposure),Ce.needsLights&&fl(St,ra),ue&&W.fog===!0&&pe.refreshFogUniforms(St,ue),pe.refreshMaterialUniforms(St,W,ie,J,b.state.transmissionRenderTarget[y.id]),Ce.needsLights&&Ce.lightProbeGrid){let lt=Ce.lightProbeGrid;St.probesSH.value=lt.texture,St.probesMin.value.copy(lt.boundingBox.min),St.probesMax.value.copy(lt.boundingBox.max),St.probesResolution.value.copy(lt.resolution)}jn.upload(D,Ya(Ce),St,X)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(jn.upload(D,Ya(Ce),St,X),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ot.setValue(D,"center",k.center),ot.setValue(D,"modelViewMatrix",k.modelViewMatrix),ot.setValue(D,"normalMatrix",k.normalMatrix),ot.setValue(D,"modelMatrix",k.matrixWorld),W.uniformsGroups!==void 0){let lt=W.uniformsGroups;for(let Ka=0,aa=lt.length;Ka<aa;Ka++){let qc=lt[Ka];we.update(qc,ri),we.bind(qc,ri)}}return ri}function fl(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.sunLights.needsUpdate=F,y.sunLightShadows.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function ml(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(y,F,Y){let W=N.get(y);W.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),N.get(y.texture).__webglTexture=F,N.get(y.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){let Y=N.get(y);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,Y=0){G=y,V=F,q=Y;let W=null,k=!1,ue=!1;if(y){let ve=N.get(y);if(ve.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(D.FRAMEBUFFER,ve.__webglFramebuffer),Z.copy(y.viewport),te.copy(y.scissor),xe=y.scissorTest,E.viewport(Z),E.scissor(te),E.setScissorTest(xe),ne=-1;return}else if(ve.__webglFramebuffer===void 0)X.setupRenderTarget(y);else if(ve.__hasExternalTextures)X.rebindTextures(y,N.get(y.texture).__webglTexture,N.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let O=y.depthTexture;if(ve.__boundDepthTexture!==O){if(O!==null&&N.has(O)&&(y.width!==O.image.width||y.height!==O.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(y)}}let Te=y.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ue=!0);let C=N.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(C[F])?W=C[F][Y]:W=C[F],k=!0):y.samples>0&&X.useMultisampledRTT(y)===!1?W=N.get(y).__webglMultisampledFramebuffer:Array.isArray(C)?W=C[Y]:W=C,Z.copy(y.viewport),te.copy(y.scissor),xe=y.scissorTest}else Z.copy(Ie).multiplyScalar(ie).floor(),te.copy(fe).multiplyScalar(ie).floor(),xe=et;if(Y!==0&&(W=I),E.bindFramebuffer(D.FRAMEBUFFER,W)&&E.drawBuffers(y,W),E.viewport(Z),E.scissor(te),E.setScissorTest(xe),k){let ve=N.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,Y)}else if(ue){let ve=F;for(let Te=0;Te<y.textures.length;Te++){let C=N.get(y.textures[Te]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Te,C.__webglTexture,Y,ve)}}else if(y!==null&&Y!==0){let ve=N.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,Y)}ne=-1};function Ja(y){let F=N.get(y);return(F.__readFormat!==y.format||F.__readType!==y.type)&&(F.__readFormat=y.format,F.__readType=y.type,F.__formatReadable=nt.textureFormatReadable(y.format),F.__typeReadable=nt.textureTypeReadable(y.type)),F}this.readRenderTargetPixels=function(y,F,Y,W,k,ue,ve,Te=0){if(!(y&&y.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let C=N.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(C=C[ve]),C){E.bindFramebuffer(D.FRAMEBUFFER,C);try{let O=y.textures[Te],$=O.format,le=O.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te);let ae=Ja(O);if(ae.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ae.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-W&&Y>=0&&Y<=y.height-k&&D.readPixels(F,Y,W,k,se.convert($),se.convert(le),ue)}finally{let O=G!==null?N.get(G).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,O)}}},this.readRenderTargetPixelsAsync=async function(y,F,Y,W,k,ue,ve,Te=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let C=N.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(C=C[ve]),C)if(F>=0&&F<=y.width-W&&Y>=0&&Y<=y.height-k){E.bindFramebuffer(D.FRAMEBUFFER,C);let O=y.textures[Te],$=O.format,le=O.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te);let ae=Ja(O);if(ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(F,Y,W,k,se.convert($),se.convert(le),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ge=G!==null?N.get(G).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,Ge);let Ze=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gu(D,Ze,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Re),D.deleteSync(Ze),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,Y=0){let W=Math.pow(2,-Y),k=Math.floor(y.image.width*W),ue=Math.floor(y.image.height*W),ve=F!==null?F.x:0,Te=F!==null?F.y:0;X.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,ve,Te,k,ue),E.unbindTexture()},this.copyTextureToTexture=function(y,F,Y=null,W=null,k=0,ue=0){let ve,Te,C,O,$,le,ae,Re,Ge,Ze=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(Y!==null)ve=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,C=Y.isBox3?Y.max.z-Y.min.z:1,O=Y.min.x,$=Y.min.y,le=Y.isBox3?Y.min.z:0;else{let St=Math.pow(2,-k);ve=Math.floor(Ze.width*St),Te=Math.floor(Ze.height*St),y.isDataArrayTexture?C=Ze.depth:y.isData3DTexture?C=Math.floor(Ze.depth*St):C=1,O=0,$=0,le=0}W!==null?(ae=W.x,Re=W.y,Ge=W.z):(ae=0,Re=0,Ge=0);let Qe=se.convert(F.format),dt=se.convert(F.type),Ce;F.isData3DTexture?(X.setTexture3D(F,0),Ce=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(X.setTexture2DArray(F,0),Ce=D.TEXTURE_2D_ARRAY):(X.setTexture2D(F,0),Ce=D.TEXTURE_2D),E.activeTexture(D.TEXTURE0),E.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let Vt=E.getParameter(D.UNPACK_ROW_LENGTH),xr=E.getParameter(D.UNPACK_IMAGE_HEIGHT),ri=E.getParameter(D.UNPACK_SKIP_PIXELS),Ei=E.getParameter(D.UNPACK_SKIP_ROWS),ar=E.getParameter(D.UNPACK_SKIP_IMAGES);E.pixelStorei(D.UNPACK_ROW_LENGTH,Ze.width),E.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze.height),E.pixelStorei(D.UNPACK_SKIP_PIXELS,O),E.pixelStorei(D.UNPACK_SKIP_ROWS,$),E.pixelStorei(D.UNPACK_SKIP_IMAGES,le);let ra=y.isDataArrayTexture||y.isData3DTexture,ot=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){let St=N.get(y),nr=N.get(F),lt=N.get(St.__renderTarget),Ka=N.get(nr.__renderTarget);E.bindFramebuffer(D.READ_FRAMEBUFFER,lt.__webglFramebuffer),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ka.__webglFramebuffer);for(let aa=0;aa<C;aa++)ra&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,N.get(y).__webglTexture,k,le+aa),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,N.get(F).__webglTexture,ue,Ge+aa)),D.blitFramebuffer(O,$,ve,Te,ae,Re,ve,Te,D.DEPTH_BUFFER_BIT,D.NEAREST);E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||N.has(y)){let St=N.get(y),nr=N.get(F);E.bindFramebuffer(D.READ_FRAMEBUFFER,K),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,U);for(let lt=0;lt<C;lt++)ra?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.__webglTexture,k,le+lt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,k),ot?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nr.__webglTexture,ue,Ge+lt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nr.__webglTexture,ue),k!==0?D.blitFramebuffer(O,$,ve,Te,ae,Re,ve,Te,D.COLOR_BUFFER_BIT,D.NEAREST):ot?D.copyTexSubImage3D(Ce,ue,ae,Re,Ge+lt,O,$,ve,Te):D.copyTexSubImage2D(Ce,ue,ae,Re,O,$,ve,Te);E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Ce,ue,ae,Re,Ge,ve,Te,C,Qe,dt,Ze.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,ue,ae,Re,Ge,ve,Te,C,Qe,Ze.data):D.texSubImage3D(Ce,ue,ae,Re,Ge,ve,Te,C,Qe,dt,Ze):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,ae,Re,ve,Te,Qe,dt,Ze.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,ae,Re,Ze.width,Ze.height,Qe,Ze.data):D.texSubImage2D(D.TEXTURE_2D,ue,ae,Re,ve,Te,Qe,dt,Ze);E.pixelStorei(D.UNPACK_ROW_LENGTH,Vt),E.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xr),E.pixelStorei(D.UNPACK_SKIP_PIXELS,ri),E.pixelStorei(D.UNPACK_SKIP_ROWS,Ei),E.pixelStorei(D.UNPACK_SKIP_IMAGES,ar),ue===0&&F.generateMipmaps&&D.generateMipmap(Ce),E.unbindTexture()},this.initRenderTarget=function(y){N.get(y).__webglFramebuffer===void 0&&X.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?X.setTextureCube(y,0):y.isData3DTexture?X.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?X.setTexture2DArray(y,0):X.setTexture2D(y,0),E.unbindTexture()},this.resetState=function(){V=0,q=0,G=null,E.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}},Zv=class extends gt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new be(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},Jr=new L,Rc=new ze,Cc=new ze,Pc=new L,Lc=new L,Jv=class{constructor(e={}){let t=this,i,r,a,n,s={objects:new WeakMap},o=e.element!==void 0?e.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o,this.sortObjects=!0,this.getSize=function(){return{width:i,height:r}},this.render=function(p,v){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Rc.copy(v.matrixWorldInverse),Cc.multiplyMatrices(v.projectionMatrix,Rc),h(p,p,v),this.sortObjects&&u(p)},this.setSize=function(p,v){i=p,r=v,a=i/2,n=r/2,o.style.width=p+"px",o.style.height=v+"px"};function l(p){p.isCSS2DObject&&(p.element.style.display="none");for(let v=0,_=p.children.length;v<_;v++)l(p.children[v])}function h(p,v,_){if(p.visible===!1){l(p);return}if(p.isCSS2DObject){Jr.setFromMatrixPosition(p.matrixWorld),Jr.applyMatrix4(Cc);let m=Jr.z>=-1&&Jr.z<=1&&p.layers.test(_.layers)===!0,f=p.element;if(f.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,v,_);let A=100*p.center.x,M=100*p.center.y;f.style.transformOrigin=`${A}% ${M}%`;let b=-p.rotation2D,w=Jr.x*a+a,R=-Jr.y*n+n;f.style.transform=`translate(${-A}%, ${-M}%) translate(${w}px, ${R}px) rotate(${b}rad)`,f.parentNode!==o&&o.appendChild(f),p.onAfterRender(t,v,_)}let S={distanceToCameraSquared:c(_,p)};s.objects.set(p,S)}for(let m=0,f=p.children.length;m<f;m++)h(p.children[m],v,_)}function c(p,v){return Pc.setFromMatrixPosition(p.matrixWorld),Lc.setFromMatrixPosition(v.matrixWorld),Pc.distanceToSquared(Lc)}function d(p){let v=[];return p.traverseVisible(function(_){_.isCSS2DObject&&v.push(_)}),v}function u(p){let v=d(p).sort(function(m,f){if(m.renderOrder!==f.renderOrder)return f.renderOrder-m.renderOrder;let S=s.objects.get(m).distanceToCameraSquared,A=s.objects.get(f).distanceToCameraSquared;return S-A}),_=v.length;for(let m=0,f=v.length;m<f;m++)v[m].element.style.zIndex=_-m}}},Yn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Kr=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Kv=new za(-1,1,1,-1,0,1),$v=class extends Et{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},Qv=new $v,al=class{constructor(e){this._mesh=new He(Qv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},e_=class extends Kr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ki.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new al(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Nc=class extends Kr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,s;this.inverse?(n=0,s=1):(n=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,n,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}},t_=class extends Kr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},i_=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new be);this._width=i.width,this._height=i.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new e_(Yn),this.copyPass.material.blending=Ct,this.timer=new Zh}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,a=this.passes.length;r<a;r++){let n=this.passes[r];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){let s=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Nc!==void 0&&(n instanceof Nc?i=!0:n instanceof t_&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},r_=class extends Kr{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=r}},Zn={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new be},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ze},cameraProjectionMatrixInverse:{value:new ze},cameraWorldMatrix:{value:new ze},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Jn={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},nl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function a_(e=5){let t=Math.floor(e)%2===0?Math.floor(e)+1:Math.floor(e),i=n_(t),r=i.length,a=new Uint8Array(r*4);for(let s=0;s<r;++s){let o=i[s],l=2*Math.PI*o/r,h=new L(Math.cos(l),Math.sin(l),0).normalize();a[s*4]=(h.x*.5+.5)*255,a[s*4+1]=(h.y*.5+.5)*255,a[s*4+2]=127,a[s*4+3]=255}let n=new Ca(a,t,t);return n.wrapS=Ht,n.wrapT=Ht,n.needsUpdate=!0,n}function n_(e){let t=Math.floor(e)%2===0?Math.floor(e)+1:Math.floor(e),i=t*t,r=Array(i).fill(0),a=Math.floor(t/2),n=t-1;for(let s=1;s<=i;){if(a===-1&&n===t?(n=t-2,a=0):(n===t&&(n=0),a<0&&(a=t-1)),r[a*t+n]!==0){n-=2,a++;continue}else r[a*t+n]=s++;n++,a--}return r}var Kn={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ic(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new be},cameraProjectionMatrixInverse:{value:new ze},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ic(e,t,i){let r=s_(e,t,i),a="vec3[SAMPLES](";for(let n=0;n<e;n++){let s=r[n];a+=`vec3(${s.x}, ${s.y}, ${s.z})${n<e-1?",":")"}`}return a}function s_(e,t,i){let r=[];for(let a=0;a<e;a++){let n=2*Math.PI*t*a/e,s=Math.pow(a/(e-1),i);r.push(new L(Math.cos(n),Math.sin(n),s))}return r}var o_=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,r,a,n=.5*(Math.sqrt(3)-1),s=(e+t)*n,o=Math.floor(e+s),l=Math.floor(t+s),h=(3-Math.sqrt(3))/6,c=(o+l)*h,d=o-c,u=l-c,p=e-d,v=t-u,_,m;p>v?(_=1,m=0):(_=0,m=1);let f=p-_+h,S=v-m+h,A=p-1+2*h,M=v-1+2*h,b=o&255,w=l&255,R=this.perm[b+this.perm[w]]%12,g=this.perm[b+_+this.perm[w+m]]%12,T=this.perm[b+1+this.perm[w+1]]%12,B=.5-p*p-v*v;B<0?i=0:(B*=B,i=B*B*this._dot(this.grad3[R],p,v));let P=.5-f*f-S*S;P<0?r=0:(P*=P,r=P*P*this._dot(this.grad3[g],f,S));let I=.5-A*A-M*M;return I<0?a=0:(I*=I,a=I*I*this._dot(this.grad3[T],A,M)),70*(i+r+a)}noise3d(e,t,i){let r,a,n,s,o=(e+t+i)*.3333333333333333,l=Math.floor(e+o),h=Math.floor(t+o),c=Math.floor(i+o),d=1/6,u=(l+h+c)*d,p=l-u,v=h-u,_=c-u,m=e-p,f=t-v,S=i-_,A,M,b,w,R,g;m>=f?f>=S?(A=1,M=0,b=0,w=1,R=1,g=0):m>=S?(A=1,M=0,b=0,w=1,R=0,g=1):(A=0,M=0,b=1,w=1,R=0,g=1):f<S?(A=0,M=0,b=1,w=0,R=1,g=1):m<S?(A=0,M=1,b=0,w=0,R=1,g=1):(A=0,M=1,b=0,w=1,R=1,g=0);let T=m-A+d,B=f-M+d,P=S-b+d,I=m-w+2*d,K=f-R+2*d,U=S-g+2*d,V=m-1+3*d,q=f-1+3*d,G=S-1+3*d,ne=l&255,j=h&255,Z=c&255,te=this.perm[ne+this.perm[j+this.perm[Z]]]%12,xe=this.perm[ne+A+this.perm[j+M+this.perm[Z+b]]]%12,ye=this.perm[ne+w+this.perm[j+R+this.perm[Z+g]]]%12,Je=this.perm[ne+1+this.perm[j+1+this.perm[Z+1]]]%12,Ue=.6-m*m-f*f-S*S;Ue<0?r=0:(Ue*=Ue,r=Ue*Ue*this._dot3(this.grad3[te],m,f,S));let J=.6-T*T-B*B-P*P;J<0?a=0:(J*=J,a=J*J*this._dot3(this.grad3[xe],T,B,P));let ie=.6-I*I-K*K-U*U;ie<0?n=0:(ie*=ie,n=ie*ie*this._dot3(this.grad3[ye],I,K,U));let he=.6-V*V-q*q-G*G;return he<0?s=0:(he*=he,s=he*he*this._dot3(this.grad3[Je],V,q,G)),32*(r+a+n+s)}noise4d(e,t,i,r){let a=this.grad4,n=this.simplex,s=this.perm,o=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,c,d,u,p,v=(e+t+i+r)*o,_=Math.floor(e+v),m=Math.floor(t+v),f=Math.floor(i+v),S=Math.floor(r+v),A=(_+m+f+S)*l,M=_-A,b=m-A,w=f-A,R=S-A,g=e-M,T=t-b,B=i-w,P=r-R,I=g>T?32:0,K=g>B?16:0,U=T>B?8:0,V=g>P?4:0,q=T>P?2:0,G=B>P?1:0,ne=I+K+U+V+q+G,j=n[ne][0]>=3?1:0,Z=n[ne][1]>=3?1:0,te=n[ne][2]>=3?1:0,xe=n[ne][3]>=3?1:0,ye=n[ne][0]>=2?1:0,Je=n[ne][1]>=2?1:0,Ue=n[ne][2]>=2?1:0,J=n[ne][3]>=2?1:0,ie=n[ne][0]>=1?1:0,he=n[ne][1]>=1?1:0,Ne=n[ne][2]>=1?1:0,Ie=n[ne][3]>=1?1:0,fe=g-j+l,et=T-Z+l,Ke=B-te+l,Fe=P-xe+l,at=g-ye+2*l,pt=T-Je+2*l,ct=B-Ue+2*l,$e=P-J+2*l,xt=g-ie+3*l,ft=T-he+3*l,ut=B-Ne+3*l,D=P-Ie+3*l,yt=g-1+4*l,qe=T-1+4*l,nt=B-1+4*l,E=P-1+4*l,x=_&255,N=m&255,X=f&255,Q=S&255,de=s[x+s[N+s[X+s[Q]]]]%32,me=s[x+j+s[N+Z+s[X+te+s[Q+xe]]]]%32,H=s[x+ye+s[N+Je+s[X+Ue+s[Q+J]]]]%32,ce=s[x+ie+s[N+he+s[X+Ne+s[Q+Ie]]]]%32,pe=s[x+1+s[N+1+s[X+1+s[Q+1]]]]%32,_e=.6-g*g-T*T-B*B-P*P;_e<0?h=0:(_e*=_e,h=_e*_e*this._dot4(a[de],g,T,B,P));let re=.6-fe*fe-et*et-Ke*Ke-Fe*Fe;re<0?c=0:(re*=re,c=re*re*this._dot4(a[me],fe,et,Ke,Fe));let Ee=.6-at*at-pt*pt-ct*ct-$e*$e;Ee<0?d=0:(Ee*=Ee,d=Ee*Ee*this._dot4(a[H],at,pt,ct,$e));let Ae=.6-xt*xt-ft*ft-ut*ut-D*D;Ae<0?u=0:(Ae*=Ae,u=Ae*Ae*this._dot4(a[ce],xt,ft,ut,D));let De=.6-yt*yt-qe*qe-nt*nt-E*E;return De<0?p=0:(De*=De,p=De*De*this._dot4(a[pe],yt,qe,nt,E)),27*(h+c+d+u+p)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,r){return e[0]*t+e[1]*i+e[2]*r}_dot4(e,t,i,r,a){return e[0]*t+e[1]*i+e[2]*r+e[3]*a}},Dc=class sr extends Kr{constructor(t,i,r=512,a=512,n,s,o){super(),this.width=r,this.height=a,this.clear=!0,this.camera=i,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=a_(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Gt(this.width,this.height,{type:Xt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Lt({defines:Object.assign({},Zn.defines),uniforms:Ki.clone(Zn.uniforms),vertexShader:Zn.vertexShader,fragmentShader:Zn.fragmentShader,blending:Ct,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new up,this.normalMaterial.blending=Ct,this.pdMaterial=new Lt({defines:Object.assign({},Kn.defines),uniforms:Ki.clone(Kn.uniforms),vertexShader:Kn.vertexShader,fragmentShader:Kn.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Lt({defines:Object.assign({},Jn.defines),uniforms:Ki.clone(Jn.uniforms),vertexShader:Jn.vertexShader,fragmentShader:Jn.fragmentShader,blending:Ct}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Lt({uniforms:Ki.clone(Yn.uniforms),vertexShader:Yn.vertexShader,fragmentShader:Yn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:as,blendDst:ca,blendEquation:ci,blendSrcAlpha:rs,blendDstAlpha:ca,blendEquationAlpha:ci}),this.blendMaterial=new Lt({uniforms:Ki.clone(nl.uniforms),vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:xl,blendSrc:as,blendDst:ca,blendEquation:ci,blendSrcAlpha:rs,blendDstAlpha:ca,blendEquationAlpha:ci}),this._fsQuad=new al(null),this._originalClearColor=new Le,this.setGBuffer(n?n.depthTexture:void 0,n?n.normalTexture:void 0),s!==void 0&&this.updateGtaoMaterial(s),o!==void 0&&this.updatePdMaterial(o)}setSize(t,i){this.width=t,this.height=i,this.gtaoRenderTarget.setSize(t,i),this.normalRenderTarget.setSize(t,i),this.pdRenderTarget.setSize(t,i),this.gtaoMaterial.uniforms.resolution.value.set(t,i),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,i),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,i){t!==void 0?(this.depthTexture=t,this.normalTexture=i,this._renderGBuffer=!1):(this.depthTexture=new Br,this.depthTexture.format=ki,this.depthTexture.type=Sr,this.normalRenderTarget=new Gt(this.width,this.height,{minFilter:_t,magFilter:_t,type:Xt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let r=this.normalTexture?1:0,a=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=r,this.gtaoMaterial.defines.DEPTH_SWIZZLING=a,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=r,this.pdMaterial.defines.DEPTH_SWIZZLING=a,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let i=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,i=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,i=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,i=!0),i&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ic(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,i,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case sr.OUTPUT.Off:break;case sr.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=Ct,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case sr.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ct,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case sr.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ct,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case sr.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:i);break;case sr.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ct,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case sr.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=Ct,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,i,r,a,n){t.getClearColor(this._originalClearColor);let s=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(r),t.autoClear=!1,a!=null&&(t.setClearColor(a),t.setClearAlpha(n||0),t.clear()),this._fsQuad.material=i,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(s)}_renderOverride(t,i,r,a,n){t.getClearColor(this._originalClearColor);let s=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(r),t.autoClear=!1,a=i.clearColor||a,n=i.clearAlpha||n,a!=null&&(t.setClearColor(a),t.setClearAlpha(n||0),t.clear()),this.scene.overrideMaterial=i,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(s)}_overrideVisibility(){let t=this.scene,i=this._visibilityCache;t.traverse(function(r){(r.isPoints||r.isLine||r.isLine2)&&r.visible&&(r.visible=!1,i.push(r))})}_restoreVisibility(){let t=this._visibilityCache;for(let i=0;i<t.length;i++)t[i].visible=!0;t.length=0}_generateNoise(t=64){let i=new o_,r=t*t*4,a=new Uint8Array(r);for(let s=0;s<t;s++)for(let o=0;o<t;o++){let l=s,h=o;a[(s*t+o)*4]=(i.noise(l,h)*.5+.5)*255,a[(s*t+o)*4+1]=(i.noise(l+t,h)*.5+.5)*255,a[(s*t+o)*4+2]=(i.noise(l,h+t)*.5+.5)*255,a[(s*t+o)*4+3]=(i.noise(l+t,h+t)*.5+.5)*255}let n=new Ca(a,t,t,jt,kt);return n.wrapS=Ht,n.wrapT=Ht,n.needsUpdate=!0,n}};Dc.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var $n={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},l_=class extends Kr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ki.clone($n.uniforms),this.material=new Oh({name:$n.name,uniforms:this.uniforms,vertexShader:$n.vertexShader,fragmentShader:$n.fragmentShader}),this._fsQuad=new al(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xe.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ps?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fs?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ms?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===da?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_s?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===gs&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Uc(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new Et,h=0;for(let c=0;c<e.length;++c){let d=e[c],u=0;if(i!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(d.attributes[p]),u++}if(u!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.morphAttributes[p])}if(t){let p;if(i)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,d=[];for(let u=0;u<e.length;++u){let p=e[u].index;for(let v=0;v<p.count;++v)d.push(p.getX(v)+c);c+=e[u].attributes.position.count}l.setIndex(d)}for(let c in n){let d=Oc(n[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(let c in s){let d=s[c][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){let p=[];for(let _=0;_<s[c].length;++_)p.push(s[c][_][u]);let v=Oc(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(v)}}}return l}function Oc(e){let t,i,r,a=-1,n=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*i}let s=new t(n),o=new Ft(s,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let d=l/i;for(let u=0,p=c.count;u<p;u++)for(let v=0;v<i;v++){let _=c.getComponent(u,v);o.setComponent(u+d,v,_)}}else s.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}function Fc(e,t){if(t===Pu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===no||t===Ol){let i=e.getIndex();if(i===null){let n=[],s=e.getAttribute("position");if(s!==void 0){for(let o=0;o<s.count;o++)n.push(o);e.setIndex(n),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let r=i.count-2,a=[];if(t===no)for(let n=1;n<=r;n++)a.push(i.getX(0)),a.push(i.getX(n)),a.push(i.getX(n+1));else for(let n=0;n<r;n++)n%2===0?(a.push(i.getX(n)),a.push(i.getX(n+1)),a.push(i.getX(n+2))):(a.push(i.getX(n+2)),a.push(i.getX(n+1)),a.push(i.getX(n)));return a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),e.setIndex(a),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}var sl={mapLabels:"c_mapLabels",mapLabel:"c_mapLabel",mapLabelOn:"c_mapLabelOn"},ol={overview:{cam:[70,60,102],look:[2,0,6]},collab:{cam:[8,11,45],look:[-8,1.5,21],label:[-8,4,22.5]},labs:{cam:[-38,23,46],look:[-9,2,15],label:[-17.5,4.4,15.5]},cea:{cam:[-41,14,19],look:[-22,1.2,1.5],label:[-22,4,1.5]},fields:{cam:[-2,24,10],look:[-13,0,-14],label:[-14.6,1.6,-15.1]},greenhouses:{cam:[45,16,6],look:[25,2,-11],label:[25,4.6,-15]},masterplan:{cam:[6,175,54],look:[4,0,6]}};function ll(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Wa(e,t,i,r=!1){let a=document.createElement("canvas");a.width=e,a.height=t,i(a.getContext("2d"));let n=new zd(a);return n.colorSpace=Tt,n.anisotropy=8,r&&(n.wrapS=n.wrapT=Ht),n}function h_(e){let t=e.stage,i=e.tour,r=i.length,a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=window.innerWidth<900,s;try{s=new Ac({antialias:!0,powerPreference:"high-performance"})}catch{return e.onFail(),null}s.setPixelRatio(Math.min(window.devicePixelRatio,n?1.5:1.75)),s.shadowMap.enabled=!0,s.shadowMap.type=oa,s.toneMapping=da,s.toneMappingExposure=1,s.outputColorSpace=Tt,t.appendChild(s.domElement);let o=new Jv;o.domElement.className=sl.mapLabels,t.appendChild(o.domElement);let l=new Mo,h=new Le("#efe7dc"),c=new Le("#eef1f1");l.background=h.clone(),l.fog=new xd(h.clone(),170,360);let d=new Dt(30,1,.5,900),u=new Np("#ffffff","#d8cfc0",1.15);l.add(u);let p=new Xo("#ffd7a6",2.6);p.castShadow=!0,p.shadow.mapSize.set(n?1024:2048,n?1024:2048);let v=p.shadow.camera;v.left=-95,v.right=95,v.top=80,v.bottom=-80,v.far=400,p.shadow.bias=-5e-4,p.shadow.normalBias=.02,p.shadow.radius=5,l.add(p,p.target);let _=new Le("#ffcf98"),m=new Le("#fff6ea"),f=C=>{let O=Sa.degToRad(13+42*C),$=Sa.degToRad(-128+30*C);p.position.set(Math.cos(O)*Math.cos($)*140,Math.sin(O)*140,Math.cos(O)*Math.sin($)*140),p.color.copy(_).lerp(m,C),p.intensity=2.5+.9*C,l.background.copy(h).lerp(c,C),l.fog.color.copy(l.background)};f(0);let S=(C,O={})=>new mr({color:C,roughness:.88,metalness:0,...O}),A="#f5f4f0",M=new Le("#3ca7d2"),b={labs:[],cea:[],collab:[],greenhouses:[]},w=(C,O={})=>{let $=S(A,O);return $.userData.base=new Le(O.color??A),$.userData.hi=O.transparent?new Le("#9fd2e8"):M,b[C].push($),$},R=C=>(C.traverse(O=>{O.castShadow=!0,O.receiveShadow=!0}),C),g=(C,O,$,le,ae,Re,Ge)=>{let Ze=new He(new Jt(C,O,$),le);return Ze.position.set(ae,Re+O/2,Ge),R(Ze)},T=Wa(1024,1024,C=>{let O=C.createImageData(1024,1024);for(let $=0;$<1024;$++)for(let le=0;le<1024;le++){let ae=le/1024,Re=$/1024,Ge=Math.sin(ae*9.1+Math.sin(Re*5.3)*1.7)*.6+Math.cos(Re*7.7+Math.cos(ae*4.1)*1.9)*.5+Math.sin((ae+Re)*13.3)*.18,Ze=Math.abs((Ge*6%1+1)%1-.5)>.47?1:0,Qe=($*1024+le)*4,dt=232-Ze*16;O.data[Qe]=dt+3,O.data[Qe+1]=dt,O.data[Qe+2]=dt-8,O.data[Qe+3]=255}C.putImageData(O,0,0)},!0);T.repeat.set(3,3);let B=new Ua(700,700,160,160),P=B.attributes.position;for(let C=0;C<P.count;C++){let O=P.getX(C),$=P.getY(C),le=Math.max(Math.abs(O)-42,Math.abs($)-30,0),ae=Math.min(1,le/30);P.setZ(C,ae*(Math.sin(O*.05)*Math.cos($*.043)*1.6+Math.sin(O*.11+$*.07)*.6)-.05)}B.computeVertexNormals();let I=new He(B,S("#ffffff",{map:T}));I.rotation.x=-Math.PI/2,I.receiveShadow=!0,l.add(I);let K=g(70,.25,48.5,S("#f1efe9"),0,-.1,0);K.castShadow=!1,l.add(K);let U=S("#fbfaf7"),V=S("#d9d3c8"),q=(C,O,$,le,ae,Re)=>{let Ge=new He(new Ua(C,O),$);return Ge.rotation.x=-Math.PI/2,Ge.position.set(le,ae,Re),Ge.receiveShadow=!0,l.add(Ge),Ge};q(70,1.3,U,0,.17,-6.5),q(70,1.3,U,0,.17,7.5),q(1.3,48.5,U,15,.17,0),q(3.2,260,V,38.6,.05,0),q(260,3.2,V,0,.06,38.5),q(3,8,V,-8,.08,27.5),q(3,3,V,-8,.08,36.4);let G=[],ne=[[-35,-24.25],[35,-24.25],[35,24.25],[-35,24.25],[-35,-24.25]];for(let C=0;C<4;C++){let[O,$]=ne[C],[le,ae]=ne[C+1];for(let Re=0;Re<100;Re++)G.push(new L(O+(le-O)*Re/100,.22,$+(ae-$)*Re/100))}G.push(G[0].clone());let j=new Dn(new Et().setFromPoints(G),new Oo({color:M}));j.geometry.setDrawRange(0,a?G.length:0),l.add(j);let Z=[],te=(...C)=>{let O=new mi;return C.forEach($=>O.add($)),l.add(O),Z.push(O),O},xe=new gt,ye=0,Je=C=>{let O=Wa(256,64,$=>{$.fillStyle="#ffffff",$.fillRect(0,0,256,64),$.fillStyle="#a9c4cf",$.fillRect(0,22,256,22),$.fillStyle="#ffffff";for(let le=0;le<256;le+=21)$.fillRect(le,22,3,22)});return O.wrapS=Ht,O.repeat.set(C,1),O},Ue=Wa(256,256,C=>{C.fillStyle="#fff",C.fillRect(0,0,256,256),C.fillStyle="#000";let O=ll(3);for(let $=0;$<520;$++){let le=O()*Math.PI*2,ae=Math.sqrt(O())*120;C.beginPath(),C.arc(128+Math.cos(le)*ae,128+Math.sin(le)*ae,2+O()*3.5,0,Math.PI*2),C.fill()}}),J=[];for(let C=0;C<7;C++){let O=new Jt(1.3,.05,.26);O.translate(.65,0,0),O.rotateZ(-.4),O.rotateY(C/7*Math.PI*2),J.push(O)}let ie=[];for(let C=-60;C<=34;C+=4.4)ie.push([C,36.3],[C,40.7]);for(let C=25.5;C<=30.5;C+=2.5)ie.push([-10.4,C],[-5.6,C]);for(let C=-33;C<=33;C+=4.2)ie.push([C,23.4]);let he=new Zi(new Ji(.07,.1,2.2,6),S("#c9bfae"),ie.length),Ne=new Zi(Uc(J),S("#9db58c"),ie.length);ie.forEach(([C,O],$)=>{xe.position.set(C,1.1,O),xe.rotation.set(0,0,0),xe.updateMatrix(),he.setMatrixAt($,xe.matrix),xe.position.set(C,2.2,O),xe.rotation.y=$*1.7,xe.updateMatrix(),Ne.setMatrixAt($,xe.matrix)}),[he,Ne].forEach(C=>{C.castShadow=!0,l.add(C)});let Ie=new He(new np(3.4,5.8,64),V);Ie.rotation.x=-Math.PI/2,Ie.position.set(-8,.1,32),Ie.receiveShadow=!0;let fe=new He(new Ji(3.4,3.4,.3,64),S("#9cc08a"));fe.position.set(-8,.15,32),fe.receiveShadow=!0,l.add(Ie,fe);let et=te(g(2.4,1.6,1.8,S(A),-3.4,0,26),g(2.8,.18,2.2,S(A),-3.4,1.6,26)),Ke=g(.5,4.6,1.3,S(A),-13,0,26.5),Fe=g(.54,.9,1.34,S("#3ca7d2"),-13,3.2,26.5);et.add(Ke,Fe);let at=w("collab",{map:Je(2)}),pt=w("collab"),ct=w("labs",{map:Je(2.6)}),$e=w("labs"),xt=te(g(9,4.4,9,[at,at,pt,pt,at,at],-8,0,15),g(10,3.2,7.5,[ct,ct,$e,$e,ct,ct],-17.5,0,15.5),g(10,3.2,7.5,[ct,ct,$e,$e,ct,ct],1.5,0,15.5),g(5.4,.25,2.6,pt,-8,3.1,20.6),g(1.6,2.2,.12,S("#3ca7d2"),-5.2,.9,19.56),g(2.4,.7,2,$e,-19,3.2,15),g(2.4,.7,2,$e,3,3.2,15));[-10.4,-5.6].forEach(C=>{let O=new He(new Ji(.12,.12,3.1,10),pt);O.position.set(C,1.55,21.6),xt.add(R(O))}),q(30,4.6,U,-8,.19,22);let ft=w("collab",{alphaMap:Ue,alphaTest:.5,side:Wt});[-20,-16.5,-13,-3,.5,4].forEach(C=>{let O=new He(new Ji(.09,.2,3.2,12),pt);O.position.set(C,1.6,22);let $=new He(new Hd(1.6,40),ft);$.rotation.x=-Math.PI/2+.06,$.position.set(C,3.25,22),xt.add(R(O),R($))});let ut=w("cea",{map:Je(1.2)}),D=w("cea"),yt=te();for(let C=0;C<3;C++)yt.add(g(5,2.6,6,[ut,ut,D,D,D,D],-28+C*6,0,1.5)),yt.add(g(1.4,.5,1.6,D,-28+C*6,2.6,2.6));let qe=Wa(128,128,C=>{C.fillStyle="#ffffff",C.fillRect(0,0,128,128),C.fillStyle="#b5b5b5";for(let O=4;O<128;O+=9)C.fillRect(0,O,128,3)});qe.wrapS=qe.wrapT=Ht;let nt=["#6c9f55","#5d9149","#86b56a","#4f8540","#9fc584"].map(C=>S(C,{map:qe})),E=ll(11),x=te(),N=(C,O,$,le)=>{let ae=new He(new Jt($,.32,le),nt[Math.floor(E()*nt.length)]);ae.position.set(C,.16,O),ae.receiveShadow=!0,ae.castShadow=!0,x.add(ae)},X=S("#2f8f88",{transparent:!0,opacity:.85}),Q=(C,O,$,le)=>{[[(C+$)/2,O,$-C,.06],[(C+$)/2,le,$-C,.06],[C,(O+le)/2,.06,le-O],[$,(O+le)/2,.06,le-O]].forEach(([ae,Re,Ge,Ze])=>{let Qe=new He(new Jt(Ge,1,Ze),X);Qe.position.set(ae,1/2,Re),Qe.castShadow=!0,x.add(Qe)})};Q(-33,-22.5,-3.5,-7.8);for(let C=0;C<2;C++)for(let O=0;O<4;O++)N(-28.6+O*7,-18.6+C*7,6.2,6.2);Q(-8.5,-4.8,13.5,5);for(let C=0;C<3;C++)N(-4.8+C*7.2,.1,6.6,8.6);Q(16.5,9.5,34,21.5);for(let C=0;C<6;C++)N(25.25,10.7+C*1.9,16.6,1.3);let de=new Zi(new Jt(1.5,1.1,1.5),S("#ffffff",{transparent:!0,opacity:.5,depthWrite:!1}),42);ye=0;for(let C=0;C<7;C++)for(let O=0;O<6;O++)xe.position.set(1+C*1.95,.55,-21.4+O*2.25),xe.rotation.set(0,0,0),xe.updateMatrix(),de.setMatrixAt(ye++,xe.matrix);de.castShadow=!0,x.add(de);let me=[],H=(C,O=.1)=>{let $=new Bn(C.map(Re=>new L(...Re)),!1,"catmullrom",0),le=$.getLength(),ae=Wa(64,8,Re=>{Re.fillStyle="#cfe9f5",Re.fillRect(0,0,64,8),Re.fillStyle="#3ca7d2",Re.fillRect(0,0,26,8)});ae.wrapS=Ht,ae.repeat.set(le/1.6,1),me.push(ae),x.add(new He(new op($,Math.ceil(le*3),O,6,!1),new vi({map:ae})))};H([[-33,.36,-15.1],[-3.5,.36,-15.1]]),[-25.1,-18.1,-11.1].forEach(C=>H([[C,.36,-22.5],[C,.36,-7.8]],.07)),H([[-8.5,.36,.1],[13.5,.36,.1]]),H([[16.9,.36,9.5],[16.9,.36,21.5]]);let ce=w("greenhouses",{color:"#eef3ea",transparent:!0,opacity:.72,roughness:.35,side:Wt,depthWrite:!1}),pe=te(),_e=10,re=2,Ee=13,Ae=25-_e*re/2+re/2;pe.add(g(_e*re,2.2,Ee,ce,25,0,-15));let De=re/Math.sqrt(3);for(let C=0;C<_e;C++){let O=new Ji(De,De,Ee,3);O.rotateX(-Math.PI/2),O.scale(1,.55,1);let $=new He(O,ce);$.position.set(Ae+C*re,2.2+De*.5*.55,-15),$.castShadow=!0,pe.add($)}let tt=new Zi(new Jt(.22,.3,Ee-1.2),S("#7aa864"),_e*3);ye=0;for(let C=0;C<_e;C++)for(let O=-1;O<=1;O++)xe.position.set(Ae+C*re+O*.55,.15,-15),xe.updateMatrix(),tt.setMatrixAt(ye++,xe.matrix);pe.add(tt);let z=S(A),ee=te();[21,24.6].forEach(C=>{let O=new He(new sp(1.6,40,20,0,Math.PI*2,0,Math.PI/2),z);O.position.set(C,0,-1),ee.add(R(O))});let se=new He(new ap(1.7,1),new mr({color:"#d7e7ee",roughness:.2,flatShading:!0,transparent:!0,opacity:.8}));se.position.set(28.4,.5,-1),ee.add(R(se)),[31.5,33.6].forEach(C=>{let O=new He(new Ji(.95,.95,1.5,32),z);O.position.set(C,.75,3),ee.add(R(O))}),ee.add(g(8,1.8,2.6,z,25,0,4));let Se=[];for(let C=0;C<7;C++){let O=new Jt(1.5,.05,.3);O.translate(.75,0,0),O.rotateZ(-.38),O.rotateY(C/7*Math.PI*2),Se.push(O)}let we=Uc(Se),oe=540,Me=new Zi(new Ji(.07,.11,1.8,6),S("#c9bfae"),oe),Oe=new Zi(we,S("#9db58c"),oe),mt=ll(7);ye=0;for(let C=0;C<18;C++)for(let O=0;O<30;O++){let $=43+C*3.1+(mt()-.5)*.5,le=-46+O*3.1+(mt()-.5)*.5,ae=.85+mt()*.4;xe.position.set($,.9*ae,le),xe.scale.set(ae,ae,ae),xe.rotation.set(0,0,0),xe.updateMatrix(),Me.setMatrixAt(ye,xe.matrix),xe.position.set($,1.8*ae,le),xe.rotation.y=mt()*Math.PI,xe.updateMatrix(),Oe.setMatrixAt(ye,xe.matrix),ye++}[Me,Oe].forEach(C=>{C.castShadow=!0,C.receiveShadow=!0,l.add(C)});let Ye=new mi,ti=new He(new Jt(.7,.18,.7),S("#ffffff"));Ye.add(ti);let ii=[];for(let C=0;C<4;C++){let O=C/4*Math.PI*2+Math.PI/4,$=new He(new Jt(.9,.05,.08),S("#ffffff"));$.rotation.y=O,$.position.set(Math.cos(O)*.45,.02,-Math.sin(O)*.45);let le=new He(new Ji(.32,.32,.02,20),new vi({color:M,transparent:!0,opacity:.55}));le.position.set(Math.cos(O)*.82,.1,-Math.sin(O)*.82),ii.push(le),Ye.add($,le)}R(Ye),l.add(Ye);let es={},tr=(C,O,$,le,ae)=>{let Re=new He(new Ua(le,ae),new vi({color:M,transparent:!0,opacity:0,depthWrite:!1}));Re.rotation.x=-Math.PI/2,Re.position.set(O,.2,$),l.add(Re),es[C]=Re};tr("collab",-8,21.5,30,6),tr("labs",-8,15.5,32,10),tr("cea",-22,1.5,19,8),tr("fields",-9.5,-15,49,16),tr("greenhouses",27,-8,22,30);let ea={};i.forEach((C,O)=>{let $=ol[C.key];if(!$?.label)return;let le=document.createElement("button");le.type="button",le.tabIndex=-1,le.className=sl.mapLabel,le.innerHTML=`<span>${String(O+1).padStart(2,"0")}</span>${C.title}`,le.addEventListener("click",()=>e.onJump(O));let ae=new Zv(le);ae.position.set(...$.label),l.add(ae),ea[C.key]=le});let zi=null,_r=null;n||(zi=new i_(s),zi.addPass(new r_(l,d)),_r=new Dc(l,d,1,1),_r.updateGtaoMaterial({radius:1.6,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12}),_r.blendIntensity=.9,zi.addPass(_r),zi.addPass(new l_));let ja=()=>{let C=t.clientWidth,O=t.clientHeight;s.setSize(C,O,!1),s.domElement.style.width="100%",s.domElement.style.height="100%",zi?.setSize(C,O),o.setSize(C,O),d.aspect=C/O,d.fov=C/O<1?42:30,C>=900?d.setViewOffset(C,O,-Math.min(230,C*.15),0,C,O):d.clearViewOffset(),d.updateProjectionMatrix()};ja();let Ti=new ResizeObserver(ja);Ti.observe(t);let ta=new Bn(i.map(C=>new L(...ol[C.key].cam)),!1,"centripetal"),qa=new Bn(i.map(C=>new L(...ol[C.key].look)),!1,"centripetal"),ir=ta.getPoint(0).multiplyScalar(1.3),rr=qa.getPoint(0),bi={pos:ir.clone(),look:rr.clone()},Vi={x:0,y:0},Ya=-1,Mr=[],Za={out2:C=>1-Math.pow(1-C,2),expo:C=>C>=1?1:1-Math.pow(2,-10*C),io2:C=>C<.5?2*C*C:1-Math.pow(-2*C+2,2)/2},ia=(C,O,$,le)=>Mr.push({t0:performance.now(),dur:C*1e3,delay:O*1e3,step:le,ease:$}),fl=()=>{let C=performance.now();for(let O=Mr.length-1;O>=0;O--){let $=Mr[O],le=C-$.t0-$.delay;if(le<0)continue;let ae=Math.min(1,le/$.dur);$.step($.ease(ae)),ae>=1&&Mr.splice(O,1)}},ml=C=>{Object.entries(b).forEach(([O,$])=>$.forEach(le=>{let ae=O===C?le.userData.hi:le.userData.base,Re=le.color.clone();ia(.9,0,Za.out2,Ge=>le.color.copy(Re).lerp(ae,Ge))})),Object.entries(es).forEach(([O,$])=>{let le=$.material,ae=le.opacity,Re=O===C?.1:0;ia(.9,0,Ge=>Ge,Ge=>le.opacity=ae+(Re-ae)*Ge)}),Object.entries(ea).forEach(([O,$])=>$.classList.toggle(sl.mapLabelOn,O===C))},Ja=C=>{let O=Sa.clamp(C,0,1);ta.getPoint(O,bi.pos),qa.getPoint(O,bi.look),d.aspect<1&&bi.pos.sub(bi.look).multiplyScalar(1.75).add(bi.look),f(O);let $=Math.round(O*(r-1));$!==Ya&&(Ya=$,e.onActive($),ml(i[$].key))};Ja(0),Z.forEach(C=>C.scale.y=a?1:.001),a&&j.geometry.setDrawRange(0,G.length);let y=!1,F=()=>{y||a||(y=!0,Z.forEach((C,O)=>ia(1.8,.3+O*.12,Za.expo,$=>C.scale.y=Math.max(.001,$))),ia(2.4,0,Za.io2,C=>j.geometry.setDrawRange(0,Math.round(G.length*C))))},Y=C=>{let O=t.getBoundingClientRect();Vi.x=((C.clientX-O.left)/O.width-.5)*2,Vi.y=((C.clientY-O.top)/O.height-.5)*2};t.addEventListener("pointermove",Y);let W=!1,k=new IntersectionObserver(([C])=>{W=C.isIntersecting,W&&F()},{rootMargin:"200px"});k.observe(t);let ue=new Zh,ve=0,Te=()=>{ve=requestAnimationFrame(Te),ue.update(),fl();let C=Math.min(ue.getDelta(),.05);if(!W)return;let O=ue.getElapsed(),$=a?1:1-Math.pow(.0015,C);ir.lerp(bi.pos,$),rr.lerp(bi.look,$);let le=a?0:1;if(d.position.set(ir.x+Vi.x*2.2+Math.sin(O*.15)*.8*le,ir.y-Vi.y*1.2,ir.z+Math.cos(O*.12)*.8*le),d.lookAt(rr),!a){me.forEach(Ze=>Ze.offset.x-=C*.9);let ae=O*.22;Ye.position.set(-18+Math.sin(ae)*12,6.5+Math.sin(O*1.3)*.15,-15+Math.sin(ae*2)*5);let Re=Math.cos(ae)*12,Ge=Math.cos(ae*2)*10;Ye.rotation.y=Math.atan2(-Ge,Re),ii.forEach(Ze=>Ze.rotation.y+=C*40)}zi?zi.render():s.render(l,d),o.render(l,d)};return Te(),{setProgress:Ja,destroy(){cancelAnimationFrame(ve),Ti.disconnect(),k.disconnect(),s.dispose()}}}window.mountSite=h_;function c_(e){let t=new Map,i=new Map,r=e.clone();return Bc(e,r,function(a,n){t.set(n,a),i.set(a,n)}),r.traverse(function(a){if(!a.isSkinnedMesh)return;let n=a,s=t.get(a),o=s.skeleton.bones;n.skeleton=s.skeleton.clone(),n.bindMatrix.copy(s.bindMatrix),n.skeleton.bones=o.map(function(l){return i.get(l)}),n.bind(n.skeleton,n.bindMatrix)}),r}function Bc(e,t,i){i(e,t);for(let r=0;r<e.children.length;r++)Bc(e.children[r],t.children[r],i)}var u_=class extends Gr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new g_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new zc(t,je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new zc(t,je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new C_(t)})}load(e,t,i,r){let a=this,n;if(this.resourcePath!=="")n=this.resourcePath;else if(this.path!==""){let l=Va.extractUrlBase(e);n=Va.resolveURL(l,this.path)}else n=Va.extractUrlBase(e);this.manager.itemStart(e);let s=function(l){r?r(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},o=new kh(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{a.parse(l,n,function(h){t(h),a.manager.itemEnd(e)},s)}catch(h){s(h)}},i,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let a,n={},s={},o=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===Vc){try{n[je.KHR_BINARY_GLTF]=new P_(e)}catch(h){r&&r(h);return}a=JSON.parse(n[je.KHR_BINARY_GLTF].content)}else a=JSON.parse(o.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new G_(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let c=this.pluginCallbacks[h](l);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[c.name]=c,n[c.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let c=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(c){case je.KHR_MATERIALS_UNLIT:n[c]=new f_;break;case je.KHR_DRACO_MESH_COMPRESSION:n[c]=new L_(a,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:n[c]=new N_;break;case je.KHR_MESH_QUANTIZATION:n[c]=new I_;break;default:d.indexOf(c)>=0&&s[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}l.setExtensions(n),l.setPlugins(s),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,a){i.parse(e,t,r,a)})}};function d_(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Mt(e,t,i){let r=e.json.materials[t];return r.extensions&&r.extensions[i]?r.extensions[i]:null}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},p_=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let a=t.json,n=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],s,o=new Le(16777215);n.color!==void 0&&o.setRGB(n.color[0],n.color[1],n.color[2],qt);let l=n.range!==void 0?n.range:0;switch(n.type){case"directional":s=new Xo(o),s.target.position.set(0,0,-1),s.add(s.target);break;case"point":s=new Yh(o),s.distance=l;break;case"spot":s=new Dp(o),s.distance=l,n.spot=n.spot||{},n.spot.innerConeAngle=n.spot.innerConeAngle!==void 0?n.spot.innerConeAngle:0,n.spot.outerConeAngle=n.spot.outerConeAngle!==void 0?n.spot.outerConeAngle:Math.PI/4,s.angle=n.spot.outerConeAngle,s.penumbra=1-n.spot.innerConeAngle/n.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+n.type)}return s.position.set(0,0,0),Si(s,n),n.intensity!==void 0&&(s.intensity=n.intensity),s.name=t.createUniqueName(n.name||"light_"+e),r=Promise.resolve(s),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(n){return i._getNodeRef(t.cache,a,n)})}},f_=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return vi}extendParams(e,t,i){let r=[];e.color=new Le(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let n=a.baseColorFactor;e.color.setRGB(n[0],n[1],n[2],qt),e.opacity=n[3]}a.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",a.baseColorTexture,Tt))}return Promise.all(r)}},m_=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},g_=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(r)}},v_=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},__=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},M_=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Tt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},x_=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},y_=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let a=i.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}},S_=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},T_=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let a=i.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],qt),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Tt)),Promise.all(r)}},b_=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}},E_=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){let i=Mt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},w_=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],n=t.options.ktx2Loader;if(!n){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,n)}},A_=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],s=r.images[n.source],o=i.textureLoader;if(s.uri){let l=i.options.manager.getHandler(s.uri);l!==null&&(o=l)}return i.loadTextureImage(e,n.source,o)}},R_=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],s=r.images[n.source],o=i.textureLoader;if(s.uri){let l=i.options.manager.getHandler(s.uri);l!==null&&(o=l)}return i.loadTextureImage(e,n.source,o)}},zc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),n=this.parser.options.meshoptDecoder;if(!n||!n.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(s){let o=r.byteOffset||0,l=r.byteLength||0,h=r.count,c=r.byteStride,d=new Uint8Array(s,o,l);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(h,c,d,r.mode,r.filter).then(function(u){return u.buffer}):n.ready.then(function(){let u=new ArrayBuffer(h*c);return n.decodeGltfBuffer(new Uint8Array(u),h,c,d,r.mode,r.filter),u})})}else return null}},C_=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let o of r.primitives)if(o.mode!==ei.TRIANGLES&&o.mode!==ei.TRIANGLE_STRIP&&o.mode!==ei.TRIANGLE_FAN&&o.mode!==void 0)return null;let a=i.extensions[this.name].attributes,n=[],s={};for(let o in a)n.push(this.parser.getDependency("accessor",a[o]).then(l=>(s[o]=l,s[o])));return n.length<1?null:(n.push(this.parser.createNodeMesh(e)),Promise.all(n).then(o=>{let l=o.pop(),h=l.isGroup?l.children:[l],c=o[0].count,d=[];for(let u of h){let p=new ze,v=new L,_=new Ri,m=new L(1,1,1),f=new Zi(u.geometry,u.material,c);for(let A=0;A<c;A++)s.TRANSLATION&&v.fromBufferAttribute(s.TRANSLATION,A),s.ROTATION&&_.fromBufferAttribute(s.ROTATION,A),s.SCALE&&m.fromBufferAttribute(s.SCALE,A),f.setMatrixAt(A,p.compose(v,_,m));let S=null;for(let A in s)if(A==="_COLOR_0"){let M=s[A];f.instanceColor=new Rn(M.array,M.itemSize,M.normalized)}else if(A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"){if(S===null){let b=f.geometry;S=new Et,S.name=b.name;for(let w in b.attributes)S.setAttribute(w,b.attributes[w]);for(let w in b.morphAttributes)S.morphAttributes[w]=b.morphAttributes[w];b.index!==null&&S.setIndex(b.index),S.morphTargetsRelative=b.morphTargetsRelative;for(let w of b.groups)S.addGroup(w.start,w.count,w.materialIndex);b.boundingBox!==null&&(S.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(S.boundingSphere=b.boundingSphere.clone()),S.drawRange.start=b.drawRange.start,S.drawRange.count=b.drawRange.count,S.userData=Object.assign({},b.userData),f.geometry=S}let M=s[A];S.setAttribute(A,new Rn(M.array,M.itemSize,M.normalized))}gt.prototype.copy.call(f,u),this.parser.assignFinalMaterial(f),d.push(f)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}},Vc="glTF",Xa=12,Hc={JSON:1313821514,BIN:5130562},P_=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Xa,a=new DataView(e,Xa),n=0;for(;n<r;){let s=a.getUint32(n,!0);n+=4;let o=a.getUint32(n,!0);if(n+=4,o===Hc.JSON){let l=new Uint8Array(e,Xa+n,s);this.content=i.decode(l)}else if(o===Hc.BIN){let l=Xa+n;this.body=e.slice(l,l+s)}n+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},L_=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,s={},o={},l={};for(let h in n){let c=cl[h]||h.toLowerCase();s[c]=n[h]}for(let h in e.attributes){let c=cl[h]||h.toLowerCase();if(n[h]!==void 0){let d=i.accessors[e.attributes[h]],u=$r[d.componentType];l[c]=u.name,o[c]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(c,d){r.decodeDracoFile(h,function(u){for(let p in u.attributes){let v=u.attributes[p],_=o[p];_!==void 0&&(v.normalized=_)}c(u)},s,l,qt,d)})})}},N_=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},I_=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},kc=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let n=0;n!==r;n++)t[n]=i[a+n];return t}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=s*2,l=s*3,h=r-t,c=(i-t)/h,d=c*c,u=d*c,p=e*l,v=p-l,_=-2*u+3*d,m=u-d,f=1-_,S=m-d+c;for(let A=0;A!==s;A++){let M=n[v+A+s],b=n[v+A+o]*h,w=n[p+A+s],R=n[p+A]*h;a[A]=f*M+S*b+_*w+m*R}return a}},D_=new Ri,U_=class extends kc{interpolate_(e,t,i,r){let a=super.interpolate_(e,t,i,r);return D_.fromArray(a).normalize().toArray(a),a}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gc={9728:_t,9729:wt,9984:El,9985:en,9986:pa,9987:wi},Wc={33071:di,33648:Qa,10497:Ht},hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},O_={CUBICSPLINE:void 0,LINEAR:ga,STEP:ma},ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function F_(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new mr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),e.DefaultMaterial}function vr(e,t,i){for(let r in i.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function Si(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function B_(e,t,i){let r=!1,a=!1,n=!1;for(let h=0,c=t.length;h<c;h++){let d=t[h];if(d.POSITION!==void 0&&(r=!0),d.NORMAL!==void 0&&(a=!0),d.COLOR_0!==void 0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(e);let s=[],o=[],l=[];for(let h=0,c=t.length;h<c;h++){let d=t[h];if(r){let u=d.POSITION!==void 0?i.getDependency("accessor",d.POSITION):e.attributes.position;s.push(u)}if(a){let u=d.NORMAL!==void 0?i.getDependency("accessor",d.NORMAL):e.attributes.normal;o.push(u)}if(n){let u=d.COLOR_0!==void 0?i.getDependency("accessor",d.COLOR_0):e.attributes.color;l.push(u)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(h){let c=h[0],d=h[1],u=h[2];return r&&(e.morphAttributes.position=c),a&&(e.morphAttributes.normal=d),n&&(e.morphAttributes.color=u),e.morphTargetsRelative=!0,e})}function z_(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)e.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function V_(e){let t,i=e.extensions&&e.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(i?t="draco:"+i.bufferView+":"+i.indices+":"+dl(i.attributes):t=e.indices+":"+dl(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,a=e.targets.length;r<a;r++)t+=":"+dl(e.targets[r]);return t}function dl(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function pl(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function H_(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var k_=new ze,G_=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new d_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,a=!1,n=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let s=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(s)===!0;let o=s.match(/Version\/(\d+)/);r=i&&o?parseInt(o[1],10):-1,a=s.indexOf("Firefox")>-1,n=a?s.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||a&&n<98?this.textureLoader=new Lp(this.options.manager):this.textureLoader=new Bp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(n){return n._markDefs&&n._markDefs()}),Promise.all(this._invokeAll(function(n){return n.beforeRoot&&n.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(n){let s={scene:n[0][r.scene||0],scenes:n[0],animations:n[1],cameras:n[2],asset:r.asset,parser:i,userData:{}};return vr(a,s,r),Si(s,r),Promise.all(i._invokeAll(function(o){return o.afterRoot&&o.afterRoot(s)})).then(function(){for(let o of s.scenes)o.updateMatrixWorld();e(s)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){let n=t[r].joints;for(let s=0,o=n.length;s<o;s++)e[n[s]].isBone=!0}for(let r=0,a=e.length;r<a;r++){let n=e[r];n.mesh!==void 0&&(this._addNodeRef(this.meshCache,n.mesh),n.skin!==void 0&&(i[n.mesh].isSkinnedMesh=!0)),n.camera!==void 0&&this._addNodeRef(this.cameraCache,n.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),a=(n,s)=>{let o=this.associations.get(n);o!=null&&this.associations.set(s,o);for(let[l,h]of n.children.entries())a(h,s.children[l])};return a(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let a=e(t[r]);a&&i.push(a)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,n){return i.getDependency(e,n)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(a,n){i.load(Va.resolveURL(t.uri,r.path),a,void 0,function(){n(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let n=hl[r.type],s=$r[r.componentType],o=r.normalized===!0,l=new s(r.count*n);return Promise.resolve(new Ft(l,n,o))}let a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(n){let s=n[0],o=hl[r.type],l=$r[r.componentType],h=l.BYTES_PER_ELEMENT,c=h*o,d=r.byteOffset||0,u=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,p=r.normalized===!0,v,_;if(u&&u!==c){let m=Math.floor(d/u),f="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count,S=t.cache.get(f);S||(v=new l(s,m*u,r.count*u/h),S=new bd(v,u/h),t.cache.add(f,S)),_=new Ed(S,o,d%u/h,p)}else s===null?v=new l(r.count*o):v=new l(s,d,r.count*o),_=new Ft(v,o,p);if(r.sparse!==void 0){let m=hl.SCALAR,f=$r[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,A=r.sparse.values.byteOffset||0,M=new f(n[1],S,r.sparse.count*m),b=new l(n[2],A,r.sparse.count*o);s!==null&&(_=new Ft(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let w=0,R=M.length;w<R;w++){let g=M[w];if(_.setX(g,b[w*o]),o>=2&&_.setY(g,b[w*o+1]),o>=3&&_.setZ(g,b[w*o+2]),o>=4&&_.setW(g,b[w*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=p}return _})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],n=this.textureLoader;if(a.uri){let s=i.manager.getHandler(a.uri);s!==null&&(n=s)}return this.loadTextureImage(e,r,n)}loadTextureImage(e,t,i){let r=this,a=this.json,n=a.textures[e],s=a.images[t],o=(s.uri||s.bufferView)+":"+n.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=n.name||s.name||"",h.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(h.name=s.uri);let c=(a.samplers||{})[n.sampler]||{};return h.magFilter=Gc[c.magFilter]||wt,h.minFilter=Gc[c.minFilter]||wi,h.wrapS=Wc[c.wrapS]||Ht,h.wrapT=Wc[c.wrapT]||Ht,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==_t&&h.minFilter!==wt,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){let i=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());let n=r.images[e],s=self.URL||self.webkitURL,o=n.uri||"",l=!1;if(n.bufferView!==void 0)o=i.getDependency("bufferView",n.bufferView).then(function(c){l=!0;let d=new Blob([c],{type:n.mimeType});return o=s.createObjectURL(d),o});else if(n.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(o).then(function(c){return new Promise(function(d,u){let p=d;t.isImageBitmapLoader===!0&&(p=function(v){let _=new Ot(v);_.needsUpdate=!0,d(_)}),t.load(Va.resolveURL(c,a.path),p,void 0,u)})}).then(function(c){return l===!0&&s.revokeObjectURL(o),Si(c,n),c.userData.mimeType=n.mimeType||H_(n.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),c});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let a=this;return this.getDependency("texture",i.index).then(function(n){if(!n)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(n=n.clone(),n.channel=i.texCoord),a.extensions[je.KHR_TEXTURE_TRANSFORM]){let s=i.extensions!==void 0?i.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(s){let o=a.associations.get(n);n=a.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(n,s),a.associations.set(n,o)}}return r!==void 0&&(n.colorSpace=r),e[t]=n,n})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,n=t.attributes.normal===void 0;if(e.isPoints){let s="PointsMaterial:"+i.uuid,o=this.cache.get(s);o||(o=new bh,Qt.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,o.sizeAttenuation=!1,this.cache.add(s,o)),i=o}else if(e.isLine){let s="LineBasicMaterial:"+i.uuid,o=this.cache.get(s);o||(o=new Oo,Qt.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,this.cache.add(s,o)),i=o}if(r||a||n){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),a&&(s+="vertex-colors:"),n&&(s+="flat-shading:");let o=this.cache.get(s);o||(o=i.clone(),a&&(o.vertexColors=!0),n&&(o.flatShading=!0),r&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(s,o),this.associations.set(o,this.associations.get(i))),i=o}e.material=i}getMaterialType(){return mr}loadMaterial(e){let t=this,i=this.json,r=this.extensions,a=i.materials[e],n,s={},o=a.extensions||{},l=[];if(o[je.KHR_MATERIALS_UNLIT]){let c=r[je.KHR_MATERIALS_UNLIT];n=c.getMaterialType(),l.push(c.extendParams(s,a,t))}else{let c=a.pbrMetallicRoughness||{};if(s.color=new Le(1,1,1),s.opacity=1,Array.isArray(c.baseColorFactor)){let d=c.baseColorFactor;s.color.setRGB(d[0],d[1],d[2],qt),s.opacity=d[3]}c.baseColorTexture!==void 0&&l.push(t.assignTexture(s,"map",c.baseColorTexture,Tt)),s.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,s.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(s,"metalnessMap",c.metallicRoughnessTexture)),l.push(t.assignTexture(s,"roughnessMap",c.metallicRoughnessTexture))),n=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,s)})))}a.doubleSided===!0&&(s.side=Wt);let h=a.alphaMode||ul.OPAQUE;if(h===ul.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,h===ul.MASK&&(s.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&n!==vi&&(l.push(t.assignTexture(s,"normalMap",a.normalTexture)),s.normalScale=new be(1,1),a.normalTexture.scale!==void 0)){let c=a.normalTexture.scale;s.normalScale.set(c,c)}if(a.occlusionTexture!==void 0&&n!==vi&&(l.push(t.assignTexture(s,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&n!==vi){let c=a.emissiveFactor;s.emissive=new Le().setRGB(c[0],c[1],c[2],qt)}return a.emissiveTexture!==void 0&&n!==vi&&l.push(t.assignTexture(s,"emissiveMap",a.emissiveTexture,Tt)),Promise.all(l).then(function(){let c=new n(s);return a.name&&(c.name=a.name),Si(c,a),t.associations.set(c,{materials:e}),a.extensions&&vr(r,c,a),c})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function a(s){return i[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(o){return Xc(o,s,t)})}let n=[];for(let s=0,o=e.length;s<o;s++){let l=e[s],h=V_(l),c=r[h];if(c)n.push(c.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=a(l):d=Xc(new Et,l,t),l.mode===ei.TRIANGLE_STRIP?d=d.then(u=>Fc(u,Ol)):l.mode===ei.TRIANGLE_FAN&&(d=d.then(u=>Fc(u,no))),r[h]={primitive:l,promise:d},n.push(d)}}return Promise.all(n)}loadMesh(e){let t=this,i=this.json,r=this.extensions,a=i.meshes[e],n=a.primitives,s=[];for(let o=0,l=n.length;o<l;o++){let h=n[o].material===void 0?F_(this.cache):this.getDependency("material",n[o].material);s.push(h)}return s.push(t.loadGeometries(n)),Promise.all(s).then(async function(o){let l=o.slice(0,o.length-1),h=o[o.length-1],c=[];for(let u=0,p=h.length;u<p;u++){let v=h[u],_=n[u],m,f=l[u];if(_.mode===ei.TRIANGLES||_.mode===ei.TRIANGLE_STRIP||_.mode===ei.TRIANGLE_FAN||_.mode===void 0){let S=a.isSkinnedMesh===!0,A=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");S&&A===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=S&&A?new Ld(v,f):new He(v,f),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(_.mode===ei.LINES)m=new Od(v,f);else if(_.mode===ei.LINE_STRIP)m=new Dn(v,f);else if(_.mode===ei.LINE_LOOP)m=new Fd(v,f);else if(_.mode===ei.POINTS)m=new Bd(v,f);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(m.geometry.morphAttributes).length>0&&z_(m,a),m.name=t.createUniqueName(a.name||"mesh_"+e),Si(m,a),_.extensions&&vr(r,m,_),t.assignFinalMaterial(m),c.push(m)}for(let u=0,p=c.length;u<p;u++)t.associations.set(c[u],{meshes:e,primitives:u});if(c.length===1)return a.extensions&&vr(r,c[0],a),c[0];let d=new mi;a.extensions&&vr(r,d,a),t.associations.set(d,{meshes:e});for(let u=0,p=c.length;u<p;u++)d.add(c[u]);return d})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Dt(Sa.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new za(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Si(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,a=t.joints.length;r<a;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let a=r.pop(),n=r,s=[],o=[];for(let l=0,h=n.length;l<h;l++){let c=n[l];if(c){s.push(c);let d=new ze;a!==null&&d.fromArray(a.array,l*16),o.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Id(s,o)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,n=[],s=[],o=[],l=[],h=[];for(let c=0,d=r.channels.length;c<d;c++){let u=r.channels[c],p=r.samplers[u.sampler],v=u.target,_=v.node,m=r.parameters!==void 0?r.parameters[p.input]:p.input,f=r.parameters!==void 0?r.parameters[p.output]:p.output;v.node!==void 0&&(n.push(this.getDependency("node",_)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",f)),l.push(p),h.push(v))}return Promise.all([Promise.all(n),Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(c){let d=c[0],u=c[1],p=c[2],v=c[3],_=c[4],m=[];for(let S=0,A=d.length;S<A;S++){let M=d[S],b=u[S],w=p[S],R=v[S],g=_[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let T=i._createAnimationTracks(M,b,w,R,g);if(T)for(let B=0;B<T.length;B++)m.push(T[B])}let f=new bp(a,void 0,m);return Si(f,r),f})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(a){let n=i._getNodeRef(i.meshCache,r.mesh,a);return r.weights!==void 0&&n.traverse(function(s){if(s.isMesh)for(let o=0,l=r.weights.length;o<l;o++)s.morphTargetInfluences[o]=r.weights[o]}),n})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],a=i._loadNodeShallow(e),n=[],s=r.children||[];for(let l=0,h=s.length;l<h;l++)n.push(i.getDependency("node",s[l]));let o=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([a,Promise.all(n),o]).then(function(l){let h=l[0],c=l[1],d=l[2];d!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(d,k_)});for(let u=0,p=c.length;u<p;u++)h.add(c[u]);if(h.userData.pivot!==void 0&&c.length>0){let u=h.userData.pivot,p=c[0];h.pivot=new L().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],n=a.name?r.createUniqueName(a.name):"",s=[],o=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return o&&s.push(o),a.camera!==void 0&&s.push(r.getDependency("camera",a.camera).then(function(l){return r._getNodeRef(r.cameraCache,a.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){s.push(l)}),this.nodeCache[e]=Promise.all(s).then(function(l){let h;if(a.isBone===!0?h=new gh:l.length>1?h=new mi:l.length===1?h=l[0]:h=new gt,h!==l[0])for(let c=0,d=l.length;c<d;c++)h.add(l[c]);if(a.name&&(h.userData.name=a.name,h.name=n),Si(h,a),a.extensions&&vr(i,h,a),a.matrix!==void 0){let c=new ze;c.fromArray(a.matrix),h.applyMatrix4(c)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);if(!r.associations.has(h))r.associations.set(h,{});else if(a.mesh!==void 0&&r.meshCache.refs[a.mesh]>1){let c=r.associations.get(h);r.associations.set(h,{...c})}return r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,a=new mi;i.name&&(a.name=r.createUniqueName(i.name)),Si(a,i),i.extensions&&vr(t,a,i);let n=i.nodes||[],s=[];for(let o=0,l=n.length;o<l;o++)s.push(r.getDependency("node",n[o]));return Promise.all(s).then(function(o){for(let h=0,c=o.length;h<c;h++){let d=o[h];d.parent!==null?a.add(c_(d)):a.add(d)}let l=h=>{let c=new Map;for(let[d,u]of r.associations)(d instanceof Qt||d instanceof Ot)&&c.set(d,u);return h.traverse(d=>{let u=r.associations.get(d);u!=null&&c.set(d,u)}),c};return r.associations=l(a),a})}_createAnimationTracks(e,t,i,r,a){let n=[],s=e.name?e.name:e.uuid,o=[];function l(u){u.morphTargetInfluences&&o.push(u.name?u.name:u.uuid)}er[a.path]===er.weights?(l(e),e.isGroup&&e.children.forEach(l)):o.push(s);let h;switch(er[a.path]){case er.weights:h=Oa;break;case er.rotation:h=Fa;break;case er.translation:case er.scale:h=Vn;break;default:i.itemSize===1?h=Oa:h=Vn;break}let c=r.interpolation!==void 0?O_[r.interpolation]:ga,d=this._getArrayFromAccessor(i);for(let u=0,p=o.length;u<p;u++){let v=new h(o[u]+"."+er[a.path],t.array,d,c);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),n.push(v)}return n}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=pl(t.constructor),r=new Float32Array(t.length);for(let a=0,n=t.length;a<n;a++)r[a]=t[a]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){let i=this instanceof Fa?U_:kc;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function W_(e,t,i){let r=t.attributes,a=new Ii;if(r.POSITION!==void 0){let o=i.json.accessors[r.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(a.set(new L(l[0],l[1],l[2]),new L(h[0],h[1],h[2])),o.normalized){let c=pl($r[o.componentType]);a.min.multiplyScalar(c),a.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=t.targets;if(n!==void 0){let o=new L,l=new L;for(let h=0,c=n.length;h<c;h++){let d=n[h];if(d.POSITION!==void 0){let u=i.json.accessors[d.POSITION],p=u.min,v=u.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),u.normalized){let _=pl($r[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}e.boundingBox=a;let s=new gi;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}function Xc(e,t,i){let r=t.attributes,a=[];function n(s,o){return i.getDependency("accessor",s).then(function(l){e.setAttribute(o,l)})}for(let s in r){let o=cl[s]||s.toLowerCase();o in e.attributes||a.push(n(r[s],o))}if(t.indices!==void 0&&!e.index){let s=i.getDependency("accessor",t.indices).then(function(o){e.setIndex(o)});a.push(s)}return Xe.workingColorSpace!==qt&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Si(e,t),W_(e,t,i),Promise.all(a).then(function(){return t.targets!==void 0?B_(e,t.targets,i):e})}var X_=class extends Mo{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Jt;e.deleteAttribute("uv");let t=new mr({side:Ut}),i=new mr,r=new Yh(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let a=new He(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let n=new Zi(e,i,6),s=new gt;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),n.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),n.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),n.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),n.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),n.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),n.setMatrixAt(5,s.matrix),this.add(n);let o=new He(e,Qr(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);let l=new He(e,Qr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new He(e,Qr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let c=new He(e,Qr(43));c.position.set(-.462,8.89,14.52),c.scale.set(4.38,5.441,.088),this.add(c);let d=new He(e,Qr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let u=new He(e,Qr(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qr(e){return new dp({color:0,emissive:16777215,emissiveIntensity:e})}var j_=[3.2,2.2,1.15,0,-1.15,-2.2,-3.2],Qn=9,q_=.28,jc=e=>e*e*e*(e*(e*6-15)+10),Y_=10.24,Z_=477/Y_;function J_(e){let t=e.host,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r;try{r=new Ac({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return e.onFail(),null}r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(0,0),r.toneMapping=da,r.toneMappingExposure=1.05,r.outputColorSpace=Tt,t.appendChild(r.domElement);let a=new Mo,n=new Dt(30,1,.1,400),s=new Qo(r);a.environment=s.fromScene(new X_,.04).texture,s.dispose();let o=new Xo("#fff1dc",2.2);o.position.set(-6,9,12),a.add(o,new Fp("#ffe9d0",.5));let l=new mi;a.add(l);let h={value:j_[1]},c={value:0},d={value:1},u={value:new Float32Array(Qn)},p={value:new Float32Array(Qn)},v=!1;new u_().parse(e.data,"",V=>{let q=V.scene;q.traverse(G=>{let ne=G;if(!ne.isMesh)return;let j=ne.material;j.side=Wt,j.onBeforeCompile=Z=>{Z.uniforms.uHiY=h,Z.uniforms.uGlow=c,Z.uniforms.uWhite=d,Z.uniforms.uAng=u,Z.uniforms.uBlue=p,Z.vertexShader=Z.vertexShader.replace("#include <common>",`#include <common>
varying float vLY;
varying float vT;
attribute float _tier;
uniform float uAng[9];`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
float ta_ = uAng[int(_tier + 0.5)]; float tc_ = cos(ta_); float ts_ = sin(ta_);
objectNormal = vec3(tc_ * objectNormal.x + ts_ * objectNormal.z, objectNormal.y, -ts_ * objectNormal.x + tc_ * objectNormal.z);`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = vec3(tc_ * transformed.x + ts_ * transformed.z, transformed.y, -ts_ * transformed.x + tc_ * transformed.z);
vLY = position.y; vT = _tier;`),Z.fragmentShader=Z.fragmentShader.replace("#include <common>",`#include <common>
varying float vLY;
varying float vT;
uniform float uBlue[9];
uniform float uHiY;
uniform float uGlow;
uniform float uWhite;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
float hk_ = 0.0; for (int k_ = 0; k_ < 9; k_++) { if (abs(vT - float(k_)) < 0.5) hk_ = uBlue[k_]; } float lum_ = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
vec3 dim_ = vec3(0.76 + 0.07 * lum_);
vec3 blue_ = vec3(0.2392, 0.6549, 0.8118) * (0.62 + 0.55 * lum_);
gl_FragColor.rgb = mix(mix(dim_, blue_, hk_), vec3(0.94 + 0.06 * lum_), uWhite);`)},j.needsUpdate=!0}),l.add(q),v=!0},()=>e.onFail());let _=()=>{let V=t.clientWidth||1,q=t.clientHeight||1;r.setSize(V,q,!1),n.aspect=V/q;let G=V<760,ne=G?Math.max(.42,Math.min(.6,q/931*.66)):Math.max(.5,Math.min(1.35,Math.min(V/1440,q/931))),j=q/(Z_*ne);n.position.set(0,0,j/2/Math.tan(Sa.degToRad(n.fov/2))),n.lookAt(0,0,0),G?n.setViewOffset(V,q,0,q*.1,V,q):n.clearViewOffset(),n.updateProjectionMatrix()};_();let m=new ResizeObserver(_);m.observe(t);let f=0,S=0,A=0,M=0,b=1,w=-1,R=-1,g=h.value,T=0,B=!1,P=performance.now(),I=0,K=new IntersectionObserver(([V])=>B=V.isIntersecting,{rootMargin:"200px"});K.observe(t);let U=()=>{I=requestAnimationFrame(U);let V=performance.now(),q=Math.min((V-P)/1e3,.05);if(P=V,!B||!v)return;let G=i?1:1-Math.exp(-q*5);S+=(f-S)*(i?1:1-Math.exp(-q*3.2)),d.value+=(b-d.value)*(i?1:1-Math.exp(-q*5)),R!==w?w>=0?(p.value[w]+=(0-p.value[w])*(i?1:1-Math.exp(-q*14)),p.value[w]<.03&&(p.value[w]=0,w=R)):w=R:w>=0&&(p.value[w]+=(1-p.value[w])*(i?1:1-Math.exp(-q*9))),M+=(A-M)*(i?1:1-Math.exp(-q*5));let ne=V/1e3;for(let Z=0;Z<Qn;Z++){let te=1/(1+q_),xe=Z/(Qn-1)*(1-te),ye=Math.max(0,Math.min(1,(S-xe)/te)),Je=Math.max(0,Math.min(1,M*1.6-Z*.075));u.value[Z]=jc(ye)*Math.PI*2-(1-jc(Je))*Math.PI*.9}h.value+=(g-h.value)*(i?1:1-Math.exp(-q*6)),c.value+=(T-c.value)*(i?1:1-Math.exp(-q*4));let j=1-Math.pow(1-M,3);l.scale.setScalar(.5+.5*j),l.position.y=(1-j)*-.9+(i?0:Math.sin(V/1600)*.06),l.rotation.x=i?0:Math.sin(ne*.45)*.03,r.render(a,n)};return U(),{setScroll(V){f=V},setEnter(V){A=Math.max(0,Math.min(1,V))},highlight(V){b=V<0?1:0,R=V<0?-1:Math.max(1,Math.min(7,V+1))},destroy(){cancelAnimationFrame(I),m.disconnect(),K.disconnect(),r.dispose()}}}window.mountHelix=J_})();/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
