'use strict';

var inquirer = require('inquirer');
inquirer.registerPrompt('recursive', require('..'));

var userQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is user\'s name?',
        validate: function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
        }
    }, {
        type: 'input',
        name: 'age',
        message: 'How old is he?',
        validate: function (value) {
            var digitsOnly = /\d+/;
            if (digitsOnly.test(value)) { return true; }
            return 'Invalid age! Must be a number genius!';
        }
    }
];

inquirer.prompt([{
    type: 'recursive',
    message: 'Add a new user ?',
    name: 'users',
    prompts: userQuestions
}]).then(function(answers) {
    console.log(answers.users);
});