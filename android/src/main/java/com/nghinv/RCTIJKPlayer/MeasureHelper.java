package com.nghinv.RCTIJKPlayer;

import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import java.lang.ref.WeakReference;

public final class MeasureHelper {
    private WeakReference<View> mWeakView;

    private int mVideoWidth;
    private int mVideoHeight;
    private int mVideoSarNum;
    private int mVideoSarDen;

    private int mVideoRotationDegree;

    private int mMeasuredWidth;
    private int mMeasuredHeight;

    private int mCurrentAspectRatio = IRenderView.AR_CONTAIN;

    public MeasureHelper(View view) {
        mWeakView = new WeakReference<View>(view);
    }

    public View getView() {
        if (mWeakView == null)
            return null;
        return mWeakView.get();
    }

    public void setVideoSize(int videoWidth, int videoHeight) {
        mVideoWidth = videoWidth;
        mVideoHeight = videoHeight;
    }

    public void setVideoSampleAspectRatio(int videoSarNum, int videoSarDen) {
        mVideoSarNum = videoSarNum;
        mVideoSarDen = videoSarDen;
    }

    public void setVideoRotation(int videoRotationDegree) {
        mVideoRotationDegree = videoRotationDegree;
    }

    /**
     * Must be called by View.onMeasure(int, int)
     *
     * @param widthMeasureSpec
     * @param heightMeasureSpec
     */
    public void doMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        int width = View.getDefaultSize(mVideoWidth, widthMeasureSpec);
        int height = View.getDefaultSize(mVideoHeight, heightMeasureSpec);

        float displayAspectRatio = (float) width / (float) height;

        float videoAspectRatio = (float) mVideoWidth / (float) mVideoHeight;

        boolean isWiderThanView = mVideoWidth > width ? true : false;
        boolean isLargerThanView = mVideoHeight > height ? true : false;

        float h;
        float w;

        if (mCurrentAspectRatio == IRenderView.AR_CONTAIN) {
            if (isWiderThanView) {
                h = (float) width / videoAspectRatio;
                w = width;
            } else if (isLargerThanView) {
                w = (float) height * videoAspectRatio;
                h = height;
            } else if (isWiderThanView == true && isLargerThanView == true) {
                if (mVideoWidth > mVideoHeight) {
                    h = (float) width / videoAspectRatio;
                    if (h > height) {
                        float diff =  h - height;
                        h = h - diff;
                        w = h *videoAspectRatio;
                    } else {
                        w = width;
                    }

                } else {
                    w = (float) height * videoAspectRatio;
                    if (w > width) {
                        float diff =  w - width;
                        w = w - diff;
                        h = w/videoAspectRatio;
                    } else {
                        h = height;
                    }
                }
            } else {
                if (mVideoWidth > mVideoHeight) {
                    h = (float) width / videoAspectRatio;
                    if (h > height) {
                        float diff =  h - height;
                       h = h - diff;
                        w = h *videoAspectRatio;
                    } else {
                        w = width;
                    }
                } else {

                    w = (float) height * videoAspectRatio;
                    if (w > width) {
                        float diff =  w - width;
                        w = w - diff;
                        h = w/videoAspectRatio;
                    } else {
                        h = height;
                    }
                }
            }

            width =(int) w;
            height=(int) h;
        } else if (mCurrentAspectRatio == IRenderView.AR_STRETCH) {
            // Stretch video to match parent size
            // no need to do anything, just set width and height of view.
        } else if (mCurrentAspectRatio == IRenderView.AR_FILL_HORIZONTAL){
            w = width;
            h = (float) width /videoAspectRatio;

            width = (int) w;
            height = (int) h;
        } else if (mCurrentAspectRatio == IRenderView.AR_FILL_VERTICAL) {
            w = (float) height * videoAspectRatio;
            h = height;

            width = (int) w;
            height = (int) h;
        } else if (mCurrentAspectRatio == IRenderView.AR_ORIGINAL){
            width = mVideoWidth;
            height = mVideoHeight;
        } else if (mCurrentAspectRatio == IRenderView.AR_COVER) {
            if (mVideoWidth > mVideoHeight) {
                h = (float) width / videoAspectRatio;
                w = width;
                if (height > (int) h) {
                    int h1 = height - (int)h;
                    int h2 = (int)h + h1;
                    h = h2;
                    w = h * videoAspectRatio;
                }
            } else {
                w = (float) height * videoAspectRatio;
                h = height;
                if (width > (int) w) {
                    int w1 = width - (int)w;
                    int w2 = (int)w + w1;
                    w = w2;
                    h = w / videoAspectRatio;
                }
            }

            width = (int) w;
            height = (int) h;
        }

        mMeasuredWidth = width;
        mMeasuredHeight = height;
    }

    public int getMeasuredWidth() {
        return mMeasuredWidth;
    }

    public int getMeasuredHeight() {
        return mMeasuredHeight;
    }

    public void setAspectRatio(int aspectRatio) {
        mCurrentAspectRatio = aspectRatio;
    }
}
