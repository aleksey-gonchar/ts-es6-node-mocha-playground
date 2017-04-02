'use strict'

import { Tool }  from 'classes/index'

function help () {
  console.log('help(')
  const tool =  new Tool()
  tool.test()
  console.log('help)')
}

export const mainHelper = {
  help
}