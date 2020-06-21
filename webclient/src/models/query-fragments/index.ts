import { selectFromUser } from "..";

export const USER_FRAGMENT = selectFromUser()
  .username.id.emails((e) => e.address)
  .toString();
