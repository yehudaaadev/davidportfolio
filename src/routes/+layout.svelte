<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SplashScreen from '$lib/components/SplashScreen.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();
	let splashDone = $state(false);

	onMount(() => {
		const visited = sessionStorage.getItem('visited_session');
		if (visited) {
			splashDone = true;
		}
	});

	function handleSplashComplete() {
		splashDone = true;
		try {
			sessionStorage.setItem('visited_session', 'true');
		} catch (e) {
			// ignore storage errors
		}
	}
</script>

<svelte:head>
	<meta name="author" content="David Yehuda Surbakti" />
	<meta name="theme-color" content="#3746D0" />
</svelte:head>

{#if !splashDone}
	<SplashScreen oncomplete={handleSplashComplete} />
{/if}

<div class="site-wrapper" class:visible={splashDone}>
	<Navbar />
	<main class="main-content">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.site-wrapper {
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		background-color: var(--bg-primary);
		opacity: 0;
		transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.site-wrapper.visible {
		opacity: 1;
	}

	.main-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 0;
	}
</style>
