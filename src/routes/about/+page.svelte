<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>About - David Yehuda Surbakti</title>
</svelte:head>

<section class="about-container">
	<div class="about-content">
		<div class="about-text-col">
			<h1 class="about-title">About <span>Me</span></h1>
			<p class="teks-perkenalan">
				I am a Fullstack Developer focused on building high-performance web applications, reliable
				system tools, and thoughtful digital experiences. With a strong foundation in modern
				frameworks and backend architecture, I transform complex ideas into intuitive, scalable, and
				production-ready software.
			</p>
			<p class="teks-perkenalan" style="margin-top: 14px;">
				Currently based in Semarang, Indonesia. I specialize in full-stack architecture, clean code
				practices, and responsive design systems that emphasize typography, accessibility, and speed.
			</p>
		</div>

		<div class="about-image-col">
			<div class="foto-card">
				<img
					src="{base}/image/profile.jpeg"
					alt="David Yehuda Surbakti - Fullstack Developer"
					class="foto-asli"
					loading="eager"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.about-container {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 20px 48px;
		min-height: 0;
	}

	.about-content {
		display: grid;
		grid-template-columns: 1.3fr 0.7fr;
		gap: 56px;
		align-items: center;
		width: 100%;
	}

	.about-text-col {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.about-title {
		font-size: clamp(28px, 3.2vw, 42px);
		font-weight: 800;
		color: var(--color-primary);
		margin-bottom: 20px;
		line-height: 1.18;
		letter-spacing: -0.8px;
		font-family: var(--font-heading);
	}

	.about-title span {
		font-weight: 400;
		opacity: 0.9;
	}

	.teks-perkenalan {
		color: var(--color-primary);
		font-size: clamp(15px, 1.2vw, 17px);
		line-height: 1.75;
		letter-spacing: -0.15px;
	}

	.about-image-col {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.foto-card {
		width: clamp(230px, 22vw, 310px);
		aspect-ratio: 3 / 4;
		border-radius: 18px;
		overflow: hidden;
		background-color: var(--bg-surface);
		border: 1px solid var(--color-border);
		box-shadow: 0 20px 45px rgba(55, 70, 208, 0.12);
		transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color var(--transition-fast);
	}

	.foto-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 25px 55px rgba(55, 70, 208, 0.22);
		border-color: var(--color-primary);
	}

	.foto-asli {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 55%;
		display: block;
	}

	@media (max-width: 860px) {
		.about-content {
			grid-template-columns: 1fr;
			gap: 36px;
			text-align: center;
			padding: 20px 0;
		}

		.about-image-col {
			order: -1;
		}

		.foto-card {
			width: 200px;
		}
	}
</style>
