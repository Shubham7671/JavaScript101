let ele= document.createElement('li')



// //add a class name  

ele.className="childu1"
ele.id=" list"
ele.textContent="f"

// // adding a list into ul 

ul=document.querySelector('ul')
ul.appendChild(ele)
console.log(ul)

// // replacing elements
// let ele2= document.createElement('h4')

// ele2.className="head"
// ele2.id="heading"
// ele2.textContent="created heading"

// ul=document.querySelector('h1')
// ul.appendChild(ele2)
// console.log(ul)

//  ele2.replaceWith(ele) 

 
let t=document.createElement('a')
 t.className='tag'
 t.id='anchor'
t.textContent=' click here'
t.setAttribute('href',"https://www.asus.com/ASUS-Software/ ")

let a=document.querySelector('li.childu2').appendChild(t)

ele.replaceWith(a)

