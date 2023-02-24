import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './Pages/Home'
import { Checkout } from './Pages/Checkout/index'
import { SearchOrder } from './Pages/SearchOrder'
import { NotFound } from './Pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/searchOrder" element={<SearchOrder />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
