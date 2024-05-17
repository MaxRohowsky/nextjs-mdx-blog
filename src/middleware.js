// middleware runs code before request is completed
import { NextResponse } from 'next/server';


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        // This prevents the middleware from running if it's a prefetch! 
        // It helps to make sure that the views are always incremented only once.
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}

export async function middleware(req, event) {

    const pathname = req.nextUrl.pathname
    const PUBLIC_FILE = /\.(.*)$/

    // Check if the request is for a page, not a static file or API route
    const isBlogPageRequest =
      !PUBLIC_FILE.test(pathname) && !pathname.startsWith('/api') && pathname.startsWith('/blog/')

    // Send a POST request to the /api/view route
    const sendAnalytics = async () => {

      console.log("req.headers.referer")
      //console.log(req.headers)

      // Get the slug from the URL
      const slug = pathname.slice(pathname.indexOf('/')) || '/'
      console.log("hi")
      const URL =
        process.env.NODE_ENV === 'production'
          ? 'https://maxontech.io/api/view'
          : 'http://localhost:3000/api/view'

      const res = await fetch(`${URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug,
        }),
      })

      if (res.status !== 200) {
        console.error('Failed to send analytics data')
      }
    }

    // event.waitUntil is the real magic here:
    // it won't wait for sendAnalytics() to finish before continuing the response,
    // so we avoid delaying the user.
    if (isBlogPageRequest) {
      console.log("isBlogPageRequest")
      event.waitUntil(sendAnalytics())
    }


  


  return NextResponse.next()
}