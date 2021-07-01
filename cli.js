#!/usr/bin/env node

const chalk = require('chalk')
const brownout = require('./App')
const { userInfo } = require('os')
const { basename } = require('path')
const prompt = require('prompt-sync')()
const cd = basename(process.cwd())
const usernamee = userInfo().username
const questions = [{ field: 'username', question: 'Github Username(' + usernamee + ') : ', defaultValue: usernamee, nolengthValidation: true }, { field: 'reponame', question: 'Repository Name (' + cd + ') : ', defaultValue: cd, nolengthValidation: true }, { field: 'token', question: 'Github Token : ' }, { field: 'brname', question: 'Branch (main) : ', nolengthValidation: true }]

try {
  const { username, reponame, token, brname } = promptAns()
  brownout(username, reponame, token, brname)
  console.log(chalk.green('Done!!'))
} catch (e) {
  console.log(chalk.red.bold('Oops we got a problem'))
}

function promptAns () {
  const answers = {}
  questions.forEach(qes => {
    const inp = prompt(chalk.greenBright.bold(qes.question))
    if (qes.defaultValue && qes.nolengthValidation) answers[qes.field] = inp && typeof inp === 'string' && inp.length > 0 ? inp : qes.defaultValue
    else answers[qes.field] = inp && typeof inp === 'string' && inp.length > 0 ? inp : undefined
  })
  return answers
}
