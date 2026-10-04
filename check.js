// Sanity checks run locally (npm test) and in CI. No dependencies.
const fs=require('fs'),path=require('path'),root=__dirname;let bad=0;
const fail=m=>{console.error('✗',m);bad++},ok=m=>console.log('✓',m);
for(const f of ['index.html','manifest.webmanifest','sw.js','icon.svg','LICENSE','README.md'])fs.existsSync(path.join(root,f))?ok(f+' exists'):fail(f+' missing');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
[...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)].forEach((m,i)=>{const a=m[1],b=m[2];if(!b.trim())return;
 try{if(/application\/json/.test(a))JSON.parse(b);else if(!/text\/plain/.test(a))new Function(b.replace(/^boot\(\);\s*$/m,''));ok('script #'+i+' parses')}catch(e){fail('script #'+i+': '+e.message)}});
try{JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest'),'utf8'));ok('manifest parses')}catch(e){fail('manifest: '+e.message)}
for(const w of ['guaranteed','stock tip'])if(!html.toLowerCase().includes(w))fail('guardrail wording missing: '+w);
// guardrail: no broker/trading API integrations
if(/zerodha|upstox|angelone|kite\.trade|groww\.in\/api/i.test(html))fail('broker integration found; not allowed by project guardrails');else ok('no broker integration');
process.exit(bad?1:0);
