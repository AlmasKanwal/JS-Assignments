var magicMathTasks = prompt("Choose your Math Magic activity: \n1) Forward Counting  \n2) Backward Counting \n3 Multiplication Table \n4) Even Numbers \n5) Odd Numbers").toLowerCase();

var start, end;

document.writeln(`<div class="math-card">`);

    if (magicMathTasks === "1" || magicMathTasks === "forward counting") {
        start = +prompt("Enter start number (e.g., 1): ");
        end = +prompt("Enter end number (e.g., 20): ");
        if(isNaN(start) || isNaN(end) || start > end){
            document.writeln(`
                <div class="card-header">
                    <span class="card-icon">🔢</span>
                    <h3 class="card-title">Forward Counting</h3>
                    <p class="card-description">Learn to count numbers step by step</p>
                </div>
           `);
           document.writeln(`
                <div class="exercise-area">
                    <h4>🎯 Forward Counting Exercise</h4>
                    <p>Invalid range entered!</p>
                </div>
           `);
        } else{
            document.writeln(`
                <div class="card-header">
                    <span class="card-icon">🔢</span>
                    <h3 class="card-title">Forward Counting</h3>
                    <p class="card-description">Learn to count numbers step by step</p>
                </div>
            `);
            document.writeln(`
                <div class="exercise-area">
                    <h4>🎯 Forward Counting Exercise</h4>
                    <p>Counting from ${start} to ${end}</p>
            `);
            document.writeln(`
                <div class="number-display">
            `);
            var result = "Forward Counting: "
            for(var i=start; i <= end; i++){
                result += i;
                if(i < end){
                    result += " → "
                }
            }
            document.writeln(result);       
            document.writeln(`</div></div>`);
        }            
    } 
    
    else if(magicMathTasks === "2" || magicMathTasks === "backward counting"){
        start = +prompt("Enter Start Number (e.g., 20): ");
        end = +prompt("Enter End Number (e.g., 1): ");
        if(isNaN(start) || isNaN(end) || start < end){
            document.writeln(`
                <div class="card-header">
                    <span class="card-icon">🔁</span>
                    <h3 class="card-title">Backward Counting</h3>
                    <p class="card-description">Count backwards like a rocket launch!</p>
                </div>
           `);
           document.writeln(`
                <div class="exercise-area">
                    <h4>🎯 Backward Counting Exercise</h4>
                    <p>Invalid range entered!</p>
                </div>
           `);
        } else{
            document.writeln(`
                <div class="card-header">
                    <span class="card-icon">🔁</span>
                    <h3 class="card-title">Backward Counting</h3>
                    <p class="card-description">Count backwards like a rocket launch!</p>
                </div>
            `);
            document.writeln(`
                <div class="exercise-area">
                    <h4>🎯 Backward Counting Exercise</h4>
                    <p>Counting from ${start} to ${end}</p>
            `);
            document.writeln(`
                <div class="number-display">
            `);
            var result = "Backward Counting: "
            for(var i=start; i >= end; i--){
                result += i;
                if(i > end){
                    result += " → "
                }
            }
            document.writeln(result);       
            document.writeln(`</div></div>`);
        }
    } 

    else if(magicMathTasks === "3" || magicMathTasks === "multiplication table"){
        var table = +prompt("Enter a number (1-10) for the multiplication table: ");
        start = +prompt("Enter Start Number (e.g., 1): ");
        end = +prompt("Enter End Number (e.g., 10): ");
        if(isNaN(table) || table < 1){
            document.writeln(`
                <div class="card-header">
                    <span class="card-icon">✖️</span>
                    <h3 class="card-title">Multiplication Table</h3>
                    <p class="card-description">Learn multiplication tables from 1 to your choice</p>
                </div>
           `);
           document.writeln(`
                <div class="exercise-area">
                    <h4>📊 Multiplication Table</h4>
                    <p>Invalid range entered!</p>
                </div>
           `);
        } else{
            document.writeln(`
                <div class="card-header">
                    <span class="card-icon">✖️</span>
                    <h3 class="card-title">Multiplication Table</h3>
                    <p class="card-description">Learn multiplication tables from 1 to your choice</p>
                </div>
            `);
            document.writeln(`
                <div class="exercise-area">
                    <h4>📊 Multiplication Table</h4>
                    <p>Multiplication Table of ${table}</p>
            `);
            document.writeln(`
                <div class="result-display">
            `);
            for (var i=start; i <= end; i++){
                document.writeln(`
                    <div style="margin: 5px 0;">
                        ${table} x ${i} = ${table * i}<br>
                    </div>
                `);
            }     
            document.writeln(`</div></div>`);
        }
    }

    else if(magicMathTasks === "4" || magicMathTasks === "even numbers"){
        start = +prompt("Enter Start Number (e.g., 2): ");
        end = +prompt("Enter End Number (e.g., 16): ");
        if(isNaN(start) || isNaN(end) || start > end){
            document.writeln(`
                <div class="card-header">
                    <span class="card-icon">🟢</span>
                    <h3 class="card-title">Even Numbers</h3>
                    <p class="card-description">Find fun patterns in even numbers!</p>
                </div>
           `);
           document.writeln(`
                <div class="exercise-area">
                    <h4>🌈 Even Numbers</h4>
                    <p>Invalid range entered!</p>
                </div>
           `);
        } else{
            document.writeln(`
                <div class="card-header">
                    <span class="card-icon">🟢</span>
                    <h3 class="card-title">Even Numbers</h3>
                    <p class="card-description">Find fun patterns in even numbers!</p>
                </div>
            `);
            document.writeln(`
                <div class="exercise-area">
                    <h4>🌈 Even Numbers</h4>
                    <p>Even Numbers from ${start} to ${end}</p>
            `);
            document.writeln(`
                <div class="result-display">
            `);
            var result = ""
            var evenNumber = []
            for (var i = start; i <= end; i++) {
                if (i % 2 === 0) {
                    evenNumber.push(i);
                }
            }

            if (evenNumber.length !== 0) {
                result += evenNumber.join(" → ");
            }
            document.writeln(result);    
            document.writeln(`<p style="margin-top: 10px;">Even Numbers can be divided by 2!</p>`);
            document.writeln(`</div></div>`);
        }
    } 

    else if(magicMathTasks === "5" || magicMathTasks === "odd numbers"){
        start = +prompt("Enter Start Number (e.g., 2): ");
        end = +prompt("Enter End Number (e.g., 16): ");
        if(isNaN(start) || isNaN(end) || start > end){
            document.writeln(`
                <div class="card-header">
                    <span class="card-icon">🔵</span>
                    <h3 class="card-title">Odd Numbers</h3>
                    <p class="card-description">Find fun patterns in odd numbers!</p>
                </div>
           `);
           document.writeln(`
                <div class="exercise-area">
                    <h4>🌈 Odd Numbers</h4>
                    <p>Invalid range entered!</p>
                </div>
           `);
        } else{
            document.writeln(`
                <div class="card-header">
                    <span class="card-icon">🔵</span>
                    <h3 class="card-title">Odd Numbers</h3>
                    <p class="card-description">Find fun patterns in odd numbers!</p>
                </div>
            `);
            document.writeln(`
                <div class="exercise-area">
                    <h4>🌈 Odd Numbers</h4>
                    <p>Odd Numbers from ${start} to ${end}</p>
            `);
            document.writeln(`
                <div class="result-display">
            `);
            var result = ""
            var oddNumber = []
            for (var i = start; i <= end; i++) {
                if (i % 2 !== 0) {
                    oddNumber.push(i);
                }
            }

            if (oddNumber.length !== 0) {
                result += oddNumber.join(" → ");
            }
            document.writeln(result);    
            document.writeln(`<p style="margin-top: 10px;">Odd numbers cannot be divided by 2!</p>`);
            document.writeln(`</div></div>`);
        }
    }

    else{
        document.writeln(`
            <div class="card-header"><h3 class="card-title">Error</h3></div>
        `);
        document.writeln(`
            <div class="exercise-area">
                <p>Invalid choice! Please type one of these: forward counting (1), backward counting (2), multiplication table (3), even numbers (4), odd numbers (5).</p>
            </div>
        `);
    }

document.writeln(`</div>`);