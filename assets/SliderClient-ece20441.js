import{r as a,_ as d,j as e,R as r,b as t,d as c}from"./index-22ec33c2.js";import{q as p}from"./quote-c0395296.js";const f=a.lazy(()=>d(()=>import("./index-4338944a.js").then(l=>l.i),["assets/index-4338944a.js","assets/index-22ec33c2.js","assets/index-01423dd3.css"])),n=a.lazy(()=>d(()=>import("./Arrow-e1d214f2.js"),["assets/Arrow-e1d214f2.js","assets/index-22ec33c2.js","assets/index-01423dd3.css"]));function S(){const l=a.useRef(),[i,o]=a.useState({clientSlider:[]});a.useEffect(()=>{try{fetch("./pubdata/mainOurClient.json").then(s=>s.json()).then(s=>{o(s)})}catch(s){console.log(s)}},[]);const x=i.clientSlider,h={dots:!1,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,arrows:!1,lazyLoad:!0,centerMode:!1};function j(){l.current.slickPrev()}function u(){l.current.slickNext()}return e.jsxs(r.Fragment,{children:[e.jsxs("div",{className:"flex-clients separator",children:[e.jsxs("div",{className:"client-wrap",children:[e.jsx("h3",{className:"h3",children:i.clientTitleStart}),e.jsx("div",{className:"h3",children:i.clientTitleEnd})]}),e.jsxs("div",{className:"small-text",children:[e.jsx("p",{children:i.clientSmallTextStart}),e.jsx("p",{children:i.clientSmallTextEnd})]}),e.jsxs("div",{className:"arrows",children:[e.jsx("div",{className:"arrow-btn",onClick:u,children:e.jsx(a.Suspense,{fallback:e.jsx(t,{}),children:e.jsx(n,{})})}),e.jsx("div",{className:"arrow-btn",onClick:j,children:e.jsx(a.Suspense,{fallback:e.jsx(t,{}),children:e.jsx(n,{})})})]})]}),e.jsxs("div",{className:"flex-slider-sec",children:[e.jsx("div",{className:"empty"}),e.jsx("div",{className:"slider",children:e.jsx(a.Suspense,{fallback:e.jsx(t,{}),children:e.jsx(f,{...h,ref:l,children:x.map((s,m)=>e.jsxs(r.Fragment,{children:[e.jsxs("div",{className:"client-slider",children:[e.jsx("div",{className:"quote",children:e.jsx(c.LazyLoadImage,{src:p,alt:"Quote picture",effect:"blur"})}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("p",{"data-aos":"fade-up-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"500",children:s.clientReviewStart}),e.jsx("p",{"data-aos":"fade-up-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"500","data-aos-delay":"200",children:s.clientReviewEnd})]})})]}),e.jsxs("div",{className:"gen-slider-descr",children:[e.jsx("div",{className:"pic-wrap",children:e.jsx(c.LazyLoadImage,{src:s.clientAvatarUrl,alt:s.clientName,effect:"blur"})}),e.jsxs("div",{className:"text",children:[e.jsx("div",{className:"panchang",children:s.clientName}),e.jsx("div",{children:s.clientPosition})]})]})]},m))})})})]})]})}export{S as default};
