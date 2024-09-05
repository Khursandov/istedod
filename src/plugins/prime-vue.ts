import Aura from '@primevue/themes/aura'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import type { PrimeVueConfiguration } from 'primevue/config'
import ConfirmDialog from 'primevue/confirmdialog'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import Drawer from 'primevue/drawer'
import FileUpload from 'primevue/fileupload'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import MultiSelect from 'primevue/multiselect'
import Paginator from 'primevue/paginator'
import Password from 'primevue/password'
import Row from 'primevue/row'
import Select from 'primevue/select'
import SelectButton from 'primevue/selectbutton'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import { Component, DefineComponent } from 'vue'

// @ts-ignore
// import Aura from '@/presets/aura'

export const PrimeVueOptions: PrimeVueConfiguration = {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.theme',
      // cssLayer: {
      //   name: 'primevue',
      //   order: 'tailwind-base, primevue, tailwind-utilities',
      // },
    },
  },
}

export const Components: Record<string, Component | DefineComponent> = {
  Button,
  InputText,
  Drawer,
  Avatar,
  Menu,
  DataTable,
  Column,
  ColumnGroup,
  Row,
  Select,
  Paginator,
  Tag,
  Dialog,
  ToggleSwitch,
  SelectButton,
  ConfirmDialog,
  FileUpload,
  InputGroup,
  InputGroupAddon,
  InputMask,
  Password,
  DatePicker,
  MultiSelect,
  Checkbox,
  InputNumber,
  Textarea,
  Tabs,
  TabList,
  Tab,
}
