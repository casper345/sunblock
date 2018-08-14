import { Container } from 'unstated'

class MaxPanelsContainer extends Container {
  state = {
    MaxPanels: 5,
  }

  yell = () => console.log("yell")

  increment = () => {
    console.log("Increment Clicked")
    this.setState({
      MaxPanels: this.state.MaxPanels + 1
    })
  }
  decrement = () => {
    console.log("Decrease Clicked")
    this.setState({
      MaxPanels: this.state.MaxPanels - 1
    })
  }
}

export default MaxPanelsContainer
