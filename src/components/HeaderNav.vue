<template>
  <div class="main">
    <div class="main-container">
      <div class="header">
        <div class="container">
          <div class="logo">
            <Logo />
            <span class="logo-text light">Lift</span>
            <span class="logo-text bold">Link</span>
          </div>
          <div class="label" v-if="currentDealership">
            <CustomNavButton
              @click="changeRoute('/dashboard')"
              :active="activePage === 'Dashboard' ? true : false"
              title="Dashboard"
            >
              <DashboardSvg />
            </CustomNavButton>
            <CustomNavButton
              @click="changeRoute('/order-management/order-list')"
              :active="activePage === 'OrderManagement' ? true : false"
              title="Order Management"
            >
              <OrderSvg />
            </CustomNavButton>
            <CustomNavButton
              @click="changeRoute('/employee-management/accounts-list')"
              :active="activePage === 'EmployeeManagement' ? true : false"
              title="Employee Management"
            >
              <EmployeeSvg />
            </CustomNavButton>
            <CustomNavButton
              @click="changeRoute('/vehicle-management/vehicle-list')"
              :active="activePage === 'VehicleManagement' ? true : false"
              title="Valet Management"
            >
              <VehicleSvg />
            </CustomNavButton>
          </div>
          <div class="user">
            <SettingsSvg />
            <div class="user2">
              <img class="male-11" src="./../assets/pngs/avatar.jpg" />
              <div class="frame-412">
                <div class="amar-mahdi" v-if="user.firstName || user.lastName">
                  {{ user.firstName }} {{ user.lastName }}
                </div>
                <div class="amar-mahdi" v-else>
                  {{ currentDealership.dealershipName }}
                </div>
                <div class="administrator">
                  {{
                    user.accountType === "admin" ? "Administrator" : "Manager"
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-info" :style="{ height: bannerInfoHeight }">
      <div class="banner-container">
        <div class="welcom-text-header">
          <div class="welcome-text">{{ bannerTitle }}</div>
          <div class="placeholder">
            {{
              currentDealership
                ? bannerSubTitle
                : "Sorry! You have no dealership registered with your account!"
            }}
          </div>
        </div>
        <div class="dashboard-btns-container">
          <div class="sized-btn" v-if="accountType === 'manager'">
            <span class="notification-counter">{{ notificationCount }}</span>
            <CustomButton @click="isDropdownOpen = true" title="See Requests">
              <template v-slot:icon>
                <Notifications />
              </template>
            </CustomButton>

            <div class="dropdown" v-if="isDropdownOpen">
              <div
                v-if="confirmationNotificationData.length !== 0"
                v-for="(item, i) in confirmationNotificationData"
                :key="i"
                class="dropdown-item"
                @click="onNotificationSelect(item.confirmationId)"
              >
                <div class="company-logo">
                  <img class="company-logo-1" src="./../assets/pngs/user.png" />
                </div>
                <div class="company-name">
                  <div class="company-name-1">
                    {{ item.dealership.dealershipName }}
                  </div>
                  <div class="company-name-2">
                    Sent you an invitation to join the dealership!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="sized-btn"
            v-if="accountType === 'admin' && currentDealership"
          >
            <CustomButton
              @click="showEmployeeModal = true"
              title="Add Employee"
              v-if="showButton"
            >
              <template v-slot:icon>
                <AddPerson />
              </template>
            </CustomButton>
            <div class="spacer" />
            <CustomButton
              @click="showServiceModal = !showServiceModal"
              title="Add Service Package"
              v-if="showButton"
            >
              <template v-slot:icon>
                <AddPerson />
              </template>
            </CustomButton>
          </div>
          <div
            class="sized-btn"
            v-if="accountType === 'manager' && currentDealership"
          >
            <CustomButton
              @click="showDealershipModal = true"
              title="Change Dealership"
            >
              <template v-slot:icon>
                <AccountsIcon />
              </template>
            </CustomButton>
          </div>
        </div>
        <CustomButton
          @click="changeRoute('/message')"
          title="Message Customer"
          v-if="showMessageButton"
        >
          <template v-slot:icon>
            <MessageSvg />
          </template>
        </CustomButton>
        <CustomButton
          title="Add New Vehicle"
          v-if="showAddVehicleButton"
          @click="showVehicleAddModal = true"
        >
          <template v-slot:icon>
            <VehicleSvg color="#2E2C2F" />
          </template>
        </CustomButton>
        <!-- <CustomSearchBar v-if="showSearchBar" /> -->
      </div>
    </div>
    <!-- dealership change modal -->
    <Modal v-if="showDealershipModal">
      <button @click="showDealershipModal = false">Close</button>
      <div class="dealership-btns">
        <button
          v-for="(item, i) in dealerships"
          :key="i"
          class="dealership-btn"
        >
          {{ item.dealershipName }}
        </button>
      </div>
    </Modal>
    <!-- add employee modal -->
    <Modal v-if="showEmployeeModal">
      <div class="custom-modal-container">
        <div class="dealership-btns">
          <div class="search-bar">
            <div class="search-bar2">
              <div class="input-field">
                <div class="input" @click="toggleDropdown">
                  <PinIcon />
                  <span class="service-type">{{
                    !selectedAccountType ? "Account Type" : selectedAccountType
                  }}</span>
                  <div class="input">
                    <ArrowDown />
                  </div>
                </div>
                <div class="dropdown" v-if="isDropdownOpen">
                  <div class="dropdown-item" @click="onSelect('manager')">
                    Manager
                  </div>
                  <div class="dropdown-item" @click="onSelect('driver')">
                    Driver
                  </div>
                </div>
                <div class="button">
                  <div class="button-base">
                    <div class="input-field">
                      <div class="search-input">
                        <input
                          type="text"
                          class="search-text-field"
                          @input="debouncedSearch"
                        />
                      </div>
                    </div>
                    <SearchIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="search-results">
          <div
            class="list-container"
            v-for="(item, i) in searchResults"
            :key="i"
            @click="selectUser(item)"
          >
            <div class="driver-img">
              <img src="./../assets/pngs/user.png" alt="" srcset="" />
            </div>
            <div class="driver-info">
              <div class="driver-name">
                {{ item.firstName }} {{ item.lastName }}
              </div>
              <div class="driver-email">{{ item.email }}</div>
            </div>
          </div>
        </div>
        <!-- <div class="footer">
          <button @click="showEmployeeModal = false">Close</button>
        </div> -->
      </div>
    </Modal>
    <!-- user confirmation id confirm alert  -->
    <Modal v-if="showConfirmModal" width="20%" height="auto">
      <div class="confirmation-container">
        <div class="confirmation-header">
          <div class="confirmation-title">Confirmation</div>
          <div class="confirmation-close" @click="showConfirmModal = false">
            <div class="close-actions">
              <div class="close-button">
                <div class="close-button-base">
                  <div class="close-text-base">
                    <div class="close-text">Exit window</div>
                  </div>
                  <div class="close-arrow">
                    <Close class="linear-arrows-action-minimize-square-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="confirmation-body">
          <div class="confirmation-text">
            Are you sure you want to join
            {{
              confirmationNotificationData.find(
                (item) => item.confirmationId === selectedConfirmationId
              ).dealership.dealershipName
            }}?
          </div>
          <div class="confirmation-btns">
            <button class="confirmation-btn cancel-btn" @click="reject">
              Cancel
            </button>
            <button class="confirmation-btn" @click="confirm">Confirm</button>
          </div>
        </div>
      </div>
    </Modal>
    <!-- user selection confirm alert  -->
    <Modal v-if="showSelectionConfirmation" width="20%" height="auto">
      <div class="confirmation-container">
        <div class="confirmation-header">
          <div class="confirmation-title">Confirmation</div>
          <div class="confirmation-close" @click="showConfirmModal = false">
            <div class="close-actions">
              <div class="close-button">
                <div class="close-button-base">
                  <div class="close-text-base">
                    <div class="close-text">Exit window</div>
                  </div>
                  <div class="close-arrow">
                    <Close class="linear-arrows-action-minimize-square-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="confirmation-body">
          <div class="confirmation-text">
            Are you sure you want to send invitation to
            {{ (<any>selectedUser).firtName }} {{ (<any>selectedUser).lastName }}?
          </div>
          <div class="confirmation-btns">
            <button class="confirmation-btn cancel-btn" @click="close">
              Cancel
            </button>
            <button class="confirmation-btn" @click="accept">Confirm</button>
          </div>
        </div>
      </div>
    </Modal>

    <Modal :height="'400px'" v-if="showServiceModal">
      <div class="service-container">
        <div class="modal-title-container">
          <Titles title="Add New Dealership" />
          <div class="action" @click="showServiceModal = false">
            <Titles title="Exit window" />
            <div class="vartical-line"></div>
            <Exit />
          </div>
        </div>
        <div class="spacer" />
        <div class="form-container">
          <div class="input-container">
            <InputField
              class="custom-input-container"
              :label="`Name`"
              v-model:inputValue="serviceName"
            />
            <textarea
              class="custom-input-container-textarea"
              placeholder="Description"
              v-model="description"
            ></textarea>
          </div>
        </div>
        <div class="button-container">
          <div class="button-service">
            <CustomButton
              title="Discard Changes"
              :dark="true"
              @click="showServiceModal = false"
            />
          </div>
          <div class="button-service">
            <CustomButton
              title="Save Changes"
              :dark="true"
              @click="addServicePackage"
            />
          </div>
        </div>
      </div>
    </Modal>
    <!-- {
  "input": {
    "available": true,
    "carColor": "",
    "carImage": "",
    "carInsurance": "",
    "carMake": "",
    "carModel": "",
    "carName": "",
    "carRegistration": "",
    "carType": "",
    "carVin": "",
    "carYear": "",
    "mileage": "",
    "plateNumber": "",
    "status": ""
  }
} -->
    <Modal :height="'610px'" v-if="showVehicleAddModal">
      <div class="service-container">
        <div class="modal-title-container">
          <Titles title="Add New Dealership" />
          <div class="action">
            <Titles title="Exit window" />
            <div class="vartical-line"></div>
            <Exit />
          </div>
        </div>
        <div class="spacer" />
        <div class="spacer" />
        <div class="spacer" />
        <div class="form-container">
          <div class="dealership-logo-upload-container">
            <div class="logo-img-container">
              <img :src="vehicleImgData" alt="logo" class="vehicle-img" />
            </div>
            <div class="button-service">
              <!-- <CustomButton title="Upload Vehicle " :dark="true" /> -->
              <input
                type="file"
                class="file-button"
                @change="getImgData((<any>$event.target).files[0])"
              />
            </div>
          </div>
          <div class="input-container">
            <InputField
              class="custom-input-container"
              :label="`Make`"
              v-model:input-value="carMake"
            />
            <InputField
              class="custom-input-container"
              :label="`Model`"
              v-model:input-value="carModel"
            />
            <InputField
              class="custom-input-container"
              :label="`Year`"
              v-model:input-value="carYear"
            />
            <InputField
              class="custom-input-container"
              :label="`Color`"
              v-model:input-value="carColor"
            />
            <InputField
              class="custom-input-container"
              :label="`Type`"
              v-model:input-value="carType"
            />
            <InputField
              class="custom-input-container"
              :label="`VIN`"
              v-model:input-value="carVin"
            />
            <InputField
              class="custom-input-container"
              :label="`Plate Number`"
              v-model:input-value="plateNumber"
            />
            <InputField
              class="custom-input-container"
              :label="`Registration`"
              v-model:input-value="carRegistration"
            />
            <InputField
              class="custom-input-container"
              :label="`Insurance`"
              v-model:input-value="carInsurance"
            />
            <InputField
              class="custom-input-container"
              :label="`Mileage`"
              v-model:input-value="mileage"
            />
            <InputField
              class="custom-input-container"
              :label="`Status`"
              v-model:input-value="status"
            />
          </div>
        </div>
        <div class="spacer" />
        <div class="spacer" />
        <div class="spacer" />
        <div class="spacer" />
        <div class="button-container">
          <div class="button-service">
            <CustomButton title="Discard Changes" :dark="true" />
          </div>
          <div class="button-service">
            <CustomButton
              title="Save Changes"
              :dark="true"
              @click="addVehicle"
            />
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CustomNavButton from "../components/CustomNavButton.vue";
import Logo from "../assets/svgs/logo.vue";
import CustomButton from "./CustomButton.vue";
import CustomSearchBar from "./CustomSearchBar.vue";
import OrderSvg from "../assets/svgs/order.vue";
import DashboardSvg from "../assets/svgs/dashboard.vue";
import EmployeeSvg from "../assets/svgs/employee.vue";
import SettingsSvg from "../assets/svgs/settings.vue";
import AddPerson from "../assets/svgs/addPerson.vue";
import MessageSvg from "../assets/svgs/message.vue";
import VehicleSvg from "../assets/svgs/vehicle.vue";
import AccountsIcon from "../assets/svgs/arrowRightNav.vue";
import Modal from "./Modal.vue";
import ArrowDown from "../assets/svgs/arrowDown.vue";
import PinIcon from "../assets/svgs/pinIcon.vue";
import SearchIcon from "../assets/svgs/searchIcon.vue";
import Notifications from "../assets/svgs/confirmNotification.vue";
import Close from "../assets/svgs/close.vue";
import Titles from "./Titles.vue";
import InputField from "./InputField.vue";
import Exit from "../assets/svgs/exit.vue";
import {
  SEARCH_USERS,
  GET_CONFIRMATION,
  NOTIFICATIONS,
  CONFIRM_REQUEST,
  REJECT_REQUEST,
  ADD_USER_TO_DEALERSHIP,
  ADD_SERVICE_PACKAGE,
  ADD_VEHICLE,
} from "../services/gqlSrv/index";
import { uploadImage } from "./../../firebase.config.js";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  components: {
    Logo,
    OrderSvg,
    CustomButton,
    CustomNavButton,
    DashboardSvg,
    EmployeeSvg,
    SettingsSvg,
    AddPerson,
    CustomSearchBar,
    MessageSvg,
    VehicleSvg,
    AccountsIcon,
    Modal,
    ArrowDown,
    PinIcon,
    SearchIcon,
    Notifications,
    Close,
    Titles,
    InputField,
    Exit,
  },
  props: {
    activePage: {
      type: String,
      default: "Dashboard",
    },
    showButton: {
      type: Boolean,
      default: false,
    },
    showMessageButton: {
      type: Boolean,
      default: false,
    },
    showSearchBar: {
      type: Boolean,
      default: false,
    },
    bannerInfoHeight: {
      type: String,
      default: "370px",
    },
    bannerTitle: {
      type: String,
      default: "Welcome back, Amar!",
    },
    bannerSubTitle: {
      type: String,
      default: "Here’s what’s happening with your business today.",
    },
    showAddVehicleButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      accountType: this.$store.getters.getUser.user.accountType,
      dealerships: [],
      showDealershipModal: false,
      showEmployeeModal: false,
      user: this.$store.getters.getUser.user,
      isDropdownOpen: false,
      selectedAccountType: "",
      searchLoading: false,
      searchTerm: "",
      timeoutId: null as any,
      currentDealership: this.$store.getters.getCurrentDealership || "",
      showConfirmModal: false,
      confirmationNotificationData: [],
      vehicleImgData: "",
      vehicleData: "",
      selectedConfirmationId: "",
      notificationCount: 0,
      searchResults: [],
      selectedUser: {},
      showSelectionConfirmation: false,
      showServiceModal: false,
      showVehicleAddModal: false,
      serviceName: "",
      description: "",
      available: false,
      carColor: "",
      carImage: "",
      carInsurance: "",
      carMake: "",
      carModel: "",
      carName: "",
      carRegistration: "",
      carType: "",
      carVin: "",
      carYear: "",
      mileage: "",
      plateNumber: "",
      status: "",
    };
  },
  async mounted() {
    await this.getDealerships();
    if (this.currentDealership === "") {
      this.getConfirmation();
    }
  },
  methods: {
    changeRoute(to: string) {
      this.$router.push(to);
    },

    async getDealerships() {
      const data = await this.$store.getters.getUser.dealerships;
      this.dealerships = data;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    onSelect(value: string) {
      this.selectedAccountType = value;
      this.isDropdownOpen = false;
    },
    onNotificationSelect(value: string) {
      this.showConfirmModal = true;
      this.selectedConfirmationId = value;
      this.isDropdownOpen = false;
    },
    async search(e: any) {
      this.searchLoading = true;
      try {
        const { data } = await this.$apollo.query({
          query: SEARCH_USERS,
          variables: {
            searchTerm: e,
            accountType: this.selectedAccountType,
          },
        });
        this.searchResults = data.searchUsers;
        console.log(this.searchResults);
      } catch (error) {
        console.log(error);
        this.searchResults = [];
      }
    },
    async selectUser(e: any) {
      this.selectedUser = e;
      this.showEmployeeModal = false;
      this.showSelectionConfirmation = true;
    },
    async getConfirmation() {
      try {
        const {
          data: { getConfirmation },
        } = await this.$apollo.query({
          query: GET_CONFIRMATION,
        });
        if (getConfirmation) {
          this.confirmationNotificationData = getConfirmation;
          console.log(this.confirmationNotificationData);
          const {
            data: { unconfirmedRequests },
          } = await this.$apollo.query({
            query: NOTIFICATIONS,
          });
          this.notificationCount = unconfirmedRequests;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async accept() {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: ADD_USER_TO_DEALERSHIP,
          variables: {
            dealershipName:
              this.$store.getters.getCurrentDealership.dealershipName,
            userId: this.selectedUser.userId,
          },
        });
        if (data) {
          this.showSelectionConfirmation = false;
          this.showConfirmModal = false;
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async confirm() {
      try {
        const {
          data: { acceptUserDealership },
        } = await this.$apollo.mutate({
          mutation: CONFIRM_REQUEST,
          variables: {
            confirmationId: this.selectedConfirmationId,
          },
        });
        if (acceptUserDealership) {
          this.showConfirmModal = false;
          await this.$store.dispatch(
            "setCurrentDealership",
            acceptUserDealership.dealership.dealership
          );
        }
      } catch (error) {
        console.log(error);
      }
    },
    async close() {
      this.showConfirmModal = false;
      this.showSelectionConfirmation = false;
    },
    async reject() {
      try {
        const {
          data: { rejectUserDealership },
        } = await this.$apollo.mutate({
          mutation: REJECT_REQUEST,
          variables: {
            confirmationId: this.selectedConfirmationId,
          },
        });
        if (rejectUserDealership) {
          this.showConfirmModal = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    debouncedSearch(e: any) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        this.search(e.target.value);
      }, 500);
    },
    async addServicePackage() {
      try {
        const {
          data: { addServicePackage },
        } = await this.$apollo.mutate({
          mutation: ADD_SERVICE_PACKAGE,
          variables: {
            input: {
              dealershipId:
                this.$store.getters.getCurrentDealership.dealershipId,
              servicePackageDescription: this.description,
              servicePackageName: this.serviceName,
              servicePackageDuration: "N/A",
              servicePackagePrice: "N/A",
              servicePackageType: "N/A",
            },
          },
        });
        if (addServicePackage) {
          console.log(addServicePackage);
          this.showServiceModal = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getImgData(e: any) {
      const file = e;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.vehicleData = e;
        this.vehicleImgData = reader.result as string;
      };
      reader.onerror = (error) => {
        console.log(error);
      };
    },
    async addVehicle() {
      try {
        const uploadToFirebase = await uploadImage(this.vehicleData);
        console.log(uploadToFirebase);
        const {
          data: { addVehicle },
        } = await this.$apollo.mutate({
          mutation: ADD_VEHICLE,
          variables: {
            dealershipId: this.$store.getters.getCurrentDealership.dealershipId,
            input: {
              available: true,
              carColor: this.carColor,
              carImage: uploadToFirebase,
              carInsurance: this.carInsurance,
              carMake: this.carMake,
              carModel: this.carModel,
              carName: this.carName,
              carRegistration: this.carRegistration,
              carType: this.carType,
              carVin: this.carVin,
              carYear: this.carYear,
              mileage: this.mileage,
              plateNumber: this.plateNumber,
              status: this.status,
            },
          },
        });
        if (addVehicle) {
          console.log(addVehicle);
          this.showVehicleAddModal = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style scoped>
.vehicle-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
}
.input-container {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  flex: 1 0;
  flex-wrap: wrap;
}
.custom-input-container {
  margin-top: 0;
}

.custom-input-container-textarea {
  margin-top: 0;
  height: 100px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  padding: 10px;
  font-size: 14px;
  font-family: "PP Mori", sans-serif;
  color: #2e2c2f;
  resize: none;
}

.action {
  display: flex;
  height: 32px;
  padding: 0px 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.vartical-line {
  display: flex;
  padding-left: 0px;
  align-items: center;
  align-content: space-between;
  gap: 5.366px;
  border-left: 0.537px solid rgba(99, 163, 117, 0.6);
}

.service-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 20px;
  width: 95%;
  height: 100%;
}

.modal-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.form-container {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  position: absolute;
  bottom: 20px;
}

.button-service {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 200px;
}

.dealership-logo-upload-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.logo-img-container {
  width: 80%;
  height: 148px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.spacer {
  width: 10px;
  height: 10px;
}
.search-results {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 4px;
  z-index: 10;
  overflow-y: auto;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  justify-content: flex-start;
  align-items: center;
  height: 50%;
}

.search-results::-webkit-scrollbar {
  width: 8px;
}

/* Style the scrollbar thumb */
.search-results::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

/* Style the scrollbar track */
.search-results::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  border-radius: 4px;
}

.search-results::-webkit-scrollbar {
  width: 8px;
}

/* Style the scrollbar thumb */
.search-results::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

/* Style the scrollbar track */
.search-results::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  border-radius: 4px;
}

.list-container {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  width: 50%;
}

.driver-img {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
  overflow: hidden;
}

.driver-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.driver-name {
  font-weight: bold;
}

.driver-email {
  font-size: 0.8rem;
  color: #666;
}

.close-actions {
  border-radius: 10px;
  border-style: solid;
  border-color: transparent;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  height: 32px;
  position: relative;
}

.close-button {
  display: flex;
  flex-direction: row;
  gap: 5.37px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.close-button-base {
  border-radius: 5.37px;
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.close-text-base {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.close-text {
  color: linear-gradient(to left, rgba(46, 44, 47, 0.4), rgba(46, 44, 47, 0.4)),
    linear-gradient(to left, #63a375, #63a375);
  text-align: left;
  font: 600 13px "PP Mori", sans-serif;
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.close-arrow {
  border-style: solid;
  border-color: rgba(99, 163, 117, 0.6);
  border-width: 0px 0px 0px 0.54px;
  padding: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.close-linear-arrows-action-minimize-square-3 {
  border-radius: 5px;
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.confirmation-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.confirmation-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.confirmation-title {
  color: #2e2c2f;
  text-align: left;
  font: 600 18px/30px "Instrument Sans", sans-serif;
}

.confirmation-close {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 24px;
}

.confirmation-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

.confirmation-text {
  color: #2e2c2f;
  text-align: center;
  font: 400 16px/30px "Instrument Sans", sans-serif;
}

.confirmation-btns {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.confirmation-btn {
  background: #eae6e5;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 49%;
  height: 40px;
  border: none;
}

.confirmation-btn:hover {
  background: #4c8f64;
}

.cancel-btn:hover {
  background: #fb1a53;
}

.linear-arrows-action-minimize-square-3 {
  border-radius: 5px;
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.company-logo {
  border-radius: 18px;
  width: 48px;
  height: 48px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.company-logo-1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.company-name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
}

.company-name-1 {
  color: #2e2c2f;
  text-align: left;
  font: 600 16px/30px "Instrument Sans", sans-serif;
}

.company-name-2 {
  color: #2e2c2f;
  text-align: left;
  font: 400 12px/30px "Instrument Sans", sans-serif;
}

.custom-modal-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
}

.search-input {
  background: #fff;
  border-radius: 10px;
  border-style: solid;
  border-color: transparent;
  border-width: 1px;
  padding: 0px 4px 0px 16px;
  display: flex;
  flex-direction: column;
  gap: 7.15px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
}

.search-text-field {
  color: #2e2c2f;
  text-align: left;
  font: 400 16px "Neue Haas Grotesk Text Pro", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}

.search-bar,
.search-bar * {
  box-sizing: border-box;
}

.search-bar {
  background: #eae6e5;
  border-radius: 20px;
  border-style: solid;
  border-color: transparent;
  border-width: 1px;
  padding: 0px 4px 0px 16px;
  display: flex;
  flex-direction: column;
  gap: 7.15px;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 66px;
}

.search-bar2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.input-field {
  padding: 0px 0 0px 5px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-radius: 20px;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  position: relative;
}

.input-field:hover {
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}

.input {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}

.dropdown {
  position: absolute;
  width: 200px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: 500;
  top: 60px;
}

.dropdown {
  opacity: 1;
}

.dropdown-item {
  padding: 8px;
  display: flex;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-family: "Neue Haas Grotesk Text Pro", sans-serif;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
  height: 50px;
}

.linear-essentional-ui-pin {
  overflow: visible;
}

.service-type {
  color: #2e2c2f;
  text-align: center;
  font: 400 16px/30px "Instrument Sans", sans-serif;
  transition: color 0.2s ease-in-out;
  text-transform: capitalize;
}

.service-type:hover {
  color: #4c8f64;
}

.linear-arrows-alt-arrow-down {
  overflow: visible;
}

.line-2 {
  opacity: 0.6000000238418579;
  transform: translate(-0.5px, -0.5px);
  overflow: visible;
}

.linear-transport-parts-service-transmission-circle {
  overflow: visible;
}

.vehicle-type {
  color: #2e2c2f;
  text-align: center;
  font: 400 16px/30px "Instrument Sans", sans-serif;
}

.linear-arrows-alt-arrow-down2 {
  overflow: visible;
}

.button {
  background: #2e2c2f;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  height: 56px;
}

.button2 {
  display: flex;
  flex-direction: row;
  gap: 5.37px;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
  width: 60%;
}

.button-base {
  border-radius: 5.37px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  padding-right: 20px;
}

.text-base {
  padding: 0px 8.05px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 2.68px;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.text {
  color: #eae6e5;
  text-align: left;
  font: 500 18px "Neue Haas Grotesk Text Pro", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.arrow {
  border-style: solid;
  border-color: rgba(234, 230, 229, 0.3);
  border-width: 0px 0px 0px 0.54px;
  padding: 0px 0px 0px 18.78px;
  display: flex;
  flex-direction: row;
  gap: 5.37px;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
}

.linear-search-magnifer {
  overflow: visible;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.modal-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.modal-close {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.dealership-btns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20px;
}

.dealership-btn {
  background-color: #63a375;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 70%;
}

.dealership-btn:hover {
  background-color: #4c8f64;
}

.dashboard-btns-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  width: 100%;
}

.sized-btn {
  display: flex;
  position: relative;
  justify-content: flex-end;
}

.notification-counter {
  background: #63a375;
  border-radius: 50%;
  padding: 2px 6px;
  color: #eae6e5;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main {
  background-image: url("../assets/pngs/Pattern2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0 0 40px 40px;
}

.welcom-text-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
}

.welcome-text {
  color: #eae6e5;
  text-align: left;
  font: 600 36px/132% "PP Mori", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.placeholder {
  color: rgba(234, 230, 229, 0.8);
  text-align: left;
  font: 200 18px/116% "PP Mori", sans-serif;
  position: relative;
  width: 411px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.logo-text {
  font-family: "PP Mori", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 132%;
  /* or 32px */
  letter-spacing: -0.02em;
  color: #eae6e5;
}

.bold {
  font-weight: bold;
}

.light {
  font-weight: 200;
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: transparent;
}

.header-info {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: transparent;
  border-radius: 0px 0px 40px 40px;
}

.banner-container {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header,
.header * {
  box-sizing: border-box;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 80%;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 52px;
}

.icon {
  overflow: visible;
}

.label {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  gap: 32px;
}

.tag {
  background: #63a375;
  border-radius: 40px;
  padding: 12px 18px 12px 14px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.linear-settings-fine-tuning-widget {
  border-radius: 5px;
  overflow: visible;
}

.dashboard {
  color: #eae6e5;
  text-align: center;
  font: 600 14px "PP Mori", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.linear-notes-clipboard-list {
  border-radius: 5px;
  overflow: visible;
}

.order-management {
  color: #eae6e5;
  text-align: center;
  font: 400 14px "PP Mori", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.linear-users-user-id {
  overflow: visible;
}

.employee-management {
  color: #eae6e5;
  text-align: center;
  font: 400 14px "PP Mori", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user {
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
}

.linear-settings-fine-tuning-settings {
  border-radius: 5px;
  overflow: visible;
}

.user2 {
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
  justify-content: flex-start;
}

.male-11 {
  border-radius: 18px;
  width: 48px;
  height: 48px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.frame-412 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 40px;
}

.amar-mahdi {
  color: #eae6e5;
  text-align: left;
  font: 500 16px/132% "Neue Haas Grotesk Text Pro", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.administrator {
  color: #eae6e5;
  text-align: center;
  font: 200 12px/130% "PP Mori", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
