import{j as m}from"./jsx-runtime-CkxqCPlQ.js";import{d as C}from"./styled-components.browser.esm-CW2lnlac.js";import{a as e,C as o}from"./colors-BfrfeCNN.js";import{L as P}from"./chunk-7R3XDUXW-lOe1RE1N.js";const D=C.a`
  outline: none;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;

  ${({$design:r})=>`
    color: ${e[r][r==="Informative"?"800":"400"]};
    
    &:disabled {
      color: ${r==="Informative"||r==="Body"?o.blue[200]:e[r][200]};
    }
    
    &:active {
      color: ${r==="Informative"?o.blue[600]:e[r][600]};
    };
    
    &:focus-visible {
      box-shadow: 0 0 0 3px ${r==="Informative"?o.blue[200]:e[r][200]}; 
      color: ${r==="Informative"?o.blue[500]:e[r][500]};
    };
    
    @media (hover: hover) {
      &:hover:not(:active) {
        color: ${r==="Informative"?o.blue[500]:e[r][500]};
      }
    }           
  `};
`,W=C(P)`
  outline: none;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;

  ${({$design:r})=>`
    color: ${e[r][r==="Informative"?"800":"400"]};
    
    &:disabled {
      color: ${r==="Informative"||r==="Body"?o.blue[200]:e[r][200]};
    }
    
    &:active {
      color: ${r==="Informative"?o.blue[600]:e[r][600]};
    };
    
    &:focus-visible {
      box-shadow: 0 0 0 3px ${r==="Informative"?o.blue[200]:e[r][200]}; 
      color: ${r==="Informative"?o.blue[500]:e[r][500]};
    };
    
    @media (hover: hover) {
      &:hover:not(:active) {
        color: ${r==="Informative"?o.blue[500]:e[r][500]};
      }
    }           
  `};
`,j=({as:r="a",design:c="Informative",...l})=>r==="a"?m.jsx(D,{$design:c,...l}):m.jsx(W,{$design:c,...l});j.__docgenInfo={description:"",methods:[],displayName:"Link",props:{as:{defaultValue:{value:'"a"',computed:!1},required:!1},design:{defaultValue:{value:'"Informative"',computed:!1},required:!1}}};const E={title:"Example/Links/Link",component:j,parameters:{layout:"standard"},argTypes:{design:{control:{disable:!0}},as:{control:{disable:!0}},href:{control:{disable:!0}}},args:{children:"Link component",as:"a",href:""}},a={},t={args:{design:"Dangerous"}},s={args:{design:"Completed"}},n={args:{design:"Primary"}},i={args:{design:"Warning"}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var f,v,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    design: "Dangerous"
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var L,k,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    design: "Completed"
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var I,g,y;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    design: "Primary"
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,S,_;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    design: "Warning"
  }
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const O=["Link","LinkDangerous","LinkCompleted","LinkPrimary","LinkWarning"],T=Object.freeze(Object.defineProperty({__proto__:null,Link:a,LinkCompleted:s,LinkDangerous:t,LinkPrimary:n,LinkWarning:i,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{T as L,a,t as b,s as c,n as d,i as e};
