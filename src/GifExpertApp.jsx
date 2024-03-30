import { useState } from "react"
import { AddCategorie } from "./components/AddCategorie"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one punch man'])

  console.log(categories)

  const onAddCategorie = (newCategorie) => {
    if(categories.includes(newCategorie)){
      return
    }
    setCategories([ newCategorie, ...categories]) 
  }

  return (
   <>
   <h1>gif expert app</h1>

   <AddCategorie
   onNewCategorie = { (event) =>onAddCategorie(event) } 
   currenCategories = {categories}
    />


    {
    categories.map((category) =>{
      return(
       <GifGrid key={category} category={category} />
      )
    })
    }
   </>
  )
}
