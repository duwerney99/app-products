import React, { useState} from "react";
import DataTable from 'react-data-table-component';

const Table = () => {

    return (
        <>
        <table className="table">
            <tr>
                <th>Acciones</th>
                <th>Nombre de producto</th>
                <th>Tipo de producto</th>
                <th>Fecha de produccion</th>
                <th>Operario responsable</th>
                <th>tiempo en produccion</th>
                <th>Tipo de empaque</th>
            </tr>
            <tr>
                <td></td>
                <td>Producto 1</td>
                <td>Mineral</td>
                <td>27/07/2022</td>
                <td>Operario 1</td>
                <td>15 min</td>
                <td>Bulto de 10KG</td>
            </tr>
            <tr>
                <td>Iconos</td>
                <td>Producto 2</td>
                <td>Vitamina</td>
                <td>28/07/2022</td>
                <td>Operario 2</td>
                <td>24 min</td>
                <td>Bulto de 10KG</td>
            </tr>
            <tr>
                <td>Iconos</td>
                <td>Producto 3</td>
                <td>Premezcla</td>
                <td>28/07/2022</td>
                <td>Operario 3</td>
                <td>22 min</td>
                <td>Tarro 100ml</td>
            </tr>
        </table>
        </>
    );
}


export default Table;