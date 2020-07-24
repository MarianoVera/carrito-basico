import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  // Crear lista de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Remera ReactJS", precio: 250 },
    { id: 2, nombre: "Remera VueJS", precio: 400 },
    { id: 3, nombre: "Remera Angular", precio: 100 },
    { id: 4, nombre: "Remera Nose.js", precio: 230 },
  ]);

  // State para el carrito de compras

  const [carrito, agregarProducto] = useState([]);

  //Fecha

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header />

      <h1>Lista de Productos</h1>

      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito 
      carrito={carrito} 
      agregarProducto={agregarProducto} 
      />

      <Footer AñoAct={fecha} />
    </Fragment>
  );
}

export default App;
