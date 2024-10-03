let num=0;
const clockId = setInterval(()=>{
    num++;

    if(num>=5){
        clearInterval(clockId)
    }

    console.log(clockId, num)
},1000)