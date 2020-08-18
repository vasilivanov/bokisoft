export class Customer {

  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public sendCatalog: boolean;
  public notification: NotificationType;

}

export enum NotificationType {
  text = "text",
  email = "email",
  none = "none"
}
