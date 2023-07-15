document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    const num=document.getElementById("num").value
    try { 
        if(num == "") {
            throw "* is Empty";
        } 
        if(isNaN(num)){
            throw "* not a number";
        }
        if(num > 30){
            throw "* your age is too high";
        }   
        if(num < 18){
            throw "* your age is too low";
        }
        if(num >=18 || num <=30){
            throw "* you are selected";
        }  
      }
      catch(err) {
        document.getElementById("number").innerHTML=err
      }
})