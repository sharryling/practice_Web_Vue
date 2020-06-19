import jsonp from '../common/js/jsonp.js'
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
