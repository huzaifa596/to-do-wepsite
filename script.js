
let count=1;
let newTaskBtn = document.querySelector(".task");
let taskBody = document.getElementById("taskBody");
let button =document.querySelector("#f-submit");
newTaskBtn.addEventListener("click", () => {
    document.querySelector("#form").style.display="block";
//   const name = prompt("Enter name of task:");
//   const date = prompt("Enter date of task:");
//   const status = prompt("Enter status:");
});


button.addEventListener('click',()=>
{ 
    alert("yes");

  let name=document.querySelector("#name");
   const dateValue = document.querySelector("#date").value;
   const status = document.querySelector('input[name="status"]:checked');

      if (name && date && status ) {
    

    const tr = document.createElement("tr");
   let tb=document.querySelector(".tb");
    const nameTd = document.createElement("td");
    nameTd.innerText = name.value;
     let number=document.createElement("td");
    const dateTd = document.createElement("td");
    dateTd.innerText = date.value;
   number.innerText=count;
    const statusTd = document.createElement("td");
    statusTd.innerText = status.value;
     
    // Append cells to row
    tr.appendChild(number);
    tr.appendChild(nameTd);
    tr.appendChild(dateTd);
    tr.appendChild(statusTd);
count++;
    tb.appendChild(tr);

    name.value="";
    date.value="";
    status.checked=false;
  } else {
    // alert("All fields are required!");
  }
})