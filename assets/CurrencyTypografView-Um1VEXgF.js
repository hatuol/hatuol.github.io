import{_ as v,o as i,c,a as s,n as m,b as p,w as d,T as C,d as x,v as y,F as A,r as h,e as f,p as b,f as T,u as _,R as g}from"./index-g5F7v-SP.js";const N={name:"CurrencyTypograf",data(){return{isActive:!0,number:"",text:"",startEq:'{{#equals account_currency "',endEq:"{{/equals}}",symb:/[A-Z]{3}/,curr:{RUB:"&#8381;",EUR:"&#8364;",USD:"&#36;",UAH:"&#8372;",KZT:"&#8376;",NOK:"kr",PLN:"z&#x142;",TRY:"&#8378;",CAD:"C&#36;",AUD:"AUD",AZN:"&#8380;",NZD:"NZD",BRL:"R&#36;",INR:"&#8377;",ARS:"ARS",MXN:"MXN",PEN:"PEN",NGN:"NGN",ZAR:"ZAR",CLP:"CLP",DKK:"kr",SEK:"kr",RON:"RON",HUF:"Ft",JPY:"&#165;",BTC:"BTC",ETH:"ETH",LTC:"LTC",BCH:"BCH",BTC:"BTC",XRP:"XRP",TRX:"TRX",DOGE:"DOGE",USDT:"USDT"}}},mounted(){this.$refs.textarea.focus()},methods:{clear(){this.text=""},addCurrency(l,e){this.text+='{{#equals account_currency "'+e+'" }}'+this.number+"&nbsp;"+l+"{{/equals}}",this.number=""},prettify(){this.text=this.text.split("").reverse().join("").replace(/(\d)(?= ) /g,"$1").replace(/\d{3}(?=\d)(?!\d#)/g,"$&;psbn&").split("").reverse().join("").replaceAll("0,00&nbsp;000&nbsp;000","0,00000000").replaceAll("0,00&nbsp;000","0,00000").replaceAll("0,00&nbsp;0","0,000").replaceAll("0,0&nbsp;","0,0")},prettifyTr(){this.text=this.text.split("").reverse().join("").replace(/(\d)(?= \d) /g,"$1").replace(/\d{3}(?=\d)(?!\d#)/g,"$&.").split("").reverse().join("").replaceAll("0,00.000.000","0,00000000").replaceAll("0,00.000","0,00000").replaceAll("0,00.0","0,000").replaceAll("0,0.","0,0")},prettifyJa(){let l=this.text.split("{{/equals}}"),e;for(let a=0;a<l.length-1;a++){let u=l[a].substring(28,31),t=l[a].replace('{{#equals account_currency "',"").replace('" }}',"").replace('"}}',"").replace(this.symb,"").split("&nbsp;").reverse().join().replace(",","&nbsp;");e+=this.startEq+u+'" }}'+t+this.endEq}this.text=e.replace("undefined","").replace(/\,/g,".").split("").reverse().join("").replace(/(\d)(?= \d) /g,"$1").replace(/\d{3}(?=\d)(?!\d#)/g,"$&,").split("").reverse().join("").replaceAll("0.00,000,000","0,00000000").replaceAll("0,00,000","0,00000").replaceAll("0,00,0","0,000").replaceAll("0.0,","0.0")},changeCur(){this.text.includes("account")?this.text=this.text.replaceAll("account","game"):this.text=this.text.replaceAll("game","account")},Copy(){this.isActive=!this.isActive,this.$clipboard(this.text),setTimeout(()=>{this.isActive=!this.isActive},3e3),this.text=""}}},R=l=>(b("data-v-9578c4c7"),l=l(),T(),l),k={class:"main"},E=R(()=>s("h1",{class:""},"Currency typograf",-1)),D={class:"textarea-wrapper"},B={class:"currency-row"},U=["onClick","value"],q={class:"buttons-row"};function w(l,e,a,u,t,n){return i(),c("div",k,[E,s("form",null,[s("div",D,[s("span",{class:m(["copied copied--left",{opened:!t.isActive}])},"copied",2),p(C,{name:"fade"},{default:d(()=>[t.text?(i(),c("i",{key:0,class:"far fa-copy",onClick:e[0]||(e[0]=(...r)=>n.Copy&&n.Copy(...r))})):f("",!0)]),_:1}),p(C,{name:"fade"},{default:d(()=>[t.text?(i(),c("i",{key:0,class:"far fa-trash-alt",onClick:e[1]||(e[1]=(...r)=>n.clear&&n.clear(...r))})):f("",!0)]),_:1}),x(s("textarea",{name:"textarea",id:"textarea","onUpdate:modelValue":e[2]||(e[2]=r=>t.text=r),ref:"textarea",autofocus:""},null,512),[[y,t.text]]),s("div",B,[x(s("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=r=>t.number=r)},null,512),[[y,t.number]]),s("ul",null,[(i(!0),c(A,null,h(t.curr,(r,o)=>(i(),c("li",{key:r.id},[s("input",{type:"button",onClick:P=>n.addCurrency(r,o),value:o},null,8,U)]))),128))])])]),s("div",q,[s("input",{type:"button",onClick:e[4]||(e[4]=r=>n.prettify(t.text)),value:"Convert"}),s("input",{type:"button",onClick:e[5]||(e[5]=r=>n.prettifyTr(t.text)),value:"TR Convert"}),s("input",{type:"button",onClick:e[6]||(e[6]=r=>n.prettifyJa(t.text)),value:"JA Convert"}),s("input",{type:"button",onClick:e[7]||(e[7]=r=>n.changeCur(t.text)),value:"Change Currency"})])])])}const S=v(N,[["render",w],["__scopeId","data-v-9578c4c7"]]),j={__name:"CurrencyTypografView",setup(l){return(e,a)=>(i(),c("main",null,[p(_(g)),p(S)]))}};export{j as default};
