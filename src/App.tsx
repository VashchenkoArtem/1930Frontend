import './App.css'
import { productsList } from './data/products'
import { Header } from './сomponents/Header'
import { ProductList } from './сomponents/ProductList'

function App() {
  return (
    <div>
      <Header title = "Product catalog"/>
      <ProductList products={productsList} />
    </div>
  )
}

export default App
