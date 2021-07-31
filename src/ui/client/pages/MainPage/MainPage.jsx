import React, { useEffect } from 'react';
import img from '@/images/images.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '@/reducers/reposReducer';
import './MainPage.scss';
import { getRepos } from '@/actions/repos';

MainPage.propTypes = {

};

function MainPage() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.repos.count);

  function onCountClick() {
    dispatch(setCount(5));
  }


  const repos = useSelector(state => state.repos.items);
  useEffect(() => {
    dispatch(getRepos())
  }, [])


  return (
    <div>
      {console.log(repos)}
      <h1>Main page <img className='client__img' src={img} alt="" /></h1>
      <button type='button' onClick={() => onCountClick()}>count</button>
      <div>{count}</div>
    </div>
  );
}

export default MainPage;
