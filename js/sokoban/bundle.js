var Sokoban =
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateSokoban"];
/******/ 	window["webpackHotUpdateSokoban"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "d90933ceb02e430dc3ed";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "sg-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\nsg-board {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\npiece, square {\n  position: absolute;\n  height: 5%;\n  width: 5%;\n  background-size: cover;\n}\n\npiece {\n  z-index: 1;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/theme.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/theme.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _fen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fen */ "./src/fen.js");
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./move */ "./src/move.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ "./src/board.js");




function start(state, redraw) {
  return {
    set(config) {
      render(state => Object(_config__WEBPACK_IMPORTED_MODULE_0__["configure"])(state, config), state);
    },

    getFen() {
      return Object(_fen__WEBPACK_IMPORTED_MODULE_1__["write"])(state.squares, state.pieces, state.noPushPly);
    },

    getLegalMoves() {
      return _board__WEBPACK_IMPORTED_MODULE_3__["legalMoves"](state);
    },

    isEnd() {
      return _board__WEBPACK_IMPORTED_MODULE_3__["isEnd"](state);
    },

    move(dir) {
      render(state => {
        switch (dir) {
          case 'right':
            _move__WEBPACK_IMPORTED_MODULE_2__["right"](state);
            break;

          case 'left':
            _move__WEBPACK_IMPORTED_MODULE_2__["left"](state);
            break;

          case 'up':
            _move__WEBPACK_IMPORTED_MODULE_2__["up"](state);
            break;

          case 'down':
            _move__WEBPACK_IMPORTED_MODULE_2__["down"](state);
            break;
        }
      }, state);
    }

  };
}
;

function render(mutation, state) {
  const result = mutation(state);
  state.dom.redraw();
  return result;
}

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: isEnd, legalMoves, canMove, apiMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legalMoves", function() { return legalMoves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canMove", function() { return canMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiMove", function() { return apiMove; });
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move */ "./src/move.js");


function callUserFunction(f) {
  if (f) setTimeout(f, 0);
}

function isEnd(s) {
  for (var key of Object.keys(s.pieces)) {
    var box = s.pieces[key];

    if (box.role === 'box') {
      var under = s.squares[key];

      if (under.role !== 'target') {
        return false;
      }
    }
  }

  return true;
}
function legalMoves(s) {
  const legals = [];
  const moves = {
    'right': _move__WEBPACK_IMPORTED_MODULE_0__["dirRight"],
    'left': _move__WEBPACK_IMPORTED_MODULE_0__["dirLeft"],
    'up': _move__WEBPACK_IMPORTED_MODULE_0__["dirUp"],
    'down': _move__WEBPACK_IMPORTED_MODULE_0__["dirDown"]
  };

  for (var key of Object.keys(moves)) {
    const dir = moves[key],
          {
      orig,
      dest,
      dest2
    } = _move__WEBPACK_IMPORTED_MODULE_0__["dests"](s, dir);

    if (canMove(s, orig, dest, dest2)) {
      legals.push(key);
    }
  }

  return legals;
}

function baseMove(s, orig, dest, dest2) {
  if (s.pieces[dest]) {
    s.pieces[dest2] = s.pieces[dest];
    s.noPushPly = 0;
  } else {
    s.noPushPly++;
  }

  s.pieces[dest] = s.pieces[orig];
  delete s.pieces[orig];
  callUserFunction(s.events.move);
  return true;
}

function canMove(s, orig, dest, dest2) {
  function isEmpty(role) {
    return role === 'space' || role === 'target';
  }

  var isBox = s.pieces[dest] && s.pieces[dest].role === 'box';

  if (!isBox) {
    return isEmpty(s.squares[dest].role);
  } else {
    return isEmpty(s.squares[dest2].role) && !(s.pieces[dest2] && s.pieces[dest2].role === 'box');
  }
}
function apiMove(s, orig, dest, dest2) {
  if (canMove(s, orig, dest, dest2)) {
    return baseMove(s, orig, dest, dest2);
  }

  return false;
}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var _fen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fen */ "./src/fen.js");

function configure(state, config) {
  merge(state, config);

  if (state.level) {
    config.fen = state.levels[state.level - 1];
  }

  if (config.fen) {
    const {
      squares,
      pieces,
      noPushPly
    } = Object(_fen__WEBPACK_IMPORTED_MODULE_0__["read"])(config.fen);
    state.squares = squares;
    state.pieces = pieces;
    state.noPushPly = noPushPly;
  }
}

function merge(base, extend) {
  for (let key in extend) {
    if (isObject(base[key]) && isObject(extend[key])) merge(base[key], extend[key]);else base[key] = extend[key];
  }
}

function isObject(o) {
  return typeof o === 'object';
}

/***/ }),

/***/ "./src/devboot.js":
/*!************************!*\
  !*** ./src/devboot.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./theme.css */ "./src/theme.css");

__webpack_require__(/*! ./index.css */ "./src/index.css");

const main = __webpack_require__(/*! ./main */ "./src/main.js");

const Engine = __webpack_require__(/*! ./mcts/engine */ "./src/mcts/engine.js");

const _ = __webpack_require__(/*! ./neural/networkRandom */ "./src/neural/networkRandom.js");

const __ = __webpack_require__(/*! ./neural/networkTF */ "./src/neural/networkTF.js");

module.exports = main.app;
module.exports.Engine = Engine.Engine;

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: bindDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindDocument", function() { return bindDocument; });
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move */ "./src/move.js");

function bindDocument(s) {
  const unbinds = [];
  const onKeyDown = startMove(s);
  unbinds.push(unbindable(document, 'keydown', onKeyDown));
  return () => {
    unbinds.forEach(f => f());
  };
}

function unbindable(el, eventName, callback) {
  el.addEventListener(eventName, callback);
  return () => el.removeEventListener(eventName, callback);
}

function startMove(s) {
  return function (e) {
    switch (e.code) {
      case "ArrowUp":
        _move__WEBPACK_IMPORTED_MODULE_0__["up"](s);
        break;

      case "ArrowDown":
        _move__WEBPACK_IMPORTED_MODULE_0__["down"](s);
        break;

      case "ArrowLeft":
        _move__WEBPACK_IMPORTED_MODULE_0__["left"](s);
        break;

      case "ArrowRight":
        _move__WEBPACK_IMPORTED_MODULE_0__["right"](s);
        break;

      default:
        return;
    }

    e.preventDefault();
  };
}

