import { useOutletContext } from 'react-router';
export default function Cart() {
    const { cart } = useOutletContext();
    return (
        <div>
            {cart.map((el) => (
                <p>{el}</p>
            ))}
        </div>
    );
}
