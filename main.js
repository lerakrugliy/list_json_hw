const inputEl = document.querySelector("#bookmarkInput");
const button = document.querySelector("#addBookmarkBtn");
const list = document.querySelector("#bookmarkList");

const bookmarks = [];

const addBookmarksToHtml = () => {
  inputEl.value = "";

  list.innerHTML = "";

  for (let i = 0; i < bookmarks.length; i += 1) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = bookmarks[i];
    link.textContent = bookmarks[i];


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete");

    deleteButton.addEventListener("click", () => {
      bookmarks.splice(i, 1);
      addBookmarksToHtml();
    });

    item.append(link, deleteButton);
    list.appendChild(item);
  }
};

const addBookmarks = () => {
  const url = inputEl.value.trim();
  if (!url) {
    alert("Введи URL");
    return;
  }
  bookmarks.push(url);
  addBookmarksToHtml();
};

button.addEventListener("click", addBookmarks);
