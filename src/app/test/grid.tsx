import { Fragment } from "react";

export default function Grid() {
    return (
        <main className="border border-red-500">
            <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                    <h1 className="font-bold text-3xl">Introduction</h1>
                    <p className="mt-3">Are creatures of the cosmos intelligent beings bits of moving fluff a very small stage in a vast cosmic arena Tunguska event, rich in heavy atoms concept of the number one the only home we've ever known astonishment another world great turbulent clouds white dwarf.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 md:grid-cols-1 md:row-span-2 content-start">
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h2 className="box-header">Actions</h2>
                        <ul className="box-menu">
                            <li><a href="">Do a thing</a></li>
                            <li><a href="">Register your bad self</a></li>
                            <li><a href="">Hold the phone</a></li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h2 className="box-header">Related Stuff</h2>
                        <ul className="box-menu">
                            <li><a href="">Just a link</a></li>
                            <li><a href="">Another link</a></li>
                        </ul>
                    </div>
                </div>
                <div className="md:col-span-3">
                    <h2 className="font-bold text-3xl">Additional Information</h2>
                    <p className="mt-3">Laws of physics Euclid courage of our questions? Permanence of the stars something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing tendrils of gossamer clouds hydrogen atoms laws of physics a very small stage in a vast cosmic arena extraordinary claims require extraordinary evidence encyclopaedia galactica brain is the seed of intelligence courage of our questions. Venture dream of the mind's eye ship of the imagination? Hydrogen atoms circumnavigated. A very small stage in a vast cosmic arena Euclid star stuff harvesting star light vastness is bearable only through love Drake Equation radio telescope!</p>
                    <p className="mt-3">Not a sunrise but a galaxyrise something incredible is waiting to be known circumnavigated, radio telescope great turbulent clouds how far away intelligent beings, dispassionate extraterrestrial observer the ash of stellar alchemy paroxysm of global death venture? Hundreds of thousands! Tunguska event rings of Uranus birth. Descended from astronomers not a sunrise but a galaxyrise stirred by starlight, gathered by gravity descended from astronomers culture radio telescope billions upon billions. Rich in mystery paroxysm of global death quasar and billions upon billions upon billions upon billions upon billions upon billions upon billions!</p>
                </div>
            </div>
        </main >
    );
}