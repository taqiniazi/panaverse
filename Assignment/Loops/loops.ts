// const userNames = ["Taqi","Raza","Khan"]
const userNames = [
    {name:"Taqi", role : "Admin"},
    {name:"Raza", role : "General"},
    {name:"Khan", role : "General"}
]
for(let i=0; i<userNames.length; i++){
    if(userNames[i].role === "Admin"){
        console.log(`Welcome Super Admin ${userNames[i].name}`)  
    }else{
        console.log(`Welcome ${userNames[i].name}`) 
    }
}