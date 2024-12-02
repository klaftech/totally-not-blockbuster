import { Outlet } from 'react-router-dom';
import Header from './Header'

function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet /> {/* Content will be rendered here */}
            </main>
            <footer>My Footer</footer>
        </div>
    );
}

export default Layout;