//logo
import logobb2 from "../assets/logobb.png";
import logobb3 from "../assets/blackBank.png";
import banner3 from "../assets/banner3.png";

//routerdom
import { Link } from "react-router-dom";

//icons
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { TfiEmail } from "react-icons/tfi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiPiggyBankBold } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiMoneygram } from "react-icons/si";
import { FaHandsHelping } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { IoIosPaper } from "react-icons/io";
import { BiSolidUserAccount } from "react-icons/bi";

export function ContaPessoaPF() {
  return (
    <div className="min-w-full">
      <header
        className="flex h-14 justify-between items-center "
        style={{
          backgroundColor: "#fcfc30",
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.19)",
        }}
      >
        <div className="flex ml-3 items-center justify-center ">
          <div className="mr-3">
            <img
              className="w-10 border border-sky-300 p-1"
              src={logobb2}
              alt="logo bb"
            />
          </div>
          <div className="items-center justify-center flex bg-white p-2 border-2  border-blue-200">
            <div className="flex items-center justify-center w-full ">
              <FaSearch color="gray" size={20} className="mr-3" />
              <input
                className="outline-none w-96  "
                type="text"
                placeholder="Ache fácil o que você procura"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <p
            className="font-light cursor-pointer "
            style={{ color: "#4178bc" }}
          >
            Fazer tour
          </p>
          <p
            className="font-light cursor-pointer "
            style={{ color: "#4178bc" }}
          >
            Fale conosco
          </p>
          <FaBell color="#4178bc" />
          <div>
            {" "}
            <a className="border-l-2 border-sky-500" href=""></a>
          </div>

          <Link to={"/"}>
            <div
              className="flex mr-3 font-light cursor-pointer"
              style={{ color: "#4178bc" }}
            >
              Sair
            </div>
          </Link>
        </div>
      </header>
      <div className="flex w-full min-h-screen">
        <section className="flex flex-col w-1/3 min-h-screen border-r-2">
          <div className="border-b-2">
            <div className="flex items-center my-3">
              <IoPersonSharp
                size={50}
                className="border-2 rounded-full mx-3 p-1"
              />
              <div className="flex flex-col gap-4">
                <span className="font-light text-sm">
                  último acesso: 19/09/2024 08:25:43
                </span>
                <span className="font-light text-sm">Sessão durou 07min24</span>
              </div>
            </div>
          </div>
          <div className="flex items-center my-3">
            <div className=" mx-3">
              <IoHomeSharp size={40} style={{ color: "#4178bc" }} />
            </div>
            <div className="flex items-center justify-center w-full gap-5">
              <span className="font-light text-sm">Ag.4477</span>
              <span className="font-light text-sm">C.c.106812-1</span>
            </div>
            <div className="mr-3">
              <IoIosArrowDown />
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center justify-center border-t-2  border-sky-500">
              <RiMenuFill
                className=" flex items-center justify-center mx-3"
                size={30}
                color="#4178bc"
              />
            </div>
            <div
              className="flex items-center justify-around border-b-2 border-t-2 border-l-2 p-3
          w-full"
            >
              <HiUsers size={30} color="#52525b" />
              <TfiEmail size={30} color="#52525b" />
              <HiBuildingOffice2 size={30} color="#52525b" />
              <FaPhoneAlt size={30} color="#52525b" />
            </div>
          </div>
          <div className="w-full p-7">
            <h1
              className="text-center font-semibold text-lg"
              style={{ color: "#4178bc" }}
            >
              Menu Completo
            </h1>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full cursor-pointer hover:bg-sky-600 hover:text-white py-3">
              <div className="px-3">
                <img className="w-8" src={logobb3} alt="" />
              </div>
              <div className="flex items-center justify-between w-full ">
                <p className="hover:text-white">Meu menu</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
            <div className="flex w-full cursor-pointer hover:bg-sky-600 hover:text-white py-3">
              <div className="px-3">
                <BiSolidUserAccount size={30} />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="hover:text-white  ">Conta corrente</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
            <div className="flex w-full cursor-pointer hover:bg-sky-600 hover:text-white py-3">
              <div className="px-3">
                <IoStar size={30} />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="hover:text-white  ">Empréstimos</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
            <div className="flex w-full cursor-pointer bg-sky-600 text-white py-3">
              <div className="px-3">
                <IoIosPaper size={30} />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="hover:text-white  ">Extrato</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
            <div className="flex w-full cursor-pointer hover:bg-sky-600 hover:text-white py-3">
              <div className="px-3">
                <FaRegCreditCard size={30} />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="hover:text-white  ">Cartões</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
            <div className="flex w-full cursor-pointer hover:bg-sky-600 hover:text-white py-3">
              <div className="px-3">
                <PiPiggyBankBold size={30} />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="hover:text-white  ">Poupança</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
            <div className="flex w-full cursor-pointer hover:bg-sky-600 hover:text-white py-3">
              <div className="px-3">
                <SiMoneygram size={30} />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="hover:text-white  ">Open Finance</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
            <div className="flex w-full cursor-pointer hover:bg-sky-600 hover:text-white py-3">
              <div className="px-3">
                <GiTakeMyMoney size={30} />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="hover:text-white  ">Pagar conta</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
            <div className="flex w-full cursor-pointer hover:bg-sky-600 hover:text-white py-3">
              <div className="px-3">
                <FaMoneyBillTransfer size={30} />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="hover:text-white  ">Gerar cobranças</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
            <div className="flex w-full cursor-pointer hover:bg-sky-600 hover:text-white py-3">
              <div className="px-3">
                <FaHandsHelping size={30} />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="hover:text-white  ">Suporte</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
            <div className="flex w-full cursor-pointer hover:bg-sky-600 hover:text-white py-3">
              <div className="px-3">
                <FiBookOpen size={30} />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="hover:text-white  ">Outros...</p>
                <IoIosArrowForward className="mr-3" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col ">
          <div className="p-6">
            <h1 style={{ color: "#4178bc" }} className="font-semibold text-2xl">
              Minha página
            </h1>
          </div>
          <div>
            <img src={banner3} alt="tesouro direto do bb" />
          </div>
          <div className="w-full px-3">
            <div className="w-full border mt-3">
              <span className="font-semibold ml-1">Cliente - Conta atual</span>
            </div>
            <div>
              <p className="font-light">Agência - 4477</p>
              <p className="font-light">Conta corrente - 106812-1 </p>
              <p className="font-light">
                Período do extrato mês atual a partir do dia 21
              </p>
            </div>
            <div className="w-full border ">
              <span className="font-semibold ml-1">Lançamentos</span>
            </div>
            <div class="container mx-auto ">
              <table class="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th class="px-4 py-2 border">Dt.movimento</th>
                    <th class="px-4 py-2 border">Dt. balancete</th>
                    <th class="px-4 py-2 border">Histórico</th>
                    <th class="px-4 py-2 border">Documento</th>
                    <th class="px-4 py-2 border">Valor</th>
                    <th class="px-4 py-2 border">Saldo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-2 border">20/09/2024</td>
                    <td class="px-4 py-2 border"></td>
                    <td class="px-4 py-2 border"></td>
                    <td class="px-4 py-2 border"></td>
                    <td class="px-4 py-2 border"></td>
                    <td class="px-4 py-2 border text-blue-500 font-semibold">
                      0,00 C
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td class="px-4 py-2 border">21/09/2024</td>
                    <td class="px-4 py-2 border">21/09/2024</td>
                    <td class="px-4 py-2 border">RECEBIMENTO TED</td>
                    <td class="px-4 py-2 border">350</td>
                    <td class="px-4 py-2 border text-blue-500 font-semibold">
                      51.735,47 C
                    </td>
                    <td class="px-4 py-2 border"></td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">21/09/2024</td>
                    <td class="px-4 py-2 border"></td>
                    <td class="px-4 py-2 border">DEBITO BLOQ. JUDICIAL</td>
                    <td class="px-4 py-2 border">1</td>
                    <td class="px-4 py-2 border text-red-500 font-semibold">
                      50.182,00 D
                    </td>
                    <td class="px-4 py-2 border"></td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td class="px-4 py-2 border">21/09/2024</td>
                    <td class="px-4 py-2 border"></td>
                    <td class="px-4 py-2 border">DEBITO BLOQ. JUDICIAL 3</td>
                    <td class="px-4 py-2 border">1</td>
                    <td class="px-4 py-2 border text-red-500 font-semibold">
                      1.553,47 D
                    </td>
                    <td class="px-4 py-2 border"></td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">21/09/2024</td>
                    <td class="px-4 py-2 border"></td>
                    <td class="px-4 py-2 border">SALDO</td>
                    <td class="px-4 py-2 border"></td>
                    <td class="px-4 py-2 border"></td>
                    <td class="px-4 py-2 border text-blue-500 font-semibold">
                      0,00 C
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="w-full flex justify-between font-light">
                <p>Aplic.com Resgate Autom.</p>
                <p className="text-blue-500 font-semibold">160,38 C</p>
              </div>
              <div className="w-full flex justify-between font-light">
                <p>Saldo Disponível</p>
                <p className="text-blue-500 font-semibold">160,38 C</p>
              </div>
              <div className="w-full flex justify-between font-light">
                <p>Juros</p>
                <p>0,00</p>
              </div>
              <div className="w-full flex justify-between font-light">
                <p>Data de Débito de Juros</p>
                <p>30/08/2024</p>
              </div>
              <div className="w-full flex justify-between font-light">
                <p>IOF</p>
                <p>0,00</p>
              </div>
              <div className="w-full flex justify-between font-light">
                <p>Data de Débito de IOF </p>
                <p>03/09/2024</p>
              </div>
            </div>
            <div className="w-full border">
              <p className="font-semibold ml-1">
                Saldo de fundos de investimento
              </p>
            </div>

            <div className="w-full flex justify-between font-light">
              <p>BB CP Admin Supremo</p>
              <p>160,38</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
