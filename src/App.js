import logo from './logo.svg';


function App() {
  return (
    <div>
      
      {/* Top head navigation bar with the KSEA logo */}
      <div class="wrap">
        <nav class="navbar">
          <div class="logo">
            <a href="#"><img src="https://www.ksea.org/assets/images/logo.png" alt="KSEA LOGO"/></a> {/* Clicking the KSEA logo directs to the 'home' page */}
          </div>

          {/* Navigation menu bar categories */}
          <div class="wrap-menu">
            <ul class="nav-list">
              <li>
                <a href="#seed">SEED</a> {/* Clicking 'seed' in menu bar automatically directs the user to where SEED event is located */}
              </li>
              <li>
                <a href="#ukc">UKC</a> {/* Clicking 'ukc' in menu bar automatically directs the user to where UKC event is located */}
              </li>
              <li>
                <a href="#nmcs">NMCS</a> {/* Clicking 'nmcs' in menu bar automatically directs the user to where NMCS event is located */}
              </li>
              <li>
                <a href="#katalyst">Katalyst</a> {/* Clicking 'katalyst' in menu bar automatically directs the user to where Katalyst event is located */}
              </li>
              <li>
                <a href="#impacts">IMPACTs</a> {/* Clicking 'impacts' in menu bar automatically directs the user to where IMPACTs event is located */}
              </li>
              <li>
                <a href="#step-up">STEP-UP</a> {/* Clicking 'step-up' in menu bar automatically directs the user to where STEP-UP event is located */}
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Body class for the events section */}
      <div class="body">
        <section class="SEED" id="seed">
          <h1>
            <a href="https://seed.ksea.org">SEED</a> {/* clicking "SEED" navigate to the Ksea seed webiste */}
          </h1>
          <img src="https://ksea-files.s3.us-west-2.amazonaws.com/files/SEED2024Poster.jpg" alt="SEED LOGO"/>
          <p class="introduction">
             SEED stands for Scientists and Engineers Early Career Development Workshop and is offered by KSEA and KOFST to provide mentorship to, 
             and help develop the careers of, junior Korean-American scientists and engineers ranging from postdoctoral researchers to early career professionals.
          </p>
        </section>

        <section class="UKC" id="ukc">
          <h1>
            <a href="https://ukc.ksea.org/">UKC</a> {/* clicking "UKC" navigate to the Ksea ukc webiste */}
          </h1>
          <img src="https://ksea-ukc.s3.amazonaws.com/UKC2024-poster.jpg" alt="UKC LOGO"/>
          <p class="introduction">
            UKC 2024 will offer compelling opportunities for participants to actively engage with industry experts and academic scholars, each bringing unique 
            perspectives on AI, and to create synergistic collaborations. 
          </p>
        </section>

        <section class="NMCS" id="nmcs">
          <h1>
            <a href="https://nmsc.ksea.org/">NMCS</a> {/* clicking "NMCS" navigate to the Ksea seed nmcs webiste */}
          </h1>
          <img src="https://ksea-files.s3.us-west-2.amazonaws.com/files/NMSC2024-poster.jpg" alt="NMCS LOGO"/>
          <p class="introduction">
            Mathematics and Science are very important in our rapidly changing technological and scientific age. Proficiency in math and science is the gateway to various careers. 
            The Korean-American Scientists & Engineers Association offers the National Mathematics & Science Competition to challenge and inspire students. The KSEA NMSC is also dedicated to elevating the mathematical abilities, talents, and scientific innovation of all students. The KSEA NMSC is committed to fostering the mathematical and scientific capabilities of all students.
          </p>
        </section>

        <section class="Katalyst" id="katalyst">
          <h1>
            <a href="https://katalyst.ksea.org/">Katalyst</a> {/* clicking "Katalyst" navigate to the Ksea katalyst webiste */}
          </h1>
          <img src="https://ksea-files.s3.us-west-2.amazonaws.com/files/Katalyst2024-poster.png"/>
          <p class="introduction">
            Katalyst 2024 aims to empower and equip undergraduate students with the knowledge, skills, and mindset needed to embark on a fulfilling journey towards leadership
            and personal growth. This dynamic event focuses on illuminating the diverse pathways to success, fostering leadership potential, and cultivating a supportive network
            that will serve as a guiding force throughout their endeavors. Through thought-provoking workshops, inspirational talks, and interactive sessions, participants will
            gain valuable insights, build essential leadership competencies, and forge connections that propel them towards becoming influential leaders in their chosen fields.
          </p>
        </section>

        <section class="IMPACTs" id="impacts">
          <h1>
            <a href="https://impacts.ksea.org/">IMPACTs</a> {/* clicking "IMPACTs" navigate to the Ksea IMPACTs webiste */}
          </h1>
          <img src="https://ksea-files.s3.us-west-2.amazonaws.com/files/IMPACTs2024-poster.png"/>
          <p class="introduction">
            IMPACTs strives to create a peer-to-peer support system within industries, provide practical tools and insights on navigating the corporate world, and expose students to careers outside of academia.
          </p>
        </section>

        <section class="STEP-UP" id="step-up">
          <h1>
            <a href="https://stepup.ksea.org/">STEP-UP</a> {/* clicking "STEP-UP" navigate to the Ksea stepup webiste */}
          </h1>
          <img src="https://ksea-files.s3.us-west-2.amazonaws.com/files/STEP+UP+2023+(1).png"/>
          <p class="introduction">
            The Korean-American Scientists and Engineers Association (KSEA) hosted the 4th Science and Technology Entrepreneurship Partners' Upscale Program (STEP-UP).
            The event aimed to promote and enrich the entrepreneurship of KSEA members, with a focus on discussing successful innovative companies in arts, entertainment, and technology.
            More than 130 participants from various sectors of the startup ecosystem attended the program, engaging in networking, invited speaker sessions, startup elevator pitches,
            and regular pitches to foster collaboration and knowledge sharing among passionate entrepreneurs.
          </p>
        </section>
      </div>

    </div>
  );
}

export default App;
