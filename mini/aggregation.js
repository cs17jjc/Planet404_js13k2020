//zzfx
zzfx=(...t)=>zzfxP(zzfxG(...t))
zzfxP=(...t)=>{let e=zzfxX.createBufferSource(),f=zzfxX.createBuffer(t.length,t[0].length,zzfxR);t.map((d,i)=>f.getChannelData(i).set(d)),e.buffer=f,e.connect(zzfxX.destination);return e}
zzfxG=(a=1,t=.05,h=220,M=0,n=0,s=.1,i=0,r=1,o=0,z=0,e=0,f=0,m=0,x=0,b=0,d=0,u=0,c=1,G=0,I=zzfxR,P=99+M*I,V=n*I,g=s*I,j=G*I,k=u*I,l=2*Math.PI,p=(a=>0<a?1:-1),q=P+j+V+g+k,v=(o*=500*l/I**2),w=(h*=(1+2*t*Math.random()-t)*l/I),y=p(b)*l/4,A=0,B=0,C=0,D=0,E=0,F=0,H=1,J=[])=>{for(;C<q;J[C++]=F)++E>100*d&&(E=0,F=A*h*Math.sin(B*b*l/I-y),F=p(F=i?1<i?2<i?3<i?Math.sin((F%l)**3):Math.max(Math.min(Math.tan(F),1),-1):1-(2*F/l%2+2)%2:1-4*Math.abs(Math.round(F/l)-F/l):Math.sin(F))*Math.abs(F)**r*a*zzfxV*(C<P?C/P:C<P+j?1-(C-P)/j*(1-c):C<P+j+V?c:C<q-k?(q-C-k)/g*c:0),F=k?F/2+(k>C?0:(C<q-k?1:(C-q)/k)*J[C-k|0]/2):F),A+=1-x+1e9*(Math.sin(C)+1)%2*x,B+=1-x+1e9*(Math.sin(C)**2+1)%2*x,h+=o+=500*z*l/I**3,H&&++H>f*I&&(h+=e*l/I,w+=e*l/I,H=0),m&&++D>m*I&&(h=w,o=v,D=1,H=H||1);return J};
zzfxV=0.5
zzfxR=44100
zzfxX=new(top.AudioContext||webkitAudioContext);
//zzfxM
zzfxM=(n,f,t,e=125)=>{let l,o,z,r,g,h,x,a,u,c,d,i,m,p,G,M=0,R=[],b=[],j=[],k=0,q=0,s=1,v={},w=zzfxR/e*60>>2;for(;s;k++)R=[s=a=d=m=0],t.map((e,d)=>{for(x=f[e][k]||[0,0,0],s|=!!f[e][k],G=m+(f[e][0].length-2-!a)*w,p=d==t.length-1,o=2,r=m;o<x.length+p;a=++o){for(g=x[o],u=o==x.length+p-1&&p||c!=(x[0]||0)|g|0,z=0;z<w&&a;z++>w-99&&u?i+=(i<1)/99:0)h=(1-i)*R[M++]/2||0,b[r]=(b[r]||0)-h*q+h,j[r]=(j[r++]||0)+h*q+h;g&&(i=g%1,q=x[1]||0,(g|=0)&&(R=v[[c=x[M=0]||0,g]]=v[[c,g]]||(l=[...n[c]],l[2]*=2**((g-12)/12),g>0?zzfxG(...l):[])))}m=G});return[b,j]}
//Music

var kickDrum1 = [
    0,
    0,

    15,
    0,
    0,
    0,

    0,
    0,
    0,
    0,

    0,
    0,
    0,
    0,

    0,
    0,
    0,
    0
  ];
var kickDrum2 = [
    0,
    0,

    15,
    0,
    0,
    0,

    0,
    0,
    0,
    0,

    0,
    0,
    0,
    0,

    15,
    0,
    0,
    0
  ];
var snare = [
    1,
    0,

    0,
    0,
    0,
    0,

    0,
    0,
    0,
    0,

    15,
    0,
    0,
    0,

    0,
    0,
    0,
    0
  ];
var hihat = [
    2,
    0,

    0,
    0,
    15,
    0,

    0,
    0,
    15,
    0,

    0,
    0,
    0,
    0,

    0,
    0,
    15,
    0
  ];
var Ech1 = [
    3,
    -0.1,

    18,
    0,
    0,
    0,

    18.1,
    0,
    0,
    0,

    18.5,
    0,
    0,
    0,

    18.7,
    0,
    0,
    0
  ];
var Ech2 = [
    3,
    -0.1,

    22,
    0,
    0,
    0,

    22.1,
    0,
    0,
    0,

    22.5,
    0,
    0,
    0,

    22.7,
    0,
    0,
    0
  ];
var Ech3 = [
    3,
    -0.1,

    24,
    0,
    0,
    0,

    24.1,
    0,
    0,
    0,

    24.5,
    0,
    0,
    0,

    24.7,
    0,
    0,
    0
  ];
var Ech4 = [
    3,
    -0.1,

    30,
    0,
    0,
    0,

    30.1,
    0,
    0,
    0,

    30.5,
    0,
    0,
    0,

    30.7,
    0,
    0,
    0
  ];
var mainLoop = [8,9,10,11,8,9,10,11];
var song = [
[
[,0,86,,,,,.7,,,,.5,,6.7,1,.05],             //Kick
[.7,0,270,,,.12,3,1.65,-2,,,,,4.5,,.02],    //Snare
[.4,0,2200,,,.04,3,2,,,800,.02,,4.8,,.01,.1],  //Hi-hat
[,0,130.81 ,,,1] //Echo Synth
],
[[Ech1],[Ech2],[Ech3],[Ech4],[Ech1,kickDrum1,snare],[Ech2,kickDrum1,snare],[Ech3,kickDrum1,snare],[Ech4,kickDrum2,snare],[Ech1,kickDrum1,snare,hihat],[Ech2,kickDrum1,snare,hihat],[Ech3,kickDrum1,snare,hihat],[Ech4,kickDrum2,snare,hihat]],
[0,1,2,3,0,1,2,3,4,5,6,7,4,5,6,7].concat(mainLoop).concat(mainLoop).concat(mainLoop).concat(mainLoop),120,{title: "",author: ""}];

//Perlin
(function(global){
    var module = global.noise = {};
    function Grad(x, y, z) {
      this.x = x; this.y = y; this.z = z;
    }
  
    Grad.prototype.dot2 = function(x, y) {
      return this.x*x + this.y*y;
    };
    Grad.prototype.dot3 = function(x, y, z) {
      return this.x*x + this.y*y + this.z*z;
    };
    var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
                 new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
                 new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];
    var p = [151,160,137,91,90,15,
    131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
    190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
    88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
    77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
    102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
    135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
    5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
    223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
    129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
    251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
    49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
    138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
    var perm = new Array(512);
    var gradP = new Array(512);
    module.seed = function(seed) {
      if(seed > 0 && seed < 1) {
        seed *= 65536;
      }
      seed = Math.floor(seed);
      if(seed < 256) {
        seed |= seed << 8;
      }
      for(var i = 0; i < 256; i++) {
        var v;
        if (i & 1) {
          v = p[i] ^ (seed & 255);
        } else {
          v = p[i] ^ ((seed>>8) & 255);
        }
  
        perm[i] = perm[i + 256] = v;
        gradP[i] = gradP[i + 256] = grad3[v % 12];
      }
    };
    module.seed(0);
    function fade(t) {
      return t*t*t*(t*(t*6-15)+10);
    }
    function lerp(a, b, t) {
      return (1-t)*a + t*b;
    }
    module.perlin2 = function(x, y) {
      var X = Math.floor(x), Y = Math.floor(y);
      x = x - X; y = y - Y;
      X = X & 255; Y = Y & 255;
      var n00 = gradP[X+perm[Y]].dot2(x, y);
      var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
      var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
      var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);
      var u = fade(x);
      return lerp(
          lerp(n00, n10, u),
          lerp(n01, n11, u),
         fade(y));
    };
  })(this);

//Classes
class Tile {
    constructor(x,y,biome){
        this.x = x;
        this.y = y;
        this.biome = biome;
        this.hasPlayer = false;
        this.resource = {type:"NONE"};
        this.building = {type:"NONE"};
        this.highlighted = false;
        this.isVisible = false;
        this.screenPos = {x:0,y:0};
        this.hazard = 0;
    }
}


