import React, { createContext } from 'react';
const DEFAULT_COORDINATES : ICoordinate[] = [
    {
        name: "coordiante 1",
        latitude: 420,
        longitude: 120,
        relatedCoordinates: [90, 180, -90, -180]
    },
    {
        name: "coordiante 2",
        latitude: 90,
        longitude: 60,
        relatedCoordinates: [10, 20, 30, 40]
    }
]
export const CoordinateContext = createContext<CoordinateContextType | null>(null);

const CooridnateProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [coordinates, setCoordinates] = React.useState<ICoordinate[]>(DEFAULT_COORDINATES);

    const updateCoordinate = (updatedCoordinate: ICoordinate) => {

        coordinates.filter((currentCoordinate: ICoordinate) => {
            if (currentCoordinate.name == updatedCoordinate.name) {
                currentCoordinate = updatedCoordinate;
                setCoordinates([...coordinates]);
            }
        });
    };
    
    return (
        <CoordinateContext.Provider value={{ coordinates, updateCoordinate }}>
            {children}
        </CoordinateContext.Provider>
    );
}

export default CooridnateProvider;