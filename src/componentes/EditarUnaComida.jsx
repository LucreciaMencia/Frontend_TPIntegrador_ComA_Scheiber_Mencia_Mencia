import { useNavigate } from 'react-router'
import { GrEdit } from 'react-icons/gr'


function EditarUnaComida(props) {

    const navigate = useNavigate()

    function onClick() {
        navigate(`/editarComida/${props.id_comida}`)
    }

    return (
        <GrEdit
            className='editar-comida'
            size={30}
            onClick={onClick}
        />
    )
}

export default EditarUnaComida