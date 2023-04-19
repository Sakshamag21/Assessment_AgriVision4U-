import AppHeader from '../components/common/header';
import AppFooter from '../components/common/footer';
// import AppHome from './home';
import AppHome from '../views/home';

import { Layout } from 'antd';

function HomePage(){
    const { Header, Content, Footer } = Layout;
    return(
        <div>
        <Layout className="mainLayout">
           <Header>
             <AppHeader/>
           </Header>
           <Content>
             <AppHome/>
           </Content>
           <Footer>
             <AppFooter/>  
           </Footer>      
       </Layout></div>
    )
}

export default HomePage;