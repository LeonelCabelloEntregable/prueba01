import './Titulo.modules.css'

const Titulo = ({titulo})=>{
    return (
        <div className='contenedorTitulo'>
            <h1 className='tituloPrincipal'>{titulo}</h1>
            <h2>Subtitulo</h2>
            <p>Este es el parrafo del primer componente creado</p>
        </div>
    )
}
export default Titulo;