<template>
  <div class="space-y-6">
    <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
          <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form class="space-y-6" action="#" method="POST">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="company-website" class="block text-sm font-medium text-gray-700"> Website </label>
                <div class="flex mt-1 rounded-md shadow-sm">
                  <span class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"> http:// </span>
                  <input type="text" name="company-website" id="company-website" class="flex-1 block w-full border-gray-300 rounded-none focus:ring-emerald-500 focus:border-emerald-500 rounded-r-md sm:text-sm" placeholder="www.example.com" />
                </div>
              </div>
            </div>

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" placeholder="you@example.com" />
              </div>
              <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"> Photo </label>
              <div class="flex items-center mt-1 space-x-5">
                <span class="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                  <svg class="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">Change</button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
              <div class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative font-medium bg-white rounded-md cursor-pointer text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p class="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                <select id="country" name="country" autocomplete="country-name" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div class="col-span-6">
                <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
          <p class="mt-1 text-sm text-gray-500">Decide which communications you'd like to receive and how.</p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form class="space-y-6" action="#" method="POST">
            <fieldset>
              <legend class="text-base font-medium text-gray-900">By Email</legend>
              <div class="mt-4 space-y-4">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="comments" name="comments" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-emerald-600 focus:ring-emerald-500" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700">Comments</label>
                    <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="candidates" name="candidates" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-emerald-600 focus:ring-emerald-500" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="offers" name="offers" type="checkbox" class="w-4 h-4 border-gray-300 rounded text-emerald-600 focus:ring-emerald-500" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class="font-medium text-gray-700">Offers</label>
                    <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div>
                <legend class="text-base font-medium text-gray-900">Push Notifications</legend>
                <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
              </div>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input id="push-everything" name="push-notifications" type="radio" class="w-4 h-4 border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                  <label for="push-everything" class="block ml-3 text-sm font-medium text-gray-700"> Everything </label>
                </div>
                <div class="flex items-center">
                  <input id="push-email" name="push-notifications" type="radio" class="w-4 h-4 border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                  <label for="push-email" class="block ml-3 text-sm font-medium text-gray-700"> Same as email </label>
                </div>
                <div class="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" class="w-4 h-4 border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                  <label for="push-nothing" class="block ml-3 text-sm font-medium text-gray-700"> No push notifications </label>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">Cancel</button>
      <button type="submit" class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">Save</button>
    </div>
  </div>
</template>