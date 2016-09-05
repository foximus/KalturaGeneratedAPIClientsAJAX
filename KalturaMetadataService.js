
/**
 *Class definition for the Kaltura service: metadata.
 **/
var KalturaMetadataService = {
	/**
	 * Allows you to add a metadata object and metadata content associated with Kaltura object.
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	xmlData	string		XML metadata (optional)
	 * @return	KalturaMetadata.
	 **/
	add: function(metadataProfileId, objectType, objectId, xmlData){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.xmlData = xmlData;
		return new KalturaRequestBuilder("metadata_metadata", "add", kparams);
	},
	
	/**
	 * Allows you to add a metadata object and metadata file associated with Kaltura object.
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	xmlFile	file		XML metadata (optional)
	 * @return	KalturaMetadata.
	 **/
	addFromFile: function(metadataProfileId, objectType, objectId, xmlFile){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kfiles = new Object();
		kfiles.xmlFile = xmlFile;
		return new KalturaRequestBuilder("metadata_metadata", "addFromFile", kparams, kfiles);
	},
	
	/**
	 * Allows you to add a metadata xml data from remote URL.
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	url	string		XML metadata remote url (optional)
	 * @return	KalturaMetadata.
	 **/
	addFromUrl: function(metadataProfileId, objectType, objectId, url){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.url = url;
		return new KalturaRequestBuilder("metadata_metadata", "addFromUrl", kparams);
	},
	
	/**
	 * Allows you to add a metadata xml data from remote URL.
 *		 Enables different permissions than addFromUrl action..
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	url	string		XML metadata remote url (optional)
	 * @return	KalturaMetadata.
	 **/
	addFromBulk: function(metadataProfileId, objectType, objectId, url){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.url = url;
		return new KalturaRequestBuilder("metadata_metadata", "addFromBulk", kparams);
	},
	
	/**
	 * Retrieve a metadata object by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaMetadata.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadata", "get", kparams);
	},
	
	/**
	 * Update an existing metadata object with new XML content.
	 * @param	id	int		 (optional)
	 * @param	xmlData	string		XML metadata (optional, default: null)
	 * @param	version	int		Enable update only if the metadata object version did not change by other process (optional, default: null)
	 * @return	KalturaMetadata.
	 **/
	update: function(id, xmlData, version){
		if(!xmlData)
			xmlData = null;
		if(!version)
			version = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.xmlData = xmlData;
		kparams.version = version;
		return new KalturaRequestBuilder("metadata_metadata", "update", kparams);
	},
	
	/**
	 * Update an existing metadata object with new XML file.
	 * @param	id	int		 (optional)
	 * @param	xmlFile	file		XML metadata (optional, default: null)
	 * @return	KalturaMetadata.
	 **/
	updateFromFile: function(id, xmlFile){
		if(!xmlFile)
			xmlFile = null;
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.xmlFile = xmlFile;
		return new KalturaRequestBuilder("metadata_metadata", "updateFromFile", kparams, kfiles);
	},
	
	/**
	 * List metadata objects by filter and pager.
	 * @param	filter	KalturaMetadataFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaMetadataListResponse.
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
		return new KalturaRequestBuilder("metadata_metadata", "list", kparams);
	},
	
	/**
	 * Delete an existing metadata.
	 * @param	id	int		 (optional)
	 * @return	.
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadata", "delete", kparams);
	},
	
	/**
	 * Mark existing metadata as invalid
 *		 Used by batch metadata transform.
	 * @param	id	int		 (optional)
	 * @param	version	int		Enable update only if the metadata object version did not change by other process (optional, default: null)
	 * @return	.
	 **/
	invalidate: function(id, version){
		if(!version)
			version = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.version = version;
		return new KalturaRequestBuilder("metadata_metadata", "invalidate", kparams);
	},
	
	/**
	 * Index metadata by id, will also index the related object.
	 * @param	id	string		 (optional)
	 * @param	shouldUpdate	bool		 (optional)
	 * @return	int.
	 **/
	index: function(id, shouldUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("metadata_metadata", "index", kparams);
	},
	
	/**
	 * Action transforms current metadata object XML using a provided XSL..
	 * @param	id	int		 (optional)
	 * @param	xslFile	file		 (optional)
	 * @return	KalturaMetadata.
	 **/
	updateFromXSL: function(id, xslFile){
		var kparams = new Object();
		kparams.id = id;
		kfiles = new Object();
		kfiles.xslFile = xslFile;
		return new KalturaRequestBuilder("metadata_metadata", "updateFromXSL", kparams, kfiles);
	}
}
