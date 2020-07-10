// 可以 用express 服务把打包后的代码跑起来
var express = require('express')
var config = require('./config/index')
var app = express()
var apiRoutes = express.Router()
apiRoutes.get('/',(req, res)=>{})
apiRoutes.get('/api/getDatas', function(req, res) {
    // const url = 'https://wq.jd.com/bases/searchpromptwords/searchpromptwords'
    // console.log('真实的url: ', url);
    console.log('模拟后台')
    res.json({
      errCode: 0,
      data: {
        id: 13,
        list: [{
          id:32,
          name: '23423'
        },{
          id:234,
          name: 'asd多少分'
        }]
      }
    })
})

app.use('/api', apiRoutes)
app.use(express.static('./dist'))
var port = process.env.PORT || config.build.port
module.exports = app.listen(port, (err) => {
    if(err) {
        console.log("dist error!")
        return
    }
    console.log('Listening at http://localhost:' + port + '\n');
    
})