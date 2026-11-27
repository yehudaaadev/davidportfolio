<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const links = [
		{ name: 'Home', href: `${base}/` },
		{ name: 'About', href: `${base}/about` },
		{ name: 'Skills', href: `${base}/skills` },
		{ name: 'Portfolio', href: `${base}/portfolio` },
		{ name: 'Contact', href: `${base}/contact` }
	];

	function isActive(href) {
		const current = $page.url.pathname;
		if (href === `${base}/` || href === `${base}`) {
			return current === `${base}/` || current === `${base}`;
		}
		return current.startsWith(href);
	}
</script>

<header>
	<nav class="navbar">
		<a href="{base}/" class="brand-monogram" aria-label="David Yehuda Surbakti Home">
			<span class="brand-text">DYS</span><span class="brand-dot">.</span>
		</a>
		<ul class="nav-links">
			{#each links as link}
				<li>
					<a href={link.href} class:active={isActive(link.href)}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 28px 64px;
		background-color: var(--bg-primary);
		position: sticky;
		top: 0;
		z-index: 50;
		backdrop-filter: blur(8px);
		flex-shrink: 0;
		width: 100%;
	}

	.brand-monogram {
		text-decoration: none;
		font-family: var(--font-tech);
		font-size: clamp(20px, 1.6vw, 25px);
		font-weight: 700;
		color: var(--color-primary);
		letter-spacing: -0.5px;
		display: inline-flex;
		align-items: baseline;
		transition: transform var(--transition-fast), opacity var(--transition-fast);
	}

	.brand-monogram:hover {
		transform: translateY(-1px);
		opacity: 0.85;
	}

	.brand-dot {
		color: var(--color-primary-dark);
		font-weight: 800;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 48px;
	}

	.nav-links a {
		text-decoration: none;
		color: var(--color-primary);
		font-size: clamp(18px, 1.25vw, 21px);
		font-weight: 600;
		padding: 6px 0;
		position: relative;
		letter-spacing: -0.2px;
		transition: color var(--transition-fast);
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2.5px;
		background-color: var(--color-primary);
		transition: width var(--transition-base);
	}

	.nav-links a:hover::after,
	.nav-links a.active::after {
		width: 100%;
	}

	.nav-links a.active {
		font-weight: 700;
	}

	@media (max-width: 768px) {
		.navbar {
			padding: 20px 28px;
			justify-content: space-between;
		}

		.nav-links {
			gap: 24px;
		}

		.nav-links a {
			font-size: 16.5px;
		}
	}

	@media (max-width: 480px) {
		.navbar {
			padding: 16px 20px;
		}

		.brand-monogram {
			font-size: 19px;
		}

		.nav-links {
			gap: 10px;
			flex-wrap: wrap;
			justify-content: flex-end;
			row-gap: 6px;
		}

		.nav-links a {
			font-size: 13px;
		}
	}
</style>
