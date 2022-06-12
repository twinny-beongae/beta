<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAXzw2BNqhI6HJLFvDxGk8aFNnGEGz7ge0',
  authDomain: 'twinny-beongae-ea0a4.firebaseapp.com',
  databaseURL: 'https://twinny-beongae-ea0a4-default-rtdb.firebaseio.com',
  projectId: 'twinny-beongae-ea0a4',
  storageBucket: 'twinny-beongae-ea0a4.appspot.com',
  messagingSenderId: '82638857824',
  appId: '1:82638857824:web:ef5ea88e03accb25bc4505',
  measurementId: 'G-1FVMVDJYTB'
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
