import{q as i,W as m,j as e,Y as c}from"./app-DdQi-QVj.js";import{A as g}from"./DashboardLayout-DVYg_uCQ.js";import{_ as o}from"./index-DZtqulGZ.js";import{I as x}from"./IconUser-B1iNaaQr.js";import{I as p,a as h}from"./IconPhone-CUO093eL.js";import{I as u}from"./IconCheck-CfloJXDv.js";import"./transition-CNCxwH2y.js";import"./keyboard-BqRqYy2S.js";function b(){const{errors:a}=i().props,{data:s,setData:t,post:l,processing:n}=m({name:"",no_telp:"",address:""}),d=r=>{r.preventDefault(),l(route("customers.store"),{onSuccess:()=>{Object.keys(a).length===0&&o.success("Pelanggan berhasil ditambahkan!",{position:"top-right",style:{borderRadius:"10px",background:"#10B981",color:"#fff"}})},onError:()=>{o.error("Gagal menambahkan pelanggan. Silakan cek kembali data Anda.",{position:"top-right"})}})};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Tambah Pelanggan Baru"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Tambah Pelanggan Baru"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Isi form berikut untuk menambahkan pelanggan baru"})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden",children:e.jsxs("form",{onSubmit:d,className:"p-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Nama Pelanggan"}),e.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(x,{className:"h-5 w-5 text-gray-400"})}),e.jsx("input",{type:"text",id:"name",name:"name",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"Nama lengkap pelanggan",value:s.name,onChange:r=>t("name",r.target.value)})]}),a.name&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"no_telp",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Nomor Handphone"}),e.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(p,{className:"h-5 w-5 text-gray-400"})}),e.jsx("input",{type:"text",id:"no_telp",name:"no_telp",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"Contoh: 081234567890",value:s.no_telp,onChange:r=>t("no_telp",r.target.value)})]}),a.no_telp&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.no_telp})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"address",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Alamat"}),e.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none",children:e.jsx(h,{className:"h-5 w-5 text-gray-400"})}),e.jsx("textarea",{id:"address",name:"address",rows:4,className:"block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"Alamat lengkap pelanggan",value:s.address,onChange:r=>t("address",r.target.value)})]}),a.address&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.address})]}),e.jsxs("div",{className:"flex justify-end pt-4 space-x-3",children:[e.jsx("a",{href:route("customers.index"),className:"inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Batal"}),e.jsx("button",{type:"submit",disabled:n,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",children:n?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Memproses..."]}):e.jsxs(e.Fragment,{children:[e.jsx(u,{className:"-ml-1 mr-2 h-5 w-5"}),"Simpan Pelanggan"]})})]})]})})]})]})}b.layout=a=>e.jsx(g,{children:a});export{b as default};
