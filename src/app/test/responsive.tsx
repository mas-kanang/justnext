

export default function Responsive() {
  return (
    <main className=" min-h-screen flex flex-row">
      <div className="m-4 text-center flex-none">
        <div className="border-b-2">Kategori</div>
        <div className="border-b-2">PDAD</div>
        <div className="border-b-2">PLI</div>
        <div className="border-b-2">PKC</div>
      </div>
      <div className="bg-slate-800 grow overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 text-center m-4 gap-2 border-b">
          <div className=" ">No.</div>
          <div className="  md:col-span-6">Jenis Layanan</div>
          <div className="  md:col-span-2">SLA</div>
          <div className="  md:col-span-2">Persyaratan</div>
          <div className=" ">Ajukan</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 text-center m-4 gap-2 border-b">
          <div className=" ">1.</div>
          <div className="  md:col-span-6 md:text-left md:pl-2">Permohonan pemotongan kuota</div>
          <div className="  md:col-span-2">2 s.d. 3 Jam Kerja</div>
          <div className="  md:col-span-2">Persyaratan</div>
          <div className=" ">Ajukan</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 text-center m-4 gap-2 border-b">
          <div className=" ">2.</div>
          <div className="  md:col-span-6 md:text-left md:pl-2">Permohonan Perubahan Data PIB</div>
          <div className="  md:col-span-2">3 Hari</div>
          <div className="  md:col-span-2">Persyaratan</div>
          <div className=" ">Ajukan</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 text-center m-4 gap-2 border-b">
          <div className=" ">3.</div>
          <div className="  md:col-span-6 md:text-left md:pl-2">Permohonan Perubahan Data PEB</div>
          <div className="  md:col-span-2">3 Hari</div>
          <div className="  md:col-span-2">Persyaratan</div>
          <div className=" ">Ajukan</div>
        </div>
      </div>

    </main>
  );
}