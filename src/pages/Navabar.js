import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import iconCart from "../images/icon-cart.svg";
import humbergerMenu from "../images/icon-menu.svg";
import closeButton from "../images/icon-close.svg";
import { data } from "autoprefixer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Navbar(props) {
  const [status, setStatus] = useState(true);

  const listNav = document.querySelector(".list-nav");
  function toggleMenu() {
    listNav.classList.remove("hidden");
    listNav.classList.add("absolute");
  }
  function closeMenu() {
    listNav.classList.add("hidden");
  }

  function cartToggle() {
    const cartContent = document.querySelector(".cart-content");
    cartContent.classList.toggle("hidden");
  }

  const dataCart = {
    ...props.data,
  };
  return (
    <>
      <nav>
        <div className="navbar-container relative mx-auto container justify-betwee flex py-5 items-center px-3 z-10 border-b md:mb-5">
          <div className="btn-menu md:hidden" onClick={toggleMenu}>
            <img src={humbergerMenu} alt="" />
          </div>
          <div className="logo flex-1 ml-3 md:flex-none">
            <img src={logo} alt="logo" />
          </div>
          <div className="list-nav bg-white hidden left-0 right-40 top-0 md:block md:bg-transparent md:flex-1 md:ml-10">
            <div className="btn-close mb-6 pt-6 ml-3 md:hidden" onClick={closeMenu}>
              <img src={closeButton} alt="" />
            </div>
            <ul className="md:flex md:items-center pl-3">
              <li className="md:pr-5 mb-3">
                <a className="hover:border-b-4 border-orange-600" href="">
                  Collection
                </a>
              </li>
              <li className="md:pr-5 mb-3">
                <a className="hover:border-b-4 border-orange-600" href="">
                  Men
                </a>
              </li>
              <li className="md:pr-5 mb-3">
                <a className="hover:border-b-4 border-orange-600" href="">
                  Women
                </a>
              </li>
              <li className="md:pr-5 mb-3">
                <a className="hover:border-b-4 border-orange-600" href="">
                  About
                </a>
              </li>
              <li>
                <a className="hover:border-b-4 border-orange-600" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="avatar flex items-center relative">
            <div
              className="cart px-5 cursor-pointer relative"
              onClick={cartToggle}
            >
              <img src={iconCart} alt="" />
              {dataCart.jumlah === 0 ? null : (
                <div className="jumlah-barang absolute top-[-12px] right-3 bg-orange-600 rounded-full text-xs px-2 text-white">
                  {dataCart.jumlah}
                </div>
              )}
            </div>

            <div className="icon-avatar w-7 cursor-pointer hover:border-2 border-orange-600 rounded-full">
              <img src={avatar} alt="" />
            </div>
          </div>
          <div className="cart-content absolute bg-white left-3 right-3 bottom-[-230px] rounded hidden md:left-3/4 md:drop-shadow-xl md:border-2">
            <h1 className="border-b pt-2 pb-3 pl-2">Cart</h1>
            <div className="content py-10 flex justify-center">
              {!dataCart.status ? (
                <h3>Your Cart Is Empety</h3>
              ) : (
                <div className="wrappe w-full mx-3">
                  <div className="items flex bg-slate-100 w-full justify-around items-center md:p-2">
                    <div className="img-banner">
                      <img className="w-10 h-10" src={dataCart.image} alt="" />
                    </div>
                    <div className="nama-product text-slate-500">
                      <div className="nama">{dataCart.name}</div>
                      <div className="jumlah">
                        {`${dataCart.price} x ${dataCart.jumlah}`}{" "}
                        <span className="font-bold text-black">{`$${
                          dataCart.jumlah * dataCart.price
                        }`}</span>
                      </div>
                    </div>
                    <div
                      className="btn-remove text-slate-400 cursor-pointer"
                      onClick={() => {
                        dataCart.status = false;
                        console.log(dataCart.status);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </div>
                  </div>
                  <button className="bg-orange-600 w-full py-1 text-white">
                    CheckOut
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
