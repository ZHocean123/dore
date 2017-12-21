package com.examples;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.jadsonlourenco.RNShakeEvent.RNShakeEventPackage;
import com.rpt.reactnativecheckpackageinstallation.CheckPackageInstallationPackage;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import org.capslock.RNDeviceBrightness.RNDeviceBrightness;
import com.hoyup.rniconbadge.RNIconBadge;
import com.github.yamill.orientation.OrientationPackage;
import com.remobile.toast.RCTToastPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNShakeEventPackage(),
            new CheckPackageInstallationPackage(),
            new RNViewShotPackage(),
            new RNDeviceBrightness(),
            new RNIconBadge(),
            new OrientationPackage(),
            new RCTToastPackage(),
            new RNDeviceInfo()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
