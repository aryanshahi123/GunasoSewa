import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import HistoryPage from './pages/HistoryPage.jsx'
import HomePage from './pages/HomePage.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store.js";
import ComplaintForm from './pages/ComplaintForm.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<HomePage />}></Route>
          <Route path="history" element={<HistoryPage currentUser="local" />}></Route>
          <Route path="complaints/new" element={<ComplaintForm currentUser="local" />}></Route>
          <Route path="adminpanel" element={<HistoryPage currentUser="admin" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>


)
