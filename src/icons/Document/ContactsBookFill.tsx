import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContactsBookFillProps = Omit<IconProps, "name">;

export const ContactsBookFill = (props: ContactsBookFillProps) => (
  <Icon name="contacts-book-fill" {...props} />
);
