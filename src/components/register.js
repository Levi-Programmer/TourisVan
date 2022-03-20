const Register = () => {
    return(
        <div>
            <h2>Registrate Gratis</h2>
            <form>
                <input type="text" name="name" placeholder="Nombre del Usuario"/>
                <input type="password" name="password" placeholder="Contraseña" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Register