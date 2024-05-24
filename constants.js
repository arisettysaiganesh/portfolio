// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  ["your name please","your name","may i know your name","what is your name","what call yourself", "what is your name", "can you tell me your name"],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"],
  ["how can I contact you", "what is your contact information", "can you share your contact details", "how do I reach you"],
  ["where are you from", "where do you live", "what is your hometown", "which city are you from"],
  ["tell me about yourself", "give me a summary of your profile", "introduce yourself", "what's your background"],
  ["what is your educational background", "where did you study", "what are your qualifications", "can you tell me about your education"],
  ["what are your technical skills", "list your technical skills", "what technologies do you know", "what are your core competencies"],
  ["tell me about your projects", "what projects have you worked on", "can you describe your projects", "what are your significant projects"],
  ["what is your work experience", "do you have any work experience", "where have you worked before", "can you tell me about your previous jobs"],
  ["do you have any research publications", "have you published any papers", "tell me about your research work", "do you have any published research"],
  ["what are your achievements", "have you won any awards", "tell me about your accomplishments", "what are your notable achievements"],
  ["do you have any certifications", "what certifications do you have", "can you list your certifications", "have you completed any courses"],
  ["what programming languages do you know", "which programming languages are you proficient in", "can you list the programming languages you know", "what coding skills do you have"],
  ["what web development skills do you have", "are you skilled in web development", "can you develop websites", "what are your web development competencies"],
  ["do you have any experience in mobile development", "have you worked on mobile apps", "can you develop mobile applications", "what mobile development skills do you possess"],
  ["do you know about software development processes", "are you familiar with SDLC", "what software development methodologies do you know", "do you understand Agile processes"],
  ["what computer science subjects are you familiar with", "which CS subjects do you know well", "can you list your knowledge in CS subjects", "what are your areas of expertise in computer science"],
  ["what's your favorite color", "do you have a favorite color", "what color do you like"],
  ["tell me a fun fact", "do you know any fun facts", "give me an interesting fact"],
  ["what's the weather like", "how's the weather", "what's the weather today"],
  ["do you like music", "what kind of music do you like", "what's your favorite music genre"],
  ["do you have hobbies", "what are your hobbies", "what do you like to do for fun"],
  ["can you dance", "do you like dancing", "are you good at dancing"],
  ["what's your favorite movie", "do you have a favorite movie", "what movie do you like best"],
  ["what's your favorite food", "do you have a favorite dish", "what do you like to eat"],
  ["do you play sports", "what's your favorite sport", "are you into sports"],
  ["what's your dream job", "do you have a dream job", "what's your ideal job"]
];

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  ["Fine... how are you?","Pretty well, how are you?","Fantastic, how are you?"],
  ["Nothing much","About to go to sleep","Can you guess?","I don't know actually"],
  ["I am infinite"],
  ["I am just a bot made by Sai Ganesh", "I am a bot made by Sai Ganesh. What are you?"],
  ["Sai Ganesh and my true God, JavaScript"],
  ["My name is Sai Ganesh Arisetty.", "I am Sai Ganesh Arisetty.", "You can call me Sai Ganesh Arisetty.", "I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time...", "Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"],
  ["You can contact me at +91 707 501 3392 or via email at arisettysaiganesh2003@gmail.com.", "My phone number is +91 707 501 3392 and my email is arisettysaiganesh2003@gmail.com.", "Feel free to reach out to me at +91 707 501 3392 or arisettysaiganesh2003@gmail.com."],
  ["I am from Vizianagaram, Andhra Pradesh.", "My hometown is Vizianagaram, Andhra Pradesh.", "I live in Vizianagaram, located in Andhra Pradesh."],
  ["I am a passionate Bachelor of Technology student seeking a dynamic role in Software Engineering to apply my problem-solving skills and creativity. I am committed to contributing to the success of the company while expanding my knowledge and expertise in Software Engineering.", "As a B.Tech student in Information Technology, I aim to leverage my problem-solving skills and creativity in a Software Engineering role, contributing to the company's success and expanding my expertise.", "I am currently pursuing a B.Tech in Information Technology, seeking opportunities in Software Engineering to apply my skills and creativity."],
  ["I am currently pursuing a B.Tech. in Information Technology at Aditya Institute of Technology And Management, affiliated with JNTUGV, with a CGPA of 8.5/10.", "I study Information Technology at Aditya Institute of Technology And Management, JNTUGV Affiliated, maintaining a CGPA of 8.5/10.", "I am a B.Tech student in Information Technology at Aditya Institute of Technology And Management, with a CGPA of 8.5/10."],
  ["My technical skills include programming languages like Python, C++, Java; web development (front end & back end full stack development); mobile development (MDM); software development processes (SDLC, Agile, troubleshooting); and computer science subjects like data structures, computer architecture, and Linux.", "I am skilled in Python, C++, Java, full stack web development, mobile development (MDM), SDLC, Agile, troubleshooting, and have knowledge in data structures, computer architecture, and Linux.", "I possess technical skills in Python, C++, Java, full stack web development, mobile development (MDM), SDLC, Agile, troubleshooting, and core computer science subjects like data structures, computer architecture, and Linux."],
  ["I have worked on projects like 'Automatic Question Paper Generation for Higher Education' using PHP, SQL, HTML, and CSS, and 'Crop Disease Detection Using ML Techniques' using IoT, ML, computer vision, and image processing.", "My projects include 'Automatic Question Paper Generation for Higher Education' (PHP, SQL, HTML, CSS) and 'Crop Disease Detection Using ML Techniques' (IoT, ML, computer vision, image processing).", "Notable projects I have worked on are 'Automatic Question Paper Generation for Higher Education' and 'Crop Disease Detection Using ML Techniques', utilizing technologies like PHP, SQL, HTML, CSS, IoT, ML, computer vision, and image processing."],
  ["I worked as a Software Developer Intern at Digicta Solutions Private Limited in Bangalore from June 2023 to July 2023, participating in full stack web development projects, honing diagnostic testing with coding abilities, and working closely with analytical and cross-functional teams.", "As a Software Developer Intern at Digicta Solutions Private Limited (June 2023 - July 2023), I engaged in full stack web development, diagnostic testing with coding abilities, and collaborated with analytical and cross-functional teams.", "During my internship at Digicta Solutions Private Limited in Bangalore (June 2023 - July 2023), I worked on full stack web development, improved my diagnostic testing and coding skills, and collaborated with various teams to meet project deadlines."],
  ["Yes, I have a research publication titled 'Artificial Intelligence Tools and Their Usage in Health Care Access and Quality' presented at the IEEE International Conference on 22 Sep 2023, organized by New Horizon College of Engineering, Bengaluru.", "I have a research paper titled 'Artificial Intelligence Tools and Their Usage in Health Care Access and Quality', which was presented at the IEEE International Conference on 22 Sep 2023.", "My research publication is titled 'Artificial Intelligence Tools and Their Usage in Health Care Access and Quality', presented at the IEEE International Conference on 22 Sep 2023, organized by New Horizon College of Engineering."],
  ["I won a consolation prize in Project Expo at SASI Engineering College, East Godavari, and first prize in a Group Discussion Competition conducted by PSCMR College of Engineering.", "My achievements include a consolation prize in Project Expo at SASI Engineering College, and first prize in a Group Discussion Competition at PCRMT College of Engineering.", "I have won a consolation prize in Project Expo at SASI Engineering College and first prize in a Group Discussion Competition at PCRMT College of Engineering."],
  ["I have certifications in Java Full-Stack Development from the Digital Skills Readiness Program by Wipro Talent Next, and Microsoft Azure Fundamentals AZ-900 issued by Microsoft.", "My certifications include Java Full-Stack Development (Wipro Talent Next) and Microsoft Azure Fundamentals AZ-900.", "I am certified in Java Full-Stack Development by Wipro Talent Next and Microsoft Azure Fundamentals AZ-900 by Microsoft."],
  ["I know Python, C++, and Java.", "My programming languages include Python, C++, and Java.", "I am proficient in Python, C++, and Java."],
  ["I have skills in front end and back end full stack web development.", "I am experienced in full stack web development, including both front end and back end technologies.", "My web development skills cover front end and back end full stack development."],
  ["Yes, I have experience in mobile development, specifically in Mobile Device Management (MDM).", "I have worked on mobile development projects, particularly in Mobile Device Management (MDM).", "I possess experience in mobile development, focusing on Mobile Device Management (MDM)."],
  ["I am familiar with software development life cycle (SDLC) and Agile methodologies, as well as troubleshooting techniques.", "I understand SDLC, Agile methodologies, and have troubleshooting skills.", "My knowledge includes SDLC, Agile processes, and troubleshooting techniques."],
  ["I am familiar with data structures, computer architecture, and Linux.", "My computer science knowledge includes data structures, computer architecture, and Linux.", "I have studied data structures, computer architecture, and Linux."],["I love blue!", "My favorite color is blue.", "Blue is the best color, don't you think?"],
  ["Did you know honey never spoils?", "Octopuses have three hearts.", "Bananas are berries, but strawberries aren't!"],
  ["I can't check the weather, but you can use a weather app.", "Why not look outside and see for yourself?", "I don't have weather data, but it’s always a good day to code!"],
  ["I enjoy all kinds of music!", "Music is great, isn't it?", "I like whatever music you like!"],
  ["I love coding and learning new things.", "My hobby is interacting with you!", "Helping people is what I do for fun."],
  ["I can't dance, but I bet you'd be great at it!", "Dancing sounds like fun!", "I enjoy watching people dance."],
  ["I don't have a favorite movie, but I hear Inception is great.", "So many movies to choose from!", "I think I'd like any movie you suggest."],
  ["Pizza is always a good choice.", "I think I'd like sushi.", "How about some ice cream?"],
  ["I don't play sports, but I think soccer is fascinating.", "Sports are a great way to stay active!", "Do you play any sports?"],
  ["Being a helpful assistant is my dream job.", "I love what I do!", "Helping you is the best job I could ask for."],
   
  
];


// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]