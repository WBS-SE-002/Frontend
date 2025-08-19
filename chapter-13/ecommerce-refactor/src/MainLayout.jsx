import { Outlet } from 'react-router';
import { useState } from 'react';
export function MainLayout() {
    const [cart, setCart] = useState([1, 2, 3, 4]);
    return (
        <div>
            <h1>E Commerce</h1>
            <Outlet context={{ cart: cart, setCart: setCart }} />
        </div>
    );
}
