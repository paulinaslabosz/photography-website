const endpoint = "https://api.imgflip.com/get_memes";
let data;
let meme;

fetch(endpoint)
  .then((res) => res.json())
  .then((res) => {
    data = res.data.memes;
    meme = data[Math.floor(Math.random() * data.length)];

    const random = document.querySelector(".box");
    const template = `<img class="box__image" src="${meme.url}" alt="Random picture of meme">`;

    random.innerHTML = template;
  })
  .catch((err) => console.log(err));
