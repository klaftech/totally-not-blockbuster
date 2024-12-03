import { Outlet } from 'react-router-dom';
import Header from './Header'

function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet /> {/* Content will be rendered here */}
                <p></p>
            </main>
            <footer style={{"align": "center", "padding": "20px"}}>
                <div>
                    <img src="/flatiron-favicon.ico" />
                    <span style={{"marginLeft": "10px"}}>Flatiron School | <i>Software Engineering Phase 2 Project</i></span>
                </div>
            </footer>
        </div>
    );
}

export default Layout;