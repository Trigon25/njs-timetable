import Header from "../components/Header.js"




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const sem = [
  { name: 'Semester One', href: '#', current: false },
  { name: 'Semester Two', href: '#', current: false },
]


const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header title="Timetable" />
      <div className="flex-row items-center">
        {sem.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'px-3 py-2 rounded-md text-sm font-medium'
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Home;