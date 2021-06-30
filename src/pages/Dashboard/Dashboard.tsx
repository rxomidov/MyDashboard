import React from 'react';
import styled from "styled-components";
import PageHeader from "../../containers/PageHeader";

import productsIcon from "../../assets/dashboard/products.svg";
import usersIcon from "../../assets/dashboard/users.svg";
import telegramIcon from "../../assets/dashboard/telegram.svg";
import costIcon from "../../assets/dashboard/cost.svg";

import bg1 from "../../assets/dashboard/taieri.svg";
import bg2 from "../../assets/dashboard/bg2.jpg";
import bg3 from "../../assets/dashboard/bg3.jpg";

const Dashboard: React.FC = () => {
    return (
        <DashboardWrapper>
            <PageHeader header="Dashboard"/>
            <div className="dashboard-cards">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card large-2x first">
                            <img src={costIcon} width={48} alt="costIcon"/>
                            <h4>Total Cost:</h4>
                            <h3>98.420</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-sm-4 col-lg-3">
                                <div className="card medium second mt-4 mt-lg-0">
                                    <img src={usersIcon} width={48} alt="usersIcon"/>
                                    <h4>Customers</h4>
                                    <h3>325</h3>
                                </div>
                            </div>
                            <div className="col-sm-8 col-lg-9">
                                <div className="card medium first mt-4 mt-lg-0">
                                    <img src={costIcon} width={48} alt="costIcon"/>
                                    <h4>Total Cost:</h4>
                                    <h3>98.420</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row marginT">
                            <div className="col-lg-6">
                                <div className="card medium third mt-2 mt-lg-0">
                                    <img src={telegramIcon} width={48} alt="telegramIcon"/>
                                    <h4>Dispatched Orders</h4>
                                    <h3>3.567</h3>
                                </div>
                                <div className="row marginT">
                                    <div className="col-sm-6">
                                        <div className="card medium second mt-2 mt-lg-0">
                                            <img src={telegramIcon} width={48} alt="telegramIcon"/>
                                            <h4>Dispatched Orders</h4>
                                            <h3>3.567</h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card medium fourth mt-4 mt-sm-2 mt-lg-0">
                                            <img src={productsIcon} width={48} alt="productsIcon"/>
                                            <h4>New Products</h4>
                                            <h3>32</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card large fourth mt-4 mt-lg-0">
                                    <img src={productsIcon} width={48} alt="productsIcon"/>
                                    <h4>New Products</h4>
                                    <h3>32</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardWrapper>
    );
};

export default React.memo(Dashboard);

const DashboardWrapper = styled.div`
  padding: 1rem;
  .dashboard-cards{
    margin-top: 1rem;
    .marginT{
      margin-top: 1rem;
    }
    .large-2x{
      height: 32rem;
    }
    .large{
      height: 21rem;
    }
    .medium{
      height: 10rem;
    }
    .card{
      width: 100%;
      //height: 10rem;
      border-radius: 8px;
      padding: 1rem;
      //background: rgba(0,0,0,0.2);
      border: none;
      h4{
        margin: 0 0 1rem;
        font-size: 1rem;
        color: ${({theme}) => theme.sidebarColor};
      }
      h3{
        //color: ${({theme}) => theme.sidebarColor};
      }
    }
    .first{
      background: linear-gradient(120deg, rgba(132,250,176,0.7) 0%, rgba(143,211,244,0.7) 100%), url(${bg2}) bottom right no-repeat;
      background-size:cover;
    }
    .second{
      background: linear-gradient(120deg, rgba(161,196,253,0.7) 0%, rgba(194,233,251,0.7) 100%);
    }
    .third{
      background: linear-gradient(120deg, rgba(161,196,253,0.7) 0%, rgba(192,251,190,0.7) 100%), url(${bg1}) bottom right no-repeat;
      background-size:cover;
    }
    .fourth{
      background: linear-gradient(120deg, rgba(105,147,255,0.9) 0%, rgba(156,0,251,0.9) 100%), url(${bg3}) bottom right no-repeat;
      background-size:cover;
    }
  }
`;