import { uic } from '../__mocks__/uic'

interface Datas {
  id: string;
  name: string;
  fullName: string;
}

const Datas = uic;

function Uic() {
  return (
    <div className="p-4 text-center flex-none bg-slate-700">

      <div className="border-b-2">Kategori</div>

      {Datas.map((data, i) => {
        return (
          <div className="border-b-2" key={i}>{data.name}</div>
        );
      })}

    </div>
  );
}

export default Uic;
