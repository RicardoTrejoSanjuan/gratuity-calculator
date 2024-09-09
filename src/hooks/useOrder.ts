import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);


    const addItem = (item: MenuItem) => {
        const itemExist = order.findIndex(element => element.id === item.id);
        if (itemExist >= 0) {
            const updatedOrden = order.map(orderItem => {
                if (orderItem.id === item.id) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                }
                return orderItem
            });
            setOrder(updatedOrden);
        } else {
            const newOrder = { ...item, quantity: 1 };
            setOrder(prevOrden => [...prevOrden, newOrder]);
        }
    }

    const removeOrden = (id: OrderItem['id']) => {
        const updatedOrden = order.filter(orderItem => orderItem.id !== id);
        setOrder(updatedOrden);
    }

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeOrden,
        placeOrder
    }
}