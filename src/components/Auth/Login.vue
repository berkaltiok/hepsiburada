<template>
  <form method="post" action="#">
    <label for="login_email" class="form-group">
      <input class="form-control" type="email" id="login_email" name="email" placeholder="E-posta adresi">
    </label>
    <label for="login_password" class="form-group mb-8">
      <input class="form-control" type="password" id="login_password" name="password" placeholder="Şifre">
    </label>
    <button class="btn btn-primary mb-5">Giriş yap</button>
    <router-link to="/" class="text-orange-500 hover:text-orange-600 font-semibold text-sm">Şifremi unuttum</router-link>
  </form>
</template>

<script>
  export default {}
</script>
