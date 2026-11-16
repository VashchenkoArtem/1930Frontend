import { useGetMeQuery, useGetProductsQuery } from './api/baseApi'
import './App.css'
import { Header } from './сomponents/Header'
import { LoginForm } from './сomponents/LoginForm'
import { ProductList } from './сomponents/ProductList'
import { RegisterForm } from './сomponents/RegisterForm'

function App() {
  const { data: products = [], isLoading, isError } = useGetProductsQuery()
  const { data: user, isLoading: isUserLoading, isError: isUserError } = useGetMeQuery()
  return (
    <div>
      <Header title = "Product catalog"/>
      { isUserLoading 
        ? <p>Перевiряємо авторизацiю</p> 
        : user 
          ? <p>Ви авторизовані як {user.email}</p>
          : <div>
            <LoginForm />
            <RegisterForm />
          </div>
      }

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
