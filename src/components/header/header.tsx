import * as React from 'react'
import HeaderTag from './header.css'


class Header extends React.Component<{}, {}>{

    render() {

        return (
            <HeaderTag>
                <div className="headFrame">
                    <div className="content">
                        <div className="logo">
                        </div>
                        <span className="divide">
                        </span>
                        <div className="title">
                            <div className="ch">
                                华泰资产信息托管披露
                            </div>
                            <div className="en">
                                djkdajkakrjkawjdjwkdwkdwkdjkwdwdjw
                            </div>
                        </div>
                        <div className="cornerimg">

                        </div>
                    </div>
                </div>
            </HeaderTag>

        )
    }
}

export default Header