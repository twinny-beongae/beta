<template>
  <div class="about">
    <h1>This is an about page</h1>
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
  name: 'AboutView',
  components: {
  },
  date () {
    return {
      appointmentTime: 1
    }
  },
  methods: {
  }
}
</script>
