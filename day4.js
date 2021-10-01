const studentList=[];
const Student_list = document.querySelector("#studentlist");
document.querySelector("#click_button").addEventListener("click",studentsToAdd);
function studentsToAdd(){
    const Student_name= document.querySelector("#name").value;
    const Student_mail= document.querySelector("#mailid").value;
    const Student_contact= document.querySelector("#phnnum").value;
    if((Student_name=="")||(Student_mail=="")||(Student_contact=="")){
        return;
    }
    else{
        const studentObject={
            name:Student_name,
            mail:Student_mail,
            contactnumber:Student_contact
        };
        console.log(studentObject)
        studentList.unshift(studentObject);
        console.log(studentList)
        displaystudents();
    }
}
function displaystudents(){
    studentList.forEach((item)=>{
        const student = document.createElement("li");
        student.innerHTML="NAME= "+item.name+"<br>MAIL= "+item.mail+"<br> CONTACT="+item.contactnumber;
        Student_list.appendChild(student);
        console.log(student)
    })
} 