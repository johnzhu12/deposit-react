import styled from 'styled-components'

/*let infourl = require('../../static/imgs/icon.jpg')*/

const InfoBodyTag = styled.div`
.infoFrame{
    width:100%;
    background-color:rgb(234,234,234);
    padding:20px 15% 40px;
    .infoContent{
        background-color:white;
        padding:30px 30px 15px 30px;
    .infoTitle{
        font-weight:bold;
        font-size:16px;
        padding-bottom:15px;
        border-bottom:1px solid rgb(234,234,234);
    }
    .infoSearch{
        /*通过antd-design拉取控件*/
        padding:20px 0;
        width:100%;
        height:100px;
        /* background-color:blue; */
    }
    .infoWaring{
        display:inline-block;
        padding-bottom:20px;
        border-bottom:1px solid rgb(234,234,234);
        .infoText{
            display:block;/*p与img同一行显示*/
            font-size:14px;
        }  
        img{
            padding:5px 10px 20px 0;
            float:left; 
        }
    }
    /* .infoTitle{
        border-bottom: 1px solid rgb(241,241,241);
        padding: 15px 20px;
    } */

    .buttonCustom{
                background-color:rgb(177,32,33);
                color:white;
                border:none;
                margin-left:30px;
    }
    .tableFrame{
        /* background:greenyellow; */
        .ant-table-tbody > tr > td{
            border-bottom:none;
            :first-child{
                padding-left:30px;
            }
        }
        .ant-table-thead > tr > th{
            font-weight:bold; 
            /* 公告标题显示位置调整 */
            :first-child{
            padding-left:200px;
            }
        }    
    }
}
}



`
export default InfoBodyTag;