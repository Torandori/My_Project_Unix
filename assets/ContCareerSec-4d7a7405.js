import{r as a,_ as d,j as e,b as i,C as p}from"./index-cc2a6e83.js";const x=[{id:"project",careerClass:"btn btn-circle-arrow-text dark",careerText:"start a project"},{id:"career",careerClass:"btn btn-circle-arrow-text",careerText:"start your career"}],j=a.lazy(()=>d(()=>import("./Arrow-ad821d9a.js"),["assets/Arrow-ad821d9a.js","assets/index-cc2a6e83.js","assets/index-64acdbba.css"]));function u(){const[r,t]=a.useState(!1),[c,o]=a.useState(""),n=s=>{o(s),t(!0),document.body.classList.add("open-modal")},l=()=>{t(!1),document.body.classList.remove("open-modal")};return e.jsx("section",{id:"project-career-sec",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrap-poject-career",children:[e.jsxs("div",{className:"wrap-buttons",children:[x.map(s=>e.jsx("button",{type:"button",className:s.careerClass,onClick:()=>n(s.careerText),children:e.jsxs("span",{className:"btn-content",children:[e.jsx("span",{className:"arrow-in",children:e.jsx(a.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(j,{})})}),e.jsx("span",{className:"btn-text",children:s.careerText})]})},s.id)),r&&e.jsx(p,{isOpen:r,onClose:l,prop:c})]}),e.jsxs("div",{className:"location",children:[e.jsx("div",{className:"where panchang",children:"in new york, usa"}),e.jsx("div",{className:"descr",children:"our location"})]})]})})})}export{u as default};