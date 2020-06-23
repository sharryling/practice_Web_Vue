import axios from 'axios'
const ERR_OK = 0
export function get(url) {
    return function(parmas) {
        return axios.get(url, {
            data: parmas
        }).then(err => {
            const { data, errCode } = err.data
            if(errCode === ERR_OK) {
                return data
            }
        }).catch(err => {
            console.error('err:', err)
        })
    }
}