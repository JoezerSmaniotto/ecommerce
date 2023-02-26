import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { SellerContextProvider } from './contexts/SellerContext'
import { CheckoutDataContextProvider } from './contexts/CheckoutDataContext'
import { PurchaseContextProvider } from './contexts/PurchaseContextProvider'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PurchaseContextProvider>
          <SellerContextProvider>
            <CoffeeContextProvider>
              <CheckoutDataContextProvider>
                <ToastContainer
                  position="bottom-right"
                  autoClose={3 * 1000} // 3 seconds
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                <Router />
              </CheckoutDataContextProvider>
            </CoffeeContextProvider>
          </SellerContextProvider>
        </PurchaseContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
