import { menuOptionsType } from "../../interfaces/menuoptions";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";

export function Layout({
    menuOptions,
    children,
}: {
    menuOptions: menuOptionsType;
    children: JSX.Element;
}) {
    return (
        <>
            <Header>
                <Menu menuOptions={menuOptions}></Menu>
            </Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}