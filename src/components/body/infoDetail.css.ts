import styled from 'styled-components'

const DetailTag = styled.div`
.detailNoticeFrame{
    width:100%;
    background-color:rgb(241,241,241);
    padding:20px 15% 40px;
    font-size:16px;
.detailNoticeContent
{
        padding:0 30px;
        text-align:center;
        overflow-y:auto
        /* background-color:red; */
}
.detailNoticeContent div ul li
{
    /* width:1263px;
    height:892px; */
    display:inline-block;
    
}
.detailNoticeContent div ul li a
{
    color:black;
    text-decoration:underline;
}
.detailNoticeContent div ul li:first-child
{
    padding-right:30%;
}
.detailNoticeContent div ul li:nth-child(2)
{
    padding-left:30%;
}
.detailNoticeContent span
{
    font-weight:bold;
    font-size:22px;
}
.detailNoticeContent .detailNoticeDownNew
{
    margin-top:15px;
    text-align:left;
    padding-left:15%;
    
}
.detailNoticeContent .detailNoticeDownNew span
{
    font-weight:bold;
    font-size:14px;
    padding-right:15px;
}
.detailNoticeContent .detailNoticeDownNew a
{
    text-decoration:none;
    color:rgb(90,90,90);
    font-size:14px;
}
        
.detailNoticeContent .detailNoticeClose
{
    text-align:center;
    margin-top:20px;
    size:large;
}
.detailNoticeContent .detailNoticeClose .noticeClose
{
    background-color:rgb(177,32,33);
    width:100px;
    color:white;
    border:none;
}
.detailNoticeContent .detailNoticeClose .noticeClose span
{
    font-weight:normal;
    font-size:14px;
}
}

`

export default DetailTag;