import{u as o,d as i,a as s,l as n,P as w,b as c,s as $,j as t,f as W,g as m,S as E,e as R,m as H,R as N,T as U,L as _,U as A,V as G}from"./index-jQ59i6Sr.js";import{a as J,j as Y,i as q,k as K,e as Q}from"./selectors-5JNnC0jY.js";import{C as V}from"./CircleBg-uxhrPIxQ.js";import{M as X}from"./Modal-tN0ujeuB.js";const Z=o.div`
  margin-bottom: 18px;

  @media ${i.tablet} {
    margin-bottom: 80px;
  }

  @media ${i.desktop} {
    display: flex;
    gap: 249px;
    margin-bottom: 100px;
  }
`,ee=o.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;
  margin-bottom: 8px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};

  @media ${i.tablet} {
    font-size: 56px;
    line-height: 1.07;
  }

  @media ${i.desktop} {
    font-size: 64px;
  }
`,te=o.p`
  color: ${({theme:e})=>e==="dark"?s.colors.transp:n.colors.transp};
  font-size: 12px;
  line-height: 1.17;
  margin-bottom: 20px;

  @media ${i.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`,ie=o.p`
  width: 335px;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};

  @media ${i.tablet} {
    width: 600px;
  }
`,oe=o.button`
  position: relative;
  z-index: 1;

  display: flex;
  width: 222px;
  padding: 14px 40px;
  align-items: center;
  border-radius: 42px;
  background-color: ${({theme:e})=>e==="dark"?s.colors.main:n.background.lightBg};
  color: ${({theme:e})=>e==="dark"?s.background.main:n.background.main};
  border: 1px solid rgba(243, 243, 243, 0.2);

  font-weight: 600;
  line-height: 1.29;
  transition: var(--tran-fast);
  margin-bottom: 80px;

  @media ${i.tablet} {
    width: 260px;
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: #f3f3f3;
  }
`,se=o.img`
  width: 335px;
  height: 400px;
  object-fit: cover;

  @media ${i.tablet} {
    width: 704px;
    height: 400px;
  }

  @media ${i.desktop} {
    width: 400px;
  }
