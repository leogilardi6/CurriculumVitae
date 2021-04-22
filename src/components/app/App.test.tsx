import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




// useEffect(function () {
//   getGifs({ keyword }).then(gifs => setGifs(gifs));
//   if (gola != sdako) {
//     ss
//   }
// },
//   // [] son las dependencias, si no lo ponemos, se ejecuta en loop lo de adentro si es que cambia el estado. 
//   // En el caso de cambiar alguna de las variables que ponemos en las dependencias, se ejecuta el metodo.
//   [keyword]);