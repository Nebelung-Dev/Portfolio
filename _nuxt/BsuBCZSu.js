const __vite__fileDeps=["./BUqTWP2n.js","./DyS-WwVj.js","./Dx-k8cU5.js","./nv9w8kjB.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as r}from"./Dx-k8cU5.js";async function e(a,o=!0){const{PolygonDrawer:t}=await r(()=>import("./BUqTWP2n.js"),__vite__mapDeps([0,1,2]),import.meta.url);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await r(()=>import("./nv9w8kjB.js"),__vite__mapDeps([3,1,2]),import.meta.url);await a.addShape("triangle",new t,o)}async function l(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,l as loadPolygonShape,i as loadTriangleShape};
