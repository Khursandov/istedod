<template>
  <DynamicTable
    :can-view="false"
    :can-delete="false"
    :can-edit="false"
    ref="dynamicTable"
    :filter-delay="0"
    url="/api/v1/mobiles/istedod"
    :cols="cols"
    :query="query"
    type="UNIVERSITY"
  >
    <template #td-graduate="item">
      <a
        v-if="item['graduate']"
        :href="
          'https://backend.it-istedod.uz/api/v1' +
          item['graduate'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
    <template #td-scientificArticle="item">
      <a
        v-if="item['scientificArticle']"
        :href="
          'https://backend.it-istedod.uz/api/v1' +
          item['scientificArticle'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
    <template #td-foreignLanguageLevel="item">
      <a
        v-if="item['foreignLanguageLevel']"
        :href="
          'https://backend.it-istedod.uz/api/v1' +
          item['foreignLanguageLevel'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
    <template #td-nationalItCertificate="item">
      <a
        v-if="item['nationalItCertificate']"
        :href="
          'https://backend.it-istedod.uz/api/v1' +
          item['nationalItCertificate'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
    <template #td-subjectOlympiads="item">
      <a
        v-if="item['subjectOlympiads']"
        :href="
          'https://backend.it-istedod.uz/api/v1' +
          item['subjectOlympiads'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
    <template #td-personalEssay="item">
      <a
        v-if="item['personalEssay']"
        :href="
          'https://backend.it-istedod.uz/api/v1' +
          item['personalEssay'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
    <template #td-hackathonItCertificate="item">
      <a
        v-if="item['hackathonItCertificate']"
        :href="
          'https://backend.it-istedod.uz/api/v1' +
          item['hackathonItCertificate'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
    <template #td-icpcCertificate="item">
      <a
        v-if="item['icpcCertificate']"
        :href="
          'https://backend.it-istedod.uz/api/v1' +
          item['icpcCertificate'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
    <template #td-socialActiveCertificate="item">
      <a
        v-if="item['socialActiveCertificate']"
        :href="
          'https://backend.it-istedod.uz/api/v1' +
          item['socialActiveCertificate'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
    <template #td-governmentVolunteerCertificate="item">
      <a
        v-if="item['governmentVolunteerCertificate']"
        :href="
          'https://backend.it-istedod.uz/api/v1' +
          item['governmentVolunteerCertificate'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
    <template #td-limitedPersonDocument="item">
      <a
        v-if="item['limitedPersonDocument']"
        :href="
          '\n' +
          'https://backend.it-istedod.uz/api/v1' +
          item['limitedPersonDocument'] +
          '?unique_dir=' +
          item['uniqueDir']
        "
        class="link"
      >
        File
      </a>
      <span v-else> Ma'lumot yo'q </span>
    </template>
  </DynamicTable>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { ITableCol } from '@/components/DynamicTable/DynamicTable.types.ts'
import DynamicTable from '@/components/DynamicTable/DynamicTable.vue'

const { t, locale } = useI18n()

const query = {}

const cols = computed<ITableCol<any>[]>(() => [
  {
    title: 'F.I.Sh',
    key: 'fish',
  },
  {
    title: 'Tug\'ilgan sana',
    key: 'birthDate',
  },
  {
    title: 'Xudud',
    key: 'address',
  },
  {
    title: 'Tashkilot nomi',
    key: 'organizationName',
  },

  {
    title: 'Kurs',
    key: 'course',
  },
  {
    title: 'PINFL',
    key: 'pinfl',
  },
  {
    title: 'Fakultet nomi',
    key: 'facultyName',
  },
  {
    title: 'Telefon raqam',
    key: 'phone',
  },
  {
    title: 'Bitiruvchi',
    key: 'graduate',
  },
  {
    title: 'Ilmiy maqola',
    key: 'scientificArticle',
  },
  {
    title: 'Chet tilini bilish darajasi',
    key: 'foreignLanguageLevel',
  },
  {
    title: 'Xalqaro IT sertifikat',
    key: 'nationalItCertificate',
  },
  {
    title: 'Olimpiada fan',
    key: 'subjectOlympiads',
  },
  {
    title: 'Shaxsiy insho',
    key: 'personalEssay',
  },
  {
    title: 'Ijtimoiy sertifikat',
    key: 'socialActiveCertificate',
  },
  {
    title: 'Xakaton IT sertifikat',
    key: 'hackathonItCertificate',
  },
  {
    title: 'Davlat sertifikat',
    key: 'governmentVolunteerCertificate',
  },
  {
    title: 'Shaxsiy hujjat',
    key: 'limitedPersonDocument',
  },
])
</script>
