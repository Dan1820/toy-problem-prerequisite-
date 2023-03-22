# toy-problem-prerequisite-
# introduction

alert. shows a message. prompt. shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null .
prompt() is a built-in function that is used to display a dialog box that asks the user to input some text. This pop-up box will appear and takes user input before entering the web page. 
# task 1
the aim of this is to give a prompt on the marks that a student has attained and in return the marks will be graded. The user is prompted to enter the marks range from 0-100 marks. 

The switch statement is used to return true for the mark that has been entered and in return the mark is evaluated to give an appropriate alert depending on the marks.
i.e
     marks<=100 && marks>79:
            alert('A')
            
        marks<=79 && marks>=60:
            Alert =('B')
            
        marks<=59 && marks>=49:
            alert('c')
    
        marks<49 && marks>=40:
            alert('D')

        marks<40 && marks>=0:
            alert('E')
            
        default:
            alert('Invalid marks') 
# js declarations
 function studentGrade has been declared to cover the whole switch statement.
 variable result is declared so as to be prompted to the user.  
# html 
the htm nest the js file under the script tags. this ensures that the js file is able to be accessed through the browser

# task 2
this is a js program that use if else statement to execute the speed in which the driver is driving the car. 
the condition of a speed of 70km/hr is the initial and as the speed increments by 5km/hr the driver is awarded a demerit of 1 upto a demerit of 12 thats when the program executed and tells te driver that the licence has been suspended.
# declaration 
constant speed of 70km/hr is first declared and also the demerit 5 which is a constant value and represent one pont each
Math.floor() is used to calculate the demerit points as the speed increase.

the if statement is used to the driver speed and print out the demerit points of the driver.
# task 3
this is a program that is used to calculate the individual gross salary,payee,nhif deduction,nssf deduction,gross salary and net saary.
# declarations 
the declaration of the array of taxrate contains the taxableAmount and the rates that they are being taxed.
nhifDeduction and nssfDeduction have been declared so as to calculate the grossPay after these deduction have been done
# output
 this should give us a the payee,netSalary,GrossPay, nssfDeduction and nhifDeduction 

