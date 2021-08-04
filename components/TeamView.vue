<template>
  <v-row justify="center">
    <teams />
    <v-dialog v-model="dialog" persistent max-width="600px">
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
            <v-row class="flex-column">
              <label for="title"
                ><span class="font-weight-bold text-h6">Team name</span></label
              >
              <input
                id="title"
                v-model="team.name"
                type="text"
                placeholder="Title"
                @input="updateId"
                class="p-2 text-subtitle-1"
              />
            </v-row>
            <v-row class="flex-column">
              <label for="id"
                ><span class="font-weight-bold text-h6">Team ID</span></label
              >
              <input
                id="id"
                ref="id"
                v-model="team.id"
                type="text"
                placeholder="ID"
                class="p-2 text-subtitle-1"
              />
            </v-row>
            
            <v-row class="flex-column">
              <label for="password"
                ><span class="font-weight-bold text-h6">Password</span></label
              >
              <input
                id="password"
                ref="password"
                v-model="team.password"
                type="passsword"
                placeholder="password"
                class="p-2 text-subtitle-1"
              />
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submitForm"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="joindialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          dark
          absolute
          bottom
          left
          fab
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h4">Join A Team</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="flex-column">
              <label for="title2"
                ><span class="font-weight-bold text-h6">Team Name</span></label
              >
              <input
                id="title2"
                v-model="team.name"
                type="text"
                placeholder="Title"
                @input="updateId"
                class="p-2 text-subtitle-1"
              />
            </v-row>
            <v-row class="flex-column">
              <label for="id2"
                ><span class="font-weight-bold text-h6">Team ID</span></label
              >
              <input
                id="id2"
                ref="id2"
                v-model="team.id"
                type="text"
                placeholder="ID"
                class="p-2 text-subtitle-1"
              />
            </v-row>

            <v-row class="flex-column">
              <label for="password2"
                ><span class="font-weight-bold text-h6">Password</span></label
              >
              <input
                id="password2"
                ref="password2"
                v-model="team.password"
                type="passsword"
                placeholder="password"
                class="p-2 text-subtitle-1"
              />
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="joindialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submitJoinForm">
            Join
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { cloneDeep } from 'lodash'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  layout: 'main',
  data: () => ({
    dialog: false,
    joindialog: false,
    team: {},
  }),

  computed: {
    ...mapGetters(['UserInfo']),
  },

  components: {},

  methods: {
    async submitJoinForm() {
      if (!this.team.id) {
        // eslint-disable-next-line no-alert
        alert('Please enter the team ID.')
        this.$refs.id2.focus()
        return
      }
      if (!this.team.password) {
        // eslint-disable-next-line no-alert
        alert('Please enter the team password.')
        this.$refs.password2.focus()
        return
      }

      await this.joinATeam()
    },

    async joinATeam() {
      try {
        const res = await this.$fire.functions.httpsCallable('joinATeam')({
          uid: this.UserInfo.uid,
          team_id: this.team.id,
          password: this.team.password,
        })

        console.log(res)
      } catch (httpsError) {
        console.log(httpsError)
        alert(httpsError.message)
      }

      this.joindialog = false
    },

    async submitForm() {
      if (!this.team.id) {
        // eslint-disable-next-line no-alert
        alert('Please enter the team ID.')
        this.$refs.id.focus()
        return
      }

      if (!this.team.password) {
        // eslint-disable-next-line no-alert
        alert('Please enter team password.')
        this.$refs.password.focus()
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
        .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w-]+/g, '') // Remove all non-word characters
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    },
    

    async writeToDB() {
      //this.status = 'Saving...'
      const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()
      const team = cloneDeep(this.team)
      const id = team.id
      delete team.id

      team.members = [this.UserInfo.uid]

      team.created = serverTimestamp
      team.owner = this.UserInfo.uid

       const messageRef = this.$fire.firestore
        .collection('teams')
        .doc(id)

      try {
        await messageRef.set(team)
      } catch (e) {

        alert('Team already exists. Please enter a unique team ID.')
        this.$refs.id.focus()
        console.error(e)
        return
      }

      team.id = id
      this.$emit('input', cloneDeep(team))
      this.dialog = false;
    },
  },
}
</script>



