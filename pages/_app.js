import '../styles/scss/main.scss'
import Navigation from '../components/navigation.component'
import Footer from '../components/footer.component'
import { useEffect } from 'react';
import Modal from '../components/modal.component'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {

  const route = useRouter()
   useEffect(() => {
      const modal = document.querySelector(".modal");
      const triggers = document.querySelectorAll(".trigger");
      const closeButton = document.querySelector(".close-button");
        function toggleModal() {
          if (modal.classList.contains('show')){
              modal.classList.remove("show");
          } else {
            modal.classList.add("show");

          }
        }

        function windowOnClick(event) {
          if (event.target === modal) {
            toggleModal();
          }
        }
        if (triggers && closeButton) {
          triggers.forEach(function(trigger) {
            trigger.addEventListener("click", toggleModal);
          })
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
