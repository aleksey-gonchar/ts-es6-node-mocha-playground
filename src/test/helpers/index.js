'use strict'
require('../../main/pre-loader')

const faker = require('faker')
const sinon = require('sinon')
const chai = require('chai')

const { diffHelpers } = require('./diff.helpers')

module.exports = {
  expect: chai.expect,
  assert: chai.assert,
  sinon,
  faker,
  diff: diffHelpers
}


