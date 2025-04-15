import{r as c,j as e,Y as d}from"./app-DdQi-QVj.js";import"./index-DZtqulGZ.js";function h({transaction:s,store:a}){const t=r=>r.toLocaleString("id-ID",{style:"currency",currency:"IDR"});return c.useEffect(()=>{window.print()},[]),console.log(s),e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Print Invoice"}),e.jsxs("div",{className:"max-w-2xl mx-auto p-4 bg-white dark:bg-black",children:[e.jsx("div",{className:"text-center mb-8"}),e.jsxs("div",{className:"flex justify-between mb-6 bg-white text-black dark:bg-black dark:text-white",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Invoice"}),e.jsxs("p",{children:["No: ",s.invoice]}),e.jsxs("p",{children:["Date: ",new Date(s.created_at).toLocaleDateString()]})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Customer"}),e.jsx("p",{children:s.customer.name}),e.jsx("p",{children:s.customer.address})]})]}),e.jsx("div",{className:"mb-6 bg-white text-black dark:bg-black dark:text-white",children:e.jsxs("table",{className:"w-full text-left border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border-b py-2",children:"No"}),e.jsx("th",{className:"border-b py-2",children:"Product"}),e.jsx("th",{className:"border-b py-2",children:"Price"}),e.jsx("th",{className:"border-b py-2",children:"Qty"}),e.jsx("th",{className:"border-b py-2",children:"Subtotal"})]})}),e.jsx("tbody",{children:s.details.map((r,l)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border-b py-2",children:l+1}),e.jsx("td",{className:"border-b py-2",children:r.product.title}),e.jsx("td",{className:"border-b py-2",children:t(r.price)}),e.jsx("td",{className:"border-b py-2",children:r.qty}),e.jsx("td",{className:"border-b py-2",children:t(r.price*r.qty)})]},l))}),e.jsxs("tfoot",{children:[e.jsxs("tr",{children:[e.jsx("td",{colSpan:"4",className:"text-right py-2",children:"Discount"}),e.jsx("td",{className:"py-2",children:t(s.discount)})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:"4",className:"text-right py-2 font-semibold",children:"Total"}),e.jsx("td",{className:"py-2 font-semibold",children:t(s.grand_total)})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:"4",className:"text-right py-2",children:"Cash"}),e.jsx("td",{className:"py-2",children:t(s.cash)})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:"4",className:"text-right py-2",children:"Change"}),e.jsx("td",{className:"py-2",children:t(s.change)})]})]})]})}),e.jsxs("div",{className:"text-center mt-8 text-black dark:text-white",children:[e.jsx("p",{className:"text-sm",children:"Thank you for your purchase!"}),e.jsx("p",{className:"text-sm",children:"Please come again."})]})]})]})}export{h as default};
