<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <HeaderNav :show-button="true" />
    <div class="cards-alignment" v-if="currentDealership">
      <div class="card-container">
        <Card
          :data="numberOfDrivers.toString() + ' Driver(s)'"
          title="Total Number of Drivers"
        >
          <template v-slot:icon>
            <UserCheckSvg />
          </template>
          <template v-slot:icon2>
            <LinkSvg />
          </template>
        </Card>
        <Card
          :data="numberOfManagers.toString() + ' Managers(s)'"
          title="Total Number of Managers"
        >
          <template v-slot:icon>
            <ServiceSvg />
          </template>
          <template v-slot:icon2>
            <LinkSvg />
          </template>
        </Card>
        <Card data="0" title="Total Number of Customers">
          <template v-slot:icon>
            <BusinessSvg />
          </template>
        </Card>
      </div>
    </div>
    <div class="analysis-container" v-if="currentDealership">
      <div class="analysis">
        <Card title="Valet Vehicle Report" :analysis="true" width="30%">
          <template v-slot:content>
            <div class="widget">
              <div class="header-analysis">
                <div class="title">Valet Vehicle Report</div>
                <div class="text">
                  Total number of valet service vehicles reported.
                </div>
              </div>
              <div class="vehicles">
                <div class="instagram">
                  <div class="title2">Genesis G90</div>
                  <svg
                    class="elements-line-gorizontal"
                    width="315"
                    height="8"
                    viewBox="0 0 315 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 4C0 1.79086 1.79086 0 4 0H310.957C313.166 0 314.957 1.79086 314.957 4C314.957 6.20914 313.166 8 310.957 8H4C1.79086 8 0 6.20914 0 4Z"
                      fill="#C1DAC8"
                    />
                  </svg>

                  <svg
                    class="elements-line-gorizontal2"
                    width="237"
                    height="8"
                    viewBox="0 0 237 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 4C0 1.79086 1.79086 0 4 0H232.81C235.019 0 236.81 1.79086 236.81 4C236.81 6.20914 235.019 8 232.81 8H4C1.79086 8 0 6.20914 0 4Z"
                      fill="#63A375"
                    />
                  </svg>

                  <div class="digits">65,376</div>
                </div>
                <div class="facebook">
                  <svg
                    class="elements-line-gorizontal3"
                    width="315"
                    height="8"
                    viewBox="0 0 315 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 4C0 1.79086 1.79086 0 4 0H310.957C313.166 0 314.957 1.79086 314.957 4C314.957 6.20914 313.166 8 310.957 8H4C1.79086 8 0 6.20914 0 4Z"
                      fill="#C1DAC8"
                    />
                  </svg>

                  <div class="title2">Genesis GV50</div>
                  <div class="digits2">12,109</div>
                  <svg
                    class="elements-line-gorizontal4"
                    width="178"
                    height="8"
                    viewBox="0 0 178 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 4C0 1.79086 1.79086 0 4 0H173.607C175.816 0 177.607 1.79086 177.607 4C177.607 6.20914 175.816 8 173.607 8H3.99999C1.79085 8 0 6.20914 0 4Z"
                      fill="#63A375"
                    />
                  </svg>
                </div>
                <div class="twitter">
                  <svg
                    class="elements-line-gorizontal5"
                    width="315"
                    height="8"
                    viewBox="0 0 315 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 4C0 1.79086 1.79086 0 4 0H310.957C313.166 0 314.957 1.79086 314.957 4C314.957 6.20914 313.166 8 310.957 8H4C1.79086 8 0 6.20914 0 4Z"
                      fill="#C1DAC8"
                    />
                  </svg>

                  <div class="title2">Genesis GV80</div>
                  <div class="digits3">132,645</div>
                  <svg
                    class="elements-line-gorizontal6"
                    width="273"
                    height="8"
                    viewBox="0 0 273 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 4C0 1.79086 1.79086 0 4 0H268.331C270.54 0 272.331 1.79086 272.331 4C272.331 6.20914 270.54 8 268.331 8H4.00001C1.79087 8 0 6.20914 0 4Z"
                      fill="#63A375"
                    />
                  </svg>
                </div>
                <div class="bihance">
                  <svg
                    class="elements-line-gorizontal7"
                    width="315"
                    height="8"
                    viewBox="0 0 315 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 4C0 1.79086 1.79086 0 4 0H310.957C313.166 0 314.957 1.79086 314.957 4C314.957 6.20914 313.166 8 310.957 8H4C1.79086 8 0 6.20914 0 4Z"
                      fill="#C1DAC8"
                    />
                  </svg>

                  <div class="title2">Genesis GV70</div>
                  <div class="digits3">100,429</div>
                  <svg
                    class="elements-line-gorizontal8"
                    width="202"
                    height="8"
                    viewBox="0 0 202 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 4C0 1.79086 1.79086 0 4 0H197.288C199.497 0 201.288 1.79086 201.288 4C201.288 6.20914 199.497 8 197.288 8H4C1.79086 8 0 6.20914 0 4Z"
                      fill="#63A375"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </template>
        </Card>
        <Card title="Valet Vehicle Report" :analysis="true" width="60%">
          <template v-slot:content>
            <div class="orders-report">
              <div class="header">
                <div class="text-analysis-2">Orders Report (Annually)</div>
                <div class="legends">
                  <div class="elements-info">
                    <svg
                      class="color"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
                        fill="#B3B1B1"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                    </svg>

                    <div class="text2">Normal traffic</div>
                  </div>
                  <div class="elements-info">
                    <svg
                      class="color2"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
                        fill="#63A375"
                      />
                    </svg>

                    <div class="text2">Highest traffic</div>
                  </div>
                </div>
              </div>
              <div class="frame-427319360">
                <div class="graph-bar"></div>
                <div class="graph-bar2"></div>
                <div class="graph-bar3"></div>
                <div class="graph-bar4"></div>
                <div class="graph-bar5"></div>
                <div class="graph-bar6"></div>
                <div class="graph-bar7"></div>
                <div class="graph-bar5"></div>
                <div class="graph-bar8"></div>
                <div class="graph-bar3"></div>
                <div class="graph-bar5"></div>
                <div class="graph-bar9"></div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import Card from "../components/Card.vue";
