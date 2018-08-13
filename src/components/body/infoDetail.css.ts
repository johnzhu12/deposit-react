import styled from 'styled-components'

const DetailTag = styled.div`
.detailNoticeFrame{
    width:100%;
    background-color:rgb(241,241,241);
    padding:20px 120px 40px;
    font-size:16px;
    .detailNoticeContent{
        padding:0 200px;
        h1{
            text-align:center;
        }
        .detailNoticeDownNew{
            text-align:left;
            span{
                padding-right:15px;
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
            }
        }
    }
}

`

export default DetailTag;