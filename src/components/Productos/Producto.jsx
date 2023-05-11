const Producto = (data) => {
    return (
        <div className="productoDivGeneral">
            <div className="productoIndividualImagen">
                <img src={data.data.producto.foto_producto} alt={data.data.producto.nombre_producto} width={"400px"} height={"400px"}></img>
            </div>
            <div className="productoIndividualInformacion">
                <h5>{data.data.categoria.nombre_categoria}</h5>
                <h2>{data.data.producto.nombre_producto}</h2>
                <h4>{data.data.producto.descripcion_producto}</h4>
                <h3>{"$" + data.data.producto.coste_base}</h3>
                <div className="productoIndividualCarrito">
                    <div className="productoIndividualCarritoCantidad">

                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Producto;