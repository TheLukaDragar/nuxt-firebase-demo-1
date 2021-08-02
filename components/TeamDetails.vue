<template>
  <v-container>

    <div class="mb-5">

      <div class="display-1">{{ team.name }}</div>


    </div>

    <div class=" md:w-2/3 mx-auto mt-10  items-center">

      //IMPLEMENT TEAM UPDATE LISTENER HERE
      //ADD TEAM MEMBERS TAB
      
       

      <div class="text-h4">{{ team.name }}</div>
     
      <div class="text-s">
        {{ team.created }}
      </div>

      <v-chip-group class="uppercase font-semibold flex flex-wrap ">
        <v-chip pill label text-color="white" v-for="tag of tags" :key="tag" color="info"
                class="mx-2 first:ml-0 theme--light">
          <v-icon left>
            mdi-label
          </v-icon>
          {{ tag }}
        </v-chip>
      </v-chip-group>

    </div>
    <div class="flex border rounded shadow p-5  md:w-2/3 mx-auto mt-4 mb-4 items-center">
      <div>

        Enable messaging
      </div>
      <Btn :disabled="listenersStarted" @click="startListeners"
       class="ma-1"
        >Start Listeners</Btn
      >
      <Btn
        :disabled="permissionGranted || !listenersStarted"
        class="ma-1"
        @click="requestPermission"
      >
        Request Permission
      </Btn>
      <Btn
        :disabled="!listenersStarted || !permissionGranted || idToken !== ''"
        :loading="loading"
        class="ma-1"
        @click="getIdToken"
      >
        Get ID Token
      </Btn>
      <Btn :disabled="idToken === ''" class="ma-1" @click="sendTestMessage">
        Send Test Push Message
      </Btn>
    </div>

    

    <v-row>
      <v-col col=5 v-for="req of rider_requests" :key="req.id">

        <rider-request-card :req="req"/>
      </v-col>
    </v-row>
    


  </v-container>
</template>

<script>
import RiderRequestCard from './RiderRequestCard.vue'



export default {
  components: { RiderRequestCard },
  name: 'TeamDetails',
  props: {
    team: {
      type: Object,
      required: true
    },
  },
  data() {
    return {

      rider_requests:[],
       listenersStarted: false,
      permissionGranted: false,
      idToken: '',
      loading: false,
      
    }

  },
  computed: {
    
  },
  methods:{
    async requestPermission() {
      try {
        const permission = await Notification.requestPermission()
        this.permissionGranted = permission === 'granted'
      } catch (e) {
        console.error(e)
      }
    },
    async getIdToken() {
      this.loading = true
      let currentToken
      try {
        currentToken = await this.$fire.messaging.getToken()
      } catch (e) {
        console.error('An error occurred while retrieving token. ', e)
        this.idToken = ''
        this.loading = false
      }

      if (currentToken) {
        this.idToken = currentToken
        await this.writeToFirestore(currentToken)
      } else {
        // Show permission request.
        console.info(
            'No Instance ID token available. Request permission to generate one.'
        )
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        this.idToken = ''
      }
      alert(`The id token is: ${this.idToken}`)
      this.loading = false
    },
    startListeners() {
      this.startOnMessageListener()
      this.startTokenRefreshListener()
      this.listenersStarted = true
    },
    startOnMessageListener() {
      this.$fire.messaging.onMessage((payload) => {
        console.info('Message received. ', payload)
        var shinyData = payload || {}
        console.info('Message received. 2', shinyData.notification.body)
        this.$toast.info(shinyData.notification.body, {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        });
      })
    },
    startTokenRefreshListener() {
      this.$fire.messaging.onTokenRefresh(async () => {
        try {
          const refreshedToken = await this.$fire.messaging.getToken()
          this.idToken = refreshedToken
          await this.writeToFirestore(currentToken)
        } catch (e) {
          console.error('Unable to retrieve refreshed token ', e)
        }
      })
    },
    sendTestMessage() {
      try {
        setTimeout(() => {
          // wait 5 seconds so you have time to switch away from the page to test the service-worker
          this.$fire.functions.httpsCallable('sendTestPushMessage')({
            token: this.idToken,
          })
        }, 5000)
      } catch (e) {
        alert(e)
      }
    },
    

    async writeToFirestore(FCM_TOKEN) {
      const messageRef = this.$fire.firestore
          .collection('users')
          .doc(this.$fire.auth.currentUser.uid)
      try {
        await messageRef.set({
          FCM_token: FCM_TOKEN,
        },{merge:true})
      } catch (e) {
        alert(e)
        return
      }
      this.$toast.info("Obvestila boste prejemali na to napravo FCM_token: "+FCM_TOKEN, {
        position: "top-right",
        timeout: 10000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
  },
  async mounted() {
    const db = this.$fire.firestore

     try {
        
      const documentSnapshot = db.collection('teams').doc(this.team.id).collection("bar").onSnapshot(res => {
        const changes=res.docChanges()

        changes.forEach(change => {
          if(change.type==='added') {

            this.rider_requests.push({
              ...change.doc.data(),
              id:change.doc.id
            })

          }

        })

        console.log(this.rider_requests)
      }
      )
        
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      this.$nuxt.error({ statusCode: 404, message: 'erorr' })
    }

  },
  
}
</script>
<style scoped>


</style>