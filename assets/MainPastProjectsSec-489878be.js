import{r as a,_ as o,j as e,b as c,L as n}from"./index-22ec33c2.js";const u="our past paroject",p="500+ projects",x="services",N="We combine human empathy and intelligent data to provide the",f="highest level of satisfaction for our customers and their users.",i={pastTitle:u,pastCount:p,serviceTitle:x,serviceDescr:N,serviceContinue:f},l=a.lazy(()=>o(()=>import("./Arrow-e1d214f2.js"),["assets/Arrow-e1d214f2.js","assets/index-22ec33c2.js","assets/index-01423dd3.css"])),g=a.lazy(()=>o(()=>import("./MainProjCardsAnim-158e8451.js"),["assets/MainProjCardsAnim-158e8451.js","assets/index-22ec33c2.js","assets/index-01423dd3.css"]));function T(){const[d,h]=a.useState([{},{}]),[r,j]=a.useState({left:[],right:[]});a.useEffect(()=>{try{fetch("./pubdata/mainPastProjectsItems.json").then(s=>s.json()).then(s=>{h(s)})}catch(s){console.log("An error occured while fetching data:",s)}},[]),a.useEffect(()=>{try{fetch("./pubdata/mainServiceItems.json").then(s=>s.json()).then(s=>{j(s)})}catch(s){console.log("An error occurred while fetching data:",s)}},[]);let v=r.left,m=r.right;return e.jsx("section",{id:"past-projects-sec",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"title","data-aos":"slide-right","data-aos-easing":"ease-in-out-sine","data-aos-duration":"600",children:[e.jsx("h2",{className:"h2",children:i.pastTitle}),e.jsx("div",{children:i.pastCount})]}),e.jsxs("div",{className:"projects-net",children:[e.jsx("div",{className:"empty-cell"}),e.jsx("div",{className:"projects-cells",children:e.jsx(a.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(g,{projects:d})})})]}),e.jsxs("div",{className:"services",children:[e.jsx("div",{className:"empty-cell"}),e.jsxs("div",{className:"content-cell",children:[e.jsxs("div",{className:"wrap",children:[e.jsx("div",{children:i.serviceTitle}),e.jsx("p",{children:i.serviceDescr})]}),e.jsx("p",{className:"continue",children:i.serviceContinue}),e.jsxs("div",{className:"services-cells",children:[e.jsx("div",{className:"left-col",children:v.map((s,t)=>e.jsxs("div",{className:"service-item","data-aos":"slide-up","data-aos-easing":"ease-out-cubic","data-aos-duration":"500","data-aos-delay":"100",children:[e.jsxs(n,{to:s.mainServiceTo,className:"item-title",title:s.mainServiceLinkTitle,children:[e.jsx("div",{className:"h3 panchang hoverText",children:s.mainServiceName}),e.jsx("div",{className:"arrow-btn",children:e.jsx(a.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(l,{})})})]}),e.jsx("p",{className:"item-descr","data-aos":"slide-up","data-aos-easing":"ease-in-cubic","data-aos-duration":"500","data-aos-delay":"200",children:s.mainServiceDescr})]},t))}),e.jsx("div",{className:"right-col",children:m.map((s,t)=>e.jsxs("div",{className:"service-item","data-aos":"slide-up","data-aos-easing":"ease-out-cubic","data-aos-duration":"500","data-aos-delay":"100",children:[e.jsxs(n,{to:s.mainServiceTo,className:"item-title",title:s.mainServiceLinkTitle,children:[e.jsx("div",{className:"h3 panchang hoverText",children:s.mainServiceName}),e.jsx("div",{className:"arrow-btn",children:e.jsx(a.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(l,{})})})]}),e.jsx("p",{className:"item-descr","data-aos":"slide-up","data-aos-easing":"ease-in-cubic","data-aos-duration":"500","data-aos-delay":"200",children:s.mainServiceDescr})]},t))})]})]})]})]})})}export{T as default};
