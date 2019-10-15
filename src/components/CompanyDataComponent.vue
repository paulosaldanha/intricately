<template>
<div>
    <p>Lorem ipsum...</p>
    <form @submit.prevent="addCompany">
      <div class="row">
            <label>Company Name:</label>
            <input type="text" class="form-control" v-model="company.name" placeholder="e.g Your Company Name">
        </div>
        <div class="row">
              <label>Company Spend:</label>
              <input type="text" class="form-control" v-model="company.spend" placeholder="e.g $ 150.000">
        </div>
        <div class="row">
              <label>Company Spend Ability:</label>
              <input type="text" class="form-control" v-model="company.spend_ability" placeholder="e.g $150.000-330.000">
        </div>
        <div class="row">
              <label>Notes:</label>
              <textarea class="form-control" v-model="company.notes" placeholder="e.g Good Tech Company"></textarea>
        </div>
    </form>
  </div>
</template>

<script>
export default {
        data(){
        return {
          company:{}
        }
    },
    methods: {
      addCompany(){
       
      }
    }
  }
</script>
