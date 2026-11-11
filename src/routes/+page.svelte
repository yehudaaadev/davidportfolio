<svelte:head>
	<title>David Yehuda Surbakti - Fullstack Developer</title>
</svelte:head>

<section class="perkenalan">
	<p class="atas">Hi my name is</p>
	<h1 class="tengah">David Yehuda Surbakti</h1>
	<p class="bawah1">I'm a <span class="lingkaran">Fullstack</span> Developer</p>
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
</style>
