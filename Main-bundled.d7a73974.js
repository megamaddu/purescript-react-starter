parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JyZm":[function(require,module,exports) {
function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}function o(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?c(t):e}function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function i(n){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}var f={};!function(n){"use strict";var e=require("react"),c=e.createElement,a=function(n){function a(n){var e;return t(this,a),(e=o(this,i(a).call(this,n))).state={error:null},e}return u(a,e.Component),r(a,[{key:"render",value:function(){return null==this.state.error?this.props.children:c("p",null,"An error occurred: ",this.state.error.message)}}],[{key:"getDerivedStateFromError",value:function(n){return{error:n}}}]),a}();n.catchErrors=a}(f["Components.Errors"]=f["Components.Errors"]||{}),function(n){"use strict";n["Components.Errors"]=n["Components.Errors"]||{};var t=n["Components.Errors"],e=n["Components.Errors"];t.catchErrors=e.catchErrors}(f),function(n){"use strict";n["Control.Apply"]=n["Control.Apply"]||{};var t=n["Control.Apply"];t.Apply=function(n,t){this.Functor0=n,this.apply=t},t.apply=function(n){return n.apply}}(f),function(n){"use strict";n["Control.Applicative"]=n["Control.Applicative"]||{};var t=n["Control.Applicative"],e=n["Control.Apply"],r=function(n){return n.pure};t.Applicative=function(n,t){this.Apply0=n,this.pure=t},t.pure=r,t.liftA1=function(n){return function(t){return function(o){return e.apply(n.Apply0())(r(n)(t))(o)}}}}(f),function(n){"use strict";var t=require("react-dom");n.render_=function(n,e,r){t.render(n,e,r)}}(f["React.Basic.DOM"]=f["React.Basic.DOM"]||{}),function(n){"use strict";(f["Data.Unit"]=f["Data.Unit"]||{}).unit={}}(),function(n){"use strict";n["Data.Unit"]=n["Data.Unit"]||{};var t=n["Data.Unit"],e=n["Data.Unit"];t.unit=e.unit}(f),function(n){"use strict";n.pureE=function(n){return function(){return n}},n.bindE=function(n){return function(t){return function(){return t(n())()}}}}(f.Effect=f.Effect||{}),function(n){"use strict";n["Data.Function"]=n["Data.Function"]||{};var t=n["Data.Function"];t.flip=function(n){return function(t){return function(e){return n(e)(t)}}},t.const=function(n){return function(t){return n}}}(f),function(n){"use strict";n["Control.Bind"]=n["Control.Bind"]||{};var t=n["Control.Bind"],e=n["Data.Function"],r=function(n){return n.bind};t.Bind=function(n,t){this.Apply0=n,this.bind=t},t.bind=r,t.bindFlipped=function(n){return e.flip(r(n))}}(f),function(n){"use strict";n["Control.Monad"]=n["Control.Monad"]||{};var t=n["Control.Monad"],e=n["Control.Applicative"],r=n["Control.Bind"];t.Monad=function(n,t){this.Applicative0=n,this.Bind1=t},t.ap=function(n){return function(t){return function(o){return r.bind(n.Bind1())(t)(function(t){return r.bind(n.Bind1())(o)(function(r){return e.pure(n.Applicative0())(t(r))})})}}}}(f),function(n){"use strict";n["Data.Functor"]=n["Data.Functor"]||{};var t=n["Data.Functor"],e=n["Data.Function"],r=n["Data.Unit"],o=function(n){return n.map};t.Functor=function(n){this.map=n},t.map=o,t.void=function(n){return o(n)(e.const(r.unit))}}(f),function(n){"use strict";n.Effect=n.Effect||{};var t=n.Effect,e=n.Effect,r=n["Control.Applicative"],o=n["Control.Apply"],c=n["Control.Bind"],i=n["Control.Monad"],u=n["Data.Functor"],a=new i.Monad(function(){return l},function(){return f}),f=new c.Bind(function(){return s},e.bindE),s=new o.Apply(function(){return p},i.ap(a)),l=new r.Applicative(function(){return s},e.pureE),p=new u.Functor(r.liftA1(l));t.functorEffect=p,t.applyEffect=s,t.applicativeEffect=l,t.bindEffect=f,t.monadEffect=a}(f),function(n){"use strict";(f["Effect.Uncurried"]=f["Effect.Uncurried"]||{}).runEffectFn3=function(n){return function(t){return function(e){return function(r){return function(){return n(t,e,r)}}}}}}(),function(n){"use strict";n["Effect.Uncurried"]=n["Effect.Uncurried"]||{};var t=n["Effect.Uncurried"],e=n["Effect.Uncurried"];t.runEffectFn3=e.runEffectFn3}(f),function(n){"use strict";(f["Unsafe.Coerce"]=f["Unsafe.Coerce"]||{}).unsafeCoerce=function(n){return n}}(),function(n){"use strict";n["Unsafe.Coerce"]=n["Unsafe.Coerce"]||{};var t=n["Unsafe.Coerce"],e=n["Unsafe.Coerce"];t.unsafeCoerce=e.unsafeCoerce}(f),function(n){"use strict";n["React.Basic.DOM"]=n["React.Basic.DOM"]||{};var t=n["React.Basic.DOM"],e=n["React.Basic.DOM"],r=n["Control.Applicative"],o=n["Data.Unit"],c=n.Effect,i=n["Effect.Uncurried"],u=n["Unsafe.Coerce"].unsafeCoerce,a=i.runEffectFn3(e.render_);t.render=function(n){return function(t){return a(n)(t)(r.pure(c.applicativeEffect)(o.unit))}},t.text=u}(f),function(n){"use strict";var t=require("react").createElement;function e(n,t){var e=null;return"string"==typeof n&&null!=t._data&&(e={_data:void 0},Object.entries(t._data).forEach(function(n){e["data-"+n[0]]=n[1]})),null==e?t:Object.assign({},t,e)}n.element_=function(n,r,o){var c=[n,e(n,r)];return t.apply(null,o||null==r.children?c:c.concat(r.children))}}(f["React.Basic"]=f["React.Basic"]||{}),function(n){"use strict";(f["Data.Function.Uncurried"]=f["Data.Function.Uncurried"]||{}).runFn2=function(n){return function(t){return function(e){return n(t,e)}}}}(),function(n){"use strict";n["Data.Function.Uncurried"]=n["Data.Function.Uncurried"]||{};var t=n["Data.Function.Uncurried"],e=n["Data.Function.Uncurried"];t.runFn2=e.runFn2}(f),function(n){"use strict";n["React.Basic"]=n["React.Basic"]||{};var t=n["React.Basic"],e=n["React.Basic"],r=n["Data.Function.Uncurried"].runFn2(e.element_);t.element=r}(f),function(n){"use strict";n["React.Basic.DOM.Internal"]=n["React.Basic.DOM.Internal"]||{};var t=n["React.Basic.DOM.Internal"],e=n["Unsafe.Coerce"].unsafeCoerce;t.unsafeCreateDOMComponent=e}(f),function(n){"use strict";n["React.Basic.DOM.Generated"]=n["React.Basic.DOM.Generated"]||{};var t=n["React.Basic.DOM.Generated"],e=n["React.Basic"],r=n["React.Basic.DOM.Internal"],o=function(n){return e.element(r.unsafeCreateDOMComponent("p"))},c=function(n){return e.element(r.unsafeCreateDOMComponent("h4"))};t.h4_=function(n){return c()({children:n})},t.p_=function(n){return o()({children:n})}}(f),function(n){"use strict";var t=require("react");require("react-dom");n.suspense=t.Suspense,n.strictMode=t.StrictMode;var e={error:null,result:void 0,pending:null};n.fakeSuspend=function(n){return function(){if(null!==e.error)throw e.error;if(void 0!==e.result)return e.result;throw e.pending=new Promise(function(t){setTimeout(function(){return t(n)},3e3)}).then(function(t){return e.result=n}),e.pending}}}(f["React.Basic.Ext"]=f["React.Basic.Ext"]||{}),function(n){"use strict";n["React.Basic.Ext"]=n["React.Basic.Ext"]||{};var t=n["React.Basic.Ext"],e=n["React.Basic.Ext"];t.suspense=e.suspense,t.strictMode=e.strictMode,t.fakeSuspend=e.fakeSuspend}(f),function(n){"use strict";require("react");n.unsafeSetDisplayName=function(n,t){return t.displayName=n,t.toString=function(){return n},t}}(f["React.Basic.Hooks"]=f["React.Basic.Hooks"]||{}),function(n){"use strict";n["React.Basic.Hooks"]=n["React.Basic.Hooks"]||{};var t=n["React.Basic.Hooks"],e=n["React.Basic.Hooks"],r=n["Unsafe.Coerce"],o=r.unsafeCoerce,c=r.unsafeCoerce;t.component=function(n){return function(n){return function(n){return function(n){return function(t){var r=o(function(n){return c(t(n))()});return function(){return e.unsafeSetDisplayName(n,r)}}}}}}}(f),function(n){"use strict";n["Control.Apply.Indexed"]=n["Control.Apply.Indexed"]||{};n["Control.Apply.Indexed"].IxApply=function(n,t){this.IxFunctor0=n,this.iapply=t}}(f),function(n){"use strict";n["Control.Bind.Indexed"]=n["Control.Bind.Indexed"]||{};var t=n["Control.Bind.Indexed"];t.IxBind=function(n,t){this.IxApply0=n,this.ibind=t},t.ibind=function(n){return n.ibind}}(f),function(n){"use strict";n["Data.Functor.Indexed"]=n["Data.Functor.Indexed"]||{};n["Data.Functor.Indexed"].IxFunctor=function(n){this.imap=n}}(f),function(n){"use strict";n["React.Basic.Hooks.Internal"]=n["React.Basic.Hooks.Internal"]||{};var t=n["React.Basic.Hooks.Internal"],e=n["Control.Applicative"],r=n["Control.Apply"],o=n["Control.Apply.Indexed"],c=n["Control.Bind.Indexed"],i=n["Data.Functor"],u=n["Data.Functor.Indexed"],a=n.Effect,f=new u.IxFunctor(function(n){return function(t){return i.map(a.functorEffect)(n)(t)}}),s=new o.IxApply(function(){return f},function(n){return function(t){return r.apply(a.applyEffect)(n)(t)}}),l=new c.IxBind(function(){return s},function(n){return function(t){return function(){var e=n();return t(e)()}}}),p=new i.Functor(function(n){return function(t){return i.map(a.functorEffect)(n)(t)}});t.bind=function(n){return c.ibind(n)},t.ixBindRender=l,t.applicativeRender=function(n){return new e.Applicative(function(){return new r.Apply(function(){return p},function(n){return function(t){return r.apply(a.applyEffect)(n)(t)}})},function(n){return e.pure(a.applicativeEffect)(n)})}}(f),function(n){"use strict";n["Type.Equality"]=n["Type.Equality"]||{};var t=n["Type.Equality"],e=new function(n,t){this.from=n,this.to=t}(function(n){return n},function(n){return n});t.refl=e}(f),function(n){"use strict";n.Home=n.Home||{};var t=n.Home,e=n["Control.Applicative"],r=n["React.Basic.DOM"],o=n["React.Basic.DOM.Generated"],c=n["React.Basic.Ext"],i=n["React.Basic.Hooks"],u=n["React.Basic.Hooks.Internal"],a=n["Type.Equality"],f=i.component()()()("Home")(function(n){return u.bind(u.ixBindRender)(c.fakeSuspend("Maddie"))(function(n){return e.pure(u.applicativeRender(a.refl))(o.p_([r.text("hello, "+n)]))})});t.mkHome=f}(f),function(n){"use strict";n.App=n.App||{};var t=n.App,e=n["Components.Errors"],r=n["Control.Applicative"],o=n.Home,c=n["React.Basic"],i=n["React.Basic.DOM"],u=n["React.Basic.DOM.Generated"],a=n["React.Basic.Ext"],f=n["React.Basic.Hooks"],s=n["React.Basic.Hooks.Internal"],l=n["Type.Equality"];t.mkApp=function(){var n=o.mkHome();return f.component()()()("App")(function(t){return r.pure(s.applicativeRender(l.refl))(c.element(a.strictMode)({children:c.element(e.catchErrors)({children:c.element(a.suspense)({fallback:u.h4_([i.text("Loading...")]),children:[c.element(n)({})]})})}))})()}}(f),function(n){"use strict";n.error=function(n){return new Error(n)},n.throwException=function(n){return function(){throw n}}}(f["Effect.Exception"]=f["Effect.Exception"]||{}),function(n){"use strict";n["Effect.Exception"]=n["Effect.Exception"]||{};var t=n["Effect.Exception"],e=n["Effect.Exception"];t.error=e.error,t.throwException=e.throwException}(f),function(n){"use strict";n["Control.Monad.Error.Class"]=n["Control.Monad.Error.Class"]||{};var t=n["Control.Monad.Error.Class"],e=n.Effect,r=new function(n,t){this.Monad0=n,this.throwError=t}(function(){return e.monadEffect},n["Effect.Exception"].throwException);t.throwError=function(n){return n.throwError},t.monadThrowEffect=r}(f),function(n){"use strict";n["Data.Maybe"]=n["Data.Maybe"]||{};var t=n["Data.Maybe"],e=function(){function n(){}return n.value=new n,n}(),r=function(){function n(n){this.value0=n}return n.create=function(t){return new n(t)},n}();t.Nothing=e,t.Just=r}(f),function(n){"use strict";(f["Data.Nullable"]=f["Data.Nullable"]||{}).nullable=function(n,t,e){return null==n?t:e(n)}}(),function(n){"use strict";n["Data.Nullable"]=n["Data.Nullable"]||{};var t=n["Data.Nullable"],e=n["Data.Nullable"],r=n["Data.Maybe"];t.toMaybe=function(n){return e.nullable(n,r.Nothing.value,r.Just.create)}}(f),function(n){"use strict";(f["Web.DOM.Document"]=f["Web.DOM.Document"]||{}).createElement=function(n){return function(t){return function(){return t.createElement(n)}}}}(),function(n){"use strict";n["Web.DOM.Document"]=n["Web.DOM.Document"]||{};var t=n["Web.DOM.Document"],e=n["Web.DOM.Document"];t.createElement=e.createElement}(f),function(n){"use strict";n["Web.DOM.Element"]=n["Web.DOM.Element"]||{};var t=n["Web.DOM.Element"],e=n["Unsafe.Coerce"].unsafeCoerce;t.toNode=e}(f),function(n){"use strict";(f["Web.DOM.Node"]=f["Web.DOM.Node"]||{}).appendChild=function(n){return function(t){return function(){return t.appendChild(n)}}}}(),function(n){"use strict";n["Web.DOM.Node"]=n["Web.DOM.Node"]||{};var t=n["Web.DOM.Node"],e=n["Web.DOM.Node"];t.appendChild=e.appendChild}(f),function(n){"use strict";(f["Web.HTML"]=f["Web.HTML"]||{}).window=function(){return window}}(),function(n){"use strict";n["Web.HTML"]=n["Web.HTML"]||{};var t=n["Web.HTML"],e=n["Web.HTML"];t.window=e.window}(f),function(n){"use strict";(f["Web.HTML.HTMLDocument"]=f["Web.HTML.HTMLDocument"]||{})._body=function(n){return function(){return n.body}}}(),function(n){"use strict";n["Web.HTML.HTMLDocument"]=n["Web.HTML.HTMLDocument"]||{};var t,e=n["Web.HTML.HTMLDocument"],r=n["Web.HTML.HTMLDocument"],o=n["Data.Functor"],c=n["Data.Nullable"],i=n.Effect,u=n["Unsafe.Coerce"].unsafeCoerce,a=(t=o.map(i.functorEffect)(c.toMaybe),function(n){return t(r._body(n))});e.toDocument=u,e.body=a}(f),function(n){"use strict";n["Web.HTML.HTMLElement"]=n["Web.HTML.HTMLElement"]||{};var t=n["Web.HTML.HTMLElement"],e=n["Unsafe.Coerce"].unsafeCoerce;t.toNode=e}(f),function(n){"use strict";(f["Web.HTML.Window"]=f["Web.HTML.Window"]||{}).document=function(n){return function(){return n.document}}}(),function(n){"use strict";n["Web.HTML.Window"]=n["Web.HTML.Window"]||{};var t=n["Web.HTML.Window"],e=n["Web.HTML.Window"];t.document=e.document}(f),function(n){"use strict";n.Main=n.Main||{};var t=n.Main,e=n.App,r=n["Control.Bind"],o=n["Control.Monad.Error.Class"],c=n["Data.Functor"],i=n["Data.Maybe"],u=n.Effect,a=n["Effect.Exception"],f=n["React.Basic"],s=n["React.Basic.DOM"],l=n["Web.DOM.Document"],p=n["Web.DOM.Element"],d=n["Web.DOM.Node"],E=n["Web.HTML"],b=n["Web.HTML.HTMLDocument"],m=n["Web.HTML.HTMLElement"],M=n["Web.HTML.Window"];t.main=function(){var n=r.bindFlipped(u.bindEffect)(M.document)(E.window)(),t=b.body(n)();if(t instanceof i.Nothing)return o.throwError(o.monadThrowEffect)(a.error("Unable to find document body."))();if(t instanceof i.Just){var D=l.createElement("div")(b.toDocument(n))();c.void(u.functorEffect)(d.appendChild(p.toNode(D))(m.toNode(t.value0)))();var v=e.mkApp();return s.render(f.element(v)({}))(D)()}throw new Error("Failed pattern match at Main (line 23, column 3 - line 30, column 35): "+[t.constructor.name])}}(f),module.exports=f.Main;
},{"react":"n8MK","react-dom":"NKHc"}]},{},[], null)
//# sourceMappingURL=/Main-bundled.d7a73974.js.map