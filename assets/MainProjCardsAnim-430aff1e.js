import{r,_ as o,j as a,R as d,L as t}from"./index-a561fb05.js";const n=r.lazy(()=>o(()=>import("./Arrow-9686a5da.js"),["assets/Arrow-9686a5da.js","assets/index-a561fb05.js","assets/index-254af1d4.css"])),c=r.lazy(()=>o(()=>import("./MainAnimItem-d0f86665.js"),["assets/MainAnimItem-d0f86665.js","assets/index-a561fb05.js","assets/index-254af1d4.css","assets/vanilla-tilt.es2015-238c927e.js"]));function j({projects:i}){return a.jsx(a.Fragment,{children:i.map((s,e)=>a.jsxs(d.Fragment,{children:[a.jsxs("div",{className:"project-descr","data-aos":"slide-up","data-aos-easing":"ease-out-cubic","data-aos-duration":"500","data-aos-delay":"100",children:[a.jsxs("div",{className:"wrap",children:[a.jsx("div",{className:"project-name",children:s.projName}),a.jsx(t,{to:s.projTo,className:"arrow-btn",target:"_blank",title:s.projLinkTitle,children:a.jsxs(r.Suspense,{fallback:"loading",children:[a.jsx(n,{}),a.jsx(n,{})]})})]}),a.jsx("p",{children:s.projDescr}),a.jsx("div",{children:s.projUnderText})]},e),a.jsx("div",{className:"project-pic",children:a.jsx(r.Suspense,{fallback:"loading",children:a.jsx(c,{item:s})})},s.projName)]},e))})}export{j as default};
