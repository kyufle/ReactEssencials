import { useRef, useState } from 'react';
//si le das a borrar y si en tardas 3 segundos es un si. Si le das que no es que no y si le das que si es que si.

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';

const ids = JSON.parse(localStorage.getItem('selectedIds') || []);
const selectedPlaces = ids.map((id) => AVAILABLE_PLACES.find((place) => place.id === id));

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(selectedPlaces || []);
  const [sortedPlaces, setSortedPlaces] = useState([]);
  navigator.geolocation.getCurrentPosition((position)=>{
    sortPlacesByDistance
  })
  //funcion para poder ordenar, quiero una lista que tenga todos los sitios ordenados.
  //Hay que tener en cuenta que están los AVAILABLE_PLACES y position.
  //

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) { //booleano
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id); //devuelve el sitio
      return [place, ...prevPickedPlaces];
    });
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();

    const ids = JSON.parse(localStorage.getItem('selectedIds') || []);
    const newIds = ids.filter((idPlace)=>idPlace !== selectedPlace.current);
    localStorage.setItem('selectedIds', JSON.stringify(newIds));
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
