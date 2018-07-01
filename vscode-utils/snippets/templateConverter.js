const fs = require('fs');
const path = require('path');

let sourceDirectory = path.join(__dirname, 'sources');

fs.readdir(sourceDirectory, (err, sources)=>{
  if (err) { return console.error(err); }

  sources.forEach((source)=>{
    console.log(source)
    let directory = path.join(sourceDirectory, source);
    fs.readdir(directory, (err, files) => {
      let snippets = {};
      files
        .filter((name)=> {return name.indexOf('react') >=0})
        .forEach((name)=> {
          let data = fs.readFileSync(path.join(directory, name), 'utf-8');  
          snippets[name] = {
            prefix:name,
            body:data.split('\r\n') 
          };
        });
      fs.writeFile(path.join(__dirname, `target/${source}.json`), JSON.stringify(snippets, null, 2), 'utf-8', (err)=>{
        if (err){
          return console.error(err);
        }
        console.log('Snippets successfully generated');
      })
    });
  })

  
});