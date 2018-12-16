(function(window){var svgSprite='<svg><symbol id="icon-qizi" viewBox="0 0 1024 1024"><path d="M900.4 187l-370.6 52.8V690l-6.4 0.8c-6.3 1.2-11.6 2.9-16.2 5v-1.3h-19.1l-0.2 29.5h0.2c0 1.1 0 2.1 0.1 3.2 2.3 13.3 15.3 25.7 46.4 22.3 0 0 48.3-6.5 60.6-8.7 14.3-2.4 25.4-4.3 33-5.6l283.1-40.3c18.9-2.7 32.9-18.8 32.9-37.9V224.9c-0.1-23.3-20.7-41.2-43.8-37.9z" fill="#D32F2F" ></path><path d="M944.1 444.4V657c0 19-14 35.2-32.9 37.9l-283.1 40.3c-7.5 1.3-18.6 3.2-33 5.6-12.4 2.1-60.6 8.7-60.6 8.7-31.1 3.4-44.2-8.9-46.4-22.3-0.1-1.1-0.1-2.1-0.1-3.2h-0.2l0.2-29.5h19.1v1.3c4.6-2.1 9.9-3.8 16.2-5l6.4-0.8V507.6l414.4-63.2z" fill="#1565C0" ></path><path d="M900.4 187l-370.6 52.8v154.5l414.3-59.1V224.9c0-23.3-20.6-41.2-43.7-37.9z" fill="#D32F2F" ></path><path d="M529.8 690v59.9c1.5-0.1 3.1-0.2 4.7-0.4 0 0 48.3-6.5 60.6-8.6 14.3-2.4 25.4-4.3 33-5.6L911.2 695c18.9-2.7 32.9-18.8 32.9-37.9V335.3l-414.3 59.1V690z" fill="#E2A803" ></path><path d="M944.1 335.3l-414.3 59.1v167.2L944.1 505v152z" fill="#E2A803" ></path><path d="M529.8 561.6V690l-6.4 0.8c-6.3 1.2-11.6 2.9-16.2 5v-1.3h-19.1l-0.2 29.5h0.2c0 1.1 0 2.1 0.1 3.2 2.1 12.7 14 24.4 41.7 22.6 1.5-0.1 3.1-0.2 4.7-0.4 0 0 48.3-6.5 60.6-8.6 14.3-2.4 25.4-4.3 33-5.6l283.1-40.3c18.9-2.7 32.9-18.8 32.9-37.9V505l-414.4 56.6z" fill="#1565C0" ></path><path d="M630.3 225.5l-100.5 14.4v154.5l47.9-6.8z" fill="#D32F2F" ></path><path d="M943.9 335.3V224.9c0-23.3-20.6-41.2-43.7-37.9l-270.1 38.5 102.7 139.9 211.1-30.1z" fill="#D32F2F" ></path><path d="M845.2 518.5l98.7-13.5V335.3l-211 30.1z" fill="#FFB300" ></path><path d="M529.8 394.4v140.7l47.9-147.5z" fill="#E2A803" ></path><path d="M494.9 740.3l-4.3-5.9c1 2.1 2.5 4.1 4.3 5.9z" fill="#1565C0" ></path><path d="M943.9 653.1V505l-98.7 13.5z" fill="#1976D2" ></path><path d="M630.4 225.5h-0.1 0.1z" fill="#9E9E9E" ></path><path d="M733 365.4L630.4 225.5h-0.1l-52.6 162.1z" fill="#C62828" ></path><path d="M845.4 518.5L733.1 365.4l-155.3 22.2-47.9 147.5v26.5z" fill="#FFA000" ></path><path d="M529.7 750.2c1.5-0.1 3.1-0.2 4.7-0.4 0 0 48.3-6.6 60.6-8.8 14.3-2.5 25.4-4.4 33-5.7l283.1-41c18.9-2.7 32.9-19.1 32.9-38.5v1.2-4l-98.7-134.5L530 561.6v127.7l-6.5 0.8c-6.4 1.2-11.8 2.9-16.5 5v-1.3h-19l-0.2 30h0.2c0 1.1 0 2.1 0.1 3.3 0.4 2.5 1.2 5 2.4 7.3l4.3 6c6.3 6.6 17.4 10.9 34.9 9.8z" fill="#1565C0" ></path><path d="M630.9 576.5V141.3c0-0.8 0.1-1.6 0-2.4-2.7-18.1-17.1-28-43.8-26l-7.9 1.1h-0.4l-89.9 12.5v0.1l-278 39v517l356-50v34.8l64-8.3v-82.6z" fill="#F44336" ></path><path d="M630.9 614.9V300.4c0-0.8 0.1-1.6 0-2.4-2.7-18.1-17-28.1-43.5-26.1l-7.8 1.1h0.5-0.3l-89.9 12.5v0.1l-278 39V615h419z" fill="#FFCA28" ></path><path d="M630.9 479.9c-2.7-18.1-17.1-28-43.8-26l-7.9 1.1h-0.4l-89.9 12.5v0.1l-278 39v176l356-50v33.9l64-8.3V482.3c0-0.8 0.1-1.6 0-2.4z" fill="#2196F3" ></path><path d="M591.2 689.4s-48.3 6.2-60.8 7.4c-29.1 2.7-42.4 17.9-42.4 17.9l0.8-71.2 97.9-13.6c26.5-2 40.8 8 43.5 26 1.3 13.4-8 28.7-39 33.5z" fill="#0D47A1" ></path><path d="M180.8 82.7h57.4v880.4h-57.4z" fill="#CFD8DC" ></path><path d="M310.3 991.8H108.6c-15.9 0-28.7-12.9-28.7-28.7s12.9-28.7 28.7-28.7h201.7c15.9 0 28.7 12.9 28.7 28.7s-12.8 28.7-28.7 28.7z" fill="#CFD8DC" ></path><path d="M209.9 99.9m-67 0a67 67 0 1 0 134 0 67 67 0 1 0-134 0Z" fill="#546E7A" ></path></symbol><symbol id="icon-jiantoudingweixiangzuo" viewBox="0 0 1024 1024"><path d="M1024.1 139.8L793.4 447.5l-35.9-26.9L898 233.2 131.1 512.1 898 791 705.7 534.5H471.9v-44.8h256.2l296 394.8L0.1 512.1z" fill="#303030" ></path></symbol><symbol id="icon-jiangbei-" viewBox="0 0 1024 1024"><path d="M512 512m-469.333333 0a469.333333 469.333333 0 1 0 938.666666 0 469.333333 469.333333 0 1 0-938.666666 0Z" fill="#FDF5D9" ></path><path d="M314.197333 640L469.333333 795.136 283.136 981.333333l-38.826667-116.309333L128 826.197333zM709.802667 640L896 826.197333l-116.309333 38.826667-38.826667 116.309333L554.666667 795.136z" fill="#D19A0E" ></path><path d="M554.666667 109.952l284.16 164.053333a85.333333 85.333333 0 0 1 42.666666 73.898667v328.149333c0 30.506667-16.256 58.666667-42.666666 73.898667L554.666667 914.048a85.376 85.376 0 0 1-85.333334 0l-284.16-164.053333a85.333333 85.333333 0 0 1-42.666666-73.898667V347.946667c0-30.506667 16.256-58.666667 42.666666-73.898667L469.333333 109.952a85.376 85.376 0 0 1 85.333334 0z" fill="#F5CF41" ></path><path d="M567.338667 458.624l-0.64-0.810667 133.290666-233.514666-83.370666-52.906667L512 426.709333 406.186667 168.533333 323.882667 224.085333l133.418666 233.728-0.64 0.810667-292.906666-87.936-0.768 103.424 277.546666 45.354667 0.597334 2.602666-264.234667 186.965334 81.365333 67.242666 222.378667-205.354666L459.562667 896h104.832l-21.12-325.034667 220.416 203.52 83.370666-65.408-264.234666-186.965333 0.597333-2.602667 276.181333-45.141333-3.498666-102.4-288.768 86.656z" fill="#FEDB58" ></path><path d="M469.333333 341.333333h85.333334v341.333334h-85.333334z" fill="#FFFFFF" ></path><path d="M533.333333 146.901333a42.581333 42.581333 0 0 0-42.666666 0L206.506667 310.997333c-13.184 7.637333-21.333333 21.717333-21.333334 36.949334v328.149333c0 15.232 8.149333 29.312 21.333334 36.949333l284.16 164.053334a42.581333 42.581333 0 0 0 42.666666 0l284.16-164.053334c13.184-7.637333 21.333333-21.717333 21.333334-36.949333V347.946667c0-15.232-8.149333-29.312-21.333334-36.949334L533.333333 146.901333z m21.333334-36.949333l284.16 164.053333a85.333333 85.333333 0 0 1 42.666666 73.898667v328.149333c0 30.506667-16.256 58.666667-42.666666 73.898667L554.666667 914.048a85.376 85.376 0 0 1-85.333334 0l-284.16-164.053333a85.333333 85.333333 0 0 1-42.666666-73.898667V347.946667c0-30.506667 16.256-58.666667 42.666666-73.898667L469.333333 109.952a85.376 85.376 0 0 1 85.333334 0z" fill="#E3A815" ></path></symbol><symbol id="icon-jiangbei-1" viewBox="0 0 1024 1024"><path d="M512 512m-469.333333 0a469.333333 469.333333 0 1 0 938.666666 0 469.333333 469.333333 0 1 0-938.666666 0Z" fill="#F6F6F6" ></path><path d="M314.197333 640L469.333333 795.136 283.136 981.333333l-38.826667-116.309333L128 826.197333zM709.802667 640L896 826.197333l-116.309333 38.826667-38.826667 116.309333L554.666667 795.136z" fill="#9C9C9C" ></path><path d="M554.666667 109.952l284.16 164.053333a85.333333 85.333333 0 0 1 42.666666 73.898667v328.149333c0 30.506667-16.256 58.666667-42.666666 73.898667L554.666667 914.048a85.376 85.376 0 0 1-85.333334 0l-284.16-164.053333a85.333333 85.333333 0 0 1-42.666666-73.898667V347.946667c0-30.506667 16.256-58.666667 42.666666-73.898667L469.333333 109.952a85.376 85.376 0 0 1 85.333334 0z" fill="#D3D3D3" ></path><path d="M567.338667 458.624l-0.64-0.810667 133.290666-233.514666-83.370666-52.906667L512 426.709333 406.186667 168.533333 323.882667 224.085333l133.418666 233.728-0.64 0.810667-292.906666-87.936-0.768 103.424 277.546666 45.354667 0.597334 2.602666-264.234667 186.965334 81.365333 67.242666 222.378667-205.354666L459.562667 896h104.832l-21.12-325.034667 220.416 203.52 83.370666-65.408-264.234666-186.965333 0.597333-2.602667 276.181333-45.141333-3.498666-102.4-288.768 86.656z" fill="#DDDDDD" ></path><path d="M554.666667 341.333333h85.333333v170.666667h-85.333333zM384 469.333333h85.333333v170.666667H384z" fill="#FFFFFF" ></path><path d="M640 341.333333v85.333334H384V341.333333zM640 597.333333v85.333334H384v-85.333334zM640 469.333333v85.333334H384v-85.333334z" fill="#FFFFFF" ></path><path d="M533.333333 146.901333a42.581333 42.581333 0 0 0-42.666666 0L206.506667 310.997333c-13.184 7.637333-21.333333 21.717333-21.333334 36.949334v328.149333c0 15.232 8.149333 29.312 21.333334 36.949333l284.16 164.053334a42.581333 42.581333 0 0 0 42.666666 0l284.16-164.053334c13.184-7.637333 21.333333-21.717333 21.333334-36.949333V347.946667c0-15.232-8.149333-29.312-21.333334-36.949334L533.333333 146.901333z m21.333334-36.949333l284.16 164.053333a85.333333 85.333333 0 0 1 42.666666 73.898667v328.149333c0 30.506667-16.256 58.666667-42.666666 73.898667L554.666667 914.048a85.376 85.376 0 0 1-85.333334 0l-284.16-164.053333a85.333333 85.333333 0 0 1-42.666666-73.898667V347.946667c0-30.506667 16.256-58.666667 42.666666-73.898667L469.333333 109.952a85.376 85.376 0 0 1 85.333334 0z" fill="#B8B8B8" ></path></symbol><symbol id="icon-jiangbei-2" viewBox="0 0 1024 1024"><path d="M512 512m-469.333333 0a469.333333 469.333333 0 1 0 938.666666 0 469.333333 469.333333 0 1 0-938.666666 0Z" fill="#F9EADB" ></path><path d="M314.197333 640L469.333333 795.136 283.136 981.333333l-38.826667-116.309333L128 826.197333zM709.802667 640L896 826.197333l-116.309333 38.826667-38.826667 116.309333L554.666667 795.136z" fill="#A0510E" ></path><path d="M554.666667 109.952l284.16 164.053333a85.333333 85.333333 0 0 1 42.666666 73.898667v328.149333c0 30.506667-16.256 58.666667-42.666666 73.898667L554.666667 914.048a85.376 85.376 0 0 1-85.333334 0l-284.16-164.053333a85.333333 85.333333 0 0 1-42.666666-73.898667V347.946667c0-30.506667 16.256-58.666667 42.666666-73.898667L469.333333 109.952a85.376 85.376 0 0 1 85.333334 0z" fill="#E19449" ></path><path d="M567.338667 458.624l-0.64-0.810667 133.290666-233.514666-83.370666-52.906667L512 426.709333 406.186667 168.533333 323.882667 224.085333l133.418666 233.728-0.64 0.810667-292.906666-87.936-0.768 103.424 277.546666 45.354667 0.597334 2.602666-264.234667 186.965334 81.365333 67.242666 222.378667-205.354666L459.562667 896h104.832l-21.12-325.034667 220.416 203.52 83.370666-65.408-264.234666-186.965333 0.597333-2.602667 276.181333-45.141333-3.498666-102.4-288.768 86.656z" fill="#ECA157" ></path><path d="M554.666667 341.333333h85.333333v341.333334h-85.333333z" fill="#FFFFFF" ></path><path d="M640 341.333333v85.333334H384V341.333333zM640 597.333333v85.333334H384v-85.333334zM640 469.333333v85.333334H384v-85.333334z" fill="#FFFFFF" ></path><path d="M533.333333 146.901333a42.581333 42.581333 0 0 0-42.666666 0L206.506667 310.997333c-13.184 7.637333-21.333333 21.717333-21.333334 36.949334v328.149333c0 15.232 8.149333 29.312 21.333334 36.949333l284.16 164.053334a42.581333 42.581333 0 0 0 42.666666 0l284.16-164.053334c13.184-7.637333 21.333333-21.717333 21.333334-36.949333V347.946667c0-15.232-8.149333-29.312-21.333334-36.949334L533.333333 146.901333z m21.333334-36.949333l284.16 164.053333a85.333333 85.333333 0 0 1 42.666666 73.898667v328.149333c0 30.506667-16.256 58.666667-42.666666 73.898667L554.666667 914.048a85.376 85.376 0 0 1-85.333334 0l-284.16-164.053333a85.333333 85.333333 0 0 1-42.666666-73.898667V347.946667c0-30.506667 16.256-58.666667 42.666666-73.898667L469.333333 109.952a85.376 85.376 0 0 1 85.333334 0z" fill="#C2681B" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)