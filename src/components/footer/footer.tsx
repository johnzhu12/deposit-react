import * as React from 'react'
import FooterTag from './footer.css'

class Footer extends React.Component<{}, {}>{

    render() {

        return (
            <FooterTag>
            <div className="footerFrame">
            <div className="footerContent">
              <div className="left">
                <ul className="footerLeft">
                    <li>华泰中心</li>
                    <li>华泰香港</li>
                    <li>华泰联合证券</li>
                    <li>华泰紫金投资</li>
                    <li>南方基金</li>
                    <li>华泰柏瑞</li>
                    <li>华泰期货</li>
                    <li>江苏股权交易中心</li>
                    <li>华泰创新</li>
                </ul>
                </div>
                <div className="middle">
                <ul className="footerMiddle">
                    <li>服务中心</li>
                    <li>客服中心</li>
                    <li>投诉建议</li>
                    <li>预约开户</li>
                    <li>诚聘英才</li>
                    <li>免责条款</li>
                    <li>纪检信箱</li>
                </ul>
                </div>
                <div className="right">
                <ul className="footerRight">
                    <li>友情链接</li>
                    <li>中国证券网</li>
                    <li>上海证券交易所</li>
                    <li>深圳证券交易所</li>
                    <li>中国证监会</li>
                    <li>香港证监会</li>
                </ul>
                </div>
                <div className="qrCode">
                <p className="pp">服务热线</p>
                <p className="ppNumber">95577</p>
                <p className="ppName">我们7*24小时为您服务</p>
                <p><img src=""/></p>
                </div>
                </div>
            </div>
            </FooterTag>
        )
    }
}

export default Footer