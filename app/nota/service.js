import { handleStatus } from "../utils/promise-helpers.js";

const API = "http://localhost:3000/notas";

const sumItems = (code) => (notas) =>
  notas
    .$flatMap((nota) => nota.itens)
    .filter((item) => item.codigo === code)
    .reduce((acc, curr) => acc + curr.valor, 0);

export const notasServices = {
  listAll() {
    return fetch(API).then(handleStatus);
  },

  sumItems(code) {
    return this.listAll().then(sumItems(code));
  },
};
