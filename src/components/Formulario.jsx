import { useState } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants/index'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'
import Result from './Result'
const Formulario = () => {
  const [info,setInfo]=useState('')

  const { handleChangeData, data, setError, error, cotizarSeguro } = useCotizador()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(data).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }
    setError('')

    const value = cotizarSeguro()
    setInfo(value)
  }


  return (
    <>
      <form

      >
        {
          error && <Error />
        }
        <div className='my-5'>
          <label className='
            block mb-3 font-bold text-gray-700 uppercase
          '>Marca</label>
          <select
            className='
            w-full p-3
            bg-white
            border
            border-gray-200'
            name='marca'
            id='marca'
            onChange={e => handleChangeData(e)}
            value={data.marca}
          >
            <option value=''>Seleccione una marca</option>
            {
              MARCAS.map(marca => (
                <option
                  key={marca.id} value={marca.id}>{marca.name}</option>
              ))
            }
          </select>
        </div>
        <div className='my-5'>
          <label className='
            block mb-3 font-bold text-gray-700 uppercase `
          '>Año</label>
          <select className='
            w-full p-3
            bg-white
            border
            border-gray-200'
            name='year'
            id='year'
            onChange={e => handleChangeData(e)}
            value={data.year}

          >
            <option value=''>Seleccione el año</option>
            {
              YEARS.map(year => (
                <option
                  placeholder='Seleccione una año'
                  key={year} value={year}>{year}</option>
              ))

            }
          </select>
          <div className='my-5'>
            <label className='
            block mb-3 font-bold text-gray-700 uppercase
          '>Plan</label>
            {
              PLANES.map(plan => (
                <div key={plan.id} className='flex items-center'>
                  <input
                    type='radio'
                    name='plan'
                    id={plan.id}
                    value={plan.id}
                    onChange={e => handleChangeData(e)}
                  />
                  <label htmlFor={plan.id} className='ml-2'>{plan.name}</label>
                </div>
              ))
            }
          </div>
          <div className='
          flex justify-center items-center '>
            <input type='submit'
              className='w-1/2 mt-5 p-3 bg-blue-800 
              rounded-lg
              text-white uppercase hover:bg-blue-500 hover:text-white-800 font-bold'
              value='Cotizar'
              onClick={handleSubmit}

            />
          </div>
        <div>
          {
            info&& <Result info={info}/>
          }
        </div>
        </div>

      </form>

    </>
  )
}

export default Formulario