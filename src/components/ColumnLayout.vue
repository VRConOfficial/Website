<template>
	<v-container>
		<v-row align="center" justify="center" no-gutters>
			<v-col cols="11" sm="11" md="11" lg="10" xl="7">
				<slot></slot>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>

</style>

<script>
export default {
	name: "ColumnLayout",
	components: {},
	props: [],
	data: () => ({}),
	methods: {},
};
</script>