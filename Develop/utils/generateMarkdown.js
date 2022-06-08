
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table-of-Contents
  - [Description](#description)
  - [Installation](#installation)
  - [User Contact](#User-Contact)
  - [Usage] (#Usage)
  - [Questions] (#Questions)
  - 
  -
  -
  
  ## [Description] (#Table-of-Contents)
  ${data.title}
  ${data.Project}

  ## [Installation] (#Table-of-Contents)
  ${data.install}

  ## [User Contact] (#Table-of-Contents)
  ${data.Email}
  ${data.Username}

  [Usage] (#Table-of-Contents)
   ${data.usage}

`;
}

module.exports = generateMarkdown;
