import './globals.css'
import { Provider } from '@/context/Provider';
import styles from './styles.module.css';
import { Roboto } from 'next/font/google';

export const metadata = {
    title: 'SUDOKU',
    description: 'Play sudoku!!',
}

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <h1>SUDOKU</h1>
                <Provider>
                    <main className={`${roboto.className} ${styles.sudoku}`}>
                        <div className={styles.wrapper}>
                            {children}
                        </div>
                    </main>
                </Provider>
            </body>
        </html>
    )
}
