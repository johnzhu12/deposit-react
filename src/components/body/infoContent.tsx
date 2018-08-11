import * as React from 'react'
import InfoBodyTag from './infoContent.css'

class InfoBody extends React.Component<{},{}>{
    render(){
        return(
            <InfoBodyTag>
                <div className="infoFrame">
                <div className="infoContent">
                    <div className="infoTitle">信息披露</div>
                    <div className="infoSearch"></div>
                    <div className="infoWaring"><img src="../../static/imgs/icon.jpg" />
                    <p className="infoText">根据《私募投资基金信息披露管理办法》第十一条“信息披露义务人披露基金信息，不得存在以下行为：(一) 公开披露或者变相公开披露”，请登录管理人服务平台或投资者服务平台进行查询私募基金相关信息。</p>
                    </div>
                    <div className="infoTitle">
                     <p className="infoTitleName">公告标题</p>
                     <p className="infoTitleTime">发布时间</p>
                    </div>
                    <div className="infoList">
                    <ul>
                        <li>永赢基金管理有限公司关于旗下部分基金新增代<p>2018-06-08</p></li>
                        <li>永赢基金管理有限公司关于旗下部分基金新增代<p>2018-06-08</p></li>
                        <li>永赢基金管理有限公司关于旗下部分基金新增代<p>2018-06-08</p></li>
                        <li>永赢基金管理有限公司关于旗下部分基金新增代<p>2018-06-08</p></li>
                        <li>永赢基金管理有限公司关于旗下部分基金新增代<p>2018-06-08</p></li>
                        <li>永赢基金管理有限公司关于旗下部分基金新增代<p>2018-06-08</p></li>
                        <li>永赢基金管理有限公司关于旗下部分基金新增代<p>2018-06-08</p></li>
                        <li>永赢基金管理有限公司关于旗下部分基金新增代<p>2018-06-08</p></li>
                        <li>永赢基金管理有限公司关于旗下部分基金新增代<p>2018-06-08</p></li>
                        <li>永赢基金管理有限公司关于旗下部分基金新增代<p>2018-06-08</p></li>
                    </ul>
                    </div>
                    <div className="infoPage">分页</div>
                </div>
                </div>
            </InfoBodyTag>
        )
    }
}
export default InfoBody