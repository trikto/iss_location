(this.webpackJsonpiss_location=this.webpackJsonpiss_location||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(1),a=n.n(s),c=n(5),o=n.n(c),r=(n(16),n(4)),l=n.n(r),u=n(6),h=n(7),d=n(8),j=n(2),b=n(10),p=n(9),m=(n(18),n.p+"static/media/bgimage.8d46ed20.jpg"),f=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this)).state={timestamp:null,iss_position:{latitude:null,longitude:null},loading:!1},t.fetchData=t.fetchData.bind(Object(j.a)(t)),t}return Object(d.a)(n,[{key:"fetchData",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,n,i,s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,fetch("http://api.open-notify.org/iss-now.json");case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,i=n.timestamp,t.next=10,fetch("https://showcase.api.linx.twenty57.net/UnixTime/fromunixtimestamp?unixtimestamp=".concat(i));case 10:return s=t.sent,t.next=13,s.json();case 13:a=t.sent,this.setState({timestamp:a.Datetime,iss_position:n.iss_position,loading:!1}),console.log(this.state);case 16:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?Object(i.jsx)("h2",{className:"tc f2",children:"Loading"}):Object(i.jsxs)("div",{className:"tc f2 georgia",children:[Object(i.jsx)("h2",{children:"Current location of the ISS"}),Object(i.jsxs)("div",{className:"ma2 pa2 tl fw4 dib",children:[Object(i.jsxs)("p",{children:["Timestamp : ",this.state.timestamp]}),Object(i.jsx)("p",{children:"Position :"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["Latitude : ",this.state.iss_position.latitude]}),Object(i.jsxs)("li",{children:["Longitude : ",this.state.iss_position.longitude]})]})]}),Object(i.jsx)("img",{src:m,className:"mv5 fr br4 grow dib"}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"grow br4 f4 pa2 no-underline bg-animate bg-washed-green hover-bg-light-blue black",onClick:this.fetchData,children:"Refresh"})]})}}]),n}(s.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),s(t),a(t),c(t)}))};n(19);o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),g()}},[[20,1,2]]]);
//# sourceMappingURL=main.7e0bf586.chunk.js.map