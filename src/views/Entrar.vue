<script setup>
import { reactive } from 'vue';
    defineProps(['validacao']);

    const cadastro = reactive({
        nome: '',
        email: '',
        senha: '',
        cpf: '',
        dataNascimento: '',
        telefone: '',
        rua: '',
        cep: '',
        cidade: '',
        estados: [
            { sigla: 'AC', nome: 'Acre' },
            { sigla: 'AL', nome: 'Alagoas' },
            { sigla: 'AP', nome: 'Amapá' },
            { sigla: 'AM', nome: 'Amazonas' },
            { sigla: 'BA', nome: 'Bahia' },
            { sigla: 'CE', nome: 'Ceará' },
            { sigla: 'DF', nome: 'Distrito Federal' },
            { sigla: 'ES', nome: 'Espírito Santo' },
            { sigla: 'GO', nome: 'Goiás' },
            { sigla: 'MA', nome: 'Maranhão' },
            { sigla: 'MT', nome: 'Mato Grosso' },
            { sigla: 'MS', nome: 'Mato Grosso do Sul' },
            { sigla: 'MG', nome: 'Minas Gerais' },
            { sigla: 'PA', nome: 'Pará' },
            { sigla: 'PB', nome: 'Paraíba' },
            { sigla: 'PR', nome: 'Paraná' },
            { sigla: 'PE', nome: 'Pernambuco' },
            { sigla: 'PI', nome: 'Piauí' },
            { sigla: 'RJ', nome: 'Rio de Janeiro' },
            { sigla: 'RN', nome: 'Rio Grande do Norte' },
            { sigla: 'RS', nome: 'Rio Grande do Sul' },
            { sigla: 'RO', nome: 'Rondônia' },
            { sigla: 'RR', nome: 'Roraima' },
            { sigla: 'SC', nome: 'Santa Catarina' },
            { sigla: 'SP', nome: 'São Paulo' },
            { sigla: 'SE', nome: 'Sergipe' },
            { sigla: 'TO', nome: 'Tocantins' }
        ]
    }); 
    
</script>

<template>
    <div class="padding">
      <h3>CADASTRO</h3>
    </div>
    <form class="cadastro">
        <div class="form-group">
          <input class="form-control" placeholder="Nome Completo" type="text" v-model="cadastro.nome" />
        </div>

        <div class="form-group">
          <input class="form-control" placeholder="CPF" type="text" v-model="cadastro.cpf" />
        </div>

        <div class="form-group">
          <input class="form-control" placeholder="Email" type="text" v-model="cadastro.email" />
        </div>

        <div class="form-group">
          <input class="form-control" placeholder="Data de Nascimento" type="text" v-model="cadastro.dataNascimento" />
        </div>

        <div class="form-group">
          <input class="form-control" placeholder="Senha" type="password" v-model="cadastro.senha" />
        </div>

        <div class="form-group">
          <select v-model="sexo">
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>

        <div class="form-group">
          <select name="estado" id="estado" v-model="cadastro.estado">
            <option v-for="estado in cadastro.estados" :key="estado.sigla" :value="estado.sigla"> {{ estado.nome }} </option>
          </select>
        </div>

        <div class="form-group">
          <input class="form-control" placeholder="Telefone" type="text" v-model="cadastro.telefone" />
        </div>


      <div>
        <button type="button" class="btn btn-primary" @click="$emit('envio', {...cadastro})"> Mostrar </button>
      </div>
    </form>

</template>

<style scoped>
.padding {
  padding: 2.3rem;
  background-color: var(--cor-blue);
  margin-top: 1rem
}
.cadastro{
  display: grid;
  justify-content: center;
  row-gap: 2rem;
  padding: 10rem 0;
  
}

.form-group {
  width: 50vw;
}

.form-group input, .form-group select {
  padding: 1rem;
  width: 100%;
  border: 1px solid var(--cor-black);
  border-radius: 15px;
}

</style>