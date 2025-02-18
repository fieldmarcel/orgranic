// import React, { useState, useRef } from 'react';
// import { User, Mail, Lock, Bell, Camera, Globe, LogOut, Moon, Sun, ChefHat, Utensils, Edit2 } from 'lucide-react';

// const UserSettings = () => {
//   const [activeTab, setActiveTab] = useState('profile');
//   const [darkMode, setDarkMode] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: 'Jamie Smith',
//     username: 'chef_jamie',
//     email: 'jamie.smith@example.com',
//     phone: '+1 (555) 123-4567',
//     bio: 'Passionate home cook exploring flavors from around the world. Love experimenting with fusion recipes and sharing my culinary adventures!',
//     location: 'San Francisco, CA',
//     profileImage: '/api/placeholder/150/150',
//     coverImage: '/api/placeholder/1200/300',
//     notificationSettings: {
//       emailNotifications: true,
//       newRecipeAlerts: true,
//       weeklyNewsletter: true,
//       commentReplies: true,
//       directMessages: true,
//     },
//     privacySettings: {
//       publicProfile: true,
//       showEmail: false,
//       showLocation: true,
//     },
//     socialLinks: {
//       instagram: '@chef_jamie',
//       youtube: 'ChefJamieKitchen',
//       tiktok: '@chef_jamie',
//       facebook: '',
//     },
//     dietaryPreferences: ['Vegetarian', 'Gluten-Free'],
//     favoriteCategories: ['Italian', 'Asian', 'Desserts']
//   });
  
//   const fileInputRef = useRef(null);
//   const coverInputRef = useRef(null);
  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData({ ...profileData, [name]: value });
//   };

//   const handleNotificationChange = (setting) => {
//     setProfileData({
//       ...profileData,
//       notificationSettings: {
//         ...profileData.notificationSettings,
//         [setting]: !profileData.notificationSettings[setting]
//       }
//     });
//   };

//   const handlePrivacyChange = (setting) => {
//     setProfileData({
//       ...profileData,
//       privacySettings: {
//         ...profileData.privacySettings,
//         [setting]: !profileData.privacySettings[setting]
//       }
//     });
//   };

//   const handleSocialChange = (platform, value) => {
//     setProfileData({
//       ...profileData,
//       socialLinks: {
//         ...profileData.socialLinks,
//         [platform]: value
//       }
//     });
//   };

//   const handleProfileImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleCoverImageClick = () => {
//     coverInputRef.current.click();
//   };

//   const handleProfileImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       // In a real app, you'd upload this to your server
//       setProfileData({
//         ...profileData,
//         profileImage: URL.createObjectURL(e.target.files[0])
//       });
//     }
//   };

//   const handleCoverImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       // In a real app, you'd upload this to your server
//       setProfileData({
//         ...profileData,
//         coverImage: URL.createObjectURL(e.target.files[0])
//       });
//     }
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   // Function to handle dietary preferences
//   const toggleDietaryPreference = (preference) => {
//     if (profileData.dietaryPreferences.includes(preference)) {
//       setProfileData({
//         ...profileData,
//         dietaryPreferences: profileData.dietaryPreferences.filter(p => p !== preference)
//       });
//     } else {
//       setProfileData({
//         ...profileData,
//         dietaryPreferences: [...profileData.dietaryPreferences, preference]
//       });
//     }
//   };

//   // Function to handle favorite categories
//   const toggleFavoriteCategory = (category) => {
//     if (profileData.favoriteCategories.includes(category)) {
//       setProfileData({
//         ...profileData,
//         favoriteCategories: profileData.favoriteCategories.filter(c => c !== category)
//       });
//     } else {
//       setProfileData({
//         ...profileData,
//         favoriteCategories: [...profileData.favoriteCategories, category]
//       });
//     }
//   };

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'profile':
//         return (
//           <div className="space-y-8">
//             {/* Cover Image */}
//             <div className="relative h-64 rounded-lg overflow-hidden bg-gray-200">
//               <img 
//                 src={profileData.coverImage} 
//                 alt="Cover" 
//                 className="w-full h-full object-cover" 
//               />
//               <button 
//                 className="absolute bottom-4 right-4 p-2 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100"
//                 onClick={handleCoverImageClick}
//               >
//                 <Camera size={20} className="text-gray-700" />
//               </button>
//               <input
//                 type="file"
//                 ref={coverInputRef}
//                 onChange={handleCoverImageChange}
//                 className="hidden"
//                 accept="image/*"
//               />
//             </div>
            
