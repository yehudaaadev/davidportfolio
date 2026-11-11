<footer class="bawah">
	<p class="kata-kata">don't be shy</p>
</footer>

<style>
	.bawah {
		background-color: var(--bg-footer);
		padding: 24px 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: auto;
		border-top: 1px solid rgba(55, 70, 208, 0.08);
		flex-shrink: 0;
		width: 100%;
	}

	.kata-kata {
		font-size: clamp(26px, 3.5vw, 36px);
		font-weight: 800;
		color: var(--color-primary);
		font-family: var(--font-heading);
		font-style: italic;
		letter-spacing: -0.5px;
	}

	@media (max-width: 768px) {
		.bawah {
			padding: 26px 24px;
		}
	}
</style>
