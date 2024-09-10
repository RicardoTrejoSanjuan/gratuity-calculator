const Header = () => {
    return (
        <div className="header">
            <header className=" p-4 relative bg-cover bg-center">
                <div className="absolute inset-0  opacity-75"></div>
                <div className="container mx-auto flex justify-between items-center relative">
                    <h1 className="text-white text-xl font-bold">Gratuity Calculator</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="https://heartfelt-druid-c67a72.netlify.app/" target="_blank" className="text-white hover:text-blue-200">GuitarLa</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className=" text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Welcome to Our Site</h2>
                    <p className="text-lg mb-8">
                        Gratuity Calculator is a user-friendly app that helps you quickly calculate tips based on your total bill.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Header