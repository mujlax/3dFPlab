/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/workers/BinaryDecoderWorker.js":
/*!***********************************************!*\
  !*** ./source/workers/BinaryDecoderWorker.js ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/worker-loader/dist/cjs.js):\nValidationError: Invalid options object. Worker Loader has been initialized using an options object that does not match the API schema.\n - options has an unknown property 'fallback'. These properties are valid:\n   object { worker?, publicPath?, filename?, chunkFilename?, inline?, esModule? }\n - options.inline should be one of these:\n   \"no-fallback\" | \"fallback\"\n    at validate (C:\\Users\\zx053\\code\\three_potree_new\\node_modules\\schema-utils\\dist\\validate.js:105:11)\n    at Object.pitch (C:\\Users\\zx053\\code\\three_potree_new\\node_modules\\worker-loader\\dist\\index.js:54:29)");

/***/ }),

/***/ "./source/workers/DEMWorker.js":
/*!*************************************!*\
  !*** ./source/workers/DEMWorker.js ***!
  \*************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/worker-loader/dist/cjs.js):\nValidationError: Invalid options object. Worker Loader has been initialized using an options object that does not match the API schema.\n - options has an unknown property 'fallback'. These properties are valid:\n   object { worker?, publicPath?, filename?, chunkFilename?, inline?, esModule? }\n - options.inline should be one of these:\n   \"no-fallback\" | \"fallback\"\n    at validate (C:\\Users\\zx053\\code\\three_potree_new\\node_modules\\schema-utils\\dist\\validate.js:105:11)\n    at Object.pitch (C:\\Users\\zx053\\code\\three_potree_new\\node_modules\\worker-loader\\dist\\index.js:54:29)");

/***/ }),

/***/ "./source/workers/EptBinaryDecoderWorker.js":
/*!**************************************************!*\
  !*** ./source/workers/EptBinaryDecoderWorker.js ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/worker-loader/dist/cjs.js):\nValidationError: Invalid options object. Worker Loader has been initialized using an options object that does not match the API schema.\n - options has an unknown property 'fallback'. These properties are valid:\n   object { worker?, publicPath?, filename?, chunkFilename?, inline?, esModule? }\n - options.inline should be one of these:\n   \"no-fallback\" | \"fallback\"\n    at validate (C:\\Users\\zx053\\code\\three_potree_new\\node_modules\\schema-utils\\dist\\validate.js:105:11)\n    at Object.pitch (C:\\Users\\zx053\\code\\three_potree_new\\node_modules\\worker-loader\\dist\\index.js:54:29)");

/***/ }),

/***/ "./source/workers/EptLaszipDecoderWorker.js":
/*!**************************************************!*\
  !*** ./source/workers/EptLaszipDecoderWorker.js ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/worker-loader/dist/cjs.js):\nValidationError: Invalid options object. Worker Loader has been initialized using an options object that does not match the API schema.\n - options has an unknown property 'fallback'. These properties are valid:\n   object { worker?, publicPath?, filename?, chunkFilename?, inline?, esModule? }\n - options.inline should be one of these:\n   \"no-fallback\" | \"fallback\"\n    at validate (C:\\Users\\zx053\\code\\three_potree_new\\node_modules\\schema-utils\\dist\\validate.js:105:11)\n    at Object.pitch (C:\\Users\\zx053\\code\\three_potree_new\\node_modules\\worker-loader\\dist\\index.js:54:29)");

/***/ }),

/***/ "./source/workers/LASDecoderWorker.js":
/*!********************************************!*\
  !*** ./source/workers/LASDecoderWorker.js ***!
  \********************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/worker-loader/dist/cjs.js):\nValidationError: Invalid options object. Worker Loader has been initialized using an options object that does not match the API schema.\n - options has an unknown property 'fallback'. These properties are valid:\n   object { worker?, publicPath?, filename?, chunkFilename?, inline?, esModule? }\n - options.inline should be one of these:\n   \"no-fallback\" | \"fallback\"\n    at validate (C:\\Users\\zx053\\code\\three_potree_new\\node_modules\\schema-utils\\dist\\validate.js:105:11)\n    at Object.pitch (C:\\Users\\zx053\\code\\three_potree_new\\node_modules\\worker-loader\\dist\\index.js:54:29)");

/***/ }),

/***/ "./source/Global.js":
/*!**************************!*\
  !*** ./source/Global.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Global": () => (/* binding */ Global)
/* harmony export */ });
/* harmony import */ var _utils_LRU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/LRU.js */ "./source/utils/LRU.js");
/* harmony import */ var _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/WorkerManager.js */ "./source/utils/WorkerManager.js");





function getCurrentScript() {
	if (document && document.currentScript) {
		return document.currentScript;
	}
	const scripts = document.getElementsByTagName('script');
	if (scripts && scripts.length) {
		return scripts[scripts.length - 1].getAttribute('src');
	}
	return null;
}

function getBasePath()
{
	var currentScript = getCurrentScript();
	if(currentScript && currentScript.src)
	{
		var scriptPath = new URL(currentScript.src + "/..").href;

		if(scriptPath.slice(-1) === "/")
		{
			scriptPath = scriptPath.slice(0, -1);
		}

		return scriptPath;
	}
	else
	{
		console.error("Potree: Was unable to find its script path using document.currentScript.");
	}

	return "";
}

var Global = 
{
	debug: {},
	workerPath: getBasePath(),
	maxNodesLoadGPUFrame: 20,
	maxDEMLevel: 0,
	maxNodesLoading: navigator.hardwareConcurrency !== undefined ? navigator.hardwareConcurrency : 4,
	pointLoadLimit: 1e10,
	numNodesLoading: 0,
	measureTimings: false,
	workerPool: new _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_1__.WorkerManager(),
	lru: new _utils_LRU_js__WEBPACK_IMPORTED_MODULE_0__.LRU(),
	pointcloudTransformVersion: undefined
};



/***/ }),

/***/ "./source/Gradients.js":
/*!*****************************!*\
  !*** ./source/Gradients.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gradients": () => (/* binding */ Gradients)
/* harmony export */ });


var Gradients = {
	RAINBOW: [
		[0, new THREE.Color(0.278, 0, 0.714)],
		[1 / 6, new THREE.Color(0, 0, 1)],
		[2 / 6, new THREE.Color(0, 1, 1)],
		[3 / 6, new THREE.Color(0, 1, 0)],
		[4 / 6, new THREE.Color(1, 1, 0)],
		[5 / 6, new THREE.Color(1, 0.64, 0)],
		[1, new THREE.Color(1, 0, 0)]
	],
	//From chroma spectral http://gka.github.io/chroma.js/
	SPECTRAL: [
		[0, new THREE.Color(0.3686, 0.3098, 0.6353)],
		[0.1, new THREE.Color(0.1961, 0.5333, 0.7412)],
		[0.2, new THREE.Color(0.4000, 0.7608, 0.6471)],
		[0.3, new THREE.Color(0.6706, 0.8667, 0.6431)],
		[0.4, new THREE.Color(0.9020, 0.9608, 0.5961)],
		[0.5, new THREE.Color(1.0000, 1.0000, 0.7490)],
		[0.6, new THREE.Color(0.9961, 0.8784, 0.5451)],
		[0.7, new THREE.Color(0.9922, 0.6824, 0.3804)],
		[0.8, new THREE.Color(0.9569, 0.4275, 0.2627)],
		[0.9, new THREE.Color(0.8353, 0.2431, 0.3098)],
		[1, new THREE.Color(0.6196, 0.0039, 0.2588)]
	],
	PLASMA: [
		[0.0, new THREE.Color(0.241, 0.015, 0.610)],
		[0.1, new THREE.Color(0.387, 0.001, 0.654)],
		[0.2, new THREE.Color(0.524, 0.025, 0.653)],
		[0.3, new THREE.Color(0.651, 0.125, 0.596)],
		[0.4, new THREE.Color(0.752, 0.227, 0.513)],
		[0.5, new THREE.Color(0.837, 0.329, 0.431)],
		[0.6, new THREE.Color(0.907, 0.435, 0.353)],
		[0.7, new THREE.Color(0.963, 0.554, 0.272)],
		[0.8, new THREE.Color(0.992, 0.681, 0.195)],
		[0.9, new THREE.Color(0.987, 0.822, 0.144)],
		[1.0, new THREE.Color(0.940, 0.975, 0.131)]
	],
	YELLOW_GREEN: [
		[0, new THREE.Color(0.1647, 0.2824, 0.3451)],
		[0.1, new THREE.Color(0.1338, 0.3555, 0.4227)],
		[0.2, new THREE.Color(0.0610, 0.4319, 0.4864)],
		[0.3, new THREE.Color(0.0000, 0.5099, 0.5319)],
		[0.4, new THREE.Color(0.0000, 0.5881, 0.5569)],
		[0.5, new THREE.Color(0.1370, 0.6650, 0.5614)],
		[0.6, new THREE.Color(0.2906, 0.7395, 0.5477)],
		[0.7, new THREE.Color(0.4453, 0.8099, 0.5201)],
		[0.8, new THREE.Color(0.6102, 0.8748, 0.4850)],
		[0.9, new THREE.Color(0.7883, 0.9323, 0.4514)],
		[1, new THREE.Color(0.9804, 0.9804, 0.4314)]
	],
	VIRIDIS: [
		[0.0, new THREE.Color(0.267, 0.005, 0.329)],
		[0.1, new THREE.Color(0.283, 0.141, 0.458)],
		[0.2, new THREE.Color(0.254, 0.265, 0.530)],
		[0.3, new THREE.Color(0.207, 0.372, 0.553)],
		[0.4, new THREE.Color(0.164, 0.471, 0.558)],
		[0.5, new THREE.Color(0.128, 0.567, 0.551)],
		[0.6, new THREE.Color(0.135, 0.659, 0.518)],
		[0.7, new THREE.Color(0.267, 0.749, 0.441)],
		[0.8, new THREE.Color(0.478, 0.821, 0.318)],
		[0.9, new THREE.Color(0.741, 0.873, 0.150)],
		[1.0, new THREE.Color(0.993, 0.906, 0.144)]
	],
	INFERNO: [
		[0.0, new THREE.Color(0.077, 0.042, 0.206)],
		[0.1, new THREE.Color(0.225, 0.036, 0.388)],
		[0.2, new THREE.Color(0.373, 0.074, 0.432)],
		[0.3, new THREE.Color(0.522, 0.128, 0.420)],
		[0.4, new THREE.Color(0.665, 0.182, 0.370)],
		[0.5, new THREE.Color(0.797, 0.255, 0.287)],
		[0.6, new THREE.Color(0.902, 0.364, 0.184)],
		[0.7, new THREE.Color(0.969, 0.516, 0.063)],
		[0.8, new THREE.Color(0.988, 0.683, 0.072)],
		[0.9, new THREE.Color(0.961, 0.859, 0.298)],
		[1.0, new THREE.Color(0.988, 0.998, 0.645)]
	],
	GRAYSCALE: [
		[0, new THREE.Color(0, 0, 0)],
		[1, new THREE.Color(1, 1, 1)]
	]
};




/***/ }),

/***/ "./source/PointAttributes.js":
/*!***********************************!*\
  !*** ./source/PointAttributes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointAttribute": () => (/* binding */ PointAttribute),
/* harmony export */   "PointAttributeNames": () => (/* binding */ PointAttributeNames),
/* harmony export */   "PointAttributeTypes": () => (/* binding */ PointAttributeTypes),
/* harmony export */   "PointAttributes": () => (/* binding */ PointAttributes)
/* harmony export */ });


var PointAttributeNames =
{
	POSITION_CARTESIAN: 0, //float x, y, z,
	COLOR_PACKED: 1, //byte r, g, b, a, I: [0,1]
	COLOR_FLOATS_1: 2, //float r, g, b, I: [0,1]
	COLOR_FLOATS_255: 3, //float r, g, b, I: [0,255]
	NORMAL_FLOATS: 4, //float x, y, z,
	FILLER: 5,
	INTENSITY: 6,
	CLASSIFICATION: 7,
	NORMAL_SPHEREMAPPED: 8,
	NORMAL_OCT16: 9,
	NORMAL: 10,
	RETURN_NUMBER: 11,
	NUMBER_OF_RETURNS: 12,
	SOURCE_ID: 13,
	INDICES: 14,
	SPACING: 15
};

/**
 * Some types of possible point attribute data formats
 *
 * @class
 */
var PointAttributeTypes =
{
	DATA_TYPE_DOUBLE:
	{
		ordinal: 0,
		size: 8
	},
	DATA_TYPE_FLOAT:
	{
		ordinal: 1,
		size: 4
	},
	DATA_TYPE_INT8:
	{
		ordinal: 2,
		size: 1
	},
	DATA_TYPE_UINT8:
	{
		ordinal: 3,
		size: 1
	},
	DATA_TYPE_INT16:
	{
		ordinal: 4,
		size: 2
	},
	DATA_TYPE_UINT16:
	{
		ordinal: 5,
		size: 2
	},
	DATA_TYPE_INT32:
	{
		ordinal: 6,
		size: 4
	},
	DATA_TYPE_UINT32:
	{
		ordinal: 7,
		size: 4
	},
	DATA_TYPE_INT64:
	{
		ordinal: 8,
		size: 8
	},
	DATA_TYPE_UINT64:
	{
		ordinal: 9,
		size: 8
	}
};

var i = 0;
for(var obj in PointAttributeTypes)
{
	PointAttributeTypes[i] = PointAttributeTypes[obj];
	i++;
}

/**
 * A single point attribute such as color/normal/.. and its data format/number of elements/...
 */
function PointAttribute(name, type, numElements)
{
	this.name = name;
	this.type = type;
	this.numElements = numElements;
	this.byteSize = this.numElements * this.type.size;
};

PointAttribute.POSITION_CARTESIAN = new PointAttribute(PointAttributeNames.POSITION_CARTESIAN, PointAttributeTypes.DATA_TYPE_FLOAT, 3);
PointAttribute.RGBA_PACKED = new PointAttribute(PointAttributeNames.COLOR_PACKED, PointAttributeTypes.DATA_TYPE_INT8, 4);
PointAttribute.COLOR_PACKED = PointAttribute.RGBA_PACKED;
PointAttribute.RGB_PACKED = new PointAttribute(PointAttributeNames.COLOR_PACKED, PointAttributeTypes.DATA_TYPE_INT8, 3);
PointAttribute.NORMAL_FLOATS = new PointAttribute(PointAttributeNames.NORMAL_FLOATS, PointAttributeTypes.DATA_TYPE_FLOAT, 3);
PointAttribute.FILLER_1B = new PointAttribute(PointAttributeNames.FILLER, PointAttributeTypes.DATA_TYPE_UINT8, 1);
PointAttribute.INTENSITY = new PointAttribute(PointAttributeNames.INTENSITY, PointAttributeTypes.DATA_TYPE_UINT16, 1);
PointAttribute.CLASSIFICATION = new PointAttribute(PointAttributeNames.CLASSIFICATION, PointAttributeTypes.DATA_TYPE_UINT8, 1);
PointAttribute.NORMAL_SPHEREMAPPED = new PointAttribute(PointAttributeNames.NORMAL_SPHEREMAPPED, PointAttributeTypes.DATA_TYPE_UINT8, 2);
PointAttribute.NORMAL_OCT16 = new PointAttribute(PointAttributeNames.NORMAL_OCT16, PointAttributeTypes.DATA_TYPE_UINT8, 2);
PointAttribute.NORMAL = new PointAttribute(PointAttributeNames.NORMAL, PointAttributeTypes.DATA_TYPE_FLOAT, 3);
PointAttribute.RETURN_NUMBER = new PointAttribute(PointAttributeNames.RETURN_NUMBER, PointAttributeTypes.DATA_TYPE_UINT8, 1);
PointAttribute.NUMBER_OF_RETURNS = new PointAttribute(PointAttributeNames.NUMBER_OF_RETURNS, PointAttributeTypes.DATA_TYPE_UINT8, 1);
PointAttribute.SOURCE_ID = new PointAttribute(PointAttributeNames.SOURCE_ID, PointAttributeTypes.DATA_TYPE_UINT8, 1);
PointAttribute.INDICES = new PointAttribute(PointAttributeNames.INDICES, PointAttributeTypes.DATA_TYPE_UINT32, 1);
PointAttribute.SPACING = new PointAttribute(PointAttributeNames.SPACING, PointAttributeTypes.DATA_TYPE_FLOAT, 1);

/**
 * Ordered list of PointAttributes used to identify how points are aligned in a buffer.
 */
function PointAttributes(pointAttributes)
{
	this.attributes = [];
	this.byteSize = 0;
	this.size = 0;

	if(pointAttributes != null)
	{
		for(var i = 0; i < pointAttributes.length; i++)
		{
			var pointAttributeName = pointAttributes[i];
			var pointAttribute = PointAttribute[pointAttributeName];
			this.attributes.push(pointAttribute);
			this.byteSize += pointAttribute.byteSize;
			this.size++;
		}
	}
};

PointAttributes.prototype.add = function(pointAttribute)
{
	this.attributes.push(pointAttribute);
	this.byteSize += pointAttribute.byteSize;
	this.size++;
};

PointAttributes.prototype.hasColors = function()
{
	for(var name in this.attributes)
	{
		var pointAttribute = this.attributes[name];
		if(pointAttribute.name === PointAttributeNames.COLOR_PACKED)
		{
			return true;
		}
	}

	return false;
};

PointAttributes.prototype.hasNormals = function()
{
	for(var name in this.attributes)
	{
		var pointAttribute = this.attributes[name];
		if(pointAttribute === PointAttribute.NORMAL_SPHEREMAPPED || pointAttribute === PointAttribute.NORMAL_FLOATS || pointAttribute === PointAttribute.NORMAL || pointAttribute === PointAttribute.NORMAL_OCT16)
		{
			return true;
		}
	}

	return false;
};



/***/ }),

/***/ "./source/Points.js":
/*!**************************!*\
  !*** ./source/Points.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Points": () => (/* binding */ Points)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);



class Points
{
	constructor()
	{
		this.boundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();
		this.numPoints = 0;
		this.data = {};
	}

	add(points)
	{
		var currentSize = this.numPoints;
		var additionalSize = points.numPoints;
		var newSize = currentSize + additionalSize;

		var thisAttributes = Object.keys(this.data);
		var otherAttributes = Object.keys(points.data);
		var attributes = new Set([...thisAttributes, ...otherAttributes]);

		for(var attribute of attributes)
		{
			if(thisAttributes.includes(attribute) && otherAttributes.includes(attribute))
			{
				//attribute in both, merge
				var Type = this.data[attribute].constructor;
				var merged = new Type(this.data[attribute].length + points.data[attribute].length);
				merged.set(this.data[attribute], 0);
				merged.set(points.data[attribute], this.data[attribute].length);
				this.data[attribute] = merged;
			}
			else if(thisAttributes.includes(attribute) && !otherAttributes.includes(attribute))
			{
				//attribute only in this; take over this and expand to new size
				var elementsPerPoint = this.data[attribute].length / this.numPoints;
				var Type = this.data[attribute].constructor;
				var expanded = new Type(elementsPerPoint * newSize);
				expanded.set(this.data[attribute], 0);
				this.data[attribute] = expanded;
			}
			else if(!thisAttributes.includes(attribute) && otherAttributes.includes(attribute))
			{
				//attribute only in points to be added; take over new points and expand to new size
				var elementsPerPoint = points.data[attribute].length / points.numPoints;
				var Type = points.data[attribute].constructor;
				var expanded = new Type(elementsPerPoint * newSize);
				expanded.set(points.data[attribute], elementsPerPoint * currentSize);
				this.data[attribute] = expanded;
			}
		}

		this.numPoints = newSize;

		this.boundingBox.union(points.boundingBox);
	}
};




/***/ }),

/***/ "./source/Potree.js":
/*!**************************!*\
  !*** ./source/Potree.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeLocations": () => (/* binding */ AttributeLocations),
/* harmony export */   "Classification": () => (/* binding */ Classification),
/* harmony export */   "PointColorType": () => (/* binding */ PointColorType),
/* harmony export */   "PointShape": () => (/* binding */ PointShape),
/* harmony export */   "PointSizeType": () => (/* binding */ PointSizeType),
/* harmony export */   "TreeType": () => (/* binding */ TreeType),
/* harmony export */   "loadPointCloud": () => (/* binding */ loadPointCloud),
/* harmony export */   "updatePointClouds": () => (/* binding */ updatePointClouds),
/* harmony export */   "updateVisibility": () => (/* binding */ updateVisibility),
/* harmony export */   "updateVisibilityStructures": () => (/* binding */ updateVisibilityStructures)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loaders_GreyhoundLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loaders/GreyhoundLoader.js */ "./source/loaders/GreyhoundLoader.js");
/* harmony import */ var _loaders_POCLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders/POCLoader.js */ "./source/loaders/POCLoader.js");
/* harmony import */ var _loaders_EptLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loaders/EptLoader.js */ "./source/loaders/EptLoader.js");
/* harmony import */ var _pointcloud_PointCloudOctree_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pointcloud/PointCloudOctree.js */ "./source/pointcloud/PointCloudOctree.js");
/* harmony import */ var _pointcloud_PointCloudArena4D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pointcloud/PointCloudArena4D.js */ "./source/pointcloud/PointCloudArena4D.js");
/* harmony import */ var _pointcloud_geometries_PointCloudArena4DGeometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointcloud/geometries/PointCloudArena4DGeometry.js */ "./source/pointcloud/geometries/PointCloudArena4DGeometry.js");
/* harmony import */ var _lib_BinaryHeap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/BinaryHeap.js */ "./source/lib/BinaryHeap.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Global.js */ "./source/Global.js");













var AttributeLocations =
{
  position: 0,
  color: 1,
  intensity: 2,
  classification: 3,
  returnNumber: 4,
  numberOfReturns: 5,
  pointSourceID: 6,
  indices: 7,
  normal: 8,
  spacing: 9,
};

var Classification =
{
  DEFAULT:
  {
    0: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(0.5, 0.5, 0.5, 1.0),
    1: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(0.5, 0.5, 0.5, 1.0),
    2: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(0.63, 0.32, 0.18, 1.0),
    3: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(0.0, 1.0, 0.0, 1.0),
    4: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(0.0, 0.8, 0.0, 1.0),
    5: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(0.0, 0.6, 0.0, 1.0),
    6: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(1.0, 0.66, 0.0, 1.0),
    7: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(1.0, 0, 1.0, 1.0),
    8: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(1.0, 0, 0.0, 1.0),
    9: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(0.0, 0.0, 1.0, 1.0),
    12: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(1.0, 1.0, 0.0, 1.0),
    DEFAULT: new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(0.3, 0.6, 0.6, 0.5)
  }
};

var PointSizeType =
{
  FIXED: 0,
  ATTENUATED: 1,
  ADAPTIVE: 2
};

var PointShape =
{
  SQUARE: 0,
  CIRCLE: 1,
  PARABOLOID: 2
};

var PointColorType =
{
  RGB: 0,
  COLOR: 1,
  DEPTH: 2,
  HEIGHT: 3,
  ELEVATION: 3,
  INTENSITY: 4,
  INTENSITY_GRADIENT: 5,
  LOD: 6,
  LEVEL_OF_DETAIL: 6,
  POINT_INDEX: 7,
  CLASSIFICATION: 8,
  RETURN_NUMBER: 9,
  SOURCE: 10,
  NORMAL: 11,
  PHONG: 12,
  RGB_HEIGHT: 13,
  COMPOSITE: 50
};

var TreeType =
{
  OCTREE: 0,
  KDTREE: 1
};

function loadPointCloud(path, name, callback) {
  var loaded = function (pointcloud) {
    if (name !== undefined) {
      pointcloud.name = name;
    }

    callback(
      {
        type: "pointcloud_loaded",
        pointcloud: pointcloud
      });
  };

  //Greyhound pointcloud server URL.
  if (path.indexOf("greyhound://") === 0) {
    _loaders_GreyhoundLoader_js__WEBPACK_IMPORTED_MODULE_1__.GreyhoundLoader.load(path, function (geometry) {
      if (geometry !== undefined) {
        loaded(new _pointcloud_PointCloudOctree_js__WEBPACK_IMPORTED_MODULE_4__.PointCloudOctree(geometry));
      }
    });
  }
  //Potree point cloud
  else if (path.indexOf("cloud.js") > 0) {
    _loaders_POCLoader_js__WEBPACK_IMPORTED_MODULE_2__.POCLoader.load(path, function (geometry) {
      if (geometry !== undefined) {
        loaded(new _pointcloud_PointCloudOctree_js__WEBPACK_IMPORTED_MODULE_4__.PointCloudOctree(geometry));
      }
    });
  }
  else if (path.indexOf('ept.json') > 0) {
    _loaders_EptLoader_js__WEBPACK_IMPORTED_MODULE_3__.EptLoader.load(path, function (geometry) {
      if (geometry !== undefined) {
        loaded(new _pointcloud_PointCloudOctree_js__WEBPACK_IMPORTED_MODULE_4__.PointCloudOctree(geometry));
      }
    });
  }
  //Arena 4D point cloud
  else if (path.indexOf(".vpc") > 0) {
    _pointcloud_geometries_PointCloudArena4DGeometry_js__WEBPACK_IMPORTED_MODULE_6__.PointCloudArena4DGeometry.load(path, function (geometry) {
      if (geometry !== undefined) {
        loaded(new _pointcloud_PointCloudArena4D_js__WEBPACK_IMPORTED_MODULE_5__.PointCloudArena4D(geometry));
      }
    });
  }
  else {
    throw new Error("Potree: Failed to load point cloud from URL " + path);
  }
}

function updateVisibility(pointclouds, camera, renderer, totalPointBudget) {
  var numVisibleNodes = 0;
  var numVisiblePoints = 0;
  var numVisiblePointsInPointclouds = new Map(pointclouds.map(pc => [pc, 0]));
  var visibleNodes = [];
  var visibleGeometry = [];
  var unloadedGeometry = [];
  var lowestSpacing = Infinity;

  //Calculate object space frustum and cam pos and setup priority queue
  var structures = updateVisibilityStructures(pointclouds, camera, renderer);
  var frustums = structures.frustums;
  var camObjPositions = structures.camObjPositions;
  var priorityQueue = structures.priorityQueue;

  var loadedToGPUThisFrame = 0;
  var domWidth = renderer.domElement.clientWidth;
  var domHeight = renderer.domElement.clientHeight;

  //Check if pointcloud has been transformed, some code will only be executed if changes have been detected
  if (!_Global_js__WEBPACK_IMPORTED_MODULE_8__.Global.pointcloudTransformVersion) {
    _Global_js__WEBPACK_IMPORTED_MODULE_8__.Global.pointcloudTransformVersion = new Map();
  }

  var pointcloudTransformVersion = _Global_js__WEBPACK_IMPORTED_MODULE_8__.Global.pointcloudTransformVersion;

  for (var i = 0; i < pointclouds.length; i++) {
    var pointcloud = pointclouds[i];

    if (!pointcloud.visible) {
      continue;
    }

    pointcloud.updateMatrixWorld();

    if (!pointcloudTransformVersion.has(pointcloud)) {
      pointcloudTransformVersion.set(pointcloud,
        {
          number: 0,
          transform: pointcloud.matrixWorld.clone()
        });
    }
    else {
      var version = pointcloudTransformVersion.get(pointcloud);
      if (!version.transform.equals(pointcloud.matrixWorld)) {
        version.number++;
        version.transform.copy(pointcloud.matrixWorld);

        pointcloud.dispatchEvent(
          {
            type: "transformation_changed",
            target: pointcloud
          });
      }
    }
  }

  //Process priority queue
  while (priorityQueue.size() > 0) {
    var element = priorityQueue.pop();
    var node = element.node;
    var parent = element.parent;
    var pointcloud = pointclouds[element.pointcloud];
    var box = node.getBoundingBox();
    var frustum = frustums[element.pointcloud];
    var camObjPos = camObjPositions[element.pointcloud];

    var insideFrustum = frustum.intersectsBox(box);
    var maxLevel = pointcloud.maxLevel || Infinity;
    var level = node.getLevel();

    var visible = insideFrustum;
    // Within 'global' total budget?
    visible = visible && (numVisiblePoints + node.getNumPoints() <= totalPointBudget);
    // Within budget of the point cloud?
    visible = visible && !(numVisiblePointsInPointclouds.get(pointcloud) + node.getNumPoints() > pointcloud.pointBudget);
    visible = visible && level < maxLevel;

    if (node.spacing) {
      lowestSpacing = Math.min(lowestSpacing, node.spacing);
    }
    else if (node.geometryNode && node.geometryNode.spacing) {
      lowestSpacing = Math.min(lowestSpacing, node.geometryNode.spacing);
    }

    if (!visible) {
      continue;
    }

    numVisibleNodes++;
    numVisiblePoints += node.getNumPoints();

    var numVisiblePointsInPointcloud = numVisiblePointsInPointclouds.get(pointcloud);
    numVisiblePointsInPointclouds.set(pointcloud, numVisiblePointsInPointcloud + node.getNumPoints());

    pointcloud.numVisibleNodes++;
    pointcloud.numVisiblePoints += node.getNumPoints();

    if (node.isGeometryNode() && (!parent || parent.isTreeNode())) {
      if (node.isLoaded() && loadedToGPUThisFrame < _Global_js__WEBPACK_IMPORTED_MODULE_8__.Global.maxNodesLoadGPUFrame) {
        node = pointcloud.toTreeNode(node, parent);
        loadedToGPUThisFrame++;
      }
      else {
        unloadedGeometry.push(node);
        visibleGeometry.push(node);
      }
    }

    if (node.isTreeNode()) {
      _Global_js__WEBPACK_IMPORTED_MODULE_8__.Global.lru.touch(node.geometryNode);

      node.sceneNode.visible = true;
      node.sceneNode.material = pointcloud.material;

      visibleNodes.push(node);
      pointcloud.visibleNodes.push(node);

      if (node._transformVersion === undefined) {
        node._transformVersion = -1;
      }

      var transformVersion = pointcloudTransformVersion.get(pointcloud);
      if (node._transformVersion !== transformVersion.number) {
        node.sceneNode.updateMatrix();
        node.sceneNode.matrixWorld.multiplyMatrices(pointcloud.matrixWorld, node.sceneNode.matrix);
        node._transformVersion = transformVersion.number;
      }

      if (pointcloud.showBoundingBox && !node.boundingBoxNode && node.getBoundingBox) {
        var boxHelper = new three__WEBPACK_IMPORTED_MODULE_0__.Box3Helper(node.getBoundingBox());
        boxHelper.matrixAutoUpdate = false;
        pointcloud.boundingBoxNodes.push(boxHelper);
        node.boundingBoxNode = boxHelper;
        node.boundingBoxNode.matrix.copy(pointcloud.matrixWorld);
      }
      else if (pointcloud.showBoundingBox) {
        node.boundingBoxNode.visible = true;
        node.boundingBoxNode.matrix.copy(pointcloud.matrixWorld);
      }
      else if (!pointcloud.showBoundingBox && node.boundingBoxNode) {
        node.boundingBoxNode.visible = false;
      }
    }

    //Add child nodes to priorityQueue
    var children = node.getChildren();
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      var weight = 0;

      //Perspective camera
      if (camera.isPerspectiveCamera) {
        var sphere = child.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere());
        var center = sphere.center;
        var distance = sphere.center.distanceTo(camObjPos);

        var radius = sphere.radius;
        var fov = (camera.fov * Math.PI) / 180;
        var slope = Math.tan(fov / 2);
        var projFactor = (0.5 * domHeight) / (slope * distance);
        var screenPixelRadius = radius * projFactor;

        //If pixel radius bellow minimum discard
        if (screenPixelRadius < pointcloud.minimumNodePixelSize) {
          continue;
        }

        weight = screenPixelRadius;

        //Really close to the camera
        if (distance - radius < 0) {
          weight = Number.MAX_VALUE;
        }
      }
      //Orthographic camera
      else {
        //TODO <IMPROVE VISIBILITY>
        var bb = child.getBoundingBox();
        var distance = child.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere()).center.distanceTo(camObjPos);
        var diagonal = bb.max.clone().sub(bb.min).length();
        weight = diagonal / distance;
      }

      priorityQueue.push(
        {
          pointcloud: element.pointcloud,
          node: child,
          parent: node,
          weight: weight
        });
    }
  }

  //Update DEM
  var candidates = pointclouds.filter(p => (p.generateDEM && p.dem instanceof DEM));

  for (var pointcloud of candidates) {
    var updatingNodes = pointcloud.visibleNodes.filter(n => n.getLevel() <= _Global_js__WEBPACK_IMPORTED_MODULE_8__.Global.maxDEMLevel);
    pointcloud.dem.update(updatingNodes);
  }

  for (var i = 0; i < Math.min(_Global_js__WEBPACK_IMPORTED_MODULE_8__.Global.maxNodesLoading, unloadedGeometry.length); i++) {
    unloadedGeometry[i].load();
  }

  return {
    visibleNodes: visibleNodes,
    numVisiblePoints: numVisiblePoints,
    lowestSpacing: lowestSpacing
  };
}

function updatePointClouds(pointclouds, camera, renderer, totalPointBudget) {
  var result = updateVisibility(pointclouds, camera, renderer, totalPointBudget);

  for (var i = 0; i < pointclouds.length; i++) {
    pointclouds[i].updateMaterial(pointclouds[i].material, camera, renderer);
    pointclouds[i].updateVisibleBounds();
  }

  _Global_js__WEBPACK_IMPORTED_MODULE_8__.Global.lru.freeMemory();

  return result;
}

function updateVisibilityStructures(pointclouds, camera, renderer) {
  var frustums = [];
  var camObjPositions = [];
  var priorityQueue = new _lib_BinaryHeap_js__WEBPACK_IMPORTED_MODULE_7__.BinaryHeap(function (x) {
    return 1 / x.weight;
  });

  for (var i = 0; i < pointclouds.length; i++) {
    var pointcloud = pointclouds[i];

    if (!pointcloud.initialized()) {
      continue;
    }

    pointcloud.numVisibleNodes = 0;
    pointcloud.numVisiblePoints = 0;
    pointcloud.deepestVisibleLevel = 0;
    pointcloud.visibleNodes = [];
    pointcloud.visibleGeometry = [];

    //Frustum in object space
    camera.updateMatrixWorld();
    var frustum = new three__WEBPACK_IMPORTED_MODULE_0__.Frustum();
    var viewI = camera.matrixWorldInverse;
    var world = pointcloud.matrixWorld;

    //Use close near plane for frustum intersection
    var frustumCam = camera.clone();
    frustumCam.near = camera.near; //Math.min(camera.near, 0.1);
    frustumCam.updateProjectionMatrix();
    var proj = camera.projectionMatrix;

    var fm = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().multiply(proj).multiply(viewI).multiply(world);
    frustum.setFromProjectionMatrix(fm);
    frustums.push(frustum);

    //Camera position in object space
    var view = camera.matrixWorld;
    //var worldI = new THREE.Matrix4().getInverse(world);
    var worldI = world.clone().invert();
    var camMatrixObject = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().multiply(worldI).multiply(view);
    var camObjPos = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().setFromMatrixPosition(camMatrixObject);
    camObjPositions.push(camObjPos);

    if (pointcloud.visible && pointcloud.root !== null) {
      priorityQueue.push(
        {
          pointcloud: i,
          node: pointcloud.root,
          weight: Number.MAX_VALUE
        });
    }

    //Hide all previously visible nodes
    if (pointcloud.root.isTreeNode()) {
      pointcloud.hideDescendants(pointcloud.root.sceneNode);
    }

    for (var j = 0; j < pointcloud.boundingBoxNodes.length; j++) {
      pointcloud.boundingBoxNodes[j].visible = false;
    }
  }

  return {
    frustums: frustums,
    camObjPositions: camObjPositions,
    priorityQueue: priorityQueue
  };
}




/***/ }),

/***/ "./source/Shaders.js":
/*!***************************!*\
  !*** ./source/Shaders.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shaders": () => (/* binding */ Shaders)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);




var Shaders = {};

//pointcloud.vs
Shaders.vertex = `
precision highp float;
precision highp int;

` + three__WEBPACK_IMPORTED_MODULE_0__.ShaderChunk.common + `
` + three__WEBPACK_IMPORTED_MODULE_0__.ShaderChunk.logdepthbuf_pars_vertex + `

// attribute vec3 position;
// attribute vec3 color;
attribute float intensity;
attribute float classification;
attribute float returnNumber;
attribute float numberOfReturns;
attribute float pointSourceID;
attribute vec4 indices;
attribute float spacing;

// uniform mat4 modelMatrix;
// uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;
// uniform mat4 viewMatrix;
uniform mat4 uViewInv;

uniform float uScreenWidth;
uniform float uScreenHeight;

uniform float fov;
uniform float near;
uniform float far;

uniform bool uDebug;

uniform float size;
uniform float minSize;
uniform float maxSize;

uniform float uPCIndex;
uniform float uOctreeSpacing;
uniform float uNodeSpacing;
uniform float uOctreeSize;
uniform vec3 uBBSize;
uniform float uLevel;
uniform float uVNStart;
uniform bool uIsLeafNode;

uniform vec3 uColor;
uniform float uOpacity;

uniform vec2 elevationRange;
uniform vec2 intensityRange;
uniform float intensityGamma;
uniform float intensityContrast;
uniform float intensityBrightness;
uniform float rgbGamma;
// uniform float rgbContrast;
uniform float rgbBrightness;
uniform float uTransition;
uniform float wRGB;
uniform float wIntensity;
uniform float wElevation;
uniform float wClassification;
uniform float wReturnNumber;
uniform float wSourceID;

uniform sampler2D visibleNodes;
uniform sampler2D gradient;
uniform sampler2D classificationLUT;

#if defined(num_clipplanes) && num_clipplanes > 0 

uniform vec4 clipPlanes[num_clipplanes];

bool isClipped(vec3 point) {
	bool clipped = false;
	for (int i = 0; i < num_clipplanes; ++i) {
		vec4 p = clipPlanes[i];
		clipped = clipped || dot(-point, p.xyz) > p.w;
	}
	return clipped;
}

#else

bool isClipped(vec3 point) {
	return false;
}

#endif

varying vec4 vColor;
varying float vLogDepth;
varying vec3 vViewPosition;
varying float vRadius;
varying float vPointSize;

// The round() function is not available in WebGL 1.0
float myRound(float number)
{
	return floor(number + 0.5);
}

//---------------------
//OCTREE
//---------------------

#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_octree)
	/**
	 * number of 1-bits up to inclusive index position
	 * number is treated as if it were an integer in the range 0-255
	 */
	int numberOfOnes(int number, int index)
	{
		int numOnes = 0;
		int tmp = 128;

		for(int i = 7; i >= 0; i--)
		{
			if(number >= tmp)
			{
				number = number - tmp;

				if(i <= index)
				{
					numOnes++;
				}
			}
			
			tmp = tmp / 2;
		}

		return numOnes;
	}

	/**
	 * checks whether the bit at index is 1
	 * number is treated as if it were an integer in the range 0-255
	 */
	bool isBitSet(int number, int index)
	{
		//weird multi else if due to lack of proper array, int and bitwise support in WebGL 1.0
		int powi = 1;

		if(index == 0)
		{
			powi = 1;
		}
		else if(index == 1)
		{
			powi = 2;
		}
		else if(index == 2)
		{
			powi = 4;
		}
		else if(index == 3)
		{
			powi = 8;
		}
		else if(index == 4)
		{
			powi = 16;
		}
		else if(index == 5)
		{
			powi = 32;
		}
		else if(index == 6)
		{
			powi = 64;
		}
		else if(index == 7)
		{
			powi = 128;
		}
		else
		{
			return false;
		}

		int ndp = number / powi;

		return mod(float(ndp), 2.0) != 0.0;
	}

	/**
	 * find the LOD at the point position
	 */
	float getLOD()
	{
		vec3 offset = vec3(0.0, 0.0, 0.0);
		int iOffset = int(uVNStart);
		float depth = uLevel;

		for(float i = 0.0; i <= 30.0; i++)
		{
			float nodeSizeAtLevel = uOctreeSize / pow(2.0, i + uLevel + 0.0);
			
			vec3 index3d = (position-offset) / nodeSizeAtLevel;
			index3d = floor(index3d + 0.5);
			int index = int(myRound(4.0 * index3d.x + 2.0 * index3d.y + index3d.z));

			vec4 value = texture2D(visibleNodes, vec2(float(iOffset) / 2048.0, 0.0));
			int mask = int(myRound(value.r * 255.0));

			if(isBitSet(mask, index))
			{
				//there are more visible child nodes at this position
				int advanceG = int(myRound(value.g * 255.0)) * 256;
				int advanceB = int(myRound(value.b * 255.0));
				int advanceChild = numberOfOnes(mask, index - 1);
				int advance = advanceG + advanceB + advanceChild;

				iOffset = iOffset + advance;
				
				depth++;
			}
			else
			{
				//no more visible child nodes at this position
				return value.a * 255.0;
				//return depth;
			}
			
			offset = offset + (vec3(1.0, 1.0, 1.0) * nodeSizeAtLevel * 0.5) * index3d;
		}
			
		return depth;
	}

	float getSpacing()
	{
		vec3 offset = vec3(0.0, 0.0, 0.0);
		int iOffset = int(uVNStart);
		float depth = uLevel;
		float spacing = uNodeSpacing;

		for(float i = 0.0; i <= 30.0; i++)
		{
			float nodeSizeAtLevel = uOctreeSize / pow(2.0, i + uLevel + 0.0);
			
			vec3 index3d = (position-offset) / nodeSizeAtLevel;
			index3d = floor(index3d + 0.5);
			int index = int(myRound(4.0 * index3d.x + 2.0 * index3d.y + index3d.z));

			vec4 value = texture2D(visibleNodes, vec2(float(iOffset) / 2048.0, 0.0));
			int mask = int(myRound(value.r * 255.0));
			float spacingFactor = value.a;

			if(i > 0.0)
			{
				spacing = spacing / (255.0 * spacingFactor);
			}
			
			if(isBitSet(mask, index))
			{
				//there are more visible child nodes at this position
				int advanceG = int(myRound(value.g * 255.0)) * 256;
				int advanceB = int(myRound(value.b * 255.0));
				int advanceChild = numberOfOnes(mask, index - 1);
				int advance = advanceG + advanceB + advanceChild;

				iOffset = iOffset + advance;

				depth++;
			}
			else
			{
				//no more visible child nodes at this position
				return spacing;
			}
			
			offset = offset + (vec3(1.0, 1.0, 1.0) * nodeSizeAtLevel * 0.5) * index3d;
		}
			
		return spacing;
	}

	float getPointSizeAttenuation()
	{
		return pow(2.0, getLOD());
	}
#endif

//---------------------
//KD-TREE
//---------------------
#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_kdtree)
	float getLOD()
	{
		vec3 offset = vec3(0.0, 0.0, 0.0);
		float iOffset = 0.0;
		float depth = 0.0;
			
		vec3 size = uBBSize;	
		vec3 pos = position;
			
		for(float i = 0.0; i <= 1000.0; i++)
		{
			vec4 value = texture2D(visibleNodes, vec2(iOffset / 2048.0, 0.0));
			
			int children = int(value.r * 255.0);
			float next = value.g * 255.0;
			int split = int(value.b * 255.0);
			
			if(next == 0.0)
			{
			 	return depth;
			}
			
			vec3 splitv = vec3(0.0, 0.0, 0.0);
			if(split == 1)
			{
				splitv.x = 1.0;
			}
			else if(split == 2)
			{
			 	splitv.y = 1.0;
			}
			else if(split == 4)
			{
			 	splitv.z = 1.0;
			}
			
			iOffset = iOffset + next;
			
			float factor = length(pos * splitv / size);

			//Left
			if(factor < 0.5)
			{
				if(children == 0 || children == 2)
				{
					return depth;
				}
			}
			//Right
			else
			{
				pos = pos - size * splitv * 0.5;
				if(children == 0 || children == 1)
				{
					return depth;
				}
				if(children == 3)
				{
					iOffset = iOffset + 1.0;
				}
			}

			size = size * ((1.0 - (splitv + 1.0) / 2.0) + 0.5);
			depth++;
		}
			
		return depth;	
	}

	float getPointSizeAttenuation()
	{
		return 0.5 * pow(1.3, getLOD());
	}
#endif

//formula adapted from: http://www.dfstudios.co.uk/articles/programming/image-programming-algorithms/image-processing-algorithms-part-5-contrast-adjustment/
float getContrastFactor(float contrast)
{
	return (1.0158730158730156 * (contrast + 1.0)) / (1.0158730158730156 - contrast);
}

vec3 getRGB()
{
	vec3 rgb = color;
	
	rgb = pow(rgb, vec3(rgbGamma));
	rgb = rgb + rgbBrightness;
	rgb = clamp(rgb, 0.0, 1.0);
	
	return rgb;
}

float getIntensity()
{
	float w = (intensity - intensityRange.x) / (intensityRange.y - intensityRange.x);
	w = pow(w, intensityGamma);
	w = w + intensityBrightness;
	w = (w - 0.5) * getContrastFactor(intensityContrast) + 0.5;
	w = clamp(w, 0.0, 1.0);

	return w;
}

vec3 getElevation()
{
	vec4 world = modelMatrix * vec4( position, 1.0 );
	float w = (world.z - elevationRange.x) / (elevationRange.y - elevationRange.x);
	return texture2D(gradient, vec2(w,1.0-w)).rgb;
}

vec4 getClassification()
{
	vec2 uv = vec2(classification / 255.0, 0.5);
	return texture2D(classificationLUT, uv);
}

vec3 getReturnNumber()
{
	if(numberOfReturns == 1.0)
	{
		return vec3(1.0, 1.0, 0.0);
	}
	else
	{
		if(returnNumber == 1.0)
		{
			return vec3(1.0, 0.0, 0.0);
		}
		else if(returnNumber == numberOfReturns)
		{
			return vec3(0.0, 0.0, 1.0);
		}
		else
		{
			return vec3(0.0, 1.0, 0.0);
		}
	}
}

vec3 getSourceID()
{
	float w = mod(pointSourceID, 10.0) / 10.0;
	return texture2D(gradient, vec2(w,1.0 - w)).rgb;
}

vec3 getCompositeColor()
{
	vec3 c;
	float w;

	c += wRGB * getRGB();
	w += wRGB;
	
	c += wIntensity * getIntensity() * vec3(1.0, 1.0, 1.0);
	w += wIntensity;
	
	c += wElevation * getElevation();
	w += wElevation;
	
	c += wReturnNumber * getReturnNumber();
	w += wReturnNumber;
	
	c += wSourceID * getSourceID();
	w += wSourceID;
	
	vec4 cl = wClassification * getClassification();
    c += cl.a * cl.rgb;
	w += wClassification * cl.a;

	c = c / w;
	
	if(w == 0.0)
	{
		gl_Position = vec4(100.0, 100.0, 100.0, 0.0);
	}
	
	return c;
}

vec4 getColor()
{
	vec3 color;
       float alpha = 1.0;

	#ifdef color_type_rgb
		color = getRGB();
	#elif defined color_type_height
		color = getElevation();
	#elif defined color_type_rgb_height
		vec3 cHeight = getElevation();
		color = (1.0 - uTransition) * getRGB() + uTransition * cHeight;
	#elif defined color_type_depth
		float linearDepth = gl_Position.w;
		float expDepth = (gl_Position.z / gl_Position.w) * 0.5 + 0.5;
		color = vec3(linearDepth, expDepth, 0.0);
	#elif defined color_type_intensity
		float w = getIntensity();
		color = vec3(w, w, w);
	#elif defined color_type_intensity_gradient
		float w = getIntensity();
		color = texture2D(gradient, vec2(w,1.0-w)).rgb;
	#elif defined color_type_color
		color = uColor;
	#elif defined color_type_lod
		float depth = getLOD();
		float w = depth / 10.0;
		color = texture2D(gradient, vec2(w,1.0-w)).rgb;
	#elif defined color_type_point_index
		color = indices.rgb;
	#elif defined color_type_classification
		vec4 cl = getClassification();
		color = cl.rgb;
               alpha = cl.a;
	#elif defined color_type_return_number
		color = getReturnNumber();
	#elif defined color_type_source
		color = getSourceID();
	#elif defined color_type_normal
		color = (modelMatrix * vec4(normal, 0.0)).xyz;
	#elif defined color_type_phong
		color = color;
	#elif defined color_type_composite
		color = getCompositeColor();
	#endif

	return vec4(color, alpha);
}

float getPointSize()
{
	float pointSize = 1.0;
	
	float slope = tan(fov / 2.0);
	float projFactor = -0.5 * uScreenHeight / (slope * vViewPosition.z);
	
	float r = uOctreeSpacing * 1.7;
	vRadius = r;

	#if defined fixed_point_size
		pointSize = size;
	#elif defined attenuated_point_size
		pointSize = size * spacing * projFactor;
	#elif defined adaptive_point_size
		if(uIsLeafNode && false)
		{
			pointSize = size * spacing * projFactor;
		}
		else
		{
			float worldSpaceSize = 1.0 * size * r / getPointSizeAttenuation();
			pointSize = worldSpaceSize * projFactor;
		}
	#endif

	pointSize = max(minSize, pointSize);
	pointSize = min(maxSize, pointSize);
	
	vRadius = pointSize / projFactor;

	return pointSize;
}

void main()
{
	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
	vViewPosition = mvPosition.xyz;
	gl_Position = projectionMatrix * mvPosition;

	vLogDepth = log2(-mvPosition.z);

	//POINT SIZE
	float pointSize = getPointSize();
	gl_PointSize = pointSize;
	vPointSize = pointSize;
	` + three__WEBPACK_IMPORTED_MODULE_0__.ShaderChunk.logdepthbuf_vertex + `

	//COLOR
	vColor = getColor();

	#if defined hq_depth_pass
		float originalDepth = gl_Position.w;
		float adjustedDepth = originalDepth + 2.0 * vRadius;
		float adjust = adjustedDepth / originalDepth;

		mvPosition.xyz = mvPosition.xyz * adjust;
		gl_Position = projectionMatrix * mvPosition;
	#endif

	// CLIPPING
	vec4 clipPosition = modelMatrix * vec4( position, 1.0 );
	if (isClipped(clipPosition.xyz)) {
		gl_Position = vec4(100.0, 100.0, 100.0, 1.0); // Outside clip volume
	} 
}`;

//"pointcloud.fs"
Shaders.fragment = `

#if defined USE_LOGDEPTHBUF_EXT || defined paraboloid_point_shape
	#extension GL_EXT_frag_depth : enable
#endif

precision highp float;
precision highp int;

` + three__WEBPACK_IMPORTED_MODULE_0__.ShaderChunk.common + `
` + three__WEBPACK_IMPORTED_MODULE_0__.ShaderChunk.logdepthbuf_pars_fragment + `

// uniform mat4 viewMatrix;
uniform mat4 uViewInv;
// uniform mat4 uProjInv;
// uniform vec3 cameraPosition;

uniform mat4 projectionMatrix;
uniform float uOpacity;

uniform float fov;
uniform float uSpacing;
uniform float near;
uniform float far;
uniform float uPCIndex;
uniform float uScreenWidth;
uniform float uScreenHeight;

varying vec4 vColor;
varying float vLogDepth;
varying vec3 vViewPosition;
varying float vRadius;
varying float vPointSize;
varying vec3 vPosition;

void main()
{
	vec3 color = vColor.rgb;
	float depth = gl_FragCoord.z;

	#if defined circle_point_shape || defined paraboloid_point_shape
		float u = (2.0 * gl_PointCoord.x) - 1.0;
		float v = (2.0 * gl_PointCoord.y) - 1.0;
	#endif
	
	#if defined circle_point_shape
		float cc = (u*u) + (v*v);
		if(cc > 1.0)
		{
			discard;
		}
	#endif

	#if defined color_type_point_index
		gl_FragColor = vec4(color, uPCIndex / 255.0);
	#else
               if (vColor.a == 0.0) {
                      discard;
               }
		gl_FragColor = vec4(color, uOpacity);
	#endif

	#if defined paraboloid_point_shape
		float wi = -( u*u + v*v);
		vec4 pos = vec4(vViewPosition, 1.0);
		pos.z += wi * vRadius;
		float linearDepth = -pos.z;
		pos = projectionMatrix * pos;
		pos = pos / pos.w;
		float expDepth = pos.z;
		depth = (pos.z + 1.0) / 2.0;

		gl_FragDepthEXT = depth;
		
		#if defined color_type_depth
			color.r = linearDepth;
			color.g = expDepth;
		#endif
	#endif
	
	` + three__WEBPACK_IMPORTED_MODULE_0__.ShaderChunk.logdepthbuf_fragment +  `

	#if defined weighted_splats
		float distance = 2.0 * length(gl_PointCoord.xy - 0.5);
		float weight = max(0.0, 1.0 - distance);
		weight = pow(weight, 1.5);

		gl_FragColor.a = weight;
		gl_FragColor.xyz = gl_FragColor.xyz * weight;
	#endif
}`;




/***/ }),

/***/ "./source/XHRFactory.js":
/*!******************************!*\
  !*** ./source/XHRFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XHRFactory": () => (/* binding */ XHRFactory)
/* harmony export */ });


/**
 * Migrated from Potree (https://github.com/potree/potree/blob/develop/src/XHRFactory.js)
 * by Lars Moastuen <@larsmoa>.
 */

const XHRFactory = {
	config: {
		withCredentials: false,
		customHeaders: [
			{ header: null, value: null }
		]
	},

	createXMLHttpRequest: function () {
		let xhr = new XMLHttpRequest();

		if (this.config.customHeaders &&
			Array.isArray(this.config.customHeaders) &&
			this.config.customHeaders.length > 0) {
			let baseOpen = xhr.open;
			let customHeaders = this.config.customHeaders;
			xhr.open = function () {
				baseOpen.apply(this, [].slice.call(arguments));
				customHeaders.forEach(function (customHeader) {
					if (!!customHeader.header && !!customHeader.value) {
						xhr.setRequestHeader(customHeader.header, customHeader.value);
					}
				});
			};
		}

		return xhr;
	},

	fetch: async function(resource) {
		const headers = new Headers();
		if (this.config.customHeaders) {
			this.config.customHeaders.forEach(function (customHeader) {
				if (!!customHeader.header && !!customHeader.value) {
					headers.append(customHeader.header, customHeader.value);
				}
			});
		}
		const options = {
			headers,
			credentials: XHRFactory.config.withCredentials ? 'include' : 'same-origin'
		};
		return fetch(resource, options);
	}
};



/***/ }),

/***/ "./source/lib/BinaryHeap.js":
/*!**********************************!*\
  !*** ./source/lib/BinaryHeap.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BinaryHeap": () => (/* binding */ BinaryHeap)
/* harmony export */ });
/*
** Binary Heap implementation in Javascript
** From: http://eloquentjavascript.net/1st_edition/appendix2.htmlt
**
** Copyright (c) 2007 Marijn Haverbeke, last modified on November 28 2013.
**
** Licensed under a Creative Commons attribution-noncommercial license. 
** All code in this book may also be considered licensed under an MIT license.
*/

function BinaryHeap(scoreFunction)
{
	this.content = [];
	this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype =
{
	push: function(element)
	{
		// Add the new element to the end of the array.
		this.content.push(element);
		// Allow it to bubble up.
		this.bubbleUp(this.content.length - 1);
	},

	pop: function()
	{
		// Store the first element so we can return it later.
		var result = this.content[0];
		// Get the element at the end of the array.
		var end = this.content.pop();
		// If there are any elements left, put the end element at the
		// start, and let it sink down.
		if(this.content.length > 0)
		{
			this.content[0] = end;
			this.sinkDown(0);
		}
		return result;
	},

	remove: function(node)
	{
		var length = this.content.length;
		// To remove a value, we must search through the array to find
		// it.
		for(var i = 0; i < length; i++)
		{
			if(this.content[i] != node) continue;
			// When it is found, the process seen in 'pop' is repeated
			// to fill up the hole.
			var end = this.content.pop();
			// If the element we popped was the one we needed to remove,
			// we're done.
			if(i == length - 1) break;
			// Otherwise, we replace the removed element with the popped
			// one, and allow it to float up or sink down as appropriate.
			this.content[i] = end;
			this.bubbleUp(i);
			this.sinkDown(i);
			break;
		}
	},

	size: function()
	{
		return this.content.length;
	},

	bubbleUp: function(n)
	{
		// Fetch the element that has to be moved.
		var element = this.content[n], score = this.scoreFunction(element);
		// When at 0, an element can not go up any further.
		while(n > 0)
		{
			// Compute the parent element's index, and fetch it.
			var parentN = Math.floor((n + 1) / 2) - 1,
			parent = this.content[parentN];
			// If the parent has a lesser score, things are in order and we
			// are done.
			if(score >= this.scoreFunction(parent))
				break;

			// Otherwise, swap the parent with the current element and
			// continue.
			this.content[parentN] = element;
			this.content[n] = parent;
			n = parentN;
		}
	},

	sinkDown: function(n)
	{
		// Look up the target element and its score.
		var length = this.content.length,
		element = this.content[n],
		elemScore = this.scoreFunction(element);

		while(true)
		{
			// Compute the indices of the child elements.
			var child2N = (n + 1) * 2, child1N = child2N - 1;
			// This is used to store the new position of the element,
			// if any.
			var swap = null;
			// If the first child exists (is inside the array)...
			if(child1N < length)
			{
				// Look it up and compute its score.
				var child1 = this.content[child1N],
				child1Score = this.scoreFunction(child1);
				// If the score is less than our element's, we need to swap.
				if(child1Score < elemScore)
					swap = child1N;
			}
			// Do the same checks for the other child.
			if(child2N < length)
			{
				var child2 = this.content[child2N],
				child2Score = this.scoreFunction(child2);
				if(child2Score < (swap == null ? elemScore : child1Score))
					swap = child2N;
			}

			// No need to swap further, we are done.
			if(swap == null) break;

			// Otherwise, swap and continue.
			this.content[n] = this.content[swap];
			this.content[swap] = element;
			n = swap;
		}
	}
};




/***/ }),

/***/ "./source/loaders/BinaryLoader.js":
/*!****************************************!*\
  !*** ./source/loaders/BinaryLoader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BinaryLoader": () => (/* binding */ BinaryLoader)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PointAttributes.js */ "./source/PointAttributes.js");
/* harmony import */ var _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/VersionUtils.js */ "./source/utils/VersionUtils.js");
/* harmony import */ var _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/WorkerManager.js */ "./source/utils/WorkerManager.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global.js */ "./source/Global.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../XHRFactory.js */ "./source/XHRFactory.js");










class BinaryLoader
{
	constructor(version, boundingBox, scale)
	{
		if(typeof(version) === "string")
		{
			this.version = new _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_2__.VersionUtils(version);
		}
		else
		{
			this.version = version;
		}

		this.boundingBox = boundingBox;
		this.scale = scale;
	}

	load(node)
	{
		if(node.loaded)
		{
			return;
		}

		var url = node.getURL();

		if(this.version.equalOrHigher("1.4"))
		{
			url += ".bin";
		}
		
		var self = this;
		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_5__.XHRFactory.createXMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.responseType = "arraybuffer";
		xhr.overrideMimeType("text/plain; charset=x-user-defined");
		xhr.onload = function()
		{
			try
			{
				self.parse(node, xhr.response);
			}
			catch(e)
			{
				_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.numNodesLoading--;
				console.error("Potree: Exception thrown parsing points.", e);
			}
		};
		xhr.onerror = function(event)
		{
			_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.numNodesLoading--;
			console.error("Potree: Failed to load file.", xhr, url);
		};

		xhr.send(null);
	};

	parse(node, buffer)
	{
		var pointAttributes = node.pcoGeometry.pointAttributes;
		var numPoints = buffer.byteLength / node.pcoGeometry.pointAttributes.byteSize;

		if(this.version.upTo("1.5"))
		{
			node.numPoints = numPoints;
		}

		var message =
		{
			buffer: buffer,
			pointAttributes: pointAttributes,
			version: this.version.version,
			min: [node.boundingBox.min.x, node.boundingBox.min.y, node.boundingBox.min.z],
			offset: [node.pcoGeometry.offset.x, node.pcoGeometry.offset.y, node.pcoGeometry.offset.z],
			scale: this.scale,
			spacing: node.spacing,
			hasChildren: node.hasChildren,
			name: node.name
		};

		_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.workerPool.runTask(_utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_3__.WorkerManager.BINARY_DECODER, function(e)
		{
			var data = e.data;

			if(data.error !== undefined)
			{
				_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.numNodesLoading--;
				console.error("Potree: Binary worker error.", data);
				return;
			}

			var buffers = data.attributeBuffers;
			var tightBoundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(data.tightBoundingBox.min), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(data.tightBoundingBox.max));
			var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();

			for(var property in buffers)
			{
				var buffer = buffers[property].buffer;

				if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttributeNames.POSITION_CARTESIAN)
				{
					geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(buffer), 3));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttributeNames.COLOR_PACKED)
				{
					geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Uint8Array(buffer), 4, true));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttributeNames.INTENSITY)
				{
					geometry.setAttribute("intensity", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(buffer), 1));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttributeNames.CLASSIFICATION)
				{
					geometry.setAttribute("classification", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Uint8Array(buffer), 1));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttributeNames.NORMAL_SPHEREMAPPED)
				{
					geometry.setAttribute("normal", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(buffer), 3));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttributeNames.NORMAL_OCT16)
				{
					geometry.setAttribute("normal", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(buffer), 3));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttributeNames.NORMAL)
				{
					geometry.setAttribute("normal", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(buffer), 3));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttributeNames.INDICES)
				{
					var bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Uint8Array(buffer), 4);
					bufferAttribute.normalized = true;
					geometry.setAttribute("indices", bufferAttribute);
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttributeNames.SPACING)
				{
					var bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(buffer), 1);
					geometry.setAttribute("spacing", bufferAttribute);
				}
			}

			tightBoundingBox.max.sub(tightBoundingBox.min);
			tightBoundingBox.min.set(0, 0, 0);

			var numPoints = e.data.buffer.byteLength / pointAttributes.byteSize;

			node.numPoints = numPoints;
			node.geometry = geometry;
			node.mean = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(...data.mean);
			node.tightBoundingBox = tightBoundingBox;
			node.loaded = true;
			node.loading = false;
			node.estimatedSpacing = data.estimatedSpacing;
			_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.numNodesLoading--;
		}, message, [message.buffer]);
	};
};




/***/ }),

/***/ "./source/loaders/EptLoader.js":
/*!*************************************!*\
  !*** ./source/loaders/EptLoader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EptLoader": () => (/* binding */ EptLoader)
/* harmony export */ });
/* harmony import */ var _pointcloud_geometries_PointCloudEptGeometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pointcloud/geometries/PointCloudEptGeometry.js */ "./source/pointcloud/geometries/PointCloudEptGeometry.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../XHRFactory.js */ "./source/XHRFactory.js");





/**
 * @author Connor Manning
 */
class EptLoader
{
	static async load(file, callback)
	{
		var response = await _XHRFactory_js__WEBPACK_IMPORTED_MODULE_1__.XHRFactory.fetch(file);
		var json = await response.json();
		var url = file.substr(0, file.lastIndexOf("ept.json"));

		var geometry = new _pointcloud_geometries_PointCloudEptGeometry_js__WEBPACK_IMPORTED_MODULE_0__.PointCloudEptGeometry(url, json);
		var root = new _pointcloud_geometries_PointCloudEptGeometry_js__WEBPACK_IMPORTED_MODULE_0__.PointCloudEptGeometryNode(geometry);
		geometry.root = root;
		geometry.root.load();

		callback(geometry);
	}
};




/***/ }),

/***/ "./source/loaders/GreyhoundBinaryLoader.js":
/*!*************************************************!*\
  !*** ./source/loaders/GreyhoundBinaryLoader.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreyhoundBinaryLoader": () => (/* binding */ GreyhoundBinaryLoader)
/* harmony export */ });
/* harmony import */ var _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PointAttributes.js */ "./source/PointAttributes.js");
/* harmony import */ var _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/VersionUtils.js */ "./source/utils/VersionUtils.js");
/* harmony import */ var _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/WorkerManager.js */ "./source/utils/WorkerManager.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Global.js */ "./source/Global.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../XHRFactory.js */ "./source/XHRFactory.js");








class GreyhoundBinaryLoader
{
	constructor(version, boundingBox, scale)
	{
		if(typeof(version) === "string")
		{
			this.version = new _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_1__.VersionUtils(version);
		}
		else
		{
			this.version = version;
		}

		this.boundingBox = boundingBox;
		this.scale = scale;
	}

	load(node)
	{
		if(node.loaded) return;

		var self = this;
		var url = node.getURL();

		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_4__.XHRFactory.createXMLHttpRequest();
		xhr.overrideMimeType("text/plain");
		xhr.open("GET", url, true);
		xhr.responseType = "arraybuffer";
		xhr.overrideMimeType("text/plain; charset=x-user-defined");
		xhr.onload = function()
		{
			try
			{
				self.parse(node, xhr.response);
			}
			catch(e)
			{
				console.error("Potree: Exception thrown parsing points.", e);
				_Global_js__WEBPACK_IMPORTED_MODULE_3__.Global.numNodesLoading--;
			}
		};
		xhr.onerror = function(event)
		{
			_Global_js__WEBPACK_IMPORTED_MODULE_3__.Global.numNodesLoading--;
			console.error("Potree: Failed to load file.", xhr, url);
		};
		xhr.send(null);
	}

	parse(node, buffer)
	{
		var NUM_POINTS_BYTES = 4;
		var view = new DataView(buffer, buffer.byteLength - NUM_POINTS_BYTES, NUM_POINTS_BYTES);
		var numPoints = view.getUint32(0, true);
		var pointAttributes = node.pcoGeometry.pointAttributes;

		node.numPoints = numPoints;

		var bb = node.boundingBox;
		var center = new THREE.Vector3();
		var nodeOffset = node.pcoGeometry.boundingBox.getCenter(center).sub(node.boundingBox.min);

		var message =
		{
			buffer: buffer,
			pointAttributes: pointAttributes,
			version: this.version.version,
			schema: node.pcoGeometry.schema,
			min: [bb.min.x, bb.min.y, bb.min.z],
			max: [bb.max.x, bb.max.y, bb.max.z],
			offset: nodeOffset.toArray(),
			scale: this.scale,
			normalize: node.pcoGeometry.normalize
		};

		_Global_js__WEBPACK_IMPORTED_MODULE_3__.Global.workerPool.runTask(_utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_2__.WorkerManager.GREYHOUND, function(e)
		{
			var data = e.data;
			var buffers = data.attributeBuffers;
			
			var tightBoundingBox = new THREE.Box3
			(
				new THREE.Vector3().fromArray(data.tightBoundingBox.min),
				new THREE.Vector3().fromArray(data.tightBoundingBox.max)
			);

			var geometry = new THREE.BufferGeometry();

			for(var property in buffers)
			{
				var buffer = buffers[property].buffer;

				if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributeNames.POSITION_CARTESIAN)
				{
					geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(buffer), 3));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributeNames.COLOR_PACKED)
				{
					geometry.setAttribute("color", new THREE.BufferAttribute(new Uint8Array(buffer), 4, true));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributeNames.INTENSITY)
				{
					geometry.setAttribute("intensity", new THREE.BufferAttribute(new Float32Array(buffer), 1));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributeNames.CLASSIFICATION)
				{
					geometry.setAttribute("classification", new THREE.BufferAttribute(new Uint8Array(buffer), 1));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributeNames.NORMAL_SPHEREMAPPED)
				{
					geometry.setAttribute("normal", new THREE.BufferAttribute(new Float32Array(buffer), 3));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributeNames.NORMAL_OCT16)
				{
					geometry.setAttribute("normal", new THREE.BufferAttribute(new Float32Array(buffer), 3));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributeNames.NORMAL)
				{
					geometry.setAttribute("normal", new THREE.BufferAttribute(new Float32Array(buffer), 3));
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributeNames.INDICES)
				{
					var bufferAttribute = new THREE.BufferAttribute(new Uint8Array(buffer), 4);
					bufferAttribute.normalized = true;
					geometry.setAttribute("indices", bufferAttribute);
				}
				else if(parseInt(property) === _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributeNames.SPACING)
				{
					var bufferAttribute = new THREE.BufferAttribute(new Float32Array(buffer), 1);
					geometry.setAttribute("spacing", bufferAttribute);
				}
			}

			tightBoundingBox.max.sub(tightBoundingBox.min);
			tightBoundingBox.min.set(0, 0, 0);

			node.numPoints = data.numPoints;
			node.geometry = geometry;
			node.mean = new THREE.Vector3(...data.mean);
			node.tightBoundingBox = tightBoundingBox;
			node.loaded = true;
			node.loading = false;
			_Global_js__WEBPACK_IMPORTED_MODULE_3__.Global.numNodesLoading--;
		}, message, [message.buffer]);
	}
}



/***/ }),

/***/ "./source/loaders/GreyhoundLoader.js":
/*!*******************************************!*\
  !*** ./source/loaders/GreyhoundLoader.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreyhoundLoader": () => (/* binding */ GreyhoundLoader)
/* harmony export */ });
/* harmony import */ var _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PointAttributes.js */ "./source/PointAttributes.js");
/* harmony import */ var _pointcloud_geometries_PointCloudGreyhoundGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pointcloud/geometries/PointCloudGreyhoundGeometry.js */ "./source/pointcloud/geometries/PointCloudGreyhoundGeometry.js");
/* harmony import */ var _GreyhoundBinaryLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GreyhoundBinaryLoader.js */ "./source/loaders/GreyhoundBinaryLoader.js");
/* harmony import */ var _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/VersionUtils.js */ "./source/utils/VersionUtils.js");
/* harmony import */ var _GreyhoundUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GreyhoundUtils.js */ "./source/loaders/GreyhoundUtils.js");








function GreyhoundLoader(){}

GreyhoundLoader.loadInfoJSON = function(url, callback){};

/**
 * @return a point cloud octree with the root node data loaded.
 * loading of descendants happens asynchronously when they"re needed
 *
 * @param url
 * @param loadingFinishedListener executed after loading the binary has been
 * finished
 */
GreyhoundLoader.load = function(url, callback)
{
	var HIERARCHY_STEP_SIZE = 5;

	try
	{
		//We assume everything ater the string "greyhound://" is the server url
		var serverURL = url.split("greyhound://")[1];
		if(serverURL.split("http://").length === 1 && serverURL.split("https://").length === 1)
		{
			serverURL = "http://" + serverURL;
		}

		_GreyhoundUtils_js__WEBPACK_IMPORTED_MODULE_4__.GreyhoundUtils.fetch(serverURL + "info", function(err, data)
		{
			if(err) throw new Error(err);

			/* We parse the result of the info query, which should be a JSON datastructure somewhat like:
			{
			  "bounds": [635577, 848882, -1000, 639004, 853538, 2000],
			  "numPoints": 10653336,
			  "schema": [
			      { "name": "X", "size": 8, "type": "floating" },
			      { "name": "Y", "size": 8, "type": "floating" },
			      { "name": "Z", "size": 8, "type": "floating" },
			      { "name": "Intensity", "size": 2, "type": "unsigned" },
			      { "name": "OriginId", "size": 4, "type": "unsigned" },
			      { "name": "Red", "size": 2, "type": "unsigned" },
			      { "name": "Green", "size": 2, "type": "unsigned" },
			      { "name": "Blue", "size": 2, "type": "unsigned" }
			  ],
			  "srs": "<omitted for brevity>",
			  "type": "octree"
			}
			*/
			var greyhoundInfo = JSON.parse(data);
			var version = new _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_3__.VersionUtils("1.4");

			var bounds = greyhoundInfo.bounds;

			//TODO Unused: var boundsConforming = greyhoundInfo.boundsConforming;
			//TODO Unused: var width = bounds[3] - bounds[0];
			//TODO Unused: var depth = bounds[4] - bounds[1];
			//TODO Unused: var height = bounds[5] - bounds[2];
			//TODO Unused: var radius = width / 2;
			
			var scale = greyhoundInfo.scale || 0.01;
			if(Array.isArray(scale))
			{
				scale = Math.min(scale[0], scale[1], scale[2]);
			}

			if(_GreyhoundUtils_js__WEBPACK_IMPORTED_MODULE_4__.GreyhoundUtils.getQueryParam("scale"))
			{
				scale = parseFloat(_GreyhoundUtils_js__WEBPACK_IMPORTED_MODULE_4__.GreyhoundUtils.getQueryParam("scale"));
			}

			var baseDepth = Math.max(8, greyhoundInfo.baseDepth);

			//Ideally we want to change this bit completely, since
			//greyhound"s options are wider than the default options for
			//visualizing pointclouds. If someone ever has time to build a
			//custom ui element for greyhound, the schema options from
			//this info request should be given to the UI, so the user can
			//choose between them. The selected option can then be
			//directly requested from the server in the
			//PointCloudGreyhoundGeometryNode without asking for
			//attributes that we are not currently visualizing.  We assume
			//XYZ are always available.
			var attributes = ["POSITION_CARTESIAN"];

			//To be careful, we only add COLOR_PACKED as an option if all
			//colors are actually found.
			var red = false;
			var green = false;
			var blue = false;

			greyhoundInfo.schema.forEach(function(entry)
			{
				//Intensity and Classification are optional.
				if(entry.name === "Intensity")
				{
					attributes.push("INTENSITY");
				}
				if(entry.name === "Classification")
				{
					attributes.push("CLASSIFICATION");
				}

				if(entry.name === "Red") red = true;
				else if(entry.name === "Green") green = true;
				else if(entry.name === "Blue") blue = true;
			});

			if(red && green && blue) attributes.push("COLOR_PACKED");

			//Fill in geometry fields.
			var pgg = new _pointcloud_geometries_PointCloudGreyhoundGeometry_js__WEBPACK_IMPORTED_MODULE_1__.PointCloudGreyhoundGeometry();
			pgg.serverURL = serverURL;
			pgg.spacing = (bounds[3] - bounds[0]) / Math.pow(2, baseDepth);
			pgg.baseDepth = baseDepth;
			pgg.hierarchyStepSize = HIERARCHY_STEP_SIZE;

			pgg.schema = _GreyhoundUtils_js__WEBPACK_IMPORTED_MODULE_4__.GreyhoundUtils.createSchema(attributes);
			var pointSize = _GreyhoundUtils_js__WEBPACK_IMPORTED_MODULE_4__.GreyhoundUtils.pointSizeFrom(pgg.schema);

			pgg.pointAttributes = new _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributes(attributes);
			pgg.pointAttributes.byteSize = pointSize;

			var boundingBox = new THREE.Box3(
				new THREE.Vector3().fromArray(bounds, 0),
				new THREE.Vector3().fromArray(bounds, 3)
			);

			var offset = boundingBox.min.clone();

			boundingBox.max.sub(boundingBox.min);
			boundingBox.min.set(0, 0, 0);

			pgg.projection = greyhoundInfo.srs;
			pgg.boundingBox = boundingBox;
			pgg.boundingSphere = boundingBox.getBoundingSphere(new THREE.Sphere());

			pgg.scale = scale;
			pgg.offset = offset;
			pgg.loader = new _GreyhoundBinaryLoader_js__WEBPACK_IMPORTED_MODULE_2__.GreyhoundBinaryLoader(version, boundingBox, pgg.scale);

			var nodes = {};

			//load root
			var name = "r";

			var root = new _pointcloud_geometries_PointCloudGreyhoundGeometry_js__WEBPACK_IMPORTED_MODULE_1__.PointCloudGreyhoundGeometryNode(name, pgg, boundingBox, scale, offset);
			root.level = 0;
			root.hasChildren = true;
			root.numPoints = greyhoundInfo.numPoints;
			root.spacing = pgg.spacing;
			pgg.root = root;
			pgg.root.load();
			nodes[name] = root;
	
			pgg.nodes = nodes;

			_GreyhoundUtils_js__WEBPACK_IMPORTED_MODULE_4__.GreyhoundUtils.getNormalization(serverURL, greyhoundInfo.baseDepth,
				function(_, normalize)
				{
					if(normalize.color) pgg.normalize.color = true;
					if(normalize.intensity) pgg.normalize.intensity = true;

					callback(pgg);
				}
			);
		});
	}
	catch(e)
	{
		console.log("Potree: Loading failed.", url, e);
		callback();
	}
};

GreyhoundLoader.loadPointAttributes = function(mno)
{
	var fpa = mno.pointAttributes;
	var pa = new _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttributes();

	for(var i = 0; i < fpa.length; i++)
	{
		var pointAttribute = _PointAttributes_js__WEBPACK_IMPORTED_MODULE_0__.PointAttribute[fpa[i]];
		pa.add(pointAttribute);
	}

	return pa;
};

GreyhoundLoader.createChildAABB = function(aabb, childIndex)
{
	var min = aabb.min;
	var max = aabb.max;
	var dHalfLength = new THREE.Vector3().copy(max).sub(min).multiplyScalar(0.5);
	var xHalfLength = new THREE.Vector3(dHalfLength.x, 0, 0);
	var yHalfLength = new THREE.Vector3(0, dHalfLength.y, 0);
	var zHalfLength = new THREE.Vector3(0, 0, dHalfLength.z);

	var cmin = min;
	var cmax = new THREE.Vector3().add(min).add(dHalfLength);

	if(childIndex === 1)
	{
		min = new THREE.Vector3().copy(cmin).add(zHalfLength);
		max = new THREE.Vector3().copy(cmax).add(zHalfLength);
	}
	else if(childIndex === 3)
	{
		min = new THREE.Vector3().copy(cmin).add(zHalfLength).add(yHalfLength);
		max = new THREE.Vector3().copy(cmax).add(zHalfLength).add(yHalfLength);
	}
	else if(childIndex === 0)
	{
		min = cmin;
		max = cmax;
	}
	else if(childIndex === 2)
	{
		min = new THREE.Vector3().copy(cmin).add(yHalfLength);
		max = new THREE.Vector3().copy(cmax).add(yHalfLength);
	}
	else if(childIndex === 5)
	{
		min = new THREE.Vector3().copy(cmin).add(zHalfLength).add(xHalfLength);
		max = new THREE.Vector3().copy(cmax).add(zHalfLength).add(xHalfLength);
	}
	else if(childIndex === 7)
	{
		min = new THREE.Vector3().copy(cmin).add(dHalfLength);
		max = new THREE.Vector3().copy(cmax).add(dHalfLength);
	}
	else if(childIndex === 4)
	{
		min = new THREE.Vector3().copy(cmin).add(xHalfLength);
		max = new THREE.Vector3().copy(cmax).add(xHalfLength);
	}
	else if(childIndex === 6)
	{
		min = new THREE.Vector3().copy(cmin).add(xHalfLength).add(yHalfLength);
		max = new THREE.Vector3().copy(cmax).add(xHalfLength).add(yHalfLength);
	}

	return new THREE.Box3(min, max);
};



/***/ }),

/***/ "./source/loaders/GreyhoundUtils.js":
/*!******************************************!*\
  !*** ./source/loaders/GreyhoundUtils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreyhoundUtils": () => (/* binding */ GreyhoundUtils)
/* harmony export */ });
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../XHRFactory.js */ "./source/XHRFactory.js");




/**
 * @class Loads greyhound metadata and returns a PointcloudOctree
 *
 * @author Maarten van Meersbergen
 * @author Oscar Martinez Rubi
 * @author Connor Manning
 */
class GreyhoundUtils
{
	static getQueryParam(name)
	{
		name = name.replace(/[[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		var results = regex.exec(window.location.href);
		if(!results) return null;
		if(!results[2]) return "";
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	static createSchema(attributes)
	{
		var schema = [
			{
				"name": "X",
				"size": 4,
				"type": "signed"
			},
			{
				"name": "Y",
				"size": 4,
				"type": "signed"
			},
			{
				"name": "Z",
				"size": 4,
				"type": "signed"
			}
		];

		//Once we include options in the UI to load a dynamic list of available
		//attributes for visualization (f.e. Classification, Intensity etc.)
		//we will be able to ask for that specific attribute from the server,
		//where we are now requesting all attributes for all points all the time.
		//If we do that though, we also need to tell Potree to redraw the points
		//that are already loaded (with different attributes).
		//This is not default behaviour.
		attributes.forEach(function(item)
		{
			if(item === "COLOR_PACKED")
			{
				schema.push(
				{
					"name": "Red",
					"size": 2,
					"type": "unsigned"
				});
				schema.push(
				{
					"name": "Green",
					"size": 2,
					"type": "unsigned"
				});
				schema.push(
				{
					"name": "Blue",
					"size": 2,
					"type": "unsigned"
				});
			}
			else if(item === "INTENSITY")
			{
				schema.push(
				{
					"name": "Intensity",
					"size": 2,
					"type": "unsigned"
				});
			}
			else if(item === "CLASSIFICATION")
			{
				schema.push(
				{
					"name": "Classification",
					"size": 1,
					"type": "unsigned"
				});
			}
		});

		return schema;
	}

	static fetch(url, cb)
	{
		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_0__.XHRFactory.createXMLHttpRequest();
		xhr.overrideMimeType("text/plain");
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function()
		{
			if(xhr.readyState === 4)
			{
				if(xhr.status === 200 || xhr.status === 0)
				{
					cb(null, xhr.responseText);
				}
				else
				{
					cb(xhr.responseText);
				}
			}
		};
		xhr.send(null);
	};

	static fetchBinary(url, cb)
	{
		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_0__.XHRFactory.createXMLHttpRequest();
		xhr.overrideMimeType("text/plain");
		xhr.open("GET", url, true);
		xhr.responseType = "arraybuffer";
		xhr.onreadystatechange = function()
		{
			if(xhr.readyState === 4)
			{
				if(xhr.status === 200 || xhr.status === 0)
				{
					cb(null, xhr.response);
				}
				else
				{
					cb(xhr.responseText);
				}
			}
		};
		xhr.send(null);
	};

	static pointSizeFrom(schema)
	{
		return schema.reduce((p, c) => p + c.size, 0);
	};

	static getNormalization(serverURL, baseDepth, cb)
	{
		var s = [
			{
				"name": "X",
				"size": 4,
				"type": "floating"
			},
			{
				"name": "Y",
				"size": 4,
				"type": "floating"
			},
			{
				"name": "Z",
				"size": 4,
				"type": "floating"
			},
			{
				"name": "Red",
				"size": 2,
				"type": "unsigned"
			},
			{
				"name": "Green",
				"size": 2,
				"type": "unsigned"
			},
			{
				"name": "Blue",
				"size": 2,
				"type": "unsigned"
			},
			{
				"name": "Intensity",
				"size": 2,
				"type": "unsigned"
			}
		];

		var url = serverURL + "read?depth=" + baseDepth + "&schema=" + JSON.stringify(s);

		GreyhoundUtils.fetchBinary(url, function(err, buffer)
		{
			if(err) throw new Error(err);

			var view = new DataView(buffer);
			var numBytes = buffer.byteLength - 4;
			var pointSize = GreyhoundUtils.pointSizeFrom(s);

			var colorNorm = false;
			var intensityNorm = false;

			for(var offset = 0; offset < numBytes; offset += pointSize)
			{
				if(view.getUint16(offset + 12, true) > 255 ||
					view.getUint16(offset + 14, true) > 255 ||
					view.getUint16(offset + 16, true) > 255)
				{
					colorNorm = true;
				}

				if(view.getUint16(offset + 18, true) > 255)
				{
					intensityNorm = true;
				}

				if(colorNorm && intensityNorm) break;
			}

			cb(null,
			{
				color: colorNorm,
				intensity: intensityNorm
			});
		});
	};
};




/***/ }),

/***/ "./source/loaders/LASLAZLoader.js":
/*!****************************************!*\
  !*** ./source/loaders/LASLAZLoader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LASLAZLoader": () => (/* binding */ LASLAZLoader)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/VersionUtils.js */ "./source/utils/VersionUtils.js");
/* harmony import */ var _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/WorkerManager.js */ "./source/utils/WorkerManager.js");
/* harmony import */ var _LASLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LASLoader.js */ "./source/loaders/LASLoader.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global.js */ "./source/Global.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../XHRFactory.js */ "./source/XHRFactory.js");










/**
 * laslaz code taken and adapted from plas.io js-laslaz
 *	http://plas.io/
 *  https://github.com/verma/plasio
 *
 * Thanks to Uday Verma and Howard Butler
 */
class LASLAZLoader
{
	constructor(version)
	{
		if(typeof(version) === "string")
		{
			this.version = new _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_1__.VersionUtils(version);
		}
		else
		{
			this.version = version;
		}
	}

	load(node)
	{
		if(node.loaded)
		{
			return;
		}

		var pointAttributes = node.pcoGeometry.pointAttributes;
		var url = node.getURL();

		if(this.version.equalOrHigher("1.4"))
		{
			url += "." + pointAttributes.toLowerCase();
		}

		var self = this;

		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_5__.XHRFactory.createXMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.responseType = "arraybuffer";
		xhr.overrideMimeType("text/plain; charset=x-user-defined");
		xhr.onload = function()
		{
			if(xhr.response instanceof ArrayBuffer)
			{
				try
				{
					self.parse(node, xhr.response);
				}
				catch(e)
				{
					console.error("Potree: Exception thrown parsing points.", e);
					_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.numNodesLoading--;
				}
			}
			else
			{
				_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.numNodesLoading--;
				console.log("Potree: LASLAZLoader xhr response is not a ArrayBuffer.");
			}
		};
		xhr.onerror = function()
		{
			_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.numNodesLoading--;
			console.log("Potree: LASLAZLoader failed to load file, " + xhr.status + ", file: " + url);
		};
		xhr.send(null);
	}

	parse(node, buffer)
	{
		var lf = new _LASLoader_js__WEBPACK_IMPORTED_MODULE_3__.LASFile(buffer);
		var handler = new LASLAZBatcher(node);

		lf.open() .then(msg =>
		{
			lf.isOpen = true;
			return lf;
		}).catch(msg =>
		{
			console.log("Potree: Failed to open file.");
		}).then(lf =>
		{
			return lf.getHeader().then(function(h)
			{
				return [lf, h];
			});
		}).then(v =>
		{
			let lf = v[0];
			let header = v[1];
			let skip = 1;
			let totalRead = 0;
			let totalToRead = (skip <= 1 ? header.pointsCount : header.pointsCount / skip);

			var reader = function()
			{
				let p = lf.readData(1000000, 0, skip);

				return p.then(function(data)
				{
					handler.push(new _LASLoader_js__WEBPACK_IMPORTED_MODULE_3__.LASDecoder(data.buffer,
						header.pointsFormatId,
						header.pointsStructSize,
						data.count,
						header.scale,
						header.offset,
						header.mins, header.maxs));

					totalRead += data.count;

					if(data.hasMoreData)
					{
						return reader();
					}
					else
					{
						header.totalRead = totalRead;
						header.versionAsString = lf.versionAsString;
						header.isCompressed = lf.isCompressed;
						return [lf, header, handler];
					}
				});
			};

			return reader();
		}).then(v =>
		{
			let lf = v[0];

			//Close it
			return lf.close().then(function()
			{
				lf.isOpen = false;
				return v.slice(1);
			}).catch(e =>
			{
				//If there was a cancellation, make sure the file is closed, if the file is open close and then fail
				if(lf.isOpen)
				{
					return lf.close().then(function()
					{
						lf.isOpen = false;
						throw e;
					});
				}
				throw e;
			});
		});
	}

	handle(node, url){}
};

class LASLAZBatcher
{
	constructor(node)
	{
		this.node = node;
	}

	push(data)
	{
		var self = this;

		var message =
		{
			buffer: data.arrayb,
			numPoints: data.pointsCount,
			pointSize: data.pointSize,
			pointFormatID: 2,
			scale: data.scale,
			offset: data.offset,
			mins: data.mins,
			maxs: data.maxs
		};

		var worker = _Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.workerPool.getWorker(_utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_2__.WorkerManager.LAS_DECODER);
		worker.onmessage = function(e)
		{
			var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
			var numPoints = data.pointsCount;

			var positions = new Float32Array(e.data.position);
			var colors = new Uint8Array(e.data.color);
			var intensities = new Float32Array(e.data.intensity);
			var classifications = new Uint8Array(e.data.classification);
			var returnNumbers = new Uint8Array(e.data.returnNumber);
			var numberOfReturns = new Uint8Array(e.data.numberOfReturns);
			var pointSourceIDs = new Uint16Array(e.data.pointSourceID);
			var indices = new Uint8Array(e.data.indices);

			geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
			geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(colors, 4, true));
			geometry.setAttribute("intensity", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(intensities, 1));
			geometry.setAttribute("classification", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(classifications, 1));
			geometry.setAttribute("returnNumber", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(returnNumbers, 1));
			geometry.setAttribute("numberOfReturns", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(numberOfReturns, 1));
			geometry.setAttribute("pointSourceID", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(pointSourceIDs, 1));
			//geometry.setAttribute("normal", new THREE.BufferAttribute(new Float32Array(numPoints * 3), 3));
			geometry.setAttribute("indices", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(indices, 4));
			geometry.attributes.indices.normalized = true;

			var tightBoundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3
			(
				new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(e.data.tightBoundingBox.min),
				new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(e.data.tightBoundingBox.max)
			);

			geometry.boundingBox = self.node.boundingBox;
			self.node.tightBoundingBox = tightBoundingBox;

			self.node.geometry = geometry;
			self.node.numPoints = numPoints;
			self.node.loaded = true;
			self.node.loading = false;
			_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.numNodesLoading--;
			self.node.mean = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(...e.data.mean);

			_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.workerPool.returnWorker(_utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_2__.WorkerManager.LAS_DECODER, worker);
		};

		worker.postMessage(message, [message.buffer]);
	};
};




/***/ }),

/***/ "./source/loaders/LASLoader.js":
/*!*************************************!*\
  !*** ./source/loaders/LASLoader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LASDecoder": () => (/* binding */ LASDecoder),
/* harmony export */   "LASFile": () => (/* binding */ LASFile),
/* harmony export */   "LASLoader": () => (/* binding */ LASLoader),
/* harmony export */   "LAZLoader": () => (/* binding */ LAZLoader)
/* harmony export */ });
/* harmony import */ var _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/WorkerManager.js */ "./source/utils/WorkerManager.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Global.js */ "./source/Global.js");





var pointFormatReaders =
[
	function(dv)
	{
		return {
			"position": [ dv.getInt32(0, true), dv.getInt32(4, true), dv.getInt32(8, true)],
			"intensity": dv.getUint16(12, true),
			"classification": dv.getUint8(16, true)
		};
	},
	function(dv)
	{
		return {
			"position": [ dv.getInt32(0, true), dv.getInt32(4, true), dv.getInt32(8, true)],
			"intensity": dv.getUint16(12, true),
			"classification": dv.getUint8(16, true)
		};
	},
	function(dv)
	{
		return {
			"position": [ dv.getInt32(0, true), dv.getInt32(4, true), dv.getInt32(8, true)],
			"intensity": dv.getUint16(12, true),
			"classification": dv.getUint8(16, true),
			"color": [dv.getUint16(20, true), dv.getUint16(22, true), dv.getUint16(24, true)]
		};
	},
	function(dv)
	{
		return {
			"position": [ dv.getInt32(0, true), dv.getInt32(4, true), dv.getInt32(8, true)],
			"intensity": dv.getUint16(12, true),
			"classification": dv.getUint8(16, true),
			"color": [dv.getUint16(28, true), dv.getUint16(30, true), dv.getUint16(32, true)]
		};
	}
];

function readAs(buf, Type, offset, count)
{
	count = (count === undefined || count === 0 ? 1 : count);
	var sub = buf.slice(offset, offset + Type.BYTES_PER_ELEMENT * count);

	var r = new Type(sub);
	if(count === undefined || count === 1)
	{
		return r[0];
	}

	var ret = [];
	for(var i = 0 ; i < count ; i ++)
	{
		ret.push(r[i]);
	}

	return ret;
}

function parseLASHeader(arraybuffer)
{
	var data = {};

	data.pointsOffset = readAs(arraybuffer, Uint32Array, 32*3);
	data.pointsFormatId = readAs(arraybuffer, Uint8Array, 32*3+8);
	data.pointsStructSize = readAs(arraybuffer, Uint16Array, 32*3+8+1);
	data.pointsCount = readAs(arraybuffer, Uint32Array, 32*3 + 11);

	var start = 32*3 + 35;
	data.scale = readAs(arraybuffer, Float64Array, start, 3); start += 24; // 8*3
	data.offset = readAs(arraybuffer, Float64Array, start, 3); start += 24;

	var bounds = readAs(arraybuffer, Float64Array, start, 6); start += 48; // 8*6;
	data.maxs = [bounds[0], bounds[2], bounds[4]];
	data.mins = [bounds[1], bounds[3], bounds[5]];

	return data;
}

// LAS Loader
// Loads uncompressed files
//
function LASLoader(arraybuffer)
{
	this.arraybuffer = arraybuffer;
};

LASLoader.prototype.open = function()
{
	// nothing needs to be done to open this file
	//
	this.readOffset = 0;
	return new Promise(function(res, rej)
	{
		setTimeout(res, 0);
	});
};

LASLoader.prototype.getHeader = function()
{
	var self = this;

	return new Promise(function(res, rej)
	{
		setTimeout(function()
		{
			self.header = parseLASHeader(self.arraybuffer);
			res(self.header);
		}, 0);
	});
};

LASLoader.prototype.readData = function(count, offset, skip)
{
	var self = this;

	return new Promise(function(res, rej)
	{
		setTimeout(function()
		{
			if(!self.header)
				return rej(new Error("Cannot start reading data till a header request is issued"));

			var start;
			if(skip <= 1)
			{
				count = Math.min(count, self.header.pointsCount - self.readOffset);
				start = self.header.pointsOffset + self.readOffset * self.header.pointsStructSize;
				var end = start + count * self.header.pointsStructSize;
				res(
				{
					buffer: self.arraybuffer.slice(start, end),
					count: count,
					hasMoreData: self.readOffset + count < self.header.pointsCount
				});
				self.readOffset += count;
			}
			else
			{
				var pointsToRead = Math.min(count * skip, self.header.pointsCount - self.readOffset);
				var bufferSize = Math.ceil(pointsToRead / skip);
				var pointsRead = 0;

				var buf = new Uint8Array(bufferSize * self.header.pointsStructSize);

				for(var i = 0 ; i < pointsToRead ; i++)
				{
					if(i % skip === 0)
					{
						start = self.header.pointsOffset + self.readOffset * self.header.pointsStructSize;
						var src = new Uint8Array(self.arraybuffer, start, self.header.pointsStructSize);

						buf.set(src, pointsRead * self.header.pointsStructSize);
						pointsRead ++;
					}

					self.readOffset ++;
				}

				res(
				{
					buffer: buf.buffer,
					count: pointsRead,
					hasMoreData: self.readOffset < self.header.pointsCount
				});
			}
		}, 0);
	});
};

LASLoader.prototype.close = function()
{
	var self = this;
	return new Promise(function(res, rej)
	{
		self.arraybuffer = null;
		setTimeout(res, 0);
	});
};

// LAZ Loader
// Uses NaCL module to load LAZ files
//
function LAZLoader(arraybuffer)
{
	var self = this;

	this.arraybuffer = arraybuffer;
	this.nextCB = null;

	this.dorr = function(req, cb)
	{
		self.nextCB = cb;
		
		_Global_js__WEBPACK_IMPORTED_MODULE_1__.Global.workerPool.runTask(_utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_0__.WorkerManager.LAS_LAZ, function(e)
		{
			if(self.nextCB !== null)
			{
				self.nextCB(e.data);
				self.nextCB = null;
			}
		}, req);
	};
};

LAZLoader.prototype.open = function()
{
	// nothing needs to be done to open this file
	var self = this;
	return new Promise(function(res, rej)
	{
		self.dorr({type:"open", arraybuffer: self.arraybuffer}, function(r)
		{
			if(r.status !== 1)
			{
				return rej(new Error("Failed to open file"));
			}

			res(true);
		});
	});
};

LAZLoader.prototype.getHeader = function()
{
	var self = this;

	return new Promise(function(res, rej)
	{
		self.dorr({type:'header'}, function(r)
		{
			if(r.status !== 1)
			{
				return rej(new Error("Failed to get header"));
			}

			res(r.header);
		});
	});
};

LAZLoader.prototype.readData = function(count, offset, skip)
{
	var self = this;

	return new Promise(function(res, rej)
	{
		self.dorr({type:'read', count: count, offset: offset, skip: skip}, function(r)
		{
			if(r.status !== 1)
				return rej(new Error("Failed to read data"));
			res({
				buffer: r.buffer,
				count: r.count,
				hasMoreData: r.hasMoreData
			});
		});
	});
};

LAZLoader.prototype.close = function()
{
	var self = this;

	return new Promise(function(res, rej)
	{
		self.dorr({type:'close'}, function(r)
		{
			if(r.status !== 1)
			{
				return rej(new Error("Failed to close file"));
			}

			res(true);
		});
	});
};

// A single consistent interface for loading LAS/LAZ files
function LASFile(arraybuffer)
{
	this.arraybuffer = arraybuffer;

	this.determineVersion();
	if(this.version > 12)
	{
		throw new Error("Only file versions <= 1.2 are supported at this time");
	}

	this.determineFormat();
	if(pointFormatReaders[this.formatId] === undefined)
	{
		throw new Error("The point format ID is not supported");
	}

	this.loader = this.isCompressed ? new LAZLoader(this.arraybuffer) : new LASLoader(this.arraybuffer);
};

LASFile.prototype.determineFormat = function()
{
	var formatId = readAs(this.arraybuffer, Uint8Array, 32*3+8);
	var bit_7 = (formatId & 0x80) >> 7;
	var bit_6 = (formatId & 0x40) >> 6;

	if(bit_7 === 1 && bit_6 === 1)
	{
		throw new Error("Old style compression not supported");
	}

	this.formatId = formatId & 0x3f;
	this.isCompressed = (bit_7 === 1 || bit_6 === 1);
};

LASFile.prototype.determineVersion = function()
{
	var ver = new Int8Array(this.arraybuffer, 24, 2);
	this.version = ver[0] * 10 + ver[1];
	this.versionAsString = ver[0] + "." + ver[1];
};

LASFile.prototype.open = function()
{
	return this.loader.open();
};

LASFile.prototype.getHeader = function()
{
	return this.loader.getHeader();
};

LASFile.prototype.readData = function(count, start, skip)
{
	return this.loader.readData(count, start, skip);
};

LASFile.prototype.close = function()
{
	return this.loader.close();
};

// Decodes LAS records into points
function LASDecoder(buffer, pointFormatID, pointSize, pointsCount, scale, offset, mins, maxs)
{
	this.arrayb = buffer;
	this.decoder = pointFormatReaders[pointFormatID];
	this.pointsCount = pointsCount;
	this.pointSize = pointSize;
	this.scale = scale;
	this.offset = offset;
	this.mins = mins;
	this.maxs = maxs;
};

LASDecoder.prototype.getPoint = function(index)
{
	if(index < 0 || index >= this.pointsCount)
	{
		throw new Error("Point index out of range");
	}

	return this.decoder(new DataView(this.arrayb, index * this.pointSize, this.pointSize));
};



/***/ }),

/***/ "./source/loaders/POCLoader.js":
/*!*************************************!*\
  !*** ./source/loaders/POCLoader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POCLoader": () => (/* binding */ POCLoader)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BinaryLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BinaryLoader.js */ "./source/loaders/BinaryLoader.js");
/* harmony import */ var _LASLAZLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LASLAZLoader.js */ "./source/loaders/LASLAZLoader.js");
/* harmony import */ var _PointAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PointAttributes.js */ "./source/PointAttributes.js");
/* harmony import */ var _pointcloud_geometries_PointCloudOctreeGeometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointcloud/geometries/PointCloudOctreeGeometry.js */ "./source/pointcloud/geometries/PointCloudOctreeGeometry.js");
/* harmony import */ var _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/VersionUtils.js */ "./source/utils/VersionUtils.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Global.js */ "./source/Global.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../XHRFactory.js */ "./source/XHRFactory.js");












/**
 * @class Loads mno files and returns a PointcloudOctree
 * for a description of the mno binary file format, read mnoFileFormat.txt
 *
 * @author Markus Schuetz
 */
class POCLoader
{
	/**
	 * @return a point cloud octree with the root node data loaded.
	 * loading of descendants happens asynchronously when they"re needed
	 *
	 * @param url
	 * @param loadingFinishedListener executed after loading the binary has been finished
	 */
	static load(url, callback)
	{
		var pco = new _pointcloud_geometries_PointCloudOctreeGeometry_js__WEBPACK_IMPORTED_MODULE_4__.PointCloudOctreeGeometry();
		pco.url = url;
		
		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_7__.XHRFactory.createXMLHttpRequest();
		xhr.overrideMimeType("text/plain");
		xhr.open("GET", url, true);
		xhr.onload = function()
		{
			var data = JSON.parse(xhr.responseText);
			var version = new _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_5__.VersionUtils(data.version);

			//Assume dir as absolute if it starts with http
			if(data.octreeDir.indexOf("http") === 0)
			{
				pco.octreeDir = data.octreeDir;
			}
			else
			{
				pco.octreeDir = url + "/../" + data.octreeDir;
			}

			pco.spacing = data.spacing;
			pco.hierarchyStepSize = data.hierarchyStepSize;
			pco.pointAttributes = data.pointAttributes;

			var min = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(data.boundingBox.lx, data.boundingBox.ly, data.boundingBox.lz);
			var max = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(data.boundingBox.ux, data.boundingBox.uy, data.boundingBox.uz);
			var boundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3(min, max);
			var tightBoundingBox = boundingBox.clone();

			if(data.tightBoundingBox)
			{
				tightBoundingBox.min.copy(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(data.tightBoundingBox.lx, data.tightBoundingBox.ly, data.tightBoundingBox.lz));
				tightBoundingBox.max.copy(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(data.tightBoundingBox.ux, data.tightBoundingBox.uy, data.tightBoundingBox.uz));
			}

			var offset = min.clone();

			boundingBox.min.sub(offset);
			boundingBox.max.sub(offset);

			tightBoundingBox.min.sub(offset);
			tightBoundingBox.max.sub(offset);

			pco.projection = data.projection;
			pco.boundingBox = boundingBox;
			pco.tightBoundingBox = tightBoundingBox;
			pco.boundingSphere = boundingBox.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere());
			pco.tightBoundingSphere = tightBoundingBox.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere());
			pco.offset = offset;

			//Select the appropiate loader
			if(data.pointAttributes === "LAS" || data.pointAttributes === "LAZ")
			{
				pco.loader = new _LASLAZLoader_js__WEBPACK_IMPORTED_MODULE_2__.LASLAZLoader(data.version);
			}
			else
			{
				pco.loader = new _BinaryLoader_js__WEBPACK_IMPORTED_MODULE_1__.BinaryLoader(data.version, boundingBox, data.scale);
				pco.pointAttributes = new _PointAttributes_js__WEBPACK_IMPORTED_MODULE_3__.PointAttributes(pco.pointAttributes);
			}

			var nodes = {};
			var name = "r";

			var root = new _pointcloud_geometries_PointCloudOctreeGeometry_js__WEBPACK_IMPORTED_MODULE_4__.PointCloudOctreeGeometryNode(name, pco, boundingBox);
			root.level = 0;
			root.hasChildren = true;
			root.spacing = pco.spacing;
			root.numPoints = version.upTo("1.5") ? data.hierarchy[0][1] : 0;

			pco.root = root;
			pco.root.load();
			nodes[name] = root;

			//Load remaining hierarchy
			if(version.upTo("1.4"))
			{
				for(var i = 1; i < data.hierarchy.length; i++)
				{
					var name = data.hierarchy[i][0];
					var numPoints = data.hierarchy[i][1];
					var index = parseInt(name.charAt(name.length - 1));
					var parentName = name.substring(0, name.length - 1);
					var parentNode = nodes[parentName];
					var level = name.length - 1;
					var boundingBox = POCLoader.createChildAABB(parentNode.boundingBox, index);

					var node = new _pointcloud_geometries_PointCloudOctreeGeometry_js__WEBPACK_IMPORTED_MODULE_4__.PointCloudOctreeGeometryNode(name, pco, boundingBox);
					node.level = level;
					node.numPoints = numPoints;
					node.spacing = pco.spacing / Math.pow(2, level);
					parentNode.addChild(node);
					nodes[name] = node;
				}
			}
			pco.nodes = nodes;

			callback(pco);
		};

		xhr.onerror = function(event)
		{
			_Global_js__WEBPACK_IMPORTED_MODULE_6__.Global.numNodesLoading--;
			console.log("Potree: loading file failed.", url, event);
			callback();
		};

		xhr.send(null);
	}

	static loadPointAttributes(mno)
	{
		var fpa = mno.pointAttributes;
		var pa = new _PointAttributes_js__WEBPACK_IMPORTED_MODULE_3__.PointAttributes();

		for(var i = 0; i < fpa.length; i++)
		{
			pa.add(_PointAttributes_js__WEBPACK_IMPORTED_MODULE_3__.PointAttribute[fpa[i]]);
		}

		return pa;
	}

	static createChildAABB(aabb, index)
	{
		var min = aabb.min.clone();
		var max = aabb.max.clone();
		var size = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().subVectors(max, min);

		if((index & 0b0001) > 0)
		{
			min.z += size.z / 2;
		}
		else
		{
			max.z -= size.z / 2;
		}

		if((index & 0b0010) > 0)
		{
			min.y += size.y / 2;
		}
		else
		{
			max.y -= size.y / 2;
		}

		if((index & 0b0100) > 0)
		{
			min.x += size.x / 2;
		}
		else
		{
			max.x -= size.x / 2;
		}

		return new three__WEBPACK_IMPORTED_MODULE_0__.Box3(min, max);
	}
}



/***/ }),

/***/ "./source/loaders/ept/EptBinaryLoader.js":
/*!***********************************************!*\
  !*** ./source/loaders/ept/EptBinaryLoader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EptBinaryLoader": () => (/* binding */ EptBinaryLoader)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Global.js */ "./source/Global.js");
/* harmony import */ var _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/WorkerManager.js */ "./source/utils/WorkerManager.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../XHRFactory.js */ "./source/XHRFactory.js");








class EptBinaryLoader
{
	load(node)
	{
		if(node.loaded) return;

		var url = node.url() + ".bin";
		
		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_3__.XHRFactory.createXMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.responseType = "arraybuffer";
		xhr.overrideMimeType("text/plain; charset=x-user-defined");
		xhr.onreadystatechange = () =>
		{
			if(xhr.readyState === 4)
			{
				if(xhr.status === 200)
				{
					var buffer = xhr.response;
					this.parse(node, buffer);
				}
				else
				{
					console.log("Failed " + url + ": " + xhr.status);
				}
			}
		};

		try
		{
			xhr.send(null);
		}
		catch (e)
		{
			console.log("Failed request: " + e);
		}
	}

	parse(node, buffer)
	{
		var worker = _Global_js__WEBPACK_IMPORTED_MODULE_1__.Global.workerPool.getWorker(_utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_2__.WorkerManager.EPT_BINARY_DECODER);

		worker.onmessage = function(e)
		{
			var g = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
			var numPoints = e.data.numPoints;

			var position = new Float32Array(e.data.position);
			g.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(position, 3));

			var indices = new Uint8Array(e.data.indices);
			g.setAttribute("indices", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(indices, 4));

			if(e.data.color)
			{
				var color = new Uint8Array(e.data.color);
				g.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(color, 4, true));
			}
			if(e.data.intensity)
			{
				var intensity = new Float32Array(e.data.intensity);
				g.setAttribute("intensity", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(intensity, 1));
			}
			if(e.data.classification)
			{
				var classification = new Uint8Array(e.data.classification);
				g.setAttribute("classification", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(classification, 1));
			}
			if(e.data.returnNumber)
			{
				var returnNumber = new Uint8Array(e.data.returnNumber);
				g.setAttribute("returnNumber", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(returnNumber, 1));
			}
			if(e.data.numberOfReturns)
			{
				var numberOfReturns = new Uint8Array(e.data.numberOfReturns);
				g.setAttribute("numberOfReturns", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(numberOfReturns, 1));
			}
			if(e.data.pointSourceId)
			{
				var pointSourceId = new Uint16Array(e.data.pointSourceId);
				g.setAttribute("pointSourceID", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(pointSourceId, 1));
			}

			g.attributes.indices.normalized = true;

			var tightBoundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3(
				new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(e.data.tightBoundingBox.min),
				new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(e.data.tightBoundingBox.max)
			);

			node.doneLoading(g, tightBoundingBox, numPoints, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(...e.data.mean));

			_Global_js__WEBPACK_IMPORTED_MODULE_1__.Global.workerPool.returnWorker(_utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_2__.WorkerManager.EPT_BINARY_DECODER, worker);
		};

		var toArray = (v) => [v.x, v.y, v.z];
		var message = {
			buffer: buffer,
			schema: node.ept.schema,
			scale: node.ept.eptScale,
			offset: node.ept.eptOffset,
			mins: toArray(node.key.b.min)
		};

		worker.postMessage(message, [message.buffer]);
	}
};




/***/ }),

/***/ "./source/loaders/ept/EptLaszipLoader.js":
/*!***********************************************!*\
  !*** ./source/loaders/ept/EptLaszipLoader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EptLaszipLoader": () => (/* binding */ EptLaszipLoader),
/* harmony export */   "EptLazBatcher": () => (/* binding */ EptLazBatcher)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Global.js */ "./source/Global.js");
/* harmony import */ var _LASLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LASLoader.js */ "./source/loaders/LASLoader.js");
/* harmony import */ var _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/WorkerManager.js */ "./source/utils/WorkerManager.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../XHRFactory.js */ "./source/XHRFactory.js");









/**
 * laslaz code taken and adapted from plas.io js-laslaz
 *	http://plas.io/
 *	https://github.com/verma/plasio
 *
 * Thanks to Uday Verma and Howard Butler
 *
 */
class EptLaszipLoader
{
	load(node)
	{
		if(node.loaded)
		{
			return;
		}

		var url = node.url() + ".laz";

		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_4__.XHRFactory.createXMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.responseType = "arraybuffer";
		xhr.overrideMimeType("text/plain; charset=x-user-defined");
		xhr.onreadystatechange = () =>
		{
			if(xhr.readyState === 4)
			{
				if(xhr.status === 200)
				{
					var buffer = xhr.response;
					this.parse(node, buffer);
				}
				else
				{
					console.log("Failed " + url + ": " + xhr.status);
				}
			}
		};

		xhr.send(null);
	}

	parse(node, buffer)
	{
		var lf = new _LASLoader_js__WEBPACK_IMPORTED_MODULE_2__.LASFile(buffer);
		var handler = new EptLazBatcher(node);

		lf.open()
		.then(() =>
		{
			lf.isOpen = true;
			return lf.getHeader();
		})
		.then((header) =>
		{
			var i = 0;
			var np = header.pointsCount;

			var toArray = (v) => [v.x, v.y, v.z];
			var mins = toArray(node.key.b.min);
			var maxs = toArray(node.key.b.max);

			var read = () =>
			{
				var p = lf.readData(1000000, 0, 1);
				return p.then(function (data)
				{
					var d = new _LASLoader_js__WEBPACK_IMPORTED_MODULE_2__.LASDecoder(
							data.buffer,
							header.pointsFormatId,
							header.pointsStructSize,
							data.count,
							header.scale,
							header.offset,
							mins,
							maxs);
					d.extraBytes = header.extraBytes;
					d.pointsFormatId = header.pointsFormatId;
					handler.push(d);

					i += data.count;

					if(data.hasMoreData)
					{
						return read();
					}
					else
					{
						header.totalRead = i;
						header.versionAsString = lf.versionAsString;
						header.isCompressed = lf.isCompressed;
						return null;
					}
				});
			};

			return read();
		})
		.then(() => lf.close())
		.then(() => lf.isOpen = false)
		.catch((err) =>
		{
			console.log("Error reading LAZ:", err);
			if(lf.isOpen)
			{
				lf.close().then(() =>
				{
					lf.isOpen = false;
					throw err;
				});
			}
			else throw err;
		});
	}
};

class EptLazBatcher
{
	constructor(node)
	{
		this.node = node;
	}

	push(las)
	{
		var worker = _Global_js__WEBPACK_IMPORTED_MODULE_1__.Global.workerPool.getWorker(_utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_3__.WorkerManager.EPT_LAS_ZIP_DECODER);

		worker.onmessage = (e) =>
		{
			var g = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
			var numPoints = las.pointsCount;

			var positions = new Float32Array(e.data.position);
			var colors = new Uint8Array(e.data.color);

			var intensities = new Float32Array(e.data.intensity);
			var classifications = new Uint8Array(e.data.classification);
			var returnNumbers = new Uint8Array(e.data.returnNumber);
			var numberOfReturns = new Uint8Array(e.data.numberOfReturns);
			var pointSourceIDs = new Uint16Array(e.data.pointSourceID);
			var indices = new Uint8Array(e.data.indices);

			g.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
			g.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(colors, 4, true));
			g.setAttribute("intensity", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(intensities, 1));
			g.setAttribute("classification", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(classifications, 1));
			g.setAttribute("returnNumber", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(returnNumbers, 1));
			g.setAttribute("numberOfReturns", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(numberOfReturns, 1));
			g.setAttribute("pointSourceID", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(pointSourceIDs, 1));
			g.setAttribute("indices", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(indices, 4));
			g.attributes.indices.normalized = true;

			var tightBoundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3(
				new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(e.data.tightBoundingBox.min),
				new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(e.data.tightBoundingBox.max)
			);

			this.node.doneLoading(g, tightBoundingBox, numPoints, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(...e.data.mean));

			_Global_js__WEBPACK_IMPORTED_MODULE_1__.Global.workerPool.returnWorker(_utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_3__.WorkerManager.EPT_LAS_ZIP_DECODER, worker);
		};

		var message = {
			buffer: las.arrayb,
			numPoints: las.pointsCount,
			pointSize: las.pointSize,
			pointFormatID: las.pointsFormatId,
			scale: las.scale,
			offset: las.offset,
			mins: las.mins,
			maxs: las.maxs
		};

		worker.postMessage(message, [message.buffer]);
	};
};




/***/ }),

/***/ "./source/objects/BasicGroup.js":
/*!**************************************!*\
  !*** ./source/objects/BasicGroup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicGroup": () => (/* binding */ BasicGroup)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/HelperUtils.js */ "./source/utils/HelperUtils.js");
/* harmony import */ var _Potree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Potree.js */ "./source/Potree.js");
/* harmony import */ var _pointcloud_PointCloudTree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pointcloud/PointCloudTree.js */ "./source/pointcloud/PointCloudTree.js");








/**
 * Potree object is a wrapper to use Potree alongside other THREE based frameworks.
 * 
 * The object can be used a normal Object3D.
 * 
 * It is based on THREE.Mesh and automatically updates the point cloud based on visibility.
 * 
 * Also takes care of geometry ajustments to allow the point clouds to be frustum culled.
 */
class BasicGroup extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {
  constructor() {
    super(new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry(), new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ opacity: 0.0, wireframe: false, transparent: true }));

    this.rotation.set(-Math.PI / 2, 0, 0);

    this.frustumCulled = true;
    this.pointclouds = [];

    this.nodeSize = 30;
    this.pointBudget = 1e10; //TODO <NOT USED>
    this.nodeLoadRate = 2; //TODO <NOT USED>
  }

  /**
   * Empty raycast method to avoid getting valid collision detection with the box geometry attached.
   */
  raycast(raycaster, intersects) { }

  /**
   * Changes the point budget to be used by potree.
   */
  setPointBudget(budget) {
    this.pointBudget = budget;
  }

  /**
   * Used to update the point cloud visibility relative to a camera.
   * 
   * Called automatically before rendering.
   */
  onBeforeRender(renderer, scene, camera, geometry, material, group) {
    for (var i = 0; i < this.pointclouds.length; i++) {
      this.pointclouds[i].minimumNodePixelSize = this.nodeSize;
    }

    (0,_Potree_js__WEBPACK_IMPORTED_MODULE_2__.updatePointClouds)(this.pointclouds, camera, renderer, this.pointBudget);
  }

  /**
   * Recalculate the box geometry attached to this group.
   * 
   * The geometry its not visible and its only used for frustum culling.
   */
  recalculateBoxGeometry() {
    var box = this.getBoundingBox();

    var size = box.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());
    var center = box.getCenter(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());

    var matrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
    matrix.makeTranslation(center.x, -center.z, center.y);

    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxBufferGeometry(size.x, size.z, size.y);
    geometry.applyMatrix4(matrix);

    this.geometry = geometry;
  }

  /**
   * Add an object as children of this scene.
   * 
   * Point cloud objects are detected and used to recalculate the geometry box used for frustum culling.
   */
  add(object) {
    three__WEBPACK_IMPORTED_MODULE_0__.Object3D.prototype.add.call(this, object);

    if (object instanceof _pointcloud_PointCloudTree_js__WEBPACK_IMPORTED_MODULE_3__.PointCloudTree) {
      object.showBoundingBox = false;
      object.generateDEM = false;
      this.pointclouds.push(object);
      this.recalculateBoxGeometry();
    }
  }

  /**
   * Remove object from group.
   * 
   * Point cloud objects are detected and used to recalculate the geometry box used for frustum culling
   */
  remove(object) {
    three__WEBPACK_IMPORTED_MODULE_0__.Object3D.prototype.remove.call(this, object);

    if (object instanceof _pointcloud_PointCloudTree_js__WEBPACK_IMPORTED_MODULE_3__.PointCloudTree) {
      var index = this.pointclouds.indexOf(object);
      if (index !== -1) {
        this.pointclouds.splice(index, 1);
        this.recalculateBoxGeometry();
      }
    }
  }

  /** 
   * Get the point cloud bouding box.
   */
  getBoundingBox() {
    var box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();

    this.updateMatrixWorld(true);

    for (var i = 0; i < this.pointclouds.length; i++) {
      var pointcloud = this.pointclouds[i];
      pointcloud.updateMatrixWorld(true);
      var pointcloudBox = pointcloud.pcoGeometry.tightBoundingBox ? pointcloud.pcoGeometry.tightBoundingBox : pointcloud.boundingBox;
      var boxWorld = _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_1__.HelperUtils.computeTransformedBoundingBox(pointcloudBox, pointcloud.matrixWorld);
      box.union(boxWorld);
    }

    return box;
  }

  /** 
   * Estimate the point cloud height at a given position.
   */
  estimateHeightAt(position) {
    var height = null;
    var fromSpacing = Infinity;

    for (var pointcloud of this.pointclouds) {
      if (pointcloud.root.geometryNode === undefined) {
        continue;
      }

      var pHeight = null;
      var pFromSpacing = Infinity;

      var lpos = position.clone().sub(pointcloud.position);
      lpos.z = 0;
      var ray = new three__WEBPACK_IMPORTED_MODULE_0__.Ray(lpos, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 1));

      var stack = [pointcloud.root];
      while (stack.length > 0) {
        var node = stack.pop();
        var box = node.getBoundingBox();
        var inside = ray.intersectBox(box);

        if (!inside) {
          continue;
        }

        var h = node.geometryNode.mean.z + pointcloud.position.z + node.geometryNode.boundingBox.min.z;

        if (node.geometryNode.spacing <= pFromSpacing) {
          pHeight = h;
          pFromSpacing = node.geometryNode.spacing;
        }

        for (var index of Object.keys(node.children)) {
          var child = node.children[index];
          if (child.geometryNode) {
            stack.push(node.children[index]);
          }
        }
      }

      if (height === null || pFromSpacing < fromSpacing) {
        height = pHeight;
        fromSpacing = pFromSpacing;
      }
    }

    return height;
  }
};




/***/ }),

/***/ "./source/objects/Group.js":
/*!*********************************!*\
  !*** ./source/objects/Group.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Group": () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BasicGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicGroup.js */ "./source/objects/BasicGroup.js");
/* harmony import */ var _pointcloud_PointCloudTree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pointcloud/PointCloudTree.js */ "./source/pointcloud/PointCloudTree.js");
/* harmony import */ var _Potree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Potree.js */ "./source/Potree.js");








class Group extends _BasicGroup_js__WEBPACK_IMPORTED_MODULE_1__.BasicGroup {
  constructor() {
    super();

    this.textures = new Map();
  }

  /**
   * Update the potree group before rendering.
   */
  onBeforeRender(renderer, scene, camera, geometry, material, group) {
    super.onBeforeRender(renderer, scene, camera, geometry, material, group);

    var result = this.fetchOctrees();
		var gl = renderer.getContext();
		if(gl.bindVertexArray === undefined)
		{
			this.getExtensions(gl)
		}

    for (var octree of result.octrees) {
      var nodes = octree.visibleNodes;
      this.prepareOcttree(renderer, octree, nodes, camera);
    }
  }

  fetchOctrees() {
    var octrees = [];
    var stack = [this];

    while (stack.length > 0) {
      var node = stack.pop();

      if (node instanceof _pointcloud_PointCloudTree_js__WEBPACK_IMPORTED_MODULE_2__.PointCloudTree) {
        octrees.push(node);
        continue;
      }

      var visibleChildren = node.children.filter(c => c.visible);
      stack.push(...visibleChildren);
    }

    var result =
    {
      octrees: octrees
    };

    return result;
  }

  prepareOcttree(renderer, octree, nodes, camera) {
    var material = octree.material;
    var viewInv = camera.matrixWorld;
    var proj = camera.projectionMatrix;

    var visibilityTextureData = null;

    if (material.pointSizeType === _Potree_js__WEBPACK_IMPORTED_MODULE_3__.PointSizeType.ADAPTIVE || material.pointColorType === _Potree_js__WEBPACK_IMPORTED_MODULE_3__.PointColorType.LOD) {
      visibilityTextureData = octree.computeVisibilityTextureData(nodes, camera);

      var vnt = material.visibleNodesTexture;
      vnt.image.data.set(visibilityTextureData.data);
      vnt.needsUpdate = true;
    }

    // Clip planes
    var numClippingPlanes = (material.clipping && material.clippingPlanes && material.clippingPlanes.length) ? material.clippingPlanes.length : 0;
    var clipPlanesChanged = material.defines['num_clipplanes'] !== numClippingPlanes;
    var clippingPlanes = [];
    if (clipPlanesChanged) {
      material.defines = {
        ...material.defines,
        num_clipplanes: numClippingPlanes
      };
      material.needsUpdate = true;
    }
    if (numClippingPlanes > 0) {
      var planes = material.clippingPlanes;
      var flattenedPlanes = new Array(4 * material.clippingPlanes.length);
      for (var i = 0; i < planes.length; i++) {
        flattenedPlanes[4*i + 0] = planes[i].normal.x;
        flattenedPlanes[4*i + 1] = planes[i].normal.y;
        flattenedPlanes[4*i + 2] = planes[i].normal.z;
        flattenedPlanes[4*i + 3] = planes[i].constant;
      }
      clippingPlanes = flattenedPlanes;
    }

    const clippingPlanesAsVec4Array = material.clippingPlanes ? material.clippingPlanes.map(x => new three__WEBPACK_IMPORTED_MODULE_0__.Vector4(x.normal.x, x.normal.y, x.normal.z, x.constant)) : [];
    material.uniforms.projectionMatrix.value.copy(proj);
    material.uniforms.uViewInv.value.copy(viewInv);
    material.uniforms.clipPlanes.value = clippingPlanesAsVec4Array;
    material.uniforms.fov.value = Math.PI * camera.fov / 180;
    material.uniforms.near.value = camera.near;
    material.uniforms.far.value = camera.far;
    material.uniforms.size.value = material.size;
    material.uniforms.uOctreeSpacing.value = material.spacing;
    material.uniforms.uColor.value = material.color;
    material.uniforms.uOpacity.value = material.opacity;
    material.uniforms.elevationRange.value = material.elevationRange;
    material.uniforms.intensityRange.value = material.intensityRange;
    material.uniforms.intensityGamma.value = material.intensityGamma;
    material.uniforms.intensityContrast.value = material.intensityContrast;
    material.uniforms.intensityBrightness.value = material.intensityBrightness;
    material.uniforms.rgbGamma.value = material.rgbGamma;
    material.uniforms.rgbBrightness.value = material.rgbBrightness;
    material.uniforms.uTransition.value = material.transition;
    material.uniforms.wRGB.value = material.weightRGB;
    material.uniforms.wIntensity.value = material.weightIntensity;
    material.uniforms.wElevation.value = material.weightElevation;
    material.uniforms.wClassification.value = material.weightClassification;
    material.uniforms.wReturnNumber.value = material.weightReturnNumber;
    material.uniforms.wSourceID.value = material.weightSourceID;
    material.uniforms.logDepthBufFC.value = renderer.capabilities.logarithmicDepthBuffer ? 2.0 / (Math.log(camera.far + 1.0) / Math.LN2) : undefined;
    material.uniformsNeedUpdate = true;
  }
};




/***/ }),

/***/ "./source/pointcloud/DEM.js":
/*!**********************************!*\
  !*** ./source/pointcloud/DEM.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEM": () => (/* binding */ DEM)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/WorkerManager.js */ "./source/utils/WorkerManager.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global.js */ "./source/Global.js");
/* harmony import */ var _DEMNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DEMNode.js */ "./source/pointcloud/DEMNode.js");








class DEM
{
	constructor(pointcloud)
	{
		this.pointcloud = pointcloud;
		this.matrix = null;
		this.boundingBox = null;
		this.tileSize = 64;
		this.root = null;
		this.version = 0;
	}

	//expands the tree to all nodes that intersect <box> at <level> returns the intersecting nodes at <level>
	expandAndFindByBox(box, level)
	{
		if(level === 0)
		{
			return [this.root];
		}

		var result = [];
		var stack = [this.root];

		while(stack.length > 0)
		{
			var node = stack.pop();
			var nodeBoxSize = node.box.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());

			//check which children intersect by transforming min/max to quadrants
			var min = {
				x: (box.min.x - node.box.min.x) / nodeBoxSize.x,
				y: (box.min.y - node.box.min.y) / nodeBoxSize.y
			};
			var max = {
				x: (box.max.x - node.box.max.x) / nodeBoxSize.x,
				y: (box.max.y - node.box.max.y) / nodeBoxSize.y
			};

			min.x = min.x < 0.5 ? 0 : 1;
			min.y = min.y < 0.5 ? 0 : 1;
			max.x = max.x < 0.5 ? 0 : 1;
			max.y = max.y < 0.5 ? 0 : 1;

			var childIndices;
			if(min.x === 0 && min.y === 0 && max.x === 1 && max.y === 1)
			{
				childIndices = [0, 1, 2, 3];
			}
			else if(min.x === max.x && min.y === max.y)
			{
				childIndices = [(min.x << 1) | min.y];
			}
			else
			{
				childIndices = [(min.x << 1) | min.y, (max.x << 1) | max.y];
			}

			for(var index of childIndices)
			{
				if(node.children[index] === undefined)
				{
					var childBox = node.box.clone();

					if((index & 2) > 0)
					{
						childBox.min.x += nodeBoxSize.x / 2.0;
					}
					else
					{
						childBox.max.x -= nodeBoxSize.x / 2.0;
					}

					if((index & 1) > 0)
					{
						childBox.min.y += nodeBoxSize.y / 2.0;
					}
					else
					{
						childBox.max.y -= nodeBoxSize.y / 2.0;
					}

					var child = new _DEMNode_js__WEBPACK_IMPORTED_MODULE_3__.DEMNode(node.name + index, childBox, this.tileSize);
					node.children[index] = child;
				}

				var child = node.children[index];

				if(child.level < level)
				{
					stack.push(child);
				}
				else
				{
					result.push(child);
				}
			}
		}

		return result;
	}

	childIndex(uv)
	{
		var [x, y] = uv.map(n => n < 0.5 ? 0 : 1);

		var index = (x << 1) | y;

		return index;
	}

	height(position)
	{
		if(!this.root)
		{
			return 0;
		}

		var height = null;
		var list = [this.root];
		while(true)
		{
			var node = list[list.length - 1];

			var currentHeight = node.height(position);

			if(currentHeight !== null)
			{
				height = currentHeight;
			}

			var uv = node.uv(position);
			var childIndex = this.childIndex(uv);

			if(node.children[childIndex])
			{
				list.push(node.children[childIndex]);
			}
			else
			{
				break;
			}
		}

		return height + this.pointcloud.position.z;
	}

	update(visibleNodes)
	{
		//check if point cloud transformation changed
		if(this.matrix === null || !this.matrix.equals(this.pointcloud.matrixWorld))
		{
			this.matrix = this.pointcloud.matrixWorld.clone();
			this.boundingBox = this.pointcloud.boundingBox.clone().applyMatrix4(this.matrix);
			this.root = new _DEMNode_js__WEBPACK_IMPORTED_MODULE_3__.DEMNode("r", this.boundingBox, this.tileSize);
			this.version++;
		}

		//find node to update
		var node = null;
		for(var vn of visibleNodes)
		{
			if(vn.demVersion === undefined || vn.demVersion < this.version)
			{
				node = vn;
				break;
			}
		}
		if(node === null)
		{
			return;
		}

		//update node
		var projectedBox = node.getBoundingBox().clone().applyMatrix4(this.matrix);
		var projectedBoxSize = projectedBox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());

		var targetNodes = this.expandAndFindByBox(projectedBox, node.getLevel());
		node.demVersion = this.version;

		var position = node.geometryNode.geometry.attributes.position.array;
		var message =
		{
			boundingBox:
			{
				min: node.getBoundingBox().min.toArray(),
				max: node.getBoundingBox().max.toArray()
			},
			position: new Float32Array(position).buffer
		};
		var transferables = [message.position];

		var self = this;

		_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.workerPool.runTask(_utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_1__.WorkerManager.DEM, function(e)
		{
			var data = new Float32Array(e.data.dem.data);

			for(var demNode of targetNodes)
			{
				var boxSize = demNode.box.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());

				for(var i = 0; i < self.tileSize; i++)
				{
					for(var j = 0; j < self.tileSize; j++)
					{
						var u = (i / (self.tileSize - 1));
						var v = (j / (self.tileSize - 1));

						var x = demNode.box.min.x + u * boxSize.x;
						var y = demNode.box.min.y + v * boxSize.y;

						var ix = self.tileSize * (x - projectedBox.min.x) / projectedBoxSize.x;
						var iy = self.tileSize * (y - projectedBox.min.y) / projectedBoxSize.y;

						if(ix < 0 || ix > self.tileSize)
						{
							continue;
						}

						if(iy < 0 || iy > self.tileSize)
						{
							continue;
						}

						ix = Math.min(Math.floor(ix), self.tileSize - 1);
						iy = Math.min(Math.floor(iy), self.tileSize - 1);

						demNode.data[i + self.tileSize * j] = data[ix + self.tileSize * iy];
					}
				}

				demNode.createMipMap();
				demNode.mipMapNeedsUpdate = true;
			}
		}, message, transferables);
	}
};



/***/ }),

/***/ "./source/pointcloud/DEMNode.js":
/*!**************************************!*\
  !*** ./source/pointcloud/DEMNode.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEMNode": () => (/* binding */ DEMNode)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);




//
//index is in order xyzxyzxyz
class DEMNode
{
	constructor(name, box, tileSize)
	{
		this.name = name;
		this.box = box;
		this.tileSize = tileSize;
		this.level = this.name.length - 1;
		this.data = new Float32Array(tileSize * tileSize);
		this.data.fill(-Infinity);
		this.children = [];

		this.mipMap = [this.data];
		this.mipMapNeedsUpdate = true;
	}

	createMipMap()
	{
		this.mipMap = [this.data];

		var sourceSize = this.tileSize;
		var mipSize = parseInt(sourceSize / 2);
		var mipSource = this.data;
		while(mipSize > 1)
		{
			var mipData = new Float32Array(mipSize * mipSize);

			for(var i = 0; i < mipSize; i++)
			{
				for(var j = 0; j < mipSize; j++)
				{
					var h00 = mipSource[2 * i + 0 + 2 * j * sourceSize];
					var h01 = mipSource[2 * i + 0 + 2 * j * sourceSize + sourceSize];
					var h10 = mipSource[2 * i + 1 + 2 * j * sourceSize];
					var h11 = mipSource[2 * i + 1 + 2 * j * sourceSize + sourceSize];

					var [height, weight] = [0, 0];

					if(isFinite(h00))
					{
						height += h00;
						weight += 1;
					};
					if(isFinite(h01))
					{
						height += h01;
						weight += 1;
					};
					if(isFinite(h10))
					{
						height += h10;
						weight += 1;
					};
					if(isFinite(h11))
					{
						height += h11;
						weight += 1;
					};

					height = height / weight;

					//var hs = [h00, h01, h10, h11].filter(h => isFinite(h));
					//var height = hs.reduce((a, v, i) => a + v, 0) / hs.length;

					mipData[i + j * mipSize] = height;
				}
			}

			this.mipMap.push(mipData);

			mipSource = mipData;
			sourceSize = mipSize;
			mipSize = parseInt(mipSize / 2);
		}

		this.mipMapNeedsUpdate = false;
	}

	uv(position)
	{
		var boxSize = this.box.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());

		var u = (position.x - this.box.min.x) / boxSize.x;
		var v = (position.y - this.box.min.y) / boxSize.y;

		return [u, v];
	}

	heightAtMipMapLevel(position, mipMapLevel)
	{
		var uv = this.uv(position);

		var tileSize = parseInt(this.tileSize / parseInt(2 ** mipMapLevel));
		var data = this.mipMap[mipMapLevel];

		var i = Math.min(uv[0] * tileSize, tileSize - 1);
		var j = Math.min(uv[1] * tileSize, tileSize - 1);

		var a = i % 1;
		var b = j % 1;

		var [i0, i1] = [Math.floor(i), Math.ceil(i)];
		var [j0, j1] = [Math.floor(j), Math.ceil(j)];

		var h00 = data[i0 + tileSize * j0];
		var h01 = data[i0 + tileSize * j1];
		var h10 = data[i1 + tileSize * j0];
		var h11 = data[i1 + tileSize * j1];

		var wh00 = isFinite(h00) ? (1 - a) * (1 - b) : 0;
		var wh01 = isFinite(h01) ? (1 - a) * b : 0;
		var wh10 = isFinite(h10) ? a * (1 - b) : 0;
		var wh11 = isFinite(h11) ? a * b : 0;

		var wsum = wh00 + wh01 + wh10 + wh11;
		wh00 = wh00 / wsum;
		wh01 = wh01 / wsum;
		wh10 = wh10 / wsum;
		wh11 = wh11 / wsum;

		if(wsum === 0)
		{
			return null;
		}

		var h = 0;

		if(isFinite(h00)) h += h00 * wh00;
		if(isFinite(h01)) h += h01 * wh01;
		if(isFinite(h10)) h += h10 * wh10;
		if(isFinite(h11)) h += h11 * wh11;

		return h;
	}

	height(position)
	{
		var h = null;

		for(var i = 0; i < this.mipMap.length; i++)
		{
			h = this.heightAtMipMapLevel(position, i);

			if(h !== null)
			{
				return h;
			}
		}

		return h;
	}

	traverse(handler, level = 0)
	{
		handler(this, level);

		for(var child of this.children.filter(c => c !== undefined))
		{
			child.traverse(handler, level + 1);
		}
	}
};



/***/ }),

/***/ "./source/pointcloud/PointCloudArena4D.js":
/*!************************************************!*\
  !*** ./source/pointcloud/PointCloudArena4D.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointCloudArena4D": () => (/* binding */ PointCloudArena4D),
/* harmony export */   "PointCloudArena4DNode": () => (/* binding */ PointCloudArena4DNode)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/HelperUtils.js */ "./source/utils/HelperUtils.js");
/* harmony import */ var _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PointCloudTree.js */ "./source/pointcloud/PointCloudTree.js");
/* harmony import */ var _Potree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Potree.js */ "./source/Potree.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global.js */ "./source/Global.js");
/* harmony import */ var _materials_PointCloudMaterial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materials/PointCloudMaterial.js */ "./source/pointcloud/materials/PointCloudMaterial.js");











class PointCloudArena4DNode extends _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_2__.PointCloudTreeNode
{
	constructor()
	{
		super();

		this.left = null;
		this.right = null;
		this.sceneNode = null;
		this.kdtree = null;
	}

	getNumPoints()
	{
		return this.geometryNode.numPoints;
	}

	isLoaded()
	{
		return true;
	}

	isTreeNode()
	{
		return true;
	}

	isGeometryNode()
	{
		return false;
	}

	getLevel()
	{
		return this.geometryNode.level;
	}

	getBoundingSphere()
	{
		return this.geometryNode.boundingSphere;
	}

	getBoundingBox()
	{
		return this.geometryNode.boundingBox;
	}

	toTreeNode(child)
	{
		var geometryNode = null;

		if(this.left === child)
		{
			geometryNode = this.left;
		}
		else if(this.right === child)
		{
			geometryNode = this.right;
		}

		if(!geometryNode.loaded)
		{
			return;
		}

		var node = new PointCloudArena4DNode();
		var sceneNode = three__WEBPACK_IMPORTED_MODULE_0__.PointCloud(geometryNode.geometry, this.kdtree.material);
		sceneNode.visible = false;

		node.kdtree = this.kdtree;
		node.geometryNode = geometryNode;
		node.sceneNode = sceneNode;
		node.parent = this;
		node.left = this.geometryNode.left;
		node.right = this.geometryNode.right;
	}

	getChildren()
	{
		var children = [];

		if(this.left)
		{
			children.push(this.left);
		}

		if(this.right)
		{
			children.push(this.right);
		}

		return children;
	}
};

class PointCloudArena4D extends _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_2__.PointCloudTree
{
	constructor(geometry)
	{
		super();

		this.root = null;
		if(geometry.root)
		{
			this.root = geometry.root;
		}
		else
		{
			geometry.addEventListener("hierarchy_loaded", () =>
			{
				this.root = geometry.root;
			});
		}

		this.visiblePointsTarget = 2 * 1000 * 1000;
		this.minimumNodePixelSize = 150;

		this.position.sub(geometry.offset);
		this.updateMatrix();

		this.numVisibleNodes = 0;
		this.numVisiblePoints = 0;

		this.boundingBoxNodes = [];
		this.loadQueue = [];
		this.visibleNodes = [];

		this.pcoGeometry = geometry;
		this.boundingBox = this.pcoGeometry.boundingBox;
		this.boundingSphere = this.pcoGeometry.boundingSphere;
		this.material = new _materials_PointCloudMaterial_js__WEBPACK_IMPORTED_MODULE_5__.PointCloudMaterial(
		{
			vertexColors: three__WEBPACK_IMPORTED_MODULE_0__.VertexColors,
			size: 0.05,
			treeType: _Potree_js__WEBPACK_IMPORTED_MODULE_3__.TreeType.KDTREE
		});
		this.material.sizeType = _Potree_js__WEBPACK_IMPORTED_MODULE_3__.PointSizeType.ATTENUATED;
		this.material.size = 0.05;
		this.profileRequests = [];
		this.name = "";
	}

	getBoundingBoxWorld()
	{
		this.updateMatrixWorld(true);
		var box = this.boundingBox;
		var transform = this.matrixWorld;
		var tBox = _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_1__.HelperUtils.computeTransformedBoundingBox(box, transform);

		return tBox;
	};

	setName(name)
	{
		if(this.name !== name)
		{
			this.name = name;
			this.dispatchEvent(
			{
				type: "name_changed",
				name: name,
				pointcloud: this
			});
		}
	}

	getName()
	{
		return this.name;
	}

	getLevel()
	{
		return this.level;
	}

	toTreeNode(geometryNode, parent)
	{
		var node = new PointCloudArena4DNode();

		var sceneNode = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometryNode.geometry, this.material);
		sceneNode.frustumCulled = true;
		sceneNode.onBeforeRender = (_this, scene, camera, geometry, material, group) =>
		{
			if(material.program)
			{
				_this.getContext().useProgram(material.program.program);

				if(material.program.getUniforms().map.level)
				{
					var level = geometryNode.getLevel();
					material.uniforms.level.value = level;
					material.program.getUniforms().map.level.setValue(_this.getContext(), level);
				}

				if(this.visibleNodeTextureOffsets && material.program.getUniforms().map.vnStart)
				{
					var vnStart = this.visibleNodeTextureOffsets.get(node);
					material.uniforms.vnStart.value = vnStart;
					material.program.getUniforms().map.vnStart.setValue(_this.getContext(), vnStart);
				}

				if(material.program.getUniforms().map.pcIndex)
				{
					var i = node.pcIndex ? node.pcIndex : this.visibleNodes.indexOf(node);
					material.uniforms.pcIndex.value = i;
					material.program.getUniforms().map.pcIndex.setValue(_this.getContext(), i);
				}
			}
		};

		node.geometryNode = geometryNode;
		node.sceneNode = sceneNode;
		node.pointcloud = this;
		node.left = geometryNode.left;
		node.right = geometryNode.right;

		if(!parent)
		{
			this.root = node;
			this.add(sceneNode);
		}
		else
		{
			parent.sceneNode.add(sceneNode);

			if(parent.left === geometryNode)
			{
				parent.left = node;
			}
			else if(parent.right === geometryNode)
			{
				parent.right = node;
			}
		}

		var disposeListener = function()
		{
			parent.sceneNode.remove(node.sceneNode);

			if(parent.left === node)
			{
				parent.left = geometryNode;
			}
			else if(parent.right === node)
			{
				parent.right = geometryNode;
			}
		};
		geometryNode.oneTimeDisposeHandlers.push(disposeListener);

		return node;
	}

	updateMaterial(material, visibleNodes, camera, renderer)
	{
		material.fov = camera.fov * (Math.PI / 180);
		material.screenWidth = renderer.domElement.clientWidth;
		material.screenHeight = renderer.domElement.clientHeight;
		material.spacing = this.pcoGeometry.spacing;
		material.near = camera.near;
		material.far = camera.far;

		//reduce shader source updates by setting maxLevel slightly higher than actually necessary
		if(this.maxLevel > material.levels)
		{
			material.levels = this.maxLevel + 2;
		}

		//material.uniforms.octreeSize.value = this.boundingBox.size().x;
		var bbSize = this.boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());
		material.bbSize = [bbSize.x, bbSize.y, bbSize.z];
	}

	updateVisibleBounds()
	{

	}

	hideDescendants(object)
	{
		var stack = [];
		for(var i = 0; i < object.children.length; i++)
		{
			var child = object.children[i];
			if(child.visible)
			{
				stack.push(child);
			}
		}

		while(stack.length > 0)
		{
			var child = stack.shift();

			child.visible = false;
			if(child.boundingBoxNode)
			{
				child.boundingBoxNode.visible = false;
			}

			for(var i = 0; i < child.children.length; i++)
			{
				var childOfChild = child.children[i];
				if(childOfChild.visible)
				{
					stack.push(childOfChild);
				}
			}
		}
	}

	updateMatrixWorld(force)
	{
		//node.matrixWorld.multiplyMatrices( node.parent.matrixWorld, node.matrix );

		if(this.matrixAutoUpdate === true) this.updateMatrix();

		if(this.matrixWorldNeedsUpdate === true || force === true)
		{
			if(this.parent === undefined)
			{
				this.matrixWorld.copy(this.matrix);
			}
			else
			{
				this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
			}

			this.matrixWorldNeedsUpdate = false;

			force = true;
		}
	}

	nodesOnRay(nodes, ray)
	{
		var nodesOnRay = [];

		var _ray = ray.clone();
		for(var i = 0; i < nodes.length; i++)
		{
			var node = nodes[i];
			var sphere = node.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere()).clone().applyMatrix4(node.sceneNode.matrixWorld);
			//TODO Unused: var box = node.getBoundingBox().clone().applyMatrix4(node.sceneNode.matrixWorld);

			if(_ray.intersectsSphere(sphere))
			{
				nodesOnRay.push(node);
			}
			//if(_ray.isIntersectionBox(box)){
			//	nodesOnRay.push(node);
			//}
		}

		return nodesOnRay;
	}

	pick(viewer, camera, ray, params = {})
	{

		var renderer = viewer.renderer;
		var pRenderer = viewer.pRenderer;

		performance.mark("pick-start");

		var getVal = (a, b) => a !== undefined ? a : b;

		var pickWindowSize = getVal(params.pickWindowSize, 17);

		var size = renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());

		var width = Math.ceil(getVal(params.width, size.width));
		var height = Math.ceil(getVal(params.height, size.height));

		var pointSizeType = getVal(params.pointSizeType, this.material.pointSizeType);
		var pointSize = getVal(params.pointSize, this.material.size);

		var nodes = this.nodesOnRay(this.visibleNodes, ray);

		if(nodes.length === 0)
		{
			return null;
		}

		if(!this.pickState)
		{
			var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();

			var material = new _materials_PointCloudMaterial_js__WEBPACK_IMPORTED_MODULE_5__.PointCloudMaterial();
			material.pointColorType = _Potree_js__WEBPACK_IMPORTED_MODULE_3__.PointColorType.POINT_INDEX;

			var renderTarget = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderTarget(
				1, 1,
				{
					minFilter: three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter,
					magFilter: three__WEBPACK_IMPORTED_MODULE_0__.NearestFilter,
					format: three__WEBPACK_IMPORTED_MODULE_0__.RGBAFormat
				}
			);

			this.pickState = {
				renderTarget: renderTarget,
				material: material,
				scene: scene
			};
		};

		var pickState = this.pickState;
		var pickMaterial = pickState.material;
		this.updateMaterial(pickMaterial, nodes, camera, renderer);

		pickState.renderTarget.setSize(width, height);

		var pixelPos = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(params.x, params.y);

		var gl = renderer.getContext();
		gl.enable(gl.SCISSOR_TEST);
		gl.scissor(parseInt(pixelPos.x - (pickWindowSize - 1) / 2), parseInt(pixelPos.y - (pickWindowSize - 1) / 2), parseInt(pickWindowSize), parseInt(pickWindowSize));

		renderer.state.buffers.depth.setTest(pickMaterial.depthTest);
		renderer.state.buffers.depth.setMask(pickMaterial.depthWrite);
		renderer.state.setBlending(three__WEBPACK_IMPORTED_MODULE_0__.NoBlending);

		renderer.clearTarget(pickState.renderTarget, true, true, true);
		renderer.setRenderTarget(pickState.renderTarget);
		
		gl.clearColor(0, 0, 0, 0);
		renderer.clearTarget(pickState.renderTarget, true, true, true);

		var tmp = this.material;
		this.material = pickMaterial;

		pRenderer.renderOctree(this, nodes, camera, pickState.renderTarget);

		this.material = tmp;

		var clamp = (number, min, max) => Math.min(Math.max(min, number), max);

		var x = parseInt(clamp(pixelPos.x - (pickWindowSize - 1) / 2, 0, width));
		var y = parseInt(clamp(pixelPos.y - (pickWindowSize - 1) / 2, 0, height));
		var w = parseInt(Math.min(x + pickWindowSize, width) - x);
		var h = parseInt(Math.min(y + pickWindowSize, height) - y);

		var pixelCount = w * h;
		var buffer = new Uint8Array(4 * pixelCount);

		gl.readPixels(x, y, pickWindowSize, pickWindowSize, gl.RGBA, gl.UNSIGNED_BYTE, buffer);

		renderer.setRenderTarget(null);
		renderer.resetGLState();
		renderer.setScissorTest(false);
		gl.disable(gl.SCISSOR_TEST);

		var pixels = buffer;
		var ibuffer = new Uint32Array(buffer.buffer);

		//find closest hit inside pixelWindow boundaries
		var min = Number.MAX_VALUE;
		var hits = [];
		for(var u = 0; u < pickWindowSize; u++)
		{
			for(var v = 0; v < pickWindowSize; v++)
			{
				var offset = (u + v * pickWindowSize);
				var distance = Math.pow(u - (pickWindowSize - 1) / 2, 2) + Math.pow(v - (pickWindowSize - 1) / 2, 2);

				var pcIndex = pixels[4 * offset + 3];
				pixels[4 * offset + 3] = 0;
				var pIndex = ibuffer[offset];

				if(!(pcIndex === 0 && pIndex === 0) && (pcIndex !== undefined) && (pIndex !== undefined))
				{
					var hit = {
						pIndex: pIndex,
						pcIndex: pcIndex,
						distanceToCenter: distance
					};

					if(params.all)
					{
						hits.push(hit);
					}
					else
					{
						if(hits.length > 0)
						{
							if(distance < hits[0].distanceToCenter)
							{
								hits[0] = hit;
							}
						}
						else
						{
							hits.push(hit);
						}
					}

				}
			}
		}

		for(var hit of hits)
		{
			var point = {};

			if(!nodes[hit.pcIndex])
			{
				return null;
			}

			var node = nodes[hit.pcIndex];
			var pc = node.sceneNode;
			var geometry = node.geometryNode.geometry;

			for(var attributeName in geometry.attributes)
			{
				var attribute = geometry.attributes[attributeName];

				if(attributeName === "position")
				{
					var x = attribute.array[3 * hit.pIndex + 0];
					var y = attribute.array[3 * hit.pIndex + 1];
					var z = attribute.array[3 * hit.pIndex + 2];

					var position = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(x, y, z);
					position.applyMatrix4(pc.matrixWorld);

					point[attributeName] = position;
				}

			}

			hit.point = point;
		}

		performance.mark("pick-end");
		performance.measure("pick", "pick-start", "pick-end");

		if(params.all)
		{
			return hits.map(hit => hit.point);
		}
		else
		{
			if(hits.length === 0)
			{
				return null;
			}
			else
			{
				return hits[0].point;
			}
		}
	}

	computeVisibilityTextureData(nodes)
	{
		if(_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.measureTimings)
		{
			performance.mark("computeVisibilityTextureData-start");
		}

		var data = new Uint8Array(nodes.length * 3);
		var visibleNodeTextureOffsets = new Map();

		//copy array
		nodes = nodes.slice();

		//sort by level and number
		var sort = function(a, b)
		{
			var la = a.geometryNode.level;
			var lb = b.geometryNode.level;
			var na = a.geometryNode.number;
			var nb = b.geometryNode.number;
			if(la !== lb) return la - lb;
			if(na < nb) return -1;
			if(na > nb) return 1;
			return 0;
		};
		nodes.sort(sort);

		var visibleNodeNames = [];
		for(var i = 0; i < nodes.length; i++)
		{
			visibleNodeNames.push(nodes[i].geometryNode.number);
		}

		for(var i = 0; i < nodes.length; i++)
		{
			var node = nodes[i];

			visibleNodeTextureOffsets.set(node, i);

			var b1 = 0; //children
			var b2 = 0; //offset to first child
			var b3 = 0; //split

			if(node.geometryNode.left && visibleNodeNames.indexOf(node.geometryNode.left.number) > 0)
			{
				b1 += 1;
				b2 = visibleNodeNames.indexOf(node.geometryNode.left.number) - i;
			}
			if(node.geometryNode.right && visibleNodeNames.indexOf(node.geometryNode.right.number) > 0)
			{
				b1 += 2;
				b2 = (b2 === 0) ? visibleNodeNames.indexOf(node.geometryNode.right.number) - i : b2;
			}

			if(node.geometryNode.split === "X")
			{
				b3 = 1;
			}
			else if(node.geometryNode.split === "Y")
			{
				b3 = 2;
			}
			else if(node.geometryNode.split === "Z")
			{
				b3 = 4;
			}

			data[i * 3 + 0] = b1;
			data[i * 3 + 1] = b2;
			data[i * 3 + 2] = b3;
		}

		if(_Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.measureTimings)
		{
			performance.mark("computeVisibilityTextureData-end");
			performance.measure("render.computeVisibilityTextureData", "computeVisibilityTextureData-start", "computeVisibilityTextureData-end");
		}

		return {
			data: data,
			offsets: visibleNodeTextureOffsets
		};
	}

	get progress()
	{
		if(this.pcoGeometry.root)
		{
			return _Global_js__WEBPACK_IMPORTED_MODULE_4__.Global.numNodesLoading > 0 ? 0 : 1;
		}
		else
		{
			return 0;
		}
	}
};




/***/ }),

/***/ "./source/pointcloud/PointCloudOctree.js":
/*!***********************************************!*\
  !*** ./source/pointcloud/PointCloudOctree.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointCloudOctree": () => (/* binding */ PointCloudOctree),
/* harmony export */   "PointCloudOctreeNode": () => (/* binding */ PointCloudOctreeNode)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geometries_PointCloudOctreeGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometries/PointCloudOctreeGeometry.js */ "./source/pointcloud/geometries/PointCloudOctreeGeometry.js");
/* harmony import */ var _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/HelperUtils.js */ "./source/utils/HelperUtils.js");
/* harmony import */ var _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PointCloudTree.js */ "./source/pointcloud/PointCloudTree.js");
/* harmony import */ var _materials_PointCloudMaterial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materials/PointCloudMaterial.js */ "./source/pointcloud/materials/PointCloudMaterial.js");
/* harmony import */ var _Potree_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Potree.js */ "./source/Potree.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Global.js */ "./source/Global.js");











class PointCloudOctreeNode extends _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_3__.PointCloudTreeNode
{
	constructor()
	{
		super();

		this.children = {};
		this.sceneNode = null;
		this.octree = null;
	}

	getNumPoints()
	{
		return this.geometryNode.numPoints;
	}

	isLoaded()
	{
		return true;
	}

	isTreeNode()
	{
		return true;
	}

	isGeometryNode()
	{
		return false;
	}

	getLevel()
	{
		return this.geometryNode.level;
	}

	getBoundingSphere()
	{
		return this.geometryNode.boundingSphere;
	}

	getBoundingBox()
	{
		return this.geometryNode.boundingBox;
	}

	getChildren()
	{
		var children = [];

		for(var i = 0; i < 8; i++)
		{
			if(this.children[i])
			{
				children.push(this.children[i]);
			}
		}

		return children;
	}

	getPointsInBox(boxNode)
	{

		if(!this.sceneNode)
		{
			return null;
		}

		var buffer = this.geometryNode.buffer;

		var posOffset = buffer.offset("position");
		var stride = buffer.stride;
		var view = new DataView(buffer.data);

		var worldToBox = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().getInverse(boxNode.matrixWorld);
		var objectToBox = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().multiplyMatrices(worldToBox, this.sceneNode.matrixWorld);

		var inBox = [];

		var pos = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4();
		for(var i = 0; i < buffer.numElements; i++)
		{
			var x = view.getFloat32(i * stride + posOffset + 0, true);
			var y = view.getFloat32(i * stride + posOffset + 4, true);
			var z = view.getFloat32(i * stride + posOffset + 8, true);

			pos.set(x, y, z, 1);
			pos.applyMatrix4(objectToBox);

			if(-0.5 < pos.x && pos.x < 0.5)
			{
				if(-0.5 < pos.y && pos.y < 0.5)
				{
					if(-0.5 < pos.z && pos.z < 0.5)
					{
						pos.set(x, y, z, 1).applyMatrix4(this.sceneNode.matrixWorld);
						inBox.push(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(pos.x, pos.y, pos.z));
					}
				}
			}
		}

		return inBox;
	}

	get name()
	{
		return this.geometryNode.name;
	}
};

class PointCloudOctree extends _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_3__.PointCloudTree
{
	constructor(geometry, material)
	{
		super();

		this.pointBudget = Infinity;
		this.pcoGeometry = geometry;
		this.boundingBox = this.pcoGeometry.boundingBox;
		this.boundingSphere = this.boundingBox.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere());
		this.material = material || new _materials_PointCloudMaterial_js__WEBPACK_IMPORTED_MODULE_4__.PointCloudMaterial();
		this.visiblePointsTarget = 2 * 1000 * 1000;
		this.minimumNodePixelSize = 150;
		this.level = 0;
		this.position.copy(geometry.offset);
		this.updateMatrix();

		this.showBoundingBox = false;
		this.boundingBoxNodes = [];
		this.loadQueue = [];
		this.visibleBounds = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();
		this.visibleNodes = [];
		this.visibleGeometry = [];
		this.generateDEM = false;
		this.profileRequests = [];
		this.name = "";

		this.tempVector3 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

		var box = [this.pcoGeometry.tightBoundingBox, this.getBoundingBoxWorld()].find(v => v !== undefined);

		this.updateMatrixWorld(true);
		box = _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_2__.HelperUtils.computeTransformedBoundingBox(box, this.matrixWorld);

		var bMin = box.min.z;
		var bMax = box.max.z;
		this.material.heightMin = bMin;
		this.material.heightMax = bMax;

		//TODO <read projection from file instead>
		this.projection = geometry.projection;

		this.root = this.pcoGeometry.root;
	}

	setName(name)
	{
		if(this.name !== name)
		{
			this.name = name;
			this.dispatchEvent(
			{
				type: "name_changed",
				name: name,
				pointcloud: this
			});
		}
	}

	getName()
	{
		return this.name;
	}

	toTreeNode(geometryNode, parent)
	{
		var node = new PointCloudOctreeNode();
		var sceneNode = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometryNode.geometry, this.material);
		sceneNode.name = geometryNode.name;
		sceneNode.position.copy(geometryNode.boundingBox.min);
		sceneNode.frustumCulled = true;
		sceneNode.onBeforeRender = (renderer, scene, camera, geometry, material, group) =>
		{
			var vnStart = null;
			if(this.visibleNodeTextureOffsets)
			{
				vnStart = this.visibleNodeTextureOffsets.get(node);
			}

			var pcIndex = node.pcIndex ? node.pcIndex : this.visibleNodes.indexOf(node);
			var level = geometryNode.getLevel();
	
			material.uniforms.level.value = level;
			material.uniforms.vnStart.value = vnStart;
			material.uniforms.uPCIndex.value = pcIndex;
			this.updateMaterial(material, camera, renderer);
		};

		node.geometryNode = geometryNode;
		node.sceneNode = sceneNode;
		node.pointcloud = this;
		node.children = {};
		for(var key in geometryNode.children)
		{
			node.children[key] = geometryNode.children[key];
		}

		if(!parent)
		{
			this.root = node;
			this.add(sceneNode);
		}
		else
		{
			var childIndex = parseInt(geometryNode.name[geometryNode.name.length - 1]);
			parent.sceneNode.add(sceneNode);
			parent.children[childIndex] = node;
		}

		var disposeListener = function()
		{
			var childIndex = parseInt(geometryNode.name[geometryNode.name.length - 1]);
			parent.sceneNode.remove(node.sceneNode);
			parent.children[childIndex] = geometryNode;
		};
		geometryNode.oneTimeDisposeHandlers.push(disposeListener);


		return node;
	}

	updateVisibleBounds()
	{
		var leafNodes = [];
		for(var i = 0; i < this.visibleNodes.length; i++)
		{
			var node = this.visibleNodes[i];
			var isLeaf = true;

			for(var j = 0; j < node.children.length; j++)
			{
				var child = node.children[j];
				if(child instanceof PointCloudOctreeNode)
				{
					isLeaf = isLeaf && !child.sceneNode.visible;
				}
				else if(child instanceof _geometries_PointCloudOctreeGeometry_js__WEBPACK_IMPORTED_MODULE_1__.PointCloudOctreeGeometryNode)
				{
					isLeaf = true;
				}
			}

			if(isLeaf)
			{
				leafNodes.push(node);
			}
		}

		this.visibleBounds.min = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(Infinity, Infinity, Infinity);
		this.visibleBounds.max = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-Infinity, -Infinity, -Infinity);

		for(var i = 0; i < leafNodes.length; i++)
		{
			var node = leafNodes[i];
			this.visibleBounds.expandByPoint(node.getBoundingBox().min);
			this.visibleBounds.expandByPoint(node.getBoundingBox().max);
		}
	}

	updateMaterial(material, camera, renderer)
	{
		var octtreeSpacing = this.pcoGeometry.spacing * Math.max(this.scale.x, this.scale.y, this.scale.z);
		var octreeSize = this.pcoGeometry.boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).x;

		material.uniforms.fov.value = camera.fov * (Math.PI / 180);
		material.uniforms.uScreenWidth.value = renderer.domElement.clientWidth;
		material.uniforms.uScreenHeight.value = renderer.domElement.clientHeight;
		material.uniforms.uOctreeSpacing.value = octtreeSpacing;
		material.uniforms.near.value = camera.near;
		material.uniforms.far.value = camera.far;
		material.uniforms.octreeSize.value = octreeSize;

		material.uniformsNeedUpdate  = true;
	}

	computeVisibilityTextureData(nodes, camera)
	{
		if(_Global_js__WEBPACK_IMPORTED_MODULE_6__.Global.measureTimings)
		{
			performance.mark("computeVisibilityTextureData-start");
		}

		var data = new Uint8Array(nodes.length * 4);
		var visibleNodeTextureOffsets = new Map();

		//copy array
		nodes = nodes.slice();

		//sort by level and index, e.g. r, r0, r3, r4, r01, r07, r30, ...
		var sort = function(a, b)
		{
			var na = a.geometryNode.name;
			var nb = b.geometryNode.name;
			if(na.length !== nb.length) return na.length - nb.length;
			if(na < nb) return -1;
			if(na > nb) return 1;
			return 0;
		};
		nodes.sort(sort);

		//code sample taken from three.js src/math/Ray.js
		var v1 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		var intersectSphereBack = (ray, sphere) =>
		{
			v1.subVectors(sphere.center, ray.origin);
			var tca = v1.dot(ray.direction);
			var d2 = v1.dot(v1) - tca * tca;
			var radius2 = sphere.radius * sphere.radius;

			if(d2 > radius2)
			{
				return null;
			}

			var thc = Math.sqrt(radius2 - d2);

			//t1 = second intersect point - exit point on back of sphere
			var t1 = tca + thc;

			if(t1 < 0)
			{
				return null;
			}

			return t1;
		};

		var lodRanges = new Map();
		var leafNodeLodRanges = new Map();

		for(var i = 0; i < nodes.length; i++)
		{
			var node = nodes[i];

			visibleNodeTextureOffsets.set(node, i);

			var children = [];
			for(var j = 0; j < 8; j++)
			{
				var child = node.children[j];

				if(child && child.constructor === PointCloudOctreeNode && nodes.includes(child, i))
				{
					children.push(child);
				}
			}

			data[i * 4 + 0] = 0;
			data[i * 4 + 1] = 0;
			data[i * 4 + 2] = 0;
			data[i * 4 + 3] = node.getLevel();
			for(var j = 0; j < children.length; j++)
			{
				var child = children[j];
				var index = parseInt(child.geometryNode.name.substr(-1));
				data[i * 4 + 0] += Math.pow(2, index);

				if(j === 0)
				{
					var vArrayIndex = nodes.indexOf(child, i);

					data[i * 4 + 1] = (vArrayIndex - i) >> 8;
					data[i * 4 + 2] = (vArrayIndex - i) % 256;
				}
			}

			//TODO performance optimization
			//for some reason, this part can be extremely slow in chrome during a debugging session, but not during profiling
			var bBox = node.getBoundingBox().clone();
			//bBox.applyMatrix4(node.sceneNode.matrixWorld);
			//bBox.applyMatrix4(camera.matrixWorldInverse);
			var bSphere = bBox.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere());
			bSphere.applyMatrix4(node.sceneNode.matrixWorld);
			bSphere.applyMatrix4(camera.matrixWorldInverse);

			var ray = new three__WEBPACK_IMPORTED_MODULE_0__.Ray(camera.position, camera.getWorldDirection(this.tempVector3));
			var distance = intersectSphereBack(ray, bSphere);
			var distance2 = bSphere.center.distanceTo(camera.position) + bSphere.radius;
			if(distance === null)
			{
				distance = distance2;
			}
			distance = Math.max(distance, distance2);

			if(!lodRanges.has(node.getLevel()))
			{
				lodRanges.set(node.getLevel(), distance);
			}
			else
			{
				var prevDistance = lodRanges.get(node.getLevel());
				var newDistance = Math.max(prevDistance, distance);
				lodRanges.set(node.getLevel(), newDistance);
			}

			if(!node.geometryNode.hasChildren)
			{
				var value = {
					distance: distance,
					i: i
				};
				leafNodeLodRanges.set(node, value);
			}
		}

		for(var [node, value] of leafNodeLodRanges)
		{
			var level = node.getLevel();
			var distance = value.distance;
			var i = value.i;

			if(level < 4)
			{
				continue;
			}
			for(var [lod, range] of lodRanges)
			{
				if(distance < range * 1.2)
				{
					data[i * 4 + 3] = lod;
				}
			}
		}

		if(_Global_js__WEBPACK_IMPORTED_MODULE_6__.Global.measureTimings)
		{
			performance.mark("computeVisibilityTextureData-end");
			performance.measure("render.computeVisibilityTextureData", "computeVisibilityTextureData-start", "computeVisibilityTextureData-end");
		}

		return {
			data: data,
			offsets: visibleNodeTextureOffsets
		};
	}

	nodeIntersectsProfile(node, profile)
	{
		var bbWorld = node.boundingBox.clone().applyMatrix4(this.matrixWorld);
		var bsWorld = bbWorld.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere());

		var intersects = false;

		for(var i = 0; i < profile.points.length - 1; i++)
		{

			var start = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(profile.points[i + 0].x, profile.points[i + 0].y, bsWorld.center.z);
			var end = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(profile.points[i + 1].x, profile.points[i + 1].y, bsWorld.center.z);

			var closest = new three__WEBPACK_IMPORTED_MODULE_0__.Line3(start, end).closestPointToPoint(bsWorld.center, true);
			var distance = closest.distanceTo(bsWorld.center);

			intersects = intersects || (distance < (bsWorld.radius + profile.width));
		}

		return intersects;
	}

	nodesOnRay(nodes, ray)
	{
		var nodesOnRay = [];

		var _ray = ray.clone();
		for(var i = 0; i < nodes.length; i++)
		{
			var node = nodes[i];
			//var inverseWorld = new THREE.Matrix4().getInverse(node.matrixWorld);
			//var sphere = node.getBoundingSphere(new THREE.Sphere()).clone().applyMatrix4(node.sceneNode.matrixWorld);
			var sphere = node.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere()).clone().applyMatrix4(this.matrixWorld);

			if(_ray.intersectsSphere(sphere))
			{
				nodesOnRay.push(node);
			}
		}

		return nodesOnRay;
	}

	updateMatrixWorld(force)
	{
		if(this.matrixAutoUpdate === true) this.updateMatrix();

		if(this.matrixWorldNeedsUpdate === true || force === true)
		{
			if(!this.parent)
			{
				this.matrixWorld.copy(this.matrix);
			}
			else
			{
				this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
			}

			this.matrixWorldNeedsUpdate = false;

			force = true;
		}
	}

	hideDescendants(object)
	{
		var stack = [];
		for(var i = 0; i < object.children.length; i++)
		{
			var child = object.children[i];
			if(child.visible)
			{
				stack.push(child);
			}
		}

		while(stack.length > 0)
		{
			var object = stack.shift();

			object.visible = false;

			for(var i = 0; i < object.children.length; i++)
			{
				var child = object.children[i];
				if(child.visible)
				{
					stack.push(child);
				}
			}
		}
	}

	moveToOrigin()
	{
		this.position.set(0, 0, 0);
		this.updateMatrixWorld(true);
		var box = this.boundingBox;
		var transform = this.matrixWorld;
		var tBox = _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_2__.HelperUtils.computeTransformedBoundingBox(box, transform);

		this.position.set(0, 0, 0).sub(tBox.getCenter(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()));
	};

	moveToGroundPlane()
	{
		this.updateMatrixWorld(true);
		var box = this.boundingBox;
		var transform = this.matrixWorld;
		var tBox = _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_2__.HelperUtils.computeTransformedBoundingBox(box, transform);
		this.position.y += -tBox.min.y;
	};

	getBoundingBoxWorld()
	{
		this.updateMatrixWorld(true);
		var box = this.boundingBox;
		var transform = this.matrixWorld;
		var tBox = _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_2__.HelperUtils.computeTransformedBoundingBox(box, transform);

		return tBox;
	};

	/**
	 * returns points inside the profile points
	 *
	 * maxDepth:		search points up to the given octree depth
	 *
	 *
	 * The return value is an array with all segments of the profile path
	 *  var segment = {
	 * 		start: 	THREE.Vector3,
	 * 		end: 	THREE.Vector3,
	 * 		points: {}
	 * 		project: function()
	 *  };
	 *
	 * The project() function inside each segment can be used to transform
	 * that segments point coordinates to line up along the x-axis.
	 *
	 *
	 */
	getPointsInProfile(profile, maxDepth, callback)
	{
		if(callback)
		{
			//var request = new Potree.ProfileRequest(this, profile, maxDepth, callback);
			//this.profileRequests.push(request);
			//return request;
		}

		var points = {
			segments: [],
			boundingBox: new three__WEBPACK_IMPORTED_MODULE_0__.Box3(),
			projectedBoundingBox: new three__WEBPACK_IMPORTED_MODULE_0__.Box2()
		};

		//evaluate segments
		for(var i = 0; i < profile.points.length - 1; i++)
		{
			var start = profile.points[i];
			var end = profile.points[i + 1];
			var ps = this.getProfile(start, end, profile.width, maxDepth);

			var segment = {
				start: start,
				end: end,
				points: ps,
				project: null
			};

			points.segments.push(segment);

			points.boundingBox.expandByPoint(ps.boundingBox.min);
			points.boundingBox.expandByPoint(ps.boundingBox.max);
		}

		//add projection functions to the segments
		var mileage = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		for(var i = 0; i < points.segments.length; i++)
		{
			var segment = points.segments[i];
			var start = segment.start;
			var end = segment.end;

			var project = (function(_start, _end, _mileage, _boundingBox)
			{
				var start = _start;
				var end = _end;
				var mileage = _mileage;
				var boundingBox = _boundingBox;

				var xAxis = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, 0);
				var dir = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().subVectors(end, start);
				dir.y = 0;
				dir.normalize();
				var alpha = Math.acos(xAxis.dot(dir));
				if(dir.z > 0)
				{
					alpha = -alpha;
				}

				return function(position)
				{
					var toOrigin = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeTranslation(-start.x, -boundingBox.min.y, -start.z);
					var alignWithX = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeRotationY(-alpha);
					var applyMileage = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeTranslation(mileage.x, 0, 0);

					var pos = position.clone();
					pos.applyMatrix4(toOrigin);
					pos.applyMatrix4(alignWithX);
					pos.applyMatrix4(applyMileage);

					return pos;
				};
			}(start, end, mileage.clone(), points.boundingBox.clone()));

			segment.project = project;

			mileage.x += new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(start.x, 0, start.z).distanceTo(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(end.x, 0, end.z));
			mileage.y += end.y - start.y;
		}

		points.projectedBoundingBox.min.x = 0;
		points.projectedBoundingBox.min.y = points.boundingBox.min.y;
		points.projectedBoundingBox.max.x = mileage.x;
		points.projectedBoundingBox.max.y = points.boundingBox.max.y;

		return points;
	}

	/**
	 * returns points inside the given profile bounds.
	 *
	 * start:
	 * end:
	 * width:
	 * depth:		search points up to the given octree depth
	 * callback:	if specified, points are loaded before searching
	 *
	 *
	 */
	getProfile(start, end, width, depth, callback)
	{
		//var request = new Potree.ProfileRequest(start, end, width, depth, callback);
		//this.profileRequests.push(request);
	};

	getVisibleExtent()
	{
		return this.visibleBounds.applyMatrix4(this.matrixWorld);
	};

	/**
	 *
	 *
	 *
	 * params.pickWindowSize:	Look for points inside a pixel window of this size.
	 * 							Use odd values: 1, 3, 5, ...
	 *
	 *
	 * TODO: only draw pixels that are actually read with readPixels().
	 *
	 */
	pick(viewer, camera, ray, params = {})
	{
		var renderer = viewer.renderer;
		var pRenderer = viewer.pRenderer;

		performance.mark("pick-start");

		var getVal = (a, b) => a !== undefined ? a : b;

		var pickWindowSize = getVal(params.pickWindowSize, 17);

		var size = renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());

		var width = Math.ceil(getVal(params.width, size.width));
		var height = Math.ceil(getVal(params.height, size.height));

		var pointSizeType = getVal(params.pointSizeType, this.material.pointSizeType);
		var pointSize = getVal(params.pointSize, this.material.size);

		var nodes = this.nodesOnRay(this.visibleNodes, ray);

		if(nodes.length === 0)
		{
			return null;
		}

		if(!this.pickState)
		{
			var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();

			var material = new _materials_PointCloudMaterial_js__WEBPACK_IMPORTED_MODULE_4__.PointCloudMaterial();
			material.pointColorType = _Potree_js__WEBPACK_IMPORTED_MODULE_5__.PointColorType.POINT_INDEX;

			var renderTarget = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderTarget(
				1, 1,
				{
					minFilter: three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter,
					magFilter: three__WEBPACK_IMPORTED_MODULE_0__.NearestFilter,
					format: three__WEBPACK_IMPORTED_MODULE_0__.RGBAFormat
				}
			);

			this.pickState = {
				renderTarget: renderTarget,
				material: material,
				scene: scene
			};
		};

		var pickState = this.pickState;
		var pickMaterial = pickState.material;

		//Update pick material
		pickMaterial.pointSizeType = pointSizeType;
		pickMaterial.shape = this.material.shape;

		pickMaterial.size = pointSize;
		pickMaterial.uniforms.minSize.value = this.material.uniforms.minSize.value;
		pickMaterial.uniforms.maxSize.value = this.material.uniforms.maxSize.value;
		pickMaterial.classification = this.material.classification;
		pickMaterial.clippingPlanes = this.material.clippingPlanes;
		pickMaterial.clipping = this.material.clipping;

		this.updateMaterial(pickMaterial, camera, renderer);

		pickState.renderTarget.setSize(width, height);

		var pixelPos = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(params.x, params.y);

		var gl = renderer.getContext();
		gl.enable(gl.SCISSOR_TEST);
		gl.scissor(parseInt(pixelPos.x - (pickWindowSize - 1) / 2), parseInt(pixelPos.y - (pickWindowSize - 1) / 2), parseInt(pickWindowSize), parseInt(pickWindowSize));

		renderer.state.buffers.depth.setTest(pickMaterial.depthTest);
		renderer.state.buffers.depth.setMask(pickMaterial.depthWrite);
		renderer.state.setBlending(three__WEBPACK_IMPORTED_MODULE_0__.NoBlending);

		//Render
		renderer.setRenderTarget(pickState.renderTarget);
		gl.clearColor(0, 0, 0, 0);
		renderer.clearTarget(pickState.renderTarget, true, true, true);

		var tmp = this.material;
		this.material = pickMaterial;

		pRenderer.renderOctree(this, nodes, camera, pickState.renderTarget);

		this.material = tmp;

		var clamp = (number, min, max) => Math.min(Math.max(min, number), max);

		var x = parseInt(clamp(pixelPos.x - (pickWindowSize - 1) / 2, 0, width));
		var y = parseInt(clamp(pixelPos.y - (pickWindowSize - 1) / 2, 0, height));
		var w = parseInt(Math.min(x + pickWindowSize, width) - x);
		var h = parseInt(Math.min(y + pickWindowSize, height) - y);

		var pixelCount = w * h;
		var buffer = new Uint8Array(4 * pixelCount);

		gl.readPixels(x, y, pickWindowSize, pickWindowSize, gl.RGBA, gl.UNSIGNED_BYTE, buffer);

		renderer.setRenderTarget(null);
		renderer.resetGLState();
		renderer.setScissorTest(false);
		gl.disable(gl.SCISSOR_TEST);

		var pixels = buffer;
		var ibuffer = new Uint32Array(buffer.buffer);

		//find closest hit inside pixelWindow boundaries
		var min = Number.MAX_VALUE;
		var hits = [];

		for(var u = 0; u < pickWindowSize; u++)
		{
			for(var v = 0; v < pickWindowSize; v++)
			{
				var offset = (u + v * pickWindowSize);
				var distance = Math.pow(u - (pickWindowSize - 1) / 2, 2) + Math.pow(v - (pickWindowSize - 1) / 2, 2);

				var pcIndex = pixels[4 * offset + 3];
				pixels[4 * offset + 3] = 0;
				var pIndex = ibuffer[offset];

				if(!(pcIndex === 0 && pIndex === 0) && (pcIndex !== undefined) && (pIndex !== undefined))
				{
					var hit = {
						pIndex: pIndex,
						pcIndex: pcIndex,
						distanceToCenter: distance
					};

					if(params.all)
					{
						hits.push(hit);
					}
					else
					{
						if(hits.length > 0)
						{
							if(distance < hits[0].distanceToCenter)
							{
								hits[0] = hit;
							}
						}
						else
						{
							hits.push(hit);
						}
					}
				}
			}
		}

		for(var hit of hits)
		{
			var point = {};

			if(!nodes[hit.pcIndex])
			{
				return null;
			}

			var node = nodes[hit.pcIndex];
			var pc = node.sceneNode;
			var geometry = node.geometryNode.geometry;

			for(var attributeName in geometry.attributes)
			{
				var attribute = geometry.attributes[attributeName];

				if(attributeName === "position")
				{
					var x = attribute.array[3 * hit.pIndex + 0];
					var y = attribute.array[3 * hit.pIndex + 1];
					var z = attribute.array[3 * hit.pIndex + 2];

					var position = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(x, y, z);
					position.applyMatrix4(pc.matrixWorld);

					point[attributeName] = position;
				}

				/*
				else if(attributeName === "indices")
				{

				}
				else
				{
					//if (values.itemSize === 1) {
					//	point[attribute.name] = values.array[hit.pIndex];
					//} else {
					//	var value = [];
					//	for (var j = 0; j < values.itemSize; j++) {
					//		value.push(values.array[values.itemSize * hit.pIndex + j]);
					//	}
					//	point[attribute.name] = value;
					//}
				}
				*/

			}

			hit.point = point;
		}

		performance.mark("pick-end");
		performance.measure("pick", "pick-start", "pick-end");

		if(params.all)
		{
			return hits.map(hit => hit.point);
		}
		else
		{
			if(hits.length === 0)
			{
				return null;
			}
			else
			{
				return hits[0].point;
				//var sorted = hits.sort((a, b) => a.distanceToCenter - b.distanceToCenter);
				//return sorted[0].point;
			}
		}

	};

	*getFittedBoxGen(boxNode)
	{
		var shrinkedLocalBounds = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();
		var worldToBox = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().getInverse(boxNode.matrixWorld);

		for(var node of this.visibleNodes)
		{
			if(!node.sceneNode)
			{
				continue;
			}

			var buffer = node.geometryNode.buffer;

			var posOffset = buffer.offset("position");
			var stride = buffer.stride;
			var view = new DataView(buffer.data);

			var objectToBox = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().multiplyMatrices(worldToBox, node.sceneNode.matrixWorld);

			var pos = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4();
			for(var i = 0; i < buffer.numElements; i++)
			{
				var x = view.getFloat32(i * stride + posOffset + 0, true);
				var y = view.getFloat32(i * stride + posOffset + 4, true);
				var z = view.getFloat32(i * stride + posOffset + 8, true);

				pos.set(x, y, z, 1);
				pos.applyMatrix4(objectToBox);

				if(-0.5 < pos.x && pos.x < 0.5)
				{
					if(-0.5 < pos.y && pos.y < 0.5)
					{
						if(-0.5 < pos.z && pos.z < 0.5)
						{
							shrinkedLocalBounds.expandByPoint(pos);
						}
					}
				}
			}

			yield;
		}


		var fittedPosition = shrinkedLocalBounds.getCenter(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).applyMatrix4(boxNode.matrixWorld);

		var fitted = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();
		fitted.position.copy(fittedPosition);
		fitted.scale.copy(boxNode.scale);
		fitted.rotation.copy(boxNode.rotation);

		var ds = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().subVectors(shrinkedLocalBounds.max, shrinkedLocalBounds.min);
		fitted.scale.multiply(ds);

		yield fitted;
	}

	getFittedBox(boxNode, maxLevel = Infinity)
	{
		var shrinkedLocalBounds = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();
		var worldToBox = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().getInverse(boxNode.matrixWorld);

		for(var node of this.visibleNodes)
		{
			if(!node.sceneNode || node.getLevel() > maxLevel)
			{
				continue;
			}

			var buffer = node.geometryNode.buffer;

			var posOffset = buffer.offset("position");
			var stride = buffer.stride;
			var view = new DataView(buffer.data);

			var objectToBox = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().multiplyMatrices(worldToBox, node.sceneNode.matrixWorld);

			var pos = new three__WEBPACK_IMPORTED_MODULE_0__.Vector4();
			for(var i = 0; i < buffer.numElements; i++)
			{
				var x = view.getFloat32(i * stride + posOffset + 0, true);
				var y = view.getFloat32(i * stride + posOffset + 4, true);
				var z = view.getFloat32(i * stride + posOffset + 8, true);

				pos.set(x, y, z, 1);
				pos.applyMatrix4(objectToBox);

				if(-0.5 < pos.x && pos.x < 0.5)
				{
					if(-0.5 < pos.y && pos.y < 0.5)
					{
						if(-0.5 < pos.z && pos.z < 0.5)
						{
							shrinkedLocalBounds.expandByPoint(pos);
						}
					}
				}
			}
		}

		var fittedPosition = shrinkedLocalBounds.getCenter(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).applyMatrix4(boxNode.matrixWorld);

		var fitted = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();
		fitted.position.copy(fittedPosition);
		fitted.scale.copy(boxNode.scale);
		fitted.rotation.copy(boxNode.rotation);

		var ds = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().subVectors(shrinkedLocalBounds.max, shrinkedLocalBounds.min);
		fitted.scale.multiply(ds);

		return fitted;
	}

	get progress()
	{
		return this.visibleNodes.length / this.visibleGeometry.length;
	}

	find(name)
	{
		var node = null;
		for(var char of name)
		{
			if(char === "r")
			{
				node = this.root;
			}
			else
			{
				node = node.children[char];
			}
		}

		return node;
	}
};




/***/ }),

/***/ "./source/pointcloud/PointCloudTree.js":
/*!*********************************************!*\
  !*** ./source/pointcloud/PointCloudTree.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointCloudTree": () => (/* binding */ PointCloudTree),
/* harmony export */   "PointCloudTreeNode": () => (/* binding */ PointCloudTreeNode)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DEM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DEM.js */ "./source/pointcloud/DEM.js");






class PointCloudTreeNode
{
	constructor()
	{
		this.needsTransformUpdate = true;
	}

	getChildren(){}

	getBoundingBox(){}

	isLoaded(){}

	isGeometryNode(){}

	isTreeNode(){}

	getLevel(){}

	getBoundingSphere(){}
};

class PointCloudTree extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D
{
	constructor()
	{
		super();

		this.dem = new _DEM_js__WEBPACK_IMPORTED_MODULE_1__.DEM(this);
	}

	initialized()
	{
		return this.root !== null;
	}
};




/***/ }),

/***/ "./source/pointcloud/geometries/PointCloudArena4DGeometry.js":
/*!*******************************************************************!*\
  !*** ./source/pointcloud/geometries/PointCloudArena4DGeometry.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointCloudArena4DGeometry": () => (/* binding */ PointCloudArena4DGeometry),
/* harmony export */   "PointCloudArena4DGeometryNode": () => (/* binding */ PointCloudArena4DGeometryNode)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PointAttributes.js */ "./source/PointAttributes.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Global.js */ "./source/Global.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../XHRFactory.js */ "./source/XHRFactory.js");








class PointCloudArena4DGeometryNode
{
	constructor()
	{
		this.left = null;
		this.right = null;
		this.boundingBox = null;
		this.number = null;
		this.pcoGeometry = null;
		this.loaded = false;
		this.numPoints = 0;
		this.level = 0;
		this.children = [];
		this.oneTimeDisposeHandlers = [];
	}

	isGeometryNode()
	{
		return true;
	}

	isTreeNode()
	{
		return false;
	}

	isLoaded()
	{
		return this.loaded;
	}

	getBoundingSphere()
	{
		return this.boundingSphere;
	}

	getBoundingBox()
	{
		return this.boundingBox;
	}

	getChildren()
	{
		var children = [];

		if(this.left)
		{
			children.push(this.left);
		}

		if(this.right)
		{
			children.push(this.right);
		}

		return children;
	}

	getLevel()
	{
		return this.level;
	}

	load()
	{
		if(this.loaded || this.loading)
		{
			return;
		}

		if(_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading >= _Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.maxNodesLoading)
		{
			return;
		}

		this.loading = true;

		_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading++;

		var self = this;
		var url = this.pcoGeometry.url + "?node=" + this.number;
		
		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_3__.XHRFactory.createXMLHttpRequest();
		xhr.overrideMimeType("text/plain");
		xhr.open("GET", url, true);
		xhr.responseType = "arraybuffer";
		xhr.onload = function()
		{
			try
			{
				var buffer = xhr.response;
				var sourceView = new DataView(buffer);
				var numPoints = buffer.byteLength / 17;
				var bytesPerPoint = 28;

				var data = new ArrayBuffer(numPoints * bytesPerPoint);
				var targetView = new DataView(data);

				var attributes = [
					_PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttribute.POSITION_CARTESIAN,
					_PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttribute.RGBA_PACKED,
					_PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttribute.INTENSITY,
					_PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttribute.CLASSIFICATION,
				];

				var position = new Float32Array(numPoints * 3);
				var color = new Uint8Array(numPoints * 4);
				var intensities = new Float32Array(numPoints);
				var classifications = new Uint8Array(numPoints);
				var indices = new ArrayBuffer(numPoints * 4);
				var u32Indices = new Uint32Array(indices);

				var tightBoundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();

				for(var i = 0; i < numPoints; i++)
				{
					var x = sourceView.getFloat32(i * 17 + 0, true) + self.boundingBox.min.x;
					var y = sourceView.getFloat32(i * 17 + 4, true) + self.boundingBox.min.y;
					var z = sourceView.getFloat32(i * 17 + 8, true) + self.boundingBox.min.z;

					var r = sourceView.getUint8(i * 17 + 12, true);
					var g = sourceView.getUint8(i * 17 + 13, true);
					var b = sourceView.getUint8(i * 17 + 14, true);

					var intensity = sourceView.getUint8(i * 17 + 15, true);

					var classification = sourceView.getUint8(i * 17 + 16, true);

					tightBoundingBox.expandByPoint(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(x, y, z));

					position[i * 3 + 0] = x;
					position[i * 3 + 1] = y;
					position[i * 3 + 2] = z;

					color[i * 4 + 0] = r;
					color[i * 4 + 1] = g;
					color[i * 4 + 2] = b;
					color[i * 4 + 3] = 255;

					intensities[i] = intensity;
					classifications[i] = classification;

					u32Indices[i] = i;
				}

				var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
				geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(position, 3));
				geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(color, 4, true));
				geometry.setAttribute("intensity", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(intensities, 1));
				geometry.setAttribute("classification", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(classifications, 1));
				{
					var bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Uint8Array(indices), 4, true);
					geometry.setAttribute("indices", bufferAttribute);
				}

				self.geometry = geometry;
				self.numPoints = numPoints;
				self.loaded = true;
				self.loading = false;
				_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading--;
			}
			catch(e)
			{
				console.error("Potree: Exception thrown parsing points.", e);
				_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading--;
			}

		};
		xhr.onerror = function()
		{
			_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading--;
			console.log("Potree: Failed to load file, " + xhr.status + ", file: " + url);
		};
		xhr.send(null);
	}

	dispose()
	{
		if(this.geometry && this.parent != null)
		{
			this.geometry.dispose();
			this.geometry = null;
			this.loaded = false;

			//this.dispatchEvent( { type: "dispose" } );
			for(var i = 0; i < this.oneTimeDisposeHandlers.length; i++)
			{
				var handler = this.oneTimeDisposeHandlers[i];
				handler();
			}
			this.oneTimeDisposeHandlers = [];
		}
	}

	getNumPoints()
	{
		return this.numPoints;
	}
};

class PointCloudArena4DGeometry extends three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher
{
	constructor()
	{
		super();

		this.numPoints = 0;
		this.version = 0;
		this.boundingBox = null;
		this.numNodes = 0;
		this.name = null;
		this.provider = null;
		this.url = null;
		this.root = null;
		this.levels = 0;
		this._spacing = null;
		this.pointAttributes = new _PointAttributes_js__WEBPACK_IMPORTED_MODULE_1__.PointAttributes([
			"POSITION_CARTESIAN",
			"COLOR_PACKED"
		]);
	}

	static load(url, callback)
	{
		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_3__.XHRFactory.createXMLHttpRequest();
		xhr.overrideMimeType("text/plain");
		xhr.open("GET", url + "?info", true);

		xhr.onreadystatechange = function()
		{
			try
			{
				if(xhr.readyState === 4 && xhr.status === 200)
				{
					var response = JSON.parse(xhr.responseText);

					var geometry = new PointCloudArena4DGeometry();
					geometry.url = url;
					geometry.name = response.Name;
					geometry.provider = response.Provider;
					geometry.numNodes = response.Nodes;
					geometry.numPoints = response.Points;
					geometry.version = response.Version;
					geometry.boundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3(
						new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(response.BoundingBox.slice(0, 3)),
						new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(response.BoundingBox.slice(3, 6))
					);
					if(response.Spacing)
					{
						geometry.spacing = response.Spacing;
					}

					var offset = geometry.boundingBox.min.clone().multiplyScalar(-1);

					geometry.boundingBox.min.add(offset);
					geometry.boundingBox.max.add(offset);
					geometry.offset = offset;

					var center = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
					geometry.boundingBox.getCenter(center);
					var radius = geometry.boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).length() / 2;
					geometry.boundingSphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere(center, radius);

					geometry.loadHierarchy();

					callback(geometry);
				}
				else if(xhr.readyState === 4)
				{
					callback(null);
				}
			}
			catch(e)
			{
				console.error(e.message);
				callback(null);
			}
		};

		xhr.send(null);
	};

	loadHierarchy()
	{
		var url = this.url + "?tree";
		
		var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_3__.XHRFactory.createXMLHttpRequest();
		xhr.overrideMimeType("text/plain");
		xhr.open("GET", url, true);
		xhr.responseType = "arraybuffer";

		xhr.onreadystatechange = () =>
		{
			if(!(xhr.readyState === 4 && xhr.status === 200))
			{
				return;
			}

			var buffer = xhr.response;
			var numNodes = buffer.byteLength / 3;
			var view = new DataView(buffer);
			var stack = [];
			var root = null;

			var levels = 0;

			//TODO Debug: var start = new Date().getTime();
			//read hierarchy
			for(var i = 0; i < numNodes; i++)
			{
				var mask = view.getUint8(i * 3 + 0, true);

				var hasLeft = (mask & 1) > 0;
				var hasRight = (mask & 2) > 0;
				var splitX = (mask & 4) > 0;
				var splitY = (mask & 8) > 0;
				var splitZ = (mask & 16) > 0;
				var split = null;
				if(splitX)
				{
					split = "X";
				}
				else if(splitY)
				{
					split = "Y";
				}
				if(splitZ)
				{
					split = "Z";
				}

				var node = new PointCloudArena4DGeometryNode();
				node.hasLeft = hasLeft;
				node.hasRight = hasRight;
				node.split = split;
				node.isLeaf = !hasLeft && !hasRight;
				node.number = i;
				node.left = null;
				node.right = null;
				node.pcoGeometry = this;
				node.level = stack.length;
				levels = Math.max(levels, node.level);

				

				if(stack.length > 0)
				{
					var parent = stack[stack.length - 1];
					node.boundingBox = parent.boundingBox.clone();
					var parentBBSize = parent.boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());

					if(parent.hasLeft && !parent.left)
					{
						parent.left = node;
						parent.children.push(node);

						if(parent.split === "X")
						{
							node.boundingBox.max.x = node.boundingBox.min.x + parentBBSize.x / 2;
						}
						else if(parent.split === "Y")
						{
							node.boundingBox.max.y = node.boundingBox.min.y + parentBBSize.y / 2;
						}
						else if(parent.split === "Z")
						{
							node.boundingBox.max.z = node.boundingBox.min.z + parentBBSize.z / 2;
						}

						
						var center = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
						node.boundingBox.getCenter(center);
						var radius = node.boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).length() / 2;
						node.boundingSphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere(center, radius);
					}
					else
					{
						parent.right = node;
						parent.children.push(node);

						if(parent.split === "X")
						{
							node.boundingBox.min.x = node.boundingBox.min.x + parentBBSize.x / 2;
						}
						else if(parent.split === "Y")
						{
							node.boundingBox.min.y = node.boundingBox.min.y + parentBBSize.y / 2;
						}
						else if(parent.split === "Z")
						{
							node.boundingBox.min.z = node.boundingBox.min.z + parentBBSize.z / 2;
						}

						var center = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
						node.boundingBox.getCenter(center);
						var radius = node.boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).length() / 2;
						node.boundingSphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere(center, radius);
					}
				}
				else
				{
					root = node;
					root.boundingBox = this.boundingBox.clone();

					var center = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
					root.boundingBox.getCenter(center);
					var radius = root.boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).length() / 2;
					root.boundingSphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere(center, radius);
				}

				var bbSize = node.boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3());
				node.spacing = ((bbSize.x + bbSize.y + bbSize.z) / 3) / 75;
				node.estimatedSpacing = node.spacing;

				stack.push(node);

				if(node.isLeaf)
				{
					var done = false;
					while(!done && stack.length > 0)
					{
						stack.pop();

						var top = stack[stack.length - 1];

						done = stack.length > 0 && top.hasRight && top.right == null;
					}
				}
			}

			this.root = root;
			this.levels = levels;

			this.dispatchEvent(
			{
				type: "hierarchy_loaded"
			});
		};

		xhr.send(null);
	};

	get spacing()
	{
		if(this._spacing)
		{
			return this._spacing;
		}
		else if(this.root)
		{
			return this.root.spacing;
		}
	}

	set spacing(value)
	{
		this._spacing = value;
	}
};




/***/ }),

/***/ "./source/pointcloud/geometries/PointCloudEptGeometry.js":
/*!***************************************************************!*\
  !*** ./source/pointcloud/geometries/PointCloudEptGeometry.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EptKey": () => (/* binding */ EptKey),
/* harmony export */   "PointCloudEptGeometry": () => (/* binding */ PointCloudEptGeometry),
/* harmony export */   "PointCloudEptGeometryNode": () => (/* binding */ PointCloudEptGeometryNode)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loaders_ept_EptBinaryLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../loaders/ept/EptBinaryLoader */ "./source/loaders/ept/EptBinaryLoader.js");
/* harmony import */ var _loaders_ept_EptLaszipLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../loaders/ept/EptLaszipLoader */ "./source/loaders/ept/EptLaszipLoader.js");
/* harmony import */ var _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/VersionUtils.js */ "./source/utils/VersionUtils.js");
/* harmony import */ var _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PointCloudTree.js */ "./source/pointcloud/PointCloudTree.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Global.js */ "./source/Global.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../XHRFactory.js */ "./source/XHRFactory.js");










class Utils
{
	static toVector3(v, offset)
	{
		return new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(v, offset || 0);
	}

	static toBox3(b)
	{
		return new three__WEBPACK_IMPORTED_MODULE_0__.Box3(Utils.toVector3(b), Utils.toVector3(b, 3));
	};

	static findDim(schema, name)
	{
		var dim = schema.find((dim) => dim.name == name);
		if(!dim) throw new Error("Failed to find " + name + " in schema");
		return dim;
	}

	static sphereFrom(b)
	{
		return b.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere());
	}
};

class PointCloudEptGeometry
{
	constructor(url, info)
	{
		let version = info.version;
		let schema = info.schema;
		let bounds = info.bounds;
		let boundsConforming = info.boundsConforming;

		let xyz = [
			Utils.findDim(schema, "X"),
			Utils.findDim(schema, "Y"),
			Utils.findDim(schema, "Z")
		];
		let scale = xyz.map((d) => d.scale || 1);
		let offset = xyz.map((d) => d.offset || 0);

		this.eptScale = Utils.toVector3(scale);
		this.eptOffset = Utils.toVector3(offset);

		this.url = url;
		this.info = info;
		this.type = "ept";

		this.schema = schema;
		this.span = info.span || info.ticks;
		this.boundingBox = Utils.toBox3(bounds);
		this.tightBoundingBox = Utils.toBox3(boundsConforming);
		this.offset = Utils.toVector3([0, 0, 0]);
		this.boundingSphere = Utils.sphereFrom(this.boundingBox);
		this.tightBoundingSphere = Utils.sphereFrom(this.tightBoundingBox);
		this.version = new _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_3__.VersionUtils("1.6");

		this.projection = null;
		this.fallbackProjection = null;

		if(info.srs && info.srs.horizontal)
		{
			this.projection = info.srs.authority + ":" + info.srs.horizontal;
		}

		if(info.srs.wkt)
		{
			if(!this.projection) this.projection = info.srs.wkt;
			else this.fallbackProjection = info.srs.wkt;
		}

		this.pointAttributes = "LAZ";
		this.spacing =
			(this.boundingBox.max.x - this.boundingBox.min.x) / this.span;

		let hierarchyType = info.hierarchyType || "json";

		let dataType = info.dataType || "laszip";
		this.loader = dataType == "binary" ? new _loaders_ept_EptBinaryLoader__WEBPACK_IMPORTED_MODULE_1__.EptBinaryLoader() : new _loaders_ept_EptLaszipLoader__WEBPACK_IMPORTED_MODULE_2__.EptLaszipLoader();
	}
};

class EptKey
{
	constructor(ept, b, d, x, y, z)
	{
		this.ept = ept;
		this.b = b;
		this.d = d;
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
	}

	name()
	{
		return this.d + "-" + this.x + "-" + this.y + "-" + this.z;
	}

	step(a, b, c)
	{
		let min = this.b.min.clone();
		let max = this.b.max.clone();
		let dst = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().subVectors(max, min);

		if(a) min.x += dst.x / 2;
		else max.x -= dst.x / 2;

		if(b) min.y += dst.y / 2;
		else max.y -= dst.y / 2;

		if(c) min.z += dst.z / 2;
		else max.z -= dst.z / 2;

		return new EptKey(
				this.ept,
				new three__WEBPACK_IMPORTED_MODULE_0__.Box3(min, max),
				this.d + 1,
				this.x * 2 + a,
				this.y * 2 + b,
				this.z * 2 + c);
	}

	children()
	{
		var result = [];
		for (var a = 0; a < 2; ++a)
		{
			for (var b = 0; b < 2; ++b)
			{
				for (var c = 0; c < 2; ++c)
				{
					var add = this.step(a, b, c).name();
					if(!result.includes(add)) result = result.concat(add);
				}
			}
		}
		return result;
	}
}

class PointCloudEptGeometryNode extends _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_4__.PointCloudTreeNode
{
	constructor(ept, b, d, x, y, z) {
		super();

		this.ept = ept;
		this.key = new EptKey(
				this.ept,
				b || this.ept.boundingBox,
				d || 0,
				x,
				y,
				z);

		this.id = PointCloudEptGeometryNode.IDCount++;
		this.geometry = null;
		this.boundingBox = this.key.b;
		this.tightBoundingBox = this.boundingBox;
		this.spacing = this.ept.spacing / Math.pow(2, this.key.d);
		this.boundingSphere = Utils.sphereFrom(this.boundingBox);

		// These are set during hierarchy loading.
		this.hasChildren = false;
		this.children = { };
		this.numPoints = -1;

		this.level = this.key.d;
		this.loaded = false;
		this.loading = false;
		this.oneTimeDisposeHandlers = [];

		let k = this.key;
		this.name = this.toPotreeName(k.d, k.x, k.y, k.z);
		this.index = parseInt(this.name.charAt(this.name.length - 1));
	}

	isGeometryNode(){return true;}
	getLevel(){return this.level;}
	isTreeNode(){return false;}
	isLoaded(){return this.loaded;}
	getBoundingSphere(){return this.boundingSphere;}
	getBoundingBox(){return this.boundingBox;}
	url(){return this.ept.url + "ept-data/" + this.filename();}
	getNumPoints(){return this.numPoints;}
	filename(){return this.key.name();}

	getChildren()
	{
		let children = [];

		for (let i = 0; i < 8; i++) {
			if(this.children[i]) {
				children.push(this.children[i]);
			}
		}

		return children;
	}

	addChild(child)
	{
		this.children[child.index] = child;
		child.parent = this;
	}

	load()
	{
		if(this.loaded || this.loading || _Global_js__WEBPACK_IMPORTED_MODULE_5__.Global.numNodesLoading >= _Global_js__WEBPACK_IMPORTED_MODULE_5__.Global.maxNodesLoading)
		{
			return;
		}

		this.loading = true;
		_Global_js__WEBPACK_IMPORTED_MODULE_5__.Global.numNodesLoading++;

		if(this.numPoints === -1)
		{
			this.loadHierarchy();
		}
		this.loadPoints();
	}

	loadPoints()
	{
		this.ept.loader.load(this);
	}

	async loadHierarchy()
	{
		let nodes = { };
		nodes[this.filename()] = this;
		this.hasChildren = false;

		let eptHierarchyFile = `${this.ept.url}ept-hierarchy/${this.filename()}.json`;

		let response = await _XHRFactory_js__WEBPACK_IMPORTED_MODULE_6__.XHRFactory.fetch(eptHierarchyFile);
		let hier = await response.json();

		// Since we want to traverse top-down, and 10 comes
		// lexicographically before 9 (for example), do a deep sort.
		var keys = Object.keys(hier).sort((a, b) => {
			let [da, xa, ya, za] = a.split("-").map((n) => parseInt(n, 10));
			let [db, xb, yb, zb] = b.split("-").map((n) => parseInt(n, 10));
			if(da < db) return -1; if(da > db) return 1;
			if(xa < xb) return -1; if(xa > xb) return 1;
			if(ya < yb) return -1; if(ya > yb) return 1;
			if(za < zb) return -1; if(za > zb) return 1;
			return 0;
		});

		keys.forEach((v) => {
			let [d, x, y, z] = v.split("-").map((n) => parseInt(n, 10));
			let a = x & 1, b = y & 1, c = z & 1;
			let parentName =
				(d - 1) + "-" + (x >> 1) + "-" + (y >> 1) + "-" + (z >> 1);

			let parentNode = nodes[parentName];
			if(!parentNode) return;
			parentNode.hasChildren = true;

			let key = parentNode.key.step(a, b, c);

			let node = new PointCloudEptGeometryNode(
					this.ept,
					key.b,
					key.d,
					key.x,
					key.y,
					key.z);

			node.level = d;
			node.numPoints = hier[v];

			parentNode.addChild(node);
			nodes[key.name()] = node;
		});
	}

	doneLoading(bufferGeometry, tightBoundingBox, np, mean)
	{
		bufferGeometry.boundingBox = this.boundingBox;
		this.geometry = bufferGeometry;
		this.tightBoundingBox = tightBoundingBox;
		this.numPoints = np;
		this.mean = mean;
		this.loaded = true;
		this.loading = false;
		_Global_js__WEBPACK_IMPORTED_MODULE_5__.Global.numNodesLoading--;
	}

	toPotreeName(d, x, y, z)
	{
		var name = "r";

		for (var i = 0; i < d; ++i)
		{
			var shift = d - i - 1;
			var mask = 1 << shift;
			var step = 0;

			if(x & mask) step += 4;
			if(y & mask) step += 2;
			if(z & mask) step += 1;

			name += step;
		}

		return name;
	}

	dispose()
	{
		if(this.geometry && this.parent != null)
		{
			this.geometry.dispose();
			this.geometry = null;
			this.loaded = false;

			// this.dispatchEvent( { type: "dispose" } );
			for (let i = 0; i < this.oneTimeDisposeHandlers.length; i++)
			{
				let handler = this.oneTimeDisposeHandlers[i];
				handler();
			}
			
			this.oneTimeDisposeHandlers = [];
		}
	}
}

PointCloudEptGeometryNode.IDCount = 0;




/***/ }),

/***/ "./source/pointcloud/geometries/PointCloudGreyhoundGeometry.js":
/*!*********************************************************************!*\
  !*** ./source/pointcloud/geometries/PointCloudGreyhoundGeometry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointCloudGreyhoundGeometry": () => (/* binding */ PointCloudGreyhoundGeometry),
/* harmony export */   "PointCloudGreyhoundGeometryNode": () => (/* binding */ PointCloudGreyhoundGeometryNode)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loaders_GreyhoundLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../loaders/GreyhoundLoader.js */ "./source/loaders/GreyhoundLoader.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Global.js */ "./source/Global.js");
/* harmony import */ var _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PointCloudTree.js */ "./source/pointcloud/PointCloudTree.js");








class PointCloudGreyhoundGeometry
{
	constructor()
	{
		this.spacing = 0;
		this.boundingBox = null;
		this.root = null;
		this.nodes = null;
		this.pointAttributes = {};
		this.hierarchyStepSize = -1;
		this.loader = null;
		this.schema = null;

		this.baseDepth = null;
		this.offset = null;
		this.projection = null;

		this.boundingSphere = null;

		// the serverURL will contain the base URL of the greyhound server. f.e. http://dev.greyhound.io/resource/autzen/
		this.serverURL = null;
		this.normalize = {color: false, intensity: false};
	}
}

function PointCloudGreyhoundGeometryNode(name, pcoGeometry, boundingBox, scale, offset)
{
	this.id = PointCloudGreyhoundGeometryNode.IDCount++;
	this.name = name;
	this.index = parseInt(name.charAt(name.length - 1));
	this.pcoGeometry = pcoGeometry;
	this.geometry = null;
	this.boundingBox = boundingBox;
	this.boundingSphere = boundingBox.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere());
	this.scale = scale;
	this.offset = offset;
	this.children = {};
	this.numPoints = 0;
	this.level = null;
	this.loaded = false;
	this.oneTimeDisposeHandlers = [];
	this.baseLoaded = false;

	var center = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

	var bounds = this.boundingBox.clone();
	bounds.min.sub(this.pcoGeometry.boundingBox.getCenter(center));
	bounds.max.sub(this.pcoGeometry.boundingBox.getCenter(center));

	if(this.scale)
	{
		bounds.min.multiplyScalar(1 / this.scale);
		bounds.max.multiplyScalar(1 / this.scale);
	}

	//This represents the bounds for this node in the reference frame of the
	//global bounds from `info`, centered around the origin, and then scaled
	//by our selected scale.
	this.greyhoundBounds = bounds;

	//This represents the offset between the coordinate system described above
	//and our pcoGeometry bounds.
	this.greyhoundOffset = this.pcoGeometry.offset.clone().add(this.pcoGeometry.boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()).multiplyScalar(0.5));
};

PointCloudGreyhoundGeometryNode.IDCount = 0;

PointCloudGreyhoundGeometryNode.prototype = Object.create(_PointCloudTree_js__WEBPACK_IMPORTED_MODULE_3__.PointCloudTreeNode.prototype);

PointCloudGreyhoundGeometryNode.prototype.isGeometryNode = function()
{
	return true;
};

PointCloudGreyhoundGeometryNode.prototype.isTreeNode = function()
{
	return false;
};

PointCloudGreyhoundGeometryNode.prototype.isLoaded = function()
{
	return this.loaded;
};

PointCloudGreyhoundGeometryNode.prototype.getBoundingSphere = function()
{
	return this.boundingSphere;
};

PointCloudGreyhoundGeometryNode.prototype.getBoundingBox = function()
{
	return this.boundingBox;
};

PointCloudGreyhoundGeometryNode.prototype.getLevel = function()
{
	return this.level;
};

PointCloudGreyhoundGeometryNode.prototype.getChildren = function()
{
	var children = [];

	for(var i = 0; i < 8; ++i)
	{
		if(this.children[i])
		{
			children.push(this.children[i]);
		}
	}

	return children;
};

PointCloudGreyhoundGeometryNode.prototype.getURL = function()
{
	var schema = this.pcoGeometry.schema;
	var bounds = this.greyhoundBounds;

	var boundsString = bounds.min.x + "," + bounds.min.y + "," + bounds.min.z + "," + bounds.max.x + "," + bounds.max.y + "," + bounds.max.z;

	var url = "" + this.pcoGeometry.serverURL +
		"read?depthBegin=" +
		(this.baseLoaded ? (this.level + this.pcoGeometry.baseDepth) : 0) +
		"&depthEnd=" + (this.level + this.pcoGeometry.baseDepth + 1) +
		"&bounds=[" + boundsString + "]" +
		"&schema=" + JSON.stringify(schema) +
		"&compress=true";

	if(this.scale)
	{
		url += "&scale=" + this.scale;
	}

	if(this.greyhoundOffset)
	{
		var offset = this.greyhoundOffset;
		url += "&offset=[" + offset.x + "," + offset.y + "," + offset.z + "]";
	}

	if(!this.baseLoaded) this.baseLoaded = true;

	return url;
};

PointCloudGreyhoundGeometryNode.prototype.addChild = function(child)
{
	this.children[child.index] = child;
	child.parent = this;
};

PointCloudGreyhoundGeometryNode.prototype.load = function()
{
	if(this.loading === true || this.loaded === true || _Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading >= _Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.maxNodesLoading)
	{
		return;
	}

	this.loading = true;
	_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading++;

	if(this.level % this.pcoGeometry.hierarchyStepSize === 0 && this.hasChildren)
	{
		this.loadHierarchyThenPoints();
	}
	else
	{
		this.loadPoints();
	}
};

PointCloudGreyhoundGeometryNode.prototype.loadPoints = function()
{
	this.pcoGeometry.loader.load(this);
};

PointCloudGreyhoundGeometryNode.prototype.loadHierarchyThenPoints = function()
{
	//From Greyhound (Cartesian) ordering for the octree to Potree-default
	var transform = [0, 2, 1, 3, 4, 6, 5, 7];

	var makeBitMask = function(node)
	{
		var mask = 0;
		Object.keys(node).forEach(function(key)
		{
			if(key === "swd") mask += 1 << transform[0];
			else if(key === "nwd") mask += 1 << transform[1];
			else if(key === "swu") mask += 1 << transform[2];
			else if(key === "nwu") mask += 1 << transform[3];
			else if(key === "sed") mask += 1 << transform[4];
			else if(key === "ned") mask += 1 << transform[5];
			else if(key === "seu") mask += 1 << transform[6];
			else if(key === "neu") mask += 1 << transform[7];
		});
		return mask;
	};

	var parseChildrenCounts = function(base, parentName, stack)
	{
		var keys = Object.keys(base);
		var child;
		var childName;

		keys.forEach(function(key)
		{
			if(key === "n") return;
			switch(key)
			{
				case "swd":
					child = base.swd;
					childName = parentName + transform[0];
					break;
				case "nwd":
					child = base.nwd;
					childName = parentName + transform[1];
					break;
				case "swu":
					child = base.swu;
					childName = parentName + transform[2];
					break;
				case "nwu":
					child = base.nwu;
					childName = parentName + transform[3];
					break;
				case "sed":
					child = base.sed;
					childName = parentName + transform[4];
					break;
				case "ned":
					child = base.ned;
					childName = parentName + transform[5];
					break;
				case "seu":
					child = base.seu;
					childName = parentName + transform[6];
					break;
				case "neu":
					child = base.neu;
					childName = parentName + transform[7];
					break;
				default:
					break;
			}

			stack.push(
			{
				children: makeBitMask(child),
				numPoints: child.n,
				name: childName
			});

			parseChildrenCounts(child, childName, stack);
		});
	};

	//Load hierarchy.
	var callback = function(node, greyhoundHierarchy)
	{
		var decoded = [];
		node.numPoints = greyhoundHierarchy.n;
		parseChildrenCounts(greyhoundHierarchy, node.name, decoded);

		var nodes = {};
		nodes[node.name] = node;
		var pgg = node.pcoGeometry;

		for(var i = 0; i < decoded.length; i++)
		{
			var name = decoded[i].name;
			var numPoints = decoded[i].numPoints;
			var index = parseInt(name.charAt(name.length - 1));
			var parentName = name.substring(0, name.length - 1);
			var parentNode = nodes[parentName];
			var level = name.length - 1;
			var boundingBox = _loaders_GreyhoundLoader_js__WEBPACK_IMPORTED_MODULE_1__.GreyhoundLoader.createChildAABB(parentNode.boundingBox, index);

			var currentNode = new PointCloudGreyhoundGeometryNode(name, pgg, boundingBox, node.scale, node.offset);
			currentNode.level = level;
			currentNode.numPoints = numPoints;
			currentNode.hasChildren = decoded[i].children > 0;
			currentNode.spacing = pgg.spacing / Math.pow(2, level);

			parentNode.addChild(currentNode);
			nodes[name] = currentNode;
		}

		node.loadPoints();
	};

	if(this.level % this.pcoGeometry.hierarchyStepSize === 0)
	{
		var depthBegin = this.level + this.pcoGeometry.baseDepth;
		var depthEnd = depthBegin + this.pcoGeometry.hierarchyStepSize + 2;

		var bounds = this.greyhoundBounds;

		var boundsString = bounds.min.x + "," + bounds.min.y + "," + bounds.min.z + "," + bounds.max.x + "," + bounds.max.y + "," + bounds.max.z;

		var hurl = "" + this.pcoGeometry.serverURL +
			"hierarchy?bounds=[" + boundsString + "]" +
			"&depthBegin=" + depthBegin +
			"&depthEnd=" + depthEnd;

		if(this.scale)
		{
			hurl += "&scale=" + this.scale;
		}

		if(this.greyhoundOffset)
		{
			var offset = this.greyhoundOffset;
			hurl += "&offset=[" + offset.x + "," + offset.y + "," + offset.z + "]";
		}

		var self = this;
		var xhr = XHRFactory.createXMLHttpRequest();
		xhr.overrideMimeType("text/plain");
		xhr.open("GET", hurl, true);
		xhr.onload = function(event)
		{
			try
			{
				callback(self, JSON.parse(xhr.responseText) || {});
			}
			catch(e)
			{
				_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading--;
				console.error("Potree: Exception thrown parsing points.", e);
			}
		};
		xhr.onerror = function(event)
		{
			console.log("Potree: Failed to load file! HTTP status " + xhr.status + ", file:" + hurl, event);
		}
		xhr.send(null);
	}
};

PointCloudGreyhoundGeometryNode.prototype.getNumPoints = function()
{
	return this.numPoints;
};

PointCloudGreyhoundGeometryNode.prototype.dispose = function()
{
	if(this.geometry && this.parent != null)
	{
		this.geometry.dispose();
		this.geometry = null;
		this.loaded = false;

		for(var i = 0; i < this.oneTimeDisposeHandlers.length; i++)
		{
			var handler = this.oneTimeDisposeHandlers[i];
			handler();
		}
		
		this.oneTimeDisposeHandlers = [];
	}
};

Object.assign(PointCloudGreyhoundGeometryNode.prototype, three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher.prototype);



/***/ }),

/***/ "./source/pointcloud/geometries/PointCloudOctreeGeometry.js":
/*!******************************************************************!*\
  !*** ./source/pointcloud/geometries/PointCloudOctreeGeometry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointCloudOctreeGeometry": () => (/* binding */ PointCloudOctreeGeometry),
/* harmony export */   "PointCloudOctreeGeometryNode": () => (/* binding */ PointCloudOctreeGeometryNode)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loaders_POCLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../loaders/POCLoader.js */ "./source/loaders/POCLoader.js");
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Global.js */ "./source/Global.js");
/* harmony import */ var _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PointCloudTree.js */ "./source/pointcloud/PointCloudTree.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../XHRFactory.js */ "./source/XHRFactory.js");









class PointCloudOctreeGeometry
{
	constructor()
	{
		this.url = null;
		this.octreeDir = null;
		this.spacing = 0;
		this.boundingBox = null;
		this.root = null;
		this.nodes = null;
		this.pointAttributes = null;
		this.hierarchyStepSize = -1;
		this.loader = null;
	}
};

class PointCloudOctreeGeometryNode extends _PointCloudTree_js__WEBPACK_IMPORTED_MODULE_3__.PointCloudTreeNode
{
	constructor(name, pcoGeometry, boundingBox)
	{
		super();

		this.id = PointCloudOctreeGeometryNode.IDCount++;
		this.name = name;
		this.index = parseInt(name.charAt(name.length - 1));
		this.pcoGeometry = pcoGeometry;
		this.geometry = null;
		this.boundingBox = boundingBox;
		this.boundingSphere = boundingBox.getBoundingSphere(new three__WEBPACK_IMPORTED_MODULE_0__.Sphere());
		this.children = {};
		this.numPoints = 0;
		this.level = null;
		this.loaded = false;
		this.oneTimeDisposeHandlers = [];
	}

	isGeometryNode()
	{
		return true;
	}

	getLevel()
	{
		return this.level;
	}

	isTreeNode()
	{
		return false;
	}

	isLoaded()
	{
		return this.loaded;
	}

	getBoundingSphere()
	{
		return this.boundingSphere;
	}

	getBoundingBox()
	{
		return this.boundingBox;
	}

	getChildren()
	{
		var children = [];

		for(var i = 0; i < 8; i++)
		{
			if(this.children[i])
			{
				children.push(this.children[i]);
			}
		}

		return children;
	}

	getURL()
	{
		var url = "";
		var version = this.pcoGeometry.loader.version;

		if(version.equalOrHigher("1.5"))
		{
			url = this.pcoGeometry.octreeDir + "/" + this.getHierarchyPath() + "/" + this.name;
		}
		else if(version.equalOrHigher("1.4"))
		{
			url = this.pcoGeometry.octreeDir + "/" + this.name;
		}
		else if(version.upTo("1.3"))
		{
			url = this.pcoGeometry.octreeDir + "/" + this.name;
		}

		return url;
	}

	getHierarchyPath()
	{
		var path = "r/";
		var hierarchyStepSize = this.pcoGeometry.hierarchyStepSize;
		var indices = this.name.substr(1);

		var numParts = Math.floor(indices.length / hierarchyStepSize);
		for(var i = 0; i < numParts; i++)
		{
			path += indices.substr(i * hierarchyStepSize, hierarchyStepSize) + "/";
		}

		path = path.slice(0, -1);

		return path;
	}

	addChild(child)
	{
		this.children[child.index] = child;
		child.parent = this;
	}

	load()
	{
		if(this.loading === true || this.loaded === true || _Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading >= _Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.maxNodesLoading)
		{
			return;
		}

		this.loading = true;
		_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading++;

		try
		{
			if(this.pcoGeometry.loader.version.equalOrHigher("1.5"))
			{
				if((this.level % this.pcoGeometry.hierarchyStepSize) === 0 && this.hasChildren)
				{
					this.loadHierachyThenPoints();
				}
				else
				{
					this.loadPoints();
				}
			}
			else
			{
				this.loadPoints();
			}
		}
		catch(e)
		{
			_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading--;
			console.error("Potree: Exception thrown loading points file.", e);
		}

	}

	loadPoints()
	{
		this.pcoGeometry.loader.load(this);
	}

	loadHierachyThenPoints()
	{
		var node = this;

		var callback = function(node, hbuffer)
		{
			var view = new DataView(hbuffer);

			var stack = [];
			var children = view.getUint8(0);
			var numPoints = view.getUint32(1, true);
			node.numPoints = numPoints;
			stack.push({children: children, numPoints: numPoints, name: node.name});

			var decoded = [];
			var offset = 5;

			while(stack.length > 0)
			{
				var snode = stack.shift();
				var mask = 1;
				for(var i = 0; i < 8; i++)
				{
					if((snode.children & mask) !== 0)
					{
						var childName = snode.name + i;
						var childChildren = view.getUint8(offset);
						var childNumPoints = view.getUint32(offset + 1, true);

						stack.push({children: childChildren, numPoints: childNumPoints, name: childName});
						decoded.push({children: childChildren, numPoints: childNumPoints, name: childName});

						offset += 5;
					}

					mask = mask * 2;
				}

				if(offset === hbuffer.byteLength)
				{
					break;
				}
			}

			var nodes = {};
			nodes[node.name] = node;
			var pco = node.pcoGeometry;

			for(var i = 0; i < decoded.length; i++)
			{
				var name = decoded[i].name;
				var decodedNumPoints = decoded[i].numPoints;
				var index = parseInt(name.charAt(name.length - 1));
				var parentName = name.substring(0, name.length - 1);
				var parentNode = nodes[parentName];
				var level = name.length - 1;
				var boundingBox = _loaders_POCLoader_js__WEBPACK_IMPORTED_MODULE_1__.POCLoader.createChildAABB(parentNode.boundingBox, index);

				var currentNode = new PointCloudOctreeGeometryNode(name, pco, boundingBox);
				currentNode.level = level;
				currentNode.numPoints = decodedNumPoints;
				currentNode.hasChildren = decoded[i].children > 0;
				currentNode.spacing = pco.spacing / Math.pow(2, level);
				parentNode.addChild(currentNode);
				nodes[name] = currentNode;
			}

			node.loadPoints();
		};
		
		if((node.level % node.pcoGeometry.hierarchyStepSize) === 0)
		{
			var hurl = node.pcoGeometry.octreeDir + "/" + node.getHierarchyPath() + "/" + node.name + ".hrc";
			var xhr = _XHRFactory_js__WEBPACK_IMPORTED_MODULE_4__.XHRFactory.createXMLHttpRequest();
			xhr.open("GET", hurl, true);
			xhr.responseType = "arraybuffer";
			xhr.overrideMimeType("text/plain; charset=x-user-defined");
			xhr.onload = function(event)
			{
				try
				{
					callback(node, xhr.response);
				}
				catch(e)
				{
					_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading--;
					console.error("Potree: Exception thrown parsing points.", e);
				}
			};
			xhr.onerror = function(event)
			{
				_Global_js__WEBPACK_IMPORTED_MODULE_2__.Global.numNodesLoading--;
				console.error("Potree: Failed to load file.", xhr.status, hurl, event);
			}
			xhr.send(null);
		}
	}

	getNumPoints()
	{
		return this.numPoints;
	}

	dispose()
	{
		if(this.geometry && this.parent != null)
		{
			this.geometry.dispose();
			this.geometry = null;
			this.loaded = false;

			for(var i = 0; i < this.oneTimeDisposeHandlers.length; i++)
			{
				var handler = this.oneTimeDisposeHandlers[i];
				handler();
			}
			this.oneTimeDisposeHandlers = [];
		}
	}

}

PointCloudOctreeGeometryNode.IDCount = 0;

Object.assign(PointCloudOctreeGeometryNode.prototype, three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher.prototype);



/***/ }),

/***/ "./source/pointcloud/materials/PointCloudMaterial.js":
/*!***********************************************************!*\
  !*** ./source/pointcloud/materials/PointCloudMaterial.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointCloudMaterial": () => (/* binding */ PointCloudMaterial)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/HelperUtils.js */ "./source/utils/HelperUtils.js");
/* harmony import */ var _Gradients_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Gradients.js */ "./source/Gradients.js");
/* harmony import */ var _Shaders_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shaders.js */ "./source/Shaders.js");
/* harmony import */ var _Potree_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Potree.js */ "./source/Potree.js");









class PointCloudMaterial extends three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial
{
	constructor(parameters = {})
	{
		super();

		this.visibleNodesTexture = _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_1__.HelperUtils.generateDataTexture(2048, 1, new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffffff));
		this.visibleNodesTexture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__.NearestFilter;
		this.visibleNodesTexture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__.NearestFilter;

		var getValid = function(a, b)
		{
			return (a !== undefined) ? a : b;
		};

		var pointSize = getValid(parameters.size, 1.0);
		var minSize = getValid(parameters.minSize, 2.0);
		var maxSize = getValid(parameters.maxSize, 50.0);
		var treeType = getValid(parameters.treeType, _Potree_js__WEBPACK_IMPORTED_MODULE_4__.TreeType.OCTREE);

		this._pointSizeType = _Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointSizeType.FIXED;
		this._shape = _Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointShape.SQUARE;
		this._pointColorType = _Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.RGB;
		this._weighted = false;
		this._gradient = _Gradients_js__WEBPACK_IMPORTED_MODULE_2__.Gradients.SPECTRAL;
		this._treeType = treeType;
		this._defaultIntensityRangeChanged = false;
		this._defaultElevationRangeChanged = false;

		this.gradientTexture = PointCloudMaterial.generateGradientTexture(this._gradient);
		this.lights = false;
		this.fog = false;
		this.defines = new Map();

		this.attributes =
		{
			position: {type: 'fv', value: []},
			color: {type: 'fv', value: []},
			normal: {type: 'fv', value: []},
			intensity: {type: 'f', value: []},
			classification: {type: 'f', value: []},
			returnNumber: {type: 'f', value: []},
			numberOfReturns: {type: 'f', value: []},
			pointSourceID: {type: 'f', value: []},
			indices: {type: 'fv', value: []}
		};

		this.uniforms =
		{
			projectionMatrix: { value: new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4() },
			uViewInv: { value: new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4() },
			clipPlanes: { value: [] },
			level: {type: "f", value: 0.0},
			vnStart: {type: "f", value: 0.0},
			spacing: {type: "f", value: 1.0},
			fov: {type: "f", value: 1.0},
			uScreenWidth: {type: "f", value: 1.0},
			uScreenHeight: {type: "f", value: 1.0},
			uOctreeSpacing: {type: "f", value: 0.0 },
			near: {type: "f", value: 0.1},
			far: {type: "f", value: 1.0},
			uColor: {type: "c", value: new three__WEBPACK_IMPORTED_MODULE_0__.Color( 0xffffff )},
			uOpacity: {type: "f", value: 1.0},
			size: {type: "f", value: pointSize},
			minSize: {type: "f", value: minSize},
			maxSize: {type: "f", value: maxSize},
			octreeSize: {type: "f", value: 0},
			bbSize: {type: "fv", value: [0, 0, 0]},
			elevationRange: {type: "2fv", value: [0, 0]},
			visibleNodes: {type: "t", value: this.visibleNodesTexture},
			gradient: {type: "t", value: this.gradientTexture},
			classificationLUT: {type: "t", value: null },
			diffuse: {type: "fv", value: [1, 1, 1]},
			transition: {type: "f", value: 0.5},
			intensityRange: {type: "fv", value: [0, 65000]},
			intensityGamma: {type: "f", value: 1},
			intensityContrast: {type: "f", value: 0},
			intensityBrightness:{type: "f", value: 0},
			rgbGamma: {type: "f", value: 1},
			rgbBrightness: {type: "f", value: 0},
			uTransition: {type: "f", value: 0},
			wRGB: {type: "f", value: 1},
			wIntensity: {type: "f", value: 0},
			wElevation: {type: "f", value: 0},
			wClassification: {type: "f", value: 0},
			wReturnNumber: {type: "f", value: 0},
			wSourceID: {type: "f", value: 0},
			logDepthBufFC: {type: "f", value: 0},
			uPCIndex: { value: 0.0 }
		};

		this.classification = _Potree_js__WEBPACK_IMPORTED_MODULE_4__.Classification.DEFAULT;
		this.defaultAttributeValues.normal = [0, 0, 0];
		this.defaultAttributeValues.classification = [0, 0, 0];
		this.defaultAttributeValues.indices = [0, 0, 0, 0];

		this.defines = this.getDefines();
		this.vertexColors = three__WEBPACK_IMPORTED_MODULE_0__.VertexColors;

		this.vertexShader = _Shaders_js__WEBPACK_IMPORTED_MODULE_3__.Shaders.vertex;
		this.fragmentShader = _Shaders_js__WEBPACK_IMPORTED_MODULE_3__.Shaders.fragment;
	}

	setDefine(key, value)
	{
		if(value !== undefined && value !== null)
		{
			if(this.defines.get(key) !== value)
			{
				this.defines.set(key, value);
				this.updateMaterial();
			}
		}
		else
		{
			this.removeDefine(key);
		}
	}

	removeDefine(key)
	{
		this.defines.delete(key);
	}

	updateMaterial()
	{
		this.defines = this.getDefines();

		if(this.opacity === 1.0)
		{
			this.blending = three__WEBPACK_IMPORTED_MODULE_0__.NoBlending;
			this.transparent = false;
			this.depthTest = true;
			this.depthWrite = true;
			this.depthFunc = three__WEBPACK_IMPORTED_MODULE_0__.LessEqualDepth;
		}
		else
		{
			this.blending = three__WEBPACK_IMPORTED_MODULE_0__.AdditiveBlending;
			this.transparent = true;
			this.depthTest = false;
			this.depthWrite = true;
			this.depthFunc = three__WEBPACK_IMPORTED_MODULE_0__.AlwaysDepth;
		}

		if(this.weighted)
		{
			this.blending = three__WEBPACK_IMPORTED_MODULE_0__.AdditiveBlending;
			this.transparent = true;
			this.depthTest = true;
			this.depthWrite = false;
		}

		this.needsUpdate = true;
	}

	onBeforeCompile(shader, renderer)
	{
		if(renderer.capabilities.logarithmicDepthBuffer)
		{
			this.defines = { ...this.defines, USE_LOGDEPTHBUF: true, USE_LOGDEPTHBUF_EXT: true, EPSILON: 1e-6 };
		}
	}

	getDefines()
	{
		const pointSizeTypes = [];
		pointSizeTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointSizeType.FIXED] = { fixed_point_size: true };
		pointSizeTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointSizeType.ATTENUATED] = { attenuated_point_size: true };
		pointSizeTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointSizeType.ADAPTIVE] = { adaptive_point_size: true };

		const pointShapes = [];
		pointShapes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointShape.SQUARE] = { square_point_shape: true };
		pointShapes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointShape.CIRCLE] = { circle_point_shape: true };
		pointShapes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointShape.PARABOLOID] = { paraboloid_point_shape: true };

		const pointColorTypes = [];
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.RGB] = { color_type_rgb: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.COLOR] = { color_type_color: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.DEPTH] = { color_type_depth: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.COLOR] = { color_type_color: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.HEIGHT] = { color_type_height: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.INTENSITY] = { color_type_intensity: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.INTENSITY_GRADIENT] = { color_type_intensity_gradient: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.POINT_INDEX] = { color_type_point_index: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.CLASSIFICATION] = { color_type_classification: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.RETURN_NUMBER] = { color_type_return_number: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.SOURCE] = { color_type_source: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.NORMAL] = { color_type_normal: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.RGB] = { color_type_rgb: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.PHONG] = { color_type_phong: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.RGB_HEIGHT] = { color_type_rgb_height: true }
		pointColorTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.PointColorType.COMPOSITE] = { color_type_composite: true }

		const treeTypes = [];
		treeTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.TreeType.OCTREE] = { tree_type_octree: true };
		treeTypes[_Potree_js__WEBPACK_IMPORTED_MODULE_4__.TreeType.KDTREE] = { tree_type_kdtree: true };

		var defines = {
			...pointSizeTypes[this.pointSizeType], 
			...pointShapes[this.shape],
			...pointColorTypes[this._pointColorType],
			...treeTypes[this.treeType],
			...(this.weighted ? { weighted_splats: true } : {})
		};
		return defines;
	}

	get gradient()
	{
		return this._gradient;
	}

	set gradient(value)
	{
		if(this._gradient !== value)
		{
			this._gradient = value;
			this.gradientTexture = PointCloudMaterial.generateGradientTexture(this._gradient);
			this.uniforms.gradient.value = this.gradientTexture;
		}
	}

	get classification()
	{
		return this._classification;
	}

	set classification(value)
	{
		var copy = {};
		for(var key of Object.keys(value))
		{
			copy[key] = value[key].clone();
		}

		var isEqual = false;
		if(this._classification === undefined)
		{
			isEqual = false;
		}
		else
		{
			isEqual = Object.keys(copy).length === Object.keys(this._classification).length;
			for(var key of Object.keys(copy))
			{
				isEqual = isEqual && this._classification[key] !== undefined;
				isEqual = isEqual && copy[key].equals(this._classification[key]);
			}
		}

		if(!isEqual)
		{
			this._classification = copy;
			this.recomputeClassification();
		}
	}

	recomputeClassification()
	{
		this.classificationTexture = PointCloudMaterial.generateClassificationTexture(this._classification);
		this.uniforms.classificationLUT.value = this.classificationTexture;
		this.dispatchEvent(
		{
			type: "material_property_changed",
			target: this
		});
	}

	get spacing()
	{
		return this.uniforms.spacing.value;
	}

	set spacing(value)
	{
		if(this.uniforms.spacing.value !== value)
		{
			this.uniforms.spacing.value = value;
		}
	}

	get weighted()
	{
		return this._weighted;
	}

	set weighted(value)
	{
		if(this._weighted !== value)
		{
			this._weighted = value;
			this.updateMaterial();
		}
	}

	get fov()
	{
		return this.uniforms.fov.value;
	}

	set fov(value)
	{
		if(this.uniforms.fov.value !== value)
		{
			this.uniforms.fov.value = value;
			this.updateMaterial();
		}
	}

	get screenWidth()
	{
		return this.uniforms.screenWidth.value;
	}

	set screenWidth(value)
	{
		if(this.uniforms.screenWidth.value !== value)
		{
			this.uniforms.screenWidth.value = value;
			this.updateMaterial();
		}
	}

	get screenHeight()
	{
		return this.uniforms.screenHeight.value;
	}

	set screenHeight(value)
	{
		if(this.uniforms.screenHeight.value !== value)
		{
			this.uniforms.screenHeight.value = value;
			this.updateMaterial();
		}
	}

	get near()
	{
		return this.uniforms.near.value;
	}

	set near(value)
	{
		if(this.uniforms.near.value !== value)
		{
			this.uniforms.near.value = value;
		}
	}

	get far()
	{
		return this.uniforms.far.value;
	}

	set far(value)
	{
		if(this.uniforms.far.value !== value)
		{
			this.uniforms.far.value = value;
		}
	}

	get opacity()
	{
		return this.uniforms.uOpacity.value;
	}

	set opacity(value)
	{
		if(this.uniforms && this.uniforms.uOpacity)
		{
			if(this.uniforms.uOpacity.value !== value)
			{
				this.uniforms.uOpacity.value = value;
				this.updateMaterial();
				this.dispatchEvent(
				{
					type: "opacity_changed",
					target: this
				});
				this.dispatchEvent(
				{
					type: "material_property_changed",
					target: this
				});
			}
		}
	}

	get pointColorType()
	{
		return this._pointColorType;
	}

	set pointColorType(value)
	{
		if(this._pointColorType !== value)
		{
			this._pointColorType = value;
			this.updateMaterial();
			this.dispatchEvent(
			{
				type: "point_color_type_changed",
				target: this
			});
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get pointSizeType()
	{
		return this._pointSizeType;
	}

	set pointSizeType(value)
	{
		if(this._pointSizeType !== value)
		{
			this._pointSizeType = value;
			this.updateMaterial();
			this.dispatchEvent(
			{
				type: "point_size_type_changed",
				target: this
			});
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get color()
	{
		return this.uniforms.uColor.value;
	}

	set color(value)
	{
		if(!this.uniforms.uColor.value.equals(value))
		{
			this.uniforms.uColor.value.copy(value);
			this.dispatchEvent(
			{
				type: "color_changed",
				target: this
			});
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get shape()
	{
		return this._shape;
	}

	set shape(value)
	{
		if(this._shape !== value)
		{
			this._shape = value;
			this.updateMaterial();
			this.dispatchEvent(
			{
				type: "point_shape_changed",
				target: this
			});
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get treeType()
	{
		return this._treeType;
	}

	set treeType(value)
	{
		if(this._treeType !== value)
		{
			this._treeType = value;
			this.updateMaterial();
		}
	}

	get bbSize()
	{
		return this.uniforms.bbSize.value;
	}

	set bbSize(value)
	{
		this.uniforms.bbSize.value = value;
	}

	get size()
	{
		return this.uniforms.size.value;
	}

	set size(value)
	{
		if(this.uniforms.size.value !== value)
		{
			this.uniforms.size.value = value;
			this.dispatchEvent(
			{
				type: "point_size_changed",
				target: this
			});
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get elevationRange()
	{
		return this.uniforms.elevationRange.value;
	}

	set elevationRange(value)
	{
		var changed = this.uniforms.elevationRange.value[0] !== value[0] ||
			this.uniforms.elevationRange.value[1] !== value[1];
		if(changed)
		{
			this.uniforms.elevationRange.value = value;
			this._defaultElevationRangeChanged = true;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get heightMin()
	{
		return this.uniforms.elevationRange.value[0];
	}

	set heightMin(value)
	{
		this.elevationRange = [value, this.elevationRange[1]];
	}

	get heightMax()
	{
		return this.uniforms.elevationRange.value[1];
	}

	set heightMax(value)
	{
		this.elevationRange = [this.elevationRange[0], value];
	}

	get transition()
	{
		return this.uniforms.transition.value;
	}

	set transition(value)
	{
		this.uniforms.transition.value = value;
	}

	get intensityRange()
	{
		return this.uniforms.intensityRange.value;
	}

	set intensityRange(value)
	{
		if(!(value instanceof Array && value.length === 2))
		{
			return;
		}

		if(value[0] === this.uniforms.intensityRange.value[0] && value[1] === this.uniforms.intensityRange.value[1])
		{
			return;
		}

		this.uniforms.intensityRange.value = value;
		this._defaultIntensityRangeChanged = true;

		this.dispatchEvent(
		{
			type: "material_property_changed",
			target: this
		});
	}

	get intensityGamma()
	{
		return this.uniforms.intensityGamma.value;
	}

	set intensityGamma(value)
	{
		if(this.uniforms.intensityGamma.value !== value)
		{
			this.uniforms.intensityGamma.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get intensityContrast()
	{
		return this.uniforms.intensityContrast.value;
	}

	set intensityContrast(value)
	{
		if(this.uniforms.intensityContrast.value !== value)
		{
			this.uniforms.intensityContrast.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get intensityBrightness()
	{
		return this.uniforms.intensityBrightness.value;
	}

	set intensityBrightness(value)
	{
		if(this.uniforms.intensityBrightness.value !== value)
		{
			this.uniforms.intensityBrightness.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get rgbGamma()
	{
		return this.uniforms.rgbGamma.value;
	}

	set rgbGamma(value)
	{
		if(this.uniforms.rgbGamma.value !== value)
		{
			this.uniforms.rgbGamma.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	// get rgbContrast()
	// {
	// 	return this.uniforms.rgbContrast.value;
	// }

	// set rgbContrast(value)
	// {
	// 	if(this.uniforms.rgbContrast.value !== value)
	// 	{
	// 		this.uniforms.rgbContrast.value = value;
	// 		this.dispatchEvent(
	// 		{
	// 			type: "material_property_changed",
	// 			target: this
	// 		});
	// 	}
	// }

	get rgbBrightness()
	{
		return this.uniforms.rgbBrightness.value;
	}

	set rgbBrightness(value)
	{
		if(this.uniforms.rgbBrightness.value !== value)
		{
			this.uniforms.rgbBrightness.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get weightRGB()
	{
		return this.uniforms.wRGB.value;
	}

	set weightRGB(value)
	{
		if(this.uniforms.wRGB.value !== value)
		{
			this.uniforms.wRGB.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get weightIntensity()
	{
		return this.uniforms.wIntensity.value;
	}

	set weightIntensity(value)
	{
		if(this.uniforms.wIntensity.value !== value)
		{
			this.uniforms.wIntensity.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get weightElevation()
	{
		return this.uniforms.wElevation.value;
	}

	set weightElevation(value)
	{
		if(this.uniforms.wElevation.value !== value)
		{
			this.uniforms.wElevation.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get weightClassification()
	{
		return this.uniforms.wClassification.value;
	}

	set weightClassification(value)
	{
		if(this.uniforms.wClassification.value !== value)
		{
			this.uniforms.wClassification.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get weightReturnNumber()
	{
		return this.uniforms.wReturnNumber.value;
	}

	set weightReturnNumber(value)
	{
		if(this.uniforms.wReturnNumber.value !== value)
		{
			this.uniforms.wReturnNumber.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	get weightSourceID()
	{
		return this.uniforms.wSourceID.value;
	}

	set weightSourceID(value)
	{
		if(this.uniforms.wSourceID.value !== value)
		{
			this.uniforms.wSourceID.value = value;
			this.dispatchEvent(
			{
				type: "material_property_changed",
				target: this
			});
		}
	}

	static generateGradientTexture(gradient)
	{
		var size = 64;

		//Create canvas
		var canvas = document.createElement("canvas");
		canvas.width = size;
		canvas.height = size;

		//Get context
		var context = canvas.getContext("2d");

		//Draw gradient
		context.rect(0, 0, size, size);
		var ctxGradient = context.createLinearGradient(0, 0, size, size);
		for(var i = 0; i < gradient.length; i++)
		{
			var step = gradient[i];
			ctxGradient.addColorStop(step[0], "#" + step[1].getHexString());
		}
		context.fillStyle = ctxGradient;
		context.fill();

		var texture = new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(canvas);
		texture.needsUpdate = true;
		texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter;

		return texture;
	}

	static generateClassificationTexture(classification)
	{
		var width = 256;
		var height = 256;
		var size = width * height;
		var data = new Uint8Array(4 * size);
		for(var x = 0; x < width; x++)
		{
			for(var y = 0; y < height; y++)
			{
				var i = x + width * y;
				var color;
				if(classification[x])
				{
					color = classification[x];
				}
				else if(classification[x % 32])
				{
					color = classification[x % 32];
				}
				else
				{
					color = classification.DEFAULT;
				}
				data[4 * i + 0] = 255 * color.x;
				data[4 * i + 1] = 255 * color.y;
				data[4 * i + 2] = 255 * color.z;
				data[4 * i + 3] = 255 * color.w;
			}
		}
		var texture = new three__WEBPACK_IMPORTED_MODULE_0__.DataTexture(data, width, height, three__WEBPACK_IMPORTED_MODULE_0__.RGBAFormat);
		texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__.NearestFilter;
		texture.wrapS = texture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__.ClampToEdgeWrapping;
		texture.needsUpdate = true;
		return texture;
	}

	disableEvents()
	{
		if(this._hiddenListeners === undefined)
		{
			this._hiddenListeners = this._listeners;
			this._listeners = {};
		}
	}

	enableEvents()
	{
		this._listeners = this._hiddenListeners;
		this._hiddenListeners = undefined;
	}

	copyFrom(from)
	{
		for(var name of this.uniforms)
		{
			this.uniforms[name].value = from.uniforms[name].value;
		}
	}
};




/***/ }),

/***/ "./source/utils/HelperUtils.js":
/*!*************************************!*\
  !*** ./source/utils/HelperUtils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperUtils": () => (/* binding */ HelperUtils)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);



class HelperUtils
{
	/**
	 * Craete a new data texture with a solid color.
	 */
	static generateDataTexture(width, height, color)
	{
		var size = width * height;
		var data = new Uint8Array(4 * width * height);

		var r = Math.floor(color.r * 255);
		var g = Math.floor(color.g * 255);
		var b = Math.floor(color.b * 255);

		for(var i = 0; i < size; i++)
		{
			data[i * 3] = r;
			data[i * 3 + 1] = g;
			data[i * 3 + 2] = b;
		}

		var texture = new three__WEBPACK_IMPORTED_MODULE_0__.DataTexture(data, width, height, three__WEBPACK_IMPORTED_MODULE_0__.RGBAFormat);
		texture.needsUpdate = true;
		texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__.NearestFilter;

		return texture;
	};

	/**
	 * Compute a transformed bouding box from an original box and a transform matrix.
	 */
	static computeTransformedBoundingBox(box, transform)
	{
		var vertices = [
			new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(box.min.x, box.min.y, box.min.z).applyMatrix4(transform),
			new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(box.min.x, box.min.y, box.min.z).applyMatrix4(transform),
			new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(box.max.x, box.min.y, box.min.z).applyMatrix4(transform),
			new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(box.min.x, box.max.y, box.min.z).applyMatrix4(transform),
			new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(box.min.x, box.min.y, box.max.z).applyMatrix4(transform),
			new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(box.min.x, box.max.y, box.max.z).applyMatrix4(transform),
			new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(box.max.x, box.max.y, box.min.z).applyMatrix4(transform),
			new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(box.max.x, box.min.y, box.max.z).applyMatrix4(transform),
			new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(box.max.x, box.max.y, box.max.z).applyMatrix4(transform)
		];

		var boundingBox = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();
		boundingBox.setFromPoints(vertices);
		
		return boundingBox;
	};
};



/***/ }),

/***/ "./source/utils/LRU.js":
/*!*****************************!*\
  !*** ./source/utils/LRU.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LRU": () => (/* binding */ LRU),
/* harmony export */   "LRUItem": () => (/* binding */ LRUItem)
/* harmony export */ });
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Global.js */ "./source/Global.js");




class LRUItem
{
	constructor(node)
	{
		this.previous = null;
		this.next = null;
		this.node = node;
	}
}

/**
 * @class A doubly-linked-list of the least recently used elements.
 */
class LRU
{
	constructor()
	{
		// the least recently used item
		this.first = null;
		// the most recently used item
		this.last = null;
		// a list of all items in the lru list
		this.items = {};
		this.elements = 0;
		this.numPoints = 0;
	}

	size()
	{
		return this.elements;
	}

	contains(node)
	{
		return this.items[node.id] == null;
	}

	touch(node)
	{
		if(!node.loaded)
		{
			return;
		}

		var item;

		if(this.items[node.id] == null)
		{
			// add to list
			item = new LRUItem(node);
			item.previous = this.last;
			this.last = item;
			if(item.previous !== null)
			{
				item.previous.next = item;
			}

			this.items[node.id] = item;
			this.elements++;

			if(this.first === null)
			{
				this.first = item;
			}
			this.numPoints += node.numPoints;
		}
		else
		{
			// update in list
			item = this.items[node.id];

			if(item.previous === null)
			{
				// handle touch on first element
				if(item.next !== null)
				{
					this.first = item.next;
					this.first.previous = null;
					item.previous = this.last;
					item.next = null;
					this.last = item;
					item.previous.next = item;
				}
			}
			else if(item.next !== null)
			{
				// handle touch on any other element
				item.previous.next = item.next;
				item.next.previous = item.previous;
				item.previous = this.last;
				item.next = null;
				this.last = item;
				item.previous.next = item;
			}
		}
	}

	remove(node)
	{
		var lruItem = this.items[node.id];
		if(lruItem)
		{
			if(this.elements === 1)
			{
				this.first = null;
				this.last = null;
			}
			else
			{
				if(!lruItem.previous)
				{
					this.first = lruItem.next;
					this.first.previous = null;
				}
				if(!lruItem.next)
				{
					this.last = lruItem.previous;
					this.last.next = null;
				}
				if(lruItem.previous && lruItem.next)
				{
					lruItem.previous.next = lruItem.next;
					lruItem.next.previous = lruItem.previous;
				}
			}

			delete this.items[node.id];
			this.elements--;
			this.numPoints -= node.numPoints;
		}
	}

	getLRUItem()
	{
		if(this.first === null)
		{
			return null;
		}
		var lru = this.first;

		return lru.node;
	}

	toString()
	{
		var string = "{ ";
		var curr = this.first;

		while (curr !== null)
		{
			string += curr.node.id;
			if(curr.next !== null)
			{
				string += ", ";
			}
			curr = curr.next;
		}

		string += "}";
		string += "(" + this.size() + ")";
		return string;
	}

	freeMemory()
	{
		if(this.elements <= 1)
		{
			return;
		}

		while(this.numPoints > _Global_js__WEBPACK_IMPORTED_MODULE_0__.Global.pointLoadLimit)
		{
			var element = this.first;
			var node = element.node;
			this.disposeDescendants(node);
		}
	}

	disposeDescendants(node)
	{
		var stack = [];
		stack.push(node);

		while (stack.length > 0)
		{
			var current = stack.pop();

			current.dispose();
			this.remove(current);

			for(var key in current.children)
			{
				if(current.children.hasOwnProperty(key))
				{
					var child = current.children[key];
					if(child.loaded)
					{
						stack.push(current.children[key]);
					}
				}
			}
		}
	}
}




/***/ }),

/***/ "./source/utils/VersionUtils.js":
/*!**************************************!*\
  !*** ./source/utils/VersionUtils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionUtils": () => (/* binding */ VersionUtils)
/* harmony export */ });


function VersionUtils(version)
{
	this.version = version;
	var vmLength = (version.indexOf(".") === -1) ? version.length : version.indexOf(".");
	this.versionMajor = parseInt(version.substr(0, vmLength));
	this.versionMinor = parseInt(version.substr(vmLength + 1));
	
	if(this.versionMinor.length === 0)
	{
		this.versionMinor = 0;
	}
};

VersionUtils.prototype.newerThan = function(version)
{
	var v = new VersionUtils(version);

	if((this.versionMajor > v.versionMajor) || (this.versionMajor === v.versionMajor && this.versionMinor > v.versionMinor))
	{
		return true;
	}
	
	return false;
};

VersionUtils.prototype.equalOrHigher = function(version)
{
	var v = new VersionUtils(version);

	if((this.versionMajor > v.versionMajor) || (this.versionMajor === v.versionMajor && this.versionMinor >= v.versionMinor))
	{
		return true;
	}

	return false;
};

VersionUtils.prototype.upTo = function(version)
{
	return !this.newerThan(version);
};




/***/ }),

/***/ "./source/utils/WorkerManager.js":
/*!***************************************!*\
  !*** ./source/utils/WorkerManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerManager": () => (/* binding */ WorkerManager)
/* harmony export */ });
/* harmony import */ var _workers_BinaryDecoderWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../workers/BinaryDecoderWorker */ "./source/workers/BinaryDecoderWorker.js");
/* harmony import */ var _workers_BinaryDecoderWorker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_workers_BinaryDecoderWorker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _workers_LASDecoderWorker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workers/LASDecoderWorker */ "./source/workers/LASDecoderWorker.js");
/* harmony import */ var _workers_LASDecoderWorker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_workers_LASDecoderWorker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _workers_DEMWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workers/DEMWorker */ "./source/workers/DEMWorker.js");
/* harmony import */ var _workers_DEMWorker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_workers_DEMWorker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _workers_EptLaszipDecoderWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workers/EptLaszipDecoderWorker */ "./source/workers/EptLaszipDecoderWorker.js");
/* harmony import */ var _workers_EptLaszipDecoderWorker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_workers_EptLaszipDecoderWorker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _workers_EptBinaryDecoderWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workers/EptBinaryDecoderWorker */ "./source/workers/EptBinaryDecoderWorker.js");
/* harmony import */ var _workers_EptBinaryDecoderWorker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_workers_EptBinaryDecoderWorker__WEBPACK_IMPORTED_MODULE_4__);


// Force workers to be included

//import LASLAZWorker from "../workers/LASLAZWorker";

//import GreyhoundBinaryDecoderWorker from "../workers/GreyhoundBinaryDecoderWorker";




/**
 * The worker manager is responsible for creating and managing worker instances.
 */
class WorkerManager {
  constructor() {
    this.workers = [];

    for (var i = 0; i < 7; i++) {
      this.workers.push([]);
    }
  }

  /**
   * Get a worker from the pool, if none available one will be created.
   */
  getWorker(type) {
    if (this.workers[type].length > 0) {
      return this.workers[type].pop();
    }

    switch (type) {
      case 0:
        return new (_workers_BinaryDecoderWorker__WEBPACK_IMPORTED_MODULE_0___default())();
      case 1:
        throw "LASLAZWorker not implemented";
      case 2:
        return new (_workers_LASDecoderWorker__WEBPACK_IMPORTED_MODULE_1___default())();
      case 3:
        throw "GreyhoundBinaryDecoderWorker not implemented";
      case 4:
        return new (_workers_DEMWorker__WEBPACK_IMPORTED_MODULE_2___default())();
      case 5:
        return new (_workers_EptLaszipDecoderWorker__WEBPACK_IMPORTED_MODULE_3___default())();
      case 6:
        return new (_workers_EptBinaryDecoderWorker__WEBPACK_IMPORTED_MODULE_4___default())();
      default:
        throw "Unknown worker requested";
    }
  }

  /**
   * Return (reinsert) the worker into the pool.
   */
  returnWorker(type, worker) {
    this.workers[type].push(worker);
  }

  /**
   * Run a task immediatly.
   */
  runTask(type, onMessage, message, transfer) {
    var self = this;

    var worker = this.getWorker(type);
    worker.onmessage = function (event) {
      onMessage(event);
      self.returnWorker(type, worker);
    };

    if (transfer !== undefined) {
      worker.postMessage(message, transfer);
    } else {
      worker.postMessage(message);
    }
  }
}

WorkerManager.BINARY_DECODER = 0;
WorkerManager.LAS_LAZ = 1;
WorkerManager.LAS_DECODER = 2;
WorkerManager.GREYHOUND = 3;
WorkerManager.DEM = 4;
WorkerManager.EPT_LAS_ZIP_DECODER = 5;
WorkerManager.EPT_BINARY_DECODER = 6;




/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("three");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./source/Main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeLocations": () => (/* reexport safe */ _Potree_js__WEBPACK_IMPORTED_MODULE_1__.AttributeLocations),
/* harmony export */   "BasicGroup": () => (/* reexport safe */ _objects_BasicGroup_js__WEBPACK_IMPORTED_MODULE_31__.BasicGroup),
/* harmony export */   "BinaryHeap": () => (/* reexport safe */ _lib_BinaryHeap_js__WEBPACK_IMPORTED_MODULE_2__.BinaryHeap),
/* harmony export */   "BinaryLoader": () => (/* reexport safe */ _loaders_BinaryLoader_js__WEBPACK_IMPORTED_MODULE_22__.BinaryLoader),
/* harmony export */   "Classification": () => (/* reexport safe */ _Potree_js__WEBPACK_IMPORTED_MODULE_1__.Classification),
/* harmony export */   "DEM": () => (/* reexport safe */ _pointcloud_DEM_js__WEBPACK_IMPORTED_MODULE_11__.DEM),
/* harmony export */   "DEMNode": () => (/* reexport safe */ _pointcloud_DEMNode_js__WEBPACK_IMPORTED_MODULE_12__.DEMNode),
/* harmony export */   "EptBinaryLoader": () => (/* reexport safe */ _loaders_ept_EptBinaryLoader_js__WEBPACK_IMPORTED_MODULE_30__.EptBinaryLoader),
/* harmony export */   "EptLaszipLoader": () => (/* reexport safe */ _loaders_ept_EptLaszipLoader_js__WEBPACK_IMPORTED_MODULE_29__.EptLaszipLoader),
/* harmony export */   "EptLoader": () => (/* reexport safe */ _loaders_EptLoader_js__WEBPACK_IMPORTED_MODULE_28__.EptLoader),
/* harmony export */   "Global": () => (/* reexport safe */ _Global_js__WEBPACK_IMPORTED_MODULE_0__.Global),
/* harmony export */   "Gradients": () => (/* reexport safe */ _Gradients_js__WEBPACK_IMPORTED_MODULE_8__.Gradients),
/* harmony export */   "GreyhoundBinaryLoader": () => (/* reexport safe */ _loaders_GreyhoundBinaryLoader_js__WEBPACK_IMPORTED_MODULE_25__.GreyhoundBinaryLoader),
/* harmony export */   "GreyhoundLoader": () => (/* reexport safe */ _loaders_GreyhoundLoader_js__WEBPACK_IMPORTED_MODULE_24__.GreyhoundLoader),
/* harmony export */   "GreyhoundUtils": () => (/* reexport safe */ _loaders_GreyhoundUtils_js__WEBPACK_IMPORTED_MODULE_23__.GreyhoundUtils),
/* harmony export */   "Group": () => (/* reexport safe */ _objects_Group_js__WEBPACK_IMPORTED_MODULE_32__.Group),
/* harmony export */   "HelperUtils": () => (/* reexport safe */ _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_4__.HelperUtils),
/* harmony export */   "LASLAZLoader": () => (/* reexport safe */ _loaders_LASLAZLoader_js__WEBPACK_IMPORTED_MODULE_27__.LASLAZLoader),
/* harmony export */   "LASLoader": () => (/* reexport safe */ _loaders_LASLoader_js__WEBPACK_IMPORTED_MODULE_21__.LASLoader),
/* harmony export */   "LRU": () => (/* reexport safe */ _utils_LRU_js__WEBPACK_IMPORTED_MODULE_3__.LRU),
/* harmony export */   "POCLoader": () => (/* reexport safe */ _loaders_POCLoader_js__WEBPACK_IMPORTED_MODULE_26__.POCLoader),
/* harmony export */   "PointAttribute": () => (/* reexport safe */ _PointAttributes_js__WEBPACK_IMPORTED_MODULE_7__.PointAttribute),
/* harmony export */   "PointAttributeNames": () => (/* reexport safe */ _PointAttributes_js__WEBPACK_IMPORTED_MODULE_7__.PointAttributeNames),
/* harmony export */   "PointAttributeTypes": () => (/* reexport safe */ _PointAttributes_js__WEBPACK_IMPORTED_MODULE_7__.PointAttributeTypes),
/* harmony export */   "PointAttributes": () => (/* reexport safe */ _PointAttributes_js__WEBPACK_IMPORTED_MODULE_7__.PointAttributes),
/* harmony export */   "PointCloudArena4D": () => (/* reexport safe */ _pointcloud_PointCloudArena4D_js__WEBPACK_IMPORTED_MODULE_14__.PointCloudArena4D),
/* harmony export */   "PointCloudArena4DGeometry": () => (/* reexport safe */ _pointcloud_geometries_PointCloudArena4DGeometry_js__WEBPACK_IMPORTED_MODULE_17__.PointCloudArena4DGeometry),
/* harmony export */   "PointCloudEptGeometry": () => (/* reexport safe */ _pointcloud_geometries_PointCloudEptGeometry_js__WEBPACK_IMPORTED_MODULE_19__.PointCloudEptGeometry),
/* harmony export */   "PointCloudEptGeometryNode": () => (/* reexport safe */ _pointcloud_geometries_PointCloudEptGeometry_js__WEBPACK_IMPORTED_MODULE_19__.PointCloudEptGeometryNode),
/* harmony export */   "PointCloudGreyhoundGeometry": () => (/* reexport safe */ _pointcloud_geometries_PointCloudGreyhoundGeometry_js__WEBPACK_IMPORTED_MODULE_18__.PointCloudGreyhoundGeometry),
/* harmony export */   "PointCloudMaterial": () => (/* reexport safe */ _pointcloud_materials_PointCloudMaterial_js__WEBPACK_IMPORTED_MODULE_20__.PointCloudMaterial),
/* harmony export */   "PointCloudOctree": () => (/* reexport safe */ _pointcloud_PointCloudOctree_js__WEBPACK_IMPORTED_MODULE_15__.PointCloudOctree),
/* harmony export */   "PointCloudOctreeGeometry": () => (/* reexport safe */ _pointcloud_geometries_PointCloudOctreeGeometry_js__WEBPACK_IMPORTED_MODULE_16__.PointCloudOctreeGeometry),
/* harmony export */   "PointCloudOctreeGeometryNode": () => (/* reexport safe */ _pointcloud_geometries_PointCloudOctreeGeometry_js__WEBPACK_IMPORTED_MODULE_16__.PointCloudOctreeGeometryNode),
/* harmony export */   "PointCloudTree": () => (/* reexport safe */ _pointcloud_PointCloudTree_js__WEBPACK_IMPORTED_MODULE_13__.PointCloudTree),
/* harmony export */   "PointColorType": () => (/* reexport safe */ _Potree_js__WEBPACK_IMPORTED_MODULE_1__.PointColorType),
/* harmony export */   "PointShape": () => (/* reexport safe */ _Potree_js__WEBPACK_IMPORTED_MODULE_1__.PointShape),
/* harmony export */   "PointSizeType": () => (/* reexport safe */ _Potree_js__WEBPACK_IMPORTED_MODULE_1__.PointSizeType),
/* harmony export */   "Points": () => (/* reexport safe */ _Points_js__WEBPACK_IMPORTED_MODULE_9__.Points),
/* harmony export */   "Shaders": () => (/* reexport safe */ _Shaders_js__WEBPACK_IMPORTED_MODULE_10__.Shaders),
/* harmony export */   "TreeType": () => (/* reexport safe */ _Potree_js__WEBPACK_IMPORTED_MODULE_1__.TreeType),
/* harmony export */   "VersionUtils": () => (/* reexport safe */ _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_5__.VersionUtils),
/* harmony export */   "WorkerManager": () => (/* reexport safe */ _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_6__.WorkerManager),
/* harmony export */   "XHRFactory": () => (/* reexport safe */ _XHRFactory_js__WEBPACK_IMPORTED_MODULE_33__.XHRFactory),
/* harmony export */   "loadPointCloud": () => (/* reexport safe */ _Potree_js__WEBPACK_IMPORTED_MODULE_1__.loadPointCloud),
/* harmony export */   "updatePointClouds": () => (/* reexport safe */ _Potree_js__WEBPACK_IMPORTED_MODULE_1__.updatePointClouds),
/* harmony export */   "updateVisibility": () => (/* reexport safe */ _Potree_js__WEBPACK_IMPORTED_MODULE_1__.updateVisibility),
/* harmony export */   "updateVisibilityStructures": () => (/* reexport safe */ _Potree_js__WEBPACK_IMPORTED_MODULE_1__.updateVisibilityStructures)
/* harmony export */ });
/* harmony import */ var _Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Global.js */ "./source/Global.js");
/* harmony import */ var _Potree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Potree.js */ "./source/Potree.js");
/* harmony import */ var _lib_BinaryHeap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/BinaryHeap.js */ "./source/lib/BinaryHeap.js");
/* harmony import */ var _utils_LRU_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/LRU.js */ "./source/utils/LRU.js");
/* harmony import */ var _utils_HelperUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/HelperUtils.js */ "./source/utils/HelperUtils.js");
/* harmony import */ var _utils_VersionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/VersionUtils.js */ "./source/utils/VersionUtils.js");
/* harmony import */ var _utils_WorkerManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/WorkerManager.js */ "./source/utils/WorkerManager.js");
/* harmony import */ var _PointAttributes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PointAttributes.js */ "./source/PointAttributes.js");
/* harmony import */ var _Gradients_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Gradients.js */ "./source/Gradients.js");
/* harmony import */ var _Points_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Points.js */ "./source/Points.js");
/* harmony import */ var _Shaders_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Shaders.js */ "./source/Shaders.js");
/* harmony import */ var _pointcloud_DEM_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pointcloud/DEM.js */ "./source/pointcloud/DEM.js");
/* harmony import */ var _pointcloud_DEMNode_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pointcloud/DEMNode.js */ "./source/pointcloud/DEMNode.js");
/* harmony import */ var _pointcloud_PointCloudTree_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pointcloud/PointCloudTree.js */ "./source/pointcloud/PointCloudTree.js");
/* harmony import */ var _pointcloud_PointCloudArena4D_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pointcloud/PointCloudArena4D.js */ "./source/pointcloud/PointCloudArena4D.js");
/* harmony import */ var _pointcloud_PointCloudOctree_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pointcloud/PointCloudOctree.js */ "./source/pointcloud/PointCloudOctree.js");
/* harmony import */ var _pointcloud_geometries_PointCloudOctreeGeometry_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pointcloud/geometries/PointCloudOctreeGeometry.js */ "./source/pointcloud/geometries/PointCloudOctreeGeometry.js");
/* harmony import */ var _pointcloud_geometries_PointCloudArena4DGeometry_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pointcloud/geometries/PointCloudArena4DGeometry.js */ "./source/pointcloud/geometries/PointCloudArena4DGeometry.js");
/* harmony import */ var _pointcloud_geometries_PointCloudGreyhoundGeometry_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pointcloud/geometries/PointCloudGreyhoundGeometry.js */ "./source/pointcloud/geometries/PointCloudGreyhoundGeometry.js");
/* harmony import */ var _pointcloud_geometries_PointCloudEptGeometry_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pointcloud/geometries/PointCloudEptGeometry.js */ "./source/pointcloud/geometries/PointCloudEptGeometry.js");
/* harmony import */ var _pointcloud_materials_PointCloudMaterial_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pointcloud/materials/PointCloudMaterial.js */ "./source/pointcloud/materials/PointCloudMaterial.js");
/* harmony import */ var _loaders_LASLoader_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loaders/LASLoader.js */ "./source/loaders/LASLoader.js");
/* harmony import */ var _loaders_BinaryLoader_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./loaders/BinaryLoader.js */ "./source/loaders/BinaryLoader.js");
/* harmony import */ var _loaders_GreyhoundUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./loaders/GreyhoundUtils.js */ "./source/loaders/GreyhoundUtils.js");
/* harmony import */ var _loaders_GreyhoundLoader_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./loaders/GreyhoundLoader.js */ "./source/loaders/GreyhoundLoader.js");
/* harmony import */ var _loaders_GreyhoundBinaryLoader_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./loaders/GreyhoundBinaryLoader.js */ "./source/loaders/GreyhoundBinaryLoader.js");
/* harmony import */ var _loaders_POCLoader_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./loaders/POCLoader.js */ "./source/loaders/POCLoader.js");
/* harmony import */ var _loaders_LASLAZLoader_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./loaders/LASLAZLoader.js */ "./source/loaders/LASLAZLoader.js");
/* harmony import */ var _loaders_EptLoader_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./loaders/EptLoader.js */ "./source/loaders/EptLoader.js");
/* harmony import */ var _loaders_ept_EptLaszipLoader_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./loaders/ept/EptLaszipLoader.js */ "./source/loaders/ept/EptLaszipLoader.js");
/* harmony import */ var _loaders_ept_EptBinaryLoader_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./loaders/ept/EptBinaryLoader.js */ "./source/loaders/ept/EptBinaryLoader.js");
/* harmony import */ var _objects_BasicGroup_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./objects/BasicGroup.js */ "./source/objects/BasicGroup.js");
/* harmony import */ var _objects_Group_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./objects/Group.js */ "./source/objects/Group.js");
/* harmony import */ var _XHRFactory_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./XHRFactory.js */ "./source/XHRFactory.js");
















































})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDbUM7QUFDb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtFQUFhO0FBQzlCLFVBQVUsOENBQUc7QUFDYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZOO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssaUVBQW9DO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUF3QjtBQUM1QixJQUFJLHdFQUEyQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLG1FQUFzQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxcUJKO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFQYTtBQUNiO0FBQzRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyRUFBK0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNEQUFzRDtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlXYTtBQUNiO0FBQytCO0FBQy9CO0FBQytDO0FBQ0E7QUFDdUI7QUFDc0Q7QUFDdEU7QUFDbEI7QUFDUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMENBQWE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCwwQ0FBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFtQjtBQUN2QztBQUNBLHNCQUFzQiwrQ0FBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsV0FBVztBQUM1QjtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBaUIsc0JBQXNCLDZDQUFnQjtBQUMzRSxzQkFBc0IsZ0RBQW1CO0FBQ3pDLGtDQUFrQyxzREFBeUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy81QmY7QUFDYjtBQUMrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFpQixzQkFBc0IsNkNBQWdCO0FBQzNFO0FBQ0Esc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMENBQWE7QUFDcEIsT0FBTywwQ0FBYTtBQUNwQixPQUFPLDBDQUFhO0FBQ3BCLE9BQU8sMENBQWE7QUFDcEIsT0FBTywwQ0FBYTtBQUNwQixPQUFPLDBDQUFhO0FBQ3BCLE9BQU8sMENBQWE7QUFDcEIsT0FBTywwQ0FBYTtBQUNwQixPQUFPLDBDQUFhO0FBQ3BCO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RGE7QUFDYjtBQUNvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q2lFO0FBQ0E7QUFDakU7QUFDbUQ7QUFDVjtBQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvR2xvYmFsLmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL0dyYWRpZW50cy5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS9Qb2ludEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvUG9pbnRzLmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL1BvdHJlZS5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS9TaGFkZXJzLmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL1hIUkZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvbGliL0JpbmFyeUhlYXAuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvbG9hZGVycy9CaW5hcnlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvbG9hZGVycy9FcHRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvbG9hZGVycy9HcmV5aG91bmRCaW5hcnlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvbG9hZGVycy9HcmV5aG91bmRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvbG9hZGVycy9HcmV5aG91bmRVdGlscy5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS9sb2FkZXJzL0xBU0xBWkxvYWRlci5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS9sb2FkZXJzL0xBU0xvYWRlci5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS9sb2FkZXJzL1BPQ0xvYWRlci5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS9sb2FkZXJzL2VwdC9FcHRCaW5hcnlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvbG9hZGVycy9lcHQvRXB0TGFzemlwTG9hZGVyLmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL29iamVjdHMvQmFzaWNHcm91cC5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS9vYmplY3RzL0dyb3VwLmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL3BvaW50Y2xvdWQvREVNLmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL3BvaW50Y2xvdWQvREVNTm9kZS5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS9wb2ludGNsb3VkL1BvaW50Q2xvdWRBcmVuYTRELmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL3BvaW50Y2xvdWQvUG9pbnRDbG91ZE9jdHJlZS5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS9wb2ludGNsb3VkL1BvaW50Q2xvdWRUcmVlLmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL3BvaW50Y2xvdWQvZ2VvbWV0cmllcy9Qb2ludENsb3VkQXJlbmE0REdlb21ldHJ5LmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL3BvaW50Y2xvdWQvZ2VvbWV0cmllcy9Qb2ludENsb3VkRXB0R2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvcG9pbnRjbG91ZC9nZW9tZXRyaWVzL1BvaW50Q2xvdWRHcmV5aG91bmRHZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS9wb2ludGNsb3VkL2dlb21ldHJpZXMvUG9pbnRDbG91ZE9jdHJlZUdlb21ldHJ5LmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL3BvaW50Y2xvdWQvbWF0ZXJpYWxzL1BvaW50Q2xvdWRNYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS91dGlscy9IZWxwZXJVdGlscy5qcyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS8uL3NvdXJjZS91dGlscy9MUlUuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvdXRpbHMvVmVyc2lvblV0aWxzLmpzIiwid2VicGFjazovL3BvdHJlZS1jb3JlLy4vc291cmNlL3V0aWxzL1dvcmtlck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvZXh0ZXJuYWwgY29tbW9uanMgXCJ0aHJlZVwiIiwid2VicGFjazovL3BvdHJlZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvdHJlZS1jb3JlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvdHJlZS1jb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3RyZWUtY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvdHJlZS1jb3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG90cmVlLWNvcmUvLi9zb3VyY2UvTWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7TFJVfSBmcm9tIFwiLi91dGlscy9MUlUuanNcIjtcclxuaW1wb3J0IHtXb3JrZXJNYW5hZ2VyfSBmcm9tIFwiLi91dGlscy9Xb3JrZXJNYW5hZ2VyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0KCkge1xyXG5cdGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuY3VycmVudFNjcmlwdDtcclxuXHR9XHJcblx0Y29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcclxuXHRpZiAoc2NyaXB0cyAmJiBzY3JpcHRzLmxlbmd0aCkge1xyXG5cdFx0cmV0dXJuIHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QmFzZVBhdGgoKVxyXG57XHJcblx0dmFyIGN1cnJlbnRTY3JpcHQgPSBnZXRDdXJyZW50U2NyaXB0KCk7XHJcblx0aWYoY3VycmVudFNjcmlwdCAmJiBjdXJyZW50U2NyaXB0LnNyYylcclxuXHR7XHJcblx0XHR2YXIgc2NyaXB0UGF0aCA9IG5ldyBVUkwoY3VycmVudFNjcmlwdC5zcmMgKyBcIi8uLlwiKS5ocmVmO1xyXG5cclxuXHRcdGlmKHNjcmlwdFBhdGguc2xpY2UoLTEpID09PSBcIi9cIilcclxuXHRcdHtcclxuXHRcdFx0c2NyaXB0UGF0aCA9IHNjcmlwdFBhdGguc2xpY2UoMCwgLTEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzY3JpcHRQYXRoO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvcihcIlBvdHJlZTogV2FzIHVuYWJsZSB0byBmaW5kIGl0cyBzY3JpcHQgcGF0aCB1c2luZyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LlwiKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBcIlwiO1xyXG59XHJcblxyXG52YXIgR2xvYmFsID0gXHJcbntcclxuXHRkZWJ1Zzoge30sXHJcblx0d29ya2VyUGF0aDogZ2V0QmFzZVBhdGgoKSxcclxuXHRtYXhOb2Rlc0xvYWRHUFVGcmFtZTogMjAsXHJcblx0bWF4REVNTGV2ZWw6IDAsXHJcblx0bWF4Tm9kZXNMb2FkaW5nOiBuYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSAhPT0gdW5kZWZpbmVkID8gbmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kgOiA0LFxyXG5cdHBvaW50TG9hZExpbWl0OiAxZTEwLFxyXG5cdG51bU5vZGVzTG9hZGluZzogMCxcclxuXHRtZWFzdXJlVGltaW5nczogZmFsc2UsXHJcblx0d29ya2VyUG9vbDogbmV3IFdvcmtlck1hbmFnZXIoKSxcclxuXHRscnU6IG5ldyBMUlUoKSxcclxuXHRwb2ludGNsb3VkVHJhbnNmb3JtVmVyc2lvbjogdW5kZWZpbmVkXHJcbn07XHJcblxyXG5leHBvcnQge0dsb2JhbH07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgR3JhZGllbnRzID0ge1xyXG5cdFJBSU5CT1c6IFtcclxuXHRcdFswLCBuZXcgVEhSRUUuQ29sb3IoMC4yNzgsIDAsIDAuNzE0KV0sXHJcblx0XHRbMSAvIDYsIG5ldyBUSFJFRS5Db2xvcigwLCAwLCAxKV0sXHJcblx0XHRbMiAvIDYsIG5ldyBUSFJFRS5Db2xvcigwLCAxLCAxKV0sXHJcblx0XHRbMyAvIDYsIG5ldyBUSFJFRS5Db2xvcigwLCAxLCAwKV0sXHJcblx0XHRbNCAvIDYsIG5ldyBUSFJFRS5Db2xvcigxLCAxLCAwKV0sXHJcblx0XHRbNSAvIDYsIG5ldyBUSFJFRS5Db2xvcigxLCAwLjY0LCAwKV0sXHJcblx0XHRbMSwgbmV3IFRIUkVFLkNvbG9yKDEsIDAsIDApXVxyXG5cdF0sXHJcblx0Ly9Gcm9tIGNocm9tYSBzcGVjdHJhbCBodHRwOi8vZ2thLmdpdGh1Yi5pby9jaHJvbWEuanMvXHJcblx0U1BFQ1RSQUw6IFtcclxuXHRcdFswLCBuZXcgVEhSRUUuQ29sb3IoMC4zNjg2LCAwLjMwOTgsIDAuNjM1MyldLFxyXG5cdFx0WzAuMSwgbmV3IFRIUkVFLkNvbG9yKDAuMTk2MSwgMC41MzMzLCAwLjc0MTIpXSxcclxuXHRcdFswLjIsIG5ldyBUSFJFRS5Db2xvcigwLjQwMDAsIDAuNzYwOCwgMC42NDcxKV0sXHJcblx0XHRbMC4zLCBuZXcgVEhSRUUuQ29sb3IoMC42NzA2LCAwLjg2NjcsIDAuNjQzMSldLFxyXG5cdFx0WzAuNCwgbmV3IFRIUkVFLkNvbG9yKDAuOTAyMCwgMC45NjA4LCAwLjU5NjEpXSxcclxuXHRcdFswLjUsIG5ldyBUSFJFRS5Db2xvcigxLjAwMDAsIDEuMDAwMCwgMC43NDkwKV0sXHJcblx0XHRbMC42LCBuZXcgVEhSRUUuQ29sb3IoMC45OTYxLCAwLjg3ODQsIDAuNTQ1MSldLFxyXG5cdFx0WzAuNywgbmV3IFRIUkVFLkNvbG9yKDAuOTkyMiwgMC42ODI0LCAwLjM4MDQpXSxcclxuXHRcdFswLjgsIG5ldyBUSFJFRS5Db2xvcigwLjk1NjksIDAuNDI3NSwgMC4yNjI3KV0sXHJcblx0XHRbMC45LCBuZXcgVEhSRUUuQ29sb3IoMC44MzUzLCAwLjI0MzEsIDAuMzA5OCldLFxyXG5cdFx0WzEsIG5ldyBUSFJFRS5Db2xvcigwLjYxOTYsIDAuMDAzOSwgMC4yNTg4KV1cclxuXHRdLFxyXG5cdFBMQVNNQTogW1xyXG5cdFx0WzAuMCwgbmV3IFRIUkVFLkNvbG9yKDAuMjQxLCAwLjAxNSwgMC42MTApXSxcclxuXHRcdFswLjEsIG5ldyBUSFJFRS5Db2xvcigwLjM4NywgMC4wMDEsIDAuNjU0KV0sXHJcblx0XHRbMC4yLCBuZXcgVEhSRUUuQ29sb3IoMC41MjQsIDAuMDI1LCAwLjY1MyldLFxyXG5cdFx0WzAuMywgbmV3IFRIUkVFLkNvbG9yKDAuNjUxLCAwLjEyNSwgMC41OTYpXSxcclxuXHRcdFswLjQsIG5ldyBUSFJFRS5Db2xvcigwLjc1MiwgMC4yMjcsIDAuNTEzKV0sXHJcblx0XHRbMC41LCBuZXcgVEhSRUUuQ29sb3IoMC44MzcsIDAuMzI5LCAwLjQzMSldLFxyXG5cdFx0WzAuNiwgbmV3IFRIUkVFLkNvbG9yKDAuOTA3LCAwLjQzNSwgMC4zNTMpXSxcclxuXHRcdFswLjcsIG5ldyBUSFJFRS5Db2xvcigwLjk2MywgMC41NTQsIDAuMjcyKV0sXHJcblx0XHRbMC44LCBuZXcgVEhSRUUuQ29sb3IoMC45OTIsIDAuNjgxLCAwLjE5NSldLFxyXG5cdFx0WzAuOSwgbmV3IFRIUkVFLkNvbG9yKDAuOTg3LCAwLjgyMiwgMC4xNDQpXSxcclxuXHRcdFsxLjAsIG5ldyBUSFJFRS5Db2xvcigwLjk0MCwgMC45NzUsIDAuMTMxKV1cclxuXHRdLFxyXG5cdFlFTExPV19HUkVFTjogW1xyXG5cdFx0WzAsIG5ldyBUSFJFRS5Db2xvcigwLjE2NDcsIDAuMjgyNCwgMC4zNDUxKV0sXHJcblx0XHRbMC4xLCBuZXcgVEhSRUUuQ29sb3IoMC4xMzM4LCAwLjM1NTUsIDAuNDIyNyldLFxyXG5cdFx0WzAuMiwgbmV3IFRIUkVFLkNvbG9yKDAuMDYxMCwgMC40MzE5LCAwLjQ4NjQpXSxcclxuXHRcdFswLjMsIG5ldyBUSFJFRS5Db2xvcigwLjAwMDAsIDAuNTA5OSwgMC41MzE5KV0sXHJcblx0XHRbMC40LCBuZXcgVEhSRUUuQ29sb3IoMC4wMDAwLCAwLjU4ODEsIDAuNTU2OSldLFxyXG5cdFx0WzAuNSwgbmV3IFRIUkVFLkNvbG9yKDAuMTM3MCwgMC42NjUwLCAwLjU2MTQpXSxcclxuXHRcdFswLjYsIG5ldyBUSFJFRS5Db2xvcigwLjI5MDYsIDAuNzM5NSwgMC41NDc3KV0sXHJcblx0XHRbMC43LCBuZXcgVEhSRUUuQ29sb3IoMC40NDUzLCAwLjgwOTksIDAuNTIwMSldLFxyXG5cdFx0WzAuOCwgbmV3IFRIUkVFLkNvbG9yKDAuNjEwMiwgMC44NzQ4LCAwLjQ4NTApXSxcclxuXHRcdFswLjksIG5ldyBUSFJFRS5Db2xvcigwLjc4ODMsIDAuOTMyMywgMC40NTE0KV0sXHJcblx0XHRbMSwgbmV3IFRIUkVFLkNvbG9yKDAuOTgwNCwgMC45ODA0LCAwLjQzMTQpXVxyXG5cdF0sXHJcblx0VklSSURJUzogW1xyXG5cdFx0WzAuMCwgbmV3IFRIUkVFLkNvbG9yKDAuMjY3LCAwLjAwNSwgMC4zMjkpXSxcclxuXHRcdFswLjEsIG5ldyBUSFJFRS5Db2xvcigwLjI4MywgMC4xNDEsIDAuNDU4KV0sXHJcblx0XHRbMC4yLCBuZXcgVEhSRUUuQ29sb3IoMC4yNTQsIDAuMjY1LCAwLjUzMCldLFxyXG5cdFx0WzAuMywgbmV3IFRIUkVFLkNvbG9yKDAuMjA3LCAwLjM3MiwgMC41NTMpXSxcclxuXHRcdFswLjQsIG5ldyBUSFJFRS5Db2xvcigwLjE2NCwgMC40NzEsIDAuNTU4KV0sXHJcblx0XHRbMC41LCBuZXcgVEhSRUUuQ29sb3IoMC4xMjgsIDAuNTY3LCAwLjU1MSldLFxyXG5cdFx0WzAuNiwgbmV3IFRIUkVFLkNvbG9yKDAuMTM1LCAwLjY1OSwgMC41MTgpXSxcclxuXHRcdFswLjcsIG5ldyBUSFJFRS5Db2xvcigwLjI2NywgMC43NDksIDAuNDQxKV0sXHJcblx0XHRbMC44LCBuZXcgVEhSRUUuQ29sb3IoMC40NzgsIDAuODIxLCAwLjMxOCldLFxyXG5cdFx0WzAuOSwgbmV3IFRIUkVFLkNvbG9yKDAuNzQxLCAwLjg3MywgMC4xNTApXSxcclxuXHRcdFsxLjAsIG5ldyBUSFJFRS5Db2xvcigwLjk5MywgMC45MDYsIDAuMTQ0KV1cclxuXHRdLFxyXG5cdElORkVSTk86IFtcclxuXHRcdFswLjAsIG5ldyBUSFJFRS5Db2xvcigwLjA3NywgMC4wNDIsIDAuMjA2KV0sXHJcblx0XHRbMC4xLCBuZXcgVEhSRUUuQ29sb3IoMC4yMjUsIDAuMDM2LCAwLjM4OCldLFxyXG5cdFx0WzAuMiwgbmV3IFRIUkVFLkNvbG9yKDAuMzczLCAwLjA3NCwgMC40MzIpXSxcclxuXHRcdFswLjMsIG5ldyBUSFJFRS5Db2xvcigwLjUyMiwgMC4xMjgsIDAuNDIwKV0sXHJcblx0XHRbMC40LCBuZXcgVEhSRUUuQ29sb3IoMC42NjUsIDAuMTgyLCAwLjM3MCldLFxyXG5cdFx0WzAuNSwgbmV3IFRIUkVFLkNvbG9yKDAuNzk3LCAwLjI1NSwgMC4yODcpXSxcclxuXHRcdFswLjYsIG5ldyBUSFJFRS5Db2xvcigwLjkwMiwgMC4zNjQsIDAuMTg0KV0sXHJcblx0XHRbMC43LCBuZXcgVEhSRUUuQ29sb3IoMC45NjksIDAuNTE2LCAwLjA2MyldLFxyXG5cdFx0WzAuOCwgbmV3IFRIUkVFLkNvbG9yKDAuOTg4LCAwLjY4MywgMC4wNzIpXSxcclxuXHRcdFswLjksIG5ldyBUSFJFRS5Db2xvcigwLjk2MSwgMC44NTksIDAuMjk4KV0sXHJcblx0XHRbMS4wLCBuZXcgVEhSRUUuQ29sb3IoMC45ODgsIDAuOTk4LCAwLjY0NSldXHJcblx0XSxcclxuXHRHUkFZU0NBTEU6IFtcclxuXHRcdFswLCBuZXcgVEhSRUUuQ29sb3IoMCwgMCwgMCldLFxyXG5cdFx0WzEsIG5ldyBUSFJFRS5Db2xvcigxLCAxLCAxKV1cclxuXHRdXHJcbn07XHJcblxyXG5leHBvcnQge0dyYWRpZW50c307XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIFBvaW50QXR0cmlidXRlTmFtZXMgPVxyXG57XHJcblx0UE9TSVRJT05fQ0FSVEVTSUFOOiAwLCAvL2Zsb2F0IHgsIHksIHosXHJcblx0Q09MT1JfUEFDS0VEOiAxLCAvL2J5dGUgciwgZywgYiwgYSwgSTogWzAsMV1cclxuXHRDT0xPUl9GTE9BVFNfMTogMiwgLy9mbG9hdCByLCBnLCBiLCBJOiBbMCwxXVxyXG5cdENPTE9SX0ZMT0FUU18yNTU6IDMsIC8vZmxvYXQgciwgZywgYiwgSTogWzAsMjU1XVxyXG5cdE5PUk1BTF9GTE9BVFM6IDQsIC8vZmxvYXQgeCwgeSwgeixcclxuXHRGSUxMRVI6IDUsXHJcblx0SU5URU5TSVRZOiA2LFxyXG5cdENMQVNTSUZJQ0FUSU9OOiA3LFxyXG5cdE5PUk1BTF9TUEhFUkVNQVBQRUQ6IDgsXHJcblx0Tk9STUFMX09DVDE2OiA5LFxyXG5cdE5PUk1BTDogMTAsXHJcblx0UkVUVVJOX05VTUJFUjogMTEsXHJcblx0TlVNQkVSX09GX1JFVFVSTlM6IDEyLFxyXG5cdFNPVVJDRV9JRDogMTMsXHJcblx0SU5ESUNFUzogMTQsXHJcblx0U1BBQ0lORzogMTVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTb21lIHR5cGVzIG9mIHBvc3NpYmxlIHBvaW50IGF0dHJpYnV0ZSBkYXRhIGZvcm1hdHNcclxuICpcclxuICogQGNsYXNzXHJcbiAqL1xyXG52YXIgUG9pbnRBdHRyaWJ1dGVUeXBlcyA9XHJcbntcclxuXHREQVRBX1RZUEVfRE9VQkxFOlxyXG5cdHtcclxuXHRcdG9yZGluYWw6IDAsXHJcblx0XHRzaXplOiA4XHJcblx0fSxcclxuXHREQVRBX1RZUEVfRkxPQVQ6XHJcblx0e1xyXG5cdFx0b3JkaW5hbDogMSxcclxuXHRcdHNpemU6IDRcclxuXHR9LFxyXG5cdERBVEFfVFlQRV9JTlQ4OlxyXG5cdHtcclxuXHRcdG9yZGluYWw6IDIsXHJcblx0XHRzaXplOiAxXHJcblx0fSxcclxuXHREQVRBX1RZUEVfVUlOVDg6XHJcblx0e1xyXG5cdFx0b3JkaW5hbDogMyxcclxuXHRcdHNpemU6IDFcclxuXHR9LFxyXG5cdERBVEFfVFlQRV9JTlQxNjpcclxuXHR7XHJcblx0XHRvcmRpbmFsOiA0LFxyXG5cdFx0c2l6ZTogMlxyXG5cdH0sXHJcblx0REFUQV9UWVBFX1VJTlQxNjpcclxuXHR7XHJcblx0XHRvcmRpbmFsOiA1LFxyXG5cdFx0c2l6ZTogMlxyXG5cdH0sXHJcblx0REFUQV9UWVBFX0lOVDMyOlxyXG5cdHtcclxuXHRcdG9yZGluYWw6IDYsXHJcblx0XHRzaXplOiA0XHJcblx0fSxcclxuXHREQVRBX1RZUEVfVUlOVDMyOlxyXG5cdHtcclxuXHRcdG9yZGluYWw6IDcsXHJcblx0XHRzaXplOiA0XHJcblx0fSxcclxuXHREQVRBX1RZUEVfSU5UNjQ6XHJcblx0e1xyXG5cdFx0b3JkaW5hbDogOCxcclxuXHRcdHNpemU6IDhcclxuXHR9LFxyXG5cdERBVEFfVFlQRV9VSU5UNjQ6XHJcblx0e1xyXG5cdFx0b3JkaW5hbDogOSxcclxuXHRcdHNpemU6IDhcclxuXHR9XHJcbn07XHJcblxyXG52YXIgaSA9IDA7XHJcbmZvcih2YXIgb2JqIGluIFBvaW50QXR0cmlidXRlVHlwZXMpXHJcbntcclxuXHRQb2ludEF0dHJpYnV0ZVR5cGVzW2ldID0gUG9pbnRBdHRyaWJ1dGVUeXBlc1tvYmpdO1xyXG5cdGkrKztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc2luZ2xlIHBvaW50IGF0dHJpYnV0ZSBzdWNoIGFzIGNvbG9yL25vcm1hbC8uLiBhbmQgaXRzIGRhdGEgZm9ybWF0L251bWJlciBvZiBlbGVtZW50cy8uLi5cclxuICovXHJcbmZ1bmN0aW9uIFBvaW50QXR0cmlidXRlKG5hbWUsIHR5cGUsIG51bUVsZW1lbnRzKVxyXG57XHJcblx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdHRoaXMubnVtRWxlbWVudHMgPSBudW1FbGVtZW50cztcclxuXHR0aGlzLmJ5dGVTaXplID0gdGhpcy5udW1FbGVtZW50cyAqIHRoaXMudHlwZS5zaXplO1xyXG59O1xyXG5cclxuUG9pbnRBdHRyaWJ1dGUuUE9TSVRJT05fQ0FSVEVTSUFOID0gbmV3IFBvaW50QXR0cmlidXRlKFBvaW50QXR0cmlidXRlTmFtZXMuUE9TSVRJT05fQ0FSVEVTSUFOLCBQb2ludEF0dHJpYnV0ZVR5cGVzLkRBVEFfVFlQRV9GTE9BVCwgMyk7XHJcblBvaW50QXR0cmlidXRlLlJHQkFfUEFDS0VEID0gbmV3IFBvaW50QXR0cmlidXRlKFBvaW50QXR0cmlidXRlTmFtZXMuQ09MT1JfUEFDS0VELCBQb2ludEF0dHJpYnV0ZVR5cGVzLkRBVEFfVFlQRV9JTlQ4LCA0KTtcclxuUG9pbnRBdHRyaWJ1dGUuQ09MT1JfUEFDS0VEID0gUG9pbnRBdHRyaWJ1dGUuUkdCQV9QQUNLRUQ7XHJcblBvaW50QXR0cmlidXRlLlJHQl9QQUNLRUQgPSBuZXcgUG9pbnRBdHRyaWJ1dGUoUG9pbnRBdHRyaWJ1dGVOYW1lcy5DT0xPUl9QQUNLRUQsIFBvaW50QXR0cmlidXRlVHlwZXMuREFUQV9UWVBFX0lOVDgsIDMpO1xyXG5Qb2ludEF0dHJpYnV0ZS5OT1JNQUxfRkxPQVRTID0gbmV3IFBvaW50QXR0cmlidXRlKFBvaW50QXR0cmlidXRlTmFtZXMuTk9STUFMX0ZMT0FUUywgUG9pbnRBdHRyaWJ1dGVUeXBlcy5EQVRBX1RZUEVfRkxPQVQsIDMpO1xyXG5Qb2ludEF0dHJpYnV0ZS5GSUxMRVJfMUIgPSBuZXcgUG9pbnRBdHRyaWJ1dGUoUG9pbnRBdHRyaWJ1dGVOYW1lcy5GSUxMRVIsIFBvaW50QXR0cmlidXRlVHlwZXMuREFUQV9UWVBFX1VJTlQ4LCAxKTtcclxuUG9pbnRBdHRyaWJ1dGUuSU5URU5TSVRZID0gbmV3IFBvaW50QXR0cmlidXRlKFBvaW50QXR0cmlidXRlTmFtZXMuSU5URU5TSVRZLCBQb2ludEF0dHJpYnV0ZVR5cGVzLkRBVEFfVFlQRV9VSU5UMTYsIDEpO1xyXG5Qb2ludEF0dHJpYnV0ZS5DTEFTU0lGSUNBVElPTiA9IG5ldyBQb2ludEF0dHJpYnV0ZShQb2ludEF0dHJpYnV0ZU5hbWVzLkNMQVNTSUZJQ0FUSU9OLCBQb2ludEF0dHJpYnV0ZVR5cGVzLkRBVEFfVFlQRV9VSU5UOCwgMSk7XHJcblBvaW50QXR0cmlidXRlLk5PUk1BTF9TUEhFUkVNQVBQRUQgPSBuZXcgUG9pbnRBdHRyaWJ1dGUoUG9pbnRBdHRyaWJ1dGVOYW1lcy5OT1JNQUxfU1BIRVJFTUFQUEVELCBQb2ludEF0dHJpYnV0ZVR5cGVzLkRBVEFfVFlQRV9VSU5UOCwgMik7XHJcblBvaW50QXR0cmlidXRlLk5PUk1BTF9PQ1QxNiA9IG5ldyBQb2ludEF0dHJpYnV0ZShQb2ludEF0dHJpYnV0ZU5hbWVzLk5PUk1BTF9PQ1QxNiwgUG9pbnRBdHRyaWJ1dGVUeXBlcy5EQVRBX1RZUEVfVUlOVDgsIDIpO1xyXG5Qb2ludEF0dHJpYnV0ZS5OT1JNQUwgPSBuZXcgUG9pbnRBdHRyaWJ1dGUoUG9pbnRBdHRyaWJ1dGVOYW1lcy5OT1JNQUwsIFBvaW50QXR0cmlidXRlVHlwZXMuREFUQV9UWVBFX0ZMT0FULCAzKTtcclxuUG9pbnRBdHRyaWJ1dGUuUkVUVVJOX05VTUJFUiA9IG5ldyBQb2ludEF0dHJpYnV0ZShQb2ludEF0dHJpYnV0ZU5hbWVzLlJFVFVSTl9OVU1CRVIsIFBvaW50QXR0cmlidXRlVHlwZXMuREFUQV9UWVBFX1VJTlQ4LCAxKTtcclxuUG9pbnRBdHRyaWJ1dGUuTlVNQkVSX09GX1JFVFVSTlMgPSBuZXcgUG9pbnRBdHRyaWJ1dGUoUG9pbnRBdHRyaWJ1dGVOYW1lcy5OVU1CRVJfT0ZfUkVUVVJOUywgUG9pbnRBdHRyaWJ1dGVUeXBlcy5EQVRBX1RZUEVfVUlOVDgsIDEpO1xyXG5Qb2ludEF0dHJpYnV0ZS5TT1VSQ0VfSUQgPSBuZXcgUG9pbnRBdHRyaWJ1dGUoUG9pbnRBdHRyaWJ1dGVOYW1lcy5TT1VSQ0VfSUQsIFBvaW50QXR0cmlidXRlVHlwZXMuREFUQV9UWVBFX1VJTlQ4LCAxKTtcclxuUG9pbnRBdHRyaWJ1dGUuSU5ESUNFUyA9IG5ldyBQb2ludEF0dHJpYnV0ZShQb2ludEF0dHJpYnV0ZU5hbWVzLklORElDRVMsIFBvaW50QXR0cmlidXRlVHlwZXMuREFUQV9UWVBFX1VJTlQzMiwgMSk7XHJcblBvaW50QXR0cmlidXRlLlNQQUNJTkcgPSBuZXcgUG9pbnRBdHRyaWJ1dGUoUG9pbnRBdHRyaWJ1dGVOYW1lcy5TUEFDSU5HLCBQb2ludEF0dHJpYnV0ZVR5cGVzLkRBVEFfVFlQRV9GTE9BVCwgMSk7XHJcblxyXG4vKipcclxuICogT3JkZXJlZCBsaXN0IG9mIFBvaW50QXR0cmlidXRlcyB1c2VkIHRvIGlkZW50aWZ5IGhvdyBwb2ludHMgYXJlIGFsaWduZWQgaW4gYSBidWZmZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBQb2ludEF0dHJpYnV0ZXMocG9pbnRBdHRyaWJ1dGVzKVxyXG57XHJcblx0dGhpcy5hdHRyaWJ1dGVzID0gW107XHJcblx0dGhpcy5ieXRlU2l6ZSA9IDA7XHJcblx0dGhpcy5zaXplID0gMDtcclxuXHJcblx0aWYocG9pbnRBdHRyaWJ1dGVzICE9IG51bGwpXHJcblx0e1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHBvaW50QXR0cmlidXRlcy5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0dmFyIHBvaW50QXR0cmlidXRlTmFtZSA9IHBvaW50QXR0cmlidXRlc1tpXTtcclxuXHRcdFx0dmFyIHBvaW50QXR0cmlidXRlID0gUG9pbnRBdHRyaWJ1dGVbcG9pbnRBdHRyaWJ1dGVOYW1lXTtcclxuXHRcdFx0dGhpcy5hdHRyaWJ1dGVzLnB1c2gocG9pbnRBdHRyaWJ1dGUpO1xyXG5cdFx0XHR0aGlzLmJ5dGVTaXplICs9IHBvaW50QXR0cmlidXRlLmJ5dGVTaXplO1xyXG5cdFx0XHR0aGlzLnNpemUrKztcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5Qb2ludEF0dHJpYnV0ZXMucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHBvaW50QXR0cmlidXRlKVxyXG57XHJcblx0dGhpcy5hdHRyaWJ1dGVzLnB1c2gocG9pbnRBdHRyaWJ1dGUpO1xyXG5cdHRoaXMuYnl0ZVNpemUgKz0gcG9pbnRBdHRyaWJ1dGUuYnl0ZVNpemU7XHJcblx0dGhpcy5zaXplKys7XHJcbn07XHJcblxyXG5Qb2ludEF0dHJpYnV0ZXMucHJvdG90eXBlLmhhc0NvbG9ycyA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGZvcih2YXIgbmFtZSBpbiB0aGlzLmF0dHJpYnV0ZXMpXHJcblx0e1xyXG5cdFx0dmFyIHBvaW50QXR0cmlidXRlID0gdGhpcy5hdHRyaWJ1dGVzW25hbWVdO1xyXG5cdFx0aWYocG9pbnRBdHRyaWJ1dGUubmFtZSA9PT0gUG9pbnRBdHRyaWJ1dGVOYW1lcy5DT0xPUl9QQUNLRUQpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuUG9pbnRBdHRyaWJ1dGVzLnByb3RvdHlwZS5oYXNOb3JtYWxzID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Zm9yKHZhciBuYW1lIGluIHRoaXMuYXR0cmlidXRlcylcclxuXHR7XHJcblx0XHR2YXIgcG9pbnRBdHRyaWJ1dGUgPSB0aGlzLmF0dHJpYnV0ZXNbbmFtZV07XHJcblx0XHRpZihwb2ludEF0dHJpYnV0ZSA9PT0gUG9pbnRBdHRyaWJ1dGUuTk9STUFMX1NQSEVSRU1BUFBFRCB8fCBwb2ludEF0dHJpYnV0ZSA9PT0gUG9pbnRBdHRyaWJ1dGUuTk9STUFMX0ZMT0FUUyB8fCBwb2ludEF0dHJpYnV0ZSA9PT0gUG9pbnRBdHRyaWJ1dGUuTk9STUFMIHx8IHBvaW50QXR0cmlidXRlID09PSBQb2ludEF0dHJpYnV0ZS5OT1JNQUxfT0NUMTYpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IHtQb2ludEF0dHJpYnV0ZSwgUG9pbnRBdHRyaWJ1dGVzLCBQb2ludEF0dHJpYnV0ZU5hbWVzLCBQb2ludEF0dHJpYnV0ZVR5cGVzfTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuY2xhc3MgUG9pbnRzXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0dGhpcy5ib3VuZGluZ0JveCA9IG5ldyBUSFJFRS5Cb3gzKCk7XHJcblx0XHR0aGlzLm51bVBvaW50cyA9IDA7XHJcblx0XHR0aGlzLmRhdGEgPSB7fTtcclxuXHR9XHJcblxyXG5cdGFkZChwb2ludHMpXHJcblx0e1xyXG5cdFx0dmFyIGN1cnJlbnRTaXplID0gdGhpcy5udW1Qb2ludHM7XHJcblx0XHR2YXIgYWRkaXRpb25hbFNpemUgPSBwb2ludHMubnVtUG9pbnRzO1xyXG5cdFx0dmFyIG5ld1NpemUgPSBjdXJyZW50U2l6ZSArIGFkZGl0aW9uYWxTaXplO1xyXG5cclxuXHRcdHZhciB0aGlzQXR0cmlidXRlcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSk7XHJcblx0XHR2YXIgb3RoZXJBdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMocG9pbnRzLmRhdGEpO1xyXG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBuZXcgU2V0KFsuLi50aGlzQXR0cmlidXRlcywgLi4ub3RoZXJBdHRyaWJ1dGVzXSk7XHJcblxyXG5cdFx0Zm9yKHZhciBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcylcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpc0F0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlKSAmJiBvdGhlckF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vYXR0cmlidXRlIGluIGJvdGgsIG1lcmdlXHJcblx0XHRcdFx0dmFyIFR5cGUgPSB0aGlzLmRhdGFbYXR0cmlidXRlXS5jb25zdHJ1Y3RvcjtcclxuXHRcdFx0XHR2YXIgbWVyZ2VkID0gbmV3IFR5cGUodGhpcy5kYXRhW2F0dHJpYnV0ZV0ubGVuZ3RoICsgcG9pbnRzLmRhdGFbYXR0cmlidXRlXS5sZW5ndGgpO1xyXG5cdFx0XHRcdG1lcmdlZC5zZXQodGhpcy5kYXRhW2F0dHJpYnV0ZV0sIDApO1xyXG5cdFx0XHRcdG1lcmdlZC5zZXQocG9pbnRzLmRhdGFbYXR0cmlidXRlXSwgdGhpcy5kYXRhW2F0dHJpYnV0ZV0ubGVuZ3RoKTtcclxuXHRcdFx0XHR0aGlzLmRhdGFbYXR0cmlidXRlXSA9IG1lcmdlZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKHRoaXNBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJpYnV0ZSkgJiYgIW90aGVyQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyaWJ1dGUpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly9hdHRyaWJ1dGUgb25seSBpbiB0aGlzOyB0YWtlIG92ZXIgdGhpcyBhbmQgZXhwYW5kIHRvIG5ldyBzaXplXHJcblx0XHRcdFx0dmFyIGVsZW1lbnRzUGVyUG9pbnQgPSB0aGlzLmRhdGFbYXR0cmlidXRlXS5sZW5ndGggLyB0aGlzLm51bVBvaW50cztcclxuXHRcdFx0XHR2YXIgVHlwZSA9IHRoaXMuZGF0YVthdHRyaWJ1dGVdLmNvbnN0cnVjdG9yO1xyXG5cdFx0XHRcdHZhciBleHBhbmRlZCA9IG5ldyBUeXBlKGVsZW1lbnRzUGVyUG9pbnQgKiBuZXdTaXplKTtcclxuXHRcdFx0XHRleHBhbmRlZC5zZXQodGhpcy5kYXRhW2F0dHJpYnV0ZV0sIDApO1xyXG5cdFx0XHRcdHRoaXMuZGF0YVthdHRyaWJ1dGVdID0gZXhwYW5kZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZighdGhpc0F0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlKSAmJiBvdGhlckF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vYXR0cmlidXRlIG9ubHkgaW4gcG9pbnRzIHRvIGJlIGFkZGVkOyB0YWtlIG92ZXIgbmV3IHBvaW50cyBhbmQgZXhwYW5kIHRvIG5ldyBzaXplXHJcblx0XHRcdFx0dmFyIGVsZW1lbnRzUGVyUG9pbnQgPSBwb2ludHMuZGF0YVthdHRyaWJ1dGVdLmxlbmd0aCAvIHBvaW50cy5udW1Qb2ludHM7XHJcblx0XHRcdFx0dmFyIFR5cGUgPSBwb2ludHMuZGF0YVthdHRyaWJ1dGVdLmNvbnN0cnVjdG9yO1xyXG5cdFx0XHRcdHZhciBleHBhbmRlZCA9IG5ldyBUeXBlKGVsZW1lbnRzUGVyUG9pbnQgKiBuZXdTaXplKTtcclxuXHRcdFx0XHRleHBhbmRlZC5zZXQocG9pbnRzLmRhdGFbYXR0cmlidXRlXSwgZWxlbWVudHNQZXJQb2ludCAqIGN1cnJlbnRTaXplKTtcclxuXHRcdFx0XHR0aGlzLmRhdGFbYXR0cmlidXRlXSA9IGV4cGFuZGVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5udW1Qb2ludHMgPSBuZXdTaXplO1xyXG5cclxuXHRcdHRoaXMuYm91bmRpbmdCb3gudW5pb24ocG9pbnRzLmJvdW5kaW5nQm94KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQge1BvaW50c307XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuaW1wb3J0IHsgR3JleWhvdW5kTG9hZGVyIH0gZnJvbSBcIi4vbG9hZGVycy9HcmV5aG91bmRMb2FkZXIuanNcIjtcclxuaW1wb3J0IHsgUE9DTG9hZGVyIH0gZnJvbSBcIi4vbG9hZGVycy9QT0NMb2FkZXIuanNcIjtcclxuaW1wb3J0IHsgRXB0TG9hZGVyIH0gZnJvbSBcIi4vbG9hZGVycy9FcHRMb2FkZXIuanNcIjtcclxuaW1wb3J0IHsgUG9pbnRDbG91ZE9jdHJlZSB9IGZyb20gXCIuL3BvaW50Y2xvdWQvUG9pbnRDbG91ZE9jdHJlZS5qc1wiO1xyXG5pbXBvcnQgeyBQb2ludENsb3VkQXJlbmE0RCB9IGZyb20gXCIuL3BvaW50Y2xvdWQvUG9pbnRDbG91ZEFyZW5hNEQuanNcIjtcclxuaW1wb3J0IHsgUG9pbnRDbG91ZEFyZW5hNERHZW9tZXRyeSB9IGZyb20gXCIuL3BvaW50Y2xvdWQvZ2VvbWV0cmllcy9Qb2ludENsb3VkQXJlbmE0REdlb21ldHJ5LmpzXCI7XHJcbmltcG9ydCB7IEJpbmFyeUhlYXAgfSBmcm9tIFwiLi9saWIvQmluYXJ5SGVhcC5qc1wiO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi9HbG9iYWwuanNcIjtcclxuXHJcbnZhciBBdHRyaWJ1dGVMb2NhdGlvbnMgPVxyXG57XHJcbiAgcG9zaXRpb246IDAsXHJcbiAgY29sb3I6IDEsXHJcbiAgaW50ZW5zaXR5OiAyLFxyXG4gIGNsYXNzaWZpY2F0aW9uOiAzLFxyXG4gIHJldHVybk51bWJlcjogNCxcclxuICBudW1iZXJPZlJldHVybnM6IDUsXHJcbiAgcG9pbnRTb3VyY2VJRDogNixcclxuICBpbmRpY2VzOiA3LFxyXG4gIG5vcm1hbDogOCxcclxuICBzcGFjaW5nOiA5LFxyXG59O1xyXG5cclxudmFyIENsYXNzaWZpY2F0aW9uID1cclxue1xyXG4gIERFRkFVTFQ6XHJcbiAge1xyXG4gICAgMDogbmV3IFRIUkVFLlZlY3RvcjQoMC41LCAwLjUsIDAuNSwgMS4wKSxcclxuICAgIDE6IG5ldyBUSFJFRS5WZWN0b3I0KDAuNSwgMC41LCAwLjUsIDEuMCksXHJcbiAgICAyOiBuZXcgVEhSRUUuVmVjdG9yNCgwLjYzLCAwLjMyLCAwLjE4LCAxLjApLFxyXG4gICAgMzogbmV3IFRIUkVFLlZlY3RvcjQoMC4wLCAxLjAsIDAuMCwgMS4wKSxcclxuICAgIDQ6IG5ldyBUSFJFRS5WZWN0b3I0KDAuMCwgMC44LCAwLjAsIDEuMCksXHJcbiAgICA1OiBuZXcgVEhSRUUuVmVjdG9yNCgwLjAsIDAuNiwgMC4wLCAxLjApLFxyXG4gICAgNjogbmV3IFRIUkVFLlZlY3RvcjQoMS4wLCAwLjY2LCAwLjAsIDEuMCksXHJcbiAgICA3OiBuZXcgVEhSRUUuVmVjdG9yNCgxLjAsIDAsIDEuMCwgMS4wKSxcclxuICAgIDg6IG5ldyBUSFJFRS5WZWN0b3I0KDEuMCwgMCwgMC4wLCAxLjApLFxyXG4gICAgOTogbmV3IFRIUkVFLlZlY3RvcjQoMC4wLCAwLjAsIDEuMCwgMS4wKSxcclxuICAgIDEyOiBuZXcgVEhSRUUuVmVjdG9yNCgxLjAsIDEuMCwgMC4wLCAxLjApLFxyXG4gICAgREVGQVVMVDogbmV3IFRIUkVFLlZlY3RvcjQoMC4zLCAwLjYsIDAuNiwgMC41KVxyXG4gIH1cclxufTtcclxuXHJcbnZhciBQb2ludFNpemVUeXBlID1cclxue1xyXG4gIEZJWEVEOiAwLFxyXG4gIEFUVEVOVUFURUQ6IDEsXHJcbiAgQURBUFRJVkU6IDJcclxufTtcclxuXHJcbnZhciBQb2ludFNoYXBlID1cclxue1xyXG4gIFNRVUFSRTogMCxcclxuICBDSVJDTEU6IDEsXHJcbiAgUEFSQUJPTE9JRDogMlxyXG59O1xyXG5cclxudmFyIFBvaW50Q29sb3JUeXBlID1cclxue1xyXG4gIFJHQjogMCxcclxuICBDT0xPUjogMSxcclxuICBERVBUSDogMixcclxuICBIRUlHSFQ6IDMsXHJcbiAgRUxFVkFUSU9OOiAzLFxyXG4gIElOVEVOU0lUWTogNCxcclxuICBJTlRFTlNJVFlfR1JBRElFTlQ6IDUsXHJcbiAgTE9EOiA2LFxyXG4gIExFVkVMX09GX0RFVEFJTDogNixcclxuICBQT0lOVF9JTkRFWDogNyxcclxuICBDTEFTU0lGSUNBVElPTjogOCxcclxuICBSRVRVUk5fTlVNQkVSOiA5LFxyXG4gIFNPVVJDRTogMTAsXHJcbiAgTk9STUFMOiAxMSxcclxuICBQSE9ORzogMTIsXHJcbiAgUkdCX0hFSUdIVDogMTMsXHJcbiAgQ09NUE9TSVRFOiA1MFxyXG59O1xyXG5cclxudmFyIFRyZWVUeXBlID1cclxue1xyXG4gIE9DVFJFRTogMCxcclxuICBLRFRSRUU6IDFcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRQb2ludENsb3VkKHBhdGgsIG5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgdmFyIGxvYWRlZCA9IGZ1bmN0aW9uIChwb2ludGNsb3VkKSB7XHJcbiAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBvaW50Y2xvdWQubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbGJhY2soXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcInBvaW50Y2xvdWRfbG9hZGVkXCIsXHJcbiAgICAgICAgcG9pbnRjbG91ZDogcG9pbnRjbG91ZFxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL0dyZXlob3VuZCBwb2ludGNsb3VkIHNlcnZlciBVUkwuXHJcbiAgaWYgKHBhdGguaW5kZXhPZihcImdyZXlob3VuZDovL1wiKSA9PT0gMCkge1xyXG4gICAgR3JleWhvdW5kTG9hZGVyLmxvYWQocGF0aCwgZnVuY3Rpb24gKGdlb21ldHJ5KSB7XHJcbiAgICAgIGlmIChnZW9tZXRyeSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbG9hZGVkKG5ldyBQb2ludENsb3VkT2N0cmVlKGdlb21ldHJ5KSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvL1BvdHJlZSBwb2ludCBjbG91ZFxyXG4gIGVsc2UgaWYgKHBhdGguaW5kZXhPZihcImNsb3VkLmpzXCIpID4gMCkge1xyXG4gICAgUE9DTG9hZGVyLmxvYWQocGF0aCwgZnVuY3Rpb24gKGdlb21ldHJ5KSB7XHJcbiAgICAgIGlmIChnZW9tZXRyeSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbG9hZGVkKG5ldyBQb2ludENsb3VkT2N0cmVlKGdlb21ldHJ5KSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBlbHNlIGlmIChwYXRoLmluZGV4T2YoJ2VwdC5qc29uJykgPiAwKSB7XHJcbiAgICBFcHRMb2FkZXIubG9hZChwYXRoLCBmdW5jdGlvbiAoZ2VvbWV0cnkpIHtcclxuICAgICAgaWYgKGdlb21ldHJ5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsb2FkZWQobmV3IFBvaW50Q2xvdWRPY3RyZWUoZ2VvbWV0cnkpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vQXJlbmEgNEQgcG9pbnQgY2xvdWRcclxuICBlbHNlIGlmIChwYXRoLmluZGV4T2YoXCIudnBjXCIpID4gMCkge1xyXG4gICAgUG9pbnRDbG91ZEFyZW5hNERHZW9tZXRyeS5sb2FkKHBhdGgsIGZ1bmN0aW9uIChnZW9tZXRyeSkge1xyXG4gICAgICBpZiAoZ2VvbWV0cnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxvYWRlZChuZXcgUG9pbnRDbG91ZEFyZW5hNEQoZ2VvbWV0cnkpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUG90cmVlOiBGYWlsZWQgdG8gbG9hZCBwb2ludCBjbG91ZCBmcm9tIFVSTCBcIiArIHBhdGgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVmlzaWJpbGl0eShwb2ludGNsb3VkcywgY2FtZXJhLCByZW5kZXJlciwgdG90YWxQb2ludEJ1ZGdldCkge1xyXG4gIHZhciBudW1WaXNpYmxlTm9kZXMgPSAwO1xyXG4gIHZhciBudW1WaXNpYmxlUG9pbnRzID0gMDtcclxuICB2YXIgbnVtVmlzaWJsZVBvaW50c0luUG9pbnRjbG91ZHMgPSBuZXcgTWFwKHBvaW50Y2xvdWRzLm1hcChwYyA9PiBbcGMsIDBdKSk7XHJcbiAgdmFyIHZpc2libGVOb2RlcyA9IFtdO1xyXG4gIHZhciB2aXNpYmxlR2VvbWV0cnkgPSBbXTtcclxuICB2YXIgdW5sb2FkZWRHZW9tZXRyeSA9IFtdO1xyXG4gIHZhciBsb3dlc3RTcGFjaW5nID0gSW5maW5pdHk7XHJcblxyXG4gIC8vQ2FsY3VsYXRlIG9iamVjdCBzcGFjZSBmcnVzdHVtIGFuZCBjYW0gcG9zIGFuZCBzZXR1cCBwcmlvcml0eSBxdWV1ZVxyXG4gIHZhciBzdHJ1Y3R1cmVzID0gdXBkYXRlVmlzaWJpbGl0eVN0cnVjdHVyZXMocG9pbnRjbG91ZHMsIGNhbWVyYSwgcmVuZGVyZXIpO1xyXG4gIHZhciBmcnVzdHVtcyA9IHN0cnVjdHVyZXMuZnJ1c3R1bXM7XHJcbiAgdmFyIGNhbU9ialBvc2l0aW9ucyA9IHN0cnVjdHVyZXMuY2FtT2JqUG9zaXRpb25zO1xyXG4gIHZhciBwcmlvcml0eVF1ZXVlID0gc3RydWN0dXJlcy5wcmlvcml0eVF1ZXVlO1xyXG5cclxuICB2YXIgbG9hZGVkVG9HUFVUaGlzRnJhbWUgPSAwO1xyXG4gIHZhciBkb21XaWR0aCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgdmFyIGRvbUhlaWdodCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAvL0NoZWNrIGlmIHBvaW50Y2xvdWQgaGFzIGJlZW4gdHJhbnNmb3JtZWQsIHNvbWUgY29kZSB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgaWYgY2hhbmdlcyBoYXZlIGJlZW4gZGV0ZWN0ZWRcclxuICBpZiAoIUdsb2JhbC5wb2ludGNsb3VkVHJhbnNmb3JtVmVyc2lvbikge1xyXG4gICAgR2xvYmFsLnBvaW50Y2xvdWRUcmFuc2Zvcm1WZXJzaW9uID0gbmV3IE1hcCgpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHBvaW50Y2xvdWRUcmFuc2Zvcm1WZXJzaW9uID0gR2xvYmFsLnBvaW50Y2xvdWRUcmFuc2Zvcm1WZXJzaW9uO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50Y2xvdWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcG9pbnRjbG91ZCA9IHBvaW50Y2xvdWRzW2ldO1xyXG5cclxuICAgIGlmICghcG9pbnRjbG91ZC52aXNpYmxlKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHBvaW50Y2xvdWQudXBkYXRlTWF0cml4V29ybGQoKTtcclxuXHJcbiAgICBpZiAoIXBvaW50Y2xvdWRUcmFuc2Zvcm1WZXJzaW9uLmhhcyhwb2ludGNsb3VkKSkge1xyXG4gICAgICBwb2ludGNsb3VkVHJhbnNmb3JtVmVyc2lvbi5zZXQocG9pbnRjbG91ZCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBudW1iZXI6IDAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHBvaW50Y2xvdWQubWF0cml4V29ybGQuY2xvbmUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciB2ZXJzaW9uID0gcG9pbnRjbG91ZFRyYW5zZm9ybVZlcnNpb24uZ2V0KHBvaW50Y2xvdWQpO1xyXG4gICAgICBpZiAoIXZlcnNpb24udHJhbnNmb3JtLmVxdWFscyhwb2ludGNsb3VkLm1hdHJpeFdvcmxkKSkge1xyXG4gICAgICAgIHZlcnNpb24ubnVtYmVyKys7XHJcbiAgICAgICAgdmVyc2lvbi50cmFuc2Zvcm0uY29weShwb2ludGNsb3VkLm1hdHJpeFdvcmxkKTtcclxuXHJcbiAgICAgICAgcG9pbnRjbG91ZC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRyYW5zZm9ybWF0aW9uX2NoYW5nZWRcIixcclxuICAgICAgICAgICAgdGFyZ2V0OiBwb2ludGNsb3VkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9Qcm9jZXNzIHByaW9yaXR5IHF1ZXVlXHJcbiAgd2hpbGUgKHByaW9yaXR5UXVldWUuc2l6ZSgpID4gMCkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBwcmlvcml0eVF1ZXVlLnBvcCgpO1xyXG4gICAgdmFyIG5vZGUgPSBlbGVtZW50Lm5vZGU7XHJcbiAgICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnQ7XHJcbiAgICB2YXIgcG9pbnRjbG91ZCA9IHBvaW50Y2xvdWRzW2VsZW1lbnQucG9pbnRjbG91ZF07XHJcbiAgICB2YXIgYm94ID0gbm9kZS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgdmFyIGZydXN0dW0gPSBmcnVzdHVtc1tlbGVtZW50LnBvaW50Y2xvdWRdO1xyXG4gICAgdmFyIGNhbU9ialBvcyA9IGNhbU9ialBvc2l0aW9uc1tlbGVtZW50LnBvaW50Y2xvdWRdO1xyXG5cclxuICAgIHZhciBpbnNpZGVGcnVzdHVtID0gZnJ1c3R1bS5pbnRlcnNlY3RzQm94KGJveCk7XHJcbiAgICB2YXIgbWF4TGV2ZWwgPSBwb2ludGNsb3VkLm1heExldmVsIHx8IEluZmluaXR5O1xyXG4gICAgdmFyIGxldmVsID0gbm9kZS5nZXRMZXZlbCgpO1xyXG5cclxuICAgIHZhciB2aXNpYmxlID0gaW5zaWRlRnJ1c3R1bTtcclxuICAgIC8vIFdpdGhpbiAnZ2xvYmFsJyB0b3RhbCBidWRnZXQ/XHJcbiAgICB2aXNpYmxlID0gdmlzaWJsZSAmJiAobnVtVmlzaWJsZVBvaW50cyArIG5vZGUuZ2V0TnVtUG9pbnRzKCkgPD0gdG90YWxQb2ludEJ1ZGdldCk7XHJcbiAgICAvLyBXaXRoaW4gYnVkZ2V0IG9mIHRoZSBwb2ludCBjbG91ZD9cclxuICAgIHZpc2libGUgPSB2aXNpYmxlICYmICEobnVtVmlzaWJsZVBvaW50c0luUG9pbnRjbG91ZHMuZ2V0KHBvaW50Y2xvdWQpICsgbm9kZS5nZXROdW1Qb2ludHMoKSA+IHBvaW50Y2xvdWQucG9pbnRCdWRnZXQpO1xyXG4gICAgdmlzaWJsZSA9IHZpc2libGUgJiYgbGV2ZWwgPCBtYXhMZXZlbDtcclxuXHJcbiAgICBpZiAobm9kZS5zcGFjaW5nKSB7XHJcbiAgICAgIGxvd2VzdFNwYWNpbmcgPSBNYXRoLm1pbihsb3dlc3RTcGFjaW5nLCBub2RlLnNwYWNpbmcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobm9kZS5nZW9tZXRyeU5vZGUgJiYgbm9kZS5nZW9tZXRyeU5vZGUuc3BhY2luZykge1xyXG4gICAgICBsb3dlc3RTcGFjaW5nID0gTWF0aC5taW4obG93ZXN0U3BhY2luZywgbm9kZS5nZW9tZXRyeU5vZGUuc3BhY2luZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2aXNpYmxlKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG51bVZpc2libGVOb2RlcysrO1xyXG4gICAgbnVtVmlzaWJsZVBvaW50cyArPSBub2RlLmdldE51bVBvaW50cygpO1xyXG5cclxuICAgIHZhciBudW1WaXNpYmxlUG9pbnRzSW5Qb2ludGNsb3VkID0gbnVtVmlzaWJsZVBvaW50c0luUG9pbnRjbG91ZHMuZ2V0KHBvaW50Y2xvdWQpO1xyXG4gICAgbnVtVmlzaWJsZVBvaW50c0luUG9pbnRjbG91ZHMuc2V0KHBvaW50Y2xvdWQsIG51bVZpc2libGVQb2ludHNJblBvaW50Y2xvdWQgKyBub2RlLmdldE51bVBvaW50cygpKTtcclxuXHJcbiAgICBwb2ludGNsb3VkLm51bVZpc2libGVOb2RlcysrO1xyXG4gICAgcG9pbnRjbG91ZC5udW1WaXNpYmxlUG9pbnRzICs9IG5vZGUuZ2V0TnVtUG9pbnRzKCk7XHJcblxyXG4gICAgaWYgKG5vZGUuaXNHZW9tZXRyeU5vZGUoKSAmJiAoIXBhcmVudCB8fCBwYXJlbnQuaXNUcmVlTm9kZSgpKSkge1xyXG4gICAgICBpZiAobm9kZS5pc0xvYWRlZCgpICYmIGxvYWRlZFRvR1BVVGhpc0ZyYW1lIDwgR2xvYmFsLm1heE5vZGVzTG9hZEdQVUZyYW1lKSB7XHJcbiAgICAgICAgbm9kZSA9IHBvaW50Y2xvdWQudG9UcmVlTm9kZShub2RlLCBwYXJlbnQpO1xyXG4gICAgICAgIGxvYWRlZFRvR1BVVGhpc0ZyYW1lKys7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdW5sb2FkZWRHZW9tZXRyeS5wdXNoKG5vZGUpO1xyXG4gICAgICAgIHZpc2libGVHZW9tZXRyeS5wdXNoKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5vZGUuaXNUcmVlTm9kZSgpKSB7XHJcbiAgICAgIEdsb2JhbC5scnUudG91Y2gobm9kZS5nZW9tZXRyeU5vZGUpO1xyXG5cclxuICAgICAgbm9kZS5zY2VuZU5vZGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIG5vZGUuc2NlbmVOb2RlLm1hdGVyaWFsID0gcG9pbnRjbG91ZC5tYXRlcmlhbDtcclxuXHJcbiAgICAgIHZpc2libGVOb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICBwb2ludGNsb3VkLnZpc2libGVOb2Rlcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgaWYgKG5vZGUuX3RyYW5zZm9ybVZlcnNpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG5vZGUuX3RyYW5zZm9ybVZlcnNpb24gPSAtMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHRyYW5zZm9ybVZlcnNpb24gPSBwb2ludGNsb3VkVHJhbnNmb3JtVmVyc2lvbi5nZXQocG9pbnRjbG91ZCk7XHJcbiAgICAgIGlmIChub2RlLl90cmFuc2Zvcm1WZXJzaW9uICE9PSB0cmFuc2Zvcm1WZXJzaW9uLm51bWJlcikge1xyXG4gICAgICAgIG5vZGUuc2NlbmVOb2RlLnVwZGF0ZU1hdHJpeCgpO1xyXG4gICAgICAgIG5vZGUuc2NlbmVOb2RlLm1hdHJpeFdvcmxkLm11bHRpcGx5TWF0cmljZXMocG9pbnRjbG91ZC5tYXRyaXhXb3JsZCwgbm9kZS5zY2VuZU5vZGUubWF0cml4KTtcclxuICAgICAgICBub2RlLl90cmFuc2Zvcm1WZXJzaW9uID0gdHJhbnNmb3JtVmVyc2lvbi5udW1iZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwb2ludGNsb3VkLnNob3dCb3VuZGluZ0JveCAmJiAhbm9kZS5ib3VuZGluZ0JveE5vZGUgJiYgbm9kZS5nZXRCb3VuZGluZ0JveCkge1xyXG4gICAgICAgIHZhciBib3hIZWxwZXIgPSBuZXcgVEhSRUUuQm94M0hlbHBlcihub2RlLmdldEJvdW5kaW5nQm94KCkpO1xyXG4gICAgICAgIGJveEhlbHBlci5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgcG9pbnRjbG91ZC5ib3VuZGluZ0JveE5vZGVzLnB1c2goYm94SGVscGVyKTtcclxuICAgICAgICBub2RlLmJvdW5kaW5nQm94Tm9kZSA9IGJveEhlbHBlcjtcclxuICAgICAgICBub2RlLmJvdW5kaW5nQm94Tm9kZS5tYXRyaXguY29weShwb2ludGNsb3VkLm1hdHJpeFdvcmxkKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChwb2ludGNsb3VkLnNob3dCb3VuZGluZ0JveCkge1xyXG4gICAgICAgIG5vZGUuYm91bmRpbmdCb3hOb2RlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIG5vZGUuYm91bmRpbmdCb3hOb2RlLm1hdHJpeC5jb3B5KHBvaW50Y2xvdWQubWF0cml4V29ybGQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFwb2ludGNsb3VkLnNob3dCb3VuZGluZ0JveCAmJiBub2RlLmJvdW5kaW5nQm94Tm9kZSkge1xyXG4gICAgICAgIG5vZGUuYm91bmRpbmdCb3hOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vQWRkIGNoaWxkIG5vZGVzIHRvIHByaW9yaXR5UXVldWVcclxuICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgIHZhciB3ZWlnaHQgPSAwO1xyXG5cclxuICAgICAgLy9QZXJzcGVjdGl2ZSBjYW1lcmFcclxuICAgICAgaWYgKGNhbWVyYS5pc1BlcnNwZWN0aXZlQ2FtZXJhKSB7XHJcbiAgICAgICAgdmFyIHNwaGVyZSA9IGNoaWxkLmdldEJvdW5kaW5nU3BoZXJlKG5ldyBUSFJFRS5TcGhlcmUoKSk7XHJcbiAgICAgICAgdmFyIGNlbnRlciA9IHNwaGVyZS5jZW50ZXI7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gc3BoZXJlLmNlbnRlci5kaXN0YW5jZVRvKGNhbU9ialBvcyk7XHJcblxyXG4gICAgICAgIHZhciByYWRpdXMgPSBzcGhlcmUucmFkaXVzO1xyXG4gICAgICAgIHZhciBmb3YgPSAoY2FtZXJhLmZvdiAqIE1hdGguUEkpIC8gMTgwO1xyXG4gICAgICAgIHZhciBzbG9wZSA9IE1hdGgudGFuKGZvdiAvIDIpO1xyXG4gICAgICAgIHZhciBwcm9qRmFjdG9yID0gKDAuNSAqIGRvbUhlaWdodCkgLyAoc2xvcGUgKiBkaXN0YW5jZSk7XHJcbiAgICAgICAgdmFyIHNjcmVlblBpeGVsUmFkaXVzID0gcmFkaXVzICogcHJvakZhY3RvcjtcclxuXHJcbiAgICAgICAgLy9JZiBwaXhlbCByYWRpdXMgYmVsbG93IG1pbmltdW0gZGlzY2FyZFxyXG4gICAgICAgIGlmIChzY3JlZW5QaXhlbFJhZGl1cyA8IHBvaW50Y2xvdWQubWluaW11bU5vZGVQaXhlbFNpemUpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2VpZ2h0ID0gc2NyZWVuUGl4ZWxSYWRpdXM7XHJcblxyXG4gICAgICAgIC8vUmVhbGx5IGNsb3NlIHRvIHRoZSBjYW1lcmFcclxuICAgICAgICBpZiAoZGlzdGFuY2UgLSByYWRpdXMgPCAwKSB7XHJcbiAgICAgICAgICB3ZWlnaHQgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL09ydGhvZ3JhcGhpYyBjYW1lcmFcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy9UT0RPIDxJTVBST1ZFIFZJU0lCSUxJVFk+XHJcbiAgICAgICAgdmFyIGJiID0gY2hpbGQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSBjaGlsZC5nZXRCb3VuZGluZ1NwaGVyZShuZXcgVEhSRUUuU3BoZXJlKCkpLmNlbnRlci5kaXN0YW5jZVRvKGNhbU9ialBvcyk7XHJcbiAgICAgICAgdmFyIGRpYWdvbmFsID0gYmIubWF4LmNsb25lKCkuc3ViKGJiLm1pbikubGVuZ3RoKCk7XHJcbiAgICAgICAgd2VpZ2h0ID0gZGlhZ29uYWwgLyBkaXN0YW5jZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJpb3JpdHlRdWV1ZS5wdXNoKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBvaW50Y2xvdWQ6IGVsZW1lbnQucG9pbnRjbG91ZCxcclxuICAgICAgICAgIG5vZGU6IGNoaWxkLFxyXG4gICAgICAgICAgcGFyZW50OiBub2RlLFxyXG4gICAgICAgICAgd2VpZ2h0OiB3ZWlnaHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vVXBkYXRlIERFTVxyXG4gIHZhciBjYW5kaWRhdGVzID0gcG9pbnRjbG91ZHMuZmlsdGVyKHAgPT4gKHAuZ2VuZXJhdGVERU0gJiYgcC5kZW0gaW5zdGFuY2VvZiBERU0pKTtcclxuXHJcbiAgZm9yICh2YXIgcG9pbnRjbG91ZCBvZiBjYW5kaWRhdGVzKSB7XHJcbiAgICB2YXIgdXBkYXRpbmdOb2RlcyA9IHBvaW50Y2xvdWQudmlzaWJsZU5vZGVzLmZpbHRlcihuID0+IG4uZ2V0TGV2ZWwoKSA8PSBHbG9iYWwubWF4REVNTGV2ZWwpO1xyXG4gICAgcG9pbnRjbG91ZC5kZW0udXBkYXRlKHVwZGF0aW5nTm9kZXMpO1xyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBNYXRoLm1pbihHbG9iYWwubWF4Tm9kZXNMb2FkaW5nLCB1bmxvYWRlZEdlb21ldHJ5Lmxlbmd0aCk7IGkrKykge1xyXG4gICAgdW5sb2FkZWRHZW9tZXRyeVtpXS5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmlzaWJsZU5vZGVzOiB2aXNpYmxlTm9kZXMsXHJcbiAgICBudW1WaXNpYmxlUG9pbnRzOiBudW1WaXNpYmxlUG9pbnRzLFxyXG4gICAgbG93ZXN0U3BhY2luZzogbG93ZXN0U3BhY2luZ1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBvaW50Q2xvdWRzKHBvaW50Y2xvdWRzLCBjYW1lcmEsIHJlbmRlcmVyLCB0b3RhbFBvaW50QnVkZ2V0KSB7XHJcbiAgdmFyIHJlc3VsdCA9IHVwZGF0ZVZpc2liaWxpdHkocG9pbnRjbG91ZHMsIGNhbWVyYSwgcmVuZGVyZXIsIHRvdGFsUG9pbnRCdWRnZXQpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50Y2xvdWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwb2ludGNsb3Vkc1tpXS51cGRhdGVNYXRlcmlhbChwb2ludGNsb3Vkc1tpXS5tYXRlcmlhbCwgY2FtZXJhLCByZW5kZXJlcik7XHJcbiAgICBwb2ludGNsb3Vkc1tpXS51cGRhdGVWaXNpYmxlQm91bmRzKCk7XHJcbiAgfVxyXG5cclxuICBHbG9iYWwubHJ1LmZyZWVNZW1vcnkoKTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVmlzaWJpbGl0eVN0cnVjdHVyZXMocG9pbnRjbG91ZHMsIGNhbWVyYSwgcmVuZGVyZXIpIHtcclxuICB2YXIgZnJ1c3R1bXMgPSBbXTtcclxuICB2YXIgY2FtT2JqUG9zaXRpb25zID0gW107XHJcbiAgdmFyIHByaW9yaXR5UXVldWUgPSBuZXcgQmluYXJ5SGVhcChmdW5jdGlvbiAoeCkge1xyXG4gICAgcmV0dXJuIDEgLyB4LndlaWdodDtcclxuICB9KTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludGNsb3Vkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHBvaW50Y2xvdWQgPSBwb2ludGNsb3Vkc1tpXTtcclxuXHJcbiAgICBpZiAoIXBvaW50Y2xvdWQuaW5pdGlhbGl6ZWQoKSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBwb2ludGNsb3VkLm51bVZpc2libGVOb2RlcyA9IDA7XHJcbiAgICBwb2ludGNsb3VkLm51bVZpc2libGVQb2ludHMgPSAwO1xyXG4gICAgcG9pbnRjbG91ZC5kZWVwZXN0VmlzaWJsZUxldmVsID0gMDtcclxuICAgIHBvaW50Y2xvdWQudmlzaWJsZU5vZGVzID0gW107XHJcbiAgICBwb2ludGNsb3VkLnZpc2libGVHZW9tZXRyeSA9IFtdO1xyXG5cclxuICAgIC8vRnJ1c3R1bSBpbiBvYmplY3Qgc3BhY2VcclxuICAgIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xyXG4gICAgdmFyIGZydXN0dW0gPSBuZXcgVEhSRUUuRnJ1c3R1bSgpO1xyXG4gICAgdmFyIHZpZXdJID0gY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZTtcclxuICAgIHZhciB3b3JsZCA9IHBvaW50Y2xvdWQubWF0cml4V29ybGQ7XHJcblxyXG4gICAgLy9Vc2UgY2xvc2UgbmVhciBwbGFuZSBmb3IgZnJ1c3R1bSBpbnRlcnNlY3Rpb25cclxuICAgIHZhciBmcnVzdHVtQ2FtID0gY2FtZXJhLmNsb25lKCk7XHJcbiAgICBmcnVzdHVtQ2FtLm5lYXIgPSBjYW1lcmEubmVhcjsgLy9NYXRoLm1pbihjYW1lcmEubmVhciwgMC4xKTtcclxuICAgIGZydXN0dW1DYW0udXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgdmFyIHByb2ogPSBjYW1lcmEucHJvamVjdGlvbk1hdHJpeDtcclxuXHJcbiAgICB2YXIgZm0gPSBuZXcgVEhSRUUuTWF0cml4NCgpLm11bHRpcGx5KHByb2opLm11bHRpcGx5KHZpZXdJKS5tdWx0aXBseSh3b3JsZCk7XHJcbiAgICBmcnVzdHVtLnNldEZyb21Qcm9qZWN0aW9uTWF0cml4KGZtKTtcclxuICAgIGZydXN0dW1zLnB1c2goZnJ1c3R1bSk7XHJcblxyXG4gICAgLy9DYW1lcmEgcG9zaXRpb24gaW4gb2JqZWN0IHNwYWNlXHJcbiAgICB2YXIgdmlldyA9IGNhbWVyYS5tYXRyaXhXb3JsZDtcclxuICAgIC8vdmFyIHdvcmxkSSA9IG5ldyBUSFJFRS5NYXRyaXg0KCkuZ2V0SW52ZXJzZSh3b3JsZCk7XHJcbiAgICB2YXIgd29ybGRJID0gd29ybGQuY2xvbmUoKS5pbnZlcnQoKTtcclxuICAgIHZhciBjYW1NYXRyaXhPYmplY3QgPSBuZXcgVEhSRUUuTWF0cml4NCgpLm11bHRpcGx5KHdvcmxkSSkubXVsdGlwbHkodmlldyk7XHJcbiAgICB2YXIgY2FtT2JqUG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5zZXRGcm9tTWF0cml4UG9zaXRpb24oY2FtTWF0cml4T2JqZWN0KTtcclxuICAgIGNhbU9ialBvc2l0aW9ucy5wdXNoKGNhbU9ialBvcyk7XHJcblxyXG4gICAgaWYgKHBvaW50Y2xvdWQudmlzaWJsZSAmJiBwb2ludGNsb3VkLnJvb3QgIT09IG51bGwpIHtcclxuICAgICAgcHJpb3JpdHlRdWV1ZS5wdXNoKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBvaW50Y2xvdWQ6IGksXHJcbiAgICAgICAgICBub2RlOiBwb2ludGNsb3VkLnJvb3QsXHJcbiAgICAgICAgICB3ZWlnaHQ6IE51bWJlci5NQVhfVkFMVUVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL0hpZGUgYWxsIHByZXZpb3VzbHkgdmlzaWJsZSBub2Rlc1xyXG4gICAgaWYgKHBvaW50Y2xvdWQucm9vdC5pc1RyZWVOb2RlKCkpIHtcclxuICAgICAgcG9pbnRjbG91ZC5oaWRlRGVzY2VuZGFudHMocG9pbnRjbG91ZC5yb290LnNjZW5lTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludGNsb3VkLmJvdW5kaW5nQm94Tm9kZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgcG9pbnRjbG91ZC5ib3VuZGluZ0JveE5vZGVzW2pdLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmcnVzdHVtczogZnJ1c3R1bXMsXHJcbiAgICBjYW1PYmpQb3NpdGlvbnM6IGNhbU9ialBvc2l0aW9ucyxcclxuICAgIHByaW9yaXR5UXVldWU6IHByaW9yaXR5UXVldWVcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIEF0dHJpYnV0ZUxvY2F0aW9ucyxcclxuICBDbGFzc2lmaWNhdGlvbixcclxuICBQb2ludFNpemVUeXBlLFxyXG4gIFBvaW50U2hhcGUsXHJcbiAgUG9pbnRDb2xvclR5cGUsXHJcbiAgVHJlZVR5cGUsXHJcbiAgbG9hZFBvaW50Q2xvdWQsXHJcbiAgdXBkYXRlVmlzaWJpbGl0eSxcclxuICB1cGRhdGVQb2ludENsb3VkcyxcclxuICB1cGRhdGVWaXNpYmlsaXR5U3RydWN0dXJlc1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbnZhciBTaGFkZXJzID0ge307XHJcblxyXG4vL3BvaW50Y2xvdWQudnNcclxuU2hhZGVycy52ZXJ0ZXggPSBgXHJcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxucHJlY2lzaW9uIGhpZ2hwIGludDtcclxuXHJcbmAgKyBUSFJFRS5TaGFkZXJDaHVuay5jb21tb24gKyBgXHJcbmAgKyBUSFJFRS5TaGFkZXJDaHVuay5sb2dkZXB0aGJ1Zl9wYXJzX3ZlcnRleCArIGBcclxuXHJcbi8vIGF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xyXG4vLyBhdHRyaWJ1dGUgdmVjMyBjb2xvcjtcclxuYXR0cmlidXRlIGZsb2F0IGludGVuc2l0eTtcclxuYXR0cmlidXRlIGZsb2F0IGNsYXNzaWZpY2F0aW9uO1xyXG5hdHRyaWJ1dGUgZmxvYXQgcmV0dXJuTnVtYmVyO1xyXG5hdHRyaWJ1dGUgZmxvYXQgbnVtYmVyT2ZSZXR1cm5zO1xyXG5hdHRyaWJ1dGUgZmxvYXQgcG9pbnRTb3VyY2VJRDtcclxuYXR0cmlidXRlIHZlYzQgaW5kaWNlcztcclxuYXR0cmlidXRlIGZsb2F0IHNwYWNpbmc7XHJcblxyXG4vLyB1bmlmb3JtIG1hdDQgbW9kZWxNYXRyaXg7XHJcbi8vIHVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XHJcbi8vIHVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xyXG4vLyB1bmlmb3JtIG1hdDQgdmlld01hdHJpeDtcclxudW5pZm9ybSBtYXQ0IHVWaWV3SW52O1xyXG5cclxudW5pZm9ybSBmbG9hdCB1U2NyZWVuV2lkdGg7XHJcbnVuaWZvcm0gZmxvYXQgdVNjcmVlbkhlaWdodDtcclxuXHJcbnVuaWZvcm0gZmxvYXQgZm92O1xyXG51bmlmb3JtIGZsb2F0IG5lYXI7XHJcbnVuaWZvcm0gZmxvYXQgZmFyO1xyXG5cclxudW5pZm9ybSBib29sIHVEZWJ1ZztcclxuXHJcbnVuaWZvcm0gZmxvYXQgc2l6ZTtcclxudW5pZm9ybSBmbG9hdCBtaW5TaXplO1xyXG51bmlmb3JtIGZsb2F0IG1heFNpemU7XHJcblxyXG51bmlmb3JtIGZsb2F0IHVQQ0luZGV4O1xyXG51bmlmb3JtIGZsb2F0IHVPY3RyZWVTcGFjaW5nO1xyXG51bmlmb3JtIGZsb2F0IHVOb2RlU3BhY2luZztcclxudW5pZm9ybSBmbG9hdCB1T2N0cmVlU2l6ZTtcclxudW5pZm9ybSB2ZWMzIHVCQlNpemU7XHJcbnVuaWZvcm0gZmxvYXQgdUxldmVsO1xyXG51bmlmb3JtIGZsb2F0IHVWTlN0YXJ0O1xyXG51bmlmb3JtIGJvb2wgdUlzTGVhZk5vZGU7XHJcblxyXG51bmlmb3JtIHZlYzMgdUNvbG9yO1xyXG51bmlmb3JtIGZsb2F0IHVPcGFjaXR5O1xyXG5cclxudW5pZm9ybSB2ZWMyIGVsZXZhdGlvblJhbmdlO1xyXG51bmlmb3JtIHZlYzIgaW50ZW5zaXR5UmFuZ2U7XHJcbnVuaWZvcm0gZmxvYXQgaW50ZW5zaXR5R2FtbWE7XHJcbnVuaWZvcm0gZmxvYXQgaW50ZW5zaXR5Q29udHJhc3Q7XHJcbnVuaWZvcm0gZmxvYXQgaW50ZW5zaXR5QnJpZ2h0bmVzcztcclxudW5pZm9ybSBmbG9hdCByZ2JHYW1tYTtcclxuLy8gdW5pZm9ybSBmbG9hdCByZ2JDb250cmFzdDtcclxudW5pZm9ybSBmbG9hdCByZ2JCcmlnaHRuZXNzO1xyXG51bmlmb3JtIGZsb2F0IHVUcmFuc2l0aW9uO1xyXG51bmlmb3JtIGZsb2F0IHdSR0I7XHJcbnVuaWZvcm0gZmxvYXQgd0ludGVuc2l0eTtcclxudW5pZm9ybSBmbG9hdCB3RWxldmF0aW9uO1xyXG51bmlmb3JtIGZsb2F0IHdDbGFzc2lmaWNhdGlvbjtcclxudW5pZm9ybSBmbG9hdCB3UmV0dXJuTnVtYmVyO1xyXG51bmlmb3JtIGZsb2F0IHdTb3VyY2VJRDtcclxuXHJcbnVuaWZvcm0gc2FtcGxlcjJEIHZpc2libGVOb2RlcztcclxudW5pZm9ybSBzYW1wbGVyMkQgZ3JhZGllbnQ7XHJcbnVuaWZvcm0gc2FtcGxlcjJEIGNsYXNzaWZpY2F0aW9uTFVUO1xyXG5cclxuI2lmIGRlZmluZWQobnVtX2NsaXBwbGFuZXMpICYmIG51bV9jbGlwcGxhbmVzID4gMCBcclxuXHJcbnVuaWZvcm0gdmVjNCBjbGlwUGxhbmVzW251bV9jbGlwcGxhbmVzXTtcclxuXHJcbmJvb2wgaXNDbGlwcGVkKHZlYzMgcG9pbnQpIHtcclxuXHRib29sIGNsaXBwZWQgPSBmYWxzZTtcclxuXHRmb3IgKGludCBpID0gMDsgaSA8IG51bV9jbGlwcGxhbmVzOyArK2kpIHtcclxuXHRcdHZlYzQgcCA9IGNsaXBQbGFuZXNbaV07XHJcblx0XHRjbGlwcGVkID0gY2xpcHBlZCB8fCBkb3QoLXBvaW50LCBwLnh5eikgPiBwLnc7XHJcblx0fVxyXG5cdHJldHVybiBjbGlwcGVkO1xyXG59XHJcblxyXG4jZWxzZVxyXG5cclxuYm9vbCBpc0NsaXBwZWQodmVjMyBwb2ludCkge1xyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuI2VuZGlmXHJcblxyXG52YXJ5aW5nIHZlYzQgdkNvbG9yO1xyXG52YXJ5aW5nIGZsb2F0IHZMb2dEZXB0aDtcclxudmFyeWluZyB2ZWMzIHZWaWV3UG9zaXRpb247XHJcbnZhcnlpbmcgZmxvYXQgdlJhZGl1cztcclxudmFyeWluZyBmbG9hdCB2UG9pbnRTaXplO1xyXG5cclxuLy8gVGhlIHJvdW5kKCkgZnVuY3Rpb24gaXMgbm90IGF2YWlsYWJsZSBpbiBXZWJHTCAxLjBcclxuZmxvYXQgbXlSb3VuZChmbG9hdCBudW1iZXIpXHJcbntcclxuXHRyZXR1cm4gZmxvb3IobnVtYmVyICsgMC41KTtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9PQ1RSRUVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiNpZiAoZGVmaW5lZChhZGFwdGl2ZV9wb2ludF9zaXplKSB8fCBkZWZpbmVkKGNvbG9yX3R5cGVfbG9kKSkgJiYgZGVmaW5lZCh0cmVlX3R5cGVfb2N0cmVlKVxyXG5cdC8qKlxyXG5cdCAqIG51bWJlciBvZiAxLWJpdHMgdXAgdG8gaW5jbHVzaXZlIGluZGV4IHBvc2l0aW9uXHJcblx0ICogbnVtYmVyIGlzIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZSAwLTI1NVxyXG5cdCAqL1xyXG5cdGludCBudW1iZXJPZk9uZXMoaW50IG51bWJlciwgaW50IGluZGV4KVxyXG5cdHtcclxuXHRcdGludCBudW1PbmVzID0gMDtcclxuXHRcdGludCB0bXAgPSAxMjg7XHJcblxyXG5cdFx0Zm9yKGludCBpID0gNzsgaSA+PSAwOyBpLS0pXHJcblx0XHR7XHJcblx0XHRcdGlmKG51bWJlciA+PSB0bXApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRudW1iZXIgPSBudW1iZXIgLSB0bXA7XHJcblxyXG5cdFx0XHRcdGlmKGkgPD0gaW5kZXgpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bnVtT25lcysrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dG1wID0gdG1wIC8gMjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVtT25lcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIGNoZWNrcyB3aGV0aGVyIHRoZSBiaXQgYXQgaW5kZXggaXMgMVxyXG5cdCAqIG51bWJlciBpcyB0cmVhdGVkIGFzIGlmIGl0IHdlcmUgYW4gaW50ZWdlciBpbiB0aGUgcmFuZ2UgMC0yNTVcclxuXHQgKi9cclxuXHRib29sIGlzQml0U2V0KGludCBudW1iZXIsIGludCBpbmRleClcclxuXHR7XHJcblx0XHQvL3dlaXJkIG11bHRpIGVsc2UgaWYgZHVlIHRvIGxhY2sgb2YgcHJvcGVyIGFycmF5LCBpbnQgYW5kIGJpdHdpc2Ugc3VwcG9ydCBpbiBXZWJHTCAxLjBcclxuXHRcdGludCBwb3dpID0gMTtcclxuXHJcblx0XHRpZihpbmRleCA9PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHRwb3dpID0gMTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoaW5kZXggPT0gMSlcclxuXHRcdHtcclxuXHRcdFx0cG93aSA9IDI7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGluZGV4ID09IDIpXHJcblx0XHR7XHJcblx0XHRcdHBvd2kgPSA0O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihpbmRleCA9PSAzKVxyXG5cdFx0e1xyXG5cdFx0XHRwb3dpID0gODtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoaW5kZXggPT0gNClcclxuXHRcdHtcclxuXHRcdFx0cG93aSA9IDE2O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihpbmRleCA9PSA1KVxyXG5cdFx0e1xyXG5cdFx0XHRwb3dpID0gMzI7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGluZGV4ID09IDYpXHJcblx0XHR7XHJcblx0XHRcdHBvd2kgPSA2NDtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoaW5kZXggPT0gNylcclxuXHRcdHtcclxuXHRcdFx0cG93aSA9IDEyODtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGludCBuZHAgPSBudW1iZXIgLyBwb3dpO1xyXG5cclxuXHRcdHJldHVybiBtb2QoZmxvYXQobmRwKSwgMi4wKSAhPSAwLjA7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBmaW5kIHRoZSBMT0QgYXQgdGhlIHBvaW50IHBvc2l0aW9uXHJcblx0ICovXHJcblx0ZmxvYXQgZ2V0TE9EKClcclxuXHR7XHJcblx0XHR2ZWMzIG9mZnNldCA9IHZlYzMoMC4wLCAwLjAsIDAuMCk7XHJcblx0XHRpbnQgaU9mZnNldCA9IGludCh1Vk5TdGFydCk7XHJcblx0XHRmbG9hdCBkZXB0aCA9IHVMZXZlbDtcclxuXHJcblx0XHRmb3IoZmxvYXQgaSA9IDAuMDsgaSA8PSAzMC4wOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGZsb2F0IG5vZGVTaXplQXRMZXZlbCA9IHVPY3RyZWVTaXplIC8gcG93KDIuMCwgaSArIHVMZXZlbCArIDAuMCk7XHJcblx0XHRcdFxyXG5cdFx0XHR2ZWMzIGluZGV4M2QgPSAocG9zaXRpb24tb2Zmc2V0KSAvIG5vZGVTaXplQXRMZXZlbDtcclxuXHRcdFx0aW5kZXgzZCA9IGZsb29yKGluZGV4M2QgKyAwLjUpO1xyXG5cdFx0XHRpbnQgaW5kZXggPSBpbnQobXlSb3VuZCg0LjAgKiBpbmRleDNkLnggKyAyLjAgKiBpbmRleDNkLnkgKyBpbmRleDNkLnopKTtcclxuXHJcblx0XHRcdHZlYzQgdmFsdWUgPSB0ZXh0dXJlMkQodmlzaWJsZU5vZGVzLCB2ZWMyKGZsb2F0KGlPZmZzZXQpIC8gMjA0OC4wLCAwLjApKTtcclxuXHRcdFx0aW50IG1hc2sgPSBpbnQobXlSb3VuZCh2YWx1ZS5yICogMjU1LjApKTtcclxuXHJcblx0XHRcdGlmKGlzQml0U2V0KG1hc2ssIGluZGV4KSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vdGhlcmUgYXJlIG1vcmUgdmlzaWJsZSBjaGlsZCBub2RlcyBhdCB0aGlzIHBvc2l0aW9uXHJcblx0XHRcdFx0aW50IGFkdmFuY2VHID0gaW50KG15Um91bmQodmFsdWUuZyAqIDI1NS4wKSkgKiAyNTY7XHJcblx0XHRcdFx0aW50IGFkdmFuY2VCID0gaW50KG15Um91bmQodmFsdWUuYiAqIDI1NS4wKSk7XHJcblx0XHRcdFx0aW50IGFkdmFuY2VDaGlsZCA9IG51bWJlck9mT25lcyhtYXNrLCBpbmRleCAtIDEpO1xyXG5cdFx0XHRcdGludCBhZHZhbmNlID0gYWR2YW5jZUcgKyBhZHZhbmNlQiArIGFkdmFuY2VDaGlsZDtcclxuXHJcblx0XHRcdFx0aU9mZnNldCA9IGlPZmZzZXQgKyBhZHZhbmNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRlcHRoKys7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly9ubyBtb3JlIHZpc2libGUgY2hpbGQgbm9kZXMgYXQgdGhpcyBwb3NpdGlvblxyXG5cdFx0XHRcdHJldHVybiB2YWx1ZS5hICogMjU1LjA7XHJcblx0XHRcdFx0Ly9yZXR1cm4gZGVwdGg7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdG9mZnNldCA9IG9mZnNldCArICh2ZWMzKDEuMCwgMS4wLCAxLjApICogbm9kZVNpemVBdExldmVsICogMC41KSAqIGluZGV4M2Q7XHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIGRlcHRoO1xyXG5cdH1cclxuXHJcblx0ZmxvYXQgZ2V0U3BhY2luZygpXHJcblx0e1xyXG5cdFx0dmVjMyBvZmZzZXQgPSB2ZWMzKDAuMCwgMC4wLCAwLjApO1xyXG5cdFx0aW50IGlPZmZzZXQgPSBpbnQodVZOU3RhcnQpO1xyXG5cdFx0ZmxvYXQgZGVwdGggPSB1TGV2ZWw7XHJcblx0XHRmbG9hdCBzcGFjaW5nID0gdU5vZGVTcGFjaW5nO1xyXG5cclxuXHRcdGZvcihmbG9hdCBpID0gMC4wOyBpIDw9IDMwLjA7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0ZmxvYXQgbm9kZVNpemVBdExldmVsID0gdU9jdHJlZVNpemUgLyBwb3coMi4wLCBpICsgdUxldmVsICsgMC4wKTtcclxuXHRcdFx0XHJcblx0XHRcdHZlYzMgaW5kZXgzZCA9IChwb3NpdGlvbi1vZmZzZXQpIC8gbm9kZVNpemVBdExldmVsO1xyXG5cdFx0XHRpbmRleDNkID0gZmxvb3IoaW5kZXgzZCArIDAuNSk7XHJcblx0XHRcdGludCBpbmRleCA9IGludChteVJvdW5kKDQuMCAqIGluZGV4M2QueCArIDIuMCAqIGluZGV4M2QueSArIGluZGV4M2QueikpO1xyXG5cclxuXHRcdFx0dmVjNCB2YWx1ZSA9IHRleHR1cmUyRCh2aXNpYmxlTm9kZXMsIHZlYzIoZmxvYXQoaU9mZnNldCkgLyAyMDQ4LjAsIDAuMCkpO1xyXG5cdFx0XHRpbnQgbWFzayA9IGludChteVJvdW5kKHZhbHVlLnIgKiAyNTUuMCkpO1xyXG5cdFx0XHRmbG9hdCBzcGFjaW5nRmFjdG9yID0gdmFsdWUuYTtcclxuXHJcblx0XHRcdGlmKGkgPiAwLjApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcGFjaW5nID0gc3BhY2luZyAvICgyNTUuMCAqIHNwYWNpbmdGYWN0b3IpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZihpc0JpdFNldChtYXNrLCBpbmRleCkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvL3RoZXJlIGFyZSBtb3JlIHZpc2libGUgY2hpbGQgbm9kZXMgYXQgdGhpcyBwb3NpdGlvblxyXG5cdFx0XHRcdGludCBhZHZhbmNlRyA9IGludChteVJvdW5kKHZhbHVlLmcgKiAyNTUuMCkpICogMjU2O1xyXG5cdFx0XHRcdGludCBhZHZhbmNlQiA9IGludChteVJvdW5kKHZhbHVlLmIgKiAyNTUuMCkpO1xyXG5cdFx0XHRcdGludCBhZHZhbmNlQ2hpbGQgPSBudW1iZXJPZk9uZXMobWFzaywgaW5kZXggLSAxKTtcclxuXHRcdFx0XHRpbnQgYWR2YW5jZSA9IGFkdmFuY2VHICsgYWR2YW5jZUIgKyBhZHZhbmNlQ2hpbGQ7XHJcblxyXG5cdFx0XHRcdGlPZmZzZXQgPSBpT2Zmc2V0ICsgYWR2YW5jZTtcclxuXHJcblx0XHRcdFx0ZGVwdGgrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvL25vIG1vcmUgdmlzaWJsZSBjaGlsZCBub2RlcyBhdCB0aGlzIHBvc2l0aW9uXHJcblx0XHRcdFx0cmV0dXJuIHNwYWNpbmc7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdG9mZnNldCA9IG9mZnNldCArICh2ZWMzKDEuMCwgMS4wLCAxLjApICogbm9kZVNpemVBdExldmVsICogMC41KSAqIGluZGV4M2Q7XHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHNwYWNpbmc7XHJcblx0fVxyXG5cclxuXHRmbG9hdCBnZXRQb2ludFNpemVBdHRlbnVhdGlvbigpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHBvdygyLjAsIGdldExPRCgpKTtcclxuXHR9XHJcbiNlbmRpZlxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9LRC1UUkVFXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiNpZiAoZGVmaW5lZChhZGFwdGl2ZV9wb2ludF9zaXplKSB8fCBkZWZpbmVkKGNvbG9yX3R5cGVfbG9kKSkgJiYgZGVmaW5lZCh0cmVlX3R5cGVfa2R0cmVlKVxyXG5cdGZsb2F0IGdldExPRCgpXHJcblx0e1xyXG5cdFx0dmVjMyBvZmZzZXQgPSB2ZWMzKDAuMCwgMC4wLCAwLjApO1xyXG5cdFx0ZmxvYXQgaU9mZnNldCA9IDAuMDtcclxuXHRcdGZsb2F0IGRlcHRoID0gMC4wO1xyXG5cdFx0XHRcclxuXHRcdHZlYzMgc2l6ZSA9IHVCQlNpemU7XHRcclxuXHRcdHZlYzMgcG9zID0gcG9zaXRpb247XHJcblx0XHRcdFxyXG5cdFx0Zm9yKGZsb2F0IGkgPSAwLjA7IGkgPD0gMTAwMC4wOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHZlYzQgdmFsdWUgPSB0ZXh0dXJlMkQodmlzaWJsZU5vZGVzLCB2ZWMyKGlPZmZzZXQgLyAyMDQ4LjAsIDAuMCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0aW50IGNoaWxkcmVuID0gaW50KHZhbHVlLnIgKiAyNTUuMCk7XHJcblx0XHRcdGZsb2F0IG5leHQgPSB2YWx1ZS5nICogMjU1LjA7XHJcblx0XHRcdGludCBzcGxpdCA9IGludCh2YWx1ZS5iICogMjU1LjApO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYobmV4dCA9PSAwLjApXHJcblx0XHRcdHtcclxuXHRcdFx0IFx0cmV0dXJuIGRlcHRoO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR2ZWMzIHNwbGl0diA9IHZlYzMoMC4wLCAwLjAsIDAuMCk7XHJcblx0XHRcdGlmKHNwbGl0ID09IDEpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcGxpdHYueCA9IDEuMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKHNwbGl0ID09IDIpXHJcblx0XHRcdHtcclxuXHRcdFx0IFx0c3BsaXR2LnkgPSAxLjA7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihzcGxpdCA9PSA0KVxyXG5cdFx0XHR7XHJcblx0XHRcdCBcdHNwbGl0di56ID0gMS4wO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpT2Zmc2V0ID0gaU9mZnNldCArIG5leHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRmbG9hdCBmYWN0b3IgPSBsZW5ndGgocG9zICogc3BsaXR2IC8gc2l6ZSk7XHJcblxyXG5cdFx0XHQvL0xlZnRcclxuXHRcdFx0aWYoZmFjdG9yIDwgMC41KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoY2hpbGRyZW4gPT0gMCB8fCBjaGlsZHJlbiA9PSAyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJldHVybiBkZXB0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly9SaWdodFxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwb3MgPSBwb3MgLSBzaXplICogc3BsaXR2ICogMC41O1xyXG5cdFx0XHRcdGlmKGNoaWxkcmVuID09IDAgfHwgY2hpbGRyZW4gPT0gMSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRyZXR1cm4gZGVwdGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGNoaWxkcmVuID09IDMpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aU9mZnNldCA9IGlPZmZzZXQgKyAxLjA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzaXplID0gc2l6ZSAqICgoMS4wIC0gKHNwbGl0diArIDEuMCkgLyAyLjApICsgMC41KTtcclxuXHRcdFx0ZGVwdGgrKztcclxuXHRcdH1cclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gZGVwdGg7XHRcclxuXHR9XHJcblxyXG5cdGZsb2F0IGdldFBvaW50U2l6ZUF0dGVudWF0aW9uKClcclxuXHR7XHJcblx0XHRyZXR1cm4gMC41ICogcG93KDEuMywgZ2V0TE9EKCkpO1xyXG5cdH1cclxuI2VuZGlmXHJcblxyXG4vL2Zvcm11bGEgYWRhcHRlZCBmcm9tOiBodHRwOi8vd3d3LmRmc3R1ZGlvcy5jby51ay9hcnRpY2xlcy9wcm9ncmFtbWluZy9pbWFnZS1wcm9ncmFtbWluZy1hbGdvcml0aG1zL2ltYWdlLXByb2Nlc3NpbmctYWxnb3JpdGhtcy1wYXJ0LTUtY29udHJhc3QtYWRqdXN0bWVudC9cclxuZmxvYXQgZ2V0Q29udHJhc3RGYWN0b3IoZmxvYXQgY29udHJhc3QpXHJcbntcclxuXHRyZXR1cm4gKDEuMDE1ODczMDE1ODczMDE1NiAqIChjb250cmFzdCArIDEuMCkpIC8gKDEuMDE1ODczMDE1ODczMDE1NiAtIGNvbnRyYXN0KTtcclxufVxyXG5cclxudmVjMyBnZXRSR0IoKVxyXG57XHJcblx0dmVjMyByZ2IgPSBjb2xvcjtcclxuXHRcclxuXHRyZ2IgPSBwb3cocmdiLCB2ZWMzKHJnYkdhbW1hKSk7XHJcblx0cmdiID0gcmdiICsgcmdiQnJpZ2h0bmVzcztcclxuXHRyZ2IgPSBjbGFtcChyZ2IsIDAuMCwgMS4wKTtcclxuXHRcclxuXHRyZXR1cm4gcmdiO1xyXG59XHJcblxyXG5mbG9hdCBnZXRJbnRlbnNpdHkoKVxyXG57XHJcblx0ZmxvYXQgdyA9IChpbnRlbnNpdHkgLSBpbnRlbnNpdHlSYW5nZS54KSAvIChpbnRlbnNpdHlSYW5nZS55IC0gaW50ZW5zaXR5UmFuZ2UueCk7XHJcblx0dyA9IHBvdyh3LCBpbnRlbnNpdHlHYW1tYSk7XHJcblx0dyA9IHcgKyBpbnRlbnNpdHlCcmlnaHRuZXNzO1xyXG5cdHcgPSAodyAtIDAuNSkgKiBnZXRDb250cmFzdEZhY3RvcihpbnRlbnNpdHlDb250cmFzdCkgKyAwLjU7XHJcblx0dyA9IGNsYW1wKHcsIDAuMCwgMS4wKTtcclxuXHJcblx0cmV0dXJuIHc7XHJcbn1cclxuXHJcbnZlYzMgZ2V0RWxldmF0aW9uKClcclxue1xyXG5cdHZlYzQgd29ybGQgPSBtb2RlbE1hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcclxuXHRmbG9hdCB3ID0gKHdvcmxkLnogLSBlbGV2YXRpb25SYW5nZS54KSAvIChlbGV2YXRpb25SYW5nZS55IC0gZWxldmF0aW9uUmFuZ2UueCk7XHJcblx0cmV0dXJuIHRleHR1cmUyRChncmFkaWVudCwgdmVjMih3LDEuMC13KSkucmdiO1xyXG59XHJcblxyXG52ZWM0IGdldENsYXNzaWZpY2F0aW9uKClcclxue1xyXG5cdHZlYzIgdXYgPSB2ZWMyKGNsYXNzaWZpY2F0aW9uIC8gMjU1LjAsIDAuNSk7XHJcblx0cmV0dXJuIHRleHR1cmUyRChjbGFzc2lmaWNhdGlvbkxVVCwgdXYpO1xyXG59XHJcblxyXG52ZWMzIGdldFJldHVybk51bWJlcigpXHJcbntcclxuXHRpZihudW1iZXJPZlJldHVybnMgPT0gMS4wKVxyXG5cdHtcclxuXHRcdHJldHVybiB2ZWMzKDEuMCwgMS4wLCAwLjApO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYocmV0dXJuTnVtYmVyID09IDEuMClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIHZlYzMoMS4wLCAwLjAsIDAuMCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHJldHVybk51bWJlciA9PSBudW1iZXJPZlJldHVybnMpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiB2ZWMzKDAuMCwgMC4wLCAxLjApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gdmVjMygwLjAsIDEuMCwgMC4wKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbnZlYzMgZ2V0U291cmNlSUQoKVxyXG57XHJcblx0ZmxvYXQgdyA9IG1vZChwb2ludFNvdXJjZUlELCAxMC4wKSAvIDEwLjA7XHJcblx0cmV0dXJuIHRleHR1cmUyRChncmFkaWVudCwgdmVjMih3LDEuMCAtIHcpKS5yZ2I7XHJcbn1cclxuXHJcbnZlYzMgZ2V0Q29tcG9zaXRlQ29sb3IoKVxyXG57XHJcblx0dmVjMyBjO1xyXG5cdGZsb2F0IHc7XHJcblxyXG5cdGMgKz0gd1JHQiAqIGdldFJHQigpO1xyXG5cdHcgKz0gd1JHQjtcclxuXHRcclxuXHRjICs9IHdJbnRlbnNpdHkgKiBnZXRJbnRlbnNpdHkoKSAqIHZlYzMoMS4wLCAxLjAsIDEuMCk7XHJcblx0dyArPSB3SW50ZW5zaXR5O1xyXG5cdFxyXG5cdGMgKz0gd0VsZXZhdGlvbiAqIGdldEVsZXZhdGlvbigpO1xyXG5cdHcgKz0gd0VsZXZhdGlvbjtcclxuXHRcclxuXHRjICs9IHdSZXR1cm5OdW1iZXIgKiBnZXRSZXR1cm5OdW1iZXIoKTtcclxuXHR3ICs9IHdSZXR1cm5OdW1iZXI7XHJcblx0XHJcblx0YyArPSB3U291cmNlSUQgKiBnZXRTb3VyY2VJRCgpO1xyXG5cdHcgKz0gd1NvdXJjZUlEO1xyXG5cdFxyXG5cdHZlYzQgY2wgPSB3Q2xhc3NpZmljYXRpb24gKiBnZXRDbGFzc2lmaWNhdGlvbigpO1xyXG4gICAgYyArPSBjbC5hICogY2wucmdiO1xyXG5cdHcgKz0gd0NsYXNzaWZpY2F0aW9uICogY2wuYTtcclxuXHJcblx0YyA9IGMgLyB3O1xyXG5cdFxyXG5cdGlmKHcgPT0gMC4wKVxyXG5cdHtcclxuXHRcdGdsX1Bvc2l0aW9uID0gdmVjNCgxMDAuMCwgMTAwLjAsIDEwMC4wLCAwLjApO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gYztcclxufVxyXG5cclxudmVjNCBnZXRDb2xvcigpXHJcbntcclxuXHR2ZWMzIGNvbG9yO1xyXG4gICAgICAgZmxvYXQgYWxwaGEgPSAxLjA7XHJcblxyXG5cdCNpZmRlZiBjb2xvcl90eXBlX3JnYlxyXG5cdFx0Y29sb3IgPSBnZXRSR0IoKTtcclxuXHQjZWxpZiBkZWZpbmVkIGNvbG9yX3R5cGVfaGVpZ2h0XHJcblx0XHRjb2xvciA9IGdldEVsZXZhdGlvbigpO1xyXG5cdCNlbGlmIGRlZmluZWQgY29sb3JfdHlwZV9yZ2JfaGVpZ2h0XHJcblx0XHR2ZWMzIGNIZWlnaHQgPSBnZXRFbGV2YXRpb24oKTtcclxuXHRcdGNvbG9yID0gKDEuMCAtIHVUcmFuc2l0aW9uKSAqIGdldFJHQigpICsgdVRyYW5zaXRpb24gKiBjSGVpZ2h0O1xyXG5cdCNlbGlmIGRlZmluZWQgY29sb3JfdHlwZV9kZXB0aFxyXG5cdFx0ZmxvYXQgbGluZWFyRGVwdGggPSBnbF9Qb3NpdGlvbi53O1xyXG5cdFx0ZmxvYXQgZXhwRGVwdGggPSAoZ2xfUG9zaXRpb24ueiAvIGdsX1Bvc2l0aW9uLncpICogMC41ICsgMC41O1xyXG5cdFx0Y29sb3IgPSB2ZWMzKGxpbmVhckRlcHRoLCBleHBEZXB0aCwgMC4wKTtcclxuXHQjZWxpZiBkZWZpbmVkIGNvbG9yX3R5cGVfaW50ZW5zaXR5XHJcblx0XHRmbG9hdCB3ID0gZ2V0SW50ZW5zaXR5KCk7XHJcblx0XHRjb2xvciA9IHZlYzModywgdywgdyk7XHJcblx0I2VsaWYgZGVmaW5lZCBjb2xvcl90eXBlX2ludGVuc2l0eV9ncmFkaWVudFxyXG5cdFx0ZmxvYXQgdyA9IGdldEludGVuc2l0eSgpO1xyXG5cdFx0Y29sb3IgPSB0ZXh0dXJlMkQoZ3JhZGllbnQsIHZlYzIodywxLjAtdykpLnJnYjtcclxuXHQjZWxpZiBkZWZpbmVkIGNvbG9yX3R5cGVfY29sb3JcclxuXHRcdGNvbG9yID0gdUNvbG9yO1xyXG5cdCNlbGlmIGRlZmluZWQgY29sb3JfdHlwZV9sb2RcclxuXHRcdGZsb2F0IGRlcHRoID0gZ2V0TE9EKCk7XHJcblx0XHRmbG9hdCB3ID0gZGVwdGggLyAxMC4wO1xyXG5cdFx0Y29sb3IgPSB0ZXh0dXJlMkQoZ3JhZGllbnQsIHZlYzIodywxLjAtdykpLnJnYjtcclxuXHQjZWxpZiBkZWZpbmVkIGNvbG9yX3R5cGVfcG9pbnRfaW5kZXhcclxuXHRcdGNvbG9yID0gaW5kaWNlcy5yZ2I7XHJcblx0I2VsaWYgZGVmaW5lZCBjb2xvcl90eXBlX2NsYXNzaWZpY2F0aW9uXHJcblx0XHR2ZWM0IGNsID0gZ2V0Q2xhc3NpZmljYXRpb24oKTtcclxuXHRcdGNvbG9yID0gY2wucmdiO1xyXG4gICAgICAgICAgICAgICBhbHBoYSA9IGNsLmE7XHJcblx0I2VsaWYgZGVmaW5lZCBjb2xvcl90eXBlX3JldHVybl9udW1iZXJcclxuXHRcdGNvbG9yID0gZ2V0UmV0dXJuTnVtYmVyKCk7XHJcblx0I2VsaWYgZGVmaW5lZCBjb2xvcl90eXBlX3NvdXJjZVxyXG5cdFx0Y29sb3IgPSBnZXRTb3VyY2VJRCgpO1xyXG5cdCNlbGlmIGRlZmluZWQgY29sb3JfdHlwZV9ub3JtYWxcclxuXHRcdGNvbG9yID0gKG1vZGVsTWF0cml4ICogdmVjNChub3JtYWwsIDAuMCkpLnh5ejtcclxuXHQjZWxpZiBkZWZpbmVkIGNvbG9yX3R5cGVfcGhvbmdcclxuXHRcdGNvbG9yID0gY29sb3I7XHJcblx0I2VsaWYgZGVmaW5lZCBjb2xvcl90eXBlX2NvbXBvc2l0ZVxyXG5cdFx0Y29sb3IgPSBnZXRDb21wb3NpdGVDb2xvcigpO1xyXG5cdCNlbmRpZlxyXG5cclxuXHRyZXR1cm4gdmVjNChjb2xvciwgYWxwaGEpO1xyXG59XHJcblxyXG5mbG9hdCBnZXRQb2ludFNpemUoKVxyXG57XHJcblx0ZmxvYXQgcG9pbnRTaXplID0gMS4wO1xyXG5cdFxyXG5cdGZsb2F0IHNsb3BlID0gdGFuKGZvdiAvIDIuMCk7XHJcblx0ZmxvYXQgcHJvakZhY3RvciA9IC0wLjUgKiB1U2NyZWVuSGVpZ2h0IC8gKHNsb3BlICogdlZpZXdQb3NpdGlvbi56KTtcclxuXHRcclxuXHRmbG9hdCByID0gdU9jdHJlZVNwYWNpbmcgKiAxLjc7XHJcblx0dlJhZGl1cyA9IHI7XHJcblxyXG5cdCNpZiBkZWZpbmVkIGZpeGVkX3BvaW50X3NpemVcclxuXHRcdHBvaW50U2l6ZSA9IHNpemU7XHJcblx0I2VsaWYgZGVmaW5lZCBhdHRlbnVhdGVkX3BvaW50X3NpemVcclxuXHRcdHBvaW50U2l6ZSA9IHNpemUgKiBzcGFjaW5nICogcHJvakZhY3RvcjtcclxuXHQjZWxpZiBkZWZpbmVkIGFkYXB0aXZlX3BvaW50X3NpemVcclxuXHRcdGlmKHVJc0xlYWZOb2RlICYmIGZhbHNlKVxyXG5cdFx0e1xyXG5cdFx0XHRwb2ludFNpemUgPSBzaXplICogc3BhY2luZyAqIHByb2pGYWN0b3I7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGZsb2F0IHdvcmxkU3BhY2VTaXplID0gMS4wICogc2l6ZSAqIHIgLyBnZXRQb2ludFNpemVBdHRlbnVhdGlvbigpO1xyXG5cdFx0XHRwb2ludFNpemUgPSB3b3JsZFNwYWNlU2l6ZSAqIHByb2pGYWN0b3I7XHJcblx0XHR9XHJcblx0I2VuZGlmXHJcblxyXG5cdHBvaW50U2l6ZSA9IG1heChtaW5TaXplLCBwb2ludFNpemUpO1xyXG5cdHBvaW50U2l6ZSA9IG1pbihtYXhTaXplLCBwb2ludFNpemUpO1xyXG5cdFxyXG5cdHZSYWRpdXMgPSBwb2ludFNpemUgLyBwcm9qRmFjdG9yO1xyXG5cclxuXHRyZXR1cm4gcG9pbnRTaXplO1xyXG59XHJcblxyXG52b2lkIG1haW4oKVxyXG57XHJcblx0dmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcclxuXHR2Vmlld1Bvc2l0aW9uID0gbXZQb3NpdGlvbi54eXo7XHJcblx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuXHJcblx0dkxvZ0RlcHRoID0gbG9nMigtbXZQb3NpdGlvbi56KTtcclxuXHJcblx0Ly9QT0lOVCBTSVpFXHJcblx0ZmxvYXQgcG9pbnRTaXplID0gZ2V0UG9pbnRTaXplKCk7XHJcblx0Z2xfUG9pbnRTaXplID0gcG9pbnRTaXplO1xyXG5cdHZQb2ludFNpemUgPSBwb2ludFNpemU7XHJcblx0YCArIFRIUkVFLlNoYWRlckNodW5rLmxvZ2RlcHRoYnVmX3ZlcnRleCArIGBcclxuXHJcblx0Ly9DT0xPUlxyXG5cdHZDb2xvciA9IGdldENvbG9yKCk7XHJcblxyXG5cdCNpZiBkZWZpbmVkIGhxX2RlcHRoX3Bhc3NcclxuXHRcdGZsb2F0IG9yaWdpbmFsRGVwdGggPSBnbF9Qb3NpdGlvbi53O1xyXG5cdFx0ZmxvYXQgYWRqdXN0ZWREZXB0aCA9IG9yaWdpbmFsRGVwdGggKyAyLjAgKiB2UmFkaXVzO1xyXG5cdFx0ZmxvYXQgYWRqdXN0ID0gYWRqdXN0ZWREZXB0aCAvIG9yaWdpbmFsRGVwdGg7XHJcblxyXG5cdFx0bXZQb3NpdGlvbi54eXogPSBtdlBvc2l0aW9uLnh5eiAqIGFkanVzdDtcclxuXHRcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XHJcblx0I2VuZGlmXHJcblxyXG5cdC8vIENMSVBQSU5HXHJcblx0dmVjNCBjbGlwUG9zaXRpb24gPSBtb2RlbE1hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcclxuXHRpZiAoaXNDbGlwcGVkKGNsaXBQb3NpdGlvbi54eXopKSB7XHJcblx0XHRnbF9Qb3NpdGlvbiA9IHZlYzQoMTAwLjAsIDEwMC4wLCAxMDAuMCwgMS4wKTsgLy8gT3V0c2lkZSBjbGlwIHZvbHVtZVxyXG5cdH0gXHJcbn1gO1xyXG5cclxuLy9cInBvaW50Y2xvdWQuZnNcIlxyXG5TaGFkZXJzLmZyYWdtZW50ID0gYFxyXG5cclxuI2lmIGRlZmluZWQgVVNFX0xPR0RFUFRIQlVGX0VYVCB8fCBkZWZpbmVkIHBhcmFib2xvaWRfcG9pbnRfc2hhcGVcclxuXHQjZXh0ZW5zaW9uIEdMX0VYVF9mcmFnX2RlcHRoIDogZW5hYmxlXHJcbiNlbmRpZlxyXG5cclxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG5wcmVjaXNpb24gaGlnaHAgaW50O1xyXG5cclxuYCArIFRIUkVFLlNoYWRlckNodW5rLmNvbW1vbiArIGBcclxuYCArIFRIUkVFLlNoYWRlckNodW5rLmxvZ2RlcHRoYnVmX3BhcnNfZnJhZ21lbnQgKyBgXHJcblxyXG4vLyB1bmlmb3JtIG1hdDQgdmlld01hdHJpeDtcclxudW5pZm9ybSBtYXQ0IHVWaWV3SW52O1xyXG4vLyB1bmlmb3JtIG1hdDQgdVByb2pJbnY7XHJcbi8vIHVuaWZvcm0gdmVjMyBjYW1lcmFQb3NpdGlvbjtcclxuXHJcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xyXG51bmlmb3JtIGZsb2F0IHVPcGFjaXR5O1xyXG5cclxudW5pZm9ybSBmbG9hdCBmb3Y7XHJcbnVuaWZvcm0gZmxvYXQgdVNwYWNpbmc7XHJcbnVuaWZvcm0gZmxvYXQgbmVhcjtcclxudW5pZm9ybSBmbG9hdCBmYXI7XHJcbnVuaWZvcm0gZmxvYXQgdVBDSW5kZXg7XHJcbnVuaWZvcm0gZmxvYXQgdVNjcmVlbldpZHRoO1xyXG51bmlmb3JtIGZsb2F0IHVTY3JlZW5IZWlnaHQ7XHJcblxyXG52YXJ5aW5nIHZlYzQgdkNvbG9yO1xyXG52YXJ5aW5nIGZsb2F0IHZMb2dEZXB0aDtcclxudmFyeWluZyB2ZWMzIHZWaWV3UG9zaXRpb247XHJcbnZhcnlpbmcgZmxvYXQgdlJhZGl1cztcclxudmFyeWluZyBmbG9hdCB2UG9pbnRTaXplO1xyXG52YXJ5aW5nIHZlYzMgdlBvc2l0aW9uO1xyXG5cclxudm9pZCBtYWluKClcclxue1xyXG5cdHZlYzMgY29sb3IgPSB2Q29sb3IucmdiO1xyXG5cdGZsb2F0IGRlcHRoID0gZ2xfRnJhZ0Nvb3JkLno7XHJcblxyXG5cdCNpZiBkZWZpbmVkIGNpcmNsZV9wb2ludF9zaGFwZSB8fCBkZWZpbmVkIHBhcmFib2xvaWRfcG9pbnRfc2hhcGVcclxuXHRcdGZsb2F0IHUgPSAoMi4wICogZ2xfUG9pbnRDb29yZC54KSAtIDEuMDtcclxuXHRcdGZsb2F0IHYgPSAoMi4wICogZ2xfUG9pbnRDb29yZC55KSAtIDEuMDtcclxuXHQjZW5kaWZcclxuXHRcclxuXHQjaWYgZGVmaW5lZCBjaXJjbGVfcG9pbnRfc2hhcGVcclxuXHRcdGZsb2F0IGNjID0gKHUqdSkgKyAodip2KTtcclxuXHRcdGlmKGNjID4gMS4wKVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNjYXJkO1xyXG5cdFx0fVxyXG5cdCNlbmRpZlxyXG5cclxuXHQjaWYgZGVmaW5lZCBjb2xvcl90eXBlX3BvaW50X2luZGV4XHJcblx0XHRnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLCB1UENJbmRleCAvIDI1NS4wKTtcclxuXHQjZWxzZVxyXG4gICAgICAgICAgICAgICBpZiAodkNvbG9yLmEgPT0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNjYXJkO1xyXG4gICAgICAgICAgICAgICB9XHJcblx0XHRnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLCB1T3BhY2l0eSk7XHJcblx0I2VuZGlmXHJcblxyXG5cdCNpZiBkZWZpbmVkIHBhcmFib2xvaWRfcG9pbnRfc2hhcGVcclxuXHRcdGZsb2F0IHdpID0gLSggdSp1ICsgdip2KTtcclxuXHRcdHZlYzQgcG9zID0gdmVjNCh2Vmlld1Bvc2l0aW9uLCAxLjApO1xyXG5cdFx0cG9zLnogKz0gd2kgKiB2UmFkaXVzO1xyXG5cdFx0ZmxvYXQgbGluZWFyRGVwdGggPSAtcG9zLno7XHJcblx0XHRwb3MgPSBwcm9qZWN0aW9uTWF0cml4ICogcG9zO1xyXG5cdFx0cG9zID0gcG9zIC8gcG9zLnc7XHJcblx0XHRmbG9hdCBleHBEZXB0aCA9IHBvcy56O1xyXG5cdFx0ZGVwdGggPSAocG9zLnogKyAxLjApIC8gMi4wO1xyXG5cclxuXHRcdGdsX0ZyYWdEZXB0aEVYVCA9IGRlcHRoO1xyXG5cdFx0XHJcblx0XHQjaWYgZGVmaW5lZCBjb2xvcl90eXBlX2RlcHRoXHJcblx0XHRcdGNvbG9yLnIgPSBsaW5lYXJEZXB0aDtcclxuXHRcdFx0Y29sb3IuZyA9IGV4cERlcHRoO1xyXG5cdFx0I2VuZGlmXHJcblx0I2VuZGlmXHJcblx0XHJcblx0YCArIFRIUkVFLlNoYWRlckNodW5rLmxvZ2RlcHRoYnVmX2ZyYWdtZW50ICsgIGBcclxuXHJcblx0I2lmIGRlZmluZWQgd2VpZ2h0ZWRfc3BsYXRzXHJcblx0XHRmbG9hdCBkaXN0YW5jZSA9IDIuMCAqIGxlbmd0aChnbF9Qb2ludENvb3JkLnh5IC0gMC41KTtcclxuXHRcdGZsb2F0IHdlaWdodCA9IG1heCgwLjAsIDEuMCAtIGRpc3RhbmNlKTtcclxuXHRcdHdlaWdodCA9IHBvdyh3ZWlnaHQsIDEuNSk7XHJcblxyXG5cdFx0Z2xfRnJhZ0NvbG9yLmEgPSB3ZWlnaHQ7XHJcblx0XHRnbF9GcmFnQ29sb3IueHl6ID0gZ2xfRnJhZ0NvbG9yLnh5eiAqIHdlaWdodDtcclxuXHQjZW5kaWZcclxufWA7XHJcblxyXG5leHBvcnQge1NoYWRlcnN9O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogTWlncmF0ZWQgZnJvbSBQb3RyZWUgKGh0dHBzOi8vZ2l0aHViLmNvbS9wb3RyZWUvcG90cmVlL2Jsb2IvZGV2ZWxvcC9zcmMvWEhSRmFjdG9yeS5qcylcclxuICogYnkgTGFycyBNb2FzdHVlbiA8QGxhcnNtb2E+LlxyXG4gKi9cclxuXHJcbmNvbnN0IFhIUkZhY3RvcnkgPSB7XHJcblx0Y29uZmlnOiB7XHJcblx0XHR3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxyXG5cdFx0Y3VzdG9tSGVhZGVyczogW1xyXG5cdFx0XHR7IGhlYWRlcjogbnVsbCwgdmFsdWU6IG51bGwgfVxyXG5cdFx0XVxyXG5cdH0sXHJcblxyXG5cdGNyZWF0ZVhNTEh0dHBSZXF1ZXN0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmN1c3RvbUhlYWRlcnMgJiZcclxuXHRcdFx0QXJyYXkuaXNBcnJheSh0aGlzLmNvbmZpZy5jdXN0b21IZWFkZXJzKSAmJlxyXG5cdFx0XHR0aGlzLmNvbmZpZy5jdXN0b21IZWFkZXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0bGV0IGJhc2VPcGVuID0geGhyLm9wZW47XHJcblx0XHRcdGxldCBjdXN0b21IZWFkZXJzID0gdGhpcy5jb25maWcuY3VzdG9tSGVhZGVycztcclxuXHRcdFx0eGhyLm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0YmFzZU9wZW4uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcclxuXHRcdFx0XHRjdXN0b21IZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGN1c3RvbUhlYWRlcikge1xyXG5cdFx0XHRcdFx0aWYgKCEhY3VzdG9tSGVhZGVyLmhlYWRlciAmJiAhIWN1c3RvbUhlYWRlci52YWx1ZSkge1xyXG5cdFx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihjdXN0b21IZWFkZXIuaGVhZGVyLCBjdXN0b21IZWFkZXIudmFsdWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB4aHI7XHJcblx0fSxcclxuXHJcblx0ZmV0Y2g6IGFzeW5jIGZ1bmN0aW9uKHJlc291cmNlKSB7XHJcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHRcdGlmICh0aGlzLmNvbmZpZy5jdXN0b21IZWFkZXJzKSB7XHJcblx0XHRcdHRoaXMuY29uZmlnLmN1c3RvbUhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoY3VzdG9tSGVhZGVyKSB7XHJcblx0XHRcdFx0aWYgKCEhY3VzdG9tSGVhZGVyLmhlYWRlciAmJiAhIWN1c3RvbUhlYWRlci52YWx1ZSkge1xyXG5cdFx0XHRcdFx0aGVhZGVycy5hcHBlbmQoY3VzdG9tSGVhZGVyLmhlYWRlciwgY3VzdG9tSGVhZGVyLnZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0aGVhZGVycyxcclxuXHRcdFx0Y3JlZGVudGlhbHM6IFhIUkZhY3RvcnkuY29uZmlnLndpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbidcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZmV0Y2gocmVzb3VyY2UsIG9wdGlvbnMpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB7WEhSRmFjdG9yeX07IiwiLypcclxuKiogQmluYXJ5IEhlYXAgaW1wbGVtZW50YXRpb24gaW4gSmF2YXNjcmlwdFxyXG4qKiBGcm9tOiBodHRwOi8vZWxvcXVlbnRqYXZhc2NyaXB0Lm5ldC8xc3RfZWRpdGlvbi9hcHBlbmRpeDIuaHRtbHRcclxuKipcclxuKiogQ29weXJpZ2h0IChjKSAyMDA3IE1hcmlqbiBIYXZlcmJla2UsIGxhc3QgbW9kaWZpZWQgb24gTm92ZW1iZXIgMjggMjAxMy5cclxuKipcclxuKiogTGljZW5zZWQgdW5kZXIgYSBDcmVhdGl2ZSBDb21tb25zIGF0dHJpYnV0aW9uLW5vbmNvbW1lcmNpYWwgbGljZW5zZS4gXHJcbioqIEFsbCBjb2RlIGluIHRoaXMgYm9vayBtYXkgYWxzbyBiZSBjb25zaWRlcmVkIGxpY2Vuc2VkIHVuZGVyIGFuIE1JVCBsaWNlbnNlLlxyXG4qL1xyXG5cclxuZnVuY3Rpb24gQmluYXJ5SGVhcChzY29yZUZ1bmN0aW9uKVxyXG57XHJcblx0dGhpcy5jb250ZW50ID0gW107XHJcblx0dGhpcy5zY29yZUZ1bmN0aW9uID0gc2NvcmVGdW5jdGlvbjtcclxufVxyXG5cclxuQmluYXJ5SGVhcC5wcm90b3R5cGUgPVxyXG57XHJcblx0cHVzaDogZnVuY3Rpb24oZWxlbWVudClcclxuXHR7XHJcblx0XHQvLyBBZGQgdGhlIG5ldyBlbGVtZW50IHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxyXG5cdFx0dGhpcy5jb250ZW50LnB1c2goZWxlbWVudCk7XHJcblx0XHQvLyBBbGxvdyBpdCB0byBidWJibGUgdXAuXHJcblx0XHR0aGlzLmJ1YmJsZVVwKHRoaXMuY29udGVudC5sZW5ndGggLSAxKTtcclxuXHR9LFxyXG5cclxuXHRwb3A6IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHQvLyBTdG9yZSB0aGUgZmlyc3QgZWxlbWVudCBzbyB3ZSBjYW4gcmV0dXJuIGl0IGxhdGVyLlxyXG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuY29udGVudFswXTtcclxuXHRcdC8vIEdldCB0aGUgZWxlbWVudCBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheS5cclxuXHRcdHZhciBlbmQgPSB0aGlzLmNvbnRlbnQucG9wKCk7XHJcblx0XHQvLyBJZiB0aGVyZSBhcmUgYW55IGVsZW1lbnRzIGxlZnQsIHB1dCB0aGUgZW5kIGVsZW1lbnQgYXQgdGhlXHJcblx0XHQvLyBzdGFydCwgYW5kIGxldCBpdCBzaW5rIGRvd24uXHJcblx0XHRpZih0aGlzLmNvbnRlbnQubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb250ZW50WzBdID0gZW5kO1xyXG5cdFx0XHR0aGlzLnNpbmtEb3duKDApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9LFxyXG5cclxuXHRyZW1vdmU6IGZ1bmN0aW9uKG5vZGUpXHJcblx0e1xyXG5cdFx0dmFyIGxlbmd0aCA9IHRoaXMuY29udGVudC5sZW5ndGg7XHJcblx0XHQvLyBUbyByZW1vdmUgYSB2YWx1ZSwgd2UgbXVzdCBzZWFyY2ggdGhyb3VnaCB0aGUgYXJyYXkgdG8gZmluZFxyXG5cdFx0Ly8gaXQuXHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMuY29udGVudFtpXSAhPSBub2RlKSBjb250aW51ZTtcclxuXHRcdFx0Ly8gV2hlbiBpdCBpcyBmb3VuZCwgdGhlIHByb2Nlc3Mgc2VlbiBpbiAncG9wJyBpcyByZXBlYXRlZFxyXG5cdFx0XHQvLyB0byBmaWxsIHVwIHRoZSBob2xlLlxyXG5cdFx0XHR2YXIgZW5kID0gdGhpcy5jb250ZW50LnBvcCgpO1xyXG5cdFx0XHQvLyBJZiB0aGUgZWxlbWVudCB3ZSBwb3BwZWQgd2FzIHRoZSBvbmUgd2UgbmVlZGVkIHRvIHJlbW92ZSxcclxuXHRcdFx0Ly8gd2UncmUgZG9uZS5cclxuXHRcdFx0aWYoaSA9PSBsZW5ndGggLSAxKSBicmVhaztcclxuXHRcdFx0Ly8gT3RoZXJ3aXNlLCB3ZSByZXBsYWNlIHRoZSByZW1vdmVkIGVsZW1lbnQgd2l0aCB0aGUgcG9wcGVkXHJcblx0XHRcdC8vIG9uZSwgYW5kIGFsbG93IGl0IHRvIGZsb2F0IHVwIG9yIHNpbmsgZG93biBhcyBhcHByb3ByaWF0ZS5cclxuXHRcdFx0dGhpcy5jb250ZW50W2ldID0gZW5kO1xyXG5cdFx0XHR0aGlzLmJ1YmJsZVVwKGkpO1xyXG5cdFx0XHR0aGlzLnNpbmtEb3duKGkpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRzaXplOiBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7XHJcblx0fSxcclxuXHJcblx0YnViYmxlVXA6IGZ1bmN0aW9uKG4pXHJcblx0e1xyXG5cdFx0Ly8gRmV0Y2ggdGhlIGVsZW1lbnQgdGhhdCBoYXMgdG8gYmUgbW92ZWQuXHJcblx0XHR2YXIgZWxlbWVudCA9IHRoaXMuY29udGVudFtuXSwgc2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oZWxlbWVudCk7XHJcblx0XHQvLyBXaGVuIGF0IDAsIGFuIGVsZW1lbnQgY2FuIG5vdCBnbyB1cCBhbnkgZnVydGhlci5cclxuXHRcdHdoaWxlKG4gPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBDb21wdXRlIHRoZSBwYXJlbnQgZWxlbWVudCdzIGluZGV4LCBhbmQgZmV0Y2ggaXQuXHJcblx0XHRcdHZhciBwYXJlbnROID0gTWF0aC5mbG9vcigobiArIDEpIC8gMikgLSAxLFxyXG5cdFx0XHRwYXJlbnQgPSB0aGlzLmNvbnRlbnRbcGFyZW50Tl07XHJcblx0XHRcdC8vIElmIHRoZSBwYXJlbnQgaGFzIGEgbGVzc2VyIHNjb3JlLCB0aGluZ3MgYXJlIGluIG9yZGVyIGFuZCB3ZVxyXG5cdFx0XHQvLyBhcmUgZG9uZS5cclxuXHRcdFx0aWYoc2NvcmUgPj0gdGhpcy5zY29yZUZ1bmN0aW9uKHBhcmVudCkpXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHQvLyBPdGhlcndpc2UsIHN3YXAgdGhlIHBhcmVudCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQgYW5kXHJcblx0XHRcdC8vIGNvbnRpbnVlLlxyXG5cdFx0XHR0aGlzLmNvbnRlbnRbcGFyZW50Tl0gPSBlbGVtZW50O1xyXG5cdFx0XHR0aGlzLmNvbnRlbnRbbl0gPSBwYXJlbnQ7XHJcblx0XHRcdG4gPSBwYXJlbnROO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHNpbmtEb3duOiBmdW5jdGlvbihuKVxyXG5cdHtcclxuXHRcdC8vIExvb2sgdXAgdGhlIHRhcmdldCBlbGVtZW50IGFuZCBpdHMgc2NvcmUuXHJcblx0XHR2YXIgbGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aCxcclxuXHRcdGVsZW1lbnQgPSB0aGlzLmNvbnRlbnRbbl0sXHJcblx0XHRlbGVtU2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oZWxlbWVudCk7XHJcblxyXG5cdFx0d2hpbGUodHJ1ZSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gQ29tcHV0ZSB0aGUgaW5kaWNlcyBvZiB0aGUgY2hpbGQgZWxlbWVudHMuXHJcblx0XHRcdHZhciBjaGlsZDJOID0gKG4gKyAxKSAqIDIsIGNoaWxkMU4gPSBjaGlsZDJOIC0gMTtcclxuXHRcdFx0Ly8gVGhpcyBpcyB1c2VkIHRvIHN0b3JlIHRoZSBuZXcgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQsXHJcblx0XHRcdC8vIGlmIGFueS5cclxuXHRcdFx0dmFyIHN3YXAgPSBudWxsO1xyXG5cdFx0XHQvLyBJZiB0aGUgZmlyc3QgY2hpbGQgZXhpc3RzIChpcyBpbnNpZGUgdGhlIGFycmF5KS4uLlxyXG5cdFx0XHRpZihjaGlsZDFOIDwgbGVuZ3RoKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gTG9vayBpdCB1cCBhbmQgY29tcHV0ZSBpdHMgc2NvcmUuXHJcblx0XHRcdFx0dmFyIGNoaWxkMSA9IHRoaXMuY29udGVudFtjaGlsZDFOXSxcclxuXHRcdFx0XHRjaGlsZDFTY29yZSA9IHRoaXMuc2NvcmVGdW5jdGlvbihjaGlsZDEpO1xyXG5cdFx0XHRcdC8vIElmIHRoZSBzY29yZSBpcyBsZXNzIHRoYW4gb3VyIGVsZW1lbnQncywgd2UgbmVlZCB0byBzd2FwLlxyXG5cdFx0XHRcdGlmKGNoaWxkMVNjb3JlIDwgZWxlbVNjb3JlKVxyXG5cdFx0XHRcdFx0c3dhcCA9IGNoaWxkMU47XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gRG8gdGhlIHNhbWUgY2hlY2tzIGZvciB0aGUgb3RoZXIgY2hpbGQuXHJcblx0XHRcdGlmKGNoaWxkMk4gPCBsZW5ndGgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgY2hpbGQyID0gdGhpcy5jb250ZW50W2NoaWxkMk5dLFxyXG5cdFx0XHRcdGNoaWxkMlNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGNoaWxkMik7XHJcblx0XHRcdFx0aWYoY2hpbGQyU2NvcmUgPCAoc3dhcCA9PSBudWxsID8gZWxlbVNjb3JlIDogY2hpbGQxU2NvcmUpKVxyXG5cdFx0XHRcdFx0c3dhcCA9IGNoaWxkMk47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIE5vIG5lZWQgdG8gc3dhcCBmdXJ0aGVyLCB3ZSBhcmUgZG9uZS5cclxuXHRcdFx0aWYoc3dhcCA9PSBudWxsKSBicmVhaztcclxuXHJcblx0XHRcdC8vIE90aGVyd2lzZSwgc3dhcCBhbmQgY29udGludWUuXHJcblx0XHRcdHRoaXMuY29udGVudFtuXSA9IHRoaXMuY29udGVudFtzd2FwXTtcclxuXHRcdFx0dGhpcy5jb250ZW50W3N3YXBdID0gZWxlbWVudDtcclxuXHRcdFx0biA9IHN3YXA7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtCaW5hcnlIZWFwfTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5pbXBvcnQge1BvaW50QXR0cmlidXRlTmFtZXN9IGZyb20gXCIuLi9Qb2ludEF0dHJpYnV0ZXMuanNcIjtcclxuaW1wb3J0IHtWZXJzaW9uVXRpbHN9IGZyb20gXCIuLi91dGlscy9WZXJzaW9uVXRpbHMuanNcIjtcclxuaW1wb3J0IHtXb3JrZXJNYW5hZ2VyfSBmcm9tIFwiLi4vdXRpbHMvV29ya2VyTWFuYWdlci5qc1wiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uL0dsb2JhbC5qc1wiO1xyXG5pbXBvcnQgeyBYSFJGYWN0b3J5IH0gZnJvbSAnLi4vWEhSRmFjdG9yeS5qcyc7XHJcblxyXG5jbGFzcyBCaW5hcnlMb2FkZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKHZlcnNpb24sIGJvdW5kaW5nQm94LCBzY2FsZSlcclxuXHR7XHJcblx0XHRpZih0eXBlb2YodmVyc2lvbikgPT09IFwic3RyaW5nXCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudmVyc2lvbiA9IG5ldyBWZXJzaW9uVXRpbHModmVyc2lvbik7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ib3VuZGluZ0JveCA9IGJvdW5kaW5nQm94O1xyXG5cdFx0dGhpcy5zY2FsZSA9IHNjYWxlO1xyXG5cdH1cclxuXHJcblx0bG9hZChub2RlKVxyXG5cdHtcclxuXHRcdGlmKG5vZGUubG9hZGVkKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHVybCA9IG5vZGUuZ2V0VVJMKCk7XHJcblxyXG5cdFx0aWYodGhpcy52ZXJzaW9uLmVxdWFsT3JIaWdoZXIoXCIxLjRcIikpXHJcblx0XHR7XHJcblx0XHRcdHVybCArPSBcIi5iaW5cIjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIHhociA9IFhIUkZhY3RvcnkuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcblx0XHR4aHIucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG5cdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXgtdXNlci1kZWZpbmVkXCIpO1xyXG5cdFx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uKClcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxmLnBhcnNlKG5vZGUsIHhoci5yZXNwb25zZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdEdsb2JhbC5udW1Ob2Rlc0xvYWRpbmctLTtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUG90cmVlOiBFeGNlcHRpb24gdGhyb3duIHBhcnNpbmcgcG9pbnRzLlwiLCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHhoci5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpXHJcblx0XHR7XHJcblx0XHRcdEdsb2JhbC5udW1Ob2Rlc0xvYWRpbmctLTtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlBvdHJlZTogRmFpbGVkIHRvIGxvYWQgZmlsZS5cIiwgeGhyLCB1cmwpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR4aHIuc2VuZChudWxsKTtcclxuXHR9O1xyXG5cclxuXHRwYXJzZShub2RlLCBidWZmZXIpXHJcblx0e1xyXG5cdFx0dmFyIHBvaW50QXR0cmlidXRlcyA9IG5vZGUucGNvR2VvbWV0cnkucG9pbnRBdHRyaWJ1dGVzO1xyXG5cdFx0dmFyIG51bVBvaW50cyA9IGJ1ZmZlci5ieXRlTGVuZ3RoIC8gbm9kZS5wY29HZW9tZXRyeS5wb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemU7XHJcblxyXG5cdFx0aWYodGhpcy52ZXJzaW9uLnVwVG8oXCIxLjVcIikpXHJcblx0XHR7XHJcblx0XHRcdG5vZGUubnVtUG9pbnRzID0gbnVtUG9pbnRzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBtZXNzYWdlID1cclxuXHRcdHtcclxuXHRcdFx0YnVmZmVyOiBidWZmZXIsXHJcblx0XHRcdHBvaW50QXR0cmlidXRlczogcG9pbnRBdHRyaWJ1dGVzLFxyXG5cdFx0XHR2ZXJzaW9uOiB0aGlzLnZlcnNpb24udmVyc2lvbixcclxuXHRcdFx0bWluOiBbbm9kZS5ib3VuZGluZ0JveC5taW4ueCwgbm9kZS5ib3VuZGluZ0JveC5taW4ueSwgbm9kZS5ib3VuZGluZ0JveC5taW4uel0sXHJcblx0XHRcdG9mZnNldDogW25vZGUucGNvR2VvbWV0cnkub2Zmc2V0LngsIG5vZGUucGNvR2VvbWV0cnkub2Zmc2V0LnksIG5vZGUucGNvR2VvbWV0cnkub2Zmc2V0LnpdLFxyXG5cdFx0XHRzY2FsZTogdGhpcy5zY2FsZSxcclxuXHRcdFx0c3BhY2luZzogbm9kZS5zcGFjaW5nLFxyXG5cdFx0XHRoYXNDaGlsZHJlbjogbm9kZS5oYXNDaGlsZHJlbixcclxuXHRcdFx0bmFtZTogbm9kZS5uYW1lXHJcblx0XHR9O1xyXG5cclxuXHRcdEdsb2JhbC53b3JrZXJQb29sLnJ1blRhc2soV29ya2VyTWFuYWdlci5CSU5BUllfREVDT0RFUiwgZnVuY3Rpb24oZSlcclxuXHRcdHtcclxuXHRcdFx0dmFyIGRhdGEgPSBlLmRhdGE7XHJcblxyXG5cdFx0XHRpZihkYXRhLmVycm9yICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nLS07XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlBvdHJlZTogQmluYXJ5IHdvcmtlciBlcnJvci5cIiwgZGF0YSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgYnVmZmVycyA9IGRhdGEuYXR0cmlidXRlQnVmZmVycztcclxuXHRcdFx0dmFyIHRpZ2h0Qm91bmRpbmdCb3ggPSBuZXcgVEhSRUUuQm94MyhuZXcgVEhSRUUuVmVjdG9yMygpLmZyb21BcnJheShkYXRhLnRpZ2h0Qm91bmRpbmdCb3gubWluKSwgbmV3IFRIUkVFLlZlY3RvcjMoKS5mcm9tQXJyYXkoZGF0YS50aWdodEJvdW5kaW5nQm94Lm1heCkpO1xyXG5cdFx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcclxuXHJcblx0XHRcdGZvcih2YXIgcHJvcGVydHkgaW4gYnVmZmVycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBidWZmZXIgPSBidWZmZXJzW3Byb3BlcnR5XS5idWZmZXI7XHJcblxyXG5cdFx0XHRcdGlmKHBhcnNlSW50KHByb3BlcnR5KSA9PT0gUG9pbnRBdHRyaWJ1dGVOYW1lcy5QT1NJVElPTl9DQVJURVNJQU4pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlciksIDMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihwYXJzZUludChwcm9wZXJ0eSkgPT09IFBvaW50QXR0cmlidXRlTmFtZXMuQ09MT1JfUEFDS0VEKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSwgNCwgdHJ1ZSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHBhcnNlSW50KHByb3BlcnR5KSA9PT0gUG9pbnRBdHRyaWJ1dGVOYW1lcy5JTlRFTlNJVFkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiaW50ZW5zaXR5XCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShidWZmZXIpLCAxKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYocGFyc2VJbnQocHJvcGVydHkpID09PSBQb2ludEF0dHJpYnV0ZU5hbWVzLkNMQVNTSUZJQ0FUSU9OKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzaWZpY2F0aW9uXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSwgMSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHBhcnNlSW50KHByb3BlcnR5KSA9PT0gUG9pbnRBdHRyaWJ1dGVOYW1lcy5OT1JNQUxfU1BIRVJFTUFQUEVEKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcIm5vcm1hbFwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKSwgMykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHBhcnNlSW50KHByb3BlcnR5KSA9PT0gUG9pbnRBdHRyaWJ1dGVOYW1lcy5OT1JNQUxfT0NUMTYpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKFwibm9ybWFsXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShidWZmZXIpLCAzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYocGFyc2VJbnQocHJvcGVydHkpID09PSBQb2ludEF0dHJpYnV0ZU5hbWVzLk5PUk1BTClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJub3JtYWxcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlciksIDMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihwYXJzZUludChwcm9wZXJ0eSkgPT09IFBvaW50QXR0cmlidXRlTmFtZXMuSU5ESUNFUylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgYnVmZmVyQXR0cmlidXRlID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDhBcnJheShidWZmZXIpLCA0KTtcclxuXHRcdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZS5ub3JtYWxpemVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImluZGljZXNcIiwgYnVmZmVyQXR0cmlidXRlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihwYXJzZUludChwcm9wZXJ0eSkgPT09IFBvaW50QXR0cmlidXRlTmFtZXMuU1BBQ0lORylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgYnVmZmVyQXR0cmlidXRlID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlciksIDEpO1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKFwic3BhY2luZ1wiLCBidWZmZXJBdHRyaWJ1dGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGlnaHRCb3VuZGluZ0JveC5tYXguc3ViKHRpZ2h0Qm91bmRpbmdCb3gubWluKTtcclxuXHRcdFx0dGlnaHRCb3VuZGluZ0JveC5taW4uc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdFx0dmFyIG51bVBvaW50cyA9IGUuZGF0YS5idWZmZXIuYnl0ZUxlbmd0aCAvIHBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZTtcclxuXHJcblx0XHRcdG5vZGUubnVtUG9pbnRzID0gbnVtUG9pbnRzO1xyXG5cdFx0XHRub2RlLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XHJcblx0XHRcdG5vZGUubWVhbiA9IG5ldyBUSFJFRS5WZWN0b3IzKC4uLmRhdGEubWVhbik7XHJcblx0XHRcdG5vZGUudGlnaHRCb3VuZGluZ0JveCA9IHRpZ2h0Qm91bmRpbmdCb3g7XHJcblx0XHRcdG5vZGUubG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0bm9kZS5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdG5vZGUuZXN0aW1hdGVkU3BhY2luZyA9IGRhdGEuZXN0aW1hdGVkU3BhY2luZztcclxuXHRcdFx0R2xvYmFsLm51bU5vZGVzTG9hZGluZy0tO1xyXG5cdFx0fSwgbWVzc2FnZSwgW21lc3NhZ2UuYnVmZmVyXSk7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCB7QmluYXJ5TG9hZGVyfTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQge1BvaW50Q2xvdWRFcHRHZW9tZXRyeSwgUG9pbnRDbG91ZEVwdEdlb21ldHJ5Tm9kZX0gZnJvbSBcIi4uL3BvaW50Y2xvdWQvZ2VvbWV0cmllcy9Qb2ludENsb3VkRXB0R2VvbWV0cnkuanNcIjtcclxuaW1wb3J0IHsgWEhSRmFjdG9yeSB9IGZyb20gXCIuLi9YSFJGYWN0b3J5LmpzXCI7XHJcblxyXG4vKipcclxuICogQGF1dGhvciBDb25ub3IgTWFubmluZ1xyXG4gKi9cclxuY2xhc3MgRXB0TG9hZGVyXHJcbntcclxuXHRzdGF0aWMgYXN5bmMgbG9hZChmaWxlLCBjYWxsYmFjaylcclxuXHR7XHJcblx0XHR2YXIgcmVzcG9uc2UgPSBhd2FpdCBYSFJGYWN0b3J5LmZldGNoKGZpbGUpO1xyXG5cdFx0dmFyIGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHR2YXIgdXJsID0gZmlsZS5zdWJzdHIoMCwgZmlsZS5sYXN0SW5kZXhPZihcImVwdC5qc29uXCIpKTtcclxuXHJcblx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgUG9pbnRDbG91ZEVwdEdlb21ldHJ5KHVybCwganNvbik7XHJcblx0XHR2YXIgcm9vdCA9IG5ldyBQb2ludENsb3VkRXB0R2VvbWV0cnlOb2RlKGdlb21ldHJ5KTtcclxuXHRcdGdlb21ldHJ5LnJvb3QgPSByb290O1xyXG5cdFx0Z2VvbWV0cnkucm9vdC5sb2FkKCk7XHJcblxyXG5cdFx0Y2FsbGJhY2soZ2VvbWV0cnkpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB7RXB0TG9hZGVyfTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQge1BvaW50QXR0cmlidXRlTmFtZXN9IGZyb20gXCIuLi9Qb2ludEF0dHJpYnV0ZXMuanNcIjtcclxuaW1wb3J0IHtWZXJzaW9uVXRpbHN9IGZyb20gXCIuLi91dGlscy9WZXJzaW9uVXRpbHMuanNcIjtcclxuaW1wb3J0IHtXb3JrZXJNYW5hZ2VyfSBmcm9tIFwiLi4vdXRpbHMvV29ya2VyTWFuYWdlci5qc1wiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uL0dsb2JhbC5qc1wiO1xyXG5pbXBvcnQge1hIUkZhY3Rvcnl9IGZyb20gXCIuLi9YSFJGYWN0b3J5LmpzXCI7XHJcblxyXG5jbGFzcyBHcmV5aG91bmRCaW5hcnlMb2FkZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKHZlcnNpb24sIGJvdW5kaW5nQm94LCBzY2FsZSlcclxuXHR7XHJcblx0XHRpZih0eXBlb2YodmVyc2lvbikgPT09IFwic3RyaW5nXCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudmVyc2lvbiA9IG5ldyBWZXJzaW9uVXRpbHModmVyc2lvbik7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ib3VuZGluZ0JveCA9IGJvdW5kaW5nQm94O1xyXG5cdFx0dGhpcy5zY2FsZSA9IHNjYWxlO1xyXG5cdH1cclxuXHJcblx0bG9hZChub2RlKVxyXG5cdHtcclxuXHRcdGlmKG5vZGUubG9hZGVkKSByZXR1cm47XHJcblxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIHVybCA9IG5vZGUuZ2V0VVJMKCk7XHJcblxyXG5cdFx0dmFyIHhociA9IFhIUkZhY3RvcnkuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9wbGFpblwiKTtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcblx0XHR4aHIucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG5cdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXgtdXNlci1kZWZpbmVkXCIpO1xyXG5cdFx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uKClcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxmLnBhcnNlKG5vZGUsIHhoci5yZXNwb25zZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJQb3RyZWU6IEV4Y2VwdGlvbiB0aHJvd24gcGFyc2luZyBwb2ludHMuXCIsIGUpO1xyXG5cdFx0XHRcdEdsb2JhbC5udW1Ob2Rlc0xvYWRpbmctLTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHhoci5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpXHJcblx0XHR7XHJcblx0XHRcdEdsb2JhbC5udW1Ob2Rlc0xvYWRpbmctLTtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlBvdHJlZTogRmFpbGVkIHRvIGxvYWQgZmlsZS5cIiwgeGhyLCB1cmwpO1xyXG5cdFx0fTtcclxuXHRcdHhoci5zZW5kKG51bGwpO1xyXG5cdH1cclxuXHJcblx0cGFyc2Uobm9kZSwgYnVmZmVyKVxyXG5cdHtcclxuXHRcdHZhciBOVU1fUE9JTlRTX0JZVEVTID0gNDtcclxuXHRcdHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgYnVmZmVyLmJ5dGVMZW5ndGggLSBOVU1fUE9JTlRTX0JZVEVTLCBOVU1fUE9JTlRTX0JZVEVTKTtcclxuXHRcdHZhciBudW1Qb2ludHMgPSB2aWV3LmdldFVpbnQzMigwLCB0cnVlKTtcclxuXHRcdHZhciBwb2ludEF0dHJpYnV0ZXMgPSBub2RlLnBjb0dlb21ldHJ5LnBvaW50QXR0cmlidXRlcztcclxuXHJcblx0XHRub2RlLm51bVBvaW50cyA9IG51bVBvaW50cztcclxuXHJcblx0XHR2YXIgYmIgPSBub2RlLmJvdW5kaW5nQm94O1xyXG5cdFx0dmFyIGNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHR2YXIgbm9kZU9mZnNldCA9IG5vZGUucGNvR2VvbWV0cnkuYm91bmRpbmdCb3guZ2V0Q2VudGVyKGNlbnRlcikuc3ViKG5vZGUuYm91bmRpbmdCb3gubWluKTtcclxuXHJcblx0XHR2YXIgbWVzc2FnZSA9XHJcblx0XHR7XHJcblx0XHRcdGJ1ZmZlcjogYnVmZmVyLFxyXG5cdFx0XHRwb2ludEF0dHJpYnV0ZXM6IHBvaW50QXR0cmlidXRlcyxcclxuXHRcdFx0dmVyc2lvbjogdGhpcy52ZXJzaW9uLnZlcnNpb24sXHJcblx0XHRcdHNjaGVtYTogbm9kZS5wY29HZW9tZXRyeS5zY2hlbWEsXHJcblx0XHRcdG1pbjogW2JiLm1pbi54LCBiYi5taW4ueSwgYmIubWluLnpdLFxyXG5cdFx0XHRtYXg6IFtiYi5tYXgueCwgYmIubWF4LnksIGJiLm1heC56XSxcclxuXHRcdFx0b2Zmc2V0OiBub2RlT2Zmc2V0LnRvQXJyYXkoKSxcclxuXHRcdFx0c2NhbGU6IHRoaXMuc2NhbGUsXHJcblx0XHRcdG5vcm1hbGl6ZTogbm9kZS5wY29HZW9tZXRyeS5ub3JtYWxpemVcclxuXHRcdH07XHJcblxyXG5cdFx0R2xvYmFsLndvcmtlclBvb2wucnVuVGFzayhXb3JrZXJNYW5hZ2VyLkdSRVlIT1VORCwgZnVuY3Rpb24oZSlcclxuXHRcdHtcclxuXHRcdFx0dmFyIGRhdGEgPSBlLmRhdGE7XHJcblx0XHRcdHZhciBidWZmZXJzID0gZGF0YS5hdHRyaWJ1dGVCdWZmZXJzO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHRpZ2h0Qm91bmRpbmdCb3ggPSBuZXcgVEhSRUUuQm94M1xyXG5cdFx0XHQoXHJcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoKS5mcm9tQXJyYXkoZGF0YS50aWdodEJvdW5kaW5nQm94Lm1pbiksXHJcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoKS5mcm9tQXJyYXkoZGF0YS50aWdodEJvdW5kaW5nQm94Lm1heClcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBwcm9wZXJ0eSBpbiBidWZmZXJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIGJ1ZmZlciA9IGJ1ZmZlcnNbcHJvcGVydHldLmJ1ZmZlcjtcclxuXHJcblx0XHRcdFx0aWYocGFyc2VJbnQocHJvcGVydHkpID09PSBQb2ludEF0dHJpYnV0ZU5hbWVzLlBPU0lUSU9OX0NBUlRFU0lBTilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKSwgMykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHBhcnNlSW50KHByb3BlcnR5KSA9PT0gUG9pbnRBdHRyaWJ1dGVOYW1lcy5DT0xPUl9QQUNLRUQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiY29sb3JcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDhBcnJheShidWZmZXIpLCA0LCB0cnVlKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYocGFyc2VJbnQocHJvcGVydHkpID09PSBQb2ludEF0dHJpYnV0ZU5hbWVzLklOVEVOU0lUWSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJpbnRlbnNpdHlcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlciksIDEpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihwYXJzZUludChwcm9wZXJ0eSkgPT09IFBvaW50QXR0cmlidXRlTmFtZXMuQ0xBU1NJRklDQVRJT04pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NpZmljYXRpb25cIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDhBcnJheShidWZmZXIpLCAxKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYocGFyc2VJbnQocHJvcGVydHkpID09PSBQb2ludEF0dHJpYnV0ZU5hbWVzLk5PUk1BTF9TUEhFUkVNQVBQRUQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKFwibm9ybWFsXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShidWZmZXIpLCAzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYocGFyc2VJbnQocHJvcGVydHkpID09PSBQb2ludEF0dHJpYnV0ZU5hbWVzLk5PUk1BTF9PQ1QxNilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJub3JtYWxcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlciksIDMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihwYXJzZUludChwcm9wZXJ0eSkgPT09IFBvaW50QXR0cmlidXRlTmFtZXMuTk9STUFMKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcIm5vcm1hbFwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKSwgMykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHBhcnNlSW50KHByb3BlcnR5KSA9PT0gUG9pbnRBdHRyaWJ1dGVOYW1lcy5JTkRJQ0VTKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBidWZmZXJBdHRyaWJ1dGUgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciksIDQpO1xyXG5cdFx0XHRcdFx0YnVmZmVyQXR0cmlidXRlLm5vcm1hbGl6ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiaW5kaWNlc1wiLCBidWZmZXJBdHRyaWJ1dGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHBhcnNlSW50KHByb3BlcnR5KSA9PT0gUG9pbnRBdHRyaWJ1dGVOYW1lcy5TUEFDSU5HKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBidWZmZXJBdHRyaWJ1dGUgPSBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKSwgMSk7XHJcblx0XHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJzcGFjaW5nXCIsIGJ1ZmZlckF0dHJpYnV0ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aWdodEJvdW5kaW5nQm94Lm1heC5zdWIodGlnaHRCb3VuZGluZ0JveC5taW4pO1xyXG5cdFx0XHR0aWdodEJvdW5kaW5nQm94Lm1pbi5zZXQoMCwgMCwgMCk7XHJcblxyXG5cdFx0XHRub2RlLm51bVBvaW50cyA9IGRhdGEubnVtUG9pbnRzO1xyXG5cdFx0XHRub2RlLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XHJcblx0XHRcdG5vZGUubWVhbiA9IG5ldyBUSFJFRS5WZWN0b3IzKC4uLmRhdGEubWVhbik7XHJcblx0XHRcdG5vZGUudGlnaHRCb3VuZGluZ0JveCA9IHRpZ2h0Qm91bmRpbmdCb3g7XHJcblx0XHRcdG5vZGUubG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0bm9kZS5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdEdsb2JhbC5udW1Ob2Rlc0xvYWRpbmctLTtcclxuXHRcdH0sIG1lc3NhZ2UsIFttZXNzYWdlLmJ1ZmZlcl0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtHcmV5aG91bmRCaW5hcnlMb2FkZXJ9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHtQb2ludEF0dHJpYnV0ZXMsIFBvaW50QXR0cmlidXRlfSBmcm9tIFwiLi4vUG9pbnRBdHRyaWJ1dGVzLmpzXCI7XHJcbmltcG9ydCB7UG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5LCBQb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnlOb2RlfSBmcm9tIFwiLi4vcG9pbnRjbG91ZC9nZW9tZXRyaWVzL1BvaW50Q2xvdWRHcmV5aG91bmRHZW9tZXRyeS5qc1wiO1xyXG5pbXBvcnQge0dyZXlob3VuZEJpbmFyeUxvYWRlcn0gZnJvbSBcIi4vR3JleWhvdW5kQmluYXJ5TG9hZGVyLmpzXCI7XHJcbmltcG9ydCB7VmVyc2lvblV0aWxzfSBmcm9tIFwiLi4vdXRpbHMvVmVyc2lvblV0aWxzLmpzXCI7XHJcbmltcG9ydCB7R3JleWhvdW5kVXRpbHN9IGZyb20gXCIuL0dyZXlob3VuZFV0aWxzLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBHcmV5aG91bmRMb2FkZXIoKXt9XHJcblxyXG5HcmV5aG91bmRMb2FkZXIubG9hZEluZm9KU09OID0gZnVuY3Rpb24odXJsLCBjYWxsYmFjayl7fTtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIGEgcG9pbnQgY2xvdWQgb2N0cmVlIHdpdGggdGhlIHJvb3Qgbm9kZSBkYXRhIGxvYWRlZC5cclxuICogbG9hZGluZyBvZiBkZXNjZW5kYW50cyBoYXBwZW5zIGFzeW5jaHJvbm91c2x5IHdoZW4gdGhleVwicmUgbmVlZGVkXHJcbiAqXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHBhcmFtIGxvYWRpbmdGaW5pc2hlZExpc3RlbmVyIGV4ZWN1dGVkIGFmdGVyIGxvYWRpbmcgdGhlIGJpbmFyeSBoYXMgYmVlblxyXG4gKiBmaW5pc2hlZFxyXG4gKi9cclxuR3JleWhvdW5kTG9hZGVyLmxvYWQgPSBmdW5jdGlvbih1cmwsIGNhbGxiYWNrKVxyXG57XHJcblx0dmFyIEhJRVJBUkNIWV9TVEVQX1NJWkUgPSA1O1xyXG5cclxuXHR0cnlcclxuXHR7XHJcblx0XHQvL1dlIGFzc3VtZSBldmVyeXRoaW5nIGF0ZXIgdGhlIHN0cmluZyBcImdyZXlob3VuZDovL1wiIGlzIHRoZSBzZXJ2ZXIgdXJsXHJcblx0XHR2YXIgc2VydmVyVVJMID0gdXJsLnNwbGl0KFwiZ3JleWhvdW5kOi8vXCIpWzFdO1xyXG5cdFx0aWYoc2VydmVyVVJMLnNwbGl0KFwiaHR0cDovL1wiKS5sZW5ndGggPT09IDEgJiYgc2VydmVyVVJMLnNwbGl0KFwiaHR0cHM6Ly9cIikubGVuZ3RoID09PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHRzZXJ2ZXJVUkwgPSBcImh0dHA6Ly9cIiArIHNlcnZlclVSTDtcclxuXHRcdH1cclxuXHJcblx0XHRHcmV5aG91bmRVdGlscy5mZXRjaChzZXJ2ZXJVUkwgKyBcImluZm9cIiwgZnVuY3Rpb24oZXJyLCBkYXRhKVxyXG5cdFx0e1xyXG5cdFx0XHRpZihlcnIpIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG5cclxuXHRcdFx0LyogV2UgcGFyc2UgdGhlIHJlc3VsdCBvZiB0aGUgaW5mbyBxdWVyeSwgd2hpY2ggc2hvdWxkIGJlIGEgSlNPTiBkYXRhc3RydWN0dXJlIHNvbWV3aGF0IGxpa2U6XHJcblx0XHRcdHtcclxuXHRcdFx0ICBcImJvdW5kc1wiOiBbNjM1NTc3LCA4NDg4ODIsIC0xMDAwLCA2MzkwMDQsIDg1MzUzOCwgMjAwMF0sXHJcblx0XHRcdCAgXCJudW1Qb2ludHNcIjogMTA2NTMzMzYsXHJcblx0XHRcdCAgXCJzY2hlbWFcIjogW1xyXG5cdFx0XHQgICAgICB7IFwibmFtZVwiOiBcIlhcIiwgXCJzaXplXCI6IDgsIFwidHlwZVwiOiBcImZsb2F0aW5nXCIgfSxcclxuXHRcdFx0ICAgICAgeyBcIm5hbWVcIjogXCJZXCIsIFwic2l6ZVwiOiA4LCBcInR5cGVcIjogXCJmbG9hdGluZ1wiIH0sXHJcblx0XHRcdCAgICAgIHsgXCJuYW1lXCI6IFwiWlwiLCBcInNpemVcIjogOCwgXCJ0eXBlXCI6IFwiZmxvYXRpbmdcIiB9LFxyXG5cdFx0XHQgICAgICB7IFwibmFtZVwiOiBcIkludGVuc2l0eVwiLCBcInNpemVcIjogMiwgXCJ0eXBlXCI6IFwidW5zaWduZWRcIiB9LFxyXG5cdFx0XHQgICAgICB7IFwibmFtZVwiOiBcIk9yaWdpbklkXCIsIFwic2l6ZVwiOiA0LCBcInR5cGVcIjogXCJ1bnNpZ25lZFwiIH0sXHJcblx0XHRcdCAgICAgIHsgXCJuYW1lXCI6IFwiUmVkXCIsIFwic2l6ZVwiOiAyLCBcInR5cGVcIjogXCJ1bnNpZ25lZFwiIH0sXHJcblx0XHRcdCAgICAgIHsgXCJuYW1lXCI6IFwiR3JlZW5cIiwgXCJzaXplXCI6IDIsIFwidHlwZVwiOiBcInVuc2lnbmVkXCIgfSxcclxuXHRcdFx0ICAgICAgeyBcIm5hbWVcIjogXCJCbHVlXCIsIFwic2l6ZVwiOiAyLCBcInR5cGVcIjogXCJ1bnNpZ25lZFwiIH1cclxuXHRcdFx0ICBdLFxyXG5cdFx0XHQgIFwic3JzXCI6IFwiPG9taXR0ZWQgZm9yIGJyZXZpdHk+XCIsXHJcblx0XHRcdCAgXCJ0eXBlXCI6IFwib2N0cmVlXCJcclxuXHRcdFx0fVxyXG5cdFx0XHQqL1xyXG5cdFx0XHR2YXIgZ3JleWhvdW5kSW5mbyA9IEpTT04ucGFyc2UoZGF0YSk7XHJcblx0XHRcdHZhciB2ZXJzaW9uID0gbmV3IFZlcnNpb25VdGlscyhcIjEuNFwiKTtcclxuXHJcblx0XHRcdHZhciBib3VuZHMgPSBncmV5aG91bmRJbmZvLmJvdW5kcztcclxuXHJcblx0XHRcdC8vVE9ETyBVbnVzZWQ6IHZhciBib3VuZHNDb25mb3JtaW5nID0gZ3JleWhvdW5kSW5mby5ib3VuZHNDb25mb3JtaW5nO1xyXG5cdFx0XHQvL1RPRE8gVW51c2VkOiB2YXIgd2lkdGggPSBib3VuZHNbM10gLSBib3VuZHNbMF07XHJcblx0XHRcdC8vVE9ETyBVbnVzZWQ6IHZhciBkZXB0aCA9IGJvdW5kc1s0XSAtIGJvdW5kc1sxXTtcclxuXHRcdFx0Ly9UT0RPIFVudXNlZDogdmFyIGhlaWdodCA9IGJvdW5kc1s1XSAtIGJvdW5kc1syXTtcclxuXHRcdFx0Ly9UT0RPIFVudXNlZDogdmFyIHJhZGl1cyA9IHdpZHRoIC8gMjtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBzY2FsZSA9IGdyZXlob3VuZEluZm8uc2NhbGUgfHwgMC4wMTtcclxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShzY2FsZSkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzY2FsZSA9IE1hdGgubWluKHNjYWxlWzBdLCBzY2FsZVsxXSwgc2NhbGVbMl0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihHcmV5aG91bmRVdGlscy5nZXRRdWVyeVBhcmFtKFwic2NhbGVcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzY2FsZSA9IHBhcnNlRmxvYXQoR3JleWhvdW5kVXRpbHMuZ2V0UXVlcnlQYXJhbShcInNjYWxlXCIpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGJhc2VEZXB0aCA9IE1hdGgubWF4KDgsIGdyZXlob3VuZEluZm8uYmFzZURlcHRoKTtcclxuXHJcblx0XHRcdC8vSWRlYWxseSB3ZSB3YW50IHRvIGNoYW5nZSB0aGlzIGJpdCBjb21wbGV0ZWx5LCBzaW5jZVxyXG5cdFx0XHQvL2dyZXlob3VuZFwicyBvcHRpb25zIGFyZSB3aWRlciB0aGFuIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yXHJcblx0XHRcdC8vdmlzdWFsaXppbmcgcG9pbnRjbG91ZHMuIElmIHNvbWVvbmUgZXZlciBoYXMgdGltZSB0byBidWlsZCBhXHJcblx0XHRcdC8vY3VzdG9tIHVpIGVsZW1lbnQgZm9yIGdyZXlob3VuZCwgdGhlIHNjaGVtYSBvcHRpb25zIGZyb21cclxuXHRcdFx0Ly90aGlzIGluZm8gcmVxdWVzdCBzaG91bGQgYmUgZ2l2ZW4gdG8gdGhlIFVJLCBzbyB0aGUgdXNlciBjYW5cclxuXHRcdFx0Ly9jaG9vc2UgYmV0d2VlbiB0aGVtLiBUaGUgc2VsZWN0ZWQgb3B0aW9uIGNhbiB0aGVuIGJlXHJcblx0XHRcdC8vZGlyZWN0bHkgcmVxdWVzdGVkIGZyb20gdGhlIHNlcnZlciBpbiB0aGVcclxuXHRcdFx0Ly9Qb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnlOb2RlIHdpdGhvdXQgYXNraW5nIGZvclxyXG5cdFx0XHQvL2F0dHJpYnV0ZXMgdGhhdCB3ZSBhcmUgbm90IGN1cnJlbnRseSB2aXN1YWxpemluZy4gIFdlIGFzc3VtZVxyXG5cdFx0XHQvL1hZWiBhcmUgYWx3YXlzIGF2YWlsYWJsZS5cclxuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBbXCJQT1NJVElPTl9DQVJURVNJQU5cIl07XHJcblxyXG5cdFx0XHQvL1RvIGJlIGNhcmVmdWwsIHdlIG9ubHkgYWRkIENPTE9SX1BBQ0tFRCBhcyBhbiBvcHRpb24gaWYgYWxsXHJcblx0XHRcdC8vY29sb3JzIGFyZSBhY3R1YWxseSBmb3VuZC5cclxuXHRcdFx0dmFyIHJlZCA9IGZhbHNlO1xyXG5cdFx0XHR2YXIgZ3JlZW4gPSBmYWxzZTtcclxuXHRcdFx0dmFyIGJsdWUgPSBmYWxzZTtcclxuXHJcblx0XHRcdGdyZXlob3VuZEluZm8uc2NoZW1hLmZvckVhY2goZnVuY3Rpb24oZW50cnkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvL0ludGVuc2l0eSBhbmQgQ2xhc3NpZmljYXRpb24gYXJlIG9wdGlvbmFsLlxyXG5cdFx0XHRcdGlmKGVudHJ5Lm5hbWUgPT09IFwiSW50ZW5zaXR5XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YXR0cmlidXRlcy5wdXNoKFwiSU5URU5TSVRZXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihlbnRyeS5uYW1lID09PSBcIkNsYXNzaWZpY2F0aW9uXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YXR0cmlidXRlcy5wdXNoKFwiQ0xBU1NJRklDQVRJT05cIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihlbnRyeS5uYW1lID09PSBcIlJlZFwiKSByZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGVsc2UgaWYoZW50cnkubmFtZSA9PT0gXCJHcmVlblwiKSBncmVlbiA9IHRydWU7XHJcblx0XHRcdFx0ZWxzZSBpZihlbnRyeS5uYW1lID09PSBcIkJsdWVcIikgYmx1ZSA9IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYocmVkICYmIGdyZWVuICYmIGJsdWUpIGF0dHJpYnV0ZXMucHVzaChcIkNPTE9SX1BBQ0tFRFwiKTtcclxuXHJcblx0XHRcdC8vRmlsbCBpbiBnZW9tZXRyeSBmaWVsZHMuXHJcblx0XHRcdHZhciBwZ2cgPSBuZXcgUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5KCk7XHJcblx0XHRcdHBnZy5zZXJ2ZXJVUkwgPSBzZXJ2ZXJVUkw7XHJcblx0XHRcdHBnZy5zcGFjaW5nID0gKGJvdW5kc1szXSAtIGJvdW5kc1swXSkgLyBNYXRoLnBvdygyLCBiYXNlRGVwdGgpO1xyXG5cdFx0XHRwZ2cuYmFzZURlcHRoID0gYmFzZURlcHRoO1xyXG5cdFx0XHRwZ2cuaGllcmFyY2h5U3RlcFNpemUgPSBISUVSQVJDSFlfU1RFUF9TSVpFO1xyXG5cclxuXHRcdFx0cGdnLnNjaGVtYSA9IEdyZXlob3VuZFV0aWxzLmNyZWF0ZVNjaGVtYShhdHRyaWJ1dGVzKTtcclxuXHRcdFx0dmFyIHBvaW50U2l6ZSA9IEdyZXlob3VuZFV0aWxzLnBvaW50U2l6ZUZyb20ocGdnLnNjaGVtYSk7XHJcblxyXG5cdFx0XHRwZ2cucG9pbnRBdHRyaWJ1dGVzID0gbmV3IFBvaW50QXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcclxuXHRcdFx0cGdnLnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSA9IHBvaW50U2l6ZTtcclxuXHJcblx0XHRcdHZhciBib3VuZGluZ0JveCA9IG5ldyBUSFJFRS5Cb3gzKFxyXG5cdFx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCkuZnJvbUFycmF5KGJvdW5kcywgMCksXHJcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoKS5mcm9tQXJyYXkoYm91bmRzLCAzKVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dmFyIG9mZnNldCA9IGJvdW5kaW5nQm94Lm1pbi5jbG9uZSgpO1xyXG5cclxuXHRcdFx0Ym91bmRpbmdCb3gubWF4LnN1Yihib3VuZGluZ0JveC5taW4pO1xyXG5cdFx0XHRib3VuZGluZ0JveC5taW4uc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdFx0cGdnLnByb2plY3Rpb24gPSBncmV5aG91bmRJbmZvLnNycztcclxuXHRcdFx0cGdnLmJvdW5kaW5nQm94ID0gYm91bmRpbmdCb3g7XHJcblx0XHRcdHBnZy5ib3VuZGluZ1NwaGVyZSA9IGJvdW5kaW5nQm94LmdldEJvdW5kaW5nU3BoZXJlKG5ldyBUSFJFRS5TcGhlcmUoKSk7XHJcblxyXG5cdFx0XHRwZ2cuc2NhbGUgPSBzY2FsZTtcclxuXHRcdFx0cGdnLm9mZnNldCA9IG9mZnNldDtcclxuXHRcdFx0cGdnLmxvYWRlciA9IG5ldyBHcmV5aG91bmRCaW5hcnlMb2FkZXIodmVyc2lvbiwgYm91bmRpbmdCb3gsIHBnZy5zY2FsZSk7XHJcblxyXG5cdFx0XHR2YXIgbm9kZXMgPSB7fTtcclxuXHJcblx0XHRcdC8vbG9hZCByb290XHJcblx0XHRcdHZhciBuYW1lID0gXCJyXCI7XHJcblxyXG5cdFx0XHR2YXIgcm9vdCA9IG5ldyBQb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnlOb2RlKG5hbWUsIHBnZywgYm91bmRpbmdCb3gsIHNjYWxlLCBvZmZzZXQpO1xyXG5cdFx0XHRyb290LmxldmVsID0gMDtcclxuXHRcdFx0cm9vdC5oYXNDaGlsZHJlbiA9IHRydWU7XHJcblx0XHRcdHJvb3QubnVtUG9pbnRzID0gZ3JleWhvdW5kSW5mby5udW1Qb2ludHM7XHJcblx0XHRcdHJvb3Quc3BhY2luZyA9IHBnZy5zcGFjaW5nO1xyXG5cdFx0XHRwZ2cucm9vdCA9IHJvb3Q7XHJcblx0XHRcdHBnZy5yb290LmxvYWQoKTtcclxuXHRcdFx0bm9kZXNbbmFtZV0gPSByb290O1xyXG5cdFxyXG5cdFx0XHRwZ2cubm9kZXMgPSBub2RlcztcclxuXHJcblx0XHRcdEdyZXlob3VuZFV0aWxzLmdldE5vcm1hbGl6YXRpb24oc2VydmVyVVJMLCBncmV5aG91bmRJbmZvLmJhc2VEZXB0aCxcclxuXHRcdFx0XHRmdW5jdGlvbihfLCBub3JtYWxpemUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYobm9ybWFsaXplLmNvbG9yKSBwZ2cubm9ybWFsaXplLmNvbG9yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGlmKG5vcm1hbGl6ZS5pbnRlbnNpdHkpIHBnZy5ub3JtYWxpemUuaW50ZW5zaXR5ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRjYWxsYmFjayhwZ2cpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjYXRjaChlKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUubG9nKFwiUG90cmVlOiBMb2FkaW5nIGZhaWxlZC5cIiwgdXJsLCBlKTtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0fVxyXG59O1xyXG5cclxuR3JleWhvdW5kTG9hZGVyLmxvYWRQb2ludEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihtbm8pXHJcbntcclxuXHR2YXIgZnBhID0gbW5vLnBvaW50QXR0cmlidXRlcztcclxuXHR2YXIgcGEgPSBuZXcgUG9pbnRBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBmcGEubGVuZ3RoOyBpKyspXHJcblx0e1xyXG5cdFx0dmFyIHBvaW50QXR0cmlidXRlID0gUG9pbnRBdHRyaWJ1dGVbZnBhW2ldXTtcclxuXHRcdHBhLmFkZChwb2ludEF0dHJpYnV0ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcGE7XHJcbn07XHJcblxyXG5HcmV5aG91bmRMb2FkZXIuY3JlYXRlQ2hpbGRBQUJCID0gZnVuY3Rpb24oYWFiYiwgY2hpbGRJbmRleClcclxue1xyXG5cdHZhciBtaW4gPSBhYWJiLm1pbjtcclxuXHR2YXIgbWF4ID0gYWFiYi5tYXg7XHJcblx0dmFyIGRIYWxmTGVuZ3RoID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jb3B5KG1heCkuc3ViKG1pbikubXVsdGlwbHlTY2FsYXIoMC41KTtcclxuXHR2YXIgeEhhbGZMZW5ndGggPSBuZXcgVEhSRUUuVmVjdG9yMyhkSGFsZkxlbmd0aC54LCAwLCAwKTtcclxuXHR2YXIgeUhhbGZMZW5ndGggPSBuZXcgVEhSRUUuVmVjdG9yMygwLCBkSGFsZkxlbmd0aC55LCAwKTtcclxuXHR2YXIgekhhbGZMZW5ndGggPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCBkSGFsZkxlbmd0aC56KTtcclxuXHJcblx0dmFyIGNtaW4gPSBtaW47XHJcblx0dmFyIGNtYXggPSBuZXcgVEhSRUUuVmVjdG9yMygpLmFkZChtaW4pLmFkZChkSGFsZkxlbmd0aCk7XHJcblxyXG5cdGlmKGNoaWxkSW5kZXggPT09IDEpXHJcblx0e1xyXG5cdFx0bWluID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jb3B5KGNtaW4pLmFkZCh6SGFsZkxlbmd0aCk7XHJcblx0XHRtYXggPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNvcHkoY21heCkuYWRkKHpIYWxmTGVuZ3RoKTtcclxuXHR9XHJcblx0ZWxzZSBpZihjaGlsZEluZGV4ID09PSAzKVxyXG5cdHtcclxuXHRcdG1pbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY29weShjbWluKS5hZGQoekhhbGZMZW5ndGgpLmFkZCh5SGFsZkxlbmd0aCk7XHJcblx0XHRtYXggPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNvcHkoY21heCkuYWRkKHpIYWxmTGVuZ3RoKS5hZGQoeUhhbGZMZW5ndGgpO1xyXG5cdH1cclxuXHRlbHNlIGlmKGNoaWxkSW5kZXggPT09IDApXHJcblx0e1xyXG5cdFx0bWluID0gY21pbjtcclxuXHRcdG1heCA9IGNtYXg7XHJcblx0fVxyXG5cdGVsc2UgaWYoY2hpbGRJbmRleCA9PT0gMilcclxuXHR7XHJcblx0XHRtaW4gPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNvcHkoY21pbikuYWRkKHlIYWxmTGVuZ3RoKTtcclxuXHRcdG1heCA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY29weShjbWF4KS5hZGQoeUhhbGZMZW5ndGgpO1xyXG5cdH1cclxuXHRlbHNlIGlmKGNoaWxkSW5kZXggPT09IDUpXHJcblx0e1xyXG5cdFx0bWluID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jb3B5KGNtaW4pLmFkZCh6SGFsZkxlbmd0aCkuYWRkKHhIYWxmTGVuZ3RoKTtcclxuXHRcdG1heCA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY29weShjbWF4KS5hZGQoekhhbGZMZW5ndGgpLmFkZCh4SGFsZkxlbmd0aCk7XHJcblx0fVxyXG5cdGVsc2UgaWYoY2hpbGRJbmRleCA9PT0gNylcclxuXHR7XHJcblx0XHRtaW4gPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNvcHkoY21pbikuYWRkKGRIYWxmTGVuZ3RoKTtcclxuXHRcdG1heCA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY29weShjbWF4KS5hZGQoZEhhbGZMZW5ndGgpO1xyXG5cdH1cclxuXHRlbHNlIGlmKGNoaWxkSW5kZXggPT09IDQpXHJcblx0e1xyXG5cdFx0bWluID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jb3B5KGNtaW4pLmFkZCh4SGFsZkxlbmd0aCk7XHJcblx0XHRtYXggPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNvcHkoY21heCkuYWRkKHhIYWxmTGVuZ3RoKTtcclxuXHR9XHJcblx0ZWxzZSBpZihjaGlsZEluZGV4ID09PSA2KVxyXG5cdHtcclxuXHRcdG1pbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY29weShjbWluKS5hZGQoeEhhbGZMZW5ndGgpLmFkZCh5SGFsZkxlbmd0aCk7XHJcblx0XHRtYXggPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNvcHkoY21heCkuYWRkKHhIYWxmTGVuZ3RoKS5hZGQoeUhhbGZMZW5ndGgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ldyBUSFJFRS5Cb3gzKG1pbiwgbWF4KTtcclxufTtcclxuXHJcbmV4cG9ydCB7R3JleWhvdW5kTG9hZGVyfTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7WEhSRmFjdG9yeX0gZnJvbSBcIi4uL1hIUkZhY3RvcnkuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgTG9hZHMgZ3JleWhvdW5kIG1ldGFkYXRhIGFuZCByZXR1cm5zIGEgUG9pbnRjbG91ZE9jdHJlZVxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hYXJ0ZW4gdmFuIE1lZXJzYmVyZ2VuXHJcbiAqIEBhdXRob3IgT3NjYXIgTWFydGluZXogUnViaVxyXG4gKiBAYXV0aG9yIENvbm5vciBNYW5uaW5nXHJcbiAqL1xyXG5jbGFzcyBHcmV5aG91bmRVdGlsc1xyXG57XHJcblx0c3RhdGljIGdldFF1ZXJ5UGFyYW0obmFtZSlcclxuXHR7XHJcblx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC9bW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIik7XHJcblx0XHR2YXIgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0aWYoIXJlc3VsdHMpIHJldHVybiBudWxsO1xyXG5cdFx0aWYoIXJlc3VsdHNbMl0pIHJldHVybiBcIlwiO1xyXG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZVNjaGVtYShhdHRyaWJ1dGVzKVxyXG5cdHtcclxuXHRcdHZhciBzY2hlbWEgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJYXCIsXHJcblx0XHRcdFx0XCJzaXplXCI6IDQsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwic2lnbmVkXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIllcIixcclxuXHRcdFx0XHRcInNpemVcIjogNCxcclxuXHRcdFx0XHRcInR5cGVcIjogXCJzaWduZWRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiWlwiLFxyXG5cdFx0XHRcdFwic2l6ZVwiOiA0LFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInNpZ25lZFwiXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblxyXG5cdFx0Ly9PbmNlIHdlIGluY2x1ZGUgb3B0aW9ucyBpbiB0aGUgVUkgdG8gbG9hZCBhIGR5bmFtaWMgbGlzdCBvZiBhdmFpbGFibGVcclxuXHRcdC8vYXR0cmlidXRlcyBmb3IgdmlzdWFsaXphdGlvbiAoZi5lLiBDbGFzc2lmaWNhdGlvbiwgSW50ZW5zaXR5IGV0Yy4pXHJcblx0XHQvL3dlIHdpbGwgYmUgYWJsZSB0byBhc2sgZm9yIHRoYXQgc3BlY2lmaWMgYXR0cmlidXRlIGZyb20gdGhlIHNlcnZlcixcclxuXHRcdC8vd2hlcmUgd2UgYXJlIG5vdyByZXF1ZXN0aW5nIGFsbCBhdHRyaWJ1dGVzIGZvciBhbGwgcG9pbnRzIGFsbCB0aGUgdGltZS5cclxuXHRcdC8vSWYgd2UgZG8gdGhhdCB0aG91Z2gsIHdlIGFsc28gbmVlZCB0byB0ZWxsIFBvdHJlZSB0byByZWRyYXcgdGhlIHBvaW50c1xyXG5cdFx0Ly90aGF0IGFyZSBhbHJlYWR5IGxvYWRlZCAod2l0aCBkaWZmZXJlbnQgYXR0cmlidXRlcykuXHJcblx0XHQvL1RoaXMgaXMgbm90IGRlZmF1bHQgYmVoYXZpb3VyLlxyXG5cdFx0YXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pXHJcblx0XHR7XHJcblx0XHRcdGlmKGl0ZW0gPT09IFwiQ09MT1JfUEFDS0VEXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzY2hlbWEucHVzaChcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJSZWRcIixcclxuXHRcdFx0XHRcdFwic2l6ZVwiOiAyLFxyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwidW5zaWduZWRcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNjaGVtYS5wdXNoKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdyZWVuXCIsXHJcblx0XHRcdFx0XHRcInNpemVcIjogMixcclxuXHRcdFx0XHRcdFwidHlwZVwiOiBcInVuc2lnbmVkXCJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzY2hlbWEucHVzaChcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJCbHVlXCIsXHJcblx0XHRcdFx0XHRcInNpemVcIjogMixcclxuXHRcdFx0XHRcdFwidHlwZVwiOiBcInVuc2lnbmVkXCJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGl0ZW0gPT09IFwiSU5URU5TSVRZXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzY2hlbWEucHVzaChcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJJbnRlbnNpdHlcIixcclxuXHRcdFx0XHRcdFwic2l6ZVwiOiAyLFxyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwidW5zaWduZWRcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoaXRlbSA9PT0gXCJDTEFTU0lGSUNBVElPTlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2NoZW1hLnB1c2goXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ2xhc3NpZmljYXRpb25cIixcclxuXHRcdFx0XHRcdFwic2l6ZVwiOiAxLFxyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwidW5zaWduZWRcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gc2NoZW1hO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGZldGNoKHVybCwgY2IpXHJcblx0e1xyXG5cdFx0dmFyIHhociA9IFhIUkZhY3RvcnkuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9wbGFpblwiKTtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKVxyXG5cdFx0e1xyXG5cdFx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PT0gNClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNiKG51bGwsIHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2IoeGhyLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0eGhyLnNlbmQobnVsbCk7XHJcblx0fTtcclxuXHJcblx0c3RhdGljIGZldGNoQmluYXJ5KHVybCwgY2IpXHJcblx0e1xyXG5cdFx0dmFyIHhociA9IFhIUkZhY3RvcnkuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9wbGFpblwiKTtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcblx0XHR4aHIucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKClcclxuXHRcdHtcclxuXHRcdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZih4aHIuc3RhdHVzID09PSAyMDAgfHwgeGhyLnN0YXR1cyA9PT0gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjYihudWxsLCB4aHIucmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2IoeGhyLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0eGhyLnNlbmQobnVsbCk7XHJcblx0fTtcclxuXHJcblx0c3RhdGljIHBvaW50U2l6ZUZyb20oc2NoZW1hKVxyXG5cdHtcclxuXHRcdHJldHVybiBzY2hlbWEucmVkdWNlKChwLCBjKSA9PiBwICsgYy5zaXplLCAwKTtcclxuXHR9O1xyXG5cclxuXHRzdGF0aWMgZ2V0Tm9ybWFsaXphdGlvbihzZXJ2ZXJVUkwsIGJhc2VEZXB0aCwgY2IpXHJcblx0e1xyXG5cdFx0dmFyIHMgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJYXCIsXHJcblx0XHRcdFx0XCJzaXplXCI6IDQsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiZmxvYXRpbmdcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiWVwiLFxyXG5cdFx0XHRcdFwic2l6ZVwiOiA0LFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcImZsb2F0aW5nXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlpcIixcclxuXHRcdFx0XHRcInNpemVcIjogNCxcclxuXHRcdFx0XHRcInR5cGVcIjogXCJmbG9hdGluZ1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJSZWRcIixcclxuXHRcdFx0XHRcInNpemVcIjogMixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1bnNpZ25lZFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJHcmVlblwiLFxyXG5cdFx0XHRcdFwic2l6ZVwiOiAyLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInVuc2lnbmVkXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkJsdWVcIixcclxuXHRcdFx0XHRcInNpemVcIjogMixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1bnNpZ25lZFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJJbnRlbnNpdHlcIixcclxuXHRcdFx0XHRcInNpemVcIjogMixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1bnNpZ25lZFwiXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblxyXG5cdFx0dmFyIHVybCA9IHNlcnZlclVSTCArIFwicmVhZD9kZXB0aD1cIiArIGJhc2VEZXB0aCArIFwiJnNjaGVtYT1cIiArIEpTT04uc3RyaW5naWZ5KHMpO1xyXG5cclxuXHRcdEdyZXlob3VuZFV0aWxzLmZldGNoQmluYXJ5KHVybCwgZnVuY3Rpb24oZXJyLCBidWZmZXIpXHJcblx0XHR7XHJcblx0XHRcdGlmKGVycikgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcblxyXG5cdFx0XHR2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xyXG5cdFx0XHR2YXIgbnVtQnl0ZXMgPSBidWZmZXIuYnl0ZUxlbmd0aCAtIDQ7XHJcblx0XHRcdHZhciBwb2ludFNpemUgPSBHcmV5aG91bmRVdGlscy5wb2ludFNpemVGcm9tKHMpO1xyXG5cclxuXHRcdFx0dmFyIGNvbG9yTm9ybSA9IGZhbHNlO1xyXG5cdFx0XHR2YXIgaW50ZW5zaXR5Tm9ybSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBudW1CeXRlczsgb2Zmc2V0ICs9IHBvaW50U2l6ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIDEyLCB0cnVlKSA+IDI1NSB8fFxyXG5cdFx0XHRcdFx0dmlldy5nZXRVaW50MTYob2Zmc2V0ICsgMTQsIHRydWUpID4gMjU1IHx8XHJcblx0XHRcdFx0XHR2aWV3LmdldFVpbnQxNihvZmZzZXQgKyAxNiwgdHJ1ZSkgPiAyNTUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sb3JOb3JtID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIDE4LCB0cnVlKSA+IDI1NSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbnRlbnNpdHlOb3JtID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKGNvbG9yTm9ybSAmJiBpbnRlbnNpdHlOb3JtKSBicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y2IobnVsbCxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbG9yOiBjb2xvck5vcm0sXHJcblx0XHRcdFx0aW50ZW5zaXR5OiBpbnRlbnNpdHlOb3JtXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCB7R3JleWhvdW5kVXRpbHN9O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmltcG9ydCB7VmVyc2lvblV0aWxzfSBmcm9tIFwiLi4vdXRpbHMvVmVyc2lvblV0aWxzLmpzXCI7XHJcbmltcG9ydCB7V29ya2VyTWFuYWdlcn0gZnJvbSBcIi4uL3V0aWxzL1dvcmtlck1hbmFnZXIuanNcIjtcclxuaW1wb3J0IHtMQVNMb2FkZXIsIExBWkxvYWRlciwgTEFTRmlsZSwgTEFTRGVjb2Rlcn0gZnJvbSBcIi4vTEFTTG9hZGVyLmpzXCI7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vR2xvYmFsLmpzXCI7XHJcbmltcG9ydCB7WEhSRmFjdG9yeX0gZnJvbSBcIi4uL1hIUkZhY3RvcnkuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBsYXNsYXogY29kZSB0YWtlbiBhbmQgYWRhcHRlZCBmcm9tIHBsYXMuaW8ganMtbGFzbGF6XHJcbiAqXHRodHRwOi8vcGxhcy5pby9cclxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJtYS9wbGFzaW9cclxuICpcclxuICogVGhhbmtzIHRvIFVkYXkgVmVybWEgYW5kIEhvd2FyZCBCdXRsZXJcclxuICovXHJcbmNsYXNzIExBU0xBWkxvYWRlclxyXG57XHJcblx0Y29uc3RydWN0b3IodmVyc2lvbilcclxuXHR7XHJcblx0XHRpZih0eXBlb2YodmVyc2lvbikgPT09IFwic3RyaW5nXCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudmVyc2lvbiA9IG5ldyBWZXJzaW9uVXRpbHModmVyc2lvbik7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsb2FkKG5vZGUpXHJcblx0e1xyXG5cdFx0aWYobm9kZS5sb2FkZWQpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcG9pbnRBdHRyaWJ1dGVzID0gbm9kZS5wY29HZW9tZXRyeS5wb2ludEF0dHJpYnV0ZXM7XHJcblx0XHR2YXIgdXJsID0gbm9kZS5nZXRVUkwoKTtcclxuXHJcblx0XHRpZih0aGlzLnZlcnNpb24uZXF1YWxPckhpZ2hlcihcIjEuNFwiKSlcclxuXHRcdHtcclxuXHRcdFx0dXJsICs9IFwiLlwiICsgcG9pbnRBdHRyaWJ1dGVzLnRvTG93ZXJDYXNlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdHZhciB4aHIgPSBYSFJGYWN0b3J5LmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG5cdFx0eGhyLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuXHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9wbGFpbjsgY2hhcnNldD14LXVzZXItZGVmaW5lZFwiKTtcclxuXHRcdHhoci5vbmxvYWQgPSBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdGlmKHhoci5yZXNwb25zZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c2VsZi5wYXJzZShub2RlLCB4aHIucmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaChlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJQb3RyZWU6IEV4Y2VwdGlvbiB0aHJvd24gcGFyc2luZyBwb2ludHMuXCIsIGUpO1xyXG5cdFx0XHRcdFx0R2xvYmFsLm51bU5vZGVzTG9hZGluZy0tO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nLS07XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJQb3RyZWU6IExBU0xBWkxvYWRlciB4aHIgcmVzcG9uc2UgaXMgbm90IGEgQXJyYXlCdWZmZXIuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0eGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdEdsb2JhbC5udW1Ob2Rlc0xvYWRpbmctLTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQb3RyZWU6IExBU0xBWkxvYWRlciBmYWlsZWQgdG8gbG9hZCBmaWxlLCBcIiArIHhoci5zdGF0dXMgKyBcIiwgZmlsZTogXCIgKyB1cmwpO1xyXG5cdFx0fTtcclxuXHRcdHhoci5zZW5kKG51bGwpO1xyXG5cdH1cclxuXHJcblx0cGFyc2Uobm9kZSwgYnVmZmVyKVxyXG5cdHtcclxuXHRcdHZhciBsZiA9IG5ldyBMQVNGaWxlKGJ1ZmZlcik7XHJcblx0XHR2YXIgaGFuZGxlciA9IG5ldyBMQVNMQVpCYXRjaGVyKG5vZGUpO1xyXG5cclxuXHRcdGxmLm9wZW4oKSAudGhlbihtc2cgPT5cclxuXHRcdHtcclxuXHRcdFx0bGYuaXNPcGVuID0gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGxmO1xyXG5cdFx0fSkuY2F0Y2gobXNnID0+XHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUG90cmVlOiBGYWlsZWQgdG8gb3BlbiBmaWxlLlwiKTtcclxuXHRcdH0pLnRoZW4obGYgPT5cclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIGxmLmdldEhlYWRlcigpLnRoZW4oZnVuY3Rpb24oaClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiBbbGYsIGhdO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pLnRoZW4odiA9PlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbGYgPSB2WzBdO1xyXG5cdFx0XHRsZXQgaGVhZGVyID0gdlsxXTtcclxuXHRcdFx0bGV0IHNraXAgPSAxO1xyXG5cdFx0XHRsZXQgdG90YWxSZWFkID0gMDtcclxuXHRcdFx0bGV0IHRvdGFsVG9SZWFkID0gKHNraXAgPD0gMSA/IGhlYWRlci5wb2ludHNDb3VudCA6IGhlYWRlci5wb2ludHNDb3VudCAvIHNraXApO1xyXG5cclxuXHRcdFx0dmFyIHJlYWRlciA9IGZ1bmN0aW9uKClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwID0gbGYucmVhZERhdGEoMTAwMDAwMCwgMCwgc2tpcCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBwLnRoZW4oZnVuY3Rpb24oZGF0YSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoYW5kbGVyLnB1c2gobmV3IExBU0RlY29kZXIoZGF0YS5idWZmZXIsXHJcblx0XHRcdFx0XHRcdGhlYWRlci5wb2ludHNGb3JtYXRJZCxcclxuXHRcdFx0XHRcdFx0aGVhZGVyLnBvaW50c1N0cnVjdFNpemUsXHJcblx0XHRcdFx0XHRcdGRhdGEuY291bnQsXHJcblx0XHRcdFx0XHRcdGhlYWRlci5zY2FsZSxcclxuXHRcdFx0XHRcdFx0aGVhZGVyLm9mZnNldCxcclxuXHRcdFx0XHRcdFx0aGVhZGVyLm1pbnMsIGhlYWRlci5tYXhzKSk7XHJcblxyXG5cdFx0XHRcdFx0dG90YWxSZWFkICs9IGRhdGEuY291bnQ7XHJcblxyXG5cdFx0XHRcdFx0aWYoZGF0YS5oYXNNb3JlRGF0YSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlYWRlcigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRoZWFkZXIudG90YWxSZWFkID0gdG90YWxSZWFkO1xyXG5cdFx0XHRcdFx0XHRoZWFkZXIudmVyc2lvbkFzU3RyaW5nID0gbGYudmVyc2lvbkFzU3RyaW5nO1xyXG5cdFx0XHRcdFx0XHRoZWFkZXIuaXNDb21wcmVzc2VkID0gbGYuaXNDb21wcmVzc2VkO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gW2xmLCBoZWFkZXIsIGhhbmRsZXJdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlYWRlcigpO1xyXG5cdFx0fSkudGhlbih2ID0+XHJcblx0XHR7XHJcblx0XHRcdGxldCBsZiA9IHZbMF07XHJcblxyXG5cdFx0XHQvL0Nsb3NlIGl0XHJcblx0XHRcdHJldHVybiBsZi5jbG9zZSgpLnRoZW4oZnVuY3Rpb24oKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGYuaXNPcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0cmV0dXJuIHYuc2xpY2UoMSk7XHJcblx0XHRcdH0pLmNhdGNoKGUgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vSWYgdGhlcmUgd2FzIGEgY2FuY2VsbGF0aW9uLCBtYWtlIHN1cmUgdGhlIGZpbGUgaXMgY2xvc2VkLCBpZiB0aGUgZmlsZSBpcyBvcGVuIGNsb3NlIGFuZCB0aGVuIGZhaWxcclxuXHRcdFx0XHRpZihsZi5pc09wZW4pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmV0dXJuIGxmLmNsb3NlKCkudGhlbihmdW5jdGlvbigpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxmLmlzT3BlbiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBlO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRocm93IGU7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGUobm9kZSwgdXJsKXt9XHJcbn07XHJcblxyXG5jbGFzcyBMQVNMQVpCYXRjaGVyXHJcbntcclxuXHRjb25zdHJ1Y3Rvcihub2RlKVxyXG5cdHtcclxuXHRcdHRoaXMubm9kZSA9IG5vZGU7XHJcblx0fVxyXG5cclxuXHRwdXNoKGRhdGEpXHJcblx0e1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdHZhciBtZXNzYWdlID1cclxuXHRcdHtcclxuXHRcdFx0YnVmZmVyOiBkYXRhLmFycmF5YixcclxuXHRcdFx0bnVtUG9pbnRzOiBkYXRhLnBvaW50c0NvdW50LFxyXG5cdFx0XHRwb2ludFNpemU6IGRhdGEucG9pbnRTaXplLFxyXG5cdFx0XHRwb2ludEZvcm1hdElEOiAyLFxyXG5cdFx0XHRzY2FsZTogZGF0YS5zY2FsZSxcclxuXHRcdFx0b2Zmc2V0OiBkYXRhLm9mZnNldCxcclxuXHRcdFx0bWluczogZGF0YS5taW5zLFxyXG5cdFx0XHRtYXhzOiBkYXRhLm1heHNcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIHdvcmtlciA9IEdsb2JhbC53b3JrZXJQb29sLmdldFdvcmtlcihXb3JrZXJNYW5hZ2VyLkxBU19ERUNPREVSKTtcclxuXHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcclxuXHRcdFx0dmFyIG51bVBvaW50cyA9IGRhdGEucG9pbnRzQ291bnQ7XHJcblxyXG5cdFx0XHR2YXIgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShlLmRhdGEucG9zaXRpb24pO1xyXG5cdFx0XHR2YXIgY29sb3JzID0gbmV3IFVpbnQ4QXJyYXkoZS5kYXRhLmNvbG9yKTtcclxuXHRcdFx0dmFyIGludGVuc2l0aWVzID0gbmV3IEZsb2F0MzJBcnJheShlLmRhdGEuaW50ZW5zaXR5KTtcclxuXHRcdFx0dmFyIGNsYXNzaWZpY2F0aW9ucyA9IG5ldyBVaW50OEFycmF5KGUuZGF0YS5jbGFzc2lmaWNhdGlvbik7XHJcblx0XHRcdHZhciByZXR1cm5OdW1iZXJzID0gbmV3IFVpbnQ4QXJyYXkoZS5kYXRhLnJldHVybk51bWJlcik7XHJcblx0XHRcdHZhciBudW1iZXJPZlJldHVybnMgPSBuZXcgVWludDhBcnJheShlLmRhdGEubnVtYmVyT2ZSZXR1cm5zKTtcclxuXHRcdFx0dmFyIHBvaW50U291cmNlSURzID0gbmV3IFVpbnQxNkFycmF5KGUuZGF0YS5wb2ludFNvdXJjZUlEKTtcclxuXHRcdFx0dmFyIGluZGljZXMgPSBuZXcgVWludDhBcnJheShlLmRhdGEuaW5kaWNlcyk7XHJcblxyXG5cdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpO1xyXG5cdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9ycywgNCwgdHJ1ZSkpO1xyXG5cdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJpbnRlbnNpdHlcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShpbnRlbnNpdGllcywgMSkpO1xyXG5cdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc2lmaWNhdGlvblwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNsYXNzaWZpY2F0aW9ucywgMSkpO1xyXG5cdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJyZXR1cm5OdW1iZXJcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShyZXR1cm5OdW1iZXJzLCAxKSk7XHJcblx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcIm51bWJlck9mUmV0dXJuc1wiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG51bWJlck9mUmV0dXJucywgMSkpO1xyXG5cdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb2ludFNvdXJjZUlEXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9pbnRTb3VyY2VJRHMsIDEpKTtcclxuXHRcdFx0Ly9nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJub3JtYWxcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG51bVBvaW50cyAqIDMpLCAzKSk7XHJcblx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImluZGljZXNcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShpbmRpY2VzLCA0KSk7XHJcblx0XHRcdGdlb21ldHJ5LmF0dHJpYnV0ZXMuaW5kaWNlcy5ub3JtYWxpemVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdHZhciB0aWdodEJvdW5kaW5nQm94ID0gbmV3IFRIUkVFLkJveDNcclxuXHRcdFx0KFxyXG5cdFx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCkuZnJvbUFycmF5KGUuZGF0YS50aWdodEJvdW5kaW5nQm94Lm1pbiksXHJcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoKS5mcm9tQXJyYXkoZS5kYXRhLnRpZ2h0Qm91bmRpbmdCb3gubWF4KVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkuYm91bmRpbmdCb3ggPSBzZWxmLm5vZGUuYm91bmRpbmdCb3g7XHJcblx0XHRcdHNlbGYubm9kZS50aWdodEJvdW5kaW5nQm94ID0gdGlnaHRCb3VuZGluZ0JveDtcclxuXHJcblx0XHRcdHNlbGYubm9kZS5nZW9tZXRyeSA9IGdlb21ldHJ5O1xyXG5cdFx0XHRzZWxmLm5vZGUubnVtUG9pbnRzID0gbnVtUG9pbnRzO1xyXG5cdFx0XHRzZWxmLm5vZGUubG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0c2VsZi5ub2RlLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0R2xvYmFsLm51bU5vZGVzTG9hZGluZy0tO1xyXG5cdFx0XHRzZWxmLm5vZGUubWVhbiA9IG5ldyBUSFJFRS5WZWN0b3IzKC4uLmUuZGF0YS5tZWFuKTtcclxuXHJcblx0XHRcdEdsb2JhbC53b3JrZXJQb29sLnJldHVybldvcmtlcihXb3JrZXJNYW5hZ2VyLkxBU19ERUNPREVSLCB3b3JrZXIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR3b3JrZXIucG9zdE1lc3NhZ2UobWVzc2FnZSwgW21lc3NhZ2UuYnVmZmVyXSk7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCB7TEFTTEFaTG9hZGVyfTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQge1dvcmtlck1hbmFnZXJ9IGZyb20gXCIuLi91dGlscy9Xb3JrZXJNYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vR2xvYmFsLmpzXCI7XHJcblxyXG52YXIgcG9pbnRGb3JtYXRSZWFkZXJzID1cclxuW1xyXG5cdGZ1bmN0aW9uKGR2KVxyXG5cdHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdFwicG9zaXRpb25cIjogWyBkdi5nZXRJbnQzMigwLCB0cnVlKSwgZHYuZ2V0SW50MzIoNCwgdHJ1ZSksIGR2LmdldEludDMyKDgsIHRydWUpXSxcclxuXHRcdFx0XCJpbnRlbnNpdHlcIjogZHYuZ2V0VWludDE2KDEyLCB0cnVlKSxcclxuXHRcdFx0XCJjbGFzc2lmaWNhdGlvblwiOiBkdi5nZXRVaW50OCgxNiwgdHJ1ZSlcclxuXHRcdH07XHJcblx0fSxcclxuXHRmdW5jdGlvbihkdilcclxuXHR7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFsgZHYuZ2V0SW50MzIoMCwgdHJ1ZSksIGR2LmdldEludDMyKDQsIHRydWUpLCBkdi5nZXRJbnQzMig4LCB0cnVlKV0sXHJcblx0XHRcdFwiaW50ZW5zaXR5XCI6IGR2LmdldFVpbnQxNigxMiwgdHJ1ZSksXHJcblx0XHRcdFwiY2xhc3NpZmljYXRpb25cIjogZHYuZ2V0VWludDgoMTYsIHRydWUpXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0ZnVuY3Rpb24oZHYpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiBbIGR2LmdldEludDMyKDAsIHRydWUpLCBkdi5nZXRJbnQzMig0LCB0cnVlKSwgZHYuZ2V0SW50MzIoOCwgdHJ1ZSldLFxyXG5cdFx0XHRcImludGVuc2l0eVwiOiBkdi5nZXRVaW50MTYoMTIsIHRydWUpLFxyXG5cdFx0XHRcImNsYXNzaWZpY2F0aW9uXCI6IGR2LmdldFVpbnQ4KDE2LCB0cnVlKSxcclxuXHRcdFx0XCJjb2xvclwiOiBbZHYuZ2V0VWludDE2KDIwLCB0cnVlKSwgZHYuZ2V0VWludDE2KDIyLCB0cnVlKSwgZHYuZ2V0VWludDE2KDI0LCB0cnVlKV1cclxuXHRcdH07XHJcblx0fSxcclxuXHRmdW5jdGlvbihkdilcclxuXHR7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFsgZHYuZ2V0SW50MzIoMCwgdHJ1ZSksIGR2LmdldEludDMyKDQsIHRydWUpLCBkdi5nZXRJbnQzMig4LCB0cnVlKV0sXHJcblx0XHRcdFwiaW50ZW5zaXR5XCI6IGR2LmdldFVpbnQxNigxMiwgdHJ1ZSksXHJcblx0XHRcdFwiY2xhc3NpZmljYXRpb25cIjogZHYuZ2V0VWludDgoMTYsIHRydWUpLFxyXG5cdFx0XHRcImNvbG9yXCI6IFtkdi5nZXRVaW50MTYoMjgsIHRydWUpLCBkdi5nZXRVaW50MTYoMzAsIHRydWUpLCBkdi5nZXRVaW50MTYoMzIsIHRydWUpXVxyXG5cdFx0fTtcclxuXHR9XHJcbl07XHJcblxyXG5mdW5jdGlvbiByZWFkQXMoYnVmLCBUeXBlLCBvZmZzZXQsIGNvdW50KVxyXG57XHJcblx0Y291bnQgPSAoY291bnQgPT09IHVuZGVmaW5lZCB8fCBjb3VudCA9PT0gMCA/IDEgOiBjb3VudCk7XHJcblx0dmFyIHN1YiA9IGJ1Zi5zbGljZShvZmZzZXQsIG9mZnNldCArIFR5cGUuQllURVNfUEVSX0VMRU1FTlQgKiBjb3VudCk7XHJcblxyXG5cdHZhciByID0gbmV3IFR5cGUoc3ViKTtcclxuXHRpZihjb3VudCA9PT0gdW5kZWZpbmVkIHx8IGNvdW50ID09PSAxKVxyXG5cdHtcclxuXHRcdHJldHVybiByWzBdO1xyXG5cdH1cclxuXHJcblx0dmFyIHJldCA9IFtdO1xyXG5cdGZvcih2YXIgaSA9IDAgOyBpIDwgY291bnQgOyBpICsrKVxyXG5cdHtcclxuXHRcdHJldC5wdXNoKHJbaV0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJldDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VMQVNIZWFkZXIoYXJyYXlidWZmZXIpXHJcbntcclxuXHR2YXIgZGF0YSA9IHt9O1xyXG5cclxuXHRkYXRhLnBvaW50c09mZnNldCA9IHJlYWRBcyhhcnJheWJ1ZmZlciwgVWludDMyQXJyYXksIDMyKjMpO1xyXG5cdGRhdGEucG9pbnRzRm9ybWF0SWQgPSByZWFkQXMoYXJyYXlidWZmZXIsIFVpbnQ4QXJyYXksIDMyKjMrOCk7XHJcblx0ZGF0YS5wb2ludHNTdHJ1Y3RTaXplID0gcmVhZEFzKGFycmF5YnVmZmVyLCBVaW50MTZBcnJheSwgMzIqMys4KzEpO1xyXG5cdGRhdGEucG9pbnRzQ291bnQgPSByZWFkQXMoYXJyYXlidWZmZXIsIFVpbnQzMkFycmF5LCAzMiozICsgMTEpO1xyXG5cclxuXHR2YXIgc3RhcnQgPSAzMiozICsgMzU7XHJcblx0ZGF0YS5zY2FsZSA9IHJlYWRBcyhhcnJheWJ1ZmZlciwgRmxvYXQ2NEFycmF5LCBzdGFydCwgMyk7IHN0YXJ0ICs9IDI0OyAvLyA4KjNcclxuXHRkYXRhLm9mZnNldCA9IHJlYWRBcyhhcnJheWJ1ZmZlciwgRmxvYXQ2NEFycmF5LCBzdGFydCwgMyk7IHN0YXJ0ICs9IDI0O1xyXG5cclxuXHR2YXIgYm91bmRzID0gcmVhZEFzKGFycmF5YnVmZmVyLCBGbG9hdDY0QXJyYXksIHN0YXJ0LCA2KTsgc3RhcnQgKz0gNDg7IC8vIDgqNjtcclxuXHRkYXRhLm1heHMgPSBbYm91bmRzWzBdLCBib3VuZHNbMl0sIGJvdW5kc1s0XV07XHJcblx0ZGF0YS5taW5zID0gW2JvdW5kc1sxXSwgYm91bmRzWzNdLCBib3VuZHNbNV1dO1xyXG5cclxuXHRyZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLy8gTEFTIExvYWRlclxyXG4vLyBMb2FkcyB1bmNvbXByZXNzZWQgZmlsZXNcclxuLy9cclxuZnVuY3Rpb24gTEFTTG9hZGVyKGFycmF5YnVmZmVyKVxyXG57XHJcblx0dGhpcy5hcnJheWJ1ZmZlciA9IGFycmF5YnVmZmVyO1xyXG59O1xyXG5cclxuTEFTTG9hZGVyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Ly8gbm90aGluZyBuZWVkcyB0byBiZSBkb25lIHRvIG9wZW4gdGhpcyBmaWxlXHJcblx0Ly9cclxuXHR0aGlzLnJlYWRPZmZzZXQgPSAwO1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXMsIHJlailcclxuXHR7XHJcblx0XHRzZXRUaW1lb3V0KHJlcywgMCk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5MQVNMb2FkZXIucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlcywgcmVqKVxyXG5cdHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKVxyXG5cdFx0e1xyXG5cdFx0XHRzZWxmLmhlYWRlciA9IHBhcnNlTEFTSGVhZGVyKHNlbGYuYXJyYXlidWZmZXIpO1xyXG5cdFx0XHRyZXMoc2VsZi5oZWFkZXIpO1xyXG5cdFx0fSwgMCk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5MQVNMb2FkZXIucHJvdG90eXBlLnJlYWREYXRhID0gZnVuY3Rpb24oY291bnQsIG9mZnNldCwgc2tpcClcclxue1xyXG5cdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlcywgcmVqKVxyXG5cdHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKVxyXG5cdFx0e1xyXG5cdFx0XHRpZighc2VsZi5oZWFkZXIpXHJcblx0XHRcdFx0cmV0dXJuIHJlaihuZXcgRXJyb3IoXCJDYW5ub3Qgc3RhcnQgcmVhZGluZyBkYXRhIHRpbGwgYSBoZWFkZXIgcmVxdWVzdCBpcyBpc3N1ZWRcIikpO1xyXG5cclxuXHRcdFx0dmFyIHN0YXJ0O1xyXG5cdFx0XHRpZihza2lwIDw9IDEpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb3VudCA9IE1hdGgubWluKGNvdW50LCBzZWxmLmhlYWRlci5wb2ludHNDb3VudCAtIHNlbGYucmVhZE9mZnNldCk7XHJcblx0XHRcdFx0c3RhcnQgPSBzZWxmLmhlYWRlci5wb2ludHNPZmZzZXQgKyBzZWxmLnJlYWRPZmZzZXQgKiBzZWxmLmhlYWRlci5wb2ludHNTdHJ1Y3RTaXplO1xyXG5cdFx0XHRcdHZhciBlbmQgPSBzdGFydCArIGNvdW50ICogc2VsZi5oZWFkZXIucG9pbnRzU3RydWN0U2l6ZTtcclxuXHRcdFx0XHRyZXMoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YnVmZmVyOiBzZWxmLmFycmF5YnVmZmVyLnNsaWNlKHN0YXJ0LCBlbmQpLFxyXG5cdFx0XHRcdFx0Y291bnQ6IGNvdW50LFxyXG5cdFx0XHRcdFx0aGFzTW9yZURhdGE6IHNlbGYucmVhZE9mZnNldCArIGNvdW50IDwgc2VsZi5oZWFkZXIucG9pbnRzQ291bnRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZWxmLnJlYWRPZmZzZXQgKz0gY291bnQ7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHBvaW50c1RvUmVhZCA9IE1hdGgubWluKGNvdW50ICogc2tpcCwgc2VsZi5oZWFkZXIucG9pbnRzQ291bnQgLSBzZWxmLnJlYWRPZmZzZXQpO1xyXG5cdFx0XHRcdHZhciBidWZmZXJTaXplID0gTWF0aC5jZWlsKHBvaW50c1RvUmVhZCAvIHNraXApO1xyXG5cdFx0XHRcdHZhciBwb2ludHNSZWFkID0gMDtcclxuXHJcblx0XHRcdFx0dmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlclNpemUgKiBzZWxmLmhlYWRlci5wb2ludHNTdHJ1Y3RTaXplKTtcclxuXHJcblx0XHRcdFx0Zm9yKHZhciBpID0gMCA7IGkgPCBwb2ludHNUb1JlYWQgOyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYoaSAlIHNraXAgPT09IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHN0YXJ0ID0gc2VsZi5oZWFkZXIucG9pbnRzT2Zmc2V0ICsgc2VsZi5yZWFkT2Zmc2V0ICogc2VsZi5oZWFkZXIucG9pbnRzU3RydWN0U2l6ZTtcclxuXHRcdFx0XHRcdFx0dmFyIHNyYyA9IG5ldyBVaW50OEFycmF5KHNlbGYuYXJyYXlidWZmZXIsIHN0YXJ0LCBzZWxmLmhlYWRlci5wb2ludHNTdHJ1Y3RTaXplKTtcclxuXHJcblx0XHRcdFx0XHRcdGJ1Zi5zZXQoc3JjLCBwb2ludHNSZWFkICogc2VsZi5oZWFkZXIucG9pbnRzU3RydWN0U2l6ZSk7XHJcblx0XHRcdFx0XHRcdHBvaW50c1JlYWQgKys7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0c2VsZi5yZWFkT2Zmc2V0ICsrO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmVzKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGJ1ZmZlcjogYnVmLmJ1ZmZlcixcclxuXHRcdFx0XHRcdGNvdW50OiBwb2ludHNSZWFkLFxyXG5cdFx0XHRcdFx0aGFzTW9yZURhdGE6IHNlbGYucmVhZE9mZnNldCA8IHNlbGYuaGVhZGVyLnBvaW50c0NvdW50XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sIDApO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuTEFTTG9hZGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHZhciBzZWxmID0gdGhpcztcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzLCByZWopXHJcblx0e1xyXG5cdFx0c2VsZi5hcnJheWJ1ZmZlciA9IG51bGw7XHJcblx0XHRzZXRUaW1lb3V0KHJlcywgMCk7XHJcblx0fSk7XHJcbn07XHJcblxyXG4vLyBMQVogTG9hZGVyXHJcbi8vIFVzZXMgTmFDTCBtb2R1bGUgdG8gbG9hZCBMQVogZmlsZXNcclxuLy9cclxuZnVuY3Rpb24gTEFaTG9hZGVyKGFycmF5YnVmZmVyKVxyXG57XHJcblx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHR0aGlzLmFycmF5YnVmZmVyID0gYXJyYXlidWZmZXI7XHJcblx0dGhpcy5uZXh0Q0IgPSBudWxsO1xyXG5cclxuXHR0aGlzLmRvcnIgPSBmdW5jdGlvbihyZXEsIGNiKVxyXG5cdHtcclxuXHRcdHNlbGYubmV4dENCID0gY2I7XHJcblx0XHRcclxuXHRcdEdsb2JhbC53b3JrZXJQb29sLnJ1blRhc2soV29ya2VyTWFuYWdlci5MQVNfTEFaLCBmdW5jdGlvbihlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZihzZWxmLm5leHRDQiAhPT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGYubmV4dENCKGUuZGF0YSk7XHJcblx0XHRcdFx0c2VsZi5uZXh0Q0IgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9LCByZXEpO1xyXG5cdH07XHJcbn07XHJcblxyXG5MQVpMb2FkZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbigpXHJcbntcclxuXHQvLyBub3RoaW5nIG5lZWRzIHRvIGJlIGRvbmUgdG8gb3BlbiB0aGlzIGZpbGVcclxuXHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlcywgcmVqKVxyXG5cdHtcclxuXHRcdHNlbGYuZG9ycih7dHlwZTpcIm9wZW5cIiwgYXJyYXlidWZmZXI6IHNlbGYuYXJyYXlidWZmZXJ9LCBmdW5jdGlvbihyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZihyLnN0YXR1cyAhPT0gMSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiByZWoobmV3IEVycm9yKFwiRmFpbGVkIHRvIG9wZW4gZmlsZVwiKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlcyh0cnVlKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuTEFaTG9hZGVyLnByb3RvdHlwZS5nZXRIZWFkZXIgPSBmdW5jdGlvbigpXHJcbntcclxuXHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXMsIHJlailcclxuXHR7XHJcblx0XHRzZWxmLmRvcnIoe3R5cGU6J2hlYWRlcid9LCBmdW5jdGlvbihyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZihyLnN0YXR1cyAhPT0gMSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiByZWoobmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBoZWFkZXJcIikpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXMoci5oZWFkZXIpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5MQVpMb2FkZXIucHJvdG90eXBlLnJlYWREYXRhID0gZnVuY3Rpb24oY291bnQsIG9mZnNldCwgc2tpcClcclxue1xyXG5cdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlcywgcmVqKVxyXG5cdHtcclxuXHRcdHNlbGYuZG9ycih7dHlwZToncmVhZCcsIGNvdW50OiBjb3VudCwgb2Zmc2V0OiBvZmZzZXQsIHNraXA6IHNraXB9LCBmdW5jdGlvbihyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZihyLnN0YXR1cyAhPT0gMSlcclxuXHRcdFx0XHRyZXR1cm4gcmVqKG5ldyBFcnJvcihcIkZhaWxlZCB0byByZWFkIGRhdGFcIikpO1xyXG5cdFx0XHRyZXMoe1xyXG5cdFx0XHRcdGJ1ZmZlcjogci5idWZmZXIsXHJcblx0XHRcdFx0Y291bnQ6IHIuY291bnQsXHJcblx0XHRcdFx0aGFzTW9yZURhdGE6IHIuaGFzTW9yZURhdGFcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufTtcclxuXHJcbkxBWkxvYWRlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpXHJcbntcclxuXHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXMsIHJlailcclxuXHR7XHJcblx0XHRzZWxmLmRvcnIoe3R5cGU6J2Nsb3NlJ30sIGZ1bmN0aW9uKHIpXHJcblx0XHR7XHJcblx0XHRcdGlmKHIuc3RhdHVzICE9PSAxKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmV0dXJuIHJlaihuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY2xvc2UgZmlsZVwiKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlcyh0cnVlKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuLy8gQSBzaW5nbGUgY29uc2lzdGVudCBpbnRlcmZhY2UgZm9yIGxvYWRpbmcgTEFTL0xBWiBmaWxlc1xyXG5mdW5jdGlvbiBMQVNGaWxlKGFycmF5YnVmZmVyKVxyXG57XHJcblx0dGhpcy5hcnJheWJ1ZmZlciA9IGFycmF5YnVmZmVyO1xyXG5cclxuXHR0aGlzLmRldGVybWluZVZlcnNpb24oKTtcclxuXHRpZih0aGlzLnZlcnNpb24gPiAxMilcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IGZpbGUgdmVyc2lvbnMgPD0gMS4yIGFyZSBzdXBwb3J0ZWQgYXQgdGhpcyB0aW1lXCIpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5kZXRlcm1pbmVGb3JtYXQoKTtcclxuXHRpZihwb2ludEZvcm1hdFJlYWRlcnNbdGhpcy5mb3JtYXRJZF0gPT09IHVuZGVmaW5lZClcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcG9pbnQgZm9ybWF0IElEIGlzIG5vdCBzdXBwb3J0ZWRcIik7XHJcblx0fVxyXG5cclxuXHR0aGlzLmxvYWRlciA9IHRoaXMuaXNDb21wcmVzc2VkID8gbmV3IExBWkxvYWRlcih0aGlzLmFycmF5YnVmZmVyKSA6IG5ldyBMQVNMb2FkZXIodGhpcy5hcnJheWJ1ZmZlcik7XHJcbn07XHJcblxyXG5MQVNGaWxlLnByb3RvdHlwZS5kZXRlcm1pbmVGb3JtYXQgPSBmdW5jdGlvbigpXHJcbntcclxuXHR2YXIgZm9ybWF0SWQgPSByZWFkQXModGhpcy5hcnJheWJ1ZmZlciwgVWludDhBcnJheSwgMzIqMys4KTtcclxuXHR2YXIgYml0XzcgPSAoZm9ybWF0SWQgJiAweDgwKSA+PiA3O1xyXG5cdHZhciBiaXRfNiA9IChmb3JtYXRJZCAmIDB4NDApID4+IDY7XHJcblxyXG5cdGlmKGJpdF83ID09PSAxICYmIGJpdF82ID09PSAxKVxyXG5cdHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk9sZCBzdHlsZSBjb21wcmVzc2lvbiBub3Qgc3VwcG9ydGVkXCIpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5mb3JtYXRJZCA9IGZvcm1hdElkICYgMHgzZjtcclxuXHR0aGlzLmlzQ29tcHJlc3NlZCA9IChiaXRfNyA9PT0gMSB8fCBiaXRfNiA9PT0gMSk7XHJcbn07XHJcblxyXG5MQVNGaWxlLnByb3RvdHlwZS5kZXRlcm1pbmVWZXJzaW9uID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dmFyIHZlciA9IG5ldyBJbnQ4QXJyYXkodGhpcy5hcnJheWJ1ZmZlciwgMjQsIDIpO1xyXG5cdHRoaXMudmVyc2lvbiA9IHZlclswXSAqIDEwICsgdmVyWzFdO1xyXG5cdHRoaXMudmVyc2lvbkFzU3RyaW5nID0gdmVyWzBdICsgXCIuXCIgKyB2ZXJbMV07XHJcbn07XHJcblxyXG5MQVNGaWxlLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKVxyXG57XHJcblx0cmV0dXJuIHRoaXMubG9hZGVyLm9wZW4oKTtcclxufTtcclxuXHJcbkxBU0ZpbGUucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiB0aGlzLmxvYWRlci5nZXRIZWFkZXIoKTtcclxufTtcclxuXHJcbkxBU0ZpbGUucHJvdG90eXBlLnJlYWREYXRhID0gZnVuY3Rpb24oY291bnQsIHN0YXJ0LCBza2lwKVxyXG57XHJcblx0cmV0dXJuIHRoaXMubG9hZGVyLnJlYWREYXRhKGNvdW50LCBzdGFydCwgc2tpcCk7XHJcbn07XHJcblxyXG5MQVNGaWxlLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiB0aGlzLmxvYWRlci5jbG9zZSgpO1xyXG59O1xyXG5cclxuLy8gRGVjb2RlcyBMQVMgcmVjb3JkcyBpbnRvIHBvaW50c1xyXG5mdW5jdGlvbiBMQVNEZWNvZGVyKGJ1ZmZlciwgcG9pbnRGb3JtYXRJRCwgcG9pbnRTaXplLCBwb2ludHNDb3VudCwgc2NhbGUsIG9mZnNldCwgbWlucywgbWF4cylcclxue1xyXG5cdHRoaXMuYXJyYXliID0gYnVmZmVyO1xyXG5cdHRoaXMuZGVjb2RlciA9IHBvaW50Rm9ybWF0UmVhZGVyc1twb2ludEZvcm1hdElEXTtcclxuXHR0aGlzLnBvaW50c0NvdW50ID0gcG9pbnRzQ291bnQ7XHJcblx0dGhpcy5wb2ludFNpemUgPSBwb2ludFNpemU7XHJcblx0dGhpcy5zY2FsZSA9IHNjYWxlO1xyXG5cdHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG5cdHRoaXMubWlucyA9IG1pbnM7XHJcblx0dGhpcy5tYXhzID0gbWF4cztcclxufTtcclxuXHJcbkxBU0RlY29kZXIucHJvdG90eXBlLmdldFBvaW50ID0gZnVuY3Rpb24oaW5kZXgpXHJcbntcclxuXHRpZihpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5wb2ludHNDb3VudClcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQb2ludCBpbmRleCBvdXQgb2YgcmFuZ2VcIik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGhpcy5kZWNvZGVyKG5ldyBEYXRhVmlldyh0aGlzLmFycmF5YiwgaW5kZXggKiB0aGlzLnBvaW50U2l6ZSwgdGhpcy5wb2ludFNpemUpKTtcclxufTtcclxuXHJcbmV4cG9ydCB7TEFTTG9hZGVyLCBMQVpMb2FkZXIsIExBU0ZpbGUsIExBU0RlY29kZXJ9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuaW1wb3J0IHtCaW5hcnlMb2FkZXJ9IGZyb20gXCIuL0JpbmFyeUxvYWRlci5qc1wiO1xyXG5pbXBvcnQge0xBU0xBWkxvYWRlcn0gZnJvbSBcIi4vTEFTTEFaTG9hZGVyLmpzXCI7XHJcbmltcG9ydCB7UG9pbnRBdHRyaWJ1dGVzLCBQb2ludEF0dHJpYnV0ZX0gZnJvbSBcIi4uL1BvaW50QXR0cmlidXRlcy5qc1wiO1xyXG5pbXBvcnQge1BvaW50Q2xvdWRPY3RyZWVHZW9tZXRyeSwgUG9pbnRDbG91ZE9jdHJlZUdlb21ldHJ5Tm9kZX0gZnJvbSBcIi4uL3BvaW50Y2xvdWQvZ2VvbWV0cmllcy9Qb2ludENsb3VkT2N0cmVlR2VvbWV0cnkuanNcIjtcclxuaW1wb3J0IHtWZXJzaW9uVXRpbHN9IGZyb20gXCIuLi91dGlscy9WZXJzaW9uVXRpbHMuanNcIjtcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi9HbG9iYWwuanNcIjtcclxuaW1wb3J0IHtYSFJGYWN0b3J5fSBmcm9tIFwiLi4vWEhSRmFjdG9yeS5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBMb2FkcyBtbm8gZmlsZXMgYW5kIHJldHVybnMgYSBQb2ludGNsb3VkT2N0cmVlXHJcbiAqIGZvciBhIGRlc2NyaXB0aW9uIG9mIHRoZSBtbm8gYmluYXJ5IGZpbGUgZm9ybWF0LCByZWFkIG1ub0ZpbGVGb3JtYXQudHh0XHJcbiAqXHJcbiAqIEBhdXRob3IgTWFya3VzIFNjaHVldHpcclxuICovXHJcbmNsYXNzIFBPQ0xvYWRlclxyXG57XHJcblx0LyoqXHJcblx0ICogQHJldHVybiBhIHBvaW50IGNsb3VkIG9jdHJlZSB3aXRoIHRoZSByb290IG5vZGUgZGF0YSBsb2FkZWQuXHJcblx0ICogbG9hZGluZyBvZiBkZXNjZW5kYW50cyBoYXBwZW5zIGFzeW5jaHJvbm91c2x5IHdoZW4gdGhleVwicmUgbmVlZGVkXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gdXJsXHJcblx0ICogQHBhcmFtIGxvYWRpbmdGaW5pc2hlZExpc3RlbmVyIGV4ZWN1dGVkIGFmdGVyIGxvYWRpbmcgdGhlIGJpbmFyeSBoYXMgYmVlbiBmaW5pc2hlZFxyXG5cdCAqL1xyXG5cdHN0YXRpYyBsb2FkKHVybCwgY2FsbGJhY2spXHJcblx0e1xyXG5cdFx0dmFyIHBjbyA9IG5ldyBQb2ludENsb3VkT2N0cmVlR2VvbWV0cnkoKTtcclxuXHRcdHBjby51cmwgPSB1cmw7XHJcblx0XHRcclxuXHRcdHZhciB4aHIgPSBYSFJGYWN0b3J5LmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZShcInRleHQvcGxhaW5cIik7XHJcblx0XHR4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG5cdFx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uKClcclxuXHRcdHtcclxuXHRcdFx0dmFyIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHR2YXIgdmVyc2lvbiA9IG5ldyBWZXJzaW9uVXRpbHMoZGF0YS52ZXJzaW9uKTtcclxuXHJcblx0XHRcdC8vQXNzdW1lIGRpciBhcyBhYnNvbHV0ZSBpZiBpdCBzdGFydHMgd2l0aCBodHRwXHJcblx0XHRcdGlmKGRhdGEub2N0cmVlRGlyLmluZGV4T2YoXCJodHRwXCIpID09PSAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGNvLm9jdHJlZURpciA9IGRhdGEub2N0cmVlRGlyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBjby5vY3RyZWVEaXIgPSB1cmwgKyBcIi8uLi9cIiArIGRhdGEub2N0cmVlRGlyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwY28uc3BhY2luZyA9IGRhdGEuc3BhY2luZztcclxuXHRcdFx0cGNvLmhpZXJhcmNoeVN0ZXBTaXplID0gZGF0YS5oaWVyYXJjaHlTdGVwU2l6ZTtcclxuXHRcdFx0cGNvLnBvaW50QXR0cmlidXRlcyA9IGRhdGEucG9pbnRBdHRyaWJ1dGVzO1xyXG5cclxuXHRcdFx0dmFyIG1pbiA9IG5ldyBUSFJFRS5WZWN0b3IzKGRhdGEuYm91bmRpbmdCb3gubHgsIGRhdGEuYm91bmRpbmdCb3gubHksIGRhdGEuYm91bmRpbmdCb3gubHopO1xyXG5cdFx0XHR2YXIgbWF4ID0gbmV3IFRIUkVFLlZlY3RvcjMoZGF0YS5ib3VuZGluZ0JveC51eCwgZGF0YS5ib3VuZGluZ0JveC51eSwgZGF0YS5ib3VuZGluZ0JveC51eik7XHJcblx0XHRcdHZhciBib3VuZGluZ0JveCA9IG5ldyBUSFJFRS5Cb3gzKG1pbiwgbWF4KTtcclxuXHRcdFx0dmFyIHRpZ2h0Qm91bmRpbmdCb3ggPSBib3VuZGluZ0JveC5jbG9uZSgpO1xyXG5cclxuXHRcdFx0aWYoZGF0YS50aWdodEJvdW5kaW5nQm94KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGlnaHRCb3VuZGluZ0JveC5taW4uY29weShuZXcgVEhSRUUuVmVjdG9yMyhkYXRhLnRpZ2h0Qm91bmRpbmdCb3gubHgsIGRhdGEudGlnaHRCb3VuZGluZ0JveC5seSwgZGF0YS50aWdodEJvdW5kaW5nQm94Lmx6KSk7XHJcblx0XHRcdFx0dGlnaHRCb3VuZGluZ0JveC5tYXguY29weShuZXcgVEhSRUUuVmVjdG9yMyhkYXRhLnRpZ2h0Qm91bmRpbmdCb3gudXgsIGRhdGEudGlnaHRCb3VuZGluZ0JveC51eSwgZGF0YS50aWdodEJvdW5kaW5nQm94LnV6KSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBvZmZzZXQgPSBtaW4uY2xvbmUoKTtcclxuXHJcblx0XHRcdGJvdW5kaW5nQm94Lm1pbi5zdWIob2Zmc2V0KTtcclxuXHRcdFx0Ym91bmRpbmdCb3gubWF4LnN1YihvZmZzZXQpO1xyXG5cclxuXHRcdFx0dGlnaHRCb3VuZGluZ0JveC5taW4uc3ViKG9mZnNldCk7XHJcblx0XHRcdHRpZ2h0Qm91bmRpbmdCb3gubWF4LnN1YihvZmZzZXQpO1xyXG5cclxuXHRcdFx0cGNvLnByb2plY3Rpb24gPSBkYXRhLnByb2plY3Rpb247XHJcblx0XHRcdHBjby5ib3VuZGluZ0JveCA9IGJvdW5kaW5nQm94O1xyXG5cdFx0XHRwY28udGlnaHRCb3VuZGluZ0JveCA9IHRpZ2h0Qm91bmRpbmdCb3g7XHJcblx0XHRcdHBjby5ib3VuZGluZ1NwaGVyZSA9IGJvdW5kaW5nQm94LmdldEJvdW5kaW5nU3BoZXJlKG5ldyBUSFJFRS5TcGhlcmUoKSk7XHJcblx0XHRcdHBjby50aWdodEJvdW5kaW5nU3BoZXJlID0gdGlnaHRCb3VuZGluZ0JveC5nZXRCb3VuZGluZ1NwaGVyZShuZXcgVEhSRUUuU3BoZXJlKCkpO1xyXG5cdFx0XHRwY28ub2Zmc2V0ID0gb2Zmc2V0O1xyXG5cclxuXHRcdFx0Ly9TZWxlY3QgdGhlIGFwcHJvcGlhdGUgbG9hZGVyXHJcblx0XHRcdGlmKGRhdGEucG9pbnRBdHRyaWJ1dGVzID09PSBcIkxBU1wiIHx8IGRhdGEucG9pbnRBdHRyaWJ1dGVzID09PSBcIkxBWlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGNvLmxvYWRlciA9IG5ldyBMQVNMQVpMb2FkZXIoZGF0YS52ZXJzaW9uKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwY28ubG9hZGVyID0gbmV3IEJpbmFyeUxvYWRlcihkYXRhLnZlcnNpb24sIGJvdW5kaW5nQm94LCBkYXRhLnNjYWxlKTtcclxuXHRcdFx0XHRwY28ucG9pbnRBdHRyaWJ1dGVzID0gbmV3IFBvaW50QXR0cmlidXRlcyhwY28ucG9pbnRBdHRyaWJ1dGVzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG5vZGVzID0ge307XHJcblx0XHRcdHZhciBuYW1lID0gXCJyXCI7XHJcblxyXG5cdFx0XHR2YXIgcm9vdCA9IG5ldyBQb2ludENsb3VkT2N0cmVlR2VvbWV0cnlOb2RlKG5hbWUsIHBjbywgYm91bmRpbmdCb3gpO1xyXG5cdFx0XHRyb290LmxldmVsID0gMDtcclxuXHRcdFx0cm9vdC5oYXNDaGlsZHJlbiA9IHRydWU7XHJcblx0XHRcdHJvb3Quc3BhY2luZyA9IHBjby5zcGFjaW5nO1xyXG5cdFx0XHRyb290Lm51bVBvaW50cyA9IHZlcnNpb24udXBUbyhcIjEuNVwiKSA/IGRhdGEuaGllcmFyY2h5WzBdWzFdIDogMDtcclxuXHJcblx0XHRcdHBjby5yb290ID0gcm9vdDtcclxuXHRcdFx0cGNvLnJvb3QubG9hZCgpO1xyXG5cdFx0XHRub2Rlc1tuYW1lXSA9IHJvb3Q7XHJcblxyXG5cdFx0XHQvL0xvYWQgcmVtYWluaW5nIGhpZXJhcmNoeVxyXG5cdFx0XHRpZih2ZXJzaW9uLnVwVG8oXCIxLjRcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IodmFyIGkgPSAxOyBpIDwgZGF0YS5oaWVyYXJjaHkubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBkYXRhLmhpZXJhcmNoeVtpXVswXTtcclxuXHRcdFx0XHRcdHZhciBudW1Qb2ludHMgPSBkYXRhLmhpZXJhcmNoeVtpXVsxXTtcclxuXHRcdFx0XHRcdHZhciBpbmRleCA9IHBhcnNlSW50KG5hbWUuY2hhckF0KG5hbWUubGVuZ3RoIC0gMSkpO1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudE5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCAtIDEpO1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudE5vZGUgPSBub2Rlc1twYXJlbnROYW1lXTtcclxuXHRcdFx0XHRcdHZhciBsZXZlbCA9IG5hbWUubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHRcdHZhciBib3VuZGluZ0JveCA9IFBPQ0xvYWRlci5jcmVhdGVDaGlsZEFBQkIocGFyZW50Tm9kZS5ib3VuZGluZ0JveCwgaW5kZXgpO1xyXG5cclxuXHRcdFx0XHRcdHZhciBub2RlID0gbmV3IFBvaW50Q2xvdWRPY3RyZWVHZW9tZXRyeU5vZGUobmFtZSwgcGNvLCBib3VuZGluZ0JveCk7XHJcblx0XHRcdFx0XHRub2RlLmxldmVsID0gbGV2ZWw7XHJcblx0XHRcdFx0XHRub2RlLm51bVBvaW50cyA9IG51bVBvaW50cztcclxuXHRcdFx0XHRcdG5vZGUuc3BhY2luZyA9IHBjby5zcGFjaW5nIC8gTWF0aC5wb3coMiwgbGV2ZWwpO1xyXG5cdFx0XHRcdFx0cGFyZW50Tm9kZS5hZGRDaGlsZChub2RlKTtcclxuXHRcdFx0XHRcdG5vZGVzW25hbWVdID0gbm9kZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cGNvLm5vZGVzID0gbm9kZXM7XHJcblxyXG5cdFx0XHRjYWxsYmFjayhwY28pO1xyXG5cdFx0fTtcclxuXHJcblx0XHR4aHIub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nLS07XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUG90cmVlOiBsb2FkaW5nIGZpbGUgZmFpbGVkLlwiLCB1cmwsIGV2ZW50KTtcclxuXHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdH07XHJcblxyXG5cdFx0eGhyLnNlbmQobnVsbCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZFBvaW50QXR0cmlidXRlcyhtbm8pXHJcblx0e1xyXG5cdFx0dmFyIGZwYSA9IG1uby5wb2ludEF0dHJpYnV0ZXM7XHJcblx0XHR2YXIgcGEgPSBuZXcgUG9pbnRBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGZwYS5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0cGEuYWRkKFBvaW50QXR0cmlidXRlW2ZwYVtpXV0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGVDaGlsZEFBQkIoYWFiYiwgaW5kZXgpXHJcblx0e1xyXG5cdFx0dmFyIG1pbiA9IGFhYmIubWluLmNsb25lKCk7XHJcblx0XHR2YXIgbWF4ID0gYWFiYi5tYXguY2xvbmUoKTtcclxuXHRcdHZhciBzaXplID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5zdWJWZWN0b3JzKG1heCwgbWluKTtcclxuXHJcblx0XHRpZigoaW5kZXggJiAwYjAwMDEpID4gMClcclxuXHRcdHtcclxuXHRcdFx0bWluLnogKz0gc2l6ZS56IC8gMjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bWF4LnogLT0gc2l6ZS56IC8gMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZigoaW5kZXggJiAwYjAwMTApID4gMClcclxuXHRcdHtcclxuXHRcdFx0bWluLnkgKz0gc2l6ZS55IC8gMjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bWF4LnkgLT0gc2l6ZS55IC8gMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZigoaW5kZXggJiAwYjAxMDApID4gMClcclxuXHRcdHtcclxuXHRcdFx0bWluLnggKz0gc2l6ZS54IC8gMjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bWF4LnggLT0gc2l6ZS54IC8gMjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbmV3IFRIUkVFLkJveDMobWluLCBtYXgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtQT0NMb2FkZXJ9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi8uLi9HbG9iYWwuanNcIjtcclxuaW1wb3J0IHtXb3JrZXJNYW5hZ2VyfSBmcm9tIFwiLi4vLi4vdXRpbHMvV29ya2VyTWFuYWdlci5qc1wiO1xyXG5pbXBvcnQge1hIUkZhY3Rvcnl9IGZyb20gXCIuLi8uLi9YSFJGYWN0b3J5LmpzXCI7XHJcblxyXG5jbGFzcyBFcHRCaW5hcnlMb2FkZXJcclxue1xyXG5cdGxvYWQobm9kZSlcclxuXHR7XHJcblx0XHRpZihub2RlLmxvYWRlZCkgcmV0dXJuO1xyXG5cclxuXHRcdHZhciB1cmwgPSBub2RlLnVybCgpICsgXCIuYmluXCI7XHJcblx0XHRcclxuXHRcdHZhciB4aHIgPSBYSFJGYWN0b3J5LmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG5cdFx0eGhyLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuXHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9wbGFpbjsgY2hhcnNldD14LXVzZXItZGVmaW5lZFwiKTtcclxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PT0gNClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKHhoci5zdGF0dXMgPT09IDIwMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgYnVmZmVyID0geGhyLnJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZShub2RlLCBidWZmZXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJGYWlsZWQgXCIgKyB1cmwgKyBcIjogXCIgKyB4aHIuc3RhdHVzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHhoci5zZW5kKG51bGwpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRmFpbGVkIHJlcXVlc3Q6IFwiICsgZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwYXJzZShub2RlLCBidWZmZXIpXHJcblx0e1xyXG5cdFx0dmFyIHdvcmtlciA9IEdsb2JhbC53b3JrZXJQb29sLmdldFdvcmtlcihXb3JrZXJNYW5hZ2VyLkVQVF9CSU5BUllfREVDT0RFUik7XHJcblxyXG5cdFx0d29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpXHJcblx0XHR7XHJcblx0XHRcdHZhciBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XHJcblx0XHRcdHZhciBudW1Qb2ludHMgPSBlLmRhdGEubnVtUG9pbnRzO1xyXG5cclxuXHRcdFx0dmFyIHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShlLmRhdGEucG9zaXRpb24pO1xyXG5cdFx0XHRnLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcclxuXHJcblx0XHRcdHZhciBpbmRpY2VzID0gbmV3IFVpbnQ4QXJyYXkoZS5kYXRhLmluZGljZXMpO1xyXG5cdFx0XHRnLnNldEF0dHJpYnV0ZShcImluZGljZXNcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShpbmRpY2VzLCA0KSk7XHJcblxyXG5cdFx0XHRpZihlLmRhdGEuY29sb3IpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgY29sb3IgPSBuZXcgVWludDhBcnJheShlLmRhdGEuY29sb3IpO1xyXG5cdFx0XHRcdGcuc2V0QXR0cmlidXRlKFwiY29sb3JcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgNCwgdHJ1ZSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGUuZGF0YS5pbnRlbnNpdHkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgaW50ZW5zaXR5ID0gbmV3IEZsb2F0MzJBcnJheShlLmRhdGEuaW50ZW5zaXR5KTtcclxuXHRcdFx0XHRnLnNldEF0dHJpYnV0ZShcImludGVuc2l0eVwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGludGVuc2l0eSwgMSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGUuZGF0YS5jbGFzc2lmaWNhdGlvbilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBjbGFzc2lmaWNhdGlvbiA9IG5ldyBVaW50OEFycmF5KGUuZGF0YS5jbGFzc2lmaWNhdGlvbik7XHJcblx0XHRcdFx0Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc2lmaWNhdGlvblwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNsYXNzaWZpY2F0aW9uLCAxKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoZS5kYXRhLnJldHVybk51bWJlcilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciByZXR1cm5OdW1iZXIgPSBuZXcgVWludDhBcnJheShlLmRhdGEucmV0dXJuTnVtYmVyKTtcclxuXHRcdFx0XHRnLnNldEF0dHJpYnV0ZShcInJldHVybk51bWJlclwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHJldHVybk51bWJlciwgMSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGUuZGF0YS5udW1iZXJPZlJldHVybnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgbnVtYmVyT2ZSZXR1cm5zID0gbmV3IFVpbnQ4QXJyYXkoZS5kYXRhLm51bWJlck9mUmV0dXJucyk7XHJcblx0XHRcdFx0Zy5zZXRBdHRyaWJ1dGUoXCJudW1iZXJPZlJldHVybnNcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShudW1iZXJPZlJldHVybnMsIDEpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihlLmRhdGEucG9pbnRTb3VyY2VJZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBwb2ludFNvdXJjZUlkID0gbmV3IFVpbnQxNkFycmF5KGUuZGF0YS5wb2ludFNvdXJjZUlkKTtcclxuXHRcdFx0XHRnLnNldEF0dHJpYnV0ZShcInBvaW50U291cmNlSURcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb2ludFNvdXJjZUlkLCAxKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGcuYXR0cmlidXRlcy5pbmRpY2VzLm5vcm1hbGl6ZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0dmFyIHRpZ2h0Qm91bmRpbmdCb3ggPSBuZXcgVEhSRUUuQm94MyhcclxuXHRcdFx0XHRuZXcgVEhSRUUuVmVjdG9yMygpLmZyb21BcnJheShlLmRhdGEudGlnaHRCb3VuZGluZ0JveC5taW4pLFxyXG5cdFx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCkuZnJvbUFycmF5KGUuZGF0YS50aWdodEJvdW5kaW5nQm94Lm1heClcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdG5vZGUuZG9uZUxvYWRpbmcoZywgdGlnaHRCb3VuZGluZ0JveCwgbnVtUG9pbnRzLCBuZXcgVEhSRUUuVmVjdG9yMyguLi5lLmRhdGEubWVhbikpO1xyXG5cclxuXHRcdFx0R2xvYmFsLndvcmtlclBvb2wucmV0dXJuV29ya2VyKFdvcmtlck1hbmFnZXIuRVBUX0JJTkFSWV9ERUNPREVSLCB3b3JrZXIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgdG9BcnJheSA9ICh2KSA9PiBbdi54LCB2LnksIHYuel07XHJcblx0XHR2YXIgbWVzc2FnZSA9IHtcclxuXHRcdFx0YnVmZmVyOiBidWZmZXIsXHJcblx0XHRcdHNjaGVtYTogbm9kZS5lcHQuc2NoZW1hLFxyXG5cdFx0XHRzY2FsZTogbm9kZS5lcHQuZXB0U2NhbGUsXHJcblx0XHRcdG9mZnNldDogbm9kZS5lcHQuZXB0T2Zmc2V0LFxyXG5cdFx0XHRtaW5zOiB0b0FycmF5KG5vZGUua2V5LmIubWluKVxyXG5cdFx0fTtcclxuXHJcblx0XHR3b3JrZXIucG9zdE1lc3NhZ2UobWVzc2FnZSwgW21lc3NhZ2UuYnVmZmVyXSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtFcHRCaW5hcnlMb2FkZXJ9O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vLi4vR2xvYmFsLmpzXCI7XHJcbmltcG9ydCB7TEFTRmlsZSwgTEFTRGVjb2Rlcn0gZnJvbSBcIi4uL0xBU0xvYWRlci5qc1wiO1xyXG5pbXBvcnQge1dvcmtlck1hbmFnZXJ9IGZyb20gXCIuLi8uLi91dGlscy9Xb3JrZXJNYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCB7WEhSRmFjdG9yeX0gZnJvbSBcIi4uLy4uL1hIUkZhY3RvcnkuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBsYXNsYXogY29kZSB0YWtlbiBhbmQgYWRhcHRlZCBmcm9tIHBsYXMuaW8ganMtbGFzbGF6XHJcbiAqXHRodHRwOi8vcGxhcy5pby9cclxuICpcdGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJtYS9wbGFzaW9cclxuICpcclxuICogVGhhbmtzIHRvIFVkYXkgVmVybWEgYW5kIEhvd2FyZCBCdXRsZXJcclxuICpcclxuICovXHJcbmNsYXNzIEVwdExhc3ppcExvYWRlclxyXG57XHJcblx0bG9hZChub2RlKVxyXG5cdHtcclxuXHRcdGlmKG5vZGUubG9hZGVkKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHVybCA9IG5vZGUudXJsKCkgKyBcIi5sYXpcIjtcclxuXHJcblx0XHR2YXIgeGhyID0gWEhSRmFjdG9yeS5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcblx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZShcInRleHQvcGxhaW47IGNoYXJzZXQ9eC11c2VyLWRlZmluZWRcIik7XHJcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT5cclxuXHRcdHtcclxuXHRcdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZih4aHIuc3RhdHVzID09PSAyMDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGJ1ZmZlciA9IHhoci5yZXNwb25zZTtcclxuXHRcdFx0XHRcdHRoaXMucGFyc2Uobm9kZSwgYnVmZmVyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRmFpbGVkIFwiICsgdXJsICsgXCI6IFwiICsgeGhyLnN0YXR1cyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHhoci5zZW5kKG51bGwpO1xyXG5cdH1cclxuXHJcblx0cGFyc2Uobm9kZSwgYnVmZmVyKVxyXG5cdHtcclxuXHRcdHZhciBsZiA9IG5ldyBMQVNGaWxlKGJ1ZmZlcik7XHJcblx0XHR2YXIgaGFuZGxlciA9IG5ldyBFcHRMYXpCYXRjaGVyKG5vZGUpO1xyXG5cclxuXHRcdGxmLm9wZW4oKVxyXG5cdFx0LnRoZW4oKCkgPT5cclxuXHRcdHtcclxuXHRcdFx0bGYuaXNPcGVuID0gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGxmLmdldEhlYWRlcigpO1xyXG5cdFx0fSlcclxuXHRcdC50aGVuKChoZWFkZXIpID0+XHJcblx0XHR7XHJcblx0XHRcdHZhciBpID0gMDtcclxuXHRcdFx0dmFyIG5wID0gaGVhZGVyLnBvaW50c0NvdW50O1xyXG5cclxuXHRcdFx0dmFyIHRvQXJyYXkgPSAodikgPT4gW3YueCwgdi55LCB2LnpdO1xyXG5cdFx0XHR2YXIgbWlucyA9IHRvQXJyYXkobm9kZS5rZXkuYi5taW4pO1xyXG5cdFx0XHR2YXIgbWF4cyA9IHRvQXJyYXkobm9kZS5rZXkuYi5tYXgpO1xyXG5cclxuXHRcdFx0dmFyIHJlYWQgPSAoKSA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHAgPSBsZi5yZWFkRGF0YSgxMDAwMDAwLCAwLCAxKTtcclxuXHRcdFx0XHRyZXR1cm4gcC50aGVuKGZ1bmN0aW9uIChkYXRhKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBkID0gbmV3IExBU0RlY29kZXIoXHJcblx0XHRcdFx0XHRcdFx0ZGF0YS5idWZmZXIsXHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLnBvaW50c0Zvcm1hdElkLFxyXG5cdFx0XHRcdFx0XHRcdGhlYWRlci5wb2ludHNTdHJ1Y3RTaXplLFxyXG5cdFx0XHRcdFx0XHRcdGRhdGEuY291bnQsXHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLnNjYWxlLFxyXG5cdFx0XHRcdFx0XHRcdGhlYWRlci5vZmZzZXQsXHJcblx0XHRcdFx0XHRcdFx0bWlucyxcclxuXHRcdFx0XHRcdFx0XHRtYXhzKTtcclxuXHRcdFx0XHRcdGQuZXh0cmFCeXRlcyA9IGhlYWRlci5leHRyYUJ5dGVzO1xyXG5cdFx0XHRcdFx0ZC5wb2ludHNGb3JtYXRJZCA9IGhlYWRlci5wb2ludHNGb3JtYXRJZDtcclxuXHRcdFx0XHRcdGhhbmRsZXIucHVzaChkKTtcclxuXHJcblx0XHRcdFx0XHRpICs9IGRhdGEuY291bnQ7XHJcblxyXG5cdFx0XHRcdFx0aWYoZGF0YS5oYXNNb3JlRGF0YSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlYWQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aGVhZGVyLnRvdGFsUmVhZCA9IGk7XHJcblx0XHRcdFx0XHRcdGhlYWRlci52ZXJzaW9uQXNTdHJpbmcgPSBsZi52ZXJzaW9uQXNTdHJpbmc7XHJcblx0XHRcdFx0XHRcdGhlYWRlci5pc0NvbXByZXNzZWQgPSBsZi5pc0NvbXByZXNzZWQ7XHJcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlYWQoKTtcclxuXHRcdH0pXHJcblx0XHQudGhlbigoKSA9PiBsZi5jbG9zZSgpKVxyXG5cdFx0LnRoZW4oKCkgPT4gbGYuaXNPcGVuID0gZmFsc2UpXHJcblx0XHQuY2F0Y2goKGVycikgPT5cclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciByZWFkaW5nIExBWjpcIiwgZXJyKTtcclxuXHRcdFx0aWYobGYuaXNPcGVuKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGYuY2xvc2UoKS50aGVuKCgpID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGYuaXNPcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB0aHJvdyBlcnI7XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5jbGFzcyBFcHRMYXpCYXRjaGVyXHJcbntcclxuXHRjb25zdHJ1Y3Rvcihub2RlKVxyXG5cdHtcclxuXHRcdHRoaXMubm9kZSA9IG5vZGU7XHJcblx0fVxyXG5cclxuXHRwdXNoKGxhcylcclxuXHR7XHJcblx0XHR2YXIgd29ya2VyID0gR2xvYmFsLndvcmtlclBvb2wuZ2V0V29ya2VyKFdvcmtlck1hbmFnZXIuRVBUX0xBU19aSVBfREVDT0RFUik7XHJcblxyXG5cdFx0d29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xyXG5cdFx0XHR2YXIgbnVtUG9pbnRzID0gbGFzLnBvaW50c0NvdW50O1xyXG5cclxuXHRcdFx0dmFyIHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoZS5kYXRhLnBvc2l0aW9uKTtcclxuXHRcdFx0dmFyIGNvbG9ycyA9IG5ldyBVaW50OEFycmF5KGUuZGF0YS5jb2xvcik7XHJcblxyXG5cdFx0XHR2YXIgaW50ZW5zaXRpZXMgPSBuZXcgRmxvYXQzMkFycmF5KGUuZGF0YS5pbnRlbnNpdHkpO1xyXG5cdFx0XHR2YXIgY2xhc3NpZmljYXRpb25zID0gbmV3IFVpbnQ4QXJyYXkoZS5kYXRhLmNsYXNzaWZpY2F0aW9uKTtcclxuXHRcdFx0dmFyIHJldHVybk51bWJlcnMgPSBuZXcgVWludDhBcnJheShlLmRhdGEucmV0dXJuTnVtYmVyKTtcclxuXHRcdFx0dmFyIG51bWJlck9mUmV0dXJucyA9IG5ldyBVaW50OEFycmF5KGUuZGF0YS5udW1iZXJPZlJldHVybnMpO1xyXG5cdFx0XHR2YXIgcG9pbnRTb3VyY2VJRHMgPSBuZXcgVWludDE2QXJyYXkoZS5kYXRhLnBvaW50U291cmNlSUQpO1xyXG5cdFx0XHR2YXIgaW5kaWNlcyA9IG5ldyBVaW50OEFycmF5KGUuZGF0YS5pbmRpY2VzKTtcclxuXHJcblx0XHRcdGcuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuXHRcdFx0Zy5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9ycywgNCwgdHJ1ZSkpO1xyXG5cdFx0XHRnLnNldEF0dHJpYnV0ZShcImludGVuc2l0eVwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGludGVuc2l0aWVzLCAxKSk7XHJcblx0XHRcdGcuc2V0QXR0cmlidXRlKFwiY2xhc3NpZmljYXRpb25cIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjbGFzc2lmaWNhdGlvbnMsIDEpKTtcclxuXHRcdFx0Zy5zZXRBdHRyaWJ1dGUoXCJyZXR1cm5OdW1iZXJcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShyZXR1cm5OdW1iZXJzLCAxKSk7XHJcblx0XHRcdGcuc2V0QXR0cmlidXRlKFwibnVtYmVyT2ZSZXR1cm5zXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobnVtYmVyT2ZSZXR1cm5zLCAxKSk7XHJcblx0XHRcdGcuc2V0QXR0cmlidXRlKFwicG9pbnRTb3VyY2VJRFwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvaW50U291cmNlSURzLCAxKSk7XHJcblx0XHRcdGcuc2V0QXR0cmlidXRlKFwiaW5kaWNlc1wiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGluZGljZXMsIDQpKTtcclxuXHRcdFx0Zy5hdHRyaWJ1dGVzLmluZGljZXMubm9ybWFsaXplZCA9IHRydWU7XHJcblxyXG5cdFx0XHR2YXIgdGlnaHRCb3VuZGluZ0JveCA9IG5ldyBUSFJFRS5Cb3gzKFxyXG5cdFx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCkuZnJvbUFycmF5KGUuZGF0YS50aWdodEJvdW5kaW5nQm94Lm1pbiksXHJcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoKS5mcm9tQXJyYXkoZS5kYXRhLnRpZ2h0Qm91bmRpbmdCb3gubWF4KVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dGhpcy5ub2RlLmRvbmVMb2FkaW5nKGcsIHRpZ2h0Qm91bmRpbmdCb3gsIG51bVBvaW50cywgbmV3IFRIUkVFLlZlY3RvcjMoLi4uZS5kYXRhLm1lYW4pKTtcclxuXHJcblx0XHRcdEdsb2JhbC53b3JrZXJQb29sLnJldHVybldvcmtlcihXb3JrZXJNYW5hZ2VyLkVQVF9MQVNfWklQX0RFQ09ERVIsIHdvcmtlcik7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBtZXNzYWdlID0ge1xyXG5cdFx0XHRidWZmZXI6IGxhcy5hcnJheWIsXHJcblx0XHRcdG51bVBvaW50czogbGFzLnBvaW50c0NvdW50LFxyXG5cdFx0XHRwb2ludFNpemU6IGxhcy5wb2ludFNpemUsXHJcblx0XHRcdHBvaW50Rm9ybWF0SUQ6IGxhcy5wb2ludHNGb3JtYXRJZCxcclxuXHRcdFx0c2NhbGU6IGxhcy5zY2FsZSxcclxuXHRcdFx0b2Zmc2V0OiBsYXMub2Zmc2V0LFxyXG5cdFx0XHRtaW5zOiBsYXMubWlucyxcclxuXHRcdFx0bWF4czogbGFzLm1heHNcclxuXHRcdH07XHJcblxyXG5cdFx0d29ya2VyLnBvc3RNZXNzYWdlKG1lc3NhZ2UsIFttZXNzYWdlLmJ1ZmZlcl0pO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQge0VwdExhc3ppcExvYWRlciwgRXB0TGF6QmF0Y2hlcn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuaW1wb3J0IHsgSGVscGVyVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvSGVscGVyVXRpbHMuanNcIjtcclxuaW1wb3J0IHsgdXBkYXRlUG9pbnRDbG91ZHMgfSBmcm9tIFwiLi4vUG90cmVlLmpzXCI7XHJcbmltcG9ydCB7IFBvaW50Q2xvdWRUcmVlIH0gZnJvbSBcIi4uL3BvaW50Y2xvdWQvUG9pbnRDbG91ZFRyZWUuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBQb3RyZWUgb2JqZWN0IGlzIGEgd3JhcHBlciB0byB1c2UgUG90cmVlIGFsb25nc2lkZSBvdGhlciBUSFJFRSBiYXNlZCBmcmFtZXdvcmtzLlxyXG4gKiBcclxuICogVGhlIG9iamVjdCBjYW4gYmUgdXNlZCBhIG5vcm1hbCBPYmplY3QzRC5cclxuICogXHJcbiAqIEl0IGlzIGJhc2VkIG9uIFRIUkVFLk1lc2ggYW5kIGF1dG9tYXRpY2FsbHkgdXBkYXRlcyB0aGUgcG9pbnQgY2xvdWQgYmFzZWQgb24gdmlzaWJpbGl0eS5cclxuICogXHJcbiAqIEFsc28gdGFrZXMgY2FyZSBvZiBnZW9tZXRyeSBhanVzdG1lbnRzIHRvIGFsbG93IHRoZSBwb2ludCBjbG91ZHMgdG8gYmUgZnJ1c3R1bSBjdWxsZWQuXHJcbiAqL1xyXG5jbGFzcyBCYXNpY0dyb3VwIGV4dGVuZHMgVEhSRUUuTWVzaCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKSwgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgb3BhY2l0eTogMC4wLCB3aXJlZnJhbWU6IGZhbHNlLCB0cmFuc3BhcmVudDogdHJ1ZSB9KSk7XHJcblxyXG4gICAgdGhpcy5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHJcbiAgICB0aGlzLmZydXN0dW1DdWxsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5wb2ludGNsb3VkcyA9IFtdO1xyXG5cclxuICAgIHRoaXMubm9kZVNpemUgPSAzMDtcclxuICAgIHRoaXMucG9pbnRCdWRnZXQgPSAxZTEwOyAvL1RPRE8gPE5PVCBVU0VEPlxyXG4gICAgdGhpcy5ub2RlTG9hZFJhdGUgPSAyOyAvL1RPRE8gPE5PVCBVU0VEPlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1wdHkgcmF5Y2FzdCBtZXRob2QgdG8gYXZvaWQgZ2V0dGluZyB2YWxpZCBjb2xsaXNpb24gZGV0ZWN0aW9uIHdpdGggdGhlIGJveCBnZW9tZXRyeSBhdHRhY2hlZC5cclxuICAgKi9cclxuICByYXljYXN0KHJheWNhc3RlciwgaW50ZXJzZWN0cykgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgdGhlIHBvaW50IGJ1ZGdldCB0byBiZSB1c2VkIGJ5IHBvdHJlZS5cclxuICAgKi9cclxuICBzZXRQb2ludEJ1ZGdldChidWRnZXQpIHtcclxuICAgIHRoaXMucG9pbnRCdWRnZXQgPSBidWRnZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIHVwZGF0ZSB0aGUgcG9pbnQgY2xvdWQgdmlzaWJpbGl0eSByZWxhdGl2ZSB0byBhIGNhbWVyYS5cclxuICAgKiBcclxuICAgKiBDYWxsZWQgYXV0b21hdGljYWxseSBiZWZvcmUgcmVuZGVyaW5nLlxyXG4gICAqL1xyXG4gIG9uQmVmb3JlUmVuZGVyKHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIGdyb3VwKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRjbG91ZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5wb2ludGNsb3Vkc1tpXS5taW5pbXVtTm9kZVBpeGVsU2l6ZSA9IHRoaXMubm9kZVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9pbnRDbG91ZHModGhpcy5wb2ludGNsb3VkcywgY2FtZXJhLCByZW5kZXJlciwgdGhpcy5wb2ludEJ1ZGdldCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWNhbGN1bGF0ZSB0aGUgYm94IGdlb21ldHJ5IGF0dGFjaGVkIHRvIHRoaXMgZ3JvdXAuXHJcbiAgICogXHJcbiAgICogVGhlIGdlb21ldHJ5IGl0cyBub3QgdmlzaWJsZSBhbmQgaXRzIG9ubHkgdXNlZCBmb3IgZnJ1c3R1bSBjdWxsaW5nLlxyXG4gICAqL1xyXG4gIHJlY2FsY3VsYXRlQm94R2VvbWV0cnkoKSB7XHJcbiAgICB2YXIgYm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgIHZhciBzaXplID0gYm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcbiAgICB2YXIgY2VudGVyID0gYm94LmdldENlbnRlcihuZXcgVEhSRUUuVmVjdG9yMygpKTtcclxuXHJcbiAgICB2YXIgbWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcclxuICAgIG1hdHJpeC5tYWtlVHJhbnNsYXRpb24oY2VudGVyLngsIC1jZW50ZXIueiwgY2VudGVyLnkpO1xyXG5cclxuICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeShzaXplLngsIHNpemUueiwgc2l6ZS55KTtcclxuICAgIGdlb21ldHJ5LmFwcGx5TWF0cml4NChtYXRyaXgpO1xyXG5cclxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhbiBvYmplY3QgYXMgY2hpbGRyZW4gb2YgdGhpcyBzY2VuZS5cclxuICAgKiBcclxuICAgKiBQb2ludCBjbG91ZCBvYmplY3RzIGFyZSBkZXRlY3RlZCBhbmQgdXNlZCB0byByZWNhbGN1bGF0ZSB0aGUgZ2VvbWV0cnkgYm94IHVzZWQgZm9yIGZydXN0dW0gY3VsbGluZy5cclxuICAgKi9cclxuICBhZGQob2JqZWN0KSB7XHJcbiAgICBUSFJFRS5PYmplY3QzRC5wcm90b3R5cGUuYWRkLmNhbGwodGhpcywgb2JqZWN0KTtcclxuXHJcbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgUG9pbnRDbG91ZFRyZWUpIHtcclxuICAgICAgb2JqZWN0LnNob3dCb3VuZGluZ0JveCA9IGZhbHNlO1xyXG4gICAgICBvYmplY3QuZ2VuZXJhdGVERU0gPSBmYWxzZTtcclxuICAgICAgdGhpcy5wb2ludGNsb3Vkcy5wdXNoKG9iamVjdCk7XHJcbiAgICAgIHRoaXMucmVjYWxjdWxhdGVCb3hHZW9tZXRyeSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIG9iamVjdCBmcm9tIGdyb3VwLlxyXG4gICAqIFxyXG4gICAqIFBvaW50IGNsb3VkIG9iamVjdHMgYXJlIGRldGVjdGVkIGFuZCB1c2VkIHRvIHJlY2FsY3VsYXRlIHRoZSBnZW9tZXRyeSBib3ggdXNlZCBmb3IgZnJ1c3R1bSBjdWxsaW5nXHJcbiAgICovXHJcbiAgcmVtb3ZlKG9iamVjdCkge1xyXG4gICAgVEhSRUUuT2JqZWN0M0QucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMsIG9iamVjdCk7XHJcblxyXG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFBvaW50Q2xvdWRUcmVlKSB7XHJcbiAgICAgIHZhciBpbmRleCA9IHRoaXMucG9pbnRjbG91ZHMuaW5kZXhPZihvYmplY3QpO1xyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludGNsb3Vkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVCb3hHZW9tZXRyeSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogXHJcbiAgICogR2V0IHRoZSBwb2ludCBjbG91ZCBib3VkaW5nIGJveC5cclxuICAgKi9cclxuICBnZXRCb3VuZGluZ0JveCgpIHtcclxuICAgIHZhciBib3ggPSBuZXcgVEhSRUUuQm94MygpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlTWF0cml4V29ybGQodHJ1ZSk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50Y2xvdWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBwb2ludGNsb3VkID0gdGhpcy5wb2ludGNsb3Vkc1tpXTtcclxuICAgICAgcG9pbnRjbG91ZC51cGRhdGVNYXRyaXhXb3JsZCh0cnVlKTtcclxuICAgICAgdmFyIHBvaW50Y2xvdWRCb3ggPSBwb2ludGNsb3VkLnBjb0dlb21ldHJ5LnRpZ2h0Qm91bmRpbmdCb3ggPyBwb2ludGNsb3VkLnBjb0dlb21ldHJ5LnRpZ2h0Qm91bmRpbmdCb3ggOiBwb2ludGNsb3VkLmJvdW5kaW5nQm94O1xyXG4gICAgICB2YXIgYm94V29ybGQgPSBIZWxwZXJVdGlscy5jb21wdXRlVHJhbnNmb3JtZWRCb3VuZGluZ0JveChwb2ludGNsb3VkQm94LCBwb2ludGNsb3VkLm1hdHJpeFdvcmxkKTtcclxuICAgICAgYm94LnVuaW9uKGJveFdvcmxkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYm94O1xyXG4gIH1cclxuXHJcbiAgLyoqIFxyXG4gICAqIEVzdGltYXRlIHRoZSBwb2ludCBjbG91ZCBoZWlnaHQgYXQgYSBnaXZlbiBwb3NpdGlvbi5cclxuICAgKi9cclxuICBlc3RpbWF0ZUhlaWdodEF0KHBvc2l0aW9uKSB7XHJcbiAgICB2YXIgaGVpZ2h0ID0gbnVsbDtcclxuICAgIHZhciBmcm9tU3BhY2luZyA9IEluZmluaXR5O1xyXG5cclxuICAgIGZvciAodmFyIHBvaW50Y2xvdWQgb2YgdGhpcy5wb2ludGNsb3Vkcykge1xyXG4gICAgICBpZiAocG9pbnRjbG91ZC5yb290Lmdlb21ldHJ5Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBwSGVpZ2h0ID0gbnVsbDtcclxuICAgICAgdmFyIHBGcm9tU3BhY2luZyA9IEluZmluaXR5O1xyXG5cclxuICAgICAgdmFyIGxwb3MgPSBwb3NpdGlvbi5jbG9uZSgpLnN1Yihwb2ludGNsb3VkLnBvc2l0aW9uKTtcclxuICAgICAgbHBvcy56ID0gMDtcclxuICAgICAgdmFyIHJheSA9IG5ldyBUSFJFRS5SYXkobHBvcywgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSkpO1xyXG5cclxuICAgICAgdmFyIHN0YWNrID0gW3BvaW50Y2xvdWQucm9vdF07XHJcbiAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICB2YXIgYm94ID0gbm9kZS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgIHZhciBpbnNpZGUgPSByYXkuaW50ZXJzZWN0Qm94KGJveCk7XHJcblxyXG4gICAgICAgIGlmICghaW5zaWRlKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBoID0gbm9kZS5nZW9tZXRyeU5vZGUubWVhbi56ICsgcG9pbnRjbG91ZC5wb3NpdGlvbi56ICsgbm9kZS5nZW9tZXRyeU5vZGUuYm91bmRpbmdCb3gubWluLno7XHJcblxyXG4gICAgICAgIGlmIChub2RlLmdlb21ldHJ5Tm9kZS5zcGFjaW5nIDw9IHBGcm9tU3BhY2luZykge1xyXG4gICAgICAgICAgcEhlaWdodCA9IGg7XHJcbiAgICAgICAgICBwRnJvbVNwYWNpbmcgPSBub2RlLmdlb21ldHJ5Tm9kZS5zcGFjaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggb2YgT2JqZWN0LmtleXMobm9kZS5jaGlsZHJlbikpIHtcclxuICAgICAgICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGRyZW5baW5kZXhdO1xyXG4gICAgICAgICAgaWYgKGNoaWxkLmdlb21ldHJ5Tm9kZSkge1xyXG4gICAgICAgICAgICBzdGFjay5wdXNoKG5vZGUuY2hpbGRyZW5baW5kZXhdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChoZWlnaHQgPT09IG51bGwgfHwgcEZyb21TcGFjaW5nIDwgZnJvbVNwYWNpbmcpIHtcclxuICAgICAgICBoZWlnaHQgPSBwSGVpZ2h0O1xyXG4gICAgICAgIGZyb21TcGFjaW5nID0gcEZyb21TcGFjaW5nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhlaWdodDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBCYXNpY0dyb3VwIH07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuaW1wb3J0IHsgQmFzaWNHcm91cCB9IGZyb20gXCIuL0Jhc2ljR3JvdXAuanNcIjtcclxuaW1wb3J0IHsgUG9pbnRDbG91ZFRyZWUgfSBmcm9tIFwiLi4vcG9pbnRjbG91ZC9Qb2ludENsb3VkVHJlZS5qc1wiO1xyXG5pbXBvcnQgeyBQb2ludFNpemVUeXBlLCBQb2ludENvbG9yVHlwZSB9IGZyb20gXCIuLi9Qb3RyZWUuanNcIjtcclxuXHJcbmNsYXNzIEdyb3VwIGV4dGVuZHMgQmFzaWNHcm91cCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMudGV4dHVyZXMgPSBuZXcgTWFwKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIHBvdHJlZSBncm91cCBiZWZvcmUgcmVuZGVyaW5nLlxyXG4gICAqL1xyXG4gIG9uQmVmb3JlUmVuZGVyKHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIGdyb3VwKSB7XHJcbiAgICBzdXBlci5vbkJlZm9yZVJlbmRlcihyZW5kZXJlciwgc2NlbmUsIGNhbWVyYSwgZ2VvbWV0cnksIG1hdGVyaWFsLCBncm91cCk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuZmV0Y2hPY3RyZWVzKCk7XHJcblx0XHR2YXIgZ2wgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcblx0XHRpZihnbC5iaW5kVmVydGV4QXJyYXkgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5nZXRFeHRlbnNpb25zKGdsKVxyXG5cdFx0fVxyXG5cclxuICAgIGZvciAodmFyIG9jdHJlZSBvZiByZXN1bHQub2N0cmVlcykge1xyXG4gICAgICB2YXIgbm9kZXMgPSBvY3RyZWUudmlzaWJsZU5vZGVzO1xyXG4gICAgICB0aGlzLnByZXBhcmVPY3R0cmVlKHJlbmRlcmVyLCBvY3RyZWUsIG5vZGVzLCBjYW1lcmEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmV0Y2hPY3RyZWVzKCkge1xyXG4gICAgdmFyIG9jdHJlZXMgPSBbXTtcclxuICAgIHZhciBzdGFjayA9IFt0aGlzXTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgbm9kZSA9IHN0YWNrLnBvcCgpO1xyXG5cclxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBQb2ludENsb3VkVHJlZSkge1xyXG4gICAgICAgIG9jdHJlZXMucHVzaChub2RlKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHZpc2libGVDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4uZmlsdGVyKGMgPT4gYy52aXNpYmxlKTtcclxuICAgICAgc3RhY2sucHVzaCguLi52aXNpYmxlQ2hpbGRyZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZXN1bHQgPVxyXG4gICAge1xyXG4gICAgICBvY3RyZWVzOiBvY3RyZWVzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlT2N0dHJlZShyZW5kZXJlciwgb2N0cmVlLCBub2RlcywgY2FtZXJhKSB7XHJcbiAgICB2YXIgbWF0ZXJpYWwgPSBvY3RyZWUubWF0ZXJpYWw7XHJcbiAgICB2YXIgdmlld0ludiA9IGNhbWVyYS5tYXRyaXhXb3JsZDtcclxuICAgIHZhciBwcm9qID0gY2FtZXJhLnByb2plY3Rpb25NYXRyaXg7XHJcblxyXG4gICAgdmFyIHZpc2liaWxpdHlUZXh0dXJlRGF0YSA9IG51bGw7XHJcblxyXG4gICAgaWYgKG1hdGVyaWFsLnBvaW50U2l6ZVR5cGUgPT09IFBvaW50U2l6ZVR5cGUuQURBUFRJVkUgfHwgbWF0ZXJpYWwucG9pbnRDb2xvclR5cGUgPT09IFBvaW50Q29sb3JUeXBlLkxPRCkge1xyXG4gICAgICB2aXNpYmlsaXR5VGV4dHVyZURhdGEgPSBvY3RyZWUuY29tcHV0ZVZpc2liaWxpdHlUZXh0dXJlRGF0YShub2RlcywgY2FtZXJhKTtcclxuXHJcbiAgICAgIHZhciB2bnQgPSBtYXRlcmlhbC52aXNpYmxlTm9kZXNUZXh0dXJlO1xyXG4gICAgICB2bnQuaW1hZ2UuZGF0YS5zZXQodmlzaWJpbGl0eVRleHR1cmVEYXRhLmRhdGEpO1xyXG4gICAgICB2bnQubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENsaXAgcGxhbmVzXHJcbiAgICB2YXIgbnVtQ2xpcHBpbmdQbGFuZXMgPSAobWF0ZXJpYWwuY2xpcHBpbmcgJiYgbWF0ZXJpYWwuY2xpcHBpbmdQbGFuZXMgJiYgbWF0ZXJpYWwuY2xpcHBpbmdQbGFuZXMubGVuZ3RoKSA/IG1hdGVyaWFsLmNsaXBwaW5nUGxhbmVzLmxlbmd0aCA6IDA7XHJcbiAgICB2YXIgY2xpcFBsYW5lc0NoYW5nZWQgPSBtYXRlcmlhbC5kZWZpbmVzWydudW1fY2xpcHBsYW5lcyddICE9PSBudW1DbGlwcGluZ1BsYW5lcztcclxuICAgIHZhciBjbGlwcGluZ1BsYW5lcyA9IFtdO1xyXG4gICAgaWYgKGNsaXBQbGFuZXNDaGFuZ2VkKSB7XHJcbiAgICAgIG1hdGVyaWFsLmRlZmluZXMgPSB7XHJcbiAgICAgICAgLi4ubWF0ZXJpYWwuZGVmaW5lcyxcclxuICAgICAgICBudW1fY2xpcHBsYW5lczogbnVtQ2xpcHBpbmdQbGFuZXNcclxuICAgICAgfTtcclxuICAgICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bUNsaXBwaW5nUGxhbmVzID4gMCkge1xyXG4gICAgICB2YXIgcGxhbmVzID0gbWF0ZXJpYWwuY2xpcHBpbmdQbGFuZXM7XHJcbiAgICAgIHZhciBmbGF0dGVuZWRQbGFuZXMgPSBuZXcgQXJyYXkoNCAqIG1hdGVyaWFsLmNsaXBwaW5nUGxhbmVzLmxlbmd0aCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZmxhdHRlbmVkUGxhbmVzWzQqaSArIDBdID0gcGxhbmVzW2ldLm5vcm1hbC54O1xyXG4gICAgICAgIGZsYXR0ZW5lZFBsYW5lc1s0KmkgKyAxXSA9IHBsYW5lc1tpXS5ub3JtYWwueTtcclxuICAgICAgICBmbGF0dGVuZWRQbGFuZXNbNCppICsgMl0gPSBwbGFuZXNbaV0ubm9ybWFsLno7XHJcbiAgICAgICAgZmxhdHRlbmVkUGxhbmVzWzQqaSArIDNdID0gcGxhbmVzW2ldLmNvbnN0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIGNsaXBwaW5nUGxhbmVzID0gZmxhdHRlbmVkUGxhbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsaXBwaW5nUGxhbmVzQXNWZWM0QXJyYXkgPSBtYXRlcmlhbC5jbGlwcGluZ1BsYW5lcyA/IG1hdGVyaWFsLmNsaXBwaW5nUGxhbmVzLm1hcCh4ID0+IG5ldyBUSFJFRS5WZWN0b3I0KHgubm9ybWFsLngsIHgubm9ybWFsLnksIHgubm9ybWFsLnosIHguY29uc3RhbnQpKSA6IFtdO1xyXG4gICAgbWF0ZXJpYWwudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC52YWx1ZS5jb3B5KHByb2opO1xyXG4gICAgbWF0ZXJpYWwudW5pZm9ybXMudVZpZXdJbnYudmFsdWUuY29weSh2aWV3SW52KTtcclxuICAgIG1hdGVyaWFsLnVuaWZvcm1zLmNsaXBQbGFuZXMudmFsdWUgPSBjbGlwcGluZ1BsYW5lc0FzVmVjNEFycmF5O1xyXG4gICAgbWF0ZXJpYWwudW5pZm9ybXMuZm92LnZhbHVlID0gTWF0aC5QSSAqIGNhbWVyYS5mb3YgLyAxODA7XHJcbiAgICBtYXRlcmlhbC51bmlmb3Jtcy5uZWFyLnZhbHVlID0gY2FtZXJhLm5lYXI7XHJcbiAgICBtYXRlcmlhbC51bmlmb3Jtcy5mYXIudmFsdWUgPSBjYW1lcmEuZmFyO1xyXG4gICAgbWF0ZXJpYWwudW5pZm9ybXMuc2l6ZS52YWx1ZSA9IG1hdGVyaWFsLnNpemU7XHJcbiAgICBtYXRlcmlhbC51bmlmb3Jtcy51T2N0cmVlU3BhY2luZy52YWx1ZSA9IG1hdGVyaWFsLnNwYWNpbmc7XHJcbiAgICBtYXRlcmlhbC51bmlmb3Jtcy51Q29sb3IudmFsdWUgPSBtYXRlcmlhbC5jb2xvcjtcclxuICAgIG1hdGVyaWFsLnVuaWZvcm1zLnVPcGFjaXR5LnZhbHVlID0gbWF0ZXJpYWwub3BhY2l0eTtcclxuICAgIG1hdGVyaWFsLnVuaWZvcm1zLmVsZXZhdGlvblJhbmdlLnZhbHVlID0gbWF0ZXJpYWwuZWxldmF0aW9uUmFuZ2U7XHJcbiAgICBtYXRlcmlhbC51bmlmb3Jtcy5pbnRlbnNpdHlSYW5nZS52YWx1ZSA9IG1hdGVyaWFsLmludGVuc2l0eVJhbmdlO1xyXG4gICAgbWF0ZXJpYWwudW5pZm9ybXMuaW50ZW5zaXR5R2FtbWEudmFsdWUgPSBtYXRlcmlhbC5pbnRlbnNpdHlHYW1tYTtcclxuICAgIG1hdGVyaWFsLnVuaWZvcm1zLmludGVuc2l0eUNvbnRyYXN0LnZhbHVlID0gbWF0ZXJpYWwuaW50ZW5zaXR5Q29udHJhc3Q7XHJcbiAgICBtYXRlcmlhbC51bmlmb3Jtcy5pbnRlbnNpdHlCcmlnaHRuZXNzLnZhbHVlID0gbWF0ZXJpYWwuaW50ZW5zaXR5QnJpZ2h0bmVzcztcclxuICAgIG1hdGVyaWFsLnVuaWZvcm1zLnJnYkdhbW1hLnZhbHVlID0gbWF0ZXJpYWwucmdiR2FtbWE7XHJcbiAgICBtYXRlcmlhbC51bmlmb3Jtcy5yZ2JCcmlnaHRuZXNzLnZhbHVlID0gbWF0ZXJpYWwucmdiQnJpZ2h0bmVzcztcclxuICAgIG1hdGVyaWFsLnVuaWZvcm1zLnVUcmFuc2l0aW9uLnZhbHVlID0gbWF0ZXJpYWwudHJhbnNpdGlvbjtcclxuICAgIG1hdGVyaWFsLnVuaWZvcm1zLndSR0IudmFsdWUgPSBtYXRlcmlhbC53ZWlnaHRSR0I7XHJcbiAgICBtYXRlcmlhbC51bmlmb3Jtcy53SW50ZW5zaXR5LnZhbHVlID0gbWF0ZXJpYWwud2VpZ2h0SW50ZW5zaXR5O1xyXG4gICAgbWF0ZXJpYWwudW5pZm9ybXMud0VsZXZhdGlvbi52YWx1ZSA9IG1hdGVyaWFsLndlaWdodEVsZXZhdGlvbjtcclxuICAgIG1hdGVyaWFsLnVuaWZvcm1zLndDbGFzc2lmaWNhdGlvbi52YWx1ZSA9IG1hdGVyaWFsLndlaWdodENsYXNzaWZpY2F0aW9uO1xyXG4gICAgbWF0ZXJpYWwudW5pZm9ybXMud1JldHVybk51bWJlci52YWx1ZSA9IG1hdGVyaWFsLndlaWdodFJldHVybk51bWJlcjtcclxuICAgIG1hdGVyaWFsLnVuaWZvcm1zLndTb3VyY2VJRC52YWx1ZSA9IG1hdGVyaWFsLndlaWdodFNvdXJjZUlEO1xyXG4gICAgbWF0ZXJpYWwudW5pZm9ybXMubG9nRGVwdGhCdWZGQy52YWx1ZSA9IHJlbmRlcmVyLmNhcGFiaWxpdGllcy5sb2dhcml0aG1pY0RlcHRoQnVmZmVyID8gMi4wIC8gKE1hdGgubG9nKGNhbWVyYS5mYXIgKyAxLjApIC8gTWF0aC5MTjIpIDogdW5kZWZpbmVkO1xyXG4gICAgbWF0ZXJpYWwudW5pZm9ybXNOZWVkVXBkYXRlID0gdHJ1ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBHcm91cCB9O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmltcG9ydCB7V29ya2VyTWFuYWdlcn0gZnJvbSBcIi4uL3V0aWxzL1dvcmtlck1hbmFnZXIuanNcIjtcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi9HbG9iYWwuanNcIjtcclxuaW1wb3J0IHtERU1Ob2RlfSBmcm9tIFwiLi9ERU1Ob2RlLmpzXCI7XHJcblxyXG5jbGFzcyBERU1cclxue1xyXG5cdGNvbnN0cnVjdG9yKHBvaW50Y2xvdWQpXHJcblx0e1xyXG5cdFx0dGhpcy5wb2ludGNsb3VkID0gcG9pbnRjbG91ZDtcclxuXHRcdHRoaXMubWF0cml4ID0gbnVsbDtcclxuXHRcdHRoaXMuYm91bmRpbmdCb3ggPSBudWxsO1xyXG5cdFx0dGhpcy50aWxlU2l6ZSA9IDY0O1xyXG5cdFx0dGhpcy5yb290ID0gbnVsbDtcclxuXHRcdHRoaXMudmVyc2lvbiA9IDA7XHJcblx0fVxyXG5cclxuXHQvL2V4cGFuZHMgdGhlIHRyZWUgdG8gYWxsIG5vZGVzIHRoYXQgaW50ZXJzZWN0IDxib3g+IGF0IDxsZXZlbD4gcmV0dXJucyB0aGUgaW50ZXJzZWN0aW5nIG5vZGVzIGF0IDxsZXZlbD5cclxuXHRleHBhbmRBbmRGaW5kQnlCb3goYm94LCBsZXZlbClcclxuXHR7XHJcblx0XHRpZihsZXZlbCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIFt0aGlzLnJvb3RdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdHZhciBzdGFjayA9IFt0aGlzLnJvb3RdO1xyXG5cclxuXHRcdHdoaWxlKHN0YWNrLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHZhciBub2RlID0gc3RhY2sucG9wKCk7XHJcblx0XHRcdHZhciBub2RlQm94U2l6ZSA9IG5vZGUuYm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcblxyXG5cdFx0XHQvL2NoZWNrIHdoaWNoIGNoaWxkcmVuIGludGVyc2VjdCBieSB0cmFuc2Zvcm1pbmcgbWluL21heCB0byBxdWFkcmFudHNcclxuXHRcdFx0dmFyIG1pbiA9IHtcclxuXHRcdFx0XHR4OiAoYm94Lm1pbi54IC0gbm9kZS5ib3gubWluLngpIC8gbm9kZUJveFNpemUueCxcclxuXHRcdFx0XHR5OiAoYm94Lm1pbi55IC0gbm9kZS5ib3gubWluLnkpIC8gbm9kZUJveFNpemUueVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR2YXIgbWF4ID0ge1xyXG5cdFx0XHRcdHg6IChib3gubWF4LnggLSBub2RlLmJveC5tYXgueCkgLyBub2RlQm94U2l6ZS54LFxyXG5cdFx0XHRcdHk6IChib3gubWF4LnkgLSBub2RlLmJveC5tYXgueSkgLyBub2RlQm94U2l6ZS55XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRtaW4ueCA9IG1pbi54IDwgMC41ID8gMCA6IDE7XHJcblx0XHRcdG1pbi55ID0gbWluLnkgPCAwLjUgPyAwIDogMTtcclxuXHRcdFx0bWF4LnggPSBtYXgueCA8IDAuNSA/IDAgOiAxO1xyXG5cdFx0XHRtYXgueSA9IG1heC55IDwgMC41ID8gMCA6IDE7XHJcblxyXG5cdFx0XHR2YXIgY2hpbGRJbmRpY2VzO1xyXG5cdFx0XHRpZihtaW4ueCA9PT0gMCAmJiBtaW4ueSA9PT0gMCAmJiBtYXgueCA9PT0gMSAmJiBtYXgueSA9PT0gMSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoaWxkSW5kaWNlcyA9IFswLCAxLCAyLCAzXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKG1pbi54ID09PSBtYXgueCAmJiBtaW4ueSA9PT0gbWF4LnkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGlsZEluZGljZXMgPSBbKG1pbi54IDw8IDEpIHwgbWluLnldO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoaWxkSW5kaWNlcyA9IFsobWluLnggPDwgMSkgfCBtaW4ueSwgKG1heC54IDw8IDEpIHwgbWF4LnldO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IodmFyIGluZGV4IG9mIGNoaWxkSW5kaWNlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKG5vZGUuY2hpbGRyZW5baW5kZXhdID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGNoaWxkQm94ID0gbm9kZS5ib3guY2xvbmUoKTtcclxuXHJcblx0XHRcdFx0XHRpZigoaW5kZXggJiAyKSA+IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNoaWxkQm94Lm1pbi54ICs9IG5vZGVCb3hTaXplLnggLyAyLjA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNoaWxkQm94Lm1heC54IC09IG5vZGVCb3hTaXplLnggLyAyLjA7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYoKGluZGV4ICYgMSkgPiAwKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjaGlsZEJveC5taW4ueSArPSBub2RlQm94U2l6ZS55IC8gMi4wO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjaGlsZEJveC5tYXgueSAtPSBub2RlQm94U2l6ZS55IC8gMi4wO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBjaGlsZCA9IG5ldyBERU1Ob2RlKG5vZGUubmFtZSArIGluZGV4LCBjaGlsZEJveCwgdGhpcy50aWxlU2l6ZSk7XHJcblx0XHRcdFx0XHRub2RlLmNoaWxkcmVuW2luZGV4XSA9IGNoaWxkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIGNoaWxkID0gbm9kZS5jaGlsZHJlbltpbmRleF07XHJcblxyXG5cdFx0XHRcdGlmKGNoaWxkLmxldmVsIDwgbGV2ZWwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3RhY2sucHVzaChjaGlsZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChjaGlsZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdGNoaWxkSW5kZXgodXYpXHJcblx0e1xyXG5cdFx0dmFyIFt4LCB5XSA9IHV2Lm1hcChuID0+IG4gPCAwLjUgPyAwIDogMSk7XHJcblxyXG5cdFx0dmFyIGluZGV4ID0gKHggPDwgMSkgfCB5O1xyXG5cclxuXHRcdHJldHVybiBpbmRleDtcclxuXHR9XHJcblxyXG5cdGhlaWdodChwb3NpdGlvbilcclxuXHR7XHJcblx0XHRpZighdGhpcy5yb290KVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaGVpZ2h0ID0gbnVsbDtcclxuXHRcdHZhciBsaXN0ID0gW3RoaXMucm9vdF07XHJcblx0XHR3aGlsZSh0cnVlKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbm9kZSA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXTtcclxuXHJcblx0XHRcdHZhciBjdXJyZW50SGVpZ2h0ID0gbm9kZS5oZWlnaHQocG9zaXRpb24pO1xyXG5cclxuXHRcdFx0aWYoY3VycmVudEhlaWdodCAhPT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciB1diA9IG5vZGUudXYocG9zaXRpb24pO1xyXG5cdFx0XHR2YXIgY2hpbGRJbmRleCA9IHRoaXMuY2hpbGRJbmRleCh1dik7XHJcblxyXG5cdFx0XHRpZihub2RlLmNoaWxkcmVuW2NoaWxkSW5kZXhdKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGlzdC5wdXNoKG5vZGUuY2hpbGRyZW5bY2hpbGRJbmRleF0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGhlaWdodCArIHRoaXMucG9pbnRjbG91ZC5wb3NpdGlvbi56O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKHZpc2libGVOb2RlcylcclxuXHR7XHJcblx0XHQvL2NoZWNrIGlmIHBvaW50IGNsb3VkIHRyYW5zZm9ybWF0aW9uIGNoYW5nZWRcclxuXHRcdGlmKHRoaXMubWF0cml4ID09PSBudWxsIHx8ICF0aGlzLm1hdHJpeC5lcXVhbHModGhpcy5wb2ludGNsb3VkLm1hdHJpeFdvcmxkKSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tYXRyaXggPSB0aGlzLnBvaW50Y2xvdWQubWF0cml4V29ybGQuY2xvbmUoKTtcclxuXHRcdFx0dGhpcy5ib3VuZGluZ0JveCA9IHRoaXMucG9pbnRjbG91ZC5ib3VuZGluZ0JveC5jbG9uZSgpLmFwcGx5TWF0cml4NCh0aGlzLm1hdHJpeCk7XHJcblx0XHRcdHRoaXMucm9vdCA9IG5ldyBERU1Ob2RlKFwiclwiLCB0aGlzLmJvdW5kaW5nQm94LCB0aGlzLnRpbGVTaXplKTtcclxuXHRcdFx0dGhpcy52ZXJzaW9uKys7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9maW5kIG5vZGUgdG8gdXBkYXRlXHJcblx0XHR2YXIgbm9kZSA9IG51bGw7XHJcblx0XHRmb3IodmFyIHZuIG9mIHZpc2libGVOb2RlcylcclxuXHRcdHtcclxuXHRcdFx0aWYodm4uZGVtVmVyc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHZuLmRlbVZlcnNpb24gPCB0aGlzLnZlcnNpb24pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRub2RlID0gdm47XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmKG5vZGUgPT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvL3VwZGF0ZSBub2RlXHJcblx0XHR2YXIgcHJvamVjdGVkQm94ID0gbm9kZS5nZXRCb3VuZGluZ0JveCgpLmNsb25lKCkuYXBwbHlNYXRyaXg0KHRoaXMubWF0cml4KTtcclxuXHRcdHZhciBwcm9qZWN0ZWRCb3hTaXplID0gcHJvamVjdGVkQm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcblxyXG5cdFx0dmFyIHRhcmdldE5vZGVzID0gdGhpcy5leHBhbmRBbmRGaW5kQnlCb3gocHJvamVjdGVkQm94LCBub2RlLmdldExldmVsKCkpO1xyXG5cdFx0bm9kZS5kZW1WZXJzaW9uID0gdGhpcy52ZXJzaW9uO1xyXG5cclxuXHRcdHZhciBwb3NpdGlvbiA9IG5vZGUuZ2VvbWV0cnlOb2RlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcblx0XHR2YXIgbWVzc2FnZSA9XHJcblx0XHR7XHJcblx0XHRcdGJvdW5kaW5nQm94OlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWluOiBub2RlLmdldEJvdW5kaW5nQm94KCkubWluLnRvQXJyYXkoKSxcclxuXHRcdFx0XHRtYXg6IG5vZGUuZ2V0Qm91bmRpbmdCb3goKS5tYXgudG9BcnJheSgpXHJcblx0XHRcdH0sXHJcblx0XHRcdHBvc2l0aW9uOiBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9uKS5idWZmZXJcclxuXHRcdH07XHJcblx0XHR2YXIgdHJhbnNmZXJhYmxlcyA9IFttZXNzYWdlLnBvc2l0aW9uXTtcclxuXHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0R2xvYmFsLndvcmtlclBvb2wucnVuVGFzayhXb3JrZXJNYW5hZ2VyLkRFTSwgZnVuY3Rpb24oZSlcclxuXHRcdHtcclxuXHRcdFx0dmFyIGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGUuZGF0YS5kZW0uZGF0YSk7XHJcblxyXG5cdFx0XHRmb3IodmFyIGRlbU5vZGUgb2YgdGFyZ2V0Tm9kZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgYm94U2l6ZSA9IGRlbU5vZGUuYm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcblxyXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzZWxmLnRpbGVTaXplOyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IHNlbGYudGlsZVNpemU7IGorKylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFyIHUgPSAoaSAvIChzZWxmLnRpbGVTaXplIC0gMSkpO1xyXG5cdFx0XHRcdFx0XHR2YXIgdiA9IChqIC8gKHNlbGYudGlsZVNpemUgLSAxKSk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgeCA9IGRlbU5vZGUuYm94Lm1pbi54ICsgdSAqIGJveFNpemUueDtcclxuXHRcdFx0XHRcdFx0dmFyIHkgPSBkZW1Ob2RlLmJveC5taW4ueSArIHYgKiBib3hTaXplLnk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaXggPSBzZWxmLnRpbGVTaXplICogKHggLSBwcm9qZWN0ZWRCb3gubWluLngpIC8gcHJvamVjdGVkQm94U2l6ZS54O1xyXG5cdFx0XHRcdFx0XHR2YXIgaXkgPSBzZWxmLnRpbGVTaXplICogKHkgLSBwcm9qZWN0ZWRCb3gubWluLnkpIC8gcHJvamVjdGVkQm94U2l6ZS55O1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoaXggPCAwIHx8IGl4ID4gc2VsZi50aWxlU2l6ZSlcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZihpeSA8IDAgfHwgaXkgPiBzZWxmLnRpbGVTaXplKVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGl4ID0gTWF0aC5taW4oTWF0aC5mbG9vcihpeCksIHNlbGYudGlsZVNpemUgLSAxKTtcclxuXHRcdFx0XHRcdFx0aXkgPSBNYXRoLm1pbihNYXRoLmZsb29yKGl5KSwgc2VsZi50aWxlU2l6ZSAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGVtTm9kZS5kYXRhW2kgKyBzZWxmLnRpbGVTaXplICogal0gPSBkYXRhW2l4ICsgc2VsZi50aWxlU2l6ZSAqIGl5XTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGRlbU5vZGUuY3JlYXRlTWlwTWFwKCk7XHJcblx0XHRcdFx0ZGVtTm9kZS5taXBNYXBOZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0sIG1lc3NhZ2UsIHRyYW5zZmVyYWJsZXMpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB7REVNfTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8vXHJcbi8vaW5kZXggaXMgaW4gb3JkZXIgeHl6eHl6eHl6XHJcbmNsYXNzIERFTU5vZGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGJveCwgdGlsZVNpemUpXHJcblx0e1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuYm94ID0gYm94O1xyXG5cdFx0dGhpcy50aWxlU2l6ZSA9IHRpbGVTaXplO1xyXG5cdFx0dGhpcy5sZXZlbCA9IHRoaXMubmFtZS5sZW5ndGggLSAxO1xyXG5cdFx0dGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aWxlU2l6ZSAqIHRpbGVTaXplKTtcclxuXHRcdHRoaXMuZGF0YS5maWxsKC1JbmZpbml0eSk7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHJcblxyXG5cdFx0dGhpcy5taXBNYXAgPSBbdGhpcy5kYXRhXTtcclxuXHRcdHRoaXMubWlwTWFwTmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTWlwTWFwKClcclxuXHR7XHJcblx0XHR0aGlzLm1pcE1hcCA9IFt0aGlzLmRhdGFdO1xyXG5cclxuXHRcdHZhciBzb3VyY2VTaXplID0gdGhpcy50aWxlU2l6ZTtcclxuXHRcdHZhciBtaXBTaXplID0gcGFyc2VJbnQoc291cmNlU2l6ZSAvIDIpO1xyXG5cdFx0dmFyIG1pcFNvdXJjZSA9IHRoaXMuZGF0YTtcclxuXHRcdHdoaWxlKG1pcFNpemUgPiAxKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbWlwRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkobWlwU2l6ZSAqIG1pcFNpemUpO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1pcFNpemU7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBtaXBTaXplOyBqKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGgwMCA9IG1pcFNvdXJjZVsyICogaSArIDAgKyAyICogaiAqIHNvdXJjZVNpemVdO1xyXG5cdFx0XHRcdFx0dmFyIGgwMSA9IG1pcFNvdXJjZVsyICogaSArIDAgKyAyICogaiAqIHNvdXJjZVNpemUgKyBzb3VyY2VTaXplXTtcclxuXHRcdFx0XHRcdHZhciBoMTAgPSBtaXBTb3VyY2VbMiAqIGkgKyAxICsgMiAqIGogKiBzb3VyY2VTaXplXTtcclxuXHRcdFx0XHRcdHZhciBoMTEgPSBtaXBTb3VyY2VbMiAqIGkgKyAxICsgMiAqIGogKiBzb3VyY2VTaXplICsgc291cmNlU2l6ZV07XHJcblxyXG5cdFx0XHRcdFx0dmFyIFtoZWlnaHQsIHdlaWdodF0gPSBbMCwgMF07XHJcblxyXG5cdFx0XHRcdFx0aWYoaXNGaW5pdGUoaDAwKSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ICs9IGgwMDtcclxuXHRcdFx0XHRcdFx0d2VpZ2h0ICs9IDE7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aWYoaXNGaW5pdGUoaDAxKSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ICs9IGgwMTtcclxuXHRcdFx0XHRcdFx0d2VpZ2h0ICs9IDE7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aWYoaXNGaW5pdGUoaDEwKSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ICs9IGgxMDtcclxuXHRcdFx0XHRcdFx0d2VpZ2h0ICs9IDE7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aWYoaXNGaW5pdGUoaDExKSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ICs9IGgxMTtcclxuXHRcdFx0XHRcdFx0d2VpZ2h0ICs9IDE7XHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdGhlaWdodCA9IGhlaWdodCAvIHdlaWdodDtcclxuXHJcblx0XHRcdFx0XHQvL3ZhciBocyA9IFtoMDAsIGgwMSwgaDEwLCBoMTFdLmZpbHRlcihoID0+IGlzRmluaXRlKGgpKTtcclxuXHRcdFx0XHRcdC8vdmFyIGhlaWdodCA9IGhzLnJlZHVjZSgoYSwgdiwgaSkgPT4gYSArIHYsIDApIC8gaHMubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRcdG1pcERhdGFbaSArIGogKiBtaXBTaXplXSA9IGhlaWdodDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMubWlwTWFwLnB1c2gobWlwRGF0YSk7XHJcblxyXG5cdFx0XHRtaXBTb3VyY2UgPSBtaXBEYXRhO1xyXG5cdFx0XHRzb3VyY2VTaXplID0gbWlwU2l6ZTtcclxuXHRcdFx0bWlwU2l6ZSA9IHBhcnNlSW50KG1pcFNpemUgLyAyKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm1pcE1hcE5lZWRzVXBkYXRlID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHR1dihwb3NpdGlvbilcclxuXHR7XHJcblx0XHR2YXIgYm94U2l6ZSA9IHRoaXMuYm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcblxyXG5cdFx0dmFyIHUgPSAocG9zaXRpb24ueCAtIHRoaXMuYm94Lm1pbi54KSAvIGJveFNpemUueDtcclxuXHRcdHZhciB2ID0gKHBvc2l0aW9uLnkgLSB0aGlzLmJveC5taW4ueSkgLyBib3hTaXplLnk7XHJcblxyXG5cdFx0cmV0dXJuIFt1LCB2XTtcclxuXHR9XHJcblxyXG5cdGhlaWdodEF0TWlwTWFwTGV2ZWwocG9zaXRpb24sIG1pcE1hcExldmVsKVxyXG5cdHtcclxuXHRcdHZhciB1diA9IHRoaXMudXYocG9zaXRpb24pO1xyXG5cclxuXHRcdHZhciB0aWxlU2l6ZSA9IHBhcnNlSW50KHRoaXMudGlsZVNpemUgLyBwYXJzZUludCgyICoqIG1pcE1hcExldmVsKSk7XHJcblx0XHR2YXIgZGF0YSA9IHRoaXMubWlwTWFwW21pcE1hcExldmVsXTtcclxuXHJcblx0XHR2YXIgaSA9IE1hdGgubWluKHV2WzBdICogdGlsZVNpemUsIHRpbGVTaXplIC0gMSk7XHJcblx0XHR2YXIgaiA9IE1hdGgubWluKHV2WzFdICogdGlsZVNpemUsIHRpbGVTaXplIC0gMSk7XHJcblxyXG5cdFx0dmFyIGEgPSBpICUgMTtcclxuXHRcdHZhciBiID0gaiAlIDE7XHJcblxyXG5cdFx0dmFyIFtpMCwgaTFdID0gW01hdGguZmxvb3IoaSksIE1hdGguY2VpbChpKV07XHJcblx0XHR2YXIgW2owLCBqMV0gPSBbTWF0aC5mbG9vcihqKSwgTWF0aC5jZWlsKGopXTtcclxuXHJcblx0XHR2YXIgaDAwID0gZGF0YVtpMCArIHRpbGVTaXplICogajBdO1xyXG5cdFx0dmFyIGgwMSA9IGRhdGFbaTAgKyB0aWxlU2l6ZSAqIGoxXTtcclxuXHRcdHZhciBoMTAgPSBkYXRhW2kxICsgdGlsZVNpemUgKiBqMF07XHJcblx0XHR2YXIgaDExID0gZGF0YVtpMSArIHRpbGVTaXplICogajFdO1xyXG5cclxuXHRcdHZhciB3aDAwID0gaXNGaW5pdGUoaDAwKSA/ICgxIC0gYSkgKiAoMSAtIGIpIDogMDtcclxuXHRcdHZhciB3aDAxID0gaXNGaW5pdGUoaDAxKSA/ICgxIC0gYSkgKiBiIDogMDtcclxuXHRcdHZhciB3aDEwID0gaXNGaW5pdGUoaDEwKSA/IGEgKiAoMSAtIGIpIDogMDtcclxuXHRcdHZhciB3aDExID0gaXNGaW5pdGUoaDExKSA/IGEgKiBiIDogMDtcclxuXHJcblx0XHR2YXIgd3N1bSA9IHdoMDAgKyB3aDAxICsgd2gxMCArIHdoMTE7XHJcblx0XHR3aDAwID0gd2gwMCAvIHdzdW07XHJcblx0XHR3aDAxID0gd2gwMSAvIHdzdW07XHJcblx0XHR3aDEwID0gd2gxMCAvIHdzdW07XHJcblx0XHR3aDExID0gd2gxMSAvIHdzdW07XHJcblxyXG5cdFx0aWYod3N1bSA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGggPSAwO1xyXG5cclxuXHRcdGlmKGlzRmluaXRlKGgwMCkpIGggKz0gaDAwICogd2gwMDtcclxuXHRcdGlmKGlzRmluaXRlKGgwMSkpIGggKz0gaDAxICogd2gwMTtcclxuXHRcdGlmKGlzRmluaXRlKGgxMCkpIGggKz0gaDEwICogd2gxMDtcclxuXHRcdGlmKGlzRmluaXRlKGgxMSkpIGggKz0gaDExICogd2gxMTtcclxuXHJcblx0XHRyZXR1cm4gaDtcclxuXHR9XHJcblxyXG5cdGhlaWdodChwb3NpdGlvbilcclxuXHR7XHJcblx0XHR2YXIgaCA9IG51bGw7XHJcblxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubWlwTWFwLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRoID0gdGhpcy5oZWlnaHRBdE1pcE1hcExldmVsKHBvc2l0aW9uLCBpKTtcclxuXHJcblx0XHRcdGlmKGggIT09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gaDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBoO1xyXG5cdH1cclxuXHJcblx0dHJhdmVyc2UoaGFuZGxlciwgbGV2ZWwgPSAwKVxyXG5cdHtcclxuXHRcdGhhbmRsZXIodGhpcywgbGV2ZWwpO1xyXG5cclxuXHRcdGZvcih2YXIgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbi5maWx0ZXIoYyA9PiBjICE9PSB1bmRlZmluZWQpKVxyXG5cdFx0e1xyXG5cdFx0XHRjaGlsZC50cmF2ZXJzZShoYW5kbGVyLCBsZXZlbCArIDEpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB7REVNTm9kZX0iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmltcG9ydCB7SGVscGVyVXRpbHN9IGZyb20gXCIuLi91dGlscy9IZWxwZXJVdGlscy5qc1wiO1xyXG5pbXBvcnQge1BvaW50Q2xvdWRUcmVlLCBQb2ludENsb3VkVHJlZU5vZGV9IGZyb20gXCIuL1BvaW50Q2xvdWRUcmVlLmpzXCI7XHJcbmltcG9ydCB7UG9pbnRDb2xvclR5cGUgfSBmcm9tIFwiLi4vUG90cmVlLmpzXCI7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vR2xvYmFsLmpzXCI7XHJcbmltcG9ydCB7UG9pbnRDbG91ZE1hdGVyaWFsfSBmcm9tIFwiLi9tYXRlcmlhbHMvUG9pbnRDbG91ZE1hdGVyaWFsLmpzXCI7XHJcbmltcG9ydCB7VHJlZVR5cGUsIFBvaW50U2l6ZVR5cGV9IGZyb20gXCIuLi9Qb3RyZWUuanNcIjtcclxuXHJcbmNsYXNzIFBvaW50Q2xvdWRBcmVuYTRETm9kZSBleHRlbmRzIFBvaW50Q2xvdWRUcmVlTm9kZVxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5sZWZ0ID0gbnVsbDtcclxuXHRcdHRoaXMucmlnaHQgPSBudWxsO1xyXG5cdFx0dGhpcy5zY2VuZU5vZGUgPSBudWxsO1xyXG5cdFx0dGhpcy5rZHRyZWUgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0Z2V0TnVtUG9pbnRzKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW9tZXRyeU5vZGUubnVtUG9pbnRzO1xyXG5cdH1cclxuXHJcblx0aXNMb2FkZWQoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0aXNUcmVlTm9kZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRpc0dlb21ldHJ5Tm9kZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0TGV2ZWwoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmdlb21ldHJ5Tm9kZS5sZXZlbDtcclxuXHR9XHJcblxyXG5cdGdldEJvdW5kaW5nU3BoZXJlKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW9tZXRyeU5vZGUuYm91bmRpbmdTcGhlcmU7XHJcblx0fVxyXG5cclxuXHRnZXRCb3VuZGluZ0JveCgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2VvbWV0cnlOb2RlLmJvdW5kaW5nQm94O1xyXG5cdH1cclxuXHJcblx0dG9UcmVlTm9kZShjaGlsZClcclxuXHR7XHJcblx0XHR2YXIgZ2VvbWV0cnlOb2RlID0gbnVsbDtcclxuXHJcblx0XHRpZih0aGlzLmxlZnQgPT09IGNoaWxkKVxyXG5cdFx0e1xyXG5cdFx0XHRnZW9tZXRyeU5vZGUgPSB0aGlzLmxlZnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHRoaXMucmlnaHQgPT09IGNoaWxkKVxyXG5cdFx0e1xyXG5cdFx0XHRnZW9tZXRyeU5vZGUgPSB0aGlzLnJpZ2h0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCFnZW9tZXRyeU5vZGUubG9hZGVkKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG5vZGUgPSBuZXcgUG9pbnRDbG91ZEFyZW5hNEROb2RlKCk7XHJcblx0XHR2YXIgc2NlbmVOb2RlID0gVEhSRUUuUG9pbnRDbG91ZChnZW9tZXRyeU5vZGUuZ2VvbWV0cnksIHRoaXMua2R0cmVlLm1hdGVyaWFsKTtcclxuXHRcdHNjZW5lTm9kZS52aXNpYmxlID0gZmFsc2U7XHJcblxyXG5cdFx0bm9kZS5rZHRyZWUgPSB0aGlzLmtkdHJlZTtcclxuXHRcdG5vZGUuZ2VvbWV0cnlOb2RlID0gZ2VvbWV0cnlOb2RlO1xyXG5cdFx0bm9kZS5zY2VuZU5vZGUgPSBzY2VuZU5vZGU7XHJcblx0XHRub2RlLnBhcmVudCA9IHRoaXM7XHJcblx0XHRub2RlLmxlZnQgPSB0aGlzLmdlb21ldHJ5Tm9kZS5sZWZ0O1xyXG5cdFx0bm9kZS5yaWdodCA9IHRoaXMuZ2VvbWV0cnlOb2RlLnJpZ2h0O1xyXG5cdH1cclxuXHJcblx0Z2V0Q2hpbGRyZW4oKVxyXG5cdHtcclxuXHRcdHZhciBjaGlsZHJlbiA9IFtdO1xyXG5cclxuXHRcdGlmKHRoaXMubGVmdClcclxuXHRcdHtcclxuXHRcdFx0Y2hpbGRyZW4ucHVzaCh0aGlzLmxlZnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMucmlnaHQpXHJcblx0XHR7XHJcblx0XHRcdGNoaWxkcmVuLnB1c2godGhpcy5yaWdodCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xyXG5cdH1cclxufTtcclxuXHJcbmNsYXNzIFBvaW50Q2xvdWRBcmVuYTREIGV4dGVuZHMgUG9pbnRDbG91ZFRyZWVcclxue1xyXG5cdGNvbnN0cnVjdG9yKGdlb21ldHJ5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5yb290ID0gbnVsbDtcclxuXHRcdGlmKGdlb21ldHJ5LnJvb3QpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucm9vdCA9IGdlb21ldHJ5LnJvb3Q7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGdlb21ldHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJoaWVyYXJjaHlfbG9hZGVkXCIsICgpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnJvb3QgPSBnZW9tZXRyeS5yb290O1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZpc2libGVQb2ludHNUYXJnZXQgPSAyICogMTAwMCAqIDEwMDA7XHJcblx0XHR0aGlzLm1pbmltdW1Ob2RlUGl4ZWxTaXplID0gMTUwO1xyXG5cclxuXHRcdHRoaXMucG9zaXRpb24uc3ViKGdlb21ldHJ5Lm9mZnNldCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1hdHJpeCgpO1xyXG5cclxuXHRcdHRoaXMubnVtVmlzaWJsZU5vZGVzID0gMDtcclxuXHRcdHRoaXMubnVtVmlzaWJsZVBvaW50cyA9IDA7XHJcblxyXG5cdFx0dGhpcy5ib3VuZGluZ0JveE5vZGVzID0gW107XHJcblx0XHR0aGlzLmxvYWRRdWV1ZSA9IFtdO1xyXG5cdFx0dGhpcy52aXNpYmxlTm9kZXMgPSBbXTtcclxuXHJcblx0XHR0aGlzLnBjb0dlb21ldHJ5ID0gZ2VvbWV0cnk7XHJcblx0XHR0aGlzLmJvdW5kaW5nQm94ID0gdGhpcy5wY29HZW9tZXRyeS5ib3VuZGluZ0JveDtcclxuXHRcdHRoaXMuYm91bmRpbmdTcGhlcmUgPSB0aGlzLnBjb0dlb21ldHJ5LmJvdW5kaW5nU3BoZXJlO1xyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBQb2ludENsb3VkTWF0ZXJpYWwoXHJcblx0XHR7XHJcblx0XHRcdHZlcnRleENvbG9yczogVEhSRUUuVmVydGV4Q29sb3JzLFxyXG5cdFx0XHRzaXplOiAwLjA1LFxyXG5cdFx0XHR0cmVlVHlwZTogVHJlZVR5cGUuS0RUUkVFXHJcblx0XHR9KTtcclxuXHRcdHRoaXMubWF0ZXJpYWwuc2l6ZVR5cGUgPSBQb2ludFNpemVUeXBlLkFUVEVOVUFURUQ7XHJcblx0XHR0aGlzLm1hdGVyaWFsLnNpemUgPSAwLjA1O1xyXG5cdFx0dGhpcy5wcm9maWxlUmVxdWVzdHMgPSBbXTtcclxuXHRcdHRoaXMubmFtZSA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRnZXRCb3VuZGluZ0JveFdvcmxkKClcclxuXHR7XHJcblx0XHR0aGlzLnVwZGF0ZU1hdHJpeFdvcmxkKHRydWUpO1xyXG5cdFx0dmFyIGJveCA9IHRoaXMuYm91bmRpbmdCb3g7XHJcblx0XHR2YXIgdHJhbnNmb3JtID0gdGhpcy5tYXRyaXhXb3JsZDtcclxuXHRcdHZhciB0Qm94ID0gSGVscGVyVXRpbHMuY29tcHV0ZVRyYW5zZm9ybWVkQm91bmRpbmdCb3goYm94LCB0cmFuc2Zvcm0pO1xyXG5cclxuXHRcdHJldHVybiB0Qm94O1xyXG5cdH07XHJcblxyXG5cdHNldE5hbWUobmFtZSlcclxuXHR7XHJcblx0XHRpZih0aGlzLm5hbWUgIT09IG5hbWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwibmFtZV9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRwb2ludGNsb3VkOiB0aGlzXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0TmFtZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdGdldExldmVsKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5sZXZlbDtcclxuXHR9XHJcblxyXG5cdHRvVHJlZU5vZGUoZ2VvbWV0cnlOb2RlLCBwYXJlbnQpXHJcblx0e1xyXG5cdFx0dmFyIG5vZGUgPSBuZXcgUG9pbnRDbG91ZEFyZW5hNEROb2RlKCk7XHJcblxyXG5cdFx0dmFyIHNjZW5lTm9kZSA9IG5ldyBUSFJFRS5Qb2ludHMoZ2VvbWV0cnlOb2RlLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuXHRcdHNjZW5lTm9kZS5mcnVzdHVtQ3VsbGVkID0gdHJ1ZTtcclxuXHRcdHNjZW5lTm9kZS5vbkJlZm9yZVJlbmRlciA9IChfdGhpcywgc2NlbmUsIGNhbWVyYSwgZ2VvbWV0cnksIG1hdGVyaWFsLCBncm91cCkgPT5cclxuXHRcdHtcclxuXHRcdFx0aWYobWF0ZXJpYWwucHJvZ3JhbSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdF90aGlzLmdldENvbnRleHQoKS51c2VQcm9ncmFtKG1hdGVyaWFsLnByb2dyYW0ucHJvZ3JhbSk7XHJcblxyXG5cdFx0XHRcdGlmKG1hdGVyaWFsLnByb2dyYW0uZ2V0VW5pZm9ybXMoKS5tYXAubGV2ZWwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGxldmVsID0gZ2VvbWV0cnlOb2RlLmdldExldmVsKCk7XHJcblx0XHRcdFx0XHRtYXRlcmlhbC51bmlmb3Jtcy5sZXZlbC52YWx1ZSA9IGxldmVsO1xyXG5cdFx0XHRcdFx0bWF0ZXJpYWwucHJvZ3JhbS5nZXRVbmlmb3JtcygpLm1hcC5sZXZlbC5zZXRWYWx1ZShfdGhpcy5nZXRDb250ZXh0KCksIGxldmVsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKHRoaXMudmlzaWJsZU5vZGVUZXh0dXJlT2Zmc2V0cyAmJiBtYXRlcmlhbC5wcm9ncmFtLmdldFVuaWZvcm1zKCkubWFwLnZuU3RhcnQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIHZuU3RhcnQgPSB0aGlzLnZpc2libGVOb2RlVGV4dHVyZU9mZnNldHMuZ2V0KG5vZGUpO1xyXG5cdFx0XHRcdFx0bWF0ZXJpYWwudW5pZm9ybXMudm5TdGFydC52YWx1ZSA9IHZuU3RhcnQ7XHJcblx0XHRcdFx0XHRtYXRlcmlhbC5wcm9ncmFtLmdldFVuaWZvcm1zKCkubWFwLnZuU3RhcnQuc2V0VmFsdWUoX3RoaXMuZ2V0Q29udGV4dCgpLCB2blN0YXJ0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKG1hdGVyaWFsLnByb2dyYW0uZ2V0VW5pZm9ybXMoKS5tYXAucGNJbmRleClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgaSA9IG5vZGUucGNJbmRleCA/IG5vZGUucGNJbmRleCA6IHRoaXMudmlzaWJsZU5vZGVzLmluZGV4T2Yobm9kZSk7XHJcblx0XHRcdFx0XHRtYXRlcmlhbC51bmlmb3Jtcy5wY0luZGV4LnZhbHVlID0gaTtcclxuXHRcdFx0XHRcdG1hdGVyaWFsLnByb2dyYW0uZ2V0VW5pZm9ybXMoKS5tYXAucGNJbmRleC5zZXRWYWx1ZShfdGhpcy5nZXRDb250ZXh0KCksIGkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRub2RlLmdlb21ldHJ5Tm9kZSA9IGdlb21ldHJ5Tm9kZTtcclxuXHRcdG5vZGUuc2NlbmVOb2RlID0gc2NlbmVOb2RlO1xyXG5cdFx0bm9kZS5wb2ludGNsb3VkID0gdGhpcztcclxuXHRcdG5vZGUubGVmdCA9IGdlb21ldHJ5Tm9kZS5sZWZ0O1xyXG5cdFx0bm9kZS5yaWdodCA9IGdlb21ldHJ5Tm9kZS5yaWdodDtcclxuXHJcblx0XHRpZighcGFyZW50KVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnJvb3QgPSBub2RlO1xyXG5cdFx0XHR0aGlzLmFkZChzY2VuZU5vZGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRwYXJlbnQuc2NlbmVOb2RlLmFkZChzY2VuZU5vZGUpO1xyXG5cclxuXHRcdFx0aWYocGFyZW50LmxlZnQgPT09IGdlb21ldHJ5Tm9kZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhcmVudC5sZWZ0ID0gbm9kZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKHBhcmVudC5yaWdodCA9PT0gZ2VvbWV0cnlOb2RlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyZW50LnJpZ2h0ID0gbm9kZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBkaXNwb3NlTGlzdGVuZXIgPSBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdHBhcmVudC5zY2VuZU5vZGUucmVtb3ZlKG5vZGUuc2NlbmVOb2RlKTtcclxuXHJcblx0XHRcdGlmKHBhcmVudC5sZWZ0ID09PSBub2RlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyZW50LmxlZnQgPSBnZW9tZXRyeU5vZGU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihwYXJlbnQucmlnaHQgPT09IG5vZGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJlbnQucmlnaHQgPSBnZW9tZXRyeU5vZGU7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRnZW9tZXRyeU5vZGUub25lVGltZURpc3Bvc2VIYW5kbGVycy5wdXNoKGRpc3Bvc2VMaXN0ZW5lcik7XHJcblxyXG5cdFx0cmV0dXJuIG5vZGU7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVNYXRlcmlhbChtYXRlcmlhbCwgdmlzaWJsZU5vZGVzLCBjYW1lcmEsIHJlbmRlcmVyKVxyXG5cdHtcclxuXHRcdG1hdGVyaWFsLmZvdiA9IGNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MCk7XHJcblx0XHRtYXRlcmlhbC5zY3JlZW5XaWR0aCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblx0XHRtYXRlcmlhbC5zY3JlZW5IZWlnaHQgPSByZW5kZXJlci5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHRcdG1hdGVyaWFsLnNwYWNpbmcgPSB0aGlzLnBjb0dlb21ldHJ5LnNwYWNpbmc7XHJcblx0XHRtYXRlcmlhbC5uZWFyID0gY2FtZXJhLm5lYXI7XHJcblx0XHRtYXRlcmlhbC5mYXIgPSBjYW1lcmEuZmFyO1xyXG5cclxuXHRcdC8vcmVkdWNlIHNoYWRlciBzb3VyY2UgdXBkYXRlcyBieSBzZXR0aW5nIG1heExldmVsIHNsaWdodGx5IGhpZ2hlciB0aGFuIGFjdHVhbGx5IG5lY2Vzc2FyeVxyXG5cdFx0aWYodGhpcy5tYXhMZXZlbCA+IG1hdGVyaWFsLmxldmVscylcclxuXHRcdHtcclxuXHRcdFx0bWF0ZXJpYWwubGV2ZWxzID0gdGhpcy5tYXhMZXZlbCArIDI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9tYXRlcmlhbC51bmlmb3Jtcy5vY3RyZWVTaXplLnZhbHVlID0gdGhpcy5ib3VuZGluZ0JveC5zaXplKCkueDtcclxuXHRcdHZhciBiYlNpemUgPSB0aGlzLmJvdW5kaW5nQm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcblx0XHRtYXRlcmlhbC5iYlNpemUgPSBbYmJTaXplLngsIGJiU2l6ZS55LCBiYlNpemUuel07XHJcblx0fVxyXG5cclxuXHR1cGRhdGVWaXNpYmxlQm91bmRzKClcclxuXHR7XHJcblxyXG5cdH1cclxuXHJcblx0aGlkZURlc2NlbmRhbnRzKG9iamVjdClcclxuXHR7XHJcblx0XHR2YXIgc3RhY2sgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBvYmplY3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciBjaGlsZCA9IG9iamVjdC5jaGlsZHJlbltpXTtcclxuXHRcdFx0aWYoY2hpbGQudmlzaWJsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0YWNrLnB1c2goY2hpbGQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0d2hpbGUoc3RhY2subGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dmFyIGNoaWxkID0gc3RhY2suc2hpZnQoKTtcclxuXHJcblx0XHRcdGNoaWxkLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0aWYoY2hpbGQuYm91bmRpbmdCb3hOb2RlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2hpbGQuYm91bmRpbmdCb3hOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNoaWxkLmNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIGNoaWxkT2ZDaGlsZCA9IGNoaWxkLmNoaWxkcmVuW2ldO1xyXG5cdFx0XHRcdGlmKGNoaWxkT2ZDaGlsZC52aXNpYmxlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHN0YWNrLnB1c2goY2hpbGRPZkNoaWxkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZU1hdHJpeFdvcmxkKGZvcmNlKVxyXG5cdHtcclxuXHRcdC8vbm9kZS5tYXRyaXhXb3JsZC5tdWx0aXBseU1hdHJpY2VzKCBub2RlLnBhcmVudC5tYXRyaXhXb3JsZCwgbm9kZS5tYXRyaXggKTtcclxuXHJcblx0XHRpZih0aGlzLm1hdHJpeEF1dG9VcGRhdGUgPT09IHRydWUpIHRoaXMudXBkYXRlTWF0cml4KCk7XHJcblxyXG5cdFx0aWYodGhpcy5tYXRyaXhXb3JsZE5lZWRzVXBkYXRlID09PSB0cnVlIHx8IGZvcmNlID09PSB0cnVlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLnBhcmVudCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5tYXRyaXhXb3JsZC5jb3B5KHRoaXMubWF0cml4KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLm1hdHJpeFdvcmxkLm11bHRpcGx5TWF0cmljZXModGhpcy5wYXJlbnQubWF0cml4V29ybGQsIHRoaXMubWF0cml4KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5tYXRyaXhXb3JsZE5lZWRzVXBkYXRlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRmb3JjZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRub2Rlc09uUmF5KG5vZGVzLCByYXkpXHJcblx0e1xyXG5cdFx0dmFyIG5vZGVzT25SYXkgPSBbXTtcclxuXHJcblx0XHR2YXIgX3JheSA9IHJheS5jbG9uZSgpO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xyXG5cdFx0XHR2YXIgc3BoZXJlID0gbm9kZS5nZXRCb3VuZGluZ1NwaGVyZShuZXcgVEhSRUUuU3BoZXJlKCkpLmNsb25lKCkuYXBwbHlNYXRyaXg0KG5vZGUuc2NlbmVOb2RlLm1hdHJpeFdvcmxkKTtcclxuXHRcdFx0Ly9UT0RPIFVudXNlZDogdmFyIGJveCA9IG5vZGUuZ2V0Qm91bmRpbmdCb3goKS5jbG9uZSgpLmFwcGx5TWF0cml4NChub2RlLnNjZW5lTm9kZS5tYXRyaXhXb3JsZCk7XHJcblxyXG5cdFx0XHRpZihfcmF5LmludGVyc2VjdHNTcGhlcmUoc3BoZXJlKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5vZGVzT25SYXkucHVzaChub2RlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvL2lmKF9yYXkuaXNJbnRlcnNlY3Rpb25Cb3goYm94KSl7XHJcblx0XHRcdC8vXHRub2Rlc09uUmF5LnB1c2gobm9kZSk7XHJcblx0XHRcdC8vfVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBub2Rlc09uUmF5O1xyXG5cdH1cclxuXHJcblx0cGljayh2aWV3ZXIsIGNhbWVyYSwgcmF5LCBwYXJhbXMgPSB7fSlcclxuXHR7XHJcblxyXG5cdFx0dmFyIHJlbmRlcmVyID0gdmlld2VyLnJlbmRlcmVyO1xyXG5cdFx0dmFyIHBSZW5kZXJlciA9IHZpZXdlci5wUmVuZGVyZXI7XHJcblxyXG5cdFx0cGVyZm9ybWFuY2UubWFyayhcInBpY2stc3RhcnRcIik7XHJcblxyXG5cdFx0dmFyIGdldFZhbCA9IChhLCBiKSA9PiBhICE9PSB1bmRlZmluZWQgPyBhIDogYjtcclxuXHJcblx0XHR2YXIgcGlja1dpbmRvd1NpemUgPSBnZXRWYWwocGFyYW1zLnBpY2tXaW5kb3dTaXplLCAxNyk7XHJcblxyXG5cdFx0dmFyIHNpemUgPSByZW5kZXJlci5nZXRTaXplKG5ldyBUSFJFRS5WZWN0b3IzKCkpO1xyXG5cclxuXHRcdHZhciB3aWR0aCA9IE1hdGguY2VpbChnZXRWYWwocGFyYW1zLndpZHRoLCBzaXplLndpZHRoKSk7XHJcblx0XHR2YXIgaGVpZ2h0ID0gTWF0aC5jZWlsKGdldFZhbChwYXJhbXMuaGVpZ2h0LCBzaXplLmhlaWdodCkpO1xyXG5cclxuXHRcdHZhciBwb2ludFNpemVUeXBlID0gZ2V0VmFsKHBhcmFtcy5wb2ludFNpemVUeXBlLCB0aGlzLm1hdGVyaWFsLnBvaW50U2l6ZVR5cGUpO1xyXG5cdFx0dmFyIHBvaW50U2l6ZSA9IGdldFZhbChwYXJhbXMucG9pbnRTaXplLCB0aGlzLm1hdGVyaWFsLnNpemUpO1xyXG5cclxuXHRcdHZhciBub2RlcyA9IHRoaXMubm9kZXNPblJheSh0aGlzLnZpc2libGVOb2RlcywgcmF5KTtcclxuXHJcblx0XHRpZihub2Rlcy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCF0aGlzLnBpY2tTdGF0ZSlcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgUG9pbnRDbG91ZE1hdGVyaWFsKCk7XHJcblx0XHRcdG1hdGVyaWFsLnBvaW50Q29sb3JUeXBlID0gUG9pbnRDb2xvclR5cGUuUE9JTlRfSU5ERVg7XHJcblxyXG5cdFx0XHR2YXIgcmVuZGVyVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KFxyXG5cdFx0XHRcdDEsIDEsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcblx0XHRcdFx0XHRtYWdGaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcblx0XHRcdFx0XHRmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXRcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLnBpY2tTdGF0ZSA9IHtcclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQ6IHJlbmRlclRhcmdldCxcclxuXHRcdFx0XHRtYXRlcmlhbDogbWF0ZXJpYWwsXHJcblx0XHRcdFx0c2NlbmU6IHNjZW5lXHJcblx0XHRcdH07XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBwaWNrU3RhdGUgPSB0aGlzLnBpY2tTdGF0ZTtcclxuXHRcdHZhciBwaWNrTWF0ZXJpYWwgPSBwaWNrU3RhdGUubWF0ZXJpYWw7XHJcblx0XHR0aGlzLnVwZGF0ZU1hdGVyaWFsKHBpY2tNYXRlcmlhbCwgbm9kZXMsIGNhbWVyYSwgcmVuZGVyZXIpO1xyXG5cclxuXHRcdHBpY2tTdGF0ZS5yZW5kZXJUYXJnZXQuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHJcblx0XHR2YXIgcGl4ZWxQb3MgPSBuZXcgVEhSRUUuVmVjdG9yMihwYXJhbXMueCwgcGFyYW1zLnkpO1xyXG5cclxuXHRcdHZhciBnbCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuXHRcdGdsLmVuYWJsZShnbC5TQ0lTU09SX1RFU1QpO1xyXG5cdFx0Z2wuc2Npc3NvcihwYXJzZUludChwaXhlbFBvcy54IC0gKHBpY2tXaW5kb3dTaXplIC0gMSkgLyAyKSwgcGFyc2VJbnQocGl4ZWxQb3MueSAtIChwaWNrV2luZG93U2l6ZSAtIDEpIC8gMiksIHBhcnNlSW50KHBpY2tXaW5kb3dTaXplKSwgcGFyc2VJbnQocGlja1dpbmRvd1NpemUpKTtcclxuXHJcblx0XHRyZW5kZXJlci5zdGF0ZS5idWZmZXJzLmRlcHRoLnNldFRlc3QocGlja01hdGVyaWFsLmRlcHRoVGVzdCk7XHJcblx0XHRyZW5kZXJlci5zdGF0ZS5idWZmZXJzLmRlcHRoLnNldE1hc2socGlja01hdGVyaWFsLmRlcHRoV3JpdGUpO1xyXG5cdFx0cmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRpbmcoVEhSRUUuTm9CbGVuZGluZyk7XHJcblxyXG5cdFx0cmVuZGVyZXIuY2xlYXJUYXJnZXQocGlja1N0YXRlLnJlbmRlclRhcmdldCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRyZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQocGlja1N0YXRlLnJlbmRlclRhcmdldCk7XHJcblx0XHRcclxuXHRcdGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XHJcblx0XHRyZW5kZXJlci5jbGVhclRhcmdldChwaWNrU3RhdGUucmVuZGVyVGFyZ2V0LCB0cnVlLCB0cnVlLCB0cnVlKTtcclxuXHJcblx0XHR2YXIgdG1wID0gdGhpcy5tYXRlcmlhbDtcclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBwaWNrTWF0ZXJpYWw7XHJcblxyXG5cdFx0cFJlbmRlcmVyLnJlbmRlck9jdHJlZSh0aGlzLCBub2RlcywgY2FtZXJhLCBwaWNrU3RhdGUucmVuZGVyVGFyZ2V0KTtcclxuXHJcblx0XHR0aGlzLm1hdGVyaWFsID0gdG1wO1xyXG5cclxuXHRcdHZhciBjbGFtcCA9IChudW1iZXIsIG1pbiwgbWF4KSA9PiBNYXRoLm1pbihNYXRoLm1heChtaW4sIG51bWJlciksIG1heCk7XHJcblxyXG5cdFx0dmFyIHggPSBwYXJzZUludChjbGFtcChwaXhlbFBvcy54IC0gKHBpY2tXaW5kb3dTaXplIC0gMSkgLyAyLCAwLCB3aWR0aCkpO1xyXG5cdFx0dmFyIHkgPSBwYXJzZUludChjbGFtcChwaXhlbFBvcy55IC0gKHBpY2tXaW5kb3dTaXplIC0gMSkgLyAyLCAwLCBoZWlnaHQpKTtcclxuXHRcdHZhciB3ID0gcGFyc2VJbnQoTWF0aC5taW4oeCArIHBpY2tXaW5kb3dTaXplLCB3aWR0aCkgLSB4KTtcclxuXHRcdHZhciBoID0gcGFyc2VJbnQoTWF0aC5taW4oeSArIHBpY2tXaW5kb3dTaXplLCBoZWlnaHQpIC0geSk7XHJcblxyXG5cdFx0dmFyIHBpeGVsQ291bnQgPSB3ICogaDtcclxuXHRcdHZhciBidWZmZXIgPSBuZXcgVWludDhBcnJheSg0ICogcGl4ZWxDb3VudCk7XHJcblxyXG5cdFx0Z2wucmVhZFBpeGVscyh4LCB5LCBwaWNrV2luZG93U2l6ZSwgcGlja1dpbmRvd1NpemUsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGJ1ZmZlcik7XHJcblxyXG5cdFx0cmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KG51bGwpO1xyXG5cdFx0cmVuZGVyZXIucmVzZXRHTFN0YXRlKCk7XHJcblx0XHRyZW5kZXJlci5zZXRTY2lzc29yVGVzdChmYWxzZSk7XHJcblx0XHRnbC5kaXNhYmxlKGdsLlNDSVNTT1JfVEVTVCk7XHJcblxyXG5cdFx0dmFyIHBpeGVscyA9IGJ1ZmZlcjtcclxuXHRcdHZhciBpYnVmZmVyID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlci5idWZmZXIpO1xyXG5cclxuXHRcdC8vZmluZCBjbG9zZXN0IGhpdCBpbnNpZGUgcGl4ZWxXaW5kb3cgYm91bmRhcmllc1xyXG5cdFx0dmFyIG1pbiA9IE51bWJlci5NQVhfVkFMVUU7XHJcblx0XHR2YXIgaGl0cyA9IFtdO1xyXG5cdFx0Zm9yKHZhciB1ID0gMDsgdSA8IHBpY2tXaW5kb3dTaXplOyB1KyspXHJcblx0XHR7XHJcblx0XHRcdGZvcih2YXIgdiA9IDA7IHYgPCBwaWNrV2luZG93U2l6ZTsgdisrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIG9mZnNldCA9ICh1ICsgdiAqIHBpY2tXaW5kb3dTaXplKTtcclxuXHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnBvdyh1IC0gKHBpY2tXaW5kb3dTaXplIC0gMSkgLyAyLCAyKSArIE1hdGgucG93KHYgLSAocGlja1dpbmRvd1NpemUgLSAxKSAvIDIsIDIpO1xyXG5cclxuXHRcdFx0XHR2YXIgcGNJbmRleCA9IHBpeGVsc1s0ICogb2Zmc2V0ICsgM107XHJcblx0XHRcdFx0cGl4ZWxzWzQgKiBvZmZzZXQgKyAzXSA9IDA7XHJcblx0XHRcdFx0dmFyIHBJbmRleCA9IGlidWZmZXJbb2Zmc2V0XTtcclxuXHJcblx0XHRcdFx0aWYoIShwY0luZGV4ID09PSAwICYmIHBJbmRleCA9PT0gMCkgJiYgKHBjSW5kZXggIT09IHVuZGVmaW5lZCkgJiYgKHBJbmRleCAhPT0gdW5kZWZpbmVkKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgaGl0ID0ge1xyXG5cdFx0XHRcdFx0XHRwSW5kZXg6IHBJbmRleCxcclxuXHRcdFx0XHRcdFx0cGNJbmRleDogcGNJbmRleCxcclxuXHRcdFx0XHRcdFx0ZGlzdGFuY2VUb0NlbnRlcjogZGlzdGFuY2VcclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0aWYocGFyYW1zLmFsbClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aGl0cy5wdXNoKGhpdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmKGhpdHMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlmKGRpc3RhbmNlIDwgaGl0c1swXS5kaXN0YW5jZVRvQ2VudGVyKVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGhpdHNbMF0gPSBoaXQ7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGhpdHMucHVzaChoaXQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcih2YXIgaGl0IG9mIGhpdHMpXHJcblx0XHR7XHJcblx0XHRcdHZhciBwb2ludCA9IHt9O1xyXG5cclxuXHRcdFx0aWYoIW5vZGVzW2hpdC5wY0luZGV4XSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgbm9kZSA9IG5vZGVzW2hpdC5wY0luZGV4XTtcclxuXHRcdFx0dmFyIHBjID0gbm9kZS5zY2VuZU5vZGU7XHJcblx0XHRcdHZhciBnZW9tZXRyeSA9IG5vZGUuZ2VvbWV0cnlOb2RlLmdlb21ldHJ5O1xyXG5cclxuXHRcdFx0Zm9yKHZhciBhdHRyaWJ1dGVOYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgYXR0cmlidXRlID0gZ2VvbWV0cnkuYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcclxuXHJcblx0XHRcdFx0aWYoYXR0cmlidXRlTmFtZSA9PT0gXCJwb3NpdGlvblwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciB4ID0gYXR0cmlidXRlLmFycmF5WzMgKiBoaXQucEluZGV4ICsgMF07XHJcblx0XHRcdFx0XHR2YXIgeSA9IGF0dHJpYnV0ZS5hcnJheVszICogaGl0LnBJbmRleCArIDFdO1xyXG5cdFx0XHRcdFx0dmFyIHogPSBhdHRyaWJ1dGUuYXJyYXlbMyAqIGhpdC5wSW5kZXggKyAyXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgcG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uLmFwcGx5TWF0cml4NChwYy5tYXRyaXhXb3JsZCk7XHJcblxyXG5cdFx0XHRcdFx0cG9pbnRbYXR0cmlidXRlTmFtZV0gPSBwb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoaXQucG9pbnQgPSBwb2ludDtcclxuXHRcdH1cclxuXHJcblx0XHRwZXJmb3JtYW5jZS5tYXJrKFwicGljay1lbmRcIik7XHJcblx0XHRwZXJmb3JtYW5jZS5tZWFzdXJlKFwicGlja1wiLCBcInBpY2stc3RhcnRcIiwgXCJwaWNrLWVuZFwiKTtcclxuXHJcblx0XHRpZihwYXJhbXMuYWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gaGl0cy5tYXAoaGl0ID0+IGhpdC5wb2ludCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmKGhpdHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmV0dXJuIGhpdHNbMF0ucG9pbnQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbXB1dGVWaXNpYmlsaXR5VGV4dHVyZURhdGEobm9kZXMpXHJcblx0e1xyXG5cdFx0aWYoR2xvYmFsLm1lYXN1cmVUaW1pbmdzKVxyXG5cdFx0e1xyXG5cdFx0XHRwZXJmb3JtYW5jZS5tYXJrKFwiY29tcHV0ZVZpc2liaWxpdHlUZXh0dXJlRGF0YS1zdGFydFwiKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KG5vZGVzLmxlbmd0aCAqIDMpO1xyXG5cdFx0dmFyIHZpc2libGVOb2RlVGV4dHVyZU9mZnNldHMgPSBuZXcgTWFwKCk7XHJcblxyXG5cdFx0Ly9jb3B5IGFycmF5XHJcblx0XHRub2RlcyA9IG5vZGVzLnNsaWNlKCk7XHJcblxyXG5cdFx0Ly9zb3J0IGJ5IGxldmVsIGFuZCBudW1iZXJcclxuXHRcdHZhciBzb3J0ID0gZnVuY3Rpb24oYSwgYilcclxuXHRcdHtcclxuXHRcdFx0dmFyIGxhID0gYS5nZW9tZXRyeU5vZGUubGV2ZWw7XHJcblx0XHRcdHZhciBsYiA9IGIuZ2VvbWV0cnlOb2RlLmxldmVsO1xyXG5cdFx0XHR2YXIgbmEgPSBhLmdlb21ldHJ5Tm9kZS5udW1iZXI7XHJcblx0XHRcdHZhciBuYiA9IGIuZ2VvbWV0cnlOb2RlLm51bWJlcjtcclxuXHRcdFx0aWYobGEgIT09IGxiKSByZXR1cm4gbGEgLSBsYjtcclxuXHRcdFx0aWYobmEgPCBuYikgcmV0dXJuIC0xO1xyXG5cdFx0XHRpZihuYSA+IG5iKSByZXR1cm4gMTtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9O1xyXG5cdFx0bm9kZXMuc29ydChzb3J0KTtcclxuXHJcblx0XHR2YXIgdmlzaWJsZU5vZGVOYW1lcyA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2aXNpYmxlTm9kZU5hbWVzLnB1c2gobm9kZXNbaV0uZ2VvbWV0cnlOb2RlLm51bWJlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xyXG5cclxuXHRcdFx0dmlzaWJsZU5vZGVUZXh0dXJlT2Zmc2V0cy5zZXQobm9kZSwgaSk7XHJcblxyXG5cdFx0XHR2YXIgYjEgPSAwOyAvL2NoaWxkcmVuXHJcblx0XHRcdHZhciBiMiA9IDA7IC8vb2Zmc2V0IHRvIGZpcnN0IGNoaWxkXHJcblx0XHRcdHZhciBiMyA9IDA7IC8vc3BsaXRcclxuXHJcblx0XHRcdGlmKG5vZGUuZ2VvbWV0cnlOb2RlLmxlZnQgJiYgdmlzaWJsZU5vZGVOYW1lcy5pbmRleE9mKG5vZGUuZ2VvbWV0cnlOb2RlLmxlZnQubnVtYmVyKSA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRiMSArPSAxO1xyXG5cdFx0XHRcdGIyID0gdmlzaWJsZU5vZGVOYW1lcy5pbmRleE9mKG5vZGUuZ2VvbWV0cnlOb2RlLmxlZnQubnVtYmVyKSAtIGk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYobm9kZS5nZW9tZXRyeU5vZGUucmlnaHQgJiYgdmlzaWJsZU5vZGVOYW1lcy5pbmRleE9mKG5vZGUuZ2VvbWV0cnlOb2RlLnJpZ2h0Lm51bWJlcikgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YjEgKz0gMjtcclxuXHRcdFx0XHRiMiA9IChiMiA9PT0gMCkgPyB2aXNpYmxlTm9kZU5hbWVzLmluZGV4T2Yobm9kZS5nZW9tZXRyeU5vZGUucmlnaHQubnVtYmVyKSAtIGkgOiBiMjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYobm9kZS5nZW9tZXRyeU5vZGUuc3BsaXQgPT09IFwiWFwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YjMgPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYobm9kZS5nZW9tZXRyeU5vZGUuc3BsaXQgPT09IFwiWVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YjMgPSAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYobm9kZS5nZW9tZXRyeU5vZGUuc3BsaXQgPT09IFwiWlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YjMgPSA0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkYXRhW2kgKiAzICsgMF0gPSBiMTtcclxuXHRcdFx0ZGF0YVtpICogMyArIDFdID0gYjI7XHJcblx0XHRcdGRhdGFbaSAqIDMgKyAyXSA9IGIzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKEdsb2JhbC5tZWFzdXJlVGltaW5ncylcclxuXHRcdHtcclxuXHRcdFx0cGVyZm9ybWFuY2UubWFyayhcImNvbXB1dGVWaXNpYmlsaXR5VGV4dHVyZURhdGEtZW5kXCIpO1xyXG5cdFx0XHRwZXJmb3JtYW5jZS5tZWFzdXJlKFwicmVuZGVyLmNvbXB1dGVWaXNpYmlsaXR5VGV4dHVyZURhdGFcIiwgXCJjb21wdXRlVmlzaWJpbGl0eVRleHR1cmVEYXRhLXN0YXJ0XCIsIFwiY29tcHV0ZVZpc2liaWxpdHlUZXh0dXJlRGF0YS1lbmRcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0b2Zmc2V0czogdmlzaWJsZU5vZGVUZXh0dXJlT2Zmc2V0c1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGdldCBwcm9ncmVzcygpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5wY29HZW9tZXRyeS5yb290KVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gR2xvYmFsLm51bU5vZGVzTG9hZGluZyA+IDAgPyAwIDogMTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtQb2ludENsb3VkQXJlbmE0RCwgUG9pbnRDbG91ZEFyZW5hNEROb2RlfTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5pbXBvcnQge1BvaW50Q2xvdWRPY3RyZWVHZW9tZXRyeU5vZGV9IGZyb20gXCIuL2dlb21ldHJpZXMvUG9pbnRDbG91ZE9jdHJlZUdlb21ldHJ5LmpzXCI7XHJcbmltcG9ydCB7SGVscGVyVXRpbHN9IGZyb20gXCIuLi91dGlscy9IZWxwZXJVdGlscy5qc1wiO1xyXG5pbXBvcnQge1BvaW50Q2xvdWRUcmVlLCBQb2ludENsb3VkVHJlZU5vZGV9IGZyb20gXCIuL1BvaW50Q2xvdWRUcmVlLmpzXCI7XHJcbmltcG9ydCB7UG9pbnRDbG91ZE1hdGVyaWFsfSBmcm9tIFwiLi9tYXRlcmlhbHMvUG9pbnRDbG91ZE1hdGVyaWFsLmpzXCI7XHJcbmltcG9ydCB7UG9pbnRDb2xvclR5cGUgfSBmcm9tIFwiLi4vUG90cmVlLmpzXCI7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vR2xvYmFsLmpzXCI7XHJcblxyXG5jbGFzcyBQb2ludENsb3VkT2N0cmVlTm9kZSBleHRlbmRzIFBvaW50Q2xvdWRUcmVlTm9kZVxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IHt9O1xyXG5cdFx0dGhpcy5zY2VuZU5vZGUgPSBudWxsO1xyXG5cdFx0dGhpcy5vY3RyZWUgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0Z2V0TnVtUG9pbnRzKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW9tZXRyeU5vZGUubnVtUG9pbnRzO1xyXG5cdH1cclxuXHJcblx0aXNMb2FkZWQoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0aXNUcmVlTm9kZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRpc0dlb21ldHJ5Tm9kZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0TGV2ZWwoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmdlb21ldHJ5Tm9kZS5sZXZlbDtcclxuXHR9XHJcblxyXG5cdGdldEJvdW5kaW5nU3BoZXJlKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW9tZXRyeU5vZGUuYm91bmRpbmdTcGhlcmU7XHJcblx0fVxyXG5cclxuXHRnZXRCb3VuZGluZ0JveCgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2VvbWV0cnlOb2RlLmJvdW5kaW5nQm94O1xyXG5cdH1cclxuXHJcblx0Z2V0Q2hpbGRyZW4oKVxyXG5cdHtcclxuXHRcdHZhciBjaGlsZHJlbiA9IFtdO1xyXG5cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCA4OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMuY2hpbGRyZW5baV0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKHRoaXMuY2hpbGRyZW5baV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9pbnRzSW5Cb3goYm94Tm9kZSlcclxuXHR7XHJcblxyXG5cdFx0aWYoIXRoaXMuc2NlbmVOb2RlKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgYnVmZmVyID0gdGhpcy5nZW9tZXRyeU5vZGUuYnVmZmVyO1xyXG5cclxuXHRcdHZhciBwb3NPZmZzZXQgPSBidWZmZXIub2Zmc2V0KFwicG9zaXRpb25cIik7XHJcblx0XHR2YXIgc3RyaWRlID0gYnVmZmVyLnN0cmlkZTtcclxuXHRcdHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlci5kYXRhKTtcclxuXHJcblx0XHR2YXIgd29ybGRUb0JveCA9IG5ldyBUSFJFRS5NYXRyaXg0KCkuZ2V0SW52ZXJzZShib3hOb2RlLm1hdHJpeFdvcmxkKTtcclxuXHRcdHZhciBvYmplY3RUb0JveCA9IG5ldyBUSFJFRS5NYXRyaXg0KCkubXVsdGlwbHlNYXRyaWNlcyh3b3JsZFRvQm94LCB0aGlzLnNjZW5lTm9kZS5tYXRyaXhXb3JsZCk7XHJcblxyXG5cdFx0dmFyIGluQm94ID0gW107XHJcblxyXG5cdFx0dmFyIHBvcyA9IG5ldyBUSFJFRS5WZWN0b3I0KCk7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYnVmZmVyLm51bUVsZW1lbnRzOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciB4ID0gdmlldy5nZXRGbG9hdDMyKGkgKiBzdHJpZGUgKyBwb3NPZmZzZXQgKyAwLCB0cnVlKTtcclxuXHRcdFx0dmFyIHkgPSB2aWV3LmdldEZsb2F0MzIoaSAqIHN0cmlkZSArIHBvc09mZnNldCArIDQsIHRydWUpO1xyXG5cdFx0XHR2YXIgeiA9IHZpZXcuZ2V0RmxvYXQzMihpICogc3RyaWRlICsgcG9zT2Zmc2V0ICsgOCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRwb3Muc2V0KHgsIHksIHosIDEpO1xyXG5cdFx0XHRwb3MuYXBwbHlNYXRyaXg0KG9iamVjdFRvQm94KTtcclxuXHJcblx0XHRcdGlmKC0wLjUgPCBwb3MueCAmJiBwb3MueCA8IDAuNSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKC0wLjUgPCBwb3MueSAmJiBwb3MueSA8IDAuNSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZigtMC41IDwgcG9zLnogJiYgcG9zLnogPCAwLjUpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHBvcy5zZXQoeCwgeSwgeiwgMSkuYXBwbHlNYXRyaXg0KHRoaXMuc2NlbmVOb2RlLm1hdHJpeFdvcmxkKTtcclxuXHRcdFx0XHRcdFx0aW5Cb3gucHVzaChuZXcgVEhSRUUuVmVjdG9yMyhwb3MueCwgcG9zLnksIHBvcy56KSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGluQm94O1xyXG5cdH1cclxuXHJcblx0Z2V0IG5hbWUoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmdlb21ldHJ5Tm9kZS5uYW1lO1xyXG5cdH1cclxufTtcclxuXHJcbmNsYXNzIFBvaW50Q2xvdWRPY3RyZWUgZXh0ZW5kcyBQb2ludENsb3VkVHJlZVxyXG57XHJcblx0Y29uc3RydWN0b3IoZ2VvbWV0cnksIG1hdGVyaWFsKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wb2ludEJ1ZGdldCA9IEluZmluaXR5O1xyXG5cdFx0dGhpcy5wY29HZW9tZXRyeSA9IGdlb21ldHJ5O1xyXG5cdFx0dGhpcy5ib3VuZGluZ0JveCA9IHRoaXMucGNvR2VvbWV0cnkuYm91bmRpbmdCb3g7XHJcblx0XHR0aGlzLmJvdW5kaW5nU3BoZXJlID0gdGhpcy5ib3VuZGluZ0JveC5nZXRCb3VuZGluZ1NwaGVyZShuZXcgVEhSRUUuU3BoZXJlKCkpO1xyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsIHx8IG5ldyBQb2ludENsb3VkTWF0ZXJpYWwoKTtcclxuXHRcdHRoaXMudmlzaWJsZVBvaW50c1RhcmdldCA9IDIgKiAxMDAwICogMTAwMDtcclxuXHRcdHRoaXMubWluaW11bU5vZGVQaXhlbFNpemUgPSAxNTA7XHJcblx0XHR0aGlzLmxldmVsID0gMDtcclxuXHRcdHRoaXMucG9zaXRpb24uY29weShnZW9tZXRyeS5vZmZzZXQpO1xyXG5cdFx0dGhpcy51cGRhdGVNYXRyaXgoKTtcclxuXHJcblx0XHR0aGlzLnNob3dCb3VuZGluZ0JveCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5ib3VuZGluZ0JveE5vZGVzID0gW107XHJcblx0XHR0aGlzLmxvYWRRdWV1ZSA9IFtdO1xyXG5cdFx0dGhpcy52aXNpYmxlQm91bmRzID0gbmV3IFRIUkVFLkJveDMoKTtcclxuXHRcdHRoaXMudmlzaWJsZU5vZGVzID0gW107XHJcblx0XHR0aGlzLnZpc2libGVHZW9tZXRyeSA9IFtdO1xyXG5cdFx0dGhpcy5nZW5lcmF0ZURFTSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wcm9maWxlUmVxdWVzdHMgPSBbXTtcclxuXHRcdHRoaXMubmFtZSA9IFwiXCI7XHJcblxyXG5cdFx0dGhpcy50ZW1wVmVjdG9yMyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdFx0dmFyIGJveCA9IFt0aGlzLnBjb0dlb21ldHJ5LnRpZ2h0Qm91bmRpbmdCb3gsIHRoaXMuZ2V0Qm91bmRpbmdCb3hXb3JsZCgpXS5maW5kKHYgPT4gdiAhPT0gdW5kZWZpbmVkKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1hdHJpeFdvcmxkKHRydWUpO1xyXG5cdFx0Ym94ID0gSGVscGVyVXRpbHMuY29tcHV0ZVRyYW5zZm9ybWVkQm91bmRpbmdCb3goYm94LCB0aGlzLm1hdHJpeFdvcmxkKTtcclxuXHJcblx0XHR2YXIgYk1pbiA9IGJveC5taW4uejtcclxuXHRcdHZhciBiTWF4ID0gYm94Lm1heC56O1xyXG5cdFx0dGhpcy5tYXRlcmlhbC5oZWlnaHRNaW4gPSBiTWluO1xyXG5cdFx0dGhpcy5tYXRlcmlhbC5oZWlnaHRNYXggPSBiTWF4O1xyXG5cclxuXHRcdC8vVE9ETyA8cmVhZCBwcm9qZWN0aW9uIGZyb20gZmlsZSBpbnN0ZWFkPlxyXG5cdFx0dGhpcy5wcm9qZWN0aW9uID0gZ2VvbWV0cnkucHJvamVjdGlvbjtcclxuXHJcblx0XHR0aGlzLnJvb3QgPSB0aGlzLnBjb0dlb21ldHJ5LnJvb3Q7XHJcblx0fVxyXG5cclxuXHRzZXROYW1lKG5hbWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5uYW1lICE9PSBuYW1lKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm5hbWVfY2hhbmdlZFwiLFxyXG5cdFx0XHRcdG5hbWU6IG5hbWUsXHJcblx0XHRcdFx0cG9pbnRjbG91ZDogdGhpc1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHR0b1RyZWVOb2RlKGdlb21ldHJ5Tm9kZSwgcGFyZW50KVxyXG5cdHtcclxuXHRcdHZhciBub2RlID0gbmV3IFBvaW50Q2xvdWRPY3RyZWVOb2RlKCk7XHJcblx0XHR2YXIgc2NlbmVOb2RlID0gbmV3IFRIUkVFLlBvaW50cyhnZW9tZXRyeU5vZGUuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG5cdFx0c2NlbmVOb2RlLm5hbWUgPSBnZW9tZXRyeU5vZGUubmFtZTtcclxuXHRcdHNjZW5lTm9kZS5wb3NpdGlvbi5jb3B5KGdlb21ldHJ5Tm9kZS5ib3VuZGluZ0JveC5taW4pO1xyXG5cdFx0c2NlbmVOb2RlLmZydXN0dW1DdWxsZWQgPSB0cnVlO1xyXG5cdFx0c2NlbmVOb2RlLm9uQmVmb3JlUmVuZGVyID0gKHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIGdyb3VwKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgdm5TdGFydCA9IG51bGw7XHJcblx0XHRcdGlmKHRoaXMudmlzaWJsZU5vZGVUZXh0dXJlT2Zmc2V0cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZuU3RhcnQgPSB0aGlzLnZpc2libGVOb2RlVGV4dHVyZU9mZnNldHMuZ2V0KG5vZGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgcGNJbmRleCA9IG5vZGUucGNJbmRleCA/IG5vZGUucGNJbmRleCA6IHRoaXMudmlzaWJsZU5vZGVzLmluZGV4T2Yobm9kZSk7XHJcblx0XHRcdHZhciBsZXZlbCA9IGdlb21ldHJ5Tm9kZS5nZXRMZXZlbCgpO1xyXG5cdFxyXG5cdFx0XHRtYXRlcmlhbC51bmlmb3Jtcy5sZXZlbC52YWx1ZSA9IGxldmVsO1xyXG5cdFx0XHRtYXRlcmlhbC51bmlmb3Jtcy52blN0YXJ0LnZhbHVlID0gdm5TdGFydDtcclxuXHRcdFx0bWF0ZXJpYWwudW5pZm9ybXMudVBDSW5kZXgudmFsdWUgPSBwY0luZGV4O1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1hdGVyaWFsKG1hdGVyaWFsLCBjYW1lcmEsIHJlbmRlcmVyKTtcclxuXHRcdH07XHJcblxyXG5cdFx0bm9kZS5nZW9tZXRyeU5vZGUgPSBnZW9tZXRyeU5vZGU7XHJcblx0XHRub2RlLnNjZW5lTm9kZSA9IHNjZW5lTm9kZTtcclxuXHRcdG5vZGUucG9pbnRjbG91ZCA9IHRoaXM7XHJcblx0XHRub2RlLmNoaWxkcmVuID0ge307XHJcblx0XHRmb3IodmFyIGtleSBpbiBnZW9tZXRyeU5vZGUuY2hpbGRyZW4pXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuY2hpbGRyZW5ba2V5XSA9IGdlb21ldHJ5Tm9kZS5jaGlsZHJlbltrZXldO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCFwYXJlbnQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucm9vdCA9IG5vZGU7XHJcblx0XHRcdHRoaXMuYWRkKHNjZW5lTm9kZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHZhciBjaGlsZEluZGV4ID0gcGFyc2VJbnQoZ2VvbWV0cnlOb2RlLm5hbWVbZ2VvbWV0cnlOb2RlLm5hbWUubGVuZ3RoIC0gMV0pO1xyXG5cdFx0XHRwYXJlbnQuc2NlbmVOb2RlLmFkZChzY2VuZU5vZGUpO1xyXG5cdFx0XHRwYXJlbnQuY2hpbGRyZW5bY2hpbGRJbmRleF0gPSBub2RlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBkaXNwb3NlTGlzdGVuZXIgPSBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdHZhciBjaGlsZEluZGV4ID0gcGFyc2VJbnQoZ2VvbWV0cnlOb2RlLm5hbWVbZ2VvbWV0cnlOb2RlLm5hbWUubGVuZ3RoIC0gMV0pO1xyXG5cdFx0XHRwYXJlbnQuc2NlbmVOb2RlLnJlbW92ZShub2RlLnNjZW5lTm9kZSk7XHJcblx0XHRcdHBhcmVudC5jaGlsZHJlbltjaGlsZEluZGV4XSA9IGdlb21ldHJ5Tm9kZTtcclxuXHRcdH07XHJcblx0XHRnZW9tZXRyeU5vZGUub25lVGltZURpc3Bvc2VIYW5kbGVycy5wdXNoKGRpc3Bvc2VMaXN0ZW5lcik7XHJcblxyXG5cclxuXHRcdHJldHVybiBub2RlO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlVmlzaWJsZUJvdW5kcygpXHJcblx0e1xyXG5cdFx0dmFyIGxlYWZOb2RlcyA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMudmlzaWJsZU5vZGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbm9kZSA9IHRoaXMudmlzaWJsZU5vZGVzW2ldO1xyXG5cdFx0XHR2YXIgaXNMZWFmID0gdHJ1ZTtcclxuXHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaisrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIGNoaWxkID0gbm9kZS5jaGlsZHJlbltqXTtcclxuXHRcdFx0XHRpZihjaGlsZCBpbnN0YW5jZW9mIFBvaW50Q2xvdWRPY3RyZWVOb2RlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlzTGVhZiA9IGlzTGVhZiAmJiAhY2hpbGQuc2NlbmVOb2RlLnZpc2libGU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYoY2hpbGQgaW5zdGFuY2VvZiBQb2ludENsb3VkT2N0cmVlR2VvbWV0cnlOb2RlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlzTGVhZiA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihpc0xlYWYpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZWFmTm9kZXMucHVzaChub2RlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmlzaWJsZUJvdW5kcy5taW4gPSBuZXcgVEhSRUUuVmVjdG9yMyhJbmZpbml0eSwgSW5maW5pdHksIEluZmluaXR5KTtcclxuXHRcdHRoaXMudmlzaWJsZUJvdW5kcy5tYXggPSBuZXcgVEhSRUUuVmVjdG9yMygtSW5maW5pdHksIC1JbmZpbml0eSwgLUluZmluaXR5KTtcclxuXHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbGVhZk5vZGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbm9kZSA9IGxlYWZOb2Rlc1tpXTtcclxuXHRcdFx0dGhpcy52aXNpYmxlQm91bmRzLmV4cGFuZEJ5UG9pbnQobm9kZS5nZXRCb3VuZGluZ0JveCgpLm1pbik7XHJcblx0XHRcdHRoaXMudmlzaWJsZUJvdW5kcy5leHBhbmRCeVBvaW50KG5vZGUuZ2V0Qm91bmRpbmdCb3goKS5tYXgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXBkYXRlTWF0ZXJpYWwobWF0ZXJpYWwsIGNhbWVyYSwgcmVuZGVyZXIpXHJcblx0e1xyXG5cdFx0dmFyIG9jdHRyZWVTcGFjaW5nID0gdGhpcy5wY29HZW9tZXRyeS5zcGFjaW5nICogTWF0aC5tYXgodGhpcy5zY2FsZS54LCB0aGlzLnNjYWxlLnksIHRoaXMuc2NhbGUueik7XHJcblx0XHR2YXIgb2N0cmVlU2l6ZSA9IHRoaXMucGNvR2VvbWV0cnkuYm91bmRpbmdCb3guZ2V0U2l6ZShuZXcgVEhSRUUuVmVjdG9yMygpKS54O1xyXG5cclxuXHRcdG1hdGVyaWFsLnVuaWZvcm1zLmZvdi52YWx1ZSA9IGNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MCk7XHJcblx0XHRtYXRlcmlhbC51bmlmb3Jtcy51U2NyZWVuV2lkdGgudmFsdWUgPSByZW5kZXJlci5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cdFx0bWF0ZXJpYWwudW5pZm9ybXMudVNjcmVlbkhlaWdodC52YWx1ZSA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cdFx0bWF0ZXJpYWwudW5pZm9ybXMudU9jdHJlZVNwYWNpbmcudmFsdWUgPSBvY3R0cmVlU3BhY2luZztcclxuXHRcdG1hdGVyaWFsLnVuaWZvcm1zLm5lYXIudmFsdWUgPSBjYW1lcmEubmVhcjtcclxuXHRcdG1hdGVyaWFsLnVuaWZvcm1zLmZhci52YWx1ZSA9IGNhbWVyYS5mYXI7XHJcblx0XHRtYXRlcmlhbC51bmlmb3Jtcy5vY3RyZWVTaXplLnZhbHVlID0gb2N0cmVlU2l6ZTtcclxuXHJcblx0XHRtYXRlcmlhbC51bmlmb3Jtc05lZWRVcGRhdGUgID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGNvbXB1dGVWaXNpYmlsaXR5VGV4dHVyZURhdGEobm9kZXMsIGNhbWVyYSlcclxuXHR7XHJcblx0XHRpZihHbG9iYWwubWVhc3VyZVRpbWluZ3MpXHJcblx0XHR7XHJcblx0XHRcdHBlcmZvcm1hbmNlLm1hcmsoXCJjb21wdXRlVmlzaWJpbGl0eVRleHR1cmVEYXRhLXN0YXJ0XCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobm9kZXMubGVuZ3RoICogNCk7XHJcblx0XHR2YXIgdmlzaWJsZU5vZGVUZXh0dXJlT2Zmc2V0cyA9IG5ldyBNYXAoKTtcclxuXHJcblx0XHQvL2NvcHkgYXJyYXlcclxuXHRcdG5vZGVzID0gbm9kZXMuc2xpY2UoKTtcclxuXHJcblx0XHQvL3NvcnQgYnkgbGV2ZWwgYW5kIGluZGV4LCBlLmcuIHIsIHIwLCByMywgcjQsIHIwMSwgcjA3LCByMzAsIC4uLlxyXG5cdFx0dmFyIHNvcnQgPSBmdW5jdGlvbihhLCBiKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbmEgPSBhLmdlb21ldHJ5Tm9kZS5uYW1lO1xyXG5cdFx0XHR2YXIgbmIgPSBiLmdlb21ldHJ5Tm9kZS5uYW1lO1xyXG5cdFx0XHRpZihuYS5sZW5ndGggIT09IG5iLmxlbmd0aCkgcmV0dXJuIG5hLmxlbmd0aCAtIG5iLmxlbmd0aDtcclxuXHRcdFx0aWYobmEgPCBuYikgcmV0dXJuIC0xO1xyXG5cdFx0XHRpZihuYSA+IG5iKSByZXR1cm4gMTtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9O1xyXG5cdFx0bm9kZXMuc29ydChzb3J0KTtcclxuXHJcblx0XHQvL2NvZGUgc2FtcGxlIHRha2VuIGZyb20gdGhyZWUuanMgc3JjL21hdGgvUmF5LmpzXHJcblx0XHR2YXIgdjEgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0dmFyIGludGVyc2VjdFNwaGVyZUJhY2sgPSAocmF5LCBzcGhlcmUpID0+XHJcblx0XHR7XHJcblx0XHRcdHYxLnN1YlZlY3RvcnMoc3BoZXJlLmNlbnRlciwgcmF5Lm9yaWdpbik7XHJcblx0XHRcdHZhciB0Y2EgPSB2MS5kb3QocmF5LmRpcmVjdGlvbik7XHJcblx0XHRcdHZhciBkMiA9IHYxLmRvdCh2MSkgLSB0Y2EgKiB0Y2E7XHJcblx0XHRcdHZhciByYWRpdXMyID0gc3BoZXJlLnJhZGl1cyAqIHNwaGVyZS5yYWRpdXM7XHJcblxyXG5cdFx0XHRpZihkMiA+IHJhZGl1czIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIHRoYyA9IE1hdGguc3FydChyYWRpdXMyIC0gZDIpO1xyXG5cclxuXHRcdFx0Ly90MSA9IHNlY29uZCBpbnRlcnNlY3QgcG9pbnQgLSBleGl0IHBvaW50IG9uIGJhY2sgb2Ygc3BoZXJlXHJcblx0XHRcdHZhciB0MSA9IHRjYSArIHRoYztcclxuXHJcblx0XHRcdGlmKHQxIDwgMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdDE7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBsb2RSYW5nZXMgPSBuZXcgTWFwKCk7XHJcblx0XHR2YXIgbGVhZk5vZGVMb2RSYW5nZXMgPSBuZXcgTWFwKCk7XHJcblxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xyXG5cclxuXHRcdFx0dmlzaWJsZU5vZGVUZXh0dXJlT2Zmc2V0cy5zZXQobm9kZSwgaSk7XHJcblxyXG5cdFx0XHR2YXIgY2hpbGRyZW4gPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IDg7IGorKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBjaGlsZCA9IG5vZGUuY2hpbGRyZW5bal07XHJcblxyXG5cdFx0XHRcdGlmKGNoaWxkICYmIGNoaWxkLmNvbnN0cnVjdG9yID09PSBQb2ludENsb3VkT2N0cmVlTm9kZSAmJiBub2Rlcy5pbmNsdWRlcyhjaGlsZCwgaSkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkYXRhW2kgKiA0ICsgMF0gPSAwO1xyXG5cdFx0XHRkYXRhW2kgKiA0ICsgMV0gPSAwO1xyXG5cdFx0XHRkYXRhW2kgKiA0ICsgMl0gPSAwO1xyXG5cdFx0XHRkYXRhW2kgKiA0ICsgM10gPSBub2RlLmdldExldmVsKCk7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2pdO1xyXG5cdFx0XHRcdHZhciBpbmRleCA9IHBhcnNlSW50KGNoaWxkLmdlb21ldHJ5Tm9kZS5uYW1lLnN1YnN0cigtMSkpO1xyXG5cdFx0XHRcdGRhdGFbaSAqIDQgKyAwXSArPSBNYXRoLnBvdygyLCBpbmRleCk7XHJcblxyXG5cdFx0XHRcdGlmKGogPT09IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIHZBcnJheUluZGV4ID0gbm9kZXMuaW5kZXhPZihjaGlsZCwgaSk7XHJcblxyXG5cdFx0XHRcdFx0ZGF0YVtpICogNCArIDFdID0gKHZBcnJheUluZGV4IC0gaSkgPj4gODtcclxuXHRcdFx0XHRcdGRhdGFbaSAqIDQgKyAyXSA9ICh2QXJyYXlJbmRleCAtIGkpICUgMjU2O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9UT0RPIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvblxyXG5cdFx0XHQvL2ZvciBzb21lIHJlYXNvbiwgdGhpcyBwYXJ0IGNhbiBiZSBleHRyZW1lbHkgc2xvdyBpbiBjaHJvbWUgZHVyaW5nIGEgZGVidWdnaW5nIHNlc3Npb24sIGJ1dCBub3QgZHVyaW5nIHByb2ZpbGluZ1xyXG5cdFx0XHR2YXIgYkJveCA9IG5vZGUuZ2V0Qm91bmRpbmdCb3goKS5jbG9uZSgpO1xyXG5cdFx0XHQvL2JCb3guYXBwbHlNYXRyaXg0KG5vZGUuc2NlbmVOb2RlLm1hdHJpeFdvcmxkKTtcclxuXHRcdFx0Ly9iQm94LmFwcGx5TWF0cml4NChjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlKTtcclxuXHRcdFx0dmFyIGJTcGhlcmUgPSBiQm94LmdldEJvdW5kaW5nU3BoZXJlKG5ldyBUSFJFRS5TcGhlcmUoKSk7XHJcblx0XHRcdGJTcGhlcmUuYXBwbHlNYXRyaXg0KG5vZGUuc2NlbmVOb2RlLm1hdHJpeFdvcmxkKTtcclxuXHRcdFx0YlNwaGVyZS5hcHBseU1hdHJpeDQoY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZSk7XHJcblxyXG5cdFx0XHR2YXIgcmF5ID0gbmV3IFRIUkVFLlJheShjYW1lcmEucG9zaXRpb24sIGNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbih0aGlzLnRlbXBWZWN0b3IzKSk7XHJcblx0XHRcdHZhciBkaXN0YW5jZSA9IGludGVyc2VjdFNwaGVyZUJhY2socmF5LCBiU3BoZXJlKTtcclxuXHRcdFx0dmFyIGRpc3RhbmNlMiA9IGJTcGhlcmUuY2VudGVyLmRpc3RhbmNlVG8oY2FtZXJhLnBvc2l0aW9uKSArIGJTcGhlcmUucmFkaXVzO1xyXG5cdFx0XHRpZihkaXN0YW5jZSA9PT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3RhbmNlID0gZGlzdGFuY2UyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRpc3RhbmNlID0gTWF0aC5tYXgoZGlzdGFuY2UsIGRpc3RhbmNlMik7XHJcblxyXG5cdFx0XHRpZighbG9kUmFuZ2VzLmhhcyhub2RlLmdldExldmVsKCkpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bG9kUmFuZ2VzLnNldChub2RlLmdldExldmVsKCksIGRpc3RhbmNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgcHJldkRpc3RhbmNlID0gbG9kUmFuZ2VzLmdldChub2RlLmdldExldmVsKCkpO1xyXG5cdFx0XHRcdHZhciBuZXdEaXN0YW5jZSA9IE1hdGgubWF4KHByZXZEaXN0YW5jZSwgZGlzdGFuY2UpO1xyXG5cdFx0XHRcdGxvZFJhbmdlcy5zZXQobm9kZS5nZXRMZXZlbCgpLCBuZXdEaXN0YW5jZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCFub2RlLmdlb21ldHJ5Tm9kZS5oYXNDaGlsZHJlbilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciB2YWx1ZSA9IHtcclxuXHRcdFx0XHRcdGRpc3RhbmNlOiBkaXN0YW5jZSxcclxuXHRcdFx0XHRcdGk6IGlcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGxlYWZOb2RlTG9kUmFuZ2VzLnNldChub2RlLCB2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3IodmFyIFtub2RlLCB2YWx1ZV0gb2YgbGVhZk5vZGVMb2RSYW5nZXMpXHJcblx0XHR7XHJcblx0XHRcdHZhciBsZXZlbCA9IG5vZGUuZ2V0TGV2ZWwoKTtcclxuXHRcdFx0dmFyIGRpc3RhbmNlID0gdmFsdWUuZGlzdGFuY2U7XHJcblx0XHRcdHZhciBpID0gdmFsdWUuaTtcclxuXHJcblx0XHRcdGlmKGxldmVsIDwgNClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcih2YXIgW2xvZCwgcmFuZ2VdIG9mIGxvZFJhbmdlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKGRpc3RhbmNlIDwgcmFuZ2UgKiAxLjIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZGF0YVtpICogNCArIDNdID0gbG9kO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKEdsb2JhbC5tZWFzdXJlVGltaW5ncylcclxuXHRcdHtcclxuXHRcdFx0cGVyZm9ybWFuY2UubWFyayhcImNvbXB1dGVWaXNpYmlsaXR5VGV4dHVyZURhdGEtZW5kXCIpO1xyXG5cdFx0XHRwZXJmb3JtYW5jZS5tZWFzdXJlKFwicmVuZGVyLmNvbXB1dGVWaXNpYmlsaXR5VGV4dHVyZURhdGFcIiwgXCJjb21wdXRlVmlzaWJpbGl0eVRleHR1cmVEYXRhLXN0YXJ0XCIsIFwiY29tcHV0ZVZpc2liaWxpdHlUZXh0dXJlRGF0YS1lbmRcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0b2Zmc2V0czogdmlzaWJsZU5vZGVUZXh0dXJlT2Zmc2V0c1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdG5vZGVJbnRlcnNlY3RzUHJvZmlsZShub2RlLCBwcm9maWxlKVxyXG5cdHtcclxuXHRcdHZhciBiYldvcmxkID0gbm9kZS5ib3VuZGluZ0JveC5jbG9uZSgpLmFwcGx5TWF0cml4NCh0aGlzLm1hdHJpeFdvcmxkKTtcclxuXHRcdHZhciBic1dvcmxkID0gYmJXb3JsZC5nZXRCb3VuZGluZ1NwaGVyZShuZXcgVEhSRUUuU3BoZXJlKCkpO1xyXG5cclxuXHRcdHZhciBpbnRlcnNlY3RzID0gZmFsc2U7XHJcblxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHByb2ZpbGUucG9pbnRzLmxlbmd0aCAtIDE7IGkrKylcclxuXHRcdHtcclxuXHJcblx0XHRcdHZhciBzdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IzKHByb2ZpbGUucG9pbnRzW2kgKyAwXS54LCBwcm9maWxlLnBvaW50c1tpICsgMF0ueSwgYnNXb3JsZC5jZW50ZXIueik7XHJcblx0XHRcdHZhciBlbmQgPSBuZXcgVEhSRUUuVmVjdG9yMyhwcm9maWxlLnBvaW50c1tpICsgMV0ueCwgcHJvZmlsZS5wb2ludHNbaSArIDFdLnksIGJzV29ybGQuY2VudGVyLnopO1xyXG5cclxuXHRcdFx0dmFyIGNsb3Nlc3QgPSBuZXcgVEhSRUUuTGluZTMoc3RhcnQsIGVuZCkuY2xvc2VzdFBvaW50VG9Qb2ludChic1dvcmxkLmNlbnRlciwgdHJ1ZSk7XHJcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNsb3Nlc3QuZGlzdGFuY2VUbyhic1dvcmxkLmNlbnRlcik7XHJcblxyXG5cdFx0XHRpbnRlcnNlY3RzID0gaW50ZXJzZWN0cyB8fCAoZGlzdGFuY2UgPCAoYnNXb3JsZC5yYWRpdXMgKyBwcm9maWxlLndpZHRoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGludGVyc2VjdHM7XHJcblx0fVxyXG5cclxuXHRub2Rlc09uUmF5KG5vZGVzLCByYXkpXHJcblx0e1xyXG5cdFx0dmFyIG5vZGVzT25SYXkgPSBbXTtcclxuXHJcblx0XHR2YXIgX3JheSA9IHJheS5jbG9uZSgpO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xyXG5cdFx0XHQvL3ZhciBpbnZlcnNlV29ybGQgPSBuZXcgVEhSRUUuTWF0cml4NCgpLmdldEludmVyc2Uobm9kZS5tYXRyaXhXb3JsZCk7XHJcblx0XHRcdC8vdmFyIHNwaGVyZSA9IG5vZGUuZ2V0Qm91bmRpbmdTcGhlcmUobmV3IFRIUkVFLlNwaGVyZSgpKS5jbG9uZSgpLmFwcGx5TWF0cml4NChub2RlLnNjZW5lTm9kZS5tYXRyaXhXb3JsZCk7XHJcblx0XHRcdHZhciBzcGhlcmUgPSBub2RlLmdldEJvdW5kaW5nU3BoZXJlKG5ldyBUSFJFRS5TcGhlcmUoKSkuY2xvbmUoKS5hcHBseU1hdHJpeDQodGhpcy5tYXRyaXhXb3JsZCk7XHJcblxyXG5cdFx0XHRpZihfcmF5LmludGVyc2VjdHNTcGhlcmUoc3BoZXJlKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5vZGVzT25SYXkucHVzaChub2RlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBub2Rlc09uUmF5O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTWF0cml4V29ybGQoZm9yY2UpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5tYXRyaXhBdXRvVXBkYXRlID09PSB0cnVlKSB0aGlzLnVwZGF0ZU1hdHJpeCgpO1xyXG5cclxuXHRcdGlmKHRoaXMubWF0cml4V29ybGROZWVkc1VwZGF0ZSA9PT0gdHJ1ZSB8fCBmb3JjZSA9PT0gdHJ1ZSlcclxuXHRcdHtcclxuXHRcdFx0aWYoIXRoaXMucGFyZW50KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5tYXRyaXhXb3JsZC5jb3B5KHRoaXMubWF0cml4KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLm1hdHJpeFdvcmxkLm11bHRpcGx5TWF0cmljZXModGhpcy5wYXJlbnQubWF0cml4V29ybGQsIHRoaXMubWF0cml4KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5tYXRyaXhXb3JsZE5lZWRzVXBkYXRlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRmb3JjZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoaWRlRGVzY2VuZGFudHMob2JqZWN0KVxyXG5cdHtcclxuXHRcdHZhciBzdGFjayA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG9iamVjdC5jaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0dmFyIGNoaWxkID0gb2JqZWN0LmNoaWxkcmVuW2ldO1xyXG5cdFx0XHRpZihjaGlsZC52aXNpYmxlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3RhY2sucHVzaChjaGlsZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR3aGlsZShzdGFjay5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgb2JqZWN0ID0gc3RhY2suc2hpZnQoKTtcclxuXHJcblx0XHRcdG9iamVjdC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgb2JqZWN0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIGNoaWxkID0gb2JqZWN0LmNoaWxkcmVuW2ldO1xyXG5cdFx0XHRcdGlmKGNoaWxkLnZpc2libGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3RhY2sucHVzaChjaGlsZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtb3ZlVG9PcmlnaW4oKVxyXG5cdHtcclxuXHRcdHRoaXMucG9zaXRpb24uc2V0KDAsIDAsIDApO1xyXG5cdFx0dGhpcy51cGRhdGVNYXRyaXhXb3JsZCh0cnVlKTtcclxuXHRcdHZhciBib3ggPSB0aGlzLmJvdW5kaW5nQm94O1xyXG5cdFx0dmFyIHRyYW5zZm9ybSA9IHRoaXMubWF0cml4V29ybGQ7XHJcblx0XHR2YXIgdEJveCA9IEhlbHBlclV0aWxzLmNvbXB1dGVUcmFuc2Zvcm1lZEJvdW5kaW5nQm94KGJveCwgdHJhbnNmb3JtKTtcclxuXHJcblx0XHR0aGlzLnBvc2l0aW9uLnNldCgwLCAwLCAwKS5zdWIodEJveC5nZXRDZW50ZXIobmV3IFRIUkVFLlZlY3RvcjMoKSkpO1xyXG5cdH07XHJcblxyXG5cdG1vdmVUb0dyb3VuZFBsYW5lKClcclxuXHR7XHJcblx0XHR0aGlzLnVwZGF0ZU1hdHJpeFdvcmxkKHRydWUpO1xyXG5cdFx0dmFyIGJveCA9IHRoaXMuYm91bmRpbmdCb3g7XHJcblx0XHR2YXIgdHJhbnNmb3JtID0gdGhpcy5tYXRyaXhXb3JsZDtcclxuXHRcdHZhciB0Qm94ID0gSGVscGVyVXRpbHMuY29tcHV0ZVRyYW5zZm9ybWVkQm91bmRpbmdCb3goYm94LCB0cmFuc2Zvcm0pO1xyXG5cdFx0dGhpcy5wb3NpdGlvbi55ICs9IC10Qm94Lm1pbi55O1xyXG5cdH07XHJcblxyXG5cdGdldEJvdW5kaW5nQm94V29ybGQoKVxyXG5cdHtcclxuXHRcdHRoaXMudXBkYXRlTWF0cml4V29ybGQodHJ1ZSk7XHJcblx0XHR2YXIgYm94ID0gdGhpcy5ib3VuZGluZ0JveDtcclxuXHRcdHZhciB0cmFuc2Zvcm0gPSB0aGlzLm1hdHJpeFdvcmxkO1xyXG5cdFx0dmFyIHRCb3ggPSBIZWxwZXJVdGlscy5jb21wdXRlVHJhbnNmb3JtZWRCb3VuZGluZ0JveChib3gsIHRyYW5zZm9ybSk7XHJcblxyXG5cdFx0cmV0dXJuIHRCb3g7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogcmV0dXJucyBwb2ludHMgaW5zaWRlIHRoZSBwcm9maWxlIHBvaW50c1xyXG5cdCAqXHJcblx0ICogbWF4RGVwdGg6XHRcdHNlYXJjaCBwb2ludHMgdXAgdG8gdGhlIGdpdmVuIG9jdHJlZSBkZXB0aFxyXG5cdCAqXHJcblx0ICpcclxuXHQgKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIGFycmF5IHdpdGggYWxsIHNlZ21lbnRzIG9mIHRoZSBwcm9maWxlIHBhdGhcclxuXHQgKiAgdmFyIHNlZ21lbnQgPSB7XHJcblx0ICogXHRcdHN0YXJ0OiBcdFRIUkVFLlZlY3RvcjMsXHJcblx0ICogXHRcdGVuZDogXHRUSFJFRS5WZWN0b3IzLFxyXG5cdCAqIFx0XHRwb2ludHM6IHt9XHJcblx0ICogXHRcdHByb2plY3Q6IGZ1bmN0aW9uKClcclxuXHQgKiAgfTtcclxuXHQgKlxyXG5cdCAqIFRoZSBwcm9qZWN0KCkgZnVuY3Rpb24gaW5zaWRlIGVhY2ggc2VnbWVudCBjYW4gYmUgdXNlZCB0byB0cmFuc2Zvcm1cclxuXHQgKiB0aGF0IHNlZ21lbnRzIHBvaW50IGNvb3JkaW5hdGVzIHRvIGxpbmUgdXAgYWxvbmcgdGhlIHgtYXhpcy5cclxuXHQgKlxyXG5cdCAqXHJcblx0ICovXHJcblx0Z2V0UG9pbnRzSW5Qcm9maWxlKHByb2ZpbGUsIG1heERlcHRoLCBjYWxsYmFjaylcclxuXHR7XHJcblx0XHRpZihjYWxsYmFjaylcclxuXHRcdHtcclxuXHRcdFx0Ly92YXIgcmVxdWVzdCA9IG5ldyBQb3RyZWUuUHJvZmlsZVJlcXVlc3QodGhpcywgcHJvZmlsZSwgbWF4RGVwdGgsIGNhbGxiYWNrKTtcclxuXHRcdFx0Ly90aGlzLnByb2ZpbGVSZXF1ZXN0cy5wdXNoKHJlcXVlc3QpO1xyXG5cdFx0XHQvL3JldHVybiByZXF1ZXN0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwb2ludHMgPSB7XHJcblx0XHRcdHNlZ21lbnRzOiBbXSxcclxuXHRcdFx0Ym91bmRpbmdCb3g6IG5ldyBUSFJFRS5Cb3gzKCksXHJcblx0XHRcdHByb2plY3RlZEJvdW5kaW5nQm94OiBuZXcgVEhSRUUuQm94MigpXHJcblx0XHR9O1xyXG5cclxuXHRcdC8vZXZhbHVhdGUgc2VnbWVudHNcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBwcm9maWxlLnBvaW50cy5sZW5ndGggLSAxOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciBzdGFydCA9IHByb2ZpbGUucG9pbnRzW2ldO1xyXG5cdFx0XHR2YXIgZW5kID0gcHJvZmlsZS5wb2ludHNbaSArIDFdO1xyXG5cdFx0XHR2YXIgcHMgPSB0aGlzLmdldFByb2ZpbGUoc3RhcnQsIGVuZCwgcHJvZmlsZS53aWR0aCwgbWF4RGVwdGgpO1xyXG5cclxuXHRcdFx0dmFyIHNlZ21lbnQgPSB7XHJcblx0XHRcdFx0c3RhcnQ6IHN0YXJ0LFxyXG5cdFx0XHRcdGVuZDogZW5kLFxyXG5cdFx0XHRcdHBvaW50czogcHMsXHJcblx0XHRcdFx0cHJvamVjdDogbnVsbFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cG9pbnRzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcblxyXG5cdFx0XHRwb2ludHMuYm91bmRpbmdCb3guZXhwYW5kQnlQb2ludChwcy5ib3VuZGluZ0JveC5taW4pO1xyXG5cdFx0XHRwb2ludHMuYm91bmRpbmdCb3guZXhwYW5kQnlQb2ludChwcy5ib3VuZGluZ0JveC5tYXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vYWRkIHByb2plY3Rpb24gZnVuY3Rpb25zIHRvIHRoZSBzZWdtZW50c1xyXG5cdFx0dmFyIG1pbGVhZ2UgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHBvaW50cy5zZWdtZW50cy5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlZ21lbnQgPSBwb2ludHMuc2VnbWVudHNbaV07XHJcblx0XHRcdHZhciBzdGFydCA9IHNlZ21lbnQuc3RhcnQ7XHJcblx0XHRcdHZhciBlbmQgPSBzZWdtZW50LmVuZDtcclxuXHJcblx0XHRcdHZhciBwcm9qZWN0ID0gKGZ1bmN0aW9uKF9zdGFydCwgX2VuZCwgX21pbGVhZ2UsIF9ib3VuZGluZ0JveClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBzdGFydCA9IF9zdGFydDtcclxuXHRcdFx0XHR2YXIgZW5kID0gX2VuZDtcclxuXHRcdFx0XHR2YXIgbWlsZWFnZSA9IF9taWxlYWdlO1xyXG5cdFx0XHRcdHZhciBib3VuZGluZ0JveCA9IF9ib3VuZGluZ0JveDtcclxuXHJcblx0XHRcdFx0dmFyIHhBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCk7XHJcblx0XHRcdFx0dmFyIGRpciA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuc3ViVmVjdG9ycyhlbmQsIHN0YXJ0KTtcclxuXHRcdFx0XHRkaXIueSA9IDA7XHJcblx0XHRcdFx0ZGlyLm5vcm1hbGl6ZSgpO1xyXG5cdFx0XHRcdHZhciBhbHBoYSA9IE1hdGguYWNvcyh4QXhpcy5kb3QoZGlyKSk7XHJcblx0XHRcdFx0aWYoZGlyLnogPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGFscGhhID0gLWFscGhhO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHBvc2l0aW9uKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciB0b09yaWdpbiA9IG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKC1zdGFydC54LCAtYm91bmRpbmdCb3gubWluLnksIC1zdGFydC56KTtcclxuXHRcdFx0XHRcdHZhciBhbGlnbldpdGhYID0gbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlUm90YXRpb25ZKC1hbHBoYSk7XHJcblx0XHRcdFx0XHR2YXIgYXBwbHlNaWxlYWdlID0gbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24obWlsZWFnZS54LCAwLCAwKTtcclxuXHJcblx0XHRcdFx0XHR2YXIgcG9zID0gcG9zaXRpb24uY2xvbmUoKTtcclxuXHRcdFx0XHRcdHBvcy5hcHBseU1hdHJpeDQodG9PcmlnaW4pO1xyXG5cdFx0XHRcdFx0cG9zLmFwcGx5TWF0cml4NChhbGlnbldpdGhYKTtcclxuXHRcdFx0XHRcdHBvcy5hcHBseU1hdHJpeDQoYXBwbHlNaWxlYWdlKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gcG9zO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0oc3RhcnQsIGVuZCwgbWlsZWFnZS5jbG9uZSgpLCBwb2ludHMuYm91bmRpbmdCb3guY2xvbmUoKSkpO1xyXG5cclxuXHRcdFx0c2VnbWVudC5wcm9qZWN0ID0gcHJvamVjdDtcclxuXHJcblx0XHRcdG1pbGVhZ2UueCArPSBuZXcgVEhSRUUuVmVjdG9yMyhzdGFydC54LCAwLCBzdGFydC56KS5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IzKGVuZC54LCAwLCBlbmQueikpO1xyXG5cdFx0XHRtaWxlYWdlLnkgKz0gZW5kLnkgLSBzdGFydC55O1xyXG5cdFx0fVxyXG5cclxuXHRcdHBvaW50cy5wcm9qZWN0ZWRCb3VuZGluZ0JveC5taW4ueCA9IDA7XHJcblx0XHRwb2ludHMucHJvamVjdGVkQm91bmRpbmdCb3gubWluLnkgPSBwb2ludHMuYm91bmRpbmdCb3gubWluLnk7XHJcblx0XHRwb2ludHMucHJvamVjdGVkQm91bmRpbmdCb3gubWF4LnggPSBtaWxlYWdlLng7XHJcblx0XHRwb2ludHMucHJvamVjdGVkQm91bmRpbmdCb3gubWF4LnkgPSBwb2ludHMuYm91bmRpbmdCb3gubWF4Lnk7XHJcblxyXG5cdFx0cmV0dXJuIHBvaW50cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJldHVybnMgcG9pbnRzIGluc2lkZSB0aGUgZ2l2ZW4gcHJvZmlsZSBib3VuZHMuXHJcblx0ICpcclxuXHQgKiBzdGFydDpcclxuXHQgKiBlbmQ6XHJcblx0ICogd2lkdGg6XHJcblx0ICogZGVwdGg6XHRcdHNlYXJjaCBwb2ludHMgdXAgdG8gdGhlIGdpdmVuIG9jdHJlZSBkZXB0aFxyXG5cdCAqIGNhbGxiYWNrOlx0aWYgc3BlY2lmaWVkLCBwb2ludHMgYXJlIGxvYWRlZCBiZWZvcmUgc2VhcmNoaW5nXHJcblx0ICpcclxuXHQgKlxyXG5cdCAqL1xyXG5cdGdldFByb2ZpbGUoc3RhcnQsIGVuZCwgd2lkdGgsIGRlcHRoLCBjYWxsYmFjaylcclxuXHR7XHJcblx0XHQvL3ZhciByZXF1ZXN0ID0gbmV3IFBvdHJlZS5Qcm9maWxlUmVxdWVzdChzdGFydCwgZW5kLCB3aWR0aCwgZGVwdGgsIGNhbGxiYWNrKTtcclxuXHRcdC8vdGhpcy5wcm9maWxlUmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcclxuXHR9O1xyXG5cclxuXHRnZXRWaXNpYmxlRXh0ZW50KClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy52aXNpYmxlQm91bmRzLmFwcGx5TWF0cml4NCh0aGlzLm1hdHJpeFdvcmxkKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKlxyXG5cdCAqXHJcblx0ICpcclxuXHQgKiBwYXJhbXMucGlja1dpbmRvd1NpemU6XHRMb29rIGZvciBwb2ludHMgaW5zaWRlIGEgcGl4ZWwgd2luZG93IG9mIHRoaXMgc2l6ZS5cclxuXHQgKiBcdFx0XHRcdFx0XHRcdFVzZSBvZGQgdmFsdWVzOiAxLCAzLCA1LCAuLi5cclxuXHQgKlxyXG5cdCAqXHJcblx0ICogVE9ETzogb25seSBkcmF3IHBpeGVscyB0aGF0IGFyZSBhY3R1YWxseSByZWFkIHdpdGggcmVhZFBpeGVscygpLlxyXG5cdCAqXHJcblx0ICovXHJcblx0cGljayh2aWV3ZXIsIGNhbWVyYSwgcmF5LCBwYXJhbXMgPSB7fSlcclxuXHR7XHJcblx0XHR2YXIgcmVuZGVyZXIgPSB2aWV3ZXIucmVuZGVyZXI7XHJcblx0XHR2YXIgcFJlbmRlcmVyID0gdmlld2VyLnBSZW5kZXJlcjtcclxuXHJcblx0XHRwZXJmb3JtYW5jZS5tYXJrKFwicGljay1zdGFydFwiKTtcclxuXHJcblx0XHR2YXIgZ2V0VmFsID0gKGEsIGIpID0+IGEgIT09IHVuZGVmaW5lZCA/IGEgOiBiO1xyXG5cclxuXHRcdHZhciBwaWNrV2luZG93U2l6ZSA9IGdldFZhbChwYXJhbXMucGlja1dpbmRvd1NpemUsIDE3KTtcclxuXHJcblx0XHR2YXIgc2l6ZSA9IHJlbmRlcmVyLmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcblxyXG5cdFx0dmFyIHdpZHRoID0gTWF0aC5jZWlsKGdldFZhbChwYXJhbXMud2lkdGgsIHNpemUud2lkdGgpKTtcclxuXHRcdHZhciBoZWlnaHQgPSBNYXRoLmNlaWwoZ2V0VmFsKHBhcmFtcy5oZWlnaHQsIHNpemUuaGVpZ2h0KSk7XHJcblxyXG5cdFx0dmFyIHBvaW50U2l6ZVR5cGUgPSBnZXRWYWwocGFyYW1zLnBvaW50U2l6ZVR5cGUsIHRoaXMubWF0ZXJpYWwucG9pbnRTaXplVHlwZSk7XHJcblx0XHR2YXIgcG9pbnRTaXplID0gZ2V0VmFsKHBhcmFtcy5wb2ludFNpemUsIHRoaXMubWF0ZXJpYWwuc2l6ZSk7XHJcblxyXG5cdFx0dmFyIG5vZGVzID0gdGhpcy5ub2Rlc09uUmF5KHRoaXMudmlzaWJsZU5vZGVzLCByYXkpO1xyXG5cclxuXHRcdGlmKG5vZGVzLmxlbmd0aCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIXRoaXMucGlja1N0YXRlKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcblx0XHRcdHZhciBtYXRlcmlhbCA9IG5ldyBQb2ludENsb3VkTWF0ZXJpYWwoKTtcclxuXHRcdFx0bWF0ZXJpYWwucG9pbnRDb2xvclR5cGUgPSBQb2ludENvbG9yVHlwZS5QT0lOVF9JTkRFWDtcclxuXHJcblx0XHRcdHZhciByZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoXHJcblx0XHRcdFx0MSwgMSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcclxuXHRcdFx0XHRcdG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuXHRcdFx0XHRcdGZvcm1hdDogVEhSRUUuUkdCQUZvcm1hdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMucGlja1N0YXRlID0ge1xyXG5cdFx0XHRcdHJlbmRlclRhcmdldDogcmVuZGVyVGFyZ2V0LFxyXG5cdFx0XHRcdG1hdGVyaWFsOiBtYXRlcmlhbCxcclxuXHRcdFx0XHRzY2VuZTogc2NlbmVcclxuXHRcdFx0fTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIHBpY2tTdGF0ZSA9IHRoaXMucGlja1N0YXRlO1xyXG5cdFx0dmFyIHBpY2tNYXRlcmlhbCA9IHBpY2tTdGF0ZS5tYXRlcmlhbDtcclxuXHJcblx0XHQvL1VwZGF0ZSBwaWNrIG1hdGVyaWFsXHJcblx0XHRwaWNrTWF0ZXJpYWwucG9pbnRTaXplVHlwZSA9IHBvaW50U2l6ZVR5cGU7XHJcblx0XHRwaWNrTWF0ZXJpYWwuc2hhcGUgPSB0aGlzLm1hdGVyaWFsLnNoYXBlO1xyXG5cclxuXHRcdHBpY2tNYXRlcmlhbC5zaXplID0gcG9pbnRTaXplO1xyXG5cdFx0cGlja01hdGVyaWFsLnVuaWZvcm1zLm1pblNpemUudmFsdWUgPSB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLm1pblNpemUudmFsdWU7XHJcblx0XHRwaWNrTWF0ZXJpYWwudW5pZm9ybXMubWF4U2l6ZS52YWx1ZSA9IHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubWF4U2l6ZS52YWx1ZTtcclxuXHRcdHBpY2tNYXRlcmlhbC5jbGFzc2lmaWNhdGlvbiA9IHRoaXMubWF0ZXJpYWwuY2xhc3NpZmljYXRpb247XHJcblx0XHRwaWNrTWF0ZXJpYWwuY2xpcHBpbmdQbGFuZXMgPSB0aGlzLm1hdGVyaWFsLmNsaXBwaW5nUGxhbmVzO1xyXG5cdFx0cGlja01hdGVyaWFsLmNsaXBwaW5nID0gdGhpcy5tYXRlcmlhbC5jbGlwcGluZztcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1hdGVyaWFsKHBpY2tNYXRlcmlhbCwgY2FtZXJhLCByZW5kZXJlcik7XHJcblxyXG5cdFx0cGlja1N0YXRlLnJlbmRlclRhcmdldC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdHZhciBwaXhlbFBvcyA9IG5ldyBUSFJFRS5WZWN0b3IyKHBhcmFtcy54LCBwYXJhbXMueSk7XHJcblxyXG5cdFx0dmFyIGdsID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xyXG5cdFx0Z2wuZW5hYmxlKGdsLlNDSVNTT1JfVEVTVCk7XHJcblx0XHRnbC5zY2lzc29yKHBhcnNlSW50KHBpeGVsUG9zLnggLSAocGlja1dpbmRvd1NpemUgLSAxKSAvIDIpLCBwYXJzZUludChwaXhlbFBvcy55IC0gKHBpY2tXaW5kb3dTaXplIC0gMSkgLyAyKSwgcGFyc2VJbnQocGlja1dpbmRvd1NpemUpLCBwYXJzZUludChwaWNrV2luZG93U2l6ZSkpO1xyXG5cclxuXHRcdHJlbmRlcmVyLnN0YXRlLmJ1ZmZlcnMuZGVwdGguc2V0VGVzdChwaWNrTWF0ZXJpYWwuZGVwdGhUZXN0KTtcclxuXHRcdHJlbmRlcmVyLnN0YXRlLmJ1ZmZlcnMuZGVwdGguc2V0TWFzayhwaWNrTWF0ZXJpYWwuZGVwdGhXcml0ZSk7XHJcblx0XHRyZW5kZXJlci5zdGF0ZS5zZXRCbGVuZGluZyhUSFJFRS5Ob0JsZW5kaW5nKTtcclxuXHJcblx0XHQvL1JlbmRlclxyXG5cdFx0cmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KHBpY2tTdGF0ZS5yZW5kZXJUYXJnZXQpO1xyXG5cdFx0Z2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcclxuXHRcdHJlbmRlcmVyLmNsZWFyVGFyZ2V0KHBpY2tTdGF0ZS5yZW5kZXJUYXJnZXQsIHRydWUsIHRydWUsIHRydWUpO1xyXG5cclxuXHRcdHZhciB0bXAgPSB0aGlzLm1hdGVyaWFsO1xyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IHBpY2tNYXRlcmlhbDtcclxuXHJcblx0XHRwUmVuZGVyZXIucmVuZGVyT2N0cmVlKHRoaXMsIG5vZGVzLCBjYW1lcmEsIHBpY2tTdGF0ZS5yZW5kZXJUYXJnZXQpO1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwgPSB0bXA7XHJcblxyXG5cdFx0dmFyIGNsYW1wID0gKG51bWJlciwgbWluLCBtYXgpID0+IE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtYmVyKSwgbWF4KTtcclxuXHJcblx0XHR2YXIgeCA9IHBhcnNlSW50KGNsYW1wKHBpeGVsUG9zLnggLSAocGlja1dpbmRvd1NpemUgLSAxKSAvIDIsIDAsIHdpZHRoKSk7XHJcblx0XHR2YXIgeSA9IHBhcnNlSW50KGNsYW1wKHBpeGVsUG9zLnkgLSAocGlja1dpbmRvd1NpemUgLSAxKSAvIDIsIDAsIGhlaWdodCkpO1xyXG5cdFx0dmFyIHcgPSBwYXJzZUludChNYXRoLm1pbih4ICsgcGlja1dpbmRvd1NpemUsIHdpZHRoKSAtIHgpO1xyXG5cdFx0dmFyIGggPSBwYXJzZUludChNYXRoLm1pbih5ICsgcGlja1dpbmRvd1NpemUsIGhlaWdodCkgLSB5KTtcclxuXHJcblx0XHR2YXIgcGl4ZWxDb3VudCA9IHcgKiBoO1xyXG5cdFx0dmFyIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDQgKiBwaXhlbENvdW50KTtcclxuXHJcblx0XHRnbC5yZWFkUGl4ZWxzKHgsIHksIHBpY2tXaW5kb3dTaXplLCBwaWNrV2luZG93U2l6ZSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgYnVmZmVyKTtcclxuXHJcblx0XHRyZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQobnVsbCk7XHJcblx0XHRyZW5kZXJlci5yZXNldEdMU3RhdGUoKTtcclxuXHRcdHJlbmRlcmVyLnNldFNjaXNzb3JUZXN0KGZhbHNlKTtcclxuXHRcdGdsLmRpc2FibGUoZ2wuU0NJU1NPUl9URVNUKTtcclxuXHJcblx0XHR2YXIgcGl4ZWxzID0gYnVmZmVyO1xyXG5cdFx0dmFyIGlidWZmZXIgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyLmJ1ZmZlcik7XHJcblxyXG5cdFx0Ly9maW5kIGNsb3Nlc3QgaGl0IGluc2lkZSBwaXhlbFdpbmRvdyBib3VuZGFyaWVzXHJcblx0XHR2YXIgbWluID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuXHRcdHZhciBoaXRzID0gW107XHJcblxyXG5cdFx0Zm9yKHZhciB1ID0gMDsgdSA8IHBpY2tXaW5kb3dTaXplOyB1KyspXHJcblx0XHR7XHJcblx0XHRcdGZvcih2YXIgdiA9IDA7IHYgPCBwaWNrV2luZG93U2l6ZTsgdisrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIG9mZnNldCA9ICh1ICsgdiAqIHBpY2tXaW5kb3dTaXplKTtcclxuXHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnBvdyh1IC0gKHBpY2tXaW5kb3dTaXplIC0gMSkgLyAyLCAyKSArIE1hdGgucG93KHYgLSAocGlja1dpbmRvd1NpemUgLSAxKSAvIDIsIDIpO1xyXG5cclxuXHRcdFx0XHR2YXIgcGNJbmRleCA9IHBpeGVsc1s0ICogb2Zmc2V0ICsgM107XHJcblx0XHRcdFx0cGl4ZWxzWzQgKiBvZmZzZXQgKyAzXSA9IDA7XHJcblx0XHRcdFx0dmFyIHBJbmRleCA9IGlidWZmZXJbb2Zmc2V0XTtcclxuXHJcblx0XHRcdFx0aWYoIShwY0luZGV4ID09PSAwICYmIHBJbmRleCA9PT0gMCkgJiYgKHBjSW5kZXggIT09IHVuZGVmaW5lZCkgJiYgKHBJbmRleCAhPT0gdW5kZWZpbmVkKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgaGl0ID0ge1xyXG5cdFx0XHRcdFx0XHRwSW5kZXg6IHBJbmRleCxcclxuXHRcdFx0XHRcdFx0cGNJbmRleDogcGNJbmRleCxcclxuXHRcdFx0XHRcdFx0ZGlzdGFuY2VUb0NlbnRlcjogZGlzdGFuY2VcclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0aWYocGFyYW1zLmFsbClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aGl0cy5wdXNoKGhpdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmKGhpdHMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlmKGRpc3RhbmNlIDwgaGl0c1swXS5kaXN0YW5jZVRvQ2VudGVyKVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGhpdHNbMF0gPSBoaXQ7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGhpdHMucHVzaChoaXQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKHZhciBoaXQgb2YgaGl0cylcclxuXHRcdHtcclxuXHRcdFx0dmFyIHBvaW50ID0ge307XHJcblxyXG5cdFx0XHRpZighbm9kZXNbaGl0LnBjSW5kZXhdKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBub2RlID0gbm9kZXNbaGl0LnBjSW5kZXhdO1xyXG5cdFx0XHR2YXIgcGMgPSBub2RlLnNjZW5lTm9kZTtcclxuXHRcdFx0dmFyIGdlb21ldHJ5ID0gbm9kZS5nZW9tZXRyeU5vZGUuZ2VvbWV0cnk7XHJcblxyXG5cdFx0XHRmb3IodmFyIGF0dHJpYnV0ZU5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xyXG5cclxuXHRcdFx0XHRpZihhdHRyaWJ1dGVOYW1lID09PSBcInBvc2l0aW9uXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIHggPSBhdHRyaWJ1dGUuYXJyYXlbMyAqIGhpdC5wSW5kZXggKyAwXTtcclxuXHRcdFx0XHRcdHZhciB5ID0gYXR0cmlidXRlLmFycmF5WzMgKiBoaXQucEluZGV4ICsgMV07XHJcblx0XHRcdFx0XHR2YXIgeiA9IGF0dHJpYnV0ZS5hcnJheVszICogaGl0LnBJbmRleCArIDJdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBwb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKHgsIHksIHopO1xyXG5cdFx0XHRcdFx0cG9zaXRpb24uYXBwbHlNYXRyaXg0KHBjLm1hdHJpeFdvcmxkKTtcclxuXHJcblx0XHRcdFx0XHRwb2ludFthdHRyaWJ1dGVOYW1lXSA9IHBvc2l0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LypcclxuXHRcdFx0XHRlbHNlIGlmKGF0dHJpYnV0ZU5hbWUgPT09IFwiaW5kaWNlc1wiKVxyXG5cdFx0XHRcdHtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvL2lmICh2YWx1ZXMuaXRlbVNpemUgPT09IDEpIHtcclxuXHRcdFx0XHRcdC8vXHRwb2ludFthdHRyaWJ1dGUubmFtZV0gPSB2YWx1ZXMuYXJyYXlbaGl0LnBJbmRleF07XHJcblx0XHRcdFx0XHQvL30gZWxzZSB7XHJcblx0XHRcdFx0XHQvL1x0dmFyIHZhbHVlID0gW107XHJcblx0XHRcdFx0XHQvL1x0Zm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZXMuaXRlbVNpemU7IGorKykge1xyXG5cdFx0XHRcdFx0Ly9cdFx0dmFsdWUucHVzaCh2YWx1ZXMuYXJyYXlbdmFsdWVzLml0ZW1TaXplICogaGl0LnBJbmRleCArIGpdKTtcclxuXHRcdFx0XHRcdC8vXHR9XHJcblx0XHRcdFx0XHQvL1x0cG9pbnRbYXR0cmlidXRlLm5hbWVdID0gdmFsdWU7XHJcblx0XHRcdFx0XHQvL31cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ki9cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGhpdC5wb2ludCA9IHBvaW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdHBlcmZvcm1hbmNlLm1hcmsoXCJwaWNrLWVuZFwiKTtcclxuXHRcdHBlcmZvcm1hbmNlLm1lYXN1cmUoXCJwaWNrXCIsIFwicGljay1zdGFydFwiLCBcInBpY2stZW5kXCIpO1xyXG5cclxuXHRcdGlmKHBhcmFtcy5hbGwpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiBoaXRzLm1hcChoaXQgPT4gaGl0LnBvaW50KTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYoaGl0cy5sZW5ndGggPT09IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gaGl0c1swXS5wb2ludDtcclxuXHRcdFx0XHQvL3ZhciBzb3J0ZWQgPSBoaXRzLnNvcnQoKGEsIGIpID0+IGEuZGlzdGFuY2VUb0NlbnRlciAtIGIuZGlzdGFuY2VUb0NlbnRlcik7XHJcblx0XHRcdFx0Ly9yZXR1cm4gc29ydGVkWzBdLnBvaW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdCpnZXRGaXR0ZWRCb3hHZW4oYm94Tm9kZSlcclxuXHR7XHJcblx0XHR2YXIgc2hyaW5rZWRMb2NhbEJvdW5kcyA9IG5ldyBUSFJFRS5Cb3gzKCk7XHJcblx0XHR2YXIgd29ybGRUb0JveCA9IG5ldyBUSFJFRS5NYXRyaXg0KCkuZ2V0SW52ZXJzZShib3hOb2RlLm1hdHJpeFdvcmxkKTtcclxuXHJcblx0XHRmb3IodmFyIG5vZGUgb2YgdGhpcy52aXNpYmxlTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdGlmKCFub2RlLnNjZW5lTm9kZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgYnVmZmVyID0gbm9kZS5nZW9tZXRyeU5vZGUuYnVmZmVyO1xyXG5cclxuXHRcdFx0dmFyIHBvc09mZnNldCA9IGJ1ZmZlci5vZmZzZXQoXCJwb3NpdGlvblwiKTtcclxuXHRcdFx0dmFyIHN0cmlkZSA9IGJ1ZmZlci5zdHJpZGU7XHJcblx0XHRcdHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlci5kYXRhKTtcclxuXHJcblx0XHRcdHZhciBvYmplY3RUb0JveCA9IG5ldyBUSFJFRS5NYXRyaXg0KCkubXVsdGlwbHlNYXRyaWNlcyh3b3JsZFRvQm94LCBub2RlLnNjZW5lTm9kZS5tYXRyaXhXb3JsZCk7XHJcblxyXG5cdFx0XHR2YXIgcG9zID0gbmV3IFRIUkVFLlZlY3RvcjQoKTtcclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGJ1ZmZlci5udW1FbGVtZW50czsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHggPSB2aWV3LmdldEZsb2F0MzIoaSAqIHN0cmlkZSArIHBvc09mZnNldCArIDAsIHRydWUpO1xyXG5cdFx0XHRcdHZhciB5ID0gdmlldy5nZXRGbG9hdDMyKGkgKiBzdHJpZGUgKyBwb3NPZmZzZXQgKyA0LCB0cnVlKTtcclxuXHRcdFx0XHR2YXIgeiA9IHZpZXcuZ2V0RmxvYXQzMihpICogc3RyaWRlICsgcG9zT2Zmc2V0ICsgOCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdHBvcy5zZXQoeCwgeSwgeiwgMSk7XHJcblx0XHRcdFx0cG9zLmFwcGx5TWF0cml4NChvYmplY3RUb0JveCk7XHJcblxyXG5cdFx0XHRcdGlmKC0wLjUgPCBwb3MueCAmJiBwb3MueCA8IDAuNSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZigtMC41IDwgcG9zLnkgJiYgcG9zLnkgPCAwLjUpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmKC0wLjUgPCBwb3MueiAmJiBwb3MueiA8IDAuNSlcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHNocmlua2VkTG9jYWxCb3VuZHMuZXhwYW5kQnlQb2ludChwb3MpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR5aWVsZDtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0dmFyIGZpdHRlZFBvc2l0aW9uID0gc2hyaW5rZWRMb2NhbEJvdW5kcy5nZXRDZW50ZXIobmV3IFRIUkVFLlZlY3RvcjMoKSkuYXBwbHlNYXRyaXg0KGJveE5vZGUubWF0cml4V29ybGQpO1xyXG5cclxuXHRcdHZhciBmaXR0ZWQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdGZpdHRlZC5wb3NpdGlvbi5jb3B5KGZpdHRlZFBvc2l0aW9uKTtcclxuXHRcdGZpdHRlZC5zY2FsZS5jb3B5KGJveE5vZGUuc2NhbGUpO1xyXG5cdFx0Zml0dGVkLnJvdGF0aW9uLmNvcHkoYm94Tm9kZS5yb3RhdGlvbik7XHJcblxyXG5cdFx0dmFyIGRzID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5zdWJWZWN0b3JzKHNocmlua2VkTG9jYWxCb3VuZHMubWF4LCBzaHJpbmtlZExvY2FsQm91bmRzLm1pbik7XHJcblx0XHRmaXR0ZWQuc2NhbGUubXVsdGlwbHkoZHMpO1xyXG5cclxuXHRcdHlpZWxkIGZpdHRlZDtcclxuXHR9XHJcblxyXG5cdGdldEZpdHRlZEJveChib3hOb2RlLCBtYXhMZXZlbCA9IEluZmluaXR5KVxyXG5cdHtcclxuXHRcdHZhciBzaHJpbmtlZExvY2FsQm91bmRzID0gbmV3IFRIUkVFLkJveDMoKTtcclxuXHRcdHZhciB3b3JsZFRvQm94ID0gbmV3IFRIUkVFLk1hdHJpeDQoKS5nZXRJbnZlcnNlKGJveE5vZGUubWF0cml4V29ybGQpO1xyXG5cclxuXHRcdGZvcih2YXIgbm9kZSBvZiB0aGlzLnZpc2libGVOb2RlcylcclxuXHRcdHtcclxuXHRcdFx0aWYoIW5vZGUuc2NlbmVOb2RlIHx8IG5vZGUuZ2V0TGV2ZWwoKSA+IG1heExldmVsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBidWZmZXIgPSBub2RlLmdlb21ldHJ5Tm9kZS5idWZmZXI7XHJcblxyXG5cdFx0XHR2YXIgcG9zT2Zmc2V0ID0gYnVmZmVyLm9mZnNldChcInBvc2l0aW9uXCIpO1xyXG5cdFx0XHR2YXIgc3RyaWRlID0gYnVmZmVyLnN0cmlkZTtcclxuXHRcdFx0dmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLmRhdGEpO1xyXG5cclxuXHRcdFx0dmFyIG9iamVjdFRvQm94ID0gbmV3IFRIUkVFLk1hdHJpeDQoKS5tdWx0aXBseU1hdHJpY2VzKHdvcmxkVG9Cb3gsIG5vZGUuc2NlbmVOb2RlLm1hdHJpeFdvcmxkKTtcclxuXHJcblx0XHRcdHZhciBwb3MgPSBuZXcgVEhSRUUuVmVjdG9yNCgpO1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYnVmZmVyLm51bUVsZW1lbnRzOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgeCA9IHZpZXcuZ2V0RmxvYXQzMihpICogc3RyaWRlICsgcG9zT2Zmc2V0ICsgMCwgdHJ1ZSk7XHJcblx0XHRcdFx0dmFyIHkgPSB2aWV3LmdldEZsb2F0MzIoaSAqIHN0cmlkZSArIHBvc09mZnNldCArIDQsIHRydWUpO1xyXG5cdFx0XHRcdHZhciB6ID0gdmlldy5nZXRGbG9hdDMyKGkgKiBzdHJpZGUgKyBwb3NPZmZzZXQgKyA4LCB0cnVlKTtcclxuXHJcblx0XHRcdFx0cG9zLnNldCh4LCB5LCB6LCAxKTtcclxuXHRcdFx0XHRwb3MuYXBwbHlNYXRyaXg0KG9iamVjdFRvQm94KTtcclxuXHJcblx0XHRcdFx0aWYoLTAuNSA8IHBvcy54ICYmIHBvcy54IDwgMC41KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmKC0wLjUgPCBwb3MueSAmJiBwb3MueSA8IDAuNSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYoLTAuNSA8IHBvcy56ICYmIHBvcy56IDwgMC41KVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0c2hyaW5rZWRMb2NhbEJvdW5kcy5leHBhbmRCeVBvaW50KHBvcyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZml0dGVkUG9zaXRpb24gPSBzaHJpbmtlZExvY2FsQm91bmRzLmdldENlbnRlcihuZXcgVEhSRUUuVmVjdG9yMygpKS5hcHBseU1hdHJpeDQoYm94Tm9kZS5tYXRyaXhXb3JsZCk7XHJcblxyXG5cdFx0dmFyIGZpdHRlZCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cdFx0Zml0dGVkLnBvc2l0aW9uLmNvcHkoZml0dGVkUG9zaXRpb24pO1xyXG5cdFx0Zml0dGVkLnNjYWxlLmNvcHkoYm94Tm9kZS5zY2FsZSk7XHJcblx0XHRmaXR0ZWQucm90YXRpb24uY29weShib3hOb2RlLnJvdGF0aW9uKTtcclxuXHJcblx0XHR2YXIgZHMgPSBuZXcgVEhSRUUuVmVjdG9yMygpLnN1YlZlY3RvcnMoc2hyaW5rZWRMb2NhbEJvdW5kcy5tYXgsIHNocmlua2VkTG9jYWxCb3VuZHMubWluKTtcclxuXHRcdGZpdHRlZC5zY2FsZS5tdWx0aXBseShkcyk7XHJcblxyXG5cdFx0cmV0dXJuIGZpdHRlZDtcclxuXHR9XHJcblxyXG5cdGdldCBwcm9ncmVzcygpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudmlzaWJsZU5vZGVzLmxlbmd0aCAvIHRoaXMudmlzaWJsZUdlb21ldHJ5Lmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdGZpbmQobmFtZSlcclxuXHR7XHJcblx0XHR2YXIgbm9kZSA9IG51bGw7XHJcblx0XHRmb3IodmFyIGNoYXIgb2YgbmFtZSlcclxuXHRcdHtcclxuXHRcdFx0aWYoY2hhciA9PT0gXCJyXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRub2RlID0gdGhpcy5yb290O1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5vZGUgPSBub2RlLmNoaWxkcmVuW2NoYXJdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5vZGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtQb2ludENsb3VkT2N0cmVlLCBQb2ludENsb3VkT2N0cmVlTm9kZX07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuaW1wb3J0IHtERU19IGZyb20gXCIuL0RFTS5qc1wiO1xyXG5cclxuY2xhc3MgUG9pbnRDbG91ZFRyZWVOb2RlXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0dGhpcy5uZWVkc1RyYW5zZm9ybVVwZGF0ZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXRDaGlsZHJlbigpe31cclxuXHJcblx0Z2V0Qm91bmRpbmdCb3goKXt9XHJcblxyXG5cdGlzTG9hZGVkKCl7fVxyXG5cclxuXHRpc0dlb21ldHJ5Tm9kZSgpe31cclxuXHJcblx0aXNUcmVlTm9kZSgpe31cclxuXHJcblx0Z2V0TGV2ZWwoKXt9XHJcblxyXG5cdGdldEJvdW5kaW5nU3BoZXJlKCl7fVxyXG59O1xyXG5cclxuY2xhc3MgUG9pbnRDbG91ZFRyZWUgZXh0ZW5kcyBUSFJFRS5PYmplY3QzRFxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5kZW0gPSBuZXcgREVNKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZWQoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnJvb3QgIT09IG51bGw7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtQb2ludENsb3VkVHJlZSwgUG9pbnRDbG91ZFRyZWVOb2RlfTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5pbXBvcnQge1BvaW50QXR0cmlidXRlcywgUG9pbnRBdHRyaWJ1dGV9IGZyb20gXCIuLi8uLi9Qb2ludEF0dHJpYnV0ZXMuanNcIjtcclxuaW1wb3J0IHtHbG9iYWx9IGZyb20gXCIuLi8uLi9HbG9iYWwuanNcIjtcclxuaW1wb3J0IHtYSFJGYWN0b3J5fSBmcm9tIFwiLi4vLi4vWEhSRmFjdG9yeS5qc1wiO1xyXG5cclxuY2xhc3MgUG9pbnRDbG91ZEFyZW5hNERHZW9tZXRyeU5vZGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHR0aGlzLmxlZnQgPSBudWxsO1xyXG5cdFx0dGhpcy5yaWdodCA9IG51bGw7XHJcblx0XHR0aGlzLmJvdW5kaW5nQm94ID0gbnVsbDtcclxuXHRcdHRoaXMubnVtYmVyID0gbnVsbDtcclxuXHRcdHRoaXMucGNvR2VvbWV0cnkgPSBudWxsO1xyXG5cdFx0dGhpcy5sb2FkZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMubnVtUG9pbnRzID0gMDtcclxuXHRcdHRoaXMubGV2ZWwgPSAwO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0dGhpcy5vbmVUaW1lRGlzcG9zZUhhbmRsZXJzID0gW107XHJcblx0fVxyXG5cclxuXHRpc0dlb21ldHJ5Tm9kZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRpc1RyZWVOb2RlKClcclxuXHR7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc0xvYWRlZCgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubG9hZGVkO1xyXG5cdH1cclxuXHJcblx0Z2V0Qm91bmRpbmdTcGhlcmUoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmJvdW5kaW5nU3BoZXJlO1xyXG5cdH1cclxuXHJcblx0Z2V0Qm91bmRpbmdCb3goKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmJvdW5kaW5nQm94O1xyXG5cdH1cclxuXHJcblx0Z2V0Q2hpbGRyZW4oKVxyXG5cdHtcclxuXHRcdHZhciBjaGlsZHJlbiA9IFtdO1xyXG5cclxuXHRcdGlmKHRoaXMubGVmdClcclxuXHRcdHtcclxuXHRcdFx0Y2hpbGRyZW4ucHVzaCh0aGlzLmxlZnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMucmlnaHQpXHJcblx0XHR7XHJcblx0XHRcdGNoaWxkcmVuLnB1c2godGhpcy5yaWdodCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xyXG5cdH1cclxuXHJcblx0Z2V0TGV2ZWwoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmxldmVsO1xyXG5cdH1cclxuXHJcblx0bG9hZCgpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5sb2FkZWQgfHwgdGhpcy5sb2FkaW5nKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoR2xvYmFsLm51bU5vZGVzTG9hZGluZyA+PSBHbG9iYWwubWF4Tm9kZXNMb2FkaW5nKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0XHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nKys7XHJcblxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIHVybCA9IHRoaXMucGNvR2VvbWV0cnkudXJsICsgXCI/bm9kZT1cIiArIHRoaXMubnVtYmVyO1xyXG5cdFx0XHJcblx0XHR2YXIgeGhyID0gWEhSRmFjdG9yeS5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L3BsYWluXCIpO1xyXG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcblx0XHR4aHIub25sb2FkID0gZnVuY3Rpb24oKVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBidWZmZXIgPSB4aHIucmVzcG9uc2U7XHJcblx0XHRcdFx0dmFyIHNvdXJjZVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcclxuXHRcdFx0XHR2YXIgbnVtUG9pbnRzID0gYnVmZmVyLmJ5dGVMZW5ndGggLyAxNztcclxuXHRcdFx0XHR2YXIgYnl0ZXNQZXJQb2ludCA9IDI4O1xyXG5cclxuXHRcdFx0XHR2YXIgZGF0YSA9IG5ldyBBcnJheUJ1ZmZlcihudW1Qb2ludHMgKiBieXRlc1BlclBvaW50KTtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0VmlldyA9IG5ldyBEYXRhVmlldyhkYXRhKTtcclxuXHJcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBbXHJcblx0XHRcdFx0XHRQb2ludEF0dHJpYnV0ZS5QT1NJVElPTl9DQVJURVNJQU4sXHJcblx0XHRcdFx0XHRQb2ludEF0dHJpYnV0ZS5SR0JBX1BBQ0tFRCxcclxuXHRcdFx0XHRcdFBvaW50QXR0cmlidXRlLklOVEVOU0lUWSxcclxuXHRcdFx0XHRcdFBvaW50QXR0cmlidXRlLkNMQVNTSUZJQ0FUSU9OLFxyXG5cdFx0XHRcdF07XHJcblxyXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkobnVtUG9pbnRzICogMyk7XHJcblx0XHRcdFx0dmFyIGNvbG9yID0gbmV3IFVpbnQ4QXJyYXkobnVtUG9pbnRzICogNCk7XHJcblx0XHRcdFx0dmFyIGludGVuc2l0aWVzID0gbmV3IEZsb2F0MzJBcnJheShudW1Qb2ludHMpO1xyXG5cdFx0XHRcdHZhciBjbGFzc2lmaWNhdGlvbnMgPSBuZXcgVWludDhBcnJheShudW1Qb2ludHMpO1xyXG5cdFx0XHRcdHZhciBpbmRpY2VzID0gbmV3IEFycmF5QnVmZmVyKG51bVBvaW50cyAqIDQpO1xyXG5cdFx0XHRcdHZhciB1MzJJbmRpY2VzID0gbmV3IFVpbnQzMkFycmF5KGluZGljZXMpO1xyXG5cclxuXHRcdFx0XHR2YXIgdGlnaHRCb3VuZGluZ0JveCA9IG5ldyBUSFJFRS5Cb3gzKCk7XHJcblxyXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgeCA9IHNvdXJjZVZpZXcuZ2V0RmxvYXQzMihpICogMTcgKyAwLCB0cnVlKSArIHNlbGYuYm91bmRpbmdCb3gubWluLng7XHJcblx0XHRcdFx0XHR2YXIgeSA9IHNvdXJjZVZpZXcuZ2V0RmxvYXQzMihpICogMTcgKyA0LCB0cnVlKSArIHNlbGYuYm91bmRpbmdCb3gubWluLnk7XHJcblx0XHRcdFx0XHR2YXIgeiA9IHNvdXJjZVZpZXcuZ2V0RmxvYXQzMihpICogMTcgKyA4LCB0cnVlKSArIHNlbGYuYm91bmRpbmdCb3gubWluLno7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHIgPSBzb3VyY2VWaWV3LmdldFVpbnQ4KGkgKiAxNyArIDEyLCB0cnVlKTtcclxuXHRcdFx0XHRcdHZhciBnID0gc291cmNlVmlldy5nZXRVaW50OChpICogMTcgKyAxMywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR2YXIgYiA9IHNvdXJjZVZpZXcuZ2V0VWludDgoaSAqIDE3ICsgMTQsIHRydWUpO1xyXG5cclxuXHRcdFx0XHRcdHZhciBpbnRlbnNpdHkgPSBzb3VyY2VWaWV3LmdldFVpbnQ4KGkgKiAxNyArIDE1LCB0cnVlKTtcclxuXHJcblx0XHRcdFx0XHR2YXIgY2xhc3NpZmljYXRpb24gPSBzb3VyY2VWaWV3LmdldFVpbnQ4KGkgKiAxNyArIDE2LCB0cnVlKTtcclxuXHJcblx0XHRcdFx0XHR0aWdodEJvdW5kaW5nQm94LmV4cGFuZEJ5UG9pbnQobmV3IFRIUkVFLlZlY3RvcjMoeCwgeSwgeikpO1xyXG5cclxuXHRcdFx0XHRcdHBvc2l0aW9uW2kgKiAzICsgMF0gPSB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb25baSAqIDMgKyAxXSA9IHk7XHJcblx0XHRcdFx0XHRwb3NpdGlvbltpICogMyArIDJdID0gejtcclxuXHJcblx0XHRcdFx0XHRjb2xvcltpICogNCArIDBdID0gcjtcclxuXHRcdFx0XHRcdGNvbG9yW2kgKiA0ICsgMV0gPSBnO1xyXG5cdFx0XHRcdFx0Y29sb3JbaSAqIDQgKyAyXSA9IGI7XHJcblx0XHRcdFx0XHRjb2xvcltpICogNCArIDNdID0gMjU1O1xyXG5cclxuXHRcdFx0XHRcdGludGVuc2l0aWVzW2ldID0gaW50ZW5zaXR5O1xyXG5cdFx0XHRcdFx0Y2xhc3NpZmljYXRpb25zW2ldID0gY2xhc3NpZmljYXRpb247XHJcblxyXG5cdFx0XHRcdFx0dTMySW5kaWNlc1tpXSA9IGk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcclxuXHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XHJcblx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiY29sb3JcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgNCwgdHJ1ZSkpO1xyXG5cdFx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImludGVuc2l0eVwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGludGVuc2l0aWVzLCAxKSk7XHJcblx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NpZmljYXRpb25cIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjbGFzc2lmaWNhdGlvbnMsIDEpKTtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgYnVmZmVyQXR0cmlidXRlID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDhBcnJheShpbmRpY2VzKSwgNCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJpbmRpY2VzXCIsIGJ1ZmZlckF0dHJpYnV0ZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzZWxmLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XHJcblx0XHRcdFx0c2VsZi5udW1Qb2ludHMgPSBudW1Qb2ludHM7XHJcblx0XHRcdFx0c2VsZi5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHNlbGYubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdEdsb2JhbC5udW1Ob2Rlc0xvYWRpbmctLTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaChlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlBvdHJlZTogRXhjZXB0aW9uIHRocm93biBwYXJzaW5nIHBvaW50cy5cIiwgZSk7XHJcblx0XHRcdFx0R2xvYmFsLm51bU5vZGVzTG9hZGluZy0tO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fTtcclxuXHRcdHhoci5vbmVycm9yID0gZnVuY3Rpb24oKVxyXG5cdFx0e1xyXG5cdFx0XHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nLS07XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUG90cmVlOiBGYWlsZWQgdG8gbG9hZCBmaWxlLCBcIiArIHhoci5zdGF0dXMgKyBcIiwgZmlsZTogXCIgKyB1cmwpO1xyXG5cdFx0fTtcclxuXHRcdHhoci5zZW5kKG51bGwpO1xyXG5cdH1cclxuXHJcblx0ZGlzcG9zZSgpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5nZW9tZXRyeSAmJiB0aGlzLnBhcmVudCAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuXHRcdFx0dGhpcy5nZW9tZXRyeSA9IG51bGw7XHJcblx0XHRcdHRoaXMubG9hZGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvL3RoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiBcImRpc3Bvc2VcIiB9ICk7XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLm9uZVRpbWVEaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgaGFuZGxlciA9IHRoaXMub25lVGltZURpc3Bvc2VIYW5kbGVyc1tpXTtcclxuXHRcdFx0XHRoYW5kbGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5vbmVUaW1lRGlzcG9zZUhhbmRsZXJzID0gW107XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXROdW1Qb2ludHMoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm51bVBvaW50cztcclxuXHR9XHJcbn07XHJcblxyXG5jbGFzcyBQb2ludENsb3VkQXJlbmE0REdlb21ldHJ5IGV4dGVuZHMgVEhSRUUuRXZlbnREaXNwYXRjaGVyXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm51bVBvaW50cyA9IDA7XHJcblx0XHR0aGlzLnZlcnNpb24gPSAwO1xyXG5cdFx0dGhpcy5ib3VuZGluZ0JveCA9IG51bGw7XHJcblx0XHR0aGlzLm51bU5vZGVzID0gMDtcclxuXHRcdHRoaXMubmFtZSA9IG51bGw7XHJcblx0XHR0aGlzLnByb3ZpZGVyID0gbnVsbDtcclxuXHRcdHRoaXMudXJsID0gbnVsbDtcclxuXHRcdHRoaXMucm9vdCA9IG51bGw7XHJcblx0XHR0aGlzLmxldmVscyA9IDA7XHJcblx0XHR0aGlzLl9zcGFjaW5nID0gbnVsbDtcclxuXHRcdHRoaXMucG9pbnRBdHRyaWJ1dGVzID0gbmV3IFBvaW50QXR0cmlidXRlcyhbXHJcblx0XHRcdFwiUE9TSVRJT05fQ0FSVEVTSUFOXCIsXHJcblx0XHRcdFwiQ09MT1JfUEFDS0VEXCJcclxuXHRcdF0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWQodXJsLCBjYWxsYmFjaylcclxuXHR7XHJcblx0XHR2YXIgeGhyID0gWEhSRmFjdG9yeS5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L3BsYWluXCIpO1xyXG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsICsgXCI/aW5mb1wiLCB0cnVlKTtcclxuXHJcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cclxuXHRcdFx0XHRcdHZhciBnZW9tZXRyeSA9IG5ldyBQb2ludENsb3VkQXJlbmE0REdlb21ldHJ5KCk7XHJcblx0XHRcdFx0XHRnZW9tZXRyeS51cmwgPSB1cmw7XHJcblx0XHRcdFx0XHRnZW9tZXRyeS5uYW1lID0gcmVzcG9uc2UuTmFtZTtcclxuXHRcdFx0XHRcdGdlb21ldHJ5LnByb3ZpZGVyID0gcmVzcG9uc2UuUHJvdmlkZXI7XHJcblx0XHRcdFx0XHRnZW9tZXRyeS5udW1Ob2RlcyA9IHJlc3BvbnNlLk5vZGVzO1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkubnVtUG9pbnRzID0gcmVzcG9uc2UuUG9pbnRzO1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkudmVyc2lvbiA9IHJlc3BvbnNlLlZlcnNpb247XHJcblx0XHRcdFx0XHRnZW9tZXRyeS5ib3VuZGluZ0JveCA9IG5ldyBUSFJFRS5Cb3gzKFxyXG5cdFx0XHRcdFx0XHRuZXcgVEhSRUUuVmVjdG9yMygpLmZyb21BcnJheShyZXNwb25zZS5Cb3VuZGluZ0JveC5zbGljZSgwLCAzKSksXHJcblx0XHRcdFx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKCkuZnJvbUFycmF5KHJlc3BvbnNlLkJvdW5kaW5nQm94LnNsaWNlKDMsIDYpKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGlmKHJlc3BvbnNlLlNwYWNpbmcpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGdlb21ldHJ5LnNwYWNpbmcgPSByZXNwb25zZS5TcGFjaW5nO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBvZmZzZXQgPSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW4uY2xvbmUoKS5tdWx0aXBseVNjYWxhcigtMSk7XHJcblxyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuYm91bmRpbmdCb3gubWluLmFkZChvZmZzZXQpO1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuYm91bmRpbmdCb3gubWF4LmFkZChvZmZzZXQpO1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkub2Zmc2V0ID0gb2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRcdHZhciBjZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuYm91bmRpbmdCb3guZ2V0Q2VudGVyKGNlbnRlcik7XHJcblx0XHRcdFx0XHR2YXIgcmFkaXVzID0gZ2VvbWV0cnkuYm91bmRpbmdCb3guZ2V0U2l6ZShuZXcgVEhSRUUuVmVjdG9yMygpKS5sZW5ndGgoKSAvIDI7XHJcblx0XHRcdFx0XHRnZW9tZXRyeS5ib3VuZGluZ1NwaGVyZSA9IG5ldyBUSFJFRS5TcGhlcmUoY2VudGVyLCByYWRpdXMpO1xyXG5cclxuXHRcdFx0XHRcdGdlb21ldHJ5LmxvYWRIaWVyYXJjaHkoKTtcclxuXHJcblx0XHRcdFx0XHRjYWxsYmFjayhnZW9tZXRyeSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2sobnVsbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XHJcblx0XHRcdFx0Y2FsbGJhY2sobnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0eGhyLnNlbmQobnVsbCk7XHJcblx0fTtcclxuXHJcblx0bG9hZEhpZXJhcmNoeSgpXHJcblx0e1xyXG5cdFx0dmFyIHVybCA9IHRoaXMudXJsICsgXCI/dHJlZVwiO1xyXG5cdFx0XHJcblx0XHR2YXIgeGhyID0gWEhSRmFjdG9yeS5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L3BsYWluXCIpO1xyXG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcblxyXG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+XHJcblx0XHR7XHJcblx0XHRcdGlmKCEoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGJ1ZmZlciA9IHhoci5yZXNwb25zZTtcclxuXHRcdFx0dmFyIG51bU5vZGVzID0gYnVmZmVyLmJ5dGVMZW5ndGggLyAzO1xyXG5cdFx0XHR2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xyXG5cdFx0XHR2YXIgc3RhY2sgPSBbXTtcclxuXHRcdFx0dmFyIHJvb3QgPSBudWxsO1xyXG5cclxuXHRcdFx0dmFyIGxldmVscyA9IDA7XHJcblxyXG5cdFx0XHQvL1RPRE8gRGVidWc6IHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHQvL3JlYWQgaGllcmFyY2h5XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBudW1Ob2RlczsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIG1hc2sgPSB2aWV3LmdldFVpbnQ4KGkgKiAzICsgMCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdHZhciBoYXNMZWZ0ID0gKG1hc2sgJiAxKSA+IDA7XHJcblx0XHRcdFx0dmFyIGhhc1JpZ2h0ID0gKG1hc2sgJiAyKSA+IDA7XHJcblx0XHRcdFx0dmFyIHNwbGl0WCA9IChtYXNrICYgNCkgPiAwO1xyXG5cdFx0XHRcdHZhciBzcGxpdFkgPSAobWFzayAmIDgpID4gMDtcclxuXHRcdFx0XHR2YXIgc3BsaXRaID0gKG1hc2sgJiAxNikgPiAwO1xyXG5cdFx0XHRcdHZhciBzcGxpdCA9IG51bGw7XHJcblx0XHRcdFx0aWYoc3BsaXRYKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNwbGl0ID0gXCJYXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYoc3BsaXRZKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNwbGl0ID0gXCJZXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHNwbGl0WilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcGxpdCA9IFwiWlwiO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIG5vZGUgPSBuZXcgUG9pbnRDbG91ZEFyZW5hNERHZW9tZXRyeU5vZGUoKTtcclxuXHRcdFx0XHRub2RlLmhhc0xlZnQgPSBoYXNMZWZ0O1xyXG5cdFx0XHRcdG5vZGUuaGFzUmlnaHQgPSBoYXNSaWdodDtcclxuXHRcdFx0XHRub2RlLnNwbGl0ID0gc3BsaXQ7XHJcblx0XHRcdFx0bm9kZS5pc0xlYWYgPSAhaGFzTGVmdCAmJiAhaGFzUmlnaHQ7XHJcblx0XHRcdFx0bm9kZS5udW1iZXIgPSBpO1xyXG5cdFx0XHRcdG5vZGUubGVmdCA9IG51bGw7XHJcblx0XHRcdFx0bm9kZS5yaWdodCA9IG51bGw7XHJcblx0XHRcdFx0bm9kZS5wY29HZW9tZXRyeSA9IHRoaXM7XHJcblx0XHRcdFx0bm9kZS5sZXZlbCA9IHN0YWNrLmxlbmd0aDtcclxuXHRcdFx0XHRsZXZlbHMgPSBNYXRoLm1heChsZXZlbHMsIG5vZGUubGV2ZWwpO1xyXG5cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0aWYoc3RhY2subGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcblx0XHRcdFx0XHRub2RlLmJvdW5kaW5nQm94ID0gcGFyZW50LmJvdW5kaW5nQm94LmNsb25lKCk7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50QkJTaXplID0gcGFyZW50LmJvdW5kaW5nQm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcblxyXG5cdFx0XHRcdFx0aWYocGFyZW50Lmhhc0xlZnQgJiYgIXBhcmVudC5sZWZ0KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYXJlbnQubGVmdCA9IG5vZGU7XHJcblx0XHRcdFx0XHRcdHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYocGFyZW50LnNwbGl0ID09PSBcIlhcIilcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdG5vZGUuYm91bmRpbmdCb3gubWF4LnggPSBub2RlLmJvdW5kaW5nQm94Lm1pbi54ICsgcGFyZW50QkJTaXplLnggLyAyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYocGFyZW50LnNwbGl0ID09PSBcIllcIilcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdG5vZGUuYm91bmRpbmdCb3gubWF4LnkgPSBub2RlLmJvdW5kaW5nQm94Lm1pbi55ICsgcGFyZW50QkJTaXplLnkgLyAyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYocGFyZW50LnNwbGl0ID09PSBcIlpcIilcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdG5vZGUuYm91bmRpbmdCb3gubWF4LnogPSBub2RlLmJvdW5kaW5nQm94Lm1pbi56ICsgcGFyZW50QkJTaXplLnogLyAyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dmFyIGNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRcdFx0XHRcdG5vZGUuYm91bmRpbmdCb3guZ2V0Q2VudGVyKGNlbnRlcik7XHJcblx0XHRcdFx0XHRcdHZhciByYWRpdXMgPSBub2RlLmJvdW5kaW5nQm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSkubGVuZ3RoKCkgLyAyO1xyXG5cdFx0XHRcdFx0XHRub2RlLmJvdW5kaW5nU3BoZXJlID0gbmV3IFRIUkVFLlNwaGVyZShjZW50ZXIsIHJhZGl1cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHBhcmVudC5yaWdodCA9IG5vZGU7XHJcblx0XHRcdFx0XHRcdHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYocGFyZW50LnNwbGl0ID09PSBcIlhcIilcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdG5vZGUuYm91bmRpbmdCb3gubWluLnggPSBub2RlLmJvdW5kaW5nQm94Lm1pbi54ICsgcGFyZW50QkJTaXplLnggLyAyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYocGFyZW50LnNwbGl0ID09PSBcIllcIilcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdG5vZGUuYm91bmRpbmdCb3gubWluLnkgPSBub2RlLmJvdW5kaW5nQm94Lm1pbi55ICsgcGFyZW50QkJTaXplLnkgLyAyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYocGFyZW50LnNwbGl0ID09PSBcIlpcIilcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdG5vZGUuYm91bmRpbmdCb3gubWluLnogPSBub2RlLmJvdW5kaW5nQm94Lm1pbi56ICsgcGFyZW50QkJTaXplLnogLyAyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgY2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdFx0XHRcdFx0bm9kZS5ib3VuZGluZ0JveC5nZXRDZW50ZXIoY2VudGVyKTtcclxuXHRcdFx0XHRcdFx0dmFyIHJhZGl1cyA9IG5vZGUuYm91bmRpbmdCb3guZ2V0U2l6ZShuZXcgVEhSRUUuVmVjdG9yMygpKS5sZW5ndGgoKSAvIDI7XHJcblx0XHRcdFx0XHRcdG5vZGUuYm91bmRpbmdTcGhlcmUgPSBuZXcgVEhSRUUuU3BoZXJlKGNlbnRlciwgcmFkaXVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJvb3QgPSBub2RlO1xyXG5cdFx0XHRcdFx0cm9vdC5ib3VuZGluZ0JveCA9IHRoaXMuYm91bmRpbmdCb3guY2xvbmUoKTtcclxuXHJcblx0XHRcdFx0XHR2YXIgY2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdFx0XHRcdHJvb3QuYm91bmRpbmdCb3guZ2V0Q2VudGVyKGNlbnRlcik7XHJcblx0XHRcdFx0XHR2YXIgcmFkaXVzID0gcm9vdC5ib3VuZGluZ0JveC5nZXRTaXplKG5ldyBUSFJFRS5WZWN0b3IzKCkpLmxlbmd0aCgpIC8gMjtcclxuXHRcdFx0XHRcdHJvb3QuYm91bmRpbmdTcGhlcmUgPSBuZXcgVEhSRUUuU3BoZXJlKGNlbnRlciwgcmFkaXVzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBiYlNpemUgPSBub2RlLmJvdW5kaW5nQm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcblx0XHRcdFx0bm9kZS5zcGFjaW5nID0gKChiYlNpemUueCArIGJiU2l6ZS55ICsgYmJTaXplLnopIC8gMykgLyA3NTtcclxuXHRcdFx0XHRub2RlLmVzdGltYXRlZFNwYWNpbmcgPSBub2RlLnNwYWNpbmc7XHJcblxyXG5cdFx0XHRcdHN0YWNrLnB1c2gobm9kZSk7XHJcblxyXG5cdFx0XHRcdGlmKG5vZGUuaXNMZWFmKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBkb25lID0gZmFsc2U7XHJcblx0XHRcdFx0XHR3aGlsZSghZG9uZSAmJiBzdGFjay5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzdGFjay5wb3AoKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciB0b3AgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuXHJcblx0XHRcdFx0XHRcdGRvbmUgPSBzdGFjay5sZW5ndGggPiAwICYmIHRvcC5oYXNSaWdodCAmJiB0b3AucmlnaHQgPT0gbnVsbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucm9vdCA9IHJvb3Q7XHJcblx0XHRcdHRoaXMubGV2ZWxzID0gbGV2ZWxzO1xyXG5cclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJoaWVyYXJjaHlfbG9hZGVkXCJcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHhoci5zZW5kKG51bGwpO1xyXG5cdH07XHJcblxyXG5cdGdldCBzcGFjaW5nKClcclxuXHR7XHJcblx0XHRpZih0aGlzLl9zcGFjaW5nKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fc3BhY2luZztcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYodGhpcy5yb290KVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yb290LnNwYWNpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXQgc3BhY2luZyh2YWx1ZSlcclxuXHR7XHJcblx0XHR0aGlzLl9zcGFjaW5nID0gdmFsdWU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtQb2ludENsb3VkQXJlbmE0REdlb21ldHJ5LCBQb2ludENsb3VkQXJlbmE0REdlb21ldHJ5Tm9kZX07XHJcbiIsIlxyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5pbXBvcnQge0VwdEJpbmFyeUxvYWRlcn0gZnJvbSBcIi4uLy4uL2xvYWRlcnMvZXB0L0VwdEJpbmFyeUxvYWRlclwiO1xyXG5pbXBvcnQge0VwdExhc3ppcExvYWRlcn0gZnJvbSBcIi4uLy4uL2xvYWRlcnMvZXB0L0VwdExhc3ppcExvYWRlclwiO1xyXG5pbXBvcnQge1ZlcnNpb25VdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL1ZlcnNpb25VdGlscy5qc1wiO1xyXG5pbXBvcnQge1BvaW50Q2xvdWRUcmVlTm9kZX0gZnJvbSBcIi4uL1BvaW50Q2xvdWRUcmVlLmpzXCI7XHJcbmltcG9ydCB7R2xvYmFsfSBmcm9tIFwiLi4vLi4vR2xvYmFsLmpzXCI7XHJcbmltcG9ydCB7WEhSRmFjdG9yeX0gZnJvbSBcIi4uLy4uL1hIUkZhY3RvcnkuanNcIjtcclxuXHJcbmNsYXNzIFV0aWxzXHJcbntcclxuXHRzdGF0aWMgdG9WZWN0b3IzKHYsIG9mZnNldClcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjMoKS5mcm9tQXJyYXkodiwgb2Zmc2V0IHx8IDApO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHRvQm94MyhiKVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgVEhSRUUuQm94MyhVdGlscy50b1ZlY3RvcjMoYiksIFV0aWxzLnRvVmVjdG9yMyhiLCAzKSk7XHJcblx0fTtcclxuXHJcblx0c3RhdGljIGZpbmREaW0oc2NoZW1hLCBuYW1lKVxyXG5cdHtcclxuXHRcdHZhciBkaW0gPSBzY2hlbWEuZmluZCgoZGltKSA9PiBkaW0ubmFtZSA9PSBuYW1lKTtcclxuXHRcdGlmKCFkaW0pIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmaW5kIFwiICsgbmFtZSArIFwiIGluIHNjaGVtYVwiKTtcclxuXHRcdHJldHVybiBkaW07XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgc3BoZXJlRnJvbShiKVxyXG5cdHtcclxuXHRcdHJldHVybiBiLmdldEJvdW5kaW5nU3BoZXJlKG5ldyBUSFJFRS5TcGhlcmUoKSk7XHJcblx0fVxyXG59O1xyXG5cclxuY2xhc3MgUG9pbnRDbG91ZEVwdEdlb21ldHJ5XHJcbntcclxuXHRjb25zdHJ1Y3Rvcih1cmwsIGluZm8pXHJcblx0e1xyXG5cdFx0bGV0IHZlcnNpb24gPSBpbmZvLnZlcnNpb247XHJcblx0XHRsZXQgc2NoZW1hID0gaW5mby5zY2hlbWE7XHJcblx0XHRsZXQgYm91bmRzID0gaW5mby5ib3VuZHM7XHJcblx0XHRsZXQgYm91bmRzQ29uZm9ybWluZyA9IGluZm8uYm91bmRzQ29uZm9ybWluZztcclxuXHJcblx0XHRsZXQgeHl6ID0gW1xyXG5cdFx0XHRVdGlscy5maW5kRGltKHNjaGVtYSwgXCJYXCIpLFxyXG5cdFx0XHRVdGlscy5maW5kRGltKHNjaGVtYSwgXCJZXCIpLFxyXG5cdFx0XHRVdGlscy5maW5kRGltKHNjaGVtYSwgXCJaXCIpXHJcblx0XHRdO1xyXG5cdFx0bGV0IHNjYWxlID0geHl6Lm1hcCgoZCkgPT4gZC5zY2FsZSB8fCAxKTtcclxuXHRcdGxldCBvZmZzZXQgPSB4eXoubWFwKChkKSA9PiBkLm9mZnNldCB8fCAwKTtcclxuXHJcblx0XHR0aGlzLmVwdFNjYWxlID0gVXRpbHMudG9WZWN0b3IzKHNjYWxlKTtcclxuXHRcdHRoaXMuZXB0T2Zmc2V0ID0gVXRpbHMudG9WZWN0b3IzKG9mZnNldCk7XHJcblxyXG5cdFx0dGhpcy51cmwgPSB1cmw7XHJcblx0XHR0aGlzLmluZm8gPSBpbmZvO1xyXG5cdFx0dGhpcy50eXBlID0gXCJlcHRcIjtcclxuXHJcblx0XHR0aGlzLnNjaGVtYSA9IHNjaGVtYTtcclxuXHRcdHRoaXMuc3BhbiA9IGluZm8uc3BhbiB8fCBpbmZvLnRpY2tzO1xyXG5cdFx0dGhpcy5ib3VuZGluZ0JveCA9IFV0aWxzLnRvQm94Myhib3VuZHMpO1xyXG5cdFx0dGhpcy50aWdodEJvdW5kaW5nQm94ID0gVXRpbHMudG9Cb3gzKGJvdW5kc0NvbmZvcm1pbmcpO1xyXG5cdFx0dGhpcy5vZmZzZXQgPSBVdGlscy50b1ZlY3RvcjMoWzAsIDAsIDBdKTtcclxuXHRcdHRoaXMuYm91bmRpbmdTcGhlcmUgPSBVdGlscy5zcGhlcmVGcm9tKHRoaXMuYm91bmRpbmdCb3gpO1xyXG5cdFx0dGhpcy50aWdodEJvdW5kaW5nU3BoZXJlID0gVXRpbHMuc3BoZXJlRnJvbSh0aGlzLnRpZ2h0Qm91bmRpbmdCb3gpO1xyXG5cdFx0dGhpcy52ZXJzaW9uID0gbmV3IFZlcnNpb25VdGlscyhcIjEuNlwiKTtcclxuXHJcblx0XHR0aGlzLnByb2plY3Rpb24gPSBudWxsO1xyXG5cdFx0dGhpcy5mYWxsYmFja1Byb2plY3Rpb24gPSBudWxsO1xyXG5cclxuXHRcdGlmKGluZm8uc3JzICYmIGluZm8uc3JzLmhvcml6b250YWwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHJvamVjdGlvbiA9IGluZm8uc3JzLmF1dGhvcml0eSArIFwiOlwiICsgaW5mby5zcnMuaG9yaXpvbnRhbDtcclxuXHRcdH1cclxuXHJcblx0XHRpZihpbmZvLnNycy53a3QpXHJcblx0XHR7XHJcblx0XHRcdGlmKCF0aGlzLnByb2plY3Rpb24pIHRoaXMucHJvamVjdGlvbiA9IGluZm8uc3JzLndrdDtcclxuXHRcdFx0ZWxzZSB0aGlzLmZhbGxiYWNrUHJvamVjdGlvbiA9IGluZm8uc3JzLndrdDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBvaW50QXR0cmlidXRlcyA9IFwiTEFaXCI7XHJcblx0XHR0aGlzLnNwYWNpbmcgPVxyXG5cdFx0XHQodGhpcy5ib3VuZGluZ0JveC5tYXgueCAtIHRoaXMuYm91bmRpbmdCb3gubWluLngpIC8gdGhpcy5zcGFuO1xyXG5cclxuXHRcdGxldCBoaWVyYXJjaHlUeXBlID0gaW5mby5oaWVyYXJjaHlUeXBlIHx8IFwianNvblwiO1xyXG5cclxuXHRcdGxldCBkYXRhVHlwZSA9IGluZm8uZGF0YVR5cGUgfHwgXCJsYXN6aXBcIjtcclxuXHRcdHRoaXMubG9hZGVyID0gZGF0YVR5cGUgPT0gXCJiaW5hcnlcIiA/IG5ldyBFcHRCaW5hcnlMb2FkZXIoKSA6IG5ldyBFcHRMYXN6aXBMb2FkZXIoKTtcclxuXHR9XHJcbn07XHJcblxyXG5jbGFzcyBFcHRLZXlcclxue1xyXG5cdGNvbnN0cnVjdG9yKGVwdCwgYiwgZCwgeCwgeSwgeilcclxuXHR7XHJcblx0XHR0aGlzLmVwdCA9IGVwdDtcclxuXHRcdHRoaXMuYiA9IGI7XHJcblx0XHR0aGlzLmQgPSBkO1xyXG5cdFx0dGhpcy54ID0geCB8fCAwO1xyXG5cdFx0dGhpcy55ID0geSB8fCAwO1xyXG5cdFx0dGhpcy56ID0geiB8fCAwO1xyXG5cdH1cclxuXHJcblx0bmFtZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZCArIFwiLVwiICsgdGhpcy54ICsgXCItXCIgKyB0aGlzLnkgKyBcIi1cIiArIHRoaXMuejtcclxuXHR9XHJcblxyXG5cdHN0ZXAoYSwgYiwgYylcclxuXHR7XHJcblx0XHRsZXQgbWluID0gdGhpcy5iLm1pbi5jbG9uZSgpO1xyXG5cdFx0bGV0IG1heCA9IHRoaXMuYi5tYXguY2xvbmUoKTtcclxuXHRcdGxldCBkc3QgPSBuZXcgVEhSRUUuVmVjdG9yMygpLnN1YlZlY3RvcnMobWF4LCBtaW4pO1xyXG5cclxuXHRcdGlmKGEpIG1pbi54ICs9IGRzdC54IC8gMjtcclxuXHRcdGVsc2UgbWF4LnggLT0gZHN0LnggLyAyO1xyXG5cclxuXHRcdGlmKGIpIG1pbi55ICs9IGRzdC55IC8gMjtcclxuXHRcdGVsc2UgbWF4LnkgLT0gZHN0LnkgLyAyO1xyXG5cclxuXHRcdGlmKGMpIG1pbi56ICs9IGRzdC56IC8gMjtcclxuXHRcdGVsc2UgbWF4LnogLT0gZHN0LnogLyAyO1xyXG5cclxuXHRcdHJldHVybiBuZXcgRXB0S2V5KFxyXG5cdFx0XHRcdHRoaXMuZXB0LFxyXG5cdFx0XHRcdG5ldyBUSFJFRS5Cb3gzKG1pbiwgbWF4KSxcclxuXHRcdFx0XHR0aGlzLmQgKyAxLFxyXG5cdFx0XHRcdHRoaXMueCAqIDIgKyBhLFxyXG5cdFx0XHRcdHRoaXMueSAqIDIgKyBiLFxyXG5cdFx0XHRcdHRoaXMueiAqIDIgKyBjKTtcclxuXHR9XHJcblxyXG5cdGNoaWxkcmVuKClcclxuXHR7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IgKHZhciBhID0gMDsgYSA8IDI7ICsrYSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yICh2YXIgYiA9IDA7IGIgPCAyOyArK2IpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IgKHZhciBjID0gMDsgYyA8IDI7ICsrYylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgYWRkID0gdGhpcy5zdGVwKGEsIGIsIGMpLm5hbWUoKTtcclxuXHRcdFx0XHRcdGlmKCFyZXN1bHQuaW5jbHVkZXMoYWRkKSkgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhZGQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFBvaW50Q2xvdWRFcHRHZW9tZXRyeU5vZGUgZXh0ZW5kcyBQb2ludENsb3VkVHJlZU5vZGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKGVwdCwgYiwgZCwgeCwgeSwgeikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmVwdCA9IGVwdDtcclxuXHRcdHRoaXMua2V5ID0gbmV3IEVwdEtleShcclxuXHRcdFx0XHR0aGlzLmVwdCxcclxuXHRcdFx0XHRiIHx8IHRoaXMuZXB0LmJvdW5kaW5nQm94LFxyXG5cdFx0XHRcdGQgfHwgMCxcclxuXHRcdFx0XHR4LFxyXG5cdFx0XHRcdHksXHJcblx0XHRcdFx0eik7XHJcblxyXG5cdFx0dGhpcy5pZCA9IFBvaW50Q2xvdWRFcHRHZW9tZXRyeU5vZGUuSURDb3VudCsrO1xyXG5cdFx0dGhpcy5nZW9tZXRyeSA9IG51bGw7XHJcblx0XHR0aGlzLmJvdW5kaW5nQm94ID0gdGhpcy5rZXkuYjtcclxuXHRcdHRoaXMudGlnaHRCb3VuZGluZ0JveCA9IHRoaXMuYm91bmRpbmdCb3g7XHJcblx0XHR0aGlzLnNwYWNpbmcgPSB0aGlzLmVwdC5zcGFjaW5nIC8gTWF0aC5wb3coMiwgdGhpcy5rZXkuZCk7XHJcblx0XHR0aGlzLmJvdW5kaW5nU3BoZXJlID0gVXRpbHMuc3BoZXJlRnJvbSh0aGlzLmJvdW5kaW5nQm94KTtcclxuXHJcblx0XHQvLyBUaGVzZSBhcmUgc2V0IGR1cmluZyBoaWVyYXJjaHkgbG9hZGluZy5cclxuXHRcdHRoaXMuaGFzQ2hpbGRyZW4gPSBmYWxzZTtcclxuXHRcdHRoaXMuY2hpbGRyZW4gPSB7IH07XHJcblx0XHR0aGlzLm51bVBvaW50cyA9IC0xO1xyXG5cclxuXHRcdHRoaXMubGV2ZWwgPSB0aGlzLmtleS5kO1xyXG5cdFx0dGhpcy5sb2FkZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5vbmVUaW1lRGlzcG9zZUhhbmRsZXJzID0gW107XHJcblxyXG5cdFx0bGV0IGsgPSB0aGlzLmtleTtcclxuXHRcdHRoaXMubmFtZSA9IHRoaXMudG9Qb3RyZWVOYW1lKGsuZCwgay54LCBrLnksIGsueik7XHJcblx0XHR0aGlzLmluZGV4ID0gcGFyc2VJbnQodGhpcy5uYW1lLmNoYXJBdCh0aGlzLm5hbWUubGVuZ3RoIC0gMSkpO1xyXG5cdH1cclxuXHJcblx0aXNHZW9tZXRyeU5vZGUoKXtyZXR1cm4gdHJ1ZTt9XHJcblx0Z2V0TGV2ZWwoKXtyZXR1cm4gdGhpcy5sZXZlbDt9XHJcblx0aXNUcmVlTm9kZSgpe3JldHVybiBmYWxzZTt9XHJcblx0aXNMb2FkZWQoKXtyZXR1cm4gdGhpcy5sb2FkZWQ7fVxyXG5cdGdldEJvdW5kaW5nU3BoZXJlKCl7cmV0dXJuIHRoaXMuYm91bmRpbmdTcGhlcmU7fVxyXG5cdGdldEJvdW5kaW5nQm94KCl7cmV0dXJuIHRoaXMuYm91bmRpbmdCb3g7fVxyXG5cdHVybCgpe3JldHVybiB0aGlzLmVwdC51cmwgKyBcImVwdC1kYXRhL1wiICsgdGhpcy5maWxlbmFtZSgpO31cclxuXHRnZXROdW1Qb2ludHMoKXtyZXR1cm4gdGhpcy5udW1Qb2ludHM7fVxyXG5cdGZpbGVuYW1lKCl7cmV0dXJuIHRoaXMua2V5Lm5hbWUoKTt9XHJcblxyXG5cdGdldENoaWxkcmVuKClcclxuXHR7XHJcblx0XHRsZXQgY2hpbGRyZW4gPSBbXTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG5cdFx0XHRpZih0aGlzLmNoaWxkcmVuW2ldKSB7XHJcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaCh0aGlzLmNoaWxkcmVuW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjaGlsZHJlbjtcclxuXHR9XHJcblxyXG5cdGFkZENoaWxkKGNoaWxkKVxyXG5cdHtcclxuXHRcdHRoaXMuY2hpbGRyZW5bY2hpbGQuaW5kZXhdID0gY2hpbGQ7XHJcblx0XHRjaGlsZC5wYXJlbnQgPSB0aGlzO1xyXG5cdH1cclxuXHJcblx0bG9hZCgpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5sb2FkZWQgfHwgdGhpcy5sb2FkaW5nIHx8IEdsb2JhbC5udW1Ob2Rlc0xvYWRpbmcgPj0gR2xvYmFsLm1heE5vZGVzTG9hZGluZylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubG9hZGluZyA9IHRydWU7XHJcblx0XHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nKys7XHJcblxyXG5cdFx0aWYodGhpcy5udW1Qb2ludHMgPT09IC0xKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxvYWRIaWVyYXJjaHkoKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubG9hZFBvaW50cygpO1xyXG5cdH1cclxuXHJcblx0bG9hZFBvaW50cygpXHJcblx0e1xyXG5cdFx0dGhpcy5lcHQubG9hZGVyLmxvYWQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkSGllcmFyY2h5KClcclxuXHR7XHJcblx0XHRsZXQgbm9kZXMgPSB7IH07XHJcblx0XHRub2Rlc1t0aGlzLmZpbGVuYW1lKCldID0gdGhpcztcclxuXHRcdHRoaXMuaGFzQ2hpbGRyZW4gPSBmYWxzZTtcclxuXHJcblx0XHRsZXQgZXB0SGllcmFyY2h5RmlsZSA9IGAke3RoaXMuZXB0LnVybH1lcHQtaGllcmFyY2h5LyR7dGhpcy5maWxlbmFtZSgpfS5qc29uYDtcclxuXHJcblx0XHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBYSFJGYWN0b3J5LmZldGNoKGVwdEhpZXJhcmNoeUZpbGUpO1xyXG5cdFx0bGV0IGhpZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdFx0Ly8gU2luY2Ugd2Ugd2FudCB0byB0cmF2ZXJzZSB0b3AtZG93biwgYW5kIDEwIGNvbWVzXHJcblx0XHQvLyBsZXhpY29ncmFwaGljYWxseSBiZWZvcmUgOSAoZm9yIGV4YW1wbGUpLCBkbyBhIGRlZXAgc29ydC5cclxuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMoaGllcikuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRsZXQgW2RhLCB4YSwgeWEsIHphXSA9IGEuc3BsaXQoXCItXCIpLm1hcCgobikgPT4gcGFyc2VJbnQobiwgMTApKTtcclxuXHRcdFx0bGV0IFtkYiwgeGIsIHliLCB6Yl0gPSBiLnNwbGl0KFwiLVwiKS5tYXAoKG4pID0+IHBhcnNlSW50KG4sIDEwKSk7XHJcblx0XHRcdGlmKGRhIDwgZGIpIHJldHVybiAtMTsgaWYoZGEgPiBkYikgcmV0dXJuIDE7XHJcblx0XHRcdGlmKHhhIDwgeGIpIHJldHVybiAtMTsgaWYoeGEgPiB4YikgcmV0dXJuIDE7XHJcblx0XHRcdGlmKHlhIDwgeWIpIHJldHVybiAtMTsgaWYoeWEgPiB5YikgcmV0dXJuIDE7XHJcblx0XHRcdGlmKHphIDwgemIpIHJldHVybiAtMTsgaWYoemEgPiB6YikgcmV0dXJuIDE7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0a2V5cy5mb3JFYWNoKCh2KSA9PiB7XHJcblx0XHRcdGxldCBbZCwgeCwgeSwgel0gPSB2LnNwbGl0KFwiLVwiKS5tYXAoKG4pID0+IHBhcnNlSW50KG4sIDEwKSk7XHJcblx0XHRcdGxldCBhID0geCAmIDEsIGIgPSB5ICYgMSwgYyA9IHogJiAxO1xyXG5cdFx0XHRsZXQgcGFyZW50TmFtZSA9XHJcblx0XHRcdFx0KGQgLSAxKSArIFwiLVwiICsgKHggPj4gMSkgKyBcIi1cIiArICh5ID4+IDEpICsgXCItXCIgKyAoeiA+PiAxKTtcclxuXHJcblx0XHRcdGxldCBwYXJlbnROb2RlID0gbm9kZXNbcGFyZW50TmFtZV07XHJcblx0XHRcdGlmKCFwYXJlbnROb2RlKSByZXR1cm47XHJcblx0XHRcdHBhcmVudE5vZGUuaGFzQ2hpbGRyZW4gPSB0cnVlO1xyXG5cclxuXHRcdFx0bGV0IGtleSA9IHBhcmVudE5vZGUua2V5LnN0ZXAoYSwgYiwgYyk7XHJcblxyXG5cdFx0XHRsZXQgbm9kZSA9IG5ldyBQb2ludENsb3VkRXB0R2VvbWV0cnlOb2RlKFxyXG5cdFx0XHRcdFx0dGhpcy5lcHQsXHJcblx0XHRcdFx0XHRrZXkuYixcclxuXHRcdFx0XHRcdGtleS5kLFxyXG5cdFx0XHRcdFx0a2V5LngsXHJcblx0XHRcdFx0XHRrZXkueSxcclxuXHRcdFx0XHRcdGtleS56KTtcclxuXHJcblx0XHRcdG5vZGUubGV2ZWwgPSBkO1xyXG5cdFx0XHRub2RlLm51bVBvaW50cyA9IGhpZXJbdl07XHJcblxyXG5cdFx0XHRwYXJlbnROb2RlLmFkZENoaWxkKG5vZGUpO1xyXG5cdFx0XHRub2Rlc1trZXkubmFtZSgpXSA9IG5vZGU7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRvbmVMb2FkaW5nKGJ1ZmZlckdlb21ldHJ5LCB0aWdodEJvdW5kaW5nQm94LCBucCwgbWVhbilcclxuXHR7XHJcblx0XHRidWZmZXJHZW9tZXRyeS5ib3VuZGluZ0JveCA9IHRoaXMuYm91bmRpbmdCb3g7XHJcblx0XHR0aGlzLmdlb21ldHJ5ID0gYnVmZmVyR2VvbWV0cnk7XHJcblx0XHR0aGlzLnRpZ2h0Qm91bmRpbmdCb3ggPSB0aWdodEJvdW5kaW5nQm94O1xyXG5cdFx0dGhpcy5udW1Qb2ludHMgPSBucDtcclxuXHRcdHRoaXMubWVhbiA9IG1lYW47XHJcblx0XHR0aGlzLmxvYWRlZCA9IHRydWU7XHJcblx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdEdsb2JhbC5udW1Ob2Rlc0xvYWRpbmctLTtcclxuXHR9XHJcblxyXG5cdHRvUG90cmVlTmFtZShkLCB4LCB5LCB6KVxyXG5cdHtcclxuXHRcdHZhciBuYW1lID0gXCJyXCI7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkOyArK2kpXHJcblx0XHR7XHJcblx0XHRcdHZhciBzaGlmdCA9IGQgLSBpIC0gMTtcclxuXHRcdFx0dmFyIG1hc2sgPSAxIDw8IHNoaWZ0O1xyXG5cdFx0XHR2YXIgc3RlcCA9IDA7XHJcblxyXG5cdFx0XHRpZih4ICYgbWFzaykgc3RlcCArPSA0O1xyXG5cdFx0XHRpZih5ICYgbWFzaykgc3RlcCArPSAyO1xyXG5cdFx0XHRpZih6ICYgbWFzaykgc3RlcCArPSAxO1xyXG5cclxuXHRcdFx0bmFtZSArPSBzdGVwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblx0ZGlzcG9zZSgpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5nZW9tZXRyeSAmJiB0aGlzLnBhcmVudCAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuXHRcdFx0dGhpcy5nZW9tZXRyeSA9IG51bGw7XHJcblx0XHRcdHRoaXMubG9hZGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvLyB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogXCJkaXNwb3NlXCIgfSApO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub25lVGltZURpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBoYW5kbGVyID0gdGhpcy5vbmVUaW1lRGlzcG9zZUhhbmRsZXJzW2ldO1xyXG5cdFx0XHRcdGhhbmRsZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5vbmVUaW1lRGlzcG9zZUhhbmRsZXJzID0gW107XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5Qb2ludENsb3VkRXB0R2VvbWV0cnlOb2RlLklEQ291bnQgPSAwO1xyXG5cclxuZXhwb3J0IHtQb2ludENsb3VkRXB0R2VvbWV0cnksIFBvaW50Q2xvdWRFcHRHZW9tZXRyeU5vZGUsIEVwdEtleX07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuaW1wb3J0IHtHcmV5aG91bmRMb2FkZXJ9IGZyb20gXCIuLi8uLi9sb2FkZXJzL0dyZXlob3VuZExvYWRlci5qc1wiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uLy4uL0dsb2JhbC5qc1wiO1xyXG5pbXBvcnQge1BvaW50Q2xvdWRUcmVlLCBQb2ludENsb3VkVHJlZU5vZGV9IGZyb20gXCIuLi9Qb2ludENsb3VkVHJlZS5qc1wiO1xyXG5cclxuY2xhc3MgUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0dGhpcy5zcGFjaW5nID0gMDtcclxuXHRcdHRoaXMuYm91bmRpbmdCb3ggPSBudWxsO1xyXG5cdFx0dGhpcy5yb290ID0gbnVsbDtcclxuXHRcdHRoaXMubm9kZXMgPSBudWxsO1xyXG5cdFx0dGhpcy5wb2ludEF0dHJpYnV0ZXMgPSB7fTtcclxuXHRcdHRoaXMuaGllcmFyY2h5U3RlcFNpemUgPSAtMTtcclxuXHRcdHRoaXMubG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMuc2NoZW1hID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmJhc2VEZXB0aCA9IG51bGw7XHJcblx0XHR0aGlzLm9mZnNldCA9IG51bGw7XHJcblx0XHR0aGlzLnByb2plY3Rpb24gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMuYm91bmRpbmdTcGhlcmUgPSBudWxsO1xyXG5cclxuXHRcdC8vIHRoZSBzZXJ2ZXJVUkwgd2lsbCBjb250YWluIHRoZSBiYXNlIFVSTCBvZiB0aGUgZ3JleWhvdW5kIHNlcnZlci4gZi5lLiBodHRwOi8vZGV2LmdyZXlob3VuZC5pby9yZXNvdXJjZS9hdXR6ZW4vXHJcblx0XHR0aGlzLnNlcnZlclVSTCA9IG51bGw7XHJcblx0XHR0aGlzLm5vcm1hbGl6ZSA9IHtjb2xvcjogZmFsc2UsIGludGVuc2l0eTogZmFsc2V9O1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5Tm9kZShuYW1lLCBwY29HZW9tZXRyeSwgYm91bmRpbmdCb3gsIHNjYWxlLCBvZmZzZXQpXHJcbntcclxuXHR0aGlzLmlkID0gUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5Tm9kZS5JRENvdW50Kys7XHJcblx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR0aGlzLmluZGV4ID0gcGFyc2VJbnQobmFtZS5jaGFyQXQobmFtZS5sZW5ndGggLSAxKSk7XHJcblx0dGhpcy5wY29HZW9tZXRyeSA9IHBjb0dlb21ldHJ5O1xyXG5cdHRoaXMuZ2VvbWV0cnkgPSBudWxsO1xyXG5cdHRoaXMuYm91bmRpbmdCb3ggPSBib3VuZGluZ0JveDtcclxuXHR0aGlzLmJvdW5kaW5nU3BoZXJlID0gYm91bmRpbmdCb3guZ2V0Qm91bmRpbmdTcGhlcmUobmV3IFRIUkVFLlNwaGVyZSgpKTtcclxuXHR0aGlzLnNjYWxlID0gc2NhbGU7XHJcblx0dGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcblx0dGhpcy5jaGlsZHJlbiA9IHt9O1xyXG5cdHRoaXMubnVtUG9pbnRzID0gMDtcclxuXHR0aGlzLmxldmVsID0gbnVsbDtcclxuXHR0aGlzLmxvYWRlZCA9IGZhbHNlO1xyXG5cdHRoaXMub25lVGltZURpc3Bvc2VIYW5kbGVycyA9IFtdO1xyXG5cdHRoaXMuYmFzZUxvYWRlZCA9IGZhbHNlO1xyXG5cclxuXHR2YXIgY2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0dmFyIGJvdW5kcyA9IHRoaXMuYm91bmRpbmdCb3guY2xvbmUoKTtcclxuXHRib3VuZHMubWluLnN1Yih0aGlzLnBjb0dlb21ldHJ5LmJvdW5kaW5nQm94LmdldENlbnRlcihjZW50ZXIpKTtcclxuXHRib3VuZHMubWF4LnN1Yih0aGlzLnBjb0dlb21ldHJ5LmJvdW5kaW5nQm94LmdldENlbnRlcihjZW50ZXIpKTtcclxuXHJcblx0aWYodGhpcy5zY2FsZSlcclxuXHR7XHJcblx0XHRib3VuZHMubWluLm11bHRpcGx5U2NhbGFyKDEgLyB0aGlzLnNjYWxlKTtcclxuXHRcdGJvdW5kcy5tYXgubXVsdGlwbHlTY2FsYXIoMSAvIHRoaXMuc2NhbGUpO1xyXG5cdH1cclxuXHJcblx0Ly9UaGlzIHJlcHJlc2VudHMgdGhlIGJvdW5kcyBmb3IgdGhpcyBub2RlIGluIHRoZSByZWZlcmVuY2UgZnJhbWUgb2YgdGhlXHJcblx0Ly9nbG9iYWwgYm91bmRzIGZyb20gYGluZm9gLCBjZW50ZXJlZCBhcm91bmQgdGhlIG9yaWdpbiwgYW5kIHRoZW4gc2NhbGVkXHJcblx0Ly9ieSBvdXIgc2VsZWN0ZWQgc2NhbGUuXHJcblx0dGhpcy5ncmV5aG91bmRCb3VuZHMgPSBib3VuZHM7XHJcblxyXG5cdC8vVGhpcyByZXByZXNlbnRzIHRoZSBvZmZzZXQgYmV0d2VlbiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gZGVzY3JpYmVkIGFib3ZlXHJcblx0Ly9hbmQgb3VyIHBjb0dlb21ldHJ5IGJvdW5kcy5cclxuXHR0aGlzLmdyZXlob3VuZE9mZnNldCA9IHRoaXMucGNvR2VvbWV0cnkub2Zmc2V0LmNsb25lKCkuYWRkKHRoaXMucGNvR2VvbWV0cnkuYm91bmRpbmdCb3guZ2V0U2l6ZShuZXcgVEhSRUUuVmVjdG9yMygpKS5tdWx0aXBseVNjYWxhcigwLjUpKTtcclxufTtcclxuXHJcblBvaW50Q2xvdWRHcmV5aG91bmRHZW9tZXRyeU5vZGUuSURDb3VudCA9IDA7XHJcblxyXG5Qb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnlOb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUG9pbnRDbG91ZFRyZWVOb2RlLnByb3RvdHlwZSk7XHJcblxyXG5Qb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnlOb2RlLnByb3RvdHlwZS5pc0dlb21ldHJ5Tm9kZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5Tm9kZS5wcm90b3R5cGUuaXNUcmVlTm9kZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblBvaW50Q2xvdWRHcmV5aG91bmRHZW9tZXRyeU5vZGUucHJvdG90eXBlLmlzTG9hZGVkID0gZnVuY3Rpb24oKVxyXG57XHJcblx0cmV0dXJuIHRoaXMubG9hZGVkO1xyXG59O1xyXG5cclxuUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5Tm9kZS5wcm90b3R5cGUuZ2V0Qm91bmRpbmdTcGhlcmUgPSBmdW5jdGlvbigpXHJcbntcclxuXHRyZXR1cm4gdGhpcy5ib3VuZGluZ1NwaGVyZTtcclxufTtcclxuXHJcblBvaW50Q2xvdWRHcmV5aG91bmRHZW9tZXRyeU5vZGUucHJvdG90eXBlLmdldEJvdW5kaW5nQm94ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0cmV0dXJuIHRoaXMuYm91bmRpbmdCb3g7XHJcbn07XHJcblxyXG5Qb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnlOb2RlLnByb3RvdHlwZS5nZXRMZXZlbCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiB0aGlzLmxldmVsO1xyXG59O1xyXG5cclxuUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5Tm9kZS5wcm90b3R5cGUuZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbigpXHJcbntcclxuXHR2YXIgY2hpbGRyZW4gPSBbXTtcclxuXHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IDg7ICsraSlcclxuXHR7XHJcblx0XHRpZih0aGlzLmNoaWxkcmVuW2ldKVxyXG5cdFx0e1xyXG5cdFx0XHRjaGlsZHJlbi5wdXNoKHRoaXMuY2hpbGRyZW5baV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5Tm9kZS5wcm90b3R5cGUuZ2V0VVJMID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dmFyIHNjaGVtYSA9IHRoaXMucGNvR2VvbWV0cnkuc2NoZW1hO1xyXG5cdHZhciBib3VuZHMgPSB0aGlzLmdyZXlob3VuZEJvdW5kcztcclxuXHJcblx0dmFyIGJvdW5kc1N0cmluZyA9IGJvdW5kcy5taW4ueCArIFwiLFwiICsgYm91bmRzLm1pbi55ICsgXCIsXCIgKyBib3VuZHMubWluLnogKyBcIixcIiArIGJvdW5kcy5tYXgueCArIFwiLFwiICsgYm91bmRzLm1heC55ICsgXCIsXCIgKyBib3VuZHMubWF4Lno7XHJcblxyXG5cdHZhciB1cmwgPSBcIlwiICsgdGhpcy5wY29HZW9tZXRyeS5zZXJ2ZXJVUkwgK1xyXG5cdFx0XCJyZWFkP2RlcHRoQmVnaW49XCIgK1xyXG5cdFx0KHRoaXMuYmFzZUxvYWRlZCA/ICh0aGlzLmxldmVsICsgdGhpcy5wY29HZW9tZXRyeS5iYXNlRGVwdGgpIDogMCkgK1xyXG5cdFx0XCImZGVwdGhFbmQ9XCIgKyAodGhpcy5sZXZlbCArIHRoaXMucGNvR2VvbWV0cnkuYmFzZURlcHRoICsgMSkgK1xyXG5cdFx0XCImYm91bmRzPVtcIiArIGJvdW5kc1N0cmluZyArIFwiXVwiICtcclxuXHRcdFwiJnNjaGVtYT1cIiArIEpTT04uc3RyaW5naWZ5KHNjaGVtYSkgK1xyXG5cdFx0XCImY29tcHJlc3M9dHJ1ZVwiO1xyXG5cclxuXHRpZih0aGlzLnNjYWxlKVxyXG5cdHtcclxuXHRcdHVybCArPSBcIiZzY2FsZT1cIiArIHRoaXMuc2NhbGU7XHJcblx0fVxyXG5cclxuXHRpZih0aGlzLmdyZXlob3VuZE9mZnNldClcclxuXHR7XHJcblx0XHR2YXIgb2Zmc2V0ID0gdGhpcy5ncmV5aG91bmRPZmZzZXQ7XHJcblx0XHR1cmwgKz0gXCImb2Zmc2V0PVtcIiArIG9mZnNldC54ICsgXCIsXCIgKyBvZmZzZXQueSArIFwiLFwiICsgb2Zmc2V0LnogKyBcIl1cIjtcclxuXHR9XHJcblxyXG5cdGlmKCF0aGlzLmJhc2VMb2FkZWQpIHRoaXMuYmFzZUxvYWRlZCA9IHRydWU7XHJcblxyXG5cdHJldHVybiB1cmw7XHJcbn07XHJcblxyXG5Qb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnlOb2RlLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uKGNoaWxkKVxyXG57XHJcblx0dGhpcy5jaGlsZHJlbltjaGlsZC5pbmRleF0gPSBjaGlsZDtcclxuXHRjaGlsZC5wYXJlbnQgPSB0aGlzO1xyXG59O1xyXG5cclxuUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5Tm9kZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGlmKHRoaXMubG9hZGluZyA9PT0gdHJ1ZSB8fCB0aGlzLmxvYWRlZCA9PT0gdHJ1ZSB8fCBHbG9iYWwubnVtTm9kZXNMb2FkaW5nID49IEdsb2JhbC5tYXhOb2Rlc0xvYWRpbmcpXHJcblx0e1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nKys7XHJcblxyXG5cdGlmKHRoaXMubGV2ZWwgJSB0aGlzLnBjb0dlb21ldHJ5LmhpZXJhcmNoeVN0ZXBTaXplID09PSAwICYmIHRoaXMuaGFzQ2hpbGRyZW4pXHJcblx0e1xyXG5cdFx0dGhpcy5sb2FkSGllcmFyY2h5VGhlblBvaW50cygpO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0dGhpcy5sb2FkUG9pbnRzKCk7XHJcblx0fVxyXG59O1xyXG5cclxuUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5Tm9kZS5wcm90b3R5cGUubG9hZFBvaW50cyA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMucGNvR2VvbWV0cnkubG9hZGVyLmxvYWQodGhpcyk7XHJcbn07XHJcblxyXG5Qb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnlOb2RlLnByb3RvdHlwZS5sb2FkSGllcmFyY2h5VGhlblBvaW50cyA9IGZ1bmN0aW9uKClcclxue1xyXG5cdC8vRnJvbSBHcmV5aG91bmQgKENhcnRlc2lhbikgb3JkZXJpbmcgZm9yIHRoZSBvY3RyZWUgdG8gUG90cmVlLWRlZmF1bHRcclxuXHR2YXIgdHJhbnNmb3JtID0gWzAsIDIsIDEsIDMsIDQsIDYsIDUsIDddO1xyXG5cclxuXHR2YXIgbWFrZUJpdE1hc2sgPSBmdW5jdGlvbihub2RlKVxyXG5cdHtcclxuXHRcdHZhciBtYXNrID0gMDtcclxuXHRcdE9iamVjdC5rZXlzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24oa2V5KVxyXG5cdFx0e1xyXG5cdFx0XHRpZihrZXkgPT09IFwic3dkXCIpIG1hc2sgKz0gMSA8PCB0cmFuc2Zvcm1bMF07XHJcblx0XHRcdGVsc2UgaWYoa2V5ID09PSBcIm53ZFwiKSBtYXNrICs9IDEgPDwgdHJhbnNmb3JtWzFdO1xyXG5cdFx0XHRlbHNlIGlmKGtleSA9PT0gXCJzd3VcIikgbWFzayArPSAxIDw8IHRyYW5zZm9ybVsyXTtcclxuXHRcdFx0ZWxzZSBpZihrZXkgPT09IFwibnd1XCIpIG1hc2sgKz0gMSA8PCB0cmFuc2Zvcm1bM107XHJcblx0XHRcdGVsc2UgaWYoa2V5ID09PSBcInNlZFwiKSBtYXNrICs9IDEgPDwgdHJhbnNmb3JtWzRdO1xyXG5cdFx0XHRlbHNlIGlmKGtleSA9PT0gXCJuZWRcIikgbWFzayArPSAxIDw8IHRyYW5zZm9ybVs1XTtcclxuXHRcdFx0ZWxzZSBpZihrZXkgPT09IFwic2V1XCIpIG1hc2sgKz0gMSA8PCB0cmFuc2Zvcm1bNl07XHJcblx0XHRcdGVsc2UgaWYoa2V5ID09PSBcIm5ldVwiKSBtYXNrICs9IDEgPDwgdHJhbnNmb3JtWzddO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbWFzaztcclxuXHR9O1xyXG5cclxuXHR2YXIgcGFyc2VDaGlsZHJlbkNvdW50cyA9IGZ1bmN0aW9uKGJhc2UsIHBhcmVudE5hbWUsIHN0YWNrKVxyXG5cdHtcclxuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMoYmFzZSk7XHJcblx0XHR2YXIgY2hpbGQ7XHJcblx0XHR2YXIgY2hpbGROYW1lO1xyXG5cclxuXHRcdGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpXHJcblx0XHR7XHJcblx0XHRcdGlmKGtleSA9PT0gXCJuXCIpIHJldHVybjtcclxuXHRcdFx0c3dpdGNoKGtleSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNhc2UgXCJzd2RcIjpcclxuXHRcdFx0XHRcdGNoaWxkID0gYmFzZS5zd2Q7XHJcblx0XHRcdFx0XHRjaGlsZE5hbWUgPSBwYXJlbnROYW1lICsgdHJhbnNmb3JtWzBdO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcIm53ZFwiOlxyXG5cdFx0XHRcdFx0Y2hpbGQgPSBiYXNlLm53ZDtcclxuXHRcdFx0XHRcdGNoaWxkTmFtZSA9IHBhcmVudE5hbWUgKyB0cmFuc2Zvcm1bMV07XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwic3d1XCI6XHJcblx0XHRcdFx0XHRjaGlsZCA9IGJhc2Uuc3d1O1xyXG5cdFx0XHRcdFx0Y2hpbGROYW1lID0gcGFyZW50TmFtZSArIHRyYW5zZm9ybVsyXTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJud3VcIjpcclxuXHRcdFx0XHRcdGNoaWxkID0gYmFzZS5ud3U7XHJcblx0XHRcdFx0XHRjaGlsZE5hbWUgPSBwYXJlbnROYW1lICsgdHJhbnNmb3JtWzNdO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcInNlZFwiOlxyXG5cdFx0XHRcdFx0Y2hpbGQgPSBiYXNlLnNlZDtcclxuXHRcdFx0XHRcdGNoaWxkTmFtZSA9IHBhcmVudE5hbWUgKyB0cmFuc2Zvcm1bNF07XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwibmVkXCI6XHJcblx0XHRcdFx0XHRjaGlsZCA9IGJhc2UubmVkO1xyXG5cdFx0XHRcdFx0Y2hpbGROYW1lID0gcGFyZW50TmFtZSArIHRyYW5zZm9ybVs1XTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJzZXVcIjpcclxuXHRcdFx0XHRcdGNoaWxkID0gYmFzZS5zZXU7XHJcblx0XHRcdFx0XHRjaGlsZE5hbWUgPSBwYXJlbnROYW1lICsgdHJhbnNmb3JtWzZdO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcIm5ldVwiOlxyXG5cdFx0XHRcdFx0Y2hpbGQgPSBiYXNlLm5ldTtcclxuXHRcdFx0XHRcdGNoaWxkTmFtZSA9IHBhcmVudE5hbWUgKyB0cmFuc2Zvcm1bN107XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN0YWNrLnB1c2goXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGlsZHJlbjogbWFrZUJpdE1hc2soY2hpbGQpLFxyXG5cdFx0XHRcdG51bVBvaW50czogY2hpbGQubixcclxuXHRcdFx0XHRuYW1lOiBjaGlsZE5hbWVcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRwYXJzZUNoaWxkcmVuQ291bnRzKGNoaWxkLCBjaGlsZE5hbWUsIHN0YWNrKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vTG9hZCBoaWVyYXJjaHkuXHJcblx0dmFyIGNhbGxiYWNrID0gZnVuY3Rpb24obm9kZSwgZ3JleWhvdW5kSGllcmFyY2h5KVxyXG5cdHtcclxuXHRcdHZhciBkZWNvZGVkID0gW107XHJcblx0XHRub2RlLm51bVBvaW50cyA9IGdyZXlob3VuZEhpZXJhcmNoeS5uO1xyXG5cdFx0cGFyc2VDaGlsZHJlbkNvdW50cyhncmV5aG91bmRIaWVyYXJjaHksIG5vZGUubmFtZSwgZGVjb2RlZCk7XHJcblxyXG5cdFx0dmFyIG5vZGVzID0ge307XHJcblx0XHRub2Rlc1tub2RlLm5hbWVdID0gbm9kZTtcclxuXHRcdHZhciBwZ2cgPSBub2RlLnBjb0dlb21ldHJ5O1xyXG5cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWNvZGVkLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbmFtZSA9IGRlY29kZWRbaV0ubmFtZTtcclxuXHRcdFx0dmFyIG51bVBvaW50cyA9IGRlY29kZWRbaV0ubnVtUG9pbnRzO1xyXG5cdFx0XHR2YXIgaW5kZXggPSBwYXJzZUludChuYW1lLmNoYXJBdChuYW1lLmxlbmd0aCAtIDEpKTtcclxuXHRcdFx0dmFyIHBhcmVudE5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCAtIDEpO1xyXG5cdFx0XHR2YXIgcGFyZW50Tm9kZSA9IG5vZGVzW3BhcmVudE5hbWVdO1xyXG5cdFx0XHR2YXIgbGV2ZWwgPSBuYW1lLmxlbmd0aCAtIDE7XHJcblx0XHRcdHZhciBib3VuZGluZ0JveCA9IEdyZXlob3VuZExvYWRlci5jcmVhdGVDaGlsZEFBQkIocGFyZW50Tm9kZS5ib3VuZGluZ0JveCwgaW5kZXgpO1xyXG5cclxuXHRcdFx0dmFyIGN1cnJlbnROb2RlID0gbmV3IFBvaW50Q2xvdWRHcmV5aG91bmRHZW9tZXRyeU5vZGUobmFtZSwgcGdnLCBib3VuZGluZ0JveCwgbm9kZS5zY2FsZSwgbm9kZS5vZmZzZXQpO1xyXG5cdFx0XHRjdXJyZW50Tm9kZS5sZXZlbCA9IGxldmVsO1xyXG5cdFx0XHRjdXJyZW50Tm9kZS5udW1Qb2ludHMgPSBudW1Qb2ludHM7XHJcblx0XHRcdGN1cnJlbnROb2RlLmhhc0NoaWxkcmVuID0gZGVjb2RlZFtpXS5jaGlsZHJlbiA+IDA7XHJcblx0XHRcdGN1cnJlbnROb2RlLnNwYWNpbmcgPSBwZ2cuc3BhY2luZyAvIE1hdGgucG93KDIsIGxldmVsKTtcclxuXHJcblx0XHRcdHBhcmVudE5vZGUuYWRkQ2hpbGQoY3VycmVudE5vZGUpO1xyXG5cdFx0XHRub2Rlc1tuYW1lXSA9IGN1cnJlbnROb2RlO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5vZGUubG9hZFBvaW50cygpO1xyXG5cdH07XHJcblxyXG5cdGlmKHRoaXMubGV2ZWwgJSB0aGlzLnBjb0dlb21ldHJ5LmhpZXJhcmNoeVN0ZXBTaXplID09PSAwKVxyXG5cdHtcclxuXHRcdHZhciBkZXB0aEJlZ2luID0gdGhpcy5sZXZlbCArIHRoaXMucGNvR2VvbWV0cnkuYmFzZURlcHRoO1xyXG5cdFx0dmFyIGRlcHRoRW5kID0gZGVwdGhCZWdpbiArIHRoaXMucGNvR2VvbWV0cnkuaGllcmFyY2h5U3RlcFNpemUgKyAyO1xyXG5cclxuXHRcdHZhciBib3VuZHMgPSB0aGlzLmdyZXlob3VuZEJvdW5kcztcclxuXHJcblx0XHR2YXIgYm91bmRzU3RyaW5nID0gYm91bmRzLm1pbi54ICsgXCIsXCIgKyBib3VuZHMubWluLnkgKyBcIixcIiArIGJvdW5kcy5taW4ueiArIFwiLFwiICsgYm91bmRzLm1heC54ICsgXCIsXCIgKyBib3VuZHMubWF4LnkgKyBcIixcIiArIGJvdW5kcy5tYXguejtcclxuXHJcblx0XHR2YXIgaHVybCA9IFwiXCIgKyB0aGlzLnBjb0dlb21ldHJ5LnNlcnZlclVSTCArXHJcblx0XHRcdFwiaGllcmFyY2h5P2JvdW5kcz1bXCIgKyBib3VuZHNTdHJpbmcgKyBcIl1cIiArXHJcblx0XHRcdFwiJmRlcHRoQmVnaW49XCIgKyBkZXB0aEJlZ2luICtcclxuXHRcdFx0XCImZGVwdGhFbmQ9XCIgKyBkZXB0aEVuZDtcclxuXHJcblx0XHRpZih0aGlzLnNjYWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRodXJsICs9IFwiJnNjYWxlPVwiICsgdGhpcy5zY2FsZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLmdyZXlob3VuZE9mZnNldClcclxuXHRcdHtcclxuXHRcdFx0dmFyIG9mZnNldCA9IHRoaXMuZ3JleWhvdW5kT2Zmc2V0O1xyXG5cdFx0XHRodXJsICs9IFwiJm9mZnNldD1bXCIgKyBvZmZzZXQueCArIFwiLFwiICsgb2Zmc2V0LnkgKyBcIixcIiArIG9mZnNldC56ICsgXCJdXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIHhociA9IFhIUkZhY3RvcnkuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9wbGFpblwiKTtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIGh1cmwsIHRydWUpO1xyXG5cdFx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNhbGxiYWNrKHNlbGYsIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkgfHwge30pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nLS07XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlBvdHJlZTogRXhjZXB0aW9uIHRocm93biBwYXJzaW5nIHBvaW50cy5cIiwgZSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHR4aHIub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBvdHJlZTogRmFpbGVkIHRvIGxvYWQgZmlsZSEgSFRUUCBzdGF0dXMgXCIgKyB4aHIuc3RhdHVzICsgXCIsIGZpbGU6XCIgKyBodXJsLCBldmVudCk7XHJcblx0XHR9XHJcblx0XHR4aHIuc2VuZChudWxsKTtcclxuXHR9XHJcbn07XHJcblxyXG5Qb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnlOb2RlLnByb3RvdHlwZS5nZXROdW1Qb2ludHMgPSBmdW5jdGlvbigpXHJcbntcclxuXHRyZXR1cm4gdGhpcy5udW1Qb2ludHM7XHJcbn07XHJcblxyXG5Qb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnlOb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG57XHJcblx0aWYodGhpcy5nZW9tZXRyeSAmJiB0aGlzLnBhcmVudCAhPSBudWxsKVxyXG5cdHtcclxuXHRcdHRoaXMuZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG5cdFx0dGhpcy5nZW9tZXRyeSA9IG51bGw7XHJcblx0XHR0aGlzLmxvYWRlZCA9IGZhbHNlO1xyXG5cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLm9uZVRpbWVEaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciBoYW5kbGVyID0gdGhpcy5vbmVUaW1lRGlzcG9zZUhhbmRsZXJzW2ldO1xyXG5cdFx0XHRoYW5kbGVyKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMub25lVGltZURpc3Bvc2VIYW5kbGVycyA9IFtdO1xyXG5cdH1cclxufTtcclxuXHJcbk9iamVjdC5hc3NpZ24oUG9pbnRDbG91ZEdyZXlob3VuZEdlb21ldHJ5Tm9kZS5wcm90b3R5cGUsIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUpO1xyXG5cclxuZXhwb3J0IHtQb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnksIFBvaW50Q2xvdWRHcmV5aG91bmRHZW9tZXRyeU5vZGV9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuaW1wb3J0IHtQT0NMb2FkZXJ9IGZyb20gXCIuLi8uLi9sb2FkZXJzL1BPQ0xvYWRlci5qc1wiO1xyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uLy4uL0dsb2JhbC5qc1wiO1xyXG5pbXBvcnQge1BvaW50Q2xvdWRUcmVlLCBQb2ludENsb3VkVHJlZU5vZGV9IGZyb20gXCIuLi9Qb2ludENsb3VkVHJlZS5qc1wiO1xyXG5pbXBvcnQge1hIUkZhY3Rvcnl9IGZyb20gXCIuLi8uLi9YSFJGYWN0b3J5LmpzXCI7XHJcblxyXG5jbGFzcyBQb2ludENsb3VkT2N0cmVlR2VvbWV0cnlcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHR0aGlzLnVybCA9IG51bGw7XHJcblx0XHR0aGlzLm9jdHJlZURpciA9IG51bGw7XHJcblx0XHR0aGlzLnNwYWNpbmcgPSAwO1xyXG5cdFx0dGhpcy5ib3VuZGluZ0JveCA9IG51bGw7XHJcblx0XHR0aGlzLnJvb3QgPSBudWxsO1xyXG5cdFx0dGhpcy5ub2RlcyA9IG51bGw7XHJcblx0XHR0aGlzLnBvaW50QXR0cmlidXRlcyA9IG51bGw7XHJcblx0XHR0aGlzLmhpZXJhcmNoeVN0ZXBTaXplID0gLTE7XHJcblx0XHR0aGlzLmxvYWRlciA9IG51bGw7XHJcblx0fVxyXG59O1xyXG5cclxuY2xhc3MgUG9pbnRDbG91ZE9jdHJlZUdlb21ldHJ5Tm9kZSBleHRlbmRzIFBvaW50Q2xvdWRUcmVlTm9kZVxyXG57XHJcblx0Y29uc3RydWN0b3IobmFtZSwgcGNvR2VvbWV0cnksIGJvdW5kaW5nQm94KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pZCA9IFBvaW50Q2xvdWRPY3RyZWVHZW9tZXRyeU5vZGUuSURDb3VudCsrO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuaW5kZXggPSBwYXJzZUludChuYW1lLmNoYXJBdChuYW1lLmxlbmd0aCAtIDEpKTtcclxuXHRcdHRoaXMucGNvR2VvbWV0cnkgPSBwY29HZW9tZXRyeTtcclxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBudWxsO1xyXG5cdFx0dGhpcy5ib3VuZGluZ0JveCA9IGJvdW5kaW5nQm94O1xyXG5cdFx0dGhpcy5ib3VuZGluZ1NwaGVyZSA9IGJvdW5kaW5nQm94LmdldEJvdW5kaW5nU3BoZXJlKG5ldyBUSFJFRS5TcGhlcmUoKSk7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0ge307XHJcblx0XHR0aGlzLm51bVBvaW50cyA9IDA7XHJcblx0XHR0aGlzLmxldmVsID0gbnVsbDtcclxuXHRcdHRoaXMubG9hZGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLm9uZVRpbWVEaXNwb3NlSGFuZGxlcnMgPSBbXTtcclxuXHR9XHJcblxyXG5cdGlzR2VvbWV0cnlOb2RlKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldExldmVsKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5sZXZlbDtcclxuXHR9XHJcblxyXG5cdGlzVHJlZU5vZGUoKVxyXG5cdHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlzTG9hZGVkKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2FkZWQ7XHJcblx0fVxyXG5cclxuXHRnZXRCb3VuZGluZ1NwaGVyZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYm91bmRpbmdTcGhlcmU7XHJcblx0fVxyXG5cclxuXHRnZXRCb3VuZGluZ0JveCgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYm91bmRpbmdCb3g7XHJcblx0fVxyXG5cclxuXHRnZXRDaGlsZHJlbigpXHJcblx0e1xyXG5cdFx0dmFyIGNoaWxkcmVuID0gW107XHJcblxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IDg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5jaGlsZHJlbltpXSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoaWxkcmVuLnB1c2godGhpcy5jaGlsZHJlbltpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY2hpbGRyZW47XHJcblx0fVxyXG5cclxuXHRnZXRVUkwoKVxyXG5cdHtcclxuXHRcdHZhciB1cmwgPSBcIlwiO1xyXG5cdFx0dmFyIHZlcnNpb24gPSB0aGlzLnBjb0dlb21ldHJ5LmxvYWRlci52ZXJzaW9uO1xyXG5cclxuXHRcdGlmKHZlcnNpb24uZXF1YWxPckhpZ2hlcihcIjEuNVwiKSlcclxuXHRcdHtcclxuXHRcdFx0dXJsID0gdGhpcy5wY29HZW9tZXRyeS5vY3RyZWVEaXIgKyBcIi9cIiArIHRoaXMuZ2V0SGllcmFyY2h5UGF0aCgpICsgXCIvXCIgKyB0aGlzLm5hbWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHZlcnNpb24uZXF1YWxPckhpZ2hlcihcIjEuNFwiKSlcclxuXHRcdHtcclxuXHRcdFx0dXJsID0gdGhpcy5wY29HZW9tZXRyeS5vY3RyZWVEaXIgKyBcIi9cIiArIHRoaXMubmFtZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYodmVyc2lvbi51cFRvKFwiMS4zXCIpKVxyXG5cdFx0e1xyXG5cdFx0XHR1cmwgPSB0aGlzLnBjb0dlb21ldHJ5Lm9jdHJlZURpciArIFwiL1wiICsgdGhpcy5uYW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB1cmw7XHJcblx0fVxyXG5cclxuXHRnZXRIaWVyYXJjaHlQYXRoKClcclxuXHR7XHJcblx0XHR2YXIgcGF0aCA9IFwici9cIjtcclxuXHRcdHZhciBoaWVyYXJjaHlTdGVwU2l6ZSA9IHRoaXMucGNvR2VvbWV0cnkuaGllcmFyY2h5U3RlcFNpemU7XHJcblx0XHR2YXIgaW5kaWNlcyA9IHRoaXMubmFtZS5zdWJzdHIoMSk7XHJcblxyXG5cdFx0dmFyIG51bVBhcnRzID0gTWF0aC5mbG9vcihpbmRpY2VzLmxlbmd0aCAvIGhpZXJhcmNoeVN0ZXBTaXplKTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBudW1QYXJ0czsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRwYXRoICs9IGluZGljZXMuc3Vic3RyKGkgKiBoaWVyYXJjaHlTdGVwU2l6ZSwgaGllcmFyY2h5U3RlcFNpemUpICsgXCIvXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0cGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xyXG5cclxuXHRcdHJldHVybiBwYXRoO1xyXG5cdH1cclxuXHJcblx0YWRkQ2hpbGQoY2hpbGQpXHJcblx0e1xyXG5cdFx0dGhpcy5jaGlsZHJlbltjaGlsZC5pbmRleF0gPSBjaGlsZDtcclxuXHRcdGNoaWxkLnBhcmVudCA9IHRoaXM7XHJcblx0fVxyXG5cclxuXHRsb2FkKClcclxuXHR7XHJcblx0XHRpZih0aGlzLmxvYWRpbmcgPT09IHRydWUgfHwgdGhpcy5sb2FkZWQgPT09IHRydWUgfHwgR2xvYmFsLm51bU5vZGVzTG9hZGluZyA+PSBHbG9iYWwubWF4Tm9kZXNMb2FkaW5nKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHRcdEdsb2JhbC5udW1Ob2Rlc0xvYWRpbmcrKztcclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5wY29HZW9tZXRyeS5sb2FkZXIudmVyc2lvbi5lcXVhbE9ySGlnaGVyKFwiMS41XCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoKHRoaXMubGV2ZWwgJSB0aGlzLnBjb0dlb21ldHJ5LmhpZXJhcmNoeVN0ZXBTaXplKSA9PT0gMCAmJiB0aGlzLmhhc0NoaWxkcmVuKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMubG9hZEhpZXJhY2h5VGhlblBvaW50cygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkUG9pbnRzKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMubG9hZFBvaW50cygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRjYXRjaChlKVxyXG5cdFx0e1xyXG5cdFx0XHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nLS07XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJQb3RyZWU6IEV4Y2VwdGlvbiB0aHJvd24gbG9hZGluZyBwb2ludHMgZmlsZS5cIiwgZSk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0bG9hZFBvaW50cygpXHJcblx0e1xyXG5cdFx0dGhpcy5wY29HZW9tZXRyeS5sb2FkZXIubG9hZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGxvYWRIaWVyYWNoeVRoZW5Qb2ludHMoKVxyXG5cdHtcclxuXHRcdHZhciBub2RlID0gdGhpcztcclxuXHJcblx0XHR2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbihub2RlLCBoYnVmZmVyKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhoYnVmZmVyKTtcclxuXHJcblx0XHRcdHZhciBzdGFjayA9IFtdO1xyXG5cdFx0XHR2YXIgY2hpbGRyZW4gPSB2aWV3LmdldFVpbnQ4KDApO1xyXG5cdFx0XHR2YXIgbnVtUG9pbnRzID0gdmlldy5nZXRVaW50MzIoMSwgdHJ1ZSk7XHJcblx0XHRcdG5vZGUubnVtUG9pbnRzID0gbnVtUG9pbnRzO1xyXG5cdFx0XHRzdGFjay5wdXNoKHtjaGlsZHJlbjogY2hpbGRyZW4sIG51bVBvaW50czogbnVtUG9pbnRzLCBuYW1lOiBub2RlLm5hbWV9KTtcclxuXHJcblx0XHRcdHZhciBkZWNvZGVkID0gW107XHJcblx0XHRcdHZhciBvZmZzZXQgPSA1O1xyXG5cclxuXHRcdFx0d2hpbGUoc3RhY2subGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBzbm9kZSA9IHN0YWNrLnNoaWZ0KCk7XHJcblx0XHRcdFx0dmFyIG1hc2sgPSAxO1xyXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCA4OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYoKHNub2RlLmNoaWxkcmVuICYgbWFzaykgIT09IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhciBjaGlsZE5hbWUgPSBzbm9kZS5uYW1lICsgaTtcclxuXHRcdFx0XHRcdFx0dmFyIGNoaWxkQ2hpbGRyZW4gPSB2aWV3LmdldFVpbnQ4KG9mZnNldCk7XHJcblx0XHRcdFx0XHRcdHZhciBjaGlsZE51bVBvaW50cyA9IHZpZXcuZ2V0VWludDMyKG9mZnNldCArIDEsIHRydWUpO1xyXG5cclxuXHRcdFx0XHRcdFx0c3RhY2sucHVzaCh7Y2hpbGRyZW46IGNoaWxkQ2hpbGRyZW4sIG51bVBvaW50czogY2hpbGROdW1Qb2ludHMsIG5hbWU6IGNoaWxkTmFtZX0pO1xyXG5cdFx0XHRcdFx0XHRkZWNvZGVkLnB1c2goe2NoaWxkcmVuOiBjaGlsZENoaWxkcmVuLCBudW1Qb2ludHM6IGNoaWxkTnVtUG9pbnRzLCBuYW1lOiBjaGlsZE5hbWV9KTtcclxuXHJcblx0XHRcdFx0XHRcdG9mZnNldCArPSA1O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdG1hc2sgPSBtYXNrICogMjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKG9mZnNldCA9PT0gaGJ1ZmZlci5ieXRlTGVuZ3RoKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG5vZGVzID0ge307XHJcblx0XHRcdG5vZGVzW25vZGUubmFtZV0gPSBub2RlO1xyXG5cdFx0XHR2YXIgcGNvID0gbm9kZS5wY29HZW9tZXRyeTtcclxuXHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWNvZGVkLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIG5hbWUgPSBkZWNvZGVkW2ldLm5hbWU7XHJcblx0XHRcdFx0dmFyIGRlY29kZWROdW1Qb2ludHMgPSBkZWNvZGVkW2ldLm51bVBvaW50cztcclxuXHRcdFx0XHR2YXIgaW5kZXggPSBwYXJzZUludChuYW1lLmNoYXJBdChuYW1lLmxlbmd0aCAtIDEpKTtcclxuXHRcdFx0XHR2YXIgcGFyZW50TmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoIC0gMSk7XHJcblx0XHRcdFx0dmFyIHBhcmVudE5vZGUgPSBub2Rlc1twYXJlbnROYW1lXTtcclxuXHRcdFx0XHR2YXIgbGV2ZWwgPSBuYW1lLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0dmFyIGJvdW5kaW5nQm94ID0gUE9DTG9hZGVyLmNyZWF0ZUNoaWxkQUFCQihwYXJlbnROb2RlLmJvdW5kaW5nQm94LCBpbmRleCk7XHJcblxyXG5cdFx0XHRcdHZhciBjdXJyZW50Tm9kZSA9IG5ldyBQb2ludENsb3VkT2N0cmVlR2VvbWV0cnlOb2RlKG5hbWUsIHBjbywgYm91bmRpbmdCb3gpO1xyXG5cdFx0XHRcdGN1cnJlbnROb2RlLmxldmVsID0gbGV2ZWw7XHJcblx0XHRcdFx0Y3VycmVudE5vZGUubnVtUG9pbnRzID0gZGVjb2RlZE51bVBvaW50cztcclxuXHRcdFx0XHRjdXJyZW50Tm9kZS5oYXNDaGlsZHJlbiA9IGRlY29kZWRbaV0uY2hpbGRyZW4gPiAwO1xyXG5cdFx0XHRcdGN1cnJlbnROb2RlLnNwYWNpbmcgPSBwY28uc3BhY2luZyAvIE1hdGgucG93KDIsIGxldmVsKTtcclxuXHRcdFx0XHRwYXJlbnROb2RlLmFkZENoaWxkKGN1cnJlbnROb2RlKTtcclxuXHRcdFx0XHRub2Rlc1tuYW1lXSA9IGN1cnJlbnROb2RlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRub2RlLmxvYWRQb2ludHMoKTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdGlmKChub2RlLmxldmVsICUgbm9kZS5wY29HZW9tZXRyeS5oaWVyYXJjaHlTdGVwU2l6ZSkgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHZhciBodXJsID0gbm9kZS5wY29HZW9tZXRyeS5vY3RyZWVEaXIgKyBcIi9cIiArIG5vZGUuZ2V0SGllcmFyY2h5UGF0aCgpICsgXCIvXCIgKyBub2RlLm5hbWUgKyBcIi5ocmNcIjtcclxuXHRcdFx0dmFyIHhociA9IFhIUkZhY3RvcnkuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdFx0eGhyLm9wZW4oXCJHRVRcIiwgaHVybCwgdHJ1ZSk7XHJcblx0XHRcdHhoci5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcblx0XHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9wbGFpbjsgY2hhcnNldD14LXVzZXItZGVmaW5lZFwiKTtcclxuXHRcdFx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2sobm9kZSwgeGhyLnJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goZSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nLS07XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUG90cmVlOiBFeGNlcHRpb24gdGhyb3duIHBhcnNpbmcgcG9pbnRzLlwiLCBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdHhoci5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRHbG9iYWwubnVtTm9kZXNMb2FkaW5nLS07XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlBvdHJlZTogRmFpbGVkIHRvIGxvYWQgZmlsZS5cIiwgeGhyLnN0YXR1cywgaHVybCwgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHhoci5zZW5kKG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0TnVtUG9pbnRzKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5udW1Qb2ludHM7XHJcblx0fVxyXG5cclxuXHRkaXNwb3NlKClcclxuXHR7XHJcblx0XHRpZih0aGlzLmdlb21ldHJ5ICYmIHRoaXMucGFyZW50ICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG5cdFx0XHR0aGlzLmdlb21ldHJ5ID0gbnVsbDtcclxuXHRcdFx0dGhpcy5sb2FkZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLm9uZVRpbWVEaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgaGFuZGxlciA9IHRoaXMub25lVGltZURpc3Bvc2VIYW5kbGVyc1tpXTtcclxuXHRcdFx0XHRoYW5kbGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5vbmVUaW1lRGlzcG9zZUhhbmRsZXJzID0gW107XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuUG9pbnRDbG91ZE9jdHJlZUdlb21ldHJ5Tm9kZS5JRENvdW50ID0gMDtcclxuXHJcbk9iamVjdC5hc3NpZ24oUG9pbnRDbG91ZE9jdHJlZUdlb21ldHJ5Tm9kZS5wcm90b3R5cGUsIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUpO1xyXG5cclxuZXhwb3J0IHtQb2ludENsb3VkT2N0cmVlR2VvbWV0cnksIFBvaW50Q2xvdWRPY3RyZWVHZW9tZXRyeU5vZGV9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuaW1wb3J0IHtIZWxwZXJVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL0hlbHBlclV0aWxzLmpzXCI7XHJcbmltcG9ydCB7R3JhZGllbnRzfSBmcm9tIFwiLi4vLi4vR3JhZGllbnRzLmpzXCI7XHJcbmltcG9ydCB7U2hhZGVyc30gZnJvbSBcIi4uLy4uL1NoYWRlcnMuanNcIjtcclxuaW1wb3J0IHtUcmVlVHlwZSwgUG9pbnRDb2xvclR5cGUsIFBvaW50U2l6ZVR5cGUsIFBvaW50U2hhcGUsIENsYXNzaWZpY2F0aW9ufSBmcm9tIFwiLi4vLi4vUG90cmVlLmpzXCI7XHJcblxyXG5jbGFzcyBQb2ludENsb3VkTWF0ZXJpYWwgZXh0ZW5kcyBUSFJFRS5TaGFkZXJNYXRlcmlhbFxyXG57XHJcblx0Y29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy52aXNpYmxlTm9kZXNUZXh0dXJlID0gSGVscGVyVXRpbHMuZ2VuZXJhdGVEYXRhVGV4dHVyZSgyMDQ4LCAxLCBuZXcgVEhSRUUuQ29sb3IoMHhmZmZmZmYpKTtcclxuXHRcdHRoaXMudmlzaWJsZU5vZGVzVGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xyXG5cdFx0dGhpcy52aXNpYmxlTm9kZXNUZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XHJcblxyXG5cdFx0dmFyIGdldFZhbGlkID0gZnVuY3Rpb24oYSwgYilcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIChhICE9PSB1bmRlZmluZWQpID8gYSA6IGI7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBwb2ludFNpemUgPSBnZXRWYWxpZChwYXJhbWV0ZXJzLnNpemUsIDEuMCk7XHJcblx0XHR2YXIgbWluU2l6ZSA9IGdldFZhbGlkKHBhcmFtZXRlcnMubWluU2l6ZSwgMi4wKTtcclxuXHRcdHZhciBtYXhTaXplID0gZ2V0VmFsaWQocGFyYW1ldGVycy5tYXhTaXplLCA1MC4wKTtcclxuXHRcdHZhciB0cmVlVHlwZSA9IGdldFZhbGlkKHBhcmFtZXRlcnMudHJlZVR5cGUsIFRyZWVUeXBlLk9DVFJFRSk7XHJcblxyXG5cdFx0dGhpcy5fcG9pbnRTaXplVHlwZSA9IFBvaW50U2l6ZVR5cGUuRklYRUQ7XHJcblx0XHR0aGlzLl9zaGFwZSA9IFBvaW50U2hhcGUuU1FVQVJFO1xyXG5cdFx0dGhpcy5fcG9pbnRDb2xvclR5cGUgPSBQb2ludENvbG9yVHlwZS5SR0I7XHJcblx0XHR0aGlzLl93ZWlnaHRlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5fZ3JhZGllbnQgPSBHcmFkaWVudHMuU1BFQ1RSQUw7XHJcblx0XHR0aGlzLl90cmVlVHlwZSA9IHRyZWVUeXBlO1xyXG5cdFx0dGhpcy5fZGVmYXVsdEludGVuc2l0eVJhbmdlQ2hhbmdlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5fZGVmYXVsdEVsZXZhdGlvblJhbmdlQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuZ3JhZGllbnRUZXh0dXJlID0gUG9pbnRDbG91ZE1hdGVyaWFsLmdlbmVyYXRlR3JhZGllbnRUZXh0dXJlKHRoaXMuX2dyYWRpZW50KTtcclxuXHRcdHRoaXMubGlnaHRzID0gZmFsc2U7XHJcblx0XHR0aGlzLmZvZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5kZWZpbmVzID0gbmV3IE1hcCgpO1xyXG5cclxuXHRcdHRoaXMuYXR0cmlidXRlcyA9XHJcblx0XHR7XHJcblx0XHRcdHBvc2l0aW9uOiB7dHlwZTogJ2Z2JywgdmFsdWU6IFtdfSxcclxuXHRcdFx0Y29sb3I6IHt0eXBlOiAnZnYnLCB2YWx1ZTogW119LFxyXG5cdFx0XHRub3JtYWw6IHt0eXBlOiAnZnYnLCB2YWx1ZTogW119LFxyXG5cdFx0XHRpbnRlbnNpdHk6IHt0eXBlOiAnZicsIHZhbHVlOiBbXX0sXHJcblx0XHRcdGNsYXNzaWZpY2F0aW9uOiB7dHlwZTogJ2YnLCB2YWx1ZTogW119LFxyXG5cdFx0XHRyZXR1cm5OdW1iZXI6IHt0eXBlOiAnZicsIHZhbHVlOiBbXX0sXHJcblx0XHRcdG51bWJlck9mUmV0dXJuczoge3R5cGU6ICdmJywgdmFsdWU6IFtdfSxcclxuXHRcdFx0cG9pbnRTb3VyY2VJRDoge3R5cGU6ICdmJywgdmFsdWU6IFtdfSxcclxuXHRcdFx0aW5kaWNlczoge3R5cGU6ICdmdicsIHZhbHVlOiBbXX1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy51bmlmb3JtcyA9XHJcblx0XHR7XHJcblx0XHRcdHByb2plY3Rpb25NYXRyaXg6IHsgdmFsdWU6IG5ldyBUSFJFRS5NYXRyaXg0KCkgfSxcclxuXHRcdFx0dVZpZXdJbnY6IHsgdmFsdWU6IG5ldyBUSFJFRS5NYXRyaXg0KCkgfSxcclxuXHRcdFx0Y2xpcFBsYW5lczogeyB2YWx1ZTogW10gfSxcclxuXHRcdFx0bGV2ZWw6IHt0eXBlOiBcImZcIiwgdmFsdWU6IDAuMH0sXHJcblx0XHRcdHZuU3RhcnQ6IHt0eXBlOiBcImZcIiwgdmFsdWU6IDAuMH0sXHJcblx0XHRcdHNwYWNpbmc6IHt0eXBlOiBcImZcIiwgdmFsdWU6IDEuMH0sXHJcblx0XHRcdGZvdjoge3R5cGU6IFwiZlwiLCB2YWx1ZTogMS4wfSxcclxuXHRcdFx0dVNjcmVlbldpZHRoOiB7dHlwZTogXCJmXCIsIHZhbHVlOiAxLjB9LFxyXG5cdFx0XHR1U2NyZWVuSGVpZ2h0OiB7dHlwZTogXCJmXCIsIHZhbHVlOiAxLjB9LFxyXG5cdFx0XHR1T2N0cmVlU3BhY2luZzoge3R5cGU6IFwiZlwiLCB2YWx1ZTogMC4wIH0sXHJcblx0XHRcdG5lYXI6IHt0eXBlOiBcImZcIiwgdmFsdWU6IDAuMX0sXHJcblx0XHRcdGZhcjoge3R5cGU6IFwiZlwiLCB2YWx1ZTogMS4wfSxcclxuXHRcdFx0dUNvbG9yOiB7dHlwZTogXCJjXCIsIHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoIDB4ZmZmZmZmICl9LFxyXG5cdFx0XHR1T3BhY2l0eToge3R5cGU6IFwiZlwiLCB2YWx1ZTogMS4wfSxcclxuXHRcdFx0c2l6ZToge3R5cGU6IFwiZlwiLCB2YWx1ZTogcG9pbnRTaXplfSxcclxuXHRcdFx0bWluU2l6ZToge3R5cGU6IFwiZlwiLCB2YWx1ZTogbWluU2l6ZX0sXHJcblx0XHRcdG1heFNpemU6IHt0eXBlOiBcImZcIiwgdmFsdWU6IG1heFNpemV9LFxyXG5cdFx0XHRvY3RyZWVTaXplOiB7dHlwZTogXCJmXCIsIHZhbHVlOiAwfSxcclxuXHRcdFx0YmJTaXplOiB7dHlwZTogXCJmdlwiLCB2YWx1ZTogWzAsIDAsIDBdfSxcclxuXHRcdFx0ZWxldmF0aW9uUmFuZ2U6IHt0eXBlOiBcIjJmdlwiLCB2YWx1ZTogWzAsIDBdfSxcclxuXHRcdFx0dmlzaWJsZU5vZGVzOiB7dHlwZTogXCJ0XCIsIHZhbHVlOiB0aGlzLnZpc2libGVOb2Rlc1RleHR1cmV9LFxyXG5cdFx0XHRncmFkaWVudDoge3R5cGU6IFwidFwiLCB2YWx1ZTogdGhpcy5ncmFkaWVudFRleHR1cmV9LFxyXG5cdFx0XHRjbGFzc2lmaWNhdGlvbkxVVDoge3R5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRkaWZmdXNlOiB7dHlwZTogXCJmdlwiLCB2YWx1ZTogWzEsIDEsIDFdfSxcclxuXHRcdFx0dHJhbnNpdGlvbjoge3R5cGU6IFwiZlwiLCB2YWx1ZTogMC41fSxcclxuXHRcdFx0aW50ZW5zaXR5UmFuZ2U6IHt0eXBlOiBcImZ2XCIsIHZhbHVlOiBbMCwgNjUwMDBdfSxcclxuXHRcdFx0aW50ZW5zaXR5R2FtbWE6IHt0eXBlOiBcImZcIiwgdmFsdWU6IDF9LFxyXG5cdFx0XHRpbnRlbnNpdHlDb250cmFzdDoge3R5cGU6IFwiZlwiLCB2YWx1ZTogMH0sXHJcblx0XHRcdGludGVuc2l0eUJyaWdodG5lc3M6e3R5cGU6IFwiZlwiLCB2YWx1ZTogMH0sXHJcblx0XHRcdHJnYkdhbW1hOiB7dHlwZTogXCJmXCIsIHZhbHVlOiAxfSxcclxuXHRcdFx0cmdiQnJpZ2h0bmVzczoge3R5cGU6IFwiZlwiLCB2YWx1ZTogMH0sXHJcblx0XHRcdHVUcmFuc2l0aW9uOiB7dHlwZTogXCJmXCIsIHZhbHVlOiAwfSxcclxuXHRcdFx0d1JHQjoge3R5cGU6IFwiZlwiLCB2YWx1ZTogMX0sXHJcblx0XHRcdHdJbnRlbnNpdHk6IHt0eXBlOiBcImZcIiwgdmFsdWU6IDB9LFxyXG5cdFx0XHR3RWxldmF0aW9uOiB7dHlwZTogXCJmXCIsIHZhbHVlOiAwfSxcclxuXHRcdFx0d0NsYXNzaWZpY2F0aW9uOiB7dHlwZTogXCJmXCIsIHZhbHVlOiAwfSxcclxuXHRcdFx0d1JldHVybk51bWJlcjoge3R5cGU6IFwiZlwiLCB2YWx1ZTogMH0sXHJcblx0XHRcdHdTb3VyY2VJRDoge3R5cGU6IFwiZlwiLCB2YWx1ZTogMH0sXHJcblx0XHRcdGxvZ0RlcHRoQnVmRkM6IHt0eXBlOiBcImZcIiwgdmFsdWU6IDB9LFxyXG5cdFx0XHR1UENJbmRleDogeyB2YWx1ZTogMC4wIH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5jbGFzc2lmaWNhdGlvbiA9IENsYXNzaWZpY2F0aW9uLkRFRkFVTFQ7XHJcblx0XHR0aGlzLmRlZmF1bHRBdHRyaWJ1dGVWYWx1ZXMubm9ybWFsID0gWzAsIDAsIDBdO1xyXG5cdFx0dGhpcy5kZWZhdWx0QXR0cmlidXRlVmFsdWVzLmNsYXNzaWZpY2F0aW9uID0gWzAsIDAsIDBdO1xyXG5cdFx0dGhpcy5kZWZhdWx0QXR0cmlidXRlVmFsdWVzLmluZGljZXMgPSBbMCwgMCwgMCwgMF07XHJcblxyXG5cdFx0dGhpcy5kZWZpbmVzID0gdGhpcy5nZXREZWZpbmVzKCk7XHJcblx0XHR0aGlzLnZlcnRleENvbG9ycyA9IFRIUkVFLlZlcnRleENvbG9ycztcclxuXHJcblx0XHR0aGlzLnZlcnRleFNoYWRlciA9IFNoYWRlcnMudmVydGV4O1xyXG5cdFx0dGhpcy5mcmFnbWVudFNoYWRlciA9IFNoYWRlcnMuZnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRzZXREZWZpbmUoa2V5LCB2YWx1ZSlcclxuXHR7XHJcblx0XHRpZih2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmRlZmluZXMuZ2V0KGtleSkgIT09IHZhbHVlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVzLnNldChrZXksIHZhbHVlKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZU1hdGVyaWFsKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5yZW1vdmVEZWZpbmUoa2V5KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbW92ZURlZmluZShrZXkpXHJcblx0e1xyXG5cdFx0dGhpcy5kZWZpbmVzLmRlbGV0ZShrZXkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTWF0ZXJpYWwoKVxyXG5cdHtcclxuXHRcdHRoaXMuZGVmaW5lcyA9IHRoaXMuZ2V0RGVmaW5lcygpO1xyXG5cclxuXHRcdGlmKHRoaXMub3BhY2l0eSA9PT0gMS4wKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmJsZW5kaW5nID0gVEhSRUUuTm9CbGVuZGluZztcclxuXHRcdFx0dGhpcy50cmFuc3BhcmVudCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmRlcHRoVGVzdCA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGVwdGhXcml0ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGVwdGhGdW5jID0gVEhSRUUuTGVzc0VxdWFsRGVwdGg7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuYmxlbmRpbmcgPSBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nO1xyXG5cdFx0XHR0aGlzLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kZXB0aFRlc3QgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5kZXB0aFdyaXRlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kZXB0aEZ1bmMgPSBUSFJFRS5BbHdheXNEZXB0aDtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLndlaWdodGVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmJsZW5kaW5nID0gVEhSRUUuQWRkaXRpdmVCbGVuZGluZztcclxuXHRcdFx0dGhpcy50cmFuc3BhcmVudCA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGVwdGhUZXN0ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kZXB0aFdyaXRlID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRvbkJlZm9yZUNvbXBpbGUoc2hhZGVyLCByZW5kZXJlcilcclxuXHR7XHJcblx0XHRpZihyZW5kZXJlci5jYXBhYmlsaXRpZXMubG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZpbmVzID0geyAuLi50aGlzLmRlZmluZXMsIFVTRV9MT0dERVBUSEJVRjogdHJ1ZSwgVVNFX0xPR0RFUFRIQlVGX0VYVDogdHJ1ZSwgRVBTSUxPTjogMWUtNiB9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0RGVmaW5lcygpXHJcblx0e1xyXG5cdFx0Y29uc3QgcG9pbnRTaXplVHlwZXMgPSBbXTtcclxuXHRcdHBvaW50U2l6ZVR5cGVzW1BvaW50U2l6ZVR5cGUuRklYRURdID0geyBmaXhlZF9wb2ludF9zaXplOiB0cnVlIH07XHJcblx0XHRwb2ludFNpemVUeXBlc1tQb2ludFNpemVUeXBlLkFUVEVOVUFURURdID0geyBhdHRlbnVhdGVkX3BvaW50X3NpemU6IHRydWUgfTtcclxuXHRcdHBvaW50U2l6ZVR5cGVzW1BvaW50U2l6ZVR5cGUuQURBUFRJVkVdID0geyBhZGFwdGl2ZV9wb2ludF9zaXplOiB0cnVlIH07XHJcblxyXG5cdFx0Y29uc3QgcG9pbnRTaGFwZXMgPSBbXTtcclxuXHRcdHBvaW50U2hhcGVzW1BvaW50U2hhcGUuU1FVQVJFXSA9IHsgc3F1YXJlX3BvaW50X3NoYXBlOiB0cnVlIH07XHJcblx0XHRwb2ludFNoYXBlc1tQb2ludFNoYXBlLkNJUkNMRV0gPSB7IGNpcmNsZV9wb2ludF9zaGFwZTogdHJ1ZSB9O1xyXG5cdFx0cG9pbnRTaGFwZXNbUG9pbnRTaGFwZS5QQVJBQk9MT0lEXSA9IHsgcGFyYWJvbG9pZF9wb2ludF9zaGFwZTogdHJ1ZSB9O1xyXG5cclxuXHRcdGNvbnN0IHBvaW50Q29sb3JUeXBlcyA9IFtdO1xyXG5cdFx0cG9pbnRDb2xvclR5cGVzW1BvaW50Q29sb3JUeXBlLlJHQl0gPSB7IGNvbG9yX3R5cGVfcmdiOiB0cnVlIH1cclxuXHRcdHBvaW50Q29sb3JUeXBlc1tQb2ludENvbG9yVHlwZS5DT0xPUl0gPSB7IGNvbG9yX3R5cGVfY29sb3I6IHRydWUgfVxyXG5cdFx0cG9pbnRDb2xvclR5cGVzW1BvaW50Q29sb3JUeXBlLkRFUFRIXSA9IHsgY29sb3JfdHlwZV9kZXB0aDogdHJ1ZSB9XHJcblx0XHRwb2ludENvbG9yVHlwZXNbUG9pbnRDb2xvclR5cGUuQ09MT1JdID0geyBjb2xvcl90eXBlX2NvbG9yOiB0cnVlIH1cclxuXHRcdHBvaW50Q29sb3JUeXBlc1tQb2ludENvbG9yVHlwZS5IRUlHSFRdID0geyBjb2xvcl90eXBlX2hlaWdodDogdHJ1ZSB9XHJcblx0XHRwb2ludENvbG9yVHlwZXNbUG9pbnRDb2xvclR5cGUuSU5URU5TSVRZXSA9IHsgY29sb3JfdHlwZV9pbnRlbnNpdHk6IHRydWUgfVxyXG5cdFx0cG9pbnRDb2xvclR5cGVzW1BvaW50Q29sb3JUeXBlLklOVEVOU0lUWV9HUkFESUVOVF0gPSB7IGNvbG9yX3R5cGVfaW50ZW5zaXR5X2dyYWRpZW50OiB0cnVlIH1cclxuXHRcdHBvaW50Q29sb3JUeXBlc1tQb2ludENvbG9yVHlwZS5QT0lOVF9JTkRFWF0gPSB7IGNvbG9yX3R5cGVfcG9pbnRfaW5kZXg6IHRydWUgfVxyXG5cdFx0cG9pbnRDb2xvclR5cGVzW1BvaW50Q29sb3JUeXBlLkNMQVNTSUZJQ0FUSU9OXSA9IHsgY29sb3JfdHlwZV9jbGFzc2lmaWNhdGlvbjogdHJ1ZSB9XHJcblx0XHRwb2ludENvbG9yVHlwZXNbUG9pbnRDb2xvclR5cGUuUkVUVVJOX05VTUJFUl0gPSB7IGNvbG9yX3R5cGVfcmV0dXJuX251bWJlcjogdHJ1ZSB9XHJcblx0XHRwb2ludENvbG9yVHlwZXNbUG9pbnRDb2xvclR5cGUuU09VUkNFXSA9IHsgY29sb3JfdHlwZV9zb3VyY2U6IHRydWUgfVxyXG5cdFx0cG9pbnRDb2xvclR5cGVzW1BvaW50Q29sb3JUeXBlLk5PUk1BTF0gPSB7IGNvbG9yX3R5cGVfbm9ybWFsOiB0cnVlIH1cclxuXHRcdHBvaW50Q29sb3JUeXBlc1tQb2ludENvbG9yVHlwZS5SR0JdID0geyBjb2xvcl90eXBlX3JnYjogdHJ1ZSB9XHJcblx0XHRwb2ludENvbG9yVHlwZXNbUG9pbnRDb2xvclR5cGUuUEhPTkddID0geyBjb2xvcl90eXBlX3Bob25nOiB0cnVlIH1cclxuXHRcdHBvaW50Q29sb3JUeXBlc1tQb2ludENvbG9yVHlwZS5SR0JfSEVJR0hUXSA9IHsgY29sb3JfdHlwZV9yZ2JfaGVpZ2h0OiB0cnVlIH1cclxuXHRcdHBvaW50Q29sb3JUeXBlc1tQb2ludENvbG9yVHlwZS5DT01QT1NJVEVdID0geyBjb2xvcl90eXBlX2NvbXBvc2l0ZTogdHJ1ZSB9XHJcblxyXG5cdFx0Y29uc3QgdHJlZVR5cGVzID0gW107XHJcblx0XHR0cmVlVHlwZXNbVHJlZVR5cGUuT0NUUkVFXSA9IHsgdHJlZV90eXBlX29jdHJlZTogdHJ1ZSB9O1xyXG5cdFx0dHJlZVR5cGVzW1RyZWVUeXBlLktEVFJFRV0gPSB7IHRyZWVfdHlwZV9rZHRyZWU6IHRydWUgfTtcclxuXHJcblx0XHR2YXIgZGVmaW5lcyA9IHtcclxuXHRcdFx0Li4ucG9pbnRTaXplVHlwZXNbdGhpcy5wb2ludFNpemVUeXBlXSwgXHJcblx0XHRcdC4uLnBvaW50U2hhcGVzW3RoaXMuc2hhcGVdLFxyXG5cdFx0XHQuLi5wb2ludENvbG9yVHlwZXNbdGhpcy5fcG9pbnRDb2xvclR5cGVdLFxyXG5cdFx0XHQuLi50cmVlVHlwZXNbdGhpcy50cmVlVHlwZV0sXHJcblx0XHRcdC4uLih0aGlzLndlaWdodGVkID8geyB3ZWlnaHRlZF9zcGxhdHM6IHRydWUgfSA6IHt9KVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkZWZpbmVzO1xyXG5cdH1cclxuXHJcblx0Z2V0IGdyYWRpZW50KClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ3JhZGllbnQ7XHJcblx0fVxyXG5cclxuXHRzZXQgZ3JhZGllbnQodmFsdWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5fZ3JhZGllbnQgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl9ncmFkaWVudCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmdyYWRpZW50VGV4dHVyZSA9IFBvaW50Q2xvdWRNYXRlcmlhbC5nZW5lcmF0ZUdyYWRpZW50VGV4dHVyZSh0aGlzLl9ncmFkaWVudCk7XHJcblx0XHRcdHRoaXMudW5pZm9ybXMuZ3JhZGllbnQudmFsdWUgPSB0aGlzLmdyYWRpZW50VGV4dHVyZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldCBjbGFzc2lmaWNhdGlvbigpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NsYXNzaWZpY2F0aW9uO1xyXG5cdH1cclxuXHJcblx0c2V0IGNsYXNzaWZpY2F0aW9uKHZhbHVlKVxyXG5cdHtcclxuXHRcdHZhciBjb3B5ID0ge307XHJcblx0XHRmb3IodmFyIGtleSBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpXHJcblx0XHR7XHJcblx0XHRcdGNvcHlba2V5XSA9IHZhbHVlW2tleV0uY2xvbmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaXNFcXVhbCA9IGZhbHNlO1xyXG5cdFx0aWYodGhpcy5fY2xhc3NpZmljYXRpb24gPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0aXNFcXVhbCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpc0VxdWFsID0gT2JqZWN0LmtleXMoY29weSkubGVuZ3RoID09PSBPYmplY3Qua2V5cyh0aGlzLl9jbGFzc2lmaWNhdGlvbikubGVuZ3RoO1xyXG5cdFx0XHRmb3IodmFyIGtleSBvZiBPYmplY3Qua2V5cyhjb3B5KSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlzRXF1YWwgPSBpc0VxdWFsICYmIHRoaXMuX2NsYXNzaWZpY2F0aW9uW2tleV0gIT09IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpc0VxdWFsID0gaXNFcXVhbCAmJiBjb3B5W2tleV0uZXF1YWxzKHRoaXMuX2NsYXNzaWZpY2F0aW9uW2tleV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIWlzRXF1YWwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuX2NsYXNzaWZpY2F0aW9uID0gY29weTtcclxuXHRcdFx0dGhpcy5yZWNvbXB1dGVDbGFzc2lmaWNhdGlvbigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVjb21wdXRlQ2xhc3NpZmljYXRpb24oKVxyXG5cdHtcclxuXHRcdHRoaXMuY2xhc3NpZmljYXRpb25UZXh0dXJlID0gUG9pbnRDbG91ZE1hdGVyaWFsLmdlbmVyYXRlQ2xhc3NpZmljYXRpb25UZXh0dXJlKHRoaXMuX2NsYXNzaWZpY2F0aW9uKTtcclxuXHRcdHRoaXMudW5pZm9ybXMuY2xhc3NpZmljYXRpb25MVVQudmFsdWUgPSB0aGlzLmNsYXNzaWZpY2F0aW9uVGV4dHVyZTtcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcclxuXHRcdHtcclxuXHRcdFx0dHlwZTogXCJtYXRlcmlhbF9wcm9wZXJ0eV9jaGFuZ2VkXCIsXHJcblx0XHRcdHRhcmdldDogdGhpc1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXQgc3BhY2luZygpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudW5pZm9ybXMuc3BhY2luZy52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNldCBzcGFjaW5nKHZhbHVlKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMudW5pZm9ybXMuc3BhY2luZy52YWx1ZSAhPT0gdmFsdWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudW5pZm9ybXMuc3BhY2luZy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IHdlaWdodGVkKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5fd2VpZ2h0ZWQ7XHJcblx0fVxyXG5cclxuXHRzZXQgd2VpZ2h0ZWQodmFsdWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5fd2VpZ2h0ZWQgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl93ZWlnaHRlZCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1hdGVyaWFsKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgZm92KClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy5mb3YudmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgZm92KHZhbHVlKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMudW5pZm9ybXMuZm92LnZhbHVlICE9PSB2YWx1ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy51bmlmb3Jtcy5mb3YudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNYXRlcmlhbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IHNjcmVlbldpZHRoKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy5zY3JlZW5XaWR0aC52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNldCBzY3JlZW5XaWR0aCh2YWx1ZSlcclxuXHR7XHJcblx0XHRpZih0aGlzLnVuaWZvcm1zLnNjcmVlbldpZHRoLnZhbHVlICE9PSB2YWx1ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy51bmlmb3Jtcy5zY3JlZW5XaWR0aC52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1hdGVyaWFsKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgc2NyZWVuSGVpZ2h0KClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy5zY3JlZW5IZWlnaHQudmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgc2NyZWVuSGVpZ2h0KHZhbHVlKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMudW5pZm9ybXMuc2NyZWVuSGVpZ2h0LnZhbHVlICE9PSB2YWx1ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy51bmlmb3Jtcy5zY3JlZW5IZWlnaHQudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNYXRlcmlhbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IG5lYXIoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnVuaWZvcm1zLm5lYXIudmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgbmVhcih2YWx1ZSlcclxuXHR7XHJcblx0XHRpZih0aGlzLnVuaWZvcm1zLm5lYXIudmFsdWUgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zLm5lYXIudmFsdWUgPSB2YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldCBmYXIoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnVuaWZvcm1zLmZhci52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNldCBmYXIodmFsdWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy51bmlmb3Jtcy5mYXIudmFsdWUgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zLmZhci52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IG9wYWNpdHkoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnVuaWZvcm1zLnVPcGFjaXR5LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2V0IG9wYWNpdHkodmFsdWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy51bmlmb3JtcyAmJiB0aGlzLnVuaWZvcm1zLnVPcGFjaXR5KVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLnVuaWZvcm1zLnVPcGFjaXR5LnZhbHVlICE9PSB2YWx1ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudW5pZm9ybXMudU9wYWNpdHkudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZU1hdGVyaWFsKCk7XHJcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6IFwib3BhY2l0eV9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dHlwZTogXCJtYXRlcmlhbF9wcm9wZXJ0eV9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IHBvaW50Q29sb3JUeXBlKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5fcG9pbnRDb2xvclR5cGU7XHJcblx0fVxyXG5cclxuXHRzZXQgcG9pbnRDb2xvclR5cGUodmFsdWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5fcG9pbnRDb2xvclR5cGUgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl9wb2ludENvbG9yVHlwZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1hdGVyaWFsKCk7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwicG9pbnRfY29sb3JfdHlwZV9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgcG9pbnRTaXplVHlwZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BvaW50U2l6ZVR5cGU7XHJcblx0fVxyXG5cclxuXHRzZXQgcG9pbnRTaXplVHlwZSh2YWx1ZSlcclxuXHR7XHJcblx0XHRpZih0aGlzLl9wb2ludFNpemVUeXBlICE9PSB2YWx1ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fcG9pbnRTaXplVHlwZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1hdGVyaWFsKCk7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwicG9pbnRfc2l6ZV90eXBlX2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwibWF0ZXJpYWxfcHJvcGVydHlfY2hhbmdlZFwiLFxyXG5cdFx0XHRcdHRhcmdldDogdGhpc1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldCBjb2xvcigpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudW5pZm9ybXMudUNvbG9yLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2V0IGNvbG9yKHZhbHVlKVxyXG5cdHtcclxuXHRcdGlmKCF0aGlzLnVuaWZvcm1zLnVDb2xvci52YWx1ZS5lcXVhbHModmFsdWUpKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zLnVDb2xvci52YWx1ZS5jb3B5KHZhbHVlKTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJjb2xvcl9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgc2hhcGUoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLl9zaGFwZTtcclxuXHR9XHJcblxyXG5cdHNldCBzaGFwZSh2YWx1ZSlcclxuXHR7XHJcblx0XHRpZih0aGlzLl9zaGFwZSAhPT0gdmFsdWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuX3NoYXBlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMudXBkYXRlTWF0ZXJpYWwoKTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJwb2ludF9zaGFwZV9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgdHJlZVR5cGUoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLl90cmVlVHlwZTtcclxuXHR9XHJcblxyXG5cdHNldCB0cmVlVHlwZSh2YWx1ZSlcclxuXHR7XHJcblx0XHRpZih0aGlzLl90cmVlVHlwZSAhPT0gdmFsdWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuX3RyZWVUeXBlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMudXBkYXRlTWF0ZXJpYWwoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldCBiYlNpemUoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnVuaWZvcm1zLmJiU2l6ZS52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNldCBiYlNpemUodmFsdWUpXHJcblx0e1xyXG5cdFx0dGhpcy51bmlmb3Jtcy5iYlNpemUudmFsdWUgPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdGdldCBzaXplKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy5zaXplLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2V0IHNpemUodmFsdWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy51bmlmb3Jtcy5zaXplLnZhbHVlICE9PSB2YWx1ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy51bmlmb3Jtcy5zaXplLnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwicG9pbnRfc2l6ZV9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgZWxldmF0aW9uUmFuZ2UoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnVuaWZvcm1zLmVsZXZhdGlvblJhbmdlLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2V0IGVsZXZhdGlvblJhbmdlKHZhbHVlKVxyXG5cdHtcclxuXHRcdHZhciBjaGFuZ2VkID0gdGhpcy51bmlmb3Jtcy5lbGV2YXRpb25SYW5nZS52YWx1ZVswXSAhPT0gdmFsdWVbMF0gfHxcclxuXHRcdFx0dGhpcy51bmlmb3Jtcy5lbGV2YXRpb25SYW5nZS52YWx1ZVsxXSAhPT0gdmFsdWVbMV07XHJcblx0XHRpZihjaGFuZ2VkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zLmVsZXZhdGlvblJhbmdlLnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuX2RlZmF1bHRFbGV2YXRpb25SYW5nZUNoYW5nZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgaGVpZ2h0TWluKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy5lbGV2YXRpb25SYW5nZS52YWx1ZVswXTtcclxuXHR9XHJcblxyXG5cdHNldCBoZWlnaHRNaW4odmFsdWUpXHJcblx0e1xyXG5cdFx0dGhpcy5lbGV2YXRpb25SYW5nZSA9IFt2YWx1ZSwgdGhpcy5lbGV2YXRpb25SYW5nZVsxXV07XHJcblx0fVxyXG5cclxuXHRnZXQgaGVpZ2h0TWF4KClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy5lbGV2YXRpb25SYW5nZS52YWx1ZVsxXTtcclxuXHR9XHJcblxyXG5cdHNldCBoZWlnaHRNYXgodmFsdWUpXHJcblx0e1xyXG5cdFx0dGhpcy5lbGV2YXRpb25SYW5nZSA9IFt0aGlzLmVsZXZhdGlvblJhbmdlWzBdLCB2YWx1ZV07XHJcblx0fVxyXG5cclxuXHRnZXQgdHJhbnNpdGlvbigpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudW5pZm9ybXMudHJhbnNpdGlvbi52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNldCB0cmFuc2l0aW9uKHZhbHVlKVxyXG5cdHtcclxuXHRcdHRoaXMudW5pZm9ybXMudHJhbnNpdGlvbi52YWx1ZSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0Z2V0IGludGVuc2l0eVJhbmdlKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy5pbnRlbnNpdHlSYW5nZS52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNldCBpbnRlbnNpdHlSYW5nZSh2YWx1ZSlcclxuXHR7XHJcblx0XHRpZighKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgJiYgdmFsdWUubGVuZ3RoID09PSAyKSlcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHZhbHVlWzBdID09PSB0aGlzLnVuaWZvcm1zLmludGVuc2l0eVJhbmdlLnZhbHVlWzBdICYmIHZhbHVlWzFdID09PSB0aGlzLnVuaWZvcm1zLmludGVuc2l0eVJhbmdlLnZhbHVlWzFdKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51bmlmb3Jtcy5pbnRlbnNpdHlSYW5nZS52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5fZGVmYXVsdEludGVuc2l0eVJhbmdlQ2hhbmdlZCA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxyXG5cdFx0e1xyXG5cdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldCBpbnRlbnNpdHlHYW1tYSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudW5pZm9ybXMuaW50ZW5zaXR5R2FtbWEudmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgaW50ZW5zaXR5R2FtbWEodmFsdWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy51bmlmb3Jtcy5pbnRlbnNpdHlHYW1tYS52YWx1ZSAhPT0gdmFsdWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudW5pZm9ybXMuaW50ZW5zaXR5R2FtbWEudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJtYXRlcmlhbF9wcm9wZXJ0eV9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IGludGVuc2l0eUNvbnRyYXN0KClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy5pbnRlbnNpdHlDb250cmFzdC52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNldCBpbnRlbnNpdHlDb250cmFzdCh2YWx1ZSlcclxuXHR7XHJcblx0XHRpZih0aGlzLnVuaWZvcm1zLmludGVuc2l0eUNvbnRyYXN0LnZhbHVlICE9PSB2YWx1ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy51bmlmb3Jtcy5pbnRlbnNpdHlDb250cmFzdC52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgaW50ZW5zaXR5QnJpZ2h0bmVzcygpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudW5pZm9ybXMuaW50ZW5zaXR5QnJpZ2h0bmVzcy52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNldCBpbnRlbnNpdHlCcmlnaHRuZXNzKHZhbHVlKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMudW5pZm9ybXMuaW50ZW5zaXR5QnJpZ2h0bmVzcy52YWx1ZSAhPT0gdmFsdWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudW5pZm9ybXMuaW50ZW5zaXR5QnJpZ2h0bmVzcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgcmdiR2FtbWEoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnVuaWZvcm1zLnJnYkdhbW1hLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2V0IHJnYkdhbW1hKHZhbHVlKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMudW5pZm9ybXMucmdiR2FtbWEudmFsdWUgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zLnJnYkdhbW1hLnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwibWF0ZXJpYWxfcHJvcGVydHlfY2hhbmdlZFwiLFxyXG5cdFx0XHRcdHRhcmdldDogdGhpc1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGdldCByZ2JDb250cmFzdCgpXHJcblx0Ly8ge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMudW5pZm9ybXMucmdiQ29udHJhc3QudmFsdWU7XHJcblx0Ly8gfVxyXG5cclxuXHQvLyBzZXQgcmdiQ29udHJhc3QodmFsdWUpXHJcblx0Ly8ge1xyXG5cdC8vIFx0aWYodGhpcy51bmlmb3Jtcy5yZ2JDb250cmFzdC52YWx1ZSAhPT0gdmFsdWUpXHJcblx0Ly8gXHR7XHJcblx0Ly8gXHRcdHRoaXMudW5pZm9ybXMucmdiQ29udHJhc3QudmFsdWUgPSB2YWx1ZTtcclxuXHQvLyBcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxyXG5cdC8vIFx0XHR7XHJcblx0Ly8gXHRcdFx0dHlwZTogXCJtYXRlcmlhbF9wcm9wZXJ0eV9jaGFuZ2VkXCIsXHJcblx0Ly8gXHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0Ly8gXHRcdH0pO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblx0Z2V0IHJnYkJyaWdodG5lc3MoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnVuaWZvcm1zLnJnYkJyaWdodG5lc3MudmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgcmdiQnJpZ2h0bmVzcyh2YWx1ZSlcclxuXHR7XHJcblx0XHRpZih0aGlzLnVuaWZvcm1zLnJnYkJyaWdodG5lc3MudmFsdWUgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zLnJnYkJyaWdodG5lc3MudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJtYXRlcmlhbF9wcm9wZXJ0eV9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IHdlaWdodFJHQigpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudW5pZm9ybXMud1JHQi52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNldCB3ZWlnaHRSR0IodmFsdWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy51bmlmb3Jtcy53UkdCLnZhbHVlICE9PSB2YWx1ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy51bmlmb3Jtcy53UkdCLnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwibWF0ZXJpYWxfcHJvcGVydHlfY2hhbmdlZFwiLFxyXG5cdFx0XHRcdHRhcmdldDogdGhpc1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldCB3ZWlnaHRJbnRlbnNpdHkoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnVuaWZvcm1zLndJbnRlbnNpdHkudmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgd2VpZ2h0SW50ZW5zaXR5KHZhbHVlKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMudW5pZm9ybXMud0ludGVuc2l0eS52YWx1ZSAhPT0gdmFsdWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudW5pZm9ybXMud0ludGVuc2l0eS52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgd2VpZ2h0RWxldmF0aW9uKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy53RWxldmF0aW9uLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2V0IHdlaWdodEVsZXZhdGlvbih2YWx1ZSlcclxuXHR7XHJcblx0XHRpZih0aGlzLnVuaWZvcm1zLndFbGV2YXRpb24udmFsdWUgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zLndFbGV2YXRpb24udmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJtYXRlcmlhbF9wcm9wZXJ0eV9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IHdlaWdodENsYXNzaWZpY2F0aW9uKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy53Q2xhc3NpZmljYXRpb24udmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgd2VpZ2h0Q2xhc3NpZmljYXRpb24odmFsdWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy51bmlmb3Jtcy53Q2xhc3NpZmljYXRpb24udmFsdWUgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zLndDbGFzc2lmaWNhdGlvbi52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgd2VpZ2h0UmV0dXJuTnVtYmVyKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy53UmV0dXJuTnVtYmVyLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2V0IHdlaWdodFJldHVybk51bWJlcih2YWx1ZSlcclxuXHR7XHJcblx0XHRpZih0aGlzLnVuaWZvcm1zLndSZXR1cm5OdW1iZXIudmFsdWUgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zLndSZXR1cm5OdW1iZXIudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJtYXRlcmlhbF9wcm9wZXJ0eV9jaGFuZ2VkXCIsXHJcblx0XHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IHdlaWdodFNvdXJjZUlEKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51bmlmb3Jtcy53U291cmNlSUQudmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgd2VpZ2h0U291cmNlSUQodmFsdWUpXHJcblx0e1xyXG5cdFx0aWYodGhpcy51bmlmb3Jtcy53U291cmNlSUQudmFsdWUgIT09IHZhbHVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zLndTb3VyY2VJRC52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcIm1hdGVyaWFsX3Byb3BlcnR5X2NoYW5nZWRcIixcclxuXHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2VuZXJhdGVHcmFkaWVudFRleHR1cmUoZ3JhZGllbnQpXHJcblx0e1xyXG5cdFx0dmFyIHNpemUgPSA2NDtcclxuXHJcblx0XHQvL0NyZWF0ZSBjYW52YXNcclxuXHRcdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cdFx0Y2FudmFzLndpZHRoID0gc2l6ZTtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSBzaXplO1xyXG5cclxuXHRcdC8vR2V0IGNvbnRleHRcclxuXHRcdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcblx0XHQvL0RyYXcgZ3JhZGllbnRcclxuXHRcdGNvbnRleHQucmVjdCgwLCAwLCBzaXplLCBzaXplKTtcclxuXHRcdHZhciBjdHhHcmFkaWVudCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgc2l6ZSwgc2l6ZSk7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZ3JhZGllbnQubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciBzdGVwID0gZ3JhZGllbnRbaV07XHJcblx0XHRcdGN0eEdyYWRpZW50LmFkZENvbG9yU3RvcChzdGVwWzBdLCBcIiNcIiArIHN0ZXBbMV0uZ2V0SGV4U3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cdFx0Y29udGV4dC5maWxsU3R5bGUgPSBjdHhHcmFkaWVudDtcclxuXHRcdGNvbnRleHQuZmlsbCgpO1xyXG5cclxuXHRcdHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY2FudmFzKTtcclxuXHRcdHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0dGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcblxyXG5cdFx0cmV0dXJuIHRleHR1cmU7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2VuZXJhdGVDbGFzc2lmaWNhdGlvblRleHR1cmUoY2xhc3NpZmljYXRpb24pXHJcblx0e1xyXG5cdFx0dmFyIHdpZHRoID0gMjU2O1xyXG5cdFx0dmFyIGhlaWdodCA9IDI1NjtcclxuXHRcdHZhciBzaXplID0gd2lkdGggKiBoZWlnaHQ7XHJcblx0XHR2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KDQgKiBzaXplKTtcclxuXHRcdGZvcih2YXIgeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IodmFyIHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgaSA9IHggKyB3aWR0aCAqIHk7XHJcblx0XHRcdFx0dmFyIGNvbG9yO1xyXG5cdFx0XHRcdGlmKGNsYXNzaWZpY2F0aW9uW3hdKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbG9yID0gY2xhc3NpZmljYXRpb25beF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYoY2xhc3NpZmljYXRpb25beCAlIDMyXSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xvciA9IGNsYXNzaWZpY2F0aW9uW3ggJSAzMl07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xvciA9IGNsYXNzaWZpY2F0aW9uLkRFRkFVTFQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGRhdGFbNCAqIGkgKyAwXSA9IDI1NSAqIGNvbG9yLng7XHJcblx0XHRcdFx0ZGF0YVs0ICogaSArIDFdID0gMjU1ICogY29sb3IueTtcclxuXHRcdFx0XHRkYXRhWzQgKiBpICsgMl0gPSAyNTUgKiBjb2xvci56O1xyXG5cdFx0XHRcdGRhdGFbNCAqIGkgKyAzXSA9IDI1NSAqIGNvbG9yLnc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLkRhdGFUZXh0dXJlKGRhdGEsIHdpZHRoLCBoZWlnaHQsIFRIUkVFLlJHQkFGb3JtYXQpO1xyXG5cdFx0dGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xyXG5cdFx0dGV4dHVyZS53cmFwUyA9IHRleHR1cmUud3JhcFQgPSBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nO1xyXG5cdFx0dGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdGV4dHVyZTtcclxuXHR9XHJcblxyXG5cdGRpc2FibGVFdmVudHMoKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMuX2hpZGRlbkxpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl9oaWRkZW5MaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnM7XHJcblx0XHRcdHRoaXMuX2xpc3RlbmVycyA9IHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZW5hYmxlRXZlbnRzKClcclxuXHR7XHJcblx0XHR0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9oaWRkZW5MaXN0ZW5lcnM7XHJcblx0XHR0aGlzLl9oaWRkZW5MaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHRjb3B5RnJvbShmcm9tKVxyXG5cdHtcclxuXHRcdGZvcih2YXIgbmFtZSBvZiB0aGlzLnVuaWZvcm1zKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnVuaWZvcm1zW25hbWVdLnZhbHVlID0gZnJvbS51bmlmb3Jtc1tuYW1lXS52YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQge1BvaW50Q2xvdWRNYXRlcmlhbH07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5jbGFzcyBIZWxwZXJVdGlsc1xyXG57XHJcblx0LyoqXHJcblx0ICogQ3JhZXRlIGEgbmV3IGRhdGEgdGV4dHVyZSB3aXRoIGEgc29saWQgY29sb3IuXHJcblx0ICovXHJcblx0c3RhdGljIGdlbmVyYXRlRGF0YVRleHR1cmUod2lkdGgsIGhlaWdodCwgY29sb3IpXHJcblx0e1xyXG5cdFx0dmFyIHNpemUgPSB3aWR0aCAqIGhlaWdodDtcclxuXHRcdHZhciBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoNCAqIHdpZHRoICogaGVpZ2h0KTtcclxuXHJcblx0XHR2YXIgciA9IE1hdGguZmxvb3IoY29sb3IuciAqIDI1NSk7XHJcblx0XHR2YXIgZyA9IE1hdGguZmxvb3IoY29sb3IuZyAqIDI1NSk7XHJcblx0XHR2YXIgYiA9IE1hdGguZmxvb3IoY29sb3IuYiAqIDI1NSk7XHJcblxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0ZGF0YVtpICogM10gPSByO1xyXG5cdFx0XHRkYXRhW2kgKiAzICsgMV0gPSBnO1xyXG5cdFx0XHRkYXRhW2kgKiAzICsgMl0gPSBiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLkRhdGFUZXh0dXJlKGRhdGEsIHdpZHRoLCBoZWlnaHQsIFRIUkVFLlJHQkFGb3JtYXQpO1xyXG5cdFx0dGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XHJcblxyXG5cdFx0cmV0dXJuIHRleHR1cmU7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ29tcHV0ZSBhIHRyYW5zZm9ybWVkIGJvdWRpbmcgYm94IGZyb20gYW4gb3JpZ2luYWwgYm94IGFuZCBhIHRyYW5zZm9ybSBtYXRyaXguXHJcblx0ICovXHJcblx0c3RhdGljIGNvbXB1dGVUcmFuc2Zvcm1lZEJvdW5kaW5nQm94KGJveCwgdHJhbnNmb3JtKVxyXG5cdHtcclxuXHRcdHZhciB2ZXJ0aWNlcyA9IFtcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoYm94Lm1pbi54LCBib3gubWluLnksIGJveC5taW4ueikuYXBwbHlNYXRyaXg0KHRyYW5zZm9ybSksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKGJveC5taW4ueCwgYm94Lm1pbi55LCBib3gubWluLnopLmFwcGx5TWF0cml4NCh0cmFuc2Zvcm0pLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyhib3gubWF4LngsIGJveC5taW4ueSwgYm94Lm1pbi56KS5hcHBseU1hdHJpeDQodHJhbnNmb3JtKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoYm94Lm1pbi54LCBib3gubWF4LnksIGJveC5taW4ueikuYXBwbHlNYXRyaXg0KHRyYW5zZm9ybSksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKGJveC5taW4ueCwgYm94Lm1pbi55LCBib3gubWF4LnopLmFwcGx5TWF0cml4NCh0cmFuc2Zvcm0pLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyhib3gubWluLngsIGJveC5tYXgueSwgYm94Lm1heC56KS5hcHBseU1hdHJpeDQodHJhbnNmb3JtKSxcclxuXHRcdFx0bmV3IFRIUkVFLlZlY3RvcjMoYm94Lm1heC54LCBib3gubWF4LnksIGJveC5taW4ueikuYXBwbHlNYXRyaXg0KHRyYW5zZm9ybSksXHJcblx0XHRcdG5ldyBUSFJFRS5WZWN0b3IzKGJveC5tYXgueCwgYm94Lm1pbi55LCBib3gubWF4LnopLmFwcGx5TWF0cml4NCh0cmFuc2Zvcm0pLFxyXG5cdFx0XHRuZXcgVEhSRUUuVmVjdG9yMyhib3gubWF4LngsIGJveC5tYXgueSwgYm94Lm1heC56KS5hcHBseU1hdHJpeDQodHJhbnNmb3JtKVxyXG5cdFx0XTtcclxuXHJcblx0XHR2YXIgYm91bmRpbmdCb3ggPSBuZXcgVEhSRUUuQm94MygpO1xyXG5cdFx0Ym91bmRpbmdCb3guc2V0RnJvbVBvaW50cyh2ZXJ0aWNlcyk7XHJcblx0XHRcclxuXHRcdHJldHVybiBib3VuZGluZ0JveDtcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IHtIZWxwZXJVdGlsc307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQge0dsb2JhbH0gZnJvbSBcIi4uL0dsb2JhbC5qc1wiO1xyXG5cclxuY2xhc3MgTFJVSXRlbVxyXG57XHJcblx0Y29uc3RydWN0b3Iobm9kZSlcclxuXHR7XHJcblx0XHR0aGlzLnByZXZpb3VzID0gbnVsbDtcclxuXHRcdHRoaXMubmV4dCA9IG51bGw7XHJcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBBIGRvdWJseS1saW5rZWQtbGlzdCBvZiB0aGUgbGVhc3QgcmVjZW50bHkgdXNlZCBlbGVtZW50cy5cclxuICovXHJcbmNsYXNzIExSVVxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdC8vIHRoZSBsZWFzdCByZWNlbnRseSB1c2VkIGl0ZW1cclxuXHRcdHRoaXMuZmlyc3QgPSBudWxsO1xyXG5cdFx0Ly8gdGhlIG1vc3QgcmVjZW50bHkgdXNlZCBpdGVtXHJcblx0XHR0aGlzLmxhc3QgPSBudWxsO1xyXG5cdFx0Ly8gYSBsaXN0IG9mIGFsbCBpdGVtcyBpbiB0aGUgbHJ1IGxpc3RcclxuXHRcdHRoaXMuaXRlbXMgPSB7fTtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSAwO1xyXG5cdFx0dGhpcy5udW1Qb2ludHMgPSAwO1xyXG5cdH1cclxuXHJcblx0c2l6ZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudHM7XHJcblx0fVxyXG5cclxuXHRjb250YWlucyhub2RlKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLml0ZW1zW25vZGUuaWRdID09IG51bGw7XHJcblx0fVxyXG5cclxuXHR0b3VjaChub2RlKVxyXG5cdHtcclxuXHRcdGlmKCFub2RlLmxvYWRlZClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpdGVtO1xyXG5cclxuXHRcdGlmKHRoaXMuaXRlbXNbbm9kZS5pZF0gPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Ly8gYWRkIHRvIGxpc3RcclxuXHRcdFx0aXRlbSA9IG5ldyBMUlVJdGVtKG5vZGUpO1xyXG5cdFx0XHRpdGVtLnByZXZpb3VzID0gdGhpcy5sYXN0O1xyXG5cdFx0XHR0aGlzLmxhc3QgPSBpdGVtO1xyXG5cdFx0XHRpZihpdGVtLnByZXZpb3VzICE9PSBudWxsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aXRlbS5wcmV2aW91cy5uZXh0ID0gaXRlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5pdGVtc1tub2RlLmlkXSA9IGl0ZW07XHJcblx0XHRcdHRoaXMuZWxlbWVudHMrKztcclxuXHJcblx0XHRcdGlmKHRoaXMuZmlyc3QgPT09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmZpcnN0ID0gaXRlbTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm51bVBvaW50cyArPSBub2RlLm51bVBvaW50cztcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gdXBkYXRlIGluIGxpc3RcclxuXHRcdFx0aXRlbSA9IHRoaXMuaXRlbXNbbm9kZS5pZF07XHJcblxyXG5cdFx0XHRpZihpdGVtLnByZXZpb3VzID09PSBudWxsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaGFuZGxlIHRvdWNoIG9uIGZpcnN0IGVsZW1lbnRcclxuXHRcdFx0XHRpZihpdGVtLm5leHQgIT09IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5maXJzdCA9IGl0ZW0ubmV4dDtcclxuXHRcdFx0XHRcdHRoaXMuZmlyc3QucHJldmlvdXMgPSBudWxsO1xyXG5cdFx0XHRcdFx0aXRlbS5wcmV2aW91cyA9IHRoaXMubGFzdDtcclxuXHRcdFx0XHRcdGl0ZW0ubmV4dCA9IG51bGw7XHJcblx0XHRcdFx0XHR0aGlzLmxhc3QgPSBpdGVtO1xyXG5cdFx0XHRcdFx0aXRlbS5wcmV2aW91cy5uZXh0ID0gaXRlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihpdGVtLm5leHQgIT09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBoYW5kbGUgdG91Y2ggb24gYW55IG90aGVyIGVsZW1lbnRcclxuXHRcdFx0XHRpdGVtLnByZXZpb3VzLm5leHQgPSBpdGVtLm5leHQ7XHJcblx0XHRcdFx0aXRlbS5uZXh0LnByZXZpb3VzID0gaXRlbS5wcmV2aW91cztcclxuXHRcdFx0XHRpdGVtLnByZXZpb3VzID0gdGhpcy5sYXN0O1xyXG5cdFx0XHRcdGl0ZW0ubmV4dCA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5sYXN0ID0gaXRlbTtcclxuXHRcdFx0XHRpdGVtLnByZXZpb3VzLm5leHQgPSBpdGVtO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW1vdmUobm9kZSlcclxuXHR7XHJcblx0XHR2YXIgbHJ1SXRlbSA9IHRoaXMuaXRlbXNbbm9kZS5pZF07XHJcblx0XHRpZihscnVJdGVtKVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmVsZW1lbnRzID09PSAxKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5maXJzdCA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5sYXN0ID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZighbHJ1SXRlbS5wcmV2aW91cylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmZpcnN0ID0gbHJ1SXRlbS5uZXh0O1xyXG5cdFx0XHRcdFx0dGhpcy5maXJzdC5wcmV2aW91cyA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKCFscnVJdGVtLm5leHQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5sYXN0ID0gbHJ1SXRlbS5wcmV2aW91cztcclxuXHRcdFx0XHRcdHRoaXMubGFzdC5uZXh0ID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYobHJ1SXRlbS5wcmV2aW91cyAmJiBscnVJdGVtLm5leHQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bHJ1SXRlbS5wcmV2aW91cy5uZXh0ID0gbHJ1SXRlbS5uZXh0O1xyXG5cdFx0XHRcdFx0bHJ1SXRlbS5uZXh0LnByZXZpb3VzID0gbHJ1SXRlbS5wcmV2aW91cztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRlbGV0ZSB0aGlzLml0ZW1zW25vZGUuaWRdO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzLS07XHJcblx0XHRcdHRoaXMubnVtUG9pbnRzIC09IG5vZGUubnVtUG9pbnRzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0TFJVSXRlbSgpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5maXJzdCA9PT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHR2YXIgbHJ1ID0gdGhpcy5maXJzdDtcclxuXHJcblx0XHRyZXR1cm4gbHJ1Lm5vZGU7XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpXHJcblx0e1xyXG5cdFx0dmFyIHN0cmluZyA9IFwieyBcIjtcclxuXHRcdHZhciBjdXJyID0gdGhpcy5maXJzdDtcclxuXHJcblx0XHR3aGlsZSAoY3VyciAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0c3RyaW5nICs9IGN1cnIubm9kZS5pZDtcclxuXHRcdFx0aWYoY3Vyci5uZXh0ICE9PSBudWxsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3RyaW5nICs9IFwiLCBcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRjdXJyID0gY3Vyci5uZXh0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0cmluZyArPSBcIn1cIjtcclxuXHRcdHN0cmluZyArPSBcIihcIiArIHRoaXMuc2l6ZSgpICsgXCIpXCI7XHJcblx0XHRyZXR1cm4gc3RyaW5nO1xyXG5cdH1cclxuXHJcblx0ZnJlZU1lbW9yeSgpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5lbGVtZW50cyA8PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0d2hpbGUodGhpcy5udW1Qb2ludHMgPiBHbG9iYWwucG9pbnRMb2FkTGltaXQpXHJcblx0XHR7XHJcblx0XHRcdHZhciBlbGVtZW50ID0gdGhpcy5maXJzdDtcclxuXHRcdFx0dmFyIG5vZGUgPSBlbGVtZW50Lm5vZGU7XHJcblx0XHRcdHRoaXMuZGlzcG9zZURlc2NlbmRhbnRzKG5vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGlzcG9zZURlc2NlbmRhbnRzKG5vZGUpXHJcblx0e1xyXG5cdFx0dmFyIHN0YWNrID0gW107XHJcblx0XHRzdGFjay5wdXNoKG5vZGUpO1xyXG5cclxuXHRcdHdoaWxlIChzdGFjay5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgY3VycmVudCA9IHN0YWNrLnBvcCgpO1xyXG5cclxuXHRcdFx0Y3VycmVudC5kaXNwb3NlKCk7XHJcblx0XHRcdHRoaXMucmVtb3ZlKGN1cnJlbnQpO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBrZXkgaW4gY3VycmVudC5jaGlsZHJlbilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKGN1cnJlbnQuY2hpbGRyZW4uaGFzT3duUHJvcGVydHkoa2V5KSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBjdXJyZW50LmNoaWxkcmVuW2tleV07XHJcblx0XHRcdFx0XHRpZihjaGlsZC5sb2FkZWQpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHN0YWNrLnB1c2goY3VycmVudC5jaGlsZHJlbltrZXldKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7TFJVLCBMUlVJdGVtfTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBWZXJzaW9uVXRpbHModmVyc2lvbilcclxue1xyXG5cdHRoaXMudmVyc2lvbiA9IHZlcnNpb247XHJcblx0dmFyIHZtTGVuZ3RoID0gKHZlcnNpb24uaW5kZXhPZihcIi5cIikgPT09IC0xKSA/IHZlcnNpb24ubGVuZ3RoIDogdmVyc2lvbi5pbmRleE9mKFwiLlwiKTtcclxuXHR0aGlzLnZlcnNpb25NYWpvciA9IHBhcnNlSW50KHZlcnNpb24uc3Vic3RyKDAsIHZtTGVuZ3RoKSk7XHJcblx0dGhpcy52ZXJzaW9uTWlub3IgPSBwYXJzZUludCh2ZXJzaW9uLnN1YnN0cih2bUxlbmd0aCArIDEpKTtcclxuXHRcclxuXHRpZih0aGlzLnZlcnNpb25NaW5vci5sZW5ndGggPT09IDApXHJcblx0e1xyXG5cdFx0dGhpcy52ZXJzaW9uTWlub3IgPSAwO1xyXG5cdH1cclxufTtcclxuXHJcblZlcnNpb25VdGlscy5wcm90b3R5cGUubmV3ZXJUaGFuID0gZnVuY3Rpb24odmVyc2lvbilcclxue1xyXG5cdHZhciB2ID0gbmV3IFZlcnNpb25VdGlscyh2ZXJzaW9uKTtcclxuXHJcblx0aWYoKHRoaXMudmVyc2lvbk1ham9yID4gdi52ZXJzaW9uTWFqb3IpIHx8ICh0aGlzLnZlcnNpb25NYWpvciA9PT0gdi52ZXJzaW9uTWFqb3IgJiYgdGhpcy52ZXJzaW9uTWlub3IgPiB2LnZlcnNpb25NaW5vcikpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblZlcnNpb25VdGlscy5wcm90b3R5cGUuZXF1YWxPckhpZ2hlciA9IGZ1bmN0aW9uKHZlcnNpb24pXHJcbntcclxuXHR2YXIgdiA9IG5ldyBWZXJzaW9uVXRpbHModmVyc2lvbik7XHJcblxyXG5cdGlmKCh0aGlzLnZlcnNpb25NYWpvciA+IHYudmVyc2lvbk1ham9yKSB8fCAodGhpcy52ZXJzaW9uTWFqb3IgPT09IHYudmVyc2lvbk1ham9yICYmIHRoaXMudmVyc2lvbk1pbm9yID49IHYudmVyc2lvbk1pbm9yKSlcclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblZlcnNpb25VdGlscy5wcm90b3R5cGUudXBUbyA9IGZ1bmN0aW9uKHZlcnNpb24pXHJcbntcclxuXHRyZXR1cm4gIXRoaXMubmV3ZXJUaGFuKHZlcnNpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtWZXJzaW9uVXRpbHN9O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIEZvcmNlIHdvcmtlcnMgdG8gYmUgaW5jbHVkZWRcclxuaW1wb3J0IEJpbmFyeURlY29kZXJXb3JrZXIgZnJvbSBcIi4uL3dvcmtlcnMvQmluYXJ5RGVjb2RlcldvcmtlclwiO1xyXG4vL2ltcG9ydCBMQVNMQVpXb3JrZXIgZnJvbSBcIi4uL3dvcmtlcnMvTEFTTEFaV29ya2VyXCI7XHJcbmltcG9ydCBMQVNEZWNvZGVyV29ya2VyIGZyb20gXCIuLi93b3JrZXJzL0xBU0RlY29kZXJXb3JrZXJcIjtcclxuLy9pbXBvcnQgR3JleWhvdW5kQmluYXJ5RGVjb2RlcldvcmtlciBmcm9tIFwiLi4vd29ya2Vycy9HcmV5aG91bmRCaW5hcnlEZWNvZGVyV29ya2VyXCI7XHJcbmltcG9ydCBERU1Xb3JrZXIgZnJvbSBcIi4uL3dvcmtlcnMvREVNV29ya2VyXCI7XHJcbmltcG9ydCBFcHRMYXN6aXBEZWNvZGVyV29ya2VyIGZyb20gXCIuLi93b3JrZXJzL0VwdExhc3ppcERlY29kZXJXb3JrZXJcIjtcclxuaW1wb3J0IEVwdEJpbmFyeURlY29kZXJXb3JrZXIgZnJvbSBcIi4uL3dvcmtlcnMvRXB0QmluYXJ5RGVjb2RlcldvcmtlclwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSB3b3JrZXIgbWFuYWdlciBpcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgYW5kIG1hbmFnaW5nIHdvcmtlciBpbnN0YW5jZXMuXHJcbiAqL1xyXG5jbGFzcyBXb3JrZXJNYW5hZ2VyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMud29ya2VycyA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIHRoaXMud29ya2Vycy5wdXNoKFtdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHdvcmtlciBmcm9tIHRoZSBwb29sLCBpZiBub25lIGF2YWlsYWJsZSBvbmUgd2lsbCBiZSBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIGdldFdvcmtlcih0eXBlKSB7XHJcbiAgICBpZiAodGhpcy53b3JrZXJzW3R5cGVdLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMud29ya2Vyc1t0eXBlXS5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHJldHVybiBuZXcgQmluYXJ5RGVjb2RlcldvcmtlcigpO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhyb3cgXCJMQVNMQVpXb3JrZXIgbm90IGltcGxlbWVudGVkXCI7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gbmV3IExBU0RlY29kZXJXb3JrZXIoKTtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHRocm93IFwiR3JleWhvdW5kQmluYXJ5RGVjb2RlcldvcmtlciBub3QgaW1wbGVtZW50ZWRcIjtcclxuICAgICAgY2FzZSA0OlxyXG4gICAgICAgIHJldHVybiBuZXcgREVNV29ya2VyKCk7XHJcbiAgICAgIGNhc2UgNTpcclxuICAgICAgICByZXR1cm4gbmV3IEVwdExhc3ppcERlY29kZXJXb3JrZXIoKTtcclxuICAgICAgY2FzZSA2OlxyXG4gICAgICAgIHJldHVybiBuZXcgRXB0QmluYXJ5RGVjb2RlcldvcmtlcigpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IFwiVW5rbm93biB3b3JrZXIgcmVxdWVzdGVkXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gKHJlaW5zZXJ0KSB0aGUgd29ya2VyIGludG8gdGhlIHBvb2wuXHJcbiAgICovXHJcbiAgcmV0dXJuV29ya2VyKHR5cGUsIHdvcmtlcikge1xyXG4gICAgdGhpcy53b3JrZXJzW3R5cGVdLnB1c2god29ya2VyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJ1biBhIHRhc2sgaW1tZWRpYXRseS5cclxuICAgKi9cclxuICBydW5UYXNrKHR5cGUsIG9uTWVzc2FnZSwgbWVzc2FnZSwgdHJhbnNmZXIpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB2YXIgd29ya2VyID0gdGhpcy5nZXRXb3JrZXIodHlwZSk7XHJcbiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIG9uTWVzc2FnZShldmVudCk7XHJcbiAgICAgIHNlbGYucmV0dXJuV29ya2VyKHR5cGUsIHdvcmtlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0cmFuc2ZlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShtZXNzYWdlLCB0cmFuc2Zlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Xb3JrZXJNYW5hZ2VyLkJJTkFSWV9ERUNPREVSID0gMDtcclxuV29ya2VyTWFuYWdlci5MQVNfTEFaID0gMTtcclxuV29ya2VyTWFuYWdlci5MQVNfREVDT0RFUiA9IDI7XHJcbldvcmtlck1hbmFnZXIuR1JFWUhPVU5EID0gMztcclxuV29ya2VyTWFuYWdlci5ERU0gPSA0O1xyXG5Xb3JrZXJNYW5hZ2VyLkVQVF9MQVNfWklQX0RFQ09ERVIgPSA1O1xyXG5Xb3JrZXJNYW5hZ2VyLkVQVF9CSU5BUllfREVDT0RFUiA9IDY7XHJcblxyXG5leHBvcnQgeyBXb3JrZXJNYW5hZ2VyIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRocmVlXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCB7R2xvYmFsfSBmcm9tIFwiLi9HbG9iYWwuanNcIjtcclxuXHJcbmV4cG9ydCB7XHJcblx0QXR0cmlidXRlTG9jYXRpb25zLFxyXG5cdENsYXNzaWZpY2F0aW9uLFxyXG5cdFBvaW50U2l6ZVR5cGUsXHJcblx0UG9pbnRTaGFwZSxcclxuXHRQb2ludENvbG9yVHlwZSxcclxuXHRUcmVlVHlwZSxcclxuXHRsb2FkUG9pbnRDbG91ZCxcclxuXHR1cGRhdGVWaXNpYmlsaXR5LFxyXG5cdHVwZGF0ZVBvaW50Q2xvdWRzLFxyXG5cdHVwZGF0ZVZpc2liaWxpdHlTdHJ1Y3R1cmVzXHJcbn0gZnJvbSBcIi4vUG90cmVlLmpzXCI7XHJcblxyXG5leHBvcnQge0JpbmFyeUhlYXB9IGZyb20gXCIuL2xpYi9CaW5hcnlIZWFwLmpzXCI7XHJcblxyXG5leHBvcnQge0xSVX0gZnJvbSBcIi4vdXRpbHMvTFJVLmpzXCI7XHJcbmV4cG9ydCB7SGVscGVyVXRpbHN9IGZyb20gXCIuL3V0aWxzL0hlbHBlclV0aWxzLmpzXCI7XHJcbmV4cG9ydCB7VmVyc2lvblV0aWxzfSBmcm9tIFwiLi91dGlscy9WZXJzaW9uVXRpbHMuanNcIjtcclxuZXhwb3J0IHtXb3JrZXJNYW5hZ2VyfSBmcm9tIFwiLi91dGlscy9Xb3JrZXJNYW5hZ2VyLmpzXCI7XHJcblxyXG5leHBvcnQge1xyXG5cdFBvaW50QXR0cmlidXRlLFxyXG5cdFBvaW50QXR0cmlidXRlcyxcclxuXHRQb2ludEF0dHJpYnV0ZU5hbWVzLFxyXG5cdFBvaW50QXR0cmlidXRlVHlwZXNcclxufSBmcm9tIFwiLi9Qb2ludEF0dHJpYnV0ZXMuanNcIjtcclxuXHJcbmV4cG9ydCB7R3JhZGllbnRzfSBmcm9tIFwiLi9HcmFkaWVudHMuanNcIjtcclxuZXhwb3J0IHtQb2ludHN9IGZyb20gXCIuL1BvaW50cy5qc1wiO1xyXG5leHBvcnQge1NoYWRlcnN9IGZyb20gXCIuL1NoYWRlcnMuanNcIjtcclxuXHJcbmV4cG9ydCB7REVNfSBmcm9tIFwiLi9wb2ludGNsb3VkL0RFTS5qc1wiO1xyXG5leHBvcnQge0RFTU5vZGV9IGZyb20gXCIuL3BvaW50Y2xvdWQvREVNTm9kZS5qc1wiO1xyXG5leHBvcnQge1BvaW50Q2xvdWRUcmVlfSBmcm9tIFwiLi9wb2ludGNsb3VkL1BvaW50Q2xvdWRUcmVlLmpzXCI7XHJcbmV4cG9ydCB7UG9pbnRDbG91ZEFyZW5hNER9IGZyb20gXCIuL3BvaW50Y2xvdWQvUG9pbnRDbG91ZEFyZW5hNEQuanNcIjtcclxuZXhwb3J0IHtQb2ludENsb3VkT2N0cmVlfSBmcm9tIFwiLi9wb2ludGNsb3VkL1BvaW50Q2xvdWRPY3RyZWUuanNcIjtcclxuXHJcbmV4cG9ydCB7UG9pbnRDbG91ZE9jdHJlZUdlb21ldHJ5LCBQb2ludENsb3VkT2N0cmVlR2VvbWV0cnlOb2RlfSBmcm9tIFwiLi9wb2ludGNsb3VkL2dlb21ldHJpZXMvUG9pbnRDbG91ZE9jdHJlZUdlb21ldHJ5LmpzXCI7XHJcbmV4cG9ydCB7UG9pbnRDbG91ZEFyZW5hNERHZW9tZXRyeX0gZnJvbSBcIi4vcG9pbnRjbG91ZC9nZW9tZXRyaWVzL1BvaW50Q2xvdWRBcmVuYTRER2VvbWV0cnkuanNcIjtcclxuZXhwb3J0IHtQb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnl9IGZyb20gXCIuL3BvaW50Y2xvdWQvZ2VvbWV0cmllcy9Qb2ludENsb3VkR3JleWhvdW5kR2VvbWV0cnkuanNcIjtcclxuZXhwb3J0IHtQb2ludENsb3VkRXB0R2VvbWV0cnksIFBvaW50Q2xvdWRFcHRHZW9tZXRyeU5vZGV9IGZyb20gXCIuL3BvaW50Y2xvdWQvZ2VvbWV0cmllcy9Qb2ludENsb3VkRXB0R2VvbWV0cnkuanNcIjtcclxuXHJcbmV4cG9ydCB7UG9pbnRDbG91ZE1hdGVyaWFsfSBmcm9tIFwiLi9wb2ludGNsb3VkL21hdGVyaWFscy9Qb2ludENsb3VkTWF0ZXJpYWwuanNcIjtcclxuXHJcbmV4cG9ydCB7TEFTTG9hZGVyfSBmcm9tIFwiLi9sb2FkZXJzL0xBU0xvYWRlci5qc1wiO1xyXG5leHBvcnQge0JpbmFyeUxvYWRlcn0gZnJvbSBcIi4vbG9hZGVycy9CaW5hcnlMb2FkZXIuanNcIjtcclxuZXhwb3J0IHtHcmV5aG91bmRVdGlsc30gZnJvbSBcIi4vbG9hZGVycy9HcmV5aG91bmRVdGlscy5qc1wiO1xyXG5leHBvcnQge0dyZXlob3VuZExvYWRlcn0gZnJvbSBcIi4vbG9hZGVycy9HcmV5aG91bmRMb2FkZXIuanNcIjtcclxuZXhwb3J0IHtHcmV5aG91bmRCaW5hcnlMb2FkZXJ9IGZyb20gXCIuL2xvYWRlcnMvR3JleWhvdW5kQmluYXJ5TG9hZGVyLmpzXCI7XHJcbmV4cG9ydCB7UE9DTG9hZGVyfSBmcm9tIFwiLi9sb2FkZXJzL1BPQ0xvYWRlci5qc1wiO1xyXG5leHBvcnQge0xBU0xBWkxvYWRlcn0gZnJvbSBcIi4vbG9hZGVycy9MQVNMQVpMb2FkZXIuanNcIjtcclxuZXhwb3J0IHtFcHRMb2FkZXJ9IGZyb20gXCIuL2xvYWRlcnMvRXB0TG9hZGVyLmpzXCI7XHJcblxyXG5leHBvcnQge0VwdExhc3ppcExvYWRlcn0gZnJvbSBcIi4vbG9hZGVycy9lcHQvRXB0TGFzemlwTG9hZGVyLmpzXCI7XHJcbmV4cG9ydCB7RXB0QmluYXJ5TG9hZGVyfSBmcm9tIFwiLi9sb2FkZXJzL2VwdC9FcHRCaW5hcnlMb2FkZXIuanNcIjtcclxuXHJcbmV4cG9ydCB7QmFzaWNHcm91cH0gZnJvbSBcIi4vb2JqZWN0cy9CYXNpY0dyb3VwLmpzXCI7XHJcbmV4cG9ydCB7R3JvdXB9IGZyb20gXCIuL29iamVjdHMvR3JvdXAuanNcIjtcclxuZXhwb3J0IHtYSFJGYWN0b3J5fSBmcm9tICcuL1hIUkZhY3RvcnkuanMnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=