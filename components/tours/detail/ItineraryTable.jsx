import React, { useState, useEffect } from 'react'

const ItineraryTable = (props) => {
    const { rowData, langData } = props
    // console.log(langData)
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead className="table-dark">
                        </thead>
                        <tbody>
                            <tr className='table-dark'>
                                <th className='px-3 text-uppercase border border-gray'>{langData.data?.table?.required_time || "S/N"}</th>
                                <th className='px-3 text-uppercase border border-gray'>{langData.data?.table?.transport || "S/N"}</th>
                                <th className='px-3 text-uppercase border border-gray'>{langData.data?.table?.entry_of_sites || "S/N"}</th>
                            </tr>
                            <tr>
                                <td>{rowData.tiempo_requerido || '-'}</td>
                                <td>{rowData.transporte || '-'}</td>
                                <td>{rowData.entradas || '-'}</td>
                            </tr>
                            <tr className='table-dark'>
                                <th className='px-3 text-uppercase border border-gray'>{langData.data?.table?.guia || "S/N"}</th>
                                <th className='px-3 text-uppercase border border-gray'>{langData.data?.table?.altitud_the_journey || "S/N"}</th>
                                <th className='px-3 text-uppercase border border-gray'>{langData.data?.table?.best_moment_year || "S/N"}</th>
                            </tr>
                            <tr>
                                <td>{rowData.guia || '-'}</td>
                                <td>{rowData.altitud_circuito || '-'}</td>
                                <td>{rowData.mejor_epoca_visita || '-'}</td>
                            </tr>
                            <tr className='table-dark'>
                                <th className='px-3 text-uppercase border border-gray'>{langData.data?.table?.equipement || "S/N"}</th>
                                <th className='px-3 text-uppercase border border-gray'>{langData.data?.table?.meals || "S/N"}</th>
                                <th className='px-3 text-uppercase border border-gray'>{langData.data?.table?.hotel || "S/N"}</th>
                            </tr>
                            <tr>
                                <td>{rowData.equipo || '-'}</td>
                                <td>{rowData.comida || '-'}</td>
                                <td>{rowData.hotel || '-'}</td>
                            </tr>
                            <tr className='table-dark'>
                                <th className='px-3 text-uppercase border border-gray'>{langData.data?.table?.difficulty_level || "S/N"}</th>
                            </tr>
                            <tr>
                                <td>{rowData.nivel_dificultad || '-'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ItineraryTable
