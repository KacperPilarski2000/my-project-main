import "./style.css";

const Form = () => (
    <form className="form">
          <input
            className="form__input"
            placeholder="wpisz zadanie"
          /><button className="form__button" type="submit">
            Dodaj zadanie
          </button>
        </form>
);

export default Form;