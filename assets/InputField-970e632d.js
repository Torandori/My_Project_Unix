import{r as m,j as e}from"./index-a561fb05.js";function p({name:o,change:i,label:u,value:t,error:n,multy:c,blur:d}){const a=m.useId();function r(l){i(l.target.value)}function s(l){d(l.target.value)}return e.jsxs("div",{className:n!==""?"form-element has-error":"form-element",children:[e.jsxs("div",{className:n!==""?"has-error":null,children:[c?e.jsx("textarea",{name:"more",placeholder:" ",id:a,onChange:r,onBlur:s,value:t}):e.jsx("input",{type:"text",name:o,placeholder:" ",id:a,onChange:r,onBlur:s,value:t}),e.jsx("label",{className:"fake",htmlFor:a,children:u})]}),n!==""?e.jsx("p",{className:"input-error",children:n}):null]})}export{p as default};
