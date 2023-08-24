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
    <main className="container my-8">
      <MyModal closeModal={closeModal} openModal={openModal} isOpen={isOpen} params={params} />

      <section className="flex flex-row gap-1 shadow border-b">
        <Uic />
        <div className="grow bg-white">
          <div className='grid grid-cols-1 md:grid-cols-12'>
            <div className=" judul-tabel">Nomor</div>
            <div className=" judul-tabel md:col-span-5">Nama Permohonan</div>
            <div className=" judul-tabel md:col-span-2">Jenis Permohonan</div>
            <div className=" judul-tabel md:col-span-2">Persyaratan</div>
            <div className=" judul-tabel md:col-span-2">Permohonan</div>
          </div>
          <div>
            {Datas.length == 0 && (
              <>
                <div className=" data-tabel">
                  <p className=" text-tabel">Data tidak ditemukan</p>
                </div>
              </>
            )}
            {Datas.map((data, i) => {
              return (
                <div key={i} className='grid grid-cols-1 md:grid-cols-12 '>
                  <div className=" data-tabel">
                    <p className=" text-tabel">{i + 1}</p>
                  </div>
                  <div className=" data-tabel md:col-span-5">
                    <p className=" text-tabel">{data.serviceName}</p>
                  </div>
                  <div className=" data-tabel md:col-span-2">
                    <p className=" text-tabel">{data.serviceSLA}</p>
                  </div>
                  <div className=" data-tabel md:col-span-2">
                    <div className=" rounded-lg bg-lime-500 text-center my-1 text-black p-1 " onClick={() => openModal(`Persyaratan ${data.serviceName}`)}>Persyaratan</div>
                  </div>
                  <div className=" data-tabel md:col-span-2">
                    <div className=" rounded-lg bg-orange-600 text-center my-1 text-black p-1 " onClick={() => openModal(`Pengajuan ${data.serviceName}`)}>Ajukan</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default DaftarPengajuan;
