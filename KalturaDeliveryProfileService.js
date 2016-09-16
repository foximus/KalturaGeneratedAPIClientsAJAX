
/**
 *Class definition for the Kaltura service: deliveryProfile.
 **/
var KalturaDeliveryProfileService = {
	/**
	 * Add new delivery..
	 * @param	delivery	KalturaDeliveryProfile		 (optional)
	 * @return	KalturaDeliveryProfile.
	 **/
	add: function(delivery){
		var kparams = new Object();
		kparams.delivery = delivery;
		return new KalturaRequestBuilder("deliveryprofile", "add", kparams);
	},
	
	/**
	 * Update exisiting delivery.
	 * @param	id	string		 (optional)
	 * @param	delivery	KalturaDeliveryProfile		 (optional)
	 * @return	KalturaDeliveryProfile.
	 **/
	update: function(id, delivery){
		var kparams = new Object();
		kparams.id = id;
		kparams.delivery = delivery;
		return new KalturaRequestBuilder("deliveryprofile", "update", kparams);
	},
	
	/**
	 * Get delivery by id.
	 * @param	id	string		 (optional)
	 * @return	KalturaDeliveryProfile.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("deliveryprofile", "get", kparams);
	},
	
	/**
	 * Add delivery based on existing delivery.
 *		Must provide valid sourceDeliveryId.
	 * @param	deliveryId	int		 (optional)
	 * @return	KalturaDeliveryProfile.
	 **/
	cloneAction: function(deliveryId){
		var kparams = new Object();
		kparams.deliveryId = deliveryId;
		return new KalturaRequestBuilder("deliveryprofile", "clone", kparams);
	},
	
	/**
	 * Retrieve a list of available delivery depends on the filter given.
	 * @param	filter	KalturaDeliveryProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaDeliveryProfileListResponse.
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
		return new KalturaRequestBuilder("deliveryprofile", "list", kparams);
	}
}