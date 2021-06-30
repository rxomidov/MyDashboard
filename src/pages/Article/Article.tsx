import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {getArticlesStartAct} from "../../services/actions/articleActions";
import ListArticles from "./Components/ListArticles";
import PaginationArticles from "./Components/PaginationArticles";
import {
    BiSearchAlt,
    BsChevronDoubleDown,
    BsChevronDoubleUp,
    BsFilter,
    BsGrid,
    HiOutlineViewList,
    MdCreateNewFolder
} from "react-icons/all";
import PageHeader from "../../containers/PageHeader";
import RippleButton from "../../containers/RippleButton";
import {motion} from "framer-motion";

interface Article {
    listArticles: string[][]
}

const Article: React.FC<Article> = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticlesStartAct());
    }, [dispatch]);
    const articles = (state: any) => state.articles;
    const articlesFromApi = useSelector(articles);
    console.log(articlesFromApi.articlesSuccessData);
    const articlesInfo = (state: any) => state.articlesInfo;
    const articlesInfoFromApi = useSelector(articlesInfo);
    let currentArticle = articlesInfoFromApi.articlesInfoSuccessData;
    // console.log(articlesInfoFromApi.articlesInfoSuccessData);

    let listArticles = articlesFromApi.articlesSuccessData?.list;
    let count: number = articlesFromApi.articlesSuccessData?.total_count || 10;
    let page: number = 0;

    const [toggleFilter, setToggleFilter] = useState(false);

    const toggleFilterHandler = () => {
        setToggleFilter(!toggleFilter)
    };

    const variants = {
        visible: {
            height: "fit-content",
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.3,
            }
        },
        hidden: {
            height: 0,
            opacity: 0,
        }
    };

    return (
        <ArticleWrapper>
            <div className="article-header">
                <PageHeader header="Article"/>
                <div className="article-buttons">
                    <div className="d-none d-sm-flex">
                        <RippleButton
                            Icon={BsFilter}
                            // onClick={toggleDrawer}
                        />
                        <RippleButton
                            Icon={HiOutlineViewList}
                            // onClick={toggleDrawer}
                        />
                        <RippleButton
                            Icon={BsGrid}
                            // onClick={toggleDrawer}
                        />
                    </div>
                    <RippleButton
                        name="Create new"
                        capital={true}
                        type="primary"
                        Icon={MdCreateNewFolder}
                        // onClick={toggleDrawer}
                    />
                </div>
            </div>
            <div className="article-search">
                <div className="row gx-0">
                    <div className="col-md-5">
                        <div className="article-search-inner">
                            <div style={{width: "100%"}}>
                                <label htmlFor="searchMain">What are you looking for?</label>
                                <div className="wrapper">
                                    <BiSearchAlt style={{fontSize: "18px"}}/>
                                    <input placeholder={`Search by name, order, destination, etc.`}
                                           type="text"
                                           id="searchMain"
                                           className="input"
                                        // onChange={onFilterUsersChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row gx-0">
                            <div className="col-md-8">
                                <div className="article-search-inner">
                                    <div className="d-flex">
                                        <div style={{width: "100%"}}>
                                            <label>Sort type</label>
                                            <div className="wrapper">
                                                {/*<BiSearchAlt style={{fontSize: "18x"}}/>*/}
                                                <input placeholder={`Sort type`} type="text" className="input"
                                                    // onChange={onFilterUsersChange}
                                                />
                                            </div>
                                        </div>
                                        <div style={{width: "100%", marginLeft: "1rem"}}>
                                            <label>Status</label>
                                            <div className="wrapper">
                                                {/*<BiSearchAlt style={{fontSize: "18x"}}/>*/}
                                                <input placeholder={`Status`} type="text" className="input"
                                                    // onChange={onFilterUsersChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-auto">
                                <div className="article-search-inner">
                                    <div className="d-flex inner-margin ms-auto">
                                        <RippleButton
                                            Icon={toggleFilter ? BsChevronDoubleUp : BsChevronDoubleDown}
                                            type="secondary"
                                            onClick={toggleFilterHandler}
                                        />
                                        <RippleButton
                                            name="Search"
                                            capital={true}
                                            type="primary"
                                            Icon={BiSearchAlt}
                                            // onClick={toggleDrawer}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <motion.div
                        animate={toggleFilter ? "visible" : "hidden"}
                        variants={variants}
                        initial="hidden"
                    >
                        <div className="row gx-0">
                            <div className="col-md-6">
                                <div className="article-search-inner">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div style={{width: "100%"}}>
                                                <label>Sender name</label>
                                                <div className="wrapper">
                                                    {/*<BiSearchAlt style={{fontSize: "18x"}}/>*/}
                                                    <input placeholder={`Sender name`} type="text" className="input"
                                                        // onChange={onFilterUsersChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div style={{width: "100%"}}>
                                                <label>Cost</label>
                                                <div className="wrapper">
                                                    {/*<BiSearchAlt style={{fontSize: "18x"}}/>*/}
                                                    <input placeholder={`Cost`} type="text" className="input"
                                                        // onChange={onFilterUsersChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div style={{width: "100%"}}>
                                                <label>Weight</label>
                                                <div className="wrapper">
                                                    {/*<BiSearchAlt style={{fontSize: "18x"}}/>*/}
                                                    <input placeholder={`Weight`} type="text" className="input"
                                                        // onChange={onFilterUsersChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="article-search-inner">
                                    <div className="row gx-0">
                                        <div className="col-md-6">
                                            <div style={{width: "100%"}}>
                                                <label>Date departure</label>
                                                <div className="wrapper">
                                                    {/*<BiSearchAlt style={{fontSize: "18x"}}/>*/}
                                                    <input placeholder={`Date departure`} type="text" className="input"
                                                        // onChange={onFilterUsersChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div style={{width: "100%"}}>
                                                <label>Destination</label>
                                                <div className="wrapper">
                                                    {/*<BiSearchAlt style={{fontSize: "18x"}}/>*/}
                                                    <input placeholder={`Destination`} type="text" className="input"
                                                        // onChange={onFilterUsersChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
            </div>
            <ListArticles listArticles={listArticles}/>
            <PaginationArticles
                activePage={page}
                // onActivePageChange={pageChange}
                pages={Math.ceil(count / 10)}
                count={count}
                // doubleArrows={false}
            />
        </ArticleWrapper>
    );
};

