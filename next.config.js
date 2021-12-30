/** @type {import('next').NextConfig} */
module.exports = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  async redirects() {
    return [
      {
        source: "/project/typer",
        destination: "/mini-project/typer",
        permanent: true,
      },
      {
        source: "/project/uniquecode",
        destination: "/mini-project/uniquecode",
        permanent: true,
      },
      {
        source: "/current",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/sonic-pi-vscode",
        destination: "/vscode/sonic-pi",
        permanent: true,
      },
      {
        source: "/project/nextbus",
        destination: "/project/nextbussg",
        permanent: true,
      },
      {
        source: "/project/nsr",
        destination: "/project/national-service-resources",
        permanent: true,
      },
      {
        source: "/embed-google-forms",
        destination: "/html/google-forms-embed",
        permanent: true,
      },
      {
        source: "/nextjs/non-file-based-routing",
        destination: "/nextjs/custom-routing",
        permanent: true,
      },
    ];
  },
};
