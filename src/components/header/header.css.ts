//added by john 8-6
import styled from 'styled-components'
// let imgurl = require('../../static/imgs/logo1.jpeg')

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
            background: blue;
            width: 130px;
            height: 100%;
            display: inline-block;
        }
        .divide{
            width: 1px;
            height: 50px;
            margin-top: 15px;
            display: inline-block;
            background: white;
            vertical-align: top;
        }
        .title{
            display: inline-block;
            color: white;
            width: auto;
            /* background: pink; */
            vertical-align: top;
            height: 100%;
            padding: 20px 0;
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
            width: 100px;
            height: 100%;
            display: inline-block;
            background: blue;
        }
    }
}
`

export default HeaderTag;