import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as G}from"./index-DJO9vBfz.js";import{d as l}from"./styled-components.browser.esm-CW2lnlac.js";import{C as s}from"./colors-BfrfeCNN.js";import{t as $}from"./theme--sRFsRre.js";const w=l.div`
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
`,R=l.div`
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
`,O=l.article`
  display: flex;
  flex-direction: column;
  transition: background-color 200ms linear;

  &[aria-expanded="true"] {
    background-color: ${s.blueGray[25]};

    ${R} {
      height: auto;

      p[aria-label="accordion-description"] {
        translate: 0 0;
      }

      div[aria-label="accordion-description"] {
        translate: 0 0;
      }
    }

    ${w} {
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
`,n=({open:c=!1,title:r,className:q="",id:T,children:d})=>{const[p,k]=G.useState(c);return e.jsxs(O,{className:q,id:T,"aria-expanded":p,children:[e.jsxs(w,{onClick:()=>k(!p),children:[e.jsx("span",{"aria-label":"accordion-title",children:r}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",fill:"#1D1C29"})})]}),e.jsx(R,{children:typeof d=="string"?e.jsx("p",{"aria-label":"accordion-description",children:d}):e.jsx("div",{"aria-label":"accordion-description",children:d})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const D={tags:["autodocs"],title:"Example/Accordion",component:n,parameters:{layout:"standard"},args:{title:"Accordion Headline",children:"Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Tortor posuere ac ut consequat semper viverra nam libero."}},o={args:{}},a={args:{open:!0}},i={render:function(r){return e.jsx(n,{...r,children:e.jsxs("ul",{children:[e.jsx("li",{children:"Январь"}),e.jsx("li",{children:"Февраль"}),e.jsx("li",{children:"Март"}),e.jsx("li",{children:"Апрель"})]})})}},t={render:function(r){return e.jsxs("div",{children:[e.jsx(n,{...r}),e.jsx(n,{...r}),e.jsx(n,{...r}),e.jsx(n,{...r})]})}};var u,m,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,j,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var C,y,A;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function Render(args) {
    return <div>\r
        <Component {...args} />\r
        <Component {...args} />\r
        <Component {...args} />\r
        <Component {...args} />\r
      </div>;
  }
}`,...(A=(y=t.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const I=["Accordion","OpenAccordion","WithChildren","AccordionGroup"];export{o as Accordion,t as AccordionGroup,a as OpenAccordion,i as WithChildren,I as __namedExportsOrder,D as default};
