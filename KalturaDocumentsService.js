
/**
 *Class definition for the Kaltura service: documents.
 **/
var KalturaDocumentsService = {
	/**
	 * Add new document entry after the specific document file was uploaded and the upload token id exists.
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional)
	 * @param	uploadTokenId	string		Upload token id (optional)
	 * @return	KalturaDocumentEntry.
	 **/
	addFromUploadedFile: function(documentEntry, uploadTokenId){
		var kparams = new Object();
		kparams.documentEntry = documentEntry;
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("document_documents", "addFromUploadedFile", kparams);
	},
	
	/**
	 * Copy entry into new entry.
	 * @param	sourceEntryId	string		Document entry id to copy from (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null)
	 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null)
	 * @return	KalturaDocumentEntry.
	 **/
	addFromEntry: function(sourceEntryId, documentEntry, sourceFlavorParamsId){
		if(!documentEntry)
			documentEntry = null;
		if(!sourceFlavorParamsId)
			sourceFlavorParamsId = null;
		var kparams = new Object();
		kparams.sourceEntryId = sourceEntryId;
		if (documentEntry != null)
			kparams.documentEntry = documentEntry;
		kparams.sourceFlavorParamsId = sourceFlavorParamsId;
		return new KalturaRequestBuilder("document_documents", "addFromEntry", kparams);
	},
	
	/**
	 * Copy flavor asset into new entry.
	 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null)
	 * @return	KalturaDocumentEntry.
	 **/
	addFromFlavorAsset: function(sourceFlavorAssetId, documentEntry){
		if(!documentEntry)
			documentEntry = null;
		var kparams = new Object();
		kparams.sourceFlavorAssetId = sourceFlavorAssetId;
		if (documentEntry != null)
			kparams.documentEntry = documentEntry;
		return new KalturaRequestBuilder("document_documents", "addFromFlavorAsset", kparams);
	},
	
	/**
	 * Convert entry.
	 * @param	entryId	string		Document entry id (optional)
	 * @param	conversionProfileId	int		 (optional, default: null)
	 * @param	dynamicConversionAttributes	array		 (optional, default: null)
	 * @return	bigint.
	 **/
	convert: function(entryId, conversionProfileId, dynamicConversionAttributes){
		if(!conversionProfileId)
			conversionProfileId = null;
		if(!dynamicConversionAttributes)
			dynamicConversionAttributes = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.conversionProfileId = conversionProfileId;
		kparams.dynamicConversionAttributes = dynamicConversionAttributes;
		return new KalturaRequestBuilder("document_documents", "convert", kparams);
	},
	
	/**
	 * Get document entry by ID..
	 * @param	entryId	string		Document entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 * @return	KalturaDocumentEntry.
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("document_documents", "get", kparams);
	},
	
	/**
	 * Update document entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Document entry id to update (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata to update (optional)
	 * @return	KalturaDocumentEntry.
	 **/
	update: function(entryId, documentEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.documentEntry = documentEntry;
		return new KalturaRequestBuilder("document_documents", "update", kparams);
	},
	
	/**
	 * Delete a document entry..
	 * @param	entryId	string		Document entry id to delete (optional)
	 * @return	.
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "delete", kparams);
	},
	
	/**
	 * List document entries by filter with paging support..
	 * @param	filter	KalturaDocumentEntryFilter		Document entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 * @return	KalturaDocumentListResponse.
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
		return new KalturaRequestBuilder("document_documents", "list", kparams);
	},
	
	/**
	 * Upload a document file to Kaltura, then the file can be used to create a document entry..
	 * @param	fileData	file		The file data (optional)
	 * @return	string.
	 **/
	upload: function(fileData){
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("document_documents", "upload", kparams, kfiles);
	},
	
	/**
	 * This will queue a batch job for converting the document file to swf
 *		 Returns the URL where the new swf will be available.
	 * @param	entryId	string		 (optional)
	 * @return	string.
	 **/
	convertPptToSwf: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "convertPptToSwf", kparams);
	},
	
	/**
	 * Replace content associated with the given document entry..
	 * @param	entryId	string		document entry id to update (optional)
	 * @param	resource	KalturaResource		Resource to be used to replace entry doc content (optional)
	 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null)
	 * @return	KalturaDocumentEntry.
	 **/
	updateContent: function(entryId, resource, conversionProfileId){
		if(!conversionProfileId)
			conversionProfileId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.resource = resource;
		kparams.conversionProfileId = conversionProfileId;
		return new KalturaRequestBuilder("document_documents", "updateContent", kparams);
	},
	
	/**
	 * Approves document replacement.
	 * @param	entryId	string		document entry id to replace (optional)
	 * @return	KalturaDocumentEntry.
	 **/
	approveReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "approveReplace", kparams);
	},
	
	/**
	 * Cancels document replacement.
	 * @param	entryId	string		Document entry id to cancel (optional)
	 * @return	KalturaDocumentEntry.
	 **/
	cancelReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "cancelReplace", kparams);
	}
}