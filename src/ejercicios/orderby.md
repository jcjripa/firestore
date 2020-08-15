## Objeto de Referencia

```
const usuario = {
	nombre: 'Fernando',
	activo: false,
	fechaNaci: 0,
	salario: 2500,
}

const usuariosRef = db.collection('usuarios')

```

-   Para el Orderby compuesto tambien se necesita crear un indice

*   select \* from usuarios order by nombre desc , salario desc

```
usuariosRef
	.orderBy('nombre', 'desc')
	.orderBy('salario')
	.get()
	.then(mostrarDocumentos)
```
