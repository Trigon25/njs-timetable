

const Header = (props) => {
    return (
        <div className="bg-sky-800 w-screen h-20 flex justify-center items-center">
            <p className="text-white text-3xl font-bold">{props.title}</p>
        </div>
    )
}

export default Header;