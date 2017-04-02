'use strict'
import { sinon, expect, assert, faker, diff } from 'test/helpers/index'
const proxyquire =  require('proxyquire')
const path =  require('path')

describe('helpers/main.helper', () => {
  it.only('mocks class', () => {
    const ToolStub = sinon.spy(() => {
      return {
        test: () => {
          console.log('ToolStub.test() fake call')
        }
      }
    })

    const mdl2 = proxyquire(path.join(
      process.cwd(), '/src/main',
      'helpers/main.helper'
      ),
      {
        'classes/index': { Tool: ToolStub }
      }
    )

    mdl2.mainHelper.help()

    expect(ToolStub.calledOnce).to.eq(true)
  })
})