//             {/* Profile Image */}
//             <div className="flex justify-center -mt-20">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
//                   <img 
//                     src={profileData.profileImage} 
//                     alt="Profile" 
//                     className="w-full h-full object-cover" 
//                   />
//                 </div>
//                 <button 
//                   className="absolute bottom-0 right-0 p-2 bg-teal-500 rounded-full text-white hover:bg-teal-600"
//                   onClick={handleProfileImageClick}
//                 >
//                   <Camera size={16} />
//                 </button>
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   onChange={handleProfileImageChange}
//                   className="hidden"
//                   accept="image/*"
//                 />
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={profileData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
//                   Username
//                 </label>
//                 <div className="flex">
//                   <span className="inline-flex items-center px-3 py-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
//                     @
//                   </span>
//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     value={profileData.username}
//                     onChange={handleInputChange}
//                     className="flex-1 p-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={profileData.email}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={profileData.phone}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//               </div>
              
//               <div className="md:col-span-2">
//                 <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
//                   Location
//                 </label>
//                 <div className="flex">
//                   <span className="inline-flex items-center px-3 py-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
//                     <Globe size={18} />
//                   </span>
//                   <input
//                     id="location"
//                     name="location"
//                     type="text"
//                     value={profileData.location}
//                     onChange={handleInputChange}
//                     className="flex-1 p-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     placeholder="City, Country"
//                   />
//                 </div>
//               </div>
              
//               <div className="md:col-span-2">
//                 <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
//                   Bio
//                 </label>
//                 <textarea
//                   id="bio"
//                   name="bio"
//                   rows="4"
//                   value={profileData.bio}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                   placeholder="Tell us about yourself and your culinary journey..."
//                 />
//                 <p className="text-sm text-gray-500 mt-1">
//                   {200 - profileData.bio.length} characters remaining
//                 </p>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-medium text-gray-900 mb-4">Social Media Links</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
//                     Instagram
//                   </label>
//                   <div className="flex">
//                     <span className="inline-flex items-center px-3 py-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
//                       @
//                     </span>
//                     <input
//                       id="instagram"
//                       type="text"
//                       value={profileData.socialLinks.instagram.replace('@', '')}
//                       onChange={(e) => handleSocialChange('instagram', '@' + e.target.value)}
//                       className="flex-1 p-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label htmlFor="youtube" className="block text-sm font-medium text-gray-700 mb-1">
//                     YouTube
//                   </label>
//                   <input
//                     id="youtube"
//                     type="text"
//                     value={profileData.socialLinks.youtube}
//                     onChange={(e) => handleSocialChange('youtube', e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     placeholder="Channel name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="tiktok" className="block text-sm font-medium text-gray-700 mb-1">
//                     TikTok
//                   </label>
//                   <div className="flex">
//                     <span className="inline-flex items-center px-3 py-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
//                       @
//                     </span>
//                     <input
//                       id="tiktok"
//                       type="text"
//                       value={profileData.socialLinks.tiktok.replace('@', '')}
//                       onChange={(e) => handleSocialChange('tiktok', '@' + e.target.value)}
//                       className="flex-1 p-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
//                     Facebook
//                   </label>
//                   <input
//                     id="facebook"
//                     type="text"
//                     value={profileData.socialLinks.facebook}
//                     onChange={(e) => handleSocialChange('facebook', e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     placeholder="Profile name or URL"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-medium text-gray-900 mb-4">Culinary Preferences</h3>
              
//               <div className="mb-6">
//                 <h4 className="text-md font-medium text-gray-800 mb-3">Dietary Preferences</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Keto', 'Paleo', 'Low-Carb'].map(pref => (
//                     <button
//                       key={pref}
//                       type="button"
//                       onClick={() => toggleDietaryPreference(pref)}
//                       className={`px-4 py-2 rounded-full text-sm ${
//                         profileData.dietaryPreferences.includes(pref)
//                           ? 'bg-teal-100 text-teal-800 border-2 border-teal-400'
//                           : 'bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200'
//                       }`}
//                     >
//                       {pref}
//                     </button>
//                   ))}
//                 </div>
//               </div>
              
//               <div>
//                 <h4 className="text-md font-medium text-gray-800 mb-3">Favorite Categories</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {['Italian', 'Asian', 'Mexican', 'Mediterranean', 'Desserts', 'Breakfast', 'Snacks', 'Drinks', 'Baking', 'BBQ'].map(cat => (
//                     <button
//                       key={cat}
//                       type="button"
//                       onClick={() => toggleFavoriteCategory(cat)}
//                       className={`px-4 py-2 rounded-full text-sm ${
//                         profileData.favoriteCategories.includes(cat)
//                           ? 'bg-teal-100 text-teal-800 border-2 border-teal-400'
//                           : 'bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200'
//                       }`}
//                     >
//                       {cat}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex justify-end pt-5">
//               <button
//                 type="button"
//                 className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="inline-flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         );
        
//       case 'account':
//         return (
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-lg font-medium text-gray-900 mb-4">Account Security</h3>
//               <div className="bg-yellow-50 p-4 rounded-md mb-6">
//                 <div className="flex">
//                   <div className="shrink-0">
//                     <Bell className="h-5 w-5 text-yellow-400" />
//                   </div>
//                   <div className="ml-3">
//                     <h3 className="text-sm font-medium text-yellow-800">
//                       Security Recommendation
//                     </h3>
//                     <div className="mt-2 text-sm text-yellow-700">
//                       <p>
//                         We recommend enabling two-factor authentication to protect your account.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-6 space-y-6">
//                 <div className="flex items-center justify-between py-4 border-b border-gray-100">
//                   <div>
//                     <h4 className="text-base font-medium text-gray-900">Email Address</h4>
//                     <p className="text-sm text-gray-500 mt-1">{profileData.email}</p>
//                   </div>
//                   <button className="text-sm text-teal-600 hover:text-teal-500">
//                     Change
//                   </button>
//                 </div>
                
//                 <div className="flex items-center justify-between py-4 border-b border-gray-100">
//                   <div>
//                     <h4 className="text-base font-medium text-gray-900">Password</h4>
//                     <p className="text-sm text-gray-500 mt-1">Last changed 3 months ago</p>
//                   </div>
//                   <button className="text-sm text-teal-600 hover:text-teal-500">
//                     Update
//                   </button>
//                 </div>
                
//                 <div className="flex items-center justify-between py-4 border-b border-gray-100">
//                   <div>
//                     <h4 className="text-base font-medium text-gray-900">Two-Factor Authentication</h4>
//                     <p className="text-sm text-gray-500 mt-1">Add an extra layer of security to your account</p>
//                   </div>
//                   <div className="flex items-center">
//                     <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
//                       <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center justify-between py-4 border-b border-gray-100">
//                   <div>
//                     <h4 className="text-base font-medium text-gray-900">Connected Devices</h4>
//                     <p className="text-sm text-gray-500 mt-1">Manage devices that have access to your account</p>
//                   </div>
//                   <button className="text-sm text-teal-600 hover:text-teal-500">
//                     View
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-medium text-gray-900 mb-4">Account Preferences</h3>
              
//               <div className="mt-6 space-y-6">
//                 <div className="flex items-center justify-between py-4 border-b border-gray-100">
//                   <div>
//                     <h4 className="text-base font-medium text-gray-900">Language</h4>
//                     <p className="text-sm text-gray-500 mt-1">Choose your preferred language</p>
//                   </div>
//                   <select className="block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
//                     <option>English (US)</option>
//                     <option>Spanish</option>
//                     <option>French</option>
//                     <option>German</option>
//                   </select>
//                 </div>
                
//                 <div className="flex items-center justify-between py-4 border-b border-gray-100">
//                   <div>
//                     <h4 className="text-base font-medium text-gray-900">Dark Mode</h4>
//                     <p className="text-sm text-gray-500 mt-1">Switch between light and dark theme</p>
//                   </div>
//                   <button
//                     onClick={toggleDarkMode}
//                     className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
//                       darkMode ? 'bg-teal-600' : 'bg-gray-200'
//                     }`}
//                   >
//                     <span className="sr-only">Toggle dark mode</span>
//                     <span
//                       className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
//                         darkMode ? 'translate-x-5' : 'translate-x-0'
//                       }`}
//                     >
//                       {darkMode ? (
//                         <Moon size={12} className="h-3 w-3 text-gray-400 m-1" />
//                       ) : (
//                         <Sun size={12} className="h-3 w-3 text-yellow-400 m-1" />
//                       )}
//                     </span>
//                   </button>
//                 </div>
                
//                 <div className="flex items-center justify-between py-4 border-b border-gray-100">
//                   <div>
//                     <h4 className="text-base font-medium text-gray-900">Measurement Units</h4>
//                     <p className="text-sm text-gray-500 mt-1">Choose your preferred measurement system for recipes</p>
//                   </div>
//                   <select className="block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
//                     <option>US Standard</option>
//                     <option>Metric</option>
//                     <option>UK Imperial</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-medium text-red-700 mb-4">Danger Zone</h3>
//               <div className="bg-red-50 p-4 rounded-md space-y-4">
//                 <div>
//                   <h4 className="text-base font-medium text-red-800">Delete Account</h4>
//                   <p className="text-sm text-red-600 mt-1">
//                     Once you delete your account, there is no going back. Please be certain.
//                   </p>
//                 </div>
//                 <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
//                   <LogOut size={16} className="mr-2" />
//                   Delete Account
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
        
//       case 'notifications':
//         return (
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="emailNotifications"
//                       type="checkbox"
//                       checked={profileData.notificationSettings.emailNotifications}
//                       onChange={() => handleNotificationChange('emailNotifications')}
//                       className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label htmlFor="emailNotifications" className="font-medium text-gray-700">All Email Notifications</label>
//                     <p className="text-gray-500">Master toggle for all email notifications</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="newRecipeAlerts"
//                       type="checkbox"
//                       checked={profileData.notificationSettings.newRecipeAlerts}
//                       onChange={() => handleNotificationChange('newRecipeAlerts')}
//                       className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
//                       disabled={!profileData.notificationSettings.emailNotifications}
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label htmlFor="newRecipeAlerts" className="font-medium text-gray-700">New Recipe Alerts</label>
//                     <p className="text-gray-500">Get notified when chefs you follow post new recipes</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="weeklyNewsletter"
//                       type="checkbox"
//                       checked={profileData.notificationSettings.weeklyNewsletter}
//                       onChange={() => handleNotificationChange('weeklyNewsletter')}
//                       className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
//                       disabled={!profileData.notificationSettings.emailNotifications}
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label htmlFor="weeklyNewsletter" className="font-medium text-gray-700">Weekly Newsletter</label>
//                     <p className="text-gray-500">Receive our weekly digest of top recipes and cooking tips</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="commentReplies"
//                       type="checkbox"
//                       checked={profileData.notificationSettings.commentReplies}
//                       onChange={() => handleNotificationChange('commentReplies')}
//                       className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
//                       disabled={!profileData.notificationSettings.emailNotifications}
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label htmlFor="commentReplies" className="font-medium text-gray-700">Comment Replies</label>
//                     <p className="text-gray-500">Get notified when someone replies to your comments or reviews</p>
//                   </div>
//                 </div>
              
//               </div>
//             </div>
//             </div>
           
//     }});}

//     export default UserSettings;
import React, { useState } from 'react';
import { User, Bell, Lock, Globe, HelpCircle, LogOut } from 'lucide-react';

function UserSettings() {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'notifications':
        return <NotificationsSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'language':
        return <LanguageSettings />;
      case 'help':
        return <HelpSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm p-6 space-y-8">
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <User size={48} />
          </div>
          <h2 className="mt-4 font-semibold text-lg">Jane Smith</h2>
          <p className="text-gray-500 text-sm">jane.smith@example.com</p>
        </div>

        <nav className="mt-8">
          <ul className="space-y-2">
            <li 
              className={`px-4 py-3 rounded-lg cursor-pointer flex items-center space-x-3 ${activeTab === 'profile' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('profile')}
            >
              <User size={18} />
              <span>Profile</span>
            </li>
            <li 
              className={`px-4 py-3 rounded-lg cursor-pointer flex items-center space-x-3 ${activeTab === 'notifications' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('notifications')}
            >
              <Bell size={18} />
              <span>Notifications</span>
            </li>
            <li 
              className={`px-4 py-3 rounded-lg cursor-pointer flex items-center space-x-3 ${activeTab === 'security' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('security')}
            >
              <Lock size={18} />
              <span>Security</span>
            </li>
            <li 
              className={`px-4 py-3 rounded-lg cursor-pointer flex items-center space-x-3 ${activeTab === 'language' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('language')}
            >
              <Globe size={18} />
              <span>Language</span>
            </li>
            <li 
              className={`px-4 py-3 rounded-lg cursor-pointer flex items-center space-x-3 ${activeTab === 'help' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('help')}
            >
              <HelpCircle size={18} />
              <span>Help</span>
            </li>
          </ul>
        </nav>

        <div className="mt-auto pt-6 border-t">
          <button className="flex items-center space-x-2 text-red-500 hover:text-red-600">
            <LogOut size={18} />
            <span>Log out</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
}

// Profile Settings Component
function ProfileSettings() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile Settings</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <User size={40} />
          </div>
          <div>
            <h2 className="font-semibold">Profile Picture</h2>
            <div className="flex space-x-3 mt-2">
              <button className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100">
                Upload New
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                defaultValue="Jane" 
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input 
                type="text" 
                defaultValue="Smith" 
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              defaultValue="jane.smith@example.com" 
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea 
              defaultValue="I'm a UX designer passionate about creating intuitive digital experiences."
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none h-24" 
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold mb-4">Contact Information</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              defaultValue="+1 (555) 123-4567" 
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input 
              type="text" 
              defaultValue="San Francisco, CA" 
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" 
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}

// Notifications Settings Component
function NotificationsSettings() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Notification Settings</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="font-semibold mb-4">Email Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Comments and mentions</h3>
              <p className="text-sm text-gray-500">Get notified when someone comments or mentions you</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Project updates</h3>
              <p className="text-sm text-gray-500">Get notified about project status changes</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Newsletter</h3>
              <p className="text-sm text-gray-500">Receive our weekly newsletter</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold mb-4">Push Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Direct messages</h3>
              <p className="text-sm text-gray-500">Get notified for new messages</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Team activities</h3>
              <p className="text-sm text-gray-500">Get notified about your team's activities</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Save Preferences
        </button>
      </div>
    </div>
  );
}

function SecuritySettings() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Security Settings</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="font-semibold mb-4">Change Password</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" 
            />
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 mt-2">
            Update Password
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold mb-4">Two-Factor Authentication</h2>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Enable two-factor authentication</h3>
            <p className="text-sm text-gray-500">Additional security for your account</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

// Language Settings Component (simplified)
function LanguageSettings() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Language Settings</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold mb-4">Select Language</h2>
        <select className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none">
          <option value="en">English (US)</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="ja">日本語</option>
        </select>
        
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

// Help Settings Component (simplified)
function HelpSettings() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Help & Support</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border-b pb-3">
            <h3 className="font-medium">How do I change my password?</h3>
            <p className="text-sm text-gray-500 mt-1">Go to Security Settings and follow the instructions to change your password.</p>
          </div>
          <div className="border-b pb-3">
            <h3 className="font-medium">Can I download my data?</h3>
            <p className="text-sm text-gray-500 mt-1">Yes, go to Profile Settings and click on the "Download My Data" button.</p>
          </div>
          <div>
            <h3 className="font-medium">How do I delete my account?</h3>
            <p className="text-sm text-gray-500 mt-1">Account deletion can be found in Security Settings under "Account Management".</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold mb-4">Contact Support</h2>
        <p className="text-sm text-gray-500 mb-4">If you can't find an answer in our FAQs, please contact our support team.</p>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Contact Support
        </button>
      </div>
    </div>
  );
}

export default UserSettings;