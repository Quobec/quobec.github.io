(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{9938:function(t,e,i){"use strict";var r=i(5696),n=i(7980);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(6495).Z,a=i(2648).Z,l=i(1598).Z,s=i(7273).Z,u=l(i(7294)),c=a(i(6505)),d=i(7675),f=i(5980),g=i(1059);i(2783);var h=a(i(1923)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(t){return void 0!==t.default}function v(t){return"number"==typeof t||void 0===t?t:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function y(t,e,i,r,n,a,l){t&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch(function(){}).then(function(){if(t.parentNode){if("blur"===i&&a(!0),null==r?void 0:r.current){var e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});var l=!1,s=!1;r.current(o({},e,{nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:function(){return l},isPropagationStopped:function(){return s},persist:function(){},preventDefault:function(){l=!0,e.preventDefault()},stopPropagation:function(){s=!0,e.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(t)}}))}var b=u.forwardRef(function(t,e){var i=t.imgAttributes,r=t.heightInt,n=t.widthInt,a=(t.qualityInt,t.className),l=t.imgStyle,c=t.blurStyle,d=t.isLazy,f=t.fill,g=t.placeholder,h=t.loading,m=t.srcString,p=(t.config,t.unoptimized),v=(t.loader,t.onLoadRef),b=t.onLoadingCompleteRef,w=t.setBlurComplete,S=t.setShowAltText,z=(t.onLoad,t.onError),C=s(t,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},C,i,{width:n,height:r,decoding:"async","data-nimg":f?"fill":"1",className:a,loading:h,style:o({},l,c),ref:u.useCallback(function(t){e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(z&&(t.src=t.src),t.complete&&y(t,m,g,v,b,w,p))},[m,g,v,b,w,z,p,e]),onLoad:function(t){y(t.currentTarget,m,g,v,b,w,p)},onError:function(t){S(!0),"blur"===g&&w(!0),z&&z(t)}})))}),w=u.forwardRef(function(t,e){var i,a,l,y=t.src,w=t.sizes,S=t.unoptimized,z=void 0!==S&&S,C=t.priority,E=void 0!==C&&C,j=t.loading,I=t.className,_=t.quality,R=t.width,x=t.height,A=t.fill,L=t.style,k=t.onLoad,O=t.onLoadingComplete,P=t.placeholder,N=void 0===P?"empty":P,q=t.blurDataURL,M=t.layout,B=t.objectFit,D=t.objectPosition,T=(t.lazyBoundary,t.lazyRoot,s(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),W=u.useContext(g.ImageConfigContext),F=u.useMemo(function(){var t=m||W||f.imageConfigDefault,e=[].concat(n(t.deviceSizes),n(t.imageSizes)).sort(function(t,e){return t-e}),i=t.deviceSizes.sort(function(t,e){return t-e});return o({},t,{allSizes:e,deviceSizes:i})},[W]),U=T,Z=U.loader||h.default;delete U.loader;var G="__next_img_default"in Z;if(G){if("custom"===F.loader)throw Error('Image with src "'.concat(y,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var H=Z;Z=function(t){return t.config,H(s(t,["config"]))}}if(M){"fill"===M&&(A=!0);var V={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];V&&(L=o({},L,V));var J={responsive:"100vw",fill:"100vw"}[M];J&&!w&&(w=J)}var $="",K=v(R),Q=v(x);if("object"==typeof(i=y)&&(p(i)||void 0!==i.src)){var X=p(y)?y.default:y;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(!X.height||!X.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)));if(a=X.blurWidth,l=X.blurHeight,q=q||X.blurDataURL,$=X.src,!A){if(K||Q){if(K&&!Q){var Y=K/X.width;Q=Math.round(X.height*Y)}else if(!K&&Q){var tt=Q/X.height;K=Math.round(X.width*tt)}}else K=X.width,Q=X.height}}var te=!E&&("lazy"===j||void 0===j);((y="string"==typeof y?y:$).startsWith("data:")||y.startsWith("blob:"))&&(z=!0,te=!1),F.unoptimized&&(z=!0),G&&y.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(z=!0);var ti=r(u.useState(!1),2),tr=ti[0],tn=ti[1],to=r(u.useState(!1),2),ta=to[0],tl=to[1],ts=v(_),tu=Object.assign(A?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:B,objectPosition:D}:{},ta?{}:{color:"transparent"},L),tc="blur"===N&&q&&!tr?{backgroundSize:tu.objectFit||"cover",backgroundPosition:tu.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:K,heightInt:Q,blurWidth:a,blurHeight:l,blurDataURL:q}),'")')}:{},td=function(t){var e=t.config,i=t.src,r=t.unoptimized,o=t.width,a=t.quality,l=t.sizes,s=t.loader;if(r)return{src:i,srcSet:void 0,sizes:void 0};var u=function(t,e,i){var r=t.deviceSizes,o=t.allSizes;if(i){for(var a,l=/(^|\s)(1?\d?\d)vw/g,s=[];a=l.exec(i);a)s.push(parseInt(a[2]));if(s.length){var u=.01*Math.min.apply(Math,s);return{widths:o.filter(function(t){return t>=r[0]*u}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof e?{widths:r,kind:"w"}:{widths:n(new Set([e,2*e].map(function(t){return o.find(function(e){return e>=t})||o[o.length-1]}))),kind:"x"}}(e,o,l),c=u.widths,d=u.kind,f=c.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:c.map(function(t,r){return"".concat(s({config:e,src:i,quality:a,width:t})," ").concat("w"===d?t:r+1).concat(d)}).join(", "),src:s({config:e,src:i,quality:a,width:c[f]})}}({config:F,src:y,unoptimized:z,width:K,quality:ts,sizes:w,loader:Z}),tf=y,tg={imageSrcSet:td.srcSet,imageSizes:td.sizes,crossOrigin:U.crossOrigin},th=u.useRef(k);u.useEffect(function(){th.current=k},[k]);var tm=u.useRef(O);u.useEffect(function(){tm.current=O},[O]);var tp=o({isLazy:te,imgAttributes:td,heightInt:Q,widthInt:K,qualityInt:ts,className:I,imgStyle:tu,blurStyle:tc,loading:j,config:F,fill:A,unoptimized:z,placeholder:N,loader:Z,srcString:tf,onLoadRef:th,onLoadingCompleteRef:tm,setBlurComplete:tn,setShowAltText:tl},U);return u.default.createElement(u.default.Fragment,null,u.default.createElement(b,Object.assign({},tp,{ref:e})),E?u.default.createElement(c.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+td.src+td.srcSet+td.sizes,rel:"preload",as:"image",href:td.srcSet?void 0:td.src},tg))):null)});e.default=w,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},7675:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageBlurSvg=function(t){var e=t.widthInt,i=t.heightInt,r=t.blurWidth,n=t.blurHeight,o=t.blurDataURL,a=r||e,l=n||i,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},1923:function(t,e){"use strict";function i(t){var e=t.config,i=t.src,r=t.width,n=t.quality;return"".concat(e.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.__next_img_default=!0,e.default=i},5675:function(t,e,i){t.exports=i(9938)},6687:function(t,e,i){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=Array(e);i<e;i++)r[i]=t[i];return r}function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if("Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(t,e)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.d(e,{Z:function(){return n}})}}]);