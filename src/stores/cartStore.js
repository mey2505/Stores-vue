import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {

  state: () => ({
    
    products: [
      {
        id: 1,
        name: "Laptop",
        price: 800
      },
      {
        id: 2,
        name: "Phone",
        price: 500
      },
      {
        id: 3,
        name: "Headphone",
        price: 100
      },
    ],


    cart: []

  }),


  getters: {

    totalItems: (state) => {
      return state.cart.length;
    },


    totalPrice: (state) => {

      return state.cart.reduce(
        (total, item) => total + item.price,
        0
      );

    }

  },


  actions: {


    addToCart(product){

      this.cart.push(product);

    },


    removeFromCart(id){

      this.cart = this.cart.filter(
        item => item.id !== id
      );

    },


    clearCart(){

      this.cart = [];

    }


  }


});