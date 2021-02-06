(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{429:function(e,t,a){e.exports=a.p+"static/media/icon.72626586.png"},465:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(426),i=a(136),l=a(129),s=a(26),c=a(464),p=a(975),m=(a(486),a(958)),u=a(960),h=a(962),f=a(964),g=a(963),d=a(436),E=a.n(d),b=a(435),y=a.n(b),x=a(981),v=a(429),w=a.n(v),S=Object(m.a)((function(e){return{menuButton:{color:e.palette.common.white},solidButton:{backgroundColor:e.palette.primary.main,color:"#fff",borderRadius:"6px",padding:"7px 14px","&:hover":{backgroundColor:e.palette.primary.dark,cursor:"pointer"}},linkButton:{textTransform:"none",textDecoration:"none"},linkLogo:{alignItems:"center",display:"flex"}}}));function _(){var e=S();return r.a.createElement(u.a,{title:"",position:"static"},r.a.createElement(h.a,{variant:"dense"},r.a.createElement(l.b,{to:"/",className:e.linkLogo},r.a.createElement(g.a,{title:"IDS Projects dashboard"},r.a.createElement("img",{src:w.a,style:{height:"2em",width:"2em",marginRight:"10px"},alt:"Logo"}))),r.a.createElement("div",{className:"flexGrow"}),r.a.createElement("a",{href:"https://github.com/MaastrichtU-IDS/shapes-of-you/blob/report/FAILED_IMPORT_REPORT.md",target:"_blank",rel:"noopener noreferrer",className:e.linkButton},r.a.createElement(g.a,{title:"List of shapes we failed to process"},r.a.createElement(f.a,{className:e.menuButton},r.a.createElement(y.a,null),"\xa0Import report"))),r.a.createElement(g.a,{title:"Go to https://github.com/MaastrichtU-IDS/shapes-of-you"},r.a.createElement(f.a,{className:e.menuButton,target:"_blank",href:"https://github.com/MaastrichtU-IDS/shapes-of-you",rel:"noopener noreferrer"},r.a.createElement(E.a,null))),r.a.createElement(x.a,{title:"Login with SOLID",className:e.solidButton,popup:"https://inrupt.net/common/popup.html"})))}var k=a(138),O=a(965),L=Object(m.a)((function(e){return{darkLink:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.light,textDecoration:"none"}},whiteLink:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.dark,textDecoration:"none"}},footer:{padding:e.spacing(2),marginTop:"auto",color:"white",backgroundColor:e.palette.primary.main}}}));function I(){var e=L();return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement("a",{className:e.darkLink,target:"_blank",rel:"noopener noreferrer",href:"https://maastrichtuniversity.nl/ids"},"Institute of Data Science at Maastricht University")," ","2020.")}function C(){var e=L();return r.a.createElement("footer",{className:e.footer},r.a.createElement(O.a,{maxWidth:"md",style:{textAlign:"center"}},r.a.createElement(k.a,{variant:"body2"},"Built for you, to explore the semantic space \u2728\ufe0f website under the\xa0",r.a.createElement("a",{className:e.whiteLink,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/MaastrichtU-IDS/shapes-of-you/blob/main/LICENSE"},"MIT license")),r.a.createElement(I,null)))}var P=a(55),R=a.n(P),F=a(70),A=a.n(F),j=a(169),D=a.n(j),N=a(68),q=a(925),T=a(977),U=a(986),B=a(985),W=a(972),H=a(968),M=a(969),X=a(970),G=a(984),Q=a(971),Y=a(443),z=a.n(Y),J=a(440),K=a.n(J),V=a(442),Z=a.n(V),$=a(441),ee=a.n($),te=a(212),ae=a.n(te),ne=a(973),re=a(974),oe=a(980),ie=a(976),le=a(979),se=a(978),ce=a(110),pe=a(966),me=a(967),ue=a(983),he=a(982),fe=a(83);function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(a),!0).forEach((function(t){A()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ee=Object(m.a)((function(e){return{paperSearch:{padding:"2px 4px",display:"flex",alignItems:"center",width:"35ch",marginRight:e.spacing(3)},searchInput:{marginLeft:e.spacing(1),fontSize:"16px",flex:1},link:{textDecoration:"none",color:e.palette.primary.main,"&:hover":{color:e.palette.secondary.main,textDecoration:"none"}}}}));function be(){var e=Ee(),t=Object(N.a)(),a=Object(ce.a)(),n=r.a.useState({webid:"",shapes_files_list:[],search:"",repositories_hash:[],repositories_autocomplete:[],category_pie:{},checkbox_shacl:!0,checkbox_shex:!0,checkbox_sparql:!0,page:1,shapes_per_page:100}),o=D()(n,2),i=o[0],l=o[1],s=r.a.useRef(i),c=r.a.useCallback((function(e){s.current=de(de({},s.current),e),l(s.current)}),[l]);r.a.useEffect((function(){var e="https://graphdb.dumontierlab.com/repositories/shapes-registry";ae.a.get(e+"?query="+encodeURIComponent(ye)).then((function(e){var t=de({},e.data.results.bindings),a={};Object.keys(t).forEach((function(e){var n=t[e].shapeFileUri.value;a[n]||(a[n]={shapes:[]}),Object.keys(t[e]).forEach((function(r){var o=t[e][r];if(o)if("shapes"==r){var i=o.value;if(i.length>100){var l=i.lastIndexOf("#");i=i.substring(l+1)}i.length>150&&(i=i.substring(0,150)),a[n][r].push(i)}else a[n][r]=o.value}))}));var n=Object.keys(a).map((function(e){return a[e]}));c({shapes_files_list:n})})).catch((function(e){console.log(e)}));var t=[];ae.a.get(e+"?query="+encodeURIComponent(xe)).then((function(e){e.data.results.bindings.map((function(e){var a="";e.repo_description&&(a=e.repo_description.value),t.push({label:e.repository.value,count:e.shapeFileCount.value,description:a})})),c({repositories_hash:t})})).catch((function(e){console.log(e)})),a&&function(e){var t=e.replace("profile/card#me","public/shapes-of-you/preferences.ttl");fe.a[t].put()}(a)}),[a]);var p=function(e){c(A()({},e.target.name,e.target.checked))};var m=i.shapes_files_list.filter((function(e){if(e.label&&(0==i.repositories_autocomplete.length||i.repositories_autocomplete.find((function(t){return t.includes(e.repository)})))&&(!0===i.checkbox_shex&&e.label.endsWith(".shex")||!0===i.checkbox_sparql&&(e.label.endsWith(".rq")||e.label.endsWith(".sparql"))||!0===i.checkbox_shacl&&!e.label.endsWith(".shex")&&!e.label.endsWith(".rq")))return-1!==e.label.toLowerCase().indexOf(i.search.toLowerCase())||-1!==e.shapeFileUri.toLowerCase().indexOf(i.search.toLowerCase())||-1!==e.shapes.join(" ").toLowerCase().indexOf(i.search.toLowerCase())||-1!==e.repository.toLowerCase().indexOf(i.search.toLowerCase())})),u=[];return u=0==i.repositories_autocomplete.length?m.map((function(e){return e.repository})).filter((function(e,t,a){return a.indexOf(e)===t})):i.shapes_files_list.map((function(e){return e.repository})).filter((function(e,t,a){return a.indexOf(e)===t})),r.a.createElement(O.a,{className:"mainContainer"},r.a.createElement(k.a,{variant:"h4",style:{textAlign:"center"}},"\ud83d\udca0 Shapes of You"),r.a.createElement(pe.a,null,r.a.createElement(k.a,{style:{textAlign:"center",marginBottom:t.spacing(2)}},"Welcome to your SPARQL, SHACL & ShEx Shapes registry ",r.a.createElement(me.a,{src:"user.name"}),"!"),r.a.createElement(k.a,{style:{textAlign:"center",marginBottom:t.spacing(3)}},"Soon you will be able to bookmark your favourites Shapes using your SOLID account! \ud83d\udd16")),r.a.createElement(ue.a,null,r.a.createElement(k.a,{style:{textAlign:"center",marginBottom:t.spacing(3)}},"A registry for SPARQL, SHACL & ShEx Shapes publicly available")),r.a.createElement(k.a,{style:{marginBottom:t.spacing(2)}},"Shapes of you is the best place to search and explore existing semantic shapes and queries. You need to validate RDF using SHACL or ShEx? There might be a shape out there waiting for you! You can also explore shapes to find inspirations. You might even find a grlc API serving data relevant for your projects, who knows? Linked Open Data are full of surprise!"),r.a.createElement("a",{href:"https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Get+shapes+from+GitHub%22"},r.a.createElement("img",{src:"https://github.com/MaastrichtU-IDS/shapes-of-you/workflows/Get%20shapes%20from%20GitHub/badge.svg",style:{marginBottom:t.spacing(2)}})),r.a.createElement(k.a,null,"Add one of these topics to your GitHub repository, we automatically index files from public repositories everyday at 1:00 and 13:00 \ud83d\udd50"),r.a.createElement(H.a,null,r.a.createElement(M.a,null,r.a.createElement(X.a,null,r.a.createElement(G.a,null,r.a.createElement(K.a,null))),r.a.createElement(Q.a,null,r.a.createElement("b",null,"SHACL shapes"),": add the topic ",r.a.createElement("code",null,"shacl-shapes"),", we index RDF files such as ",r.a.createElement("code",null,".ttl"),", ",r.a.createElement("code",null,".rdf"),", ",r.a.createElement("code",null,".jsonld"),", etc), with all ",r.a.createElement("code",null,"sh:NodeShape")," they contain")),r.a.createElement(M.a,null,r.a.createElement(X.a,null,r.a.createElement(G.a,null,r.a.createElement(ee.a,null))),r.a.createElement(Q.a,null,r.a.createElement("b",null,"ShEx expressions"),": add the topic ",r.a.createElement("code",null,"shex"),", we index ",r.a.createElement("code",null,".shex")," files, and ShEx shapes defined in RDF files")),r.a.createElement(M.a,null,r.a.createElement(X.a,null,r.a.createElement(G.a,null,r.a.createElement(Z.a,null))),r.a.createElement(Q.a,null,r.a.createElement("b",null,"SPARQL queries"),": add the topic ",r.a.createElement("code",null,"grlc"),", we index ",r.a.createElement("code",null,".rq")," and ",r.a.createElement("code",null,".sparql")," files, and parse ",r.a.createElement("a",{href:"http://grlc.io",className:e.link},"grlc.io")," APIs metadata"))),r.a.createElement(q.a,{elevation:6,style:{padding:t.spacing(3,2),margin:t.spacing(2,0)}},r.a.createElement(k.a,{variant:"h5"},m.length," shapes files in\xa0",u.length," repositories"),r.a.createElement(T.a,{display:"flex",style:{margin:t.spacing(2,0)}},r.a.createElement(q.a,{component:"form",className:e.paperSearch},r.a.createElement(B.a,{className:e.searchInput,inputProps:{"aria-label":"search"},placeholder:"\ud83d\udd0e Search shapes",onChange:function(e){c({search:e.target.value})}}),r.a.createElement(W.a,{"aria-label":"search"},r.a.createElement(z.a,null))),r.a.createElement(ne.a,{row:!0},r.a.createElement(re.a,{control:r.a.createElement(oe.a,{checked:i.checkbox_shacl,onChange:p,name:"checkbox_shacl",color:"primary"}),label:"SHACL"}),r.a.createElement(re.a,{control:r.a.createElement(oe.a,{checked:i.checkbox_shex,onChange:p,name:"checkbox_shex",color:"primary"}),label:"ShEx"}),r.a.createElement(re.a,{control:r.a.createElement(oe.a,{checked:i.checkbox_sparql,onChange:p,name:"checkbox_sparql",color:"primary"}),label:"SPARQL"})),r.a.createElement(ie.a,{id:"shapes-per-page",value:i.shapes_per_page,onChange:function(e){c({shapes_per_page:e.target.value})},label:"Files per page",type:"number",variant:"outlined"})),r.a.createElement(le.a,{multiple:!0,value:i.repositories_autocomplete,onChange:function(e,t){c({repositories_autocomplete:t})},id:"autocomplete-repositories",options:i.repositories_hash.filter((function(e){return u.indexOf(e.label)>-1})).map((function(e){return e.label+","+e.count+","+e.description})),getOptionLabel:function(e){return e.split(",")[0].replace("https://github.com/","")},renderOption:function(e){return r.a.createElement(r.a.Fragment,null,e.split(",")[0].replace("https://github.com/","")," (",e.split(",")[1]," files)",e.split(",")[2]&&r.a.createElement(r.a.Fragment,null,"\xa0- ",e.split(",")[2]))},renderInput:function(e){return r.a.createElement(ie.a,R()({},e,{label:"\ud83d\udcc1 Filter by repositories",variant:"outlined"}))}})),m.slice((i.page-1)*i.shapes_per_page,i.page*i.shapes_per_page-1).map((function(a,n){return r.a.createElement(q.a,{key:n.toString(),elevation:2,style:{padding:t.spacing(2,2),margin:t.spacing(2,0)}},r.a.createElement(k.a,{variant:"h6"},"Shapes file:\xa0",r.a.createElement("b",null,r.a.createElement("a",{href:a.shapeFileUri,className:e.link},a.label)),"\xa0\xa0",r.a.createElement(pe.a,null,r.a.createElement(he.a,{object:a.shapeFileUri},"the Shape"))),a.shape_file_description&&r.a.createElement(k.a,{style:{fontStyle:"italic",margin:t.spacing(1,0)}},a.shape_file_description),r.a.createElement(k.a,{style:{margin:t.spacing(1,0)}},r.a.createElement("a",{href:a.repository,className:e.link},"\ud83d\udcc1\xa0",a.repository.replace("https://github.com/","")),a.repo_description&&r.a.createElement(r.a.Fragment,null,"\xa0-\xa0",a.repo_description)),r.a.createElement(k.a,{style:{marginTop:t.spacing(1)}},"Contains ",function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s";return e+" "+t+(1!==parseInt(e)?a:"")}(a.shapes.length,"Shape"),":"),a.shapes.map((function(e,a){return r.a.createElement(U.a,{label:e,color:"primary",key:a.toString(),style:{margin:t.spacing(1,1)}})})))})),r.a.createElement(se.a,{count:Math.floor(m.length/i.shapes_per_page)+1,color:"primary",onChange:function(e,t){return c({page:t})},style:{display:"flex",justifyContent:"center"}}))}var ye="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX schema: <https://schema.org/>\nPREFIX sh: <http://www.w3.org/ns/shacl#>\nPREFIX shex: <http://www.w3.org/ns/shex#>\nPREFIX void: <http://rdfs.org/ns/void#>\nSELECT DISTINCT * WHERE { \n    ?shapeFileUri a schema:SoftwareSourceCode ;\n        rdfs:label ?label ;\n        dc:source ?repository ;\n        dcterms:hasPart ?shapes .\n    OPTIONAL { ?repository rdfs:comment ?repo_description }\n    OPTIONAL { ?shapeFileUri schema:query ?query }\n    OPTIONAL { ?shapeFileUri void:sparqlEndpoint ?sparqlEndpoint }\n    OPTIONAL { ?shapeFileUri dc:description ?shape_file_description }\n}",xe="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX schema: <https://schema.org/>\nPREFIX sh: <http://www.w3.org/ns/shacl#>\nPREFIX shex: <http://www.w3.org/ns/shex#>\nSELECT ?repository (count(?shapeFileUri) AS ?shapeFileCount) ?repo_description WHERE { \n  ?shapeFileUri a <https://schema.org/SoftwareSourceCode> ;\n    rdfs:label ?label ;\n    dc:source ?repository .\n  OPTIONAL { ?repository rdfs:comment ?repo_description }\n} GROUP BY ?repository ?repo_description\n",ve=Object(m.a)((function(e){return{settingsForm:{width:"100%","& .MuiFormControl-root":{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"& .MuiFormHelperText-root":{marginTop:e.spacing(0),marginBottom:e.spacing(1)}},saveButton:{textTransform:"none",margin:e.spacing(2,2)},fullWidth:{width:"100%"},normalFont:{fontSize:"14px"},smallerFont:{fontSize:"12px"},alignLeft:{textAlign:"left"},paperPadding:{padding:e.spacing(2,2),margin:e.spacing(2,2)},paperTitle:{fontWeight:300,marginBottom:e.spacing(1)}}}));function we(){ve();var e=r.a.useState({open:!1,dialogOpen:!1,project_license:"",language_autocomplete:[]}),t=D()(e,2);t[0],t[1];return r.a.createElement(O.a,{className:"mainContainer"})}var Se=Object(c.a)({palette:{primary:{light:"#63a4ff",main:"#1976d2",dark:"#004ba0"},secondary:{light:"#4caf50",main:"#7e57c2",dark:"#00600f"}},typography:{fontFamily:'"Open Sans", "Roboto", "Arial"',fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});t.a=function(){return r.a.createElement(p.a,{theme:Se},r.a.createElement(o.a,null,r.a.createElement("title",null,"Shapes of you"),r.a.createElement("meta",{name:"description",content:"Registry for publicly available SPARQL queries, ShEx, and SHACL shapes validation files"}),r.a.createElement("meta",{itemProp:"name",content:"Shapes of you"}),r.a.createElement("meta",{itemProp:"description",content:"Registry for publicly available SPARQL queries, ShEx, and SHACL shapes validation files"}),r.a.createElement("meta",{itemProp:"image",content:""}),r.a.createElement("meta",{property:"og:url",content:"https://maastrichtu-ids.github.io/shapes-of-you"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:"Shapes of you"}),r.a.createElement("meta",{property:"og:description",content:"Registry for publicly available SPARQL queries, ShEx, and SHACL shapes validation files"}),r.a.createElement("meta",{property:"og:image",content:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:"Shapes of you"}),r.a.createElement("meta",{name:"twitter:description",content:"Registry for publicly available SPARQL queries, ShEx, and SHACL shapes validation files"}),r.a.createElement("meta",{name:"twitter:image",content:""})),r.a.createElement(l.a,{basename:"/shapes-of-you/"},r.a.createElement(i.a,{style:{height:"100%",backgroundColor:"#eceff1"}},r.a.createElement(_,null),r.a.createElement(s.a,{exact:!0,path:"/",component:be}),r.a.createElement(s.a,{path:"/about",component:we}),r.a.createElement(C,null))))}},479:function(e,t,a){a(480),e.exports=a(924)},480:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/shapes-of-you/expo-service-worker.js",{scope:"/shapes-of-you/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},486:function(e,t,a){var n=a(487),r=a(488);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},488:function(e,t,a){(t=a(489)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]),t.push([e.i,'.flexGrow {\n  flex-grow: 1; \n}\n\n.mainContainer {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\npre, code {\n  font-family: monospace, monospace;\n  border-radius: 6px;\n  padding: 2px;\n  color: white;\n  background-color: #455a64;\n  /* background-color: #1976d2; */\n}\n  \n/* @import url("https://fonts.googleapis.com/icon?family=Material+Icons");\nbody {\n  margin: 0;\n  padding: 0;\n  text-align: center; } */\n',""]),e.exports=t},534:function(e,t){},536:function(e,t){},544:function(e,t){},546:function(e,t){},590:function(e,t){},599:function(e,t){},600:function(e,t){},747:function(e,t){},749:function(e,t){},777:function(e,t){},778:function(e,t){},783:function(e,t){},785:function(e,t){},809:function(e,t){}},[[479,1,2]]]);
//# sourceMappingURL=app.ba38b63e.chunk.js.map