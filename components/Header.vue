<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between py-[30px]"
      aria-label="Global"
    >
      <div class="flex items-center">
        <a href="#" class="h-[20px] hidden lg:flex mr-10">
          <span class="sr-only">Your Company</span>
          <img class="text-sm w-auto" src="@/assets/svg/logo.svg" alt="" />
        </a>
        <PopoverGroup class="hidden lg:flex lg:gap-x-9">
          <a href="#" class="text-lg font-medium leading-6 text-maketer"
            >Home</a
          >
          <a href="#" class="text-lg font-medium leading-6 text-gray-900"
            >Job</a
          >
          <a href="#" class="text-lg font-medium leading-6 text-gray-900"
            >Hiring</a
          >
          <a href="#" class="text-lg font-medium leading-6 text-gray-900"
            >About</a
          >
        </PopoverGroup>
        <label class="relative hidden lg:block ml-9">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2"
            ><img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjcgMTQuNjY2N0wxMy4zMzMzIDEzLjMzMzRNNy42NjY2OCAxNEM4LjQ5ODM4IDE0IDkuMzIxOTQgMTMuODM2MiAxMC4wOTAzIDEzLjUxNzlDMTAuODU4NyAxMy4xOTk3IDExLjU1NjkgMTIuNzMzMiAxMi4xNDUgMTIuMTQ1QzEyLjczMzEgMTEuNTU2OSAxMy4xOTk2IDEwLjg1ODggMTMuNTE3OSAxMC4wOTA0QzEzLjgzNjIgOS4zMjE5NyAxNCA4LjQ5ODQxIDE0IDcuNjY2NzFDMTQgNi44MzUgMTMuODM2MiA2LjAxMTQ0IDEzLjUxNzkgNS4yNDMwNUMxMy4xOTk2IDQuNDc0NjUgMTIuNzMzMSAzLjc3NjQ3IDEyLjE0NSAzLjE4ODM2QzExLjU1NjkgMi42MDAyNiAxMC44NTg3IDIuMTMzNzUgMTAuMDkwMyAxLjgxNTQ3QzkuMzIxOTQgMS40OTcxOSA4LjQ5ODM4IDEuMzMzMzcgNy42NjY2OCAxLjMzMzM3QzUuOTg2OTcgMS4zMzMzNyA0LjM3NjA2IDIuMDAwNjMgMy4xODgzMyAzLjE4ODM2QzIuMDAwNiA0LjM3NjA5IDEuMzMzMzQgNS45ODcgMS4zMzMzNCA3LjY2NjcxQzEuMzMzMzQgOS4zNDY0MSAyLjAwMDYgMTAuOTU3MyAzLjE4ODMzIDEyLjE0NUM0LjM3NjA2IDEzLjMzMjggNS45ODY5NyAxNCA3LjY2NjY4IDE0WiIgc3Ryb2tlPSIjRDlEOUQ5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt=""
              class="ml-4 mr-3"
          /></span>
          <input
            placeholder="Find Marketer"
            type="text"
            name="search"
            class="placeholder:text-nero-base bg-white w-full lg:w-[180px] border border-nero-light rounded-full py-3 pl-12 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        /></label>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 mr-4"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex lg:justify-end">
        <button class="btn-primary">Login</button>
        <button class="btn-white lg:ml-3.5">Register</button>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="@/assets/svg/logo.svg" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >Features</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >Marketplace</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >Company</a
              >
            </div>
            <div class="py-6 flex justify-around">
              <button class="btn-primary">Login</button>
              <button class="btn-white lg:ml-3.5">Register</button>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);
</script>
