import { Routes, Route } from 'react-router-dom'

import Index from '../HTML/Index'
import Equipamentos from '../HTML/Equipamentos'
import Explicacao from '../HTML/Explicacao'
import Contato from '../HTML/Contato'
import Ideia from '../HTML/Ideia'
import Objetivo from '../HTML/Objetivo'


function Rotas() {
    return(
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/equipamentos' element={<Equipamentos />} />
            <Route path='/explicacao' element={<Explicacao />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/ideia' element={<Ideia />} />
            <Route path='/objetivo' element={<Objetivo />} />
        </Routes>
    )  
}

export default Rotas