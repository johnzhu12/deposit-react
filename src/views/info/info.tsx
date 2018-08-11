import * as React from 'react'
import Header from '@components/header/header'
import Menu from '@components/menu/menu'
import Footer from '@components/footer/footer'
import InfoBody from '@components/body/infoContent'


class InfoPage extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <InfoBody />
                <Footer />
            </div>
        )
    }
}

export default InfoPage