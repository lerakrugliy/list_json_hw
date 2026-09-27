const inputEl = document.querySelector("#bookmarkInput");
const button = document.querySelector("#addBookmarkBtn");
const list = document.querySelector("#bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
if (!bookmarks) {
  bookmarks = [];
}

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
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
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
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  addBookmarksToHtml();
});

addBookmarksToHtml();