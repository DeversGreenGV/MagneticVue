(function(){"use strict";var e={6412:function(e,n,o){var r=o(9242),t=o(3396),i=o(7139);const a={class:"Home"},u=(0,t._)("header",null,[(0,t._)("div",{class:"logo"},[(0,t._)("a",{href:""}," MAGNETIC")]),(0,t._)("nav",null,[(0,t._)("ul",null,[(0,t._)("li",null,"Home"),(0,t._)("li",null,"About"),(0,t._)("li",null,"The Team"),(0,t._)("li",null,"Journal"),(0,t._)("li",null,"Contact Us hghgfhg")])])],-1),c={class:"main"},g={class:"gamesList",id:"gamesList",ref:"gamesList"},s={class:"text-background"},l={class:"gameName"},d={href:""},f=(0,t._)("hr",null,null,-1),m={class:"gameGenres"},h={class:"genre"},p={class:"genreItem"};function b(e,n,o,r,b,v){return(0,t.wg)(),(0,t.iD)("div",a,[u,(0,t._)("main",c,[(0,t._)("div",g,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(b.gamePosts,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"game",style:(0,i.j5)({height:b.gameHeight+"px",backgroundImage:"url("+e.backgroundImage+")",backgroundPosition:e.backgroundPosition.x+"% "+e.backgroundPosition.y+"%"}),ref_for:!0,ref:"game"},[(0,t._)("div",s,[(0,t._)("div",l,[(0,t._)("a",d,(0,i.zw)(e.name),1)]),f,(0,t._)("div",m,[(0,t._)("p",h,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.genre,((e,n)=>((0,t.wg)(),(0,t.iD)("span",p,(0,i.zw)(e+","),1)))),256))])])])],4)))),256))],512)])])}var v={data(){return{gameHeight:0,gamePosts:[{backgroundImage:o(1884),backgroundPosition:{x:0,y:84},name:"Factorio",genre:["Стратегия","Симуляторы","Инди"]},{backgroundImage:o(4125),backgroundPosition:{x:94,y:0},name:"Rimworld",genre:["Стратегия","Симуляторы","Инди"]},{backgroundImage:o(5774),backgroundPosition:{x:50,y:0},name:"Stellaris",genre:["Стратегия","Симуляторы"]},{backgroundImage:o(6144),backgroundPosition:{x:50,y:0},name:"The Elder Scrolls V: Skyrim",genre:["Ролевая игра","Экшен"]},{backgroundImage:o(3987),backgroundPosition:{x:0,y:0},name:"Mount and Blade 2: Bannerlord",genre:["Ролевая игра","Экшен","Стратегия","Симуляторы"]},{backgroundImage:o(6796),backgroundPosition:{x:97,y:0},name:"S.T.A.L.K.E.R: Call of Pripyat",genre:["Ролевая игра","Экшен","FPS"]},{backgroundImage:o(2633),backgroundPosition:{x:58,y:0},name:"Minecraft",genre:["Песочница"]},{backgroundImage:o(5477),backgroundPosition:{x:38,y:0},name:"The Witcher 3",genre:["Ролевая игра","Экшен"]},{backgroundImage:o(3975),backgroundPosition:{x:0,y:0},name:"Fallout 4",genre:["Ролевая игра","Экшен"]}],window:{width:0,height:0},gamePost:document.querySelector(".game")}},methods:{handleResize(e){console.log(e),this.gameHeight=e}},computed:{},created(){},destroyed(){window.removeEventListener("resize",(()=>{this.handleResize(this.$refs.game[0].clientWidth)}))},mounted(){window.addEventListener("resize",(()=>{this.handleResize(this.$refs.game[0].clientWidth)})),this.handleResize(this.$refs.game[0].clientWidth)}},k=o(89);const x=(0,k.Z)(v,[["render",b]]);var w=x;const y=(0,r.ri)(w);y.mount("#app")},3987:function(e,n,o){e.exports=o.p+"img/M&B.d5f32282.jpg"},1884:function(e,n,o){e.exports=o.p+"img/factorio.89f8431c.jpg"},3975:function(e,n,o){e.exports=o.p+"img/fallout.cdbb9a17.jpg"},2633:function(e,n,o){e.exports=o.p+"img/minecraft.05dc4791.jpg"},4125:function(e,n,o){e.exports=o.p+"img/rimworld.3ffab2ff.jpg"},6144:function(e,n,o){e.exports=o.p+"img/skyrim.f0dda738.jpg"},6796:function(e,n,o){e.exports=o.p+"img/stalker.1be7081f.jpeg"},5774:function(e,n,o){e.exports=o.p+"img/stellaris.cb68df2a.jpg"},5477:function(e,n,o){e.exports=o.p+"img/theWitcher.286c88e9.jpg"}},n={};function o(r){var t=n[r];if(void 0!==t)return t.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,r,t,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],t=e[s][1],i=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var g=t();void 0!==g&&(n=g)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,t,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var r in n)o.o(n,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.p="/MagneticVue/"}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,r){var t,i,a=r[0],u=r[1],c=r[2],g=0;if(a.some((function(n){return 0!==e[n]}))){for(t in u)o.o(u,t)&&(o.m[t]=u[t]);if(c)var s=c(o)}for(n&&n(r);g<a.length;g++)i=a[g],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(s)},r=self["webpackChunkmagnetic_vue"]=self["webpackChunkmagnetic_vue"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(6412)}));r=o.O(r)})();
//# sourceMappingURL=app.e617601c.js.map