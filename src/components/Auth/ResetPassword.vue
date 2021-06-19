<template>
  <form @submit.prevent="sendForm()" class="pt-6">
    <div class="text-[28px] font-semibold leading-[42px] text-gray-700">Parola yenileme</div>
    <div class="mt-1 text-sm text-gray-500 mb-8">Parola yenileyebilmeniz için kayıt olurken size verilen kurtarma anahtarına ihtiyacımız var.</div>
    <label for="key" class="form-group mb-8">
      <input
        v-model="$v.key.$model"
        class="form-control"
        :class="{ 'form-control-error' : $v.key.$error }"
        type="text"
        id="key"
        name="key"
        placeholder="Kurtarma anahtarı"
        autocomplete="off">
      <span class="form-help" v-if="$v.key.$error">
        <span v-if="!$v.key.required">Bu alan zorunludur.</span>
        <span v-if="!$v.key.alphaNum">Boşluk veya özel karakter içeremez.</span>
      </span>
    </label>

    <Button class="btn btn-primary mb-5" type="submit" :loading="loading">Devam Et</Button>
    <router-link to="/help/faq" class="text-orange-500 font-semibold text-sm">Yardıma ihtiyacım var</router-link>
  </form>
</template>

<script>
  import Alert from "@/components/Alert";
  import Button from "@/components/Form/Button";

  const { validationMixin } = require('vuelidate')
  const { required, alphaNum } = require('vuelidate/lib/validators')

  export default {
    data() {
      return {
        alert: false,
        loading: false,
        key: "",
      }
    },
    components: {
      Button,
      Alert
    },
    mixins: [validationMixin],
    validations: {
      key: {
        required,
        alphaNum
      }
    },
    methods: {
      sendForm() {
        let that = this;
        if (that.$v.$invalid) return that.$v.$touch();
        that.loading = true;
        that.alert = false;

        setTimeout(() => {
          that.loading = false;
          that.alert = true;
        }, 10000)
      }
    }
  }
</script>
