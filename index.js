let names = [
  "hi", "hey", "hello", "good morning", "good afternoon",
  ,"how are you", "how is life", "how are things",
  ,"what are you doing", "what is going on", "what is up",
  ,"how old are you",
  ,"who are you", "are you human", "are you bot", "are you human or bot",
  ,"who created you", "who made you",
  ,"your name please","your name","may i know your name","what is your name","what call yourself", "what is your name", "can you tell me your name",
  ,"i love you",
  ,"happy", "good", "fun", "wonderful", "fantastic", "cool",
  ,"bad", "bored", "tired",
  ,"help me", "tell me story", "tell me joke",
  ,"ah", "yes", "ok", "okay", "nice",
  ,"bye", "good bye", "goodbye", "see you later",
  ,"what should i eat today",
  ,"bro",
  ,"what", "why", "how", "where", "when",
  ,"no","not sure","maybe","no thanks",
  ,"",
  ,"haha","ha","lol","hehe","funny","joke",
  ,"how can I contact you", "what is your contact information", "can you share your contact details", "how do I reach you",
  ,"where are you from", "where do you live", "what is your hometown", "which city are you from",
  ,"tell me about yourself", "give me a summary of your profile", "introduce yourself", "what's your background",
  ,"what is your educational background", "where did you study", "what are your qualifications", "can you tell me about your education",
  ,"what are your technical skills", "list your technical skills", "what technologies do you know", "what are your core competencies",
  ,"tell me about your projects", "what projects have you worked on", "can you describe your projects", "what are your significant projects",
  ,"what is your work experience", "do you have any work experience", "where have you worked before", "can you tell me about your previous jobs",
  ,"do you have any research publications", "have you published any papers", "tell me about your research work", "do you have any published research",
  ,"what are your achievements", "have you won any awards", "tell me about your accomplishments", "what are your notable achievements",
  ,"do you have any certifications", "what certifications do you have", "can you list your certifications", "have you completed any courses",
  ,"what programming languages do you know", "which programming languages are you proficient in", "can you list the programming languages you know", "what coding skills do you have",
  ,"what web development skills do you have", "are you skilled in web development", "can you develop websites", "what are your web development competencies",
  ,"do you have any experience in mobile development", "have you worked on mobile apps", "can you develop mobile applications", "what mobile development skills do you possess",
  ,"do you know about software development processes", "are you familiar with SDLC", "what software development methodologies do you know", "do you understand Agile processes",
  ,"what computer science subjects are you familiar with", "which CS subjects do you know well", "can you list your knowledge in CS subjects", "what are your areas of expertise in computer science",
  ,"what's your favorite color", "do you have a favorite color", "what color do you like",
  ,"tell me a fun fact", "do you know any fun facts", "give me an interesting fact",
  ,"what's the weather like", "how's the weather", "what's the weather today",
  ,"do you like music", "what kind of music do you like", "what's your favorite music genre",
  ,"do you have hobbies", "what are your hobbies", "what do you like to do for fun",
  ,"can you dance", "do you like dancing", "are you good at dancing",
  ,"what's your favorite movie", "do you have a favorite movie", "what movie do you like best",
  ,"what's your favorite food", "do you have a favorite dish", "what do you like to eat",
  ,"do you play sports", "what's your favorite sport", "are you into sports",
  ,"what's your dream job", "do you have a dream job", "what's your ideal job"

];
//Sort names in ascending order
let sortedNames = names.sort();

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )

}

//reference
let input1 = document.getElementById("input");

//Execute function on keyup
input1.addEventListener("keyup", (e) => {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {
    //convert input to lowercase and compare with each string

    if (
      i.toLowerCase().includes(input1.value.toLowerCase()) &&
      input1.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, input1.value.length) + "</b>";
      word += i.substr(input1.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});
function displayNames(value) {
  input1.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}