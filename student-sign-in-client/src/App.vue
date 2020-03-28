<template>
  <div id="app">
    <NewStudentFrom v-on:add-student="addStudent"></NewStudentFrom>
    <StudentTable
      v-bind:students="students"
      v-on:checked="checked"
      v-on:delete-student="deleteStudent"
    ></StudentTable>
    <StudentMessage
      v-bind:see-message="seeMessage"
      v-bind:message="message"
      v-bind:most-recent-sign-in="mostRecentSignIn"
    ></StudentMessage>
  </div>
</template>

<script>
import NewStudentFrom from "./components/NewStudentFrom.vue";
import StudentMessage from "./components/StudentMessage.vue";
import StudentTable from "./components/StudentTable.vue";

export default {
  name: "App",
  components: {
    NewStudentFrom,
    StudentMessage,
    StudentTable
  },
  data: function() {
    return {
      mostRecentSignIn: "",
      message: "",
      seeMessage: false,
      students: [],
      errors: [],
      newStudentName: "",
      newstarId: ""
    };
  },
  mounted: function() {
    this.updateStudents();
  },
  methods: {
    updateStudents: function() {
      // request all students and then update data array
      this.$studentApi
        .getAllStudents()
        .then(students => (this.students = students))
        .catch(err => {
          let msg = err.response.data.join(', ')
          alert('Error adding student:\n' + msg)
        })
    },
    addStudent: function(student) {
      this.$studentApi.addStudent(student).then(() => {
        this.updateStudents()
      })
    },
    deleteStudent: function(student) {
      this.$studentApi.deleteStudent(student).then(() => this.updateStudents())
    },
    checked: function(student) {
      this.$studentApi.updateStudent(student).then(() => {
        this.message = student.present ? "Hello" : "Goodbye";
        this.mostRecentSignIn = student.name;
        this.showMessage();
        this.updateStudents();
      });
    },
    showMessage: function() {
      this.seeMessage = true;
      setTimeout(() => {
        this.seeMessage = false;
      }, 3000);
    }
  }
};
</script>

<style>
</style>
