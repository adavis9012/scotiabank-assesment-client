import React from "react";
import Login from "../components/organisms/Login";
import './styles/MainPage.scss';

const MainPage = ((props: any) => {
    return (
        <div className="mainPage">
            <section className="mainPage_content">
                <h1>Prueba Tecnica Scotiabank</h1>
                <p>
                    Sitio web desarrollado por <strong>David Velandia</strong>
                </p>
                <p>
                    Para empezar ingrese utilizando las credenciales enviadas por correo.
                </p>
                <p>
                    Tambien puede crear un nuevo usuario, sin embargo, este no tendra ninguna cuenta ni movimientos.
                </p>
                <hr/>
                <h2>Github</h2>
                <p>GitHub Personal <a href="https://github/adavis9012">adavis9012</a></p>
                <h2>Linkedin</h2>
                <a href="https://www.linkedin.com/in/andres-david-velandia">https://www.linkedin.com/in/andres-david-velandia</a>
                <br/>
                <br/>
                <hr/>
                <h2>Gracias!</h2>
            </section>
            <aside className="mainPage_login">
                <Login {...props} />
            </aside>
        </div>
    );
});

export default MainPage;
