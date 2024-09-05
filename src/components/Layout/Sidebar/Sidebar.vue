<template>
  <div>
    <div
      :class="{ '!left-0': showMenu }"
      class="w-[300px] transition-all duration-300 -left-[300px] top-0 z-30 fixed lg:sticky shadow-lg bg-white h-screen overflow-y-auto border-r border-solid"
    >
      <div class="flex flex-col h-full">
        <div class="flex items-center justify-between px-4 pt-4 shrink-0">
          <span class="inline-flex items-center gap-2">
            <img
              src="@/assets/image/logo-black.svg"
              alt="Logo"
              class="w-full max-w-[200px]"
            />
          </span>
        </div>
        <div class="overflow-y-auto mt-4">
          <ul class="list-none p-0 m-0 overflow-hidden px-3">
            <li v-for="i in menus" :key="i.route">
              <RouterLink
                :to="{ name: i.route }"
                v-ripple
                :active-class="
                  i.route !== 'Dashboard' ? 'bg-primary/10 !text-primary' : ''
                "
                :exact-active-class="
                  i.route === 'Dashboard' ? 'bg-primary/10 !text-primary' : ''
                "
                class="flex gap-3 items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
              >
                <i :class="i.icon"></i>
                <span class="font-medium">{{ i.title }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      @click="$emit('update:showMenu', !showMenu)"
      :class="{ '!visible !opacity-100': showMenu }"
      class="fixed w-full h-full bg-black/60 top-0 left-0 z-20 opacity-0 transition-all duration-300 invisible block lg:hidden"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'LayoutSidebar',
})

interface Props {
  showMenu: boolean
}
defineProps<Props>()

interface Emits {
  (e: 'update:showMenu', bool: boolean): void
}
defineEmits<Emits>()

const { t } = useI18n()

interface IMenu {
  icon: string
  title: string
  route: string
}

const menus = computed<IMenu[]>(() => [
  {
    title: t('dashboard'),
    icon: 'pi pi-objects-column',
    route: 'Dashboard',
  },
  {
    title: t('applications') + ' UNIVERSITY',
    icon: 'pi pi-file',
    route: 'Applications',
  },

  {
    title: t('applications') + ' LYCEUM',
    icon: 'pi pi-file',
    route: 'Applications2',
  },
  // {
  //   title: t('powertrain_types'),
  //   icon: 'pi pi-cog',
  //   route: 'PowertrainTypes',
  // },
  // {
  //   title: t('modifications'),
  //   icon: 'pi pi-car',
  //   route: 'Modifications',
  // },
  // {
  //   title: t('type_drives'),
  //   icon: 'pi pi-car',
  //   route: 'TypeDrives',
  // },
  // {
  //   title: t('body_types'),
  //   icon: 'pi pi-car',
  //   route: 'BodyTypes',
  // },
  // {
  //   title: t('banks.loan_terms'),
  //   icon: 'pi pi-credit-card',
  //   route: 'BanksLoanTerms',
  // },
  // {
  //   title: t('banks.income_types'),
  //   icon: 'pi pi-dollar',
  //   route: 'BanksIncomeTypes',
  // },
  // {
  //   title: t('banks.refund_types'),
  //   icon: 'pi pi-undo',
  //   route: 'BanksRefundTypes',
  // },
  // {
  //   title: t('banks.payment_types'),
  //   icon: 'pi pi-credit-card',
  //   route: 'BanksPaymentTypes',
  // },
  // {
  //   title: t('banks.initial_payments'),
  //   icon: 'pi pi-play',
  //   route: 'BanksInitialPayments',
  // },
  // {
  //   title: t('banks.main'),
  //   icon: 'pi pi-building-columns',
  //   route: 'BanksMain',
  // },
  // {
  //   title: t('banners'),
  //   icon: 'pi pi-images',
  //   route: 'Banners',
  // },
  // {
  //   title: t('home_categories'),
  //   icon: 'pi pi-align-center',
  //   route: 'HomeCategories',
  // },
  // {
  //   title: t('brands'),
  //   icon: 'pi pi-building',
  //   route: 'Brands',
  // },
  // {
  //   title: t('cars'),
  //   icon: 'pi pi-car',
  //   route: 'Cars',
  // },
  // {
  //   title: t('regions'),
  //   icon: 'pi pi-map',
  //   route: 'Regions',
  // },
  // {
  //   title: t('districts'),
  //   icon: 'pi pi-map-marker',
  //   route: 'Districts',
  // },
  // {
  //   title: t('branches'),
  //   icon: 'pi pi-building',
  //   route: 'Branches',
  // },
  // {
  //   title: t('roles'),
  //   icon: 'pi pi-id-card',
  //   route: 'Roles',
  // },
  // {
  //   title: t('employees'),
  //   icon: 'pi pi-users',
  //   route: 'Employees',
  // },
  // {
  //   title: t('car_models'),
  //   icon: 'pi pi-car',
  //   route: 'CarModels',
  // },
  // {
  //   title: t('in_stock'),
  //   icon: 'pi pi-car',
  //   route: 'InStock',
  // },
])
</script>
