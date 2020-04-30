module.exports = app => {
  const router = require('express').Router()

  // 
  const mongoose = require('mongoose')
  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.find().where({
      parent: parent
    }).lean()
    const newsTitles = ["王者英雄导航来啦!", "新皮肤爆料丨龙战于野，迅疾如风，赵云新装登场！", "跨系统角色转移限量测试开启公告", "新皮肤爆料丨活动免费兑换！【盾山-圆桌骑士】新装登场", "正式服预告丨恶火重铸身躯，地狱岩魂重塑归来！", "4月30日全服不停机更新公告", "4月30日建议更新公告", "赛事战令更新公告", "4月29日净化游戏环境声明及处罚公告", "4月29日“演员”惩罚名单", "与我为伍，彼此守护，瑶五五开黑节皮肤即将上架", "【五五集结领豪礼】活动开启公告", "2020亲密度昵称升级投票结果公告", "策略协作型AI“绝悟”首次降临峡谷，限时挑战活动即将开启", "亲密度昵称升级投票开启公告及FAQ", "大众赛事合作赛道全面开启，携手合作伙伴共建王者电竞生态", "【KPL今日预报】南京Hero久竞 vs DYG，DYG.久诚迎战老东家能否取胜", "关于责成TS俱乐部就欠薪问题进行说明的通知", "《一招即浪》第二期：逆天牛魔王最浪打法，城市赛教你一招制敌", "为战队争夺荣誉！城市联赛战队赛通道报名开启！"]
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        categories: randomCats.slice(0, 2),
        title
      }
    })
    await Article.deleteMany({})
    await Article.insertMany(newsList)
    res.send(newsList)
  })

  app.use('/web/api', router)
}