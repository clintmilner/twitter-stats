(this["webpackJsonptwitter-stats"]=this["webpackJsonptwitter-stats"]||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(14),i=n.n(l),o=(n(27),n(28),n(15)),c=n(4),u=n(5),s=n(8),m=n(6),d=n(9),f=n(1),p=n(2),b=n(7),h=n.n(b),g=n(19),w=n(3),E=n.n(w),x=n(16),O=n.n(x),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"marshallData",value:function(e){var t=Object.keys(e[0]).filter((function(e,t){return 0===t})),n=Object(g.a)(t,1)[0],r=e.map((function(e){var t=e[n];return[e.timestamp,t]}));return[{name:n,data:r}]}},{key:"render",value:function(){var e=this.props,t=e.data,n=void 0===t?[]:t,r=e.title,l={title:{text:r},legend:{enabled:!1},chart:{backgroundColor:"#31333c",type:"areaspline"},xAxis:{type:"datetime",labels:{formatter:function(){return h()(this.x).format("MMM Do, h:mm:ss a")}},title:{text:null}},yAxis:{title:{text:r},min:0},plotOptions:{series:{fillColor:{linearGradient:[0,0,0,300],stops:[[0,E.a.Color("#fff").setOpacity(.3).get("rgba")],[1,E.a.Color("#fff").setOpacity(0).get("rgba")]]},marker:{enabled:!0}}},credits:{enabled:!1},series:this.marshallData(n)};return a.a.createElement(O.a,{highcharts:E.a,options:l})}}]),t}(a.a.Component);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(){var e=Object(f.a)(["\n    background: #282c34;\n    border-top: 1px solid #585858;\n    margin-top: 30px;\n    height: 50px;\n    display: flex;\n    flex-direction: column;\n    p {\n        text-align: center;\n        margin: auto;\n    }\n"]);return y=function(){return e},e}function C(){var e=Object(f.a)(["\n    width: 100%;\n    font-size: smaller;\n    border: 1px solid #2e3039;\n    th, td {\n        border: 1px solid #2e3039;\n    }\n    td:last-child {\n        text-align: center;\n    }\n"]);return C=function(){return e},e}function k(){var e=Object(f.a)(["\n    border: 1px solid #2E3039;\n    -webkit-border-radius: 4px; -moz-border-radius: 4px;border-radius: 4px;\n    height: auto;\n    width: calc(50% - 20px);\n    padding: 10px;\n    margin: 10px;\n    box-sizing: border-box;\n    @media (max-width: 768px) {\n        //flex-direction: column;\n        width: calc(100% - 20px);\n  }\n"]);return k=function(){return e},e}function D(){var e=Object(f.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n"]);return D=function(){return e},e}function T(){var e=Object(f.a)(["\n  font-size: 1.5em;\n  margin: 0 auto;\n"]);return T=function(){return e},e}function F(){var e=Object(f.a)(["\n    height: 3em;\n    margin-bottom: 30px;\n    border-bottom: 1px solid #585858;\n    padding: 0 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return F=function(){return e},e}function M(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return M=function(){return e},e}var N=p.a.div(M()),P=p.a.header(F()),L=p.a.h1(T()),S=p.a.main(D()),z=p.a.div(k()),Y=p.a.table(C()),R=p.a.footer(y()),A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={twitterTweetCount:[],twitterLikeCount:[],twitterFollowerCount:[],twitterFollowingCount:[]},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("//scraper.clintmilner.com:9999/data").then((function(e){return e.json()})).then((function(t){e.setState((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)}))})).catch((function(e){return console.error("ERROR: ",e)}))}},{key:"renderTable",value:function(e){var t=this.state[e];if(t&&t.length>0)return a.a.createElement(Y,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Date"),a.a.createElement("th",null,"Count"))),a.a.createElement("tbody",null,t.filter((function(e,n){return t.length<=5||t.length-n<=5})).map((function(t,n){return a.a.createElement("tr",{key:n},a.a.createElement("td",null,h()(t.timestamp).format("MMM Do YYYY, h:mm:ss a")),a.a.createElement("td",null,t[e].toLocaleString()))}))))}},{key:"render",value:function(){var e=this.state,t=e.twitterTweetCount,n=e.twitterFollowerCount,r=e.twitterFollowingCount,l=e.twitterLikeCount;return a.a.createElement(N,null,a.a.createElement(P,null,a.a.createElement(L,null,"Twitter Stats")),a.a.createElement(S,null,t&&t.length>0?a.a.createElement(z,null,a.a.createElement("h2",null,"Tweet Count"),a.a.createElement("div",{className:"graph"},a.a.createElement(v,{data:t})),a.a.createElement("div",{className:"table"},this.renderTable("twitterTweetCount"))):null,n&&n.length>0?a.a.createElement(z,null,a.a.createElement("h2",null,"Follower Count"),a.a.createElement("div",{className:"graph"},a.a.createElement(v,{data:n})),a.a.createElement("div",{className:"table"},this.renderTable("twitterFollowerCount"))):null,r&&r.length>0?a.a.createElement(z,null,a.a.createElement("h2",null,"Following Count"),a.a.createElement("div",{className:"graph"},a.a.createElement(v,{data:r})),a.a.createElement("div",{className:"table"},this.renderTable("twitterFollowingCount"))):null,l&&l.length>0?a.a.createElement(z,null,a.a.createElement("h2",null,"Like Count"),a.a.createElement("div",{className:"graph"},a.a.createElement(v,{data:l})),a.a.createElement("div",{className:"table"},this.renderTable("twitterLikeCount"))):null),a.a.createElement(R,null,a.a.createElement("p",null,"Made with ",a.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," by @clint_milner")))}}]),t}(a.a.Component);i.a.render(a.a.createElement(A,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.26b55616.chunk.js.map