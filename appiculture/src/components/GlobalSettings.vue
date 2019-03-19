<template>
    <div class="global-settings">
        <h1>{{title}}</h1>
        <form>
            <label for="global_frequency">Fréquence globale des visites</label>
            <input type="number" id="global_frequency" name="global_frequency"/>
        </form>
    </div>
</template>

<script>
export default {
  name: 'GlobalSettings',
  data () {
    return {
      title: 'Configuration de l\'application'
    }
  }
}
</script>

<style scoped>

</style>
