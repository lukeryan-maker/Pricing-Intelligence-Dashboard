import {mkdir,copyFile,rm,readFile} from 'node:fs/promises';
import {validate} from './analytics.mjs';
validate(JSON.parse(await readFile('data/competitor_data.json','utf8')));
await rm('dist',{recursive:true,force:true});await mkdir('dist/data',{recursive:true});
for(const f of ['index.html','app.js','analytics.mjs','style.css','data/competitor_data.json'])await copyFile(f,'dist/'+f);
await copyFile('.nojekyll','dist/.nojekyll');console.log('Production build complete: dist/');
