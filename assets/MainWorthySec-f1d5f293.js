import{r as a,_ as l,a as x,j as t,b as y,L as w,P as j}from"./index-e8f8d181.js";const u="we are",p="Born in Unix",N="w",T="Contact Us",v="rthy",k="Clients all around the globe",L="Get in touch!",b="Cotact us",C="/contacts",e={worthyTitle:u,worthySmallText:p,worthyTitleContinue:N,worthyBtnAlt:T,worhtyTitleEnd:v,worthySmallTextTwo:k,worthyLinkName:L,worthyLinkTitle:b,worthyLinkTo:C},_=a.lazy(()=>l(()=>import("./index-e8f8d181.js").then(n=>n.q),["assets/index-e8f8d181.js","assets/index-e1970867.css"])),f=a.lazy(()=>l(()=>import("./PromoLines-1acf15b0.js"),["assets/PromoLines-1acf15b0.js","assets/index-e8f8d181.js","assets/index-e1970867.css"]));function E(){const[n,i]=a.useState([]),[r,o]=a.useState(!1),c=x.useMediaQuery({maxWidth:880}),d=()=>{o(!0),document.body.classList.add("modal-open")},h=()=>{o(!1),document.body.classList.remove("modal-open")};return a.useEffect(()=>{try{fetch("./pubdata/mainWorthyItems.json").then(s=>s.json()).then(s=>{i(s)})}catch(s){console.log("An error occurred while fetching data:",s)}},[]),t.jsxs("section",{id:"we-worthy-sec",children:[t.jsxs("div",{className:"gradientWorthy",children:[t.jsx("div",{className:"promo-second",children:t.jsx(a.Suspense,{fallback:"loading",children:t.jsx(f,{})})}),t.jsxs("div",{className:"container",children:[t.jsx("h3",{className:"h3",children:e.worthyTitle}),t.jsxs("div",{className:"wrap",children:[t.jsxs("div",{className:"title-ending ",children:[t.jsx("span",{className:"small-text",children:e.worthySmallText}),"  ",t.jsx("span",{className:"h3 margin",children:e.worthyTitleContinue}),t.jsx("span",{children:t.jsx("button",{type:"button",className:"btn btn-circle",onClick:d,children:t.jsx("img",{src:y,alt:e.worthyBtnAlt})})}),t.jsx("span",{className:"h3",children:e.worhtyTitleEnd})]}),t.jsx("div",{className:"around-title small-text",children:e.worthySmallTextTwo}),t.jsx(a.Suspense,{fallback:"loading",children:t.jsx(_,{isOpen:r,onClose:h})})]})]})]}),t.jsx("div",{className:"container",children:t.jsxs("div",{className:"worthy-grid",children:[t.jsx("div",{className:"empty",children:t.jsx(w,{to:e.worthyLinkTo,className:"small-link",title:e.worthyLinkTitle,"data-aos":"zoom-in","data-aos-easing":"ease-out-cubic","data-aos-duration":"500",children:t.jsx("span",{className:"mask",children:t.jsxs("div",{className:"small-link-container",children:[t.jsx("span",{className:"small-link-title1 title",children:e.worthyLinkName}),t.jsx("span",{className:"small-link-title2 title",children:e.worthyLinkName})]})})})}),t.jsx("div",{className:"border1"}),t.jsx("div",{className:"nocontent"}),t.jsx("div",{className:"nocontent"}),n.map((s,m)=>t.jsxs("div",{className:s.worthyItemClass,children:[t.jsx("p",{children:s.worthyItemText}),c?t.jsx("div",{children:s.worthyItemCount}):t.jsx(j,{translateX:["-20px","50px"],children:t.jsx("div",{children:s.worthyItemCount})})]},m))]})})]})}export{E as default};
