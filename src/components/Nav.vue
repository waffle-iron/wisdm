<template lang="html">
  <nav class="navbar">
    <!-- <div class="container"> -->
      <div class="navbar-brand">
        <a href="#" class="navbar-item">
          <span class="icon"><i class="fa fa-home"></i></span>
        </a>

        <div class="navbar-burger burger" :class="{'is-active': burger }" @click="toggleBurger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{'is-active': burger}">
        <div class="navbar-start">
          <router-link :to="{ name: 'AnimalLog' }" class="navbar-item">Animal Log</router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a href="#" class="navbar-link">Features</a>
            <div class="navbar-dropdown">
              <router-link :to="{ name: 'Groups' }" class="navbar-item">Species Groups</router-link>
              <router-link :to="{ name: 'Projects' }" class="navbar-item">Projects</router-link>
              <a href="#" class="navbar-item">Feature 2</a>
              <a href="#" class="navbar-item">Feature 3</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a href="#" class="navbar-link">
              <span class="icon"><i class="fa fa-plus color"></i></span>
            </a>
            <div class="navbar-dropdown">
              <router-link :to="{ name: 'NewProject' }" class="navbar-item">New Project</router-link>
              <a href="#" class="navbar-item">New Encounter</a>
              <a href="#" class="navbar-item">New Species</a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a href="#" class="navbar-link">
              <span class="icon"><i class="fa fa-user-o color"></i></span>
            </a>
            <div class="navbar-dropdown">
              <a href="#" class="navbar-item">New Encounter</a>
              <a href="#" class="navbar-item">New Project</a>
              <a href="#" class="navbar-item">New Species</a>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </nav>
</template>

<script>
export default {
  name: 'Navigation',

  data () {
    return {
      burger: false
    }
  },

  methods: {
    toggleBurger () {
      this.burger = !this.burger
    }
  }
}
</script>

<style lang="css" scoped>
i.color {
  color: #269E7F;
}

.navbar {
  border-bottom: 1px solid #269E7F;
  padding: 5px 10px;
}
</style>
