import React from 'react'

const Account = () => {
  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-xl m-[60px]">
      <h2 className="text-xl font-semibold text-red-500 mb-4">Profile</h2>
      <form className=''>
        <div className="grid grid-cols-2 gap-4 mb-4 ">
          <div>
            <label className="block text-sm font-medium">First name</label>
            <input
              type="text"
              name="firstName"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last name</label>
            <input
              type="text"
              name="lastName"
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Email address</label>
            <input
              type="email"
              name="email"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Street address</label>
            <input
              type="text"
              name="address"
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <h3 className="text-md font-semibold mb-2">Password Changes</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium">Current password</label>
          <input
            type="password"
            name="currentPassword"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">New password</label>
            <input
              type="password"
              name="newPassword"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Confirm new password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button type="button" className="text-gray-500">Cancel</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">Save Changes</button>
        </div>
      </form>
    </div>
  )
}

export default Account