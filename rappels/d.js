//destructuration



const arr =[10,20,30,40]

// const a = arr[0] 
// const b = arr[1] 

const [a,b,...c] = arr

console.log(a,b,c)


const add = (a,b)=>{
    return a+b
}

const arr2 = [2,add]


const [e,f] = arr2

console.log(e)

console.log(f(2,3))




const r = {name:"GAURAT",firstName:"Fred"}

const {name,firstName} = r

console.log(name,firstName)

// const r1 = r
const r1 = {...r,name:"DURAND",age:47}


console.log(r)
console.log(r1)

// r1.name="DURAND"

// console.log(r)
// console.log(r1)


// r1 = r

