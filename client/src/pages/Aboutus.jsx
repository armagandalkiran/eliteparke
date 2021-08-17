import React from "react";
import aboutUs from "../images/about-us.jpeg";
import aboutUsSecondary from "../images/about-us2.jpeg";


export default function Aboutus() {
  return (
    <div className="mt-20 mb-5 p-6 md:p-14 md:mt-36 md:mb-14 flex flex-col items-center xl:flex-row md:justify-between">
      <div className="text-customText xl:w-1/2">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-4">
          Hakkımızda
        </h2>
        <p className="text-md mb-4 md:text-lg">
           2011 yılından günümüze parke konusunda faaliyet gösteren Elite Parke
          ahşabın konforunu, geniş ürün koleksiyonu ve uzman hizmet kalitesi ile
          sizlere ulaştırmaktadır.<br/><br/>Sektörde en iyisi olmak için yenilikleri
          yakından takip edip müşteri memnuniyetini ilke edinen Elite Parke,
          azimli çalışmanın ve müşterilerine verdiği güven sonucu adını öncü
          firmalar arasında duyurmuştur. Şu anda Muğla Marmaris ve Datça'da uygulama ve 
          satış mağazalarıyla iş hayatına devam etmektedir.
        </p>
      </div>
      <img src={aboutUs} alt="aboutUs" className="mt-3 w-96" />
      <img src={aboutUsSecondary} alt="aboutUs" className="mt-3 w-96" />
    </div>
  );
}
