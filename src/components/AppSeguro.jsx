import React from 'react'
import Formulario from './Formulario'

const AppSeguro = () => {
    return (
        <>
            <header className='my-10'>
                <h1 className='text-white text-center text-3xl font-black' >
                    Cotizador de Seguros de Auto

                </h1>
            </header>
            <main className='bg-white md:2/3 lg:w-2/3 mx-auto shadow 
            p-5 md:p-10 my-10 rounded  '>
                <Formulario/>
            </main>
        </>
    )
}

export default AppSeguro