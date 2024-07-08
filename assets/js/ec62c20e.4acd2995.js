"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[901],{223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(4848),l=t(8453),a=t(1470),s=t(9365);const i={sidebar_position:1},o="Use the FlowSynx API",u={id:"flowsynx-api/use-the-flowsynx-api",title:"Use the FlowSynx API",description:"In this guide, you\u2019ll simulate and access an application by running and calling the FlowSynx API directly.",source:"@site/docs/flowsynx-api/use-the-flowsynx-api.mdx",sourceDirName:"flowsynx-api",slug:"/flowsynx-api/use-the-flowsynx-api",permalink:"/docs/flowsynx-api/use-the-flowsynx-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"FlowSynx Api",permalink:"/docs/category/flowsynx-api"},next:{title:"Api End Points",permalink:"/docs/category/api-end-points"}},c={},d=[{value:"Step 1: Open terminal",id:"step-1-open-terminal",level:2},{value:"Step 2: Run the FlowSynx",id:"step-2-run-the-flowsynx",level:2},{value:"Step 3: Calling API",id:"step-3-calling-api",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"use-the-flowsynx-api",children:"Use the FlowSynx API"}),"\n",(0,r.jsx)(n.p,{children:"In this guide, you\u2019ll simulate and access an application by running and calling the FlowSynx API directly."}),"\n",(0,r.jsx)(n.h2,{id:"step-1-open-terminal",children:"Step 1: Open terminal"}),"\n","\n","\n",(0,r.jsxs)(a.A,{groupId:"operating-systems",children:[(0,r.jsxs)(s.A,{value:"linuxMacOs",label:"Linux/MacOS",children:[(0,r.jsxs)(n.p,{children:["You will need to use ",(0,r.jsx)(n.code,{children:"sudo"})," for this quickstart if:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The install path is ",(0,r.jsx)(n.code,{children:"/usr/local/bin"})," (default install path)."]}),"\n"]})]}),(0,r.jsxs)(s.A,{value:"windows",label:"Windows",children:[(0,r.jsx)(n.p,{children:"Run Windows Terminal or command prompt as administrator."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Right click on the Windows Terminal or command prompt icon."}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"Run as administrator"}),"."]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"step-2-run-the-flowsynx",children:"Step 2: Run the FlowSynx"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"flowctl run\n"})}),"\n",(0,r.jsx)(n.p,{children:"After executing this command, FlowSynx starts to be running and the logs like below will be displayed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Now listening on: http://[::]:5860"\n[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Application started. Press Ctrl+C to shut down."\n[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Hosting environment: Production"\n[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Content root path: _____________"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"step-3-calling-api",children:"Step 3: Calling API"}),"\n",(0,r.jsxs)(n.p,{children:["Open a new terminal and enter the below command (in this example ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"List"})})," command will be called to getting list from given path):"]}),"\n",(0,r.jsxs)(a.A,{groupId:"httpApi",children:[(0,r.jsx)(s.A,{value:"bashHttpApi",label:"HTTP API (Bash)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -X POST -H "Content-Type: application/json" -d \'{ "path": "/", "full": true, "caseSensitive": false, "recurse": false, "sorting": "kind asc" }\' http://localhost:5860/storage/list\n'})})}),(0,r.jsx)(s.A,{value:"powershellHttpApi",label:"HTTP API (PowerShell)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Invoke-RestMethod -Method Post -ContentType \'application/json\' -Body \'{ "path": "C:/", "full": true, "caseSensitive": false, "recurse": false, "sorting": "kind asc" }\' -Uri \'http://localhost:5860/storage/list\'\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["After executing the command, the result will be returned to you in the form of ",(0,r.jsx)(n.code,{children:"json"})," data."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const l={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(6540),l=t(4164),a=t(3104),s=t(6347),i=t(205),o=t(7485),u=t(1682),c=t(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:t,groupId:l}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,c.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),b=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),l=i[t].value;l!==r&&(u(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(w,{...e,...n})]})}function j(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);