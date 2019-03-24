<template>
    <div class="global-settings">
        <h1>{{title}}</h1>
        <form class="app-form">
            <fieldset>
                <div class="form-group row">
                    <label for="visite_frequency" class="col-sm-2 col-form-label">Fréquence de visite globale :</label>
                    <div class="col-sm-10">
                        <input id="visite_frequency" type="number" class="form-control" v-model="visite_frequency" min="1" max="364">
                    </div>
                </div>
                <div class="form-group">
                    <label for="environnements_list">Example select</label>
                    <v-select id="environnements_list" v-model="environnements" :options="environnements" :value="environnements" taggable push-tags multiple></v-select>
                </div>
                <button class="btn btn-primary" v-on:click="submitSettings">Submit</button>
            </fieldset>

            <fieldset>
                <div class="form-group">
                    <label for="exampleInputFile">File input</label>
                    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" @change="importDatas($event)">
                </div>
            </fieldset>

            <fieldset>
                <div class="form-group">
                    <button v-on:click="exportDataToJson"></button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'GlobalSettings',
  data () {
    return {
      title: 'Configuration de l\'application',
      environnements: ['tous types', 'acacia', 'lavande'],
      visite_frequency: 10
    }
  },
  methods: {
    submitSettings: function () {
      console.log(this.environnements)
      var data = {
        global: {
          environnements: this.environnements,
          visite_frequency: this.visite_frequency
        }
      }
      localStorage.setItem('appiculture_datas', data)
      this.saveDataToLocalStorage()
    },
    importDatas: function (event) {

    },
    exportDataToJson: function () {
      console.log(this)
    }
  },
  components: {
    vSelect
  }
}
</script>

<style scoped>

</style>
