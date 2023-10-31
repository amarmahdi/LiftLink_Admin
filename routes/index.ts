import { createWebHistory, createRouter } from "vue-router";
import { guards } from "../src/services/middlewares/index";
import Dashboard from "../src/pages/Dashboard.vue";
import OrderManagement from "../src/pages/orderManagement/OrderManagement.vue";
import OrderDetails from "../src/pages/orderManagement/pages/OrderDetails.vue";
import OrderList from "../src/pages/orderManagement/pages/OrderList.vue";
import Message from "../src/pages/orderManagement/pages/MessageCustomer.vue";
import VehicleManagement from "../src/pages/vehicleManagement/VehicleManagement.vue";
import EmployeeManagement from "../src/pages/employeeManagement/EmployeeManagement.vue";
import AddVehicle from "../src/pages/vehicleManagement/pages/AddVehicle.vue";
import VehicleList from "../src/pages/vehicleManagement/pages/VehicleList.vue";
import VehicleDetails from "../src/pages/vehicleManagement/pages/VehicleDetails.vue";
import EmployeeList from "../src/pages/employeeManagement/pages/EmployeeList.vue";
import EmployeeDetails from "../src/pages/employeeManagement/pages/EmployeeDetails.vue";
import Login from "../src/pages/auth/Login.vue";
import Signup from "../src/pages/auth/Signup.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to: any, from: any, next: any) => {
      guards.loginGuard(to, from, next);
    },
    afterEnter: (to: any, from: any, next: any) => {
      guards.loginGuard(to, from, next);
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    beforeEnter: (to: any, from: any, next: any) => {
      guards.loginGuard(to, from, next);
    },
    afterEnter: (to: any, from: any, next: any) => {
      guards.loginGuard(to, from, next);
    },
  },
  {
    path: "/",
    name: "Dashboard",
    beforeEnter: (to: any, from: any, next: any) => {
      guards.authGuard(to, from, next);
    },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/order-management",
        name: "OrderManagement",
        component: OrderManagement,
        children: [
          {
            path: "/order-management/order-list",
            name: "OrderList",
            component: OrderList,
          },
          {
            path: "/order-management/order-details/:id",
            name: "OrderDetails",
            component: OrderDetails,
          },
          {
            path: "/message",
            name: "Message",
            component: Message,
          },
        ],
      },
      {
        path: "/vehicle-management",
        name: "VehicleManagement",
        component: VehicleManagement,
        children: [
          {
            path: "/vehicle-management/add-vehicle",
            name: "AddVehicle",
            component: AddVehicle,
          },
          {
            path: "/vehicle-management/vehicle-list",
            name: "VehicleList",
            component: VehicleList,
          },
          {
            path: "/vehicle-management/vehicle-details",
            name: "VehicleDetails",
            component: VehicleDetails,
          },
        ],
      },
      {
        path: "/employee-management",
        name: "EmployeeManagement",
        component: EmployeeManagement,
        children: [
          {
            path: "/employee-management/accounts-list",
            name: "EmployeeList",
            component: EmployeeList,
          },
          {
            path: "/employee-management/account-details",
            name: "EmployeeDetails",
            component: EmployeeDetails,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
