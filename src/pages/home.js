import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import dataJson from "../product.json";
import closeButton from "../images/icon-close.svg";
import bannerProduct1 from "../images/image-product-1.jpg";
import arrow from "../images/icon-next.svg";
import { useEffect, useState } from "react";
import Navbar from "./Navabar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [jumlahBarang, setJumlahBarang] = useState(0);
  const [addDataCart, setAddDataCart] = useState(0);
  const [data, setData] = useState({});
  const [addCart, setAddCart] = useState(false);
  const [image, setImage] = useState(
    "http://localhost:3000/images/image-product-1.jpg"
  );

  useEffect(() => {
    setData(dataJson);
  }, []);

  const dataCart = {
    status: addCart,
    id: 1,
    name: "Autumm Limited Edition",
    price: 125.0,
    jumlah: addDataCart,
    image: thumbnail1,
  };

  return (
    <>
      <Navbar data={dataCart} />
      <div className="container mx-auto w-ful md:flex md:justify-betwee md:items-cente md:mt-10">
        <div className="banner relative">
          <div className="img-wrap md:flex md:justify-center md:flex-col">
            <img
              className="hidden md:inline-block md:w-11/12 md:h-4/5 rounded-xl mx-auto cursor-pointer"
              src={image}
              alt=""
              onClick={() => {
                const popUpBox = document.querySelector(".pop-up-box");
                popUpBox.classList.remove("md:hidden");
                popUpBox.classList.add("md:flex");
              }}
            />
            <div className="tumbnail-image-product hidden md:flex md:justify-around md:mt-5">
              <div className="hover:border-4 hover:border-orange-600  h-20 w-20 rounded-xl">
                <img
                  className="image-product rounded-xl cursor-pointer hover:opacity-50"
                  src={data.tumbnail_1}
                  alt=""
                  onClick={(e) => {
                    setImage(e.target.src);
                  }}
                />
              </div>
              <div className="hover:border-4 hover:border-orange-600  h-20 w-20 rounded-xl">
                <img
                  className="image-product rounded-xl cursor-pointer hover:opacity-50"
                  src={data.tumbnail_2}
                  alt=""
                  onClick={(e) => {
                    setImage(e.target.src);
                  }}
                />
              </div>
              <div className="hover:border-4 hover:border-orange-600  h-20 w-20 rounded-xl">
                <img
                  className="image-product rounded-xl cursor-pointer hover:opacity-50"
                  src={data.tumbnail_3}
                  alt=""
                  onClick={(e) => {
                    setImage(e.target.src);
                  }}
                />
              </div>
              <div className="hover:border-4 hover:border-orange-600  h-20 w-20 rounded-xl">
                <img
                  className="image-product rounded-xl cursor-pointer hover:opacity-50"
                  src={data.tumbnail_4}
                  alt=""
                  onClick={(e) => {
                    setImage(e.target.src);
                  }}
                />
              </div>
            </div>
            <div className="banner-mobile w-full flex overflow-hidden">
              <img
                className="w-full h-60 object-cover md:hidden "
                src={data.tumbnail_1}
                alt=""
              />
              <img
                className="w-full h-60 object-cover md:hidden"
                src={data.tumbnail_2}
                alt=""
              />
              <img
                className="w-full h-60 object-cover md:hidden"
                src={data.tumbnail_3}
                alt=""
              />
            </div>
          </div>
          <div className="arrow bg-white p-2 absolute top-1/2 right-5 rounded-full md:hidden">
            <img src={arrow} alt="" />
          </div>
          <div className="arrow rotate-180 bg-white p-2 absolute top-1/2 left-5 rounded-full md:hidden">
            <img src={arrow} alt="" />
          </div>
        </div>

        <div className="text-detail container px-3 mt-2 lg:px-20 md:flex-row lg:flex lg:flex-col lg:my-auto">
          <div className="merk text-orange-600 md:mb-3">SNEAKER COMPANY</div>
          <div className="jenis-product text-3xl font-bold lg:w-8/12">
            {data.name}
          </div>
          <div className="keterangan text-slate-500 md:w-3/4 md:mb-5 md:mt-10">
            {data.description}
          </div>
          <div className="detail-harga flex justify-between mt-5 items-center md:flex-col md:justify-start">
            <div className="wrapper-harga flex items-center md:w-full">
              <div className="harga text-2xl font-bold">{`$${data.harga_total_diskon}.00`}</div>
              <div className="diskon flex-1 ml-10 font-bold text-orange-600">
                {}%
              </div>
            </div>
            <div className="harga-norma font-bold text-slate-500 md:justify-star md:w-full">
              ${data.harga_normal}.00
            </div>
          </div>

          <div className="wrapper-button md:flex md:justify-around">
            <div className="btn-jumlah-barang flex justify-around mt-5 font-bold text-xl bg-slate-100 py-3 md:mb-5 md:w-1/2">
              <div
                className="btn-minus text-orange-600 cursor-pointer"
                onClick={() => {
                  if (jumlahBarang <= 0) {
                    setJumlahBarang(0);
                  } else {
                    setJumlahBarang(jumlahBarang - 1);
                  }
                }}
              >
                -
              </div>
              <div className="jumlah-barang">{jumlahBarang}</div>
              <div
                className="btn-plus text-orange-600 cursor-pointer"
                onClick={() => {
                  setJumlahBarang(jumlahBarang + 1);
                }}
              >
                +
              </div>
            </div>

            <div className="btn-add-cart mt-5 mb-5 md:w-1/2">
              <button
                className="bg-orange-600 w-full py-3 text-white font-bold"
                onClick={() => {
                  if (jumlahBarang === 0) {
                    alert("Jumlah Barang Tidak Boleh 0");
                    return;
                  }
                  setAddCart(true);
                  setAddDataCart(jumlahBarang);
                }}
              >
                <span className="mr-1">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* pop up box */}
      <div className="pop-up-box absolute hidden shadow-2xl h-full top-0 w-full md:hidden justify-center items-center">
        <div className="img-wrap md:flex md:justify-center md:flex-col opacity-100 mt-20 z-20 relative">
          <div className="close absolute right-[30%] top-[-35px] cursor-pointer">
            <span
              className="close-img text-3xl text-white font-bold block hover:text-orange-600"
              onClick={(e) => {
                const popUpBox = document.querySelector(".pop-up-box");
                popUpBox.classList.add("md:hidden");
                console.log(e.target);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </div>
          <img
            className="hidden md:inline-block md:w-2/5 md:h-4/5 rounded-xl mx-auto cursor-pointer"
            src={image}
            alt=""
          />
          <div className="tumbnail-image-product hidden md:flex md:justify-center md:mt-5">
            <div className="hover:border-4 hover:border-orange-600  h-20 w-20 rounded-xl mx-3">
              <img
                className="image-product rounded-xl cursor-pointer hover:opacity-50"
                src={data.tumbnail_1}
                alt=""
                onClick={(e) => {
                  setImage(e.target.src);
                }}
              />
            </div>
            <div className="hover:border-4 hover:border-orange-600  h-20 w-20 rounded-xl mx-3">
              <img
                className="image-product rounded-xl cursor-pointer hover:opacity-50"
                src={data.tumbnail_2}
                alt=""
                onClick={(e) => {
                  setImage(e.target.src);
                }}
              />
            </div>
            <div className="hover:border-4 hover:border-orange-600  h-20 w-20 rounded-xl mx-3">
              <img
                className="image-product rounded-xl cursor-pointer hover:opacity-50"
                src={data.tumbnail_3}
                alt=""
                onClick={(e) => {
                  setImage(e.target.src);
                }}
              />
            </div>
            <div className="hover:border-4 hover:border-orange-600  h-20 w-20 rounded-xl mx-3">
              <img
                className="image-product rounded-xl cursor-pointer hover:opacity-50"
                src={data.tumbnail_4}
                alt=""
                onClick={(e) => {
                  setImage(e.target.src);
                }}
              />
            </div>
          </div>
        </div>
        <div className="absolute h-full w-full z-10 opacity-60 bg-black"></div>
      </div>
    </>
  );
}
