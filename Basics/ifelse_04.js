//let age== 19;
// == only check value but === checks data type snd value both 

if (age == 19) {
    console.log('age is 19')
}
else if (age == 65) {
    console.log('age is 65')
}
else {
    console.log('age is not 19')
}

// != means condition is not equal
// && means both condition should be right
// or means one should be right

if (age != 19) {
    console.log('age is 19')
}
else if (age != 65) {
    console.log('age is 65')
}
else {
    console.log('age is not 19')
}

//tenary operator
let age = 45;
console.log(age == 45 ? 'age is 45' : 'age is not 45')


// switch case statements
//let age= 18

switch (age) {
    case 18:
        console.log('you are 18')

        break;
    case 19:
        console.log('you are 19')

        break;
    case 20:
        console.log('you are 20')

        break;
    case 21:
        console.log('you are 21')

        break;

    default:
        console.log("enter correct age")
        break;
}