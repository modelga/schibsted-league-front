 <template>
  <ui-toolbar class="toolbar" text-color="black" type="colored" remove-nav-icon raised>
    <div>
      {{title}} <user :user="user"/>
    </div>
    <div slot="brand">
        <img src="../assets/logo.png"/>
    </div>
    <div slot="actions">
      <ui-icon-button icon="refresh" size="large" type="secondary" />
      <ui-icon-button has-dropdown id="options" color="white" icon="more_vert" ref="dropdownButton" size="large" type="secondary" >
      <ui-menu contain-focus has-icons slot="dropdown" @select="select" @close="$refs.dropdownButton.closeDropdown()" :options="menuOptions"></ui-menu>
      </ui-icon-button>
    </div>
  </ui-toolbar>
</template>
<script>
import User from '@/components/User';

const iconProps = { iconSet: 'fa', removeText: true }; // fontawesome props
const divider = { type: 'divider' };

const gh = { id: 'github', label: 'Sign-in with github', icon: 'fa-github', iconProps };
const logout = { id: 'logout', label: 'Logout', icon: 'fa-sign-out', iconProps };

const loggedOptions = [
  { id: 'my-leagues', label: 'My leagues', icon: 'fa-list-ol', iconProps },
  { id: 'my-profile', label: 'My Profile', icon: 'fa-address-card-o', iconProps },
];

const loginOptions = [gh];

export default {
  name: 'toolbar',
  data() {
    return {
      title: 'Schibsted League',
    };
  },
  methods: {
    select(e) {
      switch (e.id) {
        case 'github':
          this.$emit('login', 'github');
          break;
        case 'logout':
          this.$emit('login', 'logout');
          break;
        default:
          this.$router.push(e.id);
      }
    },
  },
  components: { User },
  created() {
  },
  computed: {
    isLogged() { return this.$root.isLogged; },
    user() { return this.$root.user; },
    menuOptions() {
      return [].concat(!this.isLogged ? loginOptions : loggedOptions.concat([divider, logout]));
    },
  },
};
</script>
<style scoped>
img{
  height: 30px;
}
#options{
  margin-right:10px;
}
.toolbar{
  position: fixed;
  top:0;
  left:0;
  right:0;
}
</style>
