import styled from 'styled-components'

const FooterTag = styled.div`
.footerFrame{
    width:100%;
    height:auto;
    padding: 0 15%;
    /* background-color:pink; */
    min-width: 1200px;
    .footerContent{
        /*background-color:green;*/
        padding-bottom:30px;
        width:100%;
        height: 80%;
        float:left;
        font-size:0;
    .right{
        text-align:center;
        width:25%;
        display: inline-block;
	    vertical-align: top;  
    }
    .middle{
        text-align:center;
        width:25%;
        display: inline-block;
	    vertical-align: top; 
    }
    .left{
        text-align:center;
        width:25%;
        display: inline-block;
    }
    li{
        text-align:left;
        margin-bottom:10px;
        font-size:14px;
        font-family:'microsoft yahei';
    }
    ul>li:first-child{
        margin-top:55px;
        padding-bottom:30px;
        font-weight:bold;
        font-size:20px;
    }
    .qrCode{
        width:25%;
        float:right;
        text-align: right;
        .ppNumber{
            margin-top:60px;
            display:inline-block;
            vertical-align:middle;
            white-space: nowrap;
            span{
                height:100%;
                padding-right:10px;
                font-size:24px;
                color:rgb(237,126,30);
                vertical-align:middle;
            }
            img{
                vertical-align:middle;
            }
        }
        .ppName{
            display:block;
            padding-top:10px;
            font-size:19px;
            font-family:'microsoft yahei';
            color:rgb(138,141,150);
        }
        .qrCodeImg{
            padding-top:20px;
        }

    }
}
.footerBottom{
    float:left;
    width:100%;
    height: 20%;
    
    padding-bottom:10px;
    /*border-top:2px solid rgb(234,234,234);*/
    font-family:'microsoft yahei';
a{
   padding-right:20px;
   color:rgb(137,137,137);
}
a:hover{
   color: rgb(63,140,254);
}
p:first-child{
    padding-top:30px;
    border-top:1px solid rgb(234,234,234);
}
}
`

export default FooterTag;