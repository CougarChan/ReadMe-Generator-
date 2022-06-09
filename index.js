// TODO: Include packages needed for this application
const fs =require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const { resolve } = require('path');
const { cpuUsage } = require('process');
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
             name:  'Installation',
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
        },   
        
        {
            type:'input',
            name: 'usage',
            message: 'Please provide instructions and examples to use (this is required',
            validate: usageInput  => {
                  if (usageInput) {
                    return true;
                  }
                  else {
                     console.log ("Please type them the examples")
                     return false;

                  }
              

            } 
        },       {
            type:'input',
            name: 'Questions',
            message: 'Please Provide What you can improve on',
            validate:  questionsInput => {
                  if (questionsInput) {
                    return true;

                  }
                  else {
                     console.log ("Please enter your questions!")
                     return false;

                  }
              

            } 
        },




];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve,reject) => {
           fs.writeFile('./dist/your-README.md',filecontent, err => {
                 if (err) {
                    reject(err);
                    return;

                 }

                 resolve({

                    ok: true,
                    message: "Your File has been made!"
                 });

                });
              
              });
        };
      

// TODO: Create a function to initialize app
const init = () =>{



  return inquirer.prompt(questions)
   .then(readmeData =>{
        return readmeData;

   })
  
}

// Function call to initialize app
init()
.then(readmeData => {
  console.log(readmeData);
  return generateMarkdown(readmeData);
})
.then(pageMD => {
   return writeFile(pageMD);
})
then(writeFileResponse => {
 console.log(writeFileResponse.message)

})

.catch(err =>{

  console.log(err);
})



