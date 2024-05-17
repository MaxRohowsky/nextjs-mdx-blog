// middleware runs code before request is completed
import { NextResponse } from 'next/server';


export async function middleware(req, event) {

  const pathname = req.nextUrl.pathname
  const PUBLIC_FILE = /\.(.*)$/

  // Check if the request is for a page, not a static file or API route
  const isPageRequest =
    !PUBLIC_FILE.test(pathname) && !pathname.startsWith('/api')

  const sendAnalytics = async () => {
    const slug = pathname.slice(pathname.indexOf('/')) || '/'
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
    }
  }

  // event.waitUntil is the real magic here:
  // it won't wait for sendAnalytics() to finish before continuing the response,
  // so we avoid delaying the user.
  if (isPageRequest) event.waitUntil(sendAnalytics())
  return NextResponse.next()
}