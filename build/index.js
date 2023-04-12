!function(){"use strict";var e,t={676:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,o=window.wp.components,a=(window.wp.data,window.wp.coreData),l=JSON.parse('{"u2":"typroject/ty-project-player"}');(0,e.registerBlockType)(l.u2,{edit:function(e){let{attributes:l,setAttributes:c}=e;const[i]=(0,a.useEntityProp)("root","site","typp_token"),{playerID:s}=l;let p=[],u=[],f=[],b=[];return fetch("https://ty.mailstone.net/api/players",{method:"GET",status:"active",headers:{Authorization:i}}).then((e=>e.json())).then((e=>{p=e})).catch((function(e){renderErrorMessage(e)})).finally((function(){console.log("fetch finished"),u=p.filter((e=>"static"==e.type)),f=p.filter((e=>"dynamic"==e.type)),b=p.map((e=>({label:e.name,value:e.id}))),console.log(p),console.log(b),console.log(u),console.log(f)})),b=[{label:"Static Player 1",value:"9f60ac6c-7b75-42f0-8bb7-ab6b51ec0a9b"},{label:"Dynamic player 1",value:"09394f9f-e1e8-4029-a5d8-f131b726f95e"}],(0,t.createElement)("div",(0,r.useBlockProps)(),(0,t.createElement)(r.InspectorControls,{key:"settings"},(0,t.createElement)(o.PanelBody,null,(0,t.createElement)(o.SelectControl,{label:"Select a Player",value:s,options:b,onChange:e=>c({playerID:e})}))),(0,n.__)("TY Project Player – hello from the editor!","ty-project-player"),(0,t.createElement)("br",null),(0,t.createElement)("span",null,"Player ID: ",(0,t.createElement)("b",null,l.playerID)),(0,t.createElement)("script",{type:"text/javascript",src:"https://ty.mailstone.net/widget/player.js"}),(0,t.createElement)("script",{defer:!0,id:"9f60ac6c-7b75-42f0-8bb7-ab6b51ec0a9b"},'Widget.init("9f60ac6c-7b75-42f0-8bb7-ab6b51ec0a9b")'))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var l=1/0;for(p=0;p<e.length;p++){n=e[p][0],o=e[p][1],a=e[p][2];for(var c=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(p--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,o,a]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,l=n[0],c=n[1],i=n[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(i)var p=i(r)}for(t&&t(n);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},n=self.webpackChunkty_project_player=self.webpackChunkty_project_player||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(676)}));o=r.O(o)}();