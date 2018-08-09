import * as React from 'react'
import MenuTag from './menu.css'


class Menu extends React.Component<{}, {}>{
    clickLink(index) {
        switch (index) {
            case 0:
                location.hash = '/home';
                break;
            case 1:
                location.hash = '/service';
                break;
            case 2:
                location.hash = '/info';
                break;
        }

    }
    render() {

        return (
            <MenuTag>
                <div className="menuFrame">
                    <div className="menu">
                        <ul>
                            <li><a onClick={this.clickLink.bind(this, 0)}>主页</a></li>
                            <li><a onClick={this.clickLink.bind(this, 1)}>服务介绍</a></li>
                            <li><a onClick={this.clickLink.bind(this, 2)}>信息披露</a></li>
                            <li><a onClick={this.clickLink.bind(this, 3)}>其他</a></li>
                        </ul>
                    </div>
                </div>

            </MenuTag>

        )
    }
}

export default Menu