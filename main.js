const endpoint = "https://api.imgflip.com/get_memes";
let data;

fetch(endpoint)
  .then((res) => res.json())
  .then((res) => {
    data = res.data.memes;

 

    const sth = data.map((el) => {
        const container = document.querySelector('.container');
        const template = `<div class="picture"><img class="picture__element" src="${el.url}" ="Picture of meme">
        <p class="picture__name">${el.name}</p></div>`
        container.innerHTML += template
        console.log(el.name)
    });
  
  })
  .catch((err) => console.log(err));
