import React from 'react';
import { useEffect, useState, Fragment } from 'react';
import ReactPaginate from "react-paginate";
import "../../App.css";
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router';

export function GestionUsuarios() {
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
            if (elemento.numDoc.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.apellidos.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.rol.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())   ) {
                elemento1 = elemento;
            }
            return elemento1;
        });
        setTablaMod(resultadosBusqueda);
    }

    useEffect(() => {
        setShowLoading(true);
        fetch("http://localhost:4000/users")
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
        
        <tr key={item._id}>
            <td>{item.numDoc}</td>
            <td>{item.nombre}</td>
            <td>{item.apellidos}</td>
            <td>{item.direccion}</td>
            <td>{item.email}</td>
            
            <td>
            <div className="d-flex align-content-between flex-wrap p-2">
            
                                    {/* <button type="submit" className="btn btn-success mr-2 "><i className="fas fa-eye">Ver</i></button>
                                    <Link to={"editar"} className="btn btn-primary mr-2">
                                        <i className="fas fa-pencil-alt">
                                            Editar</i>
                                    </Link>  */}
                                   <Link type="submit" to={"editar/" + item.nombre +',' + item.apellidos +','+ item.direccion.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ')') +','+item.fecha_nac + ','+ item.numDoc + ',' + item.email + ','+ item.usuario + ',' + item.clave + ',' + item.genero + ','+ item.rol} className="btn btn-primary mr-2"><i className="fas fa-pencil-alt"></i></Link> 
                                   <Link type="submit" to={"eliminar/" + item.nombre +',' + item.apellidos +','+ item.direccion.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ')') +','+item.fecha_nac + ','+ item.numDoc + ',' + item.email + ','+ item.usuario + ',' + item.clave + ',' + item.genero + ','+ item.rol} className="btn btn-danger mr-2"><i className="fas fa-trash-alt"></i></Link> 
                            
            </div>
            </td>
        </tr>

    ));


    const pageCount = Math.ceil(totalElements / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            
            <div >
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Gestion de usuarios</h1>
                </div>
                
                <Link  to="crear" className="btn btn-success mr-2"><small><i className="fas fa-user-plus" ></i></small> Crear</Link>
                <form className=" d-sm-inline-block form-inline   my-md-2 navbar-search float-right">
                    <div className="input-group">
                        <input type="text" className="form-control bg-succes border-1 small" placeholder="Búsqueda"
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

                                <th >Doc No.</th>
                                <th >Nombre</th>
                                <th >Apellidos</th>
                                <th >Dirección</th>
                                <th >E-mail</th>
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
    );
    }


export default GestionUsuarios;

