import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      // OT Notes Assistant
      {  
        source: '/mg-ot-notes',
        destination: 'https://n8n.mattg.win/webhook/4ea1a049-032f-454a-acf5-ddcb5091966f/chat',
        permanent: false,
      },
      {
        source: '/as-ot-notes',
        destination: 'https://n8n.mattg.win/webhook/4ea1a049-032f-454a-acf5-ddcb5091966f/chat',
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
