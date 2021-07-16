import React from 'react';

import CoordinateProvider from '../context/CoordinateContext';
import TodoProvider from '../context/TodoContext';
import ThemeProvider from '../context/ThemeContext';
import AccordianProvider from '../context/AccordianContext';

import { combineComponents } from '../utils/combineComponents';

// order matters, top components can be used by bottom components
const providers: Array<React.FC<React.ReactNode>> = [
    CoordinateProvider,
    TodoProvider,
    ThemeProvider,
    AccordianProvider
];

export const AppContextProvider = combineComponents(...providers);
