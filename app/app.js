import { handleStatus } from "./utils/promise-helpers.js";
document.querySelector("#myButton").onclick = () =>
  fetch("http://localhost:3000/notas")
    .then(handleStatus)
    .then((notas) => notas.reduce((acc, curr) => acc.concat(curr.itens), []))
    .then((itens) => itens.filter((i) => i.codigo === "2143"))
    .then((itens) => itens.reduce((acc, curr) => acc + curr.valor, 0))
    .then(console.log);
