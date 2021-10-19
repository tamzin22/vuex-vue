<template>
  <div class="home">
     <h2>Videos</h2>
     <div class="video-container">
        <div v-for="video in videos" :key="video.name">
          <div class="video-box">
               {{video.name}}
               {{video.description}}
          </div>    
        </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      videos:[
        {
          name: 'squad',
          description : 'something chbhjckhcb hchuhjbchbc ivi hhufuiufruii'
        },
        {
          name: 'mortey',
          description : 'mortey chbhjckhcb hchuhjbchbc ivi hhufuiufruii'
        },
        {
          name: 'blacklist',
          description : 'blacklist chbhjckhcb hchuhjbchbc ivi hhufuiufruii'
        },
        {
          name: 'power',
          description : 'power chbhjckhcb hchuhjbchbc ivi hhufuiufruii'
        },
        {
          name: 'family guy',
          description : 'family guy chbhjckhcb hchuhjbchbc ivi hhufuiufruii'
        },
        {
          name: 'family guy',
          description : 'family guy chbhjckhcb hchuhjbchbc ivi hhufuiufruii'
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">

  .video-container{
    .video-box{
       border: 1px solid black;
    }
  }
</style>
