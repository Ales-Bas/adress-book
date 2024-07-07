/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ['addressbook.bngroup.ru'],
        },
    },
};

export default nextConfig;
