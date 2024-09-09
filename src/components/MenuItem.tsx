import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}
export default function MenuItem({ item, addItem }: MenuItemProps) {

    return (
        <button
            className="py-4 px-4 flex justify-between w-full border-b-2 hover:bg-blue-300"
            onClick={() => addItem(item)}>
            <span className="text-lg font-medium">{item.name}</span>
            <span className="text-lg font-semibold text-blue-700">${item.price}</span>
        </button>

    )
}
