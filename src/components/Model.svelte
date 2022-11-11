<script>
    import { base } from '$app/paths'

    /**
	 * @type {string}
	 */
    export let src;
    export let orbit = 'auto';
    export let alt = '';
</script>

<div id="model">
    <model-viewer alt={alt} camera-orbit={orbit} src="{base}/{src}" ar shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
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
