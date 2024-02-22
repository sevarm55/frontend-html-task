import React from "react"
import classnames from "classnames"
import { motion } from "framer-motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../assets/logo.png"

import "./sidebar.scss"

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
]

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
]

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: true,
    }
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }))
  }

  goToRoute = (path) => {
    console.log(`going to "${path}"`)
  }

  render() {
    const { isOpened } = this.state
    const containerClassnames = classnames("sidebar", {
      opened: isOpened,
      closed: !isOpened,
    })

    return (
      <div className={containerClassnames}>
        <div className="sideBarContent">
          <div className="sidebarTop">
            <div className="header_menu">
              <motion.div className="logoBox"
              initial={{y: -50}}
              animate={{y:0}}
              transition={{duration: 0.4,}}
              >
                <img src={logo} alt="TensorFlow logo" />
                <span>TensorFlow</span>
              </motion.div>
              <motion.button
                onClick={this.toggleSidebar}
                initial={{ x: 90, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.3 }}
              >
                <FontAwesomeIcon
                  icon={isOpened ? "angle-left" : "angle-right"}
                />
              </motion.button>
            </div>

            <div className="routes_menu">
              {routes.map((route, index) => (
                <motion.div
                  className="routesItem"
                  key={route.title}
                  onClick={() => this.goToRoute(route.path)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                >
                  <FontAwesomeIcon icon={route.icon} />
                  <span>{route.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="sidebarBottom">
            <div className="bottomRoutesMenu">
              {bottomRoutes.map((route, index) => (
                <motion.div
                  className="bottomRoutesItem"
                  key={route.title}
                  onClick={() => this.goToRoute(route.path)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <FontAwesomeIcon icon={route.icon} />
                  <span>{route.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
