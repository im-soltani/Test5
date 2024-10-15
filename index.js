   /* const myPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("la promesse a reussi"),5000)
    })

myPromise.then((reslt)=>console.log(reslt))
.catch((err)=>console.log(err))*/

async function fetchData(){ 
    try{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
   const data=await res.json()
   console.log(data)
    }
    catch(error){
console.log(error)
    }
}
fetchData()


