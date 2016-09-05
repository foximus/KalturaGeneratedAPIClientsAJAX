
/**
 *Class definition for the Kaltura service: tag.
 **/
var KalturaTagService = {
	/**
	 * .
	 * @param	tagFilter	KalturaTagFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaTagListResponse.
	 **/
	search: function(tagFilter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.tagFilter = tagFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("tagsearch_tag", "search", kparams);
	},
	
	/**
	 * Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags..
	 * @return	int.
	 **/
	deletePending: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("tagsearch_tag", "deletePending", kparams);
	},
	
	/**
	 * .
	 * @param	categoryId	int		 (optional)
	 * @param	pcToDecrement	string		 (optional)
	 * @param	pcToIncrement	string		 (optional)
	 * @return	.
	 **/
	indexCategoryEntryTags: function(categoryId, pcToDecrement, pcToIncrement){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.pcToDecrement = pcToDecrement;
		kparams.pcToIncrement = pcToIncrement;
		return new KalturaRequestBuilder("tagsearch_tag", "indexCategoryEntryTags", kparams);
	}
}
