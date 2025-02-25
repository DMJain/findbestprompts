import '@styles/global.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'TheresPromptForIt',
    description: 'Discover the best of the GPT Propmts',
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout