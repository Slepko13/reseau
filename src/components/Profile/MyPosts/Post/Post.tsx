import React from 'react';
import './Post.scss';

type PostPropsType = {
      message: string,
      like: number
}

const Post: React.FC<PostPropsType> = (props) => {
      return (
            <div className="Post">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JahirWxkaX6Q9jN_RXECPyd5cB_oUMjgis0ulNmaOKZL3nC1XA&s" alt="lala" />
                  {props.message}
                  <div>like {props.like}</div>
            </div>
      );
}

export default Post;