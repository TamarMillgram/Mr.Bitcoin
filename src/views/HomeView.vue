<template>
  <main class="home">
    <img
      class="robo-img"
      :src="`https://robohash.org/${user._id}?set=set1&size=200x200`"
      :alt="user.name"
    />
    <div>
      <h1>{{ this.user.name }}</h1>
      <h3>
        Balance: <span>{{ this.user.balance }}$</span>
      </h3>
      <h4>
        Bitcoin Rate: <span>{{ this.rate }}</span>
      </h4>
    </div>
  </main>
</template>

<script>
import { userService } from "../services/userService";
import { bitcoinService } from "../services/bitcoinService";
export default {
  data() {
    return {
      user: null,
      rate: null,
    };
  },
  created() {
    this.user = userService.getUser();
    this.rate = bitcoinService.getRate();
  },
};
</script>
<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-block-start: 2em;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  max-width: 500px;
  height: 200px;

  img {
    height: 150px;
    width: 150px;
  }

  h3 {
    font-weight: 700;
  }
  h4 {
    font-weight: 700;
  }
  h1 {
    font-weight: 500;
  }
}
</style>
