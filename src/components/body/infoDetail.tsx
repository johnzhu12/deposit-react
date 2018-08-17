import * as React from 'react'
import DetailTag from './infoDetail.css'
import NoticeStore from '@models/notice'
import { observer } from 'mobx-react'
import MypdfPreView from '../preview/MyPdfViewer'
import { Button } from 'antd'

@observer
class InfoDetail extends React.Component<{}, {}>{
    componentWillMount() {

    }
    handleClose() {
        location.hash = '/info';
    }
    render() {
        return (
            <DetailTag>
                <div className="detailNoticeFrame">
                    <div className="detailNoticeContent">
                        <h1>{NoticeStore.getNotice()['title']}</h1>
                        <h3>{NoticeStore.getNotice()['publishTime']}</h3>
                        <MypdfPreView />
                        <div className="detailNoticeDownNew"><span>附件:</span><a>{NoticeStore.getNotice()['title']}</a>
                        </div>
                        <div className="detailNoticeClose"><Button className="noticeClose" onClick={this.handleClose.bind(this)}>关闭页面</Button></div>
                    </div>
                </div>
            </DetailTag>
        )
    }
}

export default InfoDetail