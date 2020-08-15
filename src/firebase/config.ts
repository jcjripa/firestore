import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: 'AIzaSyCqSYkexgqMbNZx7gOcnxRh33MdCnNke4g',
	authDomain: 'sql-demo-c46ea.firebaseapp.com',
	databaseURL: 'https://sql-demo-c46ea.firebaseio.com',
	projectId: 'sql-demo-c46ea',
	storageBucket: 'sql-demo-c46ea.appspot.com',
	messagingSenderId: '1093151636773',
	appId: '1:1093151636773:web:973a356afa81dd7f06eecc',
	measurementId: 'G-4QG6LVL1EV',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase.firestore()
