import{a as l,j as e,R as t,S as u,b as r}from"./index-52b649d4.js";import{q as m}from"./quote-c0395296.js";import{A as c}from"./Arrow-437d983a.js";function f(){const i=l.useRef(),[a,n]=l.useState({clientSlider:[]});l.useEffect(()=>{try{fetch("./pubdata/mainOurClient.json").then(s=>s.json()).then(s=>{n(s)})}catch(s){console.log(s)}},[]);const d=a.clientSlider,o={dots:!1,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,arrows:!1,lazyLoad:!0,centerMode:!1};function x(){i.current.slickPrev()}function h(){i.current.slickNext()}return e.jsxs(t.Fragment,{children:[e.jsxs("div",{className:"flex-clients separator",children:[e.jsxs("div",{className:"client-wrap",children:[e.jsx("h3",{className:"h3",children:a.clientTitleStart}),e.jsx("div",{className:"h3",children:a.clientTitleEnd})]}),e.jsxs("div",{className:"small-text",children:[e.jsx("p",{children:a.clientSmallTextStart}),e.jsx("p",{children:a.clientSmallTextEnd})]}),e.jsxs("div",{className:"arrows",children:[e.jsx("div",{className:"arrow-btn",onClick:h,children:e.jsx(c,{})}),e.jsx("div",{className:"arrow-btn",onClick:x,children:e.jsx(c,{})})]})]}),e.jsxs("div",{className:"flex-slider-sec",children:[e.jsx("div",{className:"empty"}),e.jsx("div",{className:"slider",children:e.jsx(u,{...o,ref:i,children:d.map((s,j)=>e.jsxs(t.Fragment,{children:[e.jsxs("div",{className:"client-slider",children:[e.jsx("div",{className:"quote",children:e.jsx(r.LazyLoadImage,{src:m,alt:"Quote picture",effect:"blur"})}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("p",{"data-aos":"fade-up-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"500",children:s.clientReviewStart}),e.jsx("p",{"data-aos":"fade-up-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"500","data-aos-delay":"200",children:s.clientReviewEnd})]})})]}),e.jsxs("div",{className:"gen-slider-descr",children:[e.jsx("div",{className:"pic-wrap",children:e.jsx(r.LazyLoadImage,{src:s.clientAvatarUrl,alt:s.clientName,effect:"blur"})}),e.jsxs("div",{className:"text",children:[e.jsx("div",{className:"panchang",children:s.clientName}),e.jsx("div",{children:s.clientPosition})]})]})]},j))})})]})]})}function S(){return e.jsx("section",{id:"our-client",children:e.jsx("div",{className:"container",children:e.jsx(f,{})})})}export{S as default};
