import { handleStatus } from "./utils/promise-helpers.js";
import "./utils/array-helpers.js";

const CODE = "2143";
document.querySelector("#myButton").onclick = () =>
  fetch("http://localhost:3000/notas")
    .then(handleStatus)
    .then((notas) =>
      notas
        .$flatMap((nota) => nota.itens)
        .filter((i) => i.codigo === CODE)
        .reduce((acc, curr) => acc + curr.valor, 0),
    )
    .then(console.log);
