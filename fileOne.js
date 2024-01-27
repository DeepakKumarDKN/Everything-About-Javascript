// function getData(){
//     var name = "deepak"
    
//     function getName(){
//         console.log(name)
//     }
//     getName()
// }
// console.log(name)
// getData()
// function getData(){
//     function getName(){
//         let name = "deepak"
//         const title = "kumar"
//     }
    
//     console.log(title)
//     getName()
// }

// getData()



// let number = BigInt(12345678901234567899)
// console.log(typeof number)

let day = 2;

// if(day===0){
//     console.log('sunday')
// }else if(day === 1){
//     console.log('monday')
// }else if(day === 2){
//     console.log('tuesday')
// }else if(day === 3){
//     console.log('wednesday')
// }else if(day === 4){
//     console.log('thrusday')
// }else if(day === 5){
//     console.log('friday')
// }else if(day === 6){
//     console.log('saturday')
// }else{
//     console.log('Invalid Day')
// }

// day = 5; 
// switch(day){
//     case 0:
//         console.log('Sunday')
//         break;
//     case 1:
//         console.log('Momday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday')
//         break;
//     case 4:
//         console.log('Thrusday')
//         break;
//     case 5:
//         console.log('Friday')
//         break;
//     case 6:
//         console.log('Saturday')
//         break;
//     default:
//         console.log('Invalid Day')

// }

// for(let i=0; i<=5; i++){
//     if(i === 3){
//         break;
//     }else{
//         console.log(i)
//     }
// }

// let cityName = ['mumbai','delhi','hyderabad','chennai','mumbai',12,null,undefined]
// cityName[2] = "Hyderabad"
// console.log(cityName)


// let numbers = [10,20,30,40]
// numbers.shift()
// console.log(numbers)

// let num1 = 1
// let num2 = num1 
// num1++

// console.log(num1)
// console.log(num2)

// let arrayOne = [10,20]
// let arrayTwo = arrayOne

// arrayOne.push(30)

// console.log(arrayOne)
// console.log(arrayTwo)

// let arrayOne = [10,20,30,40]
// let arrayTwo = []
// let arrayTwo = [...arrayOne]

// arrayOne.push(5)
// console.log(arrayOne)
// console.log(arrayTwo)

// console.log(arrayOne === arrayTwo)

// for(let i=0; i<arrayOne.length; i++){
//     arrayTwo.push(arrayOne[i])
// }
// console.log(arrayTwo)

// for(let i in arrayOne){
//     console.log(arrayOne[i])
// }

// const myArray = ['value1','value2']
// let [myvar1, myvar2] = myArray;

// myvar1 = "value changed"

// console.log(myvar1, myvar2)


// const numbers = [10,20,30,40,50,60]
// const [valueOne, ...valueTwo] = numbers
// console.log(valueOne)
// console.log(valueTwo)


// const data = {
//     name:'deepak', 
//     middlename:'kumar',
//     surname:'nayak',
//     hobbies : ['reading','coding','sleeping']
// }
// console.log(data.hobbies)

// data.gender = "male"
// data[' location'] = "India"

// console.log(data)

// const arrayOne = [10,20,30,40]
// const arrayTwo = [50,60,70,80]

// const result = [...arrayOne, ...arrayTwo]
// console.log(result)

// const data = {
//     name:'deepak',
//     middlename:'kumar'
// }

// const data2 = {
//     name:'rahul',
//      middlename: 'krishna'
// }

// const result = {data, ...data2}
// console.log(result)


const data = {..."12344567890"}
console.log(data)