/***/ }),

/***/ "./src/fen.js":
/*!********************!*\
  !*** ./src/fen.js ***!
  \********************/
/*! exports provided: read, write, loadLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLevels", function() { return loadLevels; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");

const roles = {
  '#': 'wall',
  '.': 'target',
  ' ': 'space',
  '$': 'box',
  '*': 'boxtarget',
  '@': 'char',
  'o': 'chartarget'
};
const invRoles = {
  'wall': '#',
  'target': '.',
  'space': ' ',
  'box': '$',
  'boxtarget': '*',
  'char': '@',
  'chartarget': 'o'
};
function read(fen) {
  var split = fen.split(';');
  var noPushPly = parseInt(split[1] || '0');
  fen = fen.split(';')[0];
  var squares = {};
  var pieces = {};
  const lines = fen.split('\n');
  const maxColumns = lines.reduce((acc, line) => acc < line.length ? line.length : acc, 0);
  var needRows = 20 - lines.length;

  while (needRows-- > 0) {
    lines.push("#");
  }

  lines.slice(0, 20).forEach((line, row) => {
    while (line.length < maxColumns) {
      line = line + " ";
    }

    var gap = 20 - maxColumns;

    if (gap > 0) {
      var left = Math.floor(gap / 2);
      var right = left + gap % 2;

      while (left-- > 0) {
        line = "#" + line;
      }

      while (right-- > 0) {
        line = line + "#";
      }
    }

    for (var col = 0; col < line.length; col++) {
      var role = line[col];

      switch (roles[role]) {
        case 'char':
          squares[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])] = {
            role: 'space'
          };
          pieces[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])] = {
            role: 'char'
          };
          break;

        case 'box':
          squares[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])] = {
            role: 'space'
          };
          pieces[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])] = {
            role: 'box'
          };
          break;

        case 'boxtarget':
          squares[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])] = {
            role: 'target'
          };
          pieces[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])] = {
            role: 'box'
          };
          break;

        case 'chartarget':
          squares[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])] = {
            role: 'target'
          };
          pieces[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])] = {
            role: 'char'
          };
          break;

        default:
          squares[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])] = {
            role: roles[role]
          };
      }
    }
  });
  return {
    squares,
    pieces,
    noPushPly
  };
}
;
function write(squares, pieces, noPushPly) {
  var res = '';

  for (var row = 0; row < 20; row++) {
    var line = '';

    for (var col = 0; col < 20; col++) {
      const square = squares[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])];
      const piece = pieces[Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])([col, row])];
      var char;

      if (piece) {
        if (piece.role === 'box') {
          if (square.role === 'space') {
            char = invRoles['box'];
          } else {
            char = invRoles['boxtarget'];
          }
        } else {
          if (square.role === 'space') {
            char = invRoles['char'];
          } else {
            char = invRoles['chartarget'];
          }
        }
      } else {
        char = invRoles[square.role];
      }

      line += char;
    }

    res += line + '\n';
  }

  if (noPushPly) res += ';' + noPushPly;
  return res;
}
function loadLevels(cb) {
  fetch('./assets/Original.json').then(function (response) {
    return response.json();
  }).then(cb);
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _wrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrap */ "./src/wrap.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _fen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fen */ "./src/fen.js");







function app(element, config, onLoad) {
  const state = Object(_state__WEBPACK_IMPORTED_MODULE_2__["defaults"])();

  function redrawAll() {
    const elements = Object(_wrap__WEBPACK_IMPORTED_MODULE_4__["default"])(element, state);

    const redrawNow = () => {
      Object(_render__WEBPACK_IMPORTED_MODULE_5__["default"])(state);
    };

    state.dom = {
      elements,
      redraw: redrawNow,
      redrawNow: redrawNow
    };
    redrawNow();
    state.dom.unbind = _events__WEBPACK_IMPORTED_MODULE_3__["bindDocument"](state, redrawAll);
  }

  Object(_fen__WEBPACK_IMPORTED_MODULE_6__["loadLevels"])(levels => {
    state.levels = levels;
    Object(_config__WEBPACK_IMPORTED_MODULE_1__["configure"])(state, config || {});
    redrawAll();
    const api = Object(_api__WEBPACK_IMPORTED_MODULE_0__["start"])(state, redrawAll);
    onLoad(api);
  });
}
;

/***/ }),

/***/ "./src/mcts/engine.js":
/*!****************************!*\
  !*** ./src/mcts/engine.js ***!
  \****************************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/mcts/node.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/mcts/search.js");
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./params */ "./src/mcts/params.js");
/* harmony import */ var _neural_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../neural/factory */ "./src/neural/factory.js");




function Engine(bestMoveCb, options) {
  var currentPosition, tree, network, search;
  populateOptions(options);

  const updateFromUciOptions = () => {
    network = _neural_factory__WEBPACK_IMPORTED_MODULE_3__["default"].LoadNetwork(options);
  };

  const setupPosition = (fen, moves) => {
    updateFromUciOptions();

    if (!tree) {
      tree = new _node__WEBPACK_IMPORTED_MODULE_0__["NodeTree"]();
    }

    tree.resetToPosition(fen, moves);
  };

  this.setPosition = (fen, moves = []) => {
    currentPosition = {
      fen,
      moves
    };
  };

  this.go = params => {
    setupPosition(currentPosition.fen, currentPosition.moves);
    const limits = {
      searchDeadline: params.searchDeadline
    };
    search = new _search__WEBPACK_IMPORTED_MODULE_1__["default"](tree, network, bestMoveCb, limits, options);
    search.start();
  };

  this.stop = () => {
    if (search) {
      search.stop();
    }
  };
}

function populateOptions(options) {
  _neural_factory__WEBPACK_IMPORTED_MODULE_3__["default"].populateOptions(options);
  Object(_params__WEBPACK_IMPORTED_MODULE_2__["populate"])(options);
}

/***/ }),

/***/ "./src/mcts/node.js":
/*!**************************!*\
  !*** ./src/mcts/node.js ***!
  \**************************/
/*! exports provided: NodeTree, Edge, Node, EdgeAndNode, EdgeIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeTree", function() { return NodeTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edge", function() { return Edge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeAndNode", function() { return EdgeAndNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeIterator", function() { return EdgeIterator; });
/* harmony import */ var _sokoban__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sokoban */ "./src/mcts/sokoban.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position */ "./src/mcts/position.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/mcts/util.js");