export default React.memo(Article);

const ArticleWrapper = styled.div`
  padding: 1rem;
  .article-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border-bottom: 2px solid lightskyblue;
    .article-buttons{
      display: flex;
      div{
        margin-left: 0.5rem;
      }
    }
  }
  .article-search{
    margin: 1rem 0;
    //padding: 1rem;
    background-color : ${({theme}) => theme.white};
    border-radius: 0.8rem;
    transition: var(--main-transition);
    .article-search-inner{
      display:flex;
      justify-content:space-between;
      align-items: center;
      padding: 1rem;
    }
    .inner-margin{
      margin-top: auto;
      div{
        margin-left: 0.5rem;
      }
    }
    .wrapper{
      display: flex;
      align-items: center;
      height: 40px;
      background-color: rgba(238,243,246,0.6);
      border-radius: 8px;
      padding-left: 16px;
      color: rgba(179,197,205,0.8);
      font-size: 1rem;
      //width: 12rem;
      .input{
        border: none;
        background-color: transparent;
        padding: 8px;
        color: rgba(21,38,55,0.8);
        width: 100%;
        height: 100%;
        border-radius: 8px;
        outline: none;
        //:focus{
        //  outline: 2px solid dodgerblue;
        //}
      }
      .input::placeholder{
        color: #b3c5cd;
      }
    }
  }
`;