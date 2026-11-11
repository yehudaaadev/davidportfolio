<script>
	import { base } from '$app/paths';

	const contacts = [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/d4.pittt_/',
			icon: `${base}/image/1.svg`,
			label: '@d4.pittt_'
		},
		{
			name: 'WhatsApp',
			url: 'https://wa.me/6289510766727',
			icon: `${base}/image/2.svg`,
			label: '+62 895-1076-6727'
		},
		{
			name: 'Email',
			url: 'mailto:david75bekasi@gmail.com',
			icon: `${base}/image/3.svg`,
			label: 'david75bekasi@gmail.com'
		}
	];
</script>

<svelte:head>
	<title>Contact - David Yehuda Surbakti</title>
</svelte:head>

<section class="contact-container">
	<h1 class="atas">Get in touch</h1>

	<div class="logonya">
		{#each contacts as item}
			<a
				href={item.url}
				class="pencet-aja"
				target="_blank"
				rel="noopener noreferrer"
				title={item.name}
			>
				<img src={item.icon} alt={item.name} class="svgnya" />
				<span class="channel-tooltip">{item.label}</span>
			</a>
		{/each}
	</div>

	<div class="kontak-direct">
		<a href="mailto:david75bekasi@gmail.com" class="direct-email">
			david75bekasi@gmail.com
		</a>
	</div>

	<div class="persona-chips">
		<span class="chip">Software Engineering Student @ SMK Bagimu Negeriku</span>
		<span class="chip">Fullstack Systems &amp; Web</span>
		<span class="chip">Based in Semarang, ID</span>
	</div>
</section>

<style>
	.contact-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px 24px;
		text-align: center;
		max-width: 960px;
		margin: 0 auto;
		width: 100%;
		min-height: 0;
	}

	.atas {
		font-size: clamp(42px, 6.8vw, 76px);
		font-weight: 800;
		color: var(--color-primary);
		margin-bottom: 38px;
		font-style: italic;
		font-family: var(--font-heading);
		letter-spacing: -1.5px;
		line-height: 1.1;
	}

	.logonya {
		display: flex;
		gap: 64px;
		margin-bottom: 38px;
		justify-content: center;
		align-items: center;
	}

	.pencet-aja {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		color: var(--color-primary);
		text-decoration: none;
		transition: transform var(--transition-fast), opacity var(--transition-fast);
	}

	.pencet-aja:hover {
		transform: translateY(-8px);
		opacity: 0.85;
	}

	.svgnya {
		width: 80px;
		height: 80px;
		filter: drop-shadow(0 6px 14px rgba(55, 70, 208, 0.15));
		transition: filter var(--transition-fast);
	}

	.pencet-aja:hover .svgnya {
		filter: drop-shadow(0 12px 24px rgba(55, 70, 208, 0.28));
	}

	.channel-tooltip {
		font-family: var(--font-tech);
		font-size: 13px;
		font-weight: 600;
		color: var(--color-primary);
		opacity: 0.85;
	}

	.kontak-direct {
		margin-bottom: 30px;
	}

	.direct-email {
		display: inline-block;
		font-family: var(--font-tech);
		font-size: clamp(16px, 1.8vw, 22px);
		font-weight: 700;
		color: var(--color-primary);
		text-decoration: none;
		padding: 10px 24px;
		background: var(--bg-surface);
		border: 1.5px solid var(--color-primary);
		border-radius: 50px;
		transition: all var(--transition-fast);
		box-shadow: 0 4px 14px rgba(55, 70, 208, 0.1);
	}

	.direct-email:hover {
		background-color: var(--color-primary);
		color: var(--bg-surface);
		transform: translateY(-3px);
		box-shadow: 0 8px 25px rgba(55, 70, 208, 0.25);
	}

	.persona-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		justify-content: center;
		max-width: 720px;
	}

	.chip {
		font-family: var(--font-tech);
		font-size: clamp(12px, 1vw, 13px);
		font-weight: 600;
		color: var(--color-primary);
		padding: 6px 16px;
		background-color: rgba(55, 70, 208, 0.06);
		border: 1px solid var(--color-border);
		border-radius: 30px;
	}

	@media (max-width: 600px) {
		.logonya {
			gap: 32px;
		}

		.svgnya {
			width: 60px;
			height: 60px;
		}

		.channel-tooltip {
			font-size: 11px;
		}
	}
</style>
