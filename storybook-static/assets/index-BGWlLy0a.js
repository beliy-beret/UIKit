import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{d as c}from"./styled-components.browser.esm-CW2lnlac.js";import{C as a,a as r}from"./colors-BfrfeCNN.js";const i=c.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  transition: all 200ms ease-in-out;

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${a.blueGray[25]};
    color: ${a.blueGray[400]};
    cursor: default;
  }

  ${({$variant:e,$design:o})=>e==="Primary"&&`
    background-color: ${r[o][400]};
    color: ${r[o][10]};
    
    @media (hover: hover) {
      &:hover:not(:active, :disabled) {
        background-color: ${r[o][500]};
        color: ${r[o][10]};
      }
    }

    &:active:not(:disabled) {
      background-color: ${r[o][600]};
      color: ${r[o][10]};
    }

    &:focus-visible {
      background-color: ${r[o][400]};
      outline: none;
      box-shadow: inset 0 0 0 3px ${r[o][200]};      
      color: ${r[o][10]};             
    }    
  `};

  ${({$variant:e,$design:o})=>e==="Secondary"&&`
    background-color: ${r[o][10]};
    color: ${r[o][400]};
    
    @media (hover: hover) {
      &:hover:not(:active, :disabled) {
        background-color: ${r[o][25]};
        color: ${r[o][500]};
      }
    }

    &:active:not(:disabled) {
      background-color: ${r[o][25]};      
      color: ${r[o][600]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${r[o][200]};      
      color: ${r[o][400]};             
    }    
  `};

  ${({$variant:e,$design:o})=>e==="Outline"&&`
    color: ${r[o][400]};
    border: 1px solid ${r[o][50]};
    background-color: transparent;
    
    @media (hover: hover) {
      &:hover:not(:active, :disabled) {
        border-color: ${r[o][500]};
        color: ${r[o][500]};
      }
    }

    &:active:not(:disabled) {
      border-color: ${r[o][600]};      
      color: ${r[o][600]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${r[o][200]};      
      color: ${r[o][500]};             
    }
    
    &:disabled {
      border-color: ${a.blueGray[300]};
      background-color: transparent;
    }
        
  `};

  ${({$variant:e,$design:o})=>e==="Text"&&`
    background-color: transparent;
    color: ${r[o][400]};
    
    &:active:not(:disabled) {
      color: ${r[o][600]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${r[o][200]};      
      color: ${r[o][500]};             
    }
    
    &:disabled {
      border-color: transparent;
      background-color: transparent;
    }

    @media (hover: hover) {
      &:hover:not(:active, :disabled) {
        color: ${r[o][500]};
      }
    } 
  `};
`,u=({children:e,variant:o="Primary",design:l="Primary",...t})=>n.jsx(i,{$variant:o,$design:l,...t,children:e});u.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"Primary" | "Secondary" | "Outline" | "Text"',elements:[{name:"literal",value:'"Primary"'},{name:"literal",value:'"Secondary"'},{name:"literal",value:'"Outline"'},{name:"literal",value:'"Text"'}]},description:"",defaultValue:{value:'"Primary"',computed:!1}},design:{required:!1,tsType:{name:"union",raw:"keyof typeof ColorPalette",elements:[{name:"literal",value:"Informative"},{name:"literal",value:"Body"},{name:"literal",value:"Dangerous"},{name:"literal",value:"Completed"},{name:"literal",value:"Primary"},{name:"literal",value:"Warning"}]},description:"",defaultValue:{value:'"Primary"',computed:!1}}}};export{u as B};
