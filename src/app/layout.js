import './global.css';
import { Provider } from './providers';
export const metadata = {
  title: 'Rectruit',
  description: 'A Freelancing Platform built in NextJs',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
      </head>
      <body>
      <Provider>
      {children}
      </Provider>
      </body>
      
    </html>
  )
}
