if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
   define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'RFEDSD_DED_SD' );
  `)
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL
)

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `${pathname}/**`,
      },
    ],
  },
}
