import React from 'react'

const Result = ({info}) => {
    return (
        <div
            className='border text-center border-black-400 bg-white-100 py-3 mt-5 text-white-700'>
                <p>El costo total es de su seguro es ${info.toFixed(2)}
          </p></div>

    )
}

export default Result