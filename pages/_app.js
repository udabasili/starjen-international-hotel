import '../styles/scss/main.scss'
import Navigation from '../components/navigation.component'
import Footer from '../components/footer.component'
import { useEffect } from 'react';
import Modal from '../components/modal.component'

export default function App({ Component, pageProps }) {

   useEffect(() => {
      const modal = document.querySelector(".modal");
      const trigger = document.querySelector(".trigger");
      const closeButton = document.querySelector(".close-button");
        function toggleModal() {
          modal.classList.toggle("show");
        }

        function windowOnClick(event) {
          if (event.target === modal) {
            toggleModal();
          }
        }
        if (trigger && closeButton) {
           trigger.addEventListener("click", toggleModal);
           closeButton.addEventListener("click", toggleModal);
           window.addEventListener("click", windowOnClick);
        }
       
     
   }, [])

  return (
    <div className="container">
      <Navigation/>
      <Modal/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
