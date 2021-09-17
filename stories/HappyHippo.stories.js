import HappyHippoComponent from '../src/HappyHippo'

customElements.define(HappyHippoComponent.tagName, HappyHippoComponent)

export default {
  title: 'Example/Component',
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    fontStyle: {
      control: {
        type: 'select'
      },
      options: ['normal', 'italic']
    }
  }
}

const HappyHippoTemplate = ({
  backgroundColor = 'white',
  color = 'black',
  fontStyle = 'normal',
  name
}) => {
  return `
      <style>
      happy-hippo { --font-style: ${fontStyle}; }
      happy-hippo::part(message) { background-color: ${backgroundColor}; color: ${color}; }
      </style>
      <happy-hippo name="${name}"></happy-hippo>
    `
}

export const HappyHippo = HappyHippoTemplate.bind({})
HappyHippo.args = {
  name: '',
  fontStyle: 'normal'
}
