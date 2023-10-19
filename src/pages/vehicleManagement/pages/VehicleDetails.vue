<template>
  <div class="container">
    <Table :title="true" :show-radio-btn="false">
      <template v-slot:title>
        <Titles :title-type="4" title="Vehicle ID Number" data="#221133" />
      </template>
    </Table>
    <BorderedContainer>
      <div class="content">
        <Titles :title-type="1" title="Vehicle Details" />
        <div class="spacer"></div>
        <Titles :title-type="2" title="Genesis Model G90 2023" />
        <div class="spacer"></div>
        <Info
          :lists="vehicleData"
          img-src="https://www.genesis.com/content/dam/genesis-p2/ca/admin/model-information/g70/list-thumbnail/2021-09-15/10-21-32/genesis-g70-model-thumbnail-small.png"
        />
        <div class="spacer"></div>
        <Titles :title-type="1" title="Notes" />
        <div class="spacer"></div>
        <Titles :title-type="2" title="Lorem ipsum dolor sit amet" />
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <Titles :title-type="1" title="Vehicle History" />
        <div class="carlist">
          <div class="carlist-item">
            <img src="./../../../assets/svgs/svgFile/vehicle.svg" />
            <img src="./../../../assets/svgs/svgFile/vehicle2.svg" />
            <img src="./../../../assets/svgs/svgFile/vehicle3.svg" />
          </div>
          <div class="carlist-item">
            <div class="carlist-title">
              <Titles :title-type="1" title="Top" />
            </div>
            <div class="carlist-title">
              <Titles :title-type="1" title="Left-side" />
            </div>
            <div class="carlist-title">
              <Titles :title-type="1" title="Right-side" />
            </div>
          </div>
        </div>
      </div>
    </BorderedContainer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Table from "../../../components/Table.vue";
import BorderedContainer from "../../../components/BorderedContainer.vue";
import Titles from "../../../components/Titles.vue";
import Info from "../../../components/Info.vue";

export default defineComponent({
  components: {
    Table,
    BorderedContainer,
    Titles,
    Info,
  },
  data: () => {
    return {
      vehicleData: [
        {
          title: "Valet Vehicle Name",
          data: "Genesis Model G90 2023",
        },
        {
          title: "Recent Service Date",
          data: "12/12/2020",
        },
        {
          title: "Valet Vehecle Licence Plate",
          data: "123456",
        },
        {
          title: "Vehicle Status",
          data: "Available",
        },
      ],
    };
  },
});
</script>
<style scoped>
.content {
  width: 100%;
  padding: 20px;
}
.spacer {
  height: 20px;
}
.carlist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.carlist-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.carlist-title {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
