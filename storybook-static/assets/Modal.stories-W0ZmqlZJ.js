import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as f}from"./index-DJO9vBfz.js";import{M as C}from"./index-BFfZl-ZO.js";import"./styled-components.browser.esm-CW2lnlac.js";const B={title:"Example/Modal",component:C,parameters:{layout:"standard"},argTypes:{},args:{}},n=({backgroundColor:o="white"})=>e.jsx("p",{style:{maxWidth:"250px",backgroundColor:`${o}`,padding:"24px"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis consectetur corporis delectus, dignissimos, ducimus est eum iusto modi quos ratione voluptatum?"}),s={render:function(x){const[h,t]=f.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>t(!0),children:"Open modal window"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis consectetur corporis delectus, dignissimos, ducimus est eum iusto modi quos ratione voluptatum?"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis consectetur corporis delectus, dignissimos, ducimus est eum iusto modi quos ratione voluptatum?"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis consectetur corporis delectus, dignissimos, ducimus est eum iusto modi quos ratione voluptatum?"}),h&&e.jsx(C,{...x,onClose:()=>t(!1),children:e.jsx(n,{})})]})}},i={args:{children:e.jsx(n,{})}},r={args:{children:e.jsx(n,{backgroundColor:"lightblue"}),transparent:!0}};var u,a,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <div>\r
        <button onClick={() => setOpen(true)}>Open modal window</button>\r
\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur\r
          dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis\r
          consectetur corporis delectus, dignissimos, ducimus est eum iusto modi\r
          quos ratione voluptatum?\r
        </p>\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur\r
          dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis\r
          consectetur corporis delectus, dignissimos, ducimus est eum iusto modi\r
          quos ratione voluptatum?\r
        </p>\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur\r
          dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis\r
          consectetur corporis delectus, dignissimos, ducimus est eum iusto modi\r
          quos ratione voluptatum?\r
        </p>\r
\r
        {open && <ModalComponent {...args} onClose={() => setOpen(false)}>\r
            <Content />\r
          </ModalComponent>}\r
      </div>;
  }
}`,...(m=(a=s.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var d,c,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <Content />
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,g,q;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <Content backgroundColor={"lightblue"} />,
    transparent: true
  }
}`,...(q=(g=r.parameters)==null?void 0:g.docs)==null?void 0:q.source}}};const L=["Modal","DefaultModal","TransparentModal"];export{i as DefaultModal,s as Modal,r as TransparentModal,L as __namedExportsOrder,B as default};
