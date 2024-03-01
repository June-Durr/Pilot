    import React from "react";

    export const TaskCard =  () => {
    const tasks = [
        {
            key: 1,
            name: "task 1",
            hours: "1 hour",
            description: "task 1 description",
            hashtag: "#1",
            img: "https://cdn.tuk.dev/assets/components/misc/doge-coin.png"
        },
        {
            key: 2,
            name: "task 2",
            hours: "2 hours",
            description: "task 1 description",
            hashtag: "#1",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgYQsaITcofsA5kXR7Dy9GG7e9HnkPDM9Fg&usqp=CAU"
        },
        {
            key: 3,
            name: "task 3",
            hours: "3 hours",
            description: "task 1 description",
            hashtag: "#1",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1KyzX_DQt1Ebm5YcY2UaQLJxRICIWz_fGQ&usqp=CAU"
        },
        {
            key: 4,
            name: "task 4",
            hours: "4 hours",
            description: "task 1 description",
            hashtag: "#1",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MGLDYrrXrp5pnpPYsFclF_XbN82U42XeAA&usqp=CAU"
        }
    ];


    return (

        <body>
            <ul>
            { tasks.map((task) => (
              <li>
                <p>
                <div aria-label="group of cards" tabIndex="0" className="focus:outline-none py-8 w-full">
                <div className="lg:flex items-center justify-center w-full">
                    <div tabIndex="0" aria-label="card 1" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                        <div className="flex items-center border-b border-gray-200 pb-6">
                            <img src= {task.img} alt="coin avatar" className="w-12 h-12 rounded-full" />
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p tabIndex="0" className="focus:outline-none text-xl font-medium leading-5 text-gray-800">{task.name}</p>
                                    <p tabIndex="0" className="focus:outline-none text-sm leading-normal pt-2 text-gray-500">{task.hours}</p>
                                </div>
                                <div role="img" aria-label="bookmark">
                                    <svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p tabIndex="0" className="focus:outline-none text-sm leading-5 py-4 text-gray-600">{task.description}</p>
                            <div tabIndex="0" className="focus:outline-none flex">
                                <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{task.hashtag}</div>
                                <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{task.key}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </p>
              </li>
            )) }
            </ul>
        </body>
    )
}
