import React from 'react';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import KanbanControls from './components/KanbanControls';
import { KanbanProvider } from './context/KanbanContext';

const App = () => (
  <KanbanProvider>
    <KanbanControls />
    <KanbanBoard />
  </KanbanProvider>
);

export default App;
