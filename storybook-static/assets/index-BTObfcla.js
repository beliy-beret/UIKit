import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{d}from"./styled-components.browser.esm-CW2lnlac.js";import{t}from"./theme--sRFsRre.js";const l=d.div`
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
    ${({$variant:e})=>e==="Small"&&t.text.font12.semibold};
    ${({$variant:e})=>e==="Medium"&&t.text.font20.semibold};
    ${({$variant:e})=>e==="Large"&&`${t.header.font36.semibold}; font-size: 38px`};
  }
`,m=({variant:e="Medium",className:r="",userInitials:s,imgSrc:i})=>a.jsx(l,{$variant:e,className:r,children:i?a.jsx("img",{src:i,alt:""}):a.jsx("p",{children:s})});m.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"Small" | "Medium" | "Large"',elements:[{name:"literal",value:'"Small"'},{name:"literal",value:'"Medium"'},{name:"literal",value:'"Large"'}]},description:"",defaultValue:{value:'"Medium"',computed:!1}},imgSrc:{required:!1,tsType:{name:"string"},description:""},userInitials:{required:!0,tsType:{name:"string"},description:""}}};export{m as A};
