
/**
 *Class definition for the Kaltura service: storageProfile.
 **/
var KalturaStorageProfileService = {
	/**
	 * Adds a storage profile to the Kaltura DB..
	 * @param	storageProfile	KalturaStorageProfile		 (optional)
	 * @return	KalturaStorageProfile.
	 **/
	add: function(storageProfile){
		var kparams = new Object();
		kparams.storageProfile = storageProfile;
		return new KalturaRequestBuilder("storageprofile", "add", kparams);
	},
	
	/**
	 * .
	 * @param	storageId	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaStorageProfileStatus)
	 * @return	.
	 **/
	updateStatus: function(storageId, status){
		var kparams = new Object();
		kparams.storageId = storageId;
		kparams.status = status;
		return new KalturaRequestBuilder("storageprofile", "updateStatus", kparams);
	},
	
	/**
	 * Get storage profile by id.
	 * @param	storageProfileId	int		 (optional)
	 * @return	KalturaStorageProfile.
	 **/
	get: function(storageProfileId){
		var kparams = new Object();
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("storageprofile", "get", kparams);
	},
	
	/**
	 * Update storage profile by id.
	 * @param	storageProfileId	int		 (optional)
	 * @param	storageProfile	KalturaStorageProfile		Id (optional)
	 * @return	KalturaStorageProfile.
	 **/
	update: function(storageProfileId, storageProfile){
		var kparams = new Object();
		kparams.storageProfileId = storageProfileId;
		kparams.storageProfile = storageProfile;
		return new KalturaRequestBuilder("storageprofile", "update", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaStorageProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaStorageProfileListResponse.
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("storageprofile", "list", kparams);
	}
}