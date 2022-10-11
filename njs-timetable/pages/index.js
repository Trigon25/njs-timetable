import React from "react"
import { render } from "react-dom"
import Header from "../components/Header"
import DaySched from "../components/DaySched"

let timetable = require('../data/timetable.json');

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Home = () => {
  const [isCurrent, setIsCurrent] = React.useState('false')
  const toggleCurrent = () => { setIsCurrent(prevToggle => !prevToggle) }

  const [Data, setData] = React.useState(timetable)

  const show = { name: 'Show Timetable', current: isCurrent }
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header title="Timetable" />
      <div className="flex-col items-center pt-2">
        <button
          onClick={toggleCurrent}
          className={classNames(
            show.current
              ? 'bg-slate-300 text-gray-700 ring ring-slate-700'
              : 'text-gray-600 bg-slate-200 hover:bg-slate-700 hover:text-white',
            'px-3 py-2 rounded-md text-sm font-medium'
          )}
        >
          {show.name}
        </button> 
      </div>
      {isCurrent ?
        <div className="grid grid-cols-5 gap-1 py-4" >
          <DaySched day="Mon" slots={Data[0].data[0].slots} />
          <DaySched day="Tue" slots={Data[0].data[1].slots} />
          <DaySched day="Wed" slots={Data[0].data[2].slots} />
          <DaySched day="Thu" slots={Data[0].data[3].slots} />
          <DaySched day="Fri" slots={Data[0].data[4].slots} />
          {/* <DaySched day="Sat" slots={Data[0].data[5].slots} />
          <DaySched day="Sun" slots={Data[0].data[6].slots} /> */}
        </div>
        : null
      }
    </div>
  )
}

export default Home;


{/* <a
  key={item.name}
  href={item.href}
  className={classNames(
    item.current
      ? 'bg-gray-900 text-white'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    'px-3 py-2 rounded-md text-sm font-medium'
  )}
  aria-current={item.current ? `${item.name}` : undefined}
>
  {item.name}
</a> */}