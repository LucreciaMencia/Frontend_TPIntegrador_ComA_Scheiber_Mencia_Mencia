import { TiUserDelete } from 'react-icons/ti'
import { useNavigate } from 'react-router'
import borrarComensal from '../api/comensal/borrarComensal'


function BorrarComensal(props) {
    const navigate = useNavigate()

    function onClick() {
        borrarComensal(props.id_usuario)
            .then(resultado => {
                navigate('/')
            })
    }

    return (
        <TiUserDelete
            className='extintor'
            size={25}
            onClick={onClick}
        />
    )
}

export default BorrarComensal
