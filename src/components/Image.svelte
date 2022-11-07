<script>
    import { base } from '$app/paths'
    /**
	 * @type {string}
	 */
     export let src;
    /**
	 * @type {string}
	 */
     export let alt;

     export let width = "400px";

     let realSrc = src.includes('./') ? base + src.replace('./', '/') : src;
</script>

<div>
    <figure style="--image-width: {width}">
        <img src="{realSrc}" alt="{alt}" />
        <figcaption align="center">
            <!-- Come back and add state -->
            <b>{alt}</b>
        </figcaption>
    </figure>
</div>

<style>
    figure {
        text-align: center;
    }

    figcaption {
        text-align: center;
    }
    
    img {
        max-width: var(--image-width);
    }
</style>