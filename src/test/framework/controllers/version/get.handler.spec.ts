'use strict'
import { sinon, expect, assert, faker, diff } from 'test/helpers/index'
const proxyquire =  require('proxyquire')

// const cmds = require('app/commands')
// import { getHandler } from 'framework/controllers/version/get.handler'

describe('framework/controllers/version/get-handler', () => {
  it.only('calls `next()`', (done) => {
    const GetApiVersionCommandStub = sinon.stub().callsFake( ()=> {
      console.log(108)
    })
    const cmdBusSrvStub = sinon.stub()

    const mdl1 = proxyquire(
      process.cwd() +
      '/src/main/app/commands/index',
      {
        './get-api-version.command': GetApiVersionCommandStub
      }
    )

    // const mdl = proxyquire(
    //   process.cwd() +
    //   '/src/main/framework/controllers/version/get.handler',
    //   {
    //     'GetApiVersionCommandStub': GetApiVersionCommandStub,
    //     './app.index': GetApiVersionCommandStub,
    //     './commands.index': GetApiVersionCommandStub,
    //     './get-api-version.command': GetApiVersionCommandStub,
    //     './command-bus.service': cmdBusSrvStub
    //   }
    // )
    // const stubClass = sinon.stub(cmds, 'GetApiVersionCommand')

    const reqStub:any = {}
    const resStub:any = {}
    const nextStub = () => {
      expect(resStub).to.have.property('body')
      expect(resStub).to.have.property('statusCode')
      expect(resStub.statusCode).to.equal(200)
      done()
    }

    mdl1.getHandler(reqStub, resStub, nextStub)
  })
})
