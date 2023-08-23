import React from "react";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import "./categories.css";

const Data = [
  {
    id: 1,

    destTitle: "Yaşam",
  },
  {
    id: 2,

    destTitle: "Ekonomi ",
  },
  {
    id: 3,

    destTitle: "Magazin",
  },
  {
    id: 4,

    destTitle: "Siyaset",
  },

  {
    id: 5,

    destTitle: "Spor",
  },
  {
    id: 6,

    destTitle: "Sağlık",
  },
];

const Categories = () => {
  return (
    <section className="main container section">
      <div className="secTittle">
        <h3 className="tittle">Kategoriler</h3>
        <hr></hr>
      </div>

      <div className="seCContent grid">
        {Data.map(({ id, destTitle }) => {
          return (
            <div key={id} className="singleDestination">
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
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

export default Categories;
