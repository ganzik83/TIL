// const includeJS = jsFilePath => {
//   const js = document.createElement("script");
//   js.type = "text/javascript";
//   js.src = jsFilePath;
//   document.body.appendChild(js);
// };
// includeJS("./key.js");

// 도큐먼트 연결
const button = document.querySelector("#js-button");
const inputArea = document.querySelector("#js-input");
const resultArea = document.querySelector("#result-area");

// API 요청 보내기
const searchAndPush = keyword => {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    const parsedData = JSON.parse(rawData); // 일반 데이터를 json 형식으로 받기
    console.log(parsedData);
    pushToDOM(parsedData);
  });
};

// DOM 그리기
const pushToDOM = parsedData => {
  resultArea.innerHTML = null;
  const dataSet = parsedData.data;
  console.log(dataSet);

  dataSet.forEach(element => {
    resultArea.innerHTML += `<img src=${element.images.fixed_height.url} alt=${element.title} />`;
  });
  // dataSet.forEach((imageData, i) => {
  //   console.log(imageData);
  //   const imageUrl = imageData.images.fixed_height.url;
  //   const alt = imageData.title;
  //   resultArea.innerHTML += `<img src=${element.images.original.url} alt=${element.title} />`;
  // });
};

button.addEventListener("click", () => {
  searchAndPush(inputArea.value);
});

button.addEventListener("keypress", e => {
  // 눌린 번호가 13이면 실행한다. 13은 엔터 버튼
  if (e.which === 13) {
    searchAndPush(inputArea.value);
  }
});
