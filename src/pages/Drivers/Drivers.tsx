import React, {useEffect} from 'react';
import PageHeader from "../../containers/PageHeader";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getDriversStartAct} from "../../services/actions/driverActions";
import ListDrivers from "./Components/ListDrives";

const Drivers: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDriversStartAct());
    }, [dispatch]);
    const drivers = (state: any) => state.drivers;
    const driversFromApi = useSelector(drivers);
    console.log(driversFromApi.driversSuccessData);

    let listDrivers = driversFromApi.driversSuccessData?.list;
    let count: number = driversFromApi.driversSuccessData?.total_count || 10;
    let page: number = 0;

    return (
        <DriversWrapper>
            <PageHeader header="Drivers"/>
            <ListDrivers listDrivers={listDrivers}/>
        </DriversWrapper>
    );
};

export default Drivers;

const DriversWrapper = styled.div`
  padding: 1rem;
`;;