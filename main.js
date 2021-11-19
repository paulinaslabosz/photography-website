const endpoint = "https://api.imgflip.com/get_memes";
let data;

fetch(endpoint)
  .then((res) => res.json())
  .then((res) => {
    data = res.data.memes;

    const sth = data.map((el) => {
      const container = document.querySelector(".container");
      const template = `<div class="picture"><img class="picture__element" src="${el.url}" ="Picture of meme">
        <p class="picture__name">${el.name}</p><div class="icons">
        <a href="${el.url}" target="_blank" title="Open in a new tab"><svg class="icons__open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></a>
        
        </svg><svg class="icons__star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
        </div>
        </div>`;
      container.innerHTML += template;
      console.log(el.name);
    });
  })
  .catch((err) => console.log(err));
