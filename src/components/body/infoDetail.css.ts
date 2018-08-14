import styled from 'styled-components'

const DetailTag = styled.div`
.detailNoticeFrame{
    width:100%;
    background-color:rgb(241,241,241);
    padding:20px 15% 40px;
    font-size:16px;
    .detailNoticeContent{
        padding:0 30px;
        text-align:center;
        /* h1{
            text-align:center;
        } */
        span{
            font-weight:bold;
            font-size:22px;
        }
        .detailNoticeDownNew{
            text-align:left;
            span{
                font-weight:bold;
                font-size:14px;
                padding-right:15px;
            }
            a{
                text-decoration:none;
                color:rgb(90,90,90);
                font-size:14px;
            }
        }
        .detailNoticeClose{
            text-align:center;
            margin-top:20px;
            size:large;
            .noticeClose{
                background-color:rgb(177,32,33);
                width:100px;
                color:white;
                border:none;
                span{
                font-weight:normal;
                font-size:14px;
                }
            }
        }
    }
}

`

export default DetailTag;