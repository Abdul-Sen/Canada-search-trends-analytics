

interface ICoordinate {
    name: string,
    latitude : number,
    longitude : number,
    relatedCoordinates: Array<number>
}

export default ICoordinate;