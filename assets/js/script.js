const result = document.getElementById("result");

fetch("https://jsonplaceholder.typicode.com/albums/")
  .then((response) => response.json())

  .then((response) => {
    // for (let i = 0; i < 10; i++) {
    //   const li = document.createElement("li");
    //   li.appendChild(document.createTextNode(response[i].id));
    //   li.setAttribute("id", response[i].id);
    //   li.setAttribute("title", response[i].title);
    //   result.appendChild(li);
    // }

    response.slice(0, 10).map((item) => {
      let { id, title } = item;
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(id));
      li.setAttribute("id", id);
      li.setAttribute("title", title);
      li.addEventListener("click", () => changeDataIfClicked(li));
      result.appendChild(li);
    });

    // const tagLi = document.querySelectorAll("li");

    // tagLi.forEach((element) => {
    //   element.addEventListener("click", () => changeDataIfClicked(element));
    // });

    let changeDataIfClicked = (element) => {
      element.innerHTML == element.id
        ? (element.innerHTML = element.title)
        : (element.innerHTML = element.id);
    };
  });
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  result.classList.toggle("highlight");
  // const tagLi = document.querySelectorAll("li");
  // for (let i = 0; i < tagLi.length; i++) {
  //   if (i % 2 != 0) {
  //     changeColorIfChecked(tagLi[i]);
  //   }
  // }
});

let changeColorIfChecked = (element) => {
  element.classList.toggle("active");
};
