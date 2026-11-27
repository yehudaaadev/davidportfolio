<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Skills - David Yehuda Surbakti</title>
	<meta name="description" content="Frameworks and languages used by David Yehuda Surbakti across web, mobile, desktop, and systems projects." />
	<meta property="og:title" content="Skills - David Yehuda Surbakti" />
	<meta property="og:description" content="Web, mobile, desktop, and systems stack: Laravel, React, SvelteKit, Flutter, Rust, Go, Python, and more." />
	<meta property="og:image" content="https://yehudaaadev.github.io/davidportfolio/image/profile.jpeg" />
	<meta property="og:url" content="https://yehudaaadev.github.io/davidportfolio/skills" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section class="skills-container">
	<img src="{base}/favicon.svg" alt="DYS logo" class="skills-logo" />
	<h1 class="skills-title">Skills</h1>
	<p class="skills-intro">Frameworks and languages I use across web, mobile, desktop, and systems projects.</p>

	<div class="skill-group">
		<h2>Focus</h2>
		<div class="skill-pills">
			<span class="pill">Fullstack Developer</span>
		</div>
	</div>

	<div class="skill-group">
		<h2>Frontend</h2>
		<div class="skill-pills">
			<span class="pill">JavaScript</span>
			<span class="pill">TypeScript</span>
			<span class="pill">React</span>
			<span class="pill">Next.js</span>
			<span class="pill">SvelteKit</span>
			<span class="pill">Svelte</span>
			<span class="pill">Tailwind CSS</span>
			<span class="pill">Three.js</span>
		</div>
	</div>

	<div class="skill-group">
		<h2>Backend</h2>
		<div class="skill-pills">
			<span class="pill">PHP</span>
			<span class="pill">Laravel</span>
			<span class="pill">Node.js</span>
			<span class="pill">Go</span>
			<span class="pill">Python</span>
			<span class="pill">FastAPI</span>
			<span class="pill">Flask</span>
			<span class="pill">Elixir</span>
			<span class="pill">Firebase Functions</span>
		</div>
	</div>

	<div class="skill-group">
		<h2>Mobile</h2>
		<div class="skill-pills">
			<span class="pill">Dart</span>
			<span class="pill">Flutter</span>
			<span class="pill">Kotlin</span>
			<span class="pill">Jetpack Compose</span>
			<span class="pill">Firebase</span>
		</div>
	</div>

	<div class="skill-group">
		<h2>Database</h2>
		<div class="skill-pills">
			<span class="pill">MySQL</span>
			<span class="pill">PostgreSQL</span>
			<span class="pill">SQLite</span>
			<span class="pill">Firestore</span>
		</div>
	</div>

	<div class="skill-group">
		<h2>Desktop &amp; Systems</h2>
		<div class="skill-pills">
			<span class="pill">Rust</span>
			<span class="pill">Tauri</span>
			<span class="pill">C#</span>
			<span class="pill">WinForms</span>
			<span class="pill">C / C++</span>
			<span class="pill">Zig</span>
			<span class="pill">Godot</span>
			<span class="pill">GDScript</span>
			<span class="pill">Luau</span>
		</div>
	</div>

	<div class="skill-group">
		<h2>Tools</h2>
		<div class="skill-pills">
			<span class="pill">Vite</span>
			<span class="pill">Vitest</span>
			<span class="pill">Laravel Mix</span>
			<span class="pill">Gradle</span>
			<span class="pill">CMake</span>
			<span class="pill">PowerShell</span>
			<span class="pill">Docker</span>
		</div>
	</div>
</section>

<style>
	.skills-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		padding: 40px 24px 64px;
	}

	.skills-logo {
		width: clamp(48px, 6vw, 72px);
		height: clamp(48px, 6vw, 72px);
		margin-bottom: 20px;
	}

	.skills-title {
		font-size: clamp(36px, 5vw, 64px);
		font-weight: 800;
		color: var(--color-primary);
		font-family: var(--font-heading);
		letter-spacing: -1.5px;
		line-height: 1.15;
		text-align: center;
		margin-bottom: 18px;
	}

	.skills-intro {
		font-size: clamp(17px, 1.4vw, 18px);
		line-height: 1.7;
		color: var(--color-text-dark);
		text-align: center;
		max-width: 640px;
		margin-bottom: 36px;
	}

	.skill-group {
		width: 100%;
		margin-bottom: 28px;
	}

	.skill-group h2 {
		font-size: clamp(18px, 2vw, 22px);
		font-weight: 700;
		color: var(--color-primary);
		font-family: var(--font-heading);
		margin-bottom: 12px;
	}

	.skill-pills {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.pill {
		padding: 8px 18px;
		background-color: var(--bg-surface);
		color: var(--color-primary);
		border: 1.5px solid var(--color-border);
		border-radius: 30px;
		font-family: var(--font-tech);
		font-size: 13px;
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
			padding: 32px 20px 56px;
		}

		.skill-group {
			margin-bottom: 22px;
		}

		.pill {
			font-size: 12px;
			padding: 6px 14px;
		}
	}
</style>
