import '@styles/global.css';

export const metadata = {
    title: 'TheresPromptForIt',
    description: 'Discover the best of the GPT Propmts',
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout