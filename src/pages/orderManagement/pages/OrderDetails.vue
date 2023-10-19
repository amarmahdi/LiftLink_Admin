<template>
  <div class="main-detail-container">
    <TableVue :title="true" :show-radio-btn="false">
      <template v-slot:title>
        <span class="detail-header">
          Order ID Number <span class="order-id">#332211</span>
        </span>
      </template>
    </TableVue>
    <div class="order-details">
      <BorderedContainer>
        <div class="order-details-container">
          <div class="detail-container">
            <div class="detail-content">
              <Titles title="Customer Information" />
              <div class="spacer"></div>
              <div class="detail-content-info-items">
                <div class="detail-content-userinfo">
                  <UserInfo
                    v-if="!userInfoLoading"
                    :data="orderInfo.customer"
                  />
                </div>
              </div>
              <div class="spacer"></div>
              <div class="divider"></div>
              <div class="spacer"></div>
              <Titles title="Order Summary" />
              <div class="spacer"></div>
              <div class="detail-content-info-items">
                <div class="detail-content-userinfo">
                  <OrderInfo v-if="!userInfoLoading" :data="orderInfo" />
                </div>
              </div>
              <div class="spacer"></div>
              <div class="divider"></div>
              <div class="spacer"></div>
              <Titles
                v-if="!userInfoLoading"
                :title="
                  orderInfo.vehicle.carMake +
                  ' ' +
                  orderInfo.vehicle.carModel +
                  ' ' +
                  orderInfo.vehicle.carYear
                "
              />
              <div class="spacer"></div>
              <div class="detail-content-info-items">
                <div class="detail-content-userinfo">
                  <CarInfo v-if="!userInfoLoading" :data="orderInfo" />
                </div>
              </div>
              <div class="spacer"></div>
              <Titles title="Registered Defects" />
              <div class="spacer"></div>
              <div class="defects">
                <!-- data from the AI -->
                <Chip text="No Defects" />
                <!-- end -->
              </div>
              <div class="spacer"></div>
            </div>
          </div>
          <div class="overview-container">
            <div class="vertical-line"></div>
            <div class="user-list">
              <Titles title="Drivers overview" />
              <div class="spacer"></div>
              <ItemVue
                v-for="(item, i) in drivers"
                :key="i"
                :full-name="item.firstName + ' ' + item.lastName"
                :status="item.isActive ? 'Active' : 'Not Available'"
                :driver-id="item.userId"
                @assign="asignDrivers"
                :selected="assignedDrivers.includes(item.userId)"
                :show-assign-btn="orderInfo.orderStatus === 'INITIATED'"
              />
            </div>
          </div>
        </div>
        <div class="second-container">
          <div class="divider"></div>
          <div class="spacer"></div>
          <Titles title="Notes" />
          <div class="spacer"></div>
          <div class="detail-content-info-items">
            <div v-if="!userInfoLoading" class="headline-20">
              <li>
                {{ orderInfo.notes ? orderInfo.notes : "No additional notes" }}
              </li>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="divider"></div>
          <div class="spacer"></div>
          <div class="spacer"></div>
          <div
            class="detail-content-info-items"
            v-if="orderInfo.valetVehicleRequest"
            v-for="(item, i) in cars"
            :key="i"
          >
            <div class="vehicle-info-header">
              <div class="vehicle-id">
                <Titles title="Vehicle ID" :title-type="2" />
                <Titles
                  :title="'#' + item.carId.substring(0, 6).toUpperCase()"
                  :title-type="4"
                />
              </div>
              <div class="btn-continer">
                <CustomButton
                  @click="assignVehicle(item.carId)"
                  title="Assign Loaner Vehicle"
                  v-if="!selectedVehicleId || selectedVehicleId === ''"
                >
                  <template v-slot:icon>
                    <CheckSvg />
                  </template>
                </CustomButton>
                <CustomButton
                  @click="assignVehicle(item.carId)"
                  title="Assign Loaner Vehicle"
                  v-if="selectedVehicleId === item.carId"
                  :dark="true"
                >
                  <template v-slot:icon>
                    <AssignSvg />
                  </template>
                </CustomButton>
              </div>
            </div>
            <div class="detail-content-userinfo">
              <ValetInfo v-if="!userInfoLoading" :data="item" />
              <div class="spacer"></div>
              <div v-if="i !== cars.length - 1" class="divider"></div>
            </div>
          </div>
        </div>
      </BorderedContainer>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TableVue from "../../../components/Table.vue";
import BorderedContainer from "../../../components/BorderedContainer.vue";
import UserInfo from "../components/UserInfo.vue";
import ValetInfo from "../components/ValetInfo.vue";
import OrderInfo from "../components/OrderInfo.vue";
import CarInfo from "../components/CarInfo.vue";
import LineVue from "../../../components/Line.vue";
import Titles from "../../../components/Titles.vue";
import ItemVue from "../components/Item.vue";
import Chip from "../../../components/Chip.vue";
import {
  ORDER,
  GET_AVAILABLE_VEHICLES,
  GET_AVAILABLE_DRIVERS,
} from "../../../services/gqlSrv";
import CustomButton from "../../../components/CustomButton.vue";
import CheckSvg from "../../../assets/svgs/check.vue";
import AssignSvg from "../../../assets/svgs/assign.vue";

