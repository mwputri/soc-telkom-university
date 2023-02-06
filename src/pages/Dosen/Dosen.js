import React from 'react'

const Dosen = ({data, handleChange}) => {
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
                        <th scope="col">NIP</th>
                        <th scope="col">NAMA</th>
                        <th scope="col">KODE</th>
                        <th scope="col">NIDN</th>
                        <th scope="col">PROGRAM STUDI</th>
                        <th scope="col">KELOMPOK KEAHLIAN</th>
                        <th scope="col">e-mail Tel-U</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data && data?.map((d) => (
                        <tr key={d.NO}>
                            <td>{d.NO}</td>
                            <td>{d.NIP}</td>
                            <td>{d.NAMA_LENGKAP}</td>
                            <td>{d.KODE_DOSEN || '-'}</td>
                            <td>{d.NIDN || '-'}</td>
                            <td>{d.LOKASI_KERJA}</td>
                            <td>{d.KELOMPOK_KEAHLIAN || '-'}</td>
                            <td>{d.EMAIL || '-'}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dosen