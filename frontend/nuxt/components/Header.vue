<template>
	<v-container class='container-header'>
		<v-row cols='12'>
			<v-col cols='4'>
				<v-img class='logo-picture' :src="logo" ></v-img>
			</v-col>
			<v-col cols='8'>
				<a class="link" href="https://www.ria.com/uk/" target="_blank">
				    RIA.com 
			    </a>
			    <a class="link" href="https://auto.ria.com/uk/auto-for-zsu/?utm_source=main_page&utm_medium=header&utm_campaign=autoforzsu&r_audience=web&r_source=main_page&r_medium=header&r_campaign=autoforzsu" target="_blank">
			        <v-img  class='picture-flag' :src="pictureFlag" ></v-img>
			        Збір на авто для ЗСУ
			    </a>
			</v-col>
		</v-row>
	</v-container>
</template>
<script setup>
	import logo from '~/assets/logo.png'
	import pictureFlag from '~/assets/ukraineFlag.png'
</script>
<style >
	.link{
		text-decoration: none;
		display: contents;
		color: #414042;
		transition: text-decoration 0.3s;
		
	}
	.link:hover {
		/* text-decoration: underline; */
 		color: #db5c4c;
		border-top-color: #db5c4c;
	}
	.logo-picture,.picture-flag{
		max-width: 38px;
		max-height: 38px;
	}
	.picture-flag{
		margin: 10px;
	}
	.container-header{
		min-width: 100%;
		height: 60px;
		background: #F0F2FA;
	}
	.v-col,.v-row,.container-header{
		padding: 0;
		margin: 0;
		justify-content: center;
	}
	.v-col,.container-header{
		display: flex;
		align-items: center;
	}
	.v-row{
		max-width: 960px;
		height: 100%;
	}
</style>