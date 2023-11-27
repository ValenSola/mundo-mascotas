import cart from "../../icons/cart.svg";

function Carrito() {
    return (
      <div class="cart-iconos">
        <div id="cart">
          <div class="cart-contador">
            <div id="contador-cart">0</div>
            <img class="carrito" src={cart}/>
          </div>
        </div>
        <div class="none" id="container-cart"></div>
      </div>
    );
  }
  
  export default Carrito;