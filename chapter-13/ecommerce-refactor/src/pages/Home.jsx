import { useOutletContext } from 'react-router';
import Card from '../components/Card';
export default function Home() {
    const { cart } = useOutletContext();
    return (
        <div>
            {cart.map((el) => (
                <p>{el}</p>
            ))}
            <Card />
        </div>
    );
}
