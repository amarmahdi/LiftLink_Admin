<template>
  <div class="main-label-container">
    <div class="tab-header">
      <div class="tabs-container">
        <Tabs :tab-list="tabs" />
      </div>
      <div class="right-tab">hello</div>
    </div>
    <div class="spacer"></div>
    <Table :title="true" :titles="titles" />
    <Table
      @click="$router.push(`/account-management/account-details`)"
      v-for="(element, i) in tableData"
      :key="i"
      :tabel-data="element"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Tabs from "../../../components/Tabs.vue";
import Table from "../../../components/Table.vue";
import { GET_EMPLOYEES } from "../../../services/gqlSrv";

export default defineComponent({
  components: {
    Tabs,
    Table,
  },
  data() {
    return {
      tabs: [
        {
          title: "All",
          active: true,
        },
        {
          title: "Pending",
          active: false,
        },
        {
          title: "Completed",
          active: false,
        },
      ],
      titles: [
        "User ID",
        "Driver Name",
        "Driver Phone",
        "Role",
        "Added Date and Time",
        "Status",
      ],
      tableData: [
        // [
        //   "112233",
        //   "John Doe",
        //   "1234567890",
        //   "Driver",
        //   "2021-08-12 12:00:00",
        //   "Active",
        // ],
        // [
        //   "112233",
        //   "John Doe",
        //   "1234567890",
        //   "Driver",
        //   "2021-08-12 12:00:00",
        //   "Active",
        // ],
        // [
        //   "112233",
        //   "John Doe",
        //   "1234567890",
        //   "Driver",
        //   "2021-08-12 12:00:00",
        //   "Active",
        // ],
        // [
        //   "112233",
        //   "John Doe",
        //   "1234567890",
        //   "Driver",
        //   "2021-08-12 12:00:00",
        //   "Active",
        // ],
        // [
        //   "112233",
        //   "John Doe",
        //   "1234567890",
        //   "Driver",
        //   "2021-08-12 12:00:00",
        //   "Active",
        // ],
      ],
    };
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
      try {
        const { data } = await this.$apollo.query({
          query: GET_EMPLOYEES,
          variables: {
            dealershipName:
              this.$store.getters.getCurrentDealership.dealershipName,
          },
        });
        if (data) {
          data.getEmployeesInDealership.forEach((element: any) => {
            const newTebleData = [
              element.userId.toUpperCase(),
              element.firstName + " " + element.lastName,
              element.phoneNumber,
              {
                item: element.accountType,
                type: "status",
              },
              {
                item: element.createdAt,
                type: "dateTime",
              },
              {
                item: !element.isOnService ? "Available" : "On Service",
                type: "status",
                error: element.isOnService,
              },
            ];
            const ntd = [newTebleData, ...this.tableData];
            this.tableData = ntd as any;
          });
          console.log(data.getEmployeesInDealership);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
<style scoped>
.main-label-container {
  margin-top: 40px;
}

.spacer {
  height: 20px;
}

.tab-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
