import React from "react";

export const metadata = {
    title: 'Users page'
}
const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default Layout