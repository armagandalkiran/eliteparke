import React from "react";
import images from "../static";
import { ReactComponent as DotIcon } from "../svgs/dot.svg";

function Skirts(){

    return(
        <div className="mt-28 grid md:mt36 mb-12">
            <div className="bg-header mb-12 h-auto text-white py-10 md:py-24 md:px-10 object-fill">
                <h2 className="text-center text-3xl mb-8 font-bold md:text-4xl md:mb-16">Süpürgelikler</h2>
                <ul className="flex px-4 items-center justify-evenly text-center md:text-2xl md:px-8">
                    <li>Folyo - Lake</li>
                    <DotIcon className="w-2"/>
                    <li>Soft Touch</li>
                    <DotIcon className="w-2"/>
                    <li>PVC Lake</li>
                    <DotIcon className="w-2"/>
                    <li>High Gloss</li>
                    <DotIcon className="w-2"/>
                    <li>Renk Çeşitleri</li>
                </ul>
            </div>
            <h3 className="text-header p-6 font-bold text-xl md:text-6xl">Galeri</h3>
            <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-4">
                {images.supurgelik.map((image,index) => {
                    return (
                        <div className="col-span-1 border border-gray shadow-lg" key={index}>
                        <img className="w-full" alt="alt" src={`${image.url}`}/>
                        <div className="text-xl text-center text-customText font-semibold my-4">{image.desc}</div>
                        </div>          
                    )
                })}
            </div>
            <h3 className="text-header p-6 font-bold text-xl md:text-6xl">Markalar</h3>
            <div className="p-6 grid grid-cols-1 gap-8 mt-8 md:grid-cols-5">
                {images.supurgelikMarka.map((image,index) => {
                    return (
                        <div className="p-4 col-span-1 border border-gray shadow-lg" key={index}>
                        <img className="w-full h-full" alt={`${image.desc}`} src={`${image.url}`}/>
                        </div>          
                    )
                })}
            </div>
            <div className="text-center text-xl my-8 px-4">
                <p>Daha fazla ürün ve renk seçenekleri için bizimle <a className="font-bold underline" href="/iletisim">iletişime geçin.</a></p>
            </div>
        </div>
    )
}

export default Skirts;