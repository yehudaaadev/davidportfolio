<footer class="bawah">
	<div class="footer-inner">
		<p class="kata-kata">don't be shy</p>
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
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
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
	}

	@media (max-width: 560px) {
		.footer-inner {
			flex-direction: column;
			text-align: center;
			gap: 12px;
		}
	}
</style>