import BusinessSvg from "../assets/svgs/business.vue";
import ServiceSvg from "../assets/svgs/service.vue";
import UserCheckSvg from "../assets/svgs/userCheck.vue";
import LinkSvg from "../assets/svgs/link.vue";
import { NUMBER_OF_DRIVERS, NUMBER_OF_MANAGERS } from "../services/gqlSrv";

export default defineComponent({
  components: {
    HeaderNav,
    Card,
    BusinessSvg,
    ServiceSvg,
    UserCheckSvg,
    LinkSvg,
  },
  data() {
    return {
      numberOfDrivers: 0,
      numberOfManagers: 0,
      currentDealership: this.$store.state.core.currentDealership || "",
    };
  },
  mounted() {
    this.getNumberOfDrivers();
  },
  methods: {
    async getNumberOfDrivers() {
      console.log(this.$store.state.core);
      try {
        const { data } = await this.$apollo.query({
          query: NUMBER_OF_DRIVERS,
          variables: {
            dealershipId: this.$store.state.core.currentDealership,
          },
        });
        if (data) {
          this.numberOfDrivers = data.getNumberOfDriversInDealership;
          return;
        }
      } catch (error) {
        console.log(error, "hello from getnumber of drivers");
      }
    },
    async getNumberOfManagers() {
      try {
        const { data } = await this.$apollo.query({
          query: NUMBER_OF_MANAGERS,
          variables: {
            dealershipId: this.$store.state.core.currentDealership,
          },
        });
        if (data) {
          this.numberOfManagers = data.getNumberOfManagersInDealership;
          return;
        }
      } catch (error) {
        console.log(error, "hello from getnumber of drivers");
      }
    },
  },
});
</script>
<style scoped>
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
  width: 623px;
  height: 66px;
  position: relative;
}

.search-bar2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  width: 598px;
  position: relative;
}

