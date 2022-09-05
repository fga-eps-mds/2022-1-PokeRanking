import homeIcon from "../../Assets/home.png"
import rankingIcon from "../../Assets/ranking.png"
import compararIcon from "../../Assets/comparacao.png"

import comoUsarIcon from "../../Assets/como-usar.png"
import closeIcon from "../../Assets/close.png"

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: homeIcon,
    Cname: "nav-text"
  },

  {
    title: "Ranking",
    path: "/ranking",
    icon: rankingIcon,
    Cname: "nav-text"
  },

  {
    title: "Comparar",
    path: "/comparar",
    icon: compararIcon,
    Cname: "nav-text"
  }
]

export const SidebarDataBottom = [
  {
    title: "Como usar",
    path: "/como-usar",
    icon: comoUsarIcon,
    Cname: "nav-text"
  },

  {
    title: "Fechar Menu",
    path: "#",
    icon: closeIcon,
    Cname: "nav-text"
  }
]