import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.jsx'; // Asegúrate de que la ruta sea correcta

test('debería renderizar la lista de commits', async () => {
  render(<App />);

  // Verifica que la lista de commits se haya renderizado
  const commitList = screen.getByRole('list');
  expect(commitList).toBeInTheDocument();

  // Puedes agregar más aserciones según tus necesidades
});
