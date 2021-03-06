import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    BsToggles,
    FiChevronDown,
    FiChevronUp,
    FiEdit,
    MdDelete,
    MdSort
} from "react-icons/all";
import listIcon from "../../../assets/listIcon.png"
import { Button } from '@material-ui/core';
import {useDispatch} from "react-redux";
import {getArticlesInfoStartAct} from "../../../services/actions/articleInfoActions";
import { useHistory } from 'react-router-dom';
import RippleButton from "../../../containers/RippleButton";
import RippleEffect from "../../../containers/RippleEffect";

interface listArticles {
    listArticles: {
        id: string,
        sender_name: string,
    }[]
}

const ListArticles: React.FC<listArticles> = ({listArticles}) => {
    const {t, i18n} = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch();

    const [direction, setDirection] = useState<any>();
    const [value, setValue] = useState();

    const SortArrow = () => {
        if (!direction) {
            return <span className="heading_arrow">
                    <MdSort/>
                </span>;
        }
        if (direction === "desc") {
            return (
                <span className="heading_arrow">
                    <FiChevronUp/>
                </span>
            )
        }
        if (direction === "asc") {
            return (
                <span className="heading_arrow">
                    <FiChevronDown/>
                </span>
            )
        }
        return null;
    };

    const switchDirection = () => {
        console.log(direction)
        if (!direction) {
            setDirection("desc");
        } else if (direction === "desc") {
            setDirection("asc")
        } else {
            setDirection(null)
        }
    };

    const toggleInfo = (id: number, result?: number) => {
        dispatch(getArticlesInfoStartAct({id, result}));
        history.push(`/articles/${id}`)
    };

    return (
        <ListArticleWrapper>
            <div className="heading sm-hidden">
                <Button className="heading_listIcon">
                    {/*<div>listIcon</div>*/}
                </Button>
                <Button className="heading_name"
                    // onClick={setValueAndDirection("first_name")}
                >
                    <div>{t('articles.senderName')}</div>
                    <SortArrow/>
                </Button>
                <Button className="heading_name"
                    // onClick={setValueAndDirection("first_name")}
                >
                    <div>{t('articles.packNames')}</div>
                    <SortArrow/>
                </Button>
                <Button className="heading_name d-none d-md-block"
                        onClick={switchDirection}
                >
                    <div>{t('articles.totalCost')}</div>
                    {/*<SortArrow/>*/}
                </Button>
                <Button className="heading_name"
                        onClick={switchDirection}
                >
                    <div>Urgent</div>
                </Button>
                <Button className="heading_name d-none d-lg-block"
                        onClick={switchDirection}
                >
                    <div>Departure</div>
                    {/*<SortArrow/>*/}
                </Button>
                <Button className="heading_name d-none d-lg-block"
                        onClick={switchDirection}
                >
                    <div>Destination</div>
                    {/*<SortArrow/>*/}
                </Button>
                <Button className="heading_name"
                        onClick={switchDirection}
                >
                    <div>{t('articles.statusName')}</div>
                </Button>
                <Button className="heading_name d-none d-md-block"
                    onClick={switchDirection}
                >
                    <div>
                        Scheduled
                        {/*{t('articles.scheduledTime')}*/}
                    </div>
                    {/*<SortArrow/>*/}
                </Button>
                <Button className="heading_name d-none d-md-block"
                        onClick={switchDirection}
                >
                    <div>
                        Actions
                        {/*{t('articles.scheduledTime')}*/}
                    </div>
                    {/*<SortArrow/>*/}
                </Button>
            </div>
            {listArticles?.map((list: any) => {
                return (
                    <div key={list.id} className="row"
                         // onClick={() => toggleInfo(list.id)}
                    >
                        <div className="listIcon">
                            {list.listIcon ?
                                (<div>
                                    <img src={listIcon} alt="listIcon"/>
                                </div>) :
                                (<div>
                                    <div className={`default-avatar ${list.status_name}`}>
                                        {list.sender_name.split(" ")[0].charAt(0)}
                                        {list.sender_name.split(" ")[1].charAt(0)}
                                    </div>
                                </div>)
                            }
                        </div>
                        <div className="name">{list.sender_name}</div>
                        <div className="name d-none d-sm-block">
                                {list.pack_names}
                        </div>
                        <div className="population d-none d-md-block">{list.total_cost}</div>
                        <div className="population d-none d-md-block">{list.is_urgent === true ?
                            (<div className="urgent">Urgent</div>)
                            :
                            (<div>Not urgent</div>)
                        }</div>
                        <div className="population d-none d-lg-block">{list.departure_region_name}</div>
                        <div className="population d-none d-lg-block">{list.destination_region_name}</div>
                        <div className={`name status`}>
                            <div className={list.status_name}>
                                {list.status_name}
                            </div>
                        </div>
                        <div className="population d-none d-md-block">{list.scheduled_time_text}</div>
                        <div className="population d-none d-md-block">
                            <div className="d-flex">
                                <RippleEffect>
                                    <BsToggles className=""/>
                                </RippleEffect>
                                <RippleEffect onClick={() => toggleInfo(list.id)}>
                                    <FiEdit/>
                                </RippleEffect>
                                <RippleEffect>
                                    <MdDelete/>
                                </RippleEffect>
                            </div>
                        </div>
                    </div>
                )
            })}
        </ListArticleWrapper>
    );
};

