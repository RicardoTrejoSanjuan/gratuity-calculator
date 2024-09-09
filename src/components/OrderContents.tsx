import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeOrden: (id: OrderItem['id']) => void,
}

export default function OrderContents({ order, removeOrden }: OrderContentsProps) {
    return (
        <>
        {
            order.map((item: OrderItem) => (
                <div key={item.id} className="grid grid-cols-6 gap-0 w-full py-2 pl-3 border-b-2">
                    <div className="col-span-4 row-span-1 font-bold flex">{item.name}</div>
                    <div className="col-span-1 row-span-2 font-bold flex items-center justify-center text-blue-700">{formatCurrency(item.price * item.quantity)}</div>
                    <div className="col-span-1 row-span-2 font-bold flex items-center justify-center">
                        <button
                            className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={() => removeOrden(item.id)}>X</button>
                    </div>
                    <div className="col-span-2 row-span-1 flex items-center">Count: {item.quantity}</div>
                    <div className="col-span-2 row-span-1 flex items-center">Price: {formatCurrency(item.price)}</div>
                </div>
            ))
        }
        </>
    )

}
