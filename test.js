const tap = require('tap')
const bp = require('./App')
// will add cli in future
tap.throws(() => bp(1, 'BROWN-T', process.env.GHTOKEN, 'master'), new Error('Please enter a vaild username'))
tap.throws(() => bp('', 'BROWN-T', process.env.GHTOKEN, 'master'), new Error('Please enter a vaild username'))
tap.throws(() => bp('eded', '', process.env.GHTOKEN, 'master'), new Error('Enter a valid repo name'))
tap.throws(() => bp('dewded', '', 1, 'master'), new Error('Enter a valid repo name'))
tap.throws(() => bp('eded', 'BROWN-T', 1, 'master'), new Error('Enter a valid token'))
tap.throws(() => bp('eded', 'BROWN-T', '', 'master'), new Error('Enter a valid token'))
tap.equal(typeof bp('alestor123', 'BROWNOUT-PUSH', process.env.GHTOKEN, 'master'), 'string') // not sure about this one
