<svelte:head>
	<title>Skills - David Yehuda Surbakti</title>
	<meta name="description" content="Skills of David Yehuda Surbakti, a Fullstack Developer building websites, tools, and applications." />
	<meta property="og:title" content="Skills - David Yehuda Surbakti" />
	<meta property="og:description" content="Fullstack Developer building websites, tools, and applications." />
	<meta property="og:image" content="https://yehudaaadev.github.io/davidportfolio/image/profile.jpeg" />
	<meta property="og:url" content="https://yehudaaadev.github.io/davidportfolio/skills" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section class="skills-container">
	<h1 class="skills-title">Skills</h1>
	<p class="skills-intro">I build websites, tools, applications, and other creative digital solutions.</p>
	<div class="skill-pills">
		<span class="pill">Fullstack Developer</span>
	</div>
</section>

<style>
	.skills-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
		max-width: 960px;
		margin: 0 auto;
		padding: 40px 24px;
	}

	.skills-title {
		font-size: clamp(36px, 5vw, 64px);
		font-weight: 800;
		color: var(--color-primary);
		font-family: var(--font-heading);
		letter-spacing: -1.5px;
		line-height: 1.15;
		margin-bottom: 18px;
	}

	.skills-intro {
		font-size: clamp(17px, 1.4vw, 18px);
		line-height: 1.7;
		color: var(--color-text-dark);
		max-width: 640px;
		margin-bottom: 28px;
	}

	.skill-pills {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 12px;
	}

	.pill {
		padding: 8px 18px;
		background-color: var(--bg-surface);
		color: var(--color-primary);
		border: 1.5px solid var(--color-border);
		border-radius: 30px;
		font-family: var(--font-tech);
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 0.3px;
		box-shadow: 0 2px 8px rgba(55, 70, 208, 0.04);
		transition: transform var(--transition-fast), border-color var(--transition-fast);
	}

	.pill:hover {
		transform: translateY(-2px);
		border-color: var(--color-primary);
	}

	@media (max-width: 480px) {
		.skills-container {
			padding: 32px 20px;
		}

		.pill {
			font-size: 13px;
			padding: 6px 14px;
		}
	}
</style>
