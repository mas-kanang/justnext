'use client'

import { services } from '../__mocks__/services';
import Uic from './uic';
import MyModal from './dialog';
import { useState } from 'react';

interface Datas {
  serviceName: string;
  serviceSLA: string;
  uic: string;
}

const Datas = services.data;

function DaftarPengajuan() {
  let [isOpen, setIsOpen] = useState<boolean>(false)
  let [params, setParams] = useState<string>('')

  function closeModal(params: any) {
    setIsOpen(false)
  }

  function openModal(params: string) {
    setParams(params)
    console.log(params)
    setIsOpen(true)
  }
  return (
    <main className="container mx-auto my-8">
      <MyModal closeModal={closeModal} openModal={openModal} isOpen={isOpen} params={params} />

      <section className="flex flex-row gap-1 shadow border-b">
        <Uic />
        <table className="grow  border border-collapse bg-white">
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
                    <div className=" rounded-lg bg-lime-500 text-center my-1 text-black p-1 " onClick={() => openModal(`Persyaratan ${data.serviceName}`)}>Persyaratan</div>
                  </td>
                  <td className=" data-tabel max-h-0">
                    <div className=" rounded-lg bg-orange-600 text-center my-1 text-black p-1 " onClick={() => openModal(`Pengajuan ${data.serviceName}`)}>Ajukan Permohonan</div>
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
