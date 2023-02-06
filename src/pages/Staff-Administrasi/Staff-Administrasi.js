import React from 'react'

const StaffAdministrasi = ({sa, handleChange}) => {
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
                        <th scope="col">Nama</th>
                        <th scope="col">NIP</th>
                        <th scope="col">POSISI KERJA</th>
                        <th scope="col">EMAIL</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sa && sa?.map((d) => (
                        <tr key={d.NO}>
                            <td>{d.NO}</td>
                            <td>{d.NAMA}</td>
                            <td>{d.NIP}</td>
                            <td>{d.POSISI_KERJA}</td>
                            <td>{d.EMAIL}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StaffAdministrasi