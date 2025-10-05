<template>
  <div>
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup  lang="ts">
import microApp from '@micro-zoe/micro-app'

microApp.start()
</script>
