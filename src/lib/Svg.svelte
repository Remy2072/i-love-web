<script>
	export let name = '';
</script>

{#if name == 'arrow'}
	<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M3.95834 9.5H15.0417"
			stroke="#1B9CB7"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M9.5 3.95898L15.0417 9.50065L9.5 15.0423"
			stroke="#1B9CB7"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
<!-- {:else if name == ''} -->
{/if}