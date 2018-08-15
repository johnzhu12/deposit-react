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
}
.detailNoticeContent span
{
    font-weight:bold;
    font-size:22px;
}
.detailNoticeContent .detailNoticeDownNew
{
    text-align:left;
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