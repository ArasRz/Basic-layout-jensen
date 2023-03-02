import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"





const Layout = () => {
    return(
        <>
    
        <Header />

       
       <div id="content"> 
       <Sidebar />
       <Main />
        </div>
        <Footer />
       </>
    )
}

export default Layout