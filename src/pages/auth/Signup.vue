<template>
  <div class="container">
    <div class="logo-container">
      <LoginLogo />
      <div class="logo-text-container">
        <span class="logo-text light">Lift</span>
        <span class="logo-text bold">Link</span>
      </div>
      <div class="slogan">
        <span class="slogan-text">Enhance the Luxury Evolution</span>
      </div>
    </div>
    <div class="form-container">
      <InputField label="Username" v-model:inputValue="username" />
      <div class="error">{{ usernameError }}</div>
      <InputField label="Email" v-model:inputValue="email" />
      <div class="error">{{ emailError }}</div>
      <InputField
        type="password"
        label="Password"
        v-model:inputValue="password"
      />
      <div class="error">{{ passwordError }}</div>
      <div class="spacer"></div>
      <div class="button-container">
        <CustomButton
          @click="signupSrv"
          title="Sign Up"
          :dark="true"
          :loading="loading"
        >
          <template v-slot:icon>
            <LoginSvg />
          </template>
        </CustomButton>
      </div>
      <div class="error">{{ serverError }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginLogo from "../../assets/svgs/LoginLogo.vue";
import InputField from "../../components/InputField.vue";
import CustomButton from "../../components/CustomButton.vue";
import LoginSvg from "../../assets/svgs/login.vue";
import { SIGNUP } from "../../services/gqlSrv/index";

export default defineComponent({
  components: {
    LoginLogo,
    InputField,
    CustomButton,
    LoginSvg,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      usernameError: "",
      emailError: "",
      passwordError: "",
      serverError: "",
      loading: false,
    };
  },
  methods: {
    async signupSrv() {
      this.loading = true;
      this.usernameError = "";
      this.emailError = "";
      this.passwordError = "";
      this.serverError = "";
      if (!this.username) {
        this.usernameError = "Username is required";
        this.loading = false;
      }
      if (!this.email) {
        this.emailError = "Email is required";
        this.loading = false;
      }
      if (!this.password) {
        this.passwordError = "Password is required";
        this.loading = false;
      }
      if (this.username && this.password && this.email) {
        try {
          const {
            data: { register },
          } = await this.$apollo.mutate({
            mutation: SIGNUP,
            variables: {
              input: {
                accountType: "admin",
                username: this.username,
                email: this.email,
                password: this.password,
              },
            },
          });

          if (register) {
            console.log(register, "register");
            if (register.token) {
              await this.$store.dispatch("setToken", register.token);
              console.log(this.$store.state, "token");
              register.token = "";
            }
            if (register.user) {
              console.log(register.user, "user");
              await this.$store.dispatch("setUser", register);
              setTimeout(() => {
                this.loading = false;
                location.href = "/register-dealership";
                console.log(this.$store.state, "user");
              }, 2000);
            }
          }
          return;
        } catch (error) {
          console.log(this.serverError, error, "error");
          this.serverError = (error as Error).message;
        }
        this.loading = false;
      }
    },
  },
});
</script>

<style scoped>
.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(../../assets/pngs/Pattern1.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}

.logo-text-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
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

.slogan {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.slogan-text {
  font-family: "PP Mori", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 132%;
  /* or 16px */
  letter-spacing: -0.02em;
  color: #eae6e5;
}

.forward-password,
.forward-password * {
  box-sizing: border-box;
}

.forward-password {
  color: #63a375;
  text-align: left;
  font: 600 12px/130% "PP Mori", sans-serif;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.spacer {
  height: 20px;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
