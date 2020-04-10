module.exports = option => {
  return  async (req, res, next) => {
    // 转换大小写
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}