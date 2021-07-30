<template>
<v-app id="default" >
    
       <v-navigation-drawer
         v-model="drawer"
         
            app>
            
        <v-list v-if="UserInfo">
  
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
               {{UserInfo.name}}
              </v-list-item-title>
              <v-list-item-subtitle>{{UserInfo.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
           <v-divider></v-divider>
        </v-list>
        

          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
        </v-list-item>
      </v-list>


       </v-navigation-drawer>
   
    <v-app-bar
      app
      dark
      elevate-on-scroll
      prominent
      shrink-on-scroll
    >
     <template v-slot:img="{ props }">
        <v-img 
          v-bind="props"
          gradient="to  right , rgba(26,26,26,.7), rgba(26,26,26,.7)"
        ></v-img>
      </template>
     
       <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img 
        height="46px"
        contain
          src="logo_500.png"
        ></v-img>

      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon  @click="logout">mdi-export</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <v-container>

           <Nuxt/>
        
      </v-container>
    </v-main>


    <v-footer app>
        <span>&copy; Luka Dragar Ziga Groselj {{ new Date().getFullYear() }}</span>
    </v-footer>
    
  </v-app>
  
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  
  data(){
         return{

            drawer: false,
             
              items: [
                {
                icon: 'mdi-view-dashboard',
                title: 'Main',
                to: '/main'
                },
                {
                icon: 'mdi-medal',
                title: 'Teams',
                to: '/teams'
                },
                {
                icon:'mdi-account-box' ,
                title: 'Profile',
                to: '/profile'
                },
                
            ],
         }
     },
     computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      UserInfo:'UserInfo',

      
    
      
    })
    },
    mounted(){
     

  },
   watch: {

    isLoggedIn (value) {
  
      if (!value) {
        this.$router.push({
          path: '/login'
        })
       console.log("User signed out")
      }
    },


  },
  
  methods:{

    async logout() {
      try {
       await this.$fire.auth.signOut()
      } catch (e) {
        alert(e)
      }


     }
  
    //
  }

}
</script>


<style>
.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title {
    padding-bottom: 1px !important;
}


.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.3s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

</style>
