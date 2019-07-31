<template>
  <div class="w-100">
    <!--<h1>{{ $auth.user.name }}</h1>-->

    <table class="table table-bordered">
      <tbody>
        <tr>
          <th scope="row">
            Created at:
          </th>
          <td>
            {{ $auth.user.createdAt }}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Email:
          </th>
          <td>
            {{ $auth.user.email }}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Role:
          </th>
          <td>
            {{ $auth.user.role_id  }}
          </td>
        </tr>
        <tr>
          <th scope="row">
            Has verified email:
          </th>
          <td>
            {{ $auth.user.hasVerifiedEmail }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
   
  }),
  mounted () {
   
  },
  methods: {
    
  }
}
</script>

<style lang="stylus">
  #map
    height: 300px;
    width: 100%;
</style>
