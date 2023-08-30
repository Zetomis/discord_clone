import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html>
            <body>
                <div className="bg-red-500 h-full">{children}</div>
            </body>
        </html>
    );
};

export default AuthLayout;
