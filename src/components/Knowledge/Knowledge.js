import "./Knowledge.css";
import ImageCard from "../ImageCard/ImageCard";

const Knowledge = () => {

return (
    <div className="knowledge">
        <ImageCard imageUrl="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png">
            <h2 className="knowledge__title">NodeJS</h2>
            <p className="knowledge__text">
                Node.js es un entorno en tiempo de ejecución multiplataforma, de código
                abierto, para la capa del servidor basado en el lenguaje de programación
                JavaScript
            </p>
            <a className="knowledge__link" href="https://nodejs.org/">https://nodejs.org/</a>
        </ImageCard>
        <ImageCard imageUrl="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg">
            <h2 className="knowledge__title">CSS</h2>
            <p className="knowledge__text">
                CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.
            </p>
            <a className="knowledge__link" href="https://developer.mozilla.org/es/docs/Web/CSS">https://developer.mozilla.org/es/docs/Web/CSS</a>
        </ImageCard>
        <ImageCard imageUrl="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg">
            <h2 className="knowledge__title">React</h2>
            <p className="knowledge__text">
                React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario  con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por  Facebook y la comunidad de software libre.
            </p>
            <a className="knowledge__link" href="https://es.reactjs.org/">https://es.reactjs.org/</a>
        </ImageCard>
        <ImageCard imageUrl="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg">
        <h2 className="knowledge__title">HTML 5</h2>
        <p className="knowledge__text">
            HTML 5 es la quinta revisión importante del lenguaje básico de la World Wide Web, 
            HTML.
        </p>
        <a className="knowledge__link" href="https://developer.mozilla.org/es/docs/Web/HTML">https://developer.mozilla.org/es/docs/Web/HTML</a>
        </ImageCard>
    </div>
    
);
};
export default Knowledge;
