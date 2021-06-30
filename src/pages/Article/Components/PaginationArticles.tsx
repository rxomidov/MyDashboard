import React from 'react';
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/all";
import styled from "styled-components";

interface Pagination {
    pages: number,
    activePage: number,
    count: number,
}

const PaginationArticles: React.FC<Pagination> = ({pages, activePage, count}) => {

    return (
        <PaginationWrapper>
            <div className="records">
                1 to 11 of {count} records
            </div>
            {Array.from(Array(pages).keys()).length > 1 &&
            <article className="paginate-buttons">
                <button className="page-btn"
                    // onClick={() => changePage(page - 1)}
                >
                    <FaAngleDoubleLeft/>
                </button>
                {Array.from(Array(pages).keys()).map(arr => {
                    return (
                        <button key={arr} className={`page-btn ${activePage === arr && "page-btn-current"}`}
                            // onClick={() => changePage(index)}
                            // key={index}
                        >
                            {arr + 1}
                        </button>
                    )
                })}
                <button className="page-btn"
                    // onClick={() => changePage(page + 1)}
                >
                    <FaAngleDoubleRight/>
                </button>
            </article>
            }
        </PaginationWrapper>
    );
};

export default PaginationArticles;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content:space-between;
  font-family: Montserrat, sans-serif;
  .records{
    display:flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    margin: 0.5rem;
  }
  .paginate-buttons{
    display: flex;
    align-items: center;
    justify-content:flex-end;
    .page-btn{
      display:flex;
      background-color: white;
      box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
      align-items:center;
      border: none;
      color: lightskyblue;
      width: 2rem;height: 2rem;
      justify-content:center;
      padding: 0.5rem;
      margin: 0.5rem;
      transition: 0.3s;
      outline: none;
      border-radius: 8px;
      :hover{
        background:dodgerblue;
        color:#fff;
      }
    }
    .page-btn-current{
        background: ${({theme}) => theme.primary};
        color:#fff;
      }
  }
`;