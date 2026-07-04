import fs from 'fs';
import path from 'path';

function walk(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const file_path = path.join(dir, file);
    const stat = fs.statSync(file_path);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file_path));
    } else { 
      if (file_path.endsWith('.tsx') || file_path.endsWith('.ts')) {
        results.push(file_path);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(/\bbg-gray-50\b/g, 'satin-silk-dark-bg');
  content = content.replace(/\bbg-white\b/g, 'satin-silk-bg');
  content = content.replace(/border-gray-100/g, 'border-lavender-200');
  content = content.replace(/border-gray-200/g, 'border-lavender-300');
  content = content.replace(/border-gray-300/g, 'border-lavender-300');
  
  content = content.replace(/text-gray-900/g, 'text-lavender-900');
  content = content.replace(/text-gray-700/g, 'text-lavender-800');
  content = content.replace(/text-gray-600/g, 'text-lavender-700');
  content = content.replace(/text-gray-500/g, 'text-lavender-600');
  content = content.replace(/text-gray-400/g, 'text-lavender-600');
  content = content.replace(/text-gray-300/g, 'text-lavender-500');

  // Specific gradients overlays
  content = content.replace(/from-white\/90/g, 'from-lavender-100/90');
  content = content.replace(/via-white\/70/g, 'via-lavender-50/70');
  content = content.replace(/from-white\b/g, 'from-lavender-100');
  content = content.replace(/to-white\b/g, 'to-lavender-50');
  content = content.replace(/via-white\/80/g, 'via-lavender-50/80');

  fs.writeFileSync(file, content);
});

console.log('Lavender Satin Silk Theme Applied!');
