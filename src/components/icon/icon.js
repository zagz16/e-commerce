import './icon.scss'

export class Icon extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    const name = this.getAttribute('name')
    this.innerHTML = `<svg viewBox="0 0 40 40"><use xlink:href="#${name}" /></svg>`
  }
}
