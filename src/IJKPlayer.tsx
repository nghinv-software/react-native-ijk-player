/**
 * Created by nghinv on Thu Aug 05 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import React, { Component } from 'react';
import { StyleSheet, requireNativeComponent, ViewProps, NativeModules, NativeMethods } from 'react-native';
// @ts-ignore
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const IJKPlayerModule = NativeModules.IJKPlayerModule;
const IJKPlayerComponent = requireNativeComponent('RCTIJKPlayer');

export type Source = {
  uri: string,
  headers?: object,
  userAgent?: string,
}

export type Event = {
  nativeEvent: any;
}

export interface IJKPlayerProps extends ViewProps {
  src: object;
  seek?: number;
  snapshotPath?: string;
  onVideoLoadStart?: (event: Event) => void;
  onVideoLoad?: (event: Event) => void;
  onVideoBuffer?: (event: Event) => void;
  onVideoError?: (event: Event) => void;
  onVideoProgress?: (event: Event) => void;
  onVideoPause?: (event: Event) => void;
  onVideoStop?: (event: Event) => void;
  onVideoEnd?: (event: Event) => void;
  onTimedText?: (event: Event) => void;

  source: Array<Source>;
  muted?: boolean;
  volume?: number;
  onLoadStart?: (event: Event) => void;
  onLoad?: (event: Event) => void;
  onPlay?: () => void;
  onBuffer?: (event: Event) => void;
  onError?: (event: Event) => void;
  onProgress?: (event: Event) => void;
  onPause?: (event: Event) => void;
  onStop?: (event: Event) => void;
  onEnd?: (event: Event) => void;

  scaleX?: number;
  scaleY?: number;
  translateX?: number;
  translateY?: number;
  rotation?: number;
}

export default class IJKPlayer extends Component<IJKPlayerProps> {
  ijkPlayerRef = React.createRef<NativeMethods>();

  setNativeProps(nativeProps: any) {
    this.ijkPlayerRef.current?.setNativeProps(nativeProps);
  }

  seek = (time: number, pauseAfterSeek?: boolean) => {
    IJKPlayerModule.seek(time, pauseAfterSeek ?? false);
  };

  setVolume = (volume: number) => {
    this.setNativeProps({ volume });
  }

  setPaused = (paused: boolean) => {
    this.setNativeProps({ paused });
  }

  setMute = (mute: boolean) => {
    this.setNativeProps({ mute });
  }

  takeSnapshot = async (path: string) => {
    const response = await IJKPlayerModule.takeSnapshot(path);

    return response;
  }

  setPan = (pan: number) => {
    const l = pan < 0 ? 1 : 1 - pan;
    const r = pan < 0 ? 1 + pan : 1;

    IJKPlayerModule.setPan(l, r);
  }

  snapshot = (snapshotPath: string) => {
    this.setNativeProps({ snapshotPath });
  };

  setEQPreset = (preset: any) => {
    IJKPlayerModule.setEQPreset(preset);
  }

  _onLoadStart = (event: Event) => {
    this.props.onLoadStart?.(event.nativeEvent);
  };

  _onLoad = (event: Event) => {
    IJKPlayerModule.init();
    this.props.onLoad?.(event.nativeEvent);
  };

  _onError = (event: Event) => {
    this.props.onError?.(event.nativeEvent);
  };

  _onProgress = (event: Event) => {
    this.props.onProgress?.(event.nativeEvent);
  };

  _onPause = (event: Event) => {
    this.props.onPause?.(event.nativeEvent);
  };

  _onStop = (event: Event) => {
    this.props.onStop?.(event.nativeEvent);
  };

  _onEnd = (event: Event) => {
    this.props.onEnd?.(event.nativeEvent);
  };

  _onBuffer = (event: Event) => {
    this.props.onBuffer?.(event.nativeEvent);
  };

  _onTimedText = (event: Event) => {
    this.props.onTimedText?.(event.nativeEvent);
  }

  setTextTrackIndex = (index: number) => {
    this.setNativeProps({ selectedTextTrack: index });
  }

  setAudioTrackIndex = (index: number) => {
    IJKPlayerModule.getSelectedTracks();
    this.setNativeProps({ selectedAudioTrack: index });
  }

  deselectTrack = (index: number) => {
    this.setNativeProps({ deselectTrack: index });
  }

  _onPlay = () => {
    this.props.onPlay?.();
  }

  render() {
    const source = resolveAssetSource(this.props.source) || {};
    const headers = source.headers ?? {};
    const userAgent = source.userAgent ?? '';

    let uri = source.uri ?? '';
    if (uri && uri.match(/^\//)) {
      uri = `file://${uri}`;
    }

    const nativeProps = {
      ...this.props,
      style: [styles.base, this.props.style],
      src: {
        uri,
        headers,
        userAgent,
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
      onPlay: this._onPlay,
    };

    return (
      <IJKPlayerComponent
        // @ts-ignore
        ref={this.ijkPlayerRef}
        nativeOnly={{
          src: true,
          seek: true,
          snapshotPath: true,
        }}
        {...nativeProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
  },
});
