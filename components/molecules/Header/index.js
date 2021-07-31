import Link from 'next/link'
import { useRouter } from "next/dist/client/router"
import { Navbar,Nav,Container } from "react-bootstrap"

import styles from "../../../styles/HeaderComp.module.css"

const HeaderComp = () => {
  const router = useRouter()
  return (
    <>
      <Navbar className={styles.header}  variant="dark">
        <Container>
          <h4 style={{ fontWeight: "700",cursor:'pointer' }} onClick={()=>router.push('/')}>pedal</h4>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end">
            <Nav className="me-end text-center">
              <Link href="/tentang"><a className="nav-link">Tentang</a></Link>
              {/* <Link href="/kontak"><a className="nav-link">Kontak</a></Link>
              <Link href="/credit"><a className="nav-link">Credit</a></Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderComp
