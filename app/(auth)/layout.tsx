import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html>
            <body>
                <div className="h-full flex items-center justify-center">
                    {children}
                </div>
            </body>
        </html>
    );
};

export default AuthLayout;
