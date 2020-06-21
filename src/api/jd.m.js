import jsonp from '../common/js/jsonp.js'
import axios from 'axios'
// 第一种，可直接爬虫
// 公共参数
import {commonParams, options} from './config.js'
export function requestJD () {
  const url = 'https://wq.jd.com/bases/searchpromptwords/searchpromptwords'
  // 相同参数
  const data = Object.assign({}, commonParams, {
    sceneval: 2
  })

  return jsonp(url, data, options)
}


// 第二种，需要特定的http头种的Reference
// 爬虫时，发现需要修改Reference时，需要添加“模拟后台”，
// 在发送请求前利用node，启动服务，在发送某请求地址前，修改http头
// 可查看 build/webpack.dev.conf.js中的express【17行左右】
export function requestBefore() {
  const url = '/api/getDatas'
  // 相同参数
  const data = Object.assign({}, commonParams, {
    info: 'test!!'
  })

  
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
