//logo
import logobb2 from "../assets/logobb2.jpg";

//router-dom
import { Link } from "react-router-dom";

//icons
import { MdContactPhone } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineFileCopy } from "react-icons/md";

export function LoginConfirm() {
  return (
    <div
      className="min-w-full min-h-screen flex
     flex-col"
    >
      <div
        className="flex min-w-full h-28 items-center justify-center gap-40  "
        style={{ backgroundColor: "#f8d117" }}
      >
        <Link to={"/"}>
          <img
            className="max-w-16 border border-blue-800 cursor-pointer"
            src={logobb2}
            alt=""
          />
        </Link>
        <h1 className="text-blue-900 text-4xl font-semibold">
          Autoatendimento
        </h1>
      </div>
      <div
        className="m-auto flex flex-col
       items-center justify-center 
         px-10 py-3 min-w-80"
        style={{
          backgroundColor: "#f8d117",
          boxShadow:
            "0 3px 3px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.19)",
        }}
      >
        <div>
          <h1 className="text-blue-800 mb-5 font-semibold text-lg">
            Agência e conta
          </h1>
        </div>
        <form className="flex flex-col w-full">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center mb-3">
              <p className="font-light mb-2">Agência</p>
              <p className="text-lg font-semibold">4477</p>
            </div>
            <div className="flex flex-col items-center mb-3">
              <p className="font-light mb-2">Conta</p>
              <p className="text-lg font-semibold">106812-1</p>
            </div>
          </div>
          <div className="mb-2 ">
            <p className="font-light">Senha de 8 dígitos</p>
          </div>
          <div className="flex h-12 mb-5">
            <input
              className="p-3 bg-yellow-200 placeholder-slate-400
             text-center font-semibold outline-none hover:border-b-2
              border-blue-500 "
              type="password"
              placeholder="SENHA DE 8 DÍGITOS"
            />
            <div
              className="h-full
             flex items-center justify-center bg-blue-600
              w-12 cursor-pointer"
            >
              <p className="text-white text-4xl">?</p>
            </div>
          </div>

          <Link
            className="flex items-center justify-center mb-20"
            to={"/conta"}
          >
            <input
              className="p-3 bg-blue-500
             text-white
              rounded-sm cursor-pointer text-center"
              value={"ENTRAR"}
            />

            <button />
          </Link>
          <a
            className="text-center text-blue-600 mt-3
             "
            href="#"
          >
            <span className="hover:border-b border-blue-600">Outra conta</span>
          </a>
        </form>
      </div>
      <section className="w-full h-11 flex items-center justify-center">
        <div
          className="h-full
         bg-blue-500 w-80 rounded-t-md flex items-center justify-around
         "
        >
          {/*icons*/}
          <MdContactPhone size={30} color="white" />
          <TfiMenuAlt size={30} color="white" />
          <MdOutlineFileCopy size={30} color="white" />
        </div>
      </section>
    </div>
  );
}
