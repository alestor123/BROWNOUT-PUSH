#!/usr/bin/env node

const chalk = require('chalk')
const brownout = require('./App')
const { userInfo } = require('os')
const { basename } = require('path')
const prompt = require('prompt-sync')()
const cd = basename(process.cwd())
const usernamee = userInfo().username
const questions = [{ field: 'username', question: 'Github Username(' + usernamee + ') : ', defaultValue: usernamee, nolengthValidation: true }, { field: 'reponame', question: 'Repository Name (' + cd + ') : ', defaultValue: cd, nolengthValidation: true }, { field: 'token', ispass: true, defaultValue: undefined, question: 'Github Token : ' }, { field: 'brname', defaultValue: undefined, question: 'Branch (main) : ', nolengthValidation: true }]

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
    answers[qes.field] = qes.ispass ? prompt.hide(chalk.greenBright.bold(qes.question), qes.defaultValue) : prompt(chalk.greenBright.bold(qes.question), qes.defaultValue)
  })
  return answers
}
