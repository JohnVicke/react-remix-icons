import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrelloFillProps = Omit<IconProps, "name">;

export const TrelloFill = (props: TrelloFillProps) => (
  <Icon name="trello-fill" {...props} />
);
