import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import AppNavBar  from 'components/AppNavBar/AppNavBar';


const Layout = () => {
    return (
        <>
            <AppNavBar />
            <Suspense fallback={ null}>
                <Outlet />
            </Suspense>
        </>
    )
};

export default Layout;