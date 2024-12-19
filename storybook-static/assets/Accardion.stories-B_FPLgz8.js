import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as q}from"./index-DJO9vBfz.js";import{d as i}from"./styled-components.browser.esm-CW2lnlac.js";import{C as s}from"./colors-BfrfeCNN.js";import{t as b}from"./theme-BVt_iaI7.js";const j=i.div`
  ${b.text.font16.medium};
  border: none;
  background-color: transparent;
  padding: 8px 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  color: ${s.blueGray[800]};

  svg {
    flex-shrink: 0;
    margin-left: auto;
    width: 24px;
    height: 24px;
    transition: rotate 200ms ease-in-out;
  }
`,y=i.div`
  overflow: hidden;
  height: 0;

  p[aria-label="accordion-description"] {
    ${b.text.font14.regular}
    padding: 4px 16px 8px;
    color: ${s.blueGray[500]};
    translate: 0 -100%;
    transition: translate 200ms linear;
  }
`,T=i.article`
  display: flex;
  flex-direction: column;
  transition: background-color 200ms linear;

  &[aria-expanded="true"] {
    background-color: ${s.blueGray[25]};

    ${y} {
      height: auto;

      p[aria-label="accordion-description"] {
        translate: 0 0;
      }
    }

    ${j} {
      svg {
        rotate: 180deg;
      }
    }
  }

  @media (hover: hover) {
    &:hover:not([aria-expanded="true"]) {
      background-color: ${s.blueGray[25]};
    }
  }
`,o=({description:c,open:r=!1,title:C,className:A="",id:$})=>{const[d,w]=q.useState(r);return e.jsxs(T,{className:A,id:$,"aria-expanded":d,children:[e.jsxs(j,{onClick:()=>w(!d),children:[e.jsx("span",{"aria-label":"accordion-title",children:C}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",fill:"#1D1C29"})})]}),e.jsx(y,{children:e.jsx("p",{"aria-label":"accordion-description",children:c})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Example/Accordion",component:o,parameters:{layout:"standard"},args:{title:"Accordion Headline",description:"Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Tortor posuere ac ut consequat semper viverra nam libero."}},n={},a={args:{open:!0}},t={render:function(r){return e.jsxs("div",{children:[e.jsx(o,{...r}),e.jsx(o,{...r}),e.jsx(o,{...r}),e.jsx(o,{...r})]})}};var p,l,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,x,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,h,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render(args) {
    return <div>\r
        <Component {...args} />\r
        <Component {...args} />\r
        <Component {...args} />\r
        <Component {...args} />\r
      </div>;
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const S=["Accordion","OpenAccordion","AccordionGroup"];export{n as Accordion,t as AccordionGroup,a as OpenAccordion,S as __namedExportsOrder,L as default};
