import { useGetProductsQuery } from './api/baseApi'
import './App.css'
import { Header } from './сomponents/Header'
import { ProductList } from './сomponents/ProductList'
import { RegisterForm } from './сomponents/RegisterForm'

function App() {
  const { data: products = [], isLoading, isError } = useGetProductsQuery()
  return (
    <div>
      <Header title = "Product catalog"/>
      <RegisterForm />
      <ProductList products={products} />
      { isLoading && 
        <h1>Завантаження товарів...</h1>
      }
      { isError && 
        <h1>Не вдалося завантажити товари</h1>
      }
    </div>
  )
}

export default App
