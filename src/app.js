import { LightningElement } from "lwc";
const STATE = {
  islit: "islit",
  unlit: "unlit",
  isbroken: "isbroken",
};
// Setting Initial State
let state = STATE.unlit;

export default class App extends LightningElement {
  lightBulb() {
    return {
      state() {
        return state;
      },
      setState(newState) {
        state = newState;
      },
      toggleState() {
        switch (state) {
          case STATE.islit:
            state = STATE.unlit;
            break;
          case STATE.unlit:
            state = STATE.islit;
            break;
        }
      },
      break() {
        isBroken = true;
      },
    };
  }

  bulb = this.lightBulb()

  handleToggle() {
    this.bulb.toggleState();
    this._log();
  }
  handleSetState(event) {
    const dataset = event.target.getAttribute("data-set");
    const newState = STATE[`${dataset}`];
    this.bulb.setState(newState);
    this._log();
  }

  _log(){
    console.log("LightBulb State :: ", this.bulb.state());
  }
  title = "State Patterns in LWC"
  version = '1.0'
  description = 'Simple State Manager in LWC'
  blurb = ''
}
