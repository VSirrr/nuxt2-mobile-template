<template>
	<div class="animate-num">
		<div class="scroll">
			<div class="num">?</div>
			<div class="num" v-for="item in shuffle(array)" :key="item">
				{{ item }}
			</div>
			<div class="num">{{ value }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['value'],
	name: 'animate-num',
	data() {
		return {
			array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
		};
	},
	methods: {
		shuffle(array) {
			const length = array == null ? 0 : array.length;
			if (!length) {
				return [];
			}
			let index = -1;
			const lastIndex = length - 1;
			const result = array.slice();
			while (++index < length) {
				const rand =
					index + Math.floor(Math.random() * (lastIndex - index + 1));
				const value = result[rand];
				result[rand] = result[index];
				result[index] = value;
			}
			return result;
		},
	},
};
</script>

<style lang="scss" scoped>
$height: 33px;

.animate-num {
	display: inline-block;
	height: $height;
	overflow: hidden;

	@for $i from 1 through 6 {
		&:nth-of-type(#{$i}) {
			.scroll {
				animation-delay: $i * 100ms;
			}
		}
	}

	.scroll {
		animation: animate-num 1.4s ease-out forwards;
	}

	.num {
		height: $height;
	}

	@keyframes animate-num {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(calc(-100% + $height));
		}
	}
}
</style>
