import { FaFireExtinguisher } from 'react-icons/fa6'
import borrarValoracion from '../api/valoraciones/borrarValoracion'
import { useNavigate } from 'react-router'


function BorrarValoracion(props) {

    const navigate = useNavigate()

    function onClick() {
        borrarValoracion(props.id_valoracion)
            .then(resultado => {
                navigate(0)
            })
    }

    return (
        <FaFireExtinguisher
            className='extintor'
            size={25}
            onClick={onClick}
        />
    )
}

export default BorrarValoracion
