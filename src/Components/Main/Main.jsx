import React from "react";
import "./main.css";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from "../../Assets/Images/img1.png";
import img1 from "../../Assets/Images/img2.png";
import img2 from "../../Assets/Images/img3.png";
import img3 from "../../Assets/Images/img4.png";
import img4 from "../../Assets/Images/img5.png";
import img5 from "../../Assets/Images/img6.png";
import img6 from "../../Assets/Images/img7.png";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle:
      "Iraklı ressam, ülkesinin resim sanatında dünyadan kopuk olduğu görüşünde",
    description:
      "Ressam Ganiye, başkent Bağdat’ta Güzel Sanatlar Fakültesi'ni tamamladıktan sonra Saddam Hüseyin rejiminin sanata karşı politikalarından dolayı 1990'larda ülkesini terk edip Ürdün’e gitti. Amman'da resim sanatında o dönem ülkesinde bulamadığı ortamla tanıştığını aktaran Ganiye, daha sonra daha özgür bir sanat hayatı için Kanada’ya yerleştiğini söyledi.",
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle:
      "Ekonomi politikalarının faturası ücretsiz ulaşımın kısıtlanmasıyla emeklilere kesildi. Özel Halk Otobüsleri Birliği, Türkiye genelinde 65 yaş üstü vatandaşlara sağlanan ücretsiz taşıma hizmetini ekim ayından itibaren durdurma kararı aldı",
    description:
      "Enflasyonist ekonomi politikalarının halka ve emeklilere fatura edilmemesi gerektiğinin altını çizen Baytemür, “Emeklilerden muayene parası, ilaç bedeli gibi sağlık kesintisi yapılmamalı. Temel kamu hizmetlerinden ücretsiz yararlanmalılar” ifadelerini kullandı.",
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle:
      "Ayşecan Tatari, güzellik algısı üzerinden yapılan yorumlara tepki gösterdi",
    description:
      "Çocuklar Duymasın dizisindeki 'Duygu' karakteri ile tanınan Ayşecan Tatari, sosyal medya hesabından yayınladığı fotoğraflara yapılan yorumlardan rahatsız olduğunu belirtti. Güzellik algısı üzerinden saldırıya uğradığını ifade eden genç oyuncu, yaşadığı durumun kendisini ürküttüğünü dile getirdi.",
  },
  {
    id: 4,
    imgSrc: img3,
    destTitle:
      "İSİPAB'ın İsveç tepkisinde, dikkat çeken Türkiye vurgusu",
    description:
      "İslam İşbirliği Teşkilatı Parlamento Birliği (İSİPAB) Genel Sekreteri Mouhamed Khouraichi Niass, yaptığı açıklamada, İsveç'in başkenti Stockholm'deki Kur'an-ı Kerim'in yakılması eyleminin tüm Müslümanlara karşı bir meydan okuma niteliği taşıdığını belirterek, Bu iğrenç eylemin failleri, bu eylemi, geçmişte ve günümüzde bu hak dine yaptığı hizmetlerden hiçbir Müslüman'ın habersiz olmasının mümkün olmadığı Türkiye Büyükelçiliği önünde gerçekleştirmeyi tercih etmişlerdir dedi.",
  },
  {
    id: 5,
    imgSrc: img4,
    destTitle:
      "Ayşecan Tatari, güzellik algısı üzerinden yapılan yorumlara tepki gösterdi",
    description:
      "Çocuklar Duymasın dizisindeki 'Duygu' karakteri ile tanınan Ayşecan Tatari, sosyal medya hesabından yayınladığı fotoğraflara yapılan yorumlardan rahatsız olduğunu belirtti. Güzellik algısı üzerinden saldırıya uğradığını ifade eden genç oyuncu, yaşadığı durumun kendisini ürküttüğünü dile getirdi.",
  },
  {
    id: 6,
    imgSrc: img5,
    destTitle: "Mardin 1969 Spor, Silivrispor ile berabere kaldı",
    description: "TFF Spor Toto 3. Lig 1. Grup'ta yer alan Mardin 1969 Spor, Bolu'da yaptığı hazırlık maçında Silivrispor ile 2-2 berabere kaldı. Teknik direktör Cevdet Uzunköprü, maçın takımın sezon öncesi performansını ölçme adına önemli bir adım olduğunu belirtti ve oyuncularının enerjisi ve isteğinden memnun olduğunu söyledi. ",
  },
  {
    id: 7,
    imgSrc: img6,
    destTitle: "Prof. Dr. Filiz: Balinaları gördükçe denizlerin sağlıklı ve temiz olduğunu anlıyoruz",
    description:
      "Cavit AKGÜN / MUĞLA, (DHA)-MUĞLA Sıtkı Koçman Üniversitesi (MSKÜ) araştırmacıları, Muğla kıyılarında yaz boyunca görülen balinalar ile ilgili açıklamalarda bulundu. Su Ürünleri Fakültesi Dekanı Prof. Dr. Halit Filiz, Balinaları gördükçe denizlerimizin sağlıklı ve temiz olduğunu anlıyoruz dedi.",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Gündemdekiler</h3>
        <hr />
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, description }) => {
          return (
            <div key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>
              <button className="btn flex">
                Detay
                <HiOutlineClipboardCheck className="icon" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
