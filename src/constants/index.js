export const MARCAS = [
    { id: 1, name: 'Audi',country:'Alemania',continent:'Europa' },
    { id: 2, name: 'BMW',country:'Alemania',continent:'Europa' },
    { id: 3, name: 'Chevrolet',country:'Estados Unidos',continent:'América' },
    { id: 4, name: 'Fiat',country:'Italia',continent:'Europa' },
    { id: 5, name: 'Ford',country:'Estados Unidos',continent:'América' },
    { id: 6, name: 'Honda',country:'Japón',continent:'Asia' },
    { id: 7, name: 'Hyundai',country:'Corea del Sur',continent:'Asia' },
    { id: 8, name: 'Jeep',country:'Estados Unidos',continent:'América' },
    { id: 9, name: 'Kia',country:'Corea del Sur',continent:'Asia' },
];

const YEARSMAX = new Date().getFullYear()
export const YEARS = Array.from(new Array(20), (valor, index) => YEARSMAX - index)

export const PLANES = [
    { id: 1, name: 'Básico' },
    { id: 2, name: 'Intermedio'},
    { id: 3, name: 'Completo' }
]