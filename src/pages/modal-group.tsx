import React from "react";
import { Modal, Button } from "antd";
import { ModalProps } from "antd/lib/modal";

export interface ModalGroupProps {
  visibleIndex?: number | number[];
  visibleKey?: string | number[];

  modalProps?: ModalProps;

  // 弹窗关闭时调用
  onConfirm?: Function;

  // 弹窗取消时候调用
  onCancel?: Function;

  // 弹窗确认时调用
  onOk?: Function;
}

/**
 * 弹窗组，可用于切换弹窗
 *
 * ```typescript
 * // Example:
 *
 * // change currentIndex state value somewere.
 * // set currentIndex state to undefined in closeModal method.
 * <ModalGroup visibleIndex={this.state.currentIndex} onConfirm={this.closeModal}>
 *   <Modal>Modal 1</Modal>
 *   <Modal>Modal 2</Modal>
 * </ModalGroup>
 * ```
 */
class ModalGroup extends React.Component<ModalGroupProps> {
  render() {
    if (
      this.props.visibleIndex === undefined ||
      this.props.visibleIndex === null
    )
      return this.props.children;

    var visibleIndices: number[] = [];
    if (typeof this.props.visibleIndex === "number") {
      visibleIndices = [this.props.visibleIndex];
    } else if (Array.isArray(this.props.visibleIndex)) {
      visibleIndices = this.props.visibleIndex;
    }

    return React.Children.map(this.props.children, (child: any, index) => {
      return React.cloneElement(child as any, {
        ...this.props.modalProps,
        ...child.props,
        visible: visibleIndices.indexOf(index) >= 0,
        onCancel: () => {
          child.props.onCancel?.();
          this.props.onCancel?.(index);
          this.props.onConfirm?.(index);
        },
        onOk: () => {
          child.props.onOk?.();
          this.props.onOk?.(index);
          this.props.onConfirm?.(index);
        },
      });
    });
  }
}

export class ModalGroupTextCase extends React.Component<
  {},
  { currentIndex?: number | number[] }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentIndex: undefined,
    };
  }

  closeModal = (index: number) => {
    this.setState({ currentIndex: undefined });
  };

  render() {
    return (
      <>
        <Button onClick={() => this.setState({ currentIndex: 0 })}>
          Modal 1
        </Button>
        <Button onClick={() => this.setState({ currentIndex: 1 })}>
          Modal 2
        </Button>
        <Button onClick={() => this.setState({ currentIndex: 2 })}>
          Modal 3
        </Button>

        <ModalGroup
          visibleIndex={this.state.currentIndex}
          onConfirm={this.closeModal}
          modalProps={{ maskClosable: true, closable: false }}
        >
          <Modal>Modal 1</Modal>
          <Modal>Modal 2</Modal>
          <Modal>Modal 3</Modal>
        </ModalGroup>
        <h1>Hello world!</h1>
      </>
    );
  }
}
