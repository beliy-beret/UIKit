import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{d as f}from"./styled-components.browser.esm-CW2lnlac.js";import{t as s}from"./theme-BVt_iaI7.js";import"./index-DJO9vBfz.js";const h=f.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  aspect-ratio: 1;
  background-color: #1b4dcb;
  color: #f7faff;
  overflow: hidden;

  ${({$variant:e})=>e==="Small"&&"width: 24px;"}
  ${({$variant:e})=>e==="Medium"&&"width: 40px;"}
  ${({$variant:e})=>e==="Large"&&"width: 80px;"}
  
  img {
    width: 100%;
    height: 100%;
  }

  p {
    margin: 0;
    ${({$variant:e})=>e==="Small"&&s.text.font12.semibold};
    ${({$variant:e})=>e==="Medium"&&s.text.font20.semibold};
    ${({$variant:e})=>e==="Large"&&`${s.header.font36.semibold}; font-size: 38px`};
  }
`,u=({variant:e="Medium",className:c="",userInitials:g,imgSrc:i})=>t.jsx(h,{$variant:e,className:c,children:i?t.jsx("img",{src:i,alt:""}):t.jsx("p",{children:g})});u.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"Small" | "Medium" | "Large"',elements:[{name:"literal",value:'"Small"'},{name:"literal",value:'"Medium"'},{name:"literal",value:'"Large"'}]},description:"",defaultValue:{value:'"Medium"',computed:!1}},imgSrc:{required:!1,tsType:{name:"string"},description:""},userInitials:{required:!0,tsType:{name:"string"},description:""}}};const S=""+new URL("pikachu-Det58s5j.png",import.meta.url).href,y={title:"Example/Avatar",component:u,parameters:{layout:"standard"},argTypes:{}},a={args:{imgSrc:S,userInitials:"SS"}},r={args:{userInitials:"SS"}};var o,n,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    imgSrc: avatar,
    userInitials: "SS"
  }
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    userInitials: "SS"
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const b=["WithImage","WithoutImage"];export{a as WithImage,r as WithoutImage,b as __namedExportsOrder,y as default};
