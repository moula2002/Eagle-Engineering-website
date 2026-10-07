const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove generic interfaces for Props
      content = content.replace(/interface\s+\w+Props\s*{[^}]+}/g, '');
      
      // Remove React.FC<Props> and just leave the function signature
      content = content.replace(/React\.FC<[^>]+>\s*=\s*/g, '= ');
      
      // Remove React.FC
      content = content.replace(/React\.FC\s*=\s*/g, '= ');
      
      // Remove useState generic types like useState<'...'>('...') or useState<{...}>
      content = content.replace(/useState<[^>]+>\(/g, 'useState(');
      
      // Remove React.FormEvent from ProposalModal
      content = content.replace(/\(e:\s*React\.FormEvent\)/g, '(e)');

      // Update index.html reference if it's the main file
      // Note: index.html is outside src, we'll handle it separately
      
      fs.writeFileSync(fullPath, content);
      
      // Rename file
      const newPath = fullPath.replace(/\.tsx$/, '.jsx');
      fs.renameSync(fullPath, newPath);
      console.log(`Converted: ${file} -> ${path.basename(newPath)}`);
    }
  }
}

processDir(srcDir);

// Update index.html
const indexHtmlPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  indexHtml = indexHtml.replace('/src/main.tsx', '/src/main.jsx');
  fs.writeFileSync(indexHtmlPath, indexHtml);
  console.log('Updated index.html to point to main.jsx');
}

// Update main.jsx to remove '!' from getElementById
const mainJsxPath = path.join(srcDir, 'main.jsx');
if (fs.existsSync(mainJsxPath)) {
  let mainJsx = fs.readFileSync(mainJsxPath, 'utf8');
  mainJsx = mainJsx.replace(/document\.getElementById\('root'\)!/g, "document.getElementById('root')");
  fs.writeFileSync(mainJsxPath, mainJsx);
  console.log('Removed TS non-null assertion in main.jsx');
}

console.log('Done.');
