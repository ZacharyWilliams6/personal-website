(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/za_portrait_1.30a01efb.svg"},24:function(e,t,n){e.exports=n.p+"static/media/za_portrait_2.82af3145.svg"},27:function(e,t,n){e.exports=n.p+"static/media/cornerThing.48b4efa1.svg"},28:function(e,t,n){e.exports=n.p+"static/media/topSectionBar.b97190e5.svg"},29:function(e,t,n){e.exports=n.p+"static/media/bottomSectionBar.04d57656.svg"},30:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(22),s=n.n(l),o=n(12),c=n(6),r=n(2),m=(n(8),n(23)),d=n.n(m),u=n(24),g=n.n(u),h=n(10),p=n(11),y=n(14),b=n(13);function f(e){var t,n=e.title,a=e.selected,l=e.link,s=e.selectPage,c=function(){return s(n)};return t="/"===l.charAt(0)?i.a.createElement(o.b,{to:l,onClick:c,className:a?"selectedStyle":"defaultStyle"},n):i.a.createElement("a",{href:l,onClick:c,className:a?"selectedStyle":"defaultStyle"},n),i.a.createElement("div",{className:"menuItem"},t)}var v=n(27),E=n.n(v),w={paddingLeft:"30px",color:"#718de8",display:"table-cell",fontWeight:"bold"},k={color:"#a671e8",display:"table-cell",fontWeight:"bold"},N=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={MenuItems:[{uuid:Object(r.v4)(),title:"home",selected:!1,link:"/"},{uuid:Object(r.v4)(),title:"blog",selected:!1,link:"/blog"},{uuid:Object(r.v4)(),title:"projects",selected:!1,link:"/projects"},{uuid:Object(r.v4)(),title:"github",selected:!1,link:"http://www.github.com"}]},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState((function(e){return{MenuItems:e.MenuItems.map((function(e){return window.location.pathname===e.link?Object.assign(e,{selected:!0}):Object.assign(e,{selected:!1})}))}}))}},{key:"onSelectPage",value:function(e){this.setState((function(t){return{MenuItems:t.MenuItems.map((function(t){return e===t.title?Object.assign(t,{selected:!0}):Object.assign(t,{selected:!1})}))}}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"headerContainer"},i.a.createElement("div",{className:"nameContainer"},i.a.createElement("h1",{className:"zachary",style:w},"zachary"),i.a.createElement("h1",{className:"williams",style:k},"williams")),i.a.createElement("div",{className:"menuItemsContainer"},this.state.MenuItems.map((function(t){return i.a.createElement(f,{key:t.uuid,title:t.title,selected:t.selected,link:t.link?t.link:"",selectPage:e.onSelectPage.bind(e)})}))),i.a.createElement("img",{className:"cornerImage",alt:"",src:E.a,style:{position:"absolute",top:"70px",left:"0",zIndex:"-1"}}))}}]),n}(i.a.Component);function x(e){var t=e.title,n=e.selected,a=e.changePage;return i.a.createElement("div",null,i.a.createElement("button",{link:"/",className:"skillSetsButtonStyle",style:n?{backgroundColor:"#718de8",color:"white",fontWeight:"bold"}:{},onClick:function(){return a(t)}},t))}var C=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={leftContent:"\u2022 Worked on web development projects during my previous internship (Flexagon).\n\n\u2022 Experienced working with WordPress and various WordPress plugins.\n\n\u2022 Proficient with implementing projects using the MERN stack",rightContent:"I have loved working on websites since a young age, learning HTML and CSS as a hobby to create websites in 6th grade.\n\nAs the web is so accessible and the browsers are running such powerful engines, many of my ideas that I look to implement will be developed for the web.",items:[{uuid:Object(r.v4)(),title:"Web Development",leftContent:"\u2022 Worked on web development projects during my previous internship (Flexagon).\n\n\u2022 Experienced working with WordPress and various WordPress plugins.\n\n\u2022 Proficient with implementing projects using the MERN stack",rightContent:"I have loved working on websites since a young age, learning HTML and CSS as a hobby to create websites in 6th grade.\n\nAs the web is so accessible and the browsers are running such powerful engines, many of my ideas that I look to implement will be developed for the web.",selected:!0},{uuid:Object(r.v4)(),title:"Other Development",leftContent:"other dev",rightContent:"some test content",selected:!1},{uuid:Object(r.v4)(),title:"Video Editing",leftContent:"my video editing skills",rightContent:"yupyup",selected:!1},{uuid:Object(r.v4)(),title:"Design",leftContent:"wow im so good at design guys look",rightContent:"is my functionality really working? :O",selected:!1}]},a}return Object(p.a)(n,[{key:"switchSelected",value:function(e){var t=this;this.setState((function(t){return{items:t.items.map((function(t){return e===t.title?Object.assign(t,{selected:!0}):Object.assign(t,{selected:!1})}))}}),(function(){var e=t.state.items.filter((function(e){return e.selected}));t.setState((function(t){return{leftContent:e[0].leftContent,rightContent:e[0].rightContent}}))}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"table"},this.state.items.map((function(t){return i.a.createElement(x,{key:t.uuid,title:t.title,selected:t.selected,changePage:e.switchSelected.bind(e)})})),i.a.createElement("div",{className:"leftSection"},i.a.createElement("h3",{style:{color:"#a671e8"}},"Previous Experience: "),this.state.leftContent.split("\n").map((function(e){return i.a.createElement("p",{key:Object(r.v4)(),style:{color:"#a671e8"}},e)}))),i.a.createElement("div",{className:"rightSection"},this.state.rightContent.split("\n").map((function(e){return i.a.createElement("p",{key:Object(r.v4)(),style:{color:"#718de8"}},e)})))))}}]),n}(a.Component),j=n(28),S=n.n(j),I=n(29),O=n.n(I);function M(e){var t=e.sectionName;return i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement("img",{className:"newSectionTopBar",alt:"",src:S.a,style:{height:"13px",width:"100%"}}),i.a.createElement("h2",{className:"newSection",style:{textAlign:"center",color:"#718de8",margin:"5px auto 5px auto"}},t),i.a.createElement("img",{className:"newSectionBottomBar",alt:"",src:O.a,style:{height:"13px",width:"100%"}}))}var T=function(){return i.a.createElement(o.a,null,i.a.createElement(N,null),i.a.createElement(c.a,{exact:!0,path:"/"},i.a.createElement("div",{className:"container",style:{marginTop:"150px",display:"block",position:"relative"}},i.a.createElement("div",{style:{display:"table",width:"100%"}},i.a.createElement("div",{className:"leftIntroTableCell",style:{display:"table-cell",width:"25%",textAlign:"center",zIndex:"0",position:"relative"}},i.a.createElement("img",{className:"sideImage",alt:"Cartoon Zachary Williams",src:d.a})),i.a.createElement("div",{className:"rightIntroTableCell",style:{display:"table-cell",width:"75%",verticalAlign:"top",marginLeft:"20px"}},i.a.createElement("h3",{className:"heyImZach",style:{color:"#a671e8"}},"Hey, I'm Zach!"),i.a.createElement("h4",{className:"thankYou",style:{color:"#718de8",marginTop:"10px !important"}},"Thank you for taking the time to navigate to my website!"),i.a.createElement("h4",{className:"moreInformation",style:{fontSize:"23pt",color:"#718de8",marginTop:"30px !important"}},"Below you can find a little more information about me."),i.a.createElement("div",{className:"buttonContainer"},i.a.createElement("button",{className:"btn_myResume",style:{marginTop:"30px",marginRight:"30px"}},"My Resume"),i.a.createElement("button",{className:"btn_contactMe"},"Contact Me")))),i.a.createElement(M,{key:Object(r.v4)(),sectionName:"WHO AM I?"}),i.a.createElement("div",{style:{display:"table",width:"100%"}},i.a.createElement("div",{className:"rightIntroTableCell",style:{display:"table-cell",width:"25%",textAlign:"center",float:"right"}},i.a.createElement("img",{className:"sideImage",alt:"Cartoon of Zachary Williams",src:g.a})),i.a.createElement("div",{className:"leftIntroTableCell",style:{display:"table-cell",width:"75%",verticalAlign:"middle",float:"left"}},i.a.createElement("h4",{className:"scalingFontSize",style:{color:"#2879ff",marginTop:"10px",marginRight:"10px"}},"First and foremost, I am a geek. I love to invest my time into learning new things and creating new things."),i.a.createElement("h4",{className:"scalingFontSize",style:{color:"#718de8",marginTop:"30px",marginRight:"10px"}},"I am currently 20 years old and am attending the University of Wisconsin - Madison pursuing a computer science degree."))),i.a.createElement(M,{key:Object(r.v4)(),sectionName:"MY SKILLSETS"}),i.a.createElement("div",{className:"retinaSkillSetsTable"},i.a.createElement(C,null)),i.a.createElement(M,{key:Object(r.v4)(),sectionName:"YOU HIRING?"}),i.a.createElement("div",{style:{paddingBottom:"150px"}},i.a.createElement("h4",{className:"scalingFontSize",style:{color:"#2879ff",textAlign:"center"}},"If you think you might be interested in my services whether you are a company or working on a project, let me know! For the fastest response, you can email me at"),i.a.createElement("h4",{className:"scalingFontSize",style:{color:"white",marginTop:"30px",textAlign:"center",backgroundColor:"#a671e8",padding:"20px 0"}},"Zachary.Williams6@outlook.com")))),i.a.createElement(c.a,{path:"/blog"}),i.a.createElement(c.a,{path:"/projects"},"Projects Content"))};s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root"))},8:function(e,t,n){}},[[30,1,2]]]);
//# sourceMappingURL=main.a0b54c5f.chunk.js.map