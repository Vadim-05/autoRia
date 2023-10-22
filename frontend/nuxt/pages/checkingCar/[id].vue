<template>
  <v-container>
    <v-row class='rows' cols='12'>
      <v-col class='title-col'>Перевіряємо оголошення</v-col>
      <v-row>
      <v-col  xs="9" md="5">
    <v-img class='picture-car' :src='dataCar.Фотографія'></v-img>
  </v-col>
  <v-col xs="9" md="7">
    <div class="description-car">{{dataCar.Опис}}</div>
  </v-col>
  </v-row>
</v-row>
  </v-container>
  <v-row class="row-table">
      <v-col cols="12">
        <v-col>
          <v-data-table
            v-model:page="page"
            :headers="headers"
            :items="formatDataCar"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
          >
          </v-data-table>
        </v-col>
      </v-col>
    </v-row>
</template>
<script lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";   
  import axios from 'axios'
  export default {
    components: {
        VDataTable,
      },  
      data() {
          return {
              formatDataCar: [],
              dataCar:[],
              page: 1,
              itemsPerPage: 9,
              headers: [
                { title: 'Параметри', key: 'title'},
                { title: 'Дані з реєстрів', key: 'tiktle'},
                { title: "Інфо від продавця", key: 'body'},
              ],
          };
        },
    computed: {
      totalPages() {
        return Math.ceil(this.formatDataCar.length / this.itemsPerPage);
      }
    },
    mounted() {
      this.apiCar()
   },
    methods:{
     async apiCar(){
         await axios.get(`http://localhost:3000/get/${this.$route.params.id}`)
        .then((response) => {
          console.log(response.data);
          this.dataCar= response.data.dataFromApi;
          // this.formatDataCar = Object.entries(response.data.dataFromApi, response.data.dataTransformedFromModel).map((x,y)=> {return {title:x[0], body: x[1],tiktle: y[1] }}); 

          this.formatDataCar = Object.keys(response.data.dataFromApi).map(key => ({
  title: key,
  body: response.data.dataFromApi[key],
  tiktle: response.data.dataTransformedFromModel[key]
}));
          
          // this.dataTransformedFromModel = Object.entries(response.data.dataFromApi).map(x=> {return {title:x[0], body: x[1] }});
        })
        .catch((error) => {
          console.error(error);
        });
      }
    }
  }
</script>
<style>
  .description-car{
    padding: 30px;
  }
  .v-container{
    padding: 0;
  }
  .v-table > .v-table__wrapper > table{
    margin: 0 auto;
  }
  .v-data-table-footer{
    display: none;
    margin: 0 auto;
  }
  .picture-car{
    width: 300px;
  }
  .v-col.title-col{
    font-size: 26px;
    padding: 15px 0 20px 0;
  }
  .v-data-table__tr:nth-child(odd) {
    background: #F0F2FA;
  }
  .v-data-table{
    padding: 30px 0 60px 0;
  }
   @media screen and (max-width: 768px){
      .v-col.title-col{
        font-size: 17px;
      }
      .description-car{
        padding: 10px;
        font-size: 16px;
      }
      .v-col{
          font-size: 13px;
      }
      .v-row{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
      .rows{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
   }
</style>