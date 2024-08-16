<script setup>

</script>

<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img class="icon" src="@/img/computador-portatil.png" alt="icon">
        <h1>Sr. Elvis</h1>
      </router-link>
    </div>

    

    <ul class="list">
      <li><router-link to="/manutencao">Manutenção</router-link></li>
      <li><router-link to="/equipamentos">Equipamentos</router-link></li>
      <li>Orçamentos</li>
      <li>Entrar</li>
      <li><img class="pessoa" src="@/img/perfil.png" alt="icone-cadastro"></li>
    </ul>
  </header>

  <main>
    <router-view />
  </main>

  

  <footer>
    <div>
      <p>Nossos serviços</p>
    </div>
    <div>
      <p>Nossa empresa</p>
    </div>
    <div>
      <p>Quem somos</p>
    </div>
    <div><img class="icones" src="@/img/instagram (1).png" alt="icone-instagram"></div>
    <div><img class="icones" src="@/img/twitter (1).png" alt="icone-x"></div>
    <div><img class="icones" src="@/img/telefone.png" alt="icone-whatsapp"></div>
  </footer>
 
</template>

<style scoped>
header {
  padding: 1rem;
  background-color: #FFFF0D;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.list {
  display: grid;
  column-gap: 1rem;
  grid-template-columns: auto auto auto auto auto;
  align-items: center;
}

.logo a {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  column-gap: .5rem;
}

.icon {
  width: 50px;
  height: 50px;
}

.pessoa {
  width: 35px;
  height: 35px;
}

/*.padding{
    padding: 10rem;
    background-color: #FFFF48;
    margin-top: 1%;
    display: grid;
    grid-template-areas: "item-1""item-3""item-2";
  }
    */


footer {
  padding: 6rem;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  color: #8003FD;
  margin-top: 4%;
}
.icones{
  
  height: 1.2rem;
}
</style>