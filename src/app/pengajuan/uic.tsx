import { uic } from '../__mocks__/uic'

interface Datas {
  id: string;
  name: string;
  fullName: string;
}

interface Filters {
  setFilters: (param: string) => void;
}

const Datas = uic;

function Uic({ setFilters }: Filters) {
  return (
    <table className="fixed">
      <thead className=" bg-white ">
        <tr className='border border-collapse'>
          <th className=" judul-tabel">Kategori</th>
        </tr>
      </thead>
      <tbody className=" bg-white">
        {Datas.length == 0 && (
          <tr>
            <td className=" data-tabel">
              <p className=" text-tabel">Data tidak ditemukan</p>
            </td>
          </tr>
        )}
        {Datas.map((data, i) => {
          return (
            <tr key={i} className='border border-collapse' >
              <td className=" data-tabel">
                <p className=" text-tabel" onClick={() => setFilters(`${data.name}`)}>{data.name}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Uic;
