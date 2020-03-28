<template>
  <div>
    <div class="alert alert-danger" v-show="errors.length > 0">
      <li v-for="error in errors" v-bind:key="error">{{error}}</li>
    </div>
    <div class="card add-student m-2 p-2">
      <h4 class="card-title">Add new student</h4>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          class="form-control"
          v-model="newStudentName"
          v-model.trim="newStudentName"
        />
      </div>
      <div class="form-group">
        <label for="starId">Star Id</label>
        <input id="starId" class="form-control" v-model="newstarId" v-model.trim="newstarId" />
      </div>
      <button class="btn btn-primary" v-on:click.prevent="addStudent">Add</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewStudentFrom",
  data: function() {
    return {
      errors: [],
      newStudentName: "",
      newstarId: ""
    };
  },
  methods: {
    addStudent: function() {
      this.errors = [];

      if (!this.newStudentName) {
        this.errors.push("Name is required");
      }
      if (!this.newstarId) {
        this.errors.push("startId is required");
      }

      if (this.errors.length === 0) {
        let student = {
          name: this.newStudentName,
          starId: this.newstarId,
          present: false
        };
        this.$emit("add-student", student);
        this.newStudentName = "";
        this.newstarId = "";
      }
    }
  }
};
</script>
<style scoped>
</style>