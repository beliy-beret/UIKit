import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{B as f}from"./index-Bcy4NeBU.js";import{d as c}from"./styled-components.browser.esm-CW2lnlac.js";import{I as C,a as h,P as g,E as v}from"./index-BMMvJlDP.js";import"./colors-BfrfeCNN.js";import"./theme--sRFsRre.js";import"./InvestPersonal-oKB6WfLc.js";const u=e=>t.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M1 2.5C1 1.67157 1.67157 1 2.5 1L5.5 1C6.32843 1 7 1.67157 7 2.5V5.5C7 6.32843 6.32843 7 5.5 7H2.5C1.67157 7 1 6.32843 1 5.5L1 2.5ZM2.5 2C2.22386 2 2 2.22386 2 2.5V5.5C2 5.77614 2.22386 6 2.5 6H5.5C5.77614 6 6 5.77614 6 5.5V2.5C6 2.22386 5.77614 2 5.5 2H2.5ZM9 2.5C9 1.67157 9.67157 1 10.5 1L13.5 1C14.3284 1 15 1.67157 15 2.5V5.5C15 6.32843 14.3284 7 13.5 7H10.5C9.67157 7 9 6.32843 9 5.5V2.5ZM10.5 2C10.2239 2 10 2.22386 10 2.5V5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2H10.5ZM1 10.5C1 9.67157 1.67157 9 2.5 9H5.5C6.32843 9 7 9.67157 7 10.5V13.5C7 14.3284 6.32843 15 5.5 15H2.5C1.67157 15 1 14.3284 1 13.5L1 10.5ZM2.5 10C2.22386 10 2 10.2239 2 10.5V13.5C2 13.7761 2.22386 14 2.5 14H5.5C5.77614 14 6 13.7761 6 13.5V10.5C6 10.2239 5.77614 10 5.5 10H2.5ZM9 10.5C9 9.67157 9.67157 9 10.5 9H13.5C14.3284 9 15 9.67157 15 10.5V13.5C15 14.3284 14.3284 15 13.5 15H10.5C9.67157 15 9 14.3284 9 13.5V10.5ZM10.5 10C10.2239 10 10 10.2239 10 10.5V13.5C10 13.7761 10.2239 14 10.5 14H13.5C13.7761 14 14 13.7761 14 13.5V10.5C14 10.2239 13.7761 10 13.5 10H10.5Z",fill:"#10338A"})});u.__docgenInfo={description:"",methods:[],displayName:"ButtonIcon"};const P=c.div`
  width: 266px;
  position: absolute;
  bottom: -6px;
  right: 0;
  translate: 0 100%;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  background-color: #ffffff;
  box-shadow: 0 8px 16px -4px rgba(142, 140, 163, 0.08);
  padding: 24px;
  animation: show 300ms ease-in-out forwards;

  &:after {
    position: absolute;
    top: -6px;
    right: 12px;
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ffffff;
  }
`,j=c.div`
  width: fit-content;
  position: relative;

  button {
    padding: unset;
    aspect-ratio: 1;
    width: 36px;
  }
`,m=({children:e,onClose:o})=>{const r=s.useRef(null);return s.useEffect(()=>{const i=x=>{r.current&&!r.current.contains(x.target)&&o()};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]),t.jsx(P,{ref:r,onClick:o,children:e})};m.__docgenInfo={description:"",methods:[],displayName:"PortalList",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const a=({children:e})=>{const[o,r]=s.useState(!1);return t.jsxs(j,{children:[o&&t.jsx(m,{onClose:()=>r(!1),children:e}),t.jsx(f,{variant:"Text",onClick:()=>r(!0),children:t.jsx(u,{})})]})};a.__docgenInfo={description:"",methods:[],displayName:"PortalBox",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const M={title:"Example/PortalsBox",component:a,parameters:{layout:"standard"},args:{children:""}},n={render:function(){return t.jsx("div",{style:{display:"flex",justifyContent:"end"},children:t.jsxs(a,{children:[t.jsx(C,{}),t.jsx(h,{}),t.jsx(g,{}),t.jsx(v,{})]})})}};var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      display: "flex",
      justifyContent: "end"
    }}>\r
        <MyComponent>\r
          <Portals.InvestPortal />\r
          <Portals.InvestorSupport />\r
          <Portals.Personal />\r
          <Portals.Export />\r
        </MyComponent>\r
      </div>;
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const L=["PortalBox"];export{n as PortalBox,L as __namedExportsOrder,M as default};
