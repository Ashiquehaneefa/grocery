var count =1;
var shoppingContainer = document.getElementById("shopping-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", button);

function button () {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "list.json");
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
}




function renderHTML(data) {
  var htmlString = "";
  htmlString += `
  <table class="table table-dark table-responsive">
  <thead>
    <tr>
      <th scope="col">Sl. No. </th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Unit</th>
      <th scope="col">Department</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  </table>`

  for (i=0; i < data.length; i++){
   
   
    htmlString += `
   <table class="table table-hover table-light table-bordered table-responsive">
  
  <tbody>
    <tr>
    <th scope="row"> ${data[i].slno} </th>
    <td>${data[i].name}</td>
    <td>${data[i].quantity}</td>
    <td>${data[i].unit}</td>
    <td>${data[i].department}</td>
    <td>${data[i].notes}</td>

    </tr>
    </tbody>
</table>`
  }

  shoppingContainer.insertAdjacentHTML('beforeend', htmlString);
  document.getElementById("btn").disabled = true;
}

