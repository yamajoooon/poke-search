import { Button, DialogContent } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

import { Exchange } from "@choja/schemas";

import { CreateBotFormValue } from "~/components/bot-setup/models";

import { useStyles } from "./confirm-save-bot-dialog.style";

type Props = {
  handleSaveBot: () => void;
  handleCancel: () => void;
  bot: CreateBotFormValue;
  exchanges: Exchange[];
};

export const ConfirmSaveBotDialog: React.FC<Props> = (props) => {
  const { handleSaveBot, handleCancel, bot, exchanges } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.botTableTitle}>
        <div>{t("bots.confirmSetupDialog.title")}</div>
      </div>
      <DialogContent>
        <div>
          <table className={classes.botTable}>
            <tbody>
              <tr className={classes.botTableRow}>
                <th>{t("bots.confirmSetupDialog.name")}</th>
                <td>{bot.name}</td>
              </tr>
              <tr className={classes.botTableRow}>
                <th>{t("bots.confirmSetupDialog.exchange.name")}</th>
                <td>{exchanges.find((exchange) => exchange.id === bot.exchangeId).name}</td>
              </tr>
              <tr className={classes.botTableRow}>
                <th>{t("bots.confirmSetupDialog.key")}</th>
                <td>{bot.credentials && bot.credentials[0].key}</td>
              </tr>
              <tr className={classes.botTableRow}>
                <th>{t("bots.confirmSetupDialog.secret")}</th>
                <td>{"*".repeat(bot.credentials && bot.credentials[0].secret.length)}</td>
              </tr>
              <tr className={classes.botTableRow}>
                <th>{t("bots.confirmSetupDialog.pair")}</th>
                <td>
                  <div className={classes.pairs}>
                    {bot.config.pairs.map((pair) => (
                      <div key={pair} className={classes.pair}>
                        {pair.split("/").join(" / ")}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
              <tr className={classes.botTableRow}>
                <th>{t("bots.confirmSetupDialog.orderWidth")}</th>
                <td>{parseFloat((bot.config.delta * 200).toFixed(8))}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DialogContent>
      <div className={classes.buttonsContainer}>
        <Button className={classes.cancelButton} onClick={handleCancel}>
          {t("bots.confirmSetupDialog.back")}
        </Button>
        <Button className={classes.saveButton} onClick={handleSaveBot}>
          {t("bots.confirmSetupDialog.save")}
        </Button>
      </div>
    </div>
  );
};
