import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { Suspense, lazy, useContext } from "react";
import { ThemeContext } from './Theme/contaxt';

const Navbar = lazy(() => import("./components/Navbar"))
const Home = lazy(() => import("./Home"))

function App() {

  const { theme } = useContext(ThemeContext)

  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className='flex items-center justify-center h-screen'>
          <img src='/loading.gif' alt='Loading' />
        </div>
      }>
        <div className={`${theme == "dark" ? "bg-slate-900 text-gray-100"
          : "bg-gray-50 text-gray-800"}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  )
}
export default App;