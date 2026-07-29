'use client'
import { useState } from "react"

const LinkShortener = () => {
  const [linkUrl, setLinkUrl] = useState('')
  const [newText, setNewText] = useState('')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!linkUrl || !newText) return

    const htmlContent = `<a href="${linkUrl}">${newText}</a>`
    const plainText = linkUrl

    try {
      const item = new ClipboardItem({
        "text/html": new Blob([htmlContent], {type: "text/html"}),
        "text/plain": new Blob([plainText], {type: "text/plain"})
      })

      await navigator.clipboard.write([item])
      setCopied(true)
    } catch (err) {
      try {
        await navigator.clipboard.writeText(plainText)
        setCopied(true)
      } catch {
        console.log("Não foi possível copiar: ", err)
      }
    }
  }

  return (
    <div className="bg-[#2a2828] flex flex-col items-center justify-center h-70 w-150 rounded-md gap-8">

      <input type="text" placeholder="URL aqui:" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)}
      className="bg-[#dcdada] w-80 p-1 rounded"/>

      <input type="text" placeholder="Novo texto aqui" value={newText} onChange={(e) => setNewText(e.target.value)} className="bg-[#dcdada] w-80 p-1 rounded"/>

      {linkUrl && newText && (
        <p className="text-white">
          Preview: <a href={linkUrl} target="_blank" rel="noopener noreferrer">{newText}</a>
        </p>
      )}

      <button onClick={handleCopy}
      className="bg-[#A6D3A0] w-80 p-1 rounded cursor-pointer">
        {copied ? 'Copiado!' : 'Copiar link'}
      </button>
    </div>
  )
}

export default LinkShortener