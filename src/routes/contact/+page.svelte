<svelte:head>
	<title>Contact - David Yehuda Surbakti</title>
</svelte:head>

<section class="contact-container">
	<h1 class="atas">Get in touch</h1>

	<div class="logonya">
		<a
			href="https://www.instagram.com/d4.pittt_/"
			class="pencet-aja"
			target="_blank"
			rel="noopener noreferrer"
			title="Instagram @d4.pittt_"
			aria-label="Instagram"
		>
			<svg class="svgnya" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
				<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
				<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
			</svg>
			<span class="channel-tooltip">@d4.pittt_</span>
		</a>

		<a
			href="https://wa.me/6289510766727"
			class="pencet-aja"
			target="_blank"
			rel="noopener noreferrer"
			title="WhatsApp +62 895-1076-6727"
			aria-label="WhatsApp"
		>
			<svg class="svgnya" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M16 3C8.82 3 3 8.82 3 16c0 2.48.7 4.8 1.92 6.78L3.5 28.5l5.92-1.38A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"></path>
				<path d="M12.5 10.5c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1 0 1.8 1.3 3.6 1.5 3.9.2.2 2.6 4.1 6.4 5.6 3.1 1.3 3.8 1 4.5.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5s-2.4-1.2-2.8-1.3c-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.5.3-.9.1s-1.7-.6-3.2-2c-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.7-.7-1-.7h-.8z" fill="currentColor" stroke="none"></path>
			</svg>
			<span class="channel-tooltip">+62 895-1076-6727</span>
		</a>

		<a
			href="mailto:david75bekasi@gmail.com"
			class="pencet-aja"
			title="Email david75bekasi@gmail.com"
			aria-label="Email"
		>
			<svg class="svgnya" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="2" y="4" width="20" height="16" rx="3"></rect>
				<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
			</svg>
			<span class="channel-tooltip">david75bekasi@gmail.com</span>
		</a>
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
		gap: 14px;
		color: var(--color-primary);
		text-decoration: none;
		transition: transform var(--transition-fast), opacity var(--transition-fast);
	}

	.pencet-aja:hover {
		transform: translateY(-8px);
		opacity: 0.85;
	}

	.svgnya {
		width: 68px;
		height: 68px;
		color: var(--color-primary);
		filter: drop-shadow(0 6px 14px rgba(55, 70, 208, 0.15));
		transition: filter var(--transition-fast), transform var(--transition-fast);
	}

	.pencet-aja:hover .svgnya {
		filter: drop-shadow(0 12px 24px rgba(55, 70, 208, 0.28));
		transform: scale(1.05);
	}

	.channel-tooltip {
		font-family: var(--font-tech);
		font-size: 13.5px;
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
			width: 52px;
			height: 52px;
		}

		.channel-tooltip {
			font-size: 11px;
		}
	}
</style>