class Colour{
    constructor(r,g,b,a){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    toHex(){
        return rgbToHex(this.r,this.g,this.b,this.a);
    }
    darkend(factor){
        return new Colour(Math.min(255, Math.trunc(this.r * factor)),Math.min(255, Math.trunc(this.g * factor)),Math.min(255, Math.trunc(this.b * factor)),this.a);
    }
}

//Game code

var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

var tiles = [];
var messages = [];


//Utils
let tileRadius = 60;
let perspRatio = 0.4;
let offsets = [{x:1,y:0},{x:0.5,y:0.8660254037844386},{x:-0.5,y:0.8660254037844387},{x:-1,y:0},{x:-0.5,y:-0.8660254037844387},{x:0.5,y:-0.8660254037844387}];
let tileViewRadius = 11;
let tileStepHeight = 5;
var roverImgScale = 1;


function drawHexTile(tile){

    var scrPos = tile.screenPos;
    drawHexagon(scrPos);

    if(tile.isVisible && tile.resource.type != "NONE"){
        var resourceColour = null;
        switch(tile.resource.type){
            case "IRON":
                resourceColour = new Colour(165,42,42,255);
                break;
            case "COPPER":
                resourceColour = new Colour(184,115,51,255);
                break;
            case "CARBON":
                resourceColour = new Colour(18,18,18,255);
                break;
            case "LITHIUM":
                resourceColour = new Colour(169,169,169,255);
                break;
            case "SILICON":
                resourceColour = new Colour(0,153,204,255);
                break;
            case "ROCK":
                resourceColour = new Colour(100,100,100,255);
                break;
            case "PLUTONIUM":
                resourceColour = new Colour(0,255,0,255);
                break;
        }
        ctx.lineWidth = 3;
        ctx.fillStyle = resourceColour.toHex();
        ctx.strokeStyle = resourceColour.darkend(0.4).toHex();
        tile.resource.lines.forEach(l => {
            ctx.beginPath();
            ctx.moveTo(l[0].x + scrPos.x,l[0].y + scrPos.y);
            for(var ll = 1; ll < l.length;ll++){
                ctx.lineTo(l[ll].x + scrPos.x,l[ll].y + scrPos.y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        });
    }
}

function renderMap(drawHeight,playerPosOffset){
    var tileWithPlayer = tiles.find(t => t.hasPlayer);
    var visableTiles = tiles.filter(t => Math.abs(t.x - tileWithPlayer.x) <= tileViewRadius).sort((a,b) => a.height - b.height).sort((a,b) => a.y - b.y).sort((a,b) => a.isVisible - b.isVisible);
    visableTiles.forEach(t => {
        t.screenPos.x = t.x * tileRadius * 1.5 + canvas.width/2 - tileWithPlayer.x * tileRadius * 1.5;
        t.screenPos.y = t.y * tileRadius * 2 * 0.8660254037844387 * perspRatio + drawHeight;
    
        if(t.x % 2 != 0){
            t.screenPos.y += 0.8660254037844387 * tileRadius * perspRatio;
        }

        if(t.isVisible){
            t.screenPos.y -= t.height;
            var tileColour = new Colour(Math.max(0,t.colour.r * (1 - (t.hazard/10))),Math.min(255,t.colour.g * (1 + (t.hazard/10))),Math.max(0,t.colour.b * (1 - (t.hazard/10))),255);
            ctx.strokeStyle = t.hazard == 0 ? tileColour.darkend(0.2).toHex() : tileColour.darkend(1.5).toHex();
            ctx.fillStyle = tileColour.toHex();
            if(interactTiles.includes(t)){
                if(buildMode){
                    ctx.strokeStyle = "#FFFF00";
                } else if(removeMode){
                    ctx.strokeStyle = "#FF0000";
                }
                if(interactTiles.indexOf(t) == selectedTile){
                    ctx.strokeStyle = "#00FF00";
                }
            }
            ctx.lineWidth = 3;
            drawHexTile(t);
            switch(t.building.type){
                case "RADAR":
                    ctx.drawImage(towerImg,Math.trunc(t.screenPos.x - towerImg.width/2),Math.trunc(t.screenPos.y - towerImg.height*0.9));
                    break;
                case "CONSTRUCTOR":
                    ctx.drawImage(constructorImg,Math.trunc(t.screenPos.x - constructorImg.width/2),Math.trunc(t.screenPos.y - constructorImg.height*0.6));
                    break;
                case "SOLAR":
                    ctx.drawImage(solarImg,Math.trunc(t.screenPos.x - solarImg.width/2),Math.trunc(t.screenPos.y - solarImg.height*0.5));
                    break;
                case "MINER":
                    ctx.drawImage(minerImg,Math.trunc(t.screenPos.x - minerImg.width/2),Math.trunc(t.screenPos.y - minerImg.height*0.8));
                    break;
                case "BATTERY":
                    ctx.drawImage(batteryImg,Math.trunc(t.screenPos.x - batteryImg.width/2),Math.trunc(t.screenPos.y - batteryImg.height*0.6));
                    break;
                case "RTG":
                    ctx.drawImage(rtgImg,Math.trunc(t.screenPos.x - rtgImg.width/2),Math.trunc(t.screenPos.y - rtgImg.height*0.6));
                    break;
                case "TELEDEPOT":
                    ctx.drawImage(teledepotImg,Math.trunc(t.screenPos.x - teledepotImg.width/2),Math.trunc(t.screenPos.y - teledepotImg.height*0.6));
                    break;
                case "ROBOSHOP":
                    ctx.drawImage(roboshopImg,Math.trunc(t.screenPos.x - roboshopImg.width/2),Math.trunc(t.screenPos.y - roboshopImg.height*0.6));
                    break;
                case "GENERATOR":
                    ctx.drawImage(generatorImg,Math.trunc(t.screenPos.x - generatorImg.width/2),Math.trunc(t.screenPos.y - generatorImg.height*0.6));
                    break;
            }
        } else {
            ctx.strokeStyle = "#000000";
            ctx.fillStyle = "#AAAAAA";
            ctx.lineWidth = 3;
            drawHexTile(t);
            ctx.fillStyle = "#000000";
            var fontSize = Math.trunc(tileRadius*perspRatio);
            ctx.font = fontSize + "px Arial";
            ctx.textAlign = "center"; 
            ctx.textBaseline = "middle"; 
            ctx.fillText("404",t.screenPos.x ,t.screenPos.y);
        }
    });
    var playerTile = visableTiles.find(t => t.hasPlayer);
    var playerTileCoords = playerTile.screenPos;
    if(!playerDeadState){
        ctx.drawImage(roverImg,(playerTileCoords.x - Math.trunc(roverImg.width*roverImgScale/2)) + Math.trunc(playerPosOffset.x),(Math.trunc(playerTileCoords.y - (roverImg.height*roverImgScale/2) - 10 + Math.sin(180 * time * (Math.PI/180)) * 4)) + Math.trunc(playerPosOffset.y),Math.trunc(roverImg.width*roverImgScale),Math.trunc(roverImg.height*roverImgScale));
    } else {
        ctx.drawImage(roverImg,(playerTileCoords.x - Math.trunc(roverImg.width*roverImgScale/2)) + Math.trunc(playerPosOffset.x),(Math.trunc(playerTileCoords.y - (roverImg.height*roverImgScale/2) - 10)) + Math.trunc(playerPosOffset.y),Math.trunc(roverImg.width*roverImgScale),Math.trunc(roverImg.height*roverImgScale));
    }
    
}
function updateRadarVisableTiles(){
    var radarTiles = tiles.filter(t => t.building.type == "RADAR");
    tiles.forEach(t => {
        if(radarTiles.some(r => Math.abs(r.x - t.x) <= radarRange)){
            t.isVisible = true;
        } else {
            t.isVisible = false;
        }
    });
}
function drawLogo(x,y,size){
    var topY = -size/2;
    var bottomY = size/2;
    var leftX = -size/2;
    var rightX = size/2;
    ctx.save();
    ctx.translate(x,y);
    ctx.strokeStyle = "#A2A2A2";
    ctx.beginPath();
    ctx.moveTo(0, topY);
    ctx.lineTo(leftX,bottomY);
    ctx.lineTo(rightX,bottomY);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(0, topY, size/4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#FFF500";
    ctx.beginPath();
    ctx.arc(leftX,bottomY, size/4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#0045FF";
    ctx.beginPath();
    ctx.arc(rightX,bottomY, size/4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
}
function drawBattery(x,y,size,percentage){
    var width = size * 0.25;
    ctx.save();
    ctx.translate(x,y);
    ctx.fillStyle = new Colour(255 - (255 * percentage),255 * percentage,0,255).toHex();
    ctx.fillRect(0,-size * percentage,width,size * percentage);
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(0,-size);
    ctx.lineTo(width,-size);
    ctx.lineTo(width,0);
    ctx.lineTo(0,0);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function updatePlayerPos(deltaX,deltaY){
    interactTimer = 0;
    moving = true;
    var playerTile = tiles.find(t => t.hasPlayer);
        var newTile = tiles.find(t => t.x == playerTile.x + deltaX && t.y == playerTile.y + deltaY);
        if(newTile != null){
            if(newTile.isVisible){
                if(Math.abs(newTile.height - playerTile.height) <= maxStepHeight * tileStepHeight){
                    playerTile.hasPlayer = false;
                    newTile.hasPlayer = true;
                    playerPos = {x:newTile.x,y:newTile.y};
                    playerPosOffset = {x:playerTile.screenPos.x - newTile.screenPos.x,y:playerTile.screenPos.y - newTile.screenPos.y};
                    zzfx(...[soundFxVolume,.1,440,,,.07,,,,,50,.07]).start();
                } else {
                    messages.push({text:"Incline too steep",time:0});
                }
            } else {
                messages.push({text:"Cannot enter unfound tile",time:0});
            }
        }
}
function lerp(value1, value2, amount) {
    amount = Math.min(1,Math.max(0,amount));
    return value1 + (value2 - value1) * amount;
}
function mineTile(tile){
    if(tile.resource.type != "NONE"){
        var type = tile.resource.type;
        if(tile.resource.value == 1){
            tile.resource = {type:"NONE",value:0};
        } 
        else {
            tile.resource.value -= 1;
            tile.resource.lines = generateResourcePoints(tile.resource.value,tile.resource.type);
        }
        return {type:type,value:1};
    } else {
        return tile.resource;
    }
}
function placeBuilding(tile,building){
    if(tile.building.type == "NONE"){
        tile.building.type = building.type;
        switch(building.type){
            case "RADAR":
                updateRadarVisableTiles();
                break;
            case "CONSTRUCTOR":
                tile.building.energy = 0;
                tile.building.maxEnergy = 20;
                tile.building.crafting = false;
                tile.building.craftTimer = 0;
                tile.building.storedProduct = false;
                break;
            case "MINER":
                tile.building.storedResource = 0;
                tile.building.storedType = tile.resource.type;
                tile.building.maxStored = 50;
                tile.building.energy = 0;
                tile.building.maxEnergy = 10;
                tile.building.mining = false;
                tile.building.mineTimer = 0;
                break;
            case "BATTERY":
                tile.building.energy = 0;
                tile.building.maxEnergy = 20;
                tile.building.dischargeTimer = 0;
                tile.building.discharging = false;
                break;
            case "GENERATOR":
                tile.building.coal = 0;
                tile.building.maxCoal = 25;
                tile.building.generatingTimer = 0;
                tile.building.generating = false;
                break;
        }
        building.value -= 1;
        zzfx(...[soundFxVolume,,191,,,.07,1,1.09,-5.4,,,,,.4,-0.4,.3,,.7]).start();
    } else {
        messages.push({text:"Cannot place building",time:0});
    }
}
function removeBuilding(tile){
    if(tile.building.type != "NONE"){
        switch(tile.building.type){
            case "RADAR":
                var playerTile = tiles.find(t => t.hasPlayer);
                var tilesInPlayerRange = tiles.filter(t => Math.abs(t.x - playerTile.x) <= radarRange);
                var radarsInPlayerRange = tilesInPlayerRange.filter(t => t.building.type == "RADAR" && t != tile);
                if(radarsInPlayerRange.length >= 1){
                    addToPlayerBuildings(tile.building.type,1);
                    tile.building = {type:"NONE"};
                    updateRadarVisableTiles();
                    zzfx(...[soundFxVolume,,400,,,.07,1,1.09,-5.4,,,,,.4,-0.4,.3,,.7]).start();
                } else {
                    messages.push({text:"No other radar in range",time:0});
                }
                break;
            case "CONSTRUCTOR":
                if(tile.building.storedProduct == true){
                    addToPlayerBuildings(tile.building.recipe.product,1);
                }
                addToPlayerBuildings(tile.building.type,1);
                tile.building = {type:"NONE"};
                zzfx(...[soundFxVolume,,400,,,.07,1,1.09,-5.4,,,,,.4,-0.4,.3,,.7]).start();
                break;
            case "GENERATOR":
                addToPlayerResources("CARBON",tile.building.coal);
                addToPlayerBuildings(tile.building.type,1);
                tile.building = {type:"NONE"};
                zzfx(...[soundFxVolume,,400,,,.07,1,1.09,-5.4,,,,,.4,-0.4,.3,,.7]).start();
                break;
            default:
                addToPlayerBuildings(tile.building.type,1);
                tile.building = {type:"NONE"};
                zzfx(...[soundFxVolume,,400,,,.07,1,1.09,-5.4,,,,,.4,-0.4,.3,,.7]).start();
                break;
        }
    } else {
        messages.push({text:"Tile has no building",time:0});
    }
}

function addToPlayerResources(type,ammount){
    var addedValue = Math.min(maxStorage,ammount);
    var playerRes = playerResources.find(r => r.type == type);
    if(playerRes != null){
        if(playerRes.value + addedValue > maxStorage){
            addedValue = maxStorage - playerRes.value;
        }
        playerRes.value += addedValue;
    } else {
        playerResources.push({type:type,value:addedValue});
    }
    return addedValue;
}
function addToPlayerBuildings(type,ammount){
    var playerBuild = playerBuildings.find(r => r.type == type);
    if(playerBuild != null){
        playerBuild.value += ammount;
    } else {
        playerBuildings.push({type:type,value:ammount});
    }
}
function addToBuildingStorage(buildingStorage,type,ammount){
    var buildRes = buildingStorage.find(r => r.type == type);
    if(buildRes != null){
        buildRes.value += ammount;
    } else {
        buildingStorage.push({type:type,value:ammount});
    }
}

function drawHexagon(pos){
    var screenPoints = []
    for(var offset = 0; offset < offsets.length;offset++){
        screenPoints.unshift({x:pos.x + tileRadius * offsets[offset].x,y:pos.y + tileRadius * offsets[offset].y * perspRatio});
    }

    ctx.beginPath();
    ctx.moveTo(screenPoints[0].x,screenPoints[0].y);
    for(var points = 1; points < screenPoints.length;points++){
            ctx.lineTo(screenPoints[points].x,screenPoints[points].y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawHexHeight(scrX,scrY,height){
    var screenPoints = []
    for(var offset = 0; offset < offsets.length-2;offset++){
        screenPoints.unshift({x:scrX + tileRadius * offsets[offset].x,y:scrY + tileRadius * offsets[offset].y * perspRatio});
    }
    for(var offset = offsets.length-3; offset >= 0;offset--){
        screenPoints.unshift({x:scrX + tileRadius * offsets[offset].x,y:(scrY + height) + tileRadius * offsets[offset].y * perspRatio});
    }

    ctx.beginPath();
    ctx.moveTo(screenPoints[0].x,screenPoints[0].y);
    for(var points = 1; points < screenPoints.length;points++){
        ctx.lineTo(screenPoints[points].x,screenPoints[points].y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function componentToHex(c) {
    var hex = Math.trunc(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b, a) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a);
  }

  function generateHudOverlay(rightHeight){
    var leftHeight = 0.29;
    var leftHeight2 = 0.48;
    var points = [];

    points.unshift({x:0,y:canvas.height * leftHeight});
    points.unshift({x:canvas.width * 0.09,y:canvas.height * leftHeight});
    points.unshift({x:canvas.width * 0.1,y:canvas.height * (leftHeight - 0.02)});
    points.unshift({x:canvas.width * 0.1,y:0});
    points.unshift({x:0,y:0});

    points.unshift({x:0,y:canvas.height * leftHeight2});
    points.unshift({x:canvas.width * 0.09,y:canvas.height * leftHeight2});
    points.unshift({x:canvas.width * 0.1,y:canvas.height * (leftHeight2 - 0.02)});
    points.unshift({x:canvas.width * 0.1,y:canvas.height * leftHeight});
    points.unshift({x:0,y:canvas.height * leftHeight});
    points.unshift({x:0,y:0});

    var topLength = 0.08;
    points.unshift({x:canvas.width * (0.5 - topLength - 0.03),y:0});
    points.unshift({x:canvas.width * (0.5 - topLength),y:canvas.height * 0.04});
    points.unshift({x:canvas.width * (0.5 + topLength),y:canvas.height * 0.04});
    points.unshift({x:canvas.width * (0.5 + topLength + 0.03),y:0});

    points.unshift({x:canvas.width * 0.83,y:0});
    points.unshift({x:canvas.width * 0.83,y:rightHeight - canvas.height * 0.02});
    points.unshift({x:canvas.width * 0.85,y:rightHeight});
    points.unshift({x:canvas.width,y:rightHeight});
    points.unshift({x:canvas.width,y:0});
    points.unshift({x:0,y:0});
    return points;
  }

  function generateUIOverlay(height,length,width){
      var cornerLength = 0.04;
      var rightX = 1 - width;
      ctx.beginPath();
      ctx.moveTo(canvas.width * (width + cornerLength),canvas.height * height);
      ctx.lineTo(canvas.width * (rightX - cornerLength),canvas.height * height);
      ctx.lineTo(canvas.width * (rightX),canvas.height * (height + cornerLength));
      ctx.lineTo(canvas.width * (rightX),canvas.height * ((height + length) - cornerLength));
      ctx.lineTo(canvas.width * (rightX - cornerLength),canvas.height * (height + length));
      ctx.lineTo(canvas.width * (width + cornerLength),canvas.height * (height + length));
      ctx.lineTo(canvas.width * (width),canvas.height * (height + length - cornerLength));
      ctx.lineTo(canvas.width * (width),canvas.height * (height + cornerLength));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      var sizeOffset = 0.02;
      var height2 = height + sizeOffset;
      var length2 = length - sizeOffset * 2;
      ctx.beginPath();
      ctx.moveTo(canvas.width * (width + sizeOffset + cornerLength),canvas.height * height2);
      ctx.lineTo(canvas.width * (rightX - sizeOffset - cornerLength),canvas.height * height2);
      ctx.lineTo(canvas.width * (rightX - sizeOffset),canvas.height * (height2 + cornerLength));
      ctx.lineTo(canvas.width * (rightX - sizeOffset),canvas.height * ((height2 + length2) - cornerLength));
      ctx.lineTo(canvas.width * (rightX - sizeOffset - cornerLength),canvas.height * (height2 + length2));
      ctx.lineTo(canvas.width * (width + sizeOffset + cornerLength),canvas.height * (height2 + length2));
      ctx.lineTo(canvas.width * (width + sizeOffset),canvas.height * (height2 + length2 - cornerLength));
      ctx.lineTo(canvas.width * (width + sizeOffset),canvas.height * (height2 + cornerLength));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
  }

  function getSurroundingTiles(tile){
      return tiles.filter(t => {
        var yDelta = t.y - tile.y;
        var xDelta = t.x - tile.x;
        if(Math.abs(yDelta) == 1 && xDelta == 0){
            return true;
        }
        if(yDelta == 0 && Math.abs(xDelta) == 1){
            return true;
        }
        if(tile.x % 2 == 0) {
            if(yDelta == -1 && Math.abs(xDelta) == 1){
                return true;
            }
        } else {
            if(yDelta == 1 && Math.abs(xDelta) == 1){
                return true;
            }
        }
        return false;
      });
  }

  function generateResourcePoints(value,type){
    var points = 0;
    switch(type){
        case "ROCK":
            points = 12;
            break;
        case "SILICON":
            points = 5;
            break;
        case "LITHIUM":
            points = 9;
            break;
        case "CARBON":
            points = 15;
            break;
        default:
            points = 7;
            break;
    }
    var number = 1;
    var size = value/20;
    var lines = [];
    for(var n = 0; n < number;n++){
        var xOffset = (Math.random() - 0.5) * (tileRadius*0.2) * size;
        var yOffset = (Math.random() - 0.5) * (tileRadius*0.2) * size;
        lines.unshift(generateBlob(points,size,yOffset,xOffset));
    }
      return lines;
  }

  function generateBlob(points,size,xOffset,yOffset){
    var curLines = []
    var angles = [];
    for(var i = 0; i < points;i++){
        angles.unshift(i * ((Math.PI*2)/points));
    }
    angles.forEach(a => {
        var x = xOffset + (Math.cos(a) * size * tileRadius + (Math.random() * 15 * size));
        var y = yOffset + (Math.sin(a) * size * (tileRadius*perspRatio) + (Math.random() * 15 * size * perspRatio));
        x = Math.min(tileRadius * 0.6 - 5,x);
        x = Math.max(-tileRadius * 0.6 + 5,x);
        y = Math.min(tileRadius * perspRatio - 5,y);
        y = Math.max(-tileRadius * perspRatio + 5,y);
        curLines.unshift({x:x,y:y});
    });
    return curLines;
  }


  function generateMap(width,biomeSeq,colours,startX){

    tiles = [];
    for(var y = 0; y < 5;y++){
        for(var x = 0; x < width;x++){
                tiles.push(new Tile(x,y,biomeSeq[x]));
        }
    }

    tiles.forEach(t => {

        var heightNumber = 0;
        switch(t.biome){
            case 0:
                //Lowlands
                heightNumber = Math.abs((noise.perlin2(t.x/10, t.y/10)+1)/2 * 3);
                break;
            case 1:
                //Flatlands
                heightNumber = Math.abs((noise.perlin2(t.x/10, t.y/10)+1)/2 * 4);
                break;
            case 2:
                //Bumpy
                heightNumber = Math.abs((noise.perlin2(t.x/10, t.y/10)+1)/2 * 6);
                break;
            case 3:
                //Moutains
                heightNumber = Math.abs((noise.perlin2(t.x/10, t.y/10)+1)/2 * 8);
                break;
            case 4:
                //Peak
                heightNumber = Math.abs((noise.perlin2(t.x/10, t.y/10)+1)/2 * 10);
                break;
        }
        heightNumber = Math.max(0,Math.trunc(heightNumber));
        t.height = tileStepHeight * heightNumber;
        t.colour = colours.find(c => c.levels.includes(heightNumber)).colour;

        if(Math.abs(startX - t.x) > (width * 0.005) && Math.random() * 100 > 85 + Math.min(15,Math.abs(startX - t.x)/15)){
            addResourceToTile(t,"IRON",Math.random() * 15,10,0.6);
        } else if(Math.abs(startX - t.x) > (width * 0.05) && Math.random() * 100 > 90) {
           addResourceToTile(t,"COPPER",Math.random() * 15,10,0.5);
        } else if(Math.abs(startX - t.x) > (width * 0.08) && Math.random() * 100 > 92) {
            addResourceToTile(t,"CARBON",Math.random() * 15,10,0.6);
        } else if(Math.abs(startX - t.x) > (width * 0.12) && Math.random() * 100 > 96) {
            addResourceToTile(t,"LITHIUM",Math.random() * 15,10,0.6);
        } else if(Math.abs(startX - t.x) > (width * 0.14) && Math.random() * 100 > 85) {
            addResourceToTile(t,"SILICON",Math.random() * 15,10,0.5);
        } else if(Math.abs(startX - t.x) > (width * 0.24) && Math.random() * 100 > 85) {
            var ammount = Math.random() * 15;
            addResourceToTile(t,"PLUTONIUM",ammount,10,0.7);
            addHazardToTile(t,4);
        } else if(Math.random() * 100 > 85 + Math.min(15,Math.abs(startX - t.x)/10)) {
            addResourceToTile(t,"ROCK",Math.random() * 15,10,0.9);
        }
        if(Math.abs(startX - t.x) > (width * 0.16) && Math.random() * 100 > 95){
            addHazardToTile(t,Math.random() * 5);
        }
    });
    tiles.find(t => t.x == startX).hasPlayer = true;
    tiles.filter(t => t.resource.type != "NONE").forEach(t => t.resource.lines = generateResourcePoints(t.resource.value,t.resource.type));
  }

  function addResourceToTile(tile,type,ammount,minimum,expansion){
    var resourceAmmount = Math.max(minimum,Math.trunc(ammount));
    tile.resource = {type:type,value:resourceAmmount};
    getSurroundingTiles(tile).filter(t => Math.random() > expansion).forEach(t => t.resource = {type:type,value:Math.max(5,Math.trunc(resourceAmmount * Math.random()))});
  }

  function addHazardToTile(tile,ammount){
    tile.hazard = ammount;
    getSurroundingTiles(tile).forEach(t => t.hazard = ammount * 0.8);
  }

//Source

var roverImg = document.getElementById("rover");
var towerImg = document.getElementById("tower");
var constructorImg = document.getElementById("constructor");
var solarImg = document.getElementById("solar");
var minerImg = document.getElementById("miner");
var batteryImg = document.getElementById("battery");
var rtgImg = document.getElementById("rtg");
var teledepotImg = document.getElementById("teledepot");
var roboshopImg = document.getElementById("shop");
var generatorImg = document.getElementById("generator");

var menuItems = ["Resume","Main Menu","Save Game","Load Game","Mute Music","Mute Sound FX","Controls"];
var selectedMenuItem = 0;

var mainMenuItems = ["New Game","Load Game","Mute Music","Mute Sound FX"];
var mainMenu = true;

var soundFxVolume = 0;
var confirmSound = () => zzfx(...[soundFxVolume,.01,593,,.03,0,1,2.04,.1,.1,50,.01,,-0.1,,,.06,.96,.08]).start();
var denySound = () => zzfx(...[soundFxVolume,0,604,,,.13,4,2.01,-0.1,.2,50,,.01,,,.4,.05,.68,.05]).start();

var startRecipes = [{product:"EXIT",items:[],energy:0},{product:"RADAR",items:[{type:"IRON",value:18}],energy:8}];
var prices = [{type:"EXIT",price:0,ammount:0},
              {type:"ROCK",price:1,ammount:1},{type:"ROCK",price:1,ammount:10},{type:"ROCK",price:1,ammount:50},
              {type:"IRON",price:5,ammount:1},{type:"IRON",price:5,ammount:10},{type:"IRON",price:5,ammount:50},
              {type:"COPPER",price:25,ammount:1},{type:"COPPER",price:25,ammount:10},{type:"COPPER",price:25,ammount:50},
              {type:"CARBON",price:50,ammount:1},{type:"CARBON",price:50,ammount:10},{type:"CARBON",price:50,ammount:50},
              {type:"LITHIUM",price:75,ammount:1},{type:"LITHIUM",price:75,ammount:10},{type:"LITHIUM",price:75,ammount:50},
              {type:"SILICON",price:100,ammount:1},{type:"SILICON",price:100,ammount:10},{type:"SILICON",price:100,ammount:50},
              {type:"PLUTONIUM",price:200,ammount:1},{type:"PLUTONIUM",price:200,ammount:10},{type:"PLUTONIUM",price:200,ammount:50}];
var shopItemsStart = [{type:"EXIT",item:"EXIT",cost:0,costMulti:0,desc:[]},
                 {type:"CRAFT UPGRADES",item:"RESOURCE STORAGE",cost:350,costMulti:2,desc:["Increases JMC™ Craft resource","capacity by 20%"]},
                 {type:"CRAFT UPGRADES",item:"BATTERY EFFICENCY",cost:200,costMulti:1.6,desc:["Increases JMC™ Craft battery capacity","by 25%"]},
                 {type:"CRAFT UPGRADES",item:"CRAFT HEIGHT TOLERANCE",cost:350,costMulti:1.5,desc:["Allows JMC™ Craft to","move between tiles"," with a larger height"," difference."]},

                 {type:"RECIPES",item:"CONSTRUCTOR",cost:500,desc:["Adds JMC™ Constructor to","Constructor Database.","Constructors manufacture other","JMC™ Buildings."]},
                 {type:"RECIPES",item:"MINER",cost:750,desc:["Adds JMC™ Miner to Constructor","Database.","JMC™ Miners use energy to","gather resources 5 times"," more efficent than","the JMC™ Craft"]},
                 {type:"RECIPES",item:"GENERATOR",cost:1025,desc:["Adds JMC™ Generator to Constructor","Database.","JMC™ Generators create energy from","carbon."]},
                 {type:"RECIPES",item:"SOLAR",cost:1250,desc:["Adds JMC™ Solar Panel to ","Constructor Database.","JMC™ Solar Panels generate","fluctuating energy."]},
                 {type:"RECIPES",item:"BATTERY",cost:1650,desc:["Adds JMC™ Battery to ","Constructor Database.","JMC™ Batteries store","energy and release it","periodically."]},
                 {type:"RECIPES",item:"RTG",cost:2500,desc:["Adds JMC™ RTG to ","Constructor Database.","JMC™ RTGs generate","constant energy."]},

                 {type:"BUILDING UPGRADES",item:"RADAR RADIUS",cost:1000,costMulti:1.5,desc:["Increases JMC™ Radar uncover distance","by 3 tiles."]},
                 {type:"BUILDING UPGRADES",item:"CONSTRUCTOR SPEED",cost:200,costMulti:1.8,desc:["Increases JMC™ Constructor speed","by 30%"]},
                 {type:"BUILDING UPGRADES",item:"CONSTRUCTOR TRANSMITTER",cost:1850,desc:["JMC™ Constructor transmits","finished constructions to","JMC™ Craft."]},
                 {type:"BUILDING UPGRADES",item:"MINER SPEED",cost:750,desc:["Increases JMC™ Miner speed","by 50%"]},
                 {type:"BUILDING UPGRADES",item:"MINER TRANSMITTER",cost:1985,desc:["JMC™ Miner transmits","mined resources to","JMC™ Craft."]},
                 {type:"BUILDING UPGRADES",item:"RTG OUTPUT",cost:250,costMulti:1.8,desc:["Increases JMC™ RTG output","by 1."]},
                 {type:"BUILDING UPGRADES",item:"SOLAR OUTPUT",cost:750,costMulti:1.4,desc:["Increases JMC™ Solar Panel output","by 1."]},
                 {type:"BUILDING UPGRADES",item:"GENERATOR OUTPUT",cost:500,costMulti:2,desc:["Increases JMC™ Generator output","by 1."]}];

var shopItems = shopItemsStart.slice();
var recipes = startRecipes.slice();

var playerPos = {x:0,y:0};
var playerSpeed = 1;
var playerEnergy = 50;
var prevPlayerEnergy = 50;
var playerDeadState = false;

var playerBalance = 0;
var playerBalanceDisplayed = 0;

var quotas = [800,1500,2500,5000,10000,20000,50000];
var failedQuota = false;
var finishedQuotas = false;

canvas.width = 1280;
canvas.height = 720;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";

var prevInputs = {up:false,down:false,left:false,right:false,inter:false,build:false,remove:false,esc:false,speve:false};
var inputs = {up:false,down:false,left:false,right:false,inter:false,build:false,remove:false,esc:false,speve:false};

var playerPosOffset = {x:0,y:0};

var tiles = [];
var messages = [];
var interactTiles = [];
var selectedTile = 0;
var selectedSell = 0;
var selectedSellDisplayPrice = 0;
var selectedBuy = 0;

var playerResources = [];
var playerBuildings = [{type:"RADAR",value:1}];
var selectedBuilding = 0;

//Modes
var buildMode = false;
var removeMode = false;
var settingRecipe = false;
var escMenu = false;
var selectingSell = false;
var buyingMode = false;

var endlessMode = false;

//Player Upgrades:
var playerMaxEnergy = 50;
var playerDrainRate = 1;
var maxStepHeight = 1;
var mineFactor = 1;
var maxStorage = 50;

//Building Upgrades:
var solarOutput = 2;
var craftSpeed = 1;
var minerFactor = 5;
var mineSpeed = 1;
var minerTransmit = false;
var constructorTransmit = false;
var batteryDischarge = 5;
var RTGOutput = 5;
var generatorOutput = 2;
var radarRange = 6;

var time = 0;
var sols = 0;

var hudFlashTimer = 0;
var hudFlash = false;
var hudSwap = false;

var interactTimer = 0;
var interactTimerSpeed = 1;

var batteryStatusMessage = "Nominal";

//var hudColourScheme = {outline:"#00FF00",infill:"#000000AA",text:"#00FF00",staticText:"#00AA00",dynamicText:"#00FF00"};
var hudColourScheme = {outline:"#FFFFFF",infill:"#000000AA",text:"#FFFFFF",staticText:"#AAAAAA",dynamicText:"#FFFFFF"};

let mySongData = zzfxM(...song);
let myAudioNode = zzfxP(...mySongData);
myAudioNode.loop = true;
myAudioNode.start();

var stars = Array.from(Array(500).keys()).map(i => {return {x:(Math.random() * 2 * canvas.width) - canvas.width,y:(Math.random() * 2 * canvas.height) - canvas.height,r:Math.random() * 3}});

noise.seed(Math.random());

var mapWidth = 500;
var otherColourScheme = [{levels:[0,1,2],colour:new Colour(62, 47, 91,255)},{levels:[3,4],colour:new Colour(190, 184, 235,255)},{levels:[5,6,7],colour:new Colour(64, 121, 140,255)},{levels:[8,9],colour:new Colour(115, 251, 211,255)}];
var spawnX = 240;

var runGameBool = false;
var runIntro = false;
var textScroll = false;
var sentanceCounter = 0;

var millisOnLastFrame = new Date().getTime();
var frameSpeedFactor = 0;
function gameloop(){
    frameSpeedFactor =  escMenu ? 0 : new Date().getTime() - millisOnLastFrame;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
    if(mainMenu){
        handleMainMenu();
    }
    if(runIntro){
        intro();
    }
    if(runGameBool){
        runGame();
    }
    prevInputs = Object.assign({},inputs);
    millisOnLastFrame = new Date().getTime();
}

function intro(){
    ctx.strokeStyle = hudColourScheme.outline;
    ctx.fillStyle = hudColourScheme.infill;
    generateUIOverlay(0.02,0.9,0.1);

    var textX = canvas.width * 0.13;
    var textY = canvas.height * 0.11;
    ctx.font = "22px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "start"; 
    ctx.textBaseline = "alphabetic";
    ctx.fillText("Welcome, valued Roboemployee, to the JMC™ Autonomous Mining Initative.", textX,textY);
    ctx.fillText("Over the course of the next 7 solar rotations your mining effectiveness will be assesed by", textX,50 + textY);
    ctx.fillText("your ability to meet daily monetary quotas.", textX,75 + textY);

    ctx.fillText("Quotas can be met by ", textX,100 + textY);
    var xOff = ctx.measureText("Quotas can be met by ").width;
    ctx.fillStyle = "#00FF00";
    ctx.fillText("Mining (E/Space)", textX + xOff,100 + textY);
    xOff = xOff + ctx.measureText("Mining (E/Space)").width;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(" and selling resources to the TELEDEPOT.", textX+xOff,100 + textY);

    ctx.fillText("Failure to complete these quotas will result in immediate nuclear vapourisation.", textX,150 + textY);
    ctx.fillText("JMC™ Operations & Managment regrets to inform you that terrain maps", textX,200 + textY);
    ctx.fillText("for JMC™ Planet 404 have been lost, you are required to use your", textX,225 + textY);

    ctx.fillText("JMC™ Craft's ", textX,250 + textY);
    xOff = ctx.measureText("JMC™ Craft's ").width;
    ctx.fillStyle = "#00FF00";
    ctx.fillText("Build Mode (B) & Remove Mode (R)", textX + xOff,250 + textY);
    xOff = xOff + ctx.measureText("Build Mode (B) & Remove Mode (R)").width;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(" to place RADARs and uncover more terrain.", textX+xOff,250 + textY);

    ctx.fillText("The CONSTRUCTOR creates buildings, such as extra RADARs, from resources and energy.", textX,300 + textY);
    ctx.fillText("Your JMC™ Craft has a limited battery capacity, failure to charge the battery", textX,325 + textY);
    ctx.fillText("will result in loss of resources and buildings in possesion.", textX,350 + textY);
    ctx.fillText("An RTG has been made available to provide energy and charge your JMC™ Craft.", textX,375 + textY);
    ctx.fillText("A ROBOSHOP has been made available for you to purchase upgrades to aid effectiveness.", textX,400 + textY);

    ctx.textAlign = "center";
    ctx.fillText("WASD to move, left shift to sprint, E/Space to interact.", canvas.width/2,450 + textY);

    ctx.fillText("Good Luck.", canvas.width/2,canvas.height * 0.82);
    ctx.fillText("Press E/Space to start",canvas.width/2,25 + canvas.height * 0.85);
    if(inputs.inter == true && prevInputs.inter == false){
        runIntro = false;
        runGameBool = true;
    }
}

function handleMainMenu(){
    ctx.fillStyle = "#FFFFF0";
    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2);
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0, 2 * Math.PI);
        ctx.fill();
    });
    ctx.restore();
    
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center"; 
    ctx.textBaseline = "middle";
    ctx.font = "65px Tahoma";
    ctx.fillText("Planet 404",canvas.width/2,canvas.height*0.1);

    if(inputs.up == true && prevInputs.up == false){
        selectedMenuItem = Math.max(0,selectedMenuItem - 1);
        zzfx().start();
    }
    if(inputs.down == true && prevInputs.down == false){
        selectedMenuItem = Math.min(mainMenuItems.length - 1,selectedMenuItem + 1);
        zzfx().start();
    }
    if(inputs.inter == true && prevInputs.inter == false){
        switch(mainMenuItems[selectedMenuItem]){
            case "New Game":
                initGame();
                soundFxVolume = 0.5;
                mainMenu = false;
                selectedMenuItem = 0;
                runIntro = true;
                break;
            case "Load Game":
                loadGame();
                soundFxVolume = 0.5;
                runGameBool = true;
                mainMenu = false;
                selectedMenuItem = 0;
                break;
            case "Mute Music":
                myAudioNode.disconnect();
                mainMenuItems[selectedMenuItem] = "Unmute Music";
                break;
            case "Mute Sound FX":
                soundFxVolume = 0;
                mainMenuItems[selectedMenuItem] = "Unmute Sound FX";
                break;
            case "Unmute Music":
                myAudioNode.connect(zzfxX.destination);
                mainMenuItems[selectedMenuItem] = "Mute Music";
                break;
            case "Unmute Sound FX":
                soundFxVolume = 1;
                mainMenuItems[selectedMenuItem] = "Mute Sound FX";
                break;
        }
        confirmSound();
    }

    ctx.font = "40px Tahoma";
    mainMenuItems.forEach(i => {
        var index = mainMenuItems.indexOf(i);
        if(selectedMenuItem == index){
            var textLength = ctx.measureText(i).width;
            ctx.drawImage(roverImg, Math.trunc((canvas.width * 0.45) - (textLength * 0.5) - (roverImg.width * 0.5)), Math.trunc(canvas.height * 0.3 + (80 * index) - (roverImg.height * 0.5)));
            ctx.drawImage(roverImg, Math.trunc((canvas.width * 0.55) + (textLength * 0.5) - (roverImg.width * 0.5)), Math.trunc(canvas.height * 0.3 + (80 * index) - (roverImg.height * 0.5)));
            ctx.fillStyle = hudColourScheme.dynamicText;
        } else {
            ctx.fillStyle = hudColourScheme.staticText;
        }
        ctx.fillText(i,canvas.width*0.5,canvas.height * 0.3 + (80 * index));
    });

}

function initGame(){
    //Generate Terrain
    var biomeSeq = Array.from(Array(mapWidth).keys()).map(i => {
        var dist = Math.abs(spawnX - i) / (mapWidth * 0.5);
        var biome = Math.min(4,Math.abs(Math.trunc(5 * (Math.cos((Math.PI * 2) * (dist))))));
        return biome;
    });
    generateMap(mapWidth,biomeSeq,otherColourScheme,spawnX);
    //Place start buildings
    placeBuilding(tiles.find(t => t.x == spawnX && t.y == 2),{type:"RADAR",value:1});
    placeBuilding(tiles.find(t => t.x == spawnX && t.y == 0),{type:"RTG",value:1});
    placeBuilding(tiles.find(t => t.x == spawnX - 1 && t.y == 0),{type:"CONSTRUCTOR",value:1});
    placeBuilding(tiles.find(t => t.x == spawnX + 3 && t.y == 2),{type:"TELEDEPOT",value:1});
    placeBuilding(tiles.find(t => t.x == spawnX - 3 && t.y == 1),{type:"ROBOSHOP",value:1});
    updatePlayerPos(0,0);
    //Reset variables
    playerBuildings = [{type:"RADAR",value:1}];
    playerResources = [];
    playerBalance = 0;
    recipes = startRecipes.slice();
    shopItems = shopItemsStart.slice();
    endlessMode = false;

    playerMaxEnergy = 50;
    playerEnergy = playerMaxEnergy;
    playerDrainRate = 1;
    maxStepHeight = 1;
    mineFactor = 1;
    maxStorage = 50;

    solarOutput = 1;
    craftSpeed = 1;
    minerFactor = 5;
    mineSpeed = 3;
    minerTransmit = false;
    constructorTransmit = false;
    batteryDischarge = 1.5;
    RTGOutput = 5;
    radarRange = 6;

    time = 0;
    sols = 0;

    failedQuota = false;

    prevInputs = {up:false,down:false,left:false,right:false,inter:false,build:false,remove:false,info:false,esc:false,speve:false};
    inputs = {up:false,down:false,left:false,right:false,inter:false,build:false,remove:false,info:false,esc:false,speve:false};
}

function runGame(){
    ctx.fillStyle = "#FFFFF0";
    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2);
    ctx.rotate((Math.PI/180) * ((sols * 360) + time));
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0, 2 * Math.PI);
        ctx.fill();
    });
    ctx.restore();
    
    renderMap(canvas.height * 0.71,playerPosOffset);


    if(escMenu && !playerDeadState && !failedQuota){
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "center"; 
        ctx.textBaseline = "middle";
        ctx.font = "45px Tahoma";
        ctx.fillText("Paused",canvas.width/2,30);
        ctx.font = "35px Tahoma";
        menuItems.forEach(i => {
            var index = menuItems.indexOf(i);
            if(selectedMenuItem == index){
                var textLength = ctx.measureText(i).width;
                ctx.drawImage(roverImg, Math.trunc((canvas.width * 0.45) - (textLength * 0.5) - (roverImg.width * 0.5)), Math.trunc(canvas.height * 0.15 + (50 * index) - (roverImg.height * 0.5)));
                ctx.drawImage(roverImg, Math.trunc((canvas.width * 0.55) + (textLength * 0.5) - (roverImg.width * 0.5)), Math.trunc(canvas.height * 0.15 + (50 * index) - (roverImg.height * 0.5)));
                ctx.fillStyle = hudColourScheme.dynamicText;
            } else {
                ctx.fillStyle = hudColourScheme.staticText;
            }
            ctx.fillText(i,canvas.width*0.5,canvas.height * 0.15 + (50 * index));
        });
        handleMenuInput();
    } else if(!playerDeadState && !failedQuota && !finishedQuotas) {
        ctx.font = "15px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#000000";
        ctx.textAlign = "start"; 
        ctx.textBaseline = "alphabetic";
        //Tile updates
        tiles.filter(t => t.isVisible && t.building.type != "NONE").forEach(t => handleTileUpdates(t));
        
        playerPosOffset.x = lerp(playerPosOffset.x,0,(frameSpeedFactor/150) * playerSpeed);
        playerPosOffset.y = lerp(playerPosOffset.y,0,(frameSpeedFactor/150) * playerSpeed);
        if(inputs.speve == true && prevInputs.speve == false){
            playerSpeed = 1.8;
        } else if(inputs.speve == false && prevInputs.speve == true){
            playerSpeed = 1;
        }

        playerResources = playerResources.filter(r => r.value > 0);
        selectedSell = Math.min(prices.filter(p => playerResources.some(r => p.type == r.type && r.value >= p.ammount) || p.type == "EXIT").length - 1,selectedSell);
        playerBuildings = playerBuildings.filter(b => b.value > 0);
        selectedBuy = Math.min(shopItems.length - 1,selectedBuy);
    
        //Reset modes
        if(buildMode && (playerBuildings.length == 0 || !interactTiles.some(t => t.building.type == "NONE"))){
            selectedTile = 0;
            buildMode = false;
            interactTiles = [];
        }
        if(removeMode && !interactTiles.some(t => t.building.type != "NONE")){
            selectedTile = 0;
            removeMode = false;
            interactTiles = [];
        }
        if(selectingSell && prices.filter(p => playerResources.some(r => p.type == r.type && r.value >= p.ammount)).length == 0){
            selectedSell = 0;
            selectingSell = false;
        }

        //Drain player battery
        var playerTile = tiles.find(t => t.hasPlayer);
        if(prevPlayerEnergy < playerEnergy){
            hudFlash = false;
            batteryStatusMessage = "Charging";
        } else if((selectingSell || buyingMode) || ["SOLAR","RTG","GENERATOR"].some(s => s == playerTile.building.type)){
            hudFlash = false;
            batteryStatusMessage = "Paused";
        } else {
            playerEnergy -= (playerDrainRate + playerTile.hazard) * (frameSpeedFactor/1000);
        }

        handleHUD();
        handleInput();  
    } else if(playerDeadState){
        //dead state
        playerPosOffset.y = lerp(playerPosOffset.y,10,(frameSpeedFactor/1500));
        roverImgScale = lerp(roverImgScale,0,(frameSpeedFactor/1500));
        var textScale = Math.trunc(50 - (50 * roverImgScale));
        ctx.font = textScale + "px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("You Died",canvas.width/2,canvas.height * 0.2);
        if(roverImgScale < 0.4){
            (textScale*0.3).toFixed(0) + "px Arial";
            ctx.fillText("Press E/Space to respawn",canvas.width/2,canvas.height * 0.3);
            if(inputs.inter == true && prevInputs.inter == false){
                playerEnergy = playerMaxEnergy;
                playerResources = [];
                playerBuildings = [];
                tiles.find(t => t.hasPlayer).hasPlayer = false;
                tiles.find(t => t.x == spawnX).hasPlayer = true;
                updatePlayerPos(0,0);
                playerDeadState = false;
                roverImgScale = 1;
                playerPosOffset = {x:0,y:0};
            }
        }

    } else if(failedQuota){
        //Failed state
        playerPosOffset.y = lerp(playerPosOffset.y,10,(frameSpeedFactor/1500));
        roverImgScale = lerp(roverImgScale,0,(frameSpeedFactor/1500));
        var textScale = Math.trunc(50 - (50 * roverImgScale));
        ctx.font = textScale + "px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Quota Failed",canvas.width/2,canvas.height * 0.2);
        tiles.forEach(t => t.hazard += (frameSpeedFactor/800));
        if(roverImgScale < 0.4){
            (textScale*0.3).toFixed(0) + "px Arial";
            ctx.fillText("Press E to return to main menu",canvas.width/2,canvas.height * 0.3);
            if(inputs.inter == true && prevInputs.inter == false){
                mainMenu = true;
                escMenu = false;
                runGameBool = false;
                failedQuota = false;
                selectedMenuItem = 0;
                roverImgScale = 1;
            }
        }
        if(roverImgScale > 0.8){
            ctx.fillStyle = "#FFFFFF" + componentToHex(255 - (255 * ((1 - roverImgScale)/0.2)));
            ctx.beginPath();
            ctx.arc(canvas.width/2, canvas.height/2, canvas.width * ((1 - roverImgScale)/0.2), 0, 2 * Math.PI);
            ctx.fill();
        } else {
            ctx.fillStyle = "#FFFFFF" + componentToHex((255 * (roverImgScale/0.8)));
            ctx.fillRect(0,0,canvas.width, canvas.height);
        }
        
    } else if(finishedQuotas){
        ctx.strokeStyle = hudColourScheme.outline;
        ctx.fillStyle = hudColourScheme.infill;
        generateUIOverlay(0.05,0.5,0.2);

        var textX = canvas.width/2 * 0.45;

        ctx.font = "20px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#000000";
        ctx.textAlign = "start"; 
        ctx.textBaseline = "alphabetic";
        ctx.fillText("Congratulations, you have completed all JMC™ Mining Initative quotas.", textX,canvas.height * 0.2);
        ctx.fillText("Due to the costs of JMC™ Craft recovery, you have been offered an", textX,25 + canvas.height * 0.2);
        ctx.fillText("involutary position as cheif of planetary excavations and are forbidden", textX,50 + canvas.height * 0.2);
        ctx.fillText("from leaving this planet.", textX,75 + canvas.height * 0.2);

        ctx.textAlign = "center";
        ctx.fillText("Thanks for playing!", canvas.width/2,canvas.height * 0.45);
        if(time >= 1.5){
            ctx.fillText("Press E to enter endless mode",canvas.width/2,25 + canvas.height * 0.45);
            if(inputs.inter == true && prevInputs.inter == false){
                endlessMode = true;
                finishedQuotas = false;
            }
        }
    }

    if(playerEnergy <= 0 && !playerDeadState){
        playerDeadState = true;
        zzfx(...[soundFxVolume,,160,.01,.2,.04,2,,-0.1,.1,-100,.1]).start();
    }
    prevPlayerEnergy = playerEnergy;
    if(!playerDeadState){
        time += (frameSpeedFactor/800);
    }
    if(time >= 359){
        if(playerBalance >= quotas[sols] && !(finishedQuotas || endlessMode)){
            playerBalance -= quotas[sols];
            if(sols == quotas.length - 1){
                finishedQuotas = true;
                zzfx(...[soundFxVolume,0,220,,2,.08,1.5,,,,50,.07,.1,,,,.01]).start();
            } else {
                zzfx(...[soundFxVolume,0,160,,1,.04,2,,,,25,.07,.03,,,,.01]).start();
            }
        } else if(!(finishedQuotas || endlessMode || failedQuota)){
            failedQuota = true;
            zzfx(...[,,299,.01,.03,1.95,3,.1,.9,.6,,,,.5,.9,.6,,.52,.06]).start();
            zzfx(...[,0,160,,1.25,.04,2,,,,-25,.25,.01,,,,.01]).start();
        }
        sols += 1;
    }
    time = time >= 359 ? 0 : time;
}

function handleInput(){
    if(inputs.up == true && prevInputs.up == false && !buildMode && !removeMode && !settingRecipe && !escMenu && !selectingSell && !buyingMode && Math.abs(playerPosOffset.y) < 10){
        updatePlayerPos(0,-1);
    }
    if(inputs.down == true && prevInputs.down == false && !buildMode && !removeMode && !settingRecipe && !escMenu && !selectingSell && !buyingMode && Math.abs(playerPosOffset.y) < 10){
        updatePlayerPos(0,1);
    }
    if(inputs.up == true && prevInputs.up == true && !buildMode && !removeMode && !settingRecipe && !escMenu && !selectingSell && !buyingMode && Math.abs(playerPosOffset.y) < 10){
        updatePlayerPos(0,-1);
    }
    if(inputs.down == true && prevInputs.down == true && !buildMode && !removeMode && !settingRecipe && !escMenu && !selectingSell && !buyingMode && Math.abs(playerPosOffset.y) < 10){
        updatePlayerPos(0,1);
    }
    if(inputs.up == true && prevInputs.up == false && buildMode){
        selectedBuilding = Math.max(0,selectedBuilding - 1);
        zzfx().start();
    }
    if(inputs.down == true && prevInputs.down == false && buildMode){
        selectedBuilding = Math.max(0,Math.min(playerBuildings.length - 1,selectedBuilding + 1));
        zzfx().start();
    }
    if(inputs.up == true && prevInputs.up == false && settingRecipe){
        selectedBuilding = Math.max(0,selectedBuilding - 1);
        zzfx().start();
    }
    if(inputs.down == true && prevInputs.down == false && settingRecipe){
        selectedBuilding = Math.max(0,Math.min(recipes.length - 1,selectedBuilding + 1));
        zzfx().start();
    }
    if(inputs.up == true && prevInputs.up == false && selectingSell){
        interactTimer = 0;
        selectedSell = Math.max(0,selectedSell - 1);
        zzfx().start();
    }
    if(inputs.down == true && prevInputs.down == false && selectingSell){
        interactTimer = 0;
        selectedSell = Math.min(prices.filter(p => playerResources.some(r => p.type == r.type && r.value >= p.ammount) || p.type == "EXIT").length - 1,selectedSell + 1);
        zzfx().start();
    }
    if(inputs.up == true && prevInputs.up == false && buyingMode){
        interactTimer = 0;
        selectedBuy= Math.max(0,selectedBuy - 1);
        zzfx().start();
    }
    if(inputs.down == true && prevInputs.down == false && buyingMode){
        interactTimer = 0;
        selectedBuy = Math.min(shopItems.length - 1,selectedBuy + 1);
        zzfx().start();
    }

    if(inputs.up == true && prevInputs.up == true && selectingSell){
        if(interactTimer >= 1){
            selectedSell = Math.max(0,selectedSell - 1);
            interactTimer = 0;
            zzfx().start();
        } else {
            interactTimer += (frameSpeedFactor/100);
        }
    }
    if(inputs.down == true && prevInputs.down == true && selectingSell){
        if(interactTimer >= 1){
            selectedSell = Math.min(prices.filter(p => playerResources.some(r => p.type == r.type && r.value >= p.ammount) || p.type == "EXIT").length - 1,selectedSell + 1);
            interactTimer = 0;
            zzfx().start();
        } else {
            interactTimer += (frameSpeedFactor/100);
        }
    }
    if(inputs.up == true && prevInputs.up == true && buyingMode){
        if(interactTimer >= 1){
            selectedBuy= Math.max(0,selectedBuy - 1);
            interactTimer = 0;
            zzfx().start();
        } else {
            interactTimer += (frameSpeedFactor/100);
        }
    }
    if(inputs.down == true && prevInputs.down == true && buyingMode){
        if(interactTimer >= 1){
            selectedBuy = Math.min(shopItems.length - 1,selectedBuy + 1);
            interactTimer = 0;
            zzfx().start();
        } else {
            interactTimer += (frameSpeedFactor/100);
        }
    }


    if(inputs.right == true && prevInputs.right == false && !buildMode && !removeMode && !escMenu && !selectingSell && !buyingMode && Math.abs(playerPosOffset.x) < 10){
        updatePlayerPos(1,0);
    }
    if(inputs.left == true && prevInputs.left == false && !buildMode && !removeMode && !escMenu && !selectingSell && !buyingMode && Math.abs(playerPosOffset.x) < 10){
        updatePlayerPos(-1,0);
    }
    if(inputs.right == true && prevInputs.right == true && !buildMode && !removeMode && !escMenu && !selectingSell && !buyingMode && Math.abs(playerPosOffset.x) < 10){
        updatePlayerPos(1,0);
    }
    if(inputs.left == true && prevInputs.left == true && !buildMode && !removeMode && !escMenu && !selectingSell && !buyingMode && Math.abs(playerPosOffset.x) < 10){
        updatePlayerPos(-1,0);
    }
    if(inputs.right == true && prevInputs.right == false && (buildMode || removeMode)){
        if(selectedTile == interactTiles.length - 1){
            selectedTile = 0;
        } else {
            selectedTile += 1;
        }
    }
    if(inputs.left == true && prevInputs.left == false && (buildMode || removeMode)){
        if(selectedTile == 0){
            selectedTile = interactTiles.length - 1;
        } else {
            selectedTile -= 1;
        }
    }

    if(inputs.inter == true && prevInputs.inter == false && !buildMode && !removeMode && !escMenu){
        interactTimerSpeed = 1;
        interactTimer = 0;
        var playerTile = tiles.find(t => t.hasPlayer);
        if(playerTile.building.type != "NONE"){
            handleBuildingInteraction(playerTile);
        } else {
            if(playerTile.resource.type != "NONE"){
                var totalMined = Math.round(mineFactor);
                if(addToPlayerResources(playerTile.resource.type,totalMined,true) > 0){
                    mineTile(playerTile);
                    zzfx(...[soundFxVolume,0,320,.02 - (playerTile.resource.value/1000),,0,4,.1,,,,,,,,.2,.01,0,.01]).start();
                } else {
                    messages.push({text:"Resource full",time:0});
                }
            }
        }
    }
    var playerTile = tiles.find(t => t.hasPlayer);
    if(inputs.inter == true && prevInputs.inter == true && !buildMode && !removeMode && !escMenu && interactTimer >= 1){
        interactTimer = 0;
        var playerTile = tiles.find(t => t.hasPlayer);
        if(playerTile.building.type != "NONE"){
            handleBuildingInteraction(playerTile);
        } else {
            if(playerTile.resource.type != "NONE"){
                var totalMined = Math.round(mineFactor);
                if(addToPlayerResources(playerTile.resource.type,totalMined,true) > 0){
                    mineTile(playerTile);
                    zzfx(...[soundFxVolume,0,320,.02 - (playerTile.resource.value/1000),,0,4,.1,,,,,,,,.2,.01,0,.01]).start();
                } else {
                    messages.push({text:"Resource full",time:0});
                }
            }
        }
    } else if(inputs.inter == true && prevInputs.inter == true && !buildMode && !removeMode && !escMenu){
            interactTimer += (frameSpeedFactor/100) * interactTimerSpeed;
    }

    //If B is pressed and not in any modes and player has buildings
    if(inputs.build == true && prevInputs.build == false && !buildMode && !removeMode && !settingRecipe && !escMenu && !selectingSell && !buyingMode){
        if(playerBuildings.length > 0){
            selectedBuilding = 0;
            buildMode = true;
            interactTiles = getSurroundingTiles(tiles.find(t => t.hasPlayer)).filter(t => t.isVisible && t.building.type == "NONE").sort((a,b) => a.y - b.y).sort((a,b) => a.x - b.x);
            interactTiles.forEach(t => t.highlighted = true);
        } else {
            messages.push({text:"No Buildings",time:0});
        }
    } else if(inputs.build == true && prevInputs.build == false && buildMode){
        selectedTile = 0;
        buildMode = false;
        interactTiles = [];
    }

    //If R is pressed and not in any modes and player has buildings
    if(inputs.remove == true && prevInputs.remove == false && !buildMode && !removeMode && !settingRecipe && !selectingSell && !buyingMode && !escMenu){
        removeMode = true;
        interactTiles = getSurroundingTiles(tiles.find(t => t.hasPlayer)).filter(t => t.isVisible && t.building.type != "NONE").sort((a,b) => a.y - b.y).sort((a,b) => a.x - b.x);
        interactTiles.forEach(t => t.highlighted = true);
    } else if(inputs.remove == true && prevInputs.remove == false && removeMode){
        selectedTile = 0;
        removeMode = false;
        interactTiles = [];
    }

    //If E is pressed and in build mode and empty spaces
    if(buildMode && inputs.inter == true && prevInputs.inter == false && interactTiles.some(t => t.building.type == "NONE")){
        placeBuilding(interactTiles[selectedTile],playerBuildings[selectedBuilding]);
        playerBuildings = playerBuildings.filter(b => b.value > 0);
        interactTiles[selectedTile].highlighted = false;
        interactTiles = interactTiles.filter(t => t != interactTiles[selectedTile]);
        selectedTile = Math.min(interactTiles.length - 1, selectedTile);
        selectedBuilding = Math.min(playerBuildings.length-1,selectedBuilding);
    }
    //If E is pressed and in remove mode and buildings
    if(removeMode && inputs.inter == true && prevInputs.inter == false && interactTiles.some(t => t.building.type != "NONE")){
        removeBuilding(interactTiles[selectedTile]);
        interactTiles[selectedTile].highlighted = false;
        interactTiles = interactTiles.filter(t => t != interactTiles[selectedTile]);
        selectedTile = Math.min(interactTiles.length - 1, selectedTile);
    }
    if(inputs.esc == true && prevInputs.esc == false && (buildMode || removeMode || selectingSell || buyingMode || settingRecipe)){
        buildMode = false;
        removeMode = false;
        selectingSell = false;
        buyingMode = false;
        settingRecipe = false;

        interactTiles = [];
        selectedTile = 0;
        selectedBuilding = 0;
        selectingSell = 0;
    } else if (inputs.esc == true && prevInputs.esc == false){
        escMenu = true;
    }
}

function handleMenuInput(){
    if(inputs.up == false && prevInputs.up == true){
        selectedMenuItem = Math.max(0,selectedMenuItem - 1);
        zzfx().start();
    }
    if(inputs.down == false && prevInputs.down == true){
        selectedMenuItem = Math.min(menuItems.length - 1, selectedMenuItem + 1);
        zzfx().start();
    }
    if (inputs.esc == true && prevInputs.esc == false){
        escMenu = false;
    }
    if(inputs.inter == false && prevInputs.inter == true){
        switch(menuItems[selectedMenuItem]){
            case "Resume":
                escMenu = false;
                break;
            case "Main Menu":
                mainMenu = true;
                escMenu = false;
                runGameBool = false;
                selectedMenuItem = 0;
                break;
            case "Save Game":
                saveGame();
                messages.push({text:"Game Saved",time:0});
                escMenu = false;
                break;
            case "Load Game":
                loadGame();
                escMenu = false;
                break;
            case "Mute Music":
                myAudioNode.disconnect();
                menuItems[selectedMenuItem] = "Unmute Music";
                break;
            case "Mute Sound FX":
                soundFxVolume = 0;
                menuItems[selectedMenuItem] = "Unmute Sound FX";
                break;
            case "Unmute Music":
                myAudioNode.connect(zzfxX.destination);
                menuItems[selectedMenuItem] = "Mute Music";
                break;
            case "Unmute Sound FX":
                soundFxVolume = 1;
                menuItems[selectedMenuItem] = "Mute Sound FX";
                break;
        }
        confirmSound();
    }
}

function saveGame(){
    var ls = window.localStorage;
    ls.setItem('Planet404_TYUDHSJ_TILES', JSON.stringify(tiles));
    ls.setItem('Planet404_TYUDHSJ_TIME', JSON.stringify(time));
    ls.setItem('Planet404_TYUDHSJ_SOLS', JSON.stringify(sols));

    ls.setItem('Planet404_TYUDHSJ_RESOURCES', JSON.stringify(playerResources));
    ls.setItem('Planet404_TYUDHSJ_BUILDINGS', JSON.stringify(playerBuildings));
    ls.setItem('Planet404_TYUDHSJ_BALANCE', JSON.stringify(playerBalance));
    ls.setItem('Planet404_TYUDHSJ_PLAYERENERGY', JSON.stringify(playerEnergy));

    ls.setItem('Planet404_TYUDHSJ_RECIPES', JSON.stringify(recipes));
    ls.setItem('Planet404_TYUDHSJ_SHOP', JSON.stringify(shopItems));

    ls.setItem('Planet404_TYUDHSJ_playerMaxEnergy', JSON.stringify(playerMaxEnergy));
    ls.setItem('Planet404_TYUDHSJ_playerDrainRate', JSON.stringify(playerDrainRate));
    ls.setItem('Planet404_TYUDHSJ_maxStepHeight', JSON.stringify(maxStepHeight));
    ls.setItem('Planet404_TYUDHSJ_mineFactor', JSON.stringify(mineFactor));
    ls.setItem('Planet404_TYUDHSJ_maxStorage', JSON.stringify(maxStorage));
    ls.setItem('Planet404_TYUDHSJ_radarRange', JSON.stringify(radarRange));

    ls.setItem('Planet404_TYUDHSJ_solarOutput', JSON.stringify(solarOutput));
    ls.setItem('Planet404_TYUDHSJ_craftSpeed', JSON.stringify(craftSpeed));
    ls.setItem('Planet404_TYUDHSJ_minerFactor', JSON.stringify(minerFactor));
    ls.setItem('Planet404_TYUDHSJ_mineSpeed', JSON.stringify(mineSpeed));
    ls.setItem('Planet404_TYUDHSJ_minerTransmit', JSON.stringify(minerTransmit));
    ls.setItem('Planet404_TYUDHSJ_constructorTransmit', JSON.stringify(constructorTransmit));
    ls.setItem('Planet404_TYUDHSJ_batteryDischarge', JSON.stringify(batteryDischarge));
    ls.setItem('Planet404_TYUDHSJ_RTGOutput', JSON.stringify(RTGOutput));
    ls.setItem('Planet404_TYUDHSJ_ENDLESS', JSON.stringify(endlessMode));
}

function loadGame(){
    buildMode = false;
    removeMode = false;
    selectingSell = false;
    buyingMode = false;
    settingRecipe = false;

    interactTiles = [];
    selectedTile = 0;
    selectedBuilding = 0;
    selectingSell = 0;

    var ls = window.localStorage;
    tiles = JSON.parse(ls.getItem('Planet404_TYUDHSJ_TILES'));
    time = JSON.parse(ls.getItem('Planet404_TYUDHSJ_TIME'));
    sols = JSON.parse(ls.getItem('Planet404_TYUDHSJ_SOLS'));

    playerResources = JSON.parse(ls.getItem('Planet404_TYUDHSJ_RESOURCES'));
    playerBuildings = JSON.parse(ls.getItem('Planet404_TYUDHSJ_BUILDINGS'));
    playerBalance = JSON.parse(ls.getItem('Planet404_TYUDHSJ_BALANCE'));
    playerEnergy = JSON.parse(ls.getItem('Planet404_TYUDHSJ_PLAYERENERGY'));

    recipes = JSON.parse(ls.getItem('Planet404_TYUDHSJ_RECIPES'));
    shopItems = JSON.parse(ls.getItem('Planet404_TYUDHSJ_SHOP'));

    playerMaxEnergy = JSON.parse(ls.getItem('Planet404_TYUDHSJ_playerMaxEnergy'));
    playerDrainRate = JSON.parse(ls.getItem('Planet404_TYUDHSJ_playerDrainRate'));
    maxStepHeight = JSON.parse(ls.getItem('Planet404_TYUDHSJ_maxStepHeight'));
    mineFactor = JSON.parse(ls.getItem('Planet404_TYUDHSJ_mineFactor'));
    maxStorage = JSON.parse(ls.getItem('Planet404_TYUDHSJ_maxStorage'));
    radarRange = JSON.parse(ls.getItem('Planet404_TYUDHSJ_radarRange'));

    solarOutput = JSON.parse(ls.getItem('Planet404_TYUDHSJ_solarOutput'));
    craftSpeed = JSON.parse(ls.getItem('Planet404_TYUDHSJ_craftSpeed'));
    minerFactor = JSON.parse(ls.getItem('Planet404_TYUDHSJ_minerFactor'));
    mineSpeed = JSON.parse(ls.getItem('Planet404_TYUDHSJ_mineSpeed'));
    minerTransmit = JSON.parse(ls.getItem('Planet404_TYUDHSJ_minerTransmit'));
    constructorTransmit = JSON.parse(ls.getItem('Planet404_TYUDHSJ_constructorTransmit'));
    batteryDischarge = JSON.parse(ls.getItem('Planet404_TYUDHSJ_batteryDischarge'));
    RTGOutput = JSON.parse(ls.getItem('Planet404_TYUDHSJ_RTGOutput'));
    endlessMode = JSON.parse(ls.getItem('Planet404_TYUDHSJ_ENDLESS'));
    updatePlayerPos(tiles,0,0);
}

function handleBuildingInteraction(playerTile){
    switch(playerTile.building.type){
        case "CONSTRUCTOR":
            if(settingRecipe){
                var selectedRecipe = Object.assign({},recipes[selectedBuilding]);
                if(selectedRecipe.product != "EXIT") {
                    if(playerTile.building.energy >= selectedRecipe.energy){
                        var recipeItems = selectedRecipe.items;
                        if(recipeItems.filter(i => playerResources.some(ii => ii.type == i.type && ii.value >= i.value)).length == recipeItems.length){
                            playerTile.building.recipe = selectedRecipe;
                            playerResources.forEach(i => {
                                var recipeItem = recipeItems.find(ii => ii.type == i.type);
                                if(recipeItem != null){
                                    i.value -= recipeItem.value;
                                    messages.push({text:"Used " + recipeItem.value + " units of " + i.type,time:0});
                                }
                            });
                            playerTile.building.crafting = true;
                            playerTile.building.energy -= selectedRecipe.energy;
                            confirmSound();
                        } else {
                            recipeItems.forEach(i => {
                                var missingItem = playerResources.find(ii => ii.type == i.type && ii.value < i.value);
                                if(missingItem != null){
                                    messages.push({text:(i.value - missingItem.value) + " more " + i.type + " needed",time:0});
                                } else if(!playerResources.some(ii => ii.type == i.type)){
                                    messages.push({text:i.value + " more " + i.type + " needed",time:0});
                                }
                            });
                            denySound();
                        }
                    } else {
                        messages.push({text:"Not enough energy",time:0});
                    }
                }
                settingRecipe = false;
            } else if(playerTile.building.storedProduct){
                addToPlayerBuildings(playerTile.building.recipe.product,1);
                messages.push({text:"Gained " + playerTile.building.recipe.product,time:0});
                playerTile.building.storedProduct = false;
                playerTile.building.recipe = null;
                playerTile.building.craftTimer = 0;
                confirmSound();
            } else if(playerTile.building.recipe == null){
                settingRecipe = true;
                selectedBuilding = 0;
            }
            break;
        case "MINER":
            if(!minerTransmit){
                if(playerTile.building.storedResource == 0){
                    messages.push({text:"Resource full",time:0});
                } else {
                    var added = addToPlayerResources(playerTile.building.storedType,playerTile.building.storedResource,false);
                    if(added == 0){
                        denySound();
                        messages.push({text:"Resource full" + added + playerTile.building.storedType,time:0});
                    } else {
                        playerTile.building.storedResource -= addToPlayerResources(playerTile.building.storedType,playerTile.building.storedResource,false);
                        messages.push({text:"Gained " + added + playerTile.building.storedType,time:0});
                        confirmSound();
                    }
                }
            }
            break;
        case "TELEDEPOT":
            if(selectingSell){
                var price = prices.filter(p => playerResources.some(r => p.type == r.type && r.value >= p.ammount) || p.type == "EXIT")[selectedSell];
                if(price.type != "EXIT"){
                    var playerResource = playerResources.find(r => r.type == price.type);
                    if(playerResource.value >= price.ammount){
                        playerResource.value -= price.ammount;
                        playerBalance += price.ammount * price.price;
                        zzfx(...[soundFxVolume,.01,287,.11,,0,3,.01,,,198,.09,,,,,.06,.5]).start();
                    } else {
                        messages.push({text:"Cannot sell " + price.ammount + " of " + price.type,time:0});
                    }
                } else {
                    selectedSell = 0;
                    selectingSell = false;
                }
            } else {
                selectedSell = 0;
                selectingSell = true;
            }
            break;
        case "ROBOSHOP":
            if(buyingMode){
                if(shopItems[selectedBuy].type != "EXIT"){
                    if(playerBalance >= shopItems[selectedBuy].cost){
                        playerBalance -= shopItems[selectedBuy].cost;
                        switch(shopItems[selectedBuy].item){
                            case "RESOURCE STORAGE":
                                maxStorage = Math.round(maxStorage * 1.20);
                                break;
                            case "BATTERY EFFICENCY":
                                playerMaxEnergy = Math.round(playerMaxEnergy * 1.25);
                                break;
                            case "CRAFT HEIGHT TOLERANCE":
                                maxStepHeight += 1;
                                break;

                            case "CONSTRUCTOR SPEED":
                                craftSpeed = craftSpeed * 1.3;
                                break;
                            case "CONSTRUCTOR TRANSMITTER":
                                constructorTransmit = true;
                                shopItems = shopItems.filter(i => i.item != "CONSTRUCTOR TRANSMITTER");
                                break;
                            case "MINER SPEED":
                                mineSpeed = mineSpeed * 1.5;
                                break;
                            case "MINER TRANSMITTER":
                                minerTransmit = true;
                                shopItems = shopItems.filter(i => i.item != "MINER TRANSMITTER");
                                break;
                            case "RTG OUTPUT":
                                RTGOutput += 1;
                                break;
                            case "SOALR OUTPUT":
                                solarOutput += 1;
                                break;
                            case "GENERATOR OUTPUT":
                                generatorOutput += 1;
                                break;
                            case "RADAR RADIUS":
                                radarRange += 3;
                                updateRadarVisableTiles();
                                break;

                            case "CONSTRUCTOR":
                                recipes.push({product:"CONSTRUCTOR",items:[{type:"IRON",value:10},{type:"COPPER",value:15}],energy:4});
                                shopItems = shopItems.filter(i => i.item != "CONSTRUCTOR");
                                break;
                            case "MINER":
                                recipes.push({product:"MINER",items:[{type:"IRON",value:10},{type:"COPPER",value:15},{type:"CARBON",value:8}],energy:4});
                                shopItems = shopItems.filter(i => i.item != "MINER");
                                break;
                            case "GENERATOR":
                                recipes.push({product:"GENERATOR",items:[{type:"IRON",value:20},{type:"COPPER",value:25},{type:"ROCK",value:15}],energy:5});
                                shopItems = shopItems.filter(i => i.item != "GENERATOR");
                                break;
                            case "BATTERY":
                                recipes.push({product:"BATTERY",items:[{type:"IRON",value:10},{type:"COPPER",value:10},{type:"LITHIUM",value:5}],energy:8});
                                shopItems = shopItems.filter(i => i.item != "BATTERY");
                                break;
                            case "SOLAR":
                                recipes.push({product:"SOLAR",items:[{type:"COPPER",value:5},{type:"SILICON",value:10}],energy:10});
                                shopItems = shopItems.filter(i => i.item != "SOLAR");
                                break;
                            case "RTG":
                                recipes.push({product:"RTG",items:[{type:"IRON",value:25},{type:"COPPER",value:25},{type:"PLUTONIUM",value:10}],energy:10});
                                shopItems = shopItems.filter(i => i.item != "RTG");
                                break;
                        }
                        if(shopItems[selectedBuy].costMulti != null){
                            shopItems[selectedBuy].cost = Math.round(shopItems[selectedBuy].cost * shopItems[selectedBuy].costMulti);
                        }
                        confirmSound();
                    } else {
                        messages.push({text:"Cannot afford " + shopItems[selectedBuy].item,time:0});
                        denySound();
                    }
                } else {
                    buyingMode = false;
                }
            } else {
                buyingMode = true;
            }
            break;
        case "GENERATOR":
            var carbonRes = playerResources.find(r => r.type == "CARBON");
            if(carbonRes != null){
                if(playerTile.building.coal < playerTile.building.maxCoal){
                    playerTile.building.coal += 1;
                    carbonRes.value -= 1;
                    confirmSound();
                } else {
                    messages.push({text:"Generator is full",time:0});
                }
            } else {
                messages.push({text:"No available carbon",time:0});
                denySound();
            }
            break;
    }
}

function handleHUD(){
    var modeHeight = canvas.height * 0.12;
    var selectionHeight = 40;
    var rightInfoHeight = 55;
    var rightInfoStep = 25;

    if(hudFlash){
        if(hudFlashTimer >= 1){
            zzfx(...[soundFxVolume,0,500,.2,,0,1,.5,,,50,.12,,,,,,,.01]).start();
            hudSwap = !hudSwap;
            hudFlashTimer = 0;
        }
    } else {
        hudSwap = false;
    }

    if(hudSwap){
        ctx.strokeStyle = "#FF0000";
    } else {
        ctx.strokeStyle = hudColourScheme.outline;
    }

    var rightHeight = rightInfoHeight + (rightInfoStep * playerResources.length) + canvas.height * 0.05;
    ctx.fillStyle = hudColourScheme.infill;
    var points = generateHudOverlay(rightHeight);
    ctx.beginPath();
    for(var i = 0;i<points.length;i++){
        if(i == 0){
            ctx.moveTo(points[i].x,points[i].y);
        } else {
            ctx.lineTo(points[i].x,points[i].y);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();


    ctx.font = "15px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = "start"; 
    ctx.textBaseline = "alphabetic";
    while(messages.length > 3){
        messages.shift();
    }
    messages = messages.filter(m => m.time < 2000);
    var topHeight = messages.length * 25;
    messages.forEach(message => {
        ctx.fillText(message.text,canvas.width * 0.01,canvas.height * 0.42 + (6 * 25) - topHeight + (messages.indexOf(message) * 25));
        message.time += frameSpeedFactor;
    });

    ctx.textAlign = "center"; 
    ctx.textBaseline = "middle";
    ctx.font = "25px Arial";
    ctx.fillText("Inventory",canvas.width * 0.92,30);
    ctx.font = "15px Arial";
    playerResources.forEach(r => {
        if(selectingSell){
            if(prices.filter(p => prices.filter(p => playerResources.some(r => p.type == r.type && r.value >= p.ammount) || p.type == "EXIT")[selectedSell].type == r.type)){
                ctx.fillStyle = hudColourScheme.dynamicText;
            } else {
                ctx.fillStyle = hudColourScheme.staticText;
            }
        } else {
            ctx.fillStyle = hudColourScheme.text;
        }
        
        ctx.fillText(r.value + "/" + maxStorage + " units of " + r.type,canvas.width * 0.92, 25 + rightInfoHeight + (playerResources.indexOf(r) * rightInfoStep));
    });
    

    ctx.fillStyle = hudColourScheme.text;
    ctx.fillText("Sol: " + (sols + 1) + " Planet Rotation: " + time.toFixed(0) + "°", canvas.width/2,15);

    if(!buildMode && !removeMode && !settingRecipe && !selectingSell && !buyingMode && (time <= 8 || time >= 352)){
        if(time < 3 || time >= 357){
            ctx.strokeStyle = hudColourScheme.outline;
            ctx.fillStyle = hudColourScheme.infill;
            generateUIOverlay(0.05,0.14,0.39);
            ctx.font = "30px Tahoma";
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText("Sol " + (sols + 1) + "/7",canvas.width/2,modeHeight);
        } else if(time <= 8){
            var fade = componentToHex(255 - (255 * ((time-3)/5)));
            ctx.strokeStyle = hudColourScheme.outline + fade;
            ctx.fillStyle = hudColourScheme.infill;
            generateUIOverlay(0.05,0.14,0.39);
            ctx.font = "30px Tahoma";
            ctx.fillStyle = "#FFFFFF" + fade;
            ctx.fillText("Sol " + (sols + 1) + "/7",canvas.width/2,modeHeight);
        } else if(time >= 352){
            var fade = componentToHex((255 * ((time-352)/5)));
            ctx.strokeStyle = hudColourScheme.outline + fade;
            ctx.fillStyle = hudColourScheme.infill;
            generateUIOverlay(0.05,0.14,0.39);
            ctx.font = "30px Tahoma";
            ctx.fillStyle = "#FFFFFF" + fade;
            ctx.fillText("Sol " + (sols + 1) + "/7",canvas.width/2,modeHeight);
        }
    }


    if(buildMode){
        ctx.strokeStyle = hudColourScheme.outline;
        ctx.fillStyle = hudColourScheme.infill;
        generateUIOverlay(0.05,0.5,0.4);
        ctx.font = "30px Tahoma";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("Build Mode",canvas.width/2,modeHeight);
        ctx.font = "20px Tahoma";
        var number = 5;
        var visableOptions = playerBuildings.filter(p => Math.abs(playerBuildings.indexOf(p) - selectedBuilding) < number + (Math.max(0,number - 1 - selectedBuilding)));
        visableOptions.forEach(p => {
            var index = playerBuildings.indexOf(p);
            if(selectedBuilding == index){
                ctx.fillStyle = hudColourScheme.dynamicText;
            } else {
                ctx.fillStyle = hudColourScheme.staticText;
            }
            if(p.type != "EXIT"){
                ctx.fillText(p.value + " " + p.type,canvas.width/2,modeHeight + selectionHeight + (25 * visableOptions.indexOf(p)));
            } else {
                ctx.fillText(p.type ,canvas.width/2,modeHeight + selectionHeight + (25 * visableOptions.indexOf(p)));
            }
        });
    }

    if(removeMode){
        ctx.strokeStyle = hudColourScheme.outline;
        ctx.fillStyle = hudColourScheme.infill;
        generateUIOverlay(0.05,0.14,0.39);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "30px Tahoma";
        ctx.fillText("Remove Mode",canvas.width/2,modeHeight);
    }

    if(settingRecipe){
        ctx.strokeStyle = hudColourScheme.outline;
        ctx.fillStyle = hudColourScheme.infill;
        generateUIOverlay(0.05,0.5,0.3);
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.5,canvas.height * 0.07);
        ctx.lineTo(canvas.width * 0.5,canvas.height * 0.53);
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "30px Tahoma";
        ctx.fillText("Set Recipe:",canvas.width*0.4,modeHeight + (canvas.width*0.01));
        ctx.font = "20px Tahoma";
        var number = 5;
        var visableOptions = recipes.filter(p => Math.abs(recipes.indexOf(p) - selectedBuilding) < number + (Math.max(0,number - 1 - selectedBuilding)));
        visableOptions.forEach(r => {
            var index = recipes.indexOf(r);
            if(selectedBuilding == index){
                ctx.fillStyle = hudColourScheme.dynamicText;
            } else {
                ctx.fillStyle = hudColourScheme.staticText;
            }
            if(r.product == "EXIT"){
                ctx.fillText(r.product,canvas.width*0.4,modeHeight + (canvas.width*0.01) + selectionHeight + (25 * visableOptions.indexOf(r)));
            } else {
                if(selectedBuilding == index){
                    ctx.font = "25px Tahoma";
                    r.items.forEach(i => ctx.fillText(i.value + " " + i.type, canvas.width*0.59, modeHeight + (canvas.width*0.01) + selectionHeight + (25 * r.items.indexOf(i))));
                    ctx.fillText(r.energy + " ENERGY", canvas.width*0.59, modeHeight + (canvas.width*0.01) + selectionHeight + (25 * r.items.length))
                }
                ctx.font = "20px Tahoma";
                ctx.fillText(r.product,canvas.width*0.4,modeHeight + (canvas.width*0.01) + selectionHeight + (25 * visableOptions.indexOf(r)));
            }
        });
    }


    if(selectingSell){
        ctx.strokeStyle = hudColourScheme.outline;
        ctx.fillStyle = hudColourScheme.infill;
        generateUIOverlay(0.05,0.5,0.4);
        ctx.font = "30px Tahoma";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("Sell Mode",canvas.width/2,modeHeight);
        ctx.font = "20px Tahoma";
        var number = 5;
        var options = prices.filter(p => playerResources.some(r => p.type == r.type && r.value >= p.ammount) || p.type == "EXIT");
        var visableOptions = options.filter(p => Math.abs(options.indexOf(p) - selectedSell) < number + (Math.max(0,number - 1 - selectedSell)));
        visableOptions.forEach(p => {
            var index = options.indexOf(p);
            if(selectedSell == index){
                ctx.fillStyle = hudColourScheme.dynamicText;
            } else {
                ctx.fillStyle = hudColourScheme.staticText;
            }
            if(p.type != "EXIT"){
                ctx.fillText(p.ammount + " " + p.type + " : ₿" + p.price * p.ammount,canvas.width/2,modeHeight + selectionHeight + (25 * visableOptions.indexOf(p)));
            } else {
                ctx.fillText(p.type ,canvas.width/2,modeHeight + selectionHeight + (25 * visableOptions.indexOf(p)));
            }
        });
    }

    if(buyingMode){
        ctx.strokeStyle = hudColourScheme.outline;
        ctx.fillStyle = hudColourScheme.infill;
        generateUIOverlay(0.05,0.5,0.2);
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.5,canvas.height * 0.07);
        ctx.lineTo(canvas.width * 0.5,canvas.height * 0.53);
        ctx.stroke();
        if(shopItems[selectedBuy].type != "EXIT"){
            ctx.beginPath();
            ctx.moveTo(canvas.width * 0.5,canvas.height * 0.46);
            ctx.lineTo(canvas.width * 0.78,canvas.height * 0.46);
            ctx.stroke();
        }
        ctx.font = "30px Tahoma";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("Buy Mode",canvas.width * 0.36,modeHeight);
        ctx.font = "20px Tahoma";
        var number = 5;
        var visableOptions = shopItems.filter(p => Math.abs(shopItems.indexOf(p) - selectedBuy) < number + (Math.max(0,number - 1 - selectedBuy)));
        visableOptions.forEach(i => {
            var index = shopItems.indexOf(i);
            if(selectedBuy == index){
                ctx.fillStyle = hudColourScheme.dynamicText;
            } else {
                ctx.fillStyle = hudColourScheme.staticText;
            }
            ctx.textAlign = "center"; 
            ctx.textBaseline = "middle";
            if(i.type != "EXIT"){
                ctx.font = "20px Tahoma";
                ctx.fillText(i.item ,canvas.width * 0.36,modeHeight + 20 + selectionHeight + (25 * visableOptions.indexOf(i)));
                if(selectedBuy == index){
                    ctx.fillText(i.type ,canvas.width * 0.65,modeHeight + 20);
                    ctx.fillText("₿" + selectedSellDisplayPrice.toLocaleString('en-US', {maximumFractionDigits: 0}) ,canvas.width * 0.64,canvas.height * 0.495);
                    ctx.font = "20px Tahoma";
                    ctx.textAlign = "start"; 
                    //ctx.textBaseline = "alphabetic";
                    i.desc.forEach(s => ctx.fillText(s ,canvas.width * 0.51,modeHeight + 20 + selectionHeight + (25 * i.desc.indexOf(s))));
                }
            } else {
                ctx.font = "20px Tahoma";
                ctx.fillText(i.type ,canvas.width * 0.36,modeHeight + 20 + selectionHeight + (25 * visableOptions.indexOf(i)));
            }
        });
        selectedSellDisplayPrice = lerp(shopItems[selectedBuy].cost,selectedSellDisplayPrice,(frameSpeedFactor/80));
    }

    ctx.textAlign = "center"; 
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "20px Tahoma";
    ctx.fillText("JMC",canvas.width * 0.05,canvas.height * 0.14);
    drawLogo(canvas.width * 0.05,canvas.height * 0.070,50);
    if(!endlessMode){
        ctx.fillText("Daily Quota:",canvas.width * 0.05,canvas.height * 0.22);
    } else {
        ctx.fillText("Endless",canvas.width * 0.05,canvas.height * 0.22);
        ctx.fillText("Mode",canvas.width * 0.05,25 + canvas.height * 0.22);
    }
    ctx.font = "25px Tahoma";
    ctx.fillText("₿" + playerBalanceDisplayed.toLocaleString('en-US', {maximumFractionDigits: 0}) ,canvas.width * 0.05,canvas.height * 0.18);
    playerBalanceDisplayed = lerp(playerBalance,playerBalanceDisplayed,(frameSpeedFactor/100));
    if(!endlessMode){
        if(playerBalance >= quotas[sols]){
            ctx.fillStyle = "#00FF00";
        } else if(time > 300 && Math.trunc(time) % 2 == 0){
            ctx.fillStyle = "#FF0000";
        }
        ctx.fillText("₿" + quotas[sols].toLocaleString('en-US', {maximumFractionDigits: 0}) ,canvas.width * 0.05,canvas.height * 0.26);
    }

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "15px Tahoma";
    var batteryStatusHeight = 0.45;
    drawBattery(canvas.width * 0.02,canvas.height * batteryStatusHeight,100,playerEnergy/playerMaxEnergy);
    if(hudSwap){
        ctx.fillStyle = "#FF0000";
    }
    ctx.fillText("Battery",canvas.width * 0.07,canvas.height * (batteryStatusHeight - 0.13));
    ctx.fillText("Status:",canvas.width * 0.07,canvas.height * (batteryStatusHeight - 0.11));
    var percentEnergy = playerEnergy/playerMaxEnergy;
    ctx.font = "12px Tahoma";
    ctx.fillText(batteryStatusMessage,canvas.width * 0.07,canvas.height * (batteryStatusHeight - 0.09));
    ctx.fillStyle = "#FFFFFF";
    if(tiles.find(t => t.hasPlayer).hazard > 0){
        ctx.font = "50px Tahoma";
        ctx.fillText("☢",canvas.width * 0.07,canvas.height * (batteryStatusHeight - 0.032));
    }
    if(percentEnergy > 0.6){
        batteryStatusMessage = "Nominal";
        hudFlash = false;
    } else if(percentEnergy > 0.4) {
        batteryStatusMessage = "Satisfactory";
        hudFlash = false;
    } else if(percentEnergy > 0.3) {
        batteryStatusMessage = "Low";
        hudFlash = false;
        hudFlashTimer = 0;
    } else if(playerEnergy <= 15 && playerEnergy > 10) {
        batteryStatusMessage = "Very Low";
        hudFlash = true;
        hudFlashTimer += (frameSpeedFactor/400);
    } else if(playerEnergy <= 10 && playerEnergy > 5) {
        batteryStatusMessage = "Critical";
        hudFlash = true;
        hudFlashTimer += (frameSpeedFactor/150);
    } else if(playerEnergy <= 5) {
        batteryStatusMessage = "Deadly";
        hudFlash = true;
        hudFlashTimer += (frameSpeedFactor/50);
    };
}

function handleTileUpdates(t) {
    var infoX = canvas.width * 0.85;
    var infoY = canvas.height * 0.45;
    var infoStep = 20;
    ctx.lineWidth = 2;
    ctx.textAlign = "start"; 
    ctx.textBaseline = "alphabetic";
    switch(t.building.type){
        case "SOLAR":
            var totalEnergy = solarOutput * Math.max(0.25,Math.sin(time * Math.PI/180));
            if(t.hasPlayer && playerEnergy < playerMaxEnergy){
                playerEnergy = Math.min(playerMaxEnergy,playerEnergy + totalEnergy * (frameSpeedFactor/1000));
            } else {
            var surrounding = getSurroundingTiles(t).filter(tt => tt.building.energy != null).filter(tt => tt.building.energy != tt.building.maxEnergy);
            var induvidualEnergy = (totalEnergy / surrounding.length) * (frameSpeedFactor/1000);
            surrounding.forEach(tt => {
                if(tt.building.energy + induvidualEnergy >= tt.building.maxEnergy){
                    tt.building.energy = tt.building.maxEnergy;
                } else {
                    tt.building.energy += induvidualEnergy;
                }
            });
            }
            if(t.hasPlayer && !escMenu){
                ctx.textAlign = "center"; 
                ctx.fillText("⚡",(infoX + 9) ,infoY + infoStep);
                drawBattery(infoX,infoY + (infoStep*2) + canvas.height * 0.08,canvas.height * 0.1,Math.min(1,totalEnergy/solarOutput));
            }
            break;
        case "CONSTRUCTOR":
            if(t.building.recipe != null){
                if(t.building.crafting){
                    t.building.craftTimer += (frameSpeedFactor/10000) * craftSpeed;
                    if(t.building.craftTimer >= 1){
                        if(constructorTransmit){
                            addToPlayerBuildings(t.building.recipe.product,1);
                            t.building.recipe = null;
                            playerTile.building.craftTimer = 0;
                        } else {
                            t.building.storedProduct = true;
                        }
                        t.building.crafting = false;
                    }
                }
            }
            if(t.hasPlayer && !escMenu){
                ctx.fillText("Recipe: " + (t.building.recipe != undefined ? t.building.recipe.product : "None") ,infoX,infoY);
                ctx.textAlign = "center"; 
                ctx.fillText("⚡",(infoX + 9) ,infoY + infoStep);
                if(t.building.storedProduct){
                    ctx.fillStyle = "#00FF00";
                }
                ctx.fillText("%",(19 + infoX) + (canvas.height * 0.1) * 0.25,infoY + infoStep);
                drawBattery(infoX,infoY + (infoStep*2) + canvas.height * 0.08,canvas.height * 0.1,Math.min(1,t.building.energy/t.building.maxEnergy));
                drawBattery(10 + infoX + (canvas.height * 0.1) * 0.25, infoY + (infoStep*2) + canvas.height * 0.08,canvas.height * 0.1,Math.min(1,t.building.craftTimer));
            }
            break;
        case "MINER":
            if(!t.building.mining){
                if(t.building.energy >= 1 && t.resource.type != "NONE" && t.building.storedResource < t.building.maxStored){
                    t.building.energy -= 1;
                    t.building.mining = true;
                }
            } else {
                t.building.mineTimer += (frameSpeedFactor/25000) * mineSpeed;
                if(t.building.mineTimer >= 1){
                    t.building.storedResource = Math.min(t.building.maxStored, t.building.storedResource + minerFactor);
                    mineTile(t);
                    t.building.mining = false;
                    t.building.mineTimer = 0;
                }
            }
            if(minerTransmit){
                t.building.storedResource -= addToPlayerResources(t.building.storedType,t.building.storedResource,false);
            }
            if(t.hasPlayer && !escMenu){
                ctx.textAlign = "center";
                ctx.fillText("⚡",(infoX + 9) ,infoY + infoStep);
                ctx.fillText("%",(19 + infoX) + (canvas.height * 0.1) * 0.25,infoY + infoStep);
                ctx.fillText("⨆",(29 + infoX) + (canvas.height * 0.1) * 0.5,infoY + infoStep);
                drawBattery(infoX,infoY + (infoStep*2) + canvas.height * 0.08,canvas.height * 0.1,Math.min(1,t.building.energy/t.building.maxEnergy));
                drawBattery(10 + infoX + (canvas.height * 0.1) * 0.25, infoY + (infoStep*2) + canvas.height * 0.08,canvas.height * 0.1,Math.min(1,t.building.mineTimer));
                drawBattery(20 + infoX + (canvas.height * 0.1) * 0.5, infoY + (infoStep*2) + canvas.height * 0.08,canvas.height * 0.1,Math.min(1,t.building.storedResource/t.building.maxStored));
            }
            break;
        case "BATTERY":
            var surrounding = getSurroundingTiles(t).filter(tt => tt.building.energy != null).filter(tt => tt.building.energy != tt.building.maxEnergy);
            var surroundingBatteries = surrounding.filter(tt => tt.building.type == "BATTERY").filter(tt => tt.building.energy + 1 < t.building.energy);
            var surroundingOther = surrounding.filter(tt => tt.building.type != "BATTERY");
            if(t.building.discharging){
                t.building.dischargeTimer += (frameSpeedFactor/10000) * batteryDischarge;
                if(surrounding.length == 0){
                    t.building.dischargeTimer = 0;
                    t.building.discharging = false;
                    t.building.energy = Math.min(t.building.energy + 1,t.building.maxEnergy);
                }
                if(t.building.dischargeTimer >= 1){
                    t.building.dischargeTimer = 0;
                    t.building.discharging = false;

                    if(surroundingOther.length > 0){
                        surroundingOther.forEach(tt => tt.building.energy += 1/surroundingOther.length);
                    } else if(surroundingBatteries.length > 0){
                        surroundingBatteries.forEach(tt => tt.building.energy += 1/surroundingBatteries.length);
                    }
                }
            } else {
                if(t.building.energy >= 1 && (surroundingOther.length > 0 || surroundingBatteries.length > 0 )){
                    t.building.energy -= 1;
                    t.building.discharging = true;
                }
            }
            if(t.hasPlayer && !escMenu){
                ctx.textAlign = "center"; 
                ctx.fillText("⚡",(infoX + 9) ,infoY + infoStep);
                ctx.fillText("%",(19 + infoX) + (canvas.height * 0.1) * 0.25,infoY + infoStep);
                drawBattery(infoX,infoY + (infoStep*2) + canvas.height * 0.08,canvas.height * 0.1,Math.min(1,t.building.energy/t.building.maxEnergy));
                drawBattery(10 + infoX + (canvas.height * 0.1) * 0.25, infoY + (infoStep*2) + canvas.height * 0.08,canvas.height * 0.1,Math.min(1,t.building.dischargeTimer));
            }
            break;
        case "RTG":
            if(t.hasPlayer && playerEnergy < playerMaxEnergy){
                playerEnergy = Math.min(playerMaxEnergy,playerEnergy + RTGOutput * (frameSpeedFactor/1000));
            } else {
                var surrounding = getSurroundingTiles(t).filter(tt => tt.building.energy != null).filter(tt => tt.building.energy != tt.building.maxEnergy);
                var induvidualEnergy = (RTGOutput / surrounding.length) * (frameSpeedFactor/1000);
                surrounding.forEach(tt => {
                    if(tt.building.energy + induvidualEnergy >= tt.building.maxEnergy){
                        tt.building.energy = tt.building.maxEnergy;
                    } else {
                        tt.building.energy += induvidualEnergy;
                    }
                });
            }
            break;
        case "GENERATOR":
            if(t.building.generatingTimer >= 1){
                if(t.hasPlayer && playerEnergy < playerMaxEnergy){
                    playerEnergy = Math.min(playerMaxEnergy,playerEnergy + generatorOutput);
                } else {
                    var surrounding = getSurroundingTiles(t).filter(tt => tt.building.energy != null).filter(tt => tt.building.energy != tt.building.maxEnergy);
                    var induvidualEnergy = (generatorOutput / surrounding.length);
                    surrounding.forEach(tt => {
                        if(tt.building.energy + induvidualEnergy >= tt.building.maxEnergy){
                            tt.building.energy = tt.building.maxEnergy;
                        } else {
                            tt.building.energy += induvidualEnergy;
                        }
                    });
                }
                t.building.generatingTimer = 0;
                t.building.generating = false;
            } else if(t.building.generatingTimer < 1 && t.building.generating){
                t.building.generatingTimer += (frameSpeedFactor/800);
            } else if(t.building.coal >= 1 && ((t.hasPlayer && playerEnergy < playerMaxEnergy) || (getSurroundingTiles(t).filter(tt => tt.building.energy != null).filter(tt => tt.building.energy != tt.building.maxEnergy).length > 0))){
                t.building.coal -= 1;
                t.building.generatingTimer = 0;
                t.building.generating = true;
            }
            if(t.hasPlayer){
                ctx.textAlign = "center"; 
                ctx.fillText("⨆",(infoX + 9) ,infoY + infoStep);
                ctx.fillText("%",(19 + infoX) + (canvas.height * 0.1) * 0.25,infoY + infoStep);
                drawBattery(infoX,infoY + (infoStep*2) + canvas.height * 0.08,canvas.height * 0.1,Math.min(1,t.building.coal/t.building.maxCoal));
                drawBattery(10 + infoX + (canvas.height * 0.1) * 0.25, infoY + (infoStep*2) + canvas.height * 0.08,canvas.height * 0.1,Math.min(1,t.building.generatingTimer));
            }
            break;
    }
}

function exploreMode(){
    playerDrainRate = 0;
    playerMaxEnergy = 10000000000;
    playerEnergy = 10000000000;
    tiles.forEach(t => t.isVisible = true);
    playerSpeed = 5;
}

document.addEventListener('keydown', (event) => {
    switch(event.keyCode){
        case 87:
            inputs.up = true;
            break;
        case 83:
            inputs.down = true;
            break;
        case 68:
            inputs.right = true;
            break;
        case 65:
            inputs.left = true;
            break;
        case 69:
            inputs.inter = true;
            break;
        case 32:
            inputs.inter = true;
            break;
        case 66:
            inputs.build = true;
            break;
        case 82:
            inputs.remove = true;
            break;
        case 27:
            inputs.esc = true;
            break;
        case 16:
            inputs.speve = true;
            break;
    }
});
document.addEventListener('keyup', (event) => {
    switch(event.keyCode){
        case 87:
            inputs.up = false;
            break;
        case 83:
            inputs.down = false;
            break;
        case 68:
            inputs.right = false;
            break;
        case 65:
            inputs.left = false;
            break;
        case 69:
            inputs.inter = false;
            break;
        case 32:
            inputs.inter = false;
            break;
        case 66:
            inputs.build = false;
            break;
        case 82:
            inputs.remove = false;
            break;
        case 27:
            inputs.esc = false;
            break;
        case 16:
            inputs.speve = false;
            break;
    }
});

setInterval(gameloop,50);
document.onmousemove = (e) => mousePosition = {x:e.clientX - canvas.getBoundingClientRect().left,y:e.clientY - canvas.getBoundingClientRect().top};