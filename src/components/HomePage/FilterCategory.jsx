import { useEffect } from "react";
import useFetch from "../../hooks/useFetch"
import API_BASE_URL from "../../utils/apiConfig";

const FilterCategory = ({ setCategorySelected }) => {

  const [ categories, getCategories ] = useFetch()
  useEffect(() => {
    const url = `${API_BASE_URL}/categories`
    getCategories(url)
  }, []);


  /*Gestiona el onClick en los <li> de categories y los relaciona 
  con la lista renderizada en HomePage gracias a la prop setCategorySelected  */
  const handleCategory = id => {
    setCategorySelected(id)
  }

    //console.log(setCategorySelected);
  return (
    <section>
        <h3>Categories</h3>
        <hr />
        <ul>
          <li onClick={() => handleCategory('all')} >Todas las categorías</li>
        {
          categories?.map((category) => (
            <li  onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
          ))
        }
        </ul>
    </section>
  )
}

export default FilterCategory