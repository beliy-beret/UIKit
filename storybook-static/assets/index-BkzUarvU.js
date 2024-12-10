import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{d as e}from"./styled-components.browser.esm-CW2lnlac.js";import{C as o}from"./colors-BfrfeCNN.js";import{r as s}from"./index-DJO9vBfz.js";const n=e.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: ${o.blueGray[800]};
  font-size: 14px;
  cursor: pointer;

  &[aria-selected="true"] {
    background-color: #f7faff;
    color: #1b4dcb;
  }

  &[aria-disabled="true"] {
    background-color: transparent;
    color: ${o.blueGray[300]} !important;
    cursor: auto;
  }

  &[aria-current="true"]:not(&[aria-disabled="true"]) {
    color: ${o.blue[600]};
    background-color: ${o.blueGray[25]};
  }

  @media (hover: hover) {
    &:hover:not([aria-disabled="true"]) {
      color: ${o.blue[600]};
      background-color: ${o.blueGray[25]};
    }
  }
`,l=r=>a.jsx(n,{...r});l.__docgenInfo={description:"",methods:[],displayName:"Option"};const d=e.dialog`
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 16px -4px rgba(142, 140, 163, 0.08);
  background-color: ${o.gray[10]};
  overflow-y: auto;
  max-height: 200px;
  padding: 0;
  bottom: -4px;
  translate: 0 100%;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${o.blueGray[50]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${o.blueGray[300]};
  }

  &[open] {
    animation: open 400ms forwards;
    display: flex;
    flex-direction: column;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,p=s.forwardRef(({isOpen:r,...t},i)=>a.jsx(d,{ref:i,role:"listbox",className:"options-wrapper",open:r,"aria-modal":!r,...t}));p.__docgenInfo={description:"",methods:[],displayName:"OptionsBox",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};export{p as O,l as a};
