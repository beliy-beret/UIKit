import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{d as g}from"./styled-components.browser.esm-CW2lnlac.js";import"./index-DJO9vBfz.js";const f=g.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  aspect-ratio: 1;
  background-color: #1b4dcb;
  color: #f7faff;
  overflow: hidden;

  ${({$variant:e})=>e==="Small"&&"width: 28px;"}
  ${({$variant:e})=>e==="Medium"&&"width: 40px;"}
  ${({$variant:e})=>e==="Large"&&"width: 80px;"}
  
  img {
    width: 100%;
    height: 100%;
  }

  p {
    margin: 0;
    ${({$variant:e})=>e==="Small"&&"font-size: 12px;"}
    ${({$variant:e})=>e==="Medium"&&"font-size: 20px;"}
    ${({$variant:e})=>e==="Large"&&"font-size: 38px;"}
  }
`,p=({variant:e="Medium",className:u="",userInitials:c,imgSrc:s})=>t.jsx(f,{$variant:e,className:u,children:s?t.jsx("img",{src:s,alt:""}):t.jsx("p",{children:c})});p.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"Small" | "Medium" | "Large"',elements:[{name:"literal",value:'"Small"'},{name:"literal",value:'"Medium"'},{name:"literal",value:'"Large"'}]},description:"",defaultValue:{value:'"Medium"',computed:!1}},imgSrc:{required:!1,tsType:{name:"string"},description:""},userInitials:{required:!0,tsType:{name:"string"},description:""}}};const h=""+new URL("pikachu-Det58s5j.png",import.meta.url).href,I={title:"Example/Avatar",component:p,parameters:{layout:"standard"},argTypes:{}},a={args:{imgSrc:h,userInitials:"SS"}},r={args:{userInitials:"SS"}};var i,n,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    imgSrc: avatar,
    userInitials: "SS"
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    userInitials: "SS"
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const y=["WithImage","WithoutImage"];export{a as WithImage,r as WithoutImage,y as __namedExportsOrder,I as default};
