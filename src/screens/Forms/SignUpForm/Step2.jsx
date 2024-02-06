const Step2 = ({formData, handleInputChange}) => {
    
    
    return ( 
        <>
        <div className="mb-4">
            <label htmlFor="activityLevel" className="block mb-2 text-sm font-medium text-gray-700">Activity Level</label>
            <select
              id="activityLevel"
              name="activityLevel"
              value={formData.activityLevel || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            >
              {/* Add activity level options here */}
            </select>
            <p className="mt-1 text-xs text-red-500"></p>
          </div>
          <div className="mb-4">
            <label htmlFor="activityLevel" className="block mb-2 text-sm font-medium text-gray-700">Activity Level</label>
            <select
              id="activityLevel"
              name="activityLevel"
              value={formData.activityLevel || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            >
              {/* Add activity level options here */}
            </select>
            <p className="mt-1 text-xs text-red-500"></p>
          </div>
          <div className="mb-4">
            <label htmlFor="activityLevel" className="block mb-2 text-sm font-medium text-gray-700">Activity Level</label>
            <select
              id="activityLevel"
              name="activityLevel"
              value={formData.activityLevel || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            >
              {/* Add activity level options here */}
            </select>
            <p className="mt-1 text-xs text-red-500"></p>
          </div>
          <div className="mb-4">
            <label htmlFor="activityLevel" className="block mb-2 text-sm font-medium text-gray-700">Activity Level</label>
            <select
              id="activityLevel"
              name="activityLevel"
              value={formData.activityLevel || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            >
              {/* Add activity level options here */}
            </select>
            <p className="mt-1 text-xs text-red-500"></p>
          </div>

          <div className="mb-4">
            <label htmlFor="fitnessGoal" className="block mb-2 text-sm font-medium text-gray-700">Fitness Goal</label>
            <select
              id="fitnessGoal"
              name="fitnessGoal"
              value={formData.fitnessGoal || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            >
              {/* Add fitness goal options here */}
            </select>
            <p className="mt-1 text-xs text-red-500"></p>
          </div>

          <div className="mb-4">
            <label htmlFor="dietaryPreferences" className="block mb-2 text-sm font-medium text-gray-700">Dietary Preferences</label>
            <select
              id="dietaryPreferences"
              name="dietaryPreferences"
              value={formData.dietaryPreferences || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            >
              {/* Add dietary preferences options here */}
            </select>
            <p className="mt-1 text-xs text-red-500"></p>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password || ''}
              onChange={handleInputChange}
              placeholder="Enter password"
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            />
            <p className="mt-1 text-xs text-red-500"></p>
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword || ''}
              onChange={handleInputChange}
              placeholder="Confirm password"
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            />
            <p className="mt-1 text-xs text-red-500"></p>
          </div>
        </>
     );
}
 
export default Step2;