function NodeTree() {
  let currentHead,
      gameBeginNode,
      history = new _position__WEBPACK_IMPORTED_MODULE_1__["default"]();

  const deallocateTree = () => {
    gameBeginNode = null;
    currentHead = null;
  };

  const makeMove = move => {
    history.append(move);
  };

  this.resetToPosition = (fen, moves) => {
    const startingBoard = new _sokoban__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const {
      noPushPly
    } = startingBoard.setFromFen(fen);

    if (gameBeginNode) {
      deallocateTree();
    }

    if (!gameBeginNode) {
      gameBeginNode = new Node(null, 0);
    }

    history.reset(startingBoard, noPushPly);
    currentHead = gameBeginNode;

    for (const move of moves) {
      makeMove(move);
    }
  };

  this.getCurrentHead = () => {
    return currentHead;
  };

  this.getPositionHistory = () => {
    return history;
  };
}
function Edge(move) {
  // probability that this move will be made
  var p;
  this.move = move;

  this.setP = p_ => {
    p = p_;
  };

  this.getP = () => {
    return p;
  };

  this.getMove = () => {
    return this.move;
  };
}

function NodePtr(get, set) {
  return {
    get,
    set
  };
}

function Node(parent, index) {
  let edges = [];
  let child; // Average value of all visited nodes in subtree.

  let q = 0,
      // How many completed visits this node had.
  n = 0,
      // how many threads currently process this node
  // (started but not finished).
  nInFlight = 0;
  this.parent = parent;
  this.sibling = null; // pointer to first child

  this.child = null;
  this.index = index;
  this.isTerminal = false;

  this.createEdges = moves => {
    edges = moves.map(_ => new Edge(_));
  };

  this.makeTerminal = result => {
    this.isTerminal = true;

    if (result === 'lose') {
      q = -1;
    } else {
      q = 1;
    }
  };

  this.tryStartScoreUpdate = () => {
    if (n === 0 && nInFlight > 0) return false;
    nInFlight++;
    return true;
  };

  this.cancelScoreUpdate = (multivisit = 1) => {
    nInFlight -= multivisit;
  };

  this.finalizeScoreUpdate = (v, multivisit = 1) => {
    if (q + multivisit * (v - q) / (n + multivisit) === 1) {
      debugger;
    }

    q += multivisit * (v - q) / (n + multivisit);
    n += multivisit;
    nInFlight -= multivisit;
  };

  this.getParent = () => {
    return parent;
  };

  this.getQ = () => {
    return q;
  };

  this.getN = () => {
    return n;
  };

  this.getNStarted = () => {
    return n + nInFlight;
  };

  this.getChildrenVisits = () => {
    return n > 0 ? n - 1 : 0;
  };

  this.edges = () => {
    return new EdgeIterator(edges, new NodePtr(() => {
      return this.child;
    }, v => {
      this.child = v;
    }));
  };

  this.hasChildren = () => {
    return edges.length > 0;
  }; // for a child node returns corresponding edge


  this.getEdgeToNode = node => {
    return edges[node.index];
  };

  this.getOwnEdge = () => {
    return this.getParent().getEdgeToNode(this);
  };

  this.toString = () => {
    var res = `<node${this.index} q=${q} n=${n}>`;

    for (var iEdge of this.edges().range()) {
      var edge = iEdge.value();
      res += edge.toString() + ",";
    }

    res += "</node>";
    return res;
  };

  this.toShortString = (x, opts = {}, spaces = "") => {
    var indent = "  ";
    var res = spaces + indent + `<node ${this.index} q=${Object(_util__WEBPACK_IMPORTED_MODULE_2__["roundTo"])(q)} n=${Object(_util__WEBPACK_IMPORTED_MODULE_2__["roundTo"])(n)}>`;

    for (var iEdge of this.edges().range()) {
      var edge = iEdge.value();
      res += "\n" + spaces + indent + edge.toShortString(x, opts, spaces + indent) + "\n";
    }

    res += spaces + indent + "</node>";
    return res;
  };
}
function EdgeAndNode(edge, node) {
  this.edge = edge;
  this.node = node;

  this.getQ = defaultQ => {
    return this.node && this.node.getN() > 0 ? node.getQ() : defaultQ;
  };

  this.getN = () => {
    return this.node ? this.node.getN() : 0;
  };

  this.getNStarted = () => {
    return this.node ? this.node.getNStarted() : 0;
  };

  this.isTerminal = () => {
    return this.node ? this.node.isTerminal : false;
  };

  this.getP = () => {
    return this.edge.getP();
  };

  this.getMove = () => {
    return this.edge ? this.edge.getMove() : '';
  }; // Returns U = numerator * p / N;
  // passed numerator is expected to be equal to (cpuct * sqrt(N[parent]);


  this.getU = numerator => {
    return numerator * this.getP() / (1 + this.getNStarted());
  };

  this.toString = () => {
    var res = [`<edge m=${this.edge.getMove()} p=${Object(_util__WEBPACK_IMPORTED_MODULE_2__["roundTo"])(this.edge.getP())}>`, this.node ? this.node.toString() : ".", "</edge>"].join("");
    return res;
  };

  this.toShortString = (x, opts = {}, spaces) => {
    if (opts.discardLoss && this.getQ(0) === -1) {
      if (opts.discardLoss === 'hidden') return '';
      return `<${this.edge.getMove()} loss/>`;
    }

    var res = [`<${this.edge.getMove()} p=${Object(_util__WEBPACK_IMPORTED_MODULE_2__["roundTo"])(this.edge.getP())}>`, this.node && x > 0 ? "\n" + node.toShortString(x - 1, opts, spaces) : ".", `</${this.edge.getMove()}>`].join("");
    return res;
  };
}
function EdgeIterator(edges, nodePtr, currentIdx = 0) {
  let node;

  const actualize = () => {
    while (nodePtr.get() && nodePtr.get().index < currentIdx) {
      var tmp = nodePtr.get();
      nodePtr = new NodePtr(() => {
        return tmp.sibling;
      }, v => {
        tmp.sibling = v;
      });
    }

    if (nodePtr.get() && nodePtr.get().index === currentIdx) {
      node = nodePtr.get();
      nodePtr = new NodePtr(() => {
        return node.sibling;
      }, v => {
        node.sibling = v;
      });
    } else {
      node = null;
    }
  };

  if (nodePtr) {
    actualize();
  }

  this.range = () => {
    var res = [];

    for (var i = 0; i < edges.length; i++) {
      res.push(new EdgeIterator(edges, nodePtr, currentIdx + i));
    }

    return res;
  };

  var edge;

  this.value = () => {
    if (!edge) {
      edge = new EdgeAndNode(edges[currentIdx], node);
    }

    return edge;
  };

  this.reset = () => {
    edge = null;
  };

  this.getOrSpawnNode = parent => {
    if (node) return node;
    var tmp = nodePtr.get();
    nodePtr.set(new Node(parent, currentIdx));
    nodePtr.get().sibling = tmp;
    actualize();
    return node;
  };
}

