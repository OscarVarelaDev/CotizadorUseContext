import { MARCAS,PLANES } from "../constants";

export function getYear(year){
    return new Date().getFullYear() - year
  
    }

export function getValueCountry(data,resultado){
   
    MARCAS.forEach((valor)=>{
        console.log(data.continent)
        if(valor.id==data.marca){
            switch (valor.continent) {
                case 'Europa':
                    resultado*=1.3
                    break;
                case 'America':
                    resultado*=1.15
                    break;
                case 'Asia':
                    resultado*=1.05
                    break;
                
                
                default:
                    break;
            }
        }
    })
   
    return(resultado)

}
export function getPlan(data,resultado){
    const newData= Object.values(data)
   PLANES.forEach((plan)=>{
            if(plan.id==newData[2]){
                switch(plan.name){
                    case 'Básico':
                        resultado *=2.0
                        break
                    case 'Intermedio':
                        resultado *=5.0
                        break
                    case 'Completo':
                        resultado *=7.0
                        break
                    default:
                        break


                }
            }

          
    })         
    return(resultado)
}
