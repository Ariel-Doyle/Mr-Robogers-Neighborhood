# _Mr. Roboger's Neighborhood_

#### By _**Ariel Doyle**_

#### _This is a simple HTML webpage as practice for writing code, working with HTML, CSS, Web APIs, and JavaScript looping functions._

## Technologies Used

- _HTML_
- _VS Code Editor_
- _CSS_
- _JavaScript_
- _Web APIs_

## Description

_This webpage is designed to accept user input of a single whole number value via a number field in order to return a list of an array of numbers counting up to the inputted number, while also replacing any numbers containing 3 with "Won't you be my neighbor?", numbers containing 2 with "Boop!", and numbers containing 1 with "Beep!", in that hierarchy._

_This is a simple HTML webpage as practice for writing code in line with lessons taught by [Epicodus](https://www.epicodus.com). This webpage can serve as the framework for starting your own code writing journey as regards working with basic JavaScript functions and Web APIs, as well as HTML and CSS. If you would like to follow in these lessons, please visit [Learn How To Program](https://www.learnhowtoprogram.com/introduction-to-programming-part-time)._

## Setup/Installation Requirements

- _Access [Github](https://github.com/)_
- _Clone this repository (https://github.com/Ariel-Doyle/Mr-Robogers-Neighborhood.git) to your desktop_
- _Navigate to the top level of the directory_
- _open **index.html** in your browser_

## Known Bugs

- _Currently, two clicks are required for the "Show Me The Numbers!" button to submit the form field._

## Recognition

_Photo by <a href="https://unsplash.com/@rocknrollmonkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rock'n Roll Monkey</a> on <a href="https://unsplash.com/s/photos/friendly-robot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>_

## License

_[MIT](https://choosealicense.com/licenses/mit/)_

Copyright (c) _2022_ _Ariel Doyle_ 
  

## TDD testing implemented:

_Describe countToValue():_

>Test: "It should accept a positive numerical value and return all the numbers between 0 and the input number."  
Code: countToValue(5);  
Expected Output: [0, 1, 2, 3, 4, 5] 

>Test: "It should accept negative values and count down all the numbers between 0 and the negative input."  
Code: countToValue(-3);  
Expected Output: [-3, -2, -1, 0] 

>Test: "It should return 0 if 0 is the input value."  
Code: countToValue(0);  
Expected Output: [0]

>Test: "It should return a boolean of false if the input is NaN."  
Code: countToValue("dog");  
Expected Output: false

>Test: "It should return a boolean of false if the input is empty."  
Code: countToValue();  
Expected Output: false

_Describe: robogerIt()_

>Test: "It should accept input of a number and return a string."  
Code: robogerIt(5);  
Expected Output: "5" 

>Test: "It should accept input of a number and change any string object including "3" with "Won't you be my neighbor?"  
Code: robogerIt(13);  
Expected Output: "Won't you be my neighbor?" 

>Test: "It should accept input of a number and change any string object including "2" with "Boop."  
Code: robogerIt(211);  
Expected Output: "Boop"  

>Test: "It should accept input of a number and change any string object including "1" with "Beep."  
Code: robogerIt(10);  
Expected Output: "Beep"  

>Test: "It should accept input of an array and return any string object not including "1," "2," "3," as the original number value of the object."  
Code:   
let arrayOfNum = [5, 6, 7, 10, 12, 13];  
arrayOfNum.map(robogerIt);  
Expected Output: [5, 6, 7, "Beep", "Boop", "Won't you be my neighbor?"]