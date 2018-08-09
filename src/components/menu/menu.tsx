import * as React from 'react'
import MenuTag from './menu.css'


class Menu extends React.Component<{}, {}>{

    render() {

        return (
            <MenuTag>
                <div className="menuFrame">
                    <div className="menu">
                        <ul>
                            <li><a href="javascript:void(0);">主页</a></li>
                            <li><a href="javascript:void(0);">服务介绍</a></li>
                            <li><a href="javascript:void(0);">信息披露</a></li>
                            <li><a href="javascript:void(0);">其他</a></li>
                        </ul>
                    </div>
                </div>

            </MenuTag>

        )
    }
}

export default Menu