<script>
    import { base } from '$app/paths'

    /**
	 * @type {string}
	 */
    export let src;
</script>

<div id="model">
    <model-viewer alt="Mesh of Appa" src="{base}/{src}" ar shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
</div>

<style>
    div#model {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    div#model > *{
        width: 450px;
        height: 450px;
    }
</style>
