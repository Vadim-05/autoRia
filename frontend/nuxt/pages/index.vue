<template>
  <v-container class="container-search">
    <v-row class="search-grid">     
      <v-col cols="12">
        <v-text-field
          class="input-data"
          v-model="myData"
          :rules="numericRules" 
          label="Введіть ID автомобіля"
          outlined
        >
          <template #label>
            <div class="custom-label">Введіть ID автомобіля</div>
          </template>
        </v-text-field>
      </v-col>
          <NuxtLink class="search-img" :to="`/checkingCar/${nuxtLinkData}`"><img @click="clickSearch" alt="search" src="~/assets/Search button.png" /></NuxtLink>
     </v-row>
  </v-container>
</template>

<script>
    export default {
      data() {
        return {
          myData: '',
          nuxtLinkData: '',
        };        
      },
      computed: {
        numericRules() {
          return [
            (v) => !!v || "Це поле обов'язкове",
            (v) => /^\d+$/.test(v) || "Можна ввести лише числа",
          ];
        },
      },
      methods: {
        clickSearch(){
          this.nuxtLinkData=this.myData;
          console.log(this.myData);
          this.myData = '';
        }
      },
    };

</script>

<style>
    .input-data input {
      font-size: 18px;
    }
    .custom-label{
      border-radius: 10px;
      background: #F0F2FA;
    }
    .input-data{
      width: 650px;
      background: none;
      margin: 0 40px 0 40px;
    }
    .container-search{
        max-width: 960px;
        height: calc(100vh - 160px);
        overflow: auto;
        padding: 16px;
        margin: auto;
    }
    .search-field{
        width: 916px;
        height: 58px;
        background: #F0F2FA;
        border-radius: 8px;
    }
    .search-img{
        width: 40px;
    }
    .search-grid {
      display: grid;
      grid-template-columns: auto 1fr; 
      align-items: center;
      column-gap: 10px; 
    }

    @media screen and (max-width: 768px) {
      .container-search {
        max-width: 560px; 
      }
      .search-field{
        width: 480px;
      }
    }
    @media screen and (max-width: 480px) {
      .container-search {
        max-width: 350px; 
      }
      .search-field{
        width: 260px;
      }
    }

</style>

