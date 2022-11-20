Describe countToValue():

Test: "It should accept a positive numerical value and return all the numbers between 0 and the input number."
Code: counttoValue(5);
Expected Output: [0, 1, 2, 3, 4, 5] 

Test: "It should accept negative values and count down all the numbers between 0 and the negative input."
Code: countToValue(-3);
Expected Output: [-3, -2, -1, 0] 

Test: "It should return 0 if 0 is the input value."
Code: countToValue(0);
Expected Output: [0]

Test: "It should return a boolean of false if the input is NaN."
Code: countToValue("dog");
Expected Output: false

Test: "It should return a boolean of false if the input is empty."
Code: countToValue();
Expected Output: false

Describe: robogerIt()

Test: "It should accept input of a number and return a string."
Code: robogerIt(5);
Expected Output: "5" 

Test: "It should accept input of a number and change any string object including "3" with "Won't you be my neighbor?"
Code: robogerIt(13);
Expected Output: "Won't you be my neighbor?" 

Test: "It should accept input of a number and change any string object including "2" with "Boop."
Code: robogerIt(211);
Expected Output: "Boop"  

Test: "It should accept input of a number and change any string object including "1" with "Beep."
Code: robogerIt(10);
Expected Output: "Beep"  

Test: "It should accept input of an array and return any string object not including "1," "2," "3," as the original number value of the object."
Code: 
let arrayOfNum = [5, 6, 7, 10, 12, 13];
arrayOfNum.map(robogerIt);
Expected Output: [5, 6, 7, "Beep", "Boop", "Won't you be my neighbor?"]