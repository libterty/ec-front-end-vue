<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>

    <Spinner v-if="isLoading" />

    <tbody v-else>
      <tr v-for="product in products" :key="product.id">
        <th scope="row">{{ product.id }}</th>
        <td>{{ product.name }}</td>

        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-product', params: {productId: product.id}}"
            class="btn btn-link"
          >
            Show
            <i class="fas fa-external-link-square-alt"></i>
          </router-link>

          <router-link
            :to="{name: 'admin-product-edit', params: {productId: product.id}}"
            class="btn btn-link"
          >
            Edit
            <i class="fas fa-edit"></i>
          </router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteProduct(product.id)"
          >
            Delete
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminProductAPI from '@/apis/admin/adminProduct'
import Spinner from '@/components/Spinner'
import { Toast } from '@/utils/helpers'

export default {
  components: {
    Spinner
  },
  data () {
    return {
      products: [],
      isLoading: false
    }
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts () {
      const vm = this
      try {
        vm.isLoading = true
        const { data, statusText } = await adminProductAPI.getProducts()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        vm.products = data.products
        vm.isLoading = false
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得產品，請稍後再試'
        })
      }
    },
    async deleteProduct (productId) {
      const vm = this
      try {
        const { data, statusText } = await adminProductAPI.deleteProduct(productId)

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        vm.products = vm.products.filter(product => product.id !== productId)
        Toast.fire({
          type: 'success',
          title: '刪除產品成功'
        })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得刪除產品，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.btn-link {
  color: rgba(12, 61, 167, 0.815);
}
</style>
