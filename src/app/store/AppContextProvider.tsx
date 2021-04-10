import React from 'react';

import CoordinateProvider from '../context/CoordinateContext';
import TodoProvider from '../context/TodoContext';
import { combineComponents } from '../utils/combineComponents';

// order matters, top components can be used by bottom components
const providers: Array<React.FC<React.ReactNode>> = [
    CoordinateProvider,
    TodoProvider,
];

export const AppContextProvider = combineComponents(...providers);
