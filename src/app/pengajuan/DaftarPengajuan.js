function DaftarPengajuan({ pengajuans, editData, deleteData }) {
  return (
    <div className="container mx-auto my-8">
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className=" bg-gray-50">
            <tr>
              <th className=" judul-tabel">Nomor Aju</th>
              <th className=" judul-tabel">Importir</th>
              <th className=" judul-tabel">PPJK</th>
              <th className=" judul-tabel">PPJK</th>
              <th className=" judul-tabel text-right ">Actions</th>
            </tr>
          </thead>
          <tbody className=" bg-white">
            {pengajuans.length == 0 && (
              <tr>
                <td className=" data-tabel">
                  <p className=" text-tabel">Data tidak ditemukan</p>
                </td>
              </tr>
            )}
            {pengajuans.map((aju, i) => {
              return (
                <tr key={i}>
                  <td className=" data-tabel">
                    <p className=" text-tabel">{aju.car}</p>
                  </td>
                  <td className=" data-tabel">
                    <p className=" text-tabel">{aju.importir}</p>
                  </td>
                  <td className=" data-tabel">
                    <p className=" text-tabel">{aju.ppjk}</p>
                  </td>
                  <td className=" data-tabel">
                    <p className=" text-tabel">{aju.type}</p>
                  </td>
                  <td className=" data-tabel">
                    <p className=" text-tabel text-right">
                      <a
                        onClick={() => editData(aju.id)}
                        className="tautan px-4"
                      >
                        edit
                      </a>
                      <a onClick={() => deleteData(aju.id)} className="tautan">
                        delete
                      </a>
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DaftarPengajuan;
