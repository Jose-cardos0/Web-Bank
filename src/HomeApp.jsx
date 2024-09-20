import "./App.css";

//icons
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
//logo
import logobb from "./assets/logobb.png";
import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import boleto1 from "./assets/boleto1.jpg";
import calc1 from "./assets/calc1.jpg";
import calend1 from "./assets/calend1.jpg";
import senha1 from "./assets/senha1.jpg";
import suspeita1 from "./assets/suspeita1.jpg";
import atendimento1 from "./assets/atendimento1.jpg";
import ajuda1 from "./assets/ajuda1.jpg";
import acess from "./assets/acessoinform.jpg";

//routes
import { Link } from "react-router-dom";

//react
import { useState } from "react";

export function HomeApp() {
  const [openDropdowns, setOpenDropdowns] = useState({
    paraVoce: false,
    proSeuNegocio: false,
    agronegocios: false,
    setorPublico: false,
    acessarConta: false,
  });

  const toggleDropDown = (dropdownName) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  const handleSelectOption = (dropdownName, option) => {
    console.log(`Opção selecionada no ${dropdownName}: ${option}`);
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [dropdownName]: false,
    }));
  };

  return (
    <div className="min-w-full overflow-hidden">
      <header
        className="flex w-screen max-h-14 md:h-16 border-b-2 border-blue-500"
        style={{ backgroundColor: "#fcfc30" }}
      >
        {/* Ícone de Menu */}
        <div className="flex items-center justify-center mx-2 md:mx-3">
          <CiMenuBurger size={20} color="#465eff" />
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <img
            className="max-w-7 mr-2 md:mr-3 w-10 md:w-14"
            src={logobb}
            alt="logobb"
          />
        </div>

        <div className="flex items-center justify-around">
          <div className="flex">
            {/* Dropdown: Para Você */}
            <div className="relative inline-block">
              <div
                style={{ backgroundColor: "#fcfc30" }}
                className=" cursor-pointer rounded-md py-1 md:py-2 px-2 md:px-4 w-full text-blue-600 font-medium flex justify-between items-center border-l-2 "
                onClick={() => toggleDropDown("paraVoce")}
              >
                <p className="text-xs md:text-base">Para Você</p>
                <svg
                  className={`w-4 h-4 text-blue-600 transform transition-transform duration-200 ${
                    openDropdowns.paraVoce ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>

              {openDropdowns.paraVoce && (
                <div
                  className="absolute mt-1  rounded-md shadow-lg
               bg-white ring-1 ring-black ring-opacity-5 w-36"
                >
                  <div
                    className="py-1 text-black cursor-pointer"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 
                    border-b border-gray-300"
                      onClick={() => handleSelectOption("paraVoce", "Opção 1")}
                    >
                      Início
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() => handleSelectOption("paraVoce", "Opção 2")}
                    >
                      Contas
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 
                    border-b border-gray-300"
                      onClick={() => handleSelectOption("paraVoce", "Opção 3")}
                    >
                      Cartões
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 
                    border-b border-gray-300"
                      onClick={() => handleSelectOption("paraVoce", "Opção 3")}
                    >
                      Empréstimo
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 
                    border-b border-gray-300"
                      onClick={() => handleSelectOption("paraVoce", "Opção 3")}
                    >
                      Minhas Finanças
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => handleSelectOption("paraVoce", "Opção 3")}
                    >
                      Shopping BB
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Pro Seu Negócio */}
            <div className="relative inline-block ">
              <div
                style={{ backgroundColor: "#fcfc30" }}
                className="
              cursor-pointer rounded-md py-1 md:py-2 px-2 md:px-4 w-full text-blue-600 font-medium flex justify-between items-center"
                onClick={() => toggleDropDown("proSeuNegocio")}
              >
                <p className="text-xs md:text-base">Pro Seu Negócio</p>
                <svg
                  className={`w-4 h-4 text-blue-600 transform transition-transform duration-200 ${
                    openDropdowns.proSeuNegocio ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>

              {openDropdowns.proSeuNegocio && (
                <div
                  className="absolute mt-1  rounded-md shadow-lg
               bg-white ring-1 ring-black ring-opacity-5 w-36"
                >
                  <div className="py-1 text-black cursor-pointer" role="menu">
                    <div
                      className="block px-4 py-2 text-sm
                     hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("proSeuNegocio", "Opção 1")
                      }
                    >
                      Início
                    </div>
                    <div
                      className="block px-4 py-2 text-sm
                     hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("proSeuNegocio", "Opção 2")
                      }
                    >
                      Contas
                    </div>
                    <div
                      className="block px-4 py-2 text-sm
                     hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("proSeuNegocio", "Opção 2")
                      }
                    >
                      Crédito
                    </div>
                    <div
                      className="block px-4 py-2 text-sm
                     hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("proSeuNegocio", "Opção 2")
                      }
                    >
                      Cartões
                    </div>
                    <div
                      className="block px-4 py-2 text-sm
                     hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("proSeuNegocio", "Opção 2")
                      }
                    >
                      Open Finance
                    </div>
                    <div
                      className="block px-4 py-2 text-sm
                     hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("proSeuNegocio", "Opção 2")
                      }
                    >
                      Franquias
                    </div>
                    <div
                      className="block px-4 py-2 text-sm
                     hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("proSeuNegocio", "Opção 2")
                      }
                    >
                      Recebimentos
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() =>
                        handleSelectOption("proSeuNegocio", "Opção 3")
                      }
                    >
                      Pagamentos
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Agronegócios */}
            <div className="relative inline-block ">
              <div
                style={{ backgroundColor: "#fcfc30" }}
                className=" cursor-pointer rounded-md py-1 md:py-2 px-2 md:px-4 w-full text-blue-600 font-medium flex justify-between items-center"
                onClick={() => toggleDropDown("agronegocios")}
              >
                <p className="text-xs md:text-base">Agronegócios</p>
                <svg
                  className={`w-4 h-4 text-blue-600 transform transition-transform duration-200 ${
                    openDropdowns.agronegocios ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>

              {openDropdowns.agronegocios && (
                <div
                  className="absolute mt-1  rounded-md shadow-lg
               bg-white ring-1 ring-black ring-opacity-5 w-36"
                >
                  <div className="py-1 text-black cursor-pointer" role="menu">
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("agronegocios", "Opção 1")
                      }
                    >
                      Início
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("agronegocios", "Opção 2")
                      }
                    >
                      Custeio
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("agronegocios", "Opção 2")
                      }
                    >
                      Investimentos
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("agronegocios", "Opção 2")
                      }
                    >
                      Comercialização
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("agronegocios", "Opção 2")
                      }
                    >
                      Consórcio
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("agronegocios", "Opção 2")
                      }
                    >
                      Convênios
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("agronegocios", "Opção 2")
                      }
                    >
                      Cartões
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() =>
                        handleSelectOption("agronegocios", "Opção 3")
                      }
                    >
                      Open Finance
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Setor Público */}
            <div className="relative inline-block ">
              <div
                style={{ backgroundColor: "#fcfc30" }}
                className=" cursor-pointer rounded-md py-1 md:py-2 px-2 md:px-4 w-full text-blue-600 font-medium flex justify-between items-center"
                onClick={() => toggleDropDown("setorPublico")}
              >
                <p className="text-xs md:text-base">Setor Público</p>
                <svg
                  className={`w-4 h-4 text-blue-600 transform transition-transform duration-200 ${
                    openDropdowns.setorPublico ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>

              {openDropdowns.setorPublico && (
                <div
                  className="absolute mt-1 w-full rounded-md shadow-lg
               bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1 text-black cursor-pointer" role="menu">
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("setorPublico", "Opção 1")
                      }
                    >
                      Início
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("setorPublico", "Opção 2")
                      }
                    >
                      Federal
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("setorPublico", "Opção 2")
                      }
                    >
                      Estadual
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("setorPublico", "Opção 2")
                      }
                    >
                      Municipal
                    </div>
                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                      onClick={() =>
                        handleSelectOption("setorPublico", "Opção 2")
                      }
                    >
                      Juridico
                    </div>

                    <div
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() =>
                        handleSelectOption("setorPublico", "Opção 3")
                      }
                    >
                      Conta Eleitoral
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Campo de Pesquisa */}
            <div className="bg-black bg-opacity-25 ml-3 cursor-pointer rounded-md outline-none flex items-center text-white font-medium hover:bg-slate-600 hover:bg-opacity-25 p-1">
              <FaSearch color="white" size={20} />
              <input
                className="outline-none bg-transparent ml-3 placeholder-white w-full md:w-64"
                type="text"
                placeholder="O que você precisa?"
              />
            </div>
          </div>
          {/*AQUIIIIIIIII */}
        </div>
        <div className="flex items-center justify-end ml-auto">
          {/* Dropdown: Acessar conta */}
          <div className="relative inline-block ">
            <div
              style={{ backgroundColor: "#fcfc30" }}
              className=" cursor-pointer rounded-md py-1
               md:py-2 px-2 md:px-4 w-full
                text-blue-600 font-medium flex justify-between items-center"
              onClick={() => toggleDropDown("acessarConta")}
            >
              <p className="text-xs md:text-base">ACESSE SUA CONTA</p>

              <svg
                className={`w-4 h-4 text-blue-600 transform transition-transform duration-200 ${
                  openDropdowns.acessarConta ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>

            {openDropdowns.acessarConta && (
              <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1 text-black cursor-pointer" role="menu">
                  <div
                    className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                    onClick={() =>
                      handleSelectOption("acessarConta", "Opção 1")
                    }
                  >
                    <Link to={"/login"}>Pessoa Física</Link>
                  </div>
                  <div
                    className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                    onClick={() =>
                      handleSelectOption("acessarConta", "Opção 2")
                    }
                  >
                    Pessoa Jurídica
                  </div>
                  <div
                    className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-300"
                    onClick={() =>
                      handleSelectOption("acessarConta", "Opção 2")
                    }
                  >
                    Setor Público
                  </div>
                  <div
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() =>
                      handleSelectOption("acessarConta", "Opção 3")
                    }
                  >
                    Produtor Rural/Private
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <section className="min-w-full min-h-screen">
        <img
          className="bg-contain object-cover w-full h-full cursor-pointer"
          src={banner1}
          alt=""
        />
      </section>
      <section className="w-full flex justify-center items-center p-10">
        <img
          className="items-center shadow-md cursor-pointer"
          src={banner2}
          alt=""
        />
      </section>
      <section
        className="flex flex-col items-center justify-center min-h-80 w-full"
        style={{ backgroundColor: "#f4f4f6" }}
      >
        <h1
          style={{ color: "#465eff", fontSize: "2rem" }}
          className="font-medium"
        >
          Facilidades para o seu dia a dia
        </h1>
        <div className="flex p-10 gap-5">
          <div
            className="bg-white rounded-xl flex 
          items-center justify-center flex-col min-w-40
          transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md "
            shadow-md
          >
            <img className="bg-cover" src={boleto1} alt="" />
            <p className="font-medium" style={{ color: "#465eff" }}>
              2º via de <br />
              boleto
            </p>
          </div>
          <div
            className="bg-white rounded-xl flex items-center
           justify-center flex-col min-w-40
           transition-transform duration-300 hover:scale-105 cursor-pointer  shadow-md"
            shadow-md
          >
            <img className="bg-cover" src={calc1} alt="" />
            <p className="font-medium" style={{ color: "#465eff" }}>
              Contestação <br />
              de Compras
            </p>
          </div>
          <div
            className="bg-white  rounded-xl flex items-center 
          justify-center flex-col min-w-40
          transition-transform duration-300 hover:scale-105 cursor-pointer  shadow-md"
            shadow-md
          >
            <img className="bg-cover" src={calend1} alt="" />
            <p className="font-medium" style={{ color: "#465eff" }}>
              Pasep <br />
            </p>
          </div>
          <div
            className="bg-white  rounded-xl flex items-center 
          justify-center flex-col min-w-40
          transition-transform duration-300 hover:scale-105 cursor-pointer  shadow-md"
            shadow-md
          >
            <img className="bg-cover" src={senha1} alt="" />
            <p className="font-medium" style={{ color: "#465eff" }}>
              Senhas <br />
            </p>
          </div>
          <div
            className="bg-white  rounded-xl flex items-center 
          justify-center flex-col min-w-40
          transition-transform duration-300 hover:scale-105 cursor-pointer  shadow-md"
            shadow-md
          >
            <img className="bg-cover" src={suspeita1} alt="" />
            <p className="font-medium" style={{ color: "#465eff" }}>
              Suspeitou de <br />
              fraude?
            </p>
          </div>
          <div
            className="bg-white rounded-xl flex items-center 
          justify-center flex-col min-w-40
          transition-transform duration-300 hover:scale-105 cursor-pointer  shadow-md"
            shadow-md
          >
            <img className="bg-cover" src={atendimento1} alt="" />
            <p className="font-medium" style={{ color: "#465eff" }}>
              Atendimento <br />
            </p>
          </div>
          <div
            className="bg-white  rounded-xl flex items-center justify-center 
          flex-col min-w-40
          transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md"
          >
            <img className="bg-cover" src={ajuda1} alt="" />
            <p className="font-medium" style={{ color: "#465eff" }}>
              Central de <br />
              ajuda
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div
          style={{ backgroundColor: "#465eff" }}
          className="font-bold flex  justify-center  py-5 items-center"
        >
          <p style={{ color: "#fcfc30" }} className="text-4xl mr-5">
            Ainda não é cliente?
          </p>
          <button
            style={{
              color: "#465eff",
            }}
            className="p-3 px-8 rounded-md hover:bg-white bg-yellow-300 
            "
          >
            ABRA SUA CONTA
          </button>
        </div>
        <section style={{ backgroundColor: "#f7f8f9" }} className="w-full">
          <div className="flex flex-row items-center min-w-full justify-center gap-20 p-14">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="font-light text-blue-700">
                  Central de Relacionamento BB
                </p>
                <h3 className="font-medium text-blue-700">
                  4004 0001 / 0800 729 0001
                </h3>
              </div>
              <div className="flex flex-col mt-2">
                <p className="font-light text-blue-700">
                  Deficientes Auditivos/Fala
                </p>
                <h3 className="font-medium text-blue-700">0800 729 0088</h3>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="font-light text-blue-700">SAC</p>
                <h3 className="font-medium text-blue-700">0800 729 0722</h3>
              </div>
              <div className="flex flex-col mt-2">
                <p className="font-light text-blue-700">Whatsapp</p>
                <h3 className="font-medium text-blue-700">61 4004 0001</h3>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="font-light text-blue-700">Ouvidoria BB</p>
                <h3 className="font-medium text-blue-700">0800 729 5678</h3>
              </div>
              <div className="flex flex-col mt-2">
                <p className="font-light text-blue-700">
                  Canal de Denúncias BB
                </p>
                <h3 className="font-medium text-blue-700">0800 300 4455</h3>
              </div>
            </div>
            <div>
              <img
                className="cursor-pointer"
                src={acess}
                alt="acesso à informação"
              />
            </div>
          </div>
        </section>
        <section
          style={{ backgroundColor: "#fcfc30" }}
          className="min-w-full p-3"
        >
          <div className="flex items-center justify-center gap-40">
            <span className="text-xs">
              © Banco do Brasil S/A - CNPJ 00.000.000/0001-91 SAUN QD 5 LT{" "}
              <br />
              B, Asa Norte, Brasília-DF, Brasil - CEP 70040-911
            </span>
            <span className="flex gap-3">
              <a
                className="font-medium text-xs flex items-center gap-1"
                href="#"
              >
                <CgMenuGridR />
                Mapa do site
              </a>
              <a
                className="font-medium text-xs flex items-center gap-1"
                href="#"
              >
                <FaExclamationTriangle />
                Segurança
              </a>
              <a
                className="font-medium text-xs flex items-center gap-1"
                href="#"
              >
                <FaHeart />
                Ética e integridade
              </a>
              <a
                className="font-medium text-xs flex items-center gap-1"
                href="#"
              >
                <IoEyeSharp />
                Minha privacidade
              </a>
              <a
                className="font-medium text-xs flex items-center gap-1"
                href="#"
              >
                <FaCheckCircle />
                Transparência
              </a>
            </span>
          </div>
        </section>
      </footer>
    </div>
  );
}

//RESPONSIVIDADE HANBURGUER

// <header className="min-w-full flex bg-yellow-300 h-11 md:h-16">
// {/* Ícone de Menu Hambúrguer para dispositivos móveis */}
// <div className="flex items-center justify-center mx-2 md:hidden">
//   {!isMenuOpen ? (
//     <CiMenuBurger size={28} color="#465eff" onClick={toggleMenu} />
//   ) : (
//     <AiOutlineClose size={28} color="#465eff" onClick={toggleMenu} />
//   )}
// </div>

// {/* Logo */}
// <div className="flex justify-center items-center flex-1">
//   <img className="max-w-7 mr-2 md:mr-3 w-10 md:w-14" src={logobb} alt="logobb" />
// </div>

// {/* Campo de Pesquisa */}
// <div className="hidden md:flex bg-black bg-opacity-25 cursor-pointer rounded-md outline-none items-center text-white font-medium hover:bg-slate-600 hover:bg-opacity-25 p-1 flex-1">
//   <FaSearch color="white" size={20} />
//   <input
//     className="outline-none bg-transparent ml-3 placeholder-white w-full md:w-64"
//     type="text"
//     placeholder="O que você precisa?"
//   />
// </div>
// </header>

// {/* Menu Hambúrguer Expansível para Celulares */}
// {isMenuOpen && (
// <div className="md:hidden bg-white shadow-lg p-4 absolute w-full top-11 left-0 z-10">
//   {/* Dropdown: Para Você */}
//   <div className="mb-4">
//     <p
//       className="cursor-pointer text-blue-600 font-medium text-lg"
//       onClick={() => toggleDropDown("paraVoce")}
//     >
//       Para Você
//     </p>
//     {openDropdowns.paraVoce && (
//       <div className="pl-4 text-black">
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("paraVoce", "Opção 1")}
//         >
//           Opção 1
//         </p>
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("paraVoce", "Opção 2")}
//         >
//           Opção 2
//         </p>
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("paraVoce", "Opção 3")}
//         >
//           Opção 3
//         </p>
//       </div>
//     )}
//   </div>

//   {/* Dropdown: Pro Seu Negócio */}
//   <div className="mb-4">
//     <p
//       className="cursor-pointer text-blue-600 font-medium text-lg"
//       onClick={() => toggleDropDown("proSeuNegocio")}
//     >
//       Pro Seu Negócio
//     </p>
//     {openDropdowns.proSeuNegocio && (
//       <div className="pl-4 text-black">
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("proSeuNegocio", "Opção 1")}
//         >
//           Opção 1
//         </p>
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("proSeuNegocio", "Opção 2")}
//         >
//           Opção 2
//         </p>
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("proSeuNegocio", "Opção 3")}
//         >
//           Opção 3
//         </p>
//       </div>
//     )}
//   </div>

//   {/* Dropdown: Agronegócios */}
//   <div className="mb-4">
//     <p
//       className="cursor-pointer text-blue-600 font-medium text-lg"
//       onClick={() => toggleDropDown("agronegocios")}
//     >
//       Agronegócios
//     </p>
//     {openDropdowns.agronegocios && (
//       <div className="pl-4 text-black">
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("agronegocios", "Opção 1")}
//         >
//           Opção 1
//         </p>
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("agronegocios", "Opção 2")}
//         >
//           Opção 2
//         </p>
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("agronegocios", "Opção 3")}
//         >
//           Opção 3
//         </p>
//       </div>
//     )}
//   </div>

//   {/* Dropdown: Setor Público */}
//   <div className="mb-4">
//     <p
//       className="cursor-pointer text-blue-600 font-medium text-lg"
//       onClick={() => toggleDropDown("setorPublico")}
//     >
//       Setor Público
//     </p>
//     {openDropdowns.setorPublico && (
//       <div className="pl-4 text-black">
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("setorPublico", "Opção 1")}
//         >
//           Opção 1
//         </p>
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("setorPublico", "Opção 2")}
//         >
//           Opção 2
//         </p>
//         <p
//           className="block py-1 hover:bg-gray-100"
//           onClick={() => handleSelectOption("setorPublico", "Opção 3")}
//         >
//           Opção 3
//         </p>
//       </div>
//     )}
//   </div>
// </div>
// )}
