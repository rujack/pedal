const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['1.bp.blogspot.com','2.bp.blogspot.com','3.bp.blogspot.com','4.bp.blogspot.com','i.ibb.co','i0.wp.com','i1.wp.com','i2.wp.com',''],
  },
  assetPrefix: !debug ? '/pedal/' : '',
}
