function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by nghinv on Thu Aug 05 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */
import React, { Component } from 'react';
import { StyleSheet, requireNativeComponent, NativeModules } from 'react-native'; // @ts-ignore

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
const IJKPlayerModule = NativeModules.IJKPlayerModule;
const IJKPlayerComponent = requireNativeComponent('RCTIJKPlayer');
export default class IJKPlayer extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ijkPlayerRef", /*#__PURE__*/React.createRef());

    _defineProperty(this, "seek", (time, pauseAfterSeek) => {
      IJKPlayerModule.seek(time, pauseAfterSeek !== null && pauseAfterSeek !== void 0 ? pauseAfterSeek : false);
    });

    _defineProperty(this, "setVolume", volume => {
      this.setNativeProps({
        volume
      });
    });

    _defineProperty(this, "setPaused", paused => {
      this.setNativeProps({
        paused
      });
    });

    _defineProperty(this, "setMute", mute => {
      this.setNativeProps({
        mute
      });
    });

    _defineProperty(this, "takeSnapshot", async path => {
      const response = await IJKPlayerModule.takeSnapshot(path);
      return response;
    });

    _defineProperty(this, "setPan", pan => {
      const l = pan < 0 ? 1 : 1 - pan;
      const r = pan < 0 ? 1 + pan : 1;
      IJKPlayerModule.setPan(l, r);
    });

    _defineProperty(this, "snapshot", snapshotPath => {
      this.setNativeProps({
        snapshotPath
      });
    });

    _defineProperty(this, "setEQPreset", preset => {
      IJKPlayerModule.setEQPreset(preset);
    });

    _defineProperty(this, "_onLoadStart", event => {
      var _this$props$onLoadSta, _this$props;

      (_this$props$onLoadSta = (_this$props = this.props).onLoadStart) === null || _this$props$onLoadSta === void 0 ? void 0 : _this$props$onLoadSta.call(_this$props, event.nativeEvent);
    });

    _defineProperty(this, "_onLoad", event => {
      var _this$props$onLoad, _this$props2;

      IJKPlayerModule.init();
      (_this$props$onLoad = (_this$props2 = this.props).onLoad) === null || _this$props$onLoad === void 0 ? void 0 : _this$props$onLoad.call(_this$props2, event.nativeEvent);
    });

    _defineProperty(this, "_onError", event => {
      var _this$props$onError, _this$props3;

      (_this$props$onError = (_this$props3 = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props3, event.nativeEvent);
    });

    _defineProperty(this, "_onProgress", event => {
      var _this$props$onProgres, _this$props4;

      (_this$props$onProgres = (_this$props4 = this.props).onProgress) === null || _this$props$onProgres === void 0 ? void 0 : _this$props$onProgres.call(_this$props4, event.nativeEvent);
    });

    _defineProperty(this, "_onPause", event => {
      var _this$props$onPause, _this$props5;

      (_this$props$onPause = (_this$props5 = this.props).onPause) === null || _this$props$onPause === void 0 ? void 0 : _this$props$onPause.call(_this$props5, event.nativeEvent);
    });

    _defineProperty(this, "_onStop", event => {
      var _this$props$onStop, _this$props6;

      (_this$props$onStop = (_this$props6 = this.props).onStop) === null || _this$props$onStop === void 0 ? void 0 : _this$props$onStop.call(_this$props6, event.nativeEvent);
    });

    _defineProperty(this, "_onEnd", event => {
      var _this$props$onEnd, _this$props7;

      (_this$props$onEnd = (_this$props7 = this.props).onEnd) === null || _this$props$onEnd === void 0 ? void 0 : _this$props$onEnd.call(_this$props7, event.nativeEvent);
    });

    _defineProperty(this, "_onBuffer", event => {
      var _this$props$onBuffer, _this$props8;

      (_this$props$onBuffer = (_this$props8 = this.props).onBuffer) === null || _this$props$onBuffer === void 0 ? void 0 : _this$props$onBuffer.call(_this$props8, event.nativeEvent);
    });

    _defineProperty(this, "_onTimedText", event => {
      var _this$props$onTimedTe, _this$props9;

      (_this$props$onTimedTe = (_this$props9 = this.props).onTimedText) === null || _this$props$onTimedTe === void 0 ? void 0 : _this$props$onTimedTe.call(_this$props9, event.nativeEvent);
    });

    _defineProperty(this, "setTextTrackIndex", index => {
      this.setNativeProps({
        selectedTextTrack: index
      });
    });

    _defineProperty(this, "setAudioTrackIndex", index => {
      IJKPlayerModule.getSelectedTracks();
      this.setNativeProps({
        selectedAudioTrack: index
      });
    });

    _defineProperty(this, "deselectTrack", index => {
      this.setNativeProps({
        deselectTrack: index
      });
    });

    _defineProperty(this, "_onPlay", () => {
      var _this$props$onPlay, _this$props10;

      (_this$props$onPlay = (_this$props10 = this.props).onPlay) === null || _this$props$onPlay === void 0 ? void 0 : _this$props$onPlay.call(_this$props10);
    });
  }

  setNativeProps(nativeProps) {
    var _this$ijkPlayerRef$cu;

    (_this$ijkPlayerRef$cu = this.ijkPlayerRef.current) === null || _this$ijkPlayerRef$cu === void 0 ? void 0 : _this$ijkPlayerRef$cu.setNativeProps(nativeProps);
  }

  render() {
    var _source$headers, _source$userAgent, _source$uri;

    const source = resolveAssetSource(this.props.source) || {};
    const headers = (_source$headers = source.headers) !== null && _source$headers !== void 0 ? _source$headers : {};
    const userAgent = (_source$userAgent = source.userAgent) !== null && _source$userAgent !== void 0 ? _source$userAgent : '';
    let uri = (_source$uri = source.uri) !== null && _source$uri !== void 0 ? _source$uri : '';

    if (uri && uri.match(/^\//)) {
      uri = `file://${uri}`;
    }

    const nativeProps = { ...this.props,
      style: [styles.base, this.props.style],
      src: {
        uri,
        headers,
        userAgent
      },
      onVideoLoadStart: this._onLoadStart,
      onVideoLoad: this._onLoad,
      onVideoError: this._onError,
      onVideoProgress: this._onProgress,
      onVideoPause: this._onPause,
      onVideoStop: this._onStop,
      onVideoEnd: this._onEnd,
      onVideoBuffer: this._onBuffer,
      onTimedText: this._onTimedText,
      onPlay: this._onPlay
    };
    return /*#__PURE__*/React.createElement(IJKPlayerComponent // @ts-ignore
    , _extends({
      ref: this.ijkPlayerRef,
      nativeOnly: {
        src: true,
        seek: true,
        snapshotPath: true
      }
    }, nativeProps));
  }

}
const styles = StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});
//# sourceMappingURL=IJKPlayer.js.map