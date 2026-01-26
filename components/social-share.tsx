"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Facebook, LinkIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface SocialShareProps {
  title?: string
  description?: string
  hashtags?: string[]
}

export function SocialShare({ title, description, hashtags = [] }: SocialShareProps) {
  const [mounted, setMounted] = useState(false)
  const [url, setUrl] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
    setUrl(window.location.href)
  }, [])

  if (!mounted) return null

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title || document.title)
  const encodedDescription = encodeURIComponent(description || "")
  const encodedHashtags = hashtags.join(",")

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(
      () => {
        toast({
          title: "Link copied!",
          description: "The link has been copied to your clipboard.",
        })
      },
      (err) => {
        console.error("Could not copy text: ", err)
        toast({
          title: "Failed to copy",
          description: "The link could not be copied to your clipboard.",
          variant: "destructive",
        })
      },
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" asChild>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <Twitter className="h-4 w-4 mr-2" />
          Twitter
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4 mr-2" />
          LinkedIn
        </a>
      </Button>
      <Button variant="outline" size="sm" onClick={copyToClipboard}>
        <LinkIcon className="h-4 w-4 mr-2" />
        Copy Link
      </Button>
    </div>
  )
}
