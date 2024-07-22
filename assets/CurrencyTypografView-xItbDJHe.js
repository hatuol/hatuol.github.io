import{_ as f,o as a,c as o,a as t,b as y,w as x,T as C,d as p,v as d,F as v,r as m,e as _,p as h,f as T}from"./index-b0XwYwud.js";const b={name:"CurrencyTypograf",data(){return{number:"",text:"",startEq:'{{#equals account_currency "',endEq:"{{/equals}}",symb:/[A-Z]{3}/,curr:{RUB:"&#8381;",EUR:"&#8364;",USD:"&#36;",UAH:"&#8372;",KZT:"&#8376;",NOK:"kr",PLN:"z&#x142;",TRY:"&#8378;",CAD:"C&#36;",AUD:"AUD",AZN:"&#8380;",NZD:"NZD",BRL:"R&#36;",INR:"&#8377;",ARS:"ARS",MXN:"MXN",PEN:"PEN",NGN:"NGN",ZAR:"ZAR",CLP:"CLP",DKK:"kr",SEK:"kr",RON:"RON",HUF:"Ft",JPY:"&#165;",BTC:"BTC",ETH:"ETH",LTC:"LTC",BCH:"BCH",BTC:"BTC",XRP:"XRP",TRX:"TRX",DOGE:"DOGE",USDT:"USDT"}}},methods:{clear(){this.text=""},addCurrency(r,e){this.text+='{{#equals account_currency "'+e+'" }}'+this.number+"&nbsp;"+r+"{{/equals}}",this.number=""},prettify(){this.text=this.text.split("").reverse().join("").replace(/(\d)(?= ) /g,"$1").replace(/\d{3}(?=\d)(?!\d#)/g,"$&;psbn&").split("").reverse().join(""),this.$clipboard(this.text)},prettifyTr(){this.text=this.text.split("").reverse().join("").replace(/(\d)(?= \d) /g,"$1").replace(/\d{3}(?=\d)(?!\d#)/g,"$&.").split("").reverse().join(""),this.$clipboard(this.text)},prettifyJa(){let r=this.text.split("{{/equals}}"),e;for(let l=0;l<r.length-1;l++){let u=r[l].substring(28,31),s=r[l].replace('{{#equals account_currency "',"").replace('" }}',"").replace('"}}',"").replace(this.symb,"").split("&nbsp;").reverse().join().replace(",","&nbsp;");e+=this.startEq+u+'" }}'+s+this.endEq}this.text=e.replace("undefined","").replace(/\,/g,".").split("").reverse().join("").replace(/(\d)(?= \d) /g,"$1").replace(/\d{3}(?=\d)(?!\d#)/g,"$&,").split("").reverse().join(""),this.$clipboard(this.text)}}},N=r=>(h("data-v-82fc55f0"),r=r(),T(),r),R={class:"main"},g=N(()=>t("h1",{class:""},"Currency typograf",-1)),k={class:"textarea-wrapper"},E={class:"currency-row"},D=["onClick","value"],A={class:"buttons-row"};function B(r,e,l,u,s,i){return a(),o("div",R,[g,t("form",null,[t("div",k,[y(C,{name:"fade"},{default:x(()=>[s.text?(a(),o("i",{key:0,class:"far fa-trash-alt",onClick:e[0]||(e[0]=(...n)=>i.clear&&i.clear(...n))})):_("",!0)]),_:1}),p(t("textarea",{name:"textarea",id:"textarea","onUpdate:modelValue":e[1]||(e[1]=n=>s.text=n),autofocus:""},null,512),[[d,s.text]]),t("div",E,[p(t("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=n=>s.number=n)},null,512),[[d,s.number]]),t("ul",null,[(a(!0),o(v,null,m(s.curr,(n,c)=>(a(),o("li",{key:n.id},[t("input",{type:"button",onClick:q=>i.addCurrency(n,c),value:c},null,8,D)]))),128))])])]),t("div",A,[t("input",{type:"button",onClick:e[3]||(e[3]=n=>i.prettify(s.text)),value:"Convert"}),t("input",{type:"button",onClick:e[4]||(e[4]=n=>i.prettifyTr(s.text)),value:"TR Convert"}),t("input",{type:"button",onClick:e[5]||(e[5]=n=>i.prettifyJa(s.text)),value:"JA Convert"})])])])}const U=f(b,[["render",B],["__scopeId","data-v-82fc55f0"]]),S={__name:"CurrencyTypografView",setup(r){return(e,l)=>(a(),o("main",null,[y(U)]))}};export{S as default};
