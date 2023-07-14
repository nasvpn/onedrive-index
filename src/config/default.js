/* eslint-disable no-irregular-whitespace */
const config = {
  /**
   * You can use this tool http://heymind.github.io/tools/microsoft-graph-api-auth
   * to get following params: client_id, client_secret, refresh_token & redirect_uri.
   */
  refresh_token: "0.AVYATgceL8xTIUyW3uG3RYc0OvNbhelWNaBKqNDa7_nfROefACg.AgABAAIAAAD--DLA3VO7QrddgJg7WevrAgDs_wUA9P9CKo1fOFZa6Qnfre8Nhm9c5tvnjXia25SKbMQO2I4Iw9CRNaSGYzMQaCTPWjD9OGmpjqZaWILyplHNBsfCkYrGSpEce8pC2l_MKCzj6mxVWV-9gp7lrp6d-2KcNF3hDPU7ZAwQT5D7KY40hdMSJEneaNBd2yzgcqu4Hbm0zmqAmJ7NzmdLX9xw2WKal70mryC_zpOJQqMMT9cAhmOcmc12lxMZ7bM-Cdq3673pzNLjm9OglI0bG52_J8BZ8Cm83TN_ItbmprKLOh8e7qEBXEuXOQzvxlJCXALK_cp1r8gw69FNsU1BPMhe0KoT0hJmf7YkbCRUXYBiEoqrUL7j-OgddSMgFMrlOY_vV1hVu8HrUHwQ34GwkaY5cxZJ6Nhu_Mfl3Zf5RNeZEn8ZTy3Dpj0FRRLvXKBv1o9Q4EClUMlzLqtV41XtGKnJWl-_eL3iBBY4D_qX7DO-4pbW6U_3Y7HQ1-D7CgK3dLcGhBSi-bdfpcuSweKuWvry9pq2fNoccB70KhhdzniapDRlbzQMByknocvNSHFnsFxoFQXedObo8M1fjF5xGlzUYZJE_MIoYmGD_0nQiLpFgyuyCXE8sEKtYqiOSyuzXJPVt_dol0kT2T7NgpRI6b1nCvHzmck6AwW4vQHVsn697VeyTaqZMZ9OmR06sEH0QwGHPeIixwtNfDu2JlDdQ-W117hrVFFLuC2ijMY8VNN0sh_iPAdpP10b4oxOHccxrEKKfeFEC7CTbiqo6NcXX3aAUFkYrmrKblE",
  client_id: 'e9855bf3-3556-4aa0-a8d0-daeff9df44e7',
  client_secret: 'tGc8Q~V4vVtWoE_t-~semqp~DHnQz8B9fCRC8b~P.',
  redirect_uri: 'https://heymind.github.io/tools/microsoft-graph-api-auth',

  /**
   * The base path for indexing, all files and subfolders are public by this tool. For example: `/Public`.
   */
  base: '/Public',

  /**
   * Feature: add OneDriveCN (21Vianet) support
   * Usage: simply change `useOneDriveCN` to true
   */
  useOneDriveCN: false,

  /**
   * Feature: Pagination when a folder has multiple(>${top}) files
   * - top: specify the page size limit of the result set, a big `top` value will slow down the fetching speed
   */
  pagination: {
    enable: true,
    top: 100 // default: 200, accepts a minimum value of 1 and a maximum value of 999 (inclusive)
  },

  /**
   * Feature Caching
   * Enable Cloudflare cache for path pattern listed below.
   * Cache rules:
   * - Entire File Cache  0 < file_size < entireFileCacheLimit
   * - Chunked Cache     entireFileCacheLimit  <= file_size < chunkedCacheLimit
   * - No Cache ( redirect to OneDrive Server )   others
   *
   * Difference between `Entire File Cache` and `Chunked Cache`
   *
   * `Entire File Cache` requires the entire file to be transferred to the Cloudflare server before
   *  the first byte sent to a client.
   *
   * `Chunked Cache` would stream the file content to the client while caching it.
   *  But there is no exact Content-Length in the response headers. ( Content-Length: chunked )
   *
   */
  cache: {
    enable: false,
    entireFileCacheLimit: 10000000, // 10MB
    chunkedCacheLimit: 100000000, // 100MB
    paths: ['/Images']
  },

  /**
   * Feature: Thumbnail
   * Show a thumbnail of image by ?thumbnail=small (small, medium, large)
   * More details: https://docs.microsoft.com/en-us/onedrive/developer/rest-api/api/driveitem_list_thumbnails?view=odsp-graph-online#size-options
   * Example: https://storage.spencerwoo.com/🥟%20Some%20test%20files/Previews/eb37c02438f.png?thumbnail=mediumSquare
   * You can embed this link (url encoded) directly inside Markdown or HTML.
   */
  thumbnail: true,

  /**
   * Small File Upload (<= 4MB)
   * POST https://<base_url>/<directory_path>/?upload=<filename>&key=<secret_key>
   */
  upload: {
    enable: false,
    key: 'your_secret_key_here'
  },

  /**
   * Feature: Proxy Download
   * Use Cloudflare as a relay to speed up download. (Especially in Mainland China)
   * Example: https://storage.spencerwoo.com/🥟%20Some%20test%20files/Previews/eb37c02438f.png?raw=true&proxied
   * You can also embed this link (url encoded) directly inside Markdown or HTML.
   */
  proxyDownload: true
}

export default config
