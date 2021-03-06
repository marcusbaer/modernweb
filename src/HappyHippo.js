export default class HappyHippo extends HTMLElement {
  static get tagName () {
    return 'happy-hippo'
  }

  static get observedAttributes () {
    return ['name']
  }

  constructor () {
    super()
    // this.appendChild(node);
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.innerHTML = `<style>:host { border: 1px solid gray; display: inline-block; font-style: var(--font-style, inherit); }
    p { margin: 0; padding: 1rem; }</style>
    <p part="message">I am <strong>strong enough</strong> to move that mountain</p>`

    const name = this.getAttribute('name')
    this.closingNode = document.createTextNode(name ? `, ${name}.` : '.')
    this.shadow.querySelector('p').appendChild(this.closingNode)
  }

  attributeChangedCallback (name, oldVal, newVal) {
    // this[name] = newVal
    // we only have attribute 'name'
    this.closingNode.textContent = newVal ? `, ${newVal}.` : '.'
  }

  get name () {
    return this.getAttribute('name')
  }

  set name (name) {
    this.setAttribute('name', name)
  }
}

// customElements.define(HappyHippo.tagName, HappyHippo);
