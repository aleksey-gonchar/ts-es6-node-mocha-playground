'use strict'
const _ = require('lodash')

function skipEmptyArrAndObjDiff(data) {
  const res = _.reduce(data, (final, item) => {
    if (item.kind === 'E') {
      if (_.isEmpty(item.lhs) && _.isEmpty(item.rhs)) { return final }
    }

    if (item.kind === 'N') {
      if ((item.lhs === null || item.rhs === null)
        && (!_.has(item, 'lhs') || !_.has(item, 'rhs'))) { return final }
    }

    final.push(item)
    return final
  }, [])

  return res
}

function skipIntAndStrTypeDiff(data) {
  const res = _.reduce(data, (final, item) => {
    if (item.kind === 'E') {
      if (String(item.lhs) === String(item.rhs)) { return final }
    }

    final.push(item)
    return final
  }, [])

  return res
}

function skipNullAndDashDiff(data) {
  const res = _.reduce(data, (final, item) => {
    if (item.kind === 'E') {
      const isLhsNullOrDash = _.isNull(item.lhs) || item.lhs === '-'
      const isRhsNullOrDash = _.isNull(item.rhs) || item.rhs === '-'
      if (isLhsNullOrDash && isRhsNullOrDash) { return final }
    }

    final.push(item)
    return final
  }, [])

  return res
}

function skipNewEmptyObjOrArrDiff(data) {
  const res = _.reduce(data, (final, item) => {
    if (item.kind === 'N' && !_.has(item,'lhs')) {
      const isArrOrObj = _.isObject(item.rhs) || _.isArray(item.rhs)
      if (_.isEmpty(item.rhs) && isArrOrObj) { return final }
    }

    final.push(item)
    return final
  }, [])

  return res
}

function skipReqProfLogDiff(data) {
  const res = _.reduce(data, (final, item) => {
    if (item.kind === 'N' && item.path[0] === '_requestProfileLog') { return final }

    final.push(item)
    return final
  }, [])

  return res
}

function compact (data) {
  let res = skipIntAndStrTypeDiff(_.extend({}, data))
  res = skipEmptyArrAndObjDiff(res)
  res = skipNullAndDashDiff(res)
  res = skipNewEmptyObjOrArrDiff(res)
  res = skipReqProfLogDiff(res)
  return res
}

export const diffHelpers = {
  compact
}
