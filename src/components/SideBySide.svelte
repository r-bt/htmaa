<div>
    <slot />
</div>

<style>
    div {
        display: flex;
        width: 100%;
    }

    div > :global(*) {
        flex: 50%;
    }

    div :global(img) {
        width: 100%;
    }
</style>