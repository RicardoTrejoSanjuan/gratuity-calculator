import { Dispatch, SetStateAction } from "react"
import { tipOptions } from "../db/db"


type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {

    return (
        <>
            <h3 className="font-black text-xl text-blue-700 py-4">Gratuity</h3>
            <main className="grid w-full place-items-center">
                <div className="grid w-full grid-cols-3 rounded-xl bg-gray-200 p-1">
                    {
                        tipOptions.map(tipOption => (
                            <div key={tipOption.id}>
                                <input
                                    type="radio"
                                    name="tip"
                                    id={tipOption.id}
                                    value={tipOption.value}
                                    className="peer hidden"
                                    onChange={e => setTip(+e.target.value)}
                                    checked={tipOption.value === tip} />
                                <label htmlFor={tipOption.id} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">{tipOption.label}</label>
                            </div>
                        ))
                    }
                </div>
            </main>
        </>
    )
}
