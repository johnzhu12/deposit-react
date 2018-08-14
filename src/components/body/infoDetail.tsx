import * as React from 'react'
import DetailTag from './infoDetail.css'
import NoticeStore from '@models/notice'
import { observer } from 'mobx-react'
import MypdfPreView from '../preview/MyPdfViewer'
import { Button } from 'antd'

@observer
class InfoDetail extends React.Component<{}, {}>{
    componentWillMount() {
        // let Notice = NoticeStore.getNotice();
        // console.log('我是notice', Notice['title'])
    }
    render() {
        return (
            <DetailTag>
                <div className="detailNoticeFrame">
                    <div className="detailNoticeContent">
                        <h1>{NoticeStore.getNotice()['title']}</h1>
                        <span>{NoticeStore.getNotice()['publishTime']}</span>
                        <MypdfPreView />
                        <div className="detailNoticeDownNew"><span>附件:</span><a>{NoticeStore.getNotice()['title']}</a>
                        </div>
                        <div className="detailNoticeClose"><Button className="noticeClose">关闭页面</Button></div>
                    </div>
                </div>
            </DetailTag>
        )
    }
}

export default InfoDetail