//elements selector
// 1.single element  
// 2.multiline element 


// 1.single element - only first element name will be fetched

// let element= document.getElementById('first')
// // element=element.childNodes
// // element=element.parentNode
// element.style.color="red"
// element.innerText=" child 5"
// element.innerHTML="<b>child</b>"


// console.log(element)


// let sel=document.querySelector("#first")
//  //sel=document.querySelector(".child")
// //sel=document.querySelector("h1")
// sel.style.color="red"
// console.log(sel)



// 2.multiline element 


// let a=document.getElementsByClassName("container")
// console.log(a[0].getElementsByClassName('child'))
let b=document.getElementsByTagName("div")
//  console.log(b)
//  for (let i = 0;  i < b.length; i++) {
//      let element = b[i];
//      console.log(element)
//     element.style.color="red"
//  }
     
 


// Array.from(b).forEach((element) => {
//  element.style.color="red"

// });


