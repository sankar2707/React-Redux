import './App.css'
import CartProduct from './components/CardProduct';
import Total from './components/Total';
import { useSelector } from 'react-redux';

function App() {

  const cartData = useSelector((state) => state.cartOperation.data );

  return (
    <div className='bg-slate-100'>
      <div className='container flex flex-col items-center justify-center w-11/12 min-h-screen gap-5 py-5 mx-auto bg-gray-300 xl:w-3/5'>
        {cartData && cartData?.map((card) =>
        <CartProduct
        key={card.id}
        id = {card.id}
        title={card.title}
        description={card.description}
        price = {card.price}
        thumbnail = {card.thumbnail}
        />
        )}
        <Total />
      </div>
    </div>
  )
}

export default App