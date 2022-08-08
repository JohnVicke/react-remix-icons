import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContactsBook2LineProps = Omit<IconProps, "name">;

export const ContactsBook2Line = (props: ContactsBook2LineProps) => (
  <Icon name="contacts-book-2-line" {...props} />
);
