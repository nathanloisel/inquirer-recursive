# inquirer-recursive

recursive prompt for [inquirer](https://github.com/SBoudrias/Inquirer.js)

![](http://i.giphy.com/l2JhntGGk3QjTUIiA.gif)


## Installation

```
npm install --save inquirer-recursive
```

## Usage

###Register the prompt

```javascript
inquirer.registerPrompt('recursive', require('inquirer-recursive'));

inquirer.prompt({
  type: 'recursive',
  message: message
  prompts: prompts
})
```

Change `recursive` to whatever you might prefer.

### Options
-**message** (String) The question that will be ask for interating over prompts default: Would you like to loop ?
-**prompts** (Object) Prompts that will be asked multiple times (Required) [see](https://github.com/SBoudrias/Inquirer.js#questions)

#### Example

```javascript
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer.prompt([{
    type: 'recursive',
    message: 'Add a new user ?',
    name: 'users',
    prompts: [
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
    ]
}]).then(function(answers) {
    console.log(answers.users);
    /*
    OUTPUT :
    [
        {
            name: 'Brendan Eich',
            age: '42',
        }, {
            name: 'Jordan Walke',
            age: '13',
        },
        ...
    ]
    */
});
```

## Credits
[Nathan Loisel](https://github.com/nathanloisel/)

## License
MIT
