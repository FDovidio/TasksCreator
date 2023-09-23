"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-type": "application/json",
        },
      });
    } else {
      const title = e.target.title.value;
      const description = e.target.description.value;

      await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-type": "application/json",
        },
      });
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          {!params.id ? (
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              Creador de tareas
            </h1>
          ) : (
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              Editar tarea {title}
            </h1>
          )}

          <form
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={onSubmit}>
            <div>
              <h4>Titulo de la tarea</h4>
              <label htmlFor="title" className="sr-only"></label>

              <div className="relative">
                <input
                  id="title"
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                  placeholder="Tarea"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
            </div>

            <div>
              <h4>Descripcion de tarea</h4>
              <label htmlFor="description" className="sr-only"></label>

              <div className="text">
                <input
                  id="description"
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                  placeholder="Descripcion"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
              Crear
            </button>
            {params.id && (
              <button
                type="button"
                className="block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
                onClick={async () => {
                  await fetch(`/api/tasks/${params.id}`, {
                    method: "DELETE",
                  });
                  router.refresh();
                  router.push("/");
                }}>
                Borrar
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
