import {ReactNode} from "react";

const Layout = ({children}: {children:React.ReactNode}) =>{

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            {children}
        </div>
    )
}

export default Layout