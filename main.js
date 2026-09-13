const inputEl = document.querySelector("#bookmarkInput");
const button = document.querySelector("#addBookmarkBtn");
const list = document.querySelector("#bookmarkList");

const bookmarks = [];

const createBookmarksMarkup = (bookmarks) => {
  return bookmarks
    .map(
      (bookmark, index) =>
        `<li data-id="${index}">
          <a href="${bookmark}" target="_blank">${bookmark}</a>
          <button class="delete-btn">X</button>
        </li>`,
    )
    .join("");
};

const addBookmarksToHtml = () => {
  list.innerHTML = createBookmarksMarkup(bookmarks);
};

const addBookmarks = () => {
  const url = inputEl.value.trim();
  if (!url) {
    alert("Введи URL");
    return;
  }
  bookmarks.push(url);
  addBookmarksToHtml();
  inputEl.value = "";
};

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