//首页
import * as React from 'react'
import { observer } from 'mobx-react'
import deposit from '@common/index'
import { Button } from 'antd'
import Header from '@components/header/header'
import Menu from '@components/menu/menu'
import Footer from '@components/footer/footer'

@observer
class HomePage extends React.Component<{}, {}>{
    constructor(props) {
        super(props)
        // ['requestTest'].forEach(m => this[m] = this[m].bind(this)) //bind this for methods
    }
    requestTest() {
        let params = {}
        deposit.ajax({
            url: '/test1/getNames',
            data: params,
            callback(data) {
                console.log('我是请求的数据')
            }
        })
    }
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Button type='primary' onClick={this.requestTest.bind(this)}>
                    测试接口
                </Button>
                <Footer />
            </div>
        )
    }
}

export default HomePage