import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.06f4c1c045ca4e6d970ba294ac372f45',
  appName: 'Life Flow',
  webDir: 'dist',
  server: {
    url: 'https://06f4c1c0-45ca-4e6d-970b-a294ac372f45.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;
