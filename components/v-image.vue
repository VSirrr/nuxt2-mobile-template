<template>
	<img v-if="isError" :src="defSrc" draggable="false" @error="onDefError" />
	<picture v-else v-on="$listeners">
		<source :srcset="wpSrc" type="image/webp" />
		<img :src="src" draggable="false" @error="onError" />
	</picture>
</template>

<script>
export default {
	name: 'v-image',
	props: {
		src: {
			type: String,
			default: '',
		},
		wpSrc: {
			type: String,
			default: '',
		},
		errorImg: {
			type: String,
			default: 'https://static1.bitautoimg.com/yc-common/imgs/loading.png',
		},
	},
	data() {
		return {
			isError: false,
			defError: false,
		};
	},
	computed: {
		defSrc() {
			return this.defError ? this.errorImg : this.src || this.errorImg;
		},
	},
	methods: {
		onError(error) {
			this.isError = true;
			this.$emit('error', error);
		},
		onDefError(error) {
			this.defError = true;
			this.$emit('error', error);
		},
	},
};
</script>

<style lang="scss" scoped>
img {
	width: 100%;
	height: auto;
	max-height: 100%;
	user-select: none;
	vertical-align: top;
}

picture {
	display: inline-block;
	height: auto;
}
</style>
