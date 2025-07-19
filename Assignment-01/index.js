var weather = prompt("Please select your preferred weather from the options below: Which weather do you like? \n1) Summer\n2) Spring\n3) Autumn\n4) Winter\n5) Rainy\n6) Thunderstorm")

if (weather === "Summer" || weather === "summer" || weather === "SUMMER") {
  document.writeln(
    `
       <section class="hero-slider-sec">
        <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel"
      data-bs-interval="2000">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="assets/sun-1.jpg" class="d-block w-100" alt="First slide">
                    <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
                        <div class="weather-card card-1">
                            <div class="weather-content">
                                <div class="weather-icon">Summer</div>
                                <div class="temperature">35°C</div>
                                <div class="location">Karachi</div>
                                <div class="time">Friday 12:38</div>
                                <div class="forecast">
                                    <div class="day"><span class="day-icon">☁️</span>Tue</div>
                                    <div class="day"><span class="day-icon">🌧️</span>Wed</div>
                                    <div class="day"><span class="day-icon">☁️</span>Thu</div>
                                    <div class="day"><span class="day-icon">☀️</span>Fri</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="assets/sunn-90.jpg" class="d-block w-100" alt="First slide">
                    <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
                        <div class="weather-card card-2">
                            <div class="weather-content">
                                <div class="weather-icon">Summer</div>
                                <div class="temperature">38°C</div>
                                <div class="location">Lahore</div>
                                <div class="time">Wednesday 10:00</div>
                                <div class="forecast">
                                    <div class="day"><span class="day-icon">☁️</span>Tue</div>
                                    <div class="day"><span class="day-icon">☀️</span>Wed</div>
                                    <div class="day"><span class="day-icon">☁️</span>Thu</div>
                                    <div class="day"><span class="day-icon">☁️</span>Fri</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="assets/sunnny.jpg" class="d-block w-100" alt="First slide">
                    <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
                        <div class="weather-card card-3">
                            <div class="weather-content">
                                <div class="weather-icon">Summer</div>
                                <div class="temperature">30°C</div>
                                <div class="location">Sibbi</div>
                                <div class="time">Tuesday 2:40</div>
                                <div class="forecast">
                                    <div class="day"><span class="day-icon">☀️</span>Tue</div>
                                    <div class="day"><span class="day-icon">🌧️</span>Wed</div>
                                    <div class="day"><span class="day-icon">☁️</span>Thu</div>
                                    <div class="day"><span class="day-icon">☁️</span>Fri</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section> 
        `
  )
} else if (weather === "Spring" || weather === "spring" || weather === "SPRING") {
  document.writeln(
    `
        <section class="hero-slider-sec">
    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel"
      data-bs-interval="2000">
      <div class="carousel-inner">
        <div class="carousel-item active">
           <img src="assets/giphy.gif" class="d-block w-100" alt="First slide">
          <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <div class="magic-card">
              <div class="magic-content">
                <div class="weather-icon">Spring</div>
                <div class="temperature">19°C</div>
                <div class="location">Skardu Valley</div>
                <div class="time">Tuesday 22:15</div>
                <div class="forecast">
                  <div class="day"><span class="day-icon">🌸</span>Tue</div>
                  <div class="day"><span class="day-icon">🌧️</span>Wed</div>
                  <div class="day"><span class="day-icon">☁️</span>Thu</div>
                  <div class="day"><span class="day-icon">🌷</span>Fri</div>
                </div>
              </div>
              <div class="spring-leaves left">🍃</div>
              <div class="spring-leaves right">🍃</div>
              <div class="butterfly left">🦋</div>
              <div class="butterfly right">🦋</div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="assets/spring-c.gif" class="d-block w-100" alt="First slide">
          <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <div class="magic-card">
              <div class="magic-content">
                <div class="weather-icon">Spring</div>
                <div class="temperature">19°C</div>
                <div class="location">Hunza Valley</div>
                <div class="time">Wednesday </div>
                <div class="forecast">
                  <div class="day"><span class="day-icon">🌸</span>Tue</div>
                  <div class="day"><span class="day-icon">🌸</span>Wed</div>
                  <div class="day"><span class="day-icon">☁️</span>Thu</div>
                  <div class="day"><span class="day-icon">🌷</span>Fri</div>
                </div>
              </div>
              <div class="spring-leaves left">🍃</div>
              <div class="spring-leaves right">🍃</div>
              <div class="butterfly left">🦋</div>
              <div class="butterfly right">🦋</div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="assets/giphy (1).gif" class="d-block w-100" alt="First slide">
          <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <div class="magic-card">
              <div class="magic-content">
                <div class="weather-icon">Spring</div>
                <div class="temperature">19°C</div>
                <div class="location">Gilgit</div>
                <div class="time">Friday 12:15</div>
                <div class="forecast">
                  <div class="day"><span class="day-icon">🌸</span>Tue</div>
                  <div class="day"><span class="day-icon">🌧️</span>Wed</div>
                  <div class="day"><span class="day-icon">☁️</span>Thu</div>
                  <div class="day"><span class="day-icon">🌷</span>Fri</div>
                </div>
              </div>
              <div class="spring-leaves left">🍃</div>
              <div class="spring-leaves right">🍃</div>
              <div class="butterfly left">🦋</div>
              <div class="butterfly right">🦋</div>
            </div>
          </div>
        </div>


      </div>


      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
        `
  )
} else if (weather === "Autumn" || weather === "autumn" || weather === "AUTUMN") {
  document.writeln(
    `
        <section class="hero-slider-sec">
    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel"
      data-bs-interval="2000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/autumn-2.gif" class="d-block w-100" alt="First slide">
          <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="assets/atumn-pic.jpg" alt="Avatar" style="width:500px;height:500px;">
                </div>
                <div class="flip-card-back">
                  <div class="weather-icon">Autumn</div>
                  <div class="temperature">14°C</div>
                  <div class="location">Khaplu</div>
                  <div class="time">Tuesday 12:15</div>
                  <div class="forecast">
                    <div class="day"><span class="day-icon">🍂</span>Tue</div>
                    <div class="day"><span class="day-icon">🌧️</span>Wed</div>
                    <div class="day"><span class="day-icon">☀️</span>Fri</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="assets/autumn-3.gif" class="d-block w-100" alt="First slide">
          <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="assets/autumn85.gif" alt="Avatar" style="width:500px;height:500px;">
                </div>
                <div class="flip-card-back">
                  <div class="weather-icon">Autumn</div>
                  <div class="temperature">24°C</div>
                  <div class="location">Hunza Valley</div>
                  <div class="time">Friday 22:15</div>
                  <div class="forecast">
                    <div class="day"><span class="day-icon">☀️</span>Tue</div>
                    <div class="day"><span class="day-icon">🌧️</span>Wed</div>
                    <div class="day"><span class="day-icon">🍂</span>Fri</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="carousel-item">
          <img src="assets/autumn48.gif" class="d-block w-100" alt="First slide">
          <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="assets/autumn90.gif" alt="Avatar" style="width:500px;height:500px;">
                </div>
                <div class="flip-card-back">
                  <div class="weather-icon">Autumn</div>
                  <div class="temperature">14°C</div>
                  <div class="location">Khaplu</div>
                  <div class="time">Tuesday 10:15</div>
                  <div class="forecast">
                    <div class="day"><span class="day-icon">🍂</span>Tue</div>
                    <div class="day"><span class="day-icon">🌧️</span>Wed</div>
                    <div class="day"><span class="day-icon">☀️</span>Fri</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  </section>
        `
  )
} else if (weather === "Winter" || weather === "winter" || weather === "WINTER") {
  document.writeln(
    `
        <section class="hero-slider-sec">
  <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/winter453.gif" class="d-block w-100" alt="First slide">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
          <div class="winter-card" style="background-image: url('assets/wint56.jpg');">
            <div class="snow-globe">
              <h1>WINTER</h1>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
            </div>
            <div class="weather-info">
              <div class="weather-item"><i class="fas fa-cloud-rain"></i> Sunday<br>-8°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item"><i class="fas fa-cloud"></i> Tuesday<br>-8°C<br><span class="time">6:36 AM</span></div>
              <div class="weather-item"><i class="fas fa-snowflake"></i> Thursday<br>-2°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item"><i class="fas fa-snowflake"></i> Wednesday<br>-5°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item"><i class="fas fa-cloud-meatball"></i> Friday<br>-2°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item"><i class="fas fa-sun"></i> Saturday<br>0°C<br><span class="time">6:45 AM</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <img src="assets/winter89.gif" class="d-block w-100" alt="Second slide">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
          <div class="winter-card" style="background-image: url('assets/winn.jpeg');">
            <div class="snow-globe">
              <h1>WINTER</h1>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
            </div>
            <div class="weather-info">
              <div class="weather-item"><i class="fas fa-cloud-rain"></i> Sunday<br>-7°C<br><span class="time">7:00 AM</span></div>
              <div class="weather-item"><i class="fas fa-cloud"></i> Tuesday<br>-6°C<br><span class="time">7:10 AM</span></div>
              <div class="weather-item"><i class="fas fa-snowflake"></i> Thursday<br>-1°C<br><span class="time">7:15 AM</span></div>
              <div class="weather-item"><i class="fas fa-snowflake"></i> Wednesday<br>-4°C<br><span class="time">7:20 AM</span></div>
              <div class="weather-item"><i class="fas fa-cloud-meatball"></i> Friday<br>-3°C<br><span class="time">7:25 AM</span></div>
              <div class="weather-item"><i class="fas fa-sun"></i> Saturday<br>1°C<br><span class="time">7:30 AM</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <img src="assets/winter.jpg" class="d-block w-100" alt="Third slide">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
          <div class="winter-card" style="background-image: url('assets/win4.jpg');">
            <div class="snow-globe">
              <h1>WINTER</h1>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
              <div class="snowflake"></div>
            </div>
            <div class="weather-info">
              <div class="weather-item">Sunday<br>-9°C<br><span class="time">6:50 AM</span></div>
              <div class="weather-item">Tuesday<br>-7°C<br><span class="time">6:40 AM</span></div>
              <div class="weather-item">Thursday<br>-3°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Wednesday<br>-6°C<br><span class="time">6:55 AM</span></div>
              <div class="weather-item">Friday<br>-4°C<br><span class="time">7:00 AM</span></div>
              <div class="weather-item">Saturday<br>0°C<br><span class="time">7:05 AM</span></div>
            </div>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</section>
        `
  )
} else if (weather === "Rainy" || weather === "rainy" || weather === "RAINY") {
  document.writeln(
    `
          <section class="hero-slider-sec">
  <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/rain.gif" class="d-block w-100" alt="First slide">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
          <div class="winter-card" style="background-image: url('assets/rain56.jpg');">
            <div class="snow-globe">
              <h1>Rainy</h1>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
            </div>
            <div class="weather-info">
              <div class="weather-item">Sunday<br>28°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Tuesday<br>20°C<br><span class="time">6:36 AM</span></div>
              <div class="weather-item">Thursday<br>30°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Wednesday<br>34°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Friday<br>35°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Saturday<br>36°C<br><span class="time">6:45 AM</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <img src="assets/rainy.gif" class="d-block w-100" alt="Second slide">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
          <div class="winter-card" style="background-image: url('assets/rain1.jpg');">
            <div class="snow-globe">
              <h1>Rainy</h1>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
            </div>
            <div class="weather-info">
              <div class="weather-item">Sunday<br>28°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Tuesday<br>28°C<br><span class="time">6:36 AM</span></div>
              <div class="weather-item">Thursday<br>22°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Wednesday<br>25°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Friday<br>22°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Saturday<br>20°C<br><span class="time">6:45 AM</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <img src="assets/rain34.jpeg" class="d-block w-100" alt="Third slide">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
          <div class="winter-card" style="background-image: url('assets/rainn.gif');">
            <div class="snow-globe">
              <h1>Rainy</h1>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
              <div class="rain-drop"></div>
            </div>
            <div class="weather-info">
              <div class="weather-item">Sunday<br>26°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Tuesday<br>28°C<br><span class="time">6:36 AM</span></div>
              <div class="weather-item">Thursday<br>20°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Wednesday<br>30°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Friday<br>32°C<br><span class="time">6:45 AM</span></div>
              <div class="weather-item">Saturday<br>30°C<br><span class="time">6:45 AM</span></div>
            </div>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</section>
        `
  )
} else if (weather === "Thunderstorm" || weather === "thunderstorm" || weather === "THUNDERSTORM") {
  document.writeln(
    `
        <section class="hero-slider-sec">
    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel"
      data-bs-interval="2000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/thunderdev.gif" class="d-block w-100" alt="First slide">
          <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <div class="thunderstorm-card">
              <div class="card-content">
                <h1>Thunderstorm</h1>
                <div class="weather-info">
                  <div class="weather-item">Sunday: 15°C <span>12:10 AM</span></div>
                  <div class="weather-item">Monday: 13°C <span>12:15 AM</span></div>
                  <div class="weather-item">Tuesday: 14°C <span>12:20 AM</span></div>
                  <div class="weather-item">Wednesday: 12°C <span>12:25
                      AM</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
        <img src="assets/thnder45.gif" class="d-block w-100" alt="Second slide">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
          <div class="thunderstorm-card" style="background-image: url(assets/thnedr63.gif);">
              <div class="card-content">
                <h1>Thunderstorm</h1>
                <div class="weather-info">
                  <div class="weather-item">Sunday: 15°C <span>12:10 AM</span></div>
                  <div class="weather-item">Monday: 13°C <span>12:15 AM</span></div>
                  <div class="weather-item">Tuesday: 14°C <span>12:20 AM</span></div>
                  <div class="weather-item">Wednesday: 12°C <span>12:25
                      AM</span></div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="carousel-item">
        <img src="assets/df.gif" class="d-block w-100" alt="Third slide">
        <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
          <div class="thunderstorm-card" style="background-image: url(assets/storm-coming.gif);">
              <div class="card-content">
                <h1>Thunderstorm</h1>
                <div class="weather-info">
                  <div class="weather-item">Sunday: 15°C <span>12:10 AM</span></div>
                  <div class="weather-item">Monday: 13°C <span>12:15 AM</span></div>
                  <div class="weather-item">Tuesday: 14°C <span>12:20 AM</span></div>
                  <div class="weather-item">Wednesday: 12°C <span>12:25
                      AM</span></div>
                </div>
              </div>
            </div>
        </div>
      </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  </section>
      `
  )
} else {
  document.writeln(
    `
    <div class="error-div">
      <div class="error">
        <img src="assets/404.gif" alt="">
        <h1>Oops! Pick a weather option from the alert to continue!</h1>
      </div>
    </div>
        `
  )
}