'use client'

import React, { useState } from 'react'

export enum CounterValue {
    INCREMENT = "increment",
    DECREMENT = "decrement"
}

export default function Counter() {

    const [counter, setCounter] = useState(0);

    function heandleCounter(type: CounterValue) {

        if (type === CounterValue.INCREMENT) {
            setCounter((prev) => prev + 1);
        } else {

            if (counter >= 1) {
                setCounter((prev) => prev - 1);
            } else {
                
            }

        }

    }


    return (
        <div className='flex '>
            <div className='flex bg-gray-300 rounded-full gap-4 px-2 py-1'>
                <button onClick={() => heandleCounter(CounterValue.DECREMENT)}>
                    -
                </button>

                <p className='w-5 text-center'>{counter}</p>

                <button onClick={() => heandleCounter(CounterValue.INCREMENT)}>
                    +
                </button>
            </div>
        </div>
    )
}
