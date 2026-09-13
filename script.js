
button.addEventListener("click", addBookmarks);

list.addEventListener("click", event => {
  if (!event.target.classList.contains("delete-btn")) {
    return;
  }
  const item = event.target.parentElement;
  const id = Number(item.dataset.id);
  bookmarks.splice(id, 1);
  addBookmarksToHtml();
});