//function to promt the user to imput marks
// let grade
// function studentMarks(){

// }
// const marks=59;
// let grade;

// function studentGrades(){
    function studentGrades(){
    let marks = prompt("please enter your marks");
    
    switch(true){
        case (marks<=100 && marks>79):
            alert('A')
            break;
        case (marks<=79 && marks>=60):
            Alert =('B')
            break;
        case (marks<=59 && marks>=49):
            alert('c')
            break;  
        case (marks<49 && marks>=40):
            alert('D')
            break;  
        case (marks<40 && marks>=0):
            alert('E')
            break;  
        default:
            alert('Invalid marks')      
    }
    
// console.log(marks)
    }
    console.log(studentGrades())