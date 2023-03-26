import { createContext } from "react";
import { useState } from "react";
import { getYear,getValueCountry,getPlan } from '../helpers/index'


const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
    const [error, setError] = useState('')
    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [resultCotizacion, setresultCotizacion]=useState('')
    const handleChangeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const cotizarSeguro = () => {
        let resultado = 2000
        const year = getYear(data.year)
        resultado -=((year*3)* resultado)/100
        resultado = getValueCountry(data,resultado)
        resultado = getPlan(data,resultado)
    
        return resultado
    }


    return (
        <CotizadorContext.Provider
            value={{
                handleChangeData,
                data,
                setError,
                error,
                cotizarSeguro
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export { CotizadorProvider }

export default CotizadorContext;