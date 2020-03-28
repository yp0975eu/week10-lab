<template>
  <div class="card student-list m-2 p-2">
    <h4 class="card-title">Students</h4>
    <div class="edit-table-toggle form-check">
      <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
      <label for="edit-table" class="form-check-label">Edit Table</label>
    </div>
    <div id="student-table">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Star Id</th>
          <th>Present?</th>
          <th v-show="editTable">Delete?</th>
        </tr>
        <StudentRow
          v-for="student in students"
          v-bind:student="student"
          v-bind:key="student.starId"
          v-on:checked="checked"
          v-on:delete-student="deleted"
          v-bind:edit="editTable"
        ></StudentRow>
      </table>
    </div>
  </div>
</template>
<script>
import StudentRow from "@/components/StudentRow.vue";
export default {
  name: "StudentTable",
  data: function() {
    return {
      editTable: false,
    };
  },
  methods: {
    checked: function(student) {
      this.$emit("checked", student);
    },
    deleted: function (student) {
      this.$emit("delete-student", student)
    }
  },
  props: {
    students: Array
  },
  components: {
    StudentRow
  }
};
</script>
<style>
#student-table {
  max-height: 500px;
  overflow: scroll;
}
</style>