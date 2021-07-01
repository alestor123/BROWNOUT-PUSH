const { execSync } = require('child_process')
module.exports = (username, repo, token, branch) => {
  if (!(username && typeof username === 'string' && username.length > 0)) throw new Error('Please enter a vaild username')
  else if (!(repo && typeof repo === 'string' && repo.length > 0)) throw new Error('Enter a valid repo name')
  else if (!(token && typeof token === 'string' && token.length > 0)) throw new Error('Enter a valid token')
  return execSync('git push -u ' + 'https://' + token + '@github.com/' + username + '/' + repo + '.git ' + (branch || 'main')).toString()
}
