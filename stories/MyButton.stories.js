export default {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Button = ({ backgroundColor = 'white', text }) => {
  return `
      <button type="button" style="background-color: ${backgroundColor}">
        ${text}
      </button>
    `
}

export const MyButtonA = Button.bind({})
MyButtonA.args = {
  text: 'My Button A'
}

export const MyButtonB = Button.bind({})
MyButtonB.args = {
  text: 'My Button B'
}
