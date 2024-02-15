import { Link } from "react-router-dom";
import useLoginForm from "../../hooks/useLoginForm";
import "./Auth.scss";

const Login = () => {
  const { register, handleSubmit, errors, isSubmitting } = useLoginForm();

  return (
    <div className="auth">
      <div className="auth-container">
      <h1>Ingresar</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="userName">Usuario</label>
          <input
            {...register("userName")}
            type="text"
          />
          {errors.userName && <p className="error">{errors.userName.message}</p>}
        </div>
        <div className="input-container">
        <label htmlFor="userName">Contraseña</label>
        <input
          {...register("password")}
          type="password"
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <button className="button" type="submit" disabled={isSubmitting}>
          Entrar
        </button>
        {errors.general && <p>{errors.general.message}</p>}
        <span className="no-account">
          ¿No tienes una cuenta? <Link to="/register" className="link">Crear</Link>
        </span>
      </form>
      </div>
    </div>
  );
};

export default Login;
