/**
 * Created by nghinv on Thu Aug 05 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */
import React, { Component } from 'react';
import { ViewProps, NativeMethods } from 'react-native';
export declare type Source = {
    uri: string;
    headers?: object;
    userAgent?: string;
};
export declare type Event = {
    nativeEvent: any;
};
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
    ijkPlayerRef: React.RefObject<NativeMethods>;
    setNativeProps(nativeProps: any): void;
    seek: (time: number, pauseAfterSeek?: boolean | undefined) => void;
    setVolume: (volume: number) => void;
    setPaused: (paused: boolean) => void;
    setMute: (mute: boolean) => void;
    takeSnapshot: (path: string) => Promise<any>;
    setPan: (pan: number) => void;
    snapshot: (snapshotPath: string) => void;
    setEQPreset: (preset: any) => void;
    _onLoadStart: (event: Event) => void;
    _onLoad: (event: Event) => void;
    _onError: (event: Event) => void;
    _onProgress: (event: Event) => void;
    _onPause: (event: Event) => void;
    _onStop: (event: Event) => void;
    _onEnd: (event: Event) => void;
    _onBuffer: (event: Event) => void;
    _onTimedText: (event: Event) => void;
    setTextTrackIndex: (index: number) => void;
    setAudioTrackIndex: (index: number) => void;
    deselectTrack: (index: number) => void;
    _onPlay: () => void;
    render(): JSX.Element;
}
