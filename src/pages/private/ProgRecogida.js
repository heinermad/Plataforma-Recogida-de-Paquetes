import React from 'react'

export function ProgRecogida() {
    return (
        <div >
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Programar recogida</h1>
            </div>
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="col-lg-12 col-xl-12 col-md-12 mb-4">
                    <form>

                        <fieldset className="border p-2 rounded">
                            <legend className="w-auto"><small>Información del Remitente</small></legend>
                            <div className="row">

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="">Doc No.</label>
                                        <input type="text" name="nombre" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="apartamento">Nombre(s)</label>
                                        <input type="text" name="apellidos" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="apartamento">Apellidos</label>
                                        <input type="text" name="apellidos" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="">Dirección</label>
                                        <input type="text" name="nombres" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group" id="obj1">
                                        <label htmlFor="doc_no">Barrio</label>
                                        <input required type="text" name="doc_no" className="form-control" id=""
                                            placeholder="Ingrese el barrio....." />
                                    </div>
                                </div>





                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="">Departamento</label>
                                        <input type="text" name="" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="">Ciudad</label>
                                        <input type="text" name="" id="txtvalue" className="form-control" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="fecha_inicio">Fecha Nac.</label>
                                        <input type="date" name="fecha_nac"  className="form-control"
                                            placeholder="Stock..." id="fechaInicialAuto"  required />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="">Hora</label>
                                        <input type="text" name="" id="txtvalue" className="form-control" />
                                    </div>
                                </div>
                               
                                     <div className ="col-xs-12 col-md-4 col-sm-6 " >
                                       <div className ="form-group">
                                       <label htmlFor="">Dimensiones (cm)</label>
                                              <div className ="input-group">
                                                <input name="remitosucursal" id="remitosucursal" type ="number" required className ="form-control" placeholder="Largo" />
                                                <span className ="input-group-addon"> X </span>
                                                <input name="remitonumero" id="remitonumero" type ="number" required className ="form-control" placeholder="Ancho" />
                                                <span className ="input-group-addon"> X </span>
                                                <input name="remitonumero" id="remitonumero" type ="number" required className ="form-control" placeholder="Alto" />
                                              </div>
                                       </div>
                                     </div>
                                  



                                  <div className="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="">Peso aprox.(kg)</label>
                                        <input type="number" name="" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-2 col-sm-6 col-md-6 col-xs-6">
                                    <div className="form-group">
                                        <label htmlFor="">Delicado</label>
                                        <select name="genero" className="form-control" id="contrato">
                                            <option  id="porDefecto">Si o No</option>
                                            <option >Si</option>
                                            <option >No</option>
                                            
                                        </select>
                                    </div>
                                </div>

                               

                            </div>
                        </fieldset>
                        <fieldset className="border p-2 rounded">
                            <legend className="w-auto"><small>Información del destinatario</small></legend>
                            <div className="row">

                            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="">Doc No.</label>
                                        <input type="text" name="nombre" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="apartamento">Nombre(s)</label>
                                        <input type="text" name="apellidos" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="apartamento">Apellidos</label>
                                        <input type="text" name="apellidos" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="">Dirección env.</label>
                                        <input type="text" name="nombres" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group" id="obj1">
                                        <label htmlFor="doc_no">Barrio</label>
                                        <input required type="text"  name="doc_no" className="form-control" id=""
                                            placeholder="Ingrese el barrio....." />
                                    </div>
                                </div>





                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="">Departamento</label>
                                        <input type="text" name="" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="">Ciudad</label>
                                        <input type="text" name="" id="txtvalue" className="form-control" />
                                    </div>
                                </div>

                            </div>

                        </fieldset>
                        
                          <div className="d-flex align-content-between flex-wrap p-2">
                             <button type="submit" className="btn btn-success mr-2 ">Programar</button>
                             <button type="submit" className="btn btn-warning mr-2">limpiar</button>
                             <button type="submit" className="btn btn-danger ">Cancelar</button>
                         </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProgRecogida;
