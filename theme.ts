import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Backgrounds
  content = content.replace(/bg-black-900/g, 'bg-white');
  content = content.replace(/bg-black-800/g, 'bg-gray-50');
  content = content.replace(/from-black-900/g, 'from-white');
  content = content.replace(/via-black-900/g, 'via-white');
  
  // Text
  content = content.replace(/text-white/g, 'text-gray-900');
  content = content.replace(/text-gray-300/g, 'text-gray-700');
  content = content.replace(/text-gray-400/g, 'text-gray-600');
  content = content.replace(/text-black-900/g, 'text-white');
  
  // Borders
  content = content.replace(/border-white\/5/g, 'border-gray-100');
  content = content.replace(/border-white\/10/g, 'border-gray-200');
  content = content.replace(/border-white\/20/g, 'border-gray-300');
  content = content.replace(/border-white/g, 'border-gray-300');
  
  // Custom tweaks
  if (file.includes('WhatsAppButton.tsx')) {
    content = content.replace('bg-[#25D366] text-gray-900', 'bg-[#25D366] text-white');
  }

  // Home Hero Overlay
  if (file.includes('Home.tsx')) {
    content = content.replace('from-white/60 via-white/40 to-white', 'from-white/90 via-white/70 to-white');
    content = content.replace('from-white via-white/40 to-transparent', 'from-white via-white/80 to-transparent');
  }

  fs.writeFileSync(file, content);
});

// Fix index.css
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/bg-black-900/g, 'bg-white').replace(/text-white/g, 'text-gray-900');
fs.writeFileSync('src/index.css', css);

console.log('Done mapping theme!');
