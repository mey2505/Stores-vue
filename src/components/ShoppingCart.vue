<script setup>

import { useCartStore } from '../stores/cartStore'


const cartStore = useCartStore()


</script>


<template>

<div>

<h1>Shopping Cart</h1>


<h2>Products</h2>


<div 
v-for="product in cartStore.products"
:key="product.id"
>


<p>
{{ product.name }} 
- ${{ product.price }}
</p>


<button 
@click="cartStore.addToCart(product)"
>
Add To Cart
</button>


</div>



<hr>


<h2>Your Cart</h2>


<div 
v-if="cartStore.cart.length === 0"
>
Cart is empty
</div>



<ul>

<li
v-for="item in cartStore.cart"
:key="item.id"
>

{{ item.name }}
- ${{ item.price }}


<button
@click="cartStore.removeFromCart(item.id)"
>
Remove
</button>


</li>


</ul>



<button
@click="cartStore.clearCart"
>
Clear Cart
</button>



<h3>
Total Items:
{{ cartStore.totalItems }}
</h3>


<h3>
Total Price:
${{ cartStore.totalPrice }}
</h3>


</div>


</template>