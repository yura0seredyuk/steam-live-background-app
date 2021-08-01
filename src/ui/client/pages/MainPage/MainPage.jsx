import React, { useEffect } from 'react';
import img from '@/images/images.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '@/reducers/reposReducer';
import './MainPage.scss';
import { getRepos } from '@/actions/repos';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';

function MainPage({ t }) {
  const dispatch = useDispatch();
  const count = useSelector(state => state.repos.count);

  function onCountClick() {
    dispatch(setCount(5));
  }


  const repositories = useSelector(state => state.repos.items);
  useEffect(() => {
    dispatch(getRepos())
  }, [])


  return (
    <div>
      {console.log(repositories)}
      <h1>Main page <img className='client__img' src={img} alt="" /></h1>
      <button type='button' onClick={() => onCountClick()}>count</button>
      <h2>{t('welcome')}</h2>
      <div>{count}</div>
    </div>
  );
}

export default withNamespaces()(MainPage);

MainPage.propTypes = {
  t: PropTypes.object
};
