import * as React from 'react';
import { CoordinateContext } from '../../context/CoordinateContext';

const Coordinate = ()=>{

    // cRud
    const { updateCoordinate, coordinates } = React.useContext(CoordinateContext) as CoordinateContextType;
    
    // Crud
    const handleCreate =  (e: React.FormEvent, formData: ICoordinate | any)=>{
        e.preventDefault();
        console.log
    }

    // cruD
    const handleDelete = (e: React.FormEvent, formData: ICoordinate | any)=>{
        e.preventDefault();
    }

    // crUd
    const handleUpdate =  (e: React.FormEvent, formData: ICoordinate | any)=>{
        e.preventDefault();
    }

    return (
        <React.Fragment>
            {coordinates.map((val, ind)=>{
                return <div className="row" >
                    <div className="lg">{val.name}</div>
                    
                </div>
            })}
        </React.Fragment>
    )
}

export default Coordinate;