<template>
  <form method="post" action="#">
    <div class="line">E-posta adresi ile üye ol</div>
    <div class="grid grid-flow-col auto-cols-auto gap-x-4">
      <label for="register_name" class="form-group">
        <input class="form-control" type="text" id="register_name" name="name" placeholder="Ad">
      </label>
      <label for="register_surname" class="form-group">
        <input class="form-control" type="text" id="register_surname" name="surname" placeholder="Soyad">
      </label>
    </div>
    <label for="register_email" class="form-group mb-4">
      <input class="form-control" type="email" id="register_email" name="email" placeholder="E-posta adresi">
    </label>
    <label for="register_password" class="form-group mb-4">
      <input class="form-control" type="password" id="register_password" name="password" placeholder="Şifre">
    </label>
    <div class="flex mb-8">
      <input id="accept" name="accept" type="checkbox" class="form-checkbox h-6 w-6 cursor-pointer rounded-lg border-2 border-gray-400 bg-white mr-4 !ring-0 checked:!bg-orange-500 !ring-transparent !shadow-none transition-colors duration-200">
      <label for="accept" class="block text-sm text-gray-600 leading-5 cursor-pointer select-none">Önemli kampanyalardan haberdar olmak için <b class="hover:underline">Rıza Metni</b> kapsamında elektronik ileti almak istiyorum.</label>
    </div>
    <button class="btn btn-primary" disabled>Üye ol</button>
    <div class="mt-4 text-[11px] text-gray-500 leading-[1.5]">Kişisel verileriniz, <b>Aydınlatma Metni</b> kapsamında işlenmektedir. "Üye ol" veya "Sosyal Hesap" butonlarından birine basarak <b>Üyelik Sözleşmesi</b>'ni, <b>Rıza Metni</b>'ni, <b>Çerez Politikası</b>'nı okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.</div>
  </form>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .line {
    @apply h-[40px] flex items-center text-gray-500 font-semibold text-sm mb-2;

    &::after {
      content: "";
      @apply h-[1px] w-full ml-8 flex-1 bg-gray-200;
    }
  }
</style>
