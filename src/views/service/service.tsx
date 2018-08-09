import * as React from 'react'
import Header from '@components/header/header'
import Menu from '@components/menu/menu'
import Footer from '@components/footer/footer'


class ServicePage extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <Header />
                <Menu />
                服务介绍
                <Footer />
            </div>
        )
    }
}

export default ServicePage