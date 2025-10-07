import { Backdrop } from "./backdrop";
import { Body } from "./body";
import { Center } from "./center";
import { Header } from "./header";
import { Title } from "./title";
import { Main } from "./main";
import { Footer } from "./footer";
import { Close } from "./close";
import { Dialog as DialogComponent } from "./dialog";

export const Dialog = Object.assign(DialogComponent, {
  Backdrop,
  Body,
  Center,
  Header,
  Title,
  Main,
  Footer,
  Close,
});
