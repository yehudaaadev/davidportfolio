<script>
	import { base } from '$app/paths';
	import { projects } from '$lib/data/projects.js';

	let activeProject = $state(null);

	function openLightbox(project) {
		activeProject = project;
	}

	function closeLightbox() {
		activeProject = null;
	}

	function nextProject() {
		if (!activeProject) return;
		const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
		const nextIndex = (currentIndex + 1) % projects.length;
		activeProject = projects[nextIndex];
	}

	function prevProject() {
		if (!activeProject) return;
		const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
		const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
		activeProject = projects[prevIndex];
	}

	function handleKeydown(e) {
		if (!activeProject) return;
		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowRight') nextProject();
		if (e.key === 'ArrowLeft') prevProject();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
	<title>Portfolio - David Yehuda Surbakti</title>
	<meta name="description" content="Portfolio projects: Bagimu Extra and E‑Voting platform." />
	<meta property="og:title" content="Portfolio - David Yehuda Surbakti" />
	<meta property="og:description" content="Projects built with Laravel, MySQL and Tailwind." />
	<meta property="og:image" content="https://yehudaaadev.github.io/davidportfolio/image/profile.jpeg" />
	<meta property="og:url" content="https://yehudaaadev.github.io/davidportfolio/portfolio" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section class="portfolio-container">
	<div class="header-wrap">
		<h1 class="page-title">My Projects</h1>
		<p class="page-subtitle">A collection of my work and real-world web applications</p>
	</div>

	<div class="projects-grid">
		{#each projects as project}
			<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
			<article
				class="project-card"
				role="button"
				tabindex="0"
				aria-label="View project {project.title}"
				onclick={() => openLightbox(project)}
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						openLightbox(project);
					}
				}}
			>
				<div class="project-image">
					<img src="{base}/{project.image}" alt="{project.imageAlt}" />
					<div class="project-overlay">
						<button class="overlay-btn" type="button">View Details</button>
					</div>
				</div>

				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="project-url-bar"
					onclick={(e) => e.stopPropagation()}
					onkeydown={(e) => e.stopPropagation()}
				>
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="project-external-url"
					>
						<span>{project.url}</span>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<line x1="7" y1="17" x2="17" y2="7"></line>
							<polyline points="7 7 17 7 17 17"></polyline>
						</svg>
					</a>
				</div>

				<div class="project-info">
					<div class="project-number">{project.number}</div>
					<h2 class="project-title">{project.title}</h2>
					<p class="project-description">{project.description}</p>
					<p class="project-meta">My role: {project.role} · {project.impact}</p>
					<div class="project-tags">
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

