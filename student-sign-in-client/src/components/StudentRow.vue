<template>
  <tr v-bind:class="'present-'+ !!student.present">
    <td>{{student.name}}</td>
    <td>{{student.starId}}</td>
    <td><input type="checkbox" v-model="student.present" v-on:change="checked(student)" /></td>
    <td v-show="edit"><span class="delete-icon" v-on:click="deleteStudent(student)">X</span></td>
  </tr>
</template>
<script>
export default {
  name: "StudentRow",
  props: {
    student: Object,
    edit: Boolean
  },
  methods: {
    checked: function(student) {
      this.$emit("checked", student);
    },
    deleteStudent: function (student){
      if(confirm(`Delete ${student.name}`)){
        this.$emit('delete-student', student)
      }
    }
  }
};
</script>
<style>
.present-true {
  color: grey;
  font-style: italic;
}
.present-false {
  font-weight: bold;
}
.delete-icon {
  cursor: pointer;
  border: 1px solid rgb(255, 54, 54);
  border-radius: 50%;
  padding: 2px 4px;
  color: rgb(255, 54, 54);
}

.delete-icon:hover {
  border: 1px solid darkred;
  color: darkred;
}

.delete-icon:active {
  border: 1px solid rgb(255, 0, 0);
  color: rgb(255, 0, 0);
}

</style>