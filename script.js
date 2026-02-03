let articles = [];

/* Page switching */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

/* Create article */
function createArticle() {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const image = imageInput.value.trim();

  if (!title || !content) return;

  articles.push({ title, content, image });

  titleInput.value = '';
  contentInput.value = '';
  imageInput.value = '';

  renderArticles();
}

/* Render articles */
function renderArticles() {
  homeArticles.innerHTML = '';
  allArticles.innerHTML = '';
  userArticles.innerHTML = '';

  articles.forEach((a, index) => {
    const div = document.createElement('div');
    div.className = 'article';

    div.innerHTML = `
      <h3>${a.title}</h3>
      <p>${a.content}</p>
      ${a.image ? `<img src="${a.image}">` : ''}
      <button class="delete" onclick="deleteArticle(${index})">Delete</button>
    `;

    homeArticles.appendChild(div.cloneNode(true));
    allArticles.appendChild(div.cloneNode(true));
    userArticles.appendChild(div.cloneNode(true));
  });
}

/* Delete article */
function deleteArticle(index) {
  articles.splice(index, 1);
  renderArticles();
}

/* Dark / Light toggle */
themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
};
