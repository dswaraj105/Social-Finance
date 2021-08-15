import { Fragment } from "react";

import MenuAppBar from '../MenuAppBar/MenuAppBar';

const Layout = (props) => {
    return <Fragment>
        <MenuAppBar />
        <main>
            {props.children}
        </main>
    </Fragment>
}

export default Layout;