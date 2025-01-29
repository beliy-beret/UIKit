import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{d as e}from"./styled-components.browser.esm-CW2lnlac.js";import{C as o}from"./colors-BfrfeCNN.js";import{t as s}from"./theme--sRFsRre.js";import{r as n}from"./index-DJO9vBfz.js";const l=e.div`
  ${s.text.font14.regular};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: ${o.blueGray[800]};
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
`,d=r=>a.jsx(l,{...r});d.__docgenInfo={description:"",methods:[],displayName:"Option"};const p=e.dialog`
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
`,c=n.forwardRef(({isOpen:r,...t},i)=>a.jsx(p,{ref:i,role:"listbox",className:"options-wrapper",open:r,"aria-modal":!r,...t}));c.__docgenInfo={description:"",methods:[],displayName:"OptionsBox",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};export{c as O,d as a};