/***/ }),

/***/ "./src/mcts/params.js":
/*!****************************!*\
  !*** ./src/mcts/params.js ***!
  \****************************/
/*! exports provided: default, populate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populate", function() { return populate; });
function SearchParams(options) {
  const kCpuct = options.kCpuct,
        kFpuValue = options.kFpuValue,
        kFpuValueAtRoot = kFpuValue;
  const kNoPush = options.kNoPush;

  this.getCpuct = () => {
    return kCpuct;
  };

  this.getFpuValue = atRoot => {
    return atRoot ? kFpuValueAtRoot : kFpuValue;
  };

  this.getNoPushValue = () => {
    return kNoPush;
  };
}
function populate(options) {
  options.kCpuct = options.kCpuct || 1.4;
  options.kFpuValue = options.kFpuValue || 1.2;
  options.kNoPush = options.kNoPush || 15;
}

/***/ }),

/***/ "./src/mcts/position.js":
/*!******************************!*\
  !*** ./src/mcts/position.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PositionHistory; });
/* harmony import */ var _sokoban__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sokoban */ "./src/mcts/sokoban.js");


function Position(board, noPushPly) {
  this.noPushPly = noPushPly;
  let repetitions = 0;

  this.getBoard = () => {
    return board;
  };

  this.getNoPush = () => {
    return this.noPushPly;
  };

  this.setRepetitions = n => {
    repetitions = n;
  };

  this.getRepetitions = () => {
    return repetitions;
  };
}

Position.fromParent = (parent, move) => {
  const board = new _sokoban__WEBPACK_IMPORTED_MODULE_0__["default"]();
  board.setFromFen(parent.getBoard().fen);
  const isPush = board.applyMove(move);
  return new Position(board, isPush ? 0 : parent.noPushPly + 1);
};

function PositionHistory(other) {
  var positions = [];

  if (other) {
    positions = other.getPositions();
  }

  this.getPositions = () => {
    return positions;
  };

  this.last = () => {
    return positions.slice(-1)[0];
  };

  this.getPositionAt = idx => {
    return positions[idx];
  };

  this.trim = size => {
    positions = positions.slice(0, size);
  };

  this.getLength = () => {
    return positions.length;
  };

  this.reset = (board, noPushPly) => {
    positions = [];
    positions.push(new Position(board, noPushPly));
  };

  this.append = move => {
    positions.push(Position.fromParent(this.last(), move));
    this.last().setRepetitions(computeLastMoveRepetitions());
  };

  const computeLastMoveRepetitions = () => {
    const last = this.last();

    for (var idx = positions.length - 2; idx >= 0; idx--) {
      const pos = positions[idx];

      if (justBoardFen(pos.getBoard().fen) === justBoardFen(last.getBoard().fen)) {
        return 1 + pos.getRepetitions();
      }
    }

    return 0;
  };
}
;

function justBoardFen(fen) {
  return fen.split(';')[0];
}

/***/ }),

/***/ "./src/mcts/search.js":
/*!****************************!*\
  !*** ./src/mcts/search.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker */ "./src/mcts/worker.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./src/mcts/node.js");
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./params */ "./src/mcts/params.js");




function now() {
  return Date.now();
}

function Search(tree, network, bestMoveCb, limits, options) {
  this.playedHistory = tree.getPositionHistory();
  this.network = network;
  const params = new _params__WEBPACK_IMPORTED_MODULE_2__["default"](options);
  let shouldStop = false,
      bestMoveIsSent = false,
      finalBestMove;
  this.rootNode = tree.getCurrentHead();

  const getTimeToDeadline = () => {
    if (!limits.searchDeadline) return 0;
    return limits.searchDeadline - now();
  };

  const maybeTriggerStop = () => {
    if (bestMoveIsSent) return;

    if (!shouldStop) {
      if (this.onlyOnePossibleMoveLeft) {
        fireStopInternal();
      }

      if (limits.searchDeadline && getTimeToDeadline() <= 0) {
        fireStopInternal();
      }
    }

    if (shouldStop && !bestMoveIsSent) {
      ensureBestMoveKnown();

      if (!finalBestMove) {
        var worker = new _worker__WEBPACK_IMPORTED_MODULE_0__["default"](this, params);
        worker.Run();
        ensureBestMoveKnown();
      }

      bestMoveCb(finalBestMove.getMove());
      bestMoveIsSent = true;
    }
  };

  const WatchdogThread = () => {
    function step() {
      maybeTriggerStop();
      if (bestMoveIsSent) return;
      setTimeout(step, 0);
    }

    step();
  };

  const fireStopInternal = () => {
    shouldStop = true;
  };

  const ensureBestMoveKnown = () => {
    if (bestMoveIsSent) return;
    if (!this.rootNode.hasChildren()) return;
    finalBestMove = getBestChildNoTemperature(this.rootNode);
  };

  const getBestChildrenNoTemperature = (parent, count) => {
    // console.log(parent.toShortString(2, { discardLoss: false }));
    var edges = [];

    for (var iEdge of parent.edges().range()) {
      var edge = iEdge.value();
      edges.push({
        n: edge.getN(),
        q: edge.getQ(0),
        p: edge.getP(),
        value: edge
      });
    }

    edges.sort((a, b) => {
      var n = b.n - a.n,
          q = n,
          p = n;

      if (n === 0) {
        q = b.q - a.q;

        if (q === 0) {
          p = b.p - a.p;
        }
      }

      return p;
    });
    console.log(edges.map(_ => _.n + _.value.getMove()));
    var res = edges.map(_ => _.value);
    return res;
  };

  const getBestChildNoTemperature = parent => {
    const res = getBestChildrenNoTemperature(parent, 1);
    return res[0] || new _node__WEBPACK_IMPORTED_MODULE_1__["EdgeAndNode"]();
  };

  this.start = () => {
    WatchdogThread();
    var worker = new _worker__WEBPACK_IMPORTED_MODULE_0__["default"](this, params);
    worker.Run();
  };

  this.stop = () => {
    fireStopInternal();
  };

  this.isSearchActive = () => {
    return !shouldStop;
  };
}

