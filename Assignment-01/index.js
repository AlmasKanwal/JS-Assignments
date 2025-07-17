var weather = prompt("Please select your preferred weather from the options below: Which weather do you like? \nSummer\nSpring\nAutumn\nWinter\nRainy\nCloudy")

if (weather === "Summer" || weather === "summer" || weather === "SUMMER"){
    document.writeln(
        `
       <section class="hero-slider-sec">
        <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">
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

                <div class="carousel-item active">
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
} else if(weather === "Spring" || weather === "spring" || weather === "SPRING"){
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

        <div class="carousel-item active">
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

        <div class="carousel-item active">
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
} else if(weather === "Autumn" || weather === "autumn" || weather === "AUTUMN"){
    document.writeln(
        `
        
        `
    )
} else if(weather === "Winter" || weather === "winter" || weather === "WINTER"){
    document.writeln(
        `
        
        `
    )
} else if(weather === "Rainy" || weather === "rainy" || weather === "RAINY"){
    document.writeln(
        `
        
        `
    )
} else if(weather === "Cloudy" || weather === "cloudy" || weather === "CLOUDY"){
    document.writeln(
        `
        
        `
    )
} else{
    document.writeln(
        `
        
        `
    )
}