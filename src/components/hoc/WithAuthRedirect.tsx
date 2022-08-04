import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { AppStateType } from '../redux/reduxStore';


const mapStateToProps = (state: AppStateType) => {
      return {
            isAuth: state.auth.isAuth
      };
}
type MapStateToPropsType = {
      isAuth: boolean
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

      const RedirectComponent: React.FC<MapStateToPropsType> = (props) => {
            let { isAuth, ...restProps } = props;
            if (!isAuth) return <Redirect to="/login" />
            return (
                  <WrappedComponent {...restProps as WCP} />
            );
      }
      return connect<MapStateToPropsType, {}, WCP, AppStateType>(mapStateToProps)(RedirectComponent);
}



