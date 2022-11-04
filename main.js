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

var alphabets=["a","b","c","d"];

alphabets.map((alphabet,index)=>{
    console.log(alphabet);
})

var students=["Shravani","Yash","Dhiraj","Janki"];

var stud=students.map((student,index)=>{
    console.log(student + " is a science student");
    if(index%2==0){
        console.log(student + " is a brilliant student");
    }
    else{
        console.log(student + " is a avrage student");
    }
})
