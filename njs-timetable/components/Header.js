

const Header = (props) => {
    return (
        <div className="bg-sky-800 w-screen h-28 flex justify-center items-center">
            <p className="text-white text-3xl">{props.title}</p>
        </div>
    )
}

export default Header;