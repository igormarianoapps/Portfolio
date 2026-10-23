import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { PROJECTS_REGISTRY } from '../src/data/projects';
import { siteConfig } from '../src/data/site';

const root = 'https://igormariano.vercel.app';
const template = readFileSync('dist/index.html','utf8');
const escape = (s: string) => s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const absolute = (s: string) => new URL(s,root).href;
type Page = {path: string; title: string; description: string; image?: string};
const pages: Page[] = [
 {path:'/sobre',title:`${siteConfig.aboutPage.title.pt} · Igor Mariano`,description:siteConfig.aboutPage.subtitle.pt},
 {path:'/contato',title:`${siteConfig.contactPage.title.pt} · Igor Mariano`,description:siteConfig.contactPage.subtitle.pt},
 ...PROJECTS_REGISTRY.map(({pt})=>({path:`/projetos/${pt.slug}`,title:`${pt.title} — Estudo de Caso · Igor Mariano`,description:pt.summary,image:pt.coverImage}))
];
function replaceMeta(html:string, attr:'name'|'property',key:string,value:string) {
 const re=new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*\\/?>`,'i');
 const tag=`<meta ${attr}="${key}" content="${escape(value)}" />`;
 return re.test(html) ? html.replace(re,tag) : html.replace('</head>',`    ${tag}\n  </head>`);
}
for(const page of pages) {
 const canonical=root+page.path;
 const image=absolute(page.image||'/og-image.jpg');
 let html=template.replace(/<title>[^<]*<\/title>/,`<title>${escape(page.title)}</title>`);
 for(const [attr,key,value] of [
  ['name','description',page.description],['property','og:type',page.path.startsWith('/projetos/')?'article':'website'],
  ['property','og:title',page.title],['property','og:description',page.description],
  ['property','og:image',image],['property','og:image:alt',page.title],['property','og:url',canonical],
  ['name','twitter:title',page.title],['name','twitter:description',page.description],['name','twitter:image',image]
 ] as const) html=replaceMeta(html,attr,key,value);
 html=html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/,`<link rel="canonical" href="${escape(canonical)}" />`);
 // Do not claim all previews are 1200x630: original artwork may have a different ratio.
 if(page.image) html=html.replace(/\s*<meta property="og:image:(?:width|height|type)"[^>]*>/g,'');
 const folder=join('dist',page.path.slice(1));
 mkdirSync(folder,{recursive:true});
 writeFileSync(join(folder,'index.html'),html,'utf8');
}
console.log(`Generated static metadata for ${pages.length} routes.`);
