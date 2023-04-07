const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
    },
    {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'languages',
    choices: ['HTML', 'CSS', 'Javascript', 'MySQL']
    },
    {
    type: 'input',
    message: 'What is your preferred method of communication?',
    name: 'preference',
    },
])
.then((response) => {
    console.log(response);
    console.log('Hello ' + response.name + '. How are you?' )
});
