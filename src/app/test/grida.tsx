
export default function Grida() {
    return (
        <main className="border border-red-500 p-3">
            <section className=" grid grid-cols-1 sm:grid-cols-4 border border-y-lime-300 ">
                <div className=" mx-3 border border-blue-600 my-3 ">
                    <div>Kategory</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
                <div className=" mr-3 gap-2 border sm:row-span-3 grid sm:grid-cols-4 border-blue-600 my-3 bg-pink-950" >
                    <div className="">No.</div>
                    <div className="">Nama Layanan</div>
                    <div className="">SLA</div>
                    <div className="">Persyaratan</div>
                    <div className="">Ajukan</div>
                </div>

            </section >
        </main >
    );
}