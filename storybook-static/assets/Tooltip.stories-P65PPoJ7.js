import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{d as g}from"./styled-components.browser.esm-CW2lnlac.js";import{C as m}from"./colors-BfrfeCNN.js";import{t as q}from"./theme--sRFsRre.js";import{r as R}from"./index-DJO9vBfz.js";import{B as o}from"./index-Bcy4NeBU.js";const K={LIGHT:`color: ${m.blueGray[800]}; background-color: ${m.blueGray[10]};`,DARK:`color: ${m.blueGray[10]}; background-color: ${m.blueGray[800]};`},k={LIGHT:m.blueGray[10],DARK:m.blueGray[800]},C={TOP:"top: -7px; left: 50%; translate: -50% -100%;",TR:"top: -7px; left: 50%; translate: -50% -100%;",TL:"top: -7px; left: 50%; translate: -50% -100%;",BOTTOM:"bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",BL:"bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",BR:"bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",LEFT:"bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",LT:"bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",LB:"bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",RIGHT:"bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg",RT:"bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg",RB:"bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg"},G=g.div`
  box-sizing: border-box;
  position: fixed;
  z-index: 1000;
  top: -150%;
  left: 0;
  opacity: 0;
  border-radius: 8px;
  width: fit-content;
  height: auto;
  padding: 8px 12px;
  max-width: ${({$maxWidth:a})=>`${a}px`};
  transition: opacity 300ms ease-in-out;

  ${q.text.font12.medium};
  ${({$variant:a})=>K[a]};
`,z=g.div`
  position: relative;
  width: fit-content;
  max-height: fit-content;

  svg.tooltip-triangle {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    transition: opacity 300ms ease-in-out;

    path {
      fill: ${({$variant:a})=>k[a]};
    }
    ${({$position:a})=>C[a]};
  }

  &[aria-expanded="true"] {
    ${G} {
      opacity: 1;
    }
    svg.tooltip-triangle {
      width: 12px;
      height: 6px;
      opacity: 1;
    }
  }
`,H=a=>t.jsx("svg",{className:"tooltip-triangle",width:12,height:6,viewBox:"0 0 12 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:t.jsx("path",{d:"M6 6L0 0H12L6 6Z",fill:"#0B1429"})});H.__docgenInfo={description:"",methods:[],displayName:"SvgComponent"};const e=({children:a,content:n,maxWidth:A=200,variant:v="DARK",position:s,open:M=!1,triangle:V=!0})=>{const r=R.useRef(null),[b,i]=R.useState(s||"TOP"),[_,y]=R.useState(!1),F=c=>{y(!0);const j=window.innerWidth,{left:d,top:p,right:u,bottom:x}=c.currentTarget.getBoundingClientRect();if(r.current){const l=r.current.clientWidth,T=r.current.clientHeight;if(s==="TL"){r.current.style.top=`${p-T-12}px`,r.current.style.left=`${d}px`,i("TL");return}if(s==="TOP"){r.current.style.top=`${p-T-12}px`,r.current.style.left=`${d-(l-c.currentTarget.clientWidth)/2}px`,i("TOP");return}if(s==="TR"){r.current.style.top=`${p-T-12}px`,r.current.style.left=`${u-l}px`,i("TR");return}if(s==="RT"){r.current.style.left=`${u+12}px`,r.current.style.top=`${p}px`,i("RT");return}if(s==="RIGHT"){r.current.style.left=`${u+12}px`,r.current.style.top=`${p-(T-c.currentTarget.clientHeight)/2}px`,i("RIGHT");return}if(s==="RB"){r.current.style.left=`${u+12}px`,r.current.style.top=`${x-T}px`,i("RB");return}if(s==="BR"){r.current.style.top=`${x+12}px`,r.current.style.left=`${u-l}px`,i("BR");return}if(s==="BOTTOM"){r.current.style.top=`${x+12}px`,r.current.style.left=`${d-(l-c.currentTarget.clientWidth)/2}px`,i("BOTTOM");return}if(s==="BL"){r.current.style.top=`${x+12}px`,r.current.style.left=`${d}px`,i("BL");return}if(s==="LT"){r.current.style.top=`${p}px`,r.current.style.left=`${d-l-12}px`,i("LT");return}if(s==="LEFT"){r.current.style.top=`${p-(T-c.currentTarget.clientHeight)/2}px`,r.current.style.left=`${d-l-12}px`,i("LEFT");return}if(s==="LB"){r.current.style.top=`${x-T}px`,r.current.style.left=`${d-l-12}px`,i("LB");return}if(p>=T+12){if(r.current.style.top=`${p-T-12}px`,d<=(l-c.currentTarget.clientWidth)/2){r.current.style.left=`${d}px`,i("TL");return}if(j-u<=(l-c.currentTarget.clientWidth)/2){r.current.style.left=`${u-l}px`,i("TR");return}r.current.style.left=`${d-(l-c.currentTarget.clientWidth)/2}px`,i("TOP");return}if(j-u>=l+12){if(r.current.style.left=`${u+12}px`,p<=(T-c.currentTarget.clientHeight)/2){r.current.style.top=`${p}px`,i("RT");return}r.current.style.top=`${p-(T-c.currentTarget.clientHeight)/2}px`,i("RIGHT");return}if(r.current.style.top=`${x+12}px`,j-u<=(l-c.currentTarget.clientWidth)/2){r.current.style.left=`${u-l}px`,i("BR");return}r.current.style.left=`${d-(l-c.currentTarget.clientWidth)/2}px`,i("BOTTOM")}},D=()=>{r.current&&(r.current.style.top="-150%",y(!1))};return t.jsxs(z,{$variant:v,$position:b,onMouseEnter:F,onMouseLeave:D,"aria-expanded":M||_,"aria-label":"tooltip-wrapper",children:[V&&t.jsx(H,{}),t.jsx(G,{ref:r,$variant:v,$position:b,"aria-label":"tooltip",$maxWidth:A,children:n}),a]})};e.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},triangle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "TOP"\r
| "TR"\r
| "TL"\r
| "BOTTOM"\r
| "BL"\r
| "BR"\r
| "LEFT"\r
| "LT"\r
| "LB"\r
| "RIGHT"\r
| "RT"\r
| "RB"`,elements:[{name:"literal",value:'"TOP"'},{name:"literal",value:'"TR"'},{name:"literal",value:'"TL"'},{name:"literal",value:'"BOTTOM"'},{name:"literal",value:'"BL"'},{name:"literal",value:'"BR"'},{name:"literal",value:'"LEFT"'},{name:"literal",value:'"LT"'},{name:"literal",value:'"LB"'},{name:"literal",value:'"RIGHT"'},{name:"literal",value:'"RT"'},{name:"literal",value:'"RB"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof TOOLTIP_VARIANT",elements:[{name:"literal",value:"LIGHT"},{name:"literal",value:"DARK"}]},description:"",defaultValue:{value:'"DARK"',computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}}}};const W=g.div`
  padding: 100px 250px;
  display: grid;
  grid-template-areas: ". T ." "L . R" ". B .";

  button {
    min-width: 100px;
  }
  .top,
  .right,
  .left,
  .bottom {
    display: flex;
    gap: 20px;
  }

  .left,
  .right {
    flex-direction: column;
  }

  .top {
    grid-area: T;
  }
  .right {
    grid-area: R;
  }
  .bottom {
    grid-area: B;
  }
  .left {
    grid-area: L;
  }
`,X=g.div`
  box-sizing: border-box;
  padding: 40px 40px;
  width: 100%;
  height: 90vh;
  background-color: #c6c6c6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .container {
    width: fit-content;
    height: fit-content;

    &.tl {
      grid-column: 1;
      grid-row: 1;
      place-self: start;
    }
    &.top {
      grid-column: 2;
      grid-row: 1;
      place-self: start center;
    }
    &.tr {
      grid-column: 3;
      grid-row: 1;
      place-self: start end;
    }
    &.br {
      grid-column: 3;
      grid-row: 2;
      place-self: end;
    }
    &.bottom {
      grid-column: 2;
      grid-row: 2;
      place-self: end center;
    }
    &.bl {
      grid-column: 1;
      grid-row: 2;
      place-self: end start;
    }
  }
`,rt={title:"Example/Tooltip",component:e,parameters:{layout:"standard"},argTypes:{},args:{content:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'}},h={render:function(n){return t.jsxs(W,{children:[t.jsxs("div",{className:"top",children:[t.jsx(e,{...n,position:"TL",children:t.jsx(o,{variant:"Secondary",children:"TL"})}),t.jsx(e,{...n,position:"TOP",children:t.jsx(o,{variant:"Secondary",children:"TOP"})}),t.jsx(e,{...n,position:"TR",children:t.jsx(o,{variant:"Secondary",children:"TR"})})]}),t.jsxs("div",{className:"right",children:[t.jsx(e,{...n,position:"RT",children:t.jsx(o,{variant:"Secondary",children:"RT"})}),t.jsx(e,{...n,position:"RIGHT",children:t.jsx(o,{variant:"Secondary",children:"RIGHT"})}),t.jsx(e,{...n,position:"RB",children:t.jsx(o,{variant:"Secondary",children:"RB"})})]}),t.jsxs("div",{className:"bottom",children:[t.jsx(e,{...n,position:"BL",children:t.jsx(o,{variant:"Secondary",children:"BL"})}),t.jsx(e,{...n,position:"BOTTOM",children:t.jsx(o,{variant:"Secondary",children:"BOTTOM"})}),t.jsx(e,{...n,position:"BR",children:t.jsx(o,{variant:"Secondary",children:"BR"})})]}),t.jsxs("div",{className:"left",children:[t.jsx(e,{...n,position:"LT",children:t.jsx(o,{variant:"Secondary",children:"LT"})}),t.jsx(e,{...n,position:"LEFT",children:t.jsx(o,{variant:"Secondary",children:"LEFT"})}),t.jsx(e,{...n,position:"LB",children:t.jsx(o,{variant:"Secondary",children:"LB"})})]})]})}},B={args:{variant:"DARK"},render:function(n){return t.jsxs(W,{children:[t.jsxs("div",{className:"top",children:[t.jsx(e,{...n,position:"TL",children:t.jsx(o,{children:"TL"})}),t.jsx(e,{...n,position:"TOP",children:t.jsx(o,{children:"TOP"})}),t.jsx(e,{...n,position:"TR",children:t.jsx(o,{children:"TR"})})]}),t.jsxs("div",{className:"right",children:[t.jsx(e,{...n,position:"RT",children:t.jsx(o,{children:"RT"})}),t.jsx(e,{...n,position:"RIGHT",children:t.jsx(o,{children:"RIGHT"})}),t.jsx(e,{...n,position:"RB",children:t.jsx(o,{children:"RB"})})]}),t.jsxs("div",{className:"bottom",children:[t.jsx(e,{...n,position:"BR",children:t.jsx(o,{children:"BR"})}),t.jsx(e,{...n,position:"BOTTOM",children:t.jsx(o,{children:"BOTTOM"})}),t.jsx(e,{...n,position:"BL",children:t.jsx(o,{children:"BL"})})]}),t.jsxs("div",{className:"left",children:[t.jsx(e,{...n,position:"LB",children:t.jsx(o,{children:"LB"})}),t.jsx(e,{...n,position:"LEFT",children:t.jsx(o,{children:"RB"})}),t.jsx(e,{...n,position:"LT",children:t.jsx(o,{children:"LT"})})]})]})}},f={render:function(n){return t.jsxs(X,{children:[t.jsx("div",{className:"container tl",children:t.jsx(e,{...n,children:t.jsxs(o,{children:["Element ",t.jsx("br",{}),"Element ",t.jsx("br",{}),"Element ",t.jsx("br",{}),"Element ",t.jsx("br",{})]})})}),t.jsx("div",{className:"container top",children:t.jsx(e,{...n,children:t.jsxs(o,{children:["Element ",t.jsx("br",{})]})})}),t.jsx("div",{className:"container tr",children:t.jsx(e,{...n,children:t.jsxs(o,{children:["Element ",t.jsx("br",{}),"Element ",t.jsx("br",{}),"Element ",t.jsx("br",{}),"Element ",t.jsx("br",{})]})})}),t.jsx("div",{className:"container br",children:t.jsx(e,{...n,children:t.jsxs(o,{children:["Element ",t.jsx("br",{}),"Element ",t.jsx("br",{}),"Element ",t.jsx("br",{}),"Element ",t.jsx("br",{})]})})}),t.jsx("div",{className:"container bottom",children:t.jsx(e,{...n,children:t.jsxs(o,{children:["Element ",t.jsx("br",{}),"Element ",t.jsx("br",{}),"Element ",t.jsx("br",{}),"Element ",t.jsx("br",{})]})})}),t.jsx("div",{className:"container bl",children:t.jsx(e,{...n,children:t.jsxs(o,{children:["Element ",t.jsx("br",{}),"Element ",t.jsx("br",{}),"Element ",t.jsx("br",{}),"Element ",t.jsx("br",{})]})})})]})}};var L,E,O;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Wrapper>\r
        <div className="top">\r
          <Tooltip {...args} position="TL">\r
            <Button variant="Secondary">TL</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="TOP">\r
            <Button variant="Secondary">TOP</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="TR">\r
            <Button variant="Secondary">TR</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="right">\r
          <Tooltip {...args} position="RT">\r
            <Button variant="Secondary">RT</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="RIGHT">\r
            <Button variant="Secondary">RIGHT</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="RB">\r
            <Button variant="Secondary">RB</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="bottom">\r
          <Tooltip {...args} position="BL">\r
            <Button variant="Secondary">BL</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="BOTTOM">\r
            <Button variant="Secondary">BOTTOM</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="BR">\r
            <Button variant="Secondary">BR</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="left">\r
          <Tooltip {...args} position="LT">\r
            <Button variant="Secondary">LT</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="LEFT">\r
            <Button variant="Secondary">LEFT</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="LB">\r
            <Button variant="Secondary">LB</Button>\r
          </Tooltip>\r
        </div>\r
      </Wrapper>;
  }
}`,...(O=(E=h.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var $,N,I;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: "DARK"
  },
  render: function Render(args) {
    return <Wrapper>\r
        <div className="top">\r
          <Tooltip {...args} position="TL">\r
            <Button>TL</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="TOP">\r
            <Button>TOP</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="TR">\r
            <Button>TR</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="right">\r
          <Tooltip {...args} position="RT">\r
            <Button>RT</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="RIGHT">\r
            <Button>RIGHT</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="RB">\r
            <Button>RB</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="bottom">\r
          <Tooltip {...args} position="BR">\r
            <Button>BR</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="BOTTOM">\r
            <Button>BOTTOM</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="BL">\r
            <Button>BL</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="left">\r
          <Tooltip {...args} position="LB">\r
            <Button>LB</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="LEFT">\r
            <Button>RB</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="LT">\r
            <Button>LT</Button>\r
          </Tooltip>\r
        </div>\r
      </Wrapper>;
  }
}`,...(I=(N=B.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var S,w,P;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function Render(args) {
    return <AutoPositionWrapper>\r
        <div className="container tl">\r
          <Tooltip {...args}>\r
            <Button>\r
              Element <br />\r
              Element <br />\r
              Element <br />\r
              Element <br />\r
            </Button>\r
          </Tooltip>\r
        </div>\r
        <div className="container top">\r
          <Tooltip {...args}>\r
            <Button>\r
              Element <br />\r
            </Button>\r
          </Tooltip>\r
        </div>\r
        <div className="container tr">\r
          <Tooltip {...args}>\r
            <Button>\r
              Element <br />\r
              Element <br />\r
              Element <br />\r
              Element <br />\r
            </Button>\r
          </Tooltip>\r
        </div>\r
        <div className="container br">\r
          <Tooltip {...args}>\r
            <Button>\r
              Element <br />\r
              Element <br />\r
              Element <br />\r
              Element <br />\r
            </Button>\r
          </Tooltip>\r
        </div>\r
        <div className="container bottom">\r
          <Tooltip {...args}>\r
            <Button>\r
              Element <br />\r
              Element <br />\r
              Element <br />\r
              Element <br />\r
            </Button>\r
          </Tooltip>\r
        </div>\r
        <div className="container bl">\r
          <Tooltip {...args}>\r
            <Button>\r
              Element <br />\r
              Element <br />\r
              Element <br />\r
              Element <br />\r
            </Button>\r
          </Tooltip>\r
        </div>\r
      </AutoPositionWrapper>;
  }
}`,...(P=(w=f.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const nt=["LightVariantTooltip","DarkVariantTooltip","AutoPositionTooltip"];export{f as AutoPositionTooltip,B as DarkVariantTooltip,h as LightVariantTooltip,nt as __namedExportsOrder,rt as default};
