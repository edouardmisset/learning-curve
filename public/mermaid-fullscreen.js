document.addEventListener('click', event => {
  const mermaidDiv = event.target.closest('.mermaid')
  if (!mermaidDiv) return

  const svg = mermaidDiv.querySelector('svg')
  if (!svg) return

  const overlay = document.createElement('div')
  overlay.className = 'mermaid-fullscreen-overlay'

  const clonedSvg = svg.cloneNode(true)
  overlay.appendChild(clonedSvg)

  const helpText = document.createElement('div')
  helpText.className = 'help-text'
  helpText.innerText = 'Click anywhere to close'
  overlay.appendChild(helpText)

  document.body.appendChild(overlay)

  requestAnimationFrame(() => {
    overlay.style.opacity = '1'
  })

  const closeOverlay = () => {
    overlay.style.opacity = '0'
    document.removeEventListener('keydown', handleKeyDown)
    overlay.addEventListener('transitionend', () => {
      overlay.remove()
    })
  }

  const handleKeyDown = keyEvent => {
    if (keyEvent.key === 'Escape') {
      closeOverlay()
    }
  }

  document.addEventListener('keydown', handleKeyDown)

  overlay.addEventListener('click', () => {
    closeOverlay()
  })
})
