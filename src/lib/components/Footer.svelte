<footer class="bawah">
	<div class="footer-inner">
		<p class="kata-kata">don't be shy</p>
		<nav class="footer-links" aria-label="Quick links">
			<a href="mailto:davidyehudaaa@gmail.com" class="footer-link">Email</a>
			<a href="https://github.com/yehudaaadev" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
		</nav>
		<p class="copyright">&copy; {new Date().getFullYear()} David Yehuda Surbakti</p>
	</div>
</footer>

<style>
	.bawah {
		background-color: var(--bg-footer);
		padding: 24px 40px;
		margin-top: auto;
		border-top: 1px solid rgba(55, 70, 208, 0.08);
		flex-shrink: 0;
		width: 100%;
	}

	.footer-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		text-align: center;
		max-width: 960px;
		margin: 0 auto;
	}

	.kata-kata {
		font-size: clamp(26px, 3.5vw, 36px);
		font-weight: 800;
		color: var(--color-primary);
		font-family: var(--font-heading);
		font-style: italic;
		letter-spacing: -0.5px;
		margin: 0;
	}

	.footer-links {
		display: flex;
		gap: 24px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.footer-link {
		color: var(--color-primary);
		font-family: var(--font-tech);
		font-weight: 600;
		font-size: 14px;
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: border-color var(--transition-fast);
	}

	.footer-link:hover {
		border-color: var(--color-primary);
	}

	.copyright {
		font-size: 13px;
		color: var(--color-primary);
		opacity: 0.6;
		margin: 0;
		font-family: var(--font-tech);
	}

	@media (max-width: 768px) {
		.bawah {
			padding: 26px 24px;
		}
		.footer-links {
			gap: 16px;
		}
	}
</style>
