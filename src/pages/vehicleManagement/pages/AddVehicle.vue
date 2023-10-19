<template>
  <BorderedContainer class="custom-container">
    <div class="vehicle-container">
      <Titles title="Valet Vehicle Details" />
      <div class="spacer"></div>
      <div class="details-container">
        <div class="picture-upload-container">
          <div class="picture-upload">
            <img src="https://via.placeholder.com/150" />
          </div>
          <div class="upload-button">
            <CustomButton title="Upload" />
          </div>
        </div>
        <div class="form-container">
          <div class="form-element">
            <InputField label="Vehicle Make" />
          </div>
          <div class="form-element">
            <InputField label="Vehicle Model" />
          </div>
          <div class="form-element">
            <InputField label="Vehicle Year" />
          </div>
          <div class="form-element">
            <InputField label="Vehicle Color" />
          </div>
          <div class="form-element">
            <InputField label="Vehicle License Plate" />
          </div>
          <div class="form-element">
            <InputField label="Vehicle VIN" />
          </div>
          <div class="form-element">
            <InputField label="Vehicle Type" />
          </div>
          <div class="form-element">
            <InputField label="Vehicle Mileage" />
          </div>
          <div class="form-element">
            <InputField label="Vehicle Fuel Type" />
          </div>
        </div>
      </div>
    </div>
  </BorderedContainer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BorderedContainer from "../../../components/BorderedContainer.vue";
import Titles from "../../../components/Titles.vue";
import CustomButton from "../../../components/CustomButton.vue";
import InputField from "../../../components/InputField.vue";

export default defineComponent({
  components: {
    BorderedContainer,
    Titles,
    CustomButton,
    InputField,
  },
  data() {
    return {
    };
  },
  async mounted() {
  },
  methods: {
  },
});
</script>
<style scoped>
.custom-container {
  margin-bottom: 20px;
}

.vehicle-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.spacer {
  height: 20px;
}

.details-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.picture-upload-container {
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.picture-upload {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #eae6e5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.picture-upload img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.upload-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  max-height: 600px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  flex-shrink: 0;
}

.form-element {
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>