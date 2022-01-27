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
		const cityName = ref < string | number > ("");

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