`,ne=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  padding-bottom: 80px;
  @media ${i.tablet} {
    gap: 22px;
  }
  @media ${i.desktop} {
    gap: 35px;
    padding-bottom: 100px;
  }
`,ae=o.li`
  width: 157px;
  height: 175px;
  @media ${i.tablet} {
    width: 220px;
    height: 258px;
  }
`,re=o.div`
  border-radius: 8px;
  width: 157px;
  height: 157px;
  background-color: ${({theme:e})=>e==="dark"?s.colors.main:n.background.lightBg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  @media ${i.tablet} {
    width: 220px;
    height: 220px;
    margin-bottom: 14px;
  }
  @media ${i.desktop} {
  }
`,de=o.img`
  width: 107px;
  height: 107px;
  @media ${i.tablet} {
    width: 175px;
    height: 175px;
  }
  @media ${i.desktop} {
  }
`,le=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,y=o.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};
  @media ${i.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${i.desktop} {
  }
`,ce=o(y)`
  color: ${({theme:e})=>e==="dark"?s.colors.transp:n.colors.transp};
`,pe=o.h3`
  color: ${({theme:e})=>e==="dark"?s.colors.transp:n.colors.transp};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 42px;
  font-weight: 500;
  @media ${i.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${i.desktop} {
  }
`,T=({ingredientsArray:e})=>{const d=c($),l=c(J),f=window.innerWidth<768,b=window.innerWidth>=768&&window.innerWidth<1440,v=a=>{if(l.length!==0)return l==null?void 0:l.find(h=>a.toLowerCase()===h.title.toLowerCase())[f?"thumbSmall":b?"thumbMedium":"ingredientThumb"]};return t.jsxs("div",{children:[t.jsx(pe,{theme:d,children:"Ingredients"}),t.jsx(ne,{children:e==null?void 0:e.map(({title:a,measure:h})=>t.jsxs(ae,{children:[t.jsx(re,{children:t.jsx(de,{src:v(a),alt:a})}),t.jsxs(le,{children:[t.jsx(y,{theme:d,children:a}),t.jsx(ce,{theme:d,children:h})]})]},a))})]})};T.propTypes={ingredientsArray:w.array};const he="/58-BCOn-drink-master/assets/three-cocktails-mobile@1x-Db068_xD.jpg",xe="/58-BCOn-drink-master/assets/three-cocktails@1x-TzhNJt-O.jpg",me=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  @media ${i.tablet} {
  }
  @media ${i.desktop} {
    flex-direction: row;
    gap: 60px;
  }
`,ge=o.div`
  background: url(${he});
  width: 335px;
  height: 430px;
  display: block;
  border-radius: 9px;
  background-size: cover;
  background-position: center;
  @media ${i.tablet} {
    background: url(${xe});
    width: 704px;
    background-size: cover;
    border-radius: 10px;
  }
  @media ${i.desktop} {
    width: 631px;
    height: 480px;
  }
`,be=o.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};
  @media ${i.tablet} {
    font-size: 40px;
    line-height: 44px;
  }
  @media ${i.desktop} {
    margin-bottom: 60px;
  }
`,ke=o.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};
  @media ${i.tablet} {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  @media ${i.desktop} {
    width: 549px;
  }
`,S=({instructions:e})=>{const d=c($);return t.jsxs("div",{children:[t.jsx(be,{theme:d,children:"Recipe Preparation"}),t.jsxs(me,{children:[t.jsx(ge,{}),t.jsx(ke,{theme:d,children:e})]})]})};S.propTypes={instructions:w.string};const ue="/58-BCOn-drink-master/assets/Motivation-mob3@2x-1EibcH2o.jpg",fe="/58-BCOn-drink-master/assets/motivation3@2x-WSNNf0lv.jpg",ve="/58-BCOn-drink-master/assets/Motivation-mob2@2x-i2WMUKAM.jpg",$e="/58-BCOn-drink-master/assets/motivation2@2x-3J2W25Lp.jpg",Se=()=>{const e=W.useMediaQuery({query:"(max-width: 767px)"}),[d,l]=m.useState(""),[f,b]=m.useState(!1),[v,a]=m.useState(""),h=()=>{b(!0)},D=()=>{b(!1)},p=c($),{drinkId:k}=E(),x=R(),r=c(Y),u=c(q),F=c(K),M=c(Q),[j,z]=m.useState(!1),I=()=>{x(A(k)).then(g=>{const{sendFirstFavGreeting:C,sendTenthFavGreeting:O}=g.payload,L=C===!0,P=O===!0;L&&(h(),a("Wow! You have added the first recipe to your favorites!"),l(e?ue:fe)),P&&(h(),a("Wow! You have added 10 recipes to your favorites!"),l(e?ve:$e))}).catch(g=>{console.error("Error in addFavoriteDrinkThunk:",g)})},B=()=>{x(G(k))};return m.useEffect(()=>{x(H()),x(N({page:1,limit:1e3})),x(U(k)),window.scrollTo({top:0})},[x,k]),m.useEffect(()=>{z(!!(u!=null&&u.find(g=>g._id===r._id)))},[r,u]),t.jsxs(t.Fragment,{children:[t.jsx(V,{}),M?t.jsx(_,{}):t.jsxs(t.Fragment,{children:[t.jsxs(Z,{children:[t.jsxs("div",{children:[t.jsx(ee,{theme:p,children:r.drink}),t.jsx(te,{theme:p,children:`${r.glass} / ${r.alcoholic}`}),t.jsx(ie,{theme:p,children:r.description}),t.jsx(oe,{theme:p,onClick:j?B:I,disabled:F,children:j?"Remove from favorite drinks":"Add to favorite drinks"})]}),t.jsx(se,{theme:p,src:r.drinkThumb})]}),t.jsx(T,{theme:p,ingredientsArray:r?r.ingredients:[]}),t.jsx(S,{theme:p,instructions:r.instructions}),t.jsx(X,{isOpen:f,onClose:()=>{D(),a(""),l("")},message:v,background:d})]})]})};export{Se as default};
