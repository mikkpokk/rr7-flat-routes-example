import {type RouteConfig, index} from '@react-router/dev/routes'
import {remixRoutesOptionAdapter} from '@react-router/remix-routes-option-adapter'
import {flatRoutes} from 'remix-flat-routes'

export default remixRoutesOptionAdapter((defineRoutes) => {
    return flatRoutes('routes', defineRoutes, {
        ignoredRouteFiles: ['**/.*'], // Ignore dot files (like .DS_Store)
        nestedDirectoryChar: '@',
        //appDir: 'app',
        //routeDir: 'routes',
        //basePath: '/',
        //paramPrefixChar: '$',
        //routeRegex: /((\${nestedDirectoryChar}[\/\\][^\/\\:?*]+)|[\/\\]((index|route|layout|page)|(_[^\/\\:?*]+)|([^\/\\:?*]+\.route)))\.(ts|tsx|js|jsx|md|mdx)$$/,
    })
})
