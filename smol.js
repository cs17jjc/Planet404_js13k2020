function da(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function la(a){if(!(a instanceof Array)){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:da(a)};for(var d=[];!(b=a.next()).done;)d.push(b.value);a=d}return a}zzfx=function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];return zzfxP(zzfxG.apply(null,la(b)))};
zzfxP=function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];d=zzfxX.createBufferSource();var k=zzfxX.createBuffer(b.length,b[0].length,zzfxR);b.map(function(m,h){return k.getChannelData(h).set(m)});d.buffer=k;d.connect(zzfxX.destination);return d};
zzfxG=function(a,b,d,k,m,h,u,aa,G,ba,P,ea,oa,S,ca,fa,sa,ha,Ka,x,Q,ia,ja,Z,K,C,ka,T,Ba,La,Xa,Ma,Na,z,Oa,Pa,D,pa,Ca){a=void 0===a?1:a;b=void 0===b?.05:b;d=void 0===d?220:d;u=void 0===u?0:u;aa=void 0===aa?1:aa;G=void 0===G?0:G;ba=void 0===ba?0:ba;P=void 0===P?0:P;ea=void 0===ea?0:ea;oa=void 0===oa?0:oa;S=void 0===S?0:S;ca=void 0===ca?0:ca;fa=void 0===fa?0:fa;ha=void 0===ha?1:ha;x=void 0===x?zzfxR:x;Q=void 0===Q?99+(void 0===k?0:k)*x:Q;ia=void 0===ia?(void 0===m?0:m)*x:ia;ja=void 0===ja?(void 0===h?.1:
h)*x:ja;Z=void 0===Z?(void 0===Ka?0:Ka)*x:Z;K=void 0===K?(void 0===sa?0:sa)*x:K;C=void 0===C?2*Math.PI:C;ka=void 0===ka?function(Cb){return 0<Cb?1:-1}:ka;T=void 0===T?Q+Z+ia+ja+K:T;Ba=void 0===Ba?G*=500*C/Math.pow(x,2):Ba;La=void 0===La?d*=(1+2*b*Math.random()-b)*C/x:La;Xa=void 0===Xa?ka(ca)*C/4:Xa;Ma=void 0===Ma?0:Ma;Na=void 0===Na?0:Na;z=void 0===z?0:z;Oa=void 0===Oa?0:Oa;Pa=void 0===Pa?0:Pa;D=void 0===D?0:D;pa=void 0===pa?1:pa;for(Ca=void 0===Ca?[]:Ca;z<T;Ca[z++]=D)++Pa>100*fa&&(Pa=0,D=Ma*d*Math.sin(Na*
ca*C/x-Xa),D=ka(D=u?1<u?2<u?3<u?Math.sin(Math.pow(D%C,3)):Math.max(Math.min(Math.tan(D),1),-1):1-(2*D/C%2+2)%2:1-4*Math.abs(Math.round(D/C)-D/C):Math.sin(D))*Math.pow(Math.abs(D),aa)*a*zzfxV*(z<Q?z/Q:z<Q+Z?1-(z-Q)/Z*(1-ha):z<Q+Z+ia?ha:z<T-K?(T-z-K)/ja*ha:0),D=K?D/2+(K>z?0:(z<T-K?1:(z-T)/K)*Ca[z-K|0]/2):D),Ma+=1-S+1E9*(Math.sin(z)+1)%2*S,Na+=1-S+1E9*(Math.pow(Math.sin(z),2)+1)%2*S,d+=G+=500*ba*C/Math.pow(x,3),pa&&++pa>ea*x&&(d+=P*C/x,La+=P*C/x,pa=0),oa&&++Oa>oa*x&&(d=La,G=Ba,Oa=1,pa=pa||1);return Ca};
zzfxV=.5;zzfxR=44100;zzfxX=new (top.AudioContext||webkitAudioContext);
zzfxM=function(a,b,d,k){for(var m,h,u,aa,G,ba,P,ea,oa,S,ca,fa,sa,ha,Ka=0,x=[],Q=[],ia=[],ja=0,Z=0,K=1,C={},ka=zzfxR/(void 0===k?125:k)*60>>2;K;ja++)x=[K=ea=fa=0],d.map(function(T,Ba){P=b[T][ja]||[0,0,0];K|=!!b[T][ja];ha=fa+(b[T][0].length-2-!ea)*ka;sa=Ba==d.length-1;h=2;for(aa=fa;h<P.length+sa;ea=++h){G=P[h];oa=h==P.length+sa-1&&sa||S!=(P[0]||0)|G|0;for(u=0;u<ka&&ea;u++>ka-99&&oa?ca+=(1>ca)/99:0)ba=(1-ca)*x[Ka++]/2||0,Q[aa]=(Q[aa]||0)-ba*Z+ba,ia[aa]=(ia[aa++]||0)+ba*Z+ba;G&&(ca=G%1,Z=P[1]||0,(G|=
0)&&(x=C[[S=P[Ka=0]||0,G]]=C[[S,G]]||(m=[].concat(la(a[S])),m[2]*=Math.pow(2,(G-12)/12),0<G?zzfxG.apply(null,la(m)):[])))}fa=ha});return[Q,ia]};function c(a){zzfx.apply(null,la(a)).start()}function e(a){return Array.from(Array(a).keys())}var f=[e(18).map(function(a){return 2==a?15:0}),e(18).map(function(a){return 2==a?15:0}),e(18).map(function(a){return 10==a?15:0==a?1:0}),e(18).map(function(a){return 0==a?2:0==a%4&&12!=a?15:0})];f[1][14]=15;
function ma(a){return e(18).map(function(b){return 0==b?3:[2,6,10,14].includes(b)?a+[0,.1,.5,.7][[2,6,10,14].indexOf(b)]:1==b?-.1:0})}
var g=[ma(18),ma(22),ma(24),ma(30)],na=e(32).map(function(a){return 8>a?a-4*Math.trunc(a/4):16>a?4+(a-4*Math.trunc(a/4)):8+(a-4*Math.trunc(a/4))}),qa=[[[,0,86,,,,,.7,,,,.5,,6.7,1,.05],[.7,0,270,,,.12,3,1.65,-2,,,,,4.5,,.02],[.4,0,2200,,,.04,3,2,,,800,.02,,4.8,,.01,.1],[,0,130.81,,,1]],[[g[0]],[g[1]],[g[2]],[g[3]],[g[0],f[0],f[2]],[g[1],f[0],f[2]],[g[2],f[0],f[2]],[g[3],f[1],f[2]],[g[0],f[0],f[2],f[3]],[g[1],f[0],f[2],f[3]],[g[2],f[0],f[2],f[3]],[g[3],f[1],f[2],f[3]]],na,120];
function l(a,b,d){this.x=a;this.y=b;this.z=d}function ra(a,b,d){return a.x*b+a.y*d}var ta=[new l(1,1,0),new l(-1,1,0),new l(1,-1,0),new l(-1,-1,0),new l(1,0,1),new l(-1,0,1),new l(1,0,-1),new l(-1,0,-1),new l(0,1,1),new l(0,-1,1),new l(0,1,-1),new l(0,-1,-1)],ua=e(256).map(function(){return Math.trunc(255*Math.random())}),va=Array(512),wa=Array(512);
function xa(){var a=Math.random();a*=0<a&&1>a?65536:1;a=Math.floor(a);a=256>a?a|=a<<8:a;e(256).forEach(function(b){var d=b&1?ua[b]^a&255:ua[b]^a>>8&255;va[b]=va[b+256]=d;wa[b]=wa[b+256]=ta[d%12]})}function n(a,b,d){return(1-d)*a+d*b}function ya(a,b){this.x=a;this.y=b;this.l=!1;this.f={type:"NONE"};this.a={type:"NONE"};this.isVisible=!1;this.g={x:0,y:0};this.s=0}function p(a,b,d){this.r=a;this.N=b;this.M=d}function za(a){return"#"+Aa(a.r)+Aa(a.N)+Aa(a.M)+Aa(255)}
function Da(a,b){return new p(a.r*b,a.N*b,a.M*b)}var Ea=document.getElementById("canv"),q=Ea.getContext("2d");q.imageSmoothingEnabled=!1;var r=[],t,Fa=[{x:1,y:0},{x:.5,y:.866025},{x:-.5,y:.866025},{x:-1,y:0},{x:-.5,y:-.866025},{x:.5,y:-.866025}],v=1,w={x:0,y:0},Ga=new Map;Ga.set("NONE",new p(0,0,0));Ga.set("ROCK",new p(100,100,100));Ga.set("IRON",new p(165,42,42));Ga.set("COPPER",new p(184,115,51));Ga.set("CARBON",new p(18,18,18));Ga.set("LITHIUM",new p(169,169,169));
Ga.set("SILICON",new p(0,153,204));Ga.set("PLUTONIUM",new p(0,255,0));var y=document.getElementById("0"),Ha=document.getElementById("1"),Ia=document.getElementById("2"),Ja=document.getElementById("3"),Qa=new Map;Qa.set("Deadly",50);Qa.set("Critical",150);Qa.set("Very Low",400);function Ra(a,b,d,k){k=void 0===k?!0:k;q.beginPath();q.moveTo(a[0].x+b,a[0].y+d);e(a.length-1).forEach(function(m){return q.lineTo(a[m+1].x+b,a[m+1].y+d)});q.closePath();k&&q.fill();q.stroke()}
function Sa(a){q.fillStyle="#FFFFF0";q.save();q.translate(A/2,B/2);q.rotate(a);Ta.forEach(function(b){q.beginPath();q.arc(b.x,b.y,b.r,0,2*Math.PI);q.fill()});q.restore()}function Ua(){var a=E[0].filter(function(b){return"RADAR"==b.a.type});E[0].forEach(function(b){return b.isVisible=a.some(function(d){return Math.abs(d.x-b.x)<=E[12]})})}
function Va(a,b,d){function k(m,h){q.beginPath();q.arc(m,h,d/4,0,2*Math.PI);q.fill()}q.lineWidth=d/10;q.save();q.translate(a,b);q.strokeStyle="#A2A2A2";Ra([{x:0,y:-d/2},{x:-d/2,y:d/2},{x:d/2,y:d/2}],0,0,!1);q.fillStyle="#FF0000";k(0,-d/2);q.fillStyle="#FFF500";k(-d/2,d/2);q.fillStyle="#0045FF";k(d/2,d/2);q.restore()}
function Wa(a,b,d,k){var m=.25*d;k=Math.min(1,k);q.save();q.translate(a,b);q.fillStyle=za(new p(255-255*k,255*k,0));q.fillRect(0,-d*k,m,d*k);q.strokeStyle="#FFFFFF";Ra([{x:0,y:-d},{x:m,y:-d},{x:m,y:0},{x:0,y:0}],0,0,!1);q.restore()}
function Ya(a,b){Za=0;t=null!=t?t:E[0].find(function(k){return k.l});var d=E[0].find(function(k){return k.x==t.x+a&&k.y==t.y+b});null!=d&&(d.isVisible?Math.abs(d.height-t.height)<=5*E[10]?(t.l=!1,d.l=!0,w={x:t.g.x-d.g.x,y:t.g.y-d.g.y},t=d,c([F,.1,440,,,.07,,,,,50,.07])):r.push({text:"Incline too steep",time:0}):r.push({text:"Cannot enter unfound tile",time:0}))}function $a(a){a.f=1==a.f.value?{type:"NONE"}:{type:a.f.type,value:a.f.value-1,lines:ab(a.f.value-1)}}
function bb(a,b){a.a.type=b.type;var d=a.a;"RADAR"==d.type&&Ua();if("CONSTRUCTOR"==d.type||"MINER"==d.type)d.b=0,d.H=20,d.v=0,d.F=!1,"CONSTRUCTOR"==d.type&&(d.K=!1),"MINER"==d.type&&(d.u=0,d.O=a.f.type,d.P=50,d.counter=0);--b.value;c([F,,191,,,.07,1,1.09,-5.4,,,,,.4,-.4,.3,,.7])}function cb(){var a=t;db(a.a.type);var b=a.a.type;a.a={type:"NONE"};"RADAR"==b&&Ua();c([F,,400,,,.07,1,1.09,-5.4,,,,,.4,-.4,.3,,.7])}
function eb(a,b){var d=Math.min(E[11],b),k=E[3].find(function(m){return m.type==a});null!=k?(k.value+d>E[11]&&(d=E[11]-k.value),k.value+=d):E[3].push({type:a,value:d});return d}function db(a){var b=E[4].find(function(d){return d.type==a});null!=b?b.value+=1:E[4].push({type:a,value:1})}function fb(a){Ra(Fa.map(function(b){return{x:60*b.x,y:24*b.y}}),a.x,a.y)}function Aa(a){a=Math.max(0,Math.min(255,Math.trunc(a))).toString(16);return 1==a.length?"0"+a:a}
function gb(){var a=55+25*E[3].length+.05*B;Ra([{x:0,y:.29*B},{x:.09*A,y:.29*B},{x:.1*A,y:.27*B},{x:.1*A,y:0},{x:0,y:0},{x:0,y:.48*B},{x:.09*A,y:.48*B},{x:.1*A,y:.46*B-.02},{x:.1*A,y:.29*B},{x:0,y:.29*B},{x:0,y:0},{x:.39*A,y:0},{x:.42*A,y:.04*B},{x:.58*A,y:.04*B},{x:.61*A,y:0},{x:.83*A,y:0},{x:.83*A,y:a-.02*B},{x:.85*A,y:a},{x:A,y:a},{x:A,y:0},{x:0,y:0}],0,0)}
function hb(a,b,d){var k=1-d;Ra([{x:A*(d+.04),y:B*a},{x:A*(k-.04),y:B*a},{x:A*k,y:B*(a+.04)},{x:A*k,y:B*(a+b-.04)},{x:A*(k-.04),y:B*(a+b)},{x:A*(d+.04),y:B*(a+b)},{x:A*d,y:B*(a+b-.04)},{x:A*d,y:B*(a+.04)}],0,0);a+=.02;b-=.04;Ra([{x:A*(d+.02+.04),y:B*a},{x:A*(k-.02-.04),y:B*a},{x:A*(k-.02),y:B*(a+.04)},{x:A*(k-.02),y:B*(a+b-.04)},{x:A*(k-.02-.04),y:B*(a+b)},{x:A*(d+.02+.04),y:B*(a+b)},{x:A*(d+.02),y:B*(a+b-.04)},{x:A*(d+.02),y:B*(a+.04)}],0,0)}
function ib(a){return E[0].filter(function(b){var d=b.y-a.y;b=b.x-a.x;return 1==Math.abs(d)&&0==b||0==d&&1==Math.abs(b)||0==a.x%2&&-1==d&&1==Math.abs(b)||0!=a.x%2&&1==d&&1==Math.abs(b)})}function ab(a){var b=5+Math.trunc(5*Math.random()),d=a/20,k=12*(Math.random()-.5)*d,m=12*(Math.random()-.5)*d;return e(b).map(function(h){return{x:Math.max(-31,Math.min(31,k+(Math.cos(2*Math.PI/b*h)*d*60+15*Math.random()*d))),y:Math.max(-19,Math.min(19,m+(Math.sin(2*Math.PI/b*h)*d*24+15*Math.random()*d*.4)))}})}
function jb(){E[0]=e(kb).flatMap(function(a){return e(5).map(function(b){return new ya(a,b)})});E[0].forEach(function(a){var b=a.x/10,d=a.y/10,k=Math.floor(b),m=Math.floor(d);b-=k;d-=m;k&=255;m&=255;var h=b*b*b*(b*(6*b-15)+10);b=Math.max(0,Math.min(9,Math.trunc(Math.abs((n(n(ra(wa[k+va[m]],b,d),ra(wa[k+1+va[m]],b-1,d),h),n(ra(wa[k+va[m+1]],b,d-1),ra(wa[k+1+va[m+1]],b-1,d-1),h),d*d*d*(d*(6*d-15)+10))+1)/2*9))));a.height=5*b;a.L=Da(2>b?new p(41,0,37):4>b?new p(69,56,35):5>b?new p(120,192,145):7>b?new p(116,
79,198):new p(203,144,77),1-(Math.random()-.5)/3);b=Math.abs(lb-a.x);b<.5*kb&&.9<Math.random()&&mb(a,"ROCK",.5);b>.005*kb&&.85<Math.random()&&mb(a,"IRON",.5);b>.04*kb&&.9<Math.random()&&mb(a,"COPPER",.5);b>.08*kb&&.92<Math.random()&&mb(a,"CARBON",.6);b>.1*kb&&.92<Math.random()&&mb(a,"SILICON",.5);b>.15*kb&&.88<Math.random()&&mb(a,"LITHIUM",.6);b>.22*kb&&.9<Math.random()&&mb(a,"PLUTONIUM",.7);"PLUTONIUM"==a.f.type&&nb(a,a.f.value);b>.1*kb&&.8<Math.random()&&nb(a,3*Math.random())});E[0].find(function(a){return a.x==
lb}).l=!0;E[0].forEach(function(a){"NONE"!=a.f.type&&(a.f.lines=ab(a.f.value))})}function mb(a,b,d){a.f={type:b,value:Math.max(10,Math.trunc(15*Math.random()))};ib(a).forEach(function(k){Math.random()>d&&(k.f={type:b,value:Math.max(5,Math.trunc(a.f.value*Math.random()))})})}function nb(a,b){a.s=Math.ceil(b);ib(a).forEach(function(d){return d.s=Math.ceil(.8*b)})}var ob="Resume;Main Menu;Save Game;Load Game;Toggle Music;Toggle Sound FX".split(";"),H=0,pb=["New Game","Load Game"],qb=!0,F=.5;
function rb(){c([F,.01,593,,.03,0,1,2.04,.1,.1,50,.01,,-.1,,,.06,.96,.08])}function sb(){c([F,0,604,,,.13,4,2.01,-.1,.2,50,,.01,,,.4,.05,.68,.05])}var tb=[{product:"RADAR",items:[{type:"IRON",value:18}],b:8}];[{type:"ROCK",m:1},{type:"IRON",m:5},{type:"COPPER",m:25},{type:"CARBON",m:50},{type:"SILICON",m:80},{type:"LITHIUM",m:100},{type:"PLUTONIUM",m:200}];
var ub=e(21).map(function(a){var b=Math.trunc(a/3),d=[{type:"ROCK",m:1},{type:"IRON",m:5},{type:"COPPER",m:25},{type:"CARBON",m:50},{type:"SILICON",m:80},{type:"LITHIUM",m:100},{type:"PLUTONIUM",m:200}][b];return{type:d.type,m:d.m,C:[1,10,50][a-3*b]}}),vb=[{item:"RESOURCE STORAGE",h:350,A:2,o:["Increases max resource capacity","by 20%"]},{item:"BATTERY EFFICENCY",h:200,A:1.6,o:["Increases max battery capacity","by 25%"]},{item:"CRAFT HEIGHT TOLERANCE",h:350,A:1.5,o:["Allows passage between tiles with a",
"larger height difference."]},{item:"CONSTRUCTOR",h:500,o:["Allows construction of constructors.","Constructors manufacture other","buildings."]},{item:"MINER",h:750,o:["Allows construction of miners.","Miners gather resources 10 times","more efficent than manual mining."]},{item:"SOLAR",h:1250,o:["Allows construction of solars.","Solars generate fluctuating energy."]},{item:"RTG",h:2500,o:["Allows construction of RTGs.","RTGs generate constant energy."]},{item:"RADAR RADIUS",h:1E3,A:1.5,o:["Increases radar uncover",
"distance by 2 tiles."]},{item:"CONSTRUCTOR SPEED",h:200,A:1.8,o:["Increases constructor speed","by 30%"]},{item:"CONSTRUCTOR TRANSMITTER",h:1850,o:["Constructor transmits finished","constructions to inventory."]},{item:"MINER SPEED",h:750,A:1.8,o:["Incrases Miner speed by 50%"]},{item:"MINER TRANSMITTER",h:1985,o:["Miner transmits mined","resources to inventory."]},{item:"RTG OUTPUT",h:250,A:1.8,o:["Increases RTG output by 1."]},{item:"SOLAR OUTPUT",h:550,A:1.4,o:["Increases Solar output by 1."]}],
E,wb=1,xb,yb=!1,zb=0,Ab=[500,1E3,2E3,5E3,1E4,2E4,5E4],Bb=!1,Db=!1,A=1280,B=720;Ea.width=A;Ea.height=B;Ea.style.width=Ea.width+"px";Ea.style.height=Ea.height+"px";var I={j:!1,i:!1,left:!1,right:!1,c:!1,G:!1,remove:!1,D:!1,J:!1,I:!1},J={j:!1,i:!1,left:!1,right:!1,c:!1,G:!1,remove:!1,D:!1,J:!1,I:!1},L=0,Eb=0,M=0,N=0,O=!1,R=!1,U=!1,V=!1,W=!1,Fb=0,Gb=!1,Hb=!1,Za=0,Ib="Nominal",Jb=zzfxM.apply(null,la(qa)),Kb=zzfxP.apply(null,la(Jb));Kb.loop=!0;Kb.start();
var Lb=!0,Ta=e(500).map(function(){return{x:2*Math.random()*A-A,y:2*Math.random()*B-B,r:3*Math.random()}}),kb=500,lb=240,Mb=!1,Nb=!1;function X(a,b,d){return q.fillText(a,b,d)}var Ob=(new Date).getTime(),Y=0;
function Pb(){Sa(0);q.fillStyle="#FFFFFF";q.textAlign="center";q.textBaseline="middle";q.font="65px Tahoma";X("Planet 404",A/2,.1*B);1==J.j&&0==I.j&&(H=Math.max(0,H-1),c([]));1==J.i&&0==I.i&&(H=Math.min(pb.length-1,H+1),c([]));1==J.c&&0==I.c&&("New Game"==pb[H]&&(F=0,Qb(),F=.5,qb=!1,H=0,Nb=!0,rb()),"Load Game"==pb[H]&&(null!=window.localStorage.getItem("Planet404_6473_DATA")?(Rb(),Mb=!0,qb=!1,H=0,rb()):sb()));q.font="40px Tahoma";pb.forEach(function(a){q.fillStyle="#AAAAAA";H==pb.indexOf(a)&&(q.drawImage(y,
Math.trunc(.45*A-.5*q.measureText(a).width-.5*y.width),Math.trunc(.3*B+80*pb.indexOf(a)-.5*y.height)),q.drawImage(y,Math.trunc(.55*A+.5*q.measureText(a).width-.5*y.width),Math.trunc(.3*B+80*pb.indexOf(a)-.5*y.height)),q.fillStyle="#FFFFFF");X(a,.5*A,.3*B+80*pb.indexOf(a))})}
function Qb(){E=Array(20);xa();jb();E[4]=[{type:"RADAR",value:1}];E[3]=[];E[5]=0;E[7]=tb.slice();E[8]=vb.slice();E[19]=!1;E[9]=50;E[6]=E[9];E[10]=1;E[11]=50;E[13]=4;E[14]=1;E[15]=1;E[16]=!1;E[17]=!1;E[18]=5;E[12]=6;E[1]=0;E[2]=0;Bb=!1;I={j:!1,i:!1,left:!1,right:!1,c:!1,G:!1,remove:!1,info:!1,D:!1,J:!1,I:!1};J={j:!1,i:!1,left:!1,right:!1,c:!1,G:!1,remove:!1,info:!1,D:!1,J:!1,I:!1};w={x:0,y:0};bb(E[0].find(function(a){return a.x==lb&&2==a.y}),{type:"RADAR",value:1});bb(E[0].find(function(a){return a.x==
lb&&0==a.y}),{type:"RTG",value:1});bb(E[0].find(function(a){return a.x==lb-1&&0==a.y}),{type:"CONSTRUCTOR",value:1});bb(E[0].find(function(a){return a.x==lb+2&&1==a.y}),{type:"TELEDEPOT",value:1});t=E[0].find(function(a){return a.l});Ya(0,0);xb=E[6]}
function Sb(){Sa(Math.PI/180*(360*E[2]+E[1]));E[0].filter(function(b){return 11>=Math.abs(b.x-t.x)}).sort(function(b,d){return b.height-d.height}).sort(function(b,d){return b.y-d.y}).sort(function(b,d){return b.isVisible-d.isVisible}).forEach(function(b){b.g.x=90*b.x+A/2-90*t.x;b.g.y=41.5692*b.y+.71*B+(0!=b.x%2?20.7846:0)-(b.isVisible?b.height:0);q.lineWidth=3;var d=new p(n(b.L.r,0,b.s/5*b.L.r/255),n(b.L.N,255,b.s/5+Math.sin(Ob/300)*b.s/20),n(b.L.M,0,b.s/5*b.L.M/255));q.strokeStyle=b.isVisible?0==
b.s?za(Da(d,.2)):za(Da(d,1.5)):"#000000";q.fillStyle=b.isVisible?za(d):"#AAAAAA";fb(b.g);d=Ga.get(b.f.type);q.fillStyle=za(d);q.strokeStyle=za(Da(d,.2));b.isVisible&&"NONE"!=b.f.type&&Ra(b.f.lines,b.g.x,b.g.y);q.fillStyle="#000000";q.font="24px Arial";q.textAlign="center";q.textBaseline="middle";b.isVisible||X("404",b.g.x,b.g.y);q.font="500 100px Arial";"RADAR"==b.a.type?q.drawImage(Ia,Math.trunc(b.g.x-Ia.width/2),Math.trunc(b.g.y-.9*Ia.height)):"SOLAR"==b.a.type?q.drawImage(Ja,Math.trunc(b.g.x-Ja.width/
2),Math.trunc(b.g.y-.45*Ja.height)):"NONE"!=b.a.type&&(q.drawImage(Ha,Math.trunc(b.g.x-Ha.width/2),Math.trunc(b.g.y-.7*Ha.height)),q.save(),q.translate(b.g.x,b.g.y),Va(0,0,10),q.fillStyle="#00FF0099",q.fillRect(-12,-46,23,27),q.fillStyle="#001100FF",q.scale(.25,.25),X("CONSTRUCTOR"==b.a.type?"\u2692":"MINER"==b.a.type?"\u26cf":"RTG"==b.a.type?"\u2622":"TELEDEPOT"==b.a.type?"\u20bf":"",0,-130),q.restore())});var a=t.g;q.drawImage(y,Math.trunc(a.x-y.width*v/2+w.x),Math.trunc(a.y-y.height*v/2-10+w.y+
3*Math.sin(Ob/400)),Math.trunc(y.width*v),Math.trunc(y.height*v));q.fillStyle="#FFFFFF";q.textAlign="center";if(!U||yb||Bb)if(yb||Bb||Db)yb?(w.y=n(w.y,10,Y/1500),v=n(v,0,Y/1500),q.font=Math.trunc(50-50*v)+"px Arial",q.fillStyle="#FFFFFF",q.strokeStyle="#000000",X("You Died",A/2,.2*B),.4>v&&(X("Press E to respawn",A/2,.3*B),1==J.c&&0==I.c&&(E[6]=E[9],E[3]=[],E[4]=[],yb=!1,v=1,w={x:0,y:0}))):Bb?(w.y=n(w.y,10,Y/1500),v=n(v,0,Y/1500),q.font=Math.trunc(50-50*v)+"px Arial",q.fillStyle="#FFFFFF",q.strokeStyle=
"#000000",X("Quota Failed",A/2,.2*B),E[0].forEach(function(b){return b.s=Math.min(6,b.s+Y/800)}),.4>v&&(X("Press E to return to main menu",A/2,.3*B),1==J.c&&0==I.c&&(qb=!0,Bb=Mb=U=!1,v=1)),.8<v?(q.fillStyle="#FFFFFF"+Aa(255-(1-v)/.2*255),q.beginPath(),q.arc(A/2,B/2,(1-v)/.2*A,0,2*Math.PI),q.fill()):(q.fillStyle="#FFFFFF"+Aa(v/.8*255),q.fillRect(0,0,A,B))):Db&&(q.strokeStyle="#FFFFFF",q.fillStyle="#000000AA",hb(.05,.5,.2),q.font="20px Arial",q.fillStyle="#FFFFFF",q.strokeStyle="#000000",X("Congratulations, you have completed all JMC\u2122 Mining Initative quotas.",
A/2,.2*B),X("Due to the costs of JMC\u2122 Craft recovery, you have been offered an",A/2,25+.2*B),X("involutary position as head of planetary excavations.",A/2,50+.2*B),X("Thanks for playing!",A/2,.45*B),1.5<=E[1]&&(X("Press E to enter endless mode",A/2,25+.45*B),E[19]=1==J.c&&0==I.c,Db=!E[19]));else{E[0].forEach(function(b){b.isVisible&&"NONE"!=b.a.type&&Ub(b)});wb=1==J.J&&1==I.J?1.8:1;w={x:n(w.x,0,Y/180*wb),y:n(w.y,0,Y/180*wb)};E[3]=E[3].filter(function(b){return 0<b.value});L=Math.min(ub.filter(function(b){return E[3].some(function(d){return b.type==
d.type&&d.value>=b.C})}).length-1,L);E[4]=E[4].filter(function(b){return 0<b.value});M=Math.min(E[8].length-1,M);0==ub.filter(function(b){return E[3].some(function(d){return b.type==d.type})&&V}).length&&(L=0,V=!1);xb<E[6]&&(Ib="Charging");if(V||W||["SOLAR","RTG"].some(function(b){return b==t.a.type}))Ib="Paused";["Charging","Paused"].includes(Ib)?Gb=!1:E[6]-=Y/1E3*(1+t.s);Vb();Wb()}else q.font="45px Tahoma",X("Paused",A/2,30),q.font="35px Tahoma",ob.forEach(function(b){q.fillStyle="#AAAAAA";H==ob.indexOf(b)&&
(q.drawImage(y,Math.trunc(.45*A-.5*q.measureText(b).width-.5*y.width),Math.trunc(.15*B+50*ob.indexOf(b)-.5*y.height)),q.drawImage(y,Math.trunc(.55*A+.5*q.measureText(b).width-.5*y.width),Math.trunc(.15*B+50*ob.indexOf(b)-.5*y.height)),q.fillStyle="#FFFFFF");X(b,.5*A,.15*B+50*ob.indexOf(b))}),Tb();0>=E[6]&&!yb&&(yb=!0,c([F,,160,.01,.2,.04,2,,-.1,.1,-100,.1]));xb=E[6];E[1]+=yb?0:Y/1500;359<E[1]&&(Db||E[19]||(E[5]>=Ab[E[2]]?(E[5]-=Ab[E[2]],(Db=6==E[2])?c([F,0,220,,2,.08,1.5,,,,50,.07,.1,,,,.01]):c([F,
0,160,,1,.04,2,,,,25,.07,.03,,,,.01])):(Bb=!0,c([F,,299,.01,.03,1.95,3,.1,.9,.6,,,,.5,.9,.6,,.52,.06]),c([F,0,160,,1.25,.04,2,,,,-25,.25,.01,,,,.01]))),E[2]+=1,E[1]=0)}
function Wb(){O||U||V||W||R?(1==J.j&&0==I.j||1==J.i&&0==I.i)&&c([]):15>Math.abs(w.x)&&15>Math.abs(w.y)?1==J.j?Ya(0,-1):1==J.i?Ya(0,1):1==J.right?Ya(1,0):1==J.left?Ya(-1,0):null:null;O&&(N=1==J.j&&0==I.j?Math.max(0,N-1):1==J.i&&0==I.i?Math.min(E[4].length-1,N+1):N);R&&(N=1==J.j&&0==I.j?Math.max(0,N-1):1==J.i&&0==I.i?Math.min(E[7].length-1,N+1):N);V&&(L=1==J.j&&0==I.j?Math.max(0,L-1):1==J.i&&0==I.i?Math.min(ub.filter(function(a){return E[3].some(function(b){return a.type==b.type&&b.value>=a.C})}).length-
1,L+1):L);W&&(M=1==J.j&&0==I.j?Math.max(0,M-1):1==J.i&&0==I.i?Math.min(E[8].length-1,M+1):M,1==J.c&&0==I.c&&Xb());1!=J.I||0!=I.I||O||R||V||(W=!W);1!=J.c||O||U||W||(0==I.c&&(Za=0),0==Za&&("NONE"!=t.f.type&&"NONE"==t.a.type?0<eb(t.f.type,1)?($a(t),c([F,.02,320,.01,,0,4,.1,,,,,,,,.2,.01,0,.01])):r.push({text:"Resource full",time:0}):"NONE"!=t.a.type&&Yb()),Za=1<=Za?0:Za+Y/100);1!=J.G||0!=I.G||R||U||V||W||(0==E[4].length?r.push({text:"No Buildings",time:0}):(N=0,O=!O));O&&1==J.c&&0==I.c&&E[0].some(function(a){return a.l&&
"NONE"==a.a.type})&&(bb(t,E[4][N]),O=!1,N=0);1==J.remove&&0==I.remove&&E[0].some(function(a){return a.l&&"NONE"!=a.a.type})&&cb();1==J.D&&0==I.D&&(O||V||W||R?(R=W=V=O=!1,V=N=0):U=!0)}
function Tb(){0==J.j&&1==I.j&&(H=Math.max(0,H-1),c([]));0==J.i&&1==I.i&&(H=Math.min(ob.length-1,H+1),c([]));1==J.D&&0==I.D&&(U=!1);if(0==J.c&&1==I.c){var a=ob[H];U="Resume"!=a;"Main Menu"==a&&(qb=!0,Mb=U=!1,H=0);"Save Game"==a&&(window.localStorage.setItem("Planet404_6473_DATA",JSON.stringify(E)),r.push({text:"Game Saved",time:0}),U=!1);"Load Game"==a&&(null!=window.localStorage.getItem("Planet404_6473_DATA")?Rb():r.push({text:"Game Save not found",time:0}),U=!1);"Toggle Music"==a&&(Lb?Kb.disconnect():
Kb.connect(zzfxX.destination),Lb=!Lb);"Toggle Sound FX"==a&&(F=0==F?.5:0);rb()}}function Rb(){R=W=V=O=!1;V=N=0;E=JSON.parse(window.localStorage.getItem("Planet404_6473_DATA"));t=E[0].find(function(a){return a.l});Ya(0,0);xb=E[6]}
function Xb(){if(E[5]>=E[8][M].h){E[5]-=E[8][M].h;E[8][M].h=null!=E[8][M].A?Math.round(E[8][M].h*E[8][M].A):E[8][M].h;var a=E[8][M].item;"RESOURCE STORAGE"==a&&(E[11]=Math.round(1.2*E[11]));"BATTERY EFFICENCY"==a&&(E[9]*=1.25);"CRAFT HEIGHT TOLERANCE"==a&&(E[10]+=1);"CONSTRUCTOR SPEED"==a&&(E[14]*=1.3);E[17]="CONSTRUCTOR TRANSMITTER"==a;E[16]="MINER TRANSMITTER"==a;"MINER TRANSMITTER"!=a&&"CONSTRUCTOR TRANSMITTER"!=a||E[8].splice(M,1);"MINER SPEED"==a&&(E[15]*=1.5);"RTG OUTPUT"==a&&(E[18]+=1);"SOLAR OUTPUT"==
a&&(E[13]+=1);"RADAR RADIUS"==a&&(E[12]+=1);"RADAR RADIUS"==a&&Ua();"CONSTRUCTOR"==a&&(E[7].push({product:"CONSTRUCTOR",items:[{type:"IRON",value:10},{type:"COPPER",value:15}],b:4}),E[8].splice(M,1));"MINER"==a&&(E[7].push({product:"MINER",items:[{type:"IRON",value:10},{type:"COPPER",value:15}],b:4}),E[8].splice(M,1));"SOLAR"==a&&(E[7].push({product:"SOLAR",items:[{type:"IRON",value:10},{type:"COPPER",value:15}],b:4}),E[8].splice(M,1));"RTG"==a&&(E[7].push({product:"RTG",items:[{type:"IRON",value:10},
{type:"COPPER",value:15}],b:4}),E[8].splice(M,1));rb()}else r.push({text:"Cannot afford "+E[8][M].item,time:0}),sb()}
function Yb(){switch(t.a.type){case "CONSTRUCTOR":if(R)if(t.a.b>=E[7][N].b){var a=E[7][N].items;a.filter(function(k){return E[3].some(function(m){return m.type==k.type&&m.value>=k.value})}).length==a.length?(t.a.B=Object.assign({},E[7][N]),E[3].forEach(function(k){var m=a.find(function(h){return h.type==k.type});k.value-=null!=m?m.value:0}),r.push({text:"Crafting "+t.a.B.product,time:0}),t.a.F=!0,t.a.b-=E[7][N].b,R=!1,rb()):(r.push({text:"Missing resources",time:0}),sb())}else r.push({text:"Not enough energy",
time:0});null==t.a.B&&(R=!0,N=0);t.a.K&&(db(t.a.B.product),r.push({text:"Gained "+t.a.B.product,time:0}),t.a.K=!1,t.a.B=null,t.a.v=0,rb());break;case "MINER":if(!E[16]&&0<t.a.u){var b=eb(t.a.O,t.a.u);0==b?(sb(),r.push({text:"Resource full",time:0})):(t.a.u-=b,r.push({text:"Gained "+b+" "+t.a.O,time:0}),rb())}break;case "TELEDEPOT":if(V){var d=ub.filter(function(k){return E[3].some(function(m){return k.type==m.type&&m.value>=k.C})})[L];E[3].find(function(k){return k.type==d.type}).value-=d.C;E[5]+=
d.C*d.m;c([F,.01,287,.11,,0,3,.01,,,198,.09,,,,,.06,.5])}else L=0,V=!0}}
function Vb(){var a=.12*B;Gb?1<=Fb&&(c([F,0,500,.2,,0,1,.5,,,50,.12,,,,,,,.01]),Hb=!Hb,Fb=0):Hb=!1;q.strokeStyle=Hb?"#FF0000":"#FFFFFF";q.fillStyle="#000000AA";gb();q.font="15px Arial";q.fillStyle="#FFFFFF";q.textAlign="start";r=r.slice(-3,5);r=r.filter(function(h){return 2E3>h.time});var b=25*r.length;r.forEach(function(h){X(h.text,.01*A,.42*B+150-b+25*r.indexOf(h));h.time+=Y});q.textAlign="center";q.textBaseline="middle";q.font="25px Arial";X("Inventory",.92*A,30);q.font="15px Arial";E[3].forEach(function(h){X(h.value+
"/"+E[11]+" units of "+h.type,.92*A,80+25*E[3].indexOf(h))});X("Sol: "+(E[2]+1)+" Planet Rotation: "+E[1].toFixed(0)+"\u00b0",A/2,15);if(!(O||R||V||W)&&(5>=E[1]||355<=E[1])){q.fillStyle="#000000AA";var d=Aa(255-255*Math.min(Math.abs(360-E[1]),E[1])/5);q.strokeStyle="#FFFFFF"+d;hb(.05,.14,.39);q.font="30px Tahoma";q.fillStyle="#FFFFFF"+d;X("Sol "+(E[2]+1)+"/7",A/2,a)}q.strokeStyle="#FFFFFF";if(O){q.fillStyle="#000000AA";hb(.05,.5,.4);q.font="30px Tahoma";q.fillStyle="#FFFFFF";X("Build Mode",A/2,a);
q.font="20px Tahoma";var k=E[4].filter(function(h){return Math.abs(E[4].indexOf(h)-N)<5+Math.max(0,4-N)});k.forEach(function(h){q.fillStyle=N==E[4].indexOf(h)?"#FFFFFF":"#AAAAAA";X(h.type+":"+h.value,A/2,a+40+25*k.indexOf(h))})}R&&(q.fillStyle="#000000AA",hb(.05,.5,.3),q.fillStyle="#FFFFFF",Ra([{x:.5*A,y:.07*B},{x:.5*A,y:.53*B}],0,0,!1),q.font="30px Tahoma",X("Set Recipe:",.4*A,a+.01*A),q.font="20px Tahoma",k=E[7].filter(function(h){return Math.abs(E[7].indexOf(h)-N)<5+Math.max(0,4-N)}),k.forEach(function(h){q.fillStyle=
N==E[7].indexOf(h)?"#FFFFFF":"#AAAAAA";"EXIT"!=h.product&&(N==E[7].indexOf(h)&&(q.font="25px Tahoma",h.items.forEach(function(u){return X(u.value+" "+u.type,.59*A,a+.01*A+40+25*h.items.indexOf(u))}),X(h.b+" ENERGY",.59*A,a+.01*A+40+25*h.items.length)),q.font="20px Tahoma");X(h.product,.4*A,a+.01*A+40+25*k.indexOf(h))}));if(V){q.fillStyle="#000000AA";hb(.05,.5,.4);q.fillStyle="#FFFFFF";q.font="30px Tahoma";X("Sell Mode",A/2,a);q.font="20px Tahoma";var m=ub.filter(function(h){return E[3].some(function(u){return h.type==
u.type&&u.value>=h.C})||"EXIT"==h.type});k=m.filter(function(h){return Math.abs(m.indexOf(h)-L)<5+Math.max(0,4-L)});k.forEach(function(h){q.fillStyle=L==m.indexOf(h)?"#FFFFFF":"#AAAAAA";X("EXIT"!=h.type?h.C+" "+h.type+" : \u20bf"+h.m*h.C:h.type,A/2,a+40+25*k.indexOf(h))})}W&&(q.fillStyle="#000000AA",hb(.05,.5,.2),q.fillStyle="#FFFFFF",Ra([{x:.5*A,y:.07*B},{x:.5*A,y:.53*B}],0,0,!1),Ra([{x:.5*A,y:.46*B},{x:.78*A,y:.46*B}],0,0,!1),q.font="30px Tahoma",X("Buy Mode",.36*A,a),q.font="20px Tahoma",k=E[8].filter(function(h){return Math.abs(E[8].indexOf(h)-
M)<5+Math.max(0,4-M)}),k.forEach(function(h){q.fillStyle=M==E[8].indexOf(h)?"#FFFFFF":"#AAAAAA";q.textAlign="center";X(h.item,.36*A,a+20+40+25*k.indexOf(h));M==E[8].indexOf(h)&&(X("\u20bf"+Eb.toLocaleString("en-US",{maximumFractionDigits:0}),.64*A,.495*B),q.textAlign="start",h.o.forEach(function(u){return X(u,.51*A,a+20+40+25*h.o.indexOf(u))}))}),Eb=n(E[8][M].h,Eb,Y/80));q.textAlign="center";q.textBaseline="middle";q.fillStyle="#FFFFFF";q.font="20px Tahoma";X("JMC",.05*A,.14*B);Va(.05*A,.07*B,50);
q.font="25px Tahoma";X("\u20bf"+zb.toLocaleString("en-US",{maximumFractionDigits:0}),.05*A,.18*B);zb=n(E[5],zb,Y/100);q.font="20px Tahoma";E[19]?(X("Endless",.05*A,.22*B),X("Mode",.05*A,25+.22*B)):(X("Daily Quota:",.05*A,.22*B),q.font="25px Tahoma",q.fillStyle=E[5]>=Ab[E[2]]?"#00FF00":300<E[1]&&0==Math.trunc(E[1])%2?"#FF0000":"#FFFFFF",X("\u20bf"+Ab[E[2]].toLocaleString("en-US",{maximumFractionDigits:0}),.05*A,.26*B));q.fillStyle="#FFFFFF";q.font="15px Tahoma";Wa(.02*A,.45*B,100,E[6]/E[9]);q.fillStyle=
Hb?"#FF0000":"#FFFFFF";X("Battery",.07*A,.32*B);X("Status:",.07*A,.34*B);d=E[6]/E[9];q.font="12px Tahoma";X(Ib,.07*A,.36*B);q.fillStyle="#FFFFFF";0<E[0].find(function(h){return h.l}).s&&(q.font="50px Tahoma",X("\u2622",.07*A,B*(.45-.032)));Ib=5>=E[6]?"Deadly":10>=E[6]?"Critical":15>=E[6]?"Very Low":.6<d?"Nominal":.4<d?"Satisfactory":.3<d&&15<E[6]?"Low":Ib;Gb=Qa.has(Ib);Fb+=Gb?Y/Qa.get(Ib):0}
function Ub(a){var b=.85*A,d=.45*B;q.lineWidth=2;q.textAlign="start";q.textBaseline="alphabetic";q.font="15px Arial";switch(a.a.type){case "SOLAR":var k=E[13]*Math.max(.5,Math.sin(E[1]*Math.PI/180));a.l&&(E[6]=Math.min(E[9],E[6]+Y/1E3*k));var m=ib(a).filter(function(h){return null!=h.a.b&&h.a.b!=h.a.H&&(!a.l||a.l!=E[6]<E[9])});m.forEach(function(h){return h.a.b=Math.min(h.a.H,h.a.b+k/m.length*(Y/1E3))});a.l&&!U&&(X("\u26a1",b,d+20),Wa(b,d+40+.08*B,.1*B,k/E[13]));break;case "CONSTRUCTOR":a.a.v+=a.a.F?
Y/1E4*E[14]:0;1<=a.a.v&&(a.a.F=!1,a.a.K=!0);E[17]&&a.a.K&&(db(a.a.B.product),a.a.B=null,a.a.v=0,a.a.K=!1);a.l&&!U&&(X("Recipe: "+(void 0!=a.a.B?a.a.B.product:"None"),b,d),X("\u26a1",b,d+20),q.fillStyle=a.a.K?"#00FF00":q.fillStyle,X("%",b+12+.025*B,d+20),Wa(b,d+40+.08*B,.1*B,a.a.b/a.a.H),Wa(10+b+.025*B,d+40+.08*B,.1*B,a.a.v));break;case "MINER":!a.a.F&&1<=a.a.b&&"NONE"!=a.f.type&&a.a.u<a.a.P&&(--a.a.b,a.a.F=!0);a.a.v+=a.a.F?Y/6E3*E[15]:0;1<=a.a.v&&(a.a.u+=1,a.a.F=!1,a.a.v=0,a.counter+=1);10==a.counter&&
($a(a),a.counter=0);a.a.u-=E[16]?eb(a.a.O,a.a.u):0;a.l&&!U&&(X("\u26a1",b,d+20),X("%",12+b+.025*B,d+20),X("\u2a06",24+b+.05*B,d+20),Wa(b,d+40+.08*B,.1*B,Math.min(1,a.a.b/a.a.H)),Wa(10+b+.025*B,d+40+.08*B,.1*B,a.a.v),Wa(20+b+.05*B,d+40+.08*B,.1*B,a.a.u/a.a.P));break;case "RTG":a.l&&(E[6]=Math.min(E[9],E[6]+Y/1E3*E[18])),m=ib(a).filter(function(h){return null!=h.a.b&&h.a.b!=h.a.H&&(!a.l||a.l!=E[6]<E[9])}),m.forEach(function(h){return h.a.b=Math.min(h.a.H,h.a.b+E[18]/m.length*(Y/1E3))})}}
document.addEventListener("keydown",function(a){Zb(a.keyCode,!0)});document.addEventListener("keyup",function(a){Zb(a.keyCode,!1)});function Zb(a,b){87==a&&(J.j=b);83==a&&(J.i=b);68==a&&(J.right=b);65==a&&(J.left=b);69==a&&(J.c=b);66==a&&(J.G=b);82==a&&(J.remove=b);27==a&&(J.D=b);16==a&&(J.J=b);81==a&&(J.I=b)}
setInterval(function(){Y=U?0:(new Date).getTime()-Ob;q.fillStyle="#000000";q.fillRect(0,0,Ea.clientWidth,Ea.clientHeight);if(qb)Pb();else if(Nb){Sa(0);q.strokeStyle="#FFFFFF";q.fillStyle="#000000AA";hb(.02,.9,.1);var a=.13*A,b=.11*B;q.font="22px Arial";q.fillStyle="#FFFFFF";q.strokeStyle="#000000";q.textAlign="start";q.textBaseline="alphabetic";X("Welcome, valued Roboemployee, to the JMC\u2122 Autonomous Mining Initative.",a,b);X("Over the course of the next 7 days your mining effectiveness will be assesed by",
a,50+b);X("your ability to meet daily monetary quotas.",a,75+b);X("Quotas can be met by mining and selling resources to the TELEDEPOT.",a,100+b);X("Failure to complete these quotas will result in immediate nuclear vapourisation.",a,150+b);X("JMC\u2122 Operations & Managment regrets to inform you that terrain maps",a,200+b);X("for JMC\u2122 Planet 404 have been lost, you are required to use RADARs and uncover more terrain.",a,225+b);X("Use the CONSTRUCTOR to create buildings, such as RADARs, from resources and energy.",
a,300+b);X("An RTG has been made available to provide energy and charge your JMC\u2122 Craft.",a,375+b);q.textAlign="center";X("WASD to move, left shift to sprint, E to interact/mine.",A/2,450+b);X("B to build, R to remove, Q to access upgrade shop.",A/2,475+b);X("Good Luck.",A/2,.82*B);X("Press E to start",A/2,25+.85*B);1==J.c&&0==I.c&&(Nb=!1,Mb=!0)}else Mb?Sb():null;I=Object.assign({},J);Ob=(new Date).getTime()},50);