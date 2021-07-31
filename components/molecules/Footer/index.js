import { Container } from "react-bootstrap"


const FooterComp = ({...rest}) => {
  return (
    <>
      <div {...rest}>
        <Container className="py-3 text-center">
          <p>Made with ❤ in bedroom</p>
        </Container>
      </div>
    </>
  )
}

export default FooterComp
