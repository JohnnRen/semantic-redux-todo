import React from "react";
import { Button } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  submit = () => {
    if (this.state.input.trim()) {
      this.props.addTodo(this.state.input.trim());
      this.setState({ input: "" });
    }
  };
  render() {
    return (
      <div className="input-wrapper">
        <Input
          placeholder="What to do..."
          value={this.state.input}
          onChange={e => {
            this.setState({ input: e.target.value });
          }}
          onKeyPress={({ key }) => {
            if (key === "Enter") {
              this.submit();
            }
          }}
        />
        <Button className="input-btn" onClick={this.submit}>
          Add
        </Button>
      </div>
    );
  }
}
export default TodoInput;
