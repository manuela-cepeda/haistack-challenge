import React, {useEffect} from 'react';
import { useAppDispatch } from '../store/hooks';
import { fetchItems } from '../store/thunks';
import ItemList from '../components/ItemList';

const HomePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchItems())
    }, [])
    
  return (
    <>
        <div>HomePage</div>
        <ItemList />
    </>
  )
}

export default HomePage