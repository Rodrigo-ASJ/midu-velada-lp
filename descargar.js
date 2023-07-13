//código para usar en la consola del navegador y descargar todas las imagenes
$$('img').forEach( img => {
const src = img.src
const [filename] = src.split('/').reverse()
const [name] = filename.split('.')
    
const a = document.createElement('a')
 a.setAttribute('href', src)
 a.setAttribute('download', name )
 a.click()   
})
