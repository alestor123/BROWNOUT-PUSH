#!/usr/bin/env node

var chalk = require('chalk'),
brownout = require('./App'),
{userInfo} = require("os")
const { basename } = require('path')
// prompt = require('prompt-sync'),
// {basename} = require('path')
const prompt = require('prompt-sync')()

// prompt.ask('ded')
try {
console.log(brownout(green('Github Username('+userInfo().username+') : ') || userInfo().username, green('Repository Name (' + basename(process.cwd()) + ') : '), green('Github Token : '),green('Branch Name : ') ))
}
catch(e){
console.log(chalk.red.bold('Oops we got a problem'))
}
// will be working on validation 
function green(qss){
if(qss && typeof qss === 'string') return prompt(chalk.greenBright.bold(qss))
else console.error(chalk.redBright.bold('Please enter a valid input'))
}