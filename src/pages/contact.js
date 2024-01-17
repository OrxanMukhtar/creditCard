import React, { useState, useEffect } from 'react'

function Contact() {
  const [cardNo, setCardNo] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cvv, setCvv] = useState('');
  
  const changeCardNo = (e) => {
    setCardNo(e.target.value)
  }
  const changeCardHolder = (e) => {
    setCardHolder(e.target.value)
  }

  const changeCvv = (e) => {
    setCvv(e.target.value)
  }

    // const cvvB = document.getElementById("cvv")
    // const bodyElement = document.querySelector(".body")
    // cvvB.addEventListener("click", () => {
    //   bodyElement.classList.add('body')
    // })

    useEffect(() => {
      const cvvB = document.getElementById("cvv");
      const bodyElement = document.querySelector(".body");
  
      if (cvvB) {
        cvvB.addEventListener("click", () => {
          bodyElement.classList.add('body');
        });
      }
  
      return () => {
        // Cleanup: Event listener kaldırılabilir
        if (cvvB) {
          cvvB.removeEventListener("click", () => {
            bodyElement.classList.add('body');
          });
        }
      }
    }, []); // useEffect sadece bir kez çağrılsın diye boş bağımlılık dizisi kullanıldı
  

  return (
    <div className='mt_100'>


      <div className='body'>
        

        <form>

          <div>

            <label>Card No</label>

            <input
              type='text'
              value={cardNo}
              placeholder='xxxx-xxxx-xxxx-xxxx'
            />

            </div>


            <div>

            <label>Card Holder</label>

            <input
            type='text'
            value={cardHolder}
            placeholder='Mr/Ms'
            />

          </div>

          {/* <div className='mb_30'>
            <label style={{letterSpacing: "5px"}}>cvv</label>
            <input
              type='text'
              value={cvv}
              placeholder='cvv'
            />
          </div> */}


        </form>

{/* back side  */}

        <div className='body backside'>

          <form className='cvvForm'>
              <label>cvv</label>
              <input type='text' value={cvv} />
          </form>
        </div>

{/* end back side  */}

      </div>



      <div className='body2 mt_100'>
        <form>
          <div>

            <label>Card No</label>
            <input
              type='text'
              onChange={changeCardNo}
            />

          
            

          </div>
          <div>

            <label>Card Holder</label>
            <input
              type='text'
              onChange={changeCardHolder}
            />
          </div>
          <div className='mb_30'>
            <label style={{letterSpacing:"3px"}}>CVV</label>
            <input
              type='text'
              onChange={changeCvv}
            />
            <button id='cvv'>
              cvv
            </button>
          </div>

        </form>
      </div>




    </div>
  )
}

export default Contact
