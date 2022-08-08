import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrelloLineProps = Omit<IconProps, "name">;

export const TrelloLine = (props: TrelloLineProps) => (
  <Icon name="trello-line" {...props} />
);
