import React, { useState } from 'react';
import './Paginator.scss'

const Paginator = (props) => {

      let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
      let pages = [];

      for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
      }

      let portionCount = Math.ceil(pagesCount / props.portionSize);

      let [portionNumber, setPortionNumber] = useState(1);

      let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
      let rightPortionPageNumber = portionNumber * props.portionSize;

      console.log(leftPortionPageNumber, rightPortionPageNumber);
      console.log(portionNumber);

      console.log("render pag");
      return (
            <div className="Paginator">
                  {portionNumber > 1 ? <button onClick={

                        () => { setPortionNumber(portionNumber - 1) }
                  }>Prev</button> : undefined}
                  {pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)

                        .map(p => {
                              return <div key={p}
                                    className={props.currentPage === p ? "selected" : undefined}
                                    onClick={() => { props.onPageChanged(p) }}
                              >{p}</div>
                        })


                  }
                  {portionNumber < portionCount ? <button onClick={

                        () => { setPortionNumber(portionNumber + 1) }
                  }>Next</button> : undefined}


            </div>
      );
}


// class Paginator extends React.Component {

//       state = {
//             portionNumber: 1
//       };


//       render () {

//             let pagesCount = Math.ceil(this.props.totalItemsCount / this.props.pageSize);
//             let pages = [];
//             for (let i = 1; i <= pagesCount; i++) {
//                   pages.push(i);
//             }
//             let portionSize = 10;
//             let portionCount = Math.ceil(pagesCount / portionSize);

//             let leftPortionPageNumber = (this.state.portionNumber - 1) * portionSize + 1;
//             let rightPortionPageNumber = this.state.portionNumber * portionSize;
//             console.log(leftPortionPageNumber, rightPortionPageNumber);
//             console.log(this.state.portionNumber);
//             console.log(this.state);


//             return (<div

//             >
//                   {this.state.portionNumber > 1 &&
//                         <button onClick={() => {
//                               this.setState((state) => { return { portionNumber: state.portionNumber - 1 } })
//                         }}>PREV</button>}

//                   {pages
//                         .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
//                         .map((p) => {
//                               return <span

//                                     key={p}
//                                     onClick={(e) => {
//                                           this.props.onPageChanged(p);
//                                     }}>{p}</span>
//                         })}
//                   {portionCount > this.state.portionNumber &&
//                         <button onClick={() => {
//                               this.setState((state) => { return { portionNumber: state.portionNumber + 1 } })
//                         }}>NEXT</button>}


//             </div>)
//       }
// }

export default Paginator;