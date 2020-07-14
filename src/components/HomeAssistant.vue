<template>
    <div class="iframe-container">
        <iframe src="http://10.0.0.6:8123" title="W3Schools Free Online Web Tutorials"></iframe>
    </div>
</template>

<script>
  export default {
    name: 'HomeAssistant',

  }
</script>


<style scope>
	.iframe-container {
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;
        border: 1px solid black;
    }
    .iframe-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>