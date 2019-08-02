<template>
    <div>
         <table v-show="roles && loggedIn" class="table">
            <thead class="thead-light">
                <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Created at</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="role in roles"
                :key="role.id"
                >
                <th scope="row">{{ role.id }}</th>
                <td>{{ role.name }}</td>
                <td>{{ role.created_at }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Auth from '@/components/Auth.vue'

export default {
  name: 'Home',
  components: { Auth },
  data: () => ({
    roles: [],
    loading: false
  }),
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['loggedIn'])
  },
  watch: {
    loggedIn (val) {
      if (val) this.fetchRoles()
    }
  },
  mounted () {
    if (this.loggedIn) this.fetchRoles()
  },
  methods: {
    async fetchRoles () {
      this.loading = true
      this.roles = await this.$get('roles')
      this.loading = false
    }
  }
}
</script>
