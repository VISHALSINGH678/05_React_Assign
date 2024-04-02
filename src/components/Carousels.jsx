import './Carousels.css'

export default function Carousels() {
  return (
      <div className='Caro1'>
        <img
          className="Caro3"
          src="2.jpg"
          alt="First slide"
        />
        <div className='Caro2'>
          <p className='CaroP1'>--WELCOME TO JYTHU</p>
          <h1 className='Caroh1-1'>A Marketing <br />
          Agency To Grow <br />
          Your Business</h1>
          <br />
          <p className='CaroP2'>We are 100+ professional software engineers with more than 10 years of <br />experience in delivering superior products Believe it because you have <br />seen it. Here are real numbers</p>
          <button className='CaroBtn'>GET STARTED</button>
          <button className='CaroBtn2'>WATCH VIDEO</button>
        </div>
        <img className='Caro4' src="4.jpg" alt="img" />
      </div>
  );
}