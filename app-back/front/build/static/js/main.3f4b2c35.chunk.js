(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{86:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(9),c=n.n(a),i=n(50),o=n(17),s=n(114),j=n(118),f=n(119),l=n(121),u=n(122),b=n(29),d=n(37),m=function(e,t){var n=Object(r.useState)({}),a=Object(o.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)(""),j=Object(o.a)(s,2),f=j[0],l=j[1],u=function(){return e.validate(c)};return{handleSubmit:function(e){e.preventDefault();var n=u().error;if(n)console.error(n),l(n);else{fetch("/offers/create",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){200===e.status?t(c):console.error(n)}))}},handleInputChange:function(e){i(Object(d.a)(Object(d.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))},errors:f}},h=n(23),O=n(6),y=h.object({name:h.string().required().trim(),company:h.string().required().trim(),salary:h.string().required().trim(),city:h.string().required().trim()}),p=[{label:"Job offer name",name:"name"},{label:"Company name",name:"company"},{label:"Salary",name:"salary"},{label:"City",name:"city"}];var x=function(e){var t=m(y,e.updateJobs),n=t.handleSubmit,r=t.handleInputChange,a=t.errors,c=function(e,t){return a&&a.some((function(t){return t.context.key===e}))?!t||a.find((function(t){return t.context.key===e})).message:!!t&&""};return Object(O.jsx)(s.a,{children:Object(O.jsx)("form",{onSubmit:n,children:Object(O.jsxs)(j.a,{container:!0,spacing:2,justify:"center",style:{marginTop:32},children:[Object(O.jsx)(j.a,{item:!0,children:Object(O.jsx)(f.a,{variant:"h3",align:"center",children:"Crea una oferta"})}),p.map((function(e){return Object(O.jsx)(j.a,{item:!0,xs:12,children:Object(O.jsx)(l.a,{variant:"outlined",label:e.label,name:e.name,onChange:r,error:c(e.name),helperText:c(e.name,!0),fullWidth:!0,required:!0})},e.name)})),Object(O.jsx)(j.a,{item:!0,children:Object(O.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",children:"Crear oferta"})})]})})})},g=n(120),v=function(e){var t=Object(r.useState)({name:e.offer.name,company:e.offer.company,salary:e.offer.salary,city:e.offer.city}),n=Object(o.a)(t,1)[0];return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:n.name}),Object(O.jsx)("h3",{children:n.company}),Object(O.jsx)("h4",{children:n.salary}),Object(O.jsx)("h5",{children:n.city}),Object(O.jsx)("hr",{})]})})},S=function(){var e=Object(r.useState)({offers:[]}),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),s=Object(o.a)(c,2),j=s[0],l=s[1];Object(r.useEffect)((function(){l(!0);fetch("/offers").then((function(e){return e.json()})).then((function(e){a({offers:e}),l(!1)}))}),[]);return Object(O.jsxs)("div",{children:[Object(O.jsx)(f.a,{variant:"h3",align:"center",children:"Ofertas laborales"}),j&&Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(O.jsx)(g.a,{})}),n.offers.map((function(e,t){return Object(O.jsx)(v,{offer:e,loading:j},t)})),Object(O.jsx)(x,{updateJobs:function(e){return a((function(t){return{offers:[].concat(Object(i.a)(t.offers),[e])}}))}})]})};c.a.render(Object(O.jsx)(S,{}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.3f4b2c35.chunk.js.map