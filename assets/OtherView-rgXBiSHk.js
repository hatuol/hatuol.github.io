import{_ as h,g as f,o as s,c,a as e,F as a,r as d,d as p,j as _,i as r,e as j,p as g,f as v,b as m,u as D,R as b}from"./index-oy8nDJHT.js";const x={name:"Other",data(){return{message:"",text:"",projects:[{email:"1go@1goinfo.email",project:"1Go",code:""},{email:"drip@dripinfo.email",project:"DRIP",code:"/profile/edit%3Fpromo_code%3DXXXX"},{email:"gizbo@gizboinfo.email",project:"GIZBO",code:""},{email:"fresh@freshinfo.email",project:"Fresh",code:"/profile/edit%3Fpromo_code%3DXXXX"},{email:"izzi@izziinfo.email",project:"IZZI",code:"/promo-code/XXXX"},{email:"jet@jetinfo.email",project:"JET",code:"/promo-code%3Fpromo_code%3DXXXX"},{email:"legzo@legzoinfo.email",project:"Legzo",code:"/bonuses%3Fpromo_code%3DXXXX"},{email:"lex@lexinfo.email",project:"LeX",code:"/bonuses%3Fpromo_code%3DXXXX"},{email:"monro@monroinfo.email",project:"Monro",code:""},{email:"rox@roxinfo.net",project:"ROX",code:"/profile/promo%3Fpromo-code%3DXXXX"},{email:"starda@stardainfo.email",project:"STARDA",code:"/promo%3Fmy_account%3Dtrue%26acc_page%3Dacc_my_promo%26promo_code%3DXXXX"},{email:"sol@solinfo.email",project:"SOL",code:"/profile/edit%3Fpromo_code%3DXXXX"},{email:"volna@volnainfo.email",project:"Volna",code:""}]}},methods:{prettifySubjects(){this.message="Тема письма:"+this.text.replace(/{{else}}/,"en}}").replace(/\//,"}}").replace(/ru}}|en}}|de}}|fr}}|pt}}|es}}|tr}}|fi}}|ua}}|kz}}|ja}}/g,t=>`
`+t.toUpperCase()+": ").replace(/{{|}}|#|if|else|locales.|groups.|/g,"")}}},i=t=>(g("data-v-be90e4e4"),t=t(),v(),t),y={class:"main"},F={class:"other-list"},z={class:"other-list_item copyitems"},I=i(()=>e("h3",null,"Почты проектов",-1)),O=i(()=>e("p",null,"Почты проектов для СПАМ-теста:",-1)),S={class:"other-list_item-info"},V={class:"other-list_item copyitems"},k=i(()=>e("h3",null,"Промокоды",-1)),R=i(()=>e("p",null,"Зашиваем ссылки на проекты",-1)),$={class:"other-list_item-info"},w={key:0};function B(t,u,X,Z,l,A){const n=f("clipboard");return s(),c("div",y,[e("div",F,[e("div",z,[I,O,e("div",S,[e("ul",null,[(s(!0),c(a,null,d(l.projects,o=>p((s(),c("li",{key:o.id,class:"cancopy"},[_(r(o.email),1)])),[[n,o.email]])),128))])])]),e("div",V,[k,R,e("div",$,[e("ul",null,[(s(!0),c(a,null,d(l.projects,o=>p((s(),c("li",{key:o.id,class:"cancopy"},[o.code?(s(),c("strong",w,r(o.project)+":",1)):j("",!0),_(" "+r(o.code),1)])),[[n,o.code]])),128))])])])])])}const L=h(x,[["render",B],["__scopeId","data-v-be90e4e4"]]),N={class:"about"},T=e("h1",null,"Others",-1),E={__name:"OtherView",setup(t){return(u,X)=>(s(),c(a,null,[m(D(b)),e("div",N,[T,m(L)])],64))}};export{E as default};