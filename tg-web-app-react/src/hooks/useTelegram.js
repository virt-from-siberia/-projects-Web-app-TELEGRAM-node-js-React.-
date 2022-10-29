import {isVisible} from "@testing-library/user-event/dist/utils";

export function useTelegram() {
  const tg = window.Telegram.WebApp

  const onClose = () =>
      tg.close()

  const onToggleButton = () => {
    if (tg.MainButton, isVisible)
      tg.MainButton.hide()
    else
      tg.MainButton.show()
  }

  return {
    tg,
    onToggleButton,
    user: tg.initDataUnsafe?.user,
    onClose
  }
}

