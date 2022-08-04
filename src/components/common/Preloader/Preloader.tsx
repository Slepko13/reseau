import React from 'react';
import preloader from '../../../assets/images/Spinner-1s-550px transparent.svg';

const Preloader: React.FC = () => {
      return (
            <div><img src={preloader} alt="preloader here" /></div>
      );
}

export default Preloader;