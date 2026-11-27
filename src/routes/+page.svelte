<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>David Yehuda Surbakti - Fullstack Developer</title>
	<meta name="description" content="Portfolio of David Yehuda Surbakti. Laravel, MySQL and Tailwind fullstack developer building apps for schools." />
	<meta property="og:title" content="David Yehuda Surbakti - Fullstack Developer" />
	<meta property="og:description" content="Fullstack developer specialized in Laravel, MySQL and Tailwind. View projects and get in touch." />
	<meta property="og:image" content="https://yehudaaadev.github.io/davidportfolio/image/profile.jpeg" />
	<meta property="og:url" content="https://yehudaaadev.github.io/davidportfolio/" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section class="perkenalan">
	<p class="atas">Hi my name is</p>
	<h1 class="tengah">David Yehuda Surbakti</h1>
	<p class="bawah1">I'm a <span class="lingkaran">Fullstack</span> Developer</p>
	<p class="pitch">I build Laravel web apps and open‑source tools.</p>
	<div class="cta-group">
		<a href="{base}/portfolio" class="btn btn-outline">View Projects</a>
		<span class="btn btn-outline" aria-disabled="true" title="CV coming soon">CV Coming Soon</span>
	</div>
</section>

<style>
	.perkenalan {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 40px 24px;
		width: 100%;
	}

	.atas {
		font-size: clamp(24px, 4vw, 44px);
		font-weight: 400;
		color: var(--color-primary);
		margin-bottom: 8px;
		letter-spacing: -0.5px;
	}

	.tengah {
		font-size: clamp(38px, 7.5vw, 76px);
		font-weight: 700;
		color: var(--color-primary);
		margin-bottom: 24px;
		line-height: 1.15;
		letter-spacing: -1.5px;
		font-family: var(--font-heading);
	}

	.bawah1 {
		font-size: clamp(22px, 4vw, 44px);
		font-weight: 400;
		color: var(--color-primary);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 12px;
	}

	.lingkaran {
		display: inline-block;
		padding: 6px 24px;
		border: 2px solid var(--color-primary);
		border-radius: 50px;
		font-weight: 600;
		font-family: var(--font-tech);
		transition: background-color var(--transition-fast), color var(--transition-fast);
	}

	.lingkaran:hover {
		background-color: var(--color-primary);
		color: var(--bg-surface);
	}

	@media (max-width: 480px) {
		.lingkaran {
			padding: 4px 18px;
		}
	}

	.pitch {
		margin-top: 18px;
		font-size: clamp(17px, 1.8vw, 18px);
		color: var(--color-text-dark);
		font-weight: 400;
		line-height: 1.5;
	}

	.cta-group {
		margin-top: 22px;
		display: flex;
		gap: 12px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 8px 20px;
		border-radius: 50px;
		font-family: var(--font-tech);
		font-weight: 600;
		font-size: 14px;
		letter-spacing: 0.3px;
		text-decoration: none;
		transition: all var(--transition-fast);
	}

	.btn-outline {
		border: 2px solid var(--color-primary);
		color: var(--color-primary);
	}

	.btn-outline:hover {
		background-color: var(--color-primary);
		color: var(--bg-surface);
	}
</style>
