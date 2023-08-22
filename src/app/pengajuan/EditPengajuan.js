import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";

function EditPengajuan({ aju, isOpen, openModal, closeModal, updateData }) {
  // console.log(isOpen);
  useEffect(() => {
    setData(aju);
  }, [aju]);

  const [data, setData] = useState({
    car: "",
    importir: "",
    ppjk: "",
  });

  const resetData = (e) => {
    e.preventDefault();
    setData({
      car: "",
      importir: "",
      ppjk: "",
    });
    closeModal();
  };

  function handleSave(e) {
    e.preventDefault();
    updateData(data);
    resetData(e);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setData({ ...data, [event.target.name]: value });
    // console.log(data);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="modal-popup" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="modal-child">
                <Dialog.Title as="h3" className="modal-dialog-title">
                  Update Pengajuan
                </Dialog.Title>
                <div className=" flex max-w-md">
                  <div className="py-2">
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Nomor Aju
                      </label>
                      <input
                        type="text"
                        name="car"
                        value={data.car}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2 "
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Importir
                      </label>
                      <input
                        type="text"
                        name="importir"
                        value={data.importir}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2 "
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal ">
                        PPJK
                      </label>
                      <input
                        type="text"
                        name="ppjk"
                        value={data.ppjk}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2 "
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="h-6 my-4 space-x-4">
                  <button onClick={handleSave} className="tombol-save ml-4">
                    Save
                  </button>
                  <button onClick={closeModal} className="tombol-reset ml-4">
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default EditPengajuan;
