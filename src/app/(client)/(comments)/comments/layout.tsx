import {Metadata} from "next";
import React from "react";

const metaData: Metadata = {
    title: 'Comments Page',
}
const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default Layout