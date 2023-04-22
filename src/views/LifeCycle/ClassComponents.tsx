import React, { Component } from "react";

interface State {
  stateTitle: string;
}
interface Props {
  propsTitle: string;
}
export default class ClassComponents extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stateTitle: "initial",
    };
  }
  componentDidMount(): void {
    console.log("componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    // được thêm vào từ react 16+
    // chạy trước khi render
    // thích hợp lưu vị trí scroll
    // trả về kết quả cho componentDidUpdate
    return "snapshot nè!";
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    // Called immediately after updating occurs. Not called for the initial render.
    console.log("componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
  }
  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    //Mặc định thì component sẽ được re-render khi props hoặc state thay đổi
    // để không cho nó update theo mặc định ta dùng hàm này
    // component sẽ re-render nếu component cha của nó được re-render dù cho state hay props của component con có thay đổi hay không.
    //  PureComponent được dùng trong trường hợp bạn không muốn component con re-render nếu state hoặc props của nó không thay đổi.
    return true;
  }
  render() {
    return (
      <button onClick={() => this.setState({ stateTitle: "updated title" })}>
        {this.state.stateTitle}
      </button>
    );
  }
}
