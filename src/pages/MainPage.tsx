import React, {useState} from "react";
import Login from "../components/organisms/Login";
import './styles/MainPage.scss';
import {AUTH_TOKEN} from "../config/constants";
import Logout from "../components/organisms/Logout";

const MainPage = ((props: any) => {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const [logged, setLogged] = useState(!!authToken);

    function render() {
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
                    <p><strong>GitHub </strong> <a href="https://github.com/adavis9012/scotiabank-assesment-client">Cliente</a></p>
                    <p><strong>GitHub </strong> <a href="https://github.com/adavis9012/scotiabank-assesment-server">Servidor</a></p>
                    <p><strong>GitHub Personal</strong> <a href="https://github/adavis9012">adavis9012</a></p>
                    <h2>Linkedin</h2>
                    <a href="https://www.linkedin.com/in/andres-david-velandia">https://www.linkedin.com/in/andres-david-velandia</a>
                    <br/>
                    <br/>
                    <hr/>
                    <h2>Gracias!</h2>
                </section>
                <aside className="mainPage_login">
                    {!logged ? <Login {...props} /> : <Logout handleLogin={handleLogin} />}
                </aside>
            </div>
        )
    }

    function handleLogin(value: boolean): void {
        localStorage.removeItem(AUTH_TOKEN);
        setLogged(value);
    }

    return render();
});

export default MainPage;
