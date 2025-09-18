import {
  seleccionarCantidadGustos,
  ingresarCliente,
  seleccionarProducto,
  seleccionarSabores,
} from "./dataEntry.js";
import fs from "fs"

// Cargar sabores y productos
// COMPLETEN USTEDES
let sabores=JSON.parse(fs.readFileSync("data/sabores.json", "utf-8"));

let productos=JSON.parse(fs.readFileSync("data/productos.json", "utf-8"));;

// Ingresar cliente
let cliente = ingresarCliente();
// Elegir producto
let producto = seleccionarProducto(productos);
// Elegir cantidad de gustos
let gustos = seleccionarCantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);

// Guardar pedido
// COMPLETEN USTEDES
