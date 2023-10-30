import { RiDeleteBinLine  } from 'react-icons/ri'
import { useNavigate } from 'react-router'
import { borrarComida } from '../api/comida'


function BorrarComida(props) {
    
    const navigate = useNavigate()

    function onClick() {
        borrarComida(props.id_comida)
            .then(resultado => {
                navigate(0)
            })
    }

    return (
        <RiDeleteBinLine
            style={{margin: '10px'}}
            className='basurero'
            size={30}
            onClick={onClick}
        />
    )
}

export default BorrarComida
