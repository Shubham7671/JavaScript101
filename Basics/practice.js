let a=document.getElementById('first')
let b=document.getElementsByClassName('container')
let h=document.getElementById('heading')
let c=document.getElementsByClassName('child')
let q=document.getElementsByClassName('child')

// h.innerHTML='<b> THIS IS HEADING </b>'
// h.innerText="MY NEW HEADING"
// h.style.color="blue"
// h.style.backgroundColor="cyan"

// c[0].style.color="red"
// c[1].style.color="red"
// c[0].innerText='i m new paragraph'
// c[1].innerHTML='<center><input type="button" value="submit"></center>'

// c[1].style.backgroundColor="cyan"

// b[0].style.backgroundColor="grey"
// let g = b[0].getElementsByClassName('child')
// console.log(g)

// let i=document.getElementsByTagName('input')
// i[1].style.backgroundColor="red"

// c=document.querySelector(".child")   // it not take index number
// c.style.color="red"

// g= document.body
// g.style.backgroundColor="red"
 
// g=document.querySelector(".container")
// g.style.color="red"

// for (let index = 0; index < c.length; index++) {
//     let z = c[index];
//     z.style.color="red"
//     z.innerText=" i am new paragraph"
    
// }

Array.from(q).forEach(e => {
    e.style.color="red"
    
});















