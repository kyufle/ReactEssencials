import { useEffect, useRef, useState } from 'react';
//si le das a borrar y si en tardas 3 segundos es un si. Si le das que no es que no y si le das que si es que si.

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

const getSelectedIdsFromLocaleStorage = (() => {
  return JSON.parse(localStorage.getItem('selectedIds') || "[]");
})
const ids = getSelectedIdsFromLocaleStorage();
const selectedPlaces = ids.map((id) => AVAILABLE_PLACES.find((place) => place.id === id));
console.log(selectedPlaces);


function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(selectedPlaces || []);
  const [sortedPlaces, setSortedPlaces] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("position", position);

      setSortedPlaces(sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude));
    }, console.error)
    console.log(sortedPlaces);
  }, [])

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
    //efecto secundario
    const ids = getSelectedIdsFromLocaleStorage();
    const newIds = ids.find((idPlace) => idPlace === id);
    if (!newIds) {
      localStorage.setItem('selectedIds', JSON.stringify([...ids, id]));
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();

    const ids = getSelectedIdsFromLocaleStorage();
    const newIds = ids.filter((idPlace) => idPlace !== selectedPlace.current);
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
          places={sortedPlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
