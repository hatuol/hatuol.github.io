import{_,g as d,o as r,c,a as o,F as m,r as C,d as u,n as j,h as s,p as h,f as F,b as f}from"./index-Z0fQHaV7.js";const E={name:"SubjectsEditor",data(){return{message:"",text:"",canCopy:!0,colors:[{itemColor:"#ceb073",project:"ROX"},{itemColor:"#F09235",project:"SOL"},{itemColor:"#1183FF",project:"JET"},{itemColor:"#83B812",project:"FRESH"},{itemColor:"#9EDD44",project:"VOLNA"},{itemColor:"#51c5f6",project:"VOLNA"},{itemColor:"#7cfbdc",project:"IZZI"},{itemColor:"#90A7FF",project:"LEGZO"},{itemColor:"#E92139",project:"STARDA"},{itemColor:"#00C193",project:"DRIP"},{itemColor:"#FF4C00",project:"MONRO"},{itemColor:"#007AFE",project:"MONRO"},{itemColor:"#EF4136",project:"1GO"},{itemColor:"#E08211",project:"1GO"},{itemColor:"#F4D483",project:"LEX"}]}},methods:{checked(){this.canCopy!=this.canCopy}}},l=e=>(h("data-v-7c178ecc"),e=e(),F(),e),O={class:"main"},S=l(()=>o("h1",{class:""},"Color Palette",-1)),v={class:"wrapper"},y={class:"color-picker"},D=l(()=>o("i",{class:"far fa-copy"},null,-1));function b(e,a,i,I,p,A){const n=d("clipboard");return r(),c("div",O,[S,o("div",v,[o("ul",y,[(r(!0),c(m,null,C(p.colors,t=>u((r(),c("li",{class:"color-picker_item",key:t.id,style:j({backgroundColor:t.itemColor})},[D,o("span",null,s(t.itemColor),1),o("p",null,s(t.project),1)],4)),[[n,t.itemColor]])),128))])])])}const k=_(E,[["render",b],["__scopeId","data-v-7c178ecc"]]),N={__name:"ColorPaletteView",setup(e){return(a,i)=>(r(),c("main",null,[f(k)]))}};export{N as default};
