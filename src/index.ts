import db from './firebase/config'
import { mostrarDocumentos } from './helpers/mostrar-documentos'
import { firestore } from 'firebase'

const usuariosRef = db.collection('usuarios')

const btnNext = document.createElement('button')
btnNext.innerText = 'Next Page'
document.body.append(btnNext)

let firstDocument: any = null
let lastDocument: any = null
btnNext.addEventListener('click', () => {
	const query = usuariosRef.orderBy('nombre').startAfter(lastDocument)

	query
		.limit(2)
		.get()
		.then((snap) => {
			firstDocument = snap.docs[0] || null
			lastDocument = snap.docs[snap.docs.length - 1] || null
			mostrarDocumentos(snap)
		})
})

btnNext.click()

const btnPrevius = document.createElement('button')
btnPrevius.innerText = 'Previus Page'
document.body.append(btnPrevius)

btnPrevius.addEventListener('click', () => {
	const query = usuariosRef.orderBy('nombre').endBefore(firstDocument)

	query
		.limit(2)
		.get()
		.then((snap) => {
			firstDocument = snap.docs[0] || null
			lastDocument = snap.docs[snap.docs.length - 1] || null
			mostrarDocumentos(snap)
		})
})
