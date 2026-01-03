import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Ensure the basePath matches your repository name for GitHub Pages deployment
    basePath: '/myscathach', 
};

export default nextConfig;
