import{P as i,b as o,j as e,c as d,r as u,e as f,s as x,g as c,n as m,R as P}from"./index-qYvT7fky.js";import{E as h,a as j,b as v,P as C,u as k}from"./Paginator-Uh98LkSI.js";import{G as y,C as E}from"./GalleryLoader-lubXBoeI.js";import{e as F,c as R,f as b,i as D}from"./selectors-e-WZRKlo.js";import{P as L}from"./PageTitle-RdcBKl51.js";import{C as T}from"./CircleBg-uhokDePN.js";import"./LazyLoad-fjwxEgTH.js";const p=({destination:s,pageCount:a,favorites:t,theme:r})=>{const n=o(F);return e.jsxs(e.Fragment,{children:[n&&e.jsx(y,{}),t.length===0?e.jsxs(h,{children:[e.jsx(j,{srcSet:`${d} 1x, ${u} 2x`,alt:"Cocktail"}),e.jsx(v,{theme:r,children:"You haven’t added any favorite cocktails yet"})]}):e.jsx(C,{pageCount:a,items:t,destination:s,ListComponent:E,theme:r})]})};p.propTypes={destination:i.string.isRequired,pageCount:i.number.isRequired,setSelectedPage:i.func,favorites:i.array.isRequired,theme:i.string.isRequired,selectedPage:i.number};const w=()=>{const s=f(),a=o(R),t=o(b)||0,r=o(D),{length:n}=r,g=o(x),l=k({mobile:9,tablet:8,desktop:9,default:9});return c.useEffect(()=>{s(m(1))},[s]),c.useEffect(()=>{s(P({page:a,limit:l}))},[s,l,a]),c.useEffect(()=>{n===0&&a===t&&t>1&&s(m(t-1))},[s,n,t,a]),e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsxs("section",{children:[e.jsx(L,{title:"Favorites"}),e.jsx(p,{favorites:r,destination:"favorite",pageCount:t,theme:g})]})]})};export{w as default};