{#if activeProject}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="lightbox"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		onclick={closeLightbox}
	>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="lightbox-content" onclick={(e) => e.stopPropagation()}>
			<button class="lightbox-close" onclick={closeLightbox} aria-label="Close dialog">&times;</button>
			<button class="lightbox-nav lightbox-prev" onclick={prevProject} aria-label="Previous project">&#8592;</button>
			<button class="lightbox-nav lightbox-next" onclick={nextProject} aria-label="Next project">&#8594;</button>

			<div class="lightbox-image">
				<img src="{base}/{activeProject.image}" alt="{activeProject.imageAlt}" />
			</div>
			<div class="lightbox-info">
				<h2 class="lightbox-title">{activeProject.title}</h2>
				<p class="project-meta">My role: {activeProject.role} · {activeProject.impact}</p>
				<div class="lightbox-url">
					<a href={activeProject.url} target="_blank" rel="noopener noreferrer">
						<span>{activeProject.url}</span>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<line x1="7" y1="17" x2="17" y2="7"></line>
							<polyline points="7 7 17 7 17 17"></polyline>
						</svg>
					</a>
				</div>
				<p class="lightbox-description">{activeProject.description}</p>
				<div class="lightbox-tags">
					{#each activeProject.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.portfolio-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 10px 48px;
		width: 100%;
		min-height: 0;
	}

	.header-wrap {
		text-align: center;
		margin-bottom: 20px;
	}

	.page-title {
		font-size: clamp(26px, 3.2vw, 40px);
		font-weight: 800;
		color: var(--color-primary);
		margin-bottom: 6px;
		letter-spacing: -0.8px;
		font-family: var(--font-heading);
	}

	.page-subtitle {
		font-size: clamp(13px, 1.1vw, 15px);
		color: var(--color-text-muted);
		font-weight: 400;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 28px;
	}

	.project-card {
		background-color: var(--bg-surface);
		border-radius: 14px;
		overflow: hidden;
		transition: transform var(--transition-base), box-shadow var(--transition-base);
		cursor: pointer;
		position: relative;
		border: 1px solid rgba(55, 70, 208, 0.1);
		display: flex;
		flex-direction: column;
		text-align: left;
	}

	.project-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 20px 40px rgba(55, 70, 208, 0.12);
		border-color: var(--color-border-hover);
	}

	.project-image {
		width: 100%;
		height: clamp(140px, 17vh, 185px);
		overflow: hidden;
		background-color: #E8E4DC;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		transition: transform 0.4s ease;
	}

	.project-card:hover .project-image img {
		transform: scale(1.03);
	}

	.project-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(55, 70, 208, 0.9), rgba(55, 70, 208, 0.7));
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity var(--transition-fast);
	}

	.project-card:hover .project-overlay {
		opacity: 1;
	}

	.overlay-btn {
		padding: 9px 24px;
		background: var(--bg-surface);
		color: var(--color-primary);
		border: none;
		border-radius: 30px;
		font-family: var(--font-tech);
		font-weight: 700;
		font-size: 13px;
		letter-spacing: 0.5px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
	}

	.project-url-bar {
		padding: 10px 22px 0;
		background-color: var(--bg-surface);
	}

	.project-external-url {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: var(--font-tech);
		font-size: 11.5px;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
		padding: 4px 10px;
		background-color: var(--bg-primary);
		border-radius: 6px;
		border: 1px solid var(--color-border);
		transition: all var(--transition-fast);
	}

	.project-external-url:hover {
		background-color: var(--color-primary);
		color: var(--bg-surface);
		border-color: var(--color-primary);
	}

	.project-info {
		padding: 12px 22px 18px;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.project-number {
		font-family: var(--font-tech);
		font-size: 11px;
		font-weight: 700;
		color: var(--color-text-muted);
		letter-spacing: 1.5px;
		margin-bottom: 4px;
	}

	.project-title {
		font-size: clamp(16px, 1.3vw, 19px);
		font-weight: 700;
		color: var(--color-primary);
		margin-bottom: 6px;
		font-family: var(--font-heading);
	}

	.project-description {
		font-size: 13px;
		line-height: 1.5;
		color: var(--color-primary);
		opacity: 0.85;
		margin-bottom: 12px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.project-meta {
		font-size: clamp(13px, 1.1vw, 15px);
		line-height: 1.5;
		color: var(--color-text-dark);
		margin-bottom: 8px;
		font-weight: 500;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: auto;
	}

	.tag {
		padding: 3px 10px;
		font-family: var(--font-tech);
		font-size: 11px;
		font-weight: 600;
		background-color: rgba(55, 70, 208, 0.08);
		color: var(--color-primary);
		border-radius: 20px;
		border: 1px solid var(--color-border);
	}

	/* Lightbox */
	.lightbox {
		position: fixed;
		inset: 0;
		background: rgba(38, 51, 158, 0.92);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 20px;
		backdrop-filter: blur(8px);
	}

	.lightbox-content {
		max-width: 860px;
		width: 100%;
		background: var(--bg-surface);
		border-radius: 20px;
		overflow: hidden;
		position: relative;
		box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
		animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@keyframes modalPop {
		from {
			opacity: 0;
			transform: scale(0.95) translateY(20px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	.lightbox-close {
		position: absolute;
		top: 18px;
		right: 18px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		font-size: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 10;
		transition: background var(--transition-fast);
	}

	.lightbox-close:hover {
		background: rgba(0, 0, 0, 0.8);
	}

	.lightbox-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.9);
		border: 1px solid var(--color-border);
		color: var(--color-primary);
		font-size: 20px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
		transition: all var(--transition-fast);
	}

	.lightbox-prev {
		left: 18px;
	}

	.lightbox-next {
		right: 18px;
	}

	.lightbox-nav:hover {
		background: var(--color-primary);
		color: white;
	}

	.lightbox-image {
		width: 100%;
		height: 340px;
		overflow: hidden;
		background: #E8E4DC;
	}

	.lightbox-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}

	.lightbox-info {
		padding: 24px 32px 30px;
	}

	.lightbox-title {
		font-size: 22px;
		font-weight: 700;
		color: var(--color-primary);
		margin-bottom: 8px;
		font-family: var(--font-heading);
	}

	.lightbox-url {
		margin-bottom: 12px;
	}

	.lightbox-url a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: var(--font-tech);
		font-size: 13px;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
		padding: 5px 12px;
		background-color: var(--bg-primary);
		border-radius: 6px;
		border: 1px solid var(--color-border);
	}

	.lightbox-description {
		font-size: 14.5px;
		line-height: 1.65;
		color: #242E7B;
		margin-bottom: 16px;
	}

	.lightbox-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	@media (max-width: 900px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}

		.portfolio-container {
			padding: 20px 24px;
		}

		.lightbox-nav {
			display: none;
		}
	}
</style>
