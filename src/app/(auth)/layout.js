import { Inter } from "next/font/google";
import '../globals.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Login Now",
    description: "Login now user"
}

export default function AuthRoute({ children }) {
    return <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
    </html>
}