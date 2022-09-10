<script ></script>

<template>
	<div class="wrapper">
		<div id="description">秋冬特惠 任選 168 起</div>
		<div class="img-wrapper">
			<router-link to="/products"><img src="@/assets/artem-beliaikin-49mCO5ZRQDk-unsplash.jpg"
				alt=""/></router-link>

		</div>
	</div>
	<!-- https://unsplash.com/photos/_KaMTEmJnxY -->
	<!-- https://unsplash.com/photos/49mCO5ZRQDk -->
</template>

<style>
.wrapper {
	display: flex;
	flex-direction: column;
	flex: 1;
	margin: 2rem;
	height: 100%;
}
#description {
	width: 100%;
	font-size: 32px;
	padding: 1rem;
}
.img-wrapper {
	flex: 1;
	width: 100%;
}
img {
	border-radius: 20px;
}
</style>