import React from "react";
import { Icon, IconProps } from "../Icon";

export type TelegramFillProps = Omit<IconProps, "name">;

export const TelegramFill = (props: TelegramFillProps) => (
  <Icon name="telegram-fill" {...props} />
);
