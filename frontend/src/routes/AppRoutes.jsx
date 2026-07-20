import { BrowserRouter, Routes, Route } from "react-router-dom"


function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={
            <h1 className="text-center text-4xl mt-20 font-bold text-green-700">
              WRUL Homepage
            </h1>
          } 
        />

      </Routes>

    </BrowserRouter>

  )

}


export default AppRoutes