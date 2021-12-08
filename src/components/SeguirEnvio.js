import React from 'react'

export function SeguirEnvio() {
  return (
    <div>
        <div className="col-xl-12 col-md-12 mb-12">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className=" font-weight-bold text-success text-uppercase mb-1">
                                        Bienvenido </div>
                                    <div className="row" > 
                                     <label className="h5 mb-0 font-weight-bold text-gray-800">El estado de tu envío es:</label>
                                    </div>
                                    <div className="row" > 
                                      <label className="h5 mb-0 font-weight-bold text-gray-800">La fecha de salida:</label>
                                    </div>
                                    <div className="row" >
                                      <label className="h5 mb-0 font-weight-bold text-gray-800">La fecha de entrega estimada es:</label>
                                    </div>
                                    <div className="row" >
                                      <label className="h5 mb-0 font-weight-bold text-gray-800">La fecha de entrega estimada es:</label>
                                      <textarea></textarea>
                                    </div>
                                   
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
      
    </div>
  )
}

export default SeguirEnvio;