/*
use Strict
console.log(document.URL);
console.log(document.domain);
console.log(document.body);
console.log(document.head);
document.title = "My new Title"

console.log(document.all);
console.log(document.all[5]);

//return a HTML collectiuon looks like an array
console.log(document.links);
console.log(document.forms);
console.log(document.images.length);
document.write('This is from write in script');


//selectors of Dom elements 

let header = document.getElementById('main-header');
console.log(header);

//returns HTML collection
let headerCont = document.getElementsByClassName('header-container');
console.log(headerCont);

let divs = document.getElementsByTagName('div');
console.log(divs);


//selects the first match and returns a single element
let divsUsingquery = document.querySelector('div');
console.log(divsUsingquery);

let selectusingClassName = document.querySelector('.test');
console.log(selectusingClassName);

let selctUsingId = document.querySelector('#header-title');
console.log(selctUsingId);

let alldiv = document.querySelectorAll('div');
console.log(alldiv);


let cardandtest = document.querySelector('div.card.test');


console.log(cardandtest);

//attribute selector
let input  = document.querySelector('input[type="password"]')
console.log(input);



//sort
// let arr = [7,2,9,4,8,45,23,11];
// console.log(arr.sort((x,y)=>y-x));

let selectPara = document.querySelector('p.header-container');
console.log(selectPara);
console.log(selectPara.innerText);


selectPara.innerText = selectPara.innerText +' added Content';

console.log(selectPara.innerText);

let selectedDiv  = document.querySelector('div')
selectedDiv.innerHTML = '<h2>AV</h2>'

let listItems = document.getElementsByClassName('product')


let productList = ['shirt', 'mobile', 'earphone', 'TV'];

for(let i = 0; i<listItems.length;i++){
    listItems[i].innerText = productList[i] +(i+1);
}

let div = document.querySelector('div.card.content.that');

// let footer = document.createTextNode('copyright all right reserved');

// div.appendChild(footer);

let footerEle = document.createElement('p');

footerEle.innerText = 'copyright all right reserved'

footerEle.className = 'myclass';
footerEle.id = 'myid';

footerEle.style.background = 'red';
footerEle.style.color = 'red';

div.appendChild(footerEle);





let thead  = document.createElement('thead');
thead.className = 'table-header'

let tbody  = document.createElement('tbody');

console.log(myTable);

myTable.appendChild(thead);
myTable.appendChild(tbody);


console.log(body);







//create table tag
let myTable = document.createElement('table'); 

console.log();









//create table header
let theadhead = document.createElement('thead');

// create table row
let theadRow= document.createElement('tr');

//function to create th and add data
function createThandAddData(data){
    let theadhead = document.createElement('th');
    theadhead.innerText = data
    return theadhead
}

