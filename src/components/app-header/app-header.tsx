
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import LogoutViem from "./_ui/logout";

export function AppHeader() {
    return <Layout
        logo={<Logo />}
        logout={<LogoutViem />}
    />
}