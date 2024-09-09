import { useState } from "react"

// Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import MenuItem from "./components/MenuItem"

// Data
import { menuItems } from "./db/db"

// Hooks
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {

  const [data] = useState(menuItems);
  const { order, tip, addItem, removeOrden, setTip, placeOrder } = useOrder();

  return (
    <>
      <Header />
      <Hero />
      <section className="max-w-7xl mx-auto py-20">
        <main className="grid md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md mx-2">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Menu</h2>
            {

              data.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem} />
              ))
            }
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mx-2">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Bill</h2>
            {
              order.length === 0 ?
                <p className="text-center font-bold pt-20">The order is empty</p>
                :
                <>
                  <OrderContents
                    order={order}
                    removeOrden={removeOrden} />
                  <TipPercentageForm
                    setTip={setTip}
                    tip={tip} />
                  <OrderTotals
                    order={order}
                    tip={tip}
                    placeOrder={placeOrder} />
                </>
            }
          </div>
        </main>
      </section>
      <Footer />
    </>
  )
}

export default App
