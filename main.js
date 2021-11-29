const endpoint = "https://api.imgflip.com/get_memes";


let data;
const container = document.querySelector(".container");
const paginationElement = document.querySelector(".pagenumbers");

fetch(endpoint)
  .then((res) => res.json())
  .then((res) => {
    data = res.data.memes;

    let currentPage = 1;
    let rows = 20;

    function displayList(items, wrapper, rowsPerPage, page) {
      wrapper.innerHTML = "";
      page--;

      let start = rowsPerPage * page;
      let end = start + rowsPerPage;
      let paginatedItems = items.slice(start, end);

      for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];

        const template = `<div class="picture"><img class="picture__element" src="${item.url}" ="Picture of meme">
         <p class="picture__name">${item.name}</p><div class="icons">
         <a href="${item.url}" target="_blank" title="Open in a new tab"><svg class="icons__open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
         <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></a>
        
         </svg><svg class="icons__star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
         </div>
         </div>`;
        container.innerHTML += template;
      }
    }

    function setupPagination(items, wrapper, rowsPerPage) {
      wrapper.innerHTML = "";

      let pageCount = Math.ceil(items.length / rowsPerPage);
      for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
      }
    }

    function paginationButton(page, items) {

      
      let button = document.createElement("button");
      button.innerText = page;

      if (currentPage == page) button.classList.add("active");

      button.addEventListener("click", function () {
        currentPage = page;
        displayList(items, container, rows, currentPage);

        let currentBtn = document.querySelector(".pagenumbers button.active");
        currentBtn.classList.remove("active");

        button.classList.add("active");
      });

      return button;
    }

    displayList(data, container, rows, currentPage);
    setupPagination(data, paginationElement, rows);
  })
  .catch((err) => console.log(err));
