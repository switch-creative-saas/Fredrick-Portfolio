import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Fredrick Akojuru",
  description: "Terms and conditions for using fredrickakojuru.com website and AlienDev Agency services.",
}

export default function TermsOfService() {
  return (
    <>
      <Breadcrumbs />
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p>Last updated: May 10, 2025</p>

            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the
              fredrickakojuru.com website (the "Service") operated by Fredrick Akojuru and AlienDev Agency ("us", "we",
              or "our").
            </p>

            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of
              the terms, you may not access the Service.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive
              property of Fredrick Akojuru and AlienDev Agency and its licensors. The Service is protected by copyright,
              trademark, and other laws of both Nigeria and foreign countries. Our trademarks and trade dress may not be
              used in connection with any product or service without the prior written consent of Fredrick Akojuru.
            </p>

            <h2>User Content</h2>
            <p>
              When you submit content to the Service, you grant us a worldwide, non-exclusive, royalty-free license to
              use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display
              such content in any media.
            </p>

            <h2>Links to Other Websites</h2>
            <p>
              Our Service may contain links to third-party websites or services that are not owned or controlled by
              Fredrick Akojuru and AlienDev Agency. We have no control over, and assume no responsibility for, the
              content, privacy policies, or practices of any third-party websites or services.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any
              reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall Fredrick Akojuru or AlienDev Agency, nor its directors, employees, partners, agents,
              suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
              resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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
