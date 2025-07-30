let count = 1;
let newTaskBtn = document.querySelector(".task");
let taskBody = document.getElementById("taskBody");
let button = document.querySelector("#f-submit");
newTaskBtn.addEventListener("click", () => {
  document.querySelector("#form").style.display = "block";

});

button.addEventListener("click", () => {
  let name = document.querySelector("#name");
  const dateValue = document.querySelector("#date").value;
  const status = document.querySelector('input[name="status"]:checked');

  if (name && date && status) {
    const tr = document.createElement("tr");
    tr.classList.add("border-bottom");
    let tb = document.querySelector(".tb");

    const nameTd = document.createElement("td");
    nameTd.innerText = name.value;
    nameTd.classList.add("text-break", "text-wrap", "w-50", "border-end");
    let number = document.createElement("td");
    number.classList.add("border-end");

    const dateTd = document.createElement("td");
    dateTd.classList.add("border-end");
    dateTd.innerText = date.value;
    number.innerText = count;
    const statusTd = document.createElement("td");
    statusTd.innerText = status.value;
    statusTd.classList.add("border-end");

    // Append cells to row
    tr.appendChild(number);
    tr.appendChild(nameTd);
    tr.appendChild(dateTd);
    tr.appendChild(statusTd);
    count++;
    tb.appendChild(tr);

    name.value = "";
    date.value = "";
    status.checked = false;
    alert("task successfully added");
  } else {
    alert("All fields are required!");
  }
});
