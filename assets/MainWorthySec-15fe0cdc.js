import{a,r as m,j as t,c as x,C as y,L as w,P as j}from"./index-52b649d4.js";import{P as p}from"./PromoLines-e1efd06c.js";const u="we are",N="Born in Unix",T="w",v="Contact Us",k="rthy",L="Clients all around the globe",C="Get in touch!",b="Cotact us",f="/contacts",e={worthyTitle:u,worthySmallText:N,worthyTitleContinue:T,worthyBtnAlt:v,worhtyTitleEnd:k,worthySmallTextTwo:L,worthyLinkName:C,worthyLinkTitle:b,worthyLinkTo:f};function E(){const[o,l]=a.useState([]),[r,n]=a.useState(!1),i=m.useMediaQuery({maxWidth:880}),c=()=>{n(!0),document.body.classList.add("modal-open")},h=()=>{n(!1),document.body.classList.remove("modal-open")};return a.useEffect(()=>{try{fetch("./pubdata/mainWorthyItems.json").then(s=>s.json()).then(s=>{l(s)})}catch(s){console.log("An error occurred while fetching data:",s)}},[]),t.jsxs("section",{id:"we-worthy-sec",children:[t.jsxs("div",{className:"gradientWorthy",children:[t.jsx("div",{className:"promo-second",children:t.jsx(p,{})}),t.jsxs("div",{className:"container",children:[t.jsx("h3",{className:"h3",children:e.worthyTitle}),t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{className:"title-ending ",children:[t.jsx("span",{className:"small-text",children:e.worthySmallText}),"  ",t.jsx("span",{className:"h3 margin",children:e.worthyTitleContinue}),t.jsx("span",{children:t.jsx("button",{type:"button",className:"btn btn-circle",onClick:c,children:t.jsx("img",{src:x,alt:e.worthyBtnAlt})})}),t.jsx("span",{className:"h3",children:e.worhtyTitleEnd})]}),t.jsx("div",{className:"around-title small-text",children:e.worthySmallTextTwo}),t.jsx(y,{isOpen:r,onClose:h})]})]})]}),t.jsx("div",{className:"container",children:t.jsxs("div",{className:"worthy-grid",children:[t.jsx("div",{className:"empty",children:t.jsx(w,{to:e.worthyLinkTo,className:"small-link",title:e.worthyLinkTitle,"data-aos":"zoom-in","data-aos-easing":"ease-out-cubic","data-aos-duration":"500",children:t.jsx("span",{className:"mask",children:t.jsxs("div",{className:"small-link-container",children:[t.jsx("span",{className:"small-link-title1 title",children:e.worthyLinkName}),t.jsx("span",{className:"small-link-title2 title",children:e.worthyLinkName})]})})})}),t.jsx("div",{className:"border1"}),t.jsx("div",{className:"nocontent"}),t.jsx("div",{className:"nocontent"}),o.map((s,d)=>t.jsxs("div",{className:s.worthyItemClass,children:[t.jsx("p",{children:s.worthyItemText}),i?t.jsx("div",{children:s.worthyItemCount}):t.jsx(j,{translateX:["-20px","50px"],children:t.jsx("div",{children:s.worthyItemCount})})]},d))]})})]})}export{E as default};
