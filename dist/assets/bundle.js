(()=>{"use strict";console.log("dom file");var e,n=document.querySelector("body"),m=[{name:"mario",premium:!0},{name:"luigi",premium:!1},{name:"yoshi",premium:!0},{name:"toad",premium:!0},{name:"peach",premium:!1}];n.style.background="peachpuff",(e=document.createElement("h1")).textContent="Testing Testing",n.appendChild(e);var t=function(e){return e.filter((function(e){return e.premium}))}(m);console.log(m,t),console.log("test")})();