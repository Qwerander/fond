import { Menu } from "../../header/nav/menu/Menu"
import { FooterNavStl } from "./footerNav.styled"

export const FooterNav = () => {
  return (
    <FooterNavStl>
        <Menu column={true} gap={'12px'} align={'flex-end'}/>
    </FooterNavStl>
  )
}


