/* Please always arrange url alphabetically  */

const URLS = {
    VerifyPhone :'user/verify-phone',
    CreatePassword:'user/create-password',
    ResendOtp :'user/resend-otp',
    Login : 'user/login',
    ForgotPassword:'user/forgot-password',
    GenratePassword:'user/genrate-password',
    changePassword:'user/change-password',
    getProfile:'user/get-profile',
    updateProfile:'user/update-profile',
    updateUserImage:'user/update-user-image',
   

    addTenant:'tenant/add-tenant',
    updateTenant:'tenant/update-tenant',
    getTenant:'tenant/get-tenants',
    getTenantdetails:'tenant/get-tenant-details',

    updateBeneficiaries:'beneficiary/update-beneficiary',
    addBeneficiaries:'beneficiary/add-beneficiary',
    getBeneficiaries:'beneficiary/get-beneficiaries',
    getBeneficiariesdetails:'beneficiary/get-beneficiary-details',
    
    
    
    GetProperty:'property/get-property/', 
    GetPropertymapfilter:'property/filter-map-property',
    GetPropertymap:'property/get-property-for-map',
    GetAgentProperty:'property/get-agent-property', 
    getPropertyDetails:'property/get-property-details', 
    addTowishlist:'property/add-to-wishlist', 
    searchProperty:"property/search-property?title=",
    FilterProperty:"property/filter-property",
    announcements:"announcements/get-agent-announcements",
    announcementsDetail:"announcements/get-announcement-details/",
    

    pushNotifications:"notifications/get-agent-push-notifications",

    pages: "/pages?page_code=",
    FAQ:"get-all-faqs",
    logout: "user/logout?device_token="



    
};

export default URLS;
