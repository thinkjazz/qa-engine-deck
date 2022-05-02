<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"> Badge </span>
  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800"> Badge </span>
  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"> Badge </span>
  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"> Badge </span>
  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"> Badge </span>
  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"> Badge </span>
  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800"> Badge </span>
  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800"> Badge </span>

  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
    <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-emerald-400" fill="currentColor" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    Small
  </span>
  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
    <svg class="-ml-1 mr-1.5 h-2 w-2 text-emerald-400" fill="currentColor" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    Large
  </span>

 <span class="inline-flex items-center py-0.5 pl-2 pr-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
    Small
    <button type="button" class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-emerald-400 hover:bg-emerald-200 hover:text-emerald-500 focus:outline-none focus:bg-emerald-500 focus:text-white">
      <span class="sr-only">Remove small option</span>
      <svg class="w-2 h-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
      </svg>
    </button>
  </span>
  <span class="inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-emerald-100 text-emerald-700">
    Large
    <button type="button" class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-emerald-400 hover:bg-emerald-200 hover:text-emerald-500 focus:outline-none focus:bg-emerald-500 focus:text-white">
      <span class="sr-only">Remove large option</span>
      <svg class="w-2 h-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
      </svg>
    </button>
  </span>
</template>