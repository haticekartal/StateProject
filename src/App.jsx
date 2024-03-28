
import './App.css'
import Photo from './Photo';
import { useState } from 'react';

function getRandomPhoto(){
  const photosArray =['Ash', 'Charmender', 'Pikachu','Squirtle'];
  return photosArray[Math.floor(Math.random()*photosArray.length)];
}




function App() {  
  const [photos, setPhotos] = useState([]);

  const handleClick = () =>{
    setPhotos([...photos, getRandomPhoto()]);
  };

  const photolist = photos.map((photo,index)=> {

    return <Photo key={index} photoName={photo}/>;

  });

  return (
    <div className='App'> 
      <button className='appButton' onClick={handleClick}>Fotoğraf Ekle</button>
      <div className='photoList'>
        {photolist}
      </div>
  
    </div>
  );
      
      
  
}

export default App;
