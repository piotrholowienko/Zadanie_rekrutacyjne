const result = document.getElementById("result");

fetch("https://jsonplaceholder.typicode.com/albums/")
  .then((response) => response.json())

  .then((response) => {
    response.slice(0, 10).map((item) => {
      let { id, title } = item;
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(id));
      li.setAttribute("id", id);
      li.setAttribute("title", title);
      li.addEventListener("click", () => changeDataIfClicked(li));
      result.appendChild(li);
    });

    let changeDataIfClicked = (element) => {
      element.innerHTML == element.id
        ? (element.innerHTML = element.title)
        : (element.innerHTML = element.id);
    };
  });
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  result.classList.toggle("highlight");
});

let changeColorIfChecked = (element) => {
  element.classList.toggle("active");
};
