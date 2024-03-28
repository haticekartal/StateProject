import Ash from './images/ash.png';
import Charmender from './images/charmender.png';
import Pikachu from './images/pikacu.jpg';
import Squirtle from './images/squirtle.png';
import './Photo.css';

const photoMap ={
    Ash,
    Charmender,
    Pikachu,
    Squirtle,


}

function Photo  ({photoName}) {
    //console.log(Ash);
    //console.log(photoName);
    console.log(photoMap[photoName]);

    return (<div className='photoDiv'>
        <img  className='photo'   src={photoMap[photoName]} alt="photo" />
        
        
         </div>
    );
}

export default Photo;