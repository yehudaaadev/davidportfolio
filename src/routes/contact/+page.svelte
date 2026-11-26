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

		<a
			href="https://github.com/yehudaaadev"
			target="_blank"
			rel="noopener noreferrer"
			class="pencet-aja"
			aria-label="GitHub"
			title="GitHub @yehudaaadev"
		>
			<svg width="80" height="80" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z"
					fill="currentColor"
					stroke="none"
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
