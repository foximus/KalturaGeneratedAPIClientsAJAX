
/**
 *Class definition for the Kaltura service: storageProfile.
 **/
var KalturaStorageProfileService = {
	/**
	 * Adds a storage profile to the Kaltura DB..
	 * @param	storageProfile	KalturaStorageProfile		 (optional)
	 **/
	add: function(storageProfile){
		var kparams = new Object();
		kparams.storageProfile = storageProfile;
		return new KalturaRequestBuilder("storageprofile", "add", kparams);
	},
	
	/**
	 * Get storage profile by id.
	 * @param	storageProfileId	int		 (optional)
	 **/
	get: function(storageProfileId){
		var kparams = new Object();
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("storageprofile", "get", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaStorageProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
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
	},
	
	/**
	 * storage profile lockPendingFileSyncs action locks file syncs for export by the file sync periodic worker.
	 * @param	filter	KalturaFileSyncFilter		 (optional)
	 * @param	workerId	int		The id of the file sync import worker (optional)
	 * @param	storageProfileId	int		The id of the storage profile (optional)
	 * @param	maxCount	int		The maximum number of file syncs that should be returned (optional)
	 * @param	maxSize	int		The maximum total size of file syncs that should be returned, this limit may be exceeded by one file sync (optional, default: 9223372036854775807)
	 **/
	lockPendingFileSyncs: function(filter, workerId, storageProfileId, maxCount, maxSize){
		if(!maxSize)
			maxSize = 9223372036854775807;
		var kparams = new Object();
		kparams.filter = filter;
		kparams.workerId = workerId;
		kparams.storageProfileId = storageProfileId;
		kparams.maxCount = maxCount;
		kparams.maxSize = maxSize;
		return new KalturaRequestBuilder("storageprofile", "lockPendingFileSyncs", kparams);
	},
	
	/**
	 * Update storage profile by id.
	 * @param	storageProfileId	int		 (optional)
	 * @param	storageProfile	KalturaStorageProfile		Id (optional)
	 **/
	update: function(storageProfileId, storageProfile){
		var kparams = new Object();
		kparams.storageProfileId = storageProfileId;
		kparams.storageProfile = storageProfile;
		return new KalturaRequestBuilder("storageprofile", "update", kparams);
	},
	
	/**
	 * .
	 * @param	storageId	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaStorageProfileStatus)
	 **/
	updateStatus: function(storageId, status){
		var kparams = new Object();
		kparams.storageId = storageId;
		kparams.status = status;
		return new KalturaRequestBuilder("storageprofile", "updateStatus", kparams);
	}
}
