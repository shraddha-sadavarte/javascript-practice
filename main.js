const arr=["Aniket","Sakshi","Mansi","Pranali"];

for(let i=0; i<=arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(()=>{
    console.log("A");
})

var student=["Sakshi","Divya","Mansi","Pranali"];

student.forEach((item,index)=>{
    console.log("Sending email to "+ item +  " at index " + index);
})