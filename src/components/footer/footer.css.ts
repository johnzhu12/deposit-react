import styled from 'styled-components'

const FooterTag = styled.div`
.footerFrame{
    width:100%;
    height:400px;
    background-color:pink;
    .footerContent{
        /*background-color:green;*/
        padding: 0 120px;
        /* min-width: 1000px;*/
        width:100%;
        height: 100%;
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
        font-size:24px;
    }
    .qrCode{
        width:25%;
        float:right;
        text-align: right;
        .pp{
            display:inline-block;
            font-size:24px;
            margin-top:50px;
            color:rgb(237,126,30);
            display:inline-block;
            padding-right:15px;
        }
        .ppNumber{
            font-family:Palatino Linotype;
            font-size:34px;
            color:rgb(237,126,30);
            display:inline-block;
        }
        .ppName{
            
            font-size:24px;
            font-family:'microsoft yahei';
            color:rgb(138,141,150);
        }

    }
}
}
`

export default FooterTag;