<script setup>
import Instagram from "@/components/icons/Instagram.vue";
import Bluesky from "@/components/icons/Bluesky.vue";
import YouTube from "@/components/icons/YouTube.vue";
import Dropbox from "@/components/icons/Dropbox.vue";
import GitHub from "@/components/icons/GitHub.vue";
import Email from "@/components/icons/Email.vue";
</script>

<template>
  <div class="socials">
    <a href="https://bsky.app/profile/samuelhuston.com" target="_blank">
      <Bluesky />
    </a>
    <a href="https://www.instagram.com/samuelh_design/" target="_blank">
      <Instagram />
    </a>
    <a href="https://www.youtube.com/channel/UCWjVjKikC6sFaCvweMrPSOw" target="_blank">
      <YouTube />
    </a>
    <a href="https://github.com/ue-shuston" target="_blank">
      <GitHub />
    </a>
    <a href="https://www.dropbox.com/sh/llqm2b0zuzm50sy/AABJ6g8WcbK-cIahLb6jnVjRa?dl=0" target="_blank">
      <Dropbox />
    </a>
    <a href="mailto:design@samuel-huston.com" target="_blank">
      <Email />
    </a>
  </div>
  © {{ new Date().getFullYear() }} Samuel Huston Design
</template>
