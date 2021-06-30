import React, {useEffect} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import PageHeader from "../../containers/PageHeader";
import {Button} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import star from "../../assets/star.svg";
import star1 from "../../assets/star1.svg";
import {getArticlesStartAct} from "../../services/actions/articleActions";
import {getArticlesInfoStartAct} from "../../services/actions/articleInfoActions";
import {dimensionValueTypes} from "framer-motion/types/render/dom/value-types/dimensions";

const ArticleInfo: React.FC = ({match}: any) => {
    // console.log(match.params.id);
    let currentId: number = match.params.id;

    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();

    const articlesInfo = (state: any) => state.articlesInfo;
    const articlesInfoFromApi = useSelector(articlesInfo);
    let currentArticle = articlesInfoFromApi.articlesInfoSuccessData;
    console.log(currentArticle);

    // useEffect(() => {
    //     dispatch(getArticlesInfoStartAct({currentId}));
    // }, [dispatch]);

    const {
        id, senderFullName, senderPhoneNumber, packages, totalCost, departureName, order,
        destinationName, rates
    } = currentArticle;
    const {deal_status_name} = order;
    // console.log(order.deal_status_name)

    return (
        <ArticleWrapper>
            <div className="row">
                <div className="col-lg-8">
                    <div className="info-table">
                        <PageHeader header="Order Details"/>
                        <div className="column">
                            <div className="name">Sender Full Name</div>
                            <div className="name">{senderFullName}</div>
                        </div>
                        <div className="column even">
                            <div className="name">Sender Phone Number</div>
                            <div className="name">{senderPhoneNumber}</div>
                        </div>
                        <div className="column">
                            <div className="name">Total Cost</div>
                            <div className="name">{totalCost}</div>
                        </div>
                        <div className="column even">
                            <div className="name">Sender Phone Number</div>
                            <div className="name">{senderPhoneNumber}</div>
                        </div>
                        <div className="column">
                            <div className="name">Order Status</div>
                            <div className="name status">
                                <div className={deal_status_name}>
                                    {deal_status_name}
                                </div>
                            </div>
                        </div>
                        <div className="column even">
                            <div className="name">Departure Name</div>
                            <div className="name">{departureName}</div>
                        </div>
                        <div className="column">
                            <div className="name">Destination Name</div>
                            <div className="name">{destinationName}</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="info-table">
                        <PageHeader header="Package Details"/>
                        <div className="column">
                            <div className="name">Count</div>
                            <div className="name">{packages.length}</div>
                        </div>
                        <div>{packages?.map((pack: any, index: number) => {
                            return (
                                <div key={pack.id}>
                                    <div className="column currentPack">
                                        <div className="name">{index + 1}</div>
                                    </div>
                                    <div className="column">
                                        <div className="name">Package Name</div>
                                        <div className="name">{pack.packName}</div>
                                    </div>
                                    <div className="column even">
                                        <div className="name">Package Weight</div>
                                        <div className="name">{pack.packWeight} kg</div>
                                    </div>
                                </div>
                            )
                        })}</div>
                        <hr className="hr mt-4"/>
                        <PageHeader header="Rates"/>
                        <div>{rates?.map((rate: any, index: number) => {
                            return (
                                <div key={rate.id}>
                                    <div className="column currentPack">
                                        <div className="name">{index + 1}</div>
                                    </div>
                                    <div className="column">
                                        <div className="name">Rate</div>
                                        <div className="name d-flex">
                                            {Array.from(Array(rate.rate).keys()).map(rate => (
                                                <div className="ms-1">
                                                    <img src={star} width={16} alt=""/>
                                                </div>
                                            ))}
                                            {Array.from(Array(5 - rate.rate).keys()).map(rate => (
                                                <div className="ms-1">
                                                    <img src={star1} width={16} alt=""/>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/*<div className="column even">*/}
                                    {/*    <div className="name">Package Weight</div>*/}
                                    {/*    <div className="name">{pack.packWeight} kg</div>*/}
                                    {/*</div>*/}
                                </div>
                            )
                        })}</div>
                    </div>
                </div>
            </div>
        </ArticleWrapper>
    );
};

export default React.memo(ArticleInfo);

const ArticleWrapper = styled.div`
padding: 1rem;
.even{
  background-color: rgba(0,0,0,0.05)!important;
}
.currentPack{
  background-color: rgba(200,231,251,0.39)!important;
}
.column{
    display: flex;
    //padding: 20px;
    background-color: ${({theme}) => theme.white};
    //border-radius: 8px;
    margin: 0 0 0.5rem;
    box-shadow: 0px 2px 8px rgba(0,0,0,0.0.5);
    font-weight: 500;
    position:relative;
    color: ${({theme}) => theme.primary};
    .listIcon{
      flex: 0.3;
      padding: 8px 12px;
      img{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
      }
    }
    .name{
      flex: 1;
      padding: 12px;
      white-space: nowrap; 
      width: fit-content;
      overflow: hidden;
      text-overflow: ellipsis; 
    }
    .population{
      flex: 1;
      padding: 12px;
    }
    .status{
      div{
        width: 6rem;
        display: flex;
        justify-content:center;
        align-items: center;
        border-radius: 20px;
        background: rgba(255,151,0,0.1);
        padding: 4px 12px;
        color: rgba(255,151,0,0.9);
      }
      .Новое{
        background: rgba(30,144,255,0.1);
        color: dodgerblue;
      }
      .Delivered{
        background: rgba(32,178,170,0.1);
        color: lightseagreen;
      }
    }
  }
.info-table{
    background-color: ${({theme}) => theme.white};
    border-radius: .5rem;
    padding: 1rem;
    min-height: 30rem;
}
`;