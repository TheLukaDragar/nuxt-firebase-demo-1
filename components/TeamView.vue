<template>


 <v-row justify="center">
      <teams/>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
           <v-btn
                
                color="primary"
                dark
                absolute
                bottom
                right
                fab
                 v-bind="attrs"
          v-on="on"
              >
                <v-icon>mdi-plus</v-icon>
    </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">New Team Creator</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <label for="title">Team name</label>
                <input id="title" v-model="team.name" type="text" placeholder="Title" @input="updateId">
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <label for="id">ID</label>
                <input id="id" ref="id" v-model="team.id" type="text" placeholder="ID">
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Team Description"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  label="Team Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="submitForm"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
  </v-row>
    
   
    
   

  
</template>

<script>
import Teams from "../components/Teams"
import { mapGetters } from 'vuex'
import {cloneDeep} from 'lodash'
import firebase from 'firebase/app'
import 'firebase/firestore';

export default {


  layout: "main",
  data: () => ({
      dialog: false,
      team: {},
    }),

    computed: {

    ...mapGetters(['UserInfo'])

  },

  components: {
    
  },

  methods:{

       async submitForm() {
      if (!this.team.id) {
        // eslint-disable-next-line no-alert
        alert('Please enter the team ID.')
        this.$refs.id.focus()
        return
      }
      
        const exists = await this.checkExists(this.team.id)
        if (exists) {
          // eslint-disable-next-line no-alert
          alert('Team already exists. Please enter a unique team ID.')
          this.$refs.id.focus()
          return
        }
      
      await this.writeToDB()
    },


    updateId() {
    this.team.id = this.slugify(this.team.name)
    },
    slugify(string) {
      const a =
          'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
      const b =
          'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
      const p = new RegExp(a.split('').join('|'), 'g')
      return string
          .toString()
          .toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with -
          .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
          .replace(/&/g, '-and-') // Replace & with 'and'
          .replace(/[^\w-]+/g, '') // Remove all non-word characters
          .replace(/--+/g, '-') // Replace multiple - with single -
          .replace(/^-+/, '') // Trim - from start of text
          .replace(/-+$/, '') // Trim - from end of text
    },
    async checkExists() {
      const db = this.$fire.firestore
      const documentSnapshot = await db.collection('teams').doc(this.team.id).get()
      return documentSnapshot.exists
    },

    async writeToDB() {
      //this.status = 'Saving...'
      const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()
      const db = firebase.firestore()
      const team = cloneDeep(this.team)
      const id = team.id
      delete team.id
    
      team.created = serverTimestamp
      team.owner = this.UserInfo.uid
      
      
      try {
        const promises = []
        const promise1 = db.collection('teams').doc(id).set(team)
        
       
        promises.push(promise1)
        await Promise.all(promises)
        this.dialog =false
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Error saving team')
        // eslint-disable-next-line no-console
        console.error(error)
      }
      team.id = id
      this.$emit('input', cloneDeep(team))
      
      
    },


  }
  

}
</script>



