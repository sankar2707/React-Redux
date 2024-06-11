import {useState} from 'react';
import {handleDelete, handleQty} from '../Reducers/CartReducers'
import { useDispatch } from 'react-redux';

const CartProduct = ({title,id,description,price,thumbnail}) => {
  const [selectedValue,setSelectedValue] = useState(1);
  const [subTotal,setSubTotal] = useState(price);
  const dispatch = useDispatch();

  function handleSelected(e,id){
    let currQty = Number(e.target.value);

    dispatch(handleQty({id:id,qty:currQty}));

    setSelectedValue(() => currQty);   
    setSubTotal(()=> currQty*price);
  }

  return (
    <div className="flex flex-col items-center justify-center w-10/12 gap-2 py-4 xs:px-10 min-h-max" data-name="product-cart-card text-black flex-wrap">

      <div className="flex flex-col items-start justify-between w-full gap-10 mb-6 xs:flex-row h-4/6" data-name="product-cart-details">

        <div className="flex flex-col items-start justify-center w-full h-full gap-3 xs:w-4/6 md:flex-row">
          <div className="flex-wrap w-2/5 md:h-full">
            <img src={thumbnail} alt="Product-Image" className="object-center object-contain xs:object-cover xs:object-center min-w-[120px] min-h-[120px] xs:min-w-[100px] xs:min-h-[100px]" data-name="product-cart-image" />
          </div>

          <div className="flex flex-col flex-wrap gap-5 sm:w-3/5 w-5/5">
            <h1 className="text-lg font-bold break-keep whitespace-nowrap" data-name="product-cart-title" >{title}</h1>
            <p className="w-full truncate whitespace-normal line-clamp-3 break-keep" data-name="product-cart-description">{description}</p>
          </div>
        </div>

        <div className="flex flex-col w-full gap-10 xs:w-2/6">
          <div className="flex flex-row flex-wrap items-end justify-end whitespace-nowrap">
            <span data-name="product-cart-count">
              <select name="count" className="px-2 bg-transparent outline-1 outline" value={selectedValue} onChange={(e) => handleSelected(e,id)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </span>
            <div className="ml-10">
              <span>$</span>
              <span data-name="product-cart-price">{price}</span>
            </div>
          </div>
          <span className="flex justify-end text-xs font-semibold text-red-800 cursor-pointer mt-15 sm:text-base"
          onClick={() => dispatch(handleDelete(id))}
           >Remove</span>
        </div>

      </div>

      <div className="flex flex-col flex-wrap w-full gap-4 text-sm h-2/6" data-name="product-cart-subDetailsGroup">
        <hr className="min-h-[1.9px] bg-black opacity-50"/>
        <div className="flex flex-row flex-wrap justify-between">
          <span className="font-semibold cart-subtotal-title break-keep" data-name="product-cart-subTotal">SUBTOTAL :</span>
          <span className="cart-subtotal-price sb-details"><span>$</span>{subTotal}</span>
        </div>
        <div className="flex flex-row flex-wrap justify-between">
          <span className="font-semibold break-keep">SHIPPING :</span>
          <span className="cart-subtotal-price sb-details">FREE</span>
        </div>
        <hr className="h-1 bg-black opacity-15"/>
      </div>
    </div>
  )
}

export default CartProduct;