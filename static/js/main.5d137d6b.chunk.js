(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{125:function(e,a,t){e.exports=t.p+"static/media/backgroundImage.30495771.jpg"},126:function(e,a,t){e.exports=t.p+"static/media/blackBackground.27cd9d82.jpg"},143:function(e,a,t){e.exports=t(207)},148:function(e,a,t){},207:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(9),i=t.n(r),l=(t(148),t(61),t(34)),c=(t(149),t(250)),s=t(137),d=t(47),m=t(5),u=Object(s.a)({palette:{primary:{main:"#ffffff",light:"#ffffff",dark:"#ffffff"},secondary:{main:"#434343",light:"#434343",dark:"#434343"}},typography:{button:{textTransform:"none"},fontFamily:'"Segoe UI"',body1:{display:"inline",fontSize:16,"@media (min-width:800px)":{fontSize:26},lineHeight:2},body2:{fontSize:14,"@media (min-width:800px)":{fontSize:20},lineHeight:2},h1:{fontSize:96,"@media (min-width:800px)":{fontSize:128}},h2:{fontSize:56,"@media (min-width:800px)":{fontSize:72}},h3:{fontSize:36,"@media (min-width:800px)":{fontSize:48}},h6:{fontSize:12,"@media (min-width:800px)":{fontSize:16}}}}),p=Object(m.a)({root:{color:"#434343"}})(d.a),f=Object(m.a)({root:{color:"#ffffff"}})(d.a),g=(Object(m.a)({root:{color:"#cbcbcb"}})(d.a),t(238));function h(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var E=Object(g.a)((function(){return{scrollItem:{height:"100vh",background:"#006cbf",opacity:"0",transition:"opacity ".concat(700,"ms ease-in-out"),position:"relative",zIndex:1}}}));var v=function(){var e=function(){var e=Object(n.useState)(h()),a=Object(l.a)(e,2),t=a[0],o=a[1];return Object(n.useEffect)((function(){function e(){o(h())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}().height,a=E();return Object(n.useEffect)((function(){var a=function(){var a=document.getElementById("blueOverlay"),t=a.getBoundingClientRect().top;(t*=-1)>e/3?a.style.opacity="1":t<e/3&&(a.style.opacity="0")};window.addEventListener("scroll",a),window.addEventListener("resize",a)})),o.a.createElement("div",{id:"blueOverlay",className:a.scrollItem},o.a.createElement("div",{id:"home",style:{height:"100vh",zIndex:1,position:"relative"}}))},b=t(253),y=t(213),x=t(124),w=t.n(x);function k(e){return o.a.createElement(b.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:e.show,autoHideDuration:4e3,onClose:e.handleClose,message:"Email address copied to clipboard.",action:o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{size:"small",color:"inherit",onClick:e.handleClose},o.a.createElement(w.a,{fontSize:"small"})))})}var B=t(125),N=t.n(B),C=t(126),I=t.n(C),j=Object(g.a)((function(){return{container:{position:"fixed",width:"100vw",height:"100vh",zIndex:"-1"},background:{position:"fixed",width:"100vw",height:"100vh",zIndex:"-1",backgroundSize:"cover",background:"url(".concat(I.a,")")},backgroundOverlay:{position:"fixed",width:"100vw",height:"100vh",zIndex:"-1",opacity:"0.2",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",background:"url(".concat(N.a,")")}}}));function L(){var e=j(),a=!1,t=n;function n(){var e=document.getElementById("backgroundOverlay");e.style.opacity=a?"0.35":"0.1",e.style.transition="".concat("opacity 2s"),e.addEventListener("transitionend",r)}function r(){var e=document.getElementById("backgroundOverlay");a?(e.style.opacity="0.1",a=!1):(e.style.opacity="0.35",a=!0),e.removeEventListener("transitionend",this),n()}return setTimeout((function(){t()})),o.a.createElement("div",{className:e.container},o.a.createElement("div",{id:"background",className:e.background}),o.a.createElement("div",{id:"backgroundOverlay",className:e.backgroundOverlay}))}var S=t(7),z=t(129),O=t.n(z),T=t(244),M=t(239),F=t(240),D=t(241),_=t(242),A=t(127),H=t.n(A),R=t(243),P=t(128),G=t.n(P),W=t(82),J=t.n(W),U=t(83),Z=t.n(U),Q=t(84),V=t.n(Q),q=t(85),Y=t.n(q),$=t(86),K=t.n($),X=t(87),ee=t.n(X),ae=t(252),te=Object(g.a)({drawerNavBarIcon:{color:"#ffffff",fontSize:24},drawerNavBarDivider:{background:"#ffffff"},drawerBackground:{background:"#434343"}});var ne=function(e){var a=e.menuOpen,t=e.handleMenuClose,n=te();return o.a.createElement(ae.a,{anchor:"right",classes:{paper:n.drawerBackground},open:a,onClose:t},o.a.createElement(M.a,null,o.a.createElement(S.Link,{onClick:t,to:"home",spy:!0,smooth:!0,duration:500},o.a.createElement(F.a,{button:!0},o.a.createElement(D.a,null,o.a.createElement(H.a,{className:n.drawerNavBarIcon})),o.a.createElement(_.a,{disableTypography:!0},o.a.createElement(f,{variant:"h6"},"Main page")))),o.a.createElement(R.a,{className:n.drawerNavBarDivider}),o.a.createElement(S.Link,{onClick:t,to:"about",spy:!0,smooth:!0,duration:500},o.a.createElement(F.a,{button:!0},o.a.createElement(D.a,null,o.a.createElement(G.a,{className:n.drawerNavBarIcon})),o.a.createElement(_.a,{disableTypography:!0},o.a.createElement(f,{variant:"h6"},"About me")))),o.a.createElement(S.Link,{onClick:t,to:"skills",spy:!0,smooth:!0,duration:500},o.a.createElement(F.a,{button:!0},o.a.createElement(D.a,null,o.a.createElement(J.a,{className:n.drawerNavBarIcon})),o.a.createElement(_.a,{disableTypography:!0},o.a.createElement(f,{variant:"h6"},"My skills")))),o.a.createElement(S.Link,{onClick:t,to:"experience",spy:!0,smooth:!0,duration:500},o.a.createElement(F.a,{button:!0},o.a.createElement(D.a,null,o.a.createElement(Z.a,{className:n.drawerNavBarIcon})),o.a.createElement(_.a,{disableTypography:!0},o.a.createElement(f,{variant:"h6"},"Experience")))),o.a.createElement(S.Link,{onClick:t,to:"projects",spy:!0,smooth:!0,duration:500},o.a.createElement(F.a,{button:!0},o.a.createElement(D.a,null,o.a.createElement(V.a,{className:n.drawerNavBarIcon})),o.a.createElement(_.a,{disableTypography:!0},o.a.createElement(f,{variant:"h6"},"My projects")))),o.a.createElement(S.Link,{onClick:t,to:"education",spy:!0,smooth:!0,duration:500},o.a.createElement(F.a,{button:!0},o.a.createElement(D.a,null,o.a.createElement(Y.a,{className:n.drawerNavBarIcon})),o.a.createElement(_.a,{disableTypography:!0},o.a.createElement(f,{variant:"h6"},"Education")))),o.a.createElement(S.Link,{onClick:t,to:"hobbies",spy:!0,smooth:!0,duration:500},o.a.createElement(F.a,{button:!0},o.a.createElement(D.a,null,o.a.createElement(K.a,{className:n.drawerNavBarIcon})),o.a.createElement(_.a,{disableTypography:!0},o.a.createElement(f,{variant:"h6"},"My hobbies")))),o.a.createElement(R.a,{className:n.drawerNavBarDivider}),o.a.createElement(S.Link,{onClick:t,to:"contact",spy:!0,smooth:!0,duration:500},o.a.createElement(F.a,{button:!0},o.a.createElement(D.a,null,o.a.createElement(ee.a,{className:n.drawerNavBarIcon})),o.a.createElement(_.a,{disableTypography:!0},o.a.createElement(f,{variant:"h6"},"Contact"))))))},oe=Object(g.a)({navBar:{backgroundColor:"transparent",boxShadow:"none",height:65,justifyContent:"center"},navBarMobile:{backgroundColor:"#434343",boxShadow:"none"},navBarButton:{margin:20,backgroundColor:"transparent",cursor:"pointer",float:"left"},progressBar:{width:100,position:"absolute",left:0,height:2,background:"#fff",transition:"width 1s"},menuIcon:{color:"#ffffff",fontSize:35}});var re=function(e){var a=e.isExtraSmallScreen,t=e.windowDimensions,r=e.drawerNavMenuOpen,i=e.toggleDrawerNavMenuOpen,l=e.handleDrawerNavMenuClose,c=oe(),s=["home","about","skills","experience","projects","education","hobbies","contact"],d=["homeNavButton","aboutNavButton","skillsNavButton","experienceNavButton","projectsNavButton","educationNavButton","hobbiesNavButton","contactNavButton"],m=function(){for(var e=.2*t[1],a=0,n=0;n<s.length;n++){var o=s[n];document.getElementById(o).getBoundingClientRect().top<=e&&(a=n)}var r=document.getElementById("progressBar");r.style.width=a===s.length-1?"100vw":"".concat(document.getElementById(d[a]).getBoundingClientRect().right+20,"px")},u=function(){var e=document.getElementById("navBar"),n=window.scrollY;n>=.2*t[1]?e.style.backgroundColor="#434343":e.style.backgroundColor="transparent",a||(m(),l())};return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){m()})),window.addEventListener("scroll",(function(){u()})),u()})),o.a.createElement("div",null,o.a.createElement(T.a,{id:"navBar",position:"fixed",className:c.navBar},o.a.createElement("div",{style:{display:a?"none":"flex",justifyContent:"center"}},o.a.createElement("div",{id:"progressBar",className:c.progressBar}),o.a.createElement(S.Link,{id:"homeNavButton",className:c.navBarButton,to:"home",spy:!0,smooth:!0,duration:500},o.a.createElement(f,{variant:"h6"},"Home")),o.a.createElement(S.Link,{id:"aboutNavButton",className:c.navBarButton,to:"about",spy:!0,smooth:!0,duration:500},o.a.createElement(f,{variant:"h6"},"About")),o.a.createElement(S.Link,{id:"skillsNavButton",className:c.navBarButton,to:"skills",spy:!0,smooth:!0,duration:500},o.a.createElement(f,{variant:"h6"},"Skills")),o.a.createElement(S.Link,{id:"experienceNavButton",className:c.navBarButton,to:"experience",spy:!0,smooth:!0,duration:500},o.a.createElement(f,{variant:"h6"},"Experience")),o.a.createElement(S.Link,{id:"projectsNavButton",className:c.navBarButton,to:"projects",spy:!0,smooth:!0,duration:500},o.a.createElement(f,{variant:"h6"},"Projects")),o.a.createElement(S.Link,{id:"educationNavButton",className:c.navBarButton,to:"education",spy:!0,smooth:!0,duration:500},o.a.createElement(f,{variant:"h6"},"Education")),o.a.createElement(S.Link,{id:"hobbiesNavButton",className:c.navBarButton,to:"hobbies",spy:!0,smooth:!0,duration:500},o.a.createElement(f,{variant:"h6"},"Hobbies")),o.a.createElement(S.Link,{id:"contactNavButton",className:c.navBarButton,to:"contact",spy:!0,smooth:!0,duration:500},o.a.createElement(f,{variant:"h6"},"Contact"))),o.a.createElement("div",{style:{display:a?"flex":"none",justifyContent:"flex-end"}},o.a.createElement(y.a,{id:"menuButton",color:"primary",onClick:i,component:"span"},o.a.createElement(O.a,{className:c.menuIcon})))),o.a.createElement(ne,{handleMenuClose:l,menuOpen:r}))},ie=t(245),le=t(251),ce=Object(g.a)((function(){return{titleGrid:{height:"100vh",paddingBottom:"10vh",marginBottom:"10vh",position:"fixed",justifyContent:"center",top:"0",left:"0",zIndex:1},titleGridSmall:{height:"100vh",paddingBottom:"10vh",marginBottom:"10vh",position:"fixed",justifyContent:"center",top:"0",left:"0",zIndex:1},animationList:{paddingLeft:10}}})),se={hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.5}}},de={hidden:{y:-100,opacity:0},visible:{y:0,opacity:1}};var me=function(e){var a=e.drawerNavMenuOpen,t=ce(),r=Object(n.useState)(!1),i=Object(l.a)(r,2),c=i[0],s=i[1],d=function(){setTimeout((function(){s(!0)}),0)};return Object(n.useEffect)((function(){return window.addEventListener("load",d),function(){return window.removeEventListener("load",d)}}),[]),o.a.createElement(ie.a,{id:"titleGrid",container:!0,direction:"row",alignItems:"center",alignContent:"center",className:a?t.titleGridSmall:t.titleGrid},o.a.createElement(ie.a,{item:!0},o.a.createElement(le.a.ul,{className:t.animationList,align:"left",initial:"hidden",animate:c?"visible":"hidden",variants:se},o.a.createElement(le.a.li,{variants:de},o.a.createElement(f,{align:"left",variant:"h3"},"Hello!")),o.a.createElement(le.a.li,{variants:de},o.a.createElement(f,{align:"left",variant:"h3"},"I'm Brandon.")),o.a.createElement(le.a.li,{variants:de},o.a.createElement(f,{align:"left",variant:"h3"},"A Software Developer.")))))},ue=t(135),pe=t(246),fe=t(17),ge=t.n(fe),he=t(255),Ee=t(130),ve=t.n(Ee),be="https://www.linkedin.com/in/brandon-dang-899553221/",ye="https://github.com/brandang",xe={scale:1.1},we={scale:1};var ke=function(e){var a=e.children;return o.a.createElement(le.a.div,{whileHover:xe,whileTap:we},a)},Be=t(56),Ne=t.n(Be),Ce=Object(g.a)((function(){return{aboutIcon:{color:"#006cbf",fontSize:150},blueBox:{paddingTop:"0px",paddingBottom:"0px",backgroundColor:"#006cbf",position:"relative",zIndex:2},firstContainer:{minHeight:"70vh",display:"flex",justifyContent:"center",alignItems:"center"},lightIconContainer:{backgroundColor:"#FFF",width:"150px",height:"150px",padding:"10px",marginBottom:"20px"},heading:{paddingTop:"30px",paddingBottom:"30px"},hoverLink:{display:"inline","&":{textDecoration:"underline",color:"#ffffff"},"&:hover":{textDecoration:"underline",textDecorationThickness:"5px",color:"#ffffff"}}}}));var Ie=function(){var e=Ce();return o.a.createElement("div",{id:"about",className:e.blueBox},o.a.createElement(pe.a,{className:e.firstContainer},o.a.createElement(ge.a,{animateIn:"animate__fadeIn",animateOnce:!0},o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(ke,null,o.a.createElement(S.Link,{to:"about",spy:!0,smooth:!0,duration:500},o.a.createElement(he.a,{className:e.lightIconContainer},o.a.createElement(ve.a,{className:e.aboutIcon}))))),o.a.createElement(f,{align:"center",variant:"h3",className:e.heading},"A little about me"),o.a.createElement(f,{align:"center",variant:"body1",gutterBottom:!0,style:{paddingBottom:"20px"}},"Hello! I am Brandon, a young software developer currently based in the Greater Toronto Area (GTA). I am currently a fourth year Computer Science Student, and I am eager to re-enter the field once I graduate. My Resume is available ",o.a.createElement("a",{href:Ne.a,target:"_blank",className:e.hoverLink,rel:"noopener noreferrer"},o.a.createElement(f,null,"here."))))))};function je(){return o.a.createElement("svg",{style:{display:"block"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 28 1440 150"},o.a.createElement("path",{fill:"#006cbf",d:"M0,128L1440,32L1440,0L0,0Z"}))}function Le(){return o.a.createElement("svg",{style:{display:"block"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 28 1440 150"},o.a.createElement("path",{fill:"#E56B1F",d:"M0,128L1440,32L1440,0L0,0Z"}))}function Se(){return o.a.createElement("svg",{style:{display:"block"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 28 1440 150"},o.a.createElement("path",{fill:"#FFF",d:"M0,128L1440,32L1440,0L0,0Z"}))}function ze(){return o.a.createElement("svg",{style:{display:"block"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 28 1440 150"},o.a.createElement("path",{fill:"#961fe0",d:"M0,128L1440,32L1440,0L0,0Z"}))}function Oe(){return o.a.createElement("svg",{style:{display:"block"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 28 1440 150"},o.a.createElement("path",{fill:"#2a5a79",d:"M0,128L1440,32L1440,0L0,0Z"}))}var Te=Object(g.a)((function(){return{whiteBox:{paddingTop:"0px",paddingBottom:"0px",backgroundColor:"#FFF",position:"relative",zIndex:2},skillsItem:{paddingBottom:"50px"},skillsIcon:{color:"#ffffff",fontSize:150},darkIcon:{color:"#434343",fontSize:40},darkIconContainer:{backgroundColor:"#434343",width:"150px",height:"150px",padding:"10px",marginBottom:"20px"},heading:{paddingTop:"30px",paddingBottom:"30px"},skillsDisplayContainer:{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",width:"600px"},skillsDisplayContainerMobile:{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",width:"95vw"},boxContainer:{display:"flex",minHeight:"80vh",justifyContent:"center",alignItems:"flex-start",paddingTop:50,paddingBottom:50},round:{width:"100px",height:"100px",padding:"10px",margin:"10px"}}}));var Me=function(e){var a=e.isExtraSmallScreen,t=Te();return o.a.createElement("div",{id:"skills",className:t.whiteBox},o.a.createElement(je,null),o.a.createElement(pe.a,{className:t.boxContainer},o.a.createElement(ge.a,{animateIn:"animate__fadeIn",animateOnce:!0},o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(ke,null,o.a.createElement(S.Link,{to:"skills",spy:!0,smooth:!0,duration:500},o.a.createElement(he.a,{className:t.darkIconContainer},o.a.createElement(J.a,{className:t.skillsIcon}))))),o.a.createElement(p,{align:"center",variant:"h3",gutterBottom:!0,className:t.heading},"My skills"),o.a.createElement("div",{className:a?t.skillsDisplayContainerMobile:t.skillsDisplayContainer},o.a.createElement(ke,null,o.a.createElement(he.a,{className:t.round,style:{backgroundColor:"#ff4d4d"}},"Java")),o.a.createElement(ke,null,o.a.createElement(he.a,{className:t.round,style:{backgroundColor:"#3ddc84"}},"Android")),o.a.createElement(ke,null,o.a.createElement(he.a,{className:t.round,style:{backgroundColor:"#009eb1"}},"Python")),o.a.createElement(ke,null,o.a.createElement(he.a,{className:t.round,style:{backgroundColor:"#9b5dff"}},"JavaScript")),o.a.createElement(ke,null,o.a.createElement(he.a,{className:t.round,style:{backgroundColor:"#389500"}},"C")),o.a.createElement(ke,null,o.a.createElement(he.a,{className:t.round,style:{backgroundColor:"#ff6d00"}},"SQL")),o.a.createElement(ke,null,o.a.createElement(he.a,{className:t.round,style:{backgroundColor:"#566cff"}},"CSS")),o.a.createElement(ke,null,o.a.createElement(he.a,{className:t.round,style:{backgroundColor:"#ff60aa"}},"React")),o.a.createElement(ke,null,o.a.createElement(he.a,{className:t.round,style:{backgroundColor:"#dd3232"}},"Angular"))))))},Fe=Object(g.a)((function(){return{orangeBox:{paddingTop:"0px",paddingBottom:"0px",backgroundColor:"#E56B1F",position:"relative",zIndex:2},boxContainer:{display:"flex",minHeight:"80vh",justifyContent:"center",alignItems:"flex-start",paddingTop:50,paddingBottom:50},lightIconContainer:{backgroundColor:"#FFF",width:"150px",height:"150px",padding:"10px",marginBottom:"20px"},workIcon:{color:"#e56b1f",fontSize:130},heading:{paddingTop:"30px",paddingBottom:"30px"},hoverLink:{display:"inline","&":{textDecoration:"underline",color:"#ffffff"},"&:hover":{textDecoration:"underline",textDecorationThickness:"5px",color:"#ffffff"}}}}));var De=function(){var e=Fe();return o.a.createElement("div",{id:"experience",className:e.orangeBox},o.a.createElement(Se,null),o.a.createElement(pe.a,{className:e.boxContainer},o.a.createElement(ge.a,{animateIn:"animate__fadeIn",animateOnce:!0},o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(ke,null,o.a.createElement(S.Link,{to:"experience",spy:!0,smooth:!0,duration:500},o.a.createElement(he.a,{className:e.lightIconContainer},o.a.createElement(Z.a,{className:e.workIcon}))))),o.a.createElement(f,{align:"center",variant:"h3",gutterBottom:!0,className:e.heading},"Work experience"),o.a.createElement(f,{component:"div",align:"center",variant:"body1",gutterBottom:!0},"From July 2020 to August 2021 (14 months), I was employed as an intern at Environment and Climate Change Canada, where I worked as a full stack software developer. I helped to maintain and modernize a Webapp called 'PMTIP', a tool used to provide information related to Aviation weather forecasts. The project has close to 100,000 lines of code. End users include government agencies and aviation companies such as Air Canada. More details can be found in this PDF on the American Meteorological Society website ",o.a.createElement("a",{href:"https://ams.confex.com/ams/14Meso15ARAM/webprogram/Manuscript/Paper190844/aihoshi_pmtip_aram_13.5.pdf",target:"_blank",className:e.hoverLink,rel:"noopener noreferrer"},o.a.createElement(f,null,"here")),". Whilst working there, I used many tools and frameworks, such as Angular and jQuery."))))},_e=t(254),Ae=t(247),He=t(248),Re=t(101),Pe=t.n(Re),Ge=t(249),We=Object(g.a)((function(){return{heading:{paddingTop:"30px",paddingBottom:"30px"},youtubeVideo:{width:"100%",height:"720px"},videoPanel:{justifyContent:"center",display:"block",paddingBottom:"50px"},videoBackground:{minWidth:"100vw",minHeight:"100vh",position:"fixed",width:"auto",height:"auto",backgroundPosition:"center",size:"cover",backgroundRepeat:"no-repeat",top:0,left:0,zIndex:-1},darkIconContainer:{backgroundColor:"#434343",width:"150px",height:"150px",padding:"10px",marginBottom:"20px"},whiteBox:{paddingTop:"0px",paddingBottom:"0px",backgroundColor:"#FFF",position:"relative",zIndex:2},boxContainer:{display:"flex",minHeight:"80vh",justifyContent:"center",alignItems:"flex-start",paddingTop:50,paddingBottom:50},projectsIcon:{color:"#ffffff",fontSize:120}}}));var Je=function(){var e=We();return o.a.createElement("div",{id:"projects",className:e.whiteBox},o.a.createElement(Le,null),o.a.createElement(pe.a,{className:e.boxContainer},o.a.createElement(ge.a,{animateIn:"animate__fadeIn",animateOnce:!0},o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(ke,null,o.a.createElement(S.Link,{to:"projects",spy:!0,smooth:!0,duration:500},o.a.createElement(he.a,{className:e.darkIconContainer},o.a.createElement(V.a,{className:e.projectsIcon}))))),o.a.createElement(p,{align:"center",variant:"h3",gutterBottom:!0,className:e.heading},"My projects"),o.a.createElement(p,{align:"center",variant:"body1",gutterBottom:!0},"Here, you can view some of my most recent personal side projects. I have some of them installed on my phone, and I use some of them daily."),o.a.createElement(_e.a,null,o.a.createElement(Ae.a,{expandIcon:o.a.createElement(Pe.a,null),id:"panel1a-header",style:{backgroundColor:"#cbe9ff"}},o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(d.a,{className:e.heading},"Android Notes App"))),o.a.createElement(He.a,{style:{backgroundColor:"#cbe9ff"},className:e.videoPanel},o.a.createElement("div",null,o.a.createElement(p,{variant:"body2"},"A video demonstration of an Android Notes app that I created. Users may embed images and audio recordings within their Notes."),o.a.createElement(Ge.a,{className:e.youtubeVideo,src:"https://www.youtube.com/embed/RfoJ7mikJfg",component:"iframe"})))),o.a.createElement(_e.a,null,o.a.createElement(Ae.a,{expandIcon:o.a.createElement(Pe.a,null),id:"panel1a-header",style:{backgroundColor:"#ddd2ff"}},o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(d.a,{className:e.heading},"Android Photolocker App"))),o.a.createElement(He.a,{style:{backgroundColor:"#ddd2ff"},className:e.videoPanel},o.a.createElement("div",null,o.a.createElement(p,{variant:"body2"},"A video demonstration of an Android PhotoLocker app that I created. Users may encrypt their photos with a password. The file is unreadable without first decrypting it using the password."),o.a.createElement(Ge.a,{className:e.youtubeVideo,src:"https://www.youtube.com/embed/UuVqQf_pRMg",component:"iframe"})))))))},Ue=Object(g.a)((function(){return{boxContainer:{display:"flex",minHeight:"80vh",justifyContent:"center",alignItems:"flex-start",paddingTop:50,paddingBottom:50},lightIconContainer:{backgroundColor:"#FFF",width:"150px",height:"150px",padding:"10px",marginBottom:"20px"},heading:{paddingTop:"30px",paddingBottom:"30px"},purpleBox:{paddingTop:"0px",paddingBottom:"0px",backgroundColor:"#961fe0",position:"relative",zIndex:2},educationIcon:{color:"#961fe0",fontSize:140}}}));var Ze=function(){var e=Ue();return o.a.createElement("div",{id:"education",className:e.purpleBox},o.a.createElement(Se,null),o.a.createElement(pe.a,{className:e.boxContainer},o.a.createElement(ge.a,{animateIn:"animate__fadeIn",animateOnce:!0},o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(ke,null,o.a.createElement(S.Link,{to:"education",spy:!0,smooth:!0,duration:500},o.a.createElement(he.a,{className:e.lightIconContainer},o.a.createElement(Y.a,{className:e.educationIcon}))))),o.a.createElement(f,{align:"center",variant:"h3",gutterBottom:!0,className:e.heading},"Education"),o.a.createElement(f,{align:"center",variant:"h4",gutterBottom:!0,className:e.heading},"University of Toronto"),o.a.createElement(f,{align:"center",variant:"h4",className:e.heading},"2017 - Present"),o.a.createElement(f,{align:"center",variant:"body1",gutterBottom:!0},"Fourth year Computer Science student"))))},Qe=Object(g.a)((function(){return{whiteBox:{paddingTop:"0px",paddingBottom:"0px",backgroundColor:"#FFF",position:"relative",zIndex:2},heading:{paddingTop:"30px",paddingBottom:"30px"},darkIconContainer:{backgroundColor:"#434343",width:"150px",height:"150px",padding:"10px",marginBottom:"20px"},boxContainer:{display:"flex",minHeight:"80vh",justifyContent:"center",alignItems:"flex-start",paddingTop:50,paddingBottom:50},hobbiesIcon:{color:"#ffffff",fontSize:130}}}));var Ve=function(){var e=Qe();return o.a.createElement("div",{id:"hobbies",className:e.whiteBox},o.a.createElement(ze,null),o.a.createElement(pe.a,{className:e.boxContainer},o.a.createElement(ge.a,{animateIn:"animate__fadeIn",animateOnce:!0},o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(ke,null,o.a.createElement(S.Link,{to:"hobbies",spy:!0,smooth:!0,duration:500},o.a.createElement(he.a,{className:e.darkIconContainer},o.a.createElement(K.a,{className:e.hobbiesIcon}))))),o.a.createElement(p,{align:"center",variant:"h3",gutterBottom:!0,className:e.heading},"Hobbies and interests"),o.a.createElement(p,{align:"center",variant:"body1",gutterBottom:!0,className:e.heading},'Aside from programming, I also have a passion for reading. My favourite series is J.R.R. Tolkien`s "Lord of the Rings", although I also enjoy Science Fiction novels by authors like H.G. Wells. Other than that, I love playing video games, especially those in the Grand Strategy genre. '))))},qe=t(102),Ye=t(57),$e=t.n(Ye),Ke=t(131),Xe=t.n(Ke),ea=t(132),aa=t.n(ea),ta=t(133),na=t.n(ta),oa=t(134),ra=t.n(oa),ia=t(3),la=t.n(ia),ca=Object(g.a)((function(){return{boxContainer:{display:"flex",minHeight:"80vh",justifyContent:"center",alignItems:"flex-start",paddingTop:50,paddingBottom:50},lightIconContainer:{backgroundColor:"#FFF",width:"150px",height:"150px",padding:"10px",marginBottom:"20px"},heading:{paddingTop:"30px",paddingBottom:"30px"},darkBlueBox:{paddingTop:"0px",paddingBottom:"0px",backgroundColor:"#2a5a79",position:"relative",zIndex:2},chatIcon:{color:"#2a5a79",fontSize:130},hoverLink:{display:"inline","&":{textDecoration:"underline",color:"#ffffff"},"&:hover":{textDecoration:"underline",textDecorationThickness:"5px",color:"#ffffff"}},emailIcon:{color:"#2a5a79",fontSize:60},iconButton:{marginTop:20,marginLeft:20,marginRight:20,backgroundColor:"#ffffff","&:hover":{backgroundColor:"#ffffff"}},resumeIcon:{color:"#2a5a79",fontSize:60},linkedInIcon:{color:"#2a5a79",fontSize:60},gitHubIcon:{color:"#2a5a79",fontSize:60}}}));me.ContactSection={setShowEmailDialog:la.a.func};var sa=function(e){var a=e.setShowEmailDialog,t=function(){a(!0)},n=ca();return o.a.createElement("div",{id:"contact",className:n.darkBlueBox},o.a.createElement(Se,null),o.a.createElement(pe.a,{className:n.boxContainer},o.a.createElement(ge.a,{animateIn:"animate__fadeIn",animateOnce:!0},o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(ke,null,o.a.createElement(S.Link,{to:"contact",spy:!0,smooth:!0,duration:500},o.a.createElement(he.a,{className:n.lightIconContainer},o.a.createElement(ee.a,{className:n.chatIcon}))))),o.a.createElement(f,{align:"center",variant:"h3",gutterBottom:!0,className:n.heading},"Contact me"),o.a.createElement(f,{align:"center",variant:"body1"},o.a.createElement(qe.CopyToClipboard,{text:"brandon.dang1234@gmail.com",onCopy:t},o.a.createElement($e.a,{href:"",onClick:function(e){return e.preventDefault()},className:n.hoverLink},"brandon.dang1234@gmail.com"))),o.a.createElement("br",null),o.a.createElement(f,{align:"center",variant:"body1",gutterBottom:!0},o.a.createElement($e.a,{href:Ne.a,target:"_blank",className:n.hoverLink},"My resume")),o.a.createElement("br",null),o.a.createElement(f,{align:"center",variant:"body1",gutterBottom:!0},o.a.createElement($e.a,{href:be,target:"_blank",className:n.hoverLink},"LinkedIn")),o.a.createElement("br",null),o.a.createElement(f,{align:"center",variant:"body1",gutterBottom:!0},o.a.createElement($e.a,{href:ye,target:"_blank",className:n.hoverLink},"GitHub")),o.a.createElement(ie.a,{container:!0,direction:"row",justify:"center",alignItems:"stretch",spacing:1},o.a.createElement(ke,null,o.a.createElement(qe.CopyToClipboard,{text:"brandon.dang1234@gmail.com",onCopy:t},o.a.createElement(y.a,{className:n.iconButton},o.a.createElement(Xe.a,{className:n.emailIcon})))),o.a.createElement(ke,null,o.a.createElement(y.a,{href:Ne.a,target:"_blank",className:n.iconButton},o.a.createElement(aa.a,{className:n.resumeIcon}))),o.a.createElement(ke,null,o.a.createElement(y.a,{href:be,target:"_blank",className:n.iconButton},o.a.createElement(na.a,{className:n.linkedInIcon}))),o.a.createElement(ke,null,o.a.createElement(y.a,{href:ye,target:"_blank",className:n.iconButton},o.a.createElement(ra.a,{className:n.gitHubIcon})))))))},da=Object(g.a)((function(){return{darkGrayBox:{paddingTop:"0px",paddingBottom:"0px",backgroundColor:"#434343",position:"relative",zIndex:2},footerContainer:{justifyContent:"center",alignItems:"flex-start",paddingTop:10,paddingBottom:150}}}));var ma=function(){var e=da();return o.a.createElement("div",{className:e.darkGrayBox},o.a.createElement(Oe,null),o.a.createElement(pe.a,{className:e.footerContainer},o.a.createElement(ge.a,{animateIn:"animate__fadeIn",animateOnce:!0},o.a.createElement(f,{align:"center",variant:"h4",gutterBottom:!0},"About this website"),o.a.createElement(f,{align:"center",variant:"body2",gutterBottom:!0},"I used the React library to build the UI for this Website. The icons were provided from the Material-UI library. This website is currently hosted on GitHub pages."))))};var ua=function(){var e=Object(n.useState)([window.innerWidth,window.innerHeight]),a=Object(l.a)(e,1)[0],t=o.a.useState(!1),r=Object(l.a)(t,2),i=r[0],s=r[1],d=Object(ue.useMediaQuery)({query:"(max-width: 800px)"}),m=o.a.useState(!1),p=Object(l.a)(m,2),f=p[0],g=p[1];return o.a.createElement(c.a,{theme:u},o.a.createElement(L,null),o.a.createElement("div",{style:{zIndex:1,position:"relative"}},o.a.createElement(k,{show:f,handleClose:function(){g(!1)}}),o.a.createElement(re,{isExtraSmallScreen:d,windowDimensions:a,drawerNavMenuOpen:i,toggleDrawerNavMenuOpen:function(){var e=document.getElementById("titleGrid");e.style.paddingRight=i?"0px":window.innerWidth-document.body.clientWidth+"px",s((function(e){return!e}))},handleDrawerNavMenuClose:function(){s(!1),document.getElementById("titleGrid").style.paddingRight="0px"}}),o.a.createElement(me,{drawerNavMenuOpen:i}),o.a.createElement("div",{style:{zIndex:"1",position:"relative"}},o.a.createElement(v,null),o.a.createElement(Ie,null),o.a.createElement(Me,{isExtraSmallScreen:d}),o.a.createElement(De,null),o.a.createElement(Je,null),o.a.createElement(Ze,null),o.a.createElement(Ve,null),o.a.createElement(sa,{setShowEmailDialog:g}),o.a.createElement(ma,null))))},pa=t(136);var fa=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(pa.ParallaxProvider,null,o.a.createElement(ua,{path:"/brandang-pages/"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(fa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,a,t){e.exports=t.p+"static/media/Resume.ea5c6174.pdf"},61:function(e,a,t){}},[[143,1,2]]]);
//# sourceMappingURL=main.5d137d6b.chunk.js.map