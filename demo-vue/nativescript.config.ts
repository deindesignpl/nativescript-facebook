import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.demovue',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    requireModules: {
      0: 'nativescript-facebook-7',
    },
  },
  appPath: 'app',
} as NativeScriptConfig
