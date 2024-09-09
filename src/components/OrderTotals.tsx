import { useMemo } from "react";
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrderProps = {
    order: OrderItem[];
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderProps) {

    const subTotalAmount = useMemo(() => order.reduce((total, itemOrder) => total + (itemOrder.price * itemOrder.quantity), 0), [order]);
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);

    return (
        <>
            <h1 className="font-black text-2xl text-blue-700 py-4">Total & Gratuity</h1>
            <p>Subtotal to Pay:
                <span className="font-bold">
                    {formatCurrency(subTotalAmount)}
                </span>
            </p>
            <p>Gratuity:
                <span className="font-bold">
                    {formatCurrency(tipAmount)}
                </span>
            </p>
            <p>Total to Pay:
                <span className="font-bold">
                    {formatCurrency(totalAmount)}
                </span>
            </p>

            <button
                className="w-full bg-green-700 p-3 uppercase text-white font-bold mt-10
                disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={placeOrder}>Save Order</button>
        </>
    )
}
