import React, { useState} from "react";

import { ErrorMessage, Formik, validateYupSchema } from 'formik';



const Formulario = () => {
    return (
        <>
        <h2>Formulario de Productos</h2>
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

                //validacion nameProduct
                if(!values.nameProduct){
                    errors.nameProduct = 'Por favor ingresa un nombre producto'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nameProduct)){
                    errors.nameProduct = 'El nombre solo puede contener letras y espacios'
                }

                //validacion operatorRensability
                if(!values.operatorRensability){
                    errors.operatorRensability = 'Por favor ingresa un nombre valido'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.operatorRensability)){
                    errors.operatorRensability = 'El nombre solo puede contener letras y espacios'
                }

                return errors;
            }}
            onSubmit={(values) => {
                console.log(values);
                console.log('Formulario Enviado!!');
            }}
        >
            {({values, errors, handleSubmit, handleChange, handleBlur}) => (
                <div className="formContent">
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <div className="field" col-6>
                                <label  htmlFor='nameProduct'>Nombre Producto:
                                <input 
                                    type='text' 
                                    id='nameProduct' 
                                    name="nameProduct" 
                                    value={values.nameProduct}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                /> </label>
                                
                                {errors.nameProduct && <div className="error">{errors.nameProduct}</div>}
                            </div>
                            <div className="field" col-6>
                                <label htmlFor='dateProduction'>Fecha de Produccion: </label>
                                <input 
                                    type='date' 
                                    id='dateProduction' 
                                    name="dateProduction" 
                                    value={values.dateProduction}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                            />
                            </div>
                            
                        </div>
                        <div>
                            <div className="field" col-6>
                                <label htmlFor='typeProduct'>Tipo de Producto: </label>
                                <select>
                                    <option selected disabled>Selecciones un producto</option>
                                    <option>Mineral</option>
                                    <option>Vitamina</option>
                                    <option>Premezcla</option>
                                    <option>Producto terminado</option>
                                </select>
                            </div>
                            <div className="field" col-6>
                                <label htmlFor='operatorRensability'>Operario Responsable: </label>
                                <input 
                                    type='text' 
                                    id='operatorRensability' 
                                    name="operatorRensability" 
                                    value={values.operatorRensability}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.operatorRensability && <div className="error">{errors.operatorRensability}</div>}
                            </div>
                        </div>
                        <div>
                            <div className="field" col-6>
                                <label htmlFor='timeProduction'>Tiempo de Produccion: </label>
                                <input 
                                    type='time' 
                                    id='timeProduction'
                                    name="timeProduction" 
                                    value={values.timeProduction}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="field" col-6>
                            <label htmlFor='typePackaging'>Tipo de Empaque: </label>
                            <select>
                                <option selected disabled>Selecciones un empaque</option>
                                <option>Bulto de 25KG</option>
                                <option>Bulto de 10KG</option>
                                <option>Tarro de 2KG</option>
                                <option>Liquido 100ml</option>
                            </select>
                        </div>
                        <div className="submit">
                            <button type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            )}
        </Formik>
        </>
    );
}

export default Formulario;