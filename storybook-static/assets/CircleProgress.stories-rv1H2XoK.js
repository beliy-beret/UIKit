import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{d as $}from"./styled-components.browser.esm-CW2lnlac.js";import{C as a}from"./colors-BfrfeCNN.js";import{t as r}from"./theme--sRFsRre.js";import"./index-DJO9vBfz.js";const G=$.div`
  * {
    padding: 0;
    margin: 0;
  }

  box-sizing: border-box;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({$status:e})=>`
    conic-gradient(
      ${a.blue[400]} 0 ${e}%,
      ${a.blueGray[25]} ${e}%
    )
  `};

  ${({$size:e})=>e==="xxs"?"width: 64px; padding: 6px;":e==="xs"?"width: 160px; padding: 16px;":e==="sm"?"width: 200px; padding: 20px;":e==="md"?"width: 240px; padding: 24px;":"width: 280px; padding: 28px;"};

  div.progress-info {
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;

    p.progress-label {
      color: ${a.blueGray[400]};
      display: ${({$size:e})=>e==="xxs"?"none":"block"};
      ${()=>r.text.font12.medium};
    }

    p.progress-status {
      color: ${a.blueGray[800]};

      ${({$size:e})=>e==="xxs"?r.text.font14.bold:e==="xs"?r.header.font24.bold:e==="sm"?r.header.font30.bold:e==="md"?r.header.font36.bold:r.header.font60.bold};
    }
  }
`,C=({status:e,label:l,size:X="xs"})=>s.jsx(G,{$status:e,$size:X,children:s.jsxs("div",{className:"progress-info",children:[l&&s.jsx("p",{className:"progress-label",children:l}),s.jsxs("p",{className:"progress-status",children:[e,"%"]})]})});C.__docgenInfo={description:"",methods:[],displayName:"CircleProgress",props:{status:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xxs" | "xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xxs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"xs"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Example/Progress/CircleProgress",component:C,parameters:{layout:"standard"},argTypes:{},args:{label:"Label",status:60}},o={args:{size:"xxs"}},t={args:{size:"xs"}},n={args:{size:"sm"}},i={args:{size:"md"}},d={args:{size:"lg"}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "xxs"
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "xs"
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,b,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,S,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var w,z,j;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(j=(z=d.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const q=["XXS","XS","SM","MD","LG"];export{d as LG,i as MD,n as SM,t as XS,o as XXS,q as __namedExportsOrder,k as default};
