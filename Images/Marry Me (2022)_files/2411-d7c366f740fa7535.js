"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2411],{52411:function(e,n,t){t.d(n,{Z:function(){return Qe}});var r=t(52322),o=t(2784),a=t(3411),i=t(15907),c=t(45103),u=t(27018),l=t(91842),s=t(21849),f=t(96957),d=t(53744),p=t(11998),g="dialog-click-content-test-id",v=function(e){var n=e.content,t=e.href,o=e.contentClassName,a=e.onClick,i=e.showArrowIcon,u=e.iconClassName,l=e.target;return(0,r.jsxs)("a",{target:l,href:t,className:o,"data-testid":g,onClick:a,onKeyDown:function(e){(0,p.isEnterOrSpaceKey)(e)},children:[n,i&&(0,r.jsx)(c.Icon,{name:"arrow",className:u})]})},h=t(84161),b=t(94776),m=t.n(b);function y(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(l){return void t(l)}c.done?n(u):Promise.resolve(u).then(r,o)}function w(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){y(a,r,o,i,c,"next",e)}function c(e){y(a,r,o,i,c,"throw",e)}i(void 0)}))}}var x="/preferences/general/",S={headers:{"content-type":"application/x-www-form-urlencoded"},body:"ttco=&ttla=&nmec=5&49e6c=",method:"POST"};function _(){return(_=w(m().mark((function e(n){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=S).body+=n,e.next=4,fetch(x,t);case 4:window.location.reload();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=t(82508),O=t(42031),P=t.n(O);function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function N(){var e=j(["\n    z-index: 10;\n    bottom: 5.75rem;\n    right: 2.25rem;\n    position: fixed;\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.25rem;\n    max-width: 17.5rem;\n    padding: 1.5rem, 1.5rem, 1rem, 1.5rem;\n    margin: 0rem;\n    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),\n        0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\n\n    ."," {\n        display: block;\n        text-decoration: none;\n        line-height: 1.25rem;\n        margin-top: 1rem;\n        ","\n    }\n    "," {\n        bottom: 4.25rem;\n        right: 0.75rem;\n    }\n"]);return N=function(){return e},e}function T(){var e=j(["\n    z-index: 10;\n    bottom: 2.25rem;\n    right: 2.25rem;\n    position: fixed;\n    background: ",";\n    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),\n        0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\n\n    "," {\n        bottom: 0.75rem;\n        right: 0.75rem;\n    }\n\n    svg {\n        color: ",";\n    }\n"]);return T=function(){return e},e}var A="localization-button",I="floating-button-dialog-content",R="floating-button-dialog-link",E="floating-button-icon-arrow",B="floating-button-dialog",D="test-icon-clear",k="test-icon-globe",L="initial_rendering",M="not_initial_rendering",z="localization_welcome_message_key",F="?ref_=loc_dlg_hlp",U=new Map([["fr-CA","https://help.imdb.com/article/issues/GM7RXFVEA64VLJFV".concat(F)],["de-DE","https://help.imdb.com/article/issues/G65Q25A2AJ27GDTB".concat(F)],["fr-FR","https://help.imdb.com/article/issues/GM7RXFVEA64VLJFV".concat(F)],["hi-IN","https://help.imdb.com/article/issues/GBZBEKQ4WKTFBM3F".concat(F)],["it-IT","https://help.imdb.com/article/issues/GW4YAHSKS5E55MHA".concat(F)],["pt-BR","https://help.imdb.com/article/issues/G74QL3HJXZR344BV".concat(F)],["es-ES","https://help.imdb.com/article/issues/G9B8AX4BP5TZUQZ9".concat(F)],["es-MX","https://help.imdb.com/article/issues/G9B8AX4BP5TZUQZ9".concat(F)],["en-US","https://help.imdb.com/article/issues/G6TCMBKAAR5G95EN".concat(F)],["en-GB","https://help.imdb.com/article/issues/G6TCMBKAAR5G95EN".concat(F)]]),G=new Map([["fr-CA","FR-CA"],["de-DE","DE"],["fr-FR","FR"],["hi-IN","HI"],["it-IT","IT"],["pt-BR","PT-BR"],["es-ES","ES-ES"],["es-MX","ES"],["en-US","EN"]]),K=function(){var e,n,t,a,i,l,p,b,m,y,w,x,S,O=(0,o.useState)(!1),j=O[0],N=O[1],T=(0,o.useState)(!1),F=T[0],K=T[1],q={welcomeDialog:(0,s.N)({id:"floatingButton_localization_welcomeDialog",defaultMessage:"Welcome to the IMDb Language Beta. You will see more of the                 site in your detected language of preference."}),mobileLanguagePreferenceSetDialog:(0,s.N)({id:"floatingButton_localization_mobileLanguagePreferenceSetDialog",defaultMessage:"The current site language is controlled by your account                 settings. If you want a different language, change your account                 settings or use the default language on your mobile device."}),desktopLanguagePreferenceSetDialog:(0,s.N)({id:"floatingButton_localization_desktopLanguagePreferenceSetDialog",defaultMessage:"The current site language is controlled by your account                 settings. If you want a different language, change your                 account settings or use your browser language."}),mobileLanguagePreferenceNotSetDialog:(0,s.N)({id:"floatingButton_localization_mobileLanguagePreferenceNotSetDialog",defaultMessage:"The current site language is controlled by your mobile device                 settings. If you want a different language, change the default                 language in your device preferences."}),desktopLanguagePreferenceNotSetDialog:(0,s.N)({id:"floatingButton_localization_desktopLanguagePreferenceNotSetDialog",defaultMessage:"The current site language is controlled by your browser settings.                 If you want a different language, change the default language                 in your browser preferences."}),useBrowserLanguagePreference:(0,s.N)({id:"floatingButton_localization_useBrowserLanguage",defaultMessage:"Use browser language"}),learnMore:(0,s.N)({id:"common_learnMore",defaultMessage:"Learn more"}),giveFeedback:(0,s.N)({id:"common_giveFeedback",defaultMessage:"Give feedback"}),help:(0,s.N)({id:"common_help",defaultMessage:"Help"}),label:(0,s.N)({id:"localization_language_beta",defaultMessage:"Language Beta"})},Z=function(){K(!1);var e=(0,d.ID)(z);e===L?(0,d._2)(z,M):e===M&&N(!1)},W=(0,f.B)().context,X={type:null===W||void 0===W?void 0:W.pageType,subType:null===W||void 0===W?void 0:W.subPageType},Q=null===W||void 0===W||null===(e=W.sidecar)||void 0===e||null===(n=e.localizationResponse)||void 0===n?void 0:n.isFullLocalizationEnabled,J=null===W||void 0===W||null===(t=W.sidecar)||void 0===t||null===(a=t.localizationResponse)||void 0===a?void 0:a.languageForTranslations,Y=J&&G.get(J),$=null===W||void 0===W||null===(i=W.sidecar)||void 0===i||null===(l=i.localizationResponse)||void 0===l?void 0:l.geolocationCountryCode,ee=null===W||void 0===W?void 0:W.requestId,ne="https://imdb.co1.qualtrics.com/jfe/form/SV_0MxCkVEXerAlWJg?Q_Language=".concat(Y,"&Q_Country=").concat($,"&Q_RequestId=").concat(ee),te=(0,C.s)(),re=P()(te||""),oe=re.substring(re.length-4,re.length),ae=(0,h.useBreakpointsAsConfig)(),ie=ae.xs||ae.s,ce=!!(null===(p=W.sidecar)||void 0===p||null===(b=p.localizationResponse)||void 0===b?void 0:b.preferredLanguage),ue=null===(m=W.sidecar)||void 0===m||null===(y=m.localizationResponse)||void 0===y?void 0:y.isLanguageSelectorEnabled,le=null===(w=W.sidecar)||void 0===w||null===(x=w.localizationResponse)||void 0===x?void 0:x.languageForTranslations,se=!F&&ce,fe="en-US"!==le&&"en-GB"!==le,de="";return de=F?q.welcomeDialog:ce?ie?q.mobileLanguagePreferenceSetDialog:q.desktopLanguagePreferenceSetDialog:ie?q.mobileLanguagePreferenceNotSetDialog:q.desktopLanguagePreferenceNotSetDialog,(0,o.useEffect)((function(){(0,d.ID)(z)||(N(!0),K(!0),(0,d._2)(z,L))}),[j,Q,fe]),Q&&fe&&!ue?(0,r.jsxs)(c.SetPalette,{palette:"dark",children:[(0,r.jsx)(V,{name:j?"clear":"globe",className:j?D:k,label:q.label,onClick:function(){return e=!j,Z(),N(e),void(0,u.ar)(X,"localization-open",u.qB.POP_UP);var e},"data-testid":A}),j&&(0,r.jsxs)(H,{className:B,borderType:"line",children:[(0,r.jsx)("div",{className:I,children:(0,r.jsx)("p",{children:de})}),(0,r.jsxs)("div",{children:[F&&(0,r.jsx)(v,{content:q.learnMore,href:"#",contentClassName:R,onClick:function(){Z(),N(!0),(0,u.ar)(X,"localization-learnMore",u.qB.POP_UP)},showArrowIcon:!0,iconClassName:E}),se&&(0,r.jsx)("a",{href:"#",className:R,"data-testid":g,onClick:function(){!function(e){_.apply(this,arguments)}(oe),(0,u.ar)(X,"localization-cleanContentPreferences",u.qB.POP_UP)},children:q.useBrowserLanguagePreference}),!F&&(0,r.jsx)(v,{content:q.giveFeedback,href:ne,contentClassName:R,target:"_blank"}),!F&&(0,r.jsx)(v,{content:q.help,href:null!==(S=U.get(J||"en-US"))&&void 0!==S?S:"#",contentClassName:R,target:"_blank"})]})]})]}):null},H=(0,a.default)(c.ListCard).withConfig({componentId:"sc-c3f5e79-0"})(N(),R,(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-accent2-color"),l.mediaQueries.breakpoints.below.s),V=(0,a.default)(c.IconButton).withConfig({componentId:"sc-c3f5e79-1"})(T(),(0,l.getColorVarValue)("ipt-base-shade2-color"),l.mediaQueries.breakpoints.below.s,(0,l.getColorVarValue)("ipt-baseAlt-color")),q=t(39509),Z=t(6462),W=t.n(Z),X=t(18520),Q=t(2388),J=t(60507),Y=t(17907),$=t(63034),ee=t(5632),ne=t(14942),te=t(77975),re=t(75879),oe=t(57541),ae=t(25436),ie=t(62722);function ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ue(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(l){return void t(l)}c.done?n(u):Promise.resolve(u).then(r,o)}function le(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){ue(a,r,o,i,c,"next",e)}function c(e){ue(a,r,o,i,c,"throw",e)}i(void 0)}))}}function se(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return ce(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ce(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var fe=(0,oe.hu)()("BranchSDK"),de=function(e){return e.split("?")[0]},pe=function(){var e=function(e,n){u.current.increment(e,n)},n=function(n,t,r,o){fe.error("BranchSDK.Error: ".concat(t),{api:r,sessionId:s,os:o}),e(n,1)},r=function(){(0,ie.c)(u.current.serialize())},a=se(o.useState(!1),2),i=a[0],c=a[1],u=o.useRef(new oe.jd({requestContext:(0,f.B)().context})),l=(0,ee.useRouter)(),s=(0,C.s)()||(0,ne.D)("session-id"),d=(0,Q.h)({weblabID:X.lh.IMDB_NEXT_BRANCH_INTEGRATION_364587,treatments:{T1:!0}}),p=(0,Q.h)({weblabID:X.lh.IMDB_WEB_BRANCH_INTEGRATION_380339,treatments:{T1:!0}}),g=d||p,v=(0,Q.h)({weblabID:X.lh.IMDB_BRANCH_KEY_SELECTION_373673,treatments:{T1:!0}}),h=function(){return v?"key_test_cfPgRCLWYX6A5vlwE5L7tbjhsDlmDiPq":"key_live_jdSfREMXW6WE9FcCt5HWFbhgswmprlIn"};return o.useEffect((function(){var o=(0,$.U)(),a=function(){if(!(0,J.Ey)())return"unknown";var e=window.navigator.userAgent;return/windows phone|IEMobile/i.test(e)?"Windows":/Android/i.test(e)?"Android":/iPad|iPhone|iPod/i.test(e)?"iOS":"unknown"}();function u(){return u=le(m().mark((function o(){var i,u;return m().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return i=h(),o.next=3,t.e(4067).then(t.t.bind(t,74067,23));case 3:u=o.sent.default,e(ae.NextClientMetrics.BRANCH_SDK_REQUESTS,1),(0,re.jL)(te.yS.LOAD_BRANCH_SDK),u.init(i,{timeout:2e3},function(){var t=le(m().mark((function t(o){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,re.ex)(te.yS.LOAD_BRANCH_SDK),(0,re.XK)(te.yS.LOAD_BRANCH_SDK),!o){t.next=7;break}return o.includes("Request blocked by client")?n(ae.NextClientMetrics.BRANCH_SDK_BLOCKED_BY_CLIENT,o,"branch.init",a):n(ae.NextClientMetrics.BRANCH_SDK_ERROR,o,"branch.init",a),c(!0),r(),t.abrupt("return");case 7:e(ae.NextClientMetrics.BRANCH_SDK_INITIALIZED,1),u.setBranchViewData({data:{$deeplink_path:de(l.asPath)}}),(null===s||void 0===s?void 0:s.length)&&u.setIdentity(s,(function(t){t?n(ae.NextClientMetrics.BRANCH_SDK_SET_IDENTITY_ERROR,t,"branch.setIdentity",a):e(ae.NextClientMetrics.BRANCH_SDK_SET_IDENTITY_SUCCESS,1),r(),c(!0)})),c(!0);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:case"end":return o.stop()}}),o)}))),u.apply(this,arguments)}window.branch||g&&(0,J.Ey)()&&(0,Y.R)(window.location.hostname)&&!o&&!i&&function(){u.apply(this,arguments)}()}),[]),{metricDataRef:u}},ge=function(){var e,n=(0,f.B)().context.sidecar;return pe(),(0,r.jsx)(W(),{ResponsiveFooterModel:{locale:null===n||void 0===n||null===(e=n.localizationResponse)||void 0===e?void 0:e.languageForTranslations}})},ve=t(19833),he=t.n(ve),be=t(26667),me=t(46784),ye=t.n(me),we=t(86990),xe=t(30382),Se=t.n(xe),_e=t(15874);function Ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Oe(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Ce(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ce(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pe(){var e,n,t=(e=["\n    mutation UpdatePreferredLanguage($locale: String!) {\n        updatePreferredLanguage(input: { preferredLanguage: $locale }) {\n            preferredLanguage\n        }\n    }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return Pe=function(){return t},t}var je=Se()(Pe()),Ne=t(97432),Te=t(78432),Ae=t(25762);function Ie(e,n,t){var r="lang-change-".concat(n,"-").concat(e),o=(0,we.qO)()?"lc-main":"lc-tacbus",a=new Date;a.setFullYear(a.getFullYear()+25),(0,ne.d)(o,e.replace("-","_"),a,"shared"),(0,Te.ar)(t,r,Te.qB.ACTION_ONLY),window.location.reload()}var Re=function(){var e,n,t,r=(0,Ne.n)(),a=function(){var e=Oe((0,_e.Z)(je),2),n=e[0],t=e[1];return{updatePreferredLanguageAction:function(e){return t({locale:e})},updatePreferredLanguageResult:n}}(),i=a.updatePreferredLanguageResult,c=a.updatePreferredLanguageAction,u=(0,o.useState)(null),l=u[0],s=u[1],d=(0,o.useState)(null),p=d[0],g=d[1],v=(0,o.useRef)(!1),h=function(e,n){var t=(0,Ae.hu)()("useUpdateUserContentPreferences"),r="Failed to update user's preferred language to ".concat(l).concat(n?" and retrying the request":" on retry");t.error(r,e.message,e.stack),g(e)},b=(0,f.B)().context,m=null!==(t=null===(e=b.sidecar)||void 0===e||null===(n=e.localizationResponse)||void 0===n?void 0:n.languageForTranslations)&&void 0!==t?t:"en-US",y={type:null===b||void 0===b?void 0:b.pageType,subType:null===b||void 0===b?void 0:b.subPageType};(0,o.useEffect)((function(){if((null===i||void 0===i?void 0:i.data)||(null===i||void 0===i?void 0:i.error))try{var e,n;!function(e,n){var t,r,o=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.updatePreferredLanguage)||void 0===r?void 0:r.preferredLanguage;if(o!==n)throw new Error("Returned mutation value ".concat(o," differs from user defined preferred ")+"language of ".concat(n," or had an error: ").concat(null===e||void 0===e?void 0:e.error))}(i,l),Ie(null===i||void 0===i||null===(e=i.data)||void 0===e||null===(n=e.updatePreferredLanguage)||void 0===n?void 0:n.preferredLanguage,m,y)}catch(t){h(t,!v.current),v.current||(v.current=!0,c(l))}}),[i]);var w=(0,o.useMemo)((function(){return function(e){try{s(e),r?c(e):Ie(e,m,y)}catch(n){h(n,!v.current),v.current||(v.current=!0,c(l))}}}),[r,m,l]);return[(0,o.useMemo)((function(){return{value:i,error:p}}),[i,p]),w]};function Ee(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Be(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Ee(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ee(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var De=function(){var e,n,t,a,i=(0,f.B)().context.sidecar,c=Be(Re(),2)[1],u=o.useMemo((function(){return function(e){return void 0===e?[]:Object.keys(e).map((function(n){var t,r=e[n],o=null!==(t=Object.keys(r).find((function(t){return!!e[n][t]})))&&void 0!==t?t:"C";return"".concat(n,":").concat(o)}))}(null===i||void 0===i?void 0:i.weblabs)}),[null===i||void 0===i?void 0:i.weblabs]),l=o.useContext(ye());return(0,r.jsx)(ke,{isLoggedIn:null===i||void 0===i||null===(e=i.account)||void 0===e?void 0:e.isLoggedIn,username:null===i||void 0===i||null===(n=i.account)||void 0===n?void 0:n.userName,watchlistCount:l.state.watchlistCount,locale:null===i||void 0===i||null===(t=i.localizationResponse)||void 0===t?void 0:t.languageForTranslations,weblabs:u,service:be.ServiceName.Next,showLanguageSelector:!!(null===i||void 0===i||null===(a=i.localizationResponse)||void 0===a?void 0:a.isLanguageSelectorEnabled),onLanguageSelectorChange:c})},ke=o.memo(he()),Le=t(75051),Me=t(88494),ze=t(3227);function Fe(){var e,n,t=(e=["\n    *, *::before, *::after {\n        box-sizing: border-box;\n    }\n\n    html {\n        background: rgb(0, 0, 0);\n        background: var(--ipt-baseAlt-bg);\n    }\n\n    ","\n\n\n    /* Client-Side Navigation progress bar styles */\n    #nprogress {\n        pointer-events: none;\n        display: ",";\n\n        .bar {\n            ",";\n            position: fixed;\n            z-index: 99999;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 2px;\n        }\n\n        .peg {\n            display: block;\n            position: absolute;\n            right: 0px;\n            width: 100px;\n            height: 100%;\n            box-shadow: \n                0 0 10px ",",\n                0 0 5px ",";\n            opacity: 1.0;\n            transform: rotate(3deg) translate(0px, -4px);\n        }\n    }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return Fe=function(){return t},t}var Ue=(0,a.createGlobalStyle)(Fe(),ze.ZP,(function(e){return e.hideNavigationProgressBar?"none":"initial"}),(0,l.setPropertyToColorVar)("background","ipt-accent1-bg"),(0,l.getColorVarValue)("ipt-accent1-bg"),(0,l.getColorVarValue)("ipt-accent1-bg"));function Ge(e,n){if(t=e,!(null!=(r=n)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](t):t instanceof r))throw new TypeError("Cannot call a class as a function");var t,r}function Ke(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function He(e){return(He=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ve(e,n){return!n||"object"!==Ze(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function qe(e,n){return(qe=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var Ze=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function We(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=He(e);if(n){var o=He(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Ve(this,t)}}function Xe(){var e,n,t=(e=["\n    position: relative;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return Xe=function(){return t},t}var Qe=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&qe(e,n)}(u,e);var n,t,o,a=We(u);function u(e){var n;return Ge(this,u),(n=a.call(this,e)).state={},n}return n=u,(t=[{key:"componentDidMount",value:function(){(0,re.ap)(te.xD.LOAD,te.yS.MOUNT_REACT_JS),(0,re.ap)(te.xD.FUNCTIONAL)}},{key:"render",value:function(){var e,n,t,o=!!(null===(e=this.context.context.sidecar)||void 0===e||null===(n=e.weblabs)||void 0===n||null===(t=n[X.lh.IMDB_TRUSTARC_GDPR_COOKIE_COMPLIANCE_274700])||void 0===t?void 0:t.T1);return(0,r.jsxs)(Me.Z,{name:"BaseLayout",parent:"Page",showErrorMessage:!0,children:[this.props.useDefaultPageMetadata&&(0,r.jsx)(q.Se,{}),o&&(0,r.jsx)(Le.GDPRBanner,{}),!this.props.hideNav&&(0,r.jsx)(De,{}),this.props.prePageWrapper,(0,r.jsxs)(c.PageWrapper,{baseColor:this.props.baseColor,children:[(0,r.jsx)(Ue,{hideNavigationProgressBar:!!this.props.hideNavigationProgressBar}),!this.props.hideAdWrap&&(0,r.jsx)(i.AdWrapBackground,{}),(0,r.jsx)(Je,{orientContent:this.props.orientContent,className:this.props.className,children:this.props.children}),(0,r.jsx)(K,{})]}),!this.props.hideFooter&&(0,r.jsx)(ge,{}),(0,r.jsx)(i.FreedoniaPreview,{}),(0,r.jsx)(i.AdFeedbackModal,{})]})}}])&&Ke(n.prototype,t),o&&Ke(n,o),u}(o.PureComponent);Qe.contextType=f.fH;var Je=(0,a.default)(c.PageContentContainer).withConfig({componentId:"sc-25f58b7a-0"}).withConfig({componentId:"sc-e4e9711-0"})(Xe())},57151:function(e,n,t){t.d(n,{F:function(){return i}});var r=t(52322),o=(t(2784),t(45103)),a=t(27659),i=function(e){var n=e.className;return(0,r.jsx)(o.EmptyStateSection,{className:n,children:(0,r.jsx)(a.q,{id:"error_network_message",defaultMessage:"We are unable to load this content at this time. Please refresh the page or try again later."})})}},88494:function(e,n,t){var r=t(52322),o=t(2784),a=t(73957),i=t.n(a),c=t(3411),u=t(57151),l=t(86990),s=t(25762),f=t(96957),d=t(62722),p=t(25436);function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,n){return!n||"object"!==y(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e,n){return m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},m(e,n)}var y=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=h(e);if(n){var o=h(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return b(this,t)}}function x(){var e,n,t=(e=["\n    && {\n        margin-top: 25vh;\n    }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return x=function(){return t},t}n.Z=function(e){return(0,f.B)().context.isSsrPrepass?(0,r.jsx)(r.Fragment,{children:e.children}):(0,r.jsx)(S,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}({},e))};var S=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(c,e);var n,t,o,a=w(c);function c(e,n){var t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),t=a.call(this,e);var r=e.parent,o=e.name,i=n.context;return t.logName=["Catch",r,o].filter(Boolean).join("::"),t.LOG=(0,s.hu)(i)(t.logName),t.state={error:void 0},t}return n=c,o=[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}],(t=[{key:"componentDidCatch",value:function(e,n){this.LOG.error({error:e.toString()},n),i()||(0,d.c)({metricName:p.NextClientMetrics.CATCH_COMPONENT_ERROR,unit:p.Unit.COUNT,value:1,pageType:this.context.context.pageType,subPageType:this.context.context.subPageType,time:(new Date).getTime(),dimensions:[{name:this.logName}]})}},{key:"render",value:function(){var e=this.props,n=e.showErrorMessage,t=e.children,o=this.state.error;return o&&!n?null:(0,r.jsxs)(r.Fragment,{children:[o&&n&&(0,r.jsx)(_,{}),o&&n&&(0,l.r4)()&&(0,r.jsxs)("pre",{style:{color:"#FF5555",fontSize:20,overflow:"auto"},children:["Render Failed: ",o.message," ",o.stack]}),!o&&t]})}}])&&g(n.prototype,t),o&&g(n,o),c}(o.Component);S.contextType=f.fH;var _=(0,c.default)(u.F).withConfig({componentId:"sc-ee9de5fd-0"})(x())},27659:function(e,n,t){t.d(n,{q:function(){return i}});var r=t(52322),o=(t(2784),t(94009));function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=function(e){return(0,r.jsx)(o.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},e))}},14942:function(e,n,t){t.d(n,{D:function(){return o},d:function(){return a}});var r=t(60507);function o(e){var n,t=function(e){var n;if(!(0,r.Ey)())return n;var t="".concat(e,"=");return decodeURIComponent(document.cookie).split(";").forEach((function(e){e.indexOf(t)>=0&&(n=e.split(t)[1])})),n}(e);if(t)try{n=JSON.parse(t)}catch(o){n=t}return n}function a(e,n,t,o){if((0,r.Ey)()){var a,i=t.toUTCString();return a="object"===typeof n?JSON.stringify(n):n,function(e,n,t,r){var o="";switch(!0){case"shared"===r:o="domain=.imdb.com;";break;case"unique"===r:o="";break;case"string"===typeof r:o="domain=".concat(r,";")||0}try{return document.cookie="".concat(e,"=").concat(n,";expires=").concat(t,";path=/;").concat(o)}catch(a){return}}(e,encodeURIComponent(a),i,o)}}},15874:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(26806),o=t(95347),a=t(96957);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){var t,i=null===(t=null===n||void 0===n?void 0:n.requireAuth)||void 0===t||t,u=(0,a.B)().context,l=u.pageType,s=u.subPageType,f=u.sidecar,d=c((0,r.Db)(e),2),p=d[0],g=d[1];return[p,function(e){return i&&!1===(null===f||void 0===f?void 0:f.account.isLoggedIn)?((0,o.r)(),Promise.resolve(void 0)):g(e,{pageType:l,subPageType:s})}]}},82508:function(e,n,t){t.d(n,{s:function(){return o}});var r=t(96957),o=function(){var e,n,t;return null===(e=(0,r.B)())||void 0===e||null===(n=e.context)||void 0===n||null===(t=n.sidecar)||void 0===t?void 0:t.sessionId}},53744:function(e,n,t){t.d(n,{dZ:function(){return o},_2:function(){return a},ID:function(){return i}});var r=t(60507);function o(e){if(r.jU)try{window.localStorage.removeItem(e)}catch(n){console.warn("localStorage is not enabled on this device",n)}}function a(e,n){!function(e,n){if(r.jU)try{window.localStorage.setItem(e,n)}catch(t){console.warn("localStorage is not enabled on this device",t)}}(e,JSON.stringify(n))}function i(e){var n=function(e){if(!r.jU)return null;try{return window.localStorage.getItem(e)}catch(n){return console.warn("localStorage is not enabled on this device",n),null}}(e);return null===n?null:JSON.parse(n)}},95347:function(e,n,t){t.d(n,{r:function(){return c},O:function(){return u}});var r=t(60507),o=t(5632);var a=function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=n};function i(e){var n=new a(e);if(r.UG)throw n;!function(e){e.config.replace?o.default.replace(e.config.to):window.location.assign(e.config.to)}(n)}var c=function(e){i({to:"/registration/signin?"+"u=".concat(encodeURIComponent(window.location.pathname))+"".concat(e?"&ref_=".concat(e):""),permanent:!1})},u=function(e,n,t,r){var o=r||{},a=o.type,c=o.subType;i({to:"/taskcompletion/issue/rateTitle?"+"titleId=".concat(n,"&value=").concat(e)+"&u=".concat(encodeURIComponent(window.location.pathname))+"".concat(t?"&refTag=tmp_".concat(t):"")+"".concat(a?"&pageType=".concat(a):"")+"".concat(c?"&subPageType=".concat(c):"")})}},17907:function(e,n,t){t.d(n,{R:function(){return r}});var r=function(e){return"mobile"===function(e){return e&&/m\.(([a-zA-Z]+\.)+)?imdb\.com/.test(e)?"mobile":"web"}(e)}},2388:function(e,n,t){t.d(n,{h:function(){return o}});var r=t(96957),o=function(e){var n,t=e.weblabID,o=e.treatments,a=null===(n=(0,r.B)().context.sidecar)||void 0===n?void 0:n.weblabs;if(void 0===(null===a||void 0===a?void 0:a[t]))return!1;return Object.keys(o).some((function(e){var n;return!!(null===(n=a[t])||void 0===n?void 0:n[e])&&!!o[e]}))}}}]);