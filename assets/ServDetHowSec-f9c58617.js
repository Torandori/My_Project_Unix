import{r as a,_ as r,a as p,u as b,j as e,d as v,R as g,b as c,P as N}from"./index-22ec33c2.js";const _=a.lazy(()=>r(()=>import("./index-22ec33c2.js").then(t=>t.s),["assets/index-22ec33c2.js","assets/index-01423dd3.css"])),l=a.lazy(()=>r(()=>import("./StartBtn-80fa3d2a.js"),["assets/StartBtn-80fa3d2a.js","assets/index-22ec33c2.js","assets/index-01423dd3.css"]));function f({descr:t}){const o=p.useMediaQuery({maxWidth:880}),s=t.howSec,d=s.howList,m=b(),i=()=>{m("/contacts")},[x,h]=a.useState(!1),j=()=>{h(!1),document.body.classList.remove("modal-open")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"gradient",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"big-img-wrap",children:e.jsx(v.LazyLoadImage,{src:s.howImgUrl,alt:s.howImgAlt,title:s.howImgAlt,effect:"blur"})})})}),e.jsxs("section",{id:"how-sec",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"block-text-under-pic","data-aos":"fade-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"500",children:[e.jsx("h2",{className:"h2",children:s.servDetUnderTitle}),e.jsx("p",{className:"text",children:s.servDetUnderDescr})]}),e.jsx("div",{className:"how-list","data-aos":"zoom-in","data-aos-easing":"ease-out-cubic","data-aos-duration":"700",children:d.map((n,u)=>e.jsxs(g.Fragment,{children:[e.jsx("div",{className:"number cell",children:n.howListNumber}),e.jsx("div",{className:"name cell",children:n.howListTitle}),e.jsx("p",{className:"item-descr cell",children:n.howListDescr})]},u))}),o?e.jsxs("div",{className:"big-text panchang",children:[e.jsx("span",{className:"margin",children:s.servDetBigName}),s.servDetBigNameContinue,e.jsx("button",{type:"button",onClick:i,className:"btn project-btn","aria-label":"Click to start a project",children:e.jsx(a.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(l,{})})})]}):e.jsx(N,{translateX:["-100px","100px"],children:e.jsxs("div",{className:"big-text panchang",children:[e.jsx("span",{className:"margin",children:s.servDetBigName}),s.servDetBigNameContinue,e.jsx("button",{type:"button",onClick:i,className:"btn project-btn","aria-label":"Click to start a project",children:e.jsx(a.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(l,{})})})]})})]}),e.jsx(a.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(_,{isOpen:x,onClose:j})})]})]})}export{f as default};
