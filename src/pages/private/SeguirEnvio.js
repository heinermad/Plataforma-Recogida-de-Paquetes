import React from 'react'
import { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import "../../App.css";
export function SeguirEnvio() {

  const [tablaMod, setTablaMod] = useState([]); /* controlar la tabla que se escribe en la barra de busqueda */
  const [registros, setRegistros] = useState([]);                                            /*datos de forma estatica y dinamica que se muestran en la tabla*/
  const [busqueda, setBusqueda] = useState("");/*  controlar digitación */


  const [totalElements, setTotalElements] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;





  const handleChange = e => {
      setBusqueda(e.target.value);
      filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
      var resultadosBusqueda = registros.filter((elemento) => {
          var elemento1 = '';
          if (elemento.origen.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
              || elemento.codigo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
              elemento1 = elemento;
          }
          return elemento1;
      });
      setTablaMod(resultadosBusqueda);
  }

  useEffect(() => {
      setShowLoading(true);
      fetch("json/campeones.json")
          .then(response => response.json())
          .then(datos => {
              setTablaMod(datos)
              setRegistros(datos)
              console.log(Object.keys(datos).length);
              setTotalElements(Object.keys(datos).length);
              setShowLoading(false);
          })
  }, []);

  const displayUsers = tablaMod && tablaMod.slice(pagesVisited, pagesVisited + usersPerPage).map((item) => (
      <tr key={item.codigo}>
          <td>{item.codigo}</td>
          <td>{item.fecha}</td>
          <td>{item.origen}</td>
          <td>{item.destino}</td>
          <td>
              {item.estado === 'Entregado' ? <label >Entregado</label> : <select>
                  <option>Sel. estado</option>
                  <option>Cancelar</option>
                  <option>Recogido</option>
                  <option>Entregado</option>
              </select>
              }
          </td>
          <td> <i class="fas fa-eye"></i> </td>
      </tr>

  ));


  const pageCount = Math.ceil(totalElements / usersPerPage);

  const changePage = ({ selected }) => {
      setPageNumber(selected);
  };
  return (
      <div>
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Seguimiento del envío</h1>
          </div>
          <div className="col-xl-12 col-md-12 mb-12">
              <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              
                              <div className=" font-weight-bold text-success text-uppercase mb-1">
                                  Bienvenido </div>
                              <div className="row" >
                                  <label className="h5 mb-1 font-weight-bold text-gray-800">Código: 1</label>
                              </div>
                              <div className="row" >
                                  <label className="h5 mb-1  font-weight-bold text-gray-800">El estado de tu envío es: Entregado</label>
                              </div>
                              <div className="row" >
                                  <label className="h5 mb-1 font-weight-bold text-gray-800">La fecha de salida: 17/12/2021</label>
                              </div>
                              <div className="row" >
                                  <label className="h5 mb-1 font-weight-bold text-gray-800">La fecha de entrega estimada es: 19/12/2021</label>
                              </div>


                              <div className="row col-lg-12 col-md-12 mb-12" >
                                  <textarea className="form-control "></textarea>
                              </div>

                              <div class="container-fluid">
                                  <div class="row">
                                      <div class="col-sm-12 d-flex justify-content-center">
                                          <a href="none"><span className="text-center" >Ver detalles</span></a>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <div className="col-auto">
                              <i className="fas fa-truck-loading fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div >

              <form className=" d-sm-inline-block form-inline   my-md-2 navbar-search float-right">
                  <div className="input-group">
                      <input type="text" className="form-control bg-succes border-1 small" placeholder="Búsqueda por cod. u origen"
                          aria-label="Search" aria-describedby="basic-addon2" value={busqueda} onChange={handleChange} />
                      <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>
                          </button>
                      </div>
                  </div>
              </form>
              <div className=" table-responsive-md">
                  <table className="table table-sm table-bordered table-striped table-light ">
                      <thead>
                          <tr className="bg-primary text-white">

                              <th >Código</th>
                              <th >Fecha Recogida</th>
                              <th >Origen</th>
                              <th >Destino</th>
                              <th >Estado</th>
                              <th >Acciones</th>



                          </tr>
                      </thead>

                      <tbody>
                          {displayUsers}
                      </tbody>
                  </table>
              </div>
              <ReactPaginate
                  previousLabel={"<<"}
                  nextLabel={">>"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
              />

          </div>
      </div>
  )
}

  

export default SeguirEnvio;