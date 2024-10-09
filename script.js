function loadMarkdown(file) {
    fetch(file)
        .then(response => response.text())
        .then(text => {
            const contentElement = document.getElementById('markdown-content');
            contentElement.innerHTML = marked.parse(text);
        })
        .catch(error => {
            console.error('Error loading markdown file:', error);
            document.getElementById('markdown-content').innerHTML = "<p>Error loading file.</p>";
        });
}
