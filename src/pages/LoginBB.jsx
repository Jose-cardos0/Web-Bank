//logo
import logobb2 from "../assets/logobb2.jpg";

//router-dom
import { Link } from "react-router-dom";

//icons
import { MdContactPhone } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineFileCopy } from "react-icons/md";

export function LoginBB() {
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
          <p className="font-light mb-2">Agência</p>
          <input
            className="p-3 bg-yellow-200 placeholder-slate-400 
            text-center font-semibold outline-none  hover:border-b-2 border-blue-500  "
            type="text"
            placeholder="Agência"
          />
          <p className="text-center font-thin text-gray-500 text-sm">
            Informe sua agência
          </p>
          <p className="font-light mb-2">Conta</p>
          <input
            className="p-3 bg-yellow-200 placeholder-slate-400
             text-center font-semibold outline-none hover:border-b-2 border-blue-500 "
            type="text"
            placeholder="Conta corrente"
          />
          <p className="text-center text-gray-500 font-thin text-sm">
            Informe sua conta com o dígito
          </p>
          <div className="flex items-center justify-center my-3 gap-2">
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                <p
                  className="font-light
                 text-gray-500"
                >
                  Guardar agência e conta
                </p>
              </span>
            </label>
          </div>
          <Link
            className="flex items-center justify-center"
            to={"/loginconfirm"}
          >
            <input
              className="p-3 bg-blue-500
             text-white
              rounded-sm cursor-pointer text-center"
              value={"CONTINUAR"}
            />
          </Link>
          <a
            className="text-center text-blue-600 mt-3
             "
            href="#"
          >
            <span className="hover:border-b border-blue-600">
              Outro tipo de acesso
            </span>
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
