// TODO: Include packages needed for this application
const fs =require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    
    { 
      type: 'input',
      name: 'title',
      message:  "What is the name of your project? (This is required)",
      validate: (titleInput) => {
          if (titleInput) {
              return true;
          }
          else{
              console.log('To continue please enter the title of your project')
              return false;
              }
          }
      
        },

        { 
          type:'input',
          name: 'Description of your Project',
          message: 'Can you please write down what your project is',
          validate : ProjectInput => {
            if (ProjectInput) {
                return true;
            }
            else{
                console.log ('Please Write down what your Project is about');
                return false;
            

            }
          }
        },

           {
             type: 'input',
             name:  'installation',
             message: 'Can you give a Good Explanation on how to install and Please Provide a picture. Make a images folder in util',
             validate : installInput => {
                  if(installInput) {
                     return true;

                  }
                  else {
                      console.log ('Please write down how to install')
                      return false;

                  }

             }

           },

           
           {
               type:'input',
               name: 'Email',
               message: 'Can you provide your email address to display for contact information',
               validate: EmailInput  => {
                     if (EmailInput) {
                       return true;

                     }
                     else {
                        console.log ('Please Provide your email')
                        return false;

                     }
                 

               } 
           },
           {
            type:'input',
            name: 'Username',
            message: 'Please Provide your github Username',
            validate: UsernameInput  => {
                  if (UsernameInput) {
                    return true;

                  }
                  else {
                     console.log ('Please write down the username')
                     return false;

                  }
              

            } 
        },       {
            type:'list',
            name: 'license',
            message: 'Which license will you like to choose from the following',
            validate:   => {
                  if () {
                    return true;

                  }
                  else {
                     console.log ()
                     return false;

                  }
              

            } 
        },       {
            type:'',
            name: '',
            message: '',
            validate:   => {
                  if () {
                    return true;

                  }
                  else {
                     console.log ()
                     return false;

                  }
              

            } 
        },       {
            type:'',
            name: '',
            message: '',
            validate:   => {
                  if () {
                    return true;

                  }
                  else {
                     console.log ()
                     return false;

                  }
              

            } 
        },




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
return inquirer.prompt
  


}

// Function call to initialize app
init();

