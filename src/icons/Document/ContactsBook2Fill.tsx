import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContactsBook2FillProps = Omit<IconProps, "name">;

export const ContactsBook2Fill = (props: ContactsBook2FillProps) => (
  <Icon name="contacts-book-2-fill" {...props} />
);
