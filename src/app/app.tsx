import { useState } from "react";
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ICoordinate from './interfaces/ICoordinate';


const App = () =>{

        const [ExampleCoordinate, setCoordinate] = useState<ICoordinate>({
        name: "Example Coordinate",
        latitude : 32,
        longitude : 122,
        relatedCoordinates: [10, 22, 87]
    } as ICoordinate);

    return (
        <div>
            <Header />
            <hr />
                <h2>Coordinates:</h2>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Related Coordinates</th>

                    </thead>
                    <tbody >
                        <tr>
                            <td>{ExampleCoordinate.name}</td>
                            <td>{ExampleCoordinate.latitude}</td>
                            <td>{ExampleCoordinate.longitude}</td>
                            <td>{ExampleCoordinate.relatedCoordinates.map((val, ind)=> {
                                return <li key={ind}>{val}</li>
                            })}</td>

                        </tr>
                    </tbody>
                </table>
            <hr />
            <Footer />
        </div>
    )
}

export default App;