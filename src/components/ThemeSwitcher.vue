<script setup>

import { useThemeStore } from "../stores/themeStore";


const theme = useThemeStore();


</script>


<template>

<div 
class="container"
:class="{dark: theme.darkMode}"
>


<div class="card">


<h1>
{{ theme.darkMode ? "🌙 Dark Mode" : "☀️ Light Mode" }}
</h1>


<p>
Current Theme:
<strong>
{{ theme.darkMode ? "Dark" : "Light" }}
</strong>
</p>



<button @click="theme.toggleTheme">

{{ theme.darkMode 
? "Switch to Light Mode" 
: "Switch to Dark Mode" }}

</button>



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

display:flex;

justify-content:center;

align-items:center;

background:#f1f5f9;

transition:.4s;

}



.container.dark{

background:#111827;

}




.card{

width:400px;

padding:40px;

border-radius:20px;

text-align:center;

background:white;

box-shadow:0 15px 35px rgba(0,0,0,.2);

transition:.4s;

}



.dark .card{

background:#1f2937;

color:white;

}




h1{

margin-bottom:20px;

font-size:30px;

}



p{

font-size:18px;

margin-bottom:30px;

}



button{

padding:14px 25px;

border:none;

border-radius:12px;

background:#4f46e5;

color:white;

font-size:16px;

cursor:pointer;

transition:.3s;

}



button:hover{

transform:translateY(-3px);

background:#3730a3;

}



</style>