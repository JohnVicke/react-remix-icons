import React from "react";
import { Icon, IconProps } from "../Icon";

export type TelegramLineProps = Omit<IconProps, "name">;

export const TelegramLine = (props: TelegramLineProps) => (
  <Icon name="telegram-line" {...props} />
);
