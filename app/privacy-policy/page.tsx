import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Fredrick Akojuru",
  description: "Privacy policy for fredrickakojuru.com website and AlienDev Agency services.",
}

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumbs />
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p>Last updated: May 10, 2025</p>

            <p>
              This Privacy Policy describes how Fredrick Akojuru and AlienDev Agency ("we," "us," or "our") collect,
              use, and share your personal information when you visit fredrickakojuru.com (the "Site").
            </p>

            <h2>Information We Collect</h2>
            <p>
              When you visit the Site, we may collect certain information about your device, including information about
              your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              Additionally, as you browse the Site, we collect information about the individual web pages that you view,
              what websites or search terms referred you to the Site, and information about how you interact with the
              Site.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Improve and optimize our Site</li>
              <li>Estimate our audience size and usage patterns</li>
              <li>Understand how visitors browse our Site</li>
              <li>Process and respond to inquiries</li>
              <li>Send periodic emails when you submit your email through our contact form</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Site and hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services such as Google Analytics, Facebook Pixel, and Microsoft Clarity that
              collect, monitor, and analyze user behavior to better understand how our Site is used.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, please be aware
              that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
              guarantee the absolute security of your data.
            </p>

            <h2>Your Rights</h2>
            <p>
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim
              to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal
              information.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:freddykojuru@gmail.com">freddykojuru@gmail.com</a>.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
