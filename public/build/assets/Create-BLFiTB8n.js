import{q as j,r as m,W as f,j as e,Y as v}from"./app-DdQi-QVj.js";import{A as N}from"./DashboardLayout-DVYg_uCQ.js";import{_ as x}from"./index-DZtqulGZ.js";import{I as w}from"./IconX-9EDfQU5X.js";import{I}from"./IconPhoto-C7UNnNat.js";import{I as C}from"./IconCategory-BtBoM7PZ.js";import{I as _,a as P}from"./IconStack-CbwzsOGt.js";import{I as S}from"./IconCheck-CfloJXDv.js";import"./transition-CNCxwH2y.js";import"./keyboard-BqRqYy2S.js";function B({categories:o}){const{errors:a}=j().props,[i,n]=m.useState(null),[l,g]=m.useState(null),{data:s,setData:t,post:u,processing:c}=f({image:null,barcode:"",title:"",category_id:"",description:"",buy_price:"",sell_price:"",stock:""}),p=r=>{const d=r.target.files[0];d&&(t("image",d),n(URL.createObjectURL(d)))},h=()=>{t("image",null),n(null)},b=r=>{g(r),t("category_id",r.id)},y=r=>{r.preventDefault(),u(route("products.store"),{onSuccess:()=>{Object.keys(a).length===0&&x.success("Produk berhasil ditambahkan!",{position:"top-right",style:{borderRadius:"10px",background:"#10B981",color:"#fff"}})},onError:()=>{x.error("Gagal menambahkan produk. Silakan cek kembali data Anda.",{position:"top-right"})}})};return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Tambah Produk Baru"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Tambah Produk Baru"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Isi form berikut untuk menambahkan produk baru"})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden",children:e.jsxs("form",{onSubmit:y,className:"p-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Gambar Produk"}),e.jsx("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-xl",children:e.jsx("div",{className:"space-y-1 text-center",children:i?e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:i,alt:"Preview",className:"mx-auto h-40 w-40 object-cover rounded-lg"}),e.jsx("button",{type:"button",onClick:h,className:"absolute -top-2 -right-2 p-1 bg-rose-500 rounded-full text-white hover:bg-rose-600",children:e.jsx(w,{size:16})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(I,{className:"mx-auto h-12 w-12 text-gray-400"})}),e.jsxs("div",{className:"flex text-sm text-gray-600 dark:text-gray-400",children:[e.jsxs("label",{htmlFor:"image-upload",className:"relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 focus-within:outline-none",children:[e.jsx("span",{children:"Upload gambar"}),e.jsx("input",{id:"image-upload",name:"image",type:"file",className:"sr-only",onChange:p,accept:"image/*"})]}),e.jsx("p",{className:"pl-1",children:"atau drag and drop"})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"PNG, JPG, GIF up to 2MB"})]})})}),a.image&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.image})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Kategori Produk"}),e.jsxs("div",{className:"relative",children:[e.jsxs("select",{className:"block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white appearance-none",value:(l==null?void 0:l.id)||"",onChange:r=>{const d=o.find(k=>k.id===parseInt(r.target.value));b(d||null)},children:[e.jsx("option",{value:"",children:"Pilih Kategori"}),o.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:e.jsx(C,{className:"h-5 w-5 text-gray-400"})})]}),a.category_id&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.category_id})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Kode Produk / Barcode"}),e.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(_,{className:"h-5 w-5 text-gray-400"})}),e.jsx("input",{type:"text",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"Masukkan barcode",value:s.barcode,onChange:r=>t("barcode",r.target.value)})]}),a.barcode&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.barcode})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Nama Produk"}),e.jsx("input",{type:"text",className:"block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"Nama produk",value:s.title,onChange:r=>t("title",r.target.value)}),a.title&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.title})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Deskripsi Produk"}),e.jsx("textarea",{rows:4,className:"block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"Deskripsi lengkap produk",value:s.description,onChange:r=>t("description",r.target.value)}),a.description&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.description})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Harga Beli"}),e.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Rp"})}),e.jsx("input",{type:"number",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"0",value:s.buy_price,onChange:r=>t("buy_price",r.target.value)})]}),a.buy_price&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.buy_price})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Harga Jual"}),e.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Rp"})}),e.jsx("input",{type:"number",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"0",value:s.sell_price,onChange:r=>t("sell_price",r.target.value)})]}),a.sell_price&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.sell_price})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Stok Awal"}),e.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(P,{className:"h-5 w-5 text-gray-400"})}),e.jsx("input",{type:"number",className:"block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white",placeholder:"0",value:s.stock,onChange:r=>t("stock",r.target.value)})]}),a.stock&&e.jsx("p",{className:"mt-2 text-sm text-rose-600 dark:text-rose-400",children:a.stock})]})]}),e.jsxs("div",{className:"flex justify-end pt-4 space-x-3",children:[e.jsx("a",{href:route("products.index"),className:"inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Batal"}),e.jsx("button",{type:"submit",disabled:c,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",children:c?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Memproses..."]}):e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"-ml-1 mr-2 h-5 w-5"}),"Simpan Produk"]})})]})]})})]})]})}B.layout=o=>e.jsx(N,{children:o});export{B as default};
