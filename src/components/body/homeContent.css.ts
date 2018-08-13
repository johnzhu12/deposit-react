import styled from 'styled-components'

const BodyTag = styled.div`
.bodyContent{
        width:100%;
        height: auto;
        background-color:rgb(236,241,244);
        display:inline-block;
        padding:20px 20% 40px;
    .bodyContentTop{
        padding:35px 30px 15px 20px;
        background-color:white;
        width:100%;
        .topTitle{
            padding-bottom:15px;
            border-bottom:1px solid rgb(234,234,234);
            font-weight:bold;
            font-size:14px;
        }
        .topContentOneTitle{
            font-size:14px;
            text-indent:2em;
            padding-top:10px;
        }
        .topContentOneP1{
            font-size:14px;
            text-indent:2em;
        }
        .topContentOneP2{
            font-size:14px;
            text-indent:2em;
            padding-bottom:15px;
        }
        .topContentTwo{
            /*display:none;   JQUERY实现???*/
            .topContentTwoTitle{
                font-size:14px;
                text-indent:2em;
                padding-top:10px;
            }
            .topContentTwoP1{
                font-size:14px;
                text-indent:2em;
            }
            .topContentTwoP2{
                font-size:14px;
                text-indent:2em;
            }
        }
        .topContentOpen{
            float:right;
        }
        a.vistied{
            
        }

    }
    .bodyContentBottom{
        margin-top:20px;
        padding:35px 30px 15px 20px;
        background-color:white;
        width:100%;
        .bottomTitle{
            display:inline-block;
            font-size:14px;
            font-weight:bold;
            margin-bottom:10px;
            padding-left:20px;
        }
        .bottomTitleRight{
            float:right; 
            /* text-align:right; */
            display:inline-block;
            margin-bottom:10px;
            padding-right:15px;
            a{
                text-decoration:underline;
                color:rgb(81,79,90);
            }
            a:hover{
                color:rgb(89,154,229);
            }
        }
        .bottomList{
            border-top:1px solid rgb(234,234,234);
            background-color:rgb(241,241,241);
            .bottomListTitle{
                display:inline-block;
                padding:12px 0 10px 30px;
            }
            .bottomListTime{
                padding:12px 40px 10px 0;
                float:right;
                display:inline-block;
            }
        }
        .bottomListContent{
            padding:18px 30px 50px 20px;
            
            li{
                margin-bottom:15px;
                a{
                    color:rgb(95,95,95);
                }
                p{
                    display:inline-block;
                    float:right;
                }
                a:hover{
                    color:rgb(89,154,299);
                }
            }

        }
    }
}
`

export default BodyTag;