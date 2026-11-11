<svelte:head>
	<title>Contact - David Yehuda Surbakti</title>
</svelte:head>

<section class="contact-container">
	<h1 class="atas">let's connect</h1>

	<div class="logonya">
		<a
			href="https://instagram.com/d4.pittt_"
			target="_blank"
			rel="noopener noreferrer"
			class="pencet-aja"
			aria-label="Instagram"
			title="Instagram @d4.pittt_"
		>
			<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="10" y="10" width="60" height="60" rx="18" stroke="currentColor" stroke-width="5" />
				<circle cx="40" cy="40" r="14" stroke="currentColor" stroke-width="5" />
				<circle cx="58" cy="22" r="4" fill="currentColor" />
			</svg>
		</a>

		<a
			href="https://wa.me/6289510766727"
			target="_blank"
			rel="noopener noreferrer"
			class="pencet-aja"
			aria-label="WhatsApp"
			title="WhatsApp +62 895-1076-6727"
		>
			<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M40 10C23.43 10 10 23.43 10 40c0 5.28 1.42 10.24 3.9 14.5L10 70l16-3.84A29.87 29.87 0 0040 70c16.57 0 30-13.43 30-30S56.57 10 40 10z"
					stroke="currentColor"
					stroke-width="5"
					stroke-linejoin="round"
				/>
				<path
					d="M30 28s-2 0-2 2c0 2 1 8 8 14s12 8 14 8c2 0 2-2 2-2l2-6-8-4-2 2s-4-2-8-8l2-2-4-8-4 4z"
					fill="currentColor"
				/>
			</svg>
		</a>

		<a
			href="mailto:david75bekasi@gmail.com"
			class="pencet-aja"
			aria-label="Email"
			title="david75bekasi@gmail.com"
		>
			<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="10" y="20" width="60" height="40" rx="6" stroke="currentColor" stroke-width="5" />
				<path
					d="M10 26l30 22 30-22"
					stroke="currentColor"
					stroke-width="5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
	</div>

	<section class="persona-section" aria-label="Personal Details">
		<div class="persona-chips">
			<span class="chip">Fullstack Developer</span>
			<span class="chip">UI/UX Designer</span>
			<span class="chip">Software Engineering Student</span>
			<span class="chip">Problem Solving &amp; AI Tools</span>
			<span class="chip">Competitive Gaming</span>
		</div>
		<p class="location-text">Based in <strong>Semarang, Indonesia</strong></p>
	</section>
</section>

<style>
	.contact-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px 24px;
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
		margin-bottom: 42px;
		justify-content: center;
		align-items: center;
	}

	.pencet-aja {
		display: block;
		color: var(--color-primary);
		text-decoration: none;
		transition: transform var(--transition-fast), opacity var(--transition-fast);
	}

	.pencet-aja:hover {
		transform: translateY(-8px);
		opacity: 0.75;
	}

	.pencet-aja :global(svg) {
		display: block;
		color: inherit;
		stroke: currentColor;
		width: 80px;
		height: 80px;
		transition: transform var(--transition-fast);
	}

	.pencet-aja:hover :global(svg) {
		transform: scale(1.08);
	}

	.persona-section {
		max-width: 820px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 18px;
	}

	.persona-chips {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
	}

	.chip {
		padding: 8px 18px;
		background-color: var(--bg-surface);
		color: var(--color-primary);
		border: 1.5px solid var(--color-border);
		border-radius: 30px;
		font-size: 14px;
		font-weight: 600;
		font-family: var(--font-tech);
		letter-spacing: 0.3px;
		box-shadow: 0 2px 8px rgba(55, 70, 208, 0.04);
		transition: transform var(--transition-fast), border-color var(--transition-fast);
	}

	.chip:hover {
		transform: translateY(-2px);
		border-color: var(--color-primary);
	}

	.location-text {
		font-size: 15px;
		color: var(--color-primary);
		opacity: 0.9;
		letter-spacing: 0.3px;
	}

	@media (max-width: 768px) {
		.contact-container {
			padding: 40px 20px 50px;
		}

		.logonya {
			gap: 36px;
		}

		.pencet-aja :global(svg) {
			width: 60px;
			height: 60px;
		}

		.atas {
			margin-bottom: 28px;
		}

		.chip {
			font-size: 13px;
			padding: 6px 14px;
		}
	}
</style>
