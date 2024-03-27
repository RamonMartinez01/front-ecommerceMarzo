import { useForm } from "react-hook-form"
import './styles/FilterPriceStyles.css'

const FilterPrice = ({ setPriceRange }) => {

  const { register, handleSubmit, reset } = useForm()

  const submit = (data) => {
    const from = +data.from
    const to = +data.to
    setPriceRange({
      from,
      to: to === 0 ? Infinity : to,
    });
    reset({
      from: '',
      to: ''
    })
  };

  return (
    <form className="filter__form" onSubmit={handleSubmit(submit)}>
      <h2 className="filter__title">¿Buscas algún precio?</h2>
      <label className="filter__label">
        <span className="filter__span">
          <span className="filter__span-price">Desde: $</span>
          <input className="filter__input" {...register('to')} type="number" />
        </span>
      </label>
      <label className="filter__label" >
        <span className="filter__span">
          <span className="filter__span-price">Hasta: $</span>
          <input className="filter__input" {...register('to')} type="number" />
        </span>
      </label>
      <button className="fiter__btn">Buscar precios</button>
    </form>
  )
}

export default FilterPrice