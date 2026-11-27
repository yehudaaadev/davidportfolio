<script>
	const skillGroups = [
		{
			title: 'Focus',
			skills: [{ name: 'Fullstack Developer' }]
		},
		{
			title: 'Frontend',
			skills: [
				{ name: 'JavaScript', icon: 'javascript' },
				{ name: 'TypeScript', icon: 'typescript' },
				{ name: 'React', icon: 'react' },
				{ name: 'Next.js', icon: 'nextdotjs' },
				{ name: 'SvelteKit', icon: 'svelte', iconAlt: 'Svelte logo' },
				{ name: 'Svelte', icon: 'svelte' },
				{ name: 'Tailwind CSS', icon: 'tailwindcss' },
				{ name: 'Three.js', icon: 'threedotjs' }
			]
		},
		{
			title: 'Backend',
			skills: [
				{ name: 'PHP', icon: 'php' },
				{ name: 'Laravel', icon: 'laravel' },
				{ name: 'Node.js', icon: 'nodedotjs' },
				{ name: 'Go', icon: 'go' },
				{ name: 'Python', icon: 'python' },
				{ name: 'FastAPI', icon: 'fastapi' },
				{ name: 'Flask', icon: 'flask' },
				{ name: 'Elixir', icon: 'elixir' },
				{ name: 'Firebase Functions', icon: 'firebase', iconAlt: 'Firebase logo' }
			]
		},
		{
			title: 'Mobile',
			skills: [
				{ name: 'Dart', icon: 'dart' },
				{ name: 'Flutter', icon: 'flutter' },
				{ name: 'Kotlin', icon: 'kotlin' },
				{ name: 'Jetpack Compose', icon: 'jetpackcompose' },
				{ name: 'Firebase', icon: 'firebase' }
			]
		},
		{
			title: 'Database',
			skills: [
				{ name: 'MySQL', icon: 'mysql' },
				{ name: 'PostgreSQL', icon: 'postgresql' },
				{ name: 'SQLite', icon: 'sqlite' },
				{ name: 'Firestore', icon: 'firebase', iconAlt: 'Firebase logo' }
			]
		},
		{
			title: 'Desktop & Systems',
			skills: [
				{ name: 'Rust', icon: 'rust' },
				{ name: 'Tauri', icon: 'tauri' },
				{ name: 'C#', icon: 'dotnet', iconAlt: '.NET logo' },
				{ name: 'WinForms', icon: 'dotnet', iconAlt: '.NET logo' },
				{ name: 'C / C++', icon: 'cplusplus' },
				{ name: 'Zig', icon: 'zig' },
				{ name: 'Godot', icon: 'godotengine', iconAlt: 'Godot logo' },
				{ name: 'GDScript', icon: 'godotengine', iconAlt: 'Godot logo' },
				{ name: 'Luau', icon: 'roblox', iconAlt: 'Roblox logo' }
			]
		},
		{
			title: 'Tools',
			skills: [
				{ name: 'Vite', icon: 'vite' },
				{ name: 'Vitest', icon: 'vitest' },
				{ name: 'Laravel Mix', icon: 'laravel' },
				{ name: 'Gradle', icon: 'gradle' },
				{ name: 'CMake', icon: 'cmake' },
				{ name: 'PowerShell', icon: 'shell', iconAlt: 'Shell logo' },
				{ name: 'Docker', icon: 'docker' }
			]
		}
	];
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
	<h1 class="skills-title">Skills</h1>
	<p class="skills-intro">Frameworks and languages I use across web, mobile, desktop, and systems projects.</p>

	{#each skillGroups as group}
		<div class="skill-group">
			<h2>{group.title}</h2>
			<div class="skill-pills">
				{#each group.skills as skill}
					<span class="pill">
						{#if skill.icon}
							<img
								src="https://cdn.simpleicons.org/{skill.icon}/3746D0"
								alt={skill.iconAlt || `${skill.name} logo`}
								class="pill-icon"
								width="16"
								height="16"
								loading="lazy"
							/>
						{/if}
						<span>{skill.name}</span>
					</span>
				{/each}
			</div>
		</div>
	{/each}
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
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 8px 16px;
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

	.pill-icon {
		display: block;
		width: 16px;
		height: 16px;
		object-fit: contain;
		flex-shrink: 0;
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
			padding: 6px 12px;
			gap: 6px;
		}

		.pill-icon {
			width: 14px;
			height: 14px;
		}
	}
</style>
