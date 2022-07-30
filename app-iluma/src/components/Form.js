import React, { useState } from "react";
import { Formik, validateYupSchema } from 'formik';

const Formulario = () => {
    return (
        <>
        <Formik
            initialValues={{
                nameProduct: '',
                dateProduction: '',
                timeProduction: '',
                typeProduct: '',
                operatorRensability: '',
                typePackaging: ''

            }}
            validate={(values) => {
                let errors = {};

                if(!values.nameProduct){
                    errors.nameProduct = 'Por favor ingresa un nombre'
                }
                return errors;
            }}
            onSubmit={(values) => {
                console.log(values);
                console.log('Formulario Enviado!!');
            }}
        >
            {({values, errors, handleSubmit, handleChange, handleBlur}) => (
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label  htmlFor='nameProduct'>Nombre Producto</label>
                        <input 
                            type='text' 
                            id='nameProduct' 
                            name="nameProduct" 
                            value={values.nameProduct}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor='dateProduction'>Fecha de Produccion</label>
                        <input 
                            type='date' 
                            id='dateProduction' 
                            name="dateProduction" 
                            value={values.dateProduction}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor='timeProduction'>Tiempo de Produccion</label>
                        <input 
                            type='time' 
                            id='timeProduction'
                            name="timeProduction" 
                            value={values.timeProduction}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor='tipeProduct'>Tipo Producto</label>
                        <input 
                            type='text' 
                            id='tipeProduct' 
                            name="tipeProduct" 
                            value={values.tipeProduct}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor='operatorRensability'>Operario Responsable</label>
                        <input 
                            type='text' 
                            id='operatorRensability' 
                            name="operatorRensability" 
                            value={values.operatorRensability}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor='typePackaging'>Tipo de Empaque</label>
                        <input 
                            type='text' 
                            id='typePackaging' 
                            name="typePackaging" 
                            value={values.typePackaging}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <button type="submit">Guardar</button>
                </form>
            )}
        </Formik>
        </>
    );
}

export default Formulario;