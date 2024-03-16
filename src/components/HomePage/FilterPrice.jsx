import { useForm } from "react-hook-form"
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
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>
            <input {...register('to')} type="number" />
          </span>
        </label>
        <label >
          <span>
            <input {...register('to')} type="number" />
          </span>
        </label>
        <button>Filter</button>
      </form>
    )
}

export default FilterPrice