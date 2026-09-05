import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kontakt",
        destination: "/boka-mote",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/boka-mote",
        permanent: true,
      },
      {
        source: "/boka-m%C3%B6te",
        destination: "/boka-mote",
        permanent: true,
      },
      {
        source: "/boka_mote",
        destination: "/boka-mote",
        permanent: true,
      },
      {
        source: "/pilot",
        destination: "/tjanster",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/tjanster",
        permanent: true,
      },
      {
        source: "/service-page/:path*",
        destination: "/tjanster",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/kunder",
        permanent: true,
      },
      {
        source: "/cases",
        destination: "/kunder",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/om",
        permanent: true,
      },
      {
        source: "/about-1",
        destination: "/om",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/jobba-hos-oss",
        permanent: true,
      },
      {
        source: "/karriar",
        destination: "/jobba-hos-oss",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
