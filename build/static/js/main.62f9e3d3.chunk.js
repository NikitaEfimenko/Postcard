(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(8),o=n(2),r=n(3),p=n(5),c=n(4),l=n(6),m=n(1),f=(n(14),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(p.a)(this,Object(c.a)(t).call(this,e))).state={offset:1},n.handleAnimate=n.handleAnimate.bind(Object(m.a)(Object(m.a)(n))),setInterval(n.handleAnimate,1e3/n.props.fps),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleAnimate",value:function(){this.setState(function(e,t){return{offset:e.offset+2}})}},{key:"render",value:function(){var e={overflow:"hidden",position:"relative",width:"100%",height:"40%",background:"linear-gradient(rgba(200,200,200,0.4),rgba(20,20,26,0.6)) ,url("+this.props.img+") ",backgroundPosition:this.state.offset+"px 450%"};return a.a.createElement("div",{style:e},this.props.children)}}]),t}(i.Component)),u=(n(16),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(p.a)(this,Object(c.a)(t).call(this,e))).state={offset:1},n.handleAnimate=n.handleAnimate.bind(Object(m.a)(Object(m.a)(n))),setInterval(n.handleAnimate,1e3/n.props.fps),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleAnimate",value:function(){this.setState(function(e,t){return{offset:e.offset+2}})}},{key:"render",value:function(){var e={display:"flex",justifyContent:"center",alignItems:"center",position:"relative",width:"100%",height:"60%",background:" linear-gradient(rgba(50,50,56,0.6),rgba(200,200,200,0.7)) , url("+this.props.img+")",backgroundPosition:"60% "+this.state.offset+"%"};return a.a.createElement("div",{style:e},this.props.children)}}]),t}(i.Component)),h=(n(18),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(p.a)(this,Object(c.a)(t).call(this,e))).state={dx:0,curFrame:0},n.getImage=n.getImage.bind(Object(m.a)(Object(m.a)(n))),n.nextFrame=n.nextFrame.bind(Object(m.a)(Object(m.a)(n))),setInterval(n.nextFrame,1e3/n.props.fps),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"nextFrame",value:function(){this.setState(function(e,t){return{curFrame:(e.curFrame+1)%2,dx:(e.curFrame+1)%2*180}})}},{key:"getImage",value:function(){return{position:"absolute",left:0,cursor:"pointer",top:0,transform:"translate( -"+this.state.dx+"px,0px )"}}},{key:"soundHandler",value:function(){new Audio(this.props.clkSound).play()}},{key:"render",value:function(){return a.a.createElement("div",{className:"animated "+this.props.anim+" infinite",onClick:this.soundHandler.bind(this),style:{display:"flex",position:"relative",overflow:"hidden",height:"180px",width:"180px",justifyContent:"center",alignItems:"center",zIndex:1}},a.a.createElement("img",{src:this.props.img,style:this.getImage(),alt:"Responsive person"}))}}]),t}(i.Component)),d=(n(20),function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={overflow:"hidden",position:"absolute",width:150*this.props.size+"px",height:150*this.props.size+"px",top:this.props.position.top+"%",left:this.props.position.left+"%"};return a.a.createElement("img",{style:e,className:"animated rubberBand infinite",src:this.props.img,alt:"Responsive cloud"})}}]),t}(i.Component)),g=(n(22),function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={position:"absolute",overflow:"hidden",height:100*this.props.size+"px",width:100*this.props.size+"px",top:this.props.position.top+"%",left:this.props.position.left+"%",zIndex:this.props.z};return a.a.createElement(i.Fragment,null,a.a.createElement("img",{style:e,className:"animated "+this.props.anim+" infinite",src:this.props.img,alt:"Responsive person"}),this.props.children)}}]),t}(i.Component)),b=(n(24),function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(p.a)(this,Object(c.a)(t).call(this,e))).state={};var i=new Audio(n.props.backSound);return i.addEventListener("ended",function(){this.currentTime=0,this.play()},!1),i.play(),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e="./images/sky.png",t="./images/sky1.png",n="./images/el.png",s="./images/el1.png";return a.a.createElement(i.Fragment,null,a.a.createElement(f,{fps:30,img:"./images/sky.jpg"},a.a.createElement(g,{fps:2,position:{top:0,left:40},size:2.4,z:0,anim:"tada",img:"./images/sun.png"}),a.a.createElement(d,{img:t,position:{top:5,left:13},size:.6,fps:5}),a.a.createElement(d,{img:e,position:{top:40,left:40},size:.8,fps:5}),a.a.createElement(d,{img:t,position:{top:25,left:20},size:.9,fps:5}),a.a.createElement(d,{img:t,position:{top:13,left:20},size:.4,fps:5}),a.a.createElement(d,{img:e,position:{top:35,left:60},size:1.2,fps:5}),a.a.createElement(d,{img:e,position:{top:0,left:70},size:1.3,fps:5}),a.a.createElement(d,{img:t,position:{top:40,left:3},size:1.3,fps:5})),a.a.createElement(u,{fps:25,img:"./images/ice.jpg"},a.a.createElement(h,{clkSound:"./sounds/1.mp3",fps:3,anim:"tada",size:2,img:"./images/person.png"}),a.a.createElement(g,{fps:5,position:{top:3,left:20},size:.4,z:0,anim:"tada",img:n}),a.a.createElement(g,{fps:5,position:{top:12,left:40},size:.4,z:0,anim:"shake",img:s}),a.a.createElement(g,{fps:5,position:{top:0,left:2},size:.7,z:0,anim:"tada",img:n}),a.a.createElement(g,{fps:5,position:{top:4,left:50},size:.7,z:0,anim:"pulse",img:s}),a.a.createElement(g,{fps:5,position:{top:7,left:80},size:1.4,z:0,anim:"shake",img:n}),a.a.createElement(g,{fps:5,position:{top:20,left:20},size:1.9,z:0,anim:"shake",img:s}),a.a.createElement(g,{fps:5,position:{top:27,left:2},size:1.9,z:0,anim:"pulse",img:n}),a.a.createElement(g,{fps:5,position:{top:25,left:90},size:1.7,z:2,anim:"pulse",img:s}),a.a.createElement(g,{fps:5,position:{top:45,left:70},size:2.1,z:3,anim:"shake",img:n}),a.a.createElement(g,{fps:5,position:{top:55,left:20},size:2.4,z:3,anim:"wobble",img:s})))}}]),t}(i.Component));Object(s.render)(a.a.createElement(b,{backSound:"./sounds/happy.mp3"}),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.62f9e3d3.chunk.js.map