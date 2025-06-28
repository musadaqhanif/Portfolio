import Sidebar from './partials/Sidebar'
import Overlay from './partials/Overlay'

const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <main className='group/main main ml-0 lg:ml-64 '>
                <Overlay />
                {children}
            </main>
        </>
    )
}

export default Layout