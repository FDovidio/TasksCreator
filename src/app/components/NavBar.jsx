import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <header className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Bienvenido!
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Crea alguna tarea! 🎉
              </p>
            </div>

            <div className="mt-4  ">
              <ul className="flex justify-center space-x-8 sm:justify-end ">
                <li>
                  <Link href="/new">
                    <button
                      className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                      type="button">
                      Crear Tarea
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <button
                      className="block rounded-lg bg-violet-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                      type="button">
                      Listado de Tareas
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
