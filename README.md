# PasswordCreation

## In this project, my assignment was to create the correct logic in javascript code to give the user choices to generate a random password. 


### First: 
I created arrays for each character on the keyboard, and categorized them.


### Second: 
I created various prompts in the generatePassword() function to store the user's choices. This was done by assigning variables for each confirm prompt. 


### Third: 
After the user chooses all the options to include in his/her password (upper, Case, number, length), I generated if() and else if() statements to funnel out each possibility of chhoices that the user can potentially select. It was a process of elimnation technique. 


### Lastly: 
I created a var = character to insert a Math.floor(Math.Ranodm) to generate the randomness of the arrays. The result of var = character was then pushed into a passwordArray. The passwordArray variable was then joined together into a final password string by using the  .join  method.