/***/ }),

/***/ "./src/mcts/sokoban.js":
/*!*****************************!*\
  !*** ./src/mcts/sokoban.js ***!
  \*****************************/
/*! exports provided: default, moveAsNNIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sokoban; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveAsNNIndex", function() { return moveAsNNIndex; });
/* harmony import */ var string_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js");
/* harmony import */ var string_hash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_hash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fen */ "./src/fen.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board */ "./src/board.js");
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../move */ "./src/move.js");




const roles = {
  '#': 'wall',
  '.': 'target',
  ' ': 'space',
  '$': 'box',
  '*': 'boxtarget',
  '@': 'char'
};
const invRoles = {
  'wall': '#',
  'target': '.',
  'space': ' ',
  'box': '$',
  'boxtarget': '*',
  'char': '@'
};
function Sokoban() {
  this.applyMove = dirS => {
    var dir;

    switch (dirS) {
      case 'up':
        dir = _move__WEBPACK_IMPORTED_MODULE_3__["dirUp"];
        break;

      case 'left':
        dir = _move__WEBPACK_IMPORTED_MODULE_3__["dirLeft"];
        break;

      case 'right':
        dir = _move__WEBPACK_IMPORTED_MODULE_3__["dirRight"];
        break;

      case 'down':
        dir = _move__WEBPACK_IMPORTED_MODULE_3__["dirDown"];
        break;
    }

    var s = this.piecesSquares();
    var {
      orig,
      dest,
      dest2
    } = _move__WEBPACK_IMPORTED_MODULE_3__["dests"](s, dir);

    if (!_board__WEBPACK_IMPORTED_MODULE_2__["apiMove"]({ ...s,
      events: {}
    }, orig, dest, dest2)) {
      throw new Error("bad move " + dirS + "\n" + this.fen);
    }

    this.fen = Object(_fen__WEBPACK_IMPORTED_MODULE_1__["write"])(s.squares, s.pieces);
    this._pieces = null;
  };

  this.piecesSquares = () => {
    if (!this._pieces) {
      this._pieces = Object(_fen__WEBPACK_IMPORTED_MODULE_1__["read"])(this.fen);
    }

    return this._pieces;
  };

  this.setFromFen = fen => {
    this.fen = fen;
    this._pieces = null;
    const {
      noPushPly
    } = this.piecesSquares();
    return {
      noPushPly
    };
  };

  const encodePiece = role => {
    return function () {
      let res = "";
      const {
        pieces,
        squares
      } = this.piecesSquares();

      for (var key of Object.keys(pieces)) {
        var piece = pieces[key];
        if (piece.role === role) res += key;
      }

      return string_hash__WEBPACK_IMPORTED_MODULE_0___default()(res);
    };
  };

  const encodeSquare = role => {
    return function () {
      let res = "";
      const {
        pieces,
        squares
      } = this.piecesSquares();

      for (var key of Object.keys(squares)) {
        var square = squares[key];
        if (square.role === role) res += key;
      }

      return string_hash__WEBPACK_IMPORTED_MODULE_0___default()(res);
    };
  };

  this.boxes = encodePiece('box');
  this.char = encodePiece('char');
  this.targets = encodeSquare('target');
  this.walls = encodeSquare('wall');

  this.isEnd = () => {
    return this.fen.indexOf(invRoles['box']) === -1;
  };

  this.getLegalMoves = () => {
    const {
      pieces,
      squares
    } = this.piecesSquares();
    return _board__WEBPACK_IMPORTED_MODULE_2__["legalMoves"]({
      pieces,
      squares
    });
  };
}
function moveAsNNIndex(move) {
  const moves = ['up', 'left', 'down', 'right'];
  return moves.indexOf(move);
}

/***/ }),

/***/ "./src/mcts/util.js":
/*!**************************!*\
  !*** ./src/mcts/util.js ***!
  \**************************/
/*! exports provided: roundTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundTo", function() { return roundTo; });
function roundTo(x) {
  return Math.round(x * 1000) / 1000;
}

/***/ }),

/***/ "./src/mcts/worker.js":
/*!****************************!*\
  !*** ./src/mcts/worker.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchWorker; });
/* harmony import */ var _sokoban__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sokoban */ "./src/mcts/sokoban.js");
/* harmony import */ var _neural_encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../neural/encoder */ "./src/neural/encoder.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "./src/mcts/node.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/mcts/util.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position */ "./src/mcts/position.js");





