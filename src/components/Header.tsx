const Header = () => {
    return (
        <header className="bg-blue-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-xl font-bold">Gratuity Calculator</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="https://heartfelt-druid-c67a72.netlify.app/" target="_blank" className="text-white hover:text-blue-200">GuitarLa</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header