//added by john 8-6
import styled from 'styled-components'
let logourl = require('../../static/imgs/logo1.png')
let imgurl = require('../../static/imgs/logo.jpeg')

const HeaderTag = styled.div`
.headFrame{
    background:rgb(193,65,60);
    width:100%;
    height:80px;
    
    .content{
        height: 100%;
        margin: 0 120px;
        /* background: blue; */
        .logo{
            background: url(${logourl}) no-repeat;
            background-size: contain;
            height: 70%;
            margin-top: 12px;
            /* border: 1px solid red; */
            width: 200px;
            display: inline-block;
        }
        .divide{
            width: 1px;
            height: 50px;
            
            display: inline-block;
            background: white;
            vertical-align: top;
            margin:15px 20px;
        }
        .title{
            display: inline-block;
            color: white;
            width: auto;
            /* background: pink; */
            vertical-align: top;
            height: 100%;
            padding: 16px 0;
            .ch{
                font-weight:bold;
                font-size:20px;
            }
            .en{
                font-size:12px;
            }
        }
        .cornerimg{
            float: right;
            height: 100%;
            width: 280px;
    
            display: inline-block;
            background: url(${imgurl}) no-repeat;
            background-size: contain;
        }
    }
}
`

export default HeaderTag;