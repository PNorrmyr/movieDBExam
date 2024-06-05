import NavComponent from "../components/NavComponent"
import SignUpComponent from "../components/SignUpComponent"
import './styles/SignUpPage.css'

function SignUpPage() {
  return (
   <section className="sign-up-page-wrapper">
    <NavComponent tempClass="hide-page"/>
    <SignUpComponent />
   </section>
  )
}

export default SignUpPage
