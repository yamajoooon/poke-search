import * as React from 'react';
import ReactModal from 'react-modal';
import { useStyles } from "./pokemodal.style";

interface Props {
  /** このダイアログを表示するなら true */
  isOpen: boolean;
  /** このダイアログを閉じるときのコールバック */
  onClose?: () => void;

  hp: number;
  at: number;
  de: number;
  sA: number;
  sD: number;
  sp: number;
}

interface State {
  username: string;
}

export class SettingsDialog extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: ''
    };

    // 具体的に #root 要素などを指定した方がよい？
    ReactModal.setAppElement('body');
    //const classes = useStyles();
  }

  

  public render(): React.ReactNode {
    const classes = useStyles;

    return <div>
      <ReactModal
        isOpen={this.props.isOpen}
        onAfterOpen={this.handleOpen}
        onRequestClose={this.handleClose}
        style={this.customStyles}
        contentLabel="Settings"
      >
        <form onSubmit={this.handleSubmit}>
          <label>ニックネーム
            <input type="text" autoFocus value={this.state.username}
              onChange={this.handleChangeUsername}></input>
          </label>
        </form>
        <div>
            {/* <h3>種族値</h3>
            <ul>
            <li>HP{this.props.hp}</li>
            <li>AT{this.props.at}</li>
            <li>DE{this.props.de}</li>
            <li>SA{this.props.sA}</li>
            <li>SD{this.props.sD}</li>
            <li>SP{this.props.sp}</li>
            </ul> */}
            <table className = {classes.botTable}> 
                <tbody>
                    <tr className = {classes.botTableRow}>
                        <th>サーバー名</th>
                        <td>{this.props.hp}</td>
                    </tr>
                    <tr className = {classes.botTableRow}>
                        <th>取引所</th>
                        <td>{this.props.at}</td>
                    </tr>
                    <tr className = {classes.botTableRow}>
                        <th>APIキー</th>
                        <td>{this.props.de}</td>
                    </tr>
                    <tr className = {classes.botTableRow}>
                        <th>シークレットキー</th>
                        <td>{this.props.sD}</td>
                    </tr>
                    <tr className = {classes.botTableRow}> 
                        <th>通貨ペア</th>
                        <td></td>
                    </tr>
                    <tr className = {classes.botTableRow}>
                        <th>注文幅(%)</th>
                        <td>{this.props.sp}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </ReactModal>
    </div>;
  }

  // フォームのサブミット時にダイアログを閉じる
  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.handleClose();
  }

  private handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({username: event.target.value})
  }

  // ダイアログが開いたときに呼び出される
  private handleOpen = () => {
    // ここで設定情報などを読み込む
  }

  // ダイアログ領域外のクリックや、ESCキーを押したときに呼び出される
  private handleClose = () => {
    // 親コンポーネントにダイアログを閉じてもらうためのコールバック通知
    this.props.onClose?.();
  }

  // スタイルのカスタマイズ
  private customStyles: ReactModal.Styles = {
    // ダイアログ内のスタイル（中央に表示）
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    },
    // 親ウィンドウのスタイル（ちょっと暗くする）
    overlay: {
      background: 'rgba(0, 0, 0, 0.2)'
    }
  }
}