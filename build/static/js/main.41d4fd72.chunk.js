(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{105:function(e,n,t){},160:function(e,n,t){"use strict";t.r(n);var i,r,a,s,o=t(2),c=t(71),d=t(19),l=t(4),m=t(31),u=t(33),p=t(18),h=t.n(p),x=(t(82),t(22)),b=t.n(x),g=t(48),f=t.n(g),j=t(32),v=t(11),k=t(7),O=(t(105),t(0)),y=function(e){var n=e.userName,t=e.userDesignation,i=e.joinedOn,r=e.userImg,a=e.numberOfChildren;return Object(O.jsx)("div",{className:"cardContainer",id:e.id,children:Object(O.jsxs)("div",{className:"cardInfo",children:[Object(O.jsxs)("div",{className:"userImgContainer",children:[Object(O.jsx)("img",{src:r,alt:"",className:"userImg"}),Object(O.jsx)("img",{className:"userImgPlaceHolder",src:"https://unicef.github.io/react-org-chart/static/media/avatar-personnel.f8399445.svg",alt:""})]}),Object(O.jsx)("div",{className:"userDetails",children:Object(O.jsxs)("div",{className:"userDetails_top",children:[Object(O.jsx)("div",{className:"userName",title:n,children:n}),Object(O.jsx)("div",{className:"userDesignation",children:t})]})}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"joinedOn",children:["Joined on ",i]}),Object(O.jsxs)("div",{className:"supervisee",children:[a," Supervisee"]})]})]})})},N=["emp","children","label","className"],w=Object(k.a)(i||(i=Object(v.a)(['\n  content: "";\n  position: absolute;\n  top: 0;\n  height: var(--tree-line-height);\n  box-sizing: border-box;\n']))),D=Object(k.a)(r||(r=Object(v.a)(["\n  display: flex;\n  padding-inline-start: 0;\n  margin: 0;\n  padding-top: var(--tree-line-height);\n  position: relative;\n\n  ::before {\n    ",";\n    left: 50%;\n    width: 0;\n    border-left: var(--tree-line-width) solid var(--tree-line-color);\n  }\n"])),w),A=Object(k.a)(a||(a=Object(v.a)(["\n  flex: auto;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: var(--tree-line-height) var(--tree-node-padding) 0\n    var(--tree-node-padding);\n"]))),E=Object(k.a)(s||(s=Object(v.a)(["\n  ::before,\n  ::after {\n    ",";\n    right: 50%;\n    width: 50%;\n    border-top: var(--tree-line-width) solid var(--tree-line-color);\n  }\n  ::after {\n    left: 50%;\n    border-left: var(--tree-line-width) solid var(--tree-line-color);\n  }\n\n  :only-of-type {\n    padding: 0;\n    ::after,\n    :before {\n      display: none;\n    }\n  }\n\n  :first-of-type {\n    ::before {\n      border: 0 none;\n    }\n    ::after {\n      border-radius: var(--tree-line-border-radius) 0 0 0;\n    }\n  }\n\n  :last-of-type {\n    ::before {\n      border-right: var(--tree-line-width) solid var(--tree-line-color);\n      border-radius: 0 var(--tree-line-border-radius) 0 0;\n    }\n    ::after {\n      border: 0 none;\n    }\n  }\n"])),w);var B,I=function(e){var n=e.emp,t=e.children,i=(e.label,e.className),r=Object(j.a)(e,N);return Object(O.jsxs)("li",Object(l.a)(Object(l.a)({className:Object(k.b)(A,E,i)},r),{},{children:[n&&Object(O.jsx)(y,{userName:n.userName,userDesignation:n.userDesignation,joinedOn:n.userJoinedOn,userImg:n.userPhoto,numberOfChildren:n.numberOfChildren,id:n.id}),o.Children.count(t)>0&&Object(O.jsx)("ul",{className:D,children:t})]}))},C=["children","label","lineHeight","lineWidth","lineColor","nodePadding","lineBorderRadius","emp"];var T=function(e){var n=e.children,t=(e.label,e.lineHeight),i=void 0===t?"20px":t,r=e.lineWidth,a=void 0===r?"1px":r,s=e.lineColor,o=void 0===s?"black":s,c=e.nodePadding,d=void 0===c?"5px":c,m=e.lineBorderRadius,u=void 0===m?"5px":m,p=e.emp,h=void 0===p?void 0:p,x=Object(j.a)(e,C);return Object(O.jsx)("ul",{className:Object(k.a)(B||(B=Object(v.a)(["\n        padding-inline-start: 0;\n        margin: 0;\n        display: flex;\n\n        --line-height: ",";\n        --line-width: ",";\n        --line-color: ",";\n        --line-border-radius: ",";\n        --node-padding: ",";\n\n        --tree-line-height: var(--line-height, 20px);\n        --tree-line-width: var(--line-width, 1px);\n        --tree-line-color: var(--line-color, black);\n        --tree-line-border-radius: var(--line-border-radius, 5px);\n        --tree-node-padding: var(--node-padding, 5px);\n      "])),i,a,o,u,d),children:Object(O.jsx)(I,Object(l.a)(Object(l.a)({emp:h},x),{},{children:n}))})},P="h700c2qthusq2itics4covhgs1",V=(b.a.post("https://nestor.divami.com/request.php",{command:"getEmployeeListView",client:{sid:P},data:{status:"Active"}}),function(e){return e.map((function(e){return{userId:e.employeeId,userFirstName:e.firstname,userName:e.firstname+" "+e.lastname,userPhoto:"https://nestor.divami.com"+e.profilepic,userDesignation:e.designations&&e.designations.length?e.designations[e.designations.length-1].designation:"Unassigned",userJoinedOn:f()(e.startdate,"YYYY-MM-DD").format("DD MMM, YYYY"),userReportingTo:e.designations&&e.designations.length?e.designations[e.designations.length-1].reportingTo:"null"}}))}),F=t(72),S=t.n(F),R=t(73),G=.75;function Y(){var e=Object(o.useState)("loading"),n=Object(u.a)(e,2),t=n[0],i=n[1],r=Object(o.useState)([]),a=Object(u.a)(r,2),s=a[0],c=a[1],p=Object(o.useState)([]),x=Object(u.a)(p,2),g=x[0],f=x[1],j=function(e){var n=G,t=183*(e+1),i=window.innerWidth;(n=Number(Number(i/t).toFixed(2)))>G&&(n=G),document.getElementById("AppCanvas").style.transform="scale(".concat(n,")")},v=function(){var e=Object(m.a)(h.a.mark((function e(){var n,t,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("https://nestor.divami.com/request.php",{command:"getEmployeeListView",client:{sid:P},data:{status:"Active"}});case 3:t=e.sent,r=Array.from(null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.data),a=(a=V(r)).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{id:"tree-node-".concat(e.userId),numberOfChildren:a.filter((function(n){return n.userReportingTo===e.userFirstName})).length})})),c((function(e){return[Object(l.a)({},a[0])].concat(Object(d.a)(a.filter((function(e){return e.userReportingTo===a[0].userFirstName}))))})),f(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),i("API Call Failed");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){v().catch(),j(G)}),[]),Object(o.useEffect)((function(){"loading"===t&&document.getElementById("loader")&&document.getElementById("loader").scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),"loading"!==t&&document.getElementById("App")&&document.getElementById("App").scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}));var k=function e(n,t){return null!==n.userReportingTo?e(g.find((function(e){return e.userFirstName===n.userReportingTo})),[n].concat(Object(d.a)(t))):[n].concat(Object(d.a)(t))},y=function(e,n){setTimeout((function(){document.getElementById(n.id).scrollIntoView({behavior:"smooth",block:"center",inline:"start"}),j(g.filter((function(e){return e.userReportingTo===n.userFirstName})).length)}),500),e.stopPropagation();var t=[];t=k(n,t);var i=g.filter((function(e){return e.userReportingTo===n.userFirstName}));c((function(e){return[].concat(Object(d.a)(t),Object(d.a)(i))}))};return Object(O.jsx)("div",{className:"AppCanvas",id:"AppCanvas",children:Object(O.jsx)("div",{className:"App",id:"App",children:s.length>0?Object(O.jsx)(T,{lineWidth:"3px",lineColor:"#ccc",lineBorderRadius:"50px",emp:s[0],onClick:function(e){return y(e,s[0])},children:function e(n){return s.filter((function(e){return e.userReportingTo===n})).map((function(n){return Object(O.jsx)(I,{emp:n,onClick:function(e){return y(e,n)},children:e(n.userFirstName)})}))}(s[0].userFirstName)}):Object(O.jsx)("div",{className:"loader",id:"loader",children:"loading"===t?Object(O.jsxs)("div",{children:[Object(O.jsx)(S.a,{options:{loop:!0,autoplay:!0,animationData:R,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},height:400,width:500}),Object(O.jsx)("img",{className:"logo",src:"https://www.divami.com/assets/images/divami_logo.svg?1564635070497",alt:"Divami Design Labs Logo"})]}):t})})})}var M=document.getElementById("root");Object(c.createRoot)(M).render(Object(O.jsx)(o.StrictMode,{children:Object(O.jsx)(Y,{})}))},73:function(e){e.exports=JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.1.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":60,"w":1920,"h":1080,"nm":"Comp 12","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[696.075,278.612,0],"to":[274.221,-209.719,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":29,"s":[1271.535,284.69,0],"to":[0,0,0],"ti":[282.326,-205.666,0]},{"t":60,"s":[696.075,278.612,0]}],"ix":2},"a":{"a":0,"k":[-259.925,-261.388,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[13.988,0],[0,-13.988],[-13.988,0],[0,13.988]],"o":[[-13.988,0],[0,13.988],[13.988,0],[0,-13.988]],"v":[[0,-25.328],[-25.328,0],[0,25.328],[25.328,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.0784313725490196,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-259.925,-261.388],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Path 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[959.6219999999998,539.674,0],"ix":2},"a":{"a":0,"k":[274.565,112.646,0],"ix":1},"s":{"a":0,"k":[200,200,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[25.098,34.933],[0,0],[0,0],[-46.15,23.4],[-53.202,-33.229],[-37.683,-39.525],[-48.036,-37.298],[-45.775,36.733],[0,0],[19.529,30.358],[134.916,-158.807],[31.472,-16.355]],"o":[[-24.017,-33.429],[0,0],[0,0],[26.481,-16.518],[27.811,17.37],[36.763,38.56],[53.687,35.038],[35.038,-33.342],[0,0],[-33.666,-52.335],[-38.113,44.862],[-73.054,37.965]],"v":[[17.448,179.453],[1.198,87.153],[1.198,87.153],[52.548,17.603],[181.898,20.853],[274.848,107.953],[369.419,189.264],[513.526,199.436],[545.076,122.003],[529.915,39.506],[267.048,122.003],[166.298,208.053]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.0784313725490196,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":15,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":18,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":60,"s":[360]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path 2","sr":1,"ks":{"o":{"a":0,"k":5,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[959.6219999999998,539.674,0],"ix":2},"a":{"a":0,"k":[274.565,112.646,0],"ix":1},"s":{"a":0,"k":[200,200,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[25.098,34.933],[0,0],[0,0],[-46.15,23.4],[-53.202,-33.229],[-37.683,-39.525],[-48.036,-37.298],[-45.775,36.733],[0,0],[19.529,30.358],[134.916,-158.807],[31.472,-16.355]],"o":[[-24.017,-33.429],[0,0],[0,0],[26.481,-16.518],[27.811,17.37],[36.763,38.56],[53.687,35.038],[35.038,-33.342],[0,0],[-33.666,-52.335],[-38.113,44.862],[-73.054,37.965]],"v":[[17.448,179.453],[1.198,87.153],[1.198,87.153],[52.548,17.603],[181.898,20.853],[274.848,107.953],[369.419,189.264],[513.526,199.436],[545.076,122.003],[529.915,39.506],[267.048,122.003],[166.298,208.053]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.0784313725490196,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":15,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":72,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":60,"st":0,"bm":0}],"markers":[]}')},82:function(e,n,t){}},[[160,1,2]]]);
//# sourceMappingURL=main.41d4fd72.chunk.js.map