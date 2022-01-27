<template>
	<div class="home">
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
		<input
			@keyup.enter="fnSubmit"
			v-model="cityName"
			type="text"
			placeholder="输入城市名或者地区号"
		/>
		<button @click="fnSubmit">查询</button>
		<div v-if="show">
			<p>
				当前搜索：{{ cityInfo.name }}， 当地天气状况：{{ weatherInfo.text }}，
				{{ weatherInfo.windDir }}，{{ weatherInfo.temp }}℃
			</p>
		</div>
	</div>
</template>

<script src="./index.ts" lang="ts"></script>
