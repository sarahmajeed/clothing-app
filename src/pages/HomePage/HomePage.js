import React from 'react'
import { Route } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import AnimatedImages from '../../components/AnimatedImages/AnimatedImages';

const HomePage = () => {
  return (
    <div>
      <Route render={() => <Slideshow />} />
      <Route render={() => <AnimatedImages />} />


    </div>
  )
}

export default HomePage;
