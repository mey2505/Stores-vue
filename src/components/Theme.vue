<script setup>

import { useThemeStore } from '../stores/themeStore'


const themeStore = useThemeStore()


</script>


<template>

<div 
:class="{ dark: themeStore.darkMode }"
class="container"
>


<h1>
Theme Switcher
</h1>


<button @click="themeStore.toggleTheme">

{{ themeStore.darkMode 
? 'Switch to Light Mode' 
: 'Switch to Dark Mode' }}

</button>


<p>
Current Mode:
{{ themeStore.darkMode ? 'Dark' : 'Light' }}
</p>


</div>

</template>


<style scoped>

.container{

  min-height: 200px;
  padding: 30px;
  background: white;
  color: black;

}


.dark{

  background: #222;
  color: white;

}


button{

  padding: 10px 20px;
  cursor: pointer;

}

</style>