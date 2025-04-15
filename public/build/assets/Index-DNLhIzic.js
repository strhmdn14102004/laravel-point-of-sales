import{j as e,Y as t}from"./app-DdQi-QVj.js";import{c as i,I as d,a as l,A as n}from"./DashboardLayout-DVYg_uCQ.js";import{I as c}from"./IconCategory-BtBoM7PZ.js";import{I as x}from"./IconMoneybag-B7Wf2xs3.js";import"./transition-CNCxwH2y.js";import"./keyboard-BqRqYy2S.js";import"./index-DZtqulGZ.js";/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var m=i("outline","trending-up","IconTrendingUp",[["path",{d:"M3 17l6 -6l4 4l8 -8",key:"svg-0"}],["path",{d:"M14 7l7 0l0 7",key:"svg-1"}]]);function o(){const a=[{title:"Kategori",value:20,change:12,icon:e.jsx(c,{size:24,strokeWidth:1.5}),color:"bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"},{title:"Produk",value:30,change:5,icon:e.jsx(d,{size:24,strokeWidth:1.5}),color:"bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"},{title:"Transaksi",value:45,change:24,icon:e.jsx(x,{size:24,strokeWidth:1.5}),color:"bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"},{title:"Pengguna",value:2,change:1,icon:e.jsx(l,{size:24,strokeWidth:1.5}),color:"bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"}];return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Dashboard"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Selamat Datang!"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Ringkasan aktivitas sistem hari ini"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:a.map((s,r)=>e.jsx("div",{className:`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border-l-4 ${s.color.split(" ")[0]}`,children:e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:`p-3 rounded-lg ${s.color}`,children:s.icon}),e.jsxs("div",{className:"ml-4",children:[e.jsx("p",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:s.title}),e.jsx("p",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:s.value})]})]})}),e.jsx("div",{className:"mt-4 flex items-center",children:e.jsxs("span",{className:`text-sm font-medium ${s.change>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"}`,children:[e.jsx(m,{size:16,className:"inline mr-1"}),s.change,"% dari kemarin"]})})]})},r))}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:"Transaksi Terakhir"}),e.jsx("button",{className:"text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"Lihat Semua"})]}),e.jsx("div",{className:"space-y-4"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-6",children:"Status Sistem"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Penyimpanan"}),e.jsx("span",{className:"font-medium",children:"45% terisi"})]}),e.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:e.jsx("div",{className:"bg-indigo-600 h-2 rounded-full",style:{width:"45%"}})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Penggunaan CPU"}),e.jsx("span",{className:"font-medium",children:"12%"})]}),e.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:e.jsx("div",{className:"bg-emerald-600 h-2 rounded-full",style:{width:"12%"}})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Pengguna Aktif"}),e.jsx("span",{className:"font-medium",children:"3 pengguna"})]}),e.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:e.jsx("div",{className:"bg-amber-600 h-2 rounded-full",style:{width:"30%"}})})]})]})]})]})]})]})}o.layout=a=>e.jsx(n,{children:a});export{o as default};
