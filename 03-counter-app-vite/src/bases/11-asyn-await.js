

// 1 cuando usa la palabra async se convierte el llamado en una p[romesa automaticamente
// 2 Cada async necesita por lo menos 1 await que sincroniza los hilos y puieden exisitr mas de 1 await en u metodo
// 3 los metodos con async necesitan un try catch para manejar el error siempre

const getImage = async () => {

    try {

        const apikey = 'C1kh327yeoricT09myKeu09';
        const resp = await fetch('http://api.giphy.com/v1/getimage');
        const result = await resp.json():

        const { url } = result.images.original;

        const imagen = document.createElement('img');
        imagen.src= url;
        document.body.append(imagen);

        
    } catch (error) {
        console.log(error);
    }


}