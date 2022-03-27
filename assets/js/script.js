fetch("https://jsonplaceholder.typicode.com/albums/")
  .then(function (response) {
    return response.json();
  })

  .then((response) => {
    const result = document.getElementById("result");

    for (let i = 0; i < 10; i++) {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(response[i].id));
      li.setAttribute("id", response[i].id);
      li.setAttribute("title", response[i].title);
      result.appendChild(li);
    }

    const tagLi = document.querySelectorAll("li");
    const checkbox = document.getElementById("checkbox");

    tagLi.forEach((element) => {
      element.addEventListener("click", () => changeDataIfClicked(element));
    });

    checkbox.addEventListener("change", () => {
      for (let i = 0; i < tagLi.length; i++) {
        if (i % 2 != 0) {
          changeColorIfChecked(tagLi[i]);
        }
      }
    });

    function changeDataIfClicked(element) {
      if (element.innerHTML == element.id) {
        element.innerHTML = element.title;
      } else {
        element.innerHTML = element.id;
      }
    }

    function changeColorIfChecked(element) {
      element.classList.toggle("active");
    }
  });
