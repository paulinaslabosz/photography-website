const endpoint = "https://api.imgflip.com/get_memes";
let data;

fetch(endpoint)
  .then((res) => res.json())
  .then((res) => {
    data = res.data.memes;

 

    const sth = data.map((el) => {
        const container = document.querySelector('.pictures');
        const template = `<img class="picture__image" src="${el.url}" alt="Picture of meme">
        <p class="pictures__name">${el.name}</p>`
        container.innerHTML += template
        console.log(el.name)
    });
  
  })
  .catch((err) => console.log(err));
