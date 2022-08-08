import React from "react";
import { Icon, IconProps } from "../Icon";

export type HistoryLineProps = Omit<IconProps, "name">;

export const HistoryLine = (props: HistoryLineProps) => (
  <Icon name="history-line" {...props} />
);