function SearchWorker(search, params) {
  const history = new _position__WEBPACK_IMPORTED_MODULE_4__["default"](search.playedHistory);
  let minibatch = [],
      computation;

  const pickNodeToExtend = () => {
    let node = search.rootNode,
        bestEdge = new _node__WEBPACK_IMPORTED_MODULE_2__["EdgeIterator"]([]),
        secondBestEdge;
    let isRootNode = true,
        depth = 0,
        nodeAlreadyUpdated = true;
    const ps = [];

    while (true) {
      if (!nodeAlreadyUpdated) {
        node = bestEdge.getOrSpawnNode(node);
      }

      bestEdge.reset();
      depth++;

      if (!node.tryStartScoreUpdate()) {
        // if (!isRootNode) {
        // }
        return Collision(node, depth);
      }

      if (node.isTerminal || !node.hasChildren()) {
        return Visit(node, depth);
      }

      nodeAlreadyUpdated = false;
      const cpuct = computeCpuct(params, node.getN());
      const puctMult = cpuct * Math.sqrt(Math.max(node.getChildrenVisits(), 1));
      var best = -Infinity;
      var secondBest = -Infinity;
      const fpu = getFpu(params, node, isRootNode);
      let possibleMoves = 0;
      const cs = [];

      for (var child of node.edges().range()) {
        if (isRootNode) {
          possibleMoves++;
        }

        const Q = child.value().getQ(fpu);
        const score = child.value().getU(puctMult) + Q;
        cs.push({
          Q,
          score,
          q: child.value().getQ(fpu)
        });

        if (score > best) {
          secondBest = best;
          secondBestEdge = bestEdge;
          best = score;
          bestEdge = child;
        } else if (score > secondBest) {
          secondBest = score;
          secondBestEdge = child;
        }
      }

      if (best < -0.5) {// console.log(history.last().getBoard().fen);
        // console.log(depth, cs, best);
      }

      if (isRootNode && possibleMoves <= 1) {
        console.log('onemoveleft', possibleMoves);
        search.onlyOnePossibleMoveLeft = true;
      }

      isRootNode = false;
    }
  };

  const initializeIteration = computation_ => {
    computation = computation_;
    minibatch = [];
  };

  const gatherMiniBatch = () => {
    var minibatchSize = 0;
    var collisionEventsLeft = 10;

    while (minibatchSize < 10) {
      minibatch.push(pickNodeToExtend());
      let pickedNode = minibatch.slice(-1)[0],
          node = pickedNode.node;

      if (pickedNode.isCollision()) {
        if (--collisionEventsLeft <= 0) return;
        if (!search.isSearchActive()) return;
        continue;
      }

      minibatchSize++;

      if (pickedNode.isExtendable()) {
        extendNode(node);

        if (!node.isTerminal) {
          pickedNode.nnQueried = true;
          addNodeToComputation(node);
        }
      }
    } // console.log(minibatch.map(_ => _.isExtendable()));

  };

  const extendNode = node => {
    history.trim(search.playedHistory.getLength());
    const toAdd = [];
    const ps = [];
    let cur = node;

    while (cur !== search.rootNode) {
      let prev = cur.getParent();
      toAdd.push(prev.getEdgeToNode(cur).getMove());
      ps.push(prev.toShortString(1));
      cur = prev;
    } // console.log(toAdd);
    // ps.map(_ => console.log(_));


    for (var i = toAdd.length - 1; i >= 0; i--) {
      history.append(toAdd[i]);
    }

    const board = history.last().getBoard(),
          legalMoves = board.getLegalMoves(),
          isEnd = board.isEnd();

    if (isEnd) {
      node.makeTerminal('win');
      return;
    }

    if (node !== search.rootNode) {
      if (history.last().getNoPush() >= params.getNoPushValue()) {
        node.makeTerminal('lose');
        return;
      }

      if (history.last().getRepetitions() >= 1) {
        node.makeTerminal('lose');
        return;
      }
    }

    node.createEdges(legalMoves);
  };

  const addNodeToComputation = node => {
    const planes = Object(_neural_encoder__WEBPACK_IMPORTED_MODULE_1__["encodePositionForNN"])(history, 8);
    computation.addInput(planes);
  };

  const runNNComputation = () => {};

  const fetchMinibatchResults = () => {
    var idxInComputation = 0;

    for (var nodeToProcess of minibatch) {
      fetchSingleNodeResult(nodeToProcess, idxInComputation);
      if (nodeToProcess.nnQueried) ++idxInComputation;
    }
  };

  const fetchSingleNodeResult = (nodeToProcess, idxInComputation) => {
    var node = nodeToProcess.node;

    if (!nodeToProcess.nnQueried) {
      nodeToProcess.v = node.getQ();
      return;
    }

    nodeToProcess.v = -computation.getQVal(idxInComputation);
    var total = 0;

    for (var iEdge of node.edges().range()) {
      var edge = iEdge.value();
      var p = computation.getPVal(idxInComputation, _sokoban__WEBPACK_IMPORTED_MODULE_0__["moveAsNNIndex"](edge.getMove()));
      edge.edge.setP(p);
      total += edge.getP();
    } // normalize P values to add up to 1


    if (total > 0) {
      const scale = 1 / total;

      for (iEdge of node.edges().range()) {
        edge = iEdge.value();
        edge.edge.setP(edge.getP() * scale);
      }
    }
  };

  const doBackupUpdate = () => {
    for (var nodeToProcess of minibatch) {
      doBackupUpdateSingleNode(nodeToProcess);
    }
  };

  const doBackupUpdateSingleNode = nodeToProcess => {
    let node = nodeToProcess.node;

    if (nodeToProcess.isCollision()) {
      for (node = node.getParent(); node !== search.rootNode.getParent(); node = node.getParent()) {
        node.cancelScoreUpdate();
      }

      return;
    }

    let canConvert = node.isTerminal && !node.getN();
    let v = nodeToProcess.v;

    for (var n = node, p; n !== search.rootNode.getParent(); n = p) {
      p = n.getParent();

      if (n.isTerminal) {
        v = n.getQ();
      }

      if (n.isTerminal) {// debugger;
      }

      n.finalizeScoreUpdate(v);
      canConvert = canConvert && p != search.rootNode && !p.isTerminal;

      if (canConvert && v != 1) {
        for (var iEdge of p.edges().range()) {
          var edge = iEdge.value();
          canConvert = canConvert && edge.isTerminal() && edge.getQ(0) === v;
        }
      }

      if (canConvert) {// p.makeTerminal(v === 1 ? 'lose' : 'win');
      }
    }
  };

  const executeOneIteration = () => {
    initializeIteration(search.network.newComputation());
    gatherMiniBatch();
    runNNComputation();
    fetchMinibatchResults();
    doBackupUpdate();
  };

  this.Run = () => {
    function step() {
      executeOneIteration();

      if (search.isSearchActive()) {
        setTimeout(step, 0);
      }
    }

    step();
  };
}

function getFpu(params, node, isRootNode) {
  const value = params.getFpuValue(isRootNode);
  return value;
}

function computeCpuct(params, N) {
  const init = params.getCpuct();
  return init;
}

function Visit(node, depth) {
  return new NodeToProcess(node, depth, false);
}

function Collision(node, depth) {
  return new NodeToProcess(node, depth, true);
}

function NodeToProcess(node, depth, isCollision) {
  this.node = node;
  this.nnQueried = false;

  this.isExtendable = () => {
    return !isCollision && !node.isTerminal;
  };

  this.isCollision = () => {
    return isCollision;
  };
}

