<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <message-component></message-component>
      <div class="container mt-3">
          <div class="row">
            <div class="col-md-12">
              <router-view></router-view>
            </div>
          </div>
      </div>
    </main>

    <footer class="navbar-default navbar-bottom navbar-dark bg-dark">
      <div class="container-fluid">
            <p class="text-center nav-bar mb-0">© 2022 Simple Vue Shopping. All rights reserved.</p>
      </div>
    </footer>
</div>

</template>

<script>
  import { mapActions } from 'vuex';
  import Header from './components/Header.vue';
  import MessageComponent from './components/common/MessageComponent.vue';
  export default {
    components: {
      appHeader: Header,
      MessageComponent
    },
    methods: {
      ...mapActions(['getShoppingCart', 'listenToProductList'])
    },
    created() {
      let uid = this.$store.getters.currentUser.uid;
      this.listenToProductList();
      this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
    }
  }
</script>

<style>
  #reset-store-panel {
    position: fixed; bottom: 0px; right: 0px;
  }

  body, .sticky-footer-wrapper {
     min-height:100vh;
  }

  .flex-fill {
     flex:1 1 auto;
  }
  footer {
    height: 40px;
    color: #666;
    padding: 10px 0 10px 0;
    font-size: 85%;
  }
  footer a {
    color: #999;
  }
  footer a:hover {
    color: #efefef;
  }
  @media (max-width: 576px) {
    footer {
      height: 50px;
    }
  }
</style>
