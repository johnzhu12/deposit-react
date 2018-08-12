import * as React from 'react'
import InfoBodyTag from './infoContent.css'
import { Table } from 'antd';
import deposit from '@common/index'
interface InfoStates {
    columns: Array<any>
    dataSource: Array<any>,
    pagination: any
}
class InfoBody extends React.Component<{}, InfoStates>{
    constructor(props) {
        super(props)

        this.state = {
            columns: [{
                title: '公共标题',
                dataIndex: 'title',
                key: 'title',
            }, {
                title: '发布时间',
                dataIndex: 'publishTime',
                key: 'publishTime'
            }],
            dataSource: [],
            pagination: {
                pageSize: 10,
                showQuickJumper: true,
                showSizeChanger: true
            }
        }
    }
    componentWillMount() {
        this.getDataList()
        //test56 git pull upstream master 从远端更新最新代码
    }
    //获取table数据
    getDataList() {
        let params = {}
        let that = this;
        deposit.ajax({
            url: '/info/noticeData',
            data: params,
            callback(data) {
                console.log('我是请求的数据', data)
                that.setState({ dataSource: data })
            }
        })

    }
    render() {
        return (
            <InfoBodyTag>
                <div className="infoFrame">
                    <div className="infoContent">
                        <div className="infoTitle">信息披露</div>
                        <div className="infoSearch"></div>
                        <div className="infoWaring"><img src="../../static/imgs/icon.jpg" />
                            <p className="infoText">根据《私募投资基金信息披露管理办法》第十一条“信息披露义务人披露基金信息，不得存在以下行为：(一) 公开披露或者变相公开披露”，请登录管理人服务平台或投资者服务平台进行查询私募基金相关信息。</p>
                        </div>
                        <div className="tableFrame">
                            <Table
                                columns={this.state.columns}
                                dataSource={this.state.dataSource}
                                rowKey="id"
                                pagination={this.state.pagination}
                            />

                        </div>
                    </div>
                </div>
            </InfoBodyTag>
        )
    }
}
export default InfoBody