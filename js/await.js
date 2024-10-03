// Basic async await function
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))  
}

// async-await using function
async function loadUserAsync(){
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await res.json();
    console.log(data);
}

// async -await using arrow function

const  loadUserArrow= async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await res.json();
    console.log(data)
}

const loadUserCatch= async()=>{
    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await res.json();
        console.log(data)
    }
    catch(error){

    }
        
}