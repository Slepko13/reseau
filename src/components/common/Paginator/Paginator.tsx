import React, { useState } from 'react';
import './Paginator.scss'

type PaginatorPropsType = {
	totalItemsCount: number,
	pageSize: number,
	portionSize: number,
	currentPage: number,
	onPageChanged: (pageNumber: number) => void
}
const Paginator: React.FC<PaginatorPropsType> = (props) => {

	let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
	let pages: Array<number> = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / props.portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
	let rightPortionPageNumber = portionNumber * props.portionSize;

	return (
		<div className="Paginator" >
			{portionNumber > 1 && <button onClick={
				() => { setPortionNumber(portionNumber - 1) }
			}> Prev </button>}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => {
					return <div key={p}
						className={props.currentPage === p ? "selected" : undefined}
						onClick={() => { props.onPageChanged(p) }}
					> {p} </div>
				})}
			{portionNumber < portionCount &&
				<button onClick={
					() => { setPortionNumber(portionNumber + 1) }
				}> Next </button>}
		</div>
	);
}
export default Paginator;
