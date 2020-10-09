import { Button } from "@material-ui/core";
import React from "react";
import Modal from "react-modal";

import { useStyles } from "./confirm-modal.style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  // 親ウィンドウのスタイル（ちょっと暗くする）
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

interface Props {
  hp: number;
  at: number;
  de: number;
  sA: number;
  sD: number;
  sp: number;
}

const Sample: React.FC<Props> = (props) => {
  //let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = '#3ab60b';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" className="mr-2" onClick={openModal}>
        モーダル表示
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Mebee</h2> */}
        <div className={classes.botStatus}>
          <div className={classes.botTableTitle}>
            <p>設定確認</p>
          </div>
          <div>
            <table className={classes.botTable}>
              <tbody>
                <tr className={classes.botTableRow}>
                  <th>ポットサーバー名</th>
                  <td>{props.hp}chojatestbotserver</td>
                </tr>
                <tr className={classes.botTableRow}>
                  <th>取引所</th>
                  <td>{props.at}OKEX</td>
                </tr>
                <tr className={classes.botTableRow}>
                  <th>APIキー</th>
                  <td>{props.de}olkijuhygtfrdexsazsxdcfvgbhnjm</td>
                </tr>
                <tr className={classes.botTableRow}>
                  <th>シークレットキー</th>
                  <td>{props.sD}</td>
                </tr>
                <tr className={classes.botTableRow}>
                  <th>通貨ペア</th>
                  <td>{props.sA}</td>
                </tr>
                <tr className={classes.botTableRow}>
                  <th>注文幅(%)</th>
                  <td>{props.sp}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.buttonPosition}>
          <Button variant="outlined" className={classes.button}>
            編集に戻る
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={closeModal}>
            保存する
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Sample;
