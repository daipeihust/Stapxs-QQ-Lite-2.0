"use strict";(self["webpackChunkstapxs_qq_lite"]=self["webpackChunkstapxs_qq_lite"]||[]).push([[377],{1377:function(t,e,s){s.r(e),s.d(e,{default:function(){return Ot}});var n=s(3396),a=s(7139),r=s(9242);const i={id:"shell-pan",class:"shell-pan"},o=["onClick"],h=["onClick"],c=["id","data-get"],p=(0,n._)("br",null,null,-1),d={key:1},l={key:0,style:{color:"yellow"}},u={style:{color:"yellow",opacity:"0.7"}},b={key:2},g={class:"line-head"},f={class:"time"},m=(0,n._)("span",{class:"c1"},"",-1),y={class:"name"},v=(0,n._)("span",{class:"c2"},"",-1),w={class:"dir"},_={key:0,class:"dir",style:{background:"var(--color-main)",color:"var(--color-font-r)"}},k=(0,n._)("span",{class:"c3",style:{color:"var(--color-main)"}},"",-1),x=(0,n._)("a",{class:"command-start"},"$ ",-1),C={key:3},M=["innerHTML"],S={class:"shell-input"},I={class:"line-head"},L={class:"time"},D=(0,n._)("span",{class:"c1"},"",-1),H={class:"name"},A=(0,n._)("span",{class:"c2"},"",-1),O={class:"dir"},q={key:0,class:"dir",style:{background:"var(--color-main)",color:"var(--color-font-r)"}},F=(0,n._)("span",{class:"c3",style:{color:"var(--color-main)"}},"",-1),R=(0,n._)("a",{class:"command-start"},"$ ",-1);function E(t,e,s,E,T,B){return(0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)("chat-pan"+(t.runtimeData.tags.openSideBar?" open":"")),id:"chat-pan"},[(0,n._)("div",i,[(0,n._)("div",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.runtimeData.messageList,(e=>((0,n.wg)(),(0,n.iD)(n.HY,{key:e.message_id},["message"==e.post_type?((0,n.wg)(),(0,n.iD)("div",{key:0,style:{cursor:"pointer"},class:(0,a.C_)("shell-msg"+(e.revoke?" revoke":""))},[(0,n._)("span",{onClick:s=>t.copy(e.sender.user_id),class:(0,a.C_)("sname s"+e.sender.role+(t.runtimeData.loginInfo.uin==e.sender.user_id?" smine":""))},(0,a.zw)(e.sender.card?e.sender.card:e.sender.nickname)+(0,a.zw)("friend"==e.sub_type?t.runtimeData.loginInfo.uin==e.sender.user_id?t.runtimeData.loginInfo.nickname:t.runtimeData.chatInfo.show.name:"")+(0,a.zw)(0==e.sender.user_id?"":": "),11,o),(0,n._)("span",{class:"smsg",onClick:s=>t.copy(e.message_id)},(0,a.zw)(e.raw_message),9,h),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.message,((s,a)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:e.message_id+"-"+a.toString()},["image"==s.type?(0,n.wy)(((0,n.wg)(),(0,n.iD)("pre",{key:0,id:"img-"+e.message_id+"-"+a.toString(),"data-get":t.makeAscii("img-"+e.message_id+"-"+a.toString(),s.url)},null,8,c)),[[r.F8,t.tags.showImg]]):(0,n.kq)("",!0)],64)))),128)),p],2)):"notice"==e.post_type?((0,n.wg)(),(0,n.iD)("div",d,["recall"==e.sub_type?((0,n.wg)(),(0,n.iD)("span",l,[(0,n.Uk)(":: "),(0,n._)("span",u,(0,a.zw)(t.getRecallName(e.operator_id)),1),(0,n.Uk)(" recalled a message.")])):(0,n.kq)("",!0)])):e.commandLine?((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",g,[(0,n._)("span",f,(0,a.zw)(e.time.time),1),m,(0,n._)("span",y,(0,a.zw)(t.runtimeData.loginInfo.nickname)+"@sql-vue",1),v,(0,n._)("span",w,(0,a.zw)(e.dir),1),(0,n._)("span",{class:(0,a.C_)("c3"+(Object.keys(e.data).length>0?" c3bg":""))},"",2),Object.keys(e.data).length>0?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[e.data.reply?((0,n.wg)(),(0,n.iD)("span",_,(0,a.zw)(e.data.reply?"reply":""),1)):(0,n.kq)("",!0),k],64)):(0,n.kq)("",!0)]),x,(0,n._)("span",null,(0,a.zw)(e.str),1)])):e.commandOut?((0,n.wg)(),(0,n.iD)("div",C,[e.html?((0,n.wg)(),(0,n.iD)("div",{key:0,innerHTML:e.html},null,8,M)):((0,n.wg)(),(0,n.iD)("span",{key:1,style:(0,a.j5)("color:"+e.color)},(0,a.zw)(e.str),5))])):(0,n.kq)("",!0)],64)))),128))]),(0,n._)("div",S,[(0,n._)("div",I,[(0,n._)("span",L,(0,a.zw)(t.timeShow),1),D,(0,n._)("span",H,(0,a.zw)(t.runtimeData.loginInfo.nickname)+"@sql-vue",1),A,(0,n._)("span",O,(0,a.zw)(t.runtimeData.chatInfo.show.name),1),(0,n._)("span",{class:(0,a.C_)("c3"+(Object.keys(t.tags.cmdTags).length>0?" c3bg":""))},"",2),Object.keys(t.tags.cmdTags).length>0?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[t.tags.cmdTags.reply?((0,n.wg)(),(0,n.iD)("span",q,(0,a.zw)(t.tags.cmdTags.reply?"reply":""),1)):(0,n.kq)("",!0),F],64)):(0,n.kq)("",!0)]),R,(0,n.wy)((0,n._)("input",{onKeyup:e[0]||(e[0]=(...e)=>t.sendMsg&&t.sendMsg(...e)),"onUpdate:modelValue":e[1]||(e[1]=e=>t.msg=e),onPaste:e[2]||(e[2]=(...e)=>t.addImg&&t.addImg(...e))},null,544),[[r.nr,t.msg]])])])],2)}s(7658),s(541);var T=s(6588),B=s(1740),z=s(4147),N=s(1960);function $(t,e){P(t)&&(t="100%");var s=W(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),s&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e)),t)}function j(t){return Math.min(1,Math.max(0,t))}function P(t){return"string"===typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)}function W(t){return"string"===typeof t&&-1!==t.indexOf("%")}function Q(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Y(t){return t<=1?"".concat(100*Number(t),"%"):t}function U(t){return 1===t.length?"0"+t:String(t)}function X(t,e,s){return{r:255*$(t,255),g:255*$(e,255),b:255*$(s,255)}}function Z(t,e,s){t=$(t,255),e=$(e,255),s=$(s,255);var n=Math.max(t,e,s),a=Math.min(t,e,s),r=0,i=0,o=(n+a)/2;if(n===a)i=0,r=0;else{var h=n-a;switch(i=o>.5?h/(2-n-a):h/(n+a),n){case t:r=(e-s)/h+(e<s?6:0);break;case e:r=(s-t)/h+2;break;case s:r=(t-e)/h+4;break;default:break}r/=6}return{h:r,s:i,l:o}}function K(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+6*s*(e-t):s<.5?e:s<2/3?t+(e-t)*(2/3-s)*6:t}function V(t,e,s){var n,a,r;if(t=$(t,360),e=$(e,100),s=$(s,100),0===e)a=s,r=s,n=s;else{var i=s<.5?s*(1+e):s+e-s*e,o=2*s-i;n=K(o,i,t+1/3),a=K(o,i,t),r=K(o,i,t-1/3)}return{r:255*n,g:255*a,b:255*r}}function G(t,e,s){t=$(t,255),e=$(e,255),s=$(s,255);var n=Math.max(t,e,s),a=Math.min(t,e,s),r=0,i=n,o=n-a,h=0===n?0:o/n;if(n===a)r=0;else{switch(n){case t:r=(e-s)/o+(e<s?6:0);break;case e:r=(s-t)/o+2;break;case s:r=(t-e)/o+4;break;default:break}r/=6}return{h:r,s:h,v:i}}function J(t,e,s){t=6*$(t,360),e=$(e,100),s=$(s,100);var n=Math.floor(t),a=t-n,r=s*(1-e),i=s*(1-a*e),o=s*(1-(1-a)*e),h=n%6,c=[s,i,r,r,o,s][h],p=[o,s,s,i,r,r][h],d=[r,r,o,s,s,i][h];return{r:255*c,g:255*p,b:255*d}}function tt(t,e,s,n){var a=[U(Math.round(t).toString(16)),U(Math.round(e).toString(16)),U(Math.round(s).toString(16))];return n&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function et(t,e,s,n,a){var r=[U(Math.round(t).toString(16)),U(Math.round(e).toString(16)),U(Math.round(s).toString(16)),U(st(n))];return a&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function st(t){return Math.round(255*parseFloat(t)).toString(16)}function nt(t){return at(t)/255}function at(t){return parseInt(t,16)}function rt(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}var it={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ot(t){var e={r:0,g:0,b:0},s=1,n=null,a=null,r=null,i=!1,o=!1;return"string"===typeof t&&(t=bt(t)),"object"===typeof t&&(gt(t.r)&&gt(t.g)&&gt(t.b)?(e=X(t.r,t.g,t.b),i=!0,o="%"===String(t.r).substr(-1)?"prgb":"rgb"):gt(t.h)&&gt(t.s)&&gt(t.v)?(n=Y(t.s),a=Y(t.v),e=J(t.h,n,a),i=!0,o="hsv"):gt(t.h)&&gt(t.s)&&gt(t.l)&&(n=Y(t.s),r=Y(t.l),e=V(t.h,n,r),i=!0,o="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(s=t.a)),s=Q(s),{ok:i,format:t.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:s}}var ht="[-\\+]?\\d+%?",ct="[-\\+]?\\d*\\.\\d+%?",pt="(?:".concat(ct,")|(?:").concat(ht,")"),dt="[\\s|\\(]+(".concat(pt,")[,|\\s]+(").concat(pt,")[,|\\s]+(").concat(pt,")\\s*\\)?"),lt="[\\s|\\(]+(".concat(pt,")[,|\\s]+(").concat(pt,")[,|\\s]+(").concat(pt,")[,|\\s]+(").concat(pt,")\\s*\\)?"),ut={CSS_UNIT:new RegExp(pt),rgb:new RegExp("rgb"+dt),rgba:new RegExp("rgba"+lt),hsl:new RegExp("hsl"+dt),hsla:new RegExp("hsla"+lt),hsv:new RegExp("hsv"+dt),hsva:new RegExp("hsva"+lt),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function bt(t){if(t=t.trim().toLowerCase(),0===t.length)return!1;var e=!1;if(it[t])t=it[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var s=ut.rgb.exec(t);return s?{r:s[1],g:s[2],b:s[3]}:(s=ut.rgba.exec(t),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=ut.hsl.exec(t),s?{h:s[1],s:s[2],l:s[3]}:(s=ut.hsla.exec(t),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=ut.hsv.exec(t),s?{h:s[1],s:s[2],v:s[3]}:(s=ut.hsva.exec(t),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=ut.hex8.exec(t),s?{r:at(s[1]),g:at(s[2]),b:at(s[3]),a:nt(s[4]),format:e?"name":"hex8"}:(s=ut.hex6.exec(t),s?{r:at(s[1]),g:at(s[2]),b:at(s[3]),format:e?"name":"hex"}:(s=ut.hex4.exec(t),s?{r:at(s[1]+s[1]),g:at(s[2]+s[2]),b:at(s[3]+s[3]),a:nt(s[4]+s[4]),format:e?"name":"hex8"}:(s=ut.hex3.exec(t),!!s&&{r:at(s[1]+s[1]),g:at(s[2]+s[2]),b:at(s[3]+s[3]),format:e?"name":"hex"})))))))))}function gt(t){return Boolean(ut.CSS_UNIT.exec(String(t)))}var ft=function(){function t(e,s){var n;if(void 0===e&&(e=""),void 0===s&&(s={}),e instanceof t)return e;"number"===typeof e&&(e=rt(e)),this.originalInput=e;var a=ot(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(n=s.format)&&void 0!==n?n:a.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t,e,s,n=this.toRgb(),a=n.r/255,r=n.g/255,i=n.b/255;return t=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),e=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),s=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4),.2126*t+.7152*e+.0722*s},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=Q(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var t=this.toHsl().s;return 0===t},t.prototype.toHsv=function(){var t=G(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=G(this.r,this.g,this.b),e=Math.round(360*t.h),s=Math.round(100*t.s),n=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(s,"%, ").concat(n,"%)"):"hsva(".concat(e,", ").concat(s,"%, ").concat(n,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=Z(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=Z(this.r,this.g,this.b),e=Math.round(360*t.h),s=Math.round(100*t.s),n=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(s,"%, ").concat(n,"%)"):"hsla(".concat(e,", ").concat(s,"%, ").concat(n,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),tt(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),et(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),s=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(s,")"):"rgba(".concat(t,", ").concat(e,", ").concat(s,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*$(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*$(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+tt(this.r,this.g,this.b,!1),e=0,s=Object.entries(it);e<s.length;e++){var n=s[e],a=n[0],r=n[1];if(t===r)return a}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!==t&&void 0!==t?t:this.format;var s=!1,n=this.a<1&&this.a>=0,a=!e&&n&&(t.startsWith("hex")||"name"===t);return a?"name"===t&&0===this.a?this.toName():this.toRgbString():("rgb"===t&&(s=this.toRgbString()),"prgb"===t&&(s=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(s=this.toHexString()),"hex3"===t&&(s=this.toHexString(!0)),"hex4"===t&&(s=this.toHex8String(!0)),"hex8"===t&&(s=this.toHex8String()),"name"===t&&(s=this.toName()),"hsl"===t&&(s=this.toHslString()),"hsv"===t&&(s=this.toHsvString()),s||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var s=this.toHsl();return s.l+=e/100,s.l=j(s.l),new t(s)},t.prototype.brighten=function(e){void 0===e&&(e=10);var s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(-e/100*255))),s.g=Math.max(0,Math.min(255,s.g-Math.round(-e/100*255))),s.b=Math.max(0,Math.min(255,s.b-Math.round(-e/100*255))),new t(s)},t.prototype.darken=function(e){void 0===e&&(e=10);var s=this.toHsl();return s.l-=e/100,s.l=j(s.l),new t(s)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var s=this.toHsl();return s.s-=e/100,s.s=j(s.s),new t(s)},t.prototype.saturate=function(e){void 0===e&&(e=10);var s=this.toHsl();return s.s+=e/100,s.s=j(s.s),new t(s)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var s=this.toHsl(),n=(s.h+e)%360;return s.h=n<0?360+n:n,new t(s)},t.prototype.mix=function(e,s){void 0===s&&(s=50);var n=this.toRgb(),a=new t(e).toRgb(),r=s/100,i={r:(a.r-n.r)*r+n.r,g:(a.g-n.g)*r+n.g,b:(a.b-n.b)*r+n.b,a:(a.a-n.a)*r+n.a};return new t(i)},t.prototype.analogous=function(e,s){void 0===e&&(e=6),void 0===s&&(s=30);var n=this.toHsl(),a=360/s,r=[this];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,r.push(new t(n));return r},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);var s=this.toHsv(),n=s.h,a=s.s,r=s.v,i=[],o=1/e;while(e--)i.push(new t({h:n,s:a,v:r})),r=(r+o)%1;return i},t.prototype.splitcomplement=function(){var e=this.toHsl(),s=e.h;return[this,new t({h:(s+72)%360,s:e.s,l:e.l}),new t({h:(s+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var s=this.toRgb(),n=new t(e).toRgb();return new t({r:n.r+(s.r-n.r)*s.a,g:n.g+(s.g-n.g)*s.a,b:n.b+(s.b-n.b)*s.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var s=this.toHsl(),n=s.h,a=[this],r=360/e,i=1;i<e;i++)a.push(new t({h:(n+i*r)%360,s:s.s,l:s.l}));return a},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();var mt=(t=>"undefined"!==typeof require?require:"undefined"!==typeof Proxy?new Proxy(t,{get:(t,e)=>("undefined"!==typeof require?require:t)[e]}):t)((function(t){if("undefined"!==typeof require)return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')})),yt=6,vt=12,wt="@#&$%863!i1uazvno~;*^+-. ";function _t(t,e=wt){const s=255/e.length;let n=Math.floor(t/s);return n>=e.length&&(n=e.length-1),e[n]}function kt(t,e=wt){const s=t.data,n=t.width,a=t.height,r=[];for(let i=0;i<a;i+=vt){let t="";for(let a=0;a<n;a+=yt){const r=4*(a+n*i),o=new ft({r:s[r],g:s[r+1],b:s[r+2]});t+=_t(o.getBrightness(),e)}r.push(t)}return r}function xt(t){let e;if(document)e=document.createElement("canvas");else{if(!mt("canvas"))return void console.warn("If you use it in Node.js without document, you need `npm install canvas`.");{const{createCanvas:s}=mt("canvas");e=s(t.width,t.height)}}const s=e.getContext("2d"),n=t.width/t.naturalWidth;e.width=t.width,e.height=t.height,s.scale(n,n),s.drawImage(t,0,0);const a=s.getImageData(0,0,t.width,t.height);return a}var Ct=s(285),Mt=s(4870),St=s(8007),It=s(840),Lt=s(9129),Dt=(0,n.aZ)({name:"ChatShell",props:["chat","list","mergeList","mumberInfo"],data(){return{tags:{fullscreen:!1,fistget:!0,cmdTags:{},showImg:!1},popInfo:new Lt.cH,packageInfo:z,runMode:"production",timeLoad:(0,Mt.Xl)({time:Intl.DateTimeFormat((0,It.Ex)(),{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date)}),runtimeData:St._1,trueLang:(0,It.Ex)(),timeShow:"",timeSetter:void 0,msg:"",supportCmd:{},imgCache:[],sendCache:[],searchListCache:[],asciiCache:{}}},methods:{scrollTo(t,e=!0){const s=document.getElementById("shell-pan");null!==s&&t&&(s.style.scrollBehavior=!1===e?"unset":"smooth",s.scrollTop=t,s.style.scrollBehavior="smooth")},scrollBottom(t=!1){const e=document.getElementById("shell-pan");null!==e&&this.scrollTo(e.scrollHeight+40,t)},updateList(t,e){this.tags.fistget&&0==e&&(this.tags.fistget=!1,this.addCommandOutF(":: joining chat ..","yellow"),this.addCommandLineF("cd "+St._1.chatInfo.show.id,St._1.chatInfo.show.type),this.addCommandOutF('* Stapxs QQ Lite 2.0 Shell Theme requires "FiraCode Nerd Font" to display complete command line symbols, please ensure the device has installed this font.\n\n* Use the command "fullscreen" or return to the parent directory to exit the full screen mode.\n\n\n',"var(--color-font)"),this.addCommandOutF(`Welcome to Stapxs QQ Lite ${z.version} (Vue ${z.dependencies.vue}-${this.runMode})\n\n`,"var(--color-font)")),this.scrollBottom(!0)},showPop(t,e){if(t>e){const t=Lt.e$[Lt.e$.length-1];t.svg==Lt.rH.ERR?this.addCommandOut("::"+t.text,"red"):this.addCommandOut("::"+t.text,"yellow")}},addCommandOut(t,e="var(--color-font-2)",s){St._1.messageList.push({commandOut:!0,color:e,str:t,html:s})},addCommandOutF(t,e="var(--color-font-2)",s){St._1.messageList.unshift({commandOut:!0,color:e,str:t,html:s})},addCommandLine(t,e=St._1.chatInfo.show.name,s={}){St._1.messageList.push({dir:e,commandLine:!0,str:t,time:(0,Mt.Xl)({time:Intl.DateTimeFormat((0,It.Ex)(),{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date)}),data:s})},addCommandLineF(t,e=St._1.chatInfo.show.name){St._1.messageList.unshift({dir:e,commandLine:!0,str:t,time:(0,Mt.Xl)({time:Intl.DateTimeFormat((0,It.Ex)(),{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date)}),data:{}})},sendMsg(t){if(13===t.keyCode&&""!=this.msg){this.addCommandLine(this.msg,St._1.chatInfo.show.name,this.tags.cmdTags);const t=this.msg.split(" ");(new Lt.Yd).add(Lt.hi.DEBUG,"CMD: "+t.toString()),t.length>0&&this.supportCmd[t[0]]?(this.supportCmd[t[0]].fun(this.msg,t),this.msg=""):this.addCommandOut("stsh: command not found, use the help command to view all available commands.","red"),this.scrollBottom(),this.tags.cmdTags={},this.sendCache.filter((t=>"reply"===t.type)).length>0&&(this.tags.cmdTags.reply=!0)}},copy(t){T.Z.config.globalProperties.$copyText(t).then((()=>{this.popInfo.add(Lt.rH.INFO,"copy messageId successfully",!0)}),(t=>{this.popInfo.add(Lt.rH.ERR,"copy messageId failed",!0)}))},addSpecialMsg(t){if(void 0!==t){const e=this.sendCache.length;return this.sendCache.push(t.msgObj),!0===t.addText&&(!0===t.addTop?this.msg="[SQ:"+e+"]"+this.msg:this.msg+="[SQ:"+e+"]"),e}return-1},makeAscii(t,e){if(!this.asciiCache[t]){const s=e=>{e=e.data;const s="data:"+e.headers["content-type"]+";base64,"+e.data,n=document.createElement("img");n.src=s;const a=xt(n),r=kt(a);this.asciiCache[t]="test";const i=document.getElementById(t);if(i){let t="";r.forEach((e=>{t+=e+"\n"}));const e=document.getElementById("chat-pan");if(e){let t=e.offsetWidth/r[0].length;t<1&&(t=1),t>7&&(t=7),i.style.fontSize=Math.ceil(t)+"px",i.style.lineHeight=Math.ceil(t)+1+"px"}i.innerHTML=t}};return St.XP.getImgAscii=s,Ct.wR.send("http_proxy",{url:e,responseEncoding:"base64"},"getImgAscii"),"get"}return"has"},getRecallName(t){let e=t.toString();if("group"===St._1.chatInfo.show.type){if(void 0!==St._1.chatInfo.info.group_members){const s=St._1.chatInfo.info.group_members.filter((e=>e.user_id===Number(t)));1===s.length&&(e=""===s[0].card?s[0].nickname:s[0].card)}}else e=St._1.chatInfo.show.name;return e},addImg(t){if(t.clipboardData&&t.clipboardData.items)for(let e=0,s=t.clipboardData.items.length;e<s;e++){let s=t.clipboardData.items[e];"file"===s.kind&&(this.setImg(s.getAsFile()),t.preventDefault())}},setImg(t){const e=new Lt.cH;if(null!==t&&t.type.indexOf("image/")>=0&&0!==t.size)if(t.size<3145728){var s=new FileReader;s.readAsDataURL(t),s.onloadend=()=>{var t=s.result;if(null!==t)if(!0===N.ZP.get("close_chat_pic_pan")){const e={addText:!0,msgObj:{type:"image",file:"base64://"+t.substring(t.indexOf("base64,")+7,t.length)}};this.addSpecialMsg(e)}else this.imgCache.push(t)}}else e.add(Lt.rH.INFO,this.$t("pop_chat_image_toooo_big"))}},watch:{chat(){this.tags.fistget=!0,this.tags.cmdTags={}}},mounted(){this.supportCmd={help:{info:"Show All Command.",fun:()=>{let t="";Object.keys(this.supportCmd).forEach((e=>{""!=e&&(t+='<span style="color: var(--color-font-2);"><span style="width: 13ch;display: inline-block;">'+e+"</span>: "+this.supportCmd[e].info+"</span><br>")})),this.addCommandOut("","",t)}},ls:{info:"List all contacts in the current message queue.",fun:()=>{this.searchListCache=(0,Mt.Xl)(St._1.onMsgList);let t="",e=!1;St._1.onMsgList.forEach(((s,n)=>{1==s.new_msg?(t+="• ",e=!0):t+="  ",t+=n.toString()+"     ",t+=(s.group_id?s.group_id:s.user_id)+"     ",t+=(s.group_name?s.group_name:s.nickname)+"     ",t+="\n"})),e&&this.addCommandOut(":: You have message.","yellow"),this.addCommandOut(t)}},"":{info:'Alias for the command "sql send".',fun:(t,e)=>{if(""==e[0]&&""==e[1]){const e=t.substring(2,t.length);this.supportCmd.sql.fun("sql send "+e,["sql","send",e])}}},sql:{info:"Stapxs QQ Lite 2.0 Base Command.",fun:(t,e)=>{switch(e[1]){case"send":{const e=t.substring(t.indexOf("send")+5);let s=B.ZP.parseMsg(e,this.sendCache,this.imgCache);if(void 0!==s&&s.length>0)switch(this.chat.show.type){case"group":Ct.wR.send("send_group_msg",{group_id:this.chat.show.id,message:s},"sendMsgBack");break;case"user":Ct.wR.send("send_private_msg",{user_id:this.chat.show.id,message:s},"sendMsgBack");break}this.sendCache=[],this.imgCache=[];break}case"list":{const t=e[2];this.searchListCache=St._1.userList.filter((e=>{const s=(e.user_id?e.nickname+e.remark:e.group_name).toLowerCase(),n=e.user_id?e.user_id:e.group_id;return-1!==s.indexOf(t.toLowerCase())||n.toString()===t}));let s="";this.searchListCache.forEach(((t,e)=>{s+=e.toString()+"     ",s+=(t.group_id?t.group_id:t.user_id)+"     ",s+=(t.group_name?t.group_name:t.nickname)+"     ",s+="\n"})),this.addCommandOut(s);break}case"reply":if(this.sendCache=this.sendCache.filter((t=>"reply"!==t.type)),e[2])try{(0,It.r$)(e[2]),this.addSpecialMsg({msgObj:{type:"reply",id:e[2]},addText:!1,addTop:!0})}catch(s){this.addCommandOut(":: Invalid message id.")}break;case"history":{St._1.messageList[0].commandOut&&(St._1.messageList.shift(),St._1.messageList.shift(),St._1.messageList.shift(),St._1.messageList.shift());const t=St._1.messageList[0].message_id;t?Ct.wR.send("get_chat_history",{message_id:t},"getChatHistory"):this.addCommandOut(":: No messages in the message list. Failed to get message id ...","red");break}case"showImg":this.tags.showImg=!this.tags.showImg;break;default:this.addCommandOut("usage: sql send [msg], \n           list [search], \n           reply [msgId], \n           history, \n           showImg")}}},fullscreen:{info:"fullscreen chat view.",fun:()=>{const t=document.getElementById("chat-pan");t&&(this.tags.fullscreen?(this.tags.fullscreen=!1,t.classList.remove("full")):(this.tags.fullscreen=!0,t.classList.add("full")))}},neofetch:{info:"print system info.",fun:()=>{this.addCommandOut("","",`<div class="shell-neofetch"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***************************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******************************&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;**************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**************&nbsp;&nbsp;<br>&nbsp;&nbsp;*************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*************&nbsp;<br>&nbsp;**************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*************<br>&nbsp;*************,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*************<br>*************,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;************<br>&nbsp;************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***********<br>&nbsp;***********,**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*.***********<br>&nbsp;&nbsp;*************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*************&nbsp;<br>&nbsp;&nbsp;&nbsp;***********************************&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******************************&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***************************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******************<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***</span><div><span>${St._1.loginInfo.nickname}<span>@</span>sql-vue</span><a>-----------------</a><span>Application<span>: Stapxs QQ Lite 2.0</span></span><span>Kernel<span>: ${z.version}-web</span></span><span>Shell<span>: stsh base</span></span><span>Theme<span>: ChatSHell</span></span><div><div style="background:black"></div><div style="background:red"></div><div style="background:green"></div><div style="background:yellow"></div><div style="background:blue"></div><div style="background:violet"></div></div></div></div>`)}},clear:{info:"clear message list.",fun:()=>{St._1.messageList=[],this.addCommandOut("")}},cd:{info:'Alias for "cd /[id]"',fun:(t,e)=>{let s="0";if(1==e.length&&1==this.searchListCache.length)s=(this.searchListCache[0].user_id?this.searchListCache[0].user_id:this.searchListCache[0].group_id).toString();else{if(s=e[1],"../"==e[1]){const t=document.getElementById("chat-pan");return void(t&&(this.tags.fullscreen=!1,t.classList.remove("full"),St._1.chatInfo.show.id=0))}if(e[1].startsWith("#")){const t=Number(e[1].substring(1));if(!this.searchListCache[t])return void this.addCommandOut(":: Search cache id does not exist","red");s=(this.searchListCache[t].user_id?this.searchListCache[t].user_id:this.searchListCache[t].group_id).toString()}}for(let a=0;a<St._1.userList.length;a++){const t=St._1.userList[a],e=void 0!==t.user_id?t.user_id:t.group_id;if(String(e)===s)return document.getElementById("user-"+s)||St._1.showList?.unshift(t),void(0,n.Y3)((()=>{const t=document.getElementById("user-"+s);null!==t?t.click():this.addCommandOut(":: No valid contacts found","red")}))}this.addCommandOut(":: No valid contacts found","red")}}},this.$watch((()=>this.list.length),this.updateList),this.$watch((()=>Lt.e$.length),this.showPop),this.timeSetter=setInterval((()=>{this.timeShow=Intl.DateTimeFormat(this.trueLang,{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date)}),1e3);const t=document.getElementById("chat-pan");t&&(this.tags.fullscreen=!0,t.classList.add("full"))}}),Ht=s(89);const At=(0,Ht.Z)(Dt,[["render",E]]);var Ot=At}}]);
//# sourceMappingURL=377.00a88953.js.map