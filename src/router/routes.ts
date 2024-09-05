import { AuthGuard } from '@/router/guards/auth.guard.ts'
import { BranchGuard } from '@/router/guards/branch.guard.ts'
import { BrandGuard } from '@/router/guards/brand.guard.ts'
import { CarGuard } from '@/router/guards/car.guard.ts'
import { CarInfoGuard } from '@/router/guards/car-info.guard.ts'
import { CarModificationGuard } from '@/router/guards/car-modification.guard.ts'
import { EmployeeGuard } from '@/router/guards/employee.guard.ts'
import { TRouteRecordLike } from '@/router/guards/guard.types.ts'
import { MainBankGuard } from '@/router/guards/main-bank.guard.ts'
import { NonAuthGuard } from '@/router/guards/non-auth.guard.ts'

export default [
  {
    path: '/',
    component: () => import('@/layouts/LDefault.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        meta: {
          guards: [AuthGuard.name],
        },
        component: () => import('@/pages/PIndex.vue'),
      },
      // {
      //   path: '/type-drives',
      //   name: 'TypeDrives',
      //   meta: {
      //     guards: [AuthGuard.name],
      //   },
      //   component: () => import('@/pages/TypeDrives/PTypeDrives.vue'),
      // },
      {
        path: '/applications',
        name: 'Applications',
        meta: {
          guards: [AuthGuard.name],
        },
        component: () => import('@/pages/Applications/PApplications.vue'),
      },
      {
        path: '/applications2',
        name: 'Applications2',
        meta: {
          guards: [AuthGuard.name],
        },
        component: () => import('@/pages/Applications/PApplications2.vue'),
      },
      // {
      //   path: '/powertrain-types',
      //   name: 'PowertrainTypes',
      //   meta: {
      //     guards: [AuthGuard.name],
      //   },
      //   component: () => import('@/pages/PowertrainTypes/PPowertrainTypes.vue'),
      // },
      // {
      //   path: '/body-types',
      //   name: 'BodyTypes',
      //   meta: {
      //     guards: [AuthGuard.name],
      //   },
      //   component: () => import('@/pages/BodyTypes/PBodyTypes.vue'),
      // },
      // {
      //   path: '/modifications',
      //   name: 'Modifications',
      //   meta: {
      //     guards: [AuthGuard.name],
      //   },
      //   component: () => import('@/pages/Modifications/PModifications.vue'),
      // },
      // {
      //   path: '/banks',
      //   meta: {
      //     guards: [AuthGuard.name],
      //   },
      //   children: [
      //     {
      //       path: 'loan-terms',
      //       name: 'BanksLoanTerms',
      //       component: () => import('@/pages/Banks/LoanTerms/PLoanTerms.vue'),
      //     },
      //     {
      //       path: 'income-types',
      //       name: 'BanksIncomeTypes',
      //       component: () =>
      //         import('@/pages/Banks/IncomeTypes/PIncomeTypes.vue'),
      //     },
      //     {
      //       path: 'refund-types',
      //       name: 'BanksRefundTypes',
      //       component: () =>
      //         import('@/pages/Banks/RefundTypes/PRefundTypes.vue'),
      //     },
      //     {
      //       path: 'payment-types',
      //       name: 'BanksPaymentTypes',
      //       component: () =>
      //         import('@/pages/Banks/PaymentTypes/PPaymentTypes.vue'),
      //     },
      //     {
      //       path: 'initial-payments',
      //       name: 'BanksInitialPayments',
      //       component: () =>
      //         import('@/pages/Banks/InitialPayments/PInitialPayments.vue'),
      //     },
      //     {
      //       path: 'main',
      //       children: [
      //         {
      //           path: '',
      //           name: 'BanksMain',
      //           component: () => import('@/pages/Banks/Main/PBanksMain.vue'),
      //         },
      //         {
      //           path: 'create',
      //           name: 'BanksMainCreate',
      //           component: () =>
      //             import('@/pages/Banks/Main/PBanksMainForm.vue'),
      //         },
      //         {
      //           path: 'update/:id',
      //           name: 'BanksMainUpdate',
      //           meta: {
      //             guards: [AuthGuard.name, MainBankGuard.name],
      //           },
      //           component: () =>
      //             import('@/pages/Banks/Main/PBanksMainForm.vue'),
      //         },
      //         {
      //           path: ':id',
      //           name: 'BanksMainSingle',
      //           meta: {
      //             guards: [AuthGuard.name, MainBankGuard.name],
      //           },
      //           component: () =>
      //             import('@/pages/Banks/Main/PBanksMainForm.vue'),
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   path: '/banners',
      //   name: 'Banners',
      //   meta: {
      //     guards: [AuthGuard.name],
      //   },
      //   component: () => import('@/pages/Banners/PBanners.vue'),
      // },
      // {
      //   path: '/home-categories',
      //   name: 'HomeCategories',
      //   meta: {
      //     guards: [AuthGuard.name],
      //   },
      //   component: () => import('@/pages/HomeCategories/PHomeCategories.vue'),
      // },
      //
      // {
      //   path: '/brands',
      //   children: [
      //     {
      //       path: '',
      //       name: 'Brands',
      //       meta: {
      //         guards: [AuthGuard.name],
      //       },
      //       component: () => import('@/pages/Brands/PBrands.vue'),
      //     },
      //     {
      //       path: 'create',
      //       name: 'BrandCreate',
      //       meta: {
      //         guards: [AuthGuard.name],
      //       },
      //       component: () => import('@/pages/Brands/PBrandForm.vue'),
      //     },
      //     {
      //       path: 'update/:id',
      //       name: 'BrandUpdate',
      //       meta: {
      //         guards: [AuthGuard.name, BrandGuard.name],
      //       },
      //       component: () => import('@/pages/Brands/PBrandForm.vue'),
      //     },
      //     {
      //       path: ':id',
      //       name: 'BrandSingle',
      //       meta: {
      //         guards: [AuthGuard.name, BrandGuard.name],
      //       },
      //       component: () => import('@/pages/Brands/PBrandForm.vue'),
      //     },
      //   ],
      // },
      //
      // {
      //   path: '/cars',
      //   children: [
      //     {
      //       path: '',
      //       name: 'Cars',
      //       meta: {
      //         guards: [AuthGuard.name],
      //       },
      //       component: () => import('@/pages/Cars/PCars.vue'),
      //     },
      //     {
      //       path: 'create',
      //       name: 'CarCreate',
      //       meta: {
      //         guards: [AuthGuard.name],
      //       },
      //       component: () => import('@/pages/Cars/PCarCreate.vue'),
      //     },
      //     {
      //       path: 'update/:id',
      //       name: 'CarUpdate',
      //       meta: {
      //         guards: [AuthGuard.name, CarGuard.name],
      //       },
      //       component: () => import('@/pages/Cars/PCarUpdate.vue'),
      //     },
      //     {
      //       path: 'car/:id',
      //       meta: {
      //         guards: [AuthGuard.name, CarGuard.name],
      //       },
      //       component: () => import('@/pages/Cars/Single/PCarSingle.vue'),
      //       children: [
      //         {
      //           path: '',
      //           name: 'CarSingle',
      //           component: () =>
      //             import('@/pages/Cars/Single/PCarSingleIndex.vue'),
      //         },
      //         {
      //           path: 'modifications',
      //           children: [
      //             {
      //               path: '',
      //               name: 'CarModifications',
      //               component: () =>
      //                 import(
      //                   '@/pages/Cars/Single/Modifications/PCarModifications.vue'
      //                 ),
      //             },
      //             {
      //               path: 'update/:modId',
      //               name: 'CarModificationUpdate',
      //               meta: {
      //                 guards: [
      //                   AuthGuard.name,
      //                   CarGuard.name,
      //                   CarModificationGuard.name,
      //                 ],
      //               },
      //               component: () =>
      //                 import(
      //                   '@/pages/Cars/Single/Modifications/PCarModificationUpdate.vue'
      //                 ),
      //             },
      //             {
      //               path: ':modId',
      //               name: 'CarModificationSingle',
      //               meta: {
      //                 guards: [
      //                   AuthGuard.name,
      //                   CarGuard.name,
      //                   CarModificationGuard.name,
      //                 ],
      //               },
      //               component: () =>
      //                 import(
      //                   '@/pages/Cars/Single/Modifications/PCarModificationSingle.vue'
      //                 ),
      //             },
      //             {
      //               path: 'create',
      //               name: 'CarModificationCreate',
      //               component: () =>
      //                 import(
      //                   '@/pages/Cars/Single/Modifications/PCarModificationCreate.vue'
      //                 ),
      //             },
      //           ],
      //         },
      //         {
      //           path: 'colors',
      //           name: 'CarColors',
      //           component: () =>
      //             import('@/pages/Cars/Single/Colors/PCarColors.vue'),
      //         },
      //         {
      //           path: 'infos',
      //           children: [
      //             {
      //               path: '',
      //               name: 'CarInfos',
      //               component: () =>
      //                 import('@/pages/Cars/Single/Infos/PCarInfos.vue'),
      //             },
      //             {
      //               path: ':infoId/sub',
      //               name: 'CarSubInfos',
      //               meta: {
      //                 guards: [
      //                   AuthGuard.name,
      //                   CarGuard.name,
      //                   CarInfoGuard.name,
      //                 ],
      //               },
      //               component: () =>
      //                 import('@/pages/Cars/Single/Infos/PCarSubInfos.vue'),
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },

      //   {
      //     path: '/regions',
      //     name: 'Regions',
      //     meta: {
      //       guards: [AuthGuard.name],
      //     },
      //     component: () => import('@/pages/Regions/PRegions.vue'),
      //   },
      //   {
      //     path: '/districts',
      //     name: 'Districts',
      //     meta: {
      //       guards: [AuthGuard.name],
      //     },
      //     component: () => import('@/pages/Districts/PDistricts.vue'),
      //   },
      //   {
      //     path: '/branches',
      //     meta: {
      //       guards: [AuthGuard.name],
      //     },
      //     children: [
      //       {
      //         path: '',
      //         name: 'Branches',
      //         component: () => import('@/pages/Branches/PBranches.vue'),
      //       },
      //       {
      //         path: 'create',
      //         name: 'BranchCreate',
      //         component: () => import('@/pages/Branches/PBranchForm.vue'),
      //       },
      //       {
      //         path: 'update/:id',
      //         name: 'BranchUpdate',
      //         meta: {
      //           guards: [AuthGuard.name, BranchGuard.name],
      //         },
      //         component: () => import('@/pages/Branches/PBranchForm.vue'),
      //       },
      //       {
      //         path: ':id',
      //         name: 'BranchSingle',
      //         meta: {
      //           guards: [AuthGuard.name, BranchGuard.name],
      //         },
      //         component: () => import('@/pages/Branches/PBranchForm.vue'),
      //       },
      //     ],
      //   },
      //   {
      //     path: '/employees',
      //     meta: {
      //       guards: [AuthGuard.name],
      //     },
      //     children: [
      //       {
      //         path: '',
      //         name: 'Employees',
      //         component: () => import('@/pages/Employees/PEmployees.vue'),
      //       },
      //       {
      //         path: 'create',
      //         name: 'EmployeeCreate',
      //         component: () => import('@/pages/Employees/PEmployeeForm.vue'),
      //       },
      //       {
      //         path: 'update/:id',
      //         name: 'EmployeeUpdate',
      //         meta: {
      //           guards: [AuthGuard.name, EmployeeGuard.name],
      //         },
      //         component: () => import('@/pages/Employees/PEmployeeForm.vue'),
      //       },
      //       {
      //         path: ':id',
      //         name: 'EmployeeSingle',
      //         meta: {
      //           guards: [AuthGuard.name, EmployeeGuard.name],
      //         },
      //         component: () => import('@/pages/Employees/PEmployeeForm.vue'),
      //       },
      //     ],
      //   },
      //   {
      //     path: '/roles',
      //     name: 'Roles',
      //     meta: {
      //       guards: [AuthGuard.name],
      //     },
      //     component: () => import('@/pages/Roles/PRoles.vue'),
      //   },
      // {
      //   path: '/profile',
      //   name: 'Profile',
      //   meta: {
      //     guards: [AuthGuard.name],
      //   },
      //   component: () => import('@/pages/Profile/PProfile.vue'),
      // },
      // {
      //   path: '/car-models',
      //   children: [
      //     {
      //       path: '',
      //       name: 'CarModels',
      //       meta: {
      //         guards: [AuthGuard.name],
      //       },
      //       component: () => import('@/pages/CarModels/PCarModels.vue'),
      //     },
      //     {
      //       path: 'modifications/:id',
      //       name: 'CarModification',
      //       meta: {
      //         guards: [AuthGuard.name],
      //       },
      //       component: () => import('@/pages/CarModels/PCarModification.vue'),
      //     },
      //     {
      //       path: 'colors/:id',
      //       name: 'CarColors',
      //       meta: {
      //         guards: [AuthGuard.name],
      //       },
      // component: () => import('@/pages/CarModels/PCarColors.vue'),
      // },
      // ],
      // },
      // {
      // path: '/in-stock',
      // name: 'InStock',
      //     meta: {
      //       guards: [AuthGuard.name],
      //     },
      //     component: () => import('@/pages/InStock/PInStock.vue'),
      //   },
    ],
  },
  // Auth layout
  {
    path: '/auth',
    component: () => import('@/layouts/LAuth.vue'),
    meta: {
      guards: [NonAuthGuard.name],
    },
    children: [
      {
        path: 'login',
        name: 'AuthLogin',
        component: () => import('@/pages/Auth/PLogin.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
] satisfies TRouteRecordLike[]
