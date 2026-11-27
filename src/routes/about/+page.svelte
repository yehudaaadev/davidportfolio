<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>About - David Yehuda Surbakti</title>
	<meta name="description" content="Learn about David Yehuda Surbakti, a Fullstack Developer who graduated from SMK Bagimu Negeriku in 2025." />
	<meta property="og:title" content="About - David Yehuda Surbakti" />
	<meta property="og:description" content="Fullstack Developer graduated in 2025, building digital solutions for the school community." />
	<meta property="og:image" content="https://yehudaaadev.github.io/davidportfolio/image/profile.jpeg" />
	<meta property="og:url" content="https://yehudaaadev.github.io/davidportfolio/about" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section class="about-container">
	<div class="about-content">
		<div class="about-text-col">
			<h1 class="about-title">About <span>Me</span></h1>
			<p class="teks-perkenalan">I'm a Fullstack Developer who graduated from SMK Bagimu Negeriku in 2025. I started my coding journey in 2025 and enjoy building all kinds of things, from websites and tools to applications and other creative digital solutions.</p>
			<p class="teks-perkenalan">I developed Bagimu Extra and E-Voting for SMK Bagimu Negeriku. Both projects are used by the entire school community, including students, teachers, and school staff.</p>
			<p class="teks-perkenalan">I'm passionate about exploring new technologies, turning ideas into reality, and creating useful digital solutions. My career goal is to grow into a skilled Fullstack Developer who can build impactful, reliable, and innovative applications.</p>
			<h2 class="skills-title">Skills</h2>
			<div class="skill-tags">
				<span class="tag">Fullstack Developer</span>
			</div>
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
	.skills-title {
		margin-top: 24px;
		font-size: clamp(20px, 2vw, 24px);
		color: var(--color-primary);
		font-family: var(--font-heading);
	}

	.skill-tags {
		margin-top: 12px;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.tag {
		padding: 6px 14px;
		background-color: rgba(55, 70, 208, 0.08);
		color: var(--color-primary);
		border-radius: 20px;
		border: 1px solid var(--color-border);
		font-family: var(--font-tech);
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 0.3px;
		transition: transform var(--transition-fast), border-color var(--transition-fast);
	}

	.tag:hover {
		transform: translateY(-2px);
		border-color: var(--color-primary);
	}

	.teks-perkenalan {
		color: #111;
		font-size: clamp(17px, 1.2vw, 18px);
		line-height: 1.75;
		letter-spacing: -0.15px;
	}

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

	.about-image-col {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.foto-card {
		width: clamp(210px, 22vw, 290px);
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		overflow: hidden;
		background-color: var(--bg-surface);
		border: 3.5px solid var(--color-primary);
		box-shadow: 0 16px 40px rgba(55, 70, 208, 0.22);
		transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
	}

	.foto-card:hover {
		transform: scale(1.03);
		box-shadow: 0 22px 50px rgba(55, 70, 208, 0.32);
	}

	.foto-asli {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 42%;
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
			width: 190px;
		}
	}
</style>
