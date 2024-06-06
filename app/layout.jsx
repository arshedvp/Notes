import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata = {
  title: "Notes",
  description: "A platform to keep your notes"
}
const layout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/assets/images/logo.svg"/>
      </head>
      <Provider>
        <body>
          <div className='main'>
            <div className='gradient'></div>
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  )
}

export default layout