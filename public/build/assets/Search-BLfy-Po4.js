import{W as i,j as r}from"./app-DdQi-QVj.js";import{I as g}from"./IconSearch-B7hL6Nyi.js";function u({url:t,placeholder:s}){const{data:a,setData:o,get:n}=i({search:""}),c=e=>{e.preventDefault(),n(`${t}?search=${a.search}`)};return r.jsx("form",{onSubmit:c,children:r.jsxs("div",{className:"relative",children:[r.jsx("input",{type:"text",value:a.search,onChange:e=>o("search",e.target.value),className:"py-2 px-4 pr-11 block w-full rounded-lg text-sm border focus:outline-none focus:ring-0 focus:ring-gray-400 text-gray-700 bg-white border-gray-200 focus:border-gray-200 dark:focus:ring-gray-500 dark:focus:border-gray-800 dark:text-gray-200 dark:bg-gray-950 dark:border-gray-900",placeholder:s}),r.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pointer-events-none pr-4",children:r.jsx(g,{className:"text-gray-500 w-5 h-5"})})]})})}export{u as S};
