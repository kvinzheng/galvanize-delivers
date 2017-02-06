let choiceClass = document.getElementsByClassName("menuChoice");
let tbody = document.querySelector("tbody");
var subtotal = 0;

for(let i = 0; i < choiceClass.length; i++){
  choiceClass[i].addEventListener("click", appendTable);
}

function appendTable(){
  let row = document.createElement("tr");
  let item = document.createElement("td");
  let price = document.createElement("td");
  item.className = "left-align";
  price.className = "right-align";

  console.log(this);
  var foodname = this.getAttribute('name');
  var foodprice = this.getAttribute('data-value');
  console.log(foodname);
  console.log(foodprice);
  var foodpricetag = '$' + foodprice;

  item.innerText = foodname;
  price.innerText = foodpricetag;
  row.appendChild(item);
  row.appendChild(price);
  tbody.appendChild(row);

  addition(parseFloat(foodpricetag.substring(1)));
  return tbody;
}

var subtotal = document.getElementById("subtotal");
var totaltax = document.getElementById("tax");
var totalmoney = document.getElementById("total");

var sub = 0 ;
var tax = 0;
var total = 0;

function addition(foodprice){
  sub = sub + foodprice;
  tax = tax + foodprice * 0.09;
  total = sub + tax;
  totaltax.innerText = "$"+tax.toFixed(2) ;
  subtotal.innerText = "$"+sub.toFixed(2);
  totalmoney.innerText = "$"+total.toFixed(2);
}

var button = document.getElementById("hit");
button.addEventListener("click",function(){
  alert("Thanks for placing your order");
});
