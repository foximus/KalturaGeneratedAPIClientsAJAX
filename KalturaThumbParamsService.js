
/**
 *Class definition for the Kaltura service: thumbParams.
 **/
var KalturaThumbParamsService = {
	/**
	 * Add new Thumb Params.
	 * @param	thumbParams	KalturaThumbParams		 (optional)
	 **/
	add: function(thumbParams){
		var kparams = new Object();
		kparams.thumbParams = thumbParams;
		return new KalturaRequestBuilder("thumbparams", "add", kparams);
	},
	
	/**
	 * Get Thumb Params by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbparams", "get", kparams);
	},
	
	/**
	 * Update Thumb Params by ID.
	 * @param	id	int		 (optional)
	 * @param	thumbParams	KalturaThumbParams		 (optional)
	 **/
	update: function(id, thumbParams){
		var kparams = new Object();
		kparams.id = id;
		kparams.thumbParams = thumbParams;
		return new KalturaRequestBuilder("thumbparams", "update", kparams);
	},
	
	/**
	 * Delete Thumb Params by ID.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbparams", "delete", kparams);
	},
	
	/**
	 * List Thumb Params by filter with paging support (By default - all system default params will be listed too).
	 * @param	filter	KalturaThumbParamsFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("thumbparams", "list", kparams);
	},
	
	/**
	 * Get Thumb Params by Conversion Profile ID.
	 * @param	conversionProfileId	int		 (optional)
	 **/
	getByConversionProfileId: function(conversionProfileId){
		var kparams = new Object();
		kparams.conversionProfileId = conversionProfileId;
		return new KalturaRequestBuilder("thumbparams", "getByConversionProfileId", kparams);
	}
}
