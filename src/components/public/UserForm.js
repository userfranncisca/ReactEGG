import React, { useState,useEffect} from "react";
import { useUserForm } from './../../hooks/Custom.hooks';

export const UserForm = () => {

    const {form, handleChanges} = useUserForm();
    
   const  [areEquals, setareEquals] = useState(true);
   const [passwordConfirmation, setpasswordConfirmation] = useState(); 
   const [pass, setPass] = useState(true)

   const validPass = () => { //comprueba que la password no este indefinida
    const { password } = form;  
    if (password !== undefined) {
    setPass(false)
  } 
  return pass
  }

  const handlePasswordConfirmation = (e) => {
    //la e hace refencia al input de donde se ejecuta la funcion
    setpasswordConfirmation(e.target.value); //aca vemos el valor de ese input
  };

  useEffect(() => {       // Evalua cambios que se hagan en passwordConfirmation. Si algo cambia hago un destructuring de form, es decir, saco lo que me interesa de form, en este caso password, que es el name del input de contraseña
    
    const { password } = form; 
    setareEquals(password === passwordConfirmation);
    validPass()
  }, [passwordConfirmation, pass]);

  const handleSubmit = (e) => {
    // se va a encargar de atrapar el envio del formulario
    e.preventDefault();     // Este evento lo que hace es evitar que no se refresque la pagina 
    console.log(form);
  };




  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">REGISTRATE</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              onChange={handleChanges}

            />
             <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input type="clave" className="form-control" placeholder="Clave" name="password" onChange={handleChanges} />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repetir Clave
            </label>
            <input type="clave" className="form-control" placeholder="Clave" onChange={handlePasswordConfirmation}/>
            { !areEquals && (    
            <div className="form-text list-group-item-danger">
              Las claves no son iguales
            </div>
            )}
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit" disabled={!areEquals || pass} onClick={handleSubmit}>
            RESGISTRATE
          </button>
        </div>
      </form>
    </div>
  );
};
