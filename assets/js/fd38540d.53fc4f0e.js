"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[179],{4663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=t(4848),a=t(8453),s=t(1470),r=t(9365);const o={sidebar_position:3},l="Details",c={id:"flowsynx-api/api-endpoints/config/details",title:"Details",description:"Get details about configuration section.",source:"@site/docs/flowsynx-api/api-endpoints/config/details.mdx",sourceDirName:"flowsynx-api/api-endpoints/config",slug:"/flowsynx-api/api-endpoints/config/details",permalink:"/docs/flowsynx-api/api-endpoints/config/details",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Add",permalink:"/docs/flowsynx-api/api-endpoints/config/add"},next:{title:"Delete",permalink:"/docs/flowsynx-api/api-endpoints/config/delete"}},d={},u=[{value:"Details Config Api options",id:"details-config-api-options",level:2},{value:"Calling Details Config Api",id:"calling-details-config-api",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"details",children:"Details"}),"\n",(0,i.jsx)(n.p,{children:"Get details about configuration section."}),"\n",(0,i.jsx)(n.h2,{id:"details-config-api-options",children:"Details Config Api options"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This api doesn't have any options."})}),"\n",(0,i.jsx)(n.h2,{id:"calling-details-config-api",children:"Calling Details Config Api"}),"\n",(0,i.jsx)(n.p,{children:"For calling this api, the following details are required to apply:"}),"\n",(0,i.jsxs)("table",{class:"table",children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"URL"}),(0,i.jsx)("th",{children:"Method"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.a,{href:"http://localhost:5860/config/details/%7Bname%7D",children:"http://localhost:5860/config/details/{name}"})}),(0,i.jsx)("td",{class:"centering",children:"GET"})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Since this api can be called through GET method, so it's required to fill the ",(0,i.jsx)(n.strong,{children:"name"})," with a proper config section name (which already defined or added into config)."]}),"\n",(0,i.jsx)(n.p,{children:"Now, if we want to have these details in the form of an http api call, open a new terminal and enter the following command:"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"First of all make sure flowsynx is running."})}),"\n","\n","\n",(0,i.jsxs)(s.A,{groupId:"httpApi",children:[(0,i.jsx)(r.A,{value:"bashHttpApi",label:"HTTP API (Bash)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -X GET http://localhost:5860/config/details/azblob\n"})})}),(0,i.jsx)(r.A,{value:"powershellHttpApi",label:"HTTP API (PowerShell)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Invoke-RestMethod -Method Get -Uri 'http://localhost:5860/config/details/azblob'\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Also you can use ",(0,i.jsx)(n.code,{children:"Http Api test clients"})," to test this api. Anyway, after executing this api, a result like below will be obtained."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "data": {\n    "id": "18c91659-858b-4fd6-bd20-0125cac86c27",\n    "name": "azblob",\n    "type": "FlowSynx.Storage/Azure.Blob",\n    "specifications": null\n  },\n  "messages": [],\n  "succeeded": true\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The answer is divided into three ",(0,i.jsx)(n.code,{children:"data"}),", ",(0,i.jsx)(n.code,{children:"messages"}),", and ",(0,i.jsx)(n.code,{children:"succeeded"})," parts.\n",(0,i.jsx)(n.code,{children:"succeeded"})," indicates the status of the execution of this api which is boolean value and can be true or false.\n",(0,i.jsx)(n.code,{children:"messages"})," also indicates the list of possible messages that are returned with the response.\n",(0,i.jsx)(n.code,{children:"data"})," contains the data to be returned."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"data"})," part will have a value only when ",(0,i.jsx)(n.code,{children:"succeeded"})," is true. If ",(0,i.jsx)(n.code,{children:"succeeded"})," is false, this field will be null."]})}),"\n",(0,i.jsx)(n.p,{children:"The information including in the result for this api is described as follows:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"id"}),": The guid-based identity for configuration item.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"name"}),": The name of configuration item (this name is unique).",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"type"}),": The type of config item which represents the plugin type.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"specifications"}),": The specifications regarding returned configuration section. They should be returned in pairs of key value."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var i=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,r),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(6540),a=t(4164),s=t(3104),r=t(6347),o=t(205),l=t(7485),c=t(1682),d=t(9466);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,u]=f({queryString:t,groupId:a}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function j(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==i&&(c(n),r(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);