import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';
import css from '@styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'

const contact = () => {
  
    function sendEmail(e) {
        e.preventDefault();
        setSending(true)
        emailjs.sendForm('service_xwnzj2d', 'template_lublx99', e.target, 'user_aCxiPvcplKqZgIF5zn1rt')
          .then((result) => {
            setSending(false)
            setSuccsess(true)
            setTimeout(() => {
              setSuccsess(false)
            }, 1500);
            console.log('result.text');
          }, (error) => {
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 1500);
              console.log(error.text);
          });
    }

    const handleChange=(e)=>{
      console.log(e.target.name)
      switch (e.target.name) {
        case 'name':
          if (e.target.value != '') {
            setstyle1(css.label_active)
          } else {
            setstyle1('')
          }
          break;
        case 'email':
          if (e.target.value != '') {
            setstyle2(css.label_active)
          } else {
            setstyle2('')
          }
          break;
        default:
          break;
      }
    }

    const [style1, setstyle1] = useState('')

    const [style2, setstyle2] = useState('')

    const [Sending, setSending] = useState(false)

    const [Error, setError] = useState(false)

    const [Succsess, setSuccsess] = useState(false)
    
      return (
        <div className={css.Contact}>
          <Head>
            <title>Contact</title>
          </Head>
          <div>
            <h2>Contact me</h2>
            <p>You can contact me here or by my email that is in CV</p>
          </div>
          <div className={css.login_box}>
            <form onSubmit={sendEmail}>
              <div className={css.input_group}>
                <label className={style1}>Your Name</label>
                <input onChange={handleChange} type="text" name="name" required/>
              </div>
              <div className={css.input_group}>
                <label className={style2}>Your Email</label>
                <input  onChange={handleChange}type="email" name="email" required/>
              </div>
              <div className={css.text}>
                <label>Message</label>
                <textarea  name="message" required/>
              </div>
              <button type='submit'>
                <span>SEND <FontAwesomeIcon icon={['far', 'paper-plane']} size='1x' /></span>
              </button>
            </form>
          </div>
          <div className={css.Email_label}>
            {Sending?
              <div className={css.State}>
                <div className={css.lds_ring}><div></div><div></div><div></div><div></div></div>
                <span>Sending</span>
              </div>
              :null
            }
            {Succsess?
              <div className={css.Succsess}>
                <FontAwesomeIcon icon={['far', 'smile-wink']} size='2x' />
                <span>Email sent</span>
              </div>
              :null
            }
            {Error?
              <div className={css.Error}>
                <FontAwesomeIcon icon={['far', 'frown']} size='2x' />
                <span>Something has failed</span>
              </div>
              :null
            }
          </div>
        </div>
      );
}

export default contact
