
interface ICoordinate {
    name: string,
    latitude : number,
    longitude : number,
    relatedCoordinates: Array<number>
}


type CoordinateContextType = {
    coordinates: ICoordinate[];
    updateCoordinate: (updatedCoordinate: ICoordinate) => void;
};

