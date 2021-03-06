<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="product.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select id="categoryId" v-model="product.categoryId" class="form-control" name="categoryId">
        <option value selected disabled>-- 請選擇 --</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >{{ category.name }}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="cost_price">Cost Price</label>
      <input
        id="cost_price"
        v-model.number="product.cost_price"
        type="number"
        class="form-control"
        name="cost_price"
      />
    </div>

    <div class="form-group">
      <label for="origin_price">Origin Price</label>
      <input
        id="origin_price"
        v-model.number="product.origin_price"
        type="number"
        class="form-control"
        name="origin_price"
      />
    </div>

    <div class="form-group">
      <label for="sell_price">Sell Price</label>
      <input
        id="sell_price"
        v-model.number="product.sell_price"
        type="number"
        class="form-control"
        name="sell_price"
      />
    </div>

    <div class="form-group">
      <label for="stock_quantity">Stock Quantity</label>
      <input
        id="stock_quantity"
        v-model.number="product.stock_quantity"
        type="number"
        class="form-control"
        name="stock_quantity"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="product.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          :value="true"
          v-model="product.product_status"
          id="product_status1"
          name="product_status"
        />
        <label class="form-check-label" for="product_status1">啟用</label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          :value="false"
          v-model="product.product_status"
          id="product_status2"
          name="product_status"
        />
        <label class="form-check-label" for="product_status2">不啟用</label>
      </div>
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="product.image"
        :src="product.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      />

      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button
      v-if="editPage"
      type="submit"
      class="btn btn-primary"
      :disabled="isProcessing"
    >{{ isProcessing ? "處理中..." : "更新商品" }}</button>
    <button
      v-else
      type="submit"
      class="btn btn-primary"
      :disabled="isProcessing"
    >{{ isProcessing ? "處理中..." : "新增商品" }}</button>
  </form>
</template>

<script>
import adminCategoryAPI from '@/apis/admin/adminCategory'
import { Toast } from '@/utils/helpers'

export default {
  props: {
    initialProduct: {
      type: Object,
      default: () => ({})
    },
    isProcessing: {
      type: Boolean,
      default: false
    },
    editPage: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      product: {
        name: '',
        description: '',
        stock_quantity: 0,
        cost_price: 0,
        origin_price: 0,
        sell_price: 0,
        product_status: false,
        image: '',
        categoryId: ''
      },
      categories: [],
      isLoading: true
    }
  },
  watch: {
    initialProduct (product) {
      this.product = {
        ...this.product,
        ...product
      }
    }
  },
  created () {
    this.fetchCategories()
    this.product = {
      ...this.product,
      ...this.initialProduct
    }
  },
  methods: {
    async fetchCategories () {
      const vm = this
      try {
        const { data, statusText } = await adminCategoryAPI.getCategories()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        vm.categories = data.categories
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: ' 無法取得餐廳類別，請稍後再試'
        })
      }
    },
    handleFileChange (e) {
      const files = e.target.files
      if (!files.length) return // 如果沒有檔案則離開此函式
      // 否則產生預覽圖...
      const imageURL = window.URL.createObjectURL(files[0])
      this.product.image = imageURL
    },
    handleSubmit (e) {
      if (!this.product.name) {
        Toast.fire({
          type: 'warning',
          title: '請填寫產品名稱'
        })
        return
      }

      if (!this.product.categoryId) {
        Toast.fire({
          type: 'warning',
          title: '請選擇產品類別'
        })
        return
      }

      if (this.product.cost_price < 0 || this.product.origin_price < 0 || this.product.sell_price < 0) {
        Toast.fire({
          type: 'warning',
          title: '請填寫大於 0 的價格'
        })
        return
      }

      if (this.product.stock_quantity < 0) {
        Toast.fire({
          type: 'warning',
          title: '請填寫大於 0 的庫存'
        })
        return
      }

      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  }
}
</script>
