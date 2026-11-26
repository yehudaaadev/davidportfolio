<script>
	import { onMount } from 'svelte';

	let { oncomplete } = $props();

	let progress = $state(0);
	let isExiting = $state(false);
	let isHidden = $state(false);

	onMount(() => {
		const steps = [
			{ target: 18, delay: 100 },
			{ target: 37, delay: 220 },
			{ target: 59, delay: 380 },
			{ target: 78, delay: 540 },
			{ target: 91, delay: 680 },
			{ target: 100, delay: 850 }
		];

		let timeouts = [];

		steps.forEach((step) => {
			const t = setTimeout(() => {
				progress = step.target;
				if (step.target === 100) {
					setTimeout(() => {
						isExiting = true;
						setTimeout(() => {
							isHidden = true;
							if (oncomplete) oncomplete();
						}, 900);
					}, 350);
				}
			}, step.delay);
			timeouts.push(t);
		});

		return () => {
			timeouts.forEach(clearTimeout);
		};
	});

	function skip() {
		progress = 100;
		isExiting = true;
		setTimeout(() => {
			isHidden = true;
			if (oncomplete) oncomplete();
		}, 400);
	}
</script>

{#if !isHidden}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="splash-overlay"
		class:exiting={isExiting}
		role="button"
		tabindex="0"
		aria-label="Skip splash screen"
		onclick={skip}
	>
		<div class="splash-curtain top" class:exiting={isExiting}></div>
		<div class="splash-curtain bottom" class:exiting={isExiting}></div>

		<div class="splash-inner" class:fade-out={isExiting}>
			<div class="center-content">
				<div class="title-wrap">
					<h2 class="creator-name">David Yehuda Surbakti</h2>
					<p class="creator-role">FULLSTACK DEVELOPER</p>
				</div>

				<div class="counter-wrap">
					<span class="counter-number">{String(progress).padStart(2, '0')}</span>
					<span class="counter-symbol">%</span>
				</div>

				<div class="progress-track" aria-hidden="true">
					<div class="progress-bar" style="width: {progress}%"></div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.splash-overlay {
		position: fixed;
		inset: 0;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		cursor: pointer;
		user-select: none;
		border: none;
		background: transparent;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
	}

	.splash-curtain {
		position: absolute;
		left: 0;
		right: 0;
		background: #1C246B;
		transition: transform 0.85s cubic-bezier(0.85, 0, 0.15, 1);
		z-index: 1;
	}

	.splash-curtain.top {
		top: 0;
		height: 50.5%;
		transform-origin: top;
	}

	.splash-curtain.bottom {
		bottom: 0;
		height: 50.5%;
		transform-origin: bottom;
	}

	.splash-curtain.top.exiting {
		transform: translateY(-100%);
	}

	.splash-curtain.bottom.exiting {
		transform: translateY(100%);
	}

	.splash-inner {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1100px;
		height: 100%;
		padding: 48px 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #F5F1EA;
		transition: opacity 0.4s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.splash-inner.fade-out {
		opacity: 0;
		transform: scale(0.96) translateY(-15px);
	}

	.center-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 24px;
	}

	.creator-name {
		font-family: var(--font-heading);
		font-size: clamp(32px, 5.5vw, 68px);
		font-weight: 800;
		letter-spacing: -1.5px;
		line-height: 1.1;
		color: #FFFFFF;
	}

	.creator-role {
		font-family: var(--font-tech);
		font-size: clamp(12px, 1.3vw, 16px);
		letter-spacing: 4px;
		color: #9AA8FF;
		margin-top: 8px;
	}

	.counter-wrap {
		display: flex;
		align-items: baseline;
		line-height: 0.9;
		margin-top: 10px;
	}

	.counter-number {
		font-family: var(--font-heading);
		font-size: clamp(64px, 11vw, 130px);
		font-weight: 800;
		letter-spacing: -3px;
		color: #FFFFFF;
		font-variant-numeric: tabular-nums;
	}

	.counter-symbol {
		font-family: var(--font-tech);
		font-size: clamp(24px, 3.5vw, 44px);
		font-weight: 600;
		color: #5362DE;
		margin-left: 6px;
	}

	.progress-track {
		width: 100%;
		max-width: 380px;
		height: 3px;
		background: rgba(245, 241, 234, 0.15);
		border-radius: 2px;
		overflow: hidden;
		margin-top: 8px;
	}

	.progress-bar {
		height: 100%;
		background: linear-gradient(90deg, #5362DE, #FFFFFF);
		transition: width 0.18s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@media (max-width: 600px) {
		.splash-inner {
			padding: 28px 20px;
		}
	}
</style>
