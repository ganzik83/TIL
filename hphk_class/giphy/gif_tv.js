const contents = ["cat", "dog", "wow", "happy"]; // 기본 배열
const keyword = contents[Math.floor(Math.random() * contents.length)]; // 랜덤으로 받아오기 설정
console.log(keyword);

const searchTV = () => {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
  console.log(URL);

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    const parsedData = JSON.parse(rawData); // 일반 데이터를 json 형식으로 받기
    pushToTvDOM(parsedData);
  });

  const tvArea = document.querySelector("#js-tv-area");

  const pushToTvDOM = parsedData => {
    tvArea.innerHTML = null;
    const dataSet = parsedData.data;
    let i = 0;

    console.log(dataSet);

    setInterval(() => {
      const imageUrl = dataSet[i].images.fixed_height.url;
      tvArea.innerHTML = `<img src=${imageUrl} class="img-center"/>`;
      i++;
      if (i >= dataSet.length) i = 0;
    }, 3000);
  };
};
document.addEventListener("DOMContentLoaded", searchTV);
