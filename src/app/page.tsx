'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [text, setText] = useState('哇！运气太好了，我刚刚在 XX 游戏中中了 100 倍奖励！！')
  const sampleImage = 'https://pics0.baidu.com/feed/4034970a304e251f29c11dcb58dcf91b7f3e53b2.jpeg?token=9776ddf77cfd1a67314b55c343e6188e' // Replace with your actual image path

  const shareToTwitter = () => {
    const tweetText = encodeURIComponent(text)
    const imageUrl = encodeURIComponent(`${sampleImage}`)
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${imageUrl}`
    window.open(twitterUrl, '_blank')
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="请输入推文内容..."
          className="w-full p-4 border rounded-lg resize-none h-32"
        />
        
        <div className="relative w-full aspect-video">
          <Image
            src={sampleImage}
            alt="Share image"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <button
          onClick={shareToTwitter}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          分享到推特
        </button>
      </div>
    </main>
  )
}
