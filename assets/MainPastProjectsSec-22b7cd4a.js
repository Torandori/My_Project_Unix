import{r as a,_ as l,j as e,b as t,L as r}from"./index-cc2a6e83.js";const m="our past projects",u="500+ projects",p="services",x="We combine human empathy and intelligent data to provide the",N="highest level of satisfaction for our customers and their users.",i={pastTitle:m,pastCount:u,serviceTitle:p,serviceDescr:x,serviceContinue:N},n=a.lazy(()=>l(()=>import("./Arrow-ad821d9a.js"),["assets/Arrow-ad821d9a.js","assets/index-cc2a6e83.js","assets/index-64acdbba.css"])),f=a.lazy(()=>l(()=>import("./MainProjCardsAnim-e73a993c.js"),["assets/MainProjCardsAnim-e73a993c.js","assets/index-cc2a6e83.js","assets/index-64acdbba.css"]));function g(){const[o,d]=a.useState([{},{}]),[c,h]=a.useState({left:[],right:[]});a.useEffect(()=>{try{fetch("./pubdata/mainPastProjectsItems.json").then(s=>s.json()).then(s=>{d(s)})}catch(s){console.log("An error occured while fetching data:",s)}},[]),a.useEffect(()=>{try{fetch("./pubdata/mainServiceItems.json").then(s=>s.json()).then(s=>{h(s)})}catch(s){console.log("An error occurred while fetching data:",s)}},[]);let v=c.left,j=c.right;return e.jsx("section",{id:"past-projects-sec",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"title","data-aos":"slide-right","data-aos-easing":"ease-in-out-sine","data-aos-duration":"600",children:[e.jsx("h2",{className:"h2",children:i.pastTitle}),e.jsx("div",{children:i.pastCount})]}),e.jsxs("div",{className:"projects-net",children:[e.jsx("div",{className:"empty-cell"}),e.jsx("div",{className:"projects-cells",children:e.jsx(a.Suspense,{fallback:e.jsx(t,{}),children:e.jsx(f,{projects:o})})})]}),e.jsxs("div",{className:"services",children:[e.jsx("div",{className:"empty-cell"}),e.jsxs("div",{className:"content-cell",children:[e.jsxs("div",{className:"wrap",children:[e.jsx("div",{children:i.serviceTitle}),e.jsx("p",{children:i.serviceDescr})]}),e.jsx("p",{className:"continue",children:i.serviceContinue}),e.jsxs("div",{className:"services-cells",children:[e.jsx("div",{className:"left-col",children:v.map(s=>e.jsxs("div",{className:"service-item","data-aos":"slide-up","data-aos-easing":"ease-out-cubic","data-aos-duration":"500","data-aos-delay":"100",children:[e.jsxs(r,{to:s.mainServiceTo,className:"item-title",title:s.mainServiceLinkTitle,children:[e.jsx("div",{className:"h3 panchang hoverText",children:s.mainServiceName}),e.jsx("div",{className:"arrow-btn",children:e.jsx(a.Suspense,{fallback:e.jsx(t,{}),children:e.jsx(n,{})})})]}),e.jsx("p",{className:"item-descr","data-aos":"slide-up","data-aos-easing":"ease-in-cubic","data-aos-duration":"500","data-aos-delay":"200",children:s.mainServiceDescr})]},s.mainServiceName))}),e.jsx("div",{className:"right-col",children:j.map(s=>e.jsxs("div",{className:"service-item","data-aos":"slide-up","data-aos-easing":"ease-out-cubic","data-aos-duration":"500","data-aos-delay":"100",children:[e.jsxs(r,{to:s.mainServiceTo,className:"item-title",title:s.mainServiceLinkTitle,children:[e.jsx("div",{className:"h3 panchang hoverText",children:s.mainServiceName}),e.jsx("div",{className:"arrow-btn",children:e.jsx(a.Suspense,{fallback:e.jsx(t,{}),children:e.jsx(n,{})})})]}),e.jsx("p",{className:"item-descr","data-aos":"slide-up","data-aos-easing":"ease-in-cubic","data-aos-duration":"500","data-aos-delay":"200",children:s.mainServiceDescr})]},s.mainServiceName))})]})]})]})]})})}export{g as default};