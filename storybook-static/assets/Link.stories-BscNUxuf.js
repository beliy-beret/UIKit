import{j as S}from"./jsx-runtime-CkxqCPlQ.js";import{d as P}from"./styled-components.browser.esm-CW2lnlac.js";import{a as r,C as a}from"./colors-BfrfeCNN.js";import{t as _}from"./theme--sRFsRre.js";const j=P.a`
  ${_.text.font14.medium};
  outline: none;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;

  ${({$design:e})=>`
    color: ${r[e][e==="Informative"?"800":"400"]};
    
    &:disabled {
      color: ${e==="Informative"||e==="Body"?a.blue[200]:r[e][200]};
    }
    
    &:active {
      color: ${e==="Informative"?a.blue[600]:r[e][600]};
    };
    
    &:focus-visible {
      box-shadow: 0 0 0 3px ${e==="Informative"?a.blue[200]:r[e][200]}; 
      color: ${e==="Informative"?a.blue[500]:r[e][500]};
    };
    
    @media (hover: hover) {
      &:hover:not(:active) {
        color: ${e==="Informative"?a.blue[500]:r[e][500]};
      }
    }           
  `};
`,h=({design:e="Informative",...C})=>S.jsx(j,{$design:e,...C});h.__docgenInfo={description:"",methods:[],displayName:"Link",props:{design:{required:!1,tsType:{name:"union",raw:"keyof typeof ColorPalette",elements:[{name:"literal",value:"Informative"},{name:"literal",value:"Body"},{name:"literal",value:"Dangerous"},{name:"literal",value:"Completed"},{name:"literal",value:"Primary"},{name:"literal",value:"Warning"}]},description:"",defaultValue:{value:'"Informative"',computed:!1}}}};const D={title:"Example/Links/Link",component:h,parameters:{layout:"standard"},argTypes:{design:{control:{disable:!0}},href:{control:{disable:!0}}},args:{children:"Link component",href:""}},o={},n={args:{design:"Dangerous"}},s={args:{design:"Completed"}},t={args:{design:"Primary"}},i={args:{design:"Warning"}};var m,l,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    design: "Dangerous"
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,f,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    design: "Completed"
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var k,L,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    design: "Primary"
  }
}`,...(y=(L=t.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var b,x,I;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    design: "Warning"
  }
}`,...(I=(x=i.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const W=["Link","LinkDangerous","LinkCompleted","LinkPrimary","LinkWarning"],B=Object.freeze(Object.defineProperty({__proto__:null,Link:o,LinkCompleted:s,LinkDangerous:n,LinkPrimary:t,LinkWarning:i,__namedExportsOrder:W,default:D},Symbol.toStringTag,{value:"Module"}));export{B as L,o as a,n as b,s as c,t as d,i as e};
