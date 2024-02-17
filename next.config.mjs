// we import the utility from the next-dev submodule
import pkg from '@cloudflare/next-on-pages/next-dev';
const { setupDevPlatform } = pkg;

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// we only need to use the utility during development so we can check NODE_ENV
// (note: this check is recommended but completely optional)
if (process.env.NODE_ENV === 'development') {
	// we simply need to call the utility
	setupDevPlatform();
}