<template>
  <div>
      <h1>Posts</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="role in roles" :key="role.id">
                  <td>{{role.id}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>
<script>
  export default {
      data(){
            return {
              roles: []
            }
      },
      created() {
        axios.get('api/roles')
        .then(response => this.roles = response.data);
      }
  }
</script>