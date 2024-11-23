import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import React from 'react'
import { Inter, Space_Grotesk } from 'next/font/google'
// import type { Metadata } from 'next'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: "OverflowX",
  description: "OverFlowX is a platform for developers and tech enthusiasts to ask and answer technical questions, share knowledge, and collaborate on solving coding challenges. Designed with a clean and modern interface, OverFlowX fosters a community-driven approach to problem-solving, covering a wide range of topics, from programming languages to software development best practices.  ",
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}








export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={
      {
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-graditen hover:text-primary-500'
        }
      } 
    }>
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
          <h1 className='h1-bold'>Welcome to overflowX</h1>

        </body>
      </html>
    </ClerkProvider >
  )
}