.input-field {
  padding: 0px 20px 0px 10px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.input {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.linear-essentional-ui-pin {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.service-type {
  color: #2e2c2f;
  text-align: center;
  font: 400 16px/30px "Instrument Sans", sans-serif;
  position: relative;
}

.linear-arrows-alt-arrow-down {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.line-2 {
  opacity: 0.6000000238418579;
  flex-shrink: 0;
  position: relative;
  transform: translate(-0.5px, -0.5px);
  overflow: visible;
}

.linear-transport-parts-service-transmission-circle {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.vehicle-type {
  color: #2e2c2f;
  text-align: center;
  font: 400 16px/30px "Instrument Sans", sans-serif;
  position: relative;
}

.linear-arrows-alt-arrow-down2 {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.button {
  background: #2e2c2f;
  border-radius: 16px;
  padding: 0px 8px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  width: 190px;
  height: 56px;
  position: relative;
}

.button2 {
  display: flex;
  flex-direction: row;
  gap: 5.37px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 44px;
  position: relative;
}

.button-base {
  border-radius: 5.37px;
  padding: 0px 0px 0px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  width: 165px;
  position: relative;
}

.text-base {
  padding: 0px 8.05px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 2.68px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex: 1;
  position: relative;
}

.text {
  color: #eae6e5;
  text-align: left;
  font: 500 18px "Neue Haas Grotesk Text Pro", sans-serif;
  position: relative;
  align-self: stretch;
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
  flex-shrink: 0;
  height: 44px;
  position: relative;
}

.linear-search-magnifer {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.cards-alignment {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 370px;
  width: 100%;
}

.card-container {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.analysis-container {
  position: absolute;
  top: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
}

.analysis {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.widget,
.widget * {
  box-sizing: border-box;
}

.widget {
  background: #eae6e5;
  border-radius: 20px;
  padding: 0px 24px 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-shrink: 0;
  height: 341px;
  position: relative;
}

.header-analysis {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.title {
  color: #2e2c2f;
  text-align: left;
  font: 500 22px "Neue Haas Grotesk Text Pro", sans-serif;
  position: relative;
}

.text {
  color: #2e2c2f;
  text-align: left;
  font: 200 14px/20px "PP Mori", sans-serif;
  position: relative;
  width: 315px;
}

.vehicles {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.instagram {
  flex-shrink: 0;
  width: 314.96px;
  height: 34px;
  position: relative;
  overflow: hidden;
}

.title2 {
  color: #2e2c2f;
  text-align: left;
  font: 400 14px/20px "PP Mori", sans-serif;
  position: absolute;
  left: 0px;
  top: 0px;
}

.elements-line-gorizontal {
  position: absolute;
  left: 0px;
  top: 26px;
  overflow: visible;
}

.elements-line-gorizontal2 {
  position: absolute;
  left: 0px;
  top: 26px;
  overflow: visible;
}

.digits {
  color: #2e2c2f;
  text-align: right;
  font: 500 14px/20px "Neue Haas Grotesk Text Pro", sans-serif;
  position: absolute;
  right: -0.04px;
  top: 0px;
  width: 70px;
}

.facebook {
  flex-shrink: 0;
  width: 314.96px;
  height: 34px;
  position: relative;
  overflow: hidden;
}

.elements-line-gorizontal3 {
  position: absolute;
  left: 0px;
  top: 26px;
  overflow: visible;
}

.digits2 {
  color: #2e2c2f;
  text-align: right;
  font: 500 14px/20px "Neue Haas Grotesk Text Pro", sans-serif;
  position: absolute;
  right: -0.04px;
  top: 0px;
  width: 59px;
}

.elements-line-gorizontal4 {
  position: absolute;
  left: 0px;
  top: 26px;
  overflow: visible;
}

.twitter {
  flex-shrink: 0;
  width: 314.96px;
  height: 34px;
  position: relative;
  overflow: hidden;
}

.elements-line-gorizontal5 {
  position: absolute;
  left: 0px;
  top: 26px;
  overflow: visible;
}

.digits3 {
  color: #2e2c2f;
  text-align: right;
  font: 500 14px/20px "Neue Haas Grotesk Text Pro", sans-serif;
  position: absolute;
  right: -0.04px;
  top: 0px;
  width: 76px;
}

.elements-line-gorizontal6 {
  position: absolute;
  left: 0px;
  top: 26px;
  overflow: visible;
}

.bihance {
  flex-shrink: 0;
  width: 314.96px;
  height: 34px;
  position: relative;
  overflow: hidden;
}

.elements-line-gorizontal7 {
  position: absolute;
  left: 0px;
  top: 26px;
  overflow: visible;
}

.elements-line-gorizontal8 {
  position: absolute;
  left: 0px;
  top: 26px;
  overflow: visible;
}

.orders-report,
.orders-report * {
  box-sizing: border-box;
}

.orders-report {
  background: #eae6e5;
  border-radius: 20px;
  padding: 0px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-shrink: 0;
  height: 341px;
  position: relative;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.text-analysis-2 {
  color: #000000;
  text-align: left;
  font: 500 22px "Neue Haas Grotesk Text Pro", sans-serif;
  position: relative;
}

.legends {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.elements-info {
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.color {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.text2 {
  color: #000000;
  text-align: left;
  font: 400 14px/20px "PP Mori", sans-serif;
  position: relative;
}

.color2 {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.frame-427319360 {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  flex-shrink: 0;
  width: 599px;
  position: relative;
}

.graph-bar {
  background: #8f8e8e;
  border-radius: 32px;
  flex-shrink: 0;
  width: 24px;
  height: 164px;
  position: relative;
}

.graph-bar2 {
  background: #8f8e8e;
  border-radius: 32px;
  flex-shrink: 0;
  width: 24px;
  height: 132px;
  position: relative;
}

.graph-bar3 {
  background: #8f8e8e;
  border-radius: 32px;
  flex-shrink: 0;
  width: 24px;
  height: 136px;
  position: relative;
}

.graph-bar4 {
  background: #8f8e8e;
  border-radius: 32px;
  flex-shrink: 0;
  width: 24px;
  height: 186px;
  position: relative;
}

.graph-bar5 {
  background: #8f8e8e;
  border-radius: 32px;
  flex-shrink: 0;
  width: 24px;
  height: 158px;
  position: relative;
}

.graph-bar6 {
  background: #63a375;
  border-radius: 32px;
  flex-shrink: 0;
  width: 24px;
  height: 210px;
  position: relative;
}

.graph-bar7 {
  background: #8f8e8e;
  border-radius: 32px;
  flex-shrink: 0;
  width: 24px;
  height: 191px;
  position: relative;
}

.graph-bar8 {
  background: #8f8e8e;
  border-radius: 32px;
  flex-shrink: 0;
  width: 24px;
  height: 178px;
  position: relative;
}

.graph-bar9 {
  background: #8f8e8e;
  border-radius: 32px;
  flex-shrink: 0;
  width: 24px;
  height: 93px;
  position: relative;
}
</style>
