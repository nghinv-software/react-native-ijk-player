"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Event", {
  enumerable: true,
  get: function () {
    return _IJKPlayer.Event;
  }
});
Object.defineProperty(exports, "IJKPlayerProps", {
  enumerable: true,
  get: function () {
    return _IJKPlayer.IJKPlayerProps;
  }
});
Object.defineProperty(exports, "Source", {
  enumerable: true,
  get: function () {
    return _IJKPlayer.Source;
  }
});
exports.default = void 0;

var _IJKPlayer = _interopRequireWildcard(require("./IJKPlayer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Created by nghinv on Thu Aug 05 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */
var _default = _IJKPlayer.default;
exports.default = _default;
//# sourceMappingURL=index.js.map