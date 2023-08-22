'use client';

import { services } from '../__mocks__/services';
import { useState } from 'react';
import MyDialog from './dialog';
import Uic from './uic';

interface Datas {
  serviceName: string;
  serviceSLA: string;
  uic: string;
}

const Datas = services.data;

function DaftarPengajuan() {
  let [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <main className="container mx-auto my-8">
      <section>
        <MyDialog openkah={isOpen} openkan={() => setIsOpen(false)} />
      </section>
      <section className="flex gap-1 shadow border-b">
        <Uic />
        <table className="flex-1  border border-collapse bg-white">
          <thead >
            <tr className='border border-collapse'>
              <th className=" judul-tabel">Nomor</th>
              <th className=" judul-tabel">Nama Permohonan</th>
              <th className=" judul-tabel">Jenis Permohonan</th>
              <th className=" judul-tabel">Persyaratan</th>
              <th className=" judul-tabel">Permohonan</th>
            </tr>
          </thead>
          <tbody>
            {Datas.length == 0 && (
              <tr>
                <td className=" data-tabel">
                  <p className=" text-tabel">Data tidak ditemukan</p>
                </td>
              </tr>
            )}
            {Datas.map((data, i) => {
              return (
                <tr key={i} className='border border-collapse '>
                  <td className=" data-tabel">
                    <p className=" text-tabel">{i + 1}</p>
                  </td>
                  <td className=" data-tabel">
                    <p className=" text-tabel">{data.serviceName}</p>
                  </td>
                  <td className=" data-tabel">
                    <p className=" text-tabel">{data.serviceSLA}</p>
                  </td>
                  <td className=" data-tabel max-h-0">
                    <a className=" rounded-lg bg-lime-500 text-center my-1 text-black p-1 " onClick={() => setIsOpen(true)}>Persyaratan</a>
                  </td>
                  <td className=" data-tabel max-h-0">
                    <div className=" rounded-lg bg-orange-600 text-center my-1 text-black p-1 ">Ajukan Permohonan</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        UM</section>
    </main>
  );
}

export default DaftarPengajuan;
