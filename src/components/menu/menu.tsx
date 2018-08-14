import * as React from 'react'
import MenuTag from './menu.css'


class Menu extends React.Component<{}, {}>{
    clickLink(this, index) {
        // var clickMenu = document.getElementById('menu1');
        // var clickA = clickMenu.getElementsByTagName('a');
        // for (var i = 0; i < clickA.length; i++) {
        //     clickA[i].onclick = function () {
        //         for (var i = 0; i < clickA.length; i++) {
        //             clickA[i].className = "";
        //         }
        //         this.className = "active";
        //     }
        // }
        // console.log(this.index);
        // this.className = "active";
        // console.log(this.className);
        //从导航栏链接过去无问题 从路由过去依然不行
        var focusOn = document.getElementsByClassName("focusOn")[0].getElementsByTagName("li");
        focusOn[index].className = "current";


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
            case 3:
                location.hash = '/manger';
                break;
            case 4:
                location.hash = '/voter';
                break;
        }


        //写html代码给第几个li赋值background-color: rgb(138,24,25);
        // {{ul: child[index + 1]{
        //     background-color: rgb(138, 24, 25);}}
        // }
        // var clickMenu = document.getElementById('menu');
        // var tmp = clickMenu.childNodes.item[index]
        // tmp.background = 'red';
        //localStorage.setItem('clickFocus', index)

    }
    render() {

        return (
            <MenuTag>
                <div className="menuFrame">
                    <div className="menu">
                        <ul className="focusOn">
                            <li><a onClick={this.clickLink.bind(this, 0)}>主页</a></li>
                            <li><a onClick={this.clickLink.bind(this, 1)}>服务介绍</a></li>
                            <li><a onClick={this.clickLink.bind(this, 2)}>信息披露</a></li>
                            <li><a onClick={this.clickLink.bind(this, 3)}>管理人服务平台</a></li>
                            <li><a onClick={this.clickLink.bind(this, 4)}>投资者服务平台</a></li>
                        </ul>
                    </div>
                </div>
            </MenuTag>

        )
    }
}

export default Menu