import{r,_ as t,j as e,L as n,b as v}from"./index-22ec33c2.js";const o=[{servicesColClass:"left-col",servicesTitle:"services",col:[{servicesTo:"serviceWeb",servicesLinkTitle:"Web Design Service Details",number:"01",area:"web design"},{servicesTo:"serviceMobile",servicesLinkTitle:"Mobile Service Details",number:"02",area:"mobile"}]},{servicesColClass:"right-col",servicesTitle:"industries",col:[{servicesTo:"serviceSaas",servicesLinkTitle:"Saas Service Details",number:"03",area:"saas"},{servicesTo:"serviceSoftware",servicesLinkTitle:"software Service Details",number:"04",area:"software"}]}],d=r.lazy(()=>t(()=>import("./ThinArrow-397de4a4.js"),["assets/ThinArrow-397de4a4.js","assets/index-22ec33c2.js","assets/index-01423dd3.css"]));function x(){return e.jsx("div",{id:"services-sec",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"services-wrap",children:o.map((i,a)=>{const c=i.col;return e.jsxs("div",{className:i.servicesColClass,children:[e.jsx("div",{className:"services-item-title neo-haas",children:e.jsx("div",{className:"services-subtitle",children:i.servicesTitle})}),c.map((s,l)=>e.jsx("div",{className:"services-item","data-aos":"fade-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"500",children:e.jsxs(n,{to:"/services/"+s.servicesTo,className:"wrap-text-arrow",title:s.servicesLinkTitle,children:[e.jsxs("div",{className:"wrap-number-text",children:[e.jsx("div",{className:"number",children:s.number}),e.jsx("div",{className:"text",children:s.area})]}),e.jsx("div",{className:"arrow-btn",children:e.jsx(r.Suspense,{fallback:e.jsx(v,{}),children:e.jsx(d,{})})})]})},l))]},a)})})})})}export{x as default};
