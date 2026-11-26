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
			<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g transform="translate(8 8) scale(4)" fill="currentColor">
					<path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					/>
				</g>
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
