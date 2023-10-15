import { useState } from 'react';
// import { FaStar } from 'react-icons/fa'
// import { GiHamburger } from 'react-icons/gi'
// import { PiHamburgerDuotone } from 'react-icons/pi'
// import { RxStarFilled } from 'react-icons/rx'
// import { HiFire } from 'react-icons/hi2'
import { BsFire } from 'react-icons/bs'
import '../estilos/Estilos.css'


function StarRating(props) {

  const valorInicial = props.valorInicial !== undefined ? props.valorInicial : null;

  const [rating, setRating] = useState(valorInicial)
  const [hover, setHover] = useState(null);

  return (
    <div className='AppStar'>
      {[...Array(5)].map((star, index) => {

        const currentRating = index + 1;

        return (
          <label>
            <input
              type='radio'
              name='rating'
              value={currentRating}
              onClick={() => setRating(currentRating)}>                
            </input>
            <BsFire
              className='star'
              size={50}
              color={currentRating <= (hover || rating) ? "#c44536" : "#adb5bd"}
              onMouseEnter={props.puedePuntuar ? () => setHover(currentRating) : null}
              onMouseLeave={props.puedePuntuar ? () => setHover(null) : null}
            />
          </label>
        );
      })}
    </div>
  )
}

export default StarRating