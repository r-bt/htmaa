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

     
     let realSrc = src.includes('./') ? base + src.replace('./', '/') : src;
</script>

<figure>
    <img src="{realSrc}" alt="{alt}" />
    <figcaption align="center">
        <!-- Come back and add state -->
        <b>{alt}</b>
    </figcaption>
</figure>

<style>
    figure {
        text-align: center;
    }

    figcaption {
        text-align: center;
    }
    
    img {
        max-width: 400px;
    }
</style>