/***/ }),

/***/ "./src/move.js":
/*!*********************!*\
  !*** ./src/move.js ***!
  \*********************/
/*! exports provided: dirRight, dirLeft, dirUp, dirDown, dests, findChar, right, left, up, down */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirRight", function() { return dirRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirLeft", function() { return dirLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirUp", function() { return dirUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirDown", function() { return dirDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dests", function() { return dests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChar", function() { return findChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "up", function() { return up; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "down", function() { return down; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/board.js");


const dirRight = [1, 0];
const dirLeft = [-1, 0];
const dirUp = [0, -1];
const dirDown = [0, 1];
function dests(s, dir) {
  const origKey = findChar(s),
        origPos = Object(_util__WEBPACK_IMPORTED_MODULE_0__["key2pos"])(origKey),
        destPos = [origPos[0] + dir[0], origPos[1] + dir[1]],
        dest2Pos = [destPos[0] + dir[0], destPos[1] + dir[1]],
        destKey = Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])(destPos),
        dest2Key = Object(_util__WEBPACK_IMPORTED_MODULE_0__["pos2key"])(dest2Pos);
  return {
    orig: origKey,
    dest: destKey,
    dest2: dest2Key
  };
}

function move(s, dir) {
  const {
    orig,
    dest,
    dest2
  } = dests(s, dir);
  _board__WEBPACK_IMPORTED_MODULE_1__["apiMove"](s, orig, dest, dest2);
  s.dom.redraw();
}

function findChar(s) {
  for (var key of Object.keys(s.pieces)) {
    var piece = s.pieces[key];

    if (piece.role === 'char') {
      return key;
    }
  }

  return undefined;
}
const right = s => move(s, dirRight);
const left = s => move(s, dirLeft);
const up = s => move(s, dirUp);
const down = s => move(s, dirDown);

/***/ }),

/***/ "./src/neural/encoder.js":
/*!*******************************!*\
  !*** ./src/neural/encoder.js ***!
  \*******************************/
/*! exports provided: encodePositionForNN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodePositionForNN", function() { return encodePositionForNN; });
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network */ "./src/neural/network.js");

const kMoveHistory = 8;
const kPlanesPerBoard = 7;
const kAuxPlaneBase = kPlanesPerBoard * kMoveHistory;
function encodePositionForNN(history, historyPlanes) {
  const result = [];

  for (var j = 0; j < kAuxPlaneBase + 2; j++) {
    result[j] = new _network__WEBPACK_IMPORTED_MODULE_0__["InputPlane"]();
  }

  const position = history.last();
  const board = position.getBoard();
  result[kAuxPlaneBase + 0].setAll();
  result[kAuxPlaneBase + 1].fill(history.last().getNoPush());
  var historyIdx = history.getLength() - 1;

  for (var i = 0; i < Math.min(historyPlanes, kMoveHistory); ++i, --historyIdx) {
    const position = history.getPositionAt(historyIdx < 0 ? 0 : historyIdx);
    if (historyIdx < 0) break;
    const base = i * kPlanesPerBoard;
    result[base + 0].mask = board.boxes();
    result[base + 1].mask = board.char();
    result[base + 2].mask = board.targets();
    result[base + 3].mask = board.walls();
    const repetitions = position.getRepetitions();
    if (repetitions >= 1) result[base + 4].setAll(); // if (repetitions >= 3) result[base + 5].setAll();
  }

  return result;
}

/***/ }),

/***/ "./src/neural/factory.js":
/*!*******************************!*\
  !*** ./src/neural/factory.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function NetworkFactory() {
  var factories = [];

  this.RegisterNetwork = (name, factory) => {
    factories.push({
      name,
      factory
    });
  };

  this.getBackendsList = () => {
    return factories.map(_ => _.name);
  };

  this.Create = (network, weights, options) => {
    for (var factory of factories) {
      if (factory.name === network) {
        return factory.factory(weights, options);
      }
    }

    throw new Error("Unknown backend: " + network);
  };
}

;

const Get = (() => {
  const factory = new NetworkFactory();
  return function () {
    return factory;
  };
})();

const LoadNetwork = options => {
  const backend = options['kBackend'];
  const weights = null;
  return Get().Create(backend, weights);
};

function populateOptions(options) {
  const backends = Get().getBackendsList();
  options['kBackend'] = backends[0];
}

/* harmony default export */ __webpack_exports__["default"] = ({
  Get,
  LoadNetwork,
  populateOptions
});

/***/ }),

/***/ "./src/neural/network.js":
/*!*******************************!*\
  !*** ./src/neural/network.js ***!
  \*******************************/
/*! exports provided: InputPlane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPlane", function() { return InputPlane; });
function InputPlane() {
  this.mask = 0;
  this.value = 1;

  this.setAll = () => {
    this.mask = 0xffffffff;
  };

  this.fill = val => {
    this.setAll();
    this.value = val;
  };
}

/***/ }),

/***/ "./src/neural/networkRandom.js":
/*!*************************************!*\
  !*** ./src/neural/networkRandom.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var string_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js");
/* harmony import */ var string_hash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_hash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory */ "./src/neural/factory.js");

 // function Hash(val) {
//   return 0xfad0 * (val + 0xbaad) +
//     0x7ace * ((val >> 31) + 0xd571);
// }
// function HashCat(hash, x) {
//   hash ^= 0x2997 + Hash(x) + (hash << 6) + (hash >> 2);
//   return hash;
// }

function HashCat(hash, x) {
  return string_hash__WEBPACK_IMPORTED_MODULE_0___default()(hash + " " + x);
}

function RandomNetworkComputation() {
  const seed = 0;
  const inputs = [];

  this.addInput = input => {
    var hash = seed;

    for (var plane of input) {
      hash = HashCat(hash, plane.mask);
      hash = HashCat(hash, plane.value);
    }

    inputs.push(hash);
  };

  this.computeBlocking = () => {};

  this.getQVal = sample => {
    return (inputs[sample] % 0xffffffff - 0xffffffff / 2) / (0xffffffff / 2);
  };

  this.getPVal = (sample, moveId) => {
    return HashCat(inputs[sample], moveId) % 0xfffffff / 0xfffffff;
  };
}

function RandomNetwork(options) {
  this.newComputation = () => {
    return new RandomNetworkComputation();
  };
}

function makeRandomNetwork(weights, options) {
  return new RandomNetwork(options);
}

_factory__WEBPACK_IMPORTED_MODULE_1__["default"].Get().RegisterNetwork("random", makeRandomNetwork);

/***/ }),

/***/ "./src/neural/networkTF.js":
/*!*********************************!*\
  !*** ./src/neural/networkTF.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/neural/factory.js");


function makeTFNetwork(weights, options) {}

_factory__WEBPACK_IMPORTED_MODULE_0__["default"].Get().RegisterNetwork("tensorflow", makeTFNetwork);

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");


function render(s) {
  const posToTranslate = _util__WEBPACK_IMPORTED_MODULE_0__["posToTranslate"],
        translate = _util__WEBPACK_IMPORTED_MODULE_0__["translate"],
        boardEl = s.dom.elements.board,
        pieces = s.pieces,
        squares = s.squares,
        samePieces = {},
        sameSquares = {},
        movedPieces = {},
        movedSquares = {},
        piecesKeys = Object.keys(pieces),
        squaresKeys = Object.keys(squares);
  let k, p, el, pieceAtKey, squareAtKey, elPieceName, elSquareName, pMvdSet, pMvd, sMvdSet, sMvd;
  el = boardEl.firstChild;

  while (el) {
    k = el.sgKey;

    if (isPieceNode(el)) {
      pieceAtKey = pieces[k];
      elPieceName = el.sgPiece;

      if (pieceAtKey) {
        if (elPieceName === pieceNameOf(pieceAtKey)) {
          samePieces[k] = true;
        } else {
          safePush(movedPieces, elPieceName, el);
        }
      } else {
        safePush(movedPieces, elPieceName, el);
      }
    } else if (isSquareNode(el)) {
      squareAtKey = squares[k];
      elSquareName = el.sgSquare;

      if (squareAtKey) {
        if (elSquareName === pieceNameOf(squareAtKey)) {
          sameSquares[k] = true;
        } else {
          safePush(movedSquares, elSquareName, el);
        }
      } else {
        safePush(movedSquares, elSquareName, el);
      }
    }

    el = el.nextSibling;
  }

  for (const j in piecesKeys) {
    k = piecesKeys[j];
    p = pieces[k];

    if (!samePieces[k]) {
      pMvdSet = movedPieces[pieceNameOf(p)];
      pMvd = pMvdSet && pMvdSet.pop(); // same piece moved

      if (pMvd) {
        pMvd.sgKey = k;
        const pos = Object(_util__WEBPACK_IMPORTED_MODULE_0__["key2pos"])(k);
        translate(pMvd, posToTranslate(pos)); // no piece in moved obj: insert new piece
      } else {
        const pieceName = pieceNameOf(p);
        const pieceNode = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createEl"])('piece', pieceName);
        const pos = Object(_util__WEBPACK_IMPORTED_MODULE_0__["key2pos"])(k);
        pieceNode.sgPiece = pieceName;
        pieceNode.sgKey = k;
        translate(pieceNode, posToTranslate(pos));
        boardEl.appendChild(pieceNode);
      }
    }
  }

  for (const j in squaresKeys) {
    k = squaresKeys[j];
    p = squares[k];

    if (!sameSquares[k]) {
      sMvdSet = movedSquares[pieceNameOf(p)];
      sMvd = sMvdSet && sMvdSet.pop(); // same square moved

      if (sMvd) {
        sMvd.sgKey = k;
        const pos = Object(_util__WEBPACK_IMPORTED_MODULE_0__["key2pos"])(k);
        translate(sMvd, posToTranslate(pos)); // no square in moved obj: insert new square
      } else {
        const squareName = pieceNameOf(p);
        const squareNode = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createEl"])('square', squareName);
        const pos = Object(_util__WEBPACK_IMPORTED_MODULE_0__["key2pos"])(k);
        squareNode.sgSquare = squareName;
        squareNode.sgKey = k;
        translate(squareNode, posToTranslate(pos));
        boardEl.appendChild(squareNode);
      }
    }
  } // remove any element that remains in the moved sets


  for (const i in movedPieces) removeNodes(s, movedPieces[i]);

  for (const i in movedSquares) removeNodes(s, movedSquares[i]);
}

function isPieceNode(el) {
  return el.tagName === 'PIECE';
}

function isSquareNode(el) {
  return el.tagName === 'SQUARE';
}

function removeNodes(s, nodes) {
  for (const i in nodes) s.dom.elements.board.removeChild(nodes[i]);
}

function pieceNameOf(piece) {
  return piece.role;
}

function safePush(arr, key, el) {
  if (arr[key]) arr[key].push(el);else arr[key] = [el];
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
function defaults() {
  return {
    level: 1,
    dirs: {},
    events: {}
  };
}

/***/ }),

/***/ "./src/theme.css":
/*!***********************!*\
  !*** ./src/theme.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/theme.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js!./theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/theme.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/theme.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: pos2key, key2pos, posToTranslate, translate, createEl, raf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pos2key", function() { return pos2key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "key2pos", function() { return key2pos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posToTranslate", function() { return posToTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEl", function() { return createEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
const rows = 20;

const allKeys = (() => {
  var res = [];

  for (var r = 0; r < rows; r++) for (var c = 0; c < rows; c++) res.push(r + 'x' + c);

  return res;
})();

const pos2key = pos => allKeys[rows * pos[0] + pos[1]];
const key2pos = k => k.split('x').map(_ => parseInt(_));
const posToTranslate = pos => {
  var factor = 100 / 20;
  return [pos[0] * factor, pos[1] * factor];
};
const translate = (el, percents) => {
  el.style.left = percents[0] + '%';
  el.style.top = percents[1] + '%';
};
const createEl = (tagName, className) => {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  return el;
};
const raf = (window.requestAnimationFrame || window.setTimeout).bind(window);

/***/ }),

/***/ "./src/wrap.js":
/*!*********************!*\
  !*** ./src/wrap.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrap; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");

function wrap(element, state) {
  element.innerHTML = '';
  element.classList.add('sg-wrap');
  const container = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createEl"])('sg-container');
  element.appendChild(container);
  const board = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createEl"])('sg-board');
  container.appendChild(board);
  return {
    board,
    container
  };
}

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/devboot.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eguneys/js/sokoground/src/devboot.js */"./src/devboot.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map