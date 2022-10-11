import React from "react"

const DayShed = (props) => {
    // const [slots,setSlots] = React.useState(props.data)
    console.log(props.slots[0].duration)
    return (
        <div>
            <p className="text-center">{props.day}</p>
            <div className="bg-sky-200 max-h-screen w-44 px-0.5 border-gray-500 border-2 flex flex-col">
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">830</p>
                    {
                        props.slots[0].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[0].module} {props.slots[0].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[0].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[0].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">930</p>
                    {
                        props.slots[1].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[1].module} {props.slots[1].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[1].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[1].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">1030</p>
                    {
                        props.slots[2].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[2].module} {props.slots[2].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[2].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[2].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">1130</p>
                    {
                        props.slots[3].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[3].module} {props.slots[3].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[3].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[3].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">1230</p>
                    {
                        props.slots[4].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[4].module} {props.slots[4].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[4].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[4].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">1330</p>
                    {
                        props.slots[5].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[5].module} {props.slots[5].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[5].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[5].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">1430</p>
                    {
                        props.slots[6].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[6].module} {props.slots[6].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[6].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[6].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">1530</p>
                    {
                        props.slots[7].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[7].module} {props.slots[7].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[7].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[7].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">1630</p>
                    {
                        props.slots[8].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[8].module} {props.slots[8].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[8].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[8].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">1730</p>
                    {
                        props.slots[9].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[9].module} {props.slots[9].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[9].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[9].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">1830</p>
                    {
                        props.slots[10].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[10].module} {props.slots[10].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[10].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[10].location}</p>
                            </div>
                    }
                </div>
                <div className="border-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400 text-[10px] hover:text-[12px]">
                    <p className="text-sm w-10 text-center">1930</p>
                    {
                        props.slots[11].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[11].module} {props.slots[11].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[11].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[11].location}</p>
                            </div>
                    }
                </div>
                <div className="order-b-2 h-20 w-full py-2 flex items-center hover:bg-sky-400">
                    <p className="text-sm w-10 text-center">2030</p>
                    {
                        props.slots[12].duration == 0 ? null :
                            <div>
                                <p className="text-inherit text-center w-32">{props.slots[12].module} {props.slots[12].type}</p>
                                <p className="text-inherit text-center w-32">{props.slots[12].time}</p>
                                <p className="text-inherit text-center w-32">{props.slots[12].location}</p>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default DayShed;