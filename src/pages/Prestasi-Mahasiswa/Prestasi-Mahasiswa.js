import React from 'react'

const PrestasiMahasiswa = ({data, handleChange}) => {
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
                        <th scope="col">Nama Kompetisi & Prestasi</th>
                        <th scope="col">NIM & Nama</th>
                        <th scope="col">Tingkat</th>
                        <th scope="col">Penyelenggara</th>
                        <th scope="col">Kategori Juara</th>
                        <th scope="col">URL Penyelenggara</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data && data?.map((m) => (
                        <tr key={m.No}>
                            <td>{m.No}</td>
                            <td>{m.Nama_Kompetisi_dan_Prestasi}</td>
                            <td>{m.NIM_dan_Nama}</td>
                            <td>{m.Tingkat}</td>
                            <td>{m.Penyelenggara}</td>
                            <td>{m.Kategori_Juara}</td>
                            <td>{m.URL_Penyelenggara}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PrestasiMahasiswa
