const studentList=[];
const Student_list = document.querySelector("#studentlist");
document.querySelector("#click_button").addEventListener("click",studentsToAdd);
function studentsToAdd()
{
    const Student_name= document.querySelector("#name").value;
    const Student_mail= document.querySelector("#mailid").value;
    const Student_contact= document.querySelector("#num").value;
    if((Student_name=="")||(Student_mail=="")||(Student_contact==""))
    {
    }
    else{
        const studentObject={
            name:Student_name,
            mail:Student_mail,
            contactnumber:Student_contact
        };
        console.log(studentObject)
        studentList.unshift(studentObject);
        Student_list.innerHTML = ""; 
        console.log(studentList)
        displaystudents();
    }
}
displaystudents();
function displaystudents(){
    Student_list.innerHTML = "";
    document.querySelector("#name").value = "";
    document.querySelector("#num").value = "";
    document.querySelector("#mailid").value = "";  
    studentList.forEach((item)=>{
        const student = document.createElement("li");
        student.innerHTML="NAME= "+item.name+"<br>MAIL= "+item.mail+"<br> CONTACT="+item.contactnumber;
        Student_list.appendChild(student);
        console.log(student)
    })
} 