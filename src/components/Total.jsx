import { useSelector } from "react-redux"
import { setTotalQty, setTotalPrice } from "../Reducers/CartReducers"


const Total = () => {

  const totalQty = useSelector(setTotalQty);
  const totalPrice = useSelector(setTotalPrice);

  return (
    <div className="flex flex-col w-10/12 gap-2 py-3 xs:px-10 min-h-max">
        <div className="flex flex-row justify-between">
            <span><h1 className="font-semibold">TOTAL QTY:</h1></span>
            <span>{totalQty}</span>
        </div>
        <div className="flex flex-row justify-between">
            <span><h1 className="font-semibold">TOTAL Price:</h1></span>
            <span><span>$</span>{totalPrice}</span>
        </div>
    </div>
  )
}

export default Total