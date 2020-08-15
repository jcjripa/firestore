# Referencia al Documento

const usuariosRef = db.collection('usuarios')

## Objeto de Referencia

```
const usuario = {
	nombre: 'Susana',
	activo: false,
	fechaNaci: 0,
	salario: 1700,
}

```

## Add Users

```
db.collection('usuarios')
	.add(usuario)
	.then((docRef) => {
	console.log(docRef)
})
.catch((e) => console.log('error', e))
```

## Update Usuarios

```
usuariosRef.doc('tA5Pgx9TdRaOWKm7hBVL').update({
	activo: true,
})
```

## Set Users

```
usuariosRef.doc('tA5Pgx9TdRaOWKm7hBVL').set({
	activo: true,
	edad: 44,
	casado: true,
	id: 123,
})
```

## Delete Users

```
usuariosRef
	.doc('PTRpocE4xlJESifkdw7a')
	.delete()
	.then(() => console.log('Borrado'))
	.catch((e) => console.log('error', e))

```

## Get Users

-   select \* from usuarios

```
usuariosRef.onSnapshot((snap) => {
	mostrarDocumentos(snap)
})
```

-   Optimizando codigo

```
usuariosRef.onSnapshot(mostrarDocumentos)
```

-   El snapshot es un observer que esta pendiente de los cambios en tiempo real
    sino necesitamos estar pendientes de los cambios como para los frontends usamos
    get en vez de onSnapshot

```
usuariosRef.get().then((snap) => mostrarDocumentos(snap))
```

-   De igual forma que en el primer ejercicio optimizando el argumento igual de una funcion

```
usuariosRef.get().then(mostrarDocumentos)
```

## Where

-   select \* from usuarios where salario > 1800

```
usuariosRef.where('salario', '>', 1800).get().then(mostrarDocumentos)
```

-   select \* from usuarios where salario > 1800 and salario < 2300

```
usuariosRef
	.where('salario', '>', 1800)
	.where('salario', '<', 2300)
	.get()
	.then(mostrarDocumentos)

```

-   select \* from usuarios where salario > 1800 and activo == true
    siempre que queramos crear un where para dos campos distintos necesitamos un indice en la consola les enviara el enlace para crearlo

```
usuariosRef
	.where('salario', '>', 1800)
	.where('activo', '==', true)
	.get()
    .then(mostrarDocumentos)
```
