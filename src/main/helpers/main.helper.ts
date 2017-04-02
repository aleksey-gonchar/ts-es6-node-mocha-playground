'use strict'

import { Tool }  from 'classes/index'

function help () {
  const tool =  new Tool()
  tool.test()
}

export const mainHelper = {
  help
}