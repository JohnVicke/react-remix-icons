import React from "react";
import { Icon, IconProps } from "../Icon";

export type HistoryFillProps = Omit<IconProps, "name">;

export const HistoryFill = (props: HistoryFillProps) => (
  <Icon name="history-fill" {...props} />
);
