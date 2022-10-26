<script>
    /**
	 * @type {string}
	 */
     export let title;

     import Avatar from "/src/components/Avatar.svelte";
</script>

<Avatar />

<div class="content">
    <h1>{ title }</h1>
    <div class="text-body">
        <slot></slot>
    </div>
</div>

<style>
    div.content {
        margin: 0 auto;
        width: max(55%, 450px);
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 0 1rem;
        font-size: 1.1rem;
        
    }

    div.text-body {
        line-height: 1.5;
        width: 100%;
    }

    div.content :global(video) {
        width: 100%;
    }
</style>

