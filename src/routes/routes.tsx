import React from 'react';
import {useTranslation} from "react-i18next";
import {Route} from "react-router-dom";


const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'));
const Article = React.lazy(() => import('../pages/Article/Article'));
const ArticleInfo = React.lazy(() => import('../pages/Article/ArticleInfo'));

const Drivers = React.lazy(() => import('../pages/Drivers/Drivers'));
const Moderation = React.lazy(() => import('../pages/Drivers/Moderation'));
const Blocked = React.lazy(() => import('../pages/Drivers/Blocked'));

const Orders = React.lazy(() => import('../pages/Orders/Orders'));
const Controversial = React.lazy(() => import('../pages/Orders/Controversial'));
const Canceled = React.lazy(() => import('../pages/Orders/Canceled'));

const Users = React.lazy(() => import('../pages/Users/Users'));
const BlockedUsers = React.lazy(() => import('../pages/Users/Blocked'));

const routes = [
    {path: '/', exact: true, name: "Home"},
    {path: '/dashboard', exact: true, name: "Dashboard", component: Dashboard},
    {path: '/articles', exact: true, name: "Articles", component: Article},
    {path: '/articles/:id', exact: true, name: "Article Info", component: ArticleInfo},

    {path: '/drivers', exact: true, name: "Drivers", component: Drivers},
    {path: '/drivers/moderation', exact: true, name: "Moderation Drivers", component: Moderation},
    {path: '/drivers/blocked', exact: true, name: "Blocked Drivers", component: Blocked},

    {path: '/orders/all', exact: true, name: "Orders", component: Orders},
    {path: '/orders/controversial', exact: true, name: "Controversial Orders", component: Controversial},
    {path: '/orders/canceled', exact: true, name: "Canceled Orders", component: Canceled},

    {path: '/users/all', exact: true, name: "Users", component: Users},
    {path: '/users/blocked', exact: true, name: "Blocked Users", component: BlockedUsers},
];

export default routes;

// const BreadcrumbRouter = () => {
//     const {t, i18n} = useTranslation();
//
//     return (
//         <CustomBreadcrumb routes={
//             [
//                 {path: '/', exact: true, name: "Home"},
//                 {path: '/dashboard', exact: true, name: "Dashboard", component: Dashboard},
//                 {path: '/articles', exact: true, name: "Articles", component: Article},
//                 {path: '/orders', exact: true, name: "Orders", component: Orders},
//             ]
//         }/>
//     )
// };
// export {BreadcrumbRouter};
//
//
//
// interface Breadcrumb {
//     routes: [{
//         path: string,
//         name: string,
//         exact: boolean,
//         component?: any,
//     }],
//     // idx: number
// }
//
// const CustomBreadcrumb:React.FC<Breadcrumb> = ({routes}) => {
//     return (
//         <div>
//             {routes.map((route, idx) => {
//                 return route.component && (
//                     <Route
//                         key={idx}
//                         path={route.path}
//                         exact={route.exact}
//                         // name={route.name}
//                         render={props => (
//                             <div className="fade show">
//                                 <route.component {...props} />
//                             </div>
//                         )}/>
//                 )
//             })}
//         </div>
//     )
// }