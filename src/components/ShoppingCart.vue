<script setup>

import { useCartStore } from "../stores/cartStore";


const cartStore = useCartStore();


</script>


<template>

<div class="container">


<div class="card">


<h1>Shopping Cart</h1>



<!-- Statistics -->

<div class="summary">

<div>
<h3>{{cartStore.totalItems}}</h3>
<p>Total Items</p>
</div>


<div>
<h3>${{cartStore.totalPrice}}</h3>
<p>Total Price</p>
</div>

</div>




<div class="content">


<!-- Products -->

<div class="section">

<h2>Products</h2>


<div
v-for="product in cartStore.products"
:key="product.id"
class="product"
>


<div>

<h3>{{product.name}}</h3>

<p>${{product.price}}</p>

</div>


<button
@click="cartStore.addToCart(product)"
>
Add Cart
</button>


</div>


</div>






<!-- Cart -->

<div class="section">


<h2>Your Cart</h2>


<div
v-if="cartStore.cart.length === 0"
class="empty"
>
Cart is empty
</div>



<div
v-for="item in cartStore.cart"
:key="item.id"
class="cart-item"
>


<div>

<h3>{{item.name}}</h3>

<p>${{item.price}}</p>

</div>



<button
@click="cartStore.removeFromCart(item.id)"
>
Remove
</button>


</div>



<button
class="clear"
@click="cartStore.clearCart"
>
Clear Cart
</button>


</div>



</div>



</div>


</div>


</template>




<style scoped>


*{
margin:0;
padding:0;
box-sizing:border-box;
}



.container{

min-height:100vh;

background:linear-gradient(
135deg,
#667eea,
#764ba2
);

display:flex;

justify-content:center;

padding:40px;

}



.card{

width:900px;

background:white;

border-radius:20px;

padding:35px;

box-shadow:0 15px 35px rgba(0,0,0,.2);

}



h1{

text-align:center;

margin-bottom:30px;

color:#333;

}




.summary{

display:flex;

gap:20px;

margin-bottom:30px;

}



.summary div{

flex:1;

background:#f1f5ff;

padding:20px;

border-radius:15px;

text-align:center;

}



.summary h3{

font-size:30px;

color:#4f46e5;

}





.content{

display:grid;

grid-template-columns:1fr 1fr;

gap:25px;

}




.section{

background:#f8fafc;

padding:20px;

border-radius:15px;

}




.product,
.cart-item{

display:flex;

justify-content:space-between;

align-items:center;

background:white;

padding:15px;

margin-top:15px;

border-radius:10px;

}



button{

border:none;

padding:10px 15px;

border-radius:8px;

background:#4f46e5;

color:white;

cursor:pointer;

}



button:hover{

opacity:.85;

}



.cart-item button{

background:#ef4444;

}



.clear{

margin-top:20px;

width:100%;

background:#111827;

}



.empty{

text-align:center;

padding:20px;

color:#777;

}


</style>