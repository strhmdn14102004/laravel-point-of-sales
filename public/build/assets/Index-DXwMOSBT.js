import{q as B,r,W as R,j as e,Y as q,y as u,b as E}from"./app-DdQi-QVj.js";import{c as b,i as N,A as H}from"./DashboardLayout-DVYg_uCQ.js";import{_ as h}from"./index-DZtqulGZ.js";import{I as L}from"./IconSearch-B7hL6Nyi.js";import{I as $}from"./IconUser-B1iNaaQr.js";import{I as A}from"./IconTrash-Cnud6sX5.js";import{I as F}from"./IconMoneybag-B7Wf2xs3.js";import"./transition-CNCxwH2y.js";import"./keyboard-BqRqYy2S.js";/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var G=b("outline","discount","IconDiscount",[["path",{d:"M9 15l6 -6",key:"svg-0"}],["circle",{cx:"9.5",cy:"9.5",r:".5",fill:"currentColor",key:"svg-1"}],["circle",{cx:"14.5",cy:"14.5",r:".5",fill:"currentColor",key:"svg-2"}],["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q=b("outline","receipt","IconReceipt",[["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var U=b("outline","shopping-cart-plus","IconShoppingCartPlus",[["path",{d:"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M12.5 17h-6.5v-14h-2",key:"svg-1"}],["path",{d:"M6 5l14 1l-.86 6.017m-2.64 .983h-10.5",key:"svg-2"}],["path",{d:"M16 19h6",key:"svg-3"}],["path",{d:"M19 16v6",key:"svg-4"}]]);function W({carts:i,carts_total:n,customers:k}){const{errors:Y,auth:w}=B().props,[j,f]=r.useState(""),[a,p]=r.useState({}),[g,m]=r.useState(1),[o,I]=r.useState(n),[s,C]=r.useState(0),[y,S]=r.useState(0),[x,P]=r.useState(0),[d,T]=r.useState(null),l=t=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t),{data:J,setData:M}=R({customer_id:"",product_id:"",sell_price:"",qty:"",discount:"",cash:"",change:""}),D=t=>{T(t),M("customer_id",t.id)};r.useEffect(()=>{I(n-x),S(s-(n-x))},[n,x,s]);const v=t=>{t.preventDefault(),E.post("/dashboard/transactions/searchProduct",{barcode:j}).then(c=>{c.data.success?p(c.data.data):(p({}),h.error("Produk tidak ditemukan"))})},z=t=>{t.preventDefault(),a.id&&u.post(route("transactions.addToCart"),{product_id:a.id,sell_price:a.sell_price,qty:g},{onSuccess:()=>{f(""),p({}),m(1)}})},K=t=>{if(t.preventDefault(),!d){h.error("Pilih pelanggan terlebih dahulu");return}if(s<o){h.error("Uang pembayaran kurang");return}u.post(route("transactions.store"),{customer_id:d.id,discount:x,grand_total:o,cash:s,change:y},{onSuccess:()=>{h.success("Transaksi berhasil disimpan")}})};return e.jsxs(e.Fragment,{children:[e.jsx(q,{title:"Transaksi Kasir"}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 p-4",children:[e.jsx("div",{className:"w-full lg:w-1/3",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(N,{className:"text-indigo-600 dark:text-indigo-400 mr-2",size:24}),e.jsx("h2",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"Tambah Produk"})]}),e.jsx("form",{onSubmit:v,className:"mb-6",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(L,{className:"text-gray-400",size:20})}),e.jsx("input",{type:"text",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:text-white",placeholder:"Scan/Input Barcode",value:j,onChange:t=>f(t.target.value),onKeyPress:t=>t.key==="Enter"&&v(t)})]})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Produk"}),e.jsx("input",{type:"text",className:"block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white",disabled:!0,value:a.title||"Tidak ada produk"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Harga"}),e.jsx("input",{type:"text",className:"block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white",disabled:!0,value:a.sell_price?l(a.sell_price):"Rp 0"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Kuantitas"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:()=>m(Math.max(1,g-1)),className:"px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-l-lg",children:"-"}),e.jsx("input",{type:"number",className:"flex-1 px-3 py-1 text-center border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white",value:g,onChange:t=>m(Math.max(1,parseInt(t.target.value)||1)),min:"1"}),e.jsx("button",{onClick:()=>m(g+1),className:"px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-r-lg",children:"+"})]}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Stok: ",a.stock||0]})]}),e.jsxs("button",{onClick:z,disabled:!a.id,className:`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${a.id?"bg-indigo-600 hover:bg-indigo-700 text-white":"bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"}`,children:[e.jsx(U,{size:20}),"Tambah ke Keranjang"]})]})]})}),e.jsxs("div",{className:"w-full lg:w-2/3 space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx($,{className:"text-indigo-600 dark:text-indigo-400 mr-2",size:24}),e.jsx("h2",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"Informasi Transaksi"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Kasir"}),e.jsx("input",{type:"text",className:"block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white",disabled:!0,value:w.user.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Pelanggan"}),e.jsxs("div",{className:"relative",children:[e.jsxs("select",{className:"block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white appearance-none",value:(d==null?void 0:d.id)||"",onChange:t=>{const c=k.find(_=>_.id===parseInt(t.target.value));D(c||null)},children:[e.jsx("option",{value:"",children:"Pilih Pelanggan"}),k.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:e.jsx("svg",{className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]})]})]})]}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(N,{className:"text-indigo-600 dark:text-indigo-400 mr-2",size:24}),e.jsx("h2",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"Keranjang Belanja"})]}),i.length===0?e.jsx("div",{className:"text-center py-8 text-gray-500 dark:text-gray-400",children:"Keranjang belanja kosong"}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"No"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Produk"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Harga"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Qty"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Subtotal"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"})]})}),e.jsx("tbody",{className:"bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",children:i.map((t,c)=>e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",children:c+1}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white",children:t.product.title}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",children:l(t.price)}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",children:t.qty}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white",children:l(t.price*t.qty)}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap text-right text-sm font-medium",children:e.jsx("button",{onClick:()=>u.delete(route("transactions.destroyCart",t.id)),className:"text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300",children:e.jsx(A,{size:18})})})]},t.id))}),e.jsx("tfoot",{className:"bg-gray-50 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("td",{colSpan:"4",className:"px-4 py-3 text-right text-sm font-medium text-gray-900 dark:text-white",children:"Total"}),e.jsx("td",{className:"px-4 py-3 text-sm font-bold text-indigo-600 dark:text-indigo-400",children:l(n)}),e.jsx("td",{})]})})]})})]})}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(F,{className:"text-indigo-600 dark:text-indigo-400 mr-2",size:24}),e.jsx("h2",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"Pembayaran"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Total Belanja"}),e.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:l(n)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Diskon"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(G,{className:"text-gray-400",size:20})}),e.jsx("input",{type:"number",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white",placeholder:"0",value:x,onChange:t=>P(parseInt(t.target.value)||0)})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Grand Total"}),e.jsx("div",{className:"text-2xl font-bold text-indigo-600 dark:text-indigo-400",children:l(o)})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Bayar"}),e.jsx("input",{type:"number",className:"block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white",placeholder:"0",value:s,onChange:t=>C(parseInt(t.target.value)||0)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Kembalian"}),e.jsx("div",{className:`text-2xl font-bold ${y>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"}`,children:l(y)})]})]}),e.jsxs("button",{onClick:K,disabled:!d||s<o||i.length===0,className:`w-full py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${!d||s<o||i.length===0?"bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-700 text-white"}`,children:[e.jsx(Q,{size:20}),"Proses Pembayaran"]})]})]})]})]})}W.layout=i=>e.jsx(H,{children:i});export{W as default};
