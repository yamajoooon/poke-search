import * as React from 'react';
import {SettingsDialog} from '../../components/modal/modal1';

interface State {
  isDialogOpen: boolean;
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDialogOpen: false,
    };
  }

  public render(): React.ReactNode {
    return (
    <div>
      <button onClick={this.openDialog}>ニックネーム</button>
      <SettingsDialog isOpen={this.state.isDialogOpen} onClose={this.closeDialog} />
    </div>
    )
  }

  // ダイアログを開く
  private openDialog = () => {
    this.setState({isDialogOpen: true});
  }

  // ダイアログからのコールバックでダイアログを閉じてあげる
  private closeDialog = () => {
    this.setState({isDialogOpen: false});
  }
}