export default ListArticles;

const ListArticleWrapper = styled.div`
  //padding: 1rem;
  .row{
    display: flex;
    align-items: center;
    //padding: 20px;
    background-color: ${({theme}) => theme.white};
    border-radius: 8px;
    margin: 0 0 0.5rem;
    box-shadow: 0px 2px 8px rgba(0,0,0,0.0.5);
    font-weight: 500;
    position:relative;
    color: ${({theme}) => theme.primary};
    transition: var(--main-transition);
    //border-bottom: 1px solid rgba(0,0,0,0.1);
    &:hover{
      box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
      background-color: rgba(157,255,252,0.1);
      //transform: translateX(4px);
      //border-left: 4px solid mediumspringgreen;
      cursor: pointer;
    }
    .default-avatar{
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
        box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
        text-transform:uppercase;
        display: flex;
        align-items: center;
        justify-content:center;
        background: rgba(255,151,0,0.1);
        color: rgba(255,151,0,0.9);
    }
    .listIcon{
      flex: 0.3;
      padding: 8px 12px;
      img{
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
        box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
      }
    }
    .name{
      flex: 1;
      font-size: 14px;
      padding: 12px;
      white-space: nowrap; 
      width: fit-content;
      overflow: hidden;
      text-overflow: ellipsis; 
    }
    .population{
      flex: 1;
      padding: 12px;
      font-size: 14px;
      white-space: nowrap; 
      width: fit-content;
      overflow: hidden;
      text-overflow: ellipsis; 
    }
    .urgent{
      width: fit-content;
      display: flex;
      justify-content:center;
      align-items: center;
      border-radius: 8px;
      background: rgba(255,2,18,0.1);
      padding: 4px 16px;
      color: rgba(255,2,18,0.8);
    }
    .status{
      div{
        width: fit-content;
        display: flex;
        justify-content:center;
        align-items: center;
        border-radius: 8px;
        background: rgba(255,151,0,0.1);
        padding: 4px 16px;
        color: rgba(255,151,0,0.9);
      }
      .??????????{
        background: rgba(30,144,255,0.1);
        color: dodgerblue;
      }
      .????????????????????{
        background: rgba(32,178,170,0.1);
        color: lightseagreen;
      }
    }
    .??????????{
        background: rgba(30,144,255,0.1);
        color: dodgerblue;
     }
     .????????????????????{
        background: rgba(32,178,170,0.1);
        color: lightseagreen;
     }
  }
  .heading{
    display: flex;
    button{
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
      text-transform: capitalize;
      padding: 12px 16px;
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      color: ${({theme}) => theme.primary}!important;
    }
    .heading_listIcon{
      flex: 0.3;
      color: #166280;
      display: flex;
      justify-content: flex-start;
    }
    .heading_name{
      flex: 1;
      color: #166280;
      display: flex;
      justify-content: flex-start;
    }
    .heading_arrow{
      color: #94b9cd;
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
    }
  }
  
@media screen and (max-width: 576px) {
    .row{
      margin: 1rem 0 1rem;
    }
    .sm-hidden{
      display: none;
    }
  }
`;