
/**
 *Class definition for the Kaltura service: genericDistributionProvider.
 **/
var KalturaGenericDistributionProviderService = {
	/**
	 * Add new Generic Distribution Provider.
	 * @param	genericDistributionProvider	KalturaGenericDistributionProvider		 (optional)
	 * @return	KalturaGenericDistributionProvider.
	 **/
	add: function(genericDistributionProvider){
		var kparams = new Object();
		kparams.genericDistributionProvider = genericDistributionProvider;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "add", kparams);
	},
	
	/**
	 * Get Generic Distribution Provider by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaGenericDistributionProvider.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "get", kparams);
	},
	
	/**
	 * Update Generic Distribution Provider by id.
	 * @param	id	int		 (optional)
	 * @param	genericDistributionProvider	KalturaGenericDistributionProvider		 (optional)
	 * @return	KalturaGenericDistributionProvider.
	 **/
	update: function(id, genericDistributionProvider){
		var kparams = new Object();
		kparams.id = id;
		kparams.genericDistributionProvider = genericDistributionProvider;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "update", kparams);
	},
	
	/**
	 * Delete Generic Distribution Provider by id.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "delete", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaGenericDistributionProviderFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaGenericDistributionProviderListResponse.
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
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "list", kparams);
	}
}