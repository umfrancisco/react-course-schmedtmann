import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import City from "./components/City";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CitiesContextProvider from "./contexts/CitiesContextProvider";
import { lazy, Suspense } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// BEFORE LAZY LOADING
// dist/assets/index-CrXdrwhe.css   31.06 kB │ gzip:   5.09 kB
// dist/assets/index-Djxkzu-Y.js   603.29 kB │ gzip: 176.91 kB

// AFTER LAZY LOADING
// dist/assets/icon-C76IL8ru.png            20.19 kB
// dist/assets/bg-CEKSzw8m.jpg             344.58 kB
// dist/assets/Logo-BYigXoGP.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-BJLq8WQv.css            0.34 kB │ gzip:   0.21 kB
// dist/assets/Product-fRlGNPaH.css          0.46 kB │ gzip:   0.27 kB
// dist/assets/Homepage-BZtX-LZs.css         0.50 kB │ gzip:   0.31 kB
// dist/assets/PageNav-DPBPfvwV.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/AppLayout-Csl6QOa5.css        1.38 kB │ gzip:   0.55 kB
// dist/assets/index-C1nXt7E6.css           27.93 kB │ gzip:   4.45 kB
// dist/assets/Product.module-Dk-SyBnL.js    0.05 kB │ gzip:   0.06 kB
// dist/assets/PageNotFound-JfAgXk2G.js      0.16 kB │ gzip:   0.15 kB
// dist/assets/ProtectedRoute-wOzUDR7Y.js    0.20 kB │ gzip:   0.18 kB
// dist/assets/Logo-BOT62t36.js              0.23 kB │ gzip:   0.20 kB
// dist/assets/PageNav-CZiY60si.js           0.51 kB │ gzip:   0.27 kB
// dist/assets/Homepage-KNvC6Uil.js          0.66 kB │ gzip:   0.39 kB
// dist/assets/Pricing-Bd5EKWtX.js           0.68 kB │ gzip:   0.42 kB
// dist/assets/Product-CmP959Db.js           0.89 kB │ gzip:   0.49 kB
// dist/assets/Login-BLi2ZwaX.js             1.03 kB │ gzip:   0.53 kB
// dist/assets/AppLayout-DSECtwQX.js       155.34 kB │ gzip:  45.77 kB
// dist/assets/index-C-t5ynjP.js           445.51 kB │ gzip: 131.09 kB

function App() {
  return (
    <AuthContextProvider>
      <CitiesContextProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/product" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/app" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesContextProvider>
    </AuthContextProvider>
  );
}

export default App;