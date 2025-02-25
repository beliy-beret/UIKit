import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as S}from"./index-DJO9vBfz.js";import{d as l}from"./styled-components.browser.esm-CW2lnlac.js";import{C as s}from"./colors-BfrfeCNN.js";import{t as $}from"./theme--sRFsRre.js";const R=l.div`
  ${$.text.font16.medium};
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
`,T=l.div`
  overflow: hidden;
  height: 0;

  p[aria-label="accordion-description"] {
    ${$.text.font14.regular}
    padding: 4px 16px 8px;
    color: ${s.blueGray[500]};
    translate: 0 -100%;
    transition: translate 200ms linear;
  }

  div[aria-label="accordion-description"] {
    padding: 4px 16px 8px;
    translate: 0 -100%;
    transition: translate 200ms linear;
  }
`,E=l.article`
  display: flex;
  flex-direction: column;
  transition: background-color 200ms linear;

  &[aria-expanded="true"] {
    background-color: ${s.blueGray[25]};

    ${T} {
      height: auto;

      p[aria-label="accordion-description"] {
        translate: 0 0;
      }

      div[aria-label="accordion-description"] {
        translate: 0 0;
      }
    }

    ${R} {
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
`,n=({open:c=!1,title:r,className:q="",id:k,onClick:p,children:d})=>{const[u,G]=S.useState(c),O=()=>{if(p)return p();G(!u)};return e.jsxs(E,{className:q,id:k,"aria-expanded":u,children:[e.jsxs(R,{onClick:O,children:[e.jsx("span",{"aria-label":"accordion-title",children:r}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",fill:"#1D1C29"})})]}),e.jsx(T,{children:typeof d=="string"?e.jsx("p",{"aria-label":"accordion-description",children:d}):e.jsx("div",{"aria-label":"accordion-description",children:d})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const V={tags:["autodocs"],title:"Example/Accordion",component:n,parameters:{layout:"standard"},args:{title:"Accordion Headline",children:"Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Tortor posuere ac ut consequat semper viverra nam libero."}},o={args:{}},a={args:{open:!0}},i={render:function(r){return e.jsx(n,{...r,children:e.jsxs("ul",{children:[e.jsx("li",{children:"Январь"}),e.jsx("li",{children:"Февраль"}),e.jsx("li",{children:"Март"}),e.jsx("li",{children:"Апрель"})]})})}},t={render:function(r){return e.jsxs("div",{children:[e.jsx(n,{...r}),e.jsx(n,{...r}),e.jsx(n,{...r}),e.jsx(n,{...r})]})}};var m,x,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,h,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,b,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Component {...args}>\r
        <ul>\r
          <li>Январь</li>\r
          <li>Февраль</li>\r
          <li>Март</li>\r
          <li>Апрель</li>\r
        </ul>\r
      </Component>;
  }
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var y,A,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: function Render(args) {
    return <div>\r
        <Component {...args} />\r
        <Component {...args} />\r
        <Component {...args} />\r
        <Component {...args} />\r
      </div>;
  }
}`,...(w=(A=t.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};const W=["Accordion","OpenAccordion","WithChildren","AccordionGroup"];export{o as Accordion,t as AccordionGroup,a as OpenAccordion,i as WithChildren,W as __namedExportsOrder,V as default};