export default defineComponent({
  components: {
    TableVue,
    BorderedContainer,
    UserInfo,
    LineVue,
    Titles,
    OrderInfo,
    CarInfo,
    ItemVue,
    Chip,
    ValetInfo,
    CustomButton,
    CheckSvg,
    AssignSvg,
  },
  data: () => {
    return {
      orderInfo: {},
      userInfoLoading: false,
      cars: [],
      drivers: [],
      assignedDrivers: [],
      selectedVehicleId: "",
    };
  },
  async created() {
    this.$store.dispatch("setOrder", {
      orderId: "",
      assignedDrivers: [],
      valetVehicleRequest: "",
    });
    await this.getOrderInfo();
    if (this.orderInfo.orderStatus === "INITIATED") {
      await this.getVehicles();
      await this.getDrivers();
    } else {
      this.drivers.push(this.orderInfo.driver);
    }
  },
  methods: {
    async getOrderInfo() {
      this.userInfoLoading = true;
      try {
        const {
          data: { getOrder },
        } = await this.$apollo.query({
          query: ORDER,
          variables: {
            orderId: this.$route.params.id.toString(),
          },
        });
        console.log(getOrder, "getOrder#############################");
        this.orderInfo = getOrder;
        const localStorageOrder = await this.$store.getters.getOrder;
        if (localStorageOrder.assignedDrivers) {
          this.assignedDrivers = localStorageOrder.assignedDrivers;
        }
        if (localStorageOrder.valetVehicleRequest) {
          this.selectedVehicleId = localStorageOrder.valetVehicleRequest;
        }
        this.$store.dispatch("setOrder", {
          ...localStorageOrder,
          orderId: this.$route.params.id.toString(),
          customer: getOrder.customer.userId,
        });
        this.userInfoLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async getVehicles() {
      try {
        const {
          data: { getAvailableCarInfo },
        } = await this.$apollo.query({
          query: GET_AVAILABLE_VEHICLES,
          variables: {
            dealershipId: this.$store.getters.getCurrentDealership.dealershipId,
          },
        });
        this.cars = getAvailableCarInfo;
        console.log(getAvailableCarInfo);
      } catch (error) {
        console.log(error);
      }
    },
    async getDrivers() {
      try {
        const {
          data: { getAvailableDriversInDealership },
        } = await this.$apollo.query({
          query: GET_AVAILABLE_DRIVERS,
          variables: {
            dealershipId: this.$store.getters.getCurrentDealership.dealershipId,
          },
        });
        this.drivers = getAvailableDriversInDealership;
      } catch (error) {
        console.log(error);
      }
    },
    async asignDrivers(e: any) {
      const exists = this.assignedDrivers.find((item) => item === e);
      if (exists) {
        const index = this.assignedDrivers.indexOf(e);
        this.assignedDrivers.splice(index, 1);
        this.$store.dispatch("setOrder", {
          assignedDrivers: this.assignedDrivers,
        });
      } else {
        this.assignedDrivers.push(e);
        const order = this.$store.getters.getOrder;
        this.$store.dispatch("setOrder", {
          ...order,
          assignedDrivers: this.assignedDrivers,
        });
        console.log(this.$store.getters.getOrder);
      }
    },
    async assignVehicle(e: any) {
      if (this.selectedVehicleId === "") {
        this.selectedVehicleId = e;
        const order = this.$store.getters.getOrder;
        this.$store.dispatch("setOrder", {
          ...order,
          valetVehicleRequest: e,
        });
        console.log(this.$store.getters.getOrder);
        return;
      }
      this.selectedVehicleId = "";
    },
  },
});
</script>
<style scoped>
.btn-continer {
  width: 330px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.vehicle-info-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.vehicle-id {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.second-container {
  width: 96%;
  display: inline-block;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
}

.order-details-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
}

@media (max-width: 768px) {
  .order-details-container {
    flex-direction: column;
  }
}

.main-detail-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.detail-header {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #2e2c2f;
  padding-left: 20px;
  padding-top: 5px;
}

.order-id {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #4e7359;
  padding-left: 20px;
  padding-top: 5px;
}

.detail-content-title {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: #2e2c2f;
}

.order-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.detail-container {
  width: 70%;
  display: inline-block;
  vertical-align: top;
  padding-right: 40px;
}

.overview-container {
  width: 30%;
  display: inline-block;
  vertical-align: top;
  position: relative;
  height: 700px;
  overflow: hidden;
  overflow-y: scroll;
}

.overview-container::-webkit-scrollbar {
  width: 8px;
}

.overview-container::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.overview-container::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}

.overview-container::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.vertical-line {
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 1px solid #eae6e5;
  height: 100%;
}

.user-list {
  padding-left: 40px;
}

.detail-content-info-items {
  width: 100%;
}

.detail-content-userinfo {
  width: 100%;
}

.defects {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.spacer {
  height: 16px;
}

.divider {
  height: 1px;
  background-color: #eae6e5;
  margin: 16px 0;
}

.headline-20,
.headline-20 * {
  box-sizing: border-box;
}

.headline-20 {
  color: #eae6e5;
  text-align: justify;
  font: 300 14px/18px "Neue Haas Grotesk Text Pro", sans-serif;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
