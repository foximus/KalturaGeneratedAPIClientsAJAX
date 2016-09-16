
/**
 *Class definition for the Kaltura service: adminUser.
 **/
var KalturaAdminUserService = {
	/**
	 * Update admin user password and email.
	 * @param	email	string		 (optional)
	 * @param	password	string		 (optional)
	 * @param	newEmail	string		Optional, provide only when you want to update the email (optional)
	 * @param	newPassword	string		 (optional)
	 * @return	KalturaAdminUser.
	 **/
	updatePassword: function(email, password, newEmail, newPassword){
		if(!newEmail)
			newEmail = "";
		if(!newPassword)
			newPassword = "";
		var kparams = new Object();
		kparams.email = email;
		kparams.password = password;
		kparams.newEmail = newEmail;
		kparams.newPassword = newPassword;
		return new KalturaRequestBuilder("adminuser", "updatePassword", kparams);
	},
	
	/**
	 * Reset admin user password and send it to the users email address.
	 * @param	email	string		 (optional)
	 * @return	.
	 **/
	resetPassword: function(email){
		var kparams = new Object();
		kparams.email = email;
		return new KalturaRequestBuilder("adminuser", "resetPassword", kparams);
	},
	
	/**
	 * Get an admin session using admin email and password (Used for login to the KMC application).
	 * @param	email	string		 (optional)
	 * @param	password	string		 (optional)
	 * @param	partnerId	int		 (optional, default: null)
	 * @return	string.
	 **/
	login: function(email, password, partnerId){
		if(!partnerId)
			partnerId = null;
		var kparams = new Object();
		kparams.email = email;
		kparams.password = password;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("adminuser", "login", kparams);
	},
	
	/**
	 * Set initial users password.
	 * @param	hashKey	string		 (optional)
	 * @param	newPassword	string		new password to set (optional)
	 * @return	.
	 **/
	setInitialPassword: function(hashKey, newPassword){
		var kparams = new Object();
		kparams.hashKey = hashKey;
		kparams.newPassword = newPassword;
		return new KalturaRequestBuilder("adminuser", "setInitialPassword", kparams);
	}
}