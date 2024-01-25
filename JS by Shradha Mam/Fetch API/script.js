const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn")

const getFacts = async () => {
    console.log("Getting data");
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.length < 5) {
        console.error("The data array has less than five elements");
        return;
      }
      for (let i = 0; i < 5; i++) {
        factPara.innerHTML = `${factPara.innerHTML}<p>${i+1}. ${data[i].text}</p>`;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

function getFacts_byPromise() {
    fetch(URL)
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[2].text;
    })
}

btn.addEventListener("click", getFacts_byPromise())
btn.addEventListener('click', getFacts);