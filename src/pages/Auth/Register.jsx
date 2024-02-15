import { Link } from "react-router-dom";
import useRegisterForm from "../../hooks/useRegisterForm";
import "./Auth.scss";

const Register = () => {
  const { register, handleSubmit, errors } = useRegisterForm();

  return (
    <div className="auth">
      <div className="auth-container">
        <h1>Crear cuenta</h1>
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
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" />

            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="password">Contraseña</label>
            <input
              {...register("password")}
              type="password"
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          <button className="button" type="submit">Crear</button>
          {errors.general && <p className="error">{errors.general.message}</p>}
          <span className="no-account">
            ¿Posees una cuenta? <Link to="/login" className="link">Ingresar</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
