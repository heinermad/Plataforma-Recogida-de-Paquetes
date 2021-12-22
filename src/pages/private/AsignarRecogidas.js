import React from 'react'
import { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import "../../App.css";


export function AsignarRecogidas() {
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
      <td>{item.origen}</td>
      <td>{item.direccion}</td>
      <td>{item.fecha}</td>
      <td>{item.hora}</td>
      <td>{item.detalles}</td>
      <td>
        <select>
          <option className="form-select" >Sel. Mensajero </option>
        </select>
      </td>
    </tr>

  ));


  const pageCount = Math.ceil(totalElements / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div >
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Asignar recogida</h1>
      </div>
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
      <div  className=" table-responsive-md">
        <table className="table table-sm table-bordered table-striped table-light ">
          <thead>
            <tr className="bg-primary text-white">

              <th >Código</th>
              <th >Origen</th>
              <th >Direccion</th>
              <th >Fecha</th>
              <th >Hora</th>
              <th >Detalles</th>
              <th>Asignar mensajero</th>


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
  );
}

export default AsignarRecogidas;
