import { ReactNode } from "react";

const MainLayout = ({children}: {children: ReactNode}) => {
    return ( <html>
        <body>
            
            {children}
        </body>
    </html> );
}
 
export default MainLayout;