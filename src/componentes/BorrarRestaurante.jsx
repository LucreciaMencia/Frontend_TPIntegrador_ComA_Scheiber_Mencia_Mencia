import { TiUserDelete } from 'react-icons/ti'
import { useNavigate } from 'react-router'
import borrarRestaurante from '../api/restaurante/borrarRestaurante'


function BorrarRestaurante(props) {
    const navigate = useNavigate()

    function onClick() {
        borrarRestaurante(props.id_usuario)
            .then(resultado => {
                navigate('/')
            })
    }

    return (
        <TiUserDelete
            className='extintor'
            size={35}
            onClick={onClick}
        />
    )
}

export default BorrarRestaurante
