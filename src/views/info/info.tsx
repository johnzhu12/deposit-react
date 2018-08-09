import * as React from 'react'
import Header from '@components/header/header'
import Menu from '@components/menu/menu'
import Footer from '@components/footer/footer'


class InfoPage extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <Header />
                <Menu />
                信息披露
                <Footer />
            </div>
        )
    }
}

export default InfoPage