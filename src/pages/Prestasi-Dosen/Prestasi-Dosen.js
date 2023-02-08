import React from 'react'

const PrestasiDosen = ({data, handleChange}) => {
    return (
        <div>
            <div className="input-group px-5 py-3 d-md-block d-lg-none">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                </div>
                <input onChange={handleChange} type="text" className="form-control" aria-label="Default"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="p-lg-5" style={{overflowX: 'auto'}}>
                <table className="table table-striped text-start container" style={{fontSize: '14px'}}>
                    <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Nama Dosen</th>
                        <th scope="col">Prestasi</th>
                        <th scope="col">Tahun</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data && data?.map((d) => (
                        <tr key={d.No}>
                            <td>{d.No}</td>
                            <td>{d.Nama_Dosen}</td>
                            <td>{d.Prestasi}</td>
                            <td>{d.Tahun}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PrestasiDosen
