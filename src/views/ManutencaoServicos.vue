<script setup>
import { reactive } from 'vue';

const manutencao = reactive({
    nomeProduto: '',
    valor: '',
    dataEntrada: '',
    dataSaida: '',
    relatorioProduto: ''
});
    
</script>

<template>
   <div class="padding">
      <h3>MANUTENÇÃO</h3>
    </div>

    <form class="manutencao">
        <div class="form-group">
            <input class="form-control" placeholder="Nome do produto" type="text" v-model="manutencao.nomeProduto" />
        </div>
        
        <div class="form-group">
            <input class="form-control" placeholder="Valor do produto" type="number" v-model="manutencao.valor" />
        </div>
        
        <div class="form-group">
            <input class="form-control" placeholder="Data de início" type="text-number" v-model="manutencao.dataEntrada" />
        </div>
        
        <div class="form-group">
            <input class="form-control" placeholder="Data estimada de entrega" type="text-number" v-model="manutencao.dataSaida" />
        </div>
        
      <div>
        <div>
        <textarea
          class="relatorio"
          name="relatorio" placeholder="Relate seu problema aqui"
          id="relatorio"
          cols="30"
          rows="10"
          v-model="manutencao.relatorioProduto"
        ></textarea>
        </div>
      <div class="div-button">
        <button type="button" class="btn btn-primary button" @click="$emit('envio', {...manutencao})"> Enviar </button>
       </div>
      </div>
    </form>
</template>

<style scoped>
.padding {
    padding: 2.3rem;
    background-color: var(--cor-blue);
    margin-top: 1rem
}

.manutencao{
  display: grid;
  justify-content: center;
  row-gap: 2rem;
  padding: 10rem 0;
  
}

.form-group {
  width: 50vw;
}

.relatorio{
    padding: 1rem;
    width: 100%;
    border: 1px solid var(--cor-black);
    border-radius: 15px;
}



.form-group input, .form-group select {
  padding: 1rem;
  width: 100%;
  border: 1px solid var(--cor-black);
  border-radius: 15px;
}
.div-button {
  display: grid;
  justify-content: center;
}

.button {
  padding: 1rem;
  border: 1px solid var(--cor-black);
  background-color: white;
  color: black;
}


</style>