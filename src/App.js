import React, { useState } from "react";
import './App.css';
import AdminModal from "./components/AdminModal";
function App() {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <div className="App">
      <section>
        <div>

        </div>
        <div className='contentBx'>
          <h2>Coming Soon</h2>
          <p>We've got something big to launch and we can't wait for you to see.</p>
          <button className="bn3" onClick={() => { openModal() }} >Contact us</button>
        </div>
      </section>
      {
        showModal && 
        <AdminModal closeModal={() => { closeModal() }} />
      }
    

    </div>
  );
}

export default App;
