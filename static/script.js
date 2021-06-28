// QUESTIONS

const questions = [
    {
        "question": "I am the life of the party.",
        "answer1": "Agree",
        "answer1Total": "5",
        "answer2": "Neutral",
        "answer2Total": "3",
        "answer3": "Disagree",
        "answer3Total": "1"
      },

      {
        "question": "I don't talk a lot",
        "answer1": "Agree",
        "answer1Total": "5",
        "answer2": "Neutral",
        "answer2Total": "3",
        "answer3": "Disagree",
        "answer3Total": "1"
      },
      {
        "question": "I feel comfortable around people.",
        "answer1": "Agree",
        "answer1Total": "5",
        "answer2": "Neutral",
        "answer2Total": "3",
        "answer3": "Disagree",
        "answer3Total": "1"
      },
      {
        "question": "I keep in the background",
        "answer1": "Agree",
        "answer1Total": "5",
        "answer2": "Neutral",
        "answer2Total": "3",
        "answer3": "Disagree",
        "answer3Total": "1"
      },
      {
        "question": "I start conversations",
        "answer1": "Agree",
        "answer1Total": "5",
        "answer2": "Neutral",
        "answer2Total": "3",
        "answer3": "Disagree",
        "answer3Total": "1"
      },
      {
        "question": "I have little to say",
        "answer1": "Agree",
        "answer1Total": "5",
        "answer2": "Neutral",
        "answer2Total": "3",
        "answer3": "Disagree",
        "answer3Total": "1"
      },
      
      // {
      //   "question": "I talk to a lot of different people at parties",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I don't like to draw attention to myself",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I don't mind being the center of attention",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am quiet around strangers",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I get stressed out easily",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am relaxed most of the time",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I worry about things",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I seldom feel blue.",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am easily disturbed",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I get upset easily",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I change my mood a lot",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I have frequent mood swings",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I get irritated easily",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I often feel blue",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I feel little concern for others",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am interested in people",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I insult people",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I sympathize with others' feelings",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am not interested in other people's problems",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I have a soft heart",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am not really interested in others",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I take time out for others",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I feel others' emotions",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I make people feel at ease",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am always prepared.",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I leave my belongings around.",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I pay attention to details",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I make a mess of things",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I get chores done right away",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I often forget to put things back in their proper place",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I like order",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I shirk my duties",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I follow a schedule.",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am exacting in my work.",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I have a rich vocabulary",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I have difficulty understanding abstract ideas",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I have a vivid imagination",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am not interested in abstract ideas",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I have excellent ideas",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I do not have a good imagination",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am quick to understand things",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I use difficult words",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I spend time reflecting on things",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },
      // {
      //   "question": "I am full of ideas",
      //   "answer1": "Agree",
      //   "answer1Total": "5",
      //   "answer2": "Neutral",
      //   "answer2Total": "3",
      //   "answer3": "Disagree",
      //   "answer3Total": "1"
      // },

      

  ]
  
  
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;
  let personalityData = new Object()
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  
  //Function to generate question 
  function generateQuestions (index) {
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      //Populate html elements 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }

      //Get current question and answer
      const selectedInput = selectedOption.nextElementSibling.innerHTML
      const presentQuestion = document.querySelector('#question').innerHTML

      //add question as object property and answer as value 
      personalityData[`${presentQuestion}`] = selectedInput

      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      ////Add the answer score to the score array
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      const totalScore = score.reduce((total, currentNum) => total + currentNum);
      
  
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'All Done!';
      }
      //If the quiz is finished then we hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {

        //convert array of answers into json formatt
      const jsonAnswers = JSON.stringify(personalityData)
      console.log(jsonAnswers)

          container.style.display = 'none';
          alert("You belong to the personality class 1")
          result.innerHTML =
           `<h1>Done!</h1>
           <div class="summary">
              <h1>Summary</h1>
              <p>Below is your personality trait based on your result:</p>
              
          </div>
          <button class="restart">Restart Quiz</button>
          
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      //remove last array value;
      score.pop();
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Fuction to reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      score = [];
      //Reload quiz to the start
      location.reload();
      }
  
  }
  
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',restartQuiz);


 