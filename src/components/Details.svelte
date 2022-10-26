<script>
    /**
	 * @type {string}
	 */
     export let title;
</script>

<section>
    <h2>{title}</h2>
    <slot></slot>
</section>

<style>
    /* summary {
        font-size: 1.2rem;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    summary:hover {
       text-decoration: underline;
    } */
</style>