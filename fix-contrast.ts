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

  // Change gold-400 text to gold-600 for better contrast on light background
  content = content.replace(/text-gold-400/g, 'text-gold-600');
  
  // Make borders stronger
  content = content.replace(/border-lavender-200/g, 'border-lavender-300');
  content = content.replace(/border-gold-400\/30/g, 'border-gold-600/50');
  content = content.replace(/hover:border-gold-400/g, 'hover:border-gold-600');
  
  // Darken text for readability
  content = content.replace(/text-lavender-700/g, 'text-lavender-800');
  
  // Fix gradients overlays on images that are too light to show text
  content = content.replace(/from-lavender-100 via-lavender-50\/80 to-transparent/g, 'from-lavender-100/95 via-lavender-100/80 to-transparent');
  content = content.replace(/from-lavender-100 via-lavender-50\/90 to-transparent/g, 'from-lavender-100/95 via-lavender-100/90 to-transparent');

  // Any gold-gradient-text on light backgrounds needs to be adjusted, let's make it gold-gradient-text-dark
  // But hero is dark, so hero uses gold-gradient-text. Let's find "gold-gradient-text" and if it's in About or other light places...
  // Or we just change gold-gradient-text everywhere except Hero to use darker colors.
  if (!file.includes('Home.tsx')) {
    content = content.replace(/gold-gradient-text/g, 'gold-gradient-text-dark');
  } else {
    // In Home.tsx, only the hero one should remain gold-gradient-text.
    // The others (if any) could be dark. But in Home.tsx we only have one gold-gradient-text in the Hero.
  }

  // Update specific buttons / links that used gold-400 for text
  content = content.replace(/hover:text-gold-400/g, 'hover:text-gold-600');

  // Update backgrounds that used gold-400
  // content = content.replace(/bg-gold-400/g, 'bg-gold-600'); // Actually bg-gold-400 with text-white is bad contrast too (white on #D4AF37 is 1.7:1).
  content = content.replace(/bg-gold-400/g, 'bg-gold-600');
  content = content.replace(/bg-gold-300/g, 'bg-gold-500');

  fs.writeFileSync(file, content);
});

// Update index.css to make lavender darks darker and add gold-gradient-text-dark
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/--color-lavender-700: #744199;/g, '--color-lavender-700: #562e78;');
css = css.replace(/--color-lavender-800: #5f367e;/g, '--color-lavender-800: #421e60;');
css = css.replace(/--color-lavender-900: #4c2d66;/g, '--color-lavender-900: #29103f;');

// Make gold-600 slightly darker for better contrast
css = css.replace(/--color-gold-600: #93761e;/g, '--color-gold-600: #7a6015;');

if (!css.includes('.gold-gradient-text-dark')) {
  css += `
.gold-gradient-text-dark {
  background: linear-gradient(to right, #7a6015, #93761e, #7a6015);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
`;
}

fs.writeFileSync('src/index.css', css);

console.log('Contrast enhanced!');
