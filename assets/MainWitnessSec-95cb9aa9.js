import{a,_ as o,j as s,b as d}from"./index-1ad07731.js";const c="Witness the beauty",u="safe and beneficial design for humanity.",i={mainWitnessTitle:c,mainWitnessSubtext:u},m=a.lazy(()=>o(()=>import("./index-e057eabe.js").then(t=>t.i),["assets/index-e057eabe.js","assets/index-1ad07731.js","assets/index-5ad7ae81.css"]));function h(){const[t,n]=a.useState([]);a.useEffect(()=>{try{fetch("./pubdata/mainWitSliderItems.json").then(e=>e.json()).then(e=>{n(e)})}catch(e){console.log(e)}},[]);const r={className:"center",dots:!0,infinite:!0,speed:200,slidesToShow:3,slidesToScroll:3,autoplay:!0,pauseOnDotsHover:!0,lazyLoad:!0,centerPadding:"100px",arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,autoplay:!1}},{breakpoint:660,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!1}}]};return s.jsx(a.Suspense,{fallback:"loading",children:s.jsx(m,{...r,children:t.map((e,l)=>s.jsxs("li",{children:[s.jsx("div",{className:"slider-img-wrap",children:s.jsx(d.LazyLoadImage,{src:e.witSliderImgUrl,alt:e.witSliderImgAlt,effect:"blur"})}),s.jsxs("div",{className:"slider-descr",children:[s.jsx("div",{className:"panchang",children:e.witSliderItemTitle}),s.jsx("div",{children:e.witSliderItemService})]})]},l))})})}function S(){return s.jsxs("section",{id:"witness-sec",children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"h2","data-aos":"zoom-in-right","data-aos-easing":"ease-out-quart","data-aos-duration":"200",children:i.mainWitnessTitle}),s.jsx("div",{className:"subtext","data-aos":"zoom-in-right","data-aos-easing":"ease-out-quart","data-aos-duration":"500","data-aos-delay":"100",children:i.mainWitnessSubtext})]}),s.jsx("ul",{className:"witness-slider","data-aos":"slide-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"400","data-aos-delay":"100",children:s.jsx(h,{})})]})}export{S as default};
