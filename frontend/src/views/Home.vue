<script setup>
import AppBar from "../components/header/AppBar.vue";
import ProductItem from "../components/home/ProductItem.vue";
import Products from "../components/home/Products.vue";
import Slide from "../components/home/Slide.vue";
import FooterLayout from "../components/common/FooterLayout.vue";
</script>
<template>
  <AppBar />
  <Slide />
  <Products />
  <ProductItem />
  <FooterLayout />
</template>
