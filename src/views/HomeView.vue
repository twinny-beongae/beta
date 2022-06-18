<template>
  <div class="top">
    <img alt="Twinny Beongae logo" src="../assets/twinny-beongae-logo.png" width="38">
    <img alt="Twinny Beongae logo" src="../assets/account-icon.svg" width="38">
  </div>
  <div class="tap">
    <h4>탭 메뉴</h4>
  </div>
  <div>
    <select v-model="selectedGoal">
      <option value="pingpong">탁구</option>
      <option value="basketball">농구</option>
    </select>
  </div>
  <div>
    <button @click="searchBeongae(selectedGoal)">찾기</button>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KET,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://twinny-beongae-ea0a4-default-rtdb.firebaseio.com',
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)

// Get a reference to the database service
const db = getDatabase(app)
const appointmentTimeRef = ref(db, 'rooms/' + 'room1' + '/appointment_time')
onValue(appointmentTimeRef, (snapshot) => {
  console.log(snapshot.val())
})

export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      appointmentTime: 1,
      goals: [
        {
          value: 'pingpong',
          name: '탁구',
          image: '../assets/pingpong.png'
        },
        {
          value: 'basketball',
          name: '농구',
          image: '../assets/basketball.png'
        }
      ],
      selectedGoal: 'pingpong'
    }
  },
  methods: {
    searchBeongae (goal) {
      let beongae = null
      beongae = this.getBeongae(goal)

      if (beongae == null) {
        beongae = this.makeBeongae(goal)
        this.$router.push({ name: 'beongae', params: { id: 123 } })
      } else {
        // this.$router.push('/beongae')
      }
    },
    getBeongae (goal) {
      console.log(`get beongae ${goal}`)
      // return {}
    },
    makeBeongae (goal) {
      console.log(`make beongae ${goal}`)
    }
  }
}
</script>
