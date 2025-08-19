import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { MainLayout } from './MainLayout';
import Cart from './pages/Cart';
import Home from './pages/Home';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
