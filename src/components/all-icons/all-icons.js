export const ICON_NAMES = require
  .context('../../assets/icons', true, /\.svg$/)
  .keys()
  .map((icon) => icon.replace(/\.\//, ''))

ICON_NAMES.forEach((name) => require(`../../assets/icons/${name}`))

export class AllIcons extends HTMLElement {
  constructor() {
    super()

    this.render()
    this.addHandlerOnInput()
  }

  render() {
    const template = ICON_NAMES.reduce(
      (str, icon) => str + this.getTemplate(icon),
      ''
    )

    this.innerHTML = this.getWrapTemplate(template)
  }

  getWrapTemplate(slot) {
    const styles =
      'width:1200px; margin: 50px auto; display:flex; flex-wrap:wrap;'

    return `
        <div style="${styles}">
            <div style="width: 100%; margin-bottom: 10px">
                <label>Color:</label>
                <input type="color" id="all-icons-input"/>
            </div>
            ${slot}
        </div>`
  }

  getTemplate(icon) {
    const name = icon.replace('.svg', '')
    const styles =
      'width: 120px; padding: 10px; margin: 2px; text-align: center; border: 1px solid rgba(0,0,0, .1); font-size: 5rem'

    return `
        <div style="${styles}">
            <svg-icon name="${name}" style="margin-bottom: 10px"></svg-icon>
            <p style="font-size: 1.4rem; color: #000">${name}</p>
        </div>`
  }

  addHandlerOnInput() {
    const input = document.querySelector('#all-icons-input')

    input.addEventListener('input', (e) => {
      document.querySelector('all-icons').style.color = e.target.value
    })
  }
}
