(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E}),n.d(t,"query",function(){return b});var a=n(8),r=n.n(a),i=n(0),u=n.n(i),o=n(149),c=n.n(o),l=n(171),s=n.n(l),m=n(158),d=n(159),p=(n(184),n(186)),f=n.n(p),h=s()(["data","markdownRemark"]),v=s()(["pageContext"]),y=function(e){var t=e.prev,n=e.next;return u.a.createElement("div",{className:f.a.postNav},t&&u.a.createElement(c.a,{to:"/"+t.fields.slug},"上一篇：",t.frontmatter.title),n&&u.a.createElement(c.a,{to:"/"+n.fields.slug},"下一篇：",n.frontmatter.title))},E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(m.a)().reveal(".article-header",{delay:500,useDelay:"onload",reset:!0,origin:"top",distance:"120px"}),Object(m.a)().reveal(".article-content",{delay:500,useDelay:"onload",reset:!0,origin:"bottom",distance:"120px"})},n.componentWillUnmount=function(){Object(m.a)().destroy()},n.render=function(){var e=h(this.props),t=v(this.props),n=t.next,a=t.prev;return u.a.createElement(d.a,null,u.a.createElement("header",{className:"article-header"},u.a.createElement("h1",null,e.frontmatter.title)),u.a.createElement("div",{className:"article-content",dangerouslySetInnerHTML:{__html:e.html}}),u.a.createElement(y,{prev:a,next:n}))},t}(i.PureComponent),b="2198836028"},150:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(149),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(150),m=n.n(s);n.d(t,"PageRenderer",function(){return m.a});var d=n(39);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},152:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(52),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},153:function(e){e.exports={data:{site:{siteMetadata:{title:"ELVIS",subtitle:"麒丶沐之涵"}}}}},154:function(e,t,n){},156:function(e,t,n){},159:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),u=n(160),o=n.n(u),c=n(151),l=n(149),s=n.n(l),m=function(e){e.siteMetadata;return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"pure-menu pure-menu-horizontal"},i.a.createElement("ul",null,i.a.createElement("li",{className:"pure-menu-item"},i.a.createElement(s.a,{className:"pure-menu-link",to:"/about"},"About")),i.a.createElement("li",{className:"pure-menu-item"},i.a.createElement("a",{href:"http://twitter.com/yuilibrary/",className:"pure-menu-link"},"Twitter")),i.a.createElement("li",{className:"pure-menu-item"},i.a.createElement("a",{className:"pure-menu-link",href:"http://github.com/evkylin"},"Github")))))},d=n(8),p=n.n(d),f=n(158),h=function(e){function t(){return e.apply(this,arguments)||this}p()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(f.a)().reveal(".brand-title, .brand-tagline",{delay:0,origin:"top",distance:"120px",useDelay:"once",container:".sidebar"}),Object(f.a)().reveal(".nav",{delay:0,origin:"bottom",distance:"120px",useDelay:"once",container:".sidebar"})},n.componentWillUnmount=function(){Object(f.a)().destroy()},n.render=function(){var e=this.props.siteMetadata;return i.a.createElement("div",{className:"sidebar pure-u-1 pure-u-md-1-4"},i.a.createElement("div",{className:"header"},i.a.createElement("h1",{className:"brand-title"},e.title),i.a.createElement("h2",{className:"brand-tagline"},"Fear can hold you prisoner. Hope cna set you free."),i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"nav-list"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.a,{className:"pure-button",to:"/"},"Home")),i.a.createElement("li",{className:"nav-item",style:{marginLeft:8}},i.a.createElement(s.a,{className:"pure-button",to:"/archives"},"Archives")),i.a.createElement("li",{className:"nav-item",style:{marginLeft:8}},i.a.createElement(s.a,{className:"pure-button",to:"/about"},"About"))))))},t}(r.PureComponent);n(161),n(162),n(154),n(156),t.a=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"565778879",render:function(e){return i.a.createElement("div",{id:"layout",className:"pure-g"},i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),i.a.createElement(h,{siteMetadata:e.site.siteMetadata}),i.a.createElement("div",{className:"content pure-u-1 pure-u-md-3-4"},t,i.a.createElement(m,null)))},data:a})}},165:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}},171:function(e,t,n){var a=n(172)(function(e,t){for(var n=t,a=0;a<e.length;){if(null==n)return;n=n[e[a]],a+=1}return n});e.exports=a},172:function(e,t,n){var a=n(173),r=n(165);e.exports=function(e){return function t(n,i){switch(arguments.length){case 0:return t;case 1:return r(n)?t:a(function(t){return e(n,t)});default:return r(n)&&r(i)?t:r(n)?a(function(t){return e(t,i)}):r(i)?a(function(t){return e(n,t)}):e(n,i)}}}},173:function(e,t,n){var a=n(165);e.exports=function(e){return function t(n){return 0===arguments.length||a(n)?t:e.apply(this,arguments)}}},184:function(e,t,n){},186:function(e,t,n){e.exports={postNav:"post-module--post-nav--1-5Ux"}}}]);
//# sourceMappingURL=component---src-templates-post-js-c4dbdee508c71be55fc3.js.map