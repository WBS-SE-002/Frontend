import { useOutletContext } from 'react-router';
export default function Card() {
    const { cart, setCart } = useOutletContext();
    return (
        <>
            <h3>Card</h3>
            <p>{cart[0]}</p>
            <button onClick={() => setCart([3, 4, 5, 6])}>
                {' '}
                Something random
            </button>
        </>
    );
}
