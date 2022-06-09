
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table-of-Contents
  - [Description](#description)
  - [Installation](#installation)
  - [User-Contact](#User-Contact)
  - [Usage] (#Usage)
  - [Questions] (#Questions)

  ## [Description] 
  ${data.title}
  ${data.Project}

  ## [Installation] 
  ${data.install}

  ## [User-Contact] 
  ${data.Email}
  ${data.Username}

  ## [Usage] 
   ${data.usage}

   
  ## [Questions] 
   ${data.Questions}
   ## [Github and other links]  
     
   Thank you for looking at my page please contact me with the posted links below thank you

   [Github] (https://github.com/${data.Username})
   [Email: ${data.Email}


`;
}

module.exports = generateMarkdown;
