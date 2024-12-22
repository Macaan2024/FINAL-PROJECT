const Header = () => {
    return (
        <>
            <nav className="container w-full bg-black py-3 px-3 text-white flex justify-between items-center">
                    <h5>Grading Application</h5>
                    <form>
                        <button className="text-sm bg-red-900 text-white py-2 px-2 ">Logout</button>
                    </form>
            </nav>
        </>
    )
}

export default Header;