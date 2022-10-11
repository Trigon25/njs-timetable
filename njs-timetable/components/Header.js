

const Header = (props) => {
    return (
        <div className="bg-rose-400 w-screen h-20 flex justify-center items-center">
            <p className="text-white text-3xl font-bold">{props.title}</p>
        </div>
    )
}

export default Header;