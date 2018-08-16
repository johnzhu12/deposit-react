import axios from 'axios'
import { observable } from 'mobx';
import store from '@models/mask'
import apiConf from '../api/apiConf'

//api相关信息
const { host, apiList, ajaxMode } = apiConf

//ajax通用配置
let ajaxInstance = axios.create({
    timeout: 5 * 60 * 1000,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
});

//请求mock数据
function reqMockdata(options) {
    let responsePath = options.url;
    options.callback(require('../../mockData' + responsePath + '.json').data)
}
let ajaxFunc = observable({
    ajax(ops) {
        let config = Object.assign({
            method: 'POST',
            handleResponse: false
        }, ops)  //传入的参数合并

        store.setLoadingStatus(true) //loading
        if (ajaxMode == 'mock') {
            setTimeout(() => {
                store.setLoadingStatus(false)
                reqMockdata(ops)
            }, 5000)

        } else {
            ajaxInstance({
                method: config.method,
                data: config.data,
                url: `${host}${config.url}`
            }).then(response => {
                store.setLoadingStatus(false)
                console.log('我是请求结果', response);
                if (response['code'] == '200') {
                    config.callback(response.data)
                }
            })
        }
    }
})

export default ajaxFunc.ajax;