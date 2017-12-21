import React, { Component } from 'react'
import {View, WebView, Dimensions} from "react-native";
import Toast from 'dore-toast';
import Orientation from 'react-native-orientation';
import RNIconBadge from 'dore-icon-badge'
import RNDeviceInfo from "react-native-device-info";
import DeviceBrightness from 'react-native-device-brightness';
import Permissions from 'react-native-permissions'
import { captureScreen } from "react-native-view-shot";
import DoreOpen from "dore-open";

import Dore from 'dore';

let {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');

export default class ExampleWebView extends Component {
  static componentName = 'ExampleWebView';

  constructor() {
    super()
    this.state = {
      isLoading: true
    };
    Dore.inject([{
      name: 'Toast',
      class: Toast
    }, {
      name: 'Orientation',
      class: Orientation
    }, {
      name: 'Badge',
      class: RNIconBadge
    }, {
      name: 'DeviceInfo',
      class: RNDeviceInfo
    }, {
      name: 'Brightness',
      class: DeviceBrightness
    }, {
      name: 'Permissions',
      class: Permissions
    }, {
      name: 'Capture',
      class: captureScreen
    }]);
  }

  onMessage = evt => {
    let eventData = JSON.parse(evt.nativeEvent.data);
    console.log(eventData);
    Dore.handleMessage(evt, this.webView)
  };

  componentDidMount() {
    Dore.addHandler(this.webView);
  }

  componentWillUnmount() {
    Dore.removeHandler();
  }

  onWebViewLoadStart = () => {
    if (this.state.isLoading) {
      this.webView.injectJavaScript('window.isPhone = true;');
    }
  };

  render() {
    DoreOpen.open('./www/index.html');
    const source = require('./www/index.html');

    return (
      <View>
        <WebView
          bounces={false}
          startInLoadingState={false}
          allowUniversalAccessFromFileURLs
          ref={webView => {
            this.webView = webView
          }}
          source={source}
          style={{width:deviceWidth, height:deviceHeight}}
          onMessage={this.onMessage}
          onLoadStart={this.onWebViewLoadStart}
        />
      </View>
    )
  }
}
