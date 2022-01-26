<template>
	<div class="home">
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
		<input
			@keyup.enter="fnSubmit"
			v-model="cityName"
			type="text"
			placeholder="请选择城市"
		/>
		<button @click="fnSubmit">查询</button>
		<div v-if="show">
			<p>
				当前搜索城市：{{ cityInfo.name }}， 当地天气状况：{{
					weatherInfo.text
				}}， {{ weatherInfo.windDir }}，{{ weatherInfo.temp }}℃
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { createNamespacedHelpers } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

const { mapActions, mapState } = createNamespacedHelpers("demo");

export default defineComponent({
	components: {
		HelloWorld,
	},

	computed: {
		...mapState(["cityInfo", "weatherInfo", "show"]),
	},

	setup() {
		const cityName = ref<string | number>("");

		return {
			cityName,
		};
	},

	methods: {
		...mapActions(["getCityInfo", "getWeatherReport"]),

		fnSubmit() {
			this.getCityInfo(this.cityName).then(() => {
				this.getWeatherReport();
			});
		},
	},
});
</script>
