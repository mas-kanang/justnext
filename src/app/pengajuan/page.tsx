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
    <>
      <MyModal closeModal={closeModal} openModal={openModal} isOpen={isOpen} params={params} />
      <main className="min-h-full  flex flex-row">
        <Uic />
        <div className="bg-slate-800 grow overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 text-center m-4 gap-2 border-b">
            <div className=" ">No.</div>
            <div className="  md:col-span-6">Jenis Layanan</div>
            <div className="  md:col-span-2">SLA</div>
            <div className="  md:col-span-2">Persyaratan</div>
            <div className=" ">Ajukan</div>
          </div>
          {Datas.map((data, i) => {
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 text-center m-4 gap-2 border-b">
                <div >{i + 1}</div>
                <div className=" md:col-span-6 md:text-left md:pl-2">{data.serviceName}</div>
                <div className=" md:col-span-2">{data.serviceSLA}</div>
                <div className=" md:col-span-2" onClick={() => openModal(`Persyaratan ${data.serviceName}`)}>Persyaratan</div>
                <div onClick={() => openModal(`Pengajuan ${data.serviceName}`)}>Ajukan</div>
              </div>
            );
          })}
        </div>
      </main>
    </>

  );
}

export default DaftarPengajuan;
