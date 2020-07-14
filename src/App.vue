<template>
	<v-app dark>

				<router-view></router-view>
		<v-footer app>
			<v-col
				class="text-center"
				cols="12"
			>
			{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
			</v-col>
		</v-footer>
	</v-app>

</template>

<script>


export default {
	name: 'App',
	data: () => ({
		drawer: false,		
		loading: false,
		loadingError: ""
	}),
	created(){
	},
	components: {
	},
	methods: {
		navigateTo(route) {
			this.$router.push({ path: route })
		},
		setLoadingState(data) {
			this.loading = data.isLoading;
			this.loadingError=JSON.stringify(data.error);
		}
	},
	
}
</script>

<style scope>
</style>
