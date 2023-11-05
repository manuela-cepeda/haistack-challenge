import React from 'react'
import { useAppSelector } from '../store/hooks'

const ItemList = () => {

  const items = useAppSelector((state)=>state.items)
  console.log(items )
  return (
    <div>ItemListContainer</div>
  )
}

export default ItemList