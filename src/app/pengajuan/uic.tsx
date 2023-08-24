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
    <div className="p-4 text-center flex-none bg-sky-800 text-white">

      <div className="border-b-2 font-bold">Kategori</div>

      {Datas.map((data, i) => {
        return (
          <div className="border-b-2" key={i} onClick={() => setFilters(`${data.name}`)}>{data.name}</div>
        );
      })}

    </div>
  );
}

export default Uic;
