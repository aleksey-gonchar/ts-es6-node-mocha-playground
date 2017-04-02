'use strict'
import { Tool }  from 'classes/index'

export class Service {
  tool: Tool

  constructor () {
    this.tool = new Tool()
  }

  serv () {
    this.tool.test()
  }
}

export const srv